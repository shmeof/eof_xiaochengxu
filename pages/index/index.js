//index.js
//获取应用实例
var app = getApp()
console.log("globalData is:" + app.globalData.testGlobal)

Page({
  data: {
    motto: '首页',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad:function(){
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function () {
    console.log('onReady')
  },
  onShow: function () {
    console.log('onShow')
  },
  onHide: function () {
    console.log('onHide')
  },
  onUnload: function () {
    console.log('onUnload')
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  onReachBottom: function () {
    console.log('onReachBottom')
  },
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  },
  onPageScroll: function () {
    console.log('onPageScroll')
  },
  onTabItemTap: function () {
    console.log('onTabItemTap')
  }
})
