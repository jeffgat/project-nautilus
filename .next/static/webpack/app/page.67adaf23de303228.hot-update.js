"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _stores_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/stores/calculator */ \"(app-client)/./stores/calculator.ts\");\n/* harmony import */ var _utils_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/operations */ \"(app-client)/./utils/operations.ts\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jotai */ \"(app-client)/./node_modules/jotai/esm/react.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// OVERVIEW\n// * Must support the four basic math operations (+, -, x , / ).\n// refactor these out to separate file\n// * Must have state management (using Redux or Zustand, etc).\n// will probably use mobx\n// * Should be as modular as possible, as you see fit.\n// emphasize non coupled components\n// generic Button component\n// maybe a Buttons component\n\n\nconst Button = (param)=>{\n    let { symbol , action  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"flex items-center justify-center h-12 rounded-md bg-blue-600 font-medium text-lg text-neutral-50 shadow-sm outline-none hover:bg-blue-700\",\n        onClick: action,\n        children: symbol\n    }, void 0, false, {\n        fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Button;\nfunction Home() {\n    _s();\n    const [value, setValue] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_stores_calculator__WEBPACK_IMPORTED_MODULE_1__.calculatorAtom);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-1 flex-col justify-center min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:mx-auto sm:w-full sm:max-w-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-2 text-center text-3xl font-bold tracking-tight text-neutral-50\",\n                        children: \"Project Nautilus\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-2 text-center text-base text-neutral-200\",\n                        children: \"A simple react calculator for your everyday needs.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 sm:mx-auto sm:w-full sm:max-w-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-neutral-850 py-8 px-4 shadow sm:rounded-lg sm:px-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-4 gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-end rounded-md col-span-4 h-16 px-4 mb-4 bg-neutral-700 text-white text-xl\",\n                                    children: value\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \".\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"0\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"1\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"2\",\n                                    action: ()=>setValue(2)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"3\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"4\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"5\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"6\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"7\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"8\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"9\",\n                                    action: ()=>setValue(1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"+\",\n                                    action: (0,_utils_operations__WEBPACK_IMPORTED_MODULE_2__.add)(1, 1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"-\",\n                                    action: (0,_utils_operations__WEBPACK_IMPORTED_MODULE_2__.subtract)(1, 1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"*\",\n                                    action: (0,_utils_operations__WEBPACK_IMPORTED_MODULE_2__.multiply)(1, 1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    symbol: \"/\",\n                                    action: (0,_utils_operations__WEBPACK_IMPORTED_MODULE_2__.divide)(1, 1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeffreygatbonton/Desktop/Code/takehomes/nautilus/client/app/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"gx4ctYiNspUZrIOsk7FAch9XNzI=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDcUQ7QUFDckQsV0FBVztBQUNYLGdFQUFnRTtBQUNoRSxzQ0FBc0M7QUFDdEMsOERBQThEO0FBQzlELHlCQUF5QjtBQUN6QixzREFBc0Q7QUFDdEQsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFFeUM7QUFDckM7QUFRaEMsTUFBTU0sU0FBUyxTQUFxQztRQUFwQyxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBZTtJQUMzQyxxQkFDSSw4REFBQ0M7UUFDR0MsV0FBVTtRQUNWQyxTQUFTSDtrQkFDUkQ7Ozs7OztBQUdiO0tBUk1EO0FBVVMsU0FBU00sT0FBTzs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULDhDQUFPQSxDQUFDTCw4REFBY0E7SUFFaEQscUJBQ0ksOERBQUNlO1FBQUtMLFdBQVU7OzBCQUNaLDhEQUFDTTtnQkFBSU4sV0FBVTs7a0NBQ1gsOERBQUNPO3dCQUFHUCxXQUFVO2tDQUFxRTs7Ozs7O2tDQUduRiw4REFBQ1E7d0JBQUVSLFdBQVU7a0NBQThDOzs7Ozs7Ozs7Ozs7MEJBSy9ELDhEQUFDTTtnQkFBSU4sV0FBVTswQkFDWCw0RUFBQ007b0JBQUlOLFdBQVU7OEJBQ1gsNEVBQUNNO3dCQUFJTixXQUFVO2tDQUNYLDRFQUFDTTs0QkFBSU4sV0FBVTs7OENBQ1gsOERBQUNNO29DQUFJTixXQUFVOzhDQUNWRzs7Ozs7OzhDQUVMLDhEQUFDUDtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBQzFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUSxJQUFNTSxTQUFTOzs7Ozs7OENBRTFDLDhEQUFDUjtvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUVAsc0RBQUdBLENBQUMsR0FBRzs7Ozs7OzhDQUNsQyw4REFBQ0s7b0NBQU9DLFFBQU87b0NBQUlDLFFBQVFOLDJEQUFRQSxDQUFDLEdBQUc7Ozs7Ozs4Q0FDdkMsOERBQUNJO29DQUFPQyxRQUFPO29DQUFJQyxRQUFRTCwyREFBUUEsQ0FBQyxHQUFHOzs7Ozs7OENBQ3ZDLDhEQUFDRztvQ0FBT0MsUUFBTztvQ0FBSUMsUUFBUUoseURBQU1BLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pFLENBQUM7R0EzQ3VCUTs7UUFDTVAsMENBQU9BOzs7TUFEYk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgY2FsY3VsYXRvckF0b20gfSBmcm9tICdAL3N0b3Jlcy9jYWxjdWxhdG9yJztcbi8vIE9WRVJWSUVXXG4vLyAqIE11c3Qgc3VwcG9ydCB0aGUgZm91ciBiYXNpYyBtYXRoIG9wZXJhdGlvbnMgKCssIC0sIHggLCAvICkuXG4vLyByZWZhY3RvciB0aGVzZSBvdXQgdG8gc2VwYXJhdGUgZmlsZVxuLy8gKiBNdXN0IGhhdmUgc3RhdGUgbWFuYWdlbWVudCAodXNpbmcgUmVkdXggb3IgWnVzdGFuZCwgZXRjKS5cbi8vIHdpbGwgcHJvYmFibHkgdXNlIG1vYnhcbi8vICogU2hvdWxkIGJlIGFzIG1vZHVsYXIgYXMgcG9zc2libGUsIGFzIHlvdSBzZWUgZml0LlxuLy8gZW1waGFzaXplIG5vbiBjb3VwbGVkIGNvbXBvbmVudHNcbi8vIGdlbmVyaWMgQnV0dG9uIGNvbXBvbmVudFxuLy8gbWF5YmUgYSBCdXR0b25zIGNvbXBvbmVudFxuXG5pbXBvcnQgeyBhZGQsIHN1YnRyYWN0LCBtdWx0aXBseSwgZGl2aWRlIH0gZnJvbSAnQC91dGlscy9vcGVyYXRpb25zJztcbmltcG9ydCB7IHVzZUF0b20gfSBmcm9tICdqb3RhaSc7XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyB7XG4gICAgc3ltYm9sOiBzdHJpbmc7XG4gICAgYWN0aW9uPzogYW55O1xuICAgIC8vIG9uQ2xpY2s/OiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuY29uc3QgQnV0dG9uID0gKHsgc3ltYm9sLCBhY3Rpb24gfTogQnV0dG9uUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEyIHJvdW5kZWQtbWQgYmctYmx1ZS02MDAgZm9udC1tZWRpdW0gdGV4dC1sZyB0ZXh0LW5ldXRyYWwtNTAgc2hhZG93LXNtIG91dGxpbmUtbm9uZSBob3ZlcjpiZy1ibHVlLTcwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXthY3Rpb259PlxuICAgICAgICAgICAge3N5bWJvbH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VBdG9tKGNhbGN1bGF0b3JBdG9tKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpteC1hdXRvIHNtOnctZnVsbCBzbTptYXgtdy1tZFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0yIHRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LW5ldXRyYWwtNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBOYXV0aWx1c1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgdGV4dC1uZXV0cmFsLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICBBIHNpbXBsZSByZWFjdCBjYWxjdWxhdG9yIGZvciB5b3VyIGV2ZXJ5ZGF5IG5lZWRzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggc206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXctbWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtODUwIHB5LTggcHgtNCBzaGFkb3cgc206cm91bmRlZC1sZyBzbTpweC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHJvdW5kZWQtbWQgY29sLXNwYW4tNCBoLTE2IHB4LTQgbWItNCBiZy1uZXV0cmFsLTcwMCB0ZXh0LXdoaXRlIHRleHQteGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiLlwiIGFjdGlvbj17KCkgPT4gc2V0VmFsdWUoMSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzeW1ib2w9XCIwXCIgYWN0aW9uPXsoKSA9PiBzZXRWYWx1ZSgxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN5bWJvbD1cIjFcIiBhY3Rpb249eygpID0+IHNldFZhbHVlKDEpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiMlwiIGFjdGlvbj17KCkgPT4gc2V0VmFsdWUoMil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzeW1ib2w9XCIzXCIgYWN0aW9uPXsoKSA9PiBzZXRWYWx1ZSgxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN5bWJvbD1cIjRcIiBhY3Rpb249eygpID0+IHNldFZhbHVlKDEpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiNVwiIGFjdGlvbj17KCkgPT4gc2V0VmFsdWUoMSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzeW1ib2w9XCI2XCIgYWN0aW9uPXsoKSA9PiBzZXRWYWx1ZSgxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN5bWJvbD1cIjdcIiBhY3Rpb249eygpID0+IHNldFZhbHVlKDEpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiOFwiIGFjdGlvbj17KCkgPT4gc2V0VmFsdWUoMSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzeW1ib2w9XCI5XCIgYWN0aW9uPXsoKSA9PiBzZXRWYWx1ZSgxKX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiK1wiIGFjdGlvbj17YWRkKDEsIDEpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiLVwiIGFjdGlvbj17c3VidHJhY3QoMSwgMSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzeW1ib2w9XCIqXCIgYWN0aW9uPXttdWx0aXBseSgxLCAxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN5bWJvbD1cIi9cIiBhY3Rpb249e2RpdmlkZSgxLCAxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjYWxjdWxhdG9yQXRvbSIsImFkZCIsInN1YnRyYWN0IiwibXVsdGlwbHkiLCJkaXZpZGUiLCJ1c2VBdG9tIiwiQnV0dG9uIiwic3ltYm9sIiwiYWN0aW9uIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIkhvbWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibWFpbiIsImRpdiIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});