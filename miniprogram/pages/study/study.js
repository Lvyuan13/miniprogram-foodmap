const mta = require('../../vendor/mta_analysis.js');
const app = getApp();
const db = wx.cloud.database()
const store = db.collection('store');
// const picture=db.collection('picture');
const config = require('../../config.js');
const userInfo = db.collection('userInfo');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    numbers: 0,
    stores: [],
    type:"",
    section:"学习",
    array: ['图书馆', '自习室', '上课地点', '学术讲座']
    // types:array

  },

  getUserInfo: function (e) {
    if (e.detail.userInfo) {
      userInfo.get().then(res => {
        if (!res.data.length) {
          userInfo.add({
            data: e.detail.userInfo
          })
        }
        wx.cloud.callFunction({
          name: 'checkUserAuth'
        }).then(res => {
          if (res.result.data.is_administrator) {
            app.globalData.is_administrator = true;
            wx.showModal({
              title: '管理员登陆成功',
              content: '管理员您好，是否要进入新增界面？',
              success: res => {
                if (res.cancel == false && res.confirm == true) {
                  wx.navigateTo({
                    // 传标记值，在list中显示不同类型的框架
                    url: '../addOfstudy/addOfstudy',
                  })
                } else {
                  wx.showToast({
                    title: '您可以点击下方查看全部按钮管理已有数据',
                    icon: 'none'
                  });
                }
              }
            })
          } else {
            wx.showToast({
              title: '您不是管理员，无法添加评价！',
              icon: 'none'
            });
          }
        })
      })
    } else {
      // 处理未授权的场景
      wx.showModal({
        title: '授权失败',
        content: '您尚未授权获取您的用户信息，是否开启授权界面？',
        success: res => {
          if (res.confirm) {
            wx.openSetting({})
          }
        }
      })
    }
  },

  // bindPickerChange: function (e) {
  //   this.setData({
  //     type: this.data.array[e.detail.value]
  //   })
  //   wx.navigateTo({
  //     url: '../listOfstudy/listOfstudy?type={{type}}'  ,
  //   })
  // },
  bindPickerChange: function (e) {
    this.setData({
      type: this.data.array[e.detail.value],
    })
    wx.navigateTo({
      url: '../listOfstudy/listOfstudy?type=' + this.data.type+'&section='+this.data.section,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    mta.Page.init();
    this.loadData();
  },
  loadData: function () {
    store.skip(this.data.numbers).get().then(res => {
      /**
       * 如果没有数据，就提示没有攻略了，并返回。
       */
      this.setData({
        stores: this.data.stores.concat(res.data),
        numbers: this.data.numbers + res.data.length
      });
    });
    db.collection('picture').where(
      {
        _id: '232a9248-df41-48c0-9024-acea039ce77f'
      }
    ).get().then(res => {
      this.setData({
        picture: res.data[0]
        //仅仅在picture中加入一条记录，所以是加入数据库数组的第一条
      })
    });
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadData();
  },
  navigateToSearch: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  }
})