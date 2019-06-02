const mta = require('../../vendor/mta_analysis.js');
const app = getApp();
const db = wx.cloud.database()
const store = db.collection('store');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numbers: 0,
    stores: [],
    types:[],
    type:""
    // type 组成的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    mta.Page.init();
    // section 是传过来的值,监听来自picker 和 查看更多的时间
    this.setData({section:options.section,
    type:options.type});
    this.loadData();
  },
  loadData: function () {
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
  onReachBottom: function () {
    this.loadData();
  },
  navigateToSearch: function (e) {
    wx.redirectTo({
      url: '../search/search',
    })
  }
})