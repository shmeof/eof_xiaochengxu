//app.js
App({
  onLaunch: function (options, referrerInfo) {
    console.log("这是onLaunch")
    console.log("onLaunch:" + options.path + "," + options.scene + "," + options.query + "," + options.shareTicket)
    console.log("onLaunch:" + referrerInfo)
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function (options){
    console.log("这是onShow")
  },
  onHide:function(){
    console.log("这是onHide")
  },
  onError:function(msg){
    console.log("这是onError")
    console.log(msg)
  },
  onPageNotFound: function () {
    console.log("这是onPageNotFound")
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    testGlobal:"i am global"
  }
})