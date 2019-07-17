var app = getApp()

Page({
    importData: function () {

        wx.getClipboardData({
            success: function (r) {

                try {

                    var data = JSON.parse(r.data)

                    wx.showModal({
                        title: '现有数据将被覆盖!!',
                        content: '确定要导入吗？',
                        success: function (res) {
                            if (res.confirm) {

                                // 覆盖掉现有的数据
                                app.DATA = data
                                app.saveDATA()

                                // 跳转到密码列表页
                                wx.switchTab({
                                    url: '/pages/list/list'
                                })

                            }
                        }
                    })

                } catch (e) {
                    wx.showModal({
                        title: '无效的JSON字符串',
                        content: '请检查剪贴板中的数据!',
                        showCancel: false
                    })
                }
            }
        })


    }
}) 