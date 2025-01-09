(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/video/play"],{

/***/ 245:
/*!***********************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/main.js?{"page":"pages%2Fvideo%2Fplay"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _play = _interopRequireDefault(__webpack_require__(/*! ./pages/video/play.vue */ 246));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_play.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 246:
/*!****************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/video/play.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.vue?vue&type=template&id=4a879cfe&scoped=true& */ 247);
/* harmony import */ var _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.vue?vue&type=script&lang=js& */ 249);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _play_vue_vue_type_style_index_0_id_4a879cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.vue?vue&type=style&index=0&id=4a879cfe&lang=scss&scoped=true& */ 251);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a879cfe",
  null,
  false,
  _play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/video/play.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 247:
/*!***********************************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/video/play.vue?vue&type=template&id=4a879cfe&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=template&id=4a879cfe&scoped=true& */ 248);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_template_id_4a879cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 248:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/video/play.vue?vue&type=template&id=4a879cfe&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function () {
      return Promise.all(/*! import() | uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 444))
    },
    uLoadingIcon: function () {
      return Promise.all(/*! import() | uview-ui/components/u-loading-icon/u-loading-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-loading-icon/u-loading-icon")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-loading-icon/u-loading-icon.vue */ 576))
    },
    uSafeBottom: function () {
      return Promise.all(/*! import() | uview-ui/components/u-safe-bottom/u-safe-bottom */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-safe-bottom/u-safe-bottom")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-safe-bottom/u-safe-bottom.vue */ 584))
    },
    uNotify: function () {
      return Promise.all(/*! import() | uview-ui/components/u-notify/u-notify */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-notify/u-notify")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-notify/u-notify.vue */ 592))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = !_vm.isDrag && !_vm.isNeedToPay && _vm.videoData.length
  var a0 = {
    title: _vm.videoInfo.title,
    length: _vm.videoInfo.length,
  }
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.isShowMenu = true
    }
    _vm.e1 = function ($event) {
      _vm.isShowMenu = true
    }
    _vm.e2 = function ($event) {
      ;(_vm.isPlaying = true),
        (_vm.isLoading = false),
        (_vm.isPlayError = false)
    }
    _vm.e3 = function ($event) {
      _vm.isShowMenu = true
    }
    _vm.e4 = function ($event) {
      _vm.isShowMenu = false
    }
    _vm.e5 = function ($event) {
      _vm.isShowPay = true
    }
    _vm.e6 = function ($event) {
      _vm.isShowPay = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        a0: a0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 249:
/*!*****************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/video/play.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=script&lang=js& */ 250);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 250:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/video/play.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 31);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var VideoMenu = function VideoMenu() {
  __webpack_require__.e(/*! require.ensure | pages/video/components/VideoMenu */ "pages/video/components/VideoMenu").then((function () {
    return resolve(__webpack_require__(/*! ./components/VideoMenu.vue */ 600));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var VideoPay = function VideoPay() {
  __webpack_require__.e(/*! require.ensure | pages/video/components/VideoPay */ "pages/video/components/VideoPay").then((function () {
    return resolve(__webpack_require__(/*! ./components/VideoPay.vue */ 607));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    VideoMenu: VideoMenu,
    VideoPay: VideoPay
  },
  data: function data() {
    return {
      current: 0,
      currentTime: 0,
      // 当前视频播放进度
      currentPrice: 0,
      // 当前视频积分
      prevTime: 0,
      // 上次视频进度

      duration: 0,
      // 当前视频总时长
      isDrag: false,
      // 拖动进度条状态
      dragStarTime: "00:00",
      // 拖拽开始时长
      dragEndTime: "00:00",
      // 拖拽结束时长

      isPlaying: false,
      // 播放状态
      isPlayError: false,
      // 播放错误

      clickNum: 0,
      // 点击次数
      clickTimer: null,
      // 点击定时器

      isShowMenu: false,
      // 显示菜单
      isShowPay: false,
      // 显示支付

      isNeedToPay: false,
      // 需要支付
      isLoading: true,
      // 加载中
      barHeight: uni.getSystemInfoSync().statusBarHeight,
      isLastPage: false,
      // 最后一页

      originData: [],
      // 源数据
      originIndex: 0,
      // 源数据索引
      oldIndex: 0,
      // 源数据上一次索引
      circular: true,
      // swiper首尾循环

      videoInfo: {
        id: '',
        title: '',
        cover: '',
        length: '',
        collect: 0,
        isCollect: 0,
        share: 0
      },
      videoData: [],
      // 渲染数据
      videoIndex: 0,
      // 渲染数据索引

      isLandscape: false // 是否横屏
    };
  },

  computed: _objectSpread(_objectSpread(_objectSpread({}, (0, _vuex.mapGetters)("user", ["token", "userInfo"])), (0, _vuex.mapGetters)("app", ["videoAutoplay"])), {}, {
    lockCount: function lockCount() {
      var count = this.originData.findIndex(function (item) {
        return !item.url;
      });
      return count;
    }
  }),
  watch: {
    // 付费
    isNeedToPay: function isNeedToPay(newValue, oldValue) {
      if (newValue) {
        this.isShowPay = true;
      }
    },
    originIndex: function originIndex(newValue, oldValue) {
      if (newValue == 0) {
        this.circular = false;
      }
      if (newValue == 0 && this.videoIndex != 0) {
        this.originIndex = 0;
        this.videoIndex = 0;
        this.videoData = [];
        this.videoData[0] = this.originData[0];
        this.videoData[1] = this.originData[1];
      }
    }
  },
  onLoad: function onLoad(option) {
    this.winWidth = uni.getSystemInfoSync().windowWidth + 'px';
    if (option.id) {
      this.videoInfo.id = option.id;
      this.getVideoMenu();
    }
  },
  onUnload: function onUnload() {
    this.saveVideoProgress();
  },
  onHide: function onHide() {
    this.saveVideoProgress();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: this.videoInfo.title,
      path: "/pages/video/play?scene=".concat(this.shareData.spm, "&id=").concat(this.videoInfo.id),
      imageUrl: this.videoInfo.cover
    };
  },
  onShareTimeline: function onShareTimeline(res) {
    return {
      title: this.videoInfo.title,
      query: "scene=".concat(this.shareData.spm, "&id=").concat(this.videoInfo.id),
      imageUrl: this.videoInfo.cover
    };
  },
  methods: {
    // 保存视频进度
    saveVideoProgress: function saveVideoProgress() {
      if (!this.token) return;
      if (!this.isNeedToPay) {
        var obj = {
          vid: this.videoInfo.id,
          episode_id: this.videoData[this.videoIndex].id,
          type: 'log',
          view_time: this.currentTime
        };
        this.$request('video.addRecord', obj, false);
      }
    },
    // 选集
    changeOriginIndex: function changeOriginIndex(index) {
      this.originIndex = index;
      this.initSwiperData(index);
    },
    // 获取节目单
    getVideoMenu: function getVideoMenu() {
      var _this = this;
      this.$request('video.menu', {
        id: this.videoInfo.id
      }).then(function (res) {
        if (res.code === 1) {
          _this.videoInfo.title = res.data.title;
          _this.videoInfo.cover = res.data.image;
          _this.videoInfo.length = res.data.episodes;
          _this.videoInfo.collect = res.data.favorites;
          _this.videoInfo.isCollect = res.data.is_favorite;
          _this.videoInfo.share = res.data.shares;
          if (res.data.episodes_list && res.data.episodes_list.length) {
            _this.prevTime = res.data.view_time;
            var index = res.data.episode_id ? res.data.episodes_list.findIndex(function (item) {
              return item.id == res.data.episode_id;
            }) : 0;
            _this.originIndex = index != -1 ? index : 0;
            _this.originData = res.data.episodes_list;
            _this.initSwiperData(_this.originIndex, 1);
          }
        }
      });
    },
    // 初始化swiper数据
    initSwiperData: function initSwiperData() {
      var originIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.originIndex;
      var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var originDataLength = this.originData.length;
      var videoList = [];
      videoList[this.videoIndex] = this.originData[originIndex];
      videoList[this.videoIndex - 1 == -1 ? 2 : this.videoIndex - 1] = this.originData[originIndex - 1 == -1 ? originDataLength - 1 : originIndex - 1];
      videoList[this.videoIndex + 1 == 3 ? 0 : this.videoIndex + 1] = this.originData[originIndex + 1 == originDataLength ? 0 : originIndex + 1];
      this.videoData = videoList;
      if (this.oldIndex >= this.originData.length) {
        this.oldIndex = 0;
      }
      if (this.oldIndex < 0) {
        this.oldIndex = this.originData.length - 1;
      }
      if (this.originIndex == 0) {
        this.circular = false;
      } else {
        this.circular = true;
      }
      this.isLoading = true;

      // 重置进度条状态
      this.duration = 0;
      this.currentTime = 0;
      this.isDrag = false;
      this.isPlayError = false;
      this.isLastPage = false;
      // 本集价格
      this.currentPrice = Number(this.videoData[this.videoIndex].price);
      // 播放授权
      if (this.videoData[this.videoIndex].url) {
        this.isNeedToPay = false;
        this.saveVideoProgress();
      } else {
        this.beforePlay(init);
      }
    },
    // swiper切换
    swiperChange: function swiperChange(event) {
      var current = event.detail.current;
      var originDataLength = this.originData.length;
      if (this.videoIndex - current == 2 || this.videoIndex - current == -1) {
        this.originIndex = this.originIndex + 1 == originDataLength ? 0 : this.originIndex + 1;
        this.videoIndex = this.videoIndex + 1 == 3 ? 0 : this.videoIndex + 1;
        this.oldIndex = this.originIndex - 1;
        this.initSwiperData(this.originIndex);
      } else if (this.videoIndex - current == -2 || this.videoIndex - current == 1) {
        this.originIndex = this.originIndex - 1 == -1 ? originDataLength - 1 : this.originIndex - 1;
        this.videoIndex = this.videoIndex - 1 == -1 ? 2 : this.videoIndex - 1;
        this.oldIndex = this.originIndex + 1;
        this.initSwiperData(this.originIndex);
      }
    },
    // 播放之前
    beforePlay: function beforePlay() {
      var _this2 = this;
      var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var obj = {
        vid: this.videoInfo.id,
        episode_id: this.videoData[this.videoIndex].id,
        platform: this.$utils.platforms()
      };
      this.$request('video.play', obj, false).then(function (res) {
        if (res.code === 1) {
          _this2.videoData[_this2.videoIndex].url = res.data.url;
          _this2.isNeedToPay = false;
          _this2.isShowPay = false;
        } else {
          _this2.isNeedToPay = true;
          _this2.isShowPay = true;
        }
      });
    },
    // 播放
    videoPlay: function videoPlay() {
      var video = this.getVideoCtx();
      if (!video) return;
      video.play();
      this.isPlaying = true;
    },
    // 暂停
    videoPause: function videoPause() {
      var video = this.getVideoCtx();
      if (!video) return;
      video.pause();
      this.isPlaying = false;
    },
    // 播放结束
    videoEnded: function videoEnded(e) {
      if (this.originIndex == this.originData.length - 1) {
        console.log("播放结束");
      } else {
        if (this.videoIndex < 2) {
          this.current = this.videoIndex + 1;
        } else {
          this.current = 0;
        }
      }
    },
    // 播放错误
    videoError: function videoError() {
      this.isPlayError = true;
      this.isLoading = false;
    },
    // 点击
    videoClick: function videoClick(e) {
      var _this3 = this;
      this.clickTimer && clearTimeout(this.clickTimer);
      this.clickNum++;
      this.clickTimer = setTimeout(function () {
        if (_this3.clickNum >= 2) {
          console.log('你双击了');
        } else {
          console.log('你单击了');
          if (_this3.isPlaying) {
            _this3.videoPause();
          } else {
            _this3.videoPlay();
          }
        }
        _this3.clickNum = 0;
      }, 250);
    },
    // 元数据加载完毕
    VideoLoadedmetadata: function VideoLoadedmetadata(e) {
      var _e$detail = e.detail,
        width = _e$detail.width,
        height = _e$detail.height;
      this.isLandscape = width >= height ? true : false;
    },
    // 获取video标签上下文
    getVideoCtx: function getVideoCtx() {
      return uni.createVideoContext('vplayer' + this.videoIndex, this);
    },
    // 点赞
    handleLikes: function handleLikes(id, index) {
      var _this4 = this;
      var obj = {
        episode_id: id,
        type: 'like'
      };
      this.$request('video.likes', obj, false).then(function (res) {
        if (res.code === 1) {
          if (_this4.videoData[index].is_like == 0) {
            _this4.videoData[index].is_like = 1;
            _this4.videoData[index].likes++;
          } else {
            _this4.videoData[index].is_like = 0;
            _this4.videoData[index].likes--;
          }
        }
      });
    },
    // 收藏
    handleCollect: function handleCollect() {
      var _this5 = this;
      if (this.videoInfo.isCollect == 0) {
        var obj = {
          vid: this.videoInfo.id,
          type: 'favorite'
        };
        this.$request('video.addRecord', obj, false).then(function (res) {
          if (res.code === 1) {
            _this5.videoInfo.isCollect = 1;
            _this5.videoInfo.collect++;
          }
        });
      } else {
        var _obj = {
          ids: this.videoInfo.id,
          type: 'favorite'
        };
        this.$request('video.deleteRecord', _obj, false).then(function (res) {
          if (res.code === 1) {
            _this5.videoInfo.isCollect = 0;
            _this5.videoInfo.collect--;
          }
        });
      }
    },
    // 拖拽结束
    sliderChange: function sliderChange(e) {
      var video = this.getVideoCtx();
      if (!video) return;
      // 停止拖拽
      this.isDrag = false;
      // 判断一下是否大于基础时间
      if (this.duration > 0.1) {
        // 跳到指定时间点
        video.seek(e.detail.value);
        // 并调用播放
        video.play();
      }
    },
    // 正在拖拽
    sliderChanging: function sliderChanging(e) {
      // 开始拖拽
      this.isDrag = true;
      // 刷新时间
      this.dragStarTime = this.$utils.formatTime(e.detail.value);
      // 总时间
      this.dragEndTime = this.$utils.formatTime(this.duration);
    },
    // 更新进度
    videoTimeUpdate: function videoTimeUpdate(e) {
      if (this.isDrag) return;
      var _e$detail2 = e.detail,
        currentTime = _e$detail2.currentTime,
        duration = _e$detail2.duration;
      // 当前进度
      this.currentTime = this.prevTime ? this.prevTime : Math.trunc(currentTime);
      this.duration = Math.trunc(duration);
      // 上次进度
      if (this.prevTime) {
        var video = this.getVideoCtx();
        if (!video) return;
        video.seek(this.currentTime);
        this.prevTime = 0;
      }
      // 进度文本
      this.dragStarTime = this.$utils.formatTime(this.currentTime);
      this.dragEndTime = this.$utils.formatTime(this.duration);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 251:
/*!**************************************************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/video/play.vue?vue&type=style&index=0&id=4a879cfe&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_id_4a879cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./play.vue?vue&type=style&index=0&id=4a879cfe&lang=scss&scoped=true& */ 252);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_id_4a879cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_id_4a879cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_id_4a879cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_id_4a879cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_play_vue_vue_type_style_index_0_id_4a879cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 252:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/video/play.vue?vue&type=style&index=0&id=4a879cfe&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[245,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/video/play.js.map