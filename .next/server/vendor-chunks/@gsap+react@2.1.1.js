"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@gsap+react@2.1.1";
exports.ids = ["vendor-chunks/@gsap+react@2.1.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@gsap+react@2.1.1/node_modules/@gsap/react/src/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/@gsap+react@2.1.1/node_modules/@gsap/react/src/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGSAP: () => (/* binding */ useGSAP)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.0.0-rc.0_react-dom@19.0.0-rc-f994737d14-20240522_react@19.0.0-rc-f994737d14-20240522__h33xfb6jvxbslachva5d7xtuc4/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"(ssr)/./node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js\");\n/*!\n * @gsap/react 2.1.1\n * https://gsap.com\n *\n * Copyright 2008-2024, GreenSock. All rights reserved.\n * Subject to the terms at https://gsap.com/standard-license or for\n * Club GSAP members, the agreement issued with that membership.\n * @author: Jack Doyle, jack@greensock.com\n*/\n/* eslint-disable */\n\n\n\nlet useIsomorphicLayoutEffect = typeof window !== \"undefined\" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect,\n    isConfig = value => value && !Array.isArray(value) && typeof(value) === \"object\",\n    emptyArray = [],\n    defaultConfig = {},\n    _gsap = gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; // accommodates situations where different versions of GSAP may be loaded, so a user can gsap.registerPlugin(useGSAP);\n\nconst useGSAP = (callback, dependencies = emptyArray) => {\n  let config = defaultConfig;\n  if (isConfig(callback)) {\n    config = callback;\n    callback = null;\n    dependencies = \"dependencies\" in config ? config.dependencies : emptyArray;\n  } else if (isConfig(dependencies)) {\n    config = dependencies;\n    dependencies = \"dependencies\" in config ? config.dependencies : emptyArray;\n  }\n  (callback && typeof callback !== \"function\") && console.warn(\"First parameter must be a function or config object\");\n  const { scope, revertOnUpdate } = config,\n        mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false),\n        context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_gsap.context(() => { }, scope)),\n        contextSafe = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((func) => context.current.add(null, func)),\n        deferCleanup = dependencies && dependencies.length && !revertOnUpdate;\n  useIsomorphicLayoutEffect(() => {\n    callback && context.current.add(callback, scope);\n    if (!deferCleanup || !mounted.current) { // React renders bottom-up, thus there could be hooks with dependencies that run BEFORE the component mounts, thus cleanup wouldn't occur since a hook with an empty dependency Array would only run once the component mounts.\n      return () => context.current.revert();\n    }\n  }, dependencies);\n  deferCleanup && useIsomorphicLayoutEffect(() => {\n      mounted.current = true;\n      return () => context.current.revert();\n    }, emptyArray);\n  return { context: context.current, contextSafe: contextSafe.current };\n};\nuseGSAP.register = core => { _gsap = core; };\nuseGSAP.headless = true; // doesn't require the window to be registered.\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGdzYXArcmVhY3RAMi4xLjEvbm9kZV9tb2R1bGVzL0Bnc2FwL3JlYWN0L3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkQ7QUFDbkM7O0FBRXhCLGdFQUFnRSxrREFBZSxHQUFHLDRDQUFTO0FBQzNGO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsWUFBWSw0Q0FBSSxFQUFFOztBQUVYO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0JBQXdCO0FBQ2xDLGtCQUFrQiw2Q0FBTTtBQUN4QixrQkFBa0IsNkNBQU0sd0JBQXdCO0FBQ2hELHNCQUFzQiw2Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsV0FBVztBQUNYO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AZ3NhcCtyZWFjdEAyLjEuMS9ub2RlX21vZHVsZXMvQGdzYXAvcmVhY3Qvc3JjL2luZGV4LmpzPzc1OTAiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAZ3NhcC9yZWFjdCAyLjEuMVxuICogaHR0cHM6Ly9nc2FwLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDA4LTIwMjQsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3NhcC5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR1NBUCBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5sZXQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3QsXG4gICAgaXNDb25maWcgPSB2YWx1ZSA9PiB2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mKHZhbHVlKSA9PT0gXCJvYmplY3RcIixcbiAgICBlbXB0eUFycmF5ID0gW10sXG4gICAgZGVmYXVsdENvbmZpZyA9IHt9LFxuICAgIF9nc2FwID0gZ3NhcDsgLy8gYWNjb21tb2RhdGVzIHNpdHVhdGlvbnMgd2hlcmUgZGlmZmVyZW50IHZlcnNpb25zIG9mIEdTQVAgbWF5IGJlIGxvYWRlZCwgc28gYSB1c2VyIGNhbiBnc2FwLnJlZ2lzdGVyUGx1Z2luKHVzZUdTQVApO1xuXG5leHBvcnQgY29uc3QgdXNlR1NBUCA9IChjYWxsYmFjaywgZGVwZW5kZW5jaWVzID0gZW1wdHlBcnJheSkgPT4ge1xuICBsZXQgY29uZmlnID0gZGVmYXVsdENvbmZpZztcbiAgaWYgKGlzQ29uZmlnKGNhbGxiYWNrKSkge1xuICAgIGNvbmZpZyA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICBkZXBlbmRlbmNpZXMgPSBcImRlcGVuZGVuY2llc1wiIGluIGNvbmZpZyA/IGNvbmZpZy5kZXBlbmRlbmNpZXMgOiBlbXB0eUFycmF5O1xuICB9IGVsc2UgaWYgKGlzQ29uZmlnKGRlcGVuZGVuY2llcykpIHtcbiAgICBjb25maWcgPSBkZXBlbmRlbmNpZXM7XG4gICAgZGVwZW5kZW5jaWVzID0gXCJkZXBlbmRlbmNpZXNcIiBpbiBjb25maWcgPyBjb25maWcuZGVwZW5kZW5jaWVzIDogZW1wdHlBcnJheTtcbiAgfVxuICAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpICYmIGNvbnNvbGUud2FybihcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgY29uZmlnIG9iamVjdFwiKTtcbiAgY29uc3QgeyBzY29wZSwgcmV2ZXJ0T25VcGRhdGUgfSA9IGNvbmZpZyxcbiAgICAgICAgbW91bnRlZCA9IHVzZVJlZihmYWxzZSksXG4gICAgICAgIGNvbnRleHQgPSB1c2VSZWYoX2dzYXAuY29udGV4dCgoKSA9PiB7IH0sIHNjb3BlKSksXG4gICAgICAgIGNvbnRleHRTYWZlID0gdXNlUmVmKChmdW5jKSA9PiBjb250ZXh0LmN1cnJlbnQuYWRkKG51bGwsIGZ1bmMpKSxcbiAgICAgICAgZGVmZXJDbGVhbnVwID0gZGVwZW5kZW5jaWVzICYmIGRlcGVuZGVuY2llcy5sZW5ndGggJiYgIXJldmVydE9uVXBkYXRlO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjYWxsYmFjayAmJiBjb250ZXh0LmN1cnJlbnQuYWRkKGNhbGxiYWNrLCBzY29wZSk7XG4gICAgaWYgKCFkZWZlckNsZWFudXAgfHwgIW1vdW50ZWQuY3VycmVudCkgeyAvLyBSZWFjdCByZW5kZXJzIGJvdHRvbS11cCwgdGh1cyB0aGVyZSBjb3VsZCBiZSBob29rcyB3aXRoIGRlcGVuZGVuY2llcyB0aGF0IHJ1biBCRUZPUkUgdGhlIGNvbXBvbmVudCBtb3VudHMsIHRodXMgY2xlYW51cCB3b3VsZG4ndCBvY2N1ciBzaW5jZSBhIGhvb2sgd2l0aCBhbiBlbXB0eSBkZXBlbmRlbmN5IEFycmF5IHdvdWxkIG9ubHkgcnVuIG9uY2UgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gICAgICByZXR1cm4gKCkgPT4gY29udGV4dC5jdXJyZW50LnJldmVydCgpO1xuICAgIH1cbiAgfSwgZGVwZW5kZW5jaWVzKTtcbiAgZGVmZXJDbGVhbnVwICYmIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgbW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybiAoKSA9PiBjb250ZXh0LmN1cnJlbnQucmV2ZXJ0KCk7XG4gICAgfSwgZW1wdHlBcnJheSk7XG4gIHJldHVybiB7IGNvbnRleHQ6IGNvbnRleHQuY3VycmVudCwgY29udGV4dFNhZmU6IGNvbnRleHRTYWZlLmN1cnJlbnQgfTtcbn07XG51c2VHU0FQLnJlZ2lzdGVyID0gY29yZSA9PiB7IF9nc2FwID0gY29yZTsgfTtcbnVzZUdTQVAuaGVhZGxlc3MgPSB0cnVlOyAvLyBkb2Vzbid0IHJlcXVpcmUgdGhlIHdpbmRvdyB0byBiZSByZWdpc3RlcmVkLlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@gsap+react@2.1.1/node_modules/@gsap/react/src/index.js\n");

/***/ })

};
;