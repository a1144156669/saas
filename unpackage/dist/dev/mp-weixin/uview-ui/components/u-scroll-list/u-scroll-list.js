(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-scroll-list/u-scroll-list"],{

/***/ 477:
/*!***********************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/u-scroll-list.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-scroll-list.vue?vue&type=template&id=542e43e4&scoped=true&filter-modules=eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ%3D%3D& */ 478);
/* harmony import */ var _u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-scroll-list.vue?vue&type=script&lang=js& */ 480);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_scroll_list_vue_vue_type_style_index_0_id_542e43e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-scroll-list.vue?vue&type=style&index=0&id=542e43e4&lang=scss&scoped=true& */ 483);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);
/* harmony import */ var _scrollWxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_E_3A_5C_E6_9F_8F_E8_90_B1_5C_E9_A1_B9_E7_9B_AE_E7_AE_A1_E7_90_86_5C_E7_9B_BC_E7_9B_BC_E7_9F_AD_E5_89_A7_5C_E5_BC_80_E6_BA_90_E7_89_88_E6_9C_AC_5Cvignette_video_5Cuview_ui_5Ccomponents_5Cu_scroll_list_5Cu_scroll_list_vue_module_wxs_lang_wxs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollWxs.wxs?vue&type=custom&index=0&blockType=script&issuerPath=E%3A%5C%E6%9F%8F%E8%90%B1%5C%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%5C%E7%9B%BC%E7%9B%BC%E7%9F%AD%E5%89%A7%5C%E5%BC%80%E6%BA%90%E7%89%88%E6%9C%AC%5Cvignette-video%5Cuview-ui%5Ccomponents%5Cu-scroll-list%5Cu-scroll-list.vue&module=wxs&lang=wxs */ 485);

var renderjs





/* normalize component */

var component = Object(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "542e43e4",
  null,
  false,
  _u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* custom blocks */

if (typeof _scrollWxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_E_3A_5C_E6_9F_8F_E8_90_B1_5C_E9_A1_B9_E7_9B_AE_E7_AE_A1_E7_90_86_5C_E7_9B_BC_E7_9B_BC_E7_9F_AD_E5_89_A7_5C_E5_BC_80_E6_BA_90_E7_89_88_E6_9C_AC_5Cvignette_video_5Cuview_ui_5Ccomponents_5Cu_scroll_list_5Cu_scroll_list_vue_module_wxs_lang_wxs__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_scrollWxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_E_3A_5C_E6_9F_8F_E8_90_B1_5C_E9_A1_B9_E7_9B_AE_E7_AE_A1_E7_90_86_5C_E7_9B_BC_E7_9B_BC_E7_9F_AD_E5_89_A7_5C_E5_BC_80_E6_BA_90_E7_89_88_E6_9C_AC_5Cvignette_video_5Cuview_ui_5Ccomponents_5Cu_scroll_list_5Cu_scroll_list_vue_module_wxs_lang_wxs__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

component.options.__file = "uview-ui/components/u-scroll-list/u-scroll-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 478:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/u-scroll-list.vue?vue&type=template&id=542e43e4&scoped=true&filter-modules=eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ%3D%3D& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-scroll-list.vue?vue&type=template&id=542e43e4&scoped=true&filter-modules=eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ%3D%3D& */ 479);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_template_id_542e43e4_scoped_true_filter_modules_eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 479:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/u-scroll-list.vue?vue&type=template&id=542e43e4&scoped=true&filter-modules=eyJ3eHMiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTc2NiwiYXR0cnMiOnsic3JjIjoiLi9zY3JvbGxXeHMud3hzIiwibW9kdWxlIjoid3hzIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjE3NjZ9fQ%3D%3D& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.$u.getPx(_vm.indicatorBarWidth)
  var g1 = _vm.$u.getPx(_vm.indicatorWidth)
  var s0 = _vm.__get_style([_vm.$u.addStyle(_vm.indicatorStyle)])
  var s1 = _vm.__get_style([_vm.lineStyle])
  var s2 = _vm.__get_style([_vm.barStyle])
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        s0: s0,
        s1: s1,
        s2: s2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 480:
/*!************************************************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/u-scroll-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-scroll-list.vue?vue&type=script&lang=js& */ 481);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 481:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/u-scroll-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 59));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 61));
var _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 482));
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
/**
 * scrollList 横向滚动列表
 * @description 该组件一般用于同时展示多个商品、分类的场景，也可以完成左右滑动的列表。
 * @tutorial https://www.uviewui.com/components/scrollList.html
 * @property {String | Number}	indicatorWidth			指示器的整体宽度 (默认 50 )
 * @property {String | Number}	indicatorBarWidth		滑块的宽度 (默认 20 )
 * @property {Boolean}			indicator				是否显示面板指示器 (默认 true )
 * @property {String}			indicatorColor			指示器非激活颜色 (默认 '#f2f2f2' )
 * @property {String}			indicatorActiveColor	指示器的激活颜色 (默认 '#3c9cff' )
 * @property {String | Object}	indicatorStyle			指示器样式，可通过bottom，left，right进行定位
 * @event {Function} left	滑动到左边时触发
 * @event {Function} right	滑动到右边时触发
 * @example
 */
var _default = {
  name: 'u-scroll-list',
  mixins: [uni.$u.mpMixin, uni.$u.mixin, _props.default],
  data: function data() {
    return {
      scrollInfo: {
        scrollLeft: 0,
        scrollWidth: 0
      },
      scrollWidth: 0
    };
  },
  computed: {
    // 指示器为线型的样式
    barStyle: function barStyle() {
      var style = {};

      // 设置滑块的宽度和背景色，是每个平台都需要的
      style.width = uni.$u.addUnit(this.indicatorBarWidth);
      style.backgroundColor = this.indicatorActiveColor;
      return style;
    },
    lineStyle: function lineStyle() {
      var style = {};
      // 指示器整体的样式，需要设置其宽度和背景色
      style.width = uni.$u.addUnit(this.indicatorWidth);
      style.backgroundColor = this.indicatorColor;
      return style;
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      this.getComponentWidth();
    },
    //
    scrollEvent: function scrollEvent(status) {
      this.$emit(status);
    },
    // 获取组件的宽度
    getComponentWidth: function getComponentWidth() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return uni.$u.sleep(30);
              case 2:
                _this.$uGetRect('.u-scroll-list').then(function (size) {
                  _this.scrollWidth = size.width;
                });
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 483:
/*!*********************************************************************************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/u-scroll-list.vue?vue&type=style&index=0&id=542e43e4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_style_index_0_id_542e43e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-scroll-list.vue?vue&type=style&index=0&id=542e43e4&lang=scss&scoped=true& */ 484);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_style_index_0_id_542e43e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_style_index_0_id_542e43e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_style_index_0_id_542e43e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_style_index_0_id_542e43e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_scroll_list_vue_vue_type_style_index_0_id_542e43e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 484:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/u-scroll-list.vue?vue&type=style&index=0&id=542e43e4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 485:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/scrollWxs.wxs?vue&type=custom&index=0&blockType=script&issuerPath=E%3A%5C%E6%9F%8F%E8%90%B1%5C%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%5C%E7%9B%BC%E7%9B%BC%E7%9F%AD%E5%89%A7%5C%E5%BC%80%E6%BA%90%E7%89%88%E6%9C%AC%5Cvignette-video%5Cuview-ui%5Ccomponents%5Cu-scroll-list%5Cu-scroll-list.vue&module=wxs&lang=wxs ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_scrollWxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_E_3A_5C_E6_9F_8F_E8_90_B1_5C_E9_A1_B9_E7_9B_AE_E7_AE_A1_E7_90_86_5C_E7_9B_BC_E7_9B_BC_E7_9F_AD_E5_89_A7_5C_E5_BC_80_E6_BA_90_E7_89_88_E6_9C_AC_5Cvignette_video_5Cuview_ui_5Ccomponents_5Cu_scroll_list_5Cu_scroll_list_vue_module_wxs_lang_wxs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../软件下载/Hbx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./scrollWxs.wxs?vue&type=custom&index=0&blockType=script&issuerPath=E%3A%5C%E6%9F%8F%E8%90%B1%5C%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%5C%E7%9B%BC%E7%9B%BC%E7%9F%AD%E5%89%A7%5C%E5%BC%80%E6%BA%90%E7%89%88%E6%9C%AC%5Cvignette-video%5Cuview-ui%5Ccomponents%5Cu-scroll-list%5Cu-scroll-list.vue&module=wxs&lang=wxs */ 486);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_Hbx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_scrollWxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_E_3A_5C_E6_9F_8F_E8_90_B1_5C_E9_A1_B9_E7_9B_AE_E7_AE_A1_E7_90_86_5C_E7_9B_BC_E7_9B_BC_E7_9F_AD_E5_89_A7_5C_E5_BC_80_E6_BA_90_E7_89_88_E6_9C_AC_5Cvignette_video_5Cuview_ui_5Ccomponents_5Cu_scroll_list_5Cu_scroll_list_vue_module_wxs_lang_wxs__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 486:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!E:/柏萱/项目管理/盼盼短剧/开源版本/vignette-video/uview-ui/components/u-scroll-list/scrollWxs.wxs?vue&type=custom&index=0&blockType=script&issuerPath=E%3A%5C%E6%9F%8F%E8%90%B1%5C%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%5C%E7%9B%BC%E7%9B%BC%E7%9F%AD%E5%89%A7%5C%E5%BC%80%E6%BA%90%E7%89%88%E6%9C%AC%5Cvignette-video%5Cuview-ui%5Ccomponents%5Cu-scroll-list%5Cu-scroll-list.vue&module=wxs&lang=wxs ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
       if(!Component.options.wxsCallMethods){
         Component.options.wxsCallMethods = []
       }
       Component.options.wxsCallMethods.push('scrollEvent')
     });

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-scroll-list/u-scroll-list.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-scroll-list/u-scroll-list-create-component',
    {
        'uview-ui/components/u-scroll-list/u-scroll-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(477))
        })
    },
    [['uview-ui/components/u-scroll-list/u-scroll-list-create-component']]
]);
