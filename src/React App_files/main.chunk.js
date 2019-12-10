(this["webpackJsonpmturk-streamhatchet-survey"] = this["webpackJsonpmturk-streamhatchet-survey"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheet/Header.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Stylesheet/Header.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n    text-align: center;\n  }\n  \n  .App-logo {\n    height: 40vmin;\n    pointer-events: none;\n  }\n  \n  @media (prefers-reduced-motion: no-preference) {\n    .App-logo {\n      animation: App-logo-spin infinite 20s linear;\n    }\n  }\n  \n  .App-header {\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n  }\n  \n  .App-link {\n    color: #61dafb;\n  }\n  \n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  ", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheet/Streams.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Stylesheet/Streams.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".Header {\n    display: flex;\n    flex-direction: column\n  }\n  \n  .Header input, h1 {\n    align-self: center;\n  }\n  \n  .Button-box {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-self: center\n  }\n  \n  .Button {\n  color: #494949;\n  text-transform: uppercase;\n  text-decoration: none;\n  background: #ffffff;\n  padding: 20px;\n  border: 4px solid #494949;\n  transition: all 0.4s ease 0s;\n  margin: 10px;\n  width: 30%;\n  font-size: 0.9em;\n  \n  }\n  \n  .Button:hover {\n  color: #ffffff !important;\n  background: #f6b93b;\n  border-color: #f6b93b !important;\n  transition: all 0.4s ease 0s;\n  }\n  \n  input {\n    width: 70%;\n    height: 25px;\n    padding: 10px;\n    margin: 10px;\n  }\n  \n  .Stream-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  .Stream-box {\n    margin: 10px;\n    text-align: center;\n    width: 20rem;\n  }\n  \n  .Stream-box h2 {\n    height: 2em;\n  }\n  \n  table,\n  td {\n      border: 1px solid #333;\n      width: 100%;\n      border-spacing: 5px;\n      text-decoration: none;\n      color: black\n  }\n  \n  thead,\n  tfoot {\n      background-color: #333;\n      color: #fff;\n  }\n  \n  .Stream-image {\n    width: 100%;\n    margin-top : 10px;\n  }\n  \n  a {\n  text-decoration: none;\n  color: black;\n  }", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n  ", ""]);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header.js */ "./src/components/Header.js");
/* harmony import */ var _components_Streams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Streams */ "./src/components/Streams.js");
/* harmony import */ var _components_ChannetVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ChannetVideo */ "./src/components/ChannetVideo.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/src/App.js";






class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    // var express = require('express');
    // var cors = require('cors');
    // var app = express();
    // app.use(cors());
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/",
      component: _components_Streams__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      path: "/:_id",
      component: _components_ChannetVideo__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/StreamHatchet-logo.png":
/*!************************************!*\
  !*** ./src/StreamHatchet-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/StreamHatchet-logo.0452b54e.png";

/***/ }),

/***/ "./src/Stylesheet/Header.css":
/*!***********************************!*\
  !*** ./src/Stylesheet/Header.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheet/Header.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheet/Header.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheet/Header.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/Stylesheet/Streams.css":
/*!************************************!*\
  !*** ./src/Stylesheet/Streams.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Streams.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheet/Streams.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Streams.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheet/Streams.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Streams.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheet/Streams.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  headers: {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'v4v8t7mmqhjesq1inclpemhamp9idg'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/components/ChannetVideo.js":
/*!****************************************!*\
  !*** ./src/components/ChannetVideo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelVideo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Survey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Survey */ "./src/components/Survey.js");
var _jsxFileName = "/Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/src/components/ChannetVideo.js";



class ChannelVideo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.IncrementItem = () => {
      let copiedStreams = [].concat(this.state.streams);
      this.setState({
        clicks: this.state.clicks + 1,
        firstIndex: this.state.firstIndex + 1,
        secondIndex: this.state.secondIndex + 1,
        singleStream: copiedStreams.slice(this.state.firstIndex, this.state.secondIndex)
      });
      console.log(this.state.click);
      console.log(this.state.fcdex, this.state.secondIndex);
    };

    this.state = {
      video: undefined,
      firstIndex: 0,
      secondIndex: 1,
      clicks: 0
    };
  }

  componentDidMount() {
    const params = this.props.match.params;
    const channelId = params._id;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.twitch.tv/kraken/channels/${channelId}/videos`).then(response => {
      this.setState({
        video: response.data
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, this.state.video ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Hello, you will watch ", this.state.videos.channel.display_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Click in this link to start the video ", this.state.videos.url), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.state.videos.preview.medium,
      alt: "videoImg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Survey__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StreamHatchet_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StreamHatchet-logo.png */ "./src/StreamHatchet-logo.png");
/* harmony import */ var _StreamHatchet_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_StreamHatchet_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Stylesheet_Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Stylesheet/Header.css */ "./src/Stylesheet/Header.css");
/* harmony import */ var _Stylesheet_Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Stylesheet_Header_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/src/components/Header.js";




const header = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _StreamHatchet_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "App-logo",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "App-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Welcome to Stream Hatchet Mturk Survey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "You are ready to take this to the next level!"));
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/components/Streams.js":
/*!***********************************!*\
  !*** ./src/components/Streams.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Streams; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var _Stylesheet_Streams_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Stylesheet/Streams.css */ "./src/Stylesheet/Streams.css");
/* harmony import */ var _Stylesheet_Streams_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Stylesheet_Streams_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios-progress-bar */ "./node_modules/axios-progress-bar/dist/index.js");
/* harmony import */ var axios_progress_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios_progress_bar__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/src/components/Streams.js";





Object(axios_progress_bar__WEBPACK_IMPORTED_MODULE_4__["loadProgressBar"])();
class Streams extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.IncrementItem = () => {
      let copiedStreams = [].concat(this.state.streams);
      this.setState({
        clicks: this.state.clicks + 1,
        firstIndex: this.state.firstIndex + 1,
        secondIndex: this.state.secondIndex + 1
      });
      this.setState({
        singleStream: copiedStreams.slice(this.state.firstIndex, this.state.secondIndex)
      });
      console.log(this.state.firstIndex, this.state.secondIndex);
      console.log(this.state.singleStream);
      console.log(this.state.clicks);
    };

    this.DecreaseItem = () => {
      let copiedStreams = [].concat(this.state.streams);
      this.setState({
        clicks: this.state.clicks - 1,
        firstIndex: this.state.firstIndex - 1,
        secondIndex: this.state.secondIndex - 1,
        singleStream: copiedStreams.slice(this.state.firstIndex, this.state.secondIndex)
      });
    };

    this.state = {
      streams: [],
      firstIndex: 0,
      secondIndex: 1,
      clicks: 0,
      singleStream: []
    };
  } // Load all the streams and set the current one


  componentDidMount() {
    _api__WEBPACK_IMPORTED_MODULE_2__["default"].get("https://api.twitch.tv/kraken/streams/").then(response => {
      this.setState({
        streams: response.data.streams,
        singleStream: response.data.streams.slice(0, 1)
      });
      console.log(response.data.streams);
      console.log(this.state.singleStream);
      console.log(this.state.firstIndex);
      console.log(this.state.secondIndex);
      console.log(this.state.clicks);
    });
  } // Change the index of the slice in 'SingleStream state' to change the displayed video upon click


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Stream-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, this.state.streams ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.streams.map((streamsArray, key) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: key,
        className: "Stream-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: `/${streamsArray.channel._id}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, streamsArray.game), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, streamsArray.channel.display_name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Views"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, streamsArray.channel.views)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Followers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, streamsArray.channel.followers)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "Stream-image",
        src: streamsArray.preview.medium,
        alt: "SreamImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })));
    })) : null);
  }

}

/***/ }),

/***/ "./src/components/Survey.js":
/*!**********************************!*\
  !*** ./src/components/Survey.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return surveyComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react */ "./node_modules/survey-react/survey.react.js");
/* harmony import */ var survey_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_react_survey_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-react/survey.css */ "./node_modules/survey-react/survey.css");
/* harmony import */ var survey_react_survey_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_react_survey_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/src/components/Survey.js";
 //In your react App.js or yourComponent.js file add these lines to import



class surveyComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false
    };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }

  onCompleteComponent() {
    this.setState({
      isCompleted: true
    });
  }

  render() {
    let json = {
      title: "Stream Hatchet Twitch Survey",
      showProgressBar: "top",
      pages: [{
        title: "About the Stream",
        questions: [{
          type: "checkbox",
          name: "streamContent",
          title: "How would you describe the stream content?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 1,
          choicesOrder: "asc",
          choices: ["Family-friendly", "Fandom", "Informative", "Instructive", "Miscellaneous", "Original", "Pop culture", "Retro Music", "Software & Web", "Tournaments"]
        }, {
          type: "checkbox",
          name: "streamFeatures",
          title: "What are the stream features?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 1,
          choicesOrder: "asc",
          choices: ["Fundraising", "Giveaways", "Music", "Subtitles", "Technical terms"]
        }, {
          type: "checkbox",
          name: "streamVideo",
          title: "Tell us more about the video?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 1,
          choicesOrder: "asc",
          choices: ["Handcam", "No camera", "No voice"]
        }]
      }, {
        title: "About the Streamer",
        questions: [{
          type: "checkbox",
          name: "streamers",
          title: "What is the streamer doing?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 1,
          choicesOrder: "asc",
          choices: ["Food & Drink", "Illustration", "Inactive", "Interactive streaming", "Memes", "Singing", "Troll"]
        }, {
          type: "checkbox",
          name: "streamers",
          title: "Do you know more about the streamer character?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 1,
          choicesOrder: "asc",
          choices: ["Feminism", "Game’s developer", "LGBTQIA", "Role play", "Skilled"]
        }]
      }]
    };
    var surveyRender = !this.state.isCompleted ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(survey_react__WEBPACK_IMPORTED_MODULE_1__["Survey"], {
      json: json,
      showCompletedPage: true,
      onComplete: this.onCompleteComponent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }) : null;
    var onCompleteComponent = this.state.isCompleted ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Thanks for completing the survey about this video. Not enought, you want to see another video? Click on next!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onclick: "activateLasers()",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Next")) : null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, surveyRender, onCompleteComponent);
  }

}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/annevandendooren/Documents/StreamHatchet/Dev/mturk-streamhatchet-survey/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map