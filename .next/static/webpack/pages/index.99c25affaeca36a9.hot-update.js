"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_admin_Documents_next_ssr_deploy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_admin_Documents_next_ssr_deploy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_admin_Documents_next_ssr_deploy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n// import fetch from 'isomorphic-unfetch';\n\nvar Index = function(param) {\n    var productData = param.productData;\n    console.log(productData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Welcome to Next Application\"\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Documents/next-ssr-deploy/pages/index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: \"Product List\"\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Documents/next-ssr-deploy/pages/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/admin/Documents/next-ssr-deploy/pages/index.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Documents/next-ssr-deploy/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\nIndex.getInitialProps = _asyncToGenerator(_Users_admin_Documents_next_ssr_deploy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response, result;\n    return _Users_admin_Documents_next_ssr_deploy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://gorest.co.in/public/v2/posts\");\n            case 2:\n                response = _ctx.sent;\n                _ctx.next = 5;\n                return console.log(\"==response==>\", response);\n            case 5:\n                _ctx.next = 7;\n                return response.json();\n            case 7:\n                result = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    productData: response.data\n                });\n            case 9:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2hCO0FBQzFCLDBDQUEwQztBQUNoQjtBQUUxQixJQUFNRyxLQUFLLEdBQUcsZ0JBQXFCO1FBQWxCQyxXQUFXLFNBQVhBLFdBQVc7SUFDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXLENBQUMsQ0FBQztJQUN6QixxQkFDRSw4REFBQ0osMERBQU07a0JBQ0wsNEVBQUNPLEtBQUc7OzhCQUNGLDhEQUFDQyxJQUFFOzhCQUFDLDZCQUEyQjs7Ozs7eUJBQUs7OEJBQ3BDLDhEQUFDQyxJQUFFOzhCQUFDLGNBQVk7Ozs7O3lCQUFLOzs7Ozs7aUJBUWpCOzs7OzthQUNDLENBQ1Q7Q0FDSDtBQWpCS04sS0FBQUEsS0FBSztBQW1CWEEsS0FBSyxDQUFDTyxlQUFlLEdBQUcsdUxBQWtCO1FBQ2xDQyxRQUFRLEVBRVJDLE1BQU07Ozs7O3VCQUZXWCxnREFBUyxDQUFDLHNDQUFzQyxDQUFDOztnQkFBbEVVLFFBQVEsWUFBMEQ7O3VCQUNsRU4sT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFDSyxRQUFRLENBQUM7Ozt1QkFDdEJBLFFBQVEsQ0FBQ0csSUFBSSxFQUFFOztnQkFBOUJGLE1BQU0sWUFBd0I7NkNBQzdCO29CQUFFUixXQUFXLEVBQUVPLFFBQVEsQ0FBQ0ksSUFBSTtpQkFBRTs7Ozs7O0NBQ3RDLEdBQUM7QUFFRiwrREFBZVosS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleCA9ICh7IHByb2R1Y3REYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2cocHJvZHVjdERhdGEpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+V2VsY29tZSB0byBOZXh0IEFwcGxpY2F0aW9uPC9oMT5cbiAgICAgICAgPGgzPlByb2R1Y3QgTGlzdDwvaDM+XG4gICAgICAgIHsvKiB7cHJvZHVjdERhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntpdGVtLm5hbWV9PC9saT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfSAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vZ29yZXN0LmNvLmluL3B1YmxpYy92Mi9wb3N0c1wiKTtcbiAgYXdhaXQgY29uc29sZS5sb2coXCI9PXJlc3BvbnNlPT0+XCIscmVzcG9uc2UpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB7IHByb2R1Y3REYXRhOiByZXNwb25zZS5kYXRhIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJheGlvcyIsIlJlYWN0IiwiSW5kZXgiLCJwcm9kdWN0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImgzIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJnZXQiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});