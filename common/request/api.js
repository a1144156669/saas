const api = {
	// 公用
	common: {
		allocatProgram: {
			url: '/api/wxApi/allocatProgram',
			method: 'GET',
			desc: '小程序信息查询'
		},
		init: {
			url: '/addons/drama/index/init',
			method: 'GET',
			desc: '初始信息'
		},
		wxmpLogin: {
			url: '/addons/drama/user/wxMinilogin',
			method: 'POST',
			desc: '微信小程序登录'
		},
		pay: {
			url: '/addons/drama/pay/prepay',
			method: 'POST',
			desc: '支付'
		},
		upload: {
			url: '/addons/drama/index/upload',
			method: 'POST',
			desc: '上传文件'
		},
		richtext: {
			url: '/addons/drama/index/richtext',
			method: 'GET',
			desc: '协议内容'
		},
		wxmpQrcode: {
			url: '/addons/drama/share/qrcode',
			method: 'GET',
			desc: '微信小程序分享小程序码'
		},
		swiper: {
			url: '/addons/drama/block/index',
			method: 'GET',
			desc: '轮播图'
		},
		module: {
			url: '/addons/drama/module/index',
			method: 'GET',
			desc: '功能模块'
		},
		update: {
			url: '/addons/drama/index/version',
			method: 'GET',
			desc: 'app版本检测'
		}
	},
	// 登录
	login: {
		wxmpLogin: {
			url: '/api/wxApi/filmDramaMemberAdd',
			method: 'GET',
			desc: '微信小程序登录'
		},
	},
	// 用户
	user: {
		info: {
			url: '/addons/drama/user/index',
			method: 'GET',
			desc: '个人信息'
		},
		vip: {
			url: '/addons/drama/vip/index',
			method: 'GET',
			desc: '会员规格'
		},
		updateInfo: {
			url: '/addons/drama/user/profile',
			method: 'POST',
			desc: '修改用户信息'
		},
		delete: {
			url: '/addons/drama/user/delete',
			method: 'GET',
			desc: '删除用户'
		},
		task: {
			url: '/addons/drama/task/index',
			method: 'GET',
			desc: '获取积分任务'
		},
		taskFinish: {
			url: '/addons/drama/task/add',
			method: 'POST',
			desc: '完成任务'
		},
		cdkey: {
			url: '/addons/drama/cryptocard/decrypt_card',
			method: 'GET',
			desc: '兑换卡密'
		},
		share: {
			url: '/addons/drama/wechat/jssdk',
			method: 'POST',
			desc: '微信公众号分享'
		}
	},
	// 视频
	video: {
		handpickList: {
			url: '/api/wxApi/handpickList',
			method: 'GET',
			desc: '精选剧集列表'
		},
		classify: {
			url: '/api/wxApi/filmDlassifyList',
			method: 'GET',
			desc: '视频分类列表查询'
		},
		filmDramaList: {
			url: '/api/wxApi/filmDramaList',
			method: 'GET',
			desc: '剧目列表查询'
		},
		menu: {
			url: '/addons/drama/video/detail',
			method: 'GET',
			desc: '节目单'
		},
		play: {
			url: '/addons/drama/video/getEpisodesUrl',
			method: 'POST',
			desc: '获取视频播放链接'
		},
		recommend: {
			url: '/api/wxApi/playLink',
			method: 'GET',
			desc: '获取视频'
		},
		filmLikeCollectList: {
			url: '/api/wxApi/filmLikeCollectList',
			method: 'GET',
			desc: '获取收藏追剧列表'
		},
		filmViewHistoryList: {
			url: '/api/wxApi/filmViewHistoryList',
			method: 'GET',
			desc: '获取观看历史列表'
		},
		addRecord: {
			url: '/addons/drama/video/log',
			method: 'POST',
			desc: '添加追剧和保存视频进度'
		},
		deleteRecord: {
			url: '/addons/drama/video/delLog',
			method: 'POST',
			desc: '取消追剧和删除播放记录'
		},
		getRecord: {
			url: '/addons/drama/video/logList',
			method: 'GET',
			desc: '获取播放记录'
		},
		likes: {
			url: '/api/wxApi/filmDramaSeriesSecond',
			method: 'POST',
			desc: '点赞'
		}
	},
	//微信充值会员、金币
	wchatapi: {
		allocatRechargeList: {
			url: '/api/wxApi/allocatRechargeList',
			method: 'GET',
			desc: '查询充值设置'
		},
		rechargePackageList: {
			url: '/api/wxApi/rechargePackageList',
			method: 'GET',
			desc: '金币充值套餐列表'
		},
		orderAccountRechargeList: {
			url: '/api/wxApi/orderAccountRechargeList',
			method: 'GET',
			desc: '充值余额订单列表'
		},
		rechargePackage: {
			url: '/api/wxApi/rechargePackage',
			method: 'POST',
			desc: '金币充值'
		},
		vipPackageList: {
			url: '/api/wxApi/vipPackageList',
			method: 'GET',
			desc: '会员充值套餐列表'
		},
		rechargeVip: {
			url: '/api/wxApi/rechargeVip',
			method: 'POST',
			desc: '会员充值'
		},
		vipEequityList: {
			url: '/api/wxApi/vipEequityList',
			method: 'GET',
			desc: '权益套餐列表'
		},
		orderVipRechargeList: {
			url: '/api/wxApi/orderVipRechargeList',
			method: 'GET',
			desc: '充值订单列表'
		},
		orderPayRechargeList: {
			url: '/api/wxApi/orderPayRechargeList',
			method: 'GET',
			desc: '消费订单列表'
		},
		allocatProgram: {
			url: '/api/wxApi/allocatProgram',
			method: 'GET',
			desc: '小程序信息'
		},
		allocatFunctionList: {
			url: '/api/wxApi/allocatFunctionList',
			method: 'GET',
			desc: '功能管理列表'
		},
		filmViewHistoryList: {
			url: '/api/wxApi/filmViewHistoryList',
			method: 'GET',
			desc: '历史记录'
		},
		filmDramaMember: {
			url: '/api/wxApi/filmDramaMember',
			method: 'GET',
			desc: '会员信息'
		},
		allocatProtocolList: {
			url: '/api/wxApi/allocatProtocolList',
			method: 'GET',
			desc: '协议管理列表'
		},
		allocatProtocolById: {
			url: '/api/wxApi/allocatProtocolById',
			method: 'GET',
			desc: '协议内容id查询'
		},
	},
	// 虚拟支付
	virtualPayment: {
		virtualPaymentNotifyUrl: {
			url: '/api/wxApi/virtualPaymentNotifyUrl',
			method: 'POST',
			desc: '虚拟支付-充值回调'
		},
		virtualPaymentPackage: {
			url: '/api/wxApi/virtualPaymentPackage',
			method: 'POST',
			desc: '虚拟支付-充值虚拟币'
		},
		virtualPaymentVip: {
			url: '/api/wxApi/virtualPaymentVip',
			method: 'POST',
			desc: '虚拟支付-充值会员'
		}
	},
	// 播放会员充值购买
	player: {
		filmDlassifyList: {
			url: '/api/wxApi/filmDlassifyList',
			method: 'GET',
			desc: '分类列表查询'
		},
		rechargePackageList: {
			url: '/api/wxApi/rechargePackageList',
			method: 'GET',
			desc: '充值套餐列表'
		},
		rechargePackage: {
			url: '/api/wxApi/rechargePackage',
			method: 'POST',
			desc: '购买虚拟币'
		},
		filmDramaMember: {
			url: '/api/wxApi/filmDramaMember',
			method: 'GET',
			desc: '查询会员信息'
		},
		buyDramaSeries: {
			url: '/api/wxApi/buyDramaSeries',
			method: 'POST',
			desc: '购买剧集'
		},
	},
	// 账户管理
	accountKeeper:{
		filmDramaMember:{
			url: '/api/wxApi/filmDramaMember',
			method: 'GET',
			desc: '会员信息查询'
		},
		orderVipRechargeList:{
			url: '/api/wxApi/orderVipRechargeList',
			method: 'GET',
			desc: '充值订单列表-充值记录'
		},
		orderPayRechargeList:{
			url: '/api/wxApi/orderPayRechargeList',
			method: 'GET',
			desc: '消费订单列表-消费记录'
		}
	}
}

export default api;