webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.263d5a405f687fb87626.hot-update.js.map