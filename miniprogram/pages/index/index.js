// pages/index/index.js
const mta = require('../../vendor/mta_analysis.js');
const app = getApp();
const config = require('../../config.js');
const db = wx.cloud.database()
const store = db.collection('store');
const userInfo = db.collection('userInfo');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  GoTOTravel: function () {
    wx.navigateTo({
      url: "../travel/travel",
    })
  },
  /**
* 跳转到美食界面
*/
  GoTOFood: function () {
    wx.navigateTo({
      url: "../food/food",
    })
  },
  GoTOStudy: function(){
    wx.navigateTo({
      url: '../study/study',
    })
  },
  GoTOOffice:function(){
    wx.navigateTo({
      url: '../work/work',
    })
  },
  GoTOSport:function(){
    wx.navigateTo({
      url: '../sport/sport',
    })
  },
  GotoMap:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  }

})