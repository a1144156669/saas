// global.js
const PlayerManager = require("./playerManager.js");
const playletPlugin = requirePlugin("playlet-plugin");
import apiMoen from './config.js';
export default {
  install(Vue, options) {
    // 添加全局方法或属性
    Vue.prototype.$myGlobalMethod = function(dramaIds) {
		// console.log('This is a global method!',typeof dramaIds);
		var srcAppid = apiMoen.srcAppid
		var dramaId = dramaIds
		if (!srcAppid || !dramaId) {
			wx.showToast({
				icon: 'none',
				title: '请输入参数'
			})
			return
		}
		PlayerManager.navigateToPlayer({
			srcAppid,
			dramaId,
			// extParam: encodeURIComponent('a=b&c=d'), // 分享会携带的参数，可自定义
		})
    };
  }
}