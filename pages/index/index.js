//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    name: '真实姓名'
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
      const today = new Date();
      const todayStr = today.getFullYear() + '-'+(today.getMonth() + 1)+'-'+ today.getDay();
      that.setData({
        userInfo:userInfo,
        name: userInfo.nickName,
        offDate: todayStr
      })      
    })
  },
  bindNameChange: function(e){
    this.setData({
      userInfo: this.data.userInfo,
      name: e.detail.value,
      offDate: this.data.offDate
    })    
  },
  bindDateChange: function(e){
    this.setData({
      userInfo:this.data.userInfo,
      name:this.data.name,
      offDate:e.detail.value
    }),
    console.log(this.data);
  },  
    applyOff: function (op) {
    wx.request({
      url: 'http://localhost:8080/yoga/applyOff',
      data: {
        wechatNickname:this.data.userInfo.nickName,
        name:this.data.name,
        offDate:this.data.offDate
      },
      method: 'post',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log('success:'+res)
      },
      fail: function (error) {
        console.log(error);
      }
    })
  },
})
