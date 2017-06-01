//app.js
App({
    onLaunch: function () {

        var testDATA = {
            1496038089341: {
                password: "sdfwewrwerwer",
                tag: "京东",
                username: "x04440x",
                isCheckTimeout: true,
                timeoutDate: "2017-1-1"
            },
            1496038089342: {
                password: "erwerDCERDWER",
                tag: "京西",
                username: "x04440x",
                isCheckTimeout: true,
                timeoutDate: "2018-01-01"
            },
            1496038089343: {
                password: "RFWE$#5%####",
                tag: "京南",
                username: "x04440x",
                isCheckTimeout: true,
                timeoutDate: "2017-5-4"
            },
            1496038089344: {
                password: "fd#45?><_+}{g",
                tag: "京北",
                username: "x04440x",
                isCheckTimeout: false,
                timeoutDate: "2017-12-12"
            }
        };
        this.DATA = wx.getStorageSync('DATA') || {};

        var testCONFIG = {

            //自动生成随机密码的条件
            autoGenerate_num: false,
            autoGenerate_symbol: true,
            autoGenerate_upcase: true,
            autoGenerate_lowcase: true,

            autoGenerate_range: [6, 8, 11, 13, 17],
            autoGenerate_size_index: 0
        }
        this.CONFIG = wx.getStorageSync('CONFIG') || testCONFIG;
    },
    saveDATA: function () {
        wx.setStorageSync('DATA', this.DATA)
    },
    saveCONFIG: function () {
        wx.setStorageSync('CONFIG', this.CONFIG)
    }
})