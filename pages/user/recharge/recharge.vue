<template>
	<view class="centert-lsty">
		<view class="mon-list">
			<view class="moinuns-view" v-for="(item,index) in goldList.list" :class="index==ativoeIndex?'m-ativoe':''"
				@click="handleToActive(index,item)">
				<view class="mv-ones">
					<view class="">
						<span style="font-size: 34rpx;">{{item.packageMoney}}</span>元
					</view>
					<view class="coloir">{{item.rechargeCoins}}{{falishui.currencyName}}</view>
				</view>
				<view class="mv-two">
					额外赠送{{item.giftCoins}}{{falishui.currencyName}}
				</view>
			</view>
		</view>
		<view class="act_prompt">
			<view class="bot_title">
				温馨提示
			</view>
			<view class="text">
				1.充值的{{allocatRechargeList.currencyName || ""}}仅限于本剧场使用。
			</view>
			<view class="text">
				2.1元兑换{{allocatRechargeList.proportSetUp || "100"}}{{allocatRechargeList.currencyName || ""}}，赠送的{{allocatRechargeList.currencyName || ""}},有效期为{{allocatRechargeList.termSetUp || 0}}天，有效期到后赠送{{allocatRechargeList.currencyName || ""}}置0。
			</view>
			<view class="text">
				3.充值{{allocatRechargeList.currencyName || ""}}前，请您先仔细阅读<navigator url="/pages/user/about/about" hover-class="navigator-hover"><span class="tt">《会员服务协议》</span>。</navigator>
			</view>
			<view class="text">
				4.未满18周岁的未成年人应在法定监护人同意后进行充值。
			</view>
			<view class="text">
				5.充值的{{allocatRechargeList.currencyName || ""}}属于虚拟商品，不支持退换。
			</view>
			<view class="text">
				6.充值代表您已同意<navigator url="/pages/user/about/about" hover-class="navigator-hover">
					<span class="tt">《用户协议》</span>和<span class="tt">《隐私政策》</span>.
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import WenTag from '../../../components/tag-select/tag-select.vue'
	export default {
		components: {
			WenTag
		},
		data() {
			return {
				goldList: [],
				width: '320rpx',
				money: '',
				tenantId: null,
				sysOrgCode: null,
				activeIndex: 0,
				activeIndexPay: 0,
				allocatRechargeList:{},
				userCode: '',
				falishui:{}
			};
		},
		onLoad() {
			this.getAllocatRechargeList()
			this.tenantId = uni.getStorageSync('tenantId')
			this.sysOrgCode = uni.getStorageSync('sysOrgCode')
			this.handleToGoldList(this.tenantId, this.sysOrgCode)
			this.getRechargePackageList(this.tenantId, this.sysOrgCode)
			this.getWxCode()
			this.filmDramaMember()
		},
		methods: {
			// 查询会员信息
			filmDramaMember() {
				var data = {
					memberId: uni.getStorageSync('id'),
				}
				// return 
				this.$request('player.filmDramaMember', data).then(res => {
					this.falishui = res.result
				})
			},
			// 查询充值设置
			getAllocatRechargeList() {
				this.$request('wchatapi.allocatRechargeList', {
					memberId: uni.getStorageSync('tenantId'),
					sysOrgCode: uni.getStorageSync('sysOrgCode'),
				}).then(res => {
					if (res != 200 && res.message != "") {
						uni.showToast({
							title: res.message,
							icon: 'error',
							duration: 2000,
						});
					}
					this.allocatRechargeList = res.result
					console.log('查询充值设置:', res);
				})
			},
			// 账户充值套餐列表
			getRechargePackageList(tenantId, sysOrgCode) {
				this.$request('wchatapi.rechargePackageList', {
					tenantId,
					sysOrgCode
				}).then(res => {
					console.log(res,"res1111111账户充值套餐列表");
					if (res.code == 200) {
						this.goldList = res.result
					}
				}).catch(res => {
					console.log(res);
				})
			},
			// 充值支付
			// handleToActive(index, item) {
			// 	this.activeIndex = index;
			// 	// console.log(index, item);
			// 	this.money = item.money
			// 	var data = {
			// 		rechargeId:item.id,//充值id 即是套餐id
			// 		memberId: uni.getStorageSync('id'),//会员id
			// 		sysOrgCode:uni.getStorageSync('sysOrgCode'),
			// 		tenantId: this.tenantId,
			// 	}
			// 	this.$request('wchatapi.rechargePackage',data).then(res => {
			// 		console.log(res,"res:9999999999")
			// 		uni.requestPayment({
			// 			provider: 'wxpay',
			// 			timeStamp: res.result.timeStamp,
			// 			nonceStr: res.result.nonceStr,
			// 			package: res.result.package,
			// 			signType: res.result.signType,
			// 			paySign: res.result.paySign,
			// 			success: function(payRes) {
			// 				uni.showToast({
			// 					icon: 'none',
			// 					title: '支付成功'
			// 				})
			// 				// 刷新列表
			// 				uni.navigateBack({
			// 					delta:1
			// 				})
			// 			},
			// 			fail: function(err) {
			// 				uni.showToast({
			// 					icon: 'none',
			// 					title: '支付取消'
			// 				})
			// 				uni.navigateTo({
			// 					url: '/pages/user/vip/vip'
			// 				})
			// 			}
			// 		})
			// 	})
			// },
			getWxCode(callback) {
				wx.login({
					success: (res) => {
						if (res.code) {
							this.userCode = res.code;
							if (callback) {
								callback(this.userCode);
							}
						} else {
							console.log('获取失败！' + res.errMsg);
						}
					}
				});
			},
			// 虚拟支付
			async handleToActive(index, item) {
				const userCode = await new Promise((resolve, reject) => {
					this.getWxCode((userCode) => {
						resolve(userCode); // 将 userCode 传递给 Promise 的 resolve 函数
					});
				});
				this.activeIndex = index;
				// 目前只有 >= v2.19.2 的基础库支持该接口，后续将对更多低版本基础库支持该接口。因此建议开发者这样判断：当前用户的基础库版本 >= v2.19.2 时可以直接用 wx.requestVirtualPayment，小于 v2.19.2 时，用 wx.canIUse('requestVirtualPayment') 来判断接口是否可用。
				function compareVersion(_v1, _v2) {
					if (typeof _v1 !== 'string' || typeof _v2 !== 'string') return 0
					const v1 = _v1.split('.')
					const v2 = _v2.split('.')
					const len = Math.max(v1.length, v2.length)
					while (v1.length < len) {
						v1.push('0')
					}
					while (v2.length < len) {
						v2.push('0')
					}
					for (let i = 0; i < len; i++) {
						const num1 = parseInt(v1[i], 10)
						const num2 = parseInt(v2[i], 10)
			
						if (num1 > num2) {
							return 1
						} else if (num1 < num2) {
							return -1
						}
					}
					return 0
				}
			
				const SDKVersion = wx.getSystemInfoSync().SDKVersion
				const self = this; // 在外部保存正确的上下文
				var data = {
					// buyQuantity: item.packageMoney, //购买数量
					// buyQuantity: 5, //购买数量
					goodsPrice: item.packageMoney, //充值金额
					productId: item.id, //即是套餐id
					memberId: uni.getStorageSync('id'), //会员id
					sysOrgCode: uni.getStorageSync('sysOrgCode'), //小程序id
					tenantId: this.tenantId, //运营主体公司id
					code: userCode
				}
				this.$request('virtualPayment.virtualPaymentPackage', data).then(res => {
					console.log('充值会员', res)
					if (compareVersion(SDKVersion, '2.19.2') >= 0 || wx.canIUse('requestVirtualPayment')) {
						wx.requestVirtualPayment({
							signData: JSON.stringify(res.result.signData),
							// signData: JSON.stringify({
							// 	offerId: '123', //在米大师侧申请的应用 id, mp-支付基础配置中的offerid
							// 	buyQuantity: 1, //购买数量
							// 	env: 1, //环境配置, 0 米大师正式环境, 1 米大师沙箱环境, 默认为 0
							// 	currencyType: 'CNY', //人民币
							// 	productId: 'testproductId', //道具ID
							// 	goodsPrice: 10, //道具单价(分)
							// 	outTradeNo: 'xxxxxx', //业务订单号
							// 	attach: 'testdata', //透传数据, 发货通知时会透传给开发者
							// }),
							paySig: res.result.paySig, //支付签名
							signature: res.result.signature, // 用户态签名
							mode: res.result.mode, //支付类型 道具直购：short_series_goods	代币充值：short_series_coin	
							success() {
								console.log('会员开通成功，准备支付回调', res)
								console.log('会员开通成功，准备支付回调', res.result.signData.outTradeNo)
								// return
								// const outTradeNo = res.result.signData.outTradeNo
								var dataToSend = {
								    attach: res.result.signData.attach,
								    buyQuantity: res.result.signData.buyQuantity,
								    currencyType: res.result.signData.currencyType,
								    env: res.result.signData.env,
								    goodsPrice: res.result.signData.goodsPrice,
								    offerId: res.result.signData.offerId,
								    outTradeNo: res.result.signData.outTradeNo,
								    productId: res.result.signData.productId
								};
								// 支付成功回调
								self.$request('virtualPayment.virtualPaymentNotifyUrl',dataToSend).then(res => {
									console.log('支付回调数据', res.code)
									if (res.success) {
										uni.showToast({
											icon: 'success',
											title: '充值成功'
										})
									}else{
										uni.showToast({
											icon: 'error',
											title: '支付失败，请联系管理员'
										})
									}
								})
								// 刷新列表
							},
							fail({
								errMsg,
								errCode
							}) {
								console.error(errMsg, errCode)
								uni.showToast({
									icon: 'error',
									title: '支付取消'
								})
							},
						})
					} else {
						console.log('当前用户的客户端版本不支持 wx.requestVirtualPayment')
					}
				})
			},
			
			handleToactivePay(index, item) {
				// console.log(index);
				// console.log(this.width);
			},
			handleToGoldList(tenantId, sysOrgCode) {
				this.$request('wchatapi.rechargePackageList', {
					tenantId,
					sysOrgCode
				}).then(res => {
					if (res.code == 200) {
						res.result.forEach(it => {
							it.packageMoney = it.packageMoney + '元'
							it.gold = it.actualReceipt + '熊币'
							return this.goldList.push(it)
						})
						console.log(this.goldList);
					}
				}).catch(res => {
					console.log(res);
				})
			},
		}
	}
</script>

<style lang="scss">
	@import '../../../components/charge-dialog/recharge.scss';
	// .rech {
	// 	width: 90%;
	// 	margin: auto;

	// 	.rech_bottom {
	// 		margin-top: 25rpx;
	// 		padding: 20rpx;
	// 		.bot_title {
	// 			color: #333;
	// 			margin-bottom: 25rpx;
	// 			font-size: 28rpx;
	// 		}
			
	// 		.text {
	// 			font-size: 24rpx;
	// 			color: #999;
	// 			margin-bottom: 12rpx;
	// 			display: flex;
	// 		}
			
	// 		.tt {
	// 			// font-weight: bold;
	// 			color: $uni-color-error;
	// 		}
	// 	}

	// 	.rech_but {
	// 		margin-top: 60rpx;
	// 		padding-bottom: 25rpx;

	// 		.but {
	// 			background-color: #FF0066;
	// 			color: white;
	// 			height: 60rpx;
	// 			display: flex;
	// 			justify-content: center;
	// 			align-items: center;
	// 		}
	// 	}
	// }
	// .active {
	// 	border: 1px solid #ff0066 !important;
	// 	background-color: #fff2f7;
	// }
	
	// .activepay {
	// 	border: 1px solid #ff0066 !important;
	// }
	
	// .act_money {
	// 	display: flex;
	// 	flex-wrap: wrap;
	// 	justify-content: space-between;
	
	// 	.money {
	// 		border: 1px solid #747474;
	// 		margin-top: 15rpx;
	// 		border-radius: 10rpx;
	
	// 		.core {
	// 			display: flex;
	// 			flex-direction: column;
	// 			align-items: flex-start;
	// 		}
	
	// 		.top {
	// 			display: flex;
	// 			align-items: flex-end;
	
	// 			.left {
	// 				font-weight: bold;
	// 				font-size: 34rpx;
	// 			}
	
	// 			.right {
	// 				margin-left: 10rpx;
	// 			}
	// 		}
	
	// 		.bottom {
	// 			margin-top: 10rpx;
	// 			font-size: 22rpx;
	// 			color: #686868;
	// 		}
	// 	}
	// }
	
	// .act_pay {
	// 	margin-top: 15rpx;
	
	// 	.pay_box {
	// 		margin-top: 15rpx;
	// 		width: 50%;
	// 		height: 80rpx;
	// 		border: 1px solid black;
	// 		border-radius: 8rpx;
	// 		display: flex;
	// 		justify-content: center;
	// 		align-items: center;
	// 	}
	
	// 	.pay_title {
	// 		color: #888888;
	// 	}
	
	// 	.pay_text {
	// 		font-size: 26rpx;
	// 		color: #686868;
	// 		margin-left: 5rpx;
	// 	}
	// }
</style>