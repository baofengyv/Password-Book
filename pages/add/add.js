var util = require('../../utils/util.js')

var app = getApp()

Page({
    INIT_DATA: {
        //默认过期时间为： 三个月后 @todo 这个将可以配置
        timeoutDate: util.getDateAfterNMonth(3),
        autoGenerate: false,
        isCheckTimeout: false,

        tag: "",
        username: "",
        password: ""
    },
    onLoad: function (options) {
        this.setData(Object.assign(this.INIT_DATA, app.CONFIG))
    },

    onShow: function () {
        console.log("on show")
        // this.setData(Object.assign(this.data, app.CONFIG))

        this.setData(this.data)

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

        // // 更新app配置值
        // app.CONFIG.autoGenerate = newValue
        // app.saveCONFIG()

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
    saveNewPassword: function () {

        // 保存新密码数据
        var id = (new Date().getTime())
        app.DATA[id] = {
            
            tag: this.data.tag,
            username: this.data.username,
            password: this.data.password,

            isCheckTimeout: this.data.isCheckTimeout,
            timeoutDate: this.data.timeoutDate
        };
        app.saveDATA()

        this.setData(this.INIT_DATA)

        wx.switchTab({
            url: '/pages/list/list'
        })
    }
}) 