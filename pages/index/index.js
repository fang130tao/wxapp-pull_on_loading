Page({
	data: {
		list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		scrollTop: 0,
		loaded_over: true
	},

	onLoad: function() {
	},

	lower: function(e) {
		if (!this.data.loaded_over) {
			return
		}

// 		wx.showLoading({
// 			title: '拼命加载中'
// 		})

		this.data.list.push('test1', 'test2', 'test3', 'test4', 'test5');
		this.data.loaded_over = false; // 标记正在加载
		var scrollTop = this.data.top + 100;

		setTimeout(() => {
			this.setData({
				list: this.data.list,
				scrollTop: scrollTop
			})

			wx.hideLoading()
			this.data.loaded_over = true

		}, 2000)

	},
	scroll: function(e) {
		this.data.top = e.detail.scrollTop
		console.log(this.data.top)
	}
})
