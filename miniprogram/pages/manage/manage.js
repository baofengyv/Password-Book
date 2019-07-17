var util = require('../../utils/util.js')

var app = getApp()

Page({
    show_backup: function() {
      wx.navigateTo({
        url: './backup/backup'
      })
    },
    show_import:function(){
        wx.navigateTo({
            url: './import/import'
        })
    },
    show_export:function(){
        wx.navigateTo({
            url: './export/export'
        })
    },
    show_manual:function(){
        wx.navigateTo({
            url: './manual/manual'
        })
    },
    show_about:function(){
        wx.navigateTo({
            url: './about/about'
        })
    },
    show_donate: function(){
        wx.navigateTo({
            url: './donate/donate'
        })
    }
}) 