// pages/study/study.js
const mta = require('../../vendor/mta_analysis.js');
const app = getApp();
const db = wx.cloud.database()
const store = db.collection('store');
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
    var postList = [{
      object: { date: "May 8 2019" }
      ,
      title: "具有艺术价值的图书馆——李政道图书馆",
      postImg: "/images/post/post-1.jpg",
      avatar: "/images/avatar/avatar-1.png",
      content: "科学和艺术的有机结合，诺奖大师告诉你如何做出选择",
      readingNum:92,
      collectionNum:{
        array:[108]
      },
      commentNum:7
    },
      {
        object: { date: "May 8 2019" }
        ,
        title: "文学图书馆——包玉刚图书馆",
        postImg: "/images/post/post-2.jpg",
        avatar: "/images/avatar/avatar-2.png",
        content: "轻轻地我走了",
        readingNum: 92,
        collectionNum: {
          array: [108]
        },
        commentNum: 7
      },
    ]
    this.setData({postList:postList})    
    // wx.showLoading({
    //   title: '数据加载中...',
    // })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})