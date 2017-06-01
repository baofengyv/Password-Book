var util = require('../../../utils/util.js')

var app = getApp()

Page({
    onLoad: function (q) {

        this.DATAId = q.id

        this.setData(
            Object.assign(app.DATA[q.id], app.CONFIG)
        )
    },

    // 将输入的内容同步到page对象的data中
    tagInput: function (e) {
        this.data.tag = e.detail.value
    },
    usernameInput: function (e) {
        this.data.username = e.detail.value
    },
    passwordInput: function (e) {
        this.data.password = e.detail.value
    },

    // 清空输入按钮
    clearTag: function () {
        this.setData({
            tag: ""
        })
    },
    clearUsername: function () {
        this.setData({
            username: ""
        })
    },
    clearPassword: function () {
        this.setData({
            password: ""
        })
    },


    autoGenerate_Change: function () {

        var newValue = !this.data.autoGenerate

        // 如果打开了自动生成密码，生成一个新的密码
        var newPassword = ""
        if (newValue)
            newPassword = util.getNewPassword(app.CONFIG)

        this.setData({
            autoGenerate: newValue,
            password: newPassword
        })
    },
    autoGenerate_num_Change: function () {

        var newValue = !this.data.autoGenerate_num

        // 更新app配置值
        app.CONFIG.autoGenerate_num = newValue
        app.saveCONFIG()

        var newPassword = util.getNewPassword(app.CONFIG)

        this.setData({
            autoGenerate_num: newValue,
            password: newPassword
        })
    },
    autoGenerate_symbol_Change: function () {
        var newValue = !this.data.autoGenerate_symbol

        // 更新app配置值
        app.CONFIG.autoGenerate_symbol = newValue
        app.saveCONFIG()

        var newPassword = util.getNewPassword(app.CONFIG)

        this.setData({
            autoGenerate_symbol: newValue,
            password: newPassword
        })
    },
    autoGenerate_upcase_Change: function () {
        var newValue = !this.data.autoGenerate_upcase

        // 更新app配置值
        app.CONFIG.autoGenerate_upcase = newValue
        app.saveCONFIG()

        var newPassword = util.getNewPassword(app.CONFIG)

        this.setData({
            autoGenerate_upcase: newValue,
            password: newPassword
        })
    },
    autoGenerate_lowcase_Change: function () {
        var newValue = !this.data.autoGenerate_lowcase

        // 更新app配置值
        app.CONFIG.autoGenerate_lowcase = newValue
        app.saveCONFIG()

        var newPassword = util.getNewPassword(app.CONFIG)

        this.setData({
            autoGenerate_lowcase: newValue,
            password: newPassword
        })
    },
    passwordSizeChange: function (e) {

        var newValue = e.detail.value

        // 更新app配置值
        app.CONFIG.autoGenerate_size_index = newValue
        app.saveCONFIG()

        var newPassword = util.getNewPassword(app.CONFIG)

        this.setData({
            autoGenerate_size_index: newValue,
            password: newPassword
        })
    },
    timeoutCheck_Change: function () {

        var newValue = !this.data.isCheckTimeout

        this.setData({
            isCheckTimeout: newValue
        })
    },
    timeoutDateChange: function (e) {
        this.setData({
            timeoutDate: e.detail.value
        })
    },

    // 保存按钮
    savePassword: function () {

        // 保存新密码数据
        var id = this.DATAId

        app.DATA[id] = {

            tag: this.data.tag,
            username: this.data.username,
            password: this.data.password,

            isCheckTimeout: this.data.isCheckTimeout,
            timeoutDate: this.data.timeoutDate
        }
        app.saveDATA()


        wx.switchTab({
            url: '/pages/list/list'
        })
    },
    // 删除密码
    deletePassword: function () {

        var _that = this

        wx.showActionSheet({
            itemList: ['确认删除 !!'],
            itemColor: "#f44336",
            success: function (op) {
                // 点击取消 直接返回
                if (op.cancel)
                    return;

                app.DATA[_that.DATAId].delete = true
                app.saveDATA()

                wx.navigateBack()
            }
        })
    }
})