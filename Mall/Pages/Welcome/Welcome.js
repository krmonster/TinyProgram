// page({})函数用来注册一个页面。
// 其指定页面的初始数据、生命周期函数、事件处理函数等。
Page({
  data: {

  },
  go:function(){
    wx.navigateTo({
      url: '../Welcome_0/Welcome_0',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onShareAppMessage:function(){
    return{

    }
  }
})



