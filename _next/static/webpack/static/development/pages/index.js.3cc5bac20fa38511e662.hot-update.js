webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Noticia.js":
/*!********************************!*\
  !*** ./componentes/Noticia.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Apps Web\\Udemy\\React\\bitcoinapp\\componentes\\Noticia.js";


var Noticia = function Noticia(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "desde noticia");
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ }),

/***/ "./componentes/Noticias.js":
/*!*********************************!*\
  !*** ./componentes/Noticias.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Noticia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Noticia */ "./componentes/Noticia.js");
var _jsxFileName = "D:\\Apps Web\\Udemy\\React\\bitcoinapp\\componentes\\Noticias.js";



var Noticias = function Noticias(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.noticias.map(function (noticia) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Noticia__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      noticia: noticia,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticias);

/***/ })

})
//# sourceMappingURL=index.js.3cc5bac20fa38511e662.hot-update.js.map