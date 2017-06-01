var app = getApp()

Page({
    onShow: function () {
        this._renderAllAppDatas()
    },
    onlongtap: function (e) {
        var id = e.currentTarget.id

        wx.navigateTo({
            url: './edit/edit?id=' + id
        })

    },
    ontap: function (e) {
        var id = e.currentTarget.id

        var password = app.DATA[id].password


        wx.setClipboardData({
            data: password,
            success: function () {
                wx.showToast({
                    title: '已复制到剪贴板',
                    icon: 'success',
                    duration: 700
                })
            }
        })

    },
    // 将输入的内容同步到page对象的data中
    queryInput: function (e) {
        this.data.query = e.detail.value
    },
    searchBarInputConfirm: function (e) {
        this._renderAllAppDatas()

    },
    cancelSearch: function () {
        this.setData({
            query: ""
        })
        this._renderAllAppDatas()
    },
    _renderAllAppDatas: function () {
        // 处理下 是否过期等
        var DATAs = []
        var NOW = Date.now()

        // 是否是 一条数据也没有？
        var isNoDATA = true

        // 从存储的对象形式 转换成数组形式供循环输出
        for (var key in app.DATA) {

            // 复制对象
            var d = JSON.parse(JSON.stringify(app.DATA[key]))

            // 如果已经删除不显示
            if (d.delete)
                continue

            isNoDATA = false

            // 如果过滤条件非空 则应用过滤条件
            var query = this.data.query
            if (query && (d.tag.indexOf(query) < 0 && d.username.indexOf(query) < 0)) {

                // 根据传来的条件进行过滤
                // 不符合的跳过
                continue
            }

            //如果
            d.id = key

            // 如果检查是否超时
            d.isTimeout = d.isCheckTimeout && (new Date(d.timeoutDate) < NOW) ? true : false

            DATAs.push(d)
        }

        this.setData({
            DATAs: DATAs,
            isNoDATA: isNoDATA,
            tipText: "尚无记录",
            now: NOW
        })
    }
})