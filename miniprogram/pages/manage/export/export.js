var app = getApp()

Page({
    exportData: function () {
        wx.setClipboardData({
            data: JSON.stringify(app.DATA),
            success: function () {
                wx.showToast({
                    title: '已复制到剪贴板',
                    icon: 'success',
                    duration: 700
                })
            }
        })
    }
}) 