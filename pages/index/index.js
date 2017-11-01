//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
    applyOff: function (op) {
    wx.request({
      url: 'http://localhost:8080/yoga/hello',
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log('success:'+res)
      },
      fail: function (error) {
        console.log(error);
      }
    })
  },
})