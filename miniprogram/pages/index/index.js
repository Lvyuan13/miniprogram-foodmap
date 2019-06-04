// pages/index/index.js
const mta = require('../../vendor/mta_analysis.js');
const app = getApp();
const config = require('../../config.js');
const db = wx.cloud.database()
const store = db.collection('store');
// const picture = db.collection('picture');
const userInfo = db.collection('userInfo');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // numbers: 0,
    // picture: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mta.Page.init();
    this.loadData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  loadData: function () {
    //从云端加载图片数据，主界面用到的图片全部上传到了名为picture的云端中
    // db.collection('picture').where(
    //   {
    //     _id:'232a9248-df41-48c0-9024-acea039ce77f'
    //   }
    // ).get().then(res=>{
    //   this.setData({
    //     picture: res.data[0]
    //     //仅仅在picture中加入一条记录，所以是加入数据库数组的第一条
    //   })
    // });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  navigateToSearch: function (e) {
    wx.redirectTo({
      url: '../search/search',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
 * 跳转到旅游界面
 */
  search:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  }

})