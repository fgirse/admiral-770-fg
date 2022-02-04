"use strict";
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 5705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POSTS_PER_PAGE": () => (/* binding */ POSTS_PER_PAGE),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6852);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9795);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8590);
/* harmony import */ var _components_Headings_Heading2_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6753);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_1__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const POSTS_PER_PAGE = 5;
async function getStaticProps() {
    const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_1__/* .getAllFilesFrontMatter */ .sj)('blog');
    const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
    };
    return {
        props: {
            initialDisplayPosts,
            posts,
            pagination
        }
    };
}
function Blog() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            class: "w-full px-8 py-32 bg-gray-800 xl:px-8 min-h-[70vh]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "max-w-5xl mx-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "flex flex-col items-center lg:flex-row md:mt-16 lg:mt-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            class: "w-full space-y-5 md:w-4/5 md:pr-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute w-5/12 left-[60vw] top-[16vh] sm:top-[25vh] sm:4/12 md:w-3/12 md:left[-54vw] md:top-[15vh] lg:top-[23vh] lg:left-[43vw] lg:absolute lg:w-48 lg:top-33 xl:top-[20]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        className: "",
                                        src: "/Albers_Illu_white.png",
                                        alt: "ILLLustration",
                                        layout: "responsive",
                                        height: 195,
                                        width: 208
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    class: "font-medium text-yellow-500 uppercase md:text-4xl",
                                    children: "Networking ist in..."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    class: "text-2xl font-extrabold leading-none text-gray-300 sm:text-3xl md:text-6xl",
                                    children: "Mach mit im Rettungsanker Bloq!"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    class: "z-40 text-lg text-gray-300 md:pr-16",
                                    children: "Melde Dich mit email Adrese und Passwort an Falls noch keinen Account, dann bitte um Registrierung im Rettungsanker Blog."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "w-full mt-16 md:mt-12 md:w-4/5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "relative z-10 h-auto p-8 py-10 overflow-hidden bg-yellow-400 border-b-2 border-gray-300 rounded-lg shadow-2xl px-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        class: "mb-6 text-2xl font-medium text-center ",
                                        children: "Anmeldung zum Blog"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "email",
                                        class: "block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none",
                                        placeholder: "Email address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "password",
                                        name: "password",
                                        class: "block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none",
                                        placeholder: "Password"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            class: "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg",
                                            children: "Log In"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        class: "w-full mt-4 text-sm text-center text-gray-500",
                                        children: [
                                            "Noch keinen Account? ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#_",
                                                class: "text-blue-500 underline",
                                                children: "Registriere Dich im Bloq"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};

});

/***/ })

};
;