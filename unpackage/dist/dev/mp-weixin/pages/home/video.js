(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/video"],{

/***/ 187:
/*!***********************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/main.js?{"page":"pages%2Fhome%2Fvideo"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _video = _interopRequireDefault(__webpack_require__(/*! ./pages/home/video.vue */ 188));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_video.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 188:
/*!****************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/home/video.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.vue?vue&type=template&id=1d11f1f8&scoped=true& */ 189);
/* harmony import */ var _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.vue?vue&type=script&lang=js& */ 191);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _video_vue_vue_type_style_index_0_id_1d11f1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.vue?vue&type=style&index=0&id=1d11f1f8&lang=scss&scoped=true& */ 193);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1d11f1f8",
  null,
  false,
  _video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/home/video.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 189:
/*!***********************************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/home/video.vue?vue&type=template&id=1d11f1f8&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video.vue?vue&type=template&id=1d11f1f8&scoped=true& */ 190);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_1d11f1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 190:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/home/video.vue?vue&type=template&id=1d11f1f8&scoped=true& ***!
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
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 461))
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
  var l0 = _vm.__map(_vm.videoData, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 =
      !_vm.isDrag && _vm.videoIndex == index
        ? _vm.$utils.countCharacters(item.dramaDescribe)
        : null
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      ;(_vm.isPlaying = true), (_vm.isPlayError = false)
    }
    _vm.e1 = function ($event) {
      _vm.isUnfold = !_vm.isUnfold
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 191:
/*!*****************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/home/video.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video.vue?vue&type=script&lang=js& */ 192);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 192:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/home/video.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var PlayerManager = __webpack_require__(/*! ../../utils/playerManager.js */ 32);
var playletPlugin = requirePlugin("playlet-plugin");
var _default = {
  data: function data() {
    return {
      isIos: uni.getSystemInfoSync().osName == 'ios' ? true : false,
      barHeight: uni.getSystemInfoSync().statusBarHeight,
      current: 0,
      currentTime: 0,
      // 当前视频播放进度

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

      isUnfold: false,
      // 展示文字

      originData: [],
      // 源数据
      originIndex: 0,
      // 源数据索引
      oldIndex: 0,
      // 源数据上一次索引

      videoData: [],
      // 视频渲染数据
      videoIndex: 0,
      // 渲染数据索引

      isLandscape: false,
      // 是否横屏

      isonuns: true,
      pageNo: 1
    };
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapGetters)("user", ["token", "userInfo"])), (0, _vuex.mapGetters)("app", ["videoAutoplay"])),
  watch: {},
  onLoad: function onLoad() {
    // this.getRecommendList()
    this.getHandpickList();
  },
  onShow: function onShow() {
    // uni.setTabBarStyle({
    // 	color: '#999',
    // 	selectedColor: '#fff',
    // 	backgroundColor: '#000',
    // 	borderStyle: 'black'
    // })
  },
  onHide: function onHide() {
    // uni.setTabBarStyle({
    // 	color: "#999",
    // 	selectedColor: "#EE7F33",
    // 	backgroundColor: "#fff",
    // 	borderStyle: "black",
    // })
  },
  onShareAppMessage: function onShareAppMessage(res) {
    this.mofenshar();
    return {
      title: this.videoData[this.videoIndex].dramaName,
      path: "/pages/home/video",
      imageUrl: this.videoData[this.videoIndex].dramaPoster
    };
  },
  // 分享到朋友圈
  onShareTimeline: function onShareTimeline(res) {
    return {
      title: this.videoData[this.videoIndex].dramaName,
      path: "/pages/home/video",
      imageUrl: this.videoData[this.videoIndex].dramaPoster
    };
  },
  methods: {
    skipplay: function skipplay(item) {
      console.log("item获取视频列表信息", item);
      this.$myGlobalMethod(item.dramaId); // 调用全局方法
    },
    mofenshar: function mofenshar() {
      var _this = this;
      console.log(111);
      var obj = {
        secondType: 4,
        //操作分类 1播放、2点赞、3收藏、4转发
        // calculateType: index, //计算分类 1加、2减
        memberId: uni.getStorageSync('id'),
        //会员ID
        dramaId: this.videoData[this.videoIndex].dramaId,
        //剧目ID
        dramaSeries: 1,
        //剧集集数
        tenantId: uni.getStorageSync('tenantId'),
        //租户ID
        sysOrgCode: uni.getStorageSync('sysOrgCode') //部门编码
      };

      this.$request('video.likes', obj).then(function (res) {
        _this.videoData[_this.videoIndex].transMitCount++;
      });
    },
    // 获取推荐视频
    // getRecommendList() {
    // 	var data = {
    // 		mediaId:'100002',
    // 		miniId:'1791309043386597376'
    // 	}
    // 	this.$request('video.recommend',data).then(res => {
    // 		console.log("res获取推荐视频:",res)
    // 		if(res.code === 200) {
    // 			if(res.result && res.result.length) {
    // 				this.originData = this.originData.concat(res.result)
    // 				console.log(this.originData,'this.originData')
    // 				this.initSwiperData(this.originIndex, 1)
    // 			}
    // 			this.originData = this.originData.concat(res.result)
    // 			console.log(this.originData,'this.originData')
    // 			this.initSwiperData(this.originIndex, 1)
    // 		}
    // 	})
    // },
    // 获取精选视频列表
    getHandpickList: function getHandpickList() {
      var _this2 = this;
      this.isonuns = false;
      var data = {
        pageNo: this.pageNo,
        pageSize: 10,
        sysOrgCode: uni.getStorageSync('sysOrgCode')
      };
      this.$request('video.handpickList', data).then(function (res) {
        console.log("res精选视频列表:", res);
        if (res.code === 200) {
          if (res.result.records && res.result.records.length) {
            _this2.originData = _this2.originData.concat(res.result.records);
            console.log(_this2.originData, 'this.originData');
            _this2.initSwiperData(_this2.originIndex, 1);
            if (res.result.records.length == 10) {
              _this2.isonuns = true;
            }
            if (res.result.records.length < 10) {
              _this2.isonuns = false;
            }
          }
          // this.originData = this.originData.concat(res.result.records)
          // this.initSwiperData(this.originIndex, 1)
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
      console.log(this.videoData, 'this.videoData');
      if (this.oldIndex >= this.originData.length) {
        this.oldIndex = 0;
      }
      if (this.oldIndex < 0) {
        this.oldIndex = this.originData.length - 1;
      }

      // 重置进度条状态
      this.duration = 0;
      this.currentTime = 0;
      this.isDrag = false;
      this.isPlayError = false;
      // H5自动播放
    },
    // swiper切换
    swiperChange: function swiperChange(event) {
      console.log(event);
      var current = event.detail.current;
      var originDataLength = this.originData.length;
      if (this.videoIndex - current == 2 || this.videoIndex - current == -1) {
        this.originIndex = this.originIndex + 1 == originDataLength ? 0 : this.originIndex + 1;
        this.videoIndex = this.videoIndex + 1 == 3 ? 0 : this.videoIndex + 1;
        this.oldIndex = this.originIndex - 1;
        this.initSwiperData(this.originIndex);
        if (this.originIndex == this.originData.length - 1) {
          if (this.isonuns) {
            this.pageNo++;
            this.getHandpickList();
          }
        }
      } else if (this.videoIndex - current == -2 || this.videoIndex - current == 1) {
        this.originIndex = this.originIndex - 1 == -1 ? originDataLength - 1 : this.originIndex - 1;
        this.videoIndex = this.videoIndex - 1 == -1 ? 2 : this.videoIndex - 1;
        this.oldIndex = this.originIndex + 1;
        this.initSwiperData(this.originIndex);
      }
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
      if (this.videoIndex < 2) {
        this.current = this.videoIndex + 1;
      } else {
        this.current = 0;
      }
    },
    // 视频播放出错
    videoError: function videoError() {
      this.isPlayError = true;
    },
    // 点击
    videoClick: function videoClick() {
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
      this.currentTime = Math.trunc(currentTime);
      this.duration = Math.trunc(duration);
      // 刷新时间
      this.dragStarTime = this.$utils.formatTime(this.currentTime);
      // 总时间
      this.dragEndTime = this.$utils.formatTime(this.duration);
    },
    // 获取video标签上下文
    getVideoCtx: function getVideoCtx() {
      return uni.createVideoContext('video' + this.originData[this.originIndex].dramaId, this);
    },
    // 点赞
    handleLikes: function handleLikes(dramaId, index) {
      var _this4 = this;
      var obj = {
        secondType: 2,
        //操作分类 1播放、2点赞、3收藏、4转发
        calculateType: index,
        //计算分类 1加、2减
        memberId: uni.getStorageSync('id'),
        //会员ID
        dramaId: dramaId,
        //剧目ID
        dramaSeries: 1,
        //剧集集数
        tenantId: uni.getStorageSync('tenantId'),
        //租户ID
        sysOrgCode: uni.getStorageSync('sysOrgCode') //部门编码
      };

      this.$request('video.likes', obj).then(function (res) {
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
    handleCollect: function handleCollect(id, index) {
      var _this5 = this;
      if (this.videoData[index].video.is_favorite == 0) {
        var obj = {
          vid: id,
          type: 'favorite'
        };
        this.$request('video.addRecord', obj, false).then(function (res) {
          if (res.code === 1) {
            _this5.videoData[index].video.is_favorite = 1;
            _this5.videoData[index].video.favorites++;
          }
        });
      } else {
        var _obj = {
          ids: id,
          type: 'favorite'
        };
        this.$request('video.deleteRecord', _obj, false).then(function (res) {
          if (res.code === 1) {
            _this5.videoData[index].video.is_favorite = 0;
            _this5.videoData[index].video.favorites--;
          }
        });
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 193:
/*!**************************************************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/home/video.vue?vue&type=style&index=0&id=1d11f1f8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_id_1d11f1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video.vue?vue&type=style&index=0&id=1d11f1f8&lang=scss&scoped=true& */ 194);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_id_1d11f1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_id_1d11f1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_id_1d11f1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_id_1d11f1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_id_1d11f1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 194:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/pages/home/video.vue?vue&type=style&index=0&id=1d11f1f8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[187,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/video.js.map