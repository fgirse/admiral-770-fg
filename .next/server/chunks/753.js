"use strict";
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 6753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Heading2 */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4451);



const Heading2 = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().h2)`
  font-family: 'Architect Daughters', cursive;
  color: #ffffff;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 6rem;
  font-weight: bold; 
  -webkit-text-stroke-width: .15rem;
  -webkit-text-stroke-color: orange;

  @media ${_device__WEBPACK_IMPORTED_MODULE_2__/* .device.mobileM */ .U.mobileM} {
    font-size: 6rem; 
    width:66vw;
    font-size: 4rem;     
  }

  @media ${_device__WEBPACK_IMPORTED_MODULE_2__/* .device.laptopL */ .U.laptopL} {
    font-size: 7rem;
    margin-top: 13vh;     
  }

  @media ${_device__WEBPACK_IMPORTED_MODULE_2__/* .device.desktop */ .U.desktop} {
    font-size: 15rem;
    padding: 0;  
    text-aligne: center;   
  }
  `;



/***/ }),

/***/ 4451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ device)
/* harmony export */ });
// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px
const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
};
const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};


/***/ })

};
;