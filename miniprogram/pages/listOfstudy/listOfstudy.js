const mta = require('../../vendor/mta_analysis.js');
const app = getApp();
const db = wx.cloud.database()
const store = db.collection('study');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numbers: 0,
    stores: [],
    type:"",
    array: ['图书馆', '自习室', '上课地点', '学术讲座']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      type: options.type
    });
    mta.Page.init();
    this.loadData();
  },
  loadData: function() {
    store.skip(this.data.numbers).get().then(res => {
      /**
       * 如果没有数据，就提示没有攻略了，并返回。
       */
      if (res.data.length == 0) {
        wx.showToast({
          title: '没有别的攻略了！',
          icon: 'none'
        });
        return;
      }
      this.setData({
        stores: this.data.stores.concat(res.data),
        numbers: this.data.numbers + res.data.length
      });
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.loadData();
  },
  bindPickerChange: function (e) {
    this.setData({
      type: this.data.array[e.detail.value]
    })
    wx.navigateTo({
      url: '../list/list?type=' + this.data.type,
    })
  },
  navigateToSearch:function(e){
    wx.redirectTo({
      url: '../search/search',
    })
  }
})
