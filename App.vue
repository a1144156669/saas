<script>
	const playletPlugin = requirePlugin("playlet-plugin");
	const PlayerManager = require("./utils/playerManager.js");
	import apiMoen from './utils/config.js';
	// #ifdef APP-PLUS
	const request = require('./common/request/index').default
	const utils = require('./common/utils/index.js').default
	import checkappupdate from '@/common/utils/checkappupdate.js'
	import api from '@/common/request/api.js'
	// #endif

	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from "vuex"
	export default {
		usingComponents: {
			"charge-dialog": "/components/charge-dialog/charge-dialog",
			"open-area-left": "/components/open-area-left/open-area-left",
			"open-area-left-side": "/components/open-area-left-side/open-area-left-side",
			"open-area-right": "/components/open-area-right/open-area-right",
			"playlet-plugin":"/pages/playlet/playlet"
		},
		onLaunch: function(options) {
			this.login()
			console.log("App Launch");
			playletPlugin.onPageLoad(this._onPlayerLoad.bind(this))
			//登录
			// 保存分享参数（H5、小程序）
			options.query.scene && this.setShare({
				spm: options.query.scene
			})
			// 获取配置信息
			// this.getConfigInfo()

			// #ifdef APP-PLUS
			// nvue变量
			this.request = request
			this.utils = utils
			// 锁定竖屏模式
			plus.screen.lockOrientation('portrait-primary');
			// app版本检测
			checkappupdate.check({
				api: this.$BASE_URL + api.common.update.url
			})
			// #endif

			// #ifdef H5
			// 非微信浏览器拦截
			const useragent = navigator.userAgent
			if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
				// window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=888"
			}
			// #endif

			// #ifdef MP-WEIXIN
			// 朋友圈场景
			if (options.scene === 1155) {
				if (options.path != 'pages/home/index') {
					uni.switchTab({
						url: '/pages/home/index'
					})
				}
			}
			// 小程序更新
			const updateManager = uni.getUpdateManager()
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				console.log(res.hasUpdate, "版本检测");
				if (res.hasUpdate) {
					updateManager.onUpdateReady(function(res) {
						uni.showModal({
							title: '更新提示',
							content: '新版本已经准备好，是否重启应用？',
							success: res => {
								if (res.confirm) {
									// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
									updateManager.applyUpdate()
								}
							}
						})
					})
					updateManager.onUpdateFailed(function(res) {
						// 新版本下载失败
						uni.showModal({
							title: '提示',
							content: '新版小程序下载失败\n请自行退出程序，手动卸载本程序，再运行',
							confirmText: "知道了"
						});
					})
				}
			})



			// #endif
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		methods: {
			...mapActions("app", ["getConfigInfo"]),
			...mapMutations("app", ["setShare"]),
			login() {
				console.log(apiMoen,'apiMoen')
				//this指向问题
				const mythis = this
				uni.login({
					"provider": "weixin",
					"onlyAuthorize": true, // 微信登录仅请求授权认证
					success: function(event) {
						const {
							code
						} = event
						// console.log('获取小程序初始化基本信息code222222222222222222')
						console.log('获取小程序初始化基本信息code',code)
						console.log('获取小程序初始化基本信息event',event)
						mythis.$request('login.wxmpLogin', {
							code:code,
							appId: apiMoen.appId,//盼盼短剧
							// appId: 'wxd5208bc6883761bd',//迅捷剧场
						}).then(res => {
							console.log('获取小程序初始化基本信息我进到这儿了',res)
							if (res.code == 200) {
								//目前只是这样简单写
								// console.log('获取小程序初始化基本信息获取成功',res)
								const id = res.result.id
								const tenantId = res.result.tenantId
								const memberName = res.result.memberName
								const sysOrgCode = res.result.sysOrgCode
								const srcAppid = apiMoen.srcAppid//盼盼短剧
								// const srcAppid = 'wxd5208bc6883761bd'//迅捷剧场
								uni.setStorageSync('id', id)
								uni.setStorageSync('srcAppid', srcAppid)
								uni.setStorageSync('tenantId', tenantId)
								uni.setStorageSync('sysOrgCode', sysOrgCode)
							}
						})
					},
					fail: function(err) {
						// 登录授权失败
						// err.code是错误码
					}
				})
			},
			_onPlayerLoad(info) {
				const playerManager = new PlayerManager()
				playerManager._onPlayerLoad(info)
			},
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uview-ui/index.scss";
	@import "@/common/style/style.scss";
</style>