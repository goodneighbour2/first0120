Page({
    data: {
        count: 0
    },
    countClick: function () {
        this.setData({
            count: this.data.count + 1
        });        
    }
    // handleTap: function () {
    //   wx.navigateTo({
    //   url: '/mypages/index/index?url=https://goodneighbour2.github.io/lawtool/#/'
    // });
  // }
});