(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__(1);
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/dialog/index.js
var dialog = __webpack_require__(24);
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/button/index.js
var lib_button = __webpack_require__(65);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/feedback/index.js
var feedback = __webpack_require__(26);
var feedback_default = /*#__PURE__*/__webpack_require__.n(feedback);

// EXTERNAL MODULE: ./renderer/node_modules/mobx-react/index.module.js
var index_module = __webpack_require__(81);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/tab/index.js
var tab = __webpack_require__(674);
var tab_default = /*#__PURE__*/__webpack_require__.n(tab);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/input/index.js
var input = __webpack_require__(664);
var input_default = /*#__PURE__*/__webpack_require__.n(input);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./renderer/src/components/BlockCategory/index.jsx + 3 modules
var BlockCategory = __webpack_require__(741);

// EXTERNAL MODULE: ./renderer/src/components/Block/CustomBlock.jsx
var CustomBlock = __webpack_require__(720);

// EXTERNAL MODULE: ./renderer/node_modules/react-modal/lib/index.js
var lib = __webpack_require__(694);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./renderer/src/components/Icon/index.jsx
var Icon = __webpack_require__(22);

// EXTERNAL MODULE: ./renderer/src/components/Block/PreviewModal/index.scss
var PreviewModal = __webpack_require__(718);

// CONCATENATED MODULE: ./renderer/src/components/Block/PreviewModal/custom.jsx
var _dec, _class, _class2, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var custom_CustomBlocksPreviewModal = (_dec = Object(index_module["b" /* inject */])('customBlocks'), _dec(_class = Object(index_module["c" /* observer */])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomBlocksPreviewModal, _Component);

  function CustomBlocksPreviewModal() {
    _classCallCheck(this, CustomBlocksPreviewModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomBlocksPreviewModal).apply(this, arguments));
  }

  _createClass(CustomBlocksPreviewModal, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      lib_default.a.setAppElement('body');
    }
  }, {
    key: "render",
    value: function render() {
      var customBlocks = this.props.customBlocks;
      return external_window_React_default.a.createElement(lib_default.a, {
        isOpen: customBlocks.showModal,
        onRequestClose: customBlocks.closeModal,
        className: "preview-modal",
        style: {
          overlay: {
            background: '#fff',
            zIndex: '10000'
          }
        }
      }, external_window_React_default.a.createElement("img", {
        className: "preview-block-img",
        src: customBlocks.previewBlock.screenshot,
        alt: customBlocks.previewBlock.name
      }), external_window_React_default.a.createElement("div", {
        className: "preview-block-close",
        onClick: customBlocks.closeModal
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "close",
        className: "preview-block-close-icon"
      })));
    }
  }]);

  return CustomBlocksPreviewModal;
}(external_window_React_["Component"]), _class2.displayName = 'PreviewModal', _class2.propTypes = {
  customBlocks: prop_types_default.a.object.isRequired
}, _temp)) || _class) || _class);
/* harmony default export */ var custom = (custom_CustomBlocksPreviewModal);
// EXTERNAL MODULE: ./renderer/src/components/BlockCategory/index.scss
var components_BlockCategory = __webpack_require__(721);

// CONCATENATED MODULE: ./renderer/src/components/BlockCategory/Custom.jsx
var Custom_dec, Custom_class, Custom_temp;

function Custom_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Custom_typeof = function _typeof(obj) { return typeof obj; }; } else { Custom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Custom_typeof(obj); }

function Custom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Custom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Custom_createClass(Constructor, protoProps, staticProps) { if (protoProps) Custom_defineProperties(Constructor.prototype, protoProps); if (staticProps) Custom_defineProperties(Constructor, staticProps); return Constructor; }

function Custom_possibleConstructorReturn(self, call) { if (call && (Custom_typeof(call) === "object" || typeof call === "function")) { return call; } return Custom_assertThisInitialized(self); }

function Custom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Custom_getPrototypeOf(o) { Custom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Custom_getPrototypeOf(o); }

function Custom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Custom_setPrototypeOf(subClass, superClass); }

function Custom_setPrototypeOf(o, p) { Custom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Custom_setPrototypeOf(o, p); }







var Custom_CustomBlockCategory = (Custom_dec = Object(index_module["b" /* inject */])('customBlocks', 'blocks', 'pageBlockPicker'), Custom_dec(Custom_class = Object(index_module["c" /* observer */])(Custom_class = (Custom_temp =
/*#__PURE__*/
function (_Component) {
  Custom_inherits(CustomBlockCategory, _Component);

  function CustomBlockCategory() {
    var _getPrototypeOf2;

    var _this;

    Custom_classCallCheck(this, CustomBlockCategory);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Custom_possibleConstructorReturn(this, (_getPrototypeOf2 = Custom_getPrototypeOf(CustomBlockCategory)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleSelected = function (block, blockName) {
      _this.props.blocks.addCustomBlock(block, blockName, _this.props.pageBlockPicker.existBlocks);
    };

    return _this;
  }

  Custom_createClass(CustomBlockCategory, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var customBlocks = this.props.customBlocks.blocksStorage;
      return external_window_React_default.a.createElement("div", {
        className: "blcoks-wrapper"
      }, external_window_React_default.a.createElement("div", {
        className: "block-category"
      }, external_window_React_default.a.createElement("div", {
        className: "block-category-body"
      }, Object.keys(customBlocks).map(function (blockName) {
        return external_window_React_default.a.createElement(CustomBlock["a" /* default */], {
          key: blockName,
          blockName: blockName,
          block: customBlocks[blockName],
          onClick: _this2.handleSelected
        });
      }))), external_window_React_default.a.createElement(custom, null));
    }
  }]);

  return CustomBlockCategory;
}(external_window_React_["Component"]), Custom_temp)) || Custom_class) || Custom_class);
/* harmony default export */ var Custom = (Custom_CustomBlockCategory);
// EXTERNAL MODULE: ./renderer/src/components/BlockGroupCategory/PreviewModal/index.scss
var BlockGroupCategory_PreviewModal = __webpack_require__(892);

// CONCATENATED MODULE: ./renderer/src/components/BlockGroupCategory/PreviewModal/index.jsx
var PreviewModal_dec, PreviewModal_class, PreviewModal_class2, PreviewModal_temp;

function PreviewModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PreviewModal_typeof = function _typeof(obj) { return typeof obj; }; } else { PreviewModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PreviewModal_typeof(obj); }

function PreviewModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PreviewModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PreviewModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) PreviewModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) PreviewModal_defineProperties(Constructor, staticProps); return Constructor; }

function PreviewModal_possibleConstructorReturn(self, call) { if (call && (PreviewModal_typeof(call) === "object" || typeof call === "function")) { return call; } return PreviewModal_assertThisInitialized(self); }

function PreviewModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PreviewModal_getPrototypeOf(o) { PreviewModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PreviewModal_getPrototypeOf(o); }

function PreviewModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PreviewModal_setPrototypeOf(subClass, superClass); }

function PreviewModal_setPrototypeOf(o, p) { PreviewModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PreviewModal_setPrototypeOf(o, p); }







var PreviewModal_BlockGroupPreviewModal = (PreviewModal_dec = Object(index_module["b" /* inject */])('blockGroups'), PreviewModal_dec(PreviewModal_class = Object(index_module["c" /* observer */])(PreviewModal_class = (PreviewModal_temp = PreviewModal_class2 =
/*#__PURE__*/
function (_Component) {
  PreviewModal_inherits(BlockGroupPreviewModal, _Component);

  function BlockGroupPreviewModal() {
    PreviewModal_classCallCheck(this, BlockGroupPreviewModal);

    return PreviewModal_possibleConstructorReturn(this, PreviewModal_getPrototypeOf(BlockGroupPreviewModal).apply(this, arguments));
  }

  PreviewModal_createClass(BlockGroupPreviewModal, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      lib_default.a.setAppElement('body');
    }
  }, {
    key: "render",
    value: function render() {
      var blockGroups = this.props.blockGroups;
      return external_window_React_default.a.createElement(lib_default.a, {
        isOpen: blockGroups.showModal,
        onRequestClose: blockGroups.closeModal,
        className: "preview-modal",
        style: {
          overlay: {
            background: '#fff',
            zIndex: '10000'
          }
        }
      }, external_window_React_default.a.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, blockGroups.previewBlocks.map(function (block, index) {
        return external_window_React_default.a.createElement("img", {
          key: index,
          className: "preview-block-img",
          src: block.screenshot,
          alt: block.name
        });
      })), external_window_React_default.a.createElement("div", {
        className: "preview-block-close",
        onClick: blockGroups.closeModal
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "close",
        className: "preview-block-close-icon"
      })));
    }
  }]);

  return BlockGroupPreviewModal;
}(external_window_React_["Component"]), PreviewModal_class2.displayName = 'PreviewModal', PreviewModal_class2.propTypes = {
  blockGroups: prop_types_default.a.object.isRequired
}, PreviewModal_temp)) || PreviewModal_class) || PreviewModal_class);
/* harmony default export */ var components_BlockGroupCategory_PreviewModal = (PreviewModal_BlockGroupPreviewModal);
// EXTERNAL MODULE: ./renderer/src/services.js
var services = __webpack_require__(6);

// EXTERNAL MODULE: ./renderer/src/components/BlockGroupCategory/BlockGroup.scss
var BlockGroupCategory_BlockGroup = __webpack_require__(893);

// CONCATENATED MODULE: ./renderer/src/components/BlockGroupCategory/BlockGroup.jsx


var BlockGroup_dec, BlockGroup_class, BlockGroup_class2, BlockGroup_temp;

function BlockGroup_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlockGroup_typeof = function _typeof(obj) { return typeof obj; }; } else { BlockGroup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlockGroup_typeof(obj); }

function BlockGroup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlockGroup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlockGroup_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlockGroup_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlockGroup_defineProperties(Constructor, staticProps); return Constructor; }

function BlockGroup_possibleConstructorReturn(self, call) { if (call && (BlockGroup_typeof(call) === "object" || typeof call === "function")) { return call; } return BlockGroup_assertThisInitialized(self); }

function BlockGroup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BlockGroup_getPrototypeOf(o) { BlockGroup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlockGroup_getPrototypeOf(o); }

function BlockGroup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlockGroup_setPrototypeOf(subClass, superClass); }

function BlockGroup_setPrototypeOf(o, p) { BlockGroup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlockGroup_setPrototypeOf(o, p); }







var BlockGroup_BlockGroup = (BlockGroup_dec = Object(index_module["b" /* inject */])('blocks', 'blockGroups', 'pageBlockPicker', 'newpage'), BlockGroup_dec(BlockGroup_class = Object(index_module["c" /* observer */])(BlockGroup_class = (BlockGroup_temp = BlockGroup_class2 =
/*#__PURE__*/
function (_Component) {
  BlockGroup_inherits(BlockGroup, _Component);

  function BlockGroup() {
    var _getPrototypeOf2;

    var _this;

    BlockGroup_classCallCheck(this, BlockGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = BlockGroup_possibleConstructorReturn(this, (_getPrototypeOf2 = BlockGroup_getPrototypeOf(BlockGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.openBlockImgPreview = function (event, blocks) {
      event.stopPropagation();
      var blockGroups = _this.props.blockGroups;
      blockGroups.openModal(blocks);
    };

    _this.getBlocks = function () {
      var _this$props$blockGrou = _this.props.blockGroup.blocks,
          blocks = _this$props$blockGrou === void 0 ? [] : _this$props$blockGrou;
      var _this$props$blocks = _this.props.blocks,
          materials = _this$props$blocks.materials,
          getIceMaterial = _this$props$blocks.getIceMaterial; // 目前支持飞冰物料源

      var _ref = getIceMaterial() || {},
          iceMaterial = _ref.iceMaterial;

      var iceBlocks = iceMaterial.originBlocks || [];
      return blocks.map(function (block) {
        return iceBlocks.find(function (iceBlock) {
          var npm = iceBlock.source && iceBlock.source.npm;
          return block.includes(npm);
        });
      });
    };

    _this.onBlockGroupClick = function () {
      var _this$props = _this.props,
          handleBlocksAdd = _this$props.handleBlocksAdd,
          blockGroup = _this$props.blockGroup;

      var blocks = _this.getBlocks();

      services["glodlog"].record({
        type: 'app',
        action: 'add-block-group',
        data: {
          name: blockGroup.name
        }
      });
      handleBlocksAdd(blocks);
    };

    return _this;
  }

  BlockGroup_createClass(BlockGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          blockGroup = _this$props2.blockGroup,
          generatePage = _this$props2.generatePage,
          newpage = _this$props2.newpage,
          pageBlockPicker = _this$props2.pageBlockPicker;
      var blocks = this.getBlocks();
      return external_window_React_default.a.createElement("div", {
        className: "block ibg-block-group",
        onClick: this.onBlockGroupClick
      }, external_window_React_default.a.createElement("div", {
        className: "screenshot"
      }, external_window_React_default.a.createElement("div", {
        className: "screenshot-wrapper"
      }, blocks.map(function (block, index) {
        return external_window_React_default.a.createElement("img", {
          key: index,
          className: "screenshot-img",
          src: block.screenshot
        });
      }))), external_window_React_default.a.createElement("p", null, blockGroup.name), external_window_React_default.a.createElement("div", {
        className: "ibg-handle"
      }, external_window_React_default.a.createElement(button_default.a, {
        className: "ibg-handle-btn",
        onClick: function onClick(event) {
          _this2.openBlockImgPreview(event, blocks);
        }
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "02magnifyingglasspluszoom"
      }), " \u9884\u89C8\u6548\u679C")));
    }
  }]);

  return BlockGroup;
}(external_window_React_["Component"]), BlockGroup_class2.propTypes = {
  generatePage: prop_types_default.a.func,
  handleBlocksAdd: prop_types_default.a.func,
  blockGroup: prop_types_default.a.object
}, BlockGroup_class2.defaultProps = {
  generatePage: function generatePage() {},
  handleBlocksAdd: function handleBlocksAdd() {},
  blockGroup: {}
}, BlockGroup_temp)) || BlockGroup_class) || BlockGroup_class);
/* harmony default export */ var components_BlockGroupCategory_BlockGroup = (BlockGroup_BlockGroup);
// EXTERNAL MODULE: ./renderer/src/components/BlockGroupCategory/index.scss
var components_BlockGroupCategory = __webpack_require__(894);

// CONCATENATED MODULE: ./renderer/src/components/BlockGroupCategory/index.jsx
var BlockGroupCategory_dec, BlockGroupCategory_class, BlockGroupCategory_class2, BlockGroupCategory_temp;

function BlockGroupCategory_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlockGroupCategory_typeof = function _typeof(obj) { return typeof obj; }; } else { BlockGroupCategory_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlockGroupCategory_typeof(obj); }

function BlockGroupCategory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlockGroupCategory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlockGroupCategory_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlockGroupCategory_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlockGroupCategory_defineProperties(Constructor, staticProps); return Constructor; }

function BlockGroupCategory_possibleConstructorReturn(self, call) { if (call && (BlockGroupCategory_typeof(call) === "object" || typeof call === "function")) { return call; } return BlockGroupCategory_assertThisInitialized(self); }

function BlockGroupCategory_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BlockGroupCategory_getPrototypeOf(o) { BlockGroupCategory_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlockGroupCategory_getPrototypeOf(o); }

function BlockGroupCategory_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlockGroupCategory_setPrototypeOf(subClass, superClass); }

function BlockGroupCategory_setPrototypeOf(o, p) { BlockGroupCategory_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlockGroupCategory_setPrototypeOf(o, p); }







var BlockGroupCategory_BlockGroupCategory = (BlockGroupCategory_dec = Object(index_module["b" /* inject */])('blockGroups', 'pageBlockPicker'), BlockGroupCategory_dec(BlockGroupCategory_class = Object(index_module["c" /* observer */])(BlockGroupCategory_class = (BlockGroupCategory_temp = BlockGroupCategory_class2 =
/*#__PURE__*/
function (_Component) {
  BlockGroupCategory_inherits(BlockGroupCategory, _Component);

  function BlockGroupCategory() {
    BlockGroupCategory_classCallCheck(this, BlockGroupCategory);

    return BlockGroupCategory_possibleConstructorReturn(this, BlockGroupCategory_getPrototypeOf(BlockGroupCategory).apply(this, arguments));
  }

  BlockGroupCategory_createClass(BlockGroupCategory, [{
    key: "render",
    value: function render() {
      var _this$props$blockGrou = this.props.blockGroups,
          blockGroups = _this$props$blockGrou.blockGroups,
          isLoading = _this$props$blockGrou.isLoading;
      var _this$props = this.props,
          generatePage = _this$props.generatePage,
          handleBlocksAdd = _this$props.handleBlocksAdd;

      if (!isLoading && blockGroups.length === 0) {
        return external_window_React_default.a.createElement("div", {
          style: {
            paddingTop: '100px',
            textAlign: 'center',
            width: '100%'
          }
        }, "\u5F53\u524D\u6682\u65E0\u533A\u5757\u7EC4\u5408\u63A8\u8350\u3002");
      } else if (isLoading) {
        return external_window_React_default.a.createElement("div", {
          style: {
            paddingTop: '100px',
            textAlign: 'center',
            width: '100%'
          }
        }, "Loading....");
      }

      return external_window_React_default.a.createElement("div", {
        className: "ibg-block-groups-wrapper"
      }, external_window_React_default.a.createElement("div", {
        className: "ibg-block-groups"
      }, blockGroups.map(function (blockGroup, index) {
        return external_window_React_default.a.createElement(components_BlockGroupCategory_BlockGroup, {
          key: index,
          blockGroup: blockGroup,
          generatePage: generatePage,
          handleBlocksAdd: handleBlocksAdd
        });
      })), external_window_React_default.a.createElement(components_BlockGroupCategory_PreviewModal, null));
    }
  }]);

  return BlockGroupCategory;
}(external_window_React_["Component"]), BlockGroupCategory_class2.propTypes = {
  generatePage: prop_types_default.a.func,
  handleBlocksAdd: prop_types_default.a.func
}, BlockGroupCategory_class2.defaultProps = {
  generatePage: function generatePage() {},
  handleBlocksAdd: function handleBlocksAdd() {}
}, BlockGroupCategory_temp)) || BlockGroupCategory_class) || BlockGroupCategory_class);
/* harmony default export */ var src_components_BlockGroupCategory = (BlockGroupCategory_BlockGroupCategory);
// EXTERNAL MODULE: ./renderer/src/components/BlockSlider/index.jsx
var BlockSlider = __webpack_require__(719);

// CONCATENATED MODULE: ./renderer/src/components/BlockPicker/Panel.jsx



var Panel_dec, Panel_class, Panel_class2, Panel_temp;

function Panel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Panel_typeof = function _typeof(obj) { return typeof obj; }; } else { Panel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Panel_typeof(obj); }

function Panel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Panel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Panel_createClass(Constructor, protoProps, staticProps) { if (protoProps) Panel_defineProperties(Constructor.prototype, protoProps); if (staticProps) Panel_defineProperties(Constructor, staticProps); return Constructor; }

function Panel_possibleConstructorReturn(self, call) { if (call && (Panel_typeof(call) === "object" || typeof call === "function")) { return call; } return Panel_assertThisInitialized(self); }

function Panel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Panel_getPrototypeOf(o) { Panel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Panel_getPrototypeOf(o); }

function Panel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Panel_setPrototypeOf(subClass, superClass); }

function Panel_setPrototypeOf(o, p) { Panel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Panel_setPrototypeOf(o, p); }








var Panel_BlockPicker = (Panel_dec = Object(index_module["b" /* inject */])('newpage', 'blocks', 'customBlocks', 'blockGroups'), Panel_dec(Panel_class = Object(index_module["c" /* observer */])(Panel_class = (Panel_temp = Panel_class2 =
/*#__PURE__*/
function (_Component) {
  Panel_inherits(BlockPicker, _Component);

  function BlockPicker(props) {
    var _this;

    Panel_classCallCheck(this, BlockPicker);

    _this = Panel_possibleConstructorReturn(this, Panel_getPrototypeOf(BlockPicker).call(this, props));

    _this.handleSearchBlock = function (value) {
      // const value = event.target.value;
      _this.props.blocks.search(value);
    };

    _this.handleCategorySlideChange = function (tabIndex, index) {
      var id = "#".concat(_this.idPrefix) + index;
      var title = document.querySelector(id);
      title.scrollIntoView({
        behavior: 'instant',
        block: 'start',
        inline: 'start'
      });
    };

    _this.handleTabChange = function (key) {
      _this.props.blocks.setCurrentTabKey(key);
    };

    _this.idPrefix = 'Block-' + Date.now().toString(32) + '-';
    return _this;
  }

  Panel_createClass(BlockPicker, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.props.blocks.fetch();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$blocks = this.props.blocks,
          materials = _this$props$blocks.materials,
          isLoading = _this$props$blocks.isLoading,
          type = _this$props$blocks.type,
          currentTabKey = _this$props$blocks.currentTabKey;
      var blockGroups = this.props.blockGroups.blockGroups;
      var _this$props = this.props,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          handleBlocksAdd = _this$props.handleBlocksAdd,
          generatePage = _this$props.generatePage;

      if (!isLoading && materials.length === 0) {
        return external_window_React_default.a.createElement("div", {
          style: {
            paddingTop: '100px',
            textAlign: 'center',
            width: '100%'
          }
        }, "\u5F53\u524D\u9879\u76EE\u7C7B\u578B\u4E3A type\uFF1A ", type, "\u6682\u65E0\u7B26\u5408\u9879\u76EE\u4F7F\u7528\u7684\u533A\u5757\uFF0C\u8BF7\u786E\u5B9A\u7269\u6599\u6E90\u8BBE\u7F6E\u6B63\u786E\u5E76\u5B58\u5728\u53EF\u7528\u7C7B\u578B\u533A\u5757\u3002");
      } else if (isLoading) {
        return external_window_React_default.a.createElement("div", {
          style: {
            paddingTop: '100px',
            textAlign: 'center',
            width: '100%'
          }
        }, "Loading....");
      }

      var tabBarExtraContent = currentTabKey !== 'iceBlockGroups' ? external_window_React_default.a.createElement("div", {
        style: {
          height: 39,
          padding: '0 10px 0 0',
          lineHeight: '24px',
          display: 'flex',
          alignItems: 'center'
        }
      }, external_window_React_default.a.createElement(input_default.a, {
        size: "medium",
        style: {
          width: 160
        },
        hasClear: true,
        placeholder: "\u8F93\u5165\u5173\u952E\u5B57",
        value: this.props.blocks.originKeywords,
        onChange: this.handleSearchBlock,
        addonAfter: "\u641C\u7D22"
      })) : null;
      return external_window_React_default.a.createElement("div", {
        className: "block-picker-panel",
        style: style
      }, external_window_React_default.a.createElement("div", {
        className: "block-picker-panel-wrapper"
      }, external_window_React_default.a.createElement(tab_default.a, {
        className: "block-picker-tab-parent",
        contentStyle: {
          padding: 0,
          marginBottom: 10
        },
        size: "small",
        type: "bar",
        activeKey: currentTabKey,
        onChange: this.handleTabChange,
        tabBarExtraContent: tabBarExtraContent
      }, materials.map(function (material, index) {
        var blocksWithCategory = material.blocksWithCategory;
        return external_window_React_default.a.createElement(tab_default.a.TabPane, {
          tab: material.name // 常规数据没有key，加塞的飞冰区块组合才有
          ,
          key: material.key ? material.key : index,
          contentStyle: {
            position: 'relative'
          },
          tabClassName: "custom-material-tab"
        }, material.key === 'iceBlockGroups' ? external_window_React_default.a.createElement(src_components_BlockGroupCategory, {
          generatePage: generatePage,
          handleBlocksAdd: handleBlocksAdd
        }) : [external_window_React_default.a.createElement(BlockSlider["a" /* default */], {
          onClick: _this2.handleCategorySlideChange.bind(_this2, index),
          key: 0,
          blocksWithCategory: blocksWithCategory
        }), external_window_React_default.a.createElement(BlockCategory["a" /* default */], {
          idPrefix: _this2.idPrefix,
          key: 1,
          handleBlocksAdd: handleBlocksAdd,
          blocksWithCategory: blocksWithCategory,
          originKeywords: _this2.props.blocks.originKeywords
        })]);
      }), type === 'react' && external_window_React_default.a.createElement(tab_default.a.TabPane, {
        tab: "\u81EA\u5B9A\u4E49\u533A\u5757",
        key: "-1",
        contentStyle: {
          position: 'relative'
        },
        tabClassName: "custom-material-tab"
      }, external_window_React_default.a.createElement(Custom, null)))));
    }
  }]);

  return BlockPicker;
}(external_window_React_["Component"]), Panel_class2.displayName = 'BlockPicker', Panel_class2.propTypes = {
  handleBlocksAdd: prop_types_default.a.func,
  generatePage: prop_types_default.a.func
}, Panel_class2.defaultProps = {
  handleBlocksAdd: function handleBlocksAdd() {},
  generatePage: function generatePage() {}
}, Panel_temp)) || Panel_class) || Panel_class);
/* harmony default export */ var Panel = (Panel_BlockPicker);
// EXTERNAL MODULE: ./renderer/node_modules/react-sortable-hoc/dist/commonjs/index.js
var commonjs = __webpack_require__(756);

// EXTERNAL MODULE: ./renderer/node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./renderer/src/components/BlockPreview/index.scss
var BlockPreview = __webpack_require__(899);

// CONCATENATED MODULE: ./renderer/src/components/BlockPreview/index.jsx


var BlockPreview_dec, BlockPreview_class, BlockPreview_class2, BlockPreview_temp, _dec2, _class3, _class4, _temp2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BlockPreview_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlockPreview_typeof = function _typeof(obj) { return typeof obj; }; } else { BlockPreview_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlockPreview_typeof(obj); }

function BlockPreview_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlockPreview_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlockPreview_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlockPreview_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlockPreview_defineProperties(Constructor, staticProps); return Constructor; }

function BlockPreview_possibleConstructorReturn(self, call) { if (call && (BlockPreview_typeof(call) === "object" || typeof call === "function")) { return call; } return BlockPreview_assertThisInitialized(self); }

function BlockPreview_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BlockPreview_getPrototypeOf(o) { BlockPreview_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlockPreview_getPrototypeOf(o); }

function BlockPreview_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlockPreview_setPrototypeOf(subClass, superClass); }

function BlockPreview_setPrototypeOf(o, p) { BlockPreview_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlockPreview_setPrototypeOf(o, p); }







 // eslint-disable-next-line babel/new-cap

var BlockDragHandle = Object(commonjs["SortableHandle"])(function (_ref) {
  var src = _ref.src;
  return external_window_React_default.a.createElement("div", {
    className: "preview-block-screenshot"
  }, external_window_React_default.a.createElement("img", {
    src: src
  }));
});
var BlockPreview_Block = (BlockPreview_dec = Object(index_module["b" /* inject */])('customBlocks'), BlockPreview_dec(BlockPreview_class = Object(index_module["c" /* observer */])(BlockPreview_class = (BlockPreview_temp = BlockPreview_class2 =
/*#__PURE__*/
function (_Component) {
  BlockPreview_inherits(Block, _Component);

  function Block() {
    var _getPrototypeOf2;

    var _this;

    BlockPreview_classCallCheck(this, Block);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = BlockPreview_possibleConstructorReturn(this, (_getPrototypeOf2 = BlockPreview_getPrototypeOf(Block)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.hadnleRemove = function (event) {
      _this.props.onRemove(_this.props.orderIndex);

      event.preventDefault();
    };

    _this.handleAliasChange = function (event) {
      var value = event.target.value;

      _this.props.onAliasChange(_this.props.orderIndex, value);
    };

    return _this;
  }

  BlockPreview_createClass(Block, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          block = _this$props.block,
          style = _this$props.style,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className;
      return external_window_React_default.a.createElement("div", {
        className: "preview-block ".concat(className),
        style: style
      }, external_window_React_default.a.createElement(BlockDragHandle, {
        src: block.type === 'custom' ? 'data:image/png;base64,' + this.props.customBlocks.getBlockImg(block.blockName) : block.screenshot
      }), external_window_React_default.a.createElement("div", {
        className: "preview-block-operation"
      }, external_window_React_default.a.createElement(button_default.a, {
        title: "\u79FB\u9664",
        className: "preview-block-btn",
        shape: "text",
        size: "large",
        onClick: this.hadnleRemove
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "trash"
      }))), external_window_React_default.a.createElement("div", {
        className: "block-alias-name"
      }, external_window_React_default.a.createElement("input", {
        title: "\u4FEE\u6539 block \u6587\u4EF6\u540D",
        onChange: this.handleAliasChange,
        defaultValue: this.props.block.alias
      }), external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        className: "pencil",
        type: "pencil"
      })));
    }
  }]);

  return Block;
}(external_window_React_["Component"]), BlockPreview_class2.propTypes = {
  onMoveUp: prop_types_default.a.func,
  onMoveDown: prop_types_default.a.func,
  onRemove: prop_types_default.a.func,
  onAliasChange: prop_types_default.a.func,
  block: prop_types_default.a.object,
  orderIndex: prop_types_default.a.number
}, BlockPreview_class2.defaultProps = {
  onMoveUp: function onMoveUp() {},
  onMoveDown: function onMoveDown() {},
  onRemove: function onRemove() {},
  onAliasChange: function onAliasChange() {}
}, BlockPreview_temp)) || BlockPreview_class) || BlockPreview_class);
var BlockPreview_BlockPreviewer = (_dec2 = Object(index_module["b" /* inject */])('blocks'), _dec2(_class3 = Object(index_module["c" /* observer */])(_class3 = (_temp2 = _class4 =
/*#__PURE__*/
function (_Component2) {
  BlockPreview_inherits(BlockPreviewer, _Component2);

  function BlockPreviewer() {
    BlockPreview_classCallCheck(this, BlockPreviewer);

    return BlockPreview_possibleConstructorReturn(this, BlockPreview_getPrototypeOf(BlockPreviewer).apply(this, arguments));
  }

  BlockPreview_createClass(BlockPreviewer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          blocks = _this$props2.blocks,
          block = _this$props2.block,
          orderIndex = _this$props2.orderIndex,
          orderCount = _this$props2.orderCount,
          other = _objectWithoutProperties(_this$props2, ["blocks", "block", "orderIndex", "orderCount"]);

      return external_window_React_default.a.createElement(BlockPreview_Block, _extends({
        className: classnames_default()({
          'preview-block-sorting': blocks.isSorting
        }),
        block: block,
        orderIndex: orderIndex
      }, other, {
        isFirset: orderIndex === 0,
        isLast: orderCount - 1 === orderIndex
      }));
    }
  }]);

  return BlockPreviewer;
}(external_window_React_["Component"]), _class4.propTypes = {
  block: prop_types_default.a.object,
  orderIndex: prop_types_default.a.number,
  orderCount: prop_types_default.a.number,
  blocks: prop_types_default.a.object
}, _temp2)) || _class3) || _class3); // eslint-disable-next-line babel/new-cap

/* harmony default export */ var components_BlockPreview = (Object(commonjs["SortableElement"])(BlockPreview_BlockPreviewer));
// CONCATENATED MODULE: ./renderer/src/components/BlockPicker/PreviewTitle.jsx
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var PreviewTitle_PreviewTitle = function PreviewTitle(_ref) {
  var title = _ref.title,
      count = _ref.count,
      style = _ref.style;
  return external_window_React_default.a.createElement("div", {
    style: _objectSpread({}, styles.previewTitle, style)
  }, title, " ", count ? "( ".concat(count, " )") : null);
};

var styles = {
  previewTitle: {
    flex: '0 0 60px',
    fontSize: '18px',
    height: '60px',
    lineHeight: '60px',
    fontWeight: '500',
    color: '#333'
  }
};
PreviewTitle_PreviewTitle.propTypes = {
  title: prop_types_default.a.string.isRequired,
  style: prop_types_default.a.object,
  count: prop_types_default.a.number
};
PreviewTitle_PreviewTitle.defaultProps = {
  style: {},
  count: 0
};
/* harmony default export */ var BlockPicker_PreviewTitle = (PreviewTitle_PreviewTitle);
// CONCATENATED MODULE: ./renderer/src/components/BlockPicker/PreviewTips.jsx
function PreviewTips_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PreviewTips_defineProperty(target, key, source[key]); }); } return target; }

function PreviewTips_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var PreviewTips_PreviewTips = function PreviewTips(_ref) {
  var text = _ref.text,
      src = _ref.src,
      style = _ref.style;
  return external_window_React_default.a.createElement("div", {
    style: PreviewTips_objectSpread({}, PreviewTips_styles.container, style)
  }, external_window_React_default.a.createElement("img", {
    style: PreviewTips_styles.img,
    src: src,
    alt: ""
  }), external_window_React_default.a.createElement("p", {
    style: PreviewTips_styles.text
  }, text));
};

var PreviewTips_styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%'
  },
  img: {
    width: '52px'
  }
};
PreviewTips_PreviewTips.propTypes = {
  text: prop_types_default.a.string,
  style: prop_types_default.a.object,
  src: prop_types_default.a.string
};
PreviewTips_PreviewTips.defaultProps = {
  text: '请从左侧选择区块',
  src: 'https://img.alicdn.com/tfs/TB1yGn2mYZnBKNjSZFrXXaRLFXa-182-149.png',
  style: {}
};
/* harmony default export */ var BlockPicker_PreviewTips = (PreviewTips_PreviewTips);
// CONCATENATED MODULE: ./renderer/src/components/BlockPicker/Previewer.jsx
var Previewer_dec, Previewer_class, Previewer_class2, Previewer_temp;

function Previewer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Previewer_typeof = function _typeof(obj) { return typeof obj; }; } else { Previewer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Previewer_typeof(obj); }

function Previewer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Previewer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Previewer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Previewer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Previewer_defineProperties(Constructor, staticProps); return Constructor; }

function Previewer_possibleConstructorReturn(self, call) { if (call && (Previewer_typeof(call) === "object" || typeof call === "function")) { return call; } return Previewer_assertThisInitialized(self); }

function Previewer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Previewer_getPrototypeOf(o) { Previewer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Previewer_getPrototypeOf(o); }

function Previewer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Previewer_setPrototypeOf(subClass, superClass); }

function Previewer_setPrototypeOf(o, p) { Previewer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Previewer_setPrototypeOf(o, p); }








var SortableBlockPreview = Object(commonjs["SortableContainer"])(function (_ref) {
  var blocks = _ref.blocks,
      onSortEnd = _ref.onSortEnd,
      onAliasChange = _ref.onAliasChange,
      onRemove = _ref.onRemove;
  return external_window_React_default.a.createElement("div", {
    className: "page-editor-preview"
  }, blocks.map(function (block, index) {
    return external_window_React_default.a.createElement(components_BlockPreview, {
      index: index,
      key: "".concat(block.uid),
      block: block,
      useDragHandle: true,
      orderIndex: index,
      orderCount: blocks.length,
      onSortEnd: onSortEnd,
      onRemove: onRemove,
      onAliasChange: onAliasChange
    });
  }));
});
var Previewer_Previewer = (Previewer_dec = Object(index_module["b" /* inject */])('blocks'), Previewer_dec(Previewer_class = Object(index_module["c" /* observer */])(Previewer_class = (Previewer_temp = Previewer_class2 =
/*#__PURE__*/
function (_Component) {
  Previewer_inherits(Previewer, _Component);

  function Previewer() {
    var _getPrototypeOf2;

    var _this;

    Previewer_classCallCheck(this, Previewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Previewer_possibleConstructorReturn(this, (_getPrototypeOf2 = Previewer_getPrototypeOf(Previewer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleRemovePageBlock = function (orderIndex) {
      _this.props.blocks.removeBlock(orderIndex);
    };

    _this.handleAliasChangeBlock = function (orderIndex, newAlias) {
      _this.props.blocks.blockModifyAlias(orderIndex, newAlias);
    };

    return _this;
  }

  Previewer_createClass(Previewer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$blocks = _this$props.blocks,
          blocks = _this$props$blocks === void 0 ? {} : _this$props$blocks,
          title = _this$props.title,
          text = _this$props.text,
          src = _this$props.src;
      return external_window_React_default.a.createElement("div", {
        className: "preview-wrapper"
      }, blocks.selected.length ? external_window_React_default.a.createElement(BlockPicker_PreviewTitle, {
        title: title,
        count: blocks.selected.length
      }) : external_window_React_default.a.createElement(BlockPicker_PreviewTips, {
        text: text,
        src: src
      }), external_window_React_default.a.createElement(SortableBlockPreview, {
        lockAxis: "y",
        helperClass: 'preview-block-draging',
        useDragHandle: true,
        blocks: blocks.selected,
        onSortStart: blocks.onSortStart,
        onSortEnd: blocks.onSortEnd,
        onRemove: this.handleRemovePageBlock,
        onAliasChange: this.handleAliasChangeBlock
      }));
    }
  }]);

  return Previewer;
}(external_window_React_["Component"]), Previewer_class2.propTypes = {
  blocks: prop_types_default.a.object,
  text: prop_types_default.a.string,
  title: prop_types_default.a.string,
  src: prop_types_default.a.string
}, Previewer_temp)) || Previewer_class) || Previewer_class);
/* harmony default export */ var BlockPicker_Previewer = (Previewer_Previewer);
// EXTERNAL MODULE: ./renderer/node_modules/rc-tooltip/es/index.js + 28 modules
var es = __webpack_require__(99);

// CONCATENATED MODULE: ./renderer/src/components/BlockPicker/LayoutPicker.jsx
var LayoutPicker_dec, LayoutPicker_class, LayoutPicker_temp;

function LayoutPicker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LayoutPicker_typeof = function _typeof(obj) { return typeof obj; }; } else { LayoutPicker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LayoutPicker_typeof(obj); }

function LayoutPicker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LayoutPicker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LayoutPicker_createClass(Constructor, protoProps, staticProps) { if (protoProps) LayoutPicker_defineProperties(Constructor.prototype, protoProps); if (staticProps) LayoutPicker_defineProperties(Constructor, staticProps); return Constructor; }

function LayoutPicker_possibleConstructorReturn(self, call) { if (call && (LayoutPicker_typeof(call) === "object" || typeof call === "function")) { return call; } return LayoutPicker_assertThisInitialized(self); }

function LayoutPicker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LayoutPicker_getPrototypeOf(o) { LayoutPicker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LayoutPicker_getPrototypeOf(o); }

function LayoutPicker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LayoutPicker_setPrototypeOf(subClass, superClass); }

function LayoutPicker_setPrototypeOf(o, p) { LayoutPicker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LayoutPicker_setPrototypeOf(o, p); }

/**
 * 渲染物料源的布局
 */




var LAYOUT_TITLE = '选择布局';
var LayoutPicker_LayoutPicker = (LayoutPicker_dec = Object(index_module["b" /* inject */])('newpage'), LayoutPicker_dec(LayoutPicker_class = Object(index_module["c" /* observer */])(LayoutPicker_class = (LayoutPicker_temp =
/*#__PURE__*/
function (_Component) {
  LayoutPicker_inherits(LayoutPicker, _Component);

  function LayoutPicker() {
    var _getPrototypeOf2;

    var _this;

    LayoutPicker_classCallCheck(this, LayoutPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = LayoutPicker_possibleConstructorReturn(this, (_getPrototypeOf2 = LayoutPicker_getPrototypeOf(LayoutPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleOnSelected = function (layout) {
      _this.props.newpage.setCurrentLayout(layout);
    };

    return _this;
  }

  LayoutPicker_createClass(LayoutPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // 渲染当前项目下的 layouts
      var _this$props$newpage = this.props.newpage,
          layouts = _this$props$newpage.layouts,
          currentLayout = _this$props$newpage.currentLayout,
          loading = _this$props$newpage.loading;

      if (loading) {
        return external_window_React_default.a.createElement("div", {
          className: "layout-options-wrapper"
        });
      } else if (layouts.length === 0) {
        return external_window_React_default.a.createElement("div", {
          className: "layout-options-wrapper"
        }, external_window_React_default.a.createElement("div", {
          className: "layout-title"
        }, LAYOUT_TITLE), external_window_React_default.a.createElement("div", {
          className: "layout-loading"
        }, "\u6682\u65E0\u53EF\u7528\u5E03\u5C40"));
      } else if (layouts.length === 1) {
        return null;
      }

      return external_window_React_default.a.createElement("div", {
        className: "layout-options-wrapper"
      }, external_window_React_default.a.createElement("div", {
        className: "layout-title"
      }, LAYOUT_TITLE), external_window_React_default.a.createElement("div", {
        className: "layout-options-body"
      }, external_window_React_default.a.createElement("div", {
        style: {
          width: 60 * layouts.length
        }
      }, layouts.map(function (layout, index) {
        var classes = classnames_default()('layout-option', {
          'layout-option-selected': currentLayout.name === layout.name
        });
        return external_window_React_default.a.createElement("div", {
          key: layout.name + index,
          className: classes,
          onClick: _this2.handleOnSelected.bind(_this2, layout)
        }, external_window_React_default.a.createElement(es["default"], {
          placement: "top",
          overlay: external_window_React_default.a.createElement("div", {
            style: {
              width: 240
            }
          }, external_window_React_default.a.createElement("div", {
            style: {
              fontSize: 14,
              color: '#eee'
            }
          }, layout.title), external_window_React_default.a.createElement("div", {
            style: {
              fontSize: 12,
              color: '#eee'
            }
          }, layout.name), external_window_React_default.a.createElement("div", {
            style: {
              fontSize: 12,
              color: '#bbb',
              overflow: 'auto',
              maxHeight: 300
            }
          }, external_window_React_default.a.createElement("pre", {
            style: {
              whiteSpace: 'pre-wrap'
            }
          }, layout.description)))
        }, external_window_React_default.a.createElement("div", {
          className: "layout-option-screenshots"
        }, external_window_React_default.a.createElement("div", {
          className: "layout-option-screenshots-img",
          style: {
            backgroundImage: "url(".concat(layout.thumbnail, ")")
          }
        }))));
      }))));
    }
  }]);

  return LayoutPicker;
}(external_window_React_["Component"]), LayoutPicker_temp)) || LayoutPicker_class) || LayoutPicker_class);
/* harmony default export */ var BlockPicker_LayoutPicker = (LayoutPicker_LayoutPicker);
// EXTERNAL MODULE: ./renderer/src/components/BlockPicker/index.scss
var components_BlockPicker = __webpack_require__(900);

// CONCATENATED MODULE: ./renderer/src/components/BlockPicker/index.js







// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/field/index.js
var field = __webpack_require__(697);
var field_default = /*#__PURE__*/__webpack_require__.n(field);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/form/index.js
var lib_form = __webpack_require__(757);
var form_default = /*#__PURE__*/__webpack_require__.n(lib_form);

// EXTERNAL MODULE: external "window.mobx"
var external_window_mobx_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/uppercamelcase/index.js
var uppercamelcase = __webpack_require__(77);
var uppercamelcase_default = /*#__PURE__*/__webpack_require__.n(uppercamelcase);

// EXTERNAL MODULE: ./renderer/src/lib/project-utils.js
var project_utils = __webpack_require__(46);

// EXTERNAL MODULE: ./renderer/src/lib/project-scripts.js
var project_scripts = __webpack_require__(673);

// EXTERNAL MODULE: ./renderer/src/lib/logger.js
var logger = __webpack_require__(7);

// EXTERNAL MODULE: ./renderer/src/components/dialog/index.js + 4 modules
var components_dialog = __webpack_require__(100);

// EXTERNAL MODULE: ./renderer/src/components/Progress/index.jsx
var Progress = __webpack_require__(679);

// EXTERNAL MODULE: ./renderer/src/pages/Home/CreatPage/PageConfig/index.scss
var CreatPage_PageConfig = __webpack_require__(913);

// CONCATENATED MODULE: ./renderer/src/pages/Home/CreatPage/PageConfig/index.js







var PageConfig_dec, PageConfig_class, PageConfig_class2, PageConfig_temp;

function PageConfig_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PageConfig_typeof = function _typeof(obj) { return typeof obj; }; } else { PageConfig_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PageConfig_typeof(obj); }

function PageConfig_extends() { PageConfig_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PageConfig_extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function PageConfig_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PageConfig_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PageConfig_createClass(Constructor, protoProps, staticProps) { if (protoProps) PageConfig_defineProperties(Constructor.prototype, protoProps); if (staticProps) PageConfig_defineProperties(Constructor, staticProps); return Constructor; }

function PageConfig_possibleConstructorReturn(self, call) { if (call && (PageConfig_typeof(call) === "object" || typeof call === "function")) { return call; } return PageConfig_assertThisInitialized(self); }

function PageConfig_getPrototypeOf(o) { PageConfig_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PageConfig_getPrototypeOf(o); }

function PageConfig_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PageConfig_setPrototypeOf(subClass, superClass); }

function PageConfig_setPrototypeOf(o, p) { PageConfig_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PageConfig_setPrototypeOf(o, p); }

function PageConfig_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 // import ReactDOM from 'react-dom';










var npm = services["a" /* default */].npm,
    interaction = services["a" /* default */].interaction,
    scaffolder = services["a" /* default */].scaffolder;
var FormItem = form_default.a.Item;

var generatePageName = function generatePageName() {
  var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return "page".concat(pages.length > 0 ? pages.length + 1 : '');
};

var generateNavName = function generateNavName() {
  var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return "Nav".concat(pages.length > 0 ? pages.length + 1 : '');
};

var pageExists = function pageExists(pages) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return pages.some(function (n) {
    return n.toLowerCase() === name.trim().toLowerCase();
  });
};

var PageConfig_PageConfig = (PageConfig_dec = Object(index_module["b" /* inject */])('projects', 'newpage', 'blocks', 'customBlocks', 'progress'), PageConfig_dec(PageConfig_class = Object(index_module["c" /* observer */])(PageConfig_class = (PageConfig_temp = PageConfig_class2 =
/*#__PURE__*/
function (_Component) {
  PageConfig_inherits(PageConfig, _Component);

  /* eslint-disable react/require-default-props */

  /* eslint-enable react/require-default-props */
  function PageConfig(props) {
    var _this;

    PageConfig_classCallCheck(this, PageConfig);

    _this = PageConfig_possibleConstructorReturn(this, PageConfig_getPrototypeOf(PageConfig).call(this, props));

    _this.handleClose = function () {
      if (!_this.props.newpage.isCreating) {
        _this.props.newpage.closeSave();

        _this.props.progress.reset();
      }
    };

    _this.handleOk = function () {
      var progress = _this.props.progress;

      _this.field.validate(function (errors, values) {
        if (errors) {// 表单验证失败
        } else {
          // 检测页面名与区块名是否冲突
          if (_this.props.blocks.pageNameConflict(values.pageName)) {
            feedback_default.a.toast.error("\u9875\u9762\u76EE\u5F55\u540D\u4E0E\u533A\u5757\u540D ".concat(values.pageName, " \u5B58\u5728\u51B2\u7A81\uFF0C\u8BF7\u4FEE\u6539\u540E\u91CD\u8BD5"));

            return false;
          }

          _this.props.newpage.isCreating = true;
          var currentProject = _this.props.projects.currentProject;
          var layout = Object(external_window_mobx_["toJS"])(_this.props.newpage.currentLayout);
          var blocks = Object(external_window_mobx_["toJS"])(_this.props.selectedBlocks);
          var libraryType = currentProject.getLibraryType();
          var pageName = Object(external_window_mobx_["toJS"])(values.pageName); // 创建页面

          var config = {
            name: libraryType === 'react' ? uppercamelcase_default()(pageName) : pageName,
            layout: layout,
            blocks: blocks,
            nodeFramework: currentProject.nodeFramework
          };
          logger["a" /* default */].info('createPage config:', config);
          var createResult;

          if (currentProject.scaffold && currentProject.scaffold.isAvailable()) {
            logger["a" /* default */].info('使用 .iceworks 模板新建');
            currentProject.scaffold.createPage(config).then(function (result) {
              createResult = result;
              logger["a" /* default */].info('create result:', createResult);
              var dependencies = Object(external_window_mobx_["toJS"])(result.dependencies);
              logger["a" /* default */].info('new page dependencies', _this.props.newpage.targetPath, dependencies);
              logger["a" /* default */].debug('add dependencies', _this.props.newpage.targetPath);
              return new Promise(function (resolve) {
                if (Object.keys(dependencies).length === 0) {
                  resolve(true);
                } else {
                  var npmArgs = ['install', '--save'].concat(_toConsumableArray(Object(project_utils["b" /* dependenciesFormat */])(dependencies)), ['--no-package-lock']);
                  npm.run(npmArgs, {
                    cwd: _this.props.newpage.targetPath
                  }).then(function () {
                    logger["a" /* default */].info('genereator page install dependencies success');
                    resolve(true);
                  }).catch(function () {
                    logger["a" /* default */].error(new Error('genereator page install dependencies error'));
                    resolve(false);
                  });
                }
              });
            }).then(function () {
              var menuConfig = {
                name: Object(external_window_mobx_["toJS"])(values.routeText),
                path: Object(external_window_mobx_["toJS"])(values.routePath)
              };
              return currentProject.scaffold.appendMenu(menuConfig);
            }).then(function () {
              var pageClassName = uppercamelcase_default()(Object(external_window_mobx_["toJS"])(values.pageName));
              var routerConfig; // angular 的模板生成的路由

              if (libraryType === 'angular') {
                routerConfig = {
                  path: Object(external_window_mobx_["toJS"])(values.routePath),
                  pagePath: createResult.output.page,
                  component: "".concat(pageClassName, "Component"),
                  module: "".concat(pageClassName, "Module")
                };
              } else {
                routerConfig = {
                  path: Object(external_window_mobx_["toJS"])(values.routePath),
                  component: pageClassName,
                  pagePath: createResult.output.page,
                  layoutName: layout && uppercamelcase_default()(layout.name),
                  layoutPath: layout && createResult.output.layout
                };
              }

              return currentProject.scaffold.appendRouter(routerConfig);
            }).then(function () {
              var content = [];

              if (values.pageName) {
                content.push("\u9875\u9762\u76EE\u5F55\uFF1A".concat(values.pageName));
              }

              if (values.routePath) {
                content.push("\u8DEF\u7531\u8DEF\u5F84\uFF1A".concat(values.routePath));
              }

              if (values.routeText) {
                content.push("\u9875\u9762\u5BFC\u822A\u540D\uFF1A".concat(values.routeText));
              }

              interaction.notify({
                title: '生成页面成功',
                body: content.join(' ')
              });

              _this.props.newpage.emit('generate-page-success');

              logger["a" /* default */].info('generate-page-success', 'page 创建成功');
              progress.end();
              _this.props.newpage.isCreating = false;

              _this.props.newpage.closeSave();

              _this.props.newpage.toggle();
            }).catch(function (error) {
              logger["a" /* default */].error(error);
              components_dialog["a" /* default */].notice({
                title: '生成页面失败',
                error: error
              });
              progress.reset();
              _this.props.newpage.isCreating = false;
            }).then(function () {
              return currentProject.scaffold.removePreviewPage({
                nodeFramework: currentProject.nodeFramework
              });
            }).then(function () {
              logger["a" /* default */].debug('移除临时页面成功');
            }).catch(function (error) {
              logger["a" /* default */].debug('移除临时页面失败', error);
            });
          } else {
            var applicationType = '';

            if (currentProject) {
              applicationType = currentProject.getApplicationType();
            } // 进度条


            progress.start(true);
            progress.setStatusText('正在生成页面');
            progress.setSectionCount(blocks.length);
            scaffolder.createPage({
              pageName: Object(external_window_mobx_["toJS"])(values.pageName),
              // 页面名
              routePath: Object(external_window_mobx_["toJS"])(values.routePath),
              // 路由名
              routeText: Object(external_window_mobx_["toJS"])(values.routeText),
              // 路由导航名
              clientPath: currentProject.clientPath,
              clientSrcPath: currentProject.clientSrcPath,
              layout: layout,
              blocks: blocks,
              excludeLayout: applicationType === 'react',
              // hack react 的模板不生成 layout
              // hack vue
              libary: _this.props.libary,
              progressFunc: progress.handleProgressFunc,
              interpreter: function interpreter(_ref, next) {
                var type = _ref.type,
                    message = _ref.message,
                    data = _ref.data;
                logger["a" /* default */].info(type, message);

                switch (type) {
                  case 'UNSUPPORTED_DESTPATH':
                    feedback_default.a.toast.error(message);

                    break;

                  case 'DESTDIR_EXISTS_OVERRIDE':
                    logger["a" /* default */].warn('DESTDIR_EXISTS_OVERRIDE', values.pageName);
                    interaction.confirm({
                      type: 'info',
                      title: '文件冲突',
                      message: "\u5DF2\u5B58\u5728 ".concat(values.pageName, " \u9875\u9762\uFF0C\u662F\u5426\u8986\u76D6\uFF1F")
                    }, function () {
                      next(true);
                    }, function () {
                      next(false);
                    });
                    break;

                  case 'FILE_CREATED':
                    data.forEach(function (file) {
                      return logger["a" /* default */].info(file);
                    });
                    next(true);
                    break;

                  case 'ADD_DEPENDENCIES':
                    var dependencies = data;
                    logger["a" /* default */].info('new page dependencies', _this.props.newpage.targetPath, dependencies);
                    logger["a" /* default */].debug('add dependencies', _this.props.newpage.targetPath);
                    project_scripts["a" /* default */].npminstall(currentProject, Object(project_utils["b" /* dependenciesFormat */])(dependencies).join(' '), false, function (error) {
                      if (error) {
                        logger["a" /* default */].error(new Error('genereator page install dependencies error'));
                        logger["a" /* default */].info('reinstall page dependencies');
                        next(false);
                      } else {
                        logger["a" /* default */].info('genereator page install dependencies success');
                        next(true);
                      }
                    });
                    break;

                  default:
                    next(true);
                }
              }
            }).catch(function (error) {
              logger["a" /* default */].error(error);
              components_dialog["a" /* default */].notice({
                title: '生成页面失败',
                error: error
              });
              progress.reset();
              _this.props.newpage.isCreating = false;
            }).then(function (goon) {
              if (goon === false) {
                progress.end();
                _this.props.newpage.isCreating = false;
              } else {
                var content = [];

                if (values.pageName) {
                  content.push("\u9875\u9762\u76EE\u5F55\uFF1A".concat(values.pageName));
                }

                if (values.routePath) {
                  content.push("\u8DEF\u7531\u8DEF\u5F84\uFF1A".concat(values.routePath));
                }

                if (values.routeText) {
                  content.push("\u9875\u9762\u5BFC\u822A\u540D\uFF1A".concat(values.routeText));
                }

                interaction.notify({
                  title: '生成页面成功',
                  body: content.join(' ')
                });

                _this.props.newpage.emit('generate-page-success');

                logger["a" /* default */].info('generate-page-success', 'page 创建成功');
                progress.end();
                _this.props.newpage.isCreating = false;

                _this.props.newpage.closeSave();

                _this.props.newpage.toggle(); // 移除 previewPage 临时文件


                return scaffolder.removePreviewPage({
                  clientSrcPath: currentProject.clientSrcPath
                });
              }
            }).then(function () {
              logger["a" /* default */].debug('移除临时页面成功');
            }).catch(function (error) {
              logger["a" /* default */].debug('移除临时页面失败', error);
            });
          }
        }
      });
    };

    _this.field = new field_default.a(PageConfig_assertThisInitialized(PageConfig_assertThisInitialized(_this)));
    return _this;
  }

  PageConfig_createClass(PageConfig, [{
    key: "render",
    value: function render() {
      var init = this.field.init;
      var _this$props = this.props,
          projects = _this$props.projects,
          newpage = _this$props.newpage;
      var currentProject = projects.currentProject;
      var applicationType = '';

      if (currentProject) {
        applicationType = currentProject.getApplicationType();
      }

      var isIceApp = applicationType === 'ice'; // create-react-app 的项目

      var isAngularApp = applicationType === 'angular'; // @angular/cli 的项目

      var isRaxApp = applicationType === 'rax'; // rax 类型的项目

      var formItemLayout = {
        labelCol: {
          fixedSpan: 5
        }
      }; // 允许设置导航名

      var availableRouter = isIceApp || isAngularApp || isRaxApp;
      return external_window_React_default.a.createElement(dialog_default.a, {
        title: "\u586B\u5199\u9875\u9762\u4FE1\u606F",
        visible: this.props.newpage.savePageVisible,
        onClose: this.handleClose,
        onCancel: this.handleClose // afterClose={this.handleAfterClose}
        ,
        footer: external_window_React_default.a.createElement("div", null, external_window_React_default.a.createElement(button_default.a, {
          disabled: this.props.newpage.isCreating,
          size: "small",
          onClick: this.handleClose
        }, "\u53D6\u6D88"), external_window_React_default.a.createElement(button_default.a, {
          loading: this.props.newpage.isCreating,
          size: "small",
          type: "primary",
          onClick: this.handleOk
        }, "\u786E\u5B9A"))
      }, external_window_React_default.a.createElement(form_default.a, {
        size: "small",
        direction: "ver",
        style: {
          width: 320,
          paddingTop: '30px'
        },
        field: this.field
      }, external_window_React_default.a.createElement(FormItem, PageConfig_extends({}, formItemLayout, {
        required: true,
        label: "\u9875\u9762\u76EE\u5F55\u540D"
      }), external_window_React_default.a.createElement(input_default.a, PageConfig_extends({
        style: {
          width: 200
        }
      }, init('pageName', {
        initValue: generatePageName(this.props.newpage.pages),
        rules: [{
          required: true,
          message: '不能为空',
          trigger: ['onChange']
        }, {
          pattern: /^[a-z]([-_a-z0-9]*)$/i,
          message: '请输入字母与数字组合，字母开头',
          trigger: ['onChange']
        }, {
          pattern: /^(?!index$)/i,
          message: '`index` 为关键字，请更换',
          trigger: ['onChange']
        }, {
          message: '已存在同名页面，请更换',
          validator: function validator(rule, value, cb) {
            if (pageExists(newpage.pages, value)) {
              cb('error');
            } else {
              cb();
            }
          }
        }]
      }), {
        placeholder: "\u8BF7\u8F93\u5165\u9875\u9762\u76EE\u5F55\u540D\uFF0C\u5B57\u6BCD\u4E0E\u6570\u5B57\u7EC4\u5408\uFF0C\u5B57\u6BCD\u5F00\u5934"
      }))), availableRouter && external_window_React_default.a.createElement(FormItem, PageConfig_extends({}, formItemLayout, {
        required: true,
        label: "\u8DEF\u7531\u8DEF\u5F84"
      }), external_window_React_default.a.createElement(input_default.a, PageConfig_extends({
        style: {
          width: 200
        }
      }, init('routePath', {
        initValue: generatePageName(this.props.newpage.pages),
        rules: [{
          required: true,
          message: '不能为空',
          trigger: ['onBlur', 'onChange']
        }, {
          pattern: /^(\/?)([a-zA-Z0-9:])([a-zA-Z0-9:]*)((\/)?[a-zA-Z0-9:]+)$/,
          message: '请输入小写字母数字组合，支持二级路由以 `/` 分隔',
          trigger: ['onBlur', 'onChange']
        }]
      }), {
        placeholder: "\u8BF7\u8F93\u5165\u5C0F\u5199\u5B57\u6BCD\u6570\u5B57\u7EC4\u5408\uFF0C\u652F\u6301\u4E8C\u7EA7\u8DEF\u7531\u4EE5 `/` \u5206\u9694"
      }))), availableRouter && external_window_React_default.a.createElement(FormItem, PageConfig_extends({}, formItemLayout, {
        label: "\u9875\u9762\u5BFC\u822A\u540D"
      }), external_window_React_default.a.createElement(input_default.a, PageConfig_extends({
        style: {
          width: 200
        }
      }, init('routeText', {
        initValue: generateNavName(this.props.newpage.pages),
        rules: [{
          trigger: ['onBlur', 'onChange']
        }]
      }), {
        placeholder: "\u4E3A\u7A7A\u5219\u4E0D\u751F\u6210\u5BFC\u822A\u9879"
      })))), external_window_React_default.a.createElement(Progress["a" /* default */], {
        currentProject: currentProject
      }));
    }
  }]);

  return PageConfig;
}(external_window_React_["Component"]), PageConfig_class2.propTypes = {
  newpage: prop_types_default.a.object,
  progress: prop_types_default.a.object,
  blocks: prop_types_default.a.object,
  projects: prop_types_default.a.object,
  selectedBlocks: prop_types_default.a.array,
  libary: prop_types_default.a.string
}, PageConfig_temp)) || PageConfig_class) || PageConfig_class);
/* harmony default export */ var Home_CreatPage_PageConfig = (PageConfig_PageConfig);
// EXTERNAL MODULE: ./renderer/src/pages/Home/CreatPage/index.scss
var CreatPage = __webpack_require__(914);

// CONCATENATED MODULE: ./renderer/src/pages/Home/CreatPage/index.jsx




var CreatPage_dec, CreatPage_class, CreatPage_temp;

function CreatPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CreatPage_typeof = function _typeof(obj) { return typeof obj; }; } else { CreatPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CreatPage_typeof(obj); }

function CreatPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreatPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreatPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) CreatPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) CreatPage_defineProperties(Constructor, staticProps); return Constructor; }

function CreatPage_possibleConstructorReturn(self, call) { if (call && (CreatPage_typeof(call) === "object" || typeof call === "function")) { return call; } return CreatPage_assertThisInitialized(self); }

function CreatPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CreatPage_getPrototypeOf(o) { CreatPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CreatPage_getPrototypeOf(o); }

function CreatPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CreatPage_setPrototypeOf(subClass, superClass); }

function CreatPage_setPrototypeOf(o, p) { CreatPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CreatPage_setPrototypeOf(o, p); }


 // components





var CreatPage_CreatePage = (CreatPage_dec = Object(index_module["b" /* inject */])('projects', 'newpage', 'blocks', 'customBlocks', 'progress'), CreatPage_dec(CreatPage_class = Object(index_module["c" /* observer */])(CreatPage_class = (CreatPage_temp =
/*#__PURE__*/
function (_Component) {
  CreatPage_inherits(CreatePage, _Component);

  function CreatePage(props) {
    var _this;

    CreatPage_classCallCheck(this, CreatePage);

    _this = CreatPage_possibleConstructorReturn(this, CreatPage_getPrototypeOf(CreatePage).call(this, props));

    _this.handleCancelCreate = function () {
      _this.props.newpage.toggle();

      _this.props.blocks.reset();
    };

    _this.aliasNameValidated = function (blocks) {
      var aliasNameCollector = [];
      var conflictName = '';
      var hasEmptyAliasName = blocks.some(function (block) {
        return block.alias.trim() === '';
      }); // 冲突检测

      var hasConflictAliasName = blocks.some(function (block) {
        if (aliasNameCollector.indexOf(block.alias.toLowerCase()) === -1) {
          aliasNameCollector.push(block.alias.toLowerCase());
          return false;
        } else {
          conflictName = block.alias;
          return true;
        }
      });

      if (hasEmptyAliasName) {
        feedback_default.a.toast.show({
          type: 'error',
          content: '已选 Blocks 名称不能为空，请修改后重试。',
          hasMask: true
        });

        return false;
      }

      if (hasConflictAliasName) {
        feedback_default.a.toast.show({
          type: 'error',
          content: "\u5DF2\u9009 Blocks \u5B58\u5728\u591A\u4E2A\u540D\u4E3A: ".concat(conflictName, " \u51B2\u7A81\uFF0C\u8BF7\u4FEE\u6539\u540E\u91CD\u8BD5\u3002"),
          hasMask: true
        });

        return false;
      }

      return true;
    };

    _this.generatePage = function (blocks) {
      var selectedBlocks;

      if (Array.isArray(blocks)) {
        selectedBlocks = blocks;
      } else {
        selectedBlocks = _this.props.blocks.selected; // 检测别名是否为空或者重名

        if (!_this.aliasNameValidated(selectedBlocks)) return;
      }

      _this.props.newpage.openSave();

      _this.setState({
        selectedBlocks: selectedBlocks
      });
    };

    _this.handleBlocksAdd = function (blockObj) {
      if (!Array.isArray(blockObj)) {
        blockObj = [blockObj];
      }

      blockObj.forEach(function (block) {
        return _this.props.blocks.addBlock(block);
      });
    };

    _this.state = {
      selectedBlocks: []
    };

    _this.props.customBlocks.initCustomBlocks();

    return _this;
  }

  CreatPage_createClass(CreatePage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          projects = _this$props.projects,
          newpage = _this$props.newpage,
          blocks = _this$props.blocks;
      var currentProject = projects.currentProject;
      var currentTabKey = blocks.currentTabKey; // 当前项目为空，则不渲染新建页面的组件

      if (!currentProject) return null; // 脚手架类型

      var applicationType = currentProject.getApplicationType();
      var showLayoutPicker = applicationType === 'ice';
      return external_window_React_default.a.createElement(dialog_default.a, {
        className: "create-dialog",
        footer: false,
        minMargin: 0,
        visible: this.props.newpage.visible,
        onCancel: this.handleCancelCreate,
        onClose: this.handleCancelCreate,
        onOk: this.handleCancelCreate,
        closable: "mask,close"
      }, external_window_React_default.a.createElement("div", {
        className: "careate-page"
      }, external_window_React_default.a.createElement("div", {
        className: "create-page-body"
      }, external_window_React_default.a.createElement("div", {
        className: "material-wrapper"
      }, showLayoutPicker && external_window_React_default.a.createElement(BlockPicker_LayoutPicker, null), external_window_React_default.a.createElement(Panel, {
        handleBlocksAdd: this.handleBlocksAdd,
        generatePage: this.generatePage,
        style: {
          paddingTop: showLayoutPicker ? 0 : 10
        }
      })), external_window_React_default.a.createElement(BlockPicker_Previewer, {
        title: "\u5DF2\u9009\u533A\u5757"
      })), external_window_React_default.a.createElement("div", {
        className: "create-page-footer"
      }, external_window_React_default.a.createElement(button_default.a, {
        onClick: this.handleCancelCreate
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "close"
      }), " \u53D6\u6D88"), external_window_React_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.generatePage
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "paper-plane"
      }), " \u751F\u6210\u9875\u9762"))), this.props.newpage.savePageVisible && external_window_React_default.a.createElement(Home_CreatPage_PageConfig, {
        selectedBlocks: this.state.selectedBlocks,
        libary: this.props.projects.currentProject.getLibraryType()
      }));
    }
  }]);

  return CreatePage;
}(external_window_React_["Component"]), CreatPage_temp)) || CreatPage_class) || CreatPage_class);
/* harmony default export */ var Home_CreatPage = (CreatPage_CreatePage);
// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/balloon/index.js
var balloon = __webpack_require__(723);
var balloon_default = /*#__PURE__*/__webpack_require__.n(balloon);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/notification/lib/index.js
var notification_lib = __webpack_require__(44);
var notification_lib_default = /*#__PURE__*/__webpack_require__.n(notification_lib);

// EXTERNAL MODULE: ./renderer/src/components/PageBlockPicker/index.scss
var components_PageBlockPicker = __webpack_require__(919);

// CONCATENATED MODULE: ./renderer/src/components/PageBlockPicker/index.jsx





var PageBlockPicker_dec, PageBlockPicker_class, PageBlockPicker_class2, PageBlockPicker_temp;

function PageBlockPicker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PageBlockPicker_typeof = function _typeof(obj) { return typeof obj; }; } else { PageBlockPicker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PageBlockPicker_typeof(obj); }

function PageBlockPicker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PageBlockPicker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PageBlockPicker_createClass(Constructor, protoProps, staticProps) { if (protoProps) PageBlockPicker_defineProperties(Constructor.prototype, protoProps); if (staticProps) PageBlockPicker_defineProperties(Constructor, staticProps); return Constructor; }

function PageBlockPicker_possibleConstructorReturn(self, call) { if (call && (PageBlockPicker_typeof(call) === "object" || typeof call === "function")) { return call; } return PageBlockPicker_assertThisInitialized(self); }

function PageBlockPicker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PageBlockPicker_getPrototypeOf(o) { PageBlockPicker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PageBlockPicker_getPrototypeOf(o); }

function PageBlockPicker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PageBlockPicker_setPrototypeOf(subClass, superClass); }

function PageBlockPicker_setPrototypeOf(o, p) { PageBlockPicker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PageBlockPicker_setPrototypeOf(o, p); }














var PageBlockPicker_scaffolder = services["a" /* default */].scaffolder; // 向页面新增 block 的功能
// 包括展示现有 page 下的 blocks 以及选择新 block 的管理

var PageBlockPicker_PageBlockPicker = (PageBlockPicker_dec = Object(index_module["b" /* inject */])('pageBlockPicker', 'blocks', 'projects', 'progress'), PageBlockPicker_dec(PageBlockPicker_class = Object(index_module["c" /* observer */])(PageBlockPicker_class = (PageBlockPicker_temp = PageBlockPicker_class2 =
/*#__PURE__*/
function (_Component) {
  PageBlockPicker_inherits(PageBlockPicker, _Component);

  function PageBlockPicker() {
    var _getPrototypeOf2;

    var _this;

    PageBlockPicker_classCallCheck(this, PageBlockPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = PageBlockPicker_possibleConstructorReturn(this, (_getPrototypeOf2 = PageBlockPicker_getPrototypeOf(PageBlockPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleBlocksAdd = function (blockObj) {
      var _this$props = _this.props,
          pageBlockPicker = _this$props.pageBlockPicker,
          blocks = _this$props.blocks;

      if (!Array.isArray(blockObj)) {
        blockObj = [blockObj];
      }

      blockObj.forEach(function (block) {
        return blocks.addBlock(block, pageBlockPicker.existBlocks);
      });
    };

    _this.handleClose = function () {
      var _this$props2 = _this.props,
          pageBlockPicker = _this$props2.pageBlockPicker,
          blocks = _this$props2.blocks;

      if (!pageBlockPicker.isDownloading) {
        blocks.reset();
        pageBlockPicker.close();
      } else {
        return false;
      }
    };

    _this.writeDependencies = function (blocksDependencies, clientPath) {
      var _this$props3 = _this.props,
          pageBlockPicker = _this$props3.pageBlockPicker,
          progress = _this$props3.progress;
      Object(project_utils["e" /* mergeDependenciesToPkg */])(blocksDependencies, clientPath).then(function () {
        progress.end();
        pageBlockPicker.close();
        notification_lib_default.a.warning({
          message: '区块依赖已兜底写入 package.json，可通过【重装依赖】修复，如多次失败可在设置中切换npm源再重试',
          duration: 8
        });
      }).catch(function (e) {
        pageBlockPicker.downloadDone();
        progress.reset();
        components_dialog["a" /* default */].notice({
          title: '依赖写入 package.json 失败',
          error: e
        });
      });
    };

    _this.installBlocksDeps = function (res) {
      var _this$props4 = _this.props,
          projects = _this$props4.projects,
          progress = _this$props4.progress;
      var _projects$currentProj = projects.currentProject,
          currentProject = _projects$currentProj === void 0 ? {} : _projects$currentProj;
      var clientPath = currentProject.clientPath;
      var dependencies = res.dependencies;
      var blocksDependencies = Object(project_utils["b" /* dependenciesFormat */])(dependencies);

      if (blocksDependencies.length > 0) {
        progress.setStatusText('正在下载区块依赖');
        progress.setShowTerminal(true);
        progress.setShowProgress(false);
        return new Promise(function (resolve, reject) {
          project_scripts["a" /* default */].npminstall(currentProject, blocksDependencies.join(' '), false, function (err) {
            if (err) {
              _this.writeDependencies(blocksDependencies, clientPath);

              var error = new Error('安装区块依赖失败');
              logger["a" /* default */].error(error);
              reject(error);
            } else {
              logger["a" /* default */].info('安装区块依赖成功');
              resolve();
            }
          });
        });
      }
    };

    _this.handleOk = function () {
      var _this$props5 = _this.props,
          pageBlockPicker = _this$props5.pageBlockPicker,
          projects = _this$props5.projects,
          progress = _this$props5.progress;
      var pageName = pageBlockPicker.pageName;
      var _projects$currentProj2 = projects.currentProject,
          currentProject = _projects$currentProj2 === void 0 ? {} : _projects$currentProj2;
      var clientPath = currentProject.clientPath,
          clientSrcPath = currentProject.clientSrcPath;
      var blocks = Object(external_window_mobx_["toJS"])(_this.props.blocks.selected); // 检测 block 是否存在冲突等

      if (pageBlockPicker.blockHasConflict(blocks)) {
        feedback_default.a.toast.error("\u533A\u5757\u540D ".concat(pageBlockPicker.blockHasConflict(blocks), " \u5B58\u5728\u51B2\u7A81\uFF0C\u8BF7\u4FEE\u6539\u540E\u91CD\u8BD5"));

        return false;
      }

      pageBlockPicker.downloadStart();
      progress.start(true);
      progress.setStatusText('正在请求区块数据');
      progress.setSectionCount(blocks.length);
      PageBlockPicker_scaffolder.utils.downloadBlocksToPage({
        clientPath: clientPath,
        clientSrcPath: clientSrcPath,
        blocks: blocks,
        pageName: pageName,
        progressFunc: progress.handleProgressFunc
      }).then(function () {
        var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var hasDeps = Object.prototype.hasOwnProperty.call(res, 'dependencies');

        if (!hasDeps || hasDeps && !Object.keys(res.dependencies).length) {
          return true;
        }

        return _this.installBlocksDeps(res);
      }).then(function () {
        progress.end();
        pageBlockPicker.close();
        notification_lib_default.a.success({
          message: '区块下载完成，区块需要自行引入到页面中',
          duration: 8
        });
      }).catch(function (error) {
        pageBlockPicker.downloadDone();
        progress.reset();
        components_dialog["a" /* default */].notice({
          title: '提示',
          error: error.stack
        });
      });
    };

    return _this;
  }

  PageBlockPicker_createClass(PageBlockPicker, [{
    key: "render",
    value: function render() {
      return external_window_React_default.a.createElement(dialog_default.a, {
        className: "fullscreen-dialog",
        visible: this.props.pageBlockPicker.visible,
        onClose: this.handleClose,
        footer: false,
        closable: !this.props.pageBlockPicker.isDownloading
      }, external_window_React_default.a.createElement("div", {
        className: "page-block-picker"
      }, external_window_React_default.a.createElement("div", {
        className: "page-block-picker-header"
      }, "\u4E0B\u8F7D\u533A\u5757\u5230 ", this.props.pageBlockPicker.componentsPath), external_window_React_default.a.createElement("div", {
        className: "page-block-picker-body"
      }, external_window_React_default.a.createElement("div", {
        className: "page-block-picker-panel"
      }, external_window_React_default.a.createElement(Panel, {
        handleBlocksAdd: this.handleBlocksAdd
      })), external_window_React_default.a.createElement("div", {
        className: "page-block-picker-preview"
      }, this.props.pageBlockPicker.existBlocks.length ? external_window_React_default.a.createElement(BlockPicker_PreviewTitle, {
        title: "\u5DF2\u6709\u533A\u5757",
        count: this.props.pageBlockPicker.existBlocks.length
      }) : null, this.props.pageBlockPicker.existBlocks && this.props.pageBlockPicker.existBlocks.map(function (blockName) {
        return external_window_React_default.a.createElement("div", {
          className: "block-item",
          key: blockName
        }, blockName);
      }), external_window_React_default.a.createElement("div", {
        className: "page-block-picker-added"
      }, external_window_React_default.a.createElement(BlockPicker_Previewer, {
        title: "\u65B0\u589E\u533A\u5757",
        text: "\u8BF7\u4ECE\u5DE6\u4FA7\u9009\u62E9\u533A\u5757"
      })))), external_window_React_default.a.createElement("div", {
        className: "page-block-picker-footer"
      }, external_window_React_default.a.createElement(balloon_default.a, {
        trigger: external_window_React_default.a.createElement(button_default.a, {
          disabled: this.props.blocks.selected.length === 0,
          loading: this.props.pageBlockPicker.isDownloading,
          type: "primary",
          onClick: this.handleOk
        }, this.props.pageBlockPicker.isDownloading ? '正在下载区块...' : '开始下载'),
        align: "t",
        alignment: "normal",
        triggerType: "hover",
        style: {
          width: 350,
          height: 85
        },
        visible: this.props.pageBlockPicker.isDownloading
      }, external_window_React_default.a.createElement("div", null, external_window_React_default.a.createElement(Progress["a" /* default */], {
        styleOffset: [-350, 0]
      }))), external_window_React_default.a.createElement(button_default.a, {
        disabled: this.props.pageBlockPicker.isDownloading,
        onClick: this.handleClose
      }, "\u53D6\u6D88"))));
    }
  }]);

  return PageBlockPicker;
}(external_window_React_["Component"]), PageBlockPicker_class2.propTypes = {
  blocks: prop_types_default.a.object.isRequired,
  pageBlockPicker: prop_types_default.a.object.isRequired
}, PageBlockPicker_temp)) || PageBlockPicker_class) || PageBlockPicker_class);
/* harmony default export */ var src_components_PageBlockPicker = (PageBlockPicker_PageBlockPicker);
// EXTERNAL MODULE: external "electron"
var external_electron_ = __webpack_require__(4);

// EXTERNAL MODULE: ./renderer/node_modules/react-loadable/lib/index.js
var react_loadable_lib = __webpack_require__(64);
var react_loadable_lib_default = /*#__PURE__*/__webpack_require__.n(react_loadable_lib);

// EXTERNAL MODULE: ./renderer/src/external.js
var external = __webpack_require__(179);

// EXTERNAL MODULE: ./renderer/src/pages/Home/ProjectPanel/ActionButton/index.scss
var ProjectPanel_ActionButton = __webpack_require__(920);

// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectPanel/ActionButton/index.jsx
function ActionButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionButton_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionButton_typeof(obj); }

function ActionButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ActionButton_defineProperty(target, key, source[key]); }); } return target; }

function ActionButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ActionButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionButton_defineProperties(Constructor, staticProps); return Constructor; }

function ActionButton_possibleConstructorReturn(self, call) { if (call && (ActionButton_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionButton_assertThisInitialized(self); }

function ActionButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionButton_getPrototypeOf(o) { ActionButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionButton_getPrototypeOf(o); }

function ActionButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionButton_setPrototypeOf(subClass, superClass); }

function ActionButton_setPrototypeOf(o, p) { ActionButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionButton_setPrototypeOf(o, p); }

// import { Icon } from '@icedesign/base';



var ActionButton_styles = {
  actionIcon: {
    cursor: 'pointer'
  },
  actionIconDisabled: {
    cursor: 'not-allowed',
    color: '#EEEEEE'
  },
  acitonLabel: {
    fontSize: 12,
    display: 'block',
    paddingTop: 3
  }
};

var ActionButton_ActionButton =
/*#__PURE__*/
function (_Component) {
  ActionButton_inherits(ActionButton, _Component);

  function ActionButton(props) {
    var _this;

    ActionButton_classCallCheck(this, ActionButton);

    _this = ActionButton_possibleConstructorReturn(this, ActionButton_getPrototypeOf(ActionButton).call(this, props));

    _this.handleClick = function () {
      if (!_this.props.disabled) {
        _this.props.onClick();
      }
    };

    return _this;
  }

  ActionButton_createClass(ActionButton, [{
    key: "render",
    value: function render() {
      var disabledStyle = this.props.disabled ? ActionButton_styles.actionIconDisabled : {};
      var disabledLabel = this.props.disabledLabel || '';
      var label = this.props.disabled ? disabledLabel : this.props.label;
      return external_window_React_default.a.createElement("div", {
        className: "action-button-item",
        onClick: this.handleClick
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        style: ActionButton_objectSpread({}, ActionButton_styles.actionIcon, disabledStyle),
        size: this.props.size || 'medium',
        type: this.props.name
      }), external_window_React_default.a.createElement("span", {
        style: ActionButton_objectSpread({}, ActionButton_styles.acitonLabel, disabledStyle)
      }, label || this.props.label));
    }
  }]);

  return ActionButton;
}(external_window_React_["Component"]);

/* harmony default export */ var Home_ProjectPanel_ActionButton = (ActionButton_ActionButton);
// EXTERNAL MODULE: ./node_modules/semver/semver.js
var semver = __webpack_require__(117);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);

// EXTERNAL MODULE: ./node_modules/latest-version/index.js
var latest_version = __webpack_require__(921);
var latest_version_default = /*#__PURE__*/__webpack_require__.n(latest_version);

// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectPanel/AddPackage.jsx




var AddPackage_dec, AddPackage_class, AddPackage_temp;

function AddPackage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AddPackage_typeof = function _typeof(obj) { return typeof obj; }; } else { AddPackage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AddPackage_typeof(obj); }

function AddPackage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddPackage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddPackage_createClass(Constructor, protoProps, staticProps) { if (protoProps) AddPackage_defineProperties(Constructor.prototype, protoProps); if (staticProps) AddPackage_defineProperties(Constructor, staticProps); return Constructor; }

function AddPackage_possibleConstructorReturn(self, call) { if (call && (AddPackage_typeof(call) === "object" || typeof call === "function")) { return call; } return AddPackage_assertThisInitialized(self); }

function AddPackage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AddPackage_getPrototypeOf(o) { AddPackage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AddPackage_getPrototypeOf(o); }

function AddPackage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AddPackage_setPrototypeOf(subClass, superClass); }

function AddPackage_setPrototypeOf(o, p) { AddPackage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AddPackage_setPrototypeOf(o, p); }









var AddPackage_interaction = services["a" /* default */].interaction,
    settings = services["a" /* default */].settings;
var AddPackage_AddPackage = (AddPackage_dec = Object(index_module["b" /* inject */])('projects', 'installer'), AddPackage_dec(AddPackage_class = Object(index_module["c" /* observer */])(AddPackage_class = (AddPackage_temp =
/*#__PURE__*/
function (_Component) {
  AddPackage_inherits(AddPackage, _Component);

  function AddPackage() {
    var _getPrototypeOf2;

    var _this;

    AddPackage_classCallCheck(this, AddPackage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = AddPackage_possibleConstructorReturn(this, (_getPrototypeOf2 = AddPackage_getPrototypeOf(AddPackage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.addDepsConfirmNotice = function () {
      var newDeps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var projectDeps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var installer = _this.props.installer;
      var newDepsArr = [];
      var projectDepsArr = [];
      newDeps.forEach(function (newDep) {
        Object.keys(projectDeps).forEach(function (projectDep) {
          if (newDep.name === projectDep) {
            var _semver$minVersion = semver_default.a.minVersion(newDep.version),
                newDepMajor = _semver$minVersion.major,
                newDepVersion = _semver$minVersion.version;

            var _semver$minVersion2 = semver_default.a.minVersion(projectDeps[projectDep]),
                projectDepMajor = _semver$minVersion2.major;

            if (newDepMajor > projectDepMajor) {
              newDepsArr.push("".concat(newDep.name, "@").concat(newDepVersion));
              projectDepsArr.push("".concat(newDep.name, "@").concat(projectDeps[projectDep]));
            }
          }
        });
      });

      if (newDepsArr.length) {
        components_dialog["a" /* default */].confirm({
          title: '提示',
          content: external_window_React_default.a.createElement("div", null, "\u65B0\u6DFB\u52A0\u7684\u4F9D\u8D56 ", newDepsArr.join(','), " \u4E3B\u7248\u672C\u53F7\u4E0E\u9879\u76EE\u4F9D\u8D56", projectDepsArr.join(','), " \u4E3B\u7248\u672C\u53F7\u53D1\u751F\u6539\u53D8\u53EF\u80FD\u5B58\u5728\u4E0D\u517C\u5BB9\u7684 API \u4FEE\u6539\uFF0C\u786E\u5B9A\u8981\u7EE7\u7EED\u5417")
        }, function (ok) {
          if (ok) {
            _this.startNpmInstall();
          } else {
            installer.installing = false;
          }
        });
      } else {
        _this.startNpmInstall();
      }
    };

    _this.checkPackageVersion = function (deps) {
      var currentProject = _this.props.projects.currentProject;
      var projectDeps = currentProject.pkgData.dependencies; // 新增的依赖是否有指定版本，过滤掉指定版本的依赖

      var newDeps = deps.split(/\s+/).filter(function (dep) {
        return !!dep.trim();
      }).filter(function (dep) {
        return !dep.startsWith('@') || dep.lastIndexOf('@') > 0;
      });

      if (!newDeps.length) {
        return _this.startNpmInstall();
      } // 新增的依赖是否在项目中


      var existDeps = newDeps.filter(function (dep) {
        return Object.keys(projectDeps).includes(dep);
      });

      if (!existDeps.length) {
        return _this.startNpmInstall();
      } // 获取当前项目存在依赖的最新版本，根据最新版本进行提示


      var registryUrl = settings.get('registry') || 'http://registry.npmjs.org';
      var getLatestVersion = existDeps.map(function (dep) {
        return latest_version_default()(dep, {
          registryUrl: registryUrl
        }).then(function (v) {
          return Promise.resolve({
            name: dep,
            version: v
          });
        });
      });
      Promise.all(getLatestVersion).then(function (result) {
        _this.addDepsConfirmNotice(result, projectDeps);
      }).catch(function (error) {
        logger["a" /* default */].error(error);
      });
    };

    _this.startNpmInstall = function () {
      var _this$props = _this.props,
          installer = _this$props.installer,
          projects = _this$props.projects;
      var currentProject = projects.currentProject;
      project_scripts["a" /* default */].npminstall(currentProject, installer.deps, installer.type === 'devDependencies', function (error, dependencies) {
        installer.installing = false;

        if (error) {
          components_dialog["a" /* default */].alert({
            title: '安装依赖失败',
            content: external_window_React_default.a.createElement("div", null, "\u8BF7\u786E\u8BA4 ", dependencies.join(' '), " \u4F9D\u8D56\u5B58\u5728\uFF0C\u6216\u7F51\u7EDC\u8FDE\u63A5\u6B63\u5E38\uFF0C", external_window_React_default.a.createElement("br", null), "\u53EF\u5C55\u5F00\u3010\u8FD0\u884C\u65E5\u5FD7\u3011\u67E5\u770B\u8BE6\u7EC6\u53CD\u9988\u4FE1\u606F\u3002")
          });
        } else {
          installer.close();
          AddPackage_interaction.notify({
            title: '依赖安装成功',
            body: dependencies.join(' '),
            type: 'success'
          });
        }
      });
    };

    _this.handleNpminstallOk = function () {
      var installer = _this.props.installer;
      installer.installing = true;

      _this.checkPackageVersion(installer.deps);
    };

    _this.handleDevDependencies = function (event) {
      var target = event.target;
      var value = target.checked;

      if (value) {
        _this.props.installer.type = 'devDependencies';
      } else {
        _this.props.installer.type = 'dependencies';
      }
    };

    _this.handleNpminstallClose = function () {
      if (!_this.props.installer.installing) {
        _this.props.installer.close();
      }
    };

    _this.handleDepsChange = function (value) {
      _this.props.installer.deps = value;
    };

    return _this;
  }

  AddPackage_createClass(AddPackage, [{
    key: "render",
    value: function render() {
      return external_window_React_default.a.createElement(dialog_default.a, {
        title: "\u6DFB\u52A0\u4F9D\u8D56",
        visible: this.props.installer.visible,
        onClose: this.handleNpminstallClose,
        footer: external_window_React_default.a.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }
        }, external_window_React_default.a.createElement(button_default.a, {
          disabled: this.props.installer.installing,
          size: "small",
          onClick: this.handleNpminstallClose
        }, "\u53D6\u6D88"), external_window_React_default.a.createElement(button_default.a, {
          size: "small",
          type: "primary",
          disabled: this.props.installer.deps.trim() === '' || this.props.installer.installing,
          onClick: this.handleNpminstallOk,
          loading: this.props.installer.installing
        }, this.props.installer.installing ? '正在安装...' : '确定'))
      }, external_window_React_default.a.createElement(input_default.a, {
        onChange: this.handleDepsChange,
        placeholder: '请输入 npm 包名以及版本号，例如：lodash@latest',
        style: {
          width: 300
        },
        multiple: true
      }));
    }
  }]);

  return AddPackage;
}(external_window_React_["Component"]), AddPackage_temp)) || AddPackage_class) || AddPackage_class);
/* harmony default export */ var ProjectPanel_AddPackage = (AddPackage_AddPackage);
// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectPanel/BuildStatus.jsx
function BuildStatus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var BuildStatus_BuildStatus = function BuildStatus(props) {
  var classes = classnames_default()(BuildStatus_defineProperty({
    'project-status': true
  }, "project-status-".concat(props.status), true));
  var statusMap = {
    normal: '未构建',
    building: '构建中',
    done: '构建完成',
    failed: '构建失败'
  };

  if (props.status === 'normal') {
    return null;
  }

  return external_window_React_default.a.createElement("span", {
    className: classes
  }, statusMap[props.status]);
};

/* harmony default export */ var ProjectPanel_BuildStatus = (BuildStatus_BuildStatus);
// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectPanel/DevStatus.jsx
function DevStatus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function DevStatus_progress(percentage) {
  if (percentage === 0 || percentage === 1) {
    return null;
  }

  return Math.floor(percentage * 100) + '%';
}

var DevStatus_DevStatus = function DevStatus(props) {
  var classes = classnames_default()(DevStatus_defineProperty({
    'project-status': true
  }, "project-status-".concat(props.status), true));
  var statusMap = {
    notexist: '项目已不存在',
    normal: '未启动调试服务',
    starting: '调试服务启动中',
    working: '调试服务运行中',
    stop: '调试服务已停止'
  };
  return external_window_React_default.a.createElement("span", {
    className: classes
  }, statusMap[props.status], " ", DevStatus_progress(props.progress));
};

/* harmony default export */ var ProjectPanel_DevStatus = (DevStatus_DevStatus);
// EXTERNAL MODULE: ./renderer/src/components/ExtraButton/index.jsx
var ExtraButton = __webpack_require__(665);

// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectInit/index.jsx


var ProjectInit_class, ProjectInit_temp;

function ProjectInit_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProjectInit_typeof = function _typeof(obj) { return typeof obj; }; } else { ProjectInit_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProjectInit_typeof(obj); }

function ProjectInit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectInit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProjectInit_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProjectInit_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProjectInit_defineProperties(Constructor, staticProps); return Constructor; }

function ProjectInit_possibleConstructorReturn(self, call) { if (call && (ProjectInit_typeof(call) === "object" || typeof call === "function")) { return call; } return ProjectInit_assertThisInitialized(self); }

function ProjectInit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProjectInit_getPrototypeOf(o) { ProjectInit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProjectInit_getPrototypeOf(o); }

function ProjectInit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProjectInit_setPrototypeOf(subClass, superClass); }

function ProjectInit_setPrototypeOf(o, p) { ProjectInit_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProjectInit_setPrototypeOf(o, p); }





var ProjectInit_interaction = services["a" /* default */].interaction;
/**
 * 用于在新项目创建完成后，操作初始化依赖的功能
 */

var ProjectInit_ProjectInit = Object(index_module["c" /* observer */])(ProjectInit_class = (ProjectInit_temp =
/*#__PURE__*/
function (_Component) {
  ProjectInit_inherits(ProjectInit, _Component);

  function ProjectInit() {
    var _getPrototypeOf2;

    var _this;

    ProjectInit_classCallCheck(this, ProjectInit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ProjectInit_possibleConstructorReturn(this, (_getPrototypeOf2 = ProjectInit_getPrototypeOf(ProjectInit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleCancel = function () {
      _this.props.project.setNeedInstallDeps(false);
    };

    _this.handleOk = function () {
      var project = _this.props.project;
      var nodeFramework = project.nodeFramework;
      project.setNeedInstallDeps(false);
      project.toggleTerminal();
      project.installStart();
      project_scripts["a" /* default */].install({
        project: project,
        reinstall: false
      }, function (code, alertContent) {
        project.installDone();

        if (code !== 0) {
          alert(alertContent);
        } else {
          ProjectInit_interaction.notify({
            title: '项目依赖安装完成',
            type: 'success',
            body: '后续可通过自定义安装依赖添加'
          });
        }
      });
    };

    return _this;
  }

  ProjectInit_createClass(ProjectInit, [{
    key: "render",
    value: function render() {
      var project = this.props.project;

      if (project && !project.isUnavailable) {
        return external_window_React_default.a.createElement(dialog_default.a, {
          visible: project.needInstallDeps,
          title: "\u521D\u59CB\u5316\u9879\u76EE",
          onClose: this.handleCancel,
          onCancel: this.handleCancel,
          onOk: this.handleOk
        }, external_window_React_default.a.createElement("div", {
          style: {
            width: 400,
            lineHeight: '24px'
          }
        }, "\u5F53\u524D\u9879\u76EE\u4F9D\u8D56\u5C1A\u672A\u5B89\u88C5\uFF0C\u5B89\u88C5\u8FC7\u7A0B\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\uFF0C\u662F\u5426\u7ACB\u5373\u5B89\u88C5\uFF1F"));
      }

      return null;
    }
  }]);

  return ProjectInit;
}(external_window_React_["Component"]), ProjectInit_temp)) || ProjectInit_class;

/* harmony default export */ var Home_ProjectInit = (ProjectInit_ProjectInit);
// EXTERNAL MODULE: ./renderer/src/components/ProjectTerminal/index.jsx
var ProjectTerminal = __webpack_require__(688);

// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectPanel/ServerUrl.jsx




var ServerUrl_DevServerUrl = function DevServerUrl(props) {
  var classes = classnames_default()({
    'project-server-url': true
  });

  if (!props.url) {
    return null;
  }

  return external_window_React_default.a.createElement("span", null, "\u672C\u5730\u670D\u52A1\u5668:", ' ', external_window_React_default.a.createElement("a", {
    href: props.url,
    onClick: function onClick(event) {
      event.preventDefault();
      external_electron_["shell"].openExternal(event.nativeEvent.target.href);
    },
    className: classes
  }, props.url));
};

/* harmony default export */ var ServerUrl = (ServerUrl_DevServerUrl);
// EXTERNAL MODULE: ./renderer/src/components/EmptyTips/index.jsx
var EmptyTips = __webpack_require__(663);

// EXTERNAL MODULE: ./renderer/src/components/Scaffold/index.js + 4 modules
var Scaffold = __webpack_require__(714);

// EXTERNAL MODULE: ./renderer/src/components/CreateProjectDialog/index.jsx
var CreateProjectDialog = __webpack_require__(772);

// EXTERNAL MODULE: ./renderer/src/history.js
var src_history = __webpack_require__(38);

// EXTERNAL MODULE: ./renderer/src/components/StartPanel/index.scss
var components_StartPanel = __webpack_require__(946);

// CONCATENATED MODULE: ./renderer/src/components/StartPanel/index.js


var StartPanel_dec, StartPanel_class, StartPanel_class2, StartPanel_temp;

function StartPanel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StartPanel_typeof = function _typeof(obj) { return typeof obj; }; } else { StartPanel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StartPanel_typeof(obj); }

function StartPanel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StartPanel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StartPanel_createClass(Constructor, protoProps, staticProps) { if (protoProps) StartPanel_defineProperties(Constructor.prototype, protoProps); if (staticProps) StartPanel_defineProperties(Constructor, staticProps); return Constructor; }

function StartPanel_possibleConstructorReturn(self, call) { if (call && (StartPanel_typeof(call) === "object" || typeof call === "function")) { return call; } return StartPanel_assertThisInitialized(self); }

function StartPanel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StartPanel_getPrototypeOf(o) { StartPanel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StartPanel_getPrototypeOf(o); }

function StartPanel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) StartPanel_setPrototypeOf(subClass, superClass); }

function StartPanel_setPrototypeOf(o, p) { StartPanel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StartPanel_setPrototypeOf(o, p); }










var StartPanel_StartPanel = (StartPanel_dec = Object(index_module["b" /* inject */])('materials', 'scaffold', 'projects'), StartPanel_dec(StartPanel_class = Object(index_module["c" /* observer */])(StartPanel_class = (StartPanel_temp = StartPanel_class2 =
/*#__PURE__*/
function (_Component) {
  StartPanel_inherits(StartPanel, _Component);

  function StartPanel() {
    var _getPrototypeOf2;

    var _this;

    StartPanel_classCallCheck(this, StartPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = StartPanel_possibleConstructorReturn(this, (_getPrototypeOf2 = StartPanel_getPrototypeOf(StartPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.openExistProject = function () {
      _this.props.projects.addFromFinder();
    };

    _this.gotoCreateProject = function () {
      src_history["a" /* default */].push('/scaffolds');
    };

    return _this;
  }

  StartPanel_createClass(StartPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.materials.loadStartRecommendMaterials();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var startRecommendMaterials = this.props.materials.startRecommendMaterials;
      var _startRecommendMateri = startRecommendMaterials.scaffolds,
          scaffolds = _startRecommendMateri === void 0 ? [] : _startRecommendMateri;

      if (!startRecommendMaterials.loaded) {
        return external_window_React_default.a.createElement(EmptyTips["a" /* default */], {
          size: 120
        }, "\u52A0\u8F7D\u4E2D...");
      }

      if (startRecommendMaterials.error) {
        return external_window_React_default.a.createElement(EmptyTips["a" /* default */], {
          size: 120,
          style: {
            margin: '0 10px'
          }
        }, startRecommendMaterials.error);
      }

      return external_window_React_default.a.createElement("div", {
        className: "start-panel"
      }, scaffolds.length ? external_window_React_default.a.createElement("div", {
        className: "start-recommend-scaffolds"
      }, scaffolds.map(function (material, index) {
        return external_window_React_default.a.createElement(Scaffold["b" /* Item */], {
          key: index,
          createProject: _this2.props.handleSelectedScaffold,
          data: material,
          isOfficialSource: true
        });
      })) : external_window_React_default.a.createElement("img", {
        alt: "\u9879\u76EE\u4E3A\u7A7A",
        src: "https://img.alicdn.com/tfs/TB1WNNxjBHH8KJjy0FbXXcqlpXa-780-780.png",
        style: {
          width: 200,
          height: 200
        }
      }), external_window_React_default.a.createElement("div", {
        className: "start-panel-desc"
      }, scaffolds.length ? '从热门模板开始初始化你的项目' : '暂无项目请先打开项目或创建项目'), external_window_React_default.a.createElement("div", {
        className: "buttons"
      }, external_window_React_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.openExistProject
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "folderplus"
      }), " \u6253\u5F00\u9879\u76EE"), external_window_React_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.gotoCreateProject
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "plus"
      }), " ", scaffolds.length ? '更多模板' : '创建项目')), external_window_React_default.a.createElement(CreateProjectDialog["a" /* default */], null));
    }
  }]);

  return StartPanel;
}(external_window_React_["Component"]), StartPanel_class2.displayName = 'StartPanel', StartPanel_class2.propTypes = {
  materials: prop_types_default.a.object.isRequired,
  projects: prop_types_default.a.object.isRequired,
  handleSelectedScaffold: prop_types_default.a.func.isRequired
}, StartPanel_temp)) || StartPanel_class) || StartPanel_class);
/* harmony default export */ var src_components_StartPanel = (Object(Scaffold["d" /* ScaffoldHoc */])(StartPanel_StartPanel));
// EXTERNAL MODULE: ./renderer/src/pages/Home/ProjectPanel/index.scss
var ProjectPanel = __webpack_require__(947);

// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectPanel/index.jsx



var ProjectPanel_dec, ProjectPanel_class, ProjectPanel_temp;

function ProjectPanel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProjectPanel_typeof = function _typeof(obj) { return typeof obj; }; } else { ProjectPanel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProjectPanel_typeof(obj); }

function ProjectPanel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectPanel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProjectPanel_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProjectPanel_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProjectPanel_defineProperties(Constructor, staticProps); return Constructor; }

function ProjectPanel_possibleConstructorReturn(self, call) { if (call && (ProjectPanel_typeof(call) === "object" || typeof call === "function")) { return call; } return ProjectPanel_assertThisInitialized(self); }

function ProjectPanel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProjectPanel_getPrototypeOf(o) { ProjectPanel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProjectPanel_getPrototypeOf(o); }

function ProjectPanel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProjectPanel_setPrototypeOf(subClass, superClass); }

function ProjectPanel_setPrototypeOf(o, p) { ProjectPanel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProjectPanel_setPrototypeOf(o, p); }



















var ProjectDashboard = react_loadable_lib_default()({
  loader: function loader() {
    return Promise.all(/* import() */[__webpack_require__.e(6), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 1218));
  },
  loading: function loading() {
    return external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extensions"
    }, external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extension"
    }, external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extension-panel"
    })), external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extension"
    }, external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extension-panel"
    })), external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extension"
    }, external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extension-panel"
    })), external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extension"
    }, external_window_React_default.a.createElement("div", {
      className: "iceworks-skeleton-extension-panel"
    })));
  }
});
var editors = services["a" /* default */].editors,
    shells = services["a" /* default */].shells,
    folder = services["a" /* default */].folder,
    ProjectPanel_interaction = services["a" /* default */].interaction,
    createTouchBar = services["a" /* default */].createTouchBar;

var ProjectPanel_Project = (ProjectPanel_dec = Object(index_module["b" /* inject */])('projects', 'newpage', 'switcher', 'installer'), ProjectPanel_dec(ProjectPanel_class = Object(index_module["c" /* observer */])(ProjectPanel_class = (ProjectPanel_temp =
/*#__PURE__*/
function (_Component) {
  ProjectPanel_inherits(Project, _Component);

  function Project(props) {
    var _this;

    ProjectPanel_classCallCheck(this, Project);

    _this = ProjectPanel_possibleConstructorReturn(this, ProjectPanel_getPrototypeOf(Project).call(this, props));

    _this.setTitle = function () {
      var projects = _this.props.projects;

      if (projects.currentProject) {
        external_electron_["ipcRenderer"].send('setTitle', projects.currentProject.fullPath);
      } else {
        external_electron_["ipcRenderer"].send('setTitle', 'iceworks');
      }
    };

    _this.handleStartProject = function () {
      var projects = _this.props.projects;
      project_scripts["a" /* default */].start(projects.currentProject);
    };

    _this.handleStopProject = function () {
      var projects = _this.props.projects;
      project_scripts["a" /* default */].stop(projects.currentProject);
    };

    _this.handleBuildProject = function () {
      var projects = _this.props.projects;
      project_scripts["a" /* default */].build(projects.currentProject);
    };

    _this.handleCreatePage = function () {
      var projects = _this.props.projects;

      _this.props.newpage.toggle();
    };

    _this.handleOpenEditor = function () {
      var projects = _this.props.projects;
      editors.open(projects.currentProject.fullPath);
    };

    _this.handleOpenTerminal = function () {
      var projects = _this.props.projects;
      shells.open(projects.currentProject.fullPath);
    };

    _this.handleOpenFolder = function () {
      var projects = _this.props.projects;
      folder.open(projects.currentProject.fullPath);
    };

    _this.handleToggleProjectSwitch = function () {
      _this.props.switcher.toggle();
    };

    _this.handleNpminstallOpen = function () {
      _this.props.installer.open();
    };

    _this.handleInstallProject = function () {
      var projects = _this.props.projects;
      var currentProject = projects.currentProject;
      var nodeFramework = projects.currentProject.nodeFramework;

      dialog_default.a.confirm({
        needWrapper: false,
        title: '安装项目依赖',
        content: external_window_React_default.a.createElement("div", {
          style: {
            lineHeight: '24px',
            width: 300
          }
        }, "\u5C06\u91CD\u7F6E\u5B89\u88C5\u9879\u76EE\u6240\u6709\u4F9D\u8D56\uFF0C\u5B89\u88C5\u671F\u95F4\u65E0\u6CD5\u8FDB\u542F\u52A8\u8C03\u8BD5\u670D\u52A1\u3001\u65B0\u5EFA\u9875\u9762\u3001\u6784\u5EFA\u9879\u76EE\u64CD\u4F5C\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u3002"),
        onOk: function onOk() {
          // 安装项目依赖
          currentProject.installStart();

          if (!currentProject.terminalVisible) {
            currentProject.toggleTerminal();
          }

          project_scripts["a" /* default */].install({
            project: currentProject
          }, function (code) {
            var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            currentProject.installDone();

            if (code !== 0) {
              var title = result.title,
                  content = result.content;
              components_dialog["a" /* default */].alert({
                title: title,
                content: content
              });
            } else {
              ProjectPanel_interaction.notify({
                title: '项目依赖安装完成',
                type: 'success',
                body: '后续可通过自定义安装依赖添加'
              });
            }
          });
        }
      });
    };

    _this.handleReloadProject = function () {
      var projects = _this.props.projects;
      var currentProject = projects.currentProject;

      if (currentProject) {
        currentProject.updatePkgData();

        feedback_default.a.toast.success('刷新结束');
      }
    };

    _this.handleRepairProject = function () {
      Object(external["a" /* openInBrowser */])('https://github.com/alibaba/ice/wiki/%E5%B7%B2%E6%9C%89%E9%A1%B9%E7%9B%AE%E6%8E%A5%E5%85%A5-Iceworks');
    };

    _this.handleToggleTerminal = function () {
      var projects = _this.props.projects;
      var currentProject = projects.currentProject;
      currentProject.toggleTerminal();
    };

    _this.closeLogs = function () {
      _this.handleToggleTerminal();
    };

    return _this;
  }

  ProjectPanel_createClass(Project, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTitle();
      this.setTouchBar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setTitle();
      this.setTouchBar();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTouchBar();
    }
  }, {
    key: "clearTouchBar",
    value: function clearTouchBar() {
      createTouchBar({}); // Create empty bar
    }
  }, {
    key: "setTouchBar",
    value: function setTouchBar() {
      var currentProject = this.props.projects.currentProject;

      if (!currentProject) {
        return this.clearTouchBar();
      }

      var touchBarHandlers = {
        openEditor: this.handleOpenEditor,
        openTerminal: this.handleOpenTerminal,
        openFolder: this.handleOpenFolder
      };

      if (!currentProject.isUnavailable) {
        touchBarHandlers.createPage = this.handleCreatePage;
        touchBarHandlers.buildProject = this.handleBuildProject;

        if (currentProject.isWorking) {
          touchBarHandlers.stopProject = this.handleStopProject;
        } else {
          touchBarHandlers.startProject = this.handleStartProject;
        }
      }

      createTouchBar(touchBarHandlers);
    }
  }, {
    key: "render",
    value: function render() {
      var currentProject = this.props.projects.currentProject;

      if (!currentProject) {
        return external_window_React_default.a.createElement("div", {
          className: "project-is-null"
        }, external_window_React_default.a.createElement(src_components_StartPanel, null));
      }

      return external_window_React_default.a.createElement("div", {
        className: "project-panel"
      }, external_window_React_default.a.createElement("button", {
        className: "project-title-wrapper",
        onClick: this.handleToggleProjectSwitch
      }, external_window_React_default.a.createElement("h1", {
        className: "title",
        title: currentProject.projectName
      }, currentProject.projectName), external_window_React_default.a.createElement("span", {
        className: "switch-btn"
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "xs",
        type: "down-triangle"
      }))), external_window_React_default.a.createElement("div", {
        className: "project-header"
      }, external_window_React_default.a.createElement("div", {
        className: "scripts"
      }, currentProject.isWorking ? external_window_React_default.a.createElement(Home_ProjectPanel_ActionButton, {
        disabled: currentProject.isUnavailable,
        name: "stop",
        onClick: this.handleStopProject,
        label: "\u505C\u6B62\u8C03\u8BD5\u670D\u52A1"
      }) : external_window_React_default.a.createElement(Home_ProjectPanel_ActionButton, {
        disabled: currentProject.isUnavailable,
        name: "start",
        onClick: this.handleStartProject,
        label: "\u542F\u52A8\u8C03\u8BD5\u670D\u52A1",
        disabledLabel: "\u672A\u9002\u914D"
      }), external_window_React_default.a.createElement(Home_ProjectPanel_ActionButton, {
        disabled: currentProject.isUnavailable,
        name: "new-page",
        onClick: this.handleCreatePage,
        label: "\u65B0\u5EFA\u9875\u9762",
        disabledLabel: "\u672A\u9002\u914D"
      }), external_window_React_default.a.createElement(Home_ProjectPanel_ActionButton, {
        disabled: currentProject.isUnavailable,
        name: "build",
        onClick: this.handleBuildProject,
        label: "\u6784\u5EFA\u9879\u76EE",
        disabledLabel: "\u672A\u9002\u914D"
      })), external_window_React_default.a.createElement("div", {
        className: "external"
      }, external_window_React_default.a.createElement(ExtraButton["a" /* default */], {
        placement: 'bottom',
        tipText: '在编辑器中打开',
        onClick: this.handleOpenEditor
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "code"
      }), " \u7F16\u8F91\u5668"), external_window_React_default.a.createElement(ExtraButton["a" /* default */], {
        placement: 'bottom',
        tipText: '在终端中打开',
        onClick: this.handleOpenTerminal
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "terminal"
      }), " \u7EC8\u7AEF"), external_window_React_default.a.createElement(ExtraButton["a" /* default */], {
        tipText: '在文件夹中打开',
        onClick: this.handleOpenFolder
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "folderopen"
      }), " \u6587\u4EF6\u5939"))), external_window_React_default.a.createElement("div", {
        className: "project-overview"
      }, external_window_React_default.a.createElement("div", {
        className: "version"
      }, "\u9879\u76EE\u7248\u672C\u53F7\uFF1A", currentProject.pkgData && currentProject.pkgData.version || '-.-.-'), external_window_React_default.a.createElement("div", {
        className: "server"
      }, external_window_React_default.a.createElement(ServerUrl, {
        url: currentProject.serverUrl
      })), external_window_React_default.a.createElement("div", {
        className: "status"
      }, external_window_React_default.a.createElement(ProjectPanel_DevStatus, {
        status: currentProject.statusDev,
        progress: currentProject.statusCompileProgress
      }), external_window_React_default.a.createElement(ProjectPanel_BuildStatus, {
        status: currentProject.statusBuild
      }), currentProject.isDependenciesInstalling && external_window_React_default.a.createElement("span", {
        className: 'project-status project-status-working'
      }, "\u4F9D\u8D56\u5B89\u88C5\u4E2D")), external_window_React_default.a.createElement("div", {
        className: "extra-action"
      }, currentProject.isUnavailable && external_window_React_default.a.createElement(ExtraButton["a" /* default */], {
        placement: 'bottom',
        tipText: '适配 Iceworks 需要遵循一定的目录规范，以及信息描述，点击查看详细适配说明，适配完成后可刷新项目',
        onClick: this.handleRepairProject
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "wrencha"
      }), " \u67E5\u770B\u9002\u914D\u6559\u7A0B"), currentProject.isUnavailable && external_window_React_default.a.createElement(ExtraButton["a" /* default */], {
        placement: 'bottom',
        tipText: '更新项目状态',
        onClick: this.handleReloadProject
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "reload"
      }), " \u5237\u65B0\u9879\u76EE"), external_window_React_default.a.createElement(ExtraButton["a" /* default */], {
        disabled: !currentProject.exists,
        active: currentProject.terminalVisible,
        placement: 'bottom',
        tipText: '切换终端日志面板，查看项目运行，构建等日志',
        onClick: this.handleToggleTerminal
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "history"
      }), " \u8FD0\u884C\u65E5\u5FD7"), external_window_React_default.a.createElement(ExtraButton["a" /* default */], {
        placement: 'bottom',
        disabled: currentProject.actionDisabled,
        tipText: '初始化项目依赖，或重新安装所有依赖',
        onClick: this.handleInstallProject
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "package_org"
      }), " \u91CD\u88C5\u4F9D\u8D56"), external_window_React_default.a.createElement(ExtraButton["a" /* default */], {
        disabled: currentProject.actionDisabled,
        tipText: '根据项目需要，自定义安装依赖',
        onClick: this.handleNpminstallOpen
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "package"
      }), " \u6DFB\u52A0\u4F9D\u8D56"))), external_window_React_default.a.createElement(ProjectDashboard, {
        className: "project-dashboard"
      }), currentProject.exists && currentProject.terminalVisible && external_window_React_default.a.createElement(ProjectTerminal["a" /* default */], {
        project: currentProject,
        visible: currentProject.terminalVisible,
        closeLogs: this.closeLogs
      }), external_window_React_default.a.createElement(ProjectPanel_AddPackage, null), external_window_React_default.a.createElement(Home_ProjectInit, {
        project: currentProject
      }));
    }
  }]);

  return Project;
}(external_window_React_["Component"]), ProjectPanel_temp)) || ProjectPanel_class) || ProjectPanel_class);
/* harmony default export */ var Home_ProjectPanel = (ProjectPanel_Project);
// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(671);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(lib_checkbox);

// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectSwitch/Option.jsx



var Option_class, Option_temp;

function Option_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Option_typeof = function _typeof(obj) { return typeof obj; }; } else { Option_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Option_typeof(obj); }

function Option_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Option_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Option_createClass(Constructor, protoProps, staticProps) { if (protoProps) Option_defineProperties(Constructor.prototype, protoProps); if (staticProps) Option_defineProperties(Constructor, staticProps); return Constructor; }

function Option_possibleConstructorReturn(self, call) { if (call && (Option_typeof(call) === "object" || typeof call === "function")) { return call; } return Option_assertThisInitialized(self); }

function Option_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Option_getPrototypeOf(o) { Option_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Option_getPrototypeOf(o); }

function Option_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Option_setPrototypeOf(subClass, superClass); }

function Option_setPrototypeOf(o, p) { Option_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Option_setPrototypeOf(o, p); }







var Option_Option = Object(index_module["c" /* observer */])(Option_class = (Option_temp =
/*#__PURE__*/
function (_Component) {
  Option_inherits(Option, _Component);

  function Option() {
    var _getPrototypeOf2;

    var _this;

    Option_classCallCheck(this, Option);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Option_possibleConstructorReturn(this, (_getPrototypeOf2 = Option_getPrototypeOf(Option)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function () {
      if (!_this.props.isActive) {
        _this.props.onClick(_this.props.project);
      }
    };

    _this.handleStopProject = function () {
      if (_this.props.project.isWorking) {
        _this.props.project.devStop();
      }

      project_scripts["a" /* default */].stop(_this.props.project);
    };

    _this.handleRemoveProject = function () {
      var _this$props$project = _this.props.project,
          fullPath = _this$props$project.fullPath,
          projectName = _this$props$project.projectName;
      var shiftDelete = false; // 是否彻底删除

      var checkChange = function checkChange(checked) {
        // const checked = event.target.checked;
        shiftDelete = checked;
      };

      dialog_default.a.confirm({
        title: '提示',
        needWrapper: false,
        content: external_window_React_default.a.createElement("div", null, external_window_React_default.a.createElement("div", {
          style: {
            paddingBottom: 16
          }
        }, "\u79FB\u9664\u9879\u76EE \"", projectName, "\" ?"), external_window_React_default.a.createElement("div", {
          className: "remove-project-check"
        }, external_window_React_default.a.createElement(checkbox_default.a, {
          className: "iceworks-next-checkbox",
          style: {
            fontSize: '12px',
            color: '#999'
          },
          onChange: checkChange,
          id: "check_remove_project_dist",
          type: "checkbox"
        }, "\u540C\u65F6\u5220\u9664\u9879\u76EE\u6587\u4EF6\uFF08\u53EF\u4ECE\u7CFB\u7EDF\u5783\u573E\u7BB1\u627E\u56DE\uFF09"))),
        onOk: function onOk() {
          _this.handleStopProject();

          _this.props.onRemove(fullPath, shiftDelete);
        }
      });
    };

    return _this;
  }

  Option_createClass(Option, [{
    key: "render",
    value: function render() {
      var classes = classnames_default()({
        'project-item': true,
        'project-item-active': this.props.isActive
      });
      return external_window_React_default.a.createElement("li", {
        className: classes
      }, external_window_React_default.a.createElement("a", {
        title: this.props.project.fullPath,
        className: "project-title",
        onClick: this.handleClick,
        href: "javascript:void(0);"
      }, this.props.project.projectName), this.props.project.isWorking && external_window_React_default.a.createElement("span", {
        className: "status-working"
      }), external_window_React_default.a.createElement("a", {
        className: "project-delete-btn",
        onClick: this.handleRemoveProject
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        size: "small",
        type: "trash"
      })));
    }
  }]);

  return Option;
}(external_window_React_["Component"]), Option_temp)) || Option_class;

/* harmony default export */ var ProjectSwitch_Option = (Option_Option);
// EXTERNAL MODULE: ./renderer/src/pages/Home/ProjectSwitch/index.scss
var Home_ProjectSwitch = __webpack_require__(948);

// CONCATENATED MODULE: ./renderer/src/pages/Home/ProjectSwitch/index.jsx


var ProjectSwitch_dec, ProjectSwitch_class, ProjectSwitch_class2, ProjectSwitch_temp;

function ProjectSwitch_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProjectSwitch_typeof = function _typeof(obj) { return typeof obj; }; } else { ProjectSwitch_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProjectSwitch_typeof(obj); }

function ProjectSwitch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectSwitch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProjectSwitch_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProjectSwitch_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProjectSwitch_defineProperties(Constructor, staticProps); return Constructor; }

function ProjectSwitch_possibleConstructorReturn(self, call) { if (call && (ProjectSwitch_typeof(call) === "object" || typeof call === "function")) { return call; } return ProjectSwitch_assertThisInitialized(self); }

function ProjectSwitch_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProjectSwitch_getPrototypeOf(o) { ProjectSwitch_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProjectSwitch_getPrototypeOf(o); }

function ProjectSwitch_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProjectSwitch_setPrototypeOf(subClass, superClass); }

function ProjectSwitch_setPrototypeOf(o, p) { ProjectSwitch_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProjectSwitch_setPrototypeOf(o, p); }







var ProjectSwitch_ProjectSwitch = (ProjectSwitch_dec = Object(index_module["b" /* inject */])('switcher', 'projects'), ProjectSwitch_dec(ProjectSwitch_class = Object(index_module["c" /* observer */])(ProjectSwitch_class = (ProjectSwitch_temp = ProjectSwitch_class2 =
/*#__PURE__*/
function (_Component) {
  ProjectSwitch_inherits(ProjectSwitch, _Component);

  function ProjectSwitch() {
    var _getPrototypeOf2;

    var _this;

    ProjectSwitch_classCallCheck(this, ProjectSwitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ProjectSwitch_possibleConstructorReturn(this, (_getPrototypeOf2 = ProjectSwitch_getPrototypeOf(ProjectSwitch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClickMask = function () {
      _this.props.switcher.close();
    };

    _this.handleSwitchProject = function (newProject) {
      _this.props.switcher.close();

      _this.props.projects.setCurrentProject(newProject.fullPath);
    };

    _this.handleRemove = function (projectFullPath, shiftDelete) {
      _this.props.projects.remove(projectFullPath, shiftDelete);

      if (_this.props.projects.isEmpty) {
        // 删除项目完成后，如果列表为空则关闭面板
        _this.props.switcher.close();
      }
    };

    _this.openExistProjectAndFocus = function () {
      _this.props.projects.addFromFinder(function () {
        _this.props.switcher.close();
      });
    };

    _this.gotoCreateProject = function () {
      _this.props.switcher.close();

      src_history["a" /* default */].push('/scaffolds');
    };

    _this.renderProjectList = function () {
      var projects = _this.props.projects;
      var list = projects.list;
      var currentProject = projects.currentProject;

      if (!currentProject || !list || list.length === 0) {
        return external_window_React_default.a.createElement("div", {
          style: {
            textAlign: 'center',
            lineHeight: '100px'
          }
        }, "\u6682\u65E0\u9879\u76EE");
      }

      return external_window_React_default.a.createElement("ul", null, list.map(function (project, index) {
        var isActive = project.fullPath === currentProject.fullPath;
        return external_window_React_default.a.createElement(ProjectSwitch_Option, {
          isActive: isActive,
          onClick: _this.handleSwitchProject,
          key: project.fullPath,
          project: project,
          onRemove: _this.handleRemove
        });
      }));
    };

    return _this;
  }

  ProjectSwitch_createClass(ProjectSwitch, [{
    key: "render",
    value: function render() {
      return external_window_React_default.a.createElement("div", {
        className: "project-switch",
        style: {
          display: this.props.switcher.visible ? 'block' : 'none'
        },
        onClick: this.handleClickMask
      }, external_window_React_default.a.createElement("div", {
        className: "project-list",
        onClick: function onClick(event) {
          event.stopPropagation();
        }
      }, external_window_React_default.a.createElement("div", {
        className: "project-list-body"
      }, this.renderProjectList()), external_window_React_default.a.createElement("div", {
        className: "project-operation-wrapper"
      }, external_window_React_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.openExistProjectAndFocus
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "folderplus"
      }), " \u6253\u5F00\u9879\u76EE"), external_window_React_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.gotoCreateProject
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "plus"
      }), " \u521B\u5EFA\u9879\u76EE"))));
    }
  }]);

  return ProjectSwitch;
}(external_window_React_["Component"]), ProjectSwitch_class2.displayName = 'ProjectSwitch', ProjectSwitch_temp)) || ProjectSwitch_class) || ProjectSwitch_class);
/* harmony default export */ var pages_Home_ProjectSwitch = (ProjectSwitch_ProjectSwitch);
// EXTERNAL MODULE: ./renderer/src/pages/Home/index.scss
var pages_Home = __webpack_require__(949);

// CONCATENATED MODULE: ./renderer/src/pages/Home/index.jsx
function Home_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Home_typeof = function _typeof(obj) { return typeof obj; }; } else { Home_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Home_typeof(obj); }

function Home_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Home_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Home_createClass(Constructor, protoProps, staticProps) { if (protoProps) Home_defineProperties(Constructor.prototype, protoProps); if (staticProps) Home_defineProperties(Constructor, staticProps); return Constructor; }

function Home_possibleConstructorReturn(self, call) { if (call && (Home_typeof(call) === "object" || typeof call === "function")) { return call; } return Home_assertThisInitialized(self); }

function Home_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Home_getPrototypeOf(o) { Home_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Home_getPrototypeOf(o); }

function Home_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Home_setPrototypeOf(subClass, superClass); }

function Home_setPrototypeOf(o, p) { Home_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Home_setPrototypeOf(o, p); }









var Home_Home =
/*#__PURE__*/
function (_Component) {
  Home_inherits(Home, _Component);

  function Home() {
    Home_classCallCheck(this, Home);

    return Home_possibleConstructorReturn(this, Home_getPrototypeOf(Home).apply(this, arguments));
  }

  Home_createClass(Home, [{
    key: "render",
    value: function render() {
      return external_window_React_default.a.createElement("div", {
        className: "project-home"
      }, external_window_React_default.a.createElement(Home_ProjectPanel, null), external_window_React_default.a.createElement(pages_Home_ProjectSwitch, null), external_window_React_default.a.createElement(Home_CreatPage, null), external_window_React_default.a.createElement(src_components_PageBlockPicker, null));
    }
  }]);

  return Home;
}(external_window_React_["Component"]);

/* harmony default export */ var src_pages_Home = __webpack_exports__["default"] = (Home_Home);

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 60 : _this$props$size,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _objectSpread({
          flex: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: 140,
          whiteSpace: 'initial',
          margin: '0 20px',
          lineHeight: 1.6
        }, style)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: '#aaa',
          fontSize: 14
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        type: "tip",
        style: {
          color: 'rgb(48, 128, 254)'
        }
      }), ' ', this.props.children));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(703);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ExtraButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ExtraButton, _Component);

  function ExtraButton() {
    _classCallCheck(this, ExtraButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExtraButton).apply(this, arguments));
  }

  _createClass(ExtraButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tipContent = _this$props.tipContent,
          tipText = _this$props.tipText,
          onClick = _this$props.onClick,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          _this$props$placement = _this$props.placement,
          placement = _this$props$placement === void 0 ? 'bottomRight' : _this$props$placement,
          active = _this$props.active,
          other = _objectWithoutProperties(_this$props, ["tipContent", "tipText", "onClick", "disabled", "style", "placement", "active"]);

      var btn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({}, other, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          'extra-button': true,
          active: active
        }),
        onClick: disabled ? function () {} : onClick,
        style: disabled ? styles.disabled : style
      }), this.props.children);

      if (tipContent || tipText) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
          placement: placement,
          overlay: tipContent || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              maxWidth: 120
            }
          }, tipText)
        }, btn);
      }

      return btn;
    }
  }]);

  return ExtraButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var styles = {
  disabled: {
    color: '#999'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ExtraButton);

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(680);
__webpack_require__(680);
module.exports = __webpack_require__(716);

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _icedesign_base_lib_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _icedesign_base_lib_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_lib_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(759);
/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rimraf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(100);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(102);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var detectPort = electron__WEBPACK_IMPORTED_MODULE_1__["remote"].require('detect-port');

var isAlibaba = _services__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].settings.get('isAlibaba');
var folder = _services__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].folder,
    interaction = _services__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].interaction,
    sessions = _services__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].sessions,
    shared = _services__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].shared,
    glodlog = _services__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].glodlog; // todo 后续抽出到独立套件保持独立更新
// todo vue cli 后续需要升级
// const configs = {
//   vue: {
//     devDependencies: {
//       '@vue/cli-plugin-babel': '^3.0.0-beta.6',
//       '@vue/cli-plugin-eslint': '^3.0.0-beta.6',
//       '@vue/cli-service': '^3.0.0-beta.6',
//       '@vue/eslint-config-airbnb': '^3.0.0-beta.6',
//     },
//     scripts: {
//       start: 'vue-cli-service serve',
//       build: 'vue-cli-service build',
//     },
//   },
//   react: {
//     devDependencies: {
//       'ice-scripts': '^1.0.0',
//     },
//     scripts: {
//       start: 'ice dev',
//       build: 'ice build',
//     },
//   },
// };

/**
 * 获取当前的 Env 对象
 */

var getEnv = function getEnv() {
  var _shared$env = shared.env,
      env = _shared$env === void 0 ? {} : _shared$env;
  return env.getEnv();
};
/**
 * 获取当前 registry 源信息
 * @param {string} value
 */


var getRegistryInfo = function getRegistryInfo(value) {
  var _shared$registries = shared.registries,
      registries = _shared$registries === void 0 ? [] : _shared$registries;
  return registries.find(function (item) {
    return item.value === value || item.name === value;
  });
};

var doProjectInstall = function doProjectInstall(_ref, reInstall) {
  var cwd = _ref.cwd,
      env = _ref.env,
      shell = _ref.shell,
      callback = _ref.callback;
  var installConfig = {
    cwd: cwd,
    env: env,
    shell: shell,
    shellArgs: ['install']
  };
  var npmCacheCleanConfig = {
    cwd: cwd,
    env: env,
    shell: shell,
    shellArgs: ['cache', 'clean', '--force']
  };
  sessions.manager.new(installConfig, function (code) {
    if (code !== 0) {
      _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].error(new Error('project-install-failed'));
      glodlog.record({
        type: 'app',
        action: 'project-install-failed'
      });

      if (reInstall) {
        _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info('执行 npm cache clean --force 重试');
        sessions.manager.new(npmCacheCleanConfig, function () {
          doProjectInstall({
            cwd: cwd,
            env: env,
            shell: shell,
            callback: callback
          });
        });
      } else if (shell === 'tnpm' || shell === 'cnpm') {
        var registryInfo = getRegistryInfo(shell);
        callback(code, {
          title: '重装依赖失败',
          content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "1. \u8BF7\u68C0\u67E5 ", shell, " \u547D\u4EE4\u662F\u5426\u5B89\u88C5\u4E86\uFF0C\u6CA1\u6709\u8BF7\u6267\u884C $ [sudo] npm install --registry=", registryInfo.value, " -g ", shell, " \u8FDB\u884C\u5B89\u88C5"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "2. \u5DF2\u5B89\u88C5 ", shell, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF0C\u53EF\u5C55\u5F00\u3010\u8FD0\u884C\u65E5\u5FD7\u3011\u65E5\u5FD7\u67E5\u770B\u8BE6\u7EC6\u53CD\u9988\u4FE1\u606F"))
        });
      } else {
        callback(code, {
          title: '重装依赖失败',
          content: '请检查网络连接是否正常，可展开【运行日志】日志查看详细反馈信息'
        });
      }
    } else {
      callback(0);
    }
  });
};

var doDependenciesInstall = function doDependenciesInstall(dependenciesInstallConfig, dependencies, callback, reInstall) {
  // cwd 项目目录，用于获取对应的 term，term 使用项目路径作为key存储
  var cwd = dependenciesInstallConfig.cwd,
      env = dependenciesInstallConfig.env;
  sessions.manager.new(dependenciesInstallConfig, function (code) {
    if (code !== 0) {
      if (reInstall) {
        _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info('重试');
        _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, '依赖安装重试');
        doDependenciesInstall(dependenciesInstallConfig, dependencies, callback);
      } else {
        var error = new Error("\u5B89\u88C5\u4F9D\u8D56\u5931\u8D25: ".concat(JSON.stringify({
          dependencies: dependencies,
          env: env
        })));
        _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].error(error);
        callback(1, dependencies);
      }
    } else {
      _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].info('安装依赖成功', cwd, dependencies);
      callback(null, dependencies);
    }
  });
};
/**
 * 根据内网环境更新 env
 * @param {string} isAli
 */


var getEnvByAli = function getEnvByAli(isAli) {
  var env = {};

  if (isAli) {
    _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].debug('安装依赖 - 检测为内网环境默认使用内网源'); // 检测到内网环境自动将路径设置为集团内部

    env.npm_config_registry = 'https://registry.npm.alibaba-inc.com';
  } else {
    env = getEnv();
  }

  return env;
};
/**
 * session 以“项目路径”为 key 做处理
 */


/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 启动项目服务，并改变项目的状态
   * @param {Object} project 项目 stores 实例
   */
  start: function start(project) {
    var libraryType = project.getLibraryType();

    if (sessions.startProxy.has(project.fullPath)) {
      project.devStart();
      _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].debug('服务已启动');
    } else {
      // @HACK angular 默认端口为 4200
      var DEFAULT_PORT = 4444;

      if (libraryType === 'angular') {
        DEFAULT_PORT = 4200;
      } else if (libraryType === 'rax') {
        DEFAULT_PORT = 4200;
      }

      detectPort(DEFAULT_PORT).then(function (newPort) {
        return new Promise(function (resolve, reject) {
          if (newPort === DEFAULT_PORT) {
            resolve(newPort);
          } else {
            project.serverPort = newPort;

            _icedesign_base_lib_dialog__WEBPACK_IMPORTED_MODULE_0___default.a.confirm({
              title: '端口冲突',
              content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
                style: {
                  lineHeight: '24px'
                }
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, "\u9ED8\u8BA4\u7AEF\u53E3 `", DEFAULT_PORT, "` \u5DF2\u88AB\u5360\u7528"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, "\u662F\u5426\u4F7F\u7528", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
                style: {
                  width: 60,
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderTop: 'none',
                  margin: '0 6px',
                  borderBottom: '1px solid #ddd'
                },
                max: 65535,
                type: "number",
                defaultValue: newPort,
                onChange: function onChange(event) {
                  var value = event.target.value;
                  project.serverPort = Number(value);
                }
              }), "\u542F\u52A8\u670D\u52A1\uFF1F")),
              onOk: function onOk() {
                resolve(project.serverPort);
              },
              onCancel: function onCancel() {
                reject();
              },
              onClose: function onClose() {
                reject();
              }
            });
          }
        });
      }).then(function (port) {
        project.devStart();
        var shellArgs = ['start'];

        if (libraryType === 'angular') {
          shellArgs = ['run', 'start', '--', "--port=".concat(port)];
        }

        sessions.startProxy.start({
          cwd: project.fullPath,
          shell: 'npm',
          shellArgs: shellArgs,
          env: project.nodeFramework ? {} : {
            PORT: port
          }
        }, function (code) {
          project.devStop();

          if (code !== 0) {
            if (!project.terminalVisible) {
              project.toggleTerminal();
              _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(project.fullPath, '');
              _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(project.fullPath, '解决办法：');
              _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(project.fullPath, '    1. 当前项目依赖未安装或依赖缺失，请重装依赖后重试。');
            }
          }
        });
      }).catch(function (error) {
        _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].error(error);
      });
    }
  },

  /**
   * 停止项目，并改变项目的状态
   * @param {Object} project 项目 stores 实例
   */
  stop: function stop(project) {
    sessions.startProxy.stop(project.fullPath);
    project.devStop();
  },

  /**
   * 构建项目，并改变项目的状态
   * @param {Object} project 项目 stores 实例
   */
  build: function build(project) {
    if (!sessions.buildProxy.has(project.fullPath)) {
      project.buildStart();
      sessions.buildProxy.start({
        cwd: project.fullPath,
        shell: 'npm',
        shellArgs: ['run', 'build']
      }, function (code) {
        if (code === 0) {
          project.buildDone();
          var dist = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(project.clientPath, 'build');
          interaction.notify({
            title: '构建完成，点击查看构建结果',
            body: dist,
            onClick: function onClick() {
              folder.open(dist);
            }
          });
        } else {
          project.buildFailed();
          _components_dialog__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].notice({
            title: '构建失败',
            error: '请查看运行日志'
          });
        }
      });
    }
  },

  /**
   * 依赖单个/多个安装，目前只支持client（前端）安装。
   * TODO: 支持前后端选择安装，需要配合UI处理
   * deps： string
   */
  npminstall: function npminstall(project, deps) {
    var isDev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var callback = arguments.length > 3 ? arguments[3] : undefined;
    var dependencies = deps.split(/\s+/);
    dependencies = dependencies.filter(function (d) {
      return !!d.trim();
    }); // 如果包含内网包返回内网的 registry 源

    var env = getEnvByAli(isAlibaba);

    if (dependencies.length > 0) {
      dependencies = dependencies.map(function (dep) {
        if (dep.lastIndexOf('@') > 0) {
          return dep;
        }

        return "".concat(dep, "@latest");
      });
      var installPrefix = '--save';

      if (isDev) {
        installPrefix = '--save-dev';
      }

      var cwd = project.fullPath;
      var cwdClient = project.clientPath;
      _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, '开始安装依赖');
      var npmInstallConfig = {
        cwd: cwd,
        // 项目目录，用于获取对应的term，term使用项目路径作为key存储
        cwdClient: cwdClient,
        // 是否是node模板，如果是node模板，此时安装目录于普通前端模板不同
        env: env,
        shell: 'npm',
        shellArgs: ['install', '--no-package-lock', installPrefix].concat(dependencies)
      };
      doDependenciesInstall(npmInstallConfig, dependencies, callback, true);
    }
  },

  /**
   * project: 当前项目
   * 依赖全量安装/重装，都是client和server共同执行。
   */
  install: function install(_ref2, callback) {
    var project = _ref2.project,
        _ref2$reinstall = _ref2.reinstall,
        reinstall = _ref2$reinstall === void 0 ? true : _ref2$reinstall;
    _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].debug('开始安装', project.fullPath);
    var cwd = project.fullPath;
    var nodeModulesPaths = [];
    nodeModulesPaths.push(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(project.clientPath, 'node_modules'));

    if (project.serverPath) {
      nodeModulesPaths.push(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(project.serverPath, 'node_modules'));
    } // const nodeModulesPath = path.join(cwd, 'node_modules');


    new Promise(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (reinstall) {
                  _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, '正在清理 node_modules 目录请稍等...');
                  rimraf__WEBPACK_IMPORTED_MODULE_4___default()(nodeModulesPaths[0], function (error) {
                    _logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].debug('node_modules 删除成功');

                    if (error) {
                      _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, '清理 node_modules 失败');
                      reject(error);
                    } else {
                      var env = getEnv();
                      var registry = isAlibaba ? 'https://registry.npm.alibaba-inc.com/' : env.npm_config_registry;
                      _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, '清理 node_modules 目录完成');
                      _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, "\n\u5F53\u524D\u4E0B\u8F7D\u6E90\uFF1A".concat(registry, "\n"));

                      if (!isAlibaba && registry.indexOf('registry.npm.taobao.org') === -1) {
                        _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, '推荐使用淘宝 NPM 镜像源 https://registry.npm.taobao.org 进行下载，可在设置面板进行设置\n');
                      }

                      resolve();
                    }
                  });
                } else {
                  resolve();
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }()).then(function () {
      if (reinstall && nodeModulesPaths.length === 2) {
        return new Promise(
        /*#__PURE__*/
        function () {
          var _ref4 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(resolve, reject) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    rimraf__WEBPACK_IMPORTED_MODULE_4___default()(nodeModulesPaths[1], function (error) {
                      if (error) {
                        _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, '清理 node_modules 失败');
                        reject(error);
                      } else {
                        _terms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].writeln(cwd, '清理 server/node_modules 目录完成');
                        resolve();
                      }
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function (_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      }

      return Promise.resolve();
    }).catch(function (error) {
      var nodeModulesPath = nodeModulesPaths.join(';');
      callback(1, {
        title: '依赖清空失败',
        content: "\u6E05\u7406 node_modules \u76EE\u5F55\u5931\u8D25\uFF0C\u8BF7\u5C1D\u8BD5\u624B\u52A8\u5220\u9664 ".concat(nodeModulesPath, " ").concat(error.message)
      });
    }).then(function () {
      var env = getEnvByAli(isAlibaba);
      doProjectInstall({
        cwd: project.fullPath,
        env: env,
        shell: 'npm',
        callback: callback
      }, true);
    });
  }
});

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(305);

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(3)
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(761)

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function posix(path) {
	return path.charAt(0) === '/';
}

function win32(path) {
	// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
	var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
	var result = splitDeviceRe.exec(path);
	var device = result[1] || '';
	var isUnc = Boolean(device && device.charAt(1) !== ':');

	// UNC paths are always absolute
	return Boolean(result[2] || isUnc);
}

module.exports = process.platform === 'win32' ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;


/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icedesign_base_lib_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(766);
/* harmony import */ var _icedesign_base_lib_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_lib_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
/* harmony import */ var _ExtraButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(665);
/* harmony import */ var _ProjectTerminal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(688);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);



var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Popup = _icedesign_base_lib_overlay__WEBPACK_IMPORTED_MODULE_1___default.a.Popup;
/**
 * 进度条
 */

var ProgressWrap = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "b"])('progress', 'projects'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* observer */ "c"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ProgressWrap, _Component);

  function ProgressWrap() {
    _classCallCheck(this, ProgressWrap);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressWrap).apply(this, arguments));
  }

  _createClass(ProgressWrap, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          projects = _this$props.projects,
          styleOffset = _this$props.styleOffset;
      var currentProject = projects.currentProject;
      var _this$props$progress = this.props.progress,
          visible = _this$props$progress.visible,
          showProgress = _this$props$progress.showProgress,
          showTerminal = _this$props$progress.showTerminal,
          statusText = _this$props$progress.statusText,
          progress = _this$props$progress.progress,
          progressSpeed = _this$props$progress.progressSpeed,
          progressRemaining = _this$props$progress.progressRemaining;

      if (!visible) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          height: '24px',
          margin: '10px 0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        style: {
          fontSize: '12px',
          color: '#2eca9c',
          lineHeight: '24px'
        }
      }, statusText, "..."), showTerminal && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Popup, {
        trigger: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ExtraButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          placement: 'bottom',
          tipText: '查看依赖安装日志，点击切换',
          style: {
            float: 'right',
            fontSize: '12px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
          size: "small",
          type: "history"
        }), " \u8FD0\u884C\u65E5\u5FD7"),
        triggerType: "click",
        animation: false,
        align: "bl tl",
        offset: styleOffset || [-370, 0]
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          border: '1px solid #999',
          padding: '10px',
          width: '600px',
          height: '300px',
          background: '#fff'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProjectTerminal__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        project: currentProject,
        visible: true,
        shwoClose: false,
        id: "terminal2",
        style: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          padding: 0
        }
      })))), showProgress && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_progress__WEBPACK_IMPORTED_MODULE_0___default.a, {
        style: {
          width: '40%'
        },
        showInfo: false,
        percent: progress,
        animation: false
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        style: {
          fontSize: 12,
          color: '#999',
          paddingLeft: 10
        }
      }, progress, "%"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        style: {
          fontSize: 12,
          color: '#999',
          paddingLeft: 10
        }
      }, progressSpeed, "/kbs"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        style: {
          fontSize: 12,
          color: '#999',
          paddingLeft: 10
        }
      }, "\u5269\u4F59 ", progressRemaining, " s")));
    }
  }]);

  return ProgressWrap;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (ProgressWrap);

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(680);
module.exports = __webpack_require__(715);

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlockCategory___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(741);
/* harmony import */ var _BlockSlider___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(719);
/* harmony import */ var _EmptyTips___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(663);
var _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Panel = Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__[/* observer */ "c"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Panel).call(this, props));

    _this.handleCategorySlideChange = function (index) {
      var id = '#' + _this.idPrefix + index;
      var title = document.querySelector(id);
      title.scrollIntoView({
        behavior: 'instant',
        block: 'start',
        inline: 'start'
      });
    };

    _this.idPrefix = 'Block-' + Date.now().toString(32) + '-';
    return _this;
  }

  _createClass(Panel, [{
    key: "render",
    value: function render() {
      var _this$props$material = this.props.material,
          material = _this$props$material === void 0 ? {} : _this$props$material;
      var blocks = material && material.blocks || null;

      if (material.error) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EmptyTips___WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          size: 120,
          style: {
            margin: '0 10px'
          }
        }, material.error);
      }

      if (!blocks) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EmptyTips___WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          size: 120
        }, "\u52A0\u8F7D\u4E2D...");
      }

      if (Array.isArray(blocks.values) && blocks.values.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            padding: 10
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EmptyTips___WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          size: 120
        }, "\u5F53\u524D\u7269\u6599\u6E90\u6682\u65E0\u533A\u5757"));
      }

      var blocksWithCategory = blocks.blocksWithCategory;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: styles.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlockSlider___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        onClick: this.handleCategorySlideChange,
        blocksWithCategory: blocksWithCategory
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlockCategory___WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        idPrefix: this.idPrefix,
        blocksWithCategory: blocksWithCategory
      }));
    }
  }]);

  return Panel;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _temp)) || _class;

var styles = {
  wrapper: {
    display: 'flex',
    flex: 'auto',
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'column'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Panel);

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ExtraButton___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(665);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(102);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(704);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var ProjectTerminal =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectTerminal, _Component);

  function ProjectTerminal(props) {
    var _this;

    _classCallCheck(this, ProjectTerminal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectTerminal).call(this, props));

    _this.clearLogs = function () {
      _terms__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getTerm(_this.state.path).clear();
    };

    _this.handleResize = function () {
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        _this.setTerminalSize();
      }, 1000 / 30);
    };

    _this.state = {
      path: props.project.fullPath
    };
    return _this;
  }

  _createClass(ProjectTerminal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.project.fullPath !== this.state.path) {
        this.setState({
          path: nextProps.project.fullPath
        }, function () {
          _this2.createTerm();
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createTerm();
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "createTerm",
    value: function createTerm() {
      var id = this.props.id;
      var terminalContainer = document.getElementById(id);
      terminalContainer.innerHTML = '';
      _terms__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].new(this.state.path, terminalContainer);
    }
  }, {
    key: "setTerminalSize",
    value: function setTerminalSize() {
      var id = this.props.id;
      var container = document.getElementById(id);

      if (!container) {
        return null;
      }

      var _container$getBoundin = container.getBoundingClientRect(),
          width = _container$getBoundin.width,
          height = _container$getBoundin.height;

      var charMeasure = _terms__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getTerm(this.state.path).charMeasure;
      var cols = Math.floor(width / (charMeasure.width || 9.015625));
      var rows = Math.floor(height / 21);
      _terms__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].resize(this.state.path, cols, rows);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          id = _this$props.id,
          closeLogs = _this$props.closeLogs,
          shwoClose = _this$props.shwoClose;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "project-terminal-wrapper",
        style: _objectSpread({
          zIndex: this.props.visible ? '0' : '-1'
        }, style)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttons"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExtraButton___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        onClick: this.clearLogs,
        tipText: '清空当前日志',
        style: {
          color: '#eee',
          marginRight: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        type: "clear",
        size: "small"
      })), shwoClose && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "dark",
        shape: "ghost",
        onClick: closeLogs
      }, "\u8FD4\u56DE\u5DE5\u4F5C\u53F0") // <ExtraButton
      //   onClick={closeLogs}
      //   tipText={'关闭日志面板'}
      //   style={{ color: '#eee' }}
      // >
      //   <Icon type="close" />
      // </ExtraButton>
      ), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        className: "project-terminal"
      }));
    }
  }]);

  return ProjectTerminal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ProjectTerminal.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  closeLogs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  shwoClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
ProjectTerminal.defaultProps = {
  id: 'terminal',
  style: {},
  closeLogs: function closeLogs() {},
  shwoClose: true
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectTerminal);

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(749);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(175);

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(676);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.

module.exports = glob

var fs = __webpack_require__(11)
var rp = __webpack_require__(699)
var minimatch = __webpack_require__(677)
var Minimatch = minimatch.Minimatch
var inherits = __webpack_require__(84)
var EE = __webpack_require__(32).EventEmitter
var path = __webpack_require__(3)
var assert = __webpack_require__(49)
var isAbsolute = __webpack_require__(678)
var globSync = __webpack_require__(764)
var common = __webpack_require__(700)
var alphasort = common.alphasort
var alphasorti = common.alphasorti
var setopts = common.setopts
var ownProp = common.ownProp
var inflight = __webpack_require__(765)
var util = __webpack_require__(10)
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

var once = __webpack_require__(702)

function glob (pattern, options, cb) {
  if (typeof options === 'function') cb = options, options = {}
  if (!options) options = {}

  if (options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return globSync(pattern, options)
  }

  return new Glob(pattern, options, cb)
}

glob.sync = globSync
var GlobSync = glob.GlobSync = globSync.GlobSync

// old api surface
glob.glob = glob

function extend (origin, add) {
  if (add === null || typeof add !== 'object') {
    return origin
  }

  var keys = Object.keys(add)
  var i = keys.length
  while (i--) {
    origin[keys[i]] = add[keys[i]]
  }
  return origin
}

glob.hasMagic = function (pattern, options_) {
  var options = extend({}, options_)
  options.noprocess = true

  var g = new Glob(pattern, options)
  var set = g.minimatch.set

  if (!pattern)
    return false

  if (set.length > 1)
    return true

  for (var j = 0; j < set[0].length; j++) {
    if (typeof set[0][j] !== 'string')
      return true
  }

  return false
}

glob.Glob = Glob
inherits(Glob, EE)
function Glob (pattern, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = null
  }

  if (options && options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return new GlobSync(pattern, options)
  }

  if (!(this instanceof Glob))
    return new Glob(pattern, options, cb)

  setopts(this, pattern, options)
  this._didRealPath = false

  // process each pattern in the minimatch set
  var n = this.minimatch.set.length

  // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.
  this.matches = new Array(n)

  if (typeof cb === 'function') {
    cb = once(cb)
    this.on('error', cb)
    this.on('end', function (matches) {
      cb(null, matches)
    })
  }

  var self = this
  this._processing = 0

  this._emitQueue = []
  this._processQueue = []
  this.paused = false

  if (this.noprocess)
    return this

  if (n === 0)
    return done()

  var sync = true
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false, done)
  }
  sync = false

  function done () {
    --self._processing
    if (self._processing <= 0) {
      if (sync) {
        process.nextTick(function () {
          self._finish()
        })
      } else {
        self._finish()
      }
    }
  }
}

Glob.prototype._finish = function () {
  assert(this instanceof Glob)
  if (this.aborted)
    return

  if (this.realpath && !this._didRealpath)
    return this._realpath()

  common.finish(this)
  this.emit('end', this.found)
}

Glob.prototype._realpath = function () {
  if (this._didRealpath)
    return

  this._didRealpath = true

  var n = this.matches.length
  if (n === 0)
    return this._finish()

  var self = this
  for (var i = 0; i < this.matches.length; i++)
    this._realpathSet(i, next)

  function next () {
    if (--n === 0)
      self._finish()
  }
}

Glob.prototype._realpathSet = function (index, cb) {
  var matchset = this.matches[index]
  if (!matchset)
    return cb()

  var found = Object.keys(matchset)
  var self = this
  var n = found.length

  if (n === 0)
    return cb()

  var set = this.matches[index] = Object.create(null)
  found.forEach(function (p, i) {
    // If there's a problem with the stat, then it means that
    // one or more of the links in the realpath couldn't be
    // resolved.  just return the abs value in that case.
    p = self._makeAbs(p)
    rp.realpath(p, self.realpathCache, function (er, real) {
      if (!er)
        set[real] = true
      else if (er.syscall === 'stat')
        set[p] = true
      else
        self.emit('error', er) // srsly wtf right here

      if (--n === 0) {
        self.matches[index] = set
        cb()
      }
    })
  })
}

Glob.prototype._mark = function (p) {
  return common.mark(this, p)
}

Glob.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}

Glob.prototype.abort = function () {
  this.aborted = true
  this.emit('abort')
}

Glob.prototype.pause = function () {
  if (!this.paused) {
    this.paused = true
    this.emit('pause')
  }
}

Glob.prototype.resume = function () {
  if (this.paused) {
    this.emit('resume')
    this.paused = false
    if (this._emitQueue.length) {
      var eq = this._emitQueue.slice(0)
      this._emitQueue.length = 0
      for (var i = 0; i < eq.length; i ++) {
        var e = eq[i]
        this._emitMatch(e[0], e[1])
      }
    }
    if (this._processQueue.length) {
      var pq = this._processQueue.slice(0)
      this._processQueue.length = 0
      for (var i = 0; i < pq.length; i ++) {
        var p = pq[i]
        this._processing--
        this._process(p[0], p[1], p[2], p[3])
      }
    }
  }
}

Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
  assert(this instanceof Glob)
  assert(typeof cb === 'function')

  if (this.aborted)
    return

  this._processing++
  if (this.paused) {
    this._processQueue.push([pattern, index, inGlobStar, cb])
    return
  }

  //console.error('PROCESS %d', this._processing, pattern)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // see if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index, cb)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip _processing
  if (childrenIgnored(this, read))
    return cb()

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb)
}

Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}

Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return cb()

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return cb()

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return cb()
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix) {
      if (prefix !== '/')
        e = prefix + '/' + e
      else
        e = prefix + e
    }
    this._process([e].concat(remain), index, inGlobStar, cb)
  }
  cb()
}

Glob.prototype._emitMatch = function (index, e) {
  if (this.aborted)
    return

  if (isIgnored(this, e))
    return

  if (this.paused) {
    this._emitQueue.push([index, e])
    return
  }

  var abs = isAbsolute(e) ? e : this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute)
    e = abs

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  var st = this.statCache[abs]
  if (st)
    this.emit('stat', e, st)

  this.emit('match', e)
}

Glob.prototype._readdirInGlobStar = function (abs, cb) {
  if (this.aborted)
    return

  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false, cb)

  var lstatkey = 'lstat\0' + abs
  var self = this
  var lstatcb = inflight(lstatkey, lstatcb_)

  if (lstatcb)
    fs.lstat(abs, lstatcb)

  function lstatcb_ (er, lstat) {
    if (er && er.code === 'ENOENT')
      return cb()

    var isSym = lstat && lstat.isSymbolicLink()
    self.symlinks[abs] = isSym

    // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.
    if (!isSym && lstat && !lstat.isDirectory()) {
      self.cache[abs] = 'FILE'
      cb()
    } else
      self._readdir(abs, false, cb)
  }
}

Glob.prototype._readdir = function (abs, inGlobStar, cb) {
  if (this.aborted)
    return

  cb = inflight('readdir\0'+abs+'\0'+inGlobStar, cb)
  if (!cb)
    return

  //console.error('RD %j %j', +inGlobStar, abs)
  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs, cb)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return cb()

    if (Array.isArray(c))
      return cb(null, c)
  }

  var self = this
  fs.readdir(abs, readdirCb(this, abs, cb))
}

function readdirCb (self, abs, cb) {
  return function (er, entries) {
    if (er)
      self._readdirError(abs, er, cb)
    else
      self._readdirEntries(abs, entries, cb)
  }
}

Glob.prototype._readdirEntries = function (abs, entries, cb) {
  if (this.aborted)
    return

  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries
  return cb(null, entries)
}

Glob.prototype._readdirError = function (f, er, cb) {
  if (this.aborted)
    return

  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        this.emit('error', error)
        this.abort()
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict) {
        this.emit('error', er)
        // If the error is handled, then we abort
        // if not, we threw out of here
        this.abort()
      }
      if (!this.silent)
        console.error('glob error', er)
      break
  }

  return cb()
}

Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}


Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
  //console.error('pgs2', prefix, remain[0], entries)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return cb()

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false, cb)

  var isSym = this.symlinks[abs]
  var len = entries.length

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return cb()

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true, cb)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true, cb)
  }

  cb()
}

Glob.prototype._processSimple = function (prefix, index, cb) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var self = this
  this._stat(prefix, function (er, exists) {
    self._processSimple2(prefix, index, er, exists, cb)
  })
}
Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {

  //console.error('ps2', prefix, exists)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return cb()

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
  cb()
}

// Returns either 'DIR', 'FILE', or false
Glob.prototype._stat = function (f, cb) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return cb()

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return cb(null, c)

    if (needDir && c === 'FILE')
      return cb()

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (stat !== undefined) {
    if (stat === false)
      return cb(null, stat)
    else {
      var type = stat.isDirectory() ? 'DIR' : 'FILE'
      if (needDir && type === 'FILE')
        return cb()
      else
        return cb(null, type, stat)
    }
  }

  var self = this
  var statcb = inflight('stat\0' + abs, lstatcb_)
  if (statcb)
    fs.lstat(abs, statcb)

  function lstatcb_ (er, lstat) {
    if (lstat && lstat.isSymbolicLink()) {
      // If it's a symlink, then treat it as the target, unless
      // the target does not exist, then treat it as a file.
      return fs.stat(abs, function (er, stat) {
        if (er)
          self._stat2(f, abs, null, lstat, cb)
        else
          self._stat2(f, abs, er, stat, cb)
      })
    } else {
      self._stat2(f, abs, er, lstat, cb)
    }
  }
}

Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
    this.statCache[abs] = false
    return cb()
  }

  var needDir = f.slice(-1) === '/'
  this.statCache[abs] = stat

  if (abs.slice(-1) === '/' && stat && !stat.isDirectory())
    return cb(null, false, stat)

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'
  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return cb()

  return cb(null, c, stat)
}


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

module.exports = realpath
realpath.realpath = realpath
realpath.sync = realpathSync
realpath.realpathSync = realpathSync
realpath.monkeypatch = monkeypatch
realpath.unmonkeypatch = unmonkeypatch

var fs = __webpack_require__(11)
var origRealpath = fs.realpath
var origRealpathSync = fs.realpathSync

var version = process.version
var ok = /^v[0-5]\./.test(version)
var old = __webpack_require__(760)

function newError (er) {
  return er && er.syscall === 'realpath' && (
    er.code === 'ELOOP' ||
    er.code === 'ENOMEM' ||
    er.code === 'ENAMETOOLONG'
  )
}

function realpath (p, cache, cb) {
  if (ok) {
    return origRealpath(p, cache, cb)
  }

  if (typeof cache === 'function') {
    cb = cache
    cache = null
  }
  origRealpath(p, cache, function (er, result) {
    if (newError(er)) {
      old.realpath(p, cache, cb)
    } else {
      cb(er, result)
    }
  })
}

function realpathSync (p, cache) {
  if (ok) {
    return origRealpathSync(p, cache)
  }

  try {
    return origRealpathSync(p, cache)
  } catch (er) {
    if (newError(er)) {
      return old.realpathSync(p, cache)
    } else {
      throw er
    }
  }
}

function monkeypatch () {
  fs.realpath = realpath
  fs.realpathSync = realpathSync
}

function unmonkeypatch () {
  fs.realpath = origRealpath
  fs.realpathSync = origRealpathSync
}


/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

exports.alphasort = alphasort
exports.alphasorti = alphasorti
exports.setopts = setopts
exports.ownProp = ownProp
exports.makeAbs = makeAbs
exports.finish = finish
exports.mark = mark
exports.isIgnored = isIgnored
exports.childrenIgnored = childrenIgnored

function ownProp (obj, field) {
  return Object.prototype.hasOwnProperty.call(obj, field)
}

var path = __webpack_require__(3)
var minimatch = __webpack_require__(677)
var isAbsolute = __webpack_require__(678)
var Minimatch = minimatch.Minimatch

function alphasorti (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase())
}

function alphasort (a, b) {
  return a.localeCompare(b)
}

function setupIgnores (self, options) {
  self.ignore = options.ignore || []

  if (!Array.isArray(self.ignore))
    self.ignore = [self.ignore]

  if (self.ignore.length) {
    self.ignore = self.ignore.map(ignoreMap)
  }
}

// ignore patterns are always in dot:true mode.
function ignoreMap (pattern) {
  var gmatcher = null
  if (pattern.slice(-3) === '/**') {
    var gpattern = pattern.replace(/(\/\*\*)+$/, '')
    gmatcher = new Minimatch(gpattern, { dot: true })
  }

  return {
    matcher: new Minimatch(pattern, { dot: true }),
    gmatcher: gmatcher
  }
}

function setopts (self, pattern, options) {
  if (!options)
    options = {}

  // base-matching: just use globstar for that.
  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar")
    }
    pattern = "**/" + pattern
  }

  self.silent = !!options.silent
  self.pattern = pattern
  self.strict = options.strict !== false
  self.realpath = !!options.realpath
  self.realpathCache = options.realpathCache || Object.create(null)
  self.follow = !!options.follow
  self.dot = !!options.dot
  self.mark = !!options.mark
  self.nodir = !!options.nodir
  if (self.nodir)
    self.mark = true
  self.sync = !!options.sync
  self.nounique = !!options.nounique
  self.nonull = !!options.nonull
  self.nosort = !!options.nosort
  self.nocase = !!options.nocase
  self.stat = !!options.stat
  self.noprocess = !!options.noprocess
  self.absolute = !!options.absolute

  self.maxLength = options.maxLength || Infinity
  self.cache = options.cache || Object.create(null)
  self.statCache = options.statCache || Object.create(null)
  self.symlinks = options.symlinks || Object.create(null)

  setupIgnores(self, options)

  self.changedCwd = false
  var cwd = process.cwd()
  if (!ownProp(options, "cwd"))
    self.cwd = cwd
  else {
    self.cwd = path.resolve(options.cwd)
    self.changedCwd = self.cwd !== cwd
  }

  self.root = options.root || path.resolve(self.cwd, "/")
  self.root = path.resolve(self.root)
  if (process.platform === "win32")
    self.root = self.root.replace(/\\/g, "/")

  // TODO: is an absolute `cwd` supposed to be resolved against `root`?
  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd)
  if (process.platform === "win32")
    self.cwdAbs = self.cwdAbs.replace(/\\/g, "/")
  self.nomount = !!options.nomount

  // disable comments and negation in Minimatch.
  // Note that they are not supported in Glob itself anyway.
  options.nonegate = true
  options.nocomment = true

  self.minimatch = new Minimatch(pattern, options)
  self.options = self.minimatch.options
}

function finish (self) {
  var nou = self.nounique
  var all = nou ? [] : Object.create(null)

  for (var i = 0, l = self.matches.length; i < l; i ++) {
    var matches = self.matches[i]
    if (!matches || Object.keys(matches).length === 0) {
      if (self.nonull) {
        // do like the shell, and spit out the literal glob
        var literal = self.minimatch.globSet[i]
        if (nou)
          all.push(literal)
        else
          all[literal] = true
      }
    } else {
      // had matches
      var m = Object.keys(matches)
      if (nou)
        all.push.apply(all, m)
      else
        m.forEach(function (m) {
          all[m] = true
        })
    }
  }

  if (!nou)
    all = Object.keys(all)

  if (!self.nosort)
    all = all.sort(self.nocase ? alphasorti : alphasort)

  // at *some* point we statted all of these
  if (self.mark) {
    for (var i = 0; i < all.length; i++) {
      all[i] = self._mark(all[i])
    }
    if (self.nodir) {
      all = all.filter(function (e) {
        var notDir = !(/\/$/.test(e))
        var c = self.cache[e] || self.cache[makeAbs(self, e)]
        if (notDir && c)
          notDir = c !== 'DIR' && !Array.isArray(c)
        return notDir
      })
    }
  }

  if (self.ignore.length)
    all = all.filter(function(m) {
      return !isIgnored(self, m)
    })

  self.found = all
}

function mark (self, p) {
  var abs = makeAbs(self, p)
  var c = self.cache[abs]
  var m = p
  if (c) {
    var isDir = c === 'DIR' || Array.isArray(c)
    var slash = p.slice(-1) === '/'

    if (isDir && !slash)
      m += '/'
    else if (!isDir && slash)
      m = m.slice(0, -1)

    if (m !== p) {
      var mabs = makeAbs(self, m)
      self.statCache[mabs] = self.statCache[abs]
      self.cache[mabs] = self.cache[abs]
    }
  }

  return m
}

// lotta situps...
function makeAbs (self, f) {
  var abs = f
  if (f.charAt(0) === '/') {
    abs = path.join(self.root, f)
  } else if (isAbsolute(f) || f === '') {
    abs = f
  } else if (self.changedCwd) {
    abs = path.resolve(self.cwd, f)
  } else {
    abs = path.resolve(f)
  }

  if (process.platform === 'win32')
    abs = abs.replace(/\\/g, '/')

  return abs
}


// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
function isIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path))
  })
}

function childrenIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return !!(item.gmatcher && item.gmatcher.match(path))
  })
}


/***/ }),

/***/ 701:
/***/ (function(module, exports) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(701)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CateMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(706);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CateMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(CateMenu, _Component);

  function CateMenu(props) {
    var _this;

    _classCallCheck(this, CateMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CateMenu).call(this, props));

    _this.handleClick = function (index, value) {
      _this.setState({
        activeIndex: index
      }, function () {
        _this.props.onClick(value);
      });
    };

    _this.state = {
      activeIndex: props.defaultActiveKey
    };
    return _this;
  }

  _createClass(CateMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var activeIndex = this.state.activeIndex;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "scaffold-cate-menu"
      }, data.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('scaffold-cate-menu-item', {
            active: activeIndex === index
          }),
          onClick: function onClick() {
            return _this2.handleClick(index, item);
          }
        }, item);
      }));
    }
  }]);

  return CateMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CateMenu.displayName = 'CateMenu';
CateMenu.propTypes = {
  defaultActiveKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  onCick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
CateMenu.defaultProps = {
  defaultActiveKey: 0,
  data: [],
  onCick: function onCick() {}
};


/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(671);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(lib_checkbox);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/input/index.js
var input = __webpack_require__(664);
var input_default = /*#__PURE__*/__webpack_require__.n(input);

// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/select/index.js
var lib_select = __webpack_require__(724);
var select_default = /*#__PURE__*/__webpack_require__.n(lib_select);

// EXTERNAL MODULE: ./renderer/node_modules/mobx-react/index.module.js
var index_module = __webpack_require__(81);

// EXTERNAL MODULE: external "electron"
var external_electron_ = __webpack_require__(4);

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__(1);
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./renderer/node_modules/rc-tooltip/es/index.js + 28 modules
var es = __webpack_require__(99);

// EXTERNAL MODULE: ./renderer/src/services.js
var services = __webpack_require__(6);

// EXTERNAL MODULE: ./renderer/src/components/Icon/index.jsx
var Icon = __webpack_require__(22);

// EXTERNAL MODULE: ./renderer/src/components/Progress/index.jsx
var Progress = __webpack_require__(679);

// CONCATENATED MODULE: ./renderer/src/components/Scaffold/Form.jsx




var Form_dec, Form_class, Form_temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Option = select_default.a.Option;
/**
 * 模板生成表单项目
 */

var Form_ScaffoldForm = (Form_dec = Object(index_module["b" /* inject */])('scaffold', 'projects'), Form_dec(Form_class = Object(index_module["c" /* observer */])(Form_class = (Form_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(ScaffoldForm, _Component);

  function ScaffoldForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScaffoldForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScaffoldForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.openProjectDirectory = function () {
      if (!_this.props.scaffold.isCreating) {
        _this.props.scaffold.openDirectory();
      }
    };

    _this.changeProjectName = function (value) {
      _this.props.scaffold.setProjectName(value);
    };

    _this.changeProjectFolderName = function (value) {
      _this.props.scaffold.setProjectFolderName(value);
    };

    _this.toggleInstall = function () {
      _this.props.scaffold.toggleInstall();
    };

    _this.toggleNodeProject = function (checked) {
      _this.props.scaffold.toggleNodeSelect(checked);
    };

    _this.handleNodeFrameSelect = function (value) {
      _this.props.scaffold.toggleNodeProject(value);
    };

    _this.handleOpenMidwayDoc = function () {
      external_electron_["shell"].openExternal('https://midwayjs.org/midway/guide.html');
    };

    _this.handleMidwaySelect = function (checked) {
      if (checked) {
        _this.props.scaffold.toggleNodeProject('midwayAli');
      } else {
        _this.props.scaffold.toggleNodeProject('');
      }
    };

    return _this;
  }

  _createClass(ScaffoldForm, [{
    key: "render",
    value: function render() {
      var builder = this.props.scaffold.scaffold.builder;
      var isAlibaba = services["a" /* default */].settings.get('isAlibaba');
      var hasIce = builder && builder === 'ice-scripts';
      var showNodeOutside = !isAlibaba && hasIce;
      return external_window_React_default.a.createElement("div", {
        className: "project-config-form"
      }, external_window_React_default.a.createElement("div", {
        className: "project-config-form-item"
      }, external_window_React_default.a.createElement("h3", {
        style: {
          margin: 0
        }
      }, external_window_React_default.a.createElement("span", {
        style: {
          color: 'red'
        }
      }, "*"), " \u8DEF\u5F84\uFF1A"), external_window_React_default.a.createElement(es["default"], {
        placement: 'bottomRight',
        overlay: external_window_React_default.a.createElement("div", {
          style: {
            maxWidth: 120
          }
        }, "\u57FA\u7840\u8DEF\u5F84\uFF0C\u9879\u76EE\u76EE\u5F55\u4F1A\u521B\u5EFA\u5230\u8BE5\u8DEF\u5F84\u4E0B")
      }, external_window_React_default.a.createElement("div", {
        onClick: this.openProjectDirectory
      }, external_window_React_default.a.createElement(input_default.a, {
        style: {
          width: '100%'
        },
        readOnly: true,
        addonAfter: external_window_React_default.a.createElement("div", null, external_window_React_default.a.createElement(Icon["a" /* default */], {
          type: 'folderopen'
        })),
        value: this.props.scaffold.getProjectPathWithWorkspace()
      })))), external_window_React_default.a.createElement("div", {
        className: "project-config-form-item"
      }, external_window_React_default.a.createElement("h3", {
        style: {
          margin: 0
        }
      }, external_window_React_default.a.createElement("span", {
        style: {
          color: 'red'
        }
      }, "*"), " \u9879\u76EE\u76EE\u5F55\u540D\uFF1A"), external_window_React_default.a.createElement(input_default.a, {
        ref: "name",
        placeholder: '首字母开头、字母数字中下划线组合 (必填)',
        disabled: this.props.scaffold.isCreating,
        value: this.props.scaffold.projectFolderName,
        onChange: this.changeProjectFolderName
      }), external_window_React_default.a.createElement("div", {
        className: "project-config-form-item-error-message"
      }, this.props.scaffold.projectFolderNameValidation)), external_window_React_default.a.createElement("div", {
        className: "project-config-form-item"
      }, external_window_React_default.a.createElement("h3", {
        style: {
          margin: 0
        }
      }, "\u9879\u76EE\u522B\u540D\uFF1A"), external_window_React_default.a.createElement(input_default.a, {
        placeholder: '可输入中文 (选填)',
        disabled: this.props.scaffold.isCreating,
        value: this.props.scaffold.projectName,
        onChange: this.changeProjectName
      })), external_window_React_default.a.createElement("div", {
        className: "project-config-form-item",
        style: {
          lineHeight: '28px'
        }
      }, isAlibaba ? // TODO 解决tnpm的问题
      // <label>
      //   添加 Midway 
      //   <Checkbox
      //     disabled={this.props.scaffold.isCreating}
      //     onChange={this.handleMidwaySelect}
      //     style={{ margin: '0 4px', verticalAlign: 'middle' }}
      //   />
      // </label>
      null : hasIce ? external_window_React_default.a.createElement("label", null, "\u6DFB\u52A0\u670D\u52A1\u7AEF\u5F00\u53D1\u6846\u67B6", external_window_React_default.a.createElement(checkbox_default.a, {
        disabled: this.props.scaffold.isCreating,
        onChange: this.toggleNodeProject,
        style: {
          margin: '0 4px',
          verticalAlign: 'middle'
        }
      })) : null, this.props.scaffold.isNode && external_window_React_default.a.createElement(select_default.a, {
        placeholder: "\u9009\u62E9\u6846\u67B6",
        onChange: this.handleNodeFrameSelect,
        style: {
          verticalAlign: 'middle'
        }
      }, external_window_React_default.a.createElement(Option, {
        value: "midway"
      }, "Midway"), external_window_React_default.a.createElement(Option, {
        value: "koa2"
      }, "Koa")), this.props.scaffold.nodeFramework === 'midway' // TODO 解决tnpm的问题
      // || this.props.scaffold.nodeFramework === 'midwayAli'
      && external_window_React_default.a.createElement("span", {
        style: {
          cursor: 'pointer'
        },
        onClick: this.handleOpenMidwayDoc
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "help",
        style: {
          margin: '0 4px 0 8px',
          color: '#5797fb'
        }
      }), external_window_React_default.a.createElement("span", {
        style: {
          color: '#5797fb'
        }
      }, "Midway \u5B98\u65B9\u6587\u6863"))), external_window_React_default.a.createElement(Progress["a" /* default */], null));
    }
  }]);

  return ScaffoldForm;
}(external_window_React_["Component"]), Form_temp)) || Form_class) || Form_class);
/* harmony default export */ var Form = (Form_ScaffoldForm);
// EXTERNAL MODULE: ./renderer/node_modules/@icedesign/base/lib/button/index.js
var lib_button = __webpack_require__(65);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: ./renderer/node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./renderer/node_modules/react-in-viewport/dist/es/index.js
var dist_es = __webpack_require__(717);

// EXTERNAL MODULE: ./renderer/src/components/dialog/index.js + 4 modules
var dialog = __webpack_require__(100);

// CONCATENATED MODULE: ./renderer/src/components/Scaffold/Item.jsx


var Item_class, Item_class2, Item_temp;

function Item_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Item_typeof = function _typeof(obj) { return typeof obj; }; } else { Item_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Item_typeof(obj); }

function Item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Item_createClass(Constructor, protoProps, staticProps) { if (protoProps) Item_defineProperties(Constructor.prototype, protoProps); if (staticProps) Item_defineProperties(Constructor, staticProps); return Constructor; }

function Item_possibleConstructorReturn(self, call) { if (call && (Item_typeof(call) === "object" || typeof call === "function")) { return call; } return Item_assertThisInitialized(self); }

function Item_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Item_getPrototypeOf(o) { Item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Item_getPrototypeOf(o); }

function Item_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Item_setPrototypeOf(subClass, superClass); }

function Item_setPrototypeOf(o, p) { Item_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Item_setPrototypeOf(o, p); }








var Item_ScaffoldItem = Object(index_module["c" /* observer */])(Item_class = (Item_temp = Item_class2 =
/*#__PURE__*/
function (_Component) {
  Item_inherits(ScaffoldItem, _Component);

  function ScaffoldItem() {
    var _getPrototypeOf2;

    var _this;

    Item_classCallCheck(this, ScaffoldItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Item_possibleConstructorReturn(this, (_getPrototypeOf2 = Item_getPrototypeOf(ScaffoldItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.openInBrowser = function () {
      // https://github.com/alibaba/ice/issues/219
      // sometimes data is not trustable
      // make sure home page is a valid URL any time
      var _this$props$data = _this.props.data,
          data = _this$props$data === void 0 ? {} : _this$props$data;
      external_electron_["shell"].openExternal(data.homepage);
    };

    _this.createProject = function () {
      var _this$props = _this.props,
          createProject = _this$props.createProject,
          _this$props$data2 = _this$props.data,
          data = _this$props$data2 === void 0 ? {} : _this$props$data2,
          _this$props$scaffolds = _this$props.scaffolds,
          scaffolds = _this$props$scaffolds === void 0 ? {} : _this$props$scaffolds,
          _this$props$isOfficia = _this$props.isOfficialSource,
          isOfficialSource = _this$props$isOfficia === void 0 ? false : _this$props$isOfficia;
      var isOfficialSrc = isOfficialSource || /ice\.alicdn\.com\/(pre-)?assets\/react-materials\.json/.test(scaffolds.material.source);
      var hasIceScripts = data.builder === 'ice-scripts';

      if (isOfficialSrc) {
        if (hasIceScripts) {
          createProject(data);
        } else {
          dialog["a" /* default */].confirm({
            title: '提示',
            content: external_window_React_default.a.createElement("div", null, "\u5F53\u524D\u6A21\u677F\u4F7F\u7528\u7684\u6784\u5EFA\u5DE5\u5177\u975E\u98DE\u51B0\u5B98\u65B9\u63D0\u4F9B\u7684 ice-scripts\uFF0C\u5982\u9700\u8981\u81EA\u5B9A\u4E49\u6784\u5EFA\uFF0C\u8BF7\u53C2\u8003\u9879\u76EE README \u8FDB\u884C\u4F7F\u7528\u3002")
          }, function (ok) {
            if (ok) {
              createProject(data);
            }
          });
        }
      } else {
        createProject(data);
      }
    };

    return _this;
  }

  Item_createClass(ScaffoldItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          mobile = _this$props2.mobile,
          innerRef = _this$props2.innerRef,
          enterCount = _this$props2.enterCount;
      var showInviewport = enterCount > 0;
      return external_window_React_default.a.createElement("div", {
        ref: innerRef,
        className: classnames_default()({
          'scaffold-item': true,
          'scaffold-item-mobile': mobile,
          'scaffold-item-pc': !mobile
        })
      }, showInviewport && external_window_React_default.a.createElement("div", {
        className: "scaffold-image",
        style: {
          backgroundImage: "url(\"".concat(data.screenshot, "\")")
        }
      }), showInviewport && external_window_React_default.a.createElement("div", {
        className: "scaffold-title-wrapper"
      }, external_window_React_default.a.createElement("div", {
        className: "scaffold-title"
      }, data.title), data._isNew && external_window_React_default.a.createElement("div", {
        className: "global-new-tag"
      }, "new")), showInviewport && external_window_React_default.a.createElement("div", {
        className: "scaffold-flipcard"
      }, external_window_React_default.a.createElement("div", {
        className: "scaffold-flipcard-body"
      }, external_window_React_default.a.createElement("h2", null, data.title), external_window_React_default.a.createElement("div", null, external_window_React_default.a.createElement("p", null, data.description))), external_window_React_default.a.createElement("div", {
        className: "scaffold-flipcard-button"
      }, external_window_React_default.a.createElement(button_default.a, {
        size: "small",
        onClick: this.createProject,
        type: "primary"
      }, "\u4F7F\u7528\u8BE5\u6A21\u677F"), "\xA0\xA0", data.homepage && external_window_React_default.a.createElement(button_default.a, {
        size: "small",
        onClick: this.openInBrowser,
        type: "normal"
      }, "\u5728\u7EBF\u9884\u89C8"))));
    }
  }]);

  return ScaffoldItem;
}(external_window_React_["Component"]), Item_class2.displayName = 'ScaffoldItem', Item_temp)) || Item_class;

/* harmony default export */ var Item = (Object(dist_es["a" /* default */])(Item_ScaffoldItem));
// EXTERNAL MODULE: ./renderer/src/components/CateMenu/index.jsx
var CateMenu = __webpack_require__(705);

// EXTERNAL MODULE: ./renderer/src/components/EmptyTips/index.jsx
var EmptyTips = __webpack_require__(663);

// CONCATENATED MODULE: ./renderer/src/components/Scaffold/Panel.jsx
var Panel_class, Panel_temp;

function Panel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Panel_typeof = function _typeof(obj) { return typeof obj; }; } else { Panel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Panel_typeof(obj); }

function Panel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Panel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Panel_createClass(Constructor, protoProps, staticProps) { if (protoProps) Panel_defineProperties(Constructor.prototype, protoProps); if (staticProps) Panel_defineProperties(Constructor, staticProps); return Constructor; }

function Panel_possibleConstructorReturn(self, call) { if (call && (Panel_typeof(call) === "object" || typeof call === "function")) { return call; } return Panel_assertThisInitialized(self); }

function Panel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Panel_getPrototypeOf(o) { Panel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Panel_getPrototypeOf(o); }

function Panel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Panel_setPrototypeOf(subClass, superClass); }

function Panel_setPrototypeOf(o, p) { Panel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Panel_setPrototypeOf(o, p); }







var Panel_Panel = Object(index_module["c" /* observer */])(Panel_class = (Panel_temp =
/*#__PURE__*/
function (_Component) {
  Panel_inherits(Panel, _Component);

  function Panel(props) {
    var _this;

    Panel_classCallCheck(this, Panel);

    _this = Panel_possibleConstructorReturn(this, Panel_getPrototypeOf(Panel).call(this, props));

    _this.handleClick = function (value) {
      var material = _this.props.material;
      var scaffolds = material.scaffolds;

      if (scaffolds) {
        scaffolds.activeCategory = value;
      }
    };

    return _this;
  }
  /**
   * 点击模板分类菜单的回调
   */


  Panel_createClass(Panel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var material = this.props.material;
      var scaffolds = material.scaffolds || null;

      if (material.error) {
        return external_window_React_default.a.createElement(EmptyTips["a" /* default */], {
          size: 120,
          style: {
            margin: '0 10px'
          }
        }, material.error);
      }

      if (!scaffolds) {
        return external_window_React_default.a.createElement(EmptyTips["a" /* default */], {
          size: 120
        }, "\u52A0\u8F7D\u4E2D...");
      }

      if (Array.isArray(scaffolds.values) && scaffolds.values.length === 0) {
        return external_window_React_default.a.createElement("div", {
          style: {
            padding: 10
          }
        }, external_window_React_default.a.createElement(EmptyTips["a" /* default */], {
          size: 120
        }, "\u5F53\u524D\u7269\u6599\u6E90\u6682\u65E0\u6A21\u677F"));
      }

      return external_window_React_default.a.createElement("div", {
        className: "scaffold-panel-body"
      }, scaffolds.categories && scaffolds.categories.length > 0 && external_window_React_default.a.createElement(CateMenu["a" /* default */], {
        data: scaffolds.categories,
        onClick: this.handleClick
      }), external_window_React_default.a.createElement("div", {
        className: "scaffold-items-wrapper"
      }, scaffolds.values.map(function (scaffold, index) {
        return external_window_React_default.a.createElement(Item, {
          key: index,
          mobile: material.platform === 'mobile',
          data: scaffold,
          scaffolds: scaffolds,
          createProject: _this2.props.onClick
        });
      })));
    }
  }]);

  return Panel;
}(external_window_React_["Component"]), Panel_temp)) || Panel_class;

/* harmony default export */ var Scaffold_Panel = (Panel_Panel);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./renderer/src/lib/logger.js
var logger = __webpack_require__(7);

// CONCATENATED MODULE: ./renderer/src/components/Scaffold/ScaffoldHoc.jsx
function ScaffoldHoc_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ScaffoldHoc_typeof = function _typeof(obj) { return typeof obj; }; } else { ScaffoldHoc_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ScaffoldHoc_typeof(obj); }

function ScaffoldHoc_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ScaffoldHoc_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ScaffoldHoc_createClass(Constructor, protoProps, staticProps) { if (protoProps) ScaffoldHoc_defineProperties(Constructor.prototype, protoProps); if (staticProps) ScaffoldHoc_defineProperties(Constructor, staticProps); return Constructor; }

function ScaffoldHoc_possibleConstructorReturn(self, call) { if (call && (ScaffoldHoc_typeof(call) === "object" || typeof call === "function")) { return call; } return ScaffoldHoc_assertThisInitialized(self); }

function ScaffoldHoc_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ScaffoldHoc_getPrototypeOf(o) { ScaffoldHoc_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ScaffoldHoc_getPrototypeOf(o); }

function ScaffoldHoc_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ScaffoldHoc_setPrototypeOf(subClass, superClass); }

function ScaffoldHoc_setPrototypeOf(o, p) { ScaffoldHoc_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ScaffoldHoc_setPrototypeOf(o, p); }






var ScaffoldHoc_ScaffoldHoc = function ScaffoldHoc(WrappedComponent) {
  var _dec, _class, _class2, _temp;

  var Scaffold = (_dec = Object(index_module["b" /* inject */])('materials', 'scaffold', 'customScaffold'), _dec(_class = Object(index_module["c" /* observer */])(_class = (_temp = _class2 =
  /*#__PURE__*/
  function (_Component) {
    ScaffoldHoc_inherits(Scaffold, _Component);

    function Scaffold() {
      var _getPrototypeOf2;

      var _this;

      ScaffoldHoc_classCallCheck(this, Scaffold);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = ScaffoldHoc_possibleConstructorReturn(this, (_getPrototypeOf2 = ScaffoldHoc_getPrototypeOf(Scaffold)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.handleRefresh = function () {
        _this.props.materials.refresh();
      };

      _this.handleTabChange = function (key) {
        _this.props.materials.setScaffoldTabActiveKey(key);
      };

      _this.handleSelectedScaffold = function (scaffold) {
        _this.props.scaffold.setScaffoldConfig({
          scaffold: scaffold
        });

        _this.props.scaffold.open();
      };

      _this.handleClose = function () {
        if (!_this.props.scaffold.isCreating) {
          _this.props.scaffold.close();
        } else {
          _this.props.scaffold.abort();
        }
      };

      _this.handleOpenCustomScaffoldDialog = function () {
        _this.props.customScaffold.reset();

        _this.props.customScaffold.toggle();
      };

      _this.handleGenerateProjectByCustom = function (config) {
        _this.props.scaffold.setScaffoldConfig(config);

        _this.props.scaffold.toggle();
      };

      _this.handleGeneratorProject = function () {
        // 需要将 Ovservable 对象转换为普通 javascript 结构
        var layoutConfig = _this.props.scaffold.layoutConfig;
        var scaffold = _this.props.scaffold.scaffold;
        var projectName = _this.props.scaffold.projectFinalName;
        var nodeFramework = _this.props.scaffold.nodeFramework;
        var options = {
          scaffold: scaffold,
          projectName: projectName,
          layoutConfig: layoutConfig,
          isCustomScaffold: !!layoutConfig,
          // 存在 layoutConfig 表示自定义模板
          nodeFramework: nodeFramework
        };

        var currentPath = _this.props.scaffold.getProjectPathWithWorkspace();

        _this.props.scaffold.createProjectFolder().then(function (gotoCreate) {
          if (gotoCreate) {
            var SectionCount = nodeFramework ? 2 : 1;

            _this.props.scaffold.startProgress(SectionCount);

            return _this.props.scaffold.create(currentPath, options);
          } else {
            return Promise.resolve(gotoCreate);
          }
        }).then(function (cpmpleteConfig) {
          // eslint-disable-next-line no-console
          logger["a" /* default */].info(cpmpleteConfig); //  完成后的结果展示

          _this.props.scaffold.endProgress();

          _this.props.scaffold.addNewProjectToProjects(currentPath, true); // true 用来标识提示用户安装依赖


          _this.props.scaffold.pushRoute('/');

          _this.props.materials.updateComponents();
        }).catch(function (error) {
          // eslint-disable-next-line no-console
          logger["a" /* default */].error(error);

          _this.props.scaffold.resetProgress();
        });
      };

      return _this;
    }

    ScaffoldHoc_createClass(Scaffold, [{
      key: "render",
      value: function render() {
        return external_window_React_default.a.createElement(WrappedComponent, {
          handleRefresh: this.handleRefresh,
          handleTabChange: this.handleTabChange,
          handleSelectedScaffold: this.handleSelectedScaffold,
          handleClose: this.handleClose,
          handleOpenCustomScaffoldDialog: this.handleOpenCustomScaffoldDialog,
          handleGenerateProjectByCustom: this.handleGenerateProjectByCustom,
          handleGeneratorProject: this.handleGeneratorProject
        });
      }
    }]);

    return Scaffold;
  }(external_window_React_["Component"]), _class2.displayName = 'Scaffold', _class2.propTypes = {
    materials: prop_types_default.a.object,
    scaffold: prop_types_default.a.object,
    customScaffold: prop_types_default.a.object
  }, _temp)) || _class) || _class);
  return Scaffold;
};

/* harmony default export */ var Scaffold_ScaffoldHoc = (ScaffoldHoc_ScaffoldHoc);
// EXTERNAL MODULE: ./renderer/src/components/Scaffold/form.scss
var Scaffold_form = __webpack_require__(770);

// EXTERNAL MODULE: ./renderer/src/components/Scaffold/item.scss
var item = __webpack_require__(771);

// CONCATENATED MODULE: ./renderer/src/components/Scaffold/index.js
/* concated harmony reexport Form */__webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* concated harmony reexport Item */__webpack_require__.d(__webpack_exports__, "b", function() { return Item; });
/* concated harmony reexport Panel */__webpack_require__.d(__webpack_exports__, "c", function() { return Scaffold_Panel; });
/* concated harmony reexport ScaffoldHoc */__webpack_require__.d(__webpack_exports__, "d", function() { return Scaffold_ScaffoldHoc; });








/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(755);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DEFAULT_APP_WIDTH = 890;

var BlockSlider =
/*#__PURE__*/
function (_Component) {
  _inherits(BlockSlider, _Component);

  function BlockSlider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BlockSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BlockSlider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      visible: false
    };
    _this.containerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

    _this.init = function () {
      if (window.innerWidth > DEFAULT_APP_WIDTH) {
        _this.setState({
          visible: true
        });
      }
    };

    _this.handleMouseenter = function () {
      _this.setState({
        visible: true
      });
    };

    _this.handleMouseleave = function () {
      _this.setState({
        visible: false
      });
    };

    _this.handleResize = function () {
      var visible = _this.state.visible;

      if (window.innerWidth > DEFAULT_APP_WIDTH) {
        visible = true;
      } else {
        visible = false;
      }

      _this.setState({
        visible: visible
      });
    };

    return _this;
  }

  _createClass(BlockSlider, [{
    key: "handleClick",
    value: function handleClick(index) {
      var onClick = this.props.onClick;

      if ('function' === typeof onClick) {
        onClick(index);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.containerRef.current.addEventListener('mouseenter', this.handleMouseenter);
      this.containerRef.current.addEventListener('mouseleave', this.handleMouseleave);
      this.init();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      this.containerRef.current.removeEventListener('mouseenter', this.handleMouseenter);
      this.containerRef.current.removeEventListener('mouseleave', this.handleMouseleave);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var blocksWithCategory = this.props.blocksWithCategory;
      var visible = this.state.visible;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.containerRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-slider', {
          'block-slider-visible': visible
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-slider-trigger"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "block-category-nav"
      }, blocksWithCategory.map(function (_ref, index) {
        var category = _ref.category,
            blocks = _ref.blocks;

        if (blocks.length === 0) {
          return null;
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          onClick: _this2.handleClick.bind(_this2, index),
          key: index
        }, category);
      })));
    }
  }]);

  return BlockSlider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BlockSlider);

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(693);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
var _dec, _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CustomBlock = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "b"])('customBlocks'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* observer */ "c"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomBlock, _Component);

  function CustomBlock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function () {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(_this.props.block, _this.props.blockName);
      }
    };

    _this.openBlockImgPreview = function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          customBlocks = _this$props.customBlocks,
          blockName = _this$props.blockName;
      customBlocks.openModal(blockName);
    };

    return _this;
  }

  _createClass(CustomBlock, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          block = _this$props2.block,
          blockName = _this$props2.blockName;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block",
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "screenshot"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "custom-screenshot-img",
        src: 'data:image/png;base64,' + this.props.customBlocks.getBlockImg(blockName)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, block.alias), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "class-name"
      }, blockName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "panel"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "preview",
        onClick: this.openBlockImgPreview
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
        placement: 'bottom',
        overlay: '预览效果图'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        type: "02magnifyingglasspluszoom"
      })))));
    }
  }]);

  return CustomBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _temp)) || _class) || _class);


/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vendorPrefix = exports.events = undefined;
exports.arrayMove = arrayMove;
exports.omit = omit;
exports.closest = closest;
exports.limit = limit;
exports.getElementMargin = getElementMargin;
exports.provideDisplayName = provideDisplayName;
exports.getPosition = getPosition;
exports.isTouchEvent = isTouchEvent;
exports.getEdgeOffset = getEdgeOffset;
exports.getLockPixelOffset = getLockPixelOffset;

var _invariant = __webpack_require__(301);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayMove(arr, previousIndex, newIndex) {
  var array = arr.slice(0);
  if (newIndex >= array.length) {
    var k = newIndex - array.length;
    while (k-- + 1) {
      array.push(undefined);
    }
  }
  array.splice(newIndex, 0, array.splice(previousIndex, 1)[0]);
  return array;
}

function omit(obj) {
  for (var _len = arguments.length, keysToOmit = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keysToOmit[_key - 1] = arguments[_key];
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) acc[key] = obj[key];
    return acc;
  }, {});
}

var events = exports.events = {
  start: ['touchstart', 'mousedown'],
  move: ['touchmove', 'mousemove'],
  end: ['touchend', 'touchcancel', 'mouseup']
};

var vendorPrefix = exports.vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return ''; // server environment
  // fix for:
  //    https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  //    window.getComputedStyle() returns null inside an iframe with display: none
  // in this case return an array with a fake mozilla style in it.
  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';
    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();

function closest(el, fn) {
  while (el) {
    if (fn(el)) return el;
    el = el.parentNode;
  }
}

function limit(min, max, value) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

function getCSSPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }
  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);

  return {
    top: getCSSPixelValue(style.marginTop),
    right: getCSSPixelValue(style.marginRight),
    bottom: getCSSPixelValue(style.marginBottom),
    left: getCSSPixelValue(style.marginLeft)
  };
}

function provideDisplayName(prefix, Component) {
  var componentName = Component.displayName || Component.name;

  return componentName ? prefix + '(' + componentName + ')' : prefix;
}

function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}

function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}

function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { top: 0, left: 0 };

  // Get the actual offsetTop / offsetLeft value, no matter how deep the node is nested
  if (node) {
    var nodeOffset = {
      top: offset.top + node.offsetTop,
      left: offset.left + node.offsetLeft
    };

    if (node.parentNode !== parent) {
      return getEdgeOffset(node.parentNode, parent, nodeOffset);
    } else {
      return nodeOffset;
    }
  }
}

function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
      width = _ref.width,
      height = _ref.height;

  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';

  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);

    (0, _invariant2.default)(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);

    offsetX = offsetY = parseFloat(lockOffset);
    unit = match[1];
  }

  (0, _invariant2.default)(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);

  if (unit === '%') {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }

  return {
    x: offsetX,
    y: offsetY
  };
}

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./renderer/node_modules/mobx-react/index.module.js
var index_module = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__(1);
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./renderer/node_modules/rc-tooltip/es/index.js + 28 modules
var es = __webpack_require__(99);

// EXTERNAL MODULE: ./renderer/src/external.js
var external = __webpack_require__(179);

// EXTERNAL MODULE: ./renderer/src/components/Icon/index.jsx
var Icon = __webpack_require__(22);

// EXTERNAL MODULE: ./renderer/node_modules/react-in-viewport/dist/es/index.js
var dist_es = __webpack_require__(717);

// EXTERNAL MODULE: ./renderer/src/components/Block/index.scss
var components_Block = __webpack_require__(693);

// CONCATENATED MODULE: ./renderer/src/components/Block/Block.jsx
var _dec, _class, _class2, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










function withAlicdnImage(url) {
  if (url && url.indexOf('img.alicdn.com') !== -1) {
    return url + '_250x250.jpg';
  }

  return url;
}

var Block_Block = (_dec = Object(index_module["b" /* inject */])('blocks'), _dec(_class = Object(index_module["c" /* observer */])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Block, _Component);

  function Block() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Block);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Block)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function () {
      _this.props.handleBlocksAdd(_this.props.block);
    };

    _this.createPageOpener = function (url) {
      return function () {
        Object(external["a" /* openInBrowser */])(url);
      };
    };

    _this.openBlockImgPreview = function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          blocks = _this$props.blocks,
          block = _this$props.block;
      blocks.openModal(block);
    };

    _this.openBlockOnlinePreview = function (event) {
      event.stopPropagation();
      var block = _this.props.block;
      Object(external["a" /* openInBrowser */])(block.homepage);
    };

    _this.openBlockGithub = function (event) {
      event.stopPropagation();
      var block = _this.props.block;
      Object(external["a" /* openInBrowser */])(block.repository);
    };

    return _this;
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          block = _this$props2.block,
          _this$props2$originKe = _this$props2.originKeywords,
          originKeywords = _this$props2$originKe === void 0 ? '' : _this$props2$originKe,
          innerRef = _this$props2.innerRef,
          enterCount = _this$props2.enterCount;
      var title = block.title;
      var name = block.name;

      if (originKeywords) {
        var keys = originKeywords.split(/\s+/).filter(Boolean);
        var matchRegex = new RegExp(keys.join('|'), 'gi');
        title = title.replace(matchRegex, function (str) {
          return "<span style=\"color: #ffa000\">".concat(str, "</span>");
        });
        name = name.replace(matchRegex, function (str) {
          return "<span style=\"color: #ffa000\">".concat(str, "</span>");
        });
      }

      return external_window_React_default.a.createElement("div", {
        className: "block",
        onClick: this.handleClick,
        ref: innerRef
      }, external_window_React_default.a.createElement("div", {
        className: "screenshot"
      }, enterCount > 0 && external_window_React_default.a.createElement("div", {
        className: "screenshot-img",
        style: {
          backgroundImage: "url(".concat(withAlicdnImage(block.screenshot), ")")
        }
      })), enterCount > 0 && external_window_React_default.a.createElement("div", {
        className: "title-wrapper"
      }, external_window_React_default.a.createElement("div", {
        className: "title-body"
      }, external_window_React_default.a.createElement("div", {
        className: "title",
        dangerouslySetInnerHTML: {
          __html: title
        }
      }), block._isNew && external_window_React_default.a.createElement("div", {
        className: "global-new-tag"
      }, "new")), external_window_React_default.a.createElement("div", {
        className: "class-name",
        dangerouslySetInnerHTML: {
          __html: name
        }
      })), enterCount > 0 && external_window_React_default.a.createElement("div", {
        className: "block-flipcard"
      }, external_window_React_default.a.createElement("div", {
        className: "block-flipcard-body"
      }, external_window_React_default.a.createElement("h2", null, block.title), block.description && external_window_React_default.a.createElement("div", null, external_window_React_default.a.createElement("p", null, block.description))), external_window_React_default.a.createElement("div", {
        className: "block-flipcard-panel"
      }, external_window_React_default.a.createElement("span", {
        className: "preview",
        onClick: this.openBlockImgPreview
      }, external_window_React_default.a.createElement(es["default"], {
        afterVisibleChange: this.afterVisibleChange,
        placement: 'bottom',
        overlay: '预览效果图'
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "02magnifyingglasspluszoom"
      }))), block.homepage && external_window_React_default.a.createElement("span", {
        className: "preview",
        onClick: this.openBlockOnlinePreview
      }, external_window_React_default.a.createElement(es["default"], {
        placement: 'bottom',
        overlay: '在线预览'
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "eye"
      }))), block.repository && external_window_React_default.a.createElement("span", {
        className: "repo",
        onClick: this.openBlockGithub
      }, external_window_React_default.a.createElement(es["default"], {
        placement: 'bottom',
        overlay: '查看源码'
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "github"
      }))))));
    }
  }]);

  return Block;
}(external_window_React_["Component"]), _class2.propTypes = {
  handleBlocksAdd: prop_types_default.a.func,
  block: prop_types_default.a.object,
  blocks: prop_types_default.a.object,
  originKeywords: prop_types_default.a.string
}, _class2.defaultProps = {
  handleBlocksAdd: function handleBlocksAdd() {}
}, _temp)) || _class) || _class);
/* harmony default export */ var components_Block_Block = (Object(dist_es["a" /* default */])(Block_Block));
// EXTERNAL MODULE: ./renderer/node_modules/react-modal/lib/index.js
var lib = __webpack_require__(694);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./renderer/src/components/Block/PreviewModal/index.scss
var Block_PreviewModal = __webpack_require__(718);

// CONCATENATED MODULE: ./renderer/src/components/Block/PreviewModal/index.jsx
var PreviewModal_dec, PreviewModal_class, PreviewModal_class2, PreviewModal_temp;

function PreviewModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PreviewModal_typeof = function _typeof(obj) { return typeof obj; }; } else { PreviewModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PreviewModal_typeof(obj); }

function PreviewModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PreviewModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PreviewModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) PreviewModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) PreviewModal_defineProperties(Constructor, staticProps); return Constructor; }

function PreviewModal_possibleConstructorReturn(self, call) { if (call && (PreviewModal_typeof(call) === "object" || typeof call === "function")) { return call; } return PreviewModal_assertThisInitialized(self); }

function PreviewModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PreviewModal_getPrototypeOf(o) { PreviewModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PreviewModal_getPrototypeOf(o); }

function PreviewModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PreviewModal_setPrototypeOf(subClass, superClass); }

function PreviewModal_setPrototypeOf(o, p) { PreviewModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PreviewModal_setPrototypeOf(o, p); }







var PreviewModal_PreviewModal = (PreviewModal_dec = Object(index_module["b" /* inject */])('blocks'), PreviewModal_dec(PreviewModal_class = Object(index_module["c" /* observer */])(PreviewModal_class = (PreviewModal_temp = PreviewModal_class2 =
/*#__PURE__*/
function (_Component) {
  PreviewModal_inherits(PreviewModal, _Component);

  function PreviewModal() {
    PreviewModal_classCallCheck(this, PreviewModal);

    return PreviewModal_possibleConstructorReturn(this, PreviewModal_getPrototypeOf(PreviewModal).apply(this, arguments));
  }

  PreviewModal_createClass(PreviewModal, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      lib_default.a.setAppElement('body');
    }
  }, {
    key: "render",
    value: function render() {
      var blocks = this.props.blocks;
      return external_window_React_default.a.createElement(lib_default.a, {
        isOpen: blocks.showModal,
        onRequestClose: blocks.closeModal,
        className: "preview-modal",
        style: {
          overlay: {
            background: '#fff',
            zIndex: '10000'
          }
        }
      }, external_window_React_default.a.createElement("img", {
        className: "preview-block-img",
        src: blocks.previewBlock.screenshot,
        alt: blocks.previewBlock.name,
        onClick: blocks.closeModal
      }), external_window_React_default.a.createElement("div", {
        className: "preview-block-close",
        onClick: blocks.closeModal
      }, external_window_React_default.a.createElement(Icon["a" /* default */], {
        type: "close",
        className: "preview-block-close-icon"
      })));
    }
  }]);

  return PreviewModal;
}(external_window_React_["Component"]), PreviewModal_class2.displayName = 'PreviewModal', PreviewModal_class2.propTypes = {
  blocks: prop_types_default.a.object.isRequired
}, PreviewModal_temp)) || PreviewModal_class) || PreviewModal_class);
/* harmony default export */ var components_Block_PreviewModal = (PreviewModal_PreviewModal);
// EXTERNAL MODULE: ./renderer/src/components/Block/Panel.jsx
var Panel = __webpack_require__(687);

// CONCATENATED MODULE: ./renderer/src/components/Block/index.jsx




// EXTERNAL MODULE: ./renderer/src/components/Block/CustomBlock.jsx
var CustomBlock = __webpack_require__(720);

// EXTERNAL MODULE: ./renderer/src/components/BlockCategory/index.scss
var components_BlockCategory = __webpack_require__(721);

// CONCATENATED MODULE: ./renderer/src/components/BlockCategory/index.jsx
var BlockCategory_class, BlockCategory_class2, BlockCategory_temp;

function BlockCategory_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlockCategory_typeof = function _typeof(obj) { return typeof obj; }; } else { BlockCategory_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlockCategory_typeof(obj); }

function BlockCategory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlockCategory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlockCategory_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlockCategory_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlockCategory_defineProperties(Constructor, staticProps); return Constructor; }

function BlockCategory_possibleConstructorReturn(self, call) { if (call && (BlockCategory_typeof(call) === "object" || typeof call === "function")) { return call; } return BlockCategory_assertThisInitialized(self); }

function BlockCategory_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BlockCategory_getPrototypeOf(o) { BlockCategory_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlockCategory_getPrototypeOf(o); }

function BlockCategory_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlockCategory_setPrototypeOf(subClass, superClass); }

function BlockCategory_setPrototypeOf(o, p) { BlockCategory_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlockCategory_setPrototypeOf(o, p); }








var BlockCategory_BlockCategory = Object(index_module["c" /* observer */])(BlockCategory_class = (BlockCategory_temp = BlockCategory_class2 =
/*#__PURE__*/
function (_Component) {
  BlockCategory_inherits(BlockCategory, _Component);

  function BlockCategory() {
    BlockCategory_classCallCheck(this, BlockCategory);

    return BlockCategory_possibleConstructorReturn(this, BlockCategory_getPrototypeOf(BlockCategory).apply(this, arguments));
  }

  BlockCategory_createClass(BlockCategory, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blocksWithCategory = _this$props.blocksWithCategory,
          originKeywords = _this$props.originKeywords,
          idPrefix = _this$props.idPrefix,
          handleBlocksAdd = _this$props.handleBlocksAdd;

      if (blocksWithCategory === undefined) {
        return external_window_React_default.a.createElement("div", {
          className: "blocks-empty-tip"
        }, "loading...");
      } else if (Array.isArray(blocksWithCategory) && blocksWithCategory.length === 0 && originKeywords) {
        return external_window_React_default.a.createElement("div", {
          className: "blocks-empty-tip"
        }, "\u6CA1\u6709\u627E\u5230", external_window_React_default.a.createElement("span", {
          style: {
            fontWeight: 400,
            color: '#3080fe',
            padding: '0 5px'
          }
        }, originKeywords), "\u76F8\u5173\u7684\u533A\u5757");
      } else if (Array.isArray(blocksWithCategory) && blocksWithCategory.length === 0) {
        return external_window_React_default.a.createElement("div", {
          className: "blocks-empty-tip"
        }, "\u6682\u65E0\u53EF\u7528\u533A\u5757...");
      } else {
        return external_window_React_default.a.createElement("div", {
          className: "blocks-wrapper"
        }, blocksWithCategory.map(function (_ref, index) {
          var category = _ref.category,
              blocks = _ref.blocks;

          if (blocks.length === 0) {
            return null;
          }

          var blockPanelId = "".concat(idPrefix).concat(index);
          return external_window_React_default.a.createElement("div", {
            className: "block-category",
            key: category
          }, external_window_React_default.a.createElement("div", {
            id: blockPanelId
          }, external_window_React_default.a.createElement("div", {
            className: "block-category-title"
          }, category, external_window_React_default.a.createElement("span", null, "(", blocks.length, ")")), external_window_React_default.a.createElement("div", {
            className: "block-category-body"
          }, blocks.map(function (block) {
            return external_window_React_default.a.createElement(components_Block_Block, {
              key: "".concat(category, "-").concat(block.name),
              block: block,
              originKeywords: originKeywords,
              handleBlocksAdd: handleBlocksAdd
            });
          }))));
        }), external_window_React_default.a.createElement(components_Block_PreviewModal, null));
      }
    }
  }]);

  return BlockCategory;
}(external_window_React_["Component"]), BlockCategory_class2.propTypes = {
  handleBlocksAdd: prop_types_default.a.func
}, BlockCategory_class2.defaultProps = {
  handleBlocksAdd: function handleBlocksAdd() {}
}, BlockCategory_temp)) || BlockCategory_class;

/* harmony default export */ var src_components_BlockCategory = __webpack_exports__["a"] = (BlockCategory_BlockCategory);

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(750);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(696);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(676);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(754);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(751);

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(752);

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(696);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(753);

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(676);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen();
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (false) {}

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.afterClose();
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        },
        _react2.default.createElement(
          "div",
          _extends({
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          }),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(695);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(695);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  var target;
  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof tabbable[x] === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  tabbable[x].focus();
}
module.exports = exports["default"];

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (false) { var _x, x, buffer, classes; }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayMove = exports.sortableHandle = exports.sortableElement = exports.sortableContainer = exports.SortableHandle = exports.SortableElement = exports.SortableContainer = undefined;

var _utils = __webpack_require__(722);

Object.defineProperty(exports, 'arrayMove', {
  enumerable: true,
  get: function get() {
    return _utils.arrayMove;
  }
});

var _SortableContainer2 = __webpack_require__(895);

var _SortableContainer3 = _interopRequireDefault(_SortableContainer2);

var _SortableElement2 = __webpack_require__(897);

var _SortableElement3 = _interopRequireDefault(_SortableElement2);

var _SortableHandle2 = __webpack_require__(898);

var _SortableHandle3 = _interopRequireDefault(_SortableHandle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SortableContainer = _SortableContainer3.default;
exports.SortableElement = _SortableElement3.default;
exports.SortableHandle = _SortableHandle3.default;
exports.sortableContainer = _SortableContainer3.default;
exports.sortableElement = _SortableElement3.default;
exports.sortableHandle = _SortableHandle3.default;

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

module.exports = rimraf
rimraf.sync = rimrafSync

var assert = __webpack_require__(49)
var path = __webpack_require__(3)
var fs = __webpack_require__(11)
var glob = __webpack_require__(698)
var _0666 = parseInt('666', 8)

var defaultGlobOpts = {
  nosort: true,
  silent: true
}

// for EMFILE handling
var timeout = 0

var isWindows = (process.platform === "win32")

function defaults (options) {
  var methods = [
    'unlink',
    'chmod',
    'stat',
    'lstat',
    'rmdir',
    'readdir'
  ]
  methods.forEach(function(m) {
    options[m] = options[m] || fs[m]
    m = m + 'Sync'
    options[m] = options[m] || fs[m]
  })

  options.maxBusyTries = options.maxBusyTries || 3
  options.emfileWait = options.emfileWait || 1000
  if (options.glob === false) {
    options.disableGlob = true
  }
  options.disableGlob = options.disableGlob || false
  options.glob = options.glob || defaultGlobOpts
}

function rimraf (p, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  assert(p, 'rimraf: missing path')
  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
  assert.equal(typeof cb, 'function', 'rimraf: callback function required')
  assert(options, 'rimraf: invalid options argument provided')
  assert.equal(typeof options, 'object', 'rimraf: options should be object')

  defaults(options)

  var busyTries = 0
  var errState = null
  var n = 0

  if (options.disableGlob || !glob.hasMagic(p))
    return afterGlob(null, [p])

  options.lstat(p, function (er, stat) {
    if (!er)
      return afterGlob(null, [p])

    glob(p, options.glob, afterGlob)
  })

  function next (er) {
    errState = errState || er
    if (--n === 0)
      cb(errState)
  }

  function afterGlob (er, results) {
    if (er)
      return cb(er)

    n = results.length
    if (n === 0)
      return cb()

    results.forEach(function (p) {
      rimraf_(p, options, function CB (er) {
        if (er) {
          if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") &&
              busyTries < options.maxBusyTries) {
            busyTries ++
            var time = busyTries * 100
            // try again, with the same exact callback as this one.
            return setTimeout(function () {
              rimraf_(p, options, CB)
            }, time)
          }

          // this one won't happen if graceful-fs is used.
          if (er.code === "EMFILE" && timeout < options.emfileWait) {
            return setTimeout(function () {
              rimraf_(p, options, CB)
            }, timeout ++)
          }

          // already gone
          if (er.code === "ENOENT") er = null
        }

        timeout = 0
        next(er)
      })
    })
  }
}

// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_ (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.
  options.lstat(p, function (er, st) {
    if (er && er.code === "ENOENT")
      return cb(null)

    // Windows can EPERM on stat.  Life is suffering.
    if (er && er.code === "EPERM" && isWindows)
      fixWinEPERM(p, options, er, cb)

    if (st && st.isDirectory())
      return rmdir(p, options, er, cb)

    options.unlink(p, function (er) {
      if (er) {
        if (er.code === "ENOENT")
          return cb(null)
        if (er.code === "EPERM")
          return (isWindows)
            ? fixWinEPERM(p, options, er, cb)
            : rmdir(p, options, er, cb)
        if (er.code === "EISDIR")
          return rmdir(p, options, er, cb)
      }
      return cb(er)
    })
  })
}

function fixWinEPERM (p, options, er, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')
  if (er)
    assert(er instanceof Error)

  options.chmod(p, _0666, function (er2) {
    if (er2)
      cb(er2.code === "ENOENT" ? null : er)
    else
      options.stat(p, function(er3, stats) {
        if (er3)
          cb(er3.code === "ENOENT" ? null : er)
        else if (stats.isDirectory())
          rmdir(p, options, er, cb)
        else
          options.unlink(p, cb)
      })
  })
}

function fixWinEPERMSync (p, options, er) {
  assert(p)
  assert(options)
  if (er)
    assert(er instanceof Error)

  try {
    options.chmodSync(p, _0666)
  } catch (er2) {
    if (er2.code === "ENOENT")
      return
    else
      throw er
  }

  try {
    var stats = options.statSync(p)
  } catch (er3) {
    if (er3.code === "ENOENT")
      return
    else
      throw er
  }

  if (stats.isDirectory())
    rmdirSync(p, options, er)
  else
    options.unlinkSync(p)
}

function rmdir (p, options, originalEr, cb) {
  assert(p)
  assert(options)
  if (originalEr)
    assert(originalEr instanceof Error)
  assert(typeof cb === 'function')

  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.
  options.rmdir(p, function (er) {
    if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
      rmkids(p, options, cb)
    else if (er && er.code === "ENOTDIR")
      cb(originalEr)
    else
      cb(er)
  })
}

function rmkids(p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.readdir(p, function (er, files) {
    if (er)
      return cb(er)
    var n = files.length
    if (n === 0)
      return options.rmdir(p, cb)
    var errState
    files.forEach(function (f) {
      rimraf(path.join(p, f), options, function (er) {
        if (errState)
          return
        if (er)
          return cb(errState = er)
        if (--n === 0)
          options.rmdir(p, cb)
      })
    })
  })
}

// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync (p, options) {
  options = options || {}
  defaults(options)

  assert(p, 'rimraf: missing path')
  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
  assert(options, 'rimraf: missing options')
  assert.equal(typeof options, 'object', 'rimraf: options should be object')

  var results

  if (options.disableGlob || !glob.hasMagic(p)) {
    results = [p]
  } else {
    try {
      options.lstatSync(p)
      results = [p]
    } catch (er) {
      results = glob.sync(p, options.glob)
    }
  }

  if (!results.length)
    return

  for (var i = 0; i < results.length; i++) {
    var p = results[i]

    try {
      var st = options.lstatSync(p)
    } catch (er) {
      if (er.code === "ENOENT")
        return

      // Windows can EPERM on stat.  Life is suffering.
      if (er.code === "EPERM" && isWindows)
        fixWinEPERMSync(p, options, er)
    }

    try {
      // sunos lets the root user unlink directories, which is... weird.
      if (st && st.isDirectory())
        rmdirSync(p, options, null)
      else
        options.unlinkSync(p)
    } catch (er) {
      if (er.code === "ENOENT")
        return
      if (er.code === "EPERM")
        return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
      if (er.code !== "EISDIR")
        throw er

      rmdirSync(p, options, er)
    }
  }
}

function rmdirSync (p, options, originalEr) {
  assert(p)
  assert(options)
  if (originalEr)
    assert(originalEr instanceof Error)

  try {
    options.rmdirSync(p)
  } catch (er) {
    if (er.code === "ENOENT")
      return
    if (er.code === "ENOTDIR")
      throw originalEr
    if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
      rmkidsSync(p, options)
  }
}

function rmkidsSync (p, options) {
  assert(p)
  assert(options)
  options.readdirSync(p).forEach(function (f) {
    rimrafSync(path.join(p, f), options)
  })

  // We only end up here once we got ENOTEMPTY at least once, and
  // at this point, we are guaranteed to have removed all the kids.
  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
  // try really hard to delete stuff on windows, because it has a
  // PROFOUNDLY annoying habit of not closing handles promptly when
  // files are deleted, resulting in spurious ENOTEMPTY errors.
  var retries = isWindows ? 100 : 1
  var i = 0
  do {
    var threw = true
    try {
      var ret = options.rmdirSync(p, options)
      threw = false
      return ret
    } finally {
      if (++i < retries && threw)
        continue
    }
  } while (true)
}


/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var pathModule = __webpack_require__(3);
var isWindows = process.platform === 'win32';
var fs = __webpack_require__(11);

// JavaScript implementation of realpath, ported from node pre-v6

var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);

function rethrow() {
  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
  // is fairly slow to generate.
  var callback;
  if (DEBUG) {
    var backtrace = new Error;
    callback = debugCallback;
  } else
    callback = missingCallback;

  return callback;

  function debugCallback(err) {
    if (err) {
      backtrace.message = err.message;
      err = backtrace;
      missingCallback(err);
    }
  }

  function missingCallback(err) {
    if (err) {
      if (process.throwDeprecation)
        throw err;  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
      else if (!process.noDeprecation) {
        var msg = 'fs: missing callback ' + (err.stack || err.message);
        if (process.traceDeprecation)
          console.trace(msg);
        else
          console.error(msg);
      }
    }
  }
}

function maybeCallback(cb) {
  return typeof cb === 'function' ? cb : rethrow();
}

var normalize = pathModule.normalize;

// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
if (isWindows) {
  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
} else {
  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
}

// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
if (isWindows) {
  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
} else {
  var splitRootRe = /^[\/]*/;
}

exports.realpathSync = function realpathSync(p, cache) {
  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return cache[p];
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstatSync(base);
      knownHard[base] = true;
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  // NB: p.length changes.
  while (pos < p.length) {
    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      continue;
    }

    var resolvedLink;
    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // some known symbolic link.  no need to stat again.
      resolvedLink = cache[base];
    } else {
      var stat = fs.lstatSync(base);
      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache) cache[base] = base;
        continue;
      }

      // read the link if it wasn't read before
      // dev/ino always return 0 on windows, so skip the check.
      var linkTarget = null;
      if (!isWindows) {
        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
        if (seenLinks.hasOwnProperty(id)) {
          linkTarget = seenLinks[id];
        }
      }
      if (linkTarget === null) {
        fs.statSync(base);
        linkTarget = fs.readlinkSync(base);
      }
      resolvedLink = pathModule.resolve(previous, linkTarget);
      // track this, if given a cache.
      if (cache) cache[base] = resolvedLink;
      if (!isWindows) seenLinks[id] = linkTarget;
    }

    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }

  if (cache) cache[original] = p;

  return p;
};


exports.realpath = function realpath(p, cache, cb) {
  if (typeof cb !== 'function') {
    cb = maybeCallback(cache);
    cache = null;
  }

  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return process.nextTick(cb.bind(null, null, cache[p]));
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstat(base, function(err) {
        if (err) return cb(err);
        knownHard[base] = true;
        LOOP();
      });
    } else {
      process.nextTick(LOOP);
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  function LOOP() {
    // stop if scanned past end of path
    if (pos >= p.length) {
      if (cache) cache[original] = p;
      return cb(null, p);
    }

    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      return process.nextTick(LOOP);
    }

    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // known symbolic link.  no need to stat again.
      return gotResolvedLink(cache[base]);
    }

    return fs.lstat(base, gotStat);
  }

  function gotStat(err, stat) {
    if (err) return cb(err);

    // if not a symlink, skip to the next path part
    if (!stat.isSymbolicLink()) {
      knownHard[base] = true;
      if (cache) cache[base] = base;
      return process.nextTick(LOOP);
    }

    // stat & read the link if not read before
    // call gotTarget as soon as the link target is known
    // dev/ino always return 0 on windows, so skip the check.
    if (!isWindows) {
      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
      if (seenLinks.hasOwnProperty(id)) {
        return gotTarget(null, seenLinks[id], base);
      }
    }
    fs.stat(base, function(err) {
      if (err) return cb(err);

      fs.readlink(base, function(err, target) {
        if (!isWindows) seenLinks[id] = target;
        gotTarget(err, target);
      });
    });
  }

  function gotTarget(err, target, base) {
    if (err) return cb(err);

    var resolvedLink = pathModule.resolve(previous, target);
    if (cache) cache[base] = resolvedLink;
    gotResolvedLink(resolvedLink);
  }

  function gotResolvedLink(resolvedLink) {
    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }
};


/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(762);
var balanced = __webpack_require__(763);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

module.exports = globSync
globSync.GlobSync = GlobSync

var fs = __webpack_require__(11)
var rp = __webpack_require__(699)
var minimatch = __webpack_require__(677)
var Minimatch = minimatch.Minimatch
var Glob = __webpack_require__(698).Glob
var util = __webpack_require__(10)
var path = __webpack_require__(3)
var assert = __webpack_require__(49)
var isAbsolute = __webpack_require__(678)
var common = __webpack_require__(700)
var alphasort = common.alphasort
var alphasorti = common.alphasorti
var setopts = common.setopts
var ownProp = common.ownProp
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

function globSync (pattern, options) {
  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  return new GlobSync(pattern, options).found
}

function GlobSync (pattern, options) {
  if (!pattern)
    throw new Error('must provide pattern')

  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  if (!(this instanceof GlobSync))
    return new GlobSync(pattern, options)

  setopts(this, pattern, options)

  if (this.noprocess)
    return this

  var n = this.minimatch.set.length
  this.matches = new Array(n)
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false)
  }
  this._finish()
}

GlobSync.prototype._finish = function () {
  assert(this instanceof GlobSync)
  if (this.realpath) {
    var self = this
    this.matches.forEach(function (matchset, index) {
      var set = self.matches[index] = Object.create(null)
      for (var p in matchset) {
        try {
          p = self._makeAbs(p)
          var real = rp.realpathSync(p, self.realpathCache)
          set[real] = true
        } catch (er) {
          if (er.syscall === 'stat')
            set[self._makeAbs(p)] = true
          else
            throw er
        }
      }
    })
  }
  common.finish(this)
}


GlobSync.prototype._process = function (pattern, index, inGlobStar) {
  assert(this instanceof GlobSync)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // See if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip processing
  if (childrenIgnored(this, read))
    return

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar)
}


GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
  var entries = this._readdir(abs, inGlobStar)

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix.slice(-1) !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix)
      newPattern = [prefix, e]
    else
      newPattern = [e]
    this._process(newPattern.concat(remain), index, inGlobStar)
  }
}


GlobSync.prototype._emitMatch = function (index, e) {
  if (isIgnored(this, e))
    return

  var abs = this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute) {
    e = abs
  }

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  if (this.stat)
    this._stat(e)
}


GlobSync.prototype._readdirInGlobStar = function (abs) {
  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false)

  var entries
  var lstat
  var stat
  try {
    lstat = fs.lstatSync(abs)
  } catch (er) {
    if (er.code === 'ENOENT') {
      // lstat failed, doesn't exist
      return null
    }
  }

  var isSym = lstat && lstat.isSymbolicLink()
  this.symlinks[abs] = isSym

  // If it's not a symlink or a dir, then it's definitely a regular file.
  // don't bother doing a readdir in that case.
  if (!isSym && lstat && !lstat.isDirectory())
    this.cache[abs] = 'FILE'
  else
    entries = this._readdir(abs, false)

  return entries
}

GlobSync.prototype._readdir = function (abs, inGlobStar) {
  var entries

  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return null

    if (Array.isArray(c))
      return c
  }

  try {
    return this._readdirEntries(abs, fs.readdirSync(abs))
  } catch (er) {
    this._readdirError(abs, er)
    return null
  }
}

GlobSync.prototype._readdirEntries = function (abs, entries) {
  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries

  // mark and cache dir-ness
  return entries
}

GlobSync.prototype._readdirError = function (f, er) {
  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        throw error
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict)
        throw er
      if (!this.silent)
        console.error('glob error', er)
      break
  }
}

GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {

  var entries = this._readdir(abs, inGlobStar)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false)

  var len = entries.length
  var isSym = this.symlinks[abs]

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true)
  }
}

GlobSync.prototype._processSimple = function (prefix, index) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var exists = this._stat(prefix)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
}

// Returns either 'DIR', 'FILE', or false
GlobSync.prototype._stat = function (f) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return false

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return c

    if (needDir && c === 'FILE')
      return false

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (!stat) {
    var lstat
    try {
      lstat = fs.lstatSync(abs)
    } catch (er) {
      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
        this.statCache[abs] = false
        return false
      }
    }

    if (lstat && lstat.isSymbolicLink()) {
      try {
        stat = fs.statSync(abs)
      } catch (er) {
        stat = lstat
      }
    } else {
      stat = lstat
    }
  }

  this.statCache[abs] = stat

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'

  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return false

  return c
}

GlobSync.prototype._mark = function (p) {
  return common.mark(this, p)
}

GlobSync.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(701)
var reqs = Object.create(null)
var once = __webpack_require__(702)

module.exports = wrappy(inflight)

function inflight (key, cb) {
  if (reqs[key]) {
    reqs[key].push(cb)
    return null
  } else {
    reqs[key] = [cb]
    return makeres(key)
  }
}

function makeres (key) {
  return once(function RES () {
    var cbs = reqs[key]
    var len = cbs.length
    var args = slice(arguments)

    // XXX It's somewhat ambiguous whether a new callback added in this
    // pass should be queued for later execution if something in the
    // list of callbacks throws, or if it should just be discarded.
    // However, it's such an edge case that it hardly matters, and either
    // choice is likely as surprising as the other.
    // As it happens, we do go ahead and schedule it for later execution.
    try {
      for (var i = 0; i < len; i++) {
        cbs[i].apply(null, args)
      }
    } finally {
      if (cbs.length > len) {
        // added more in the interim.
        // de-zalgo, just in case, but don't call again.
        cbs.splice(0, len)
        process.nextTick(function () {
          RES.apply(null, args)
        })
      } else {
        delete reqs[key]
      }
    }
  })
}

function slice (args) {
  var length = args.length
  var array = []

  for (var i = 0; i < length; i++) array[i] = args[i]
  return array
}


/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _icedesign_base_lib_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _icedesign_base_lib_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_lib_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Scaffold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(714);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81);



var _dec, _class, _class2, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CreateProjectDialog = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* inject */ "b"])('scaffold'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* observer */ "c"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateProjectDialog, _Component);

  function CreateProjectDialog() {
    _classCallCheck(this, CreateProjectDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreateProjectDialog).apply(this, arguments));
  }

  _createClass(CreateProjectDialog, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_dialog__WEBPACK_IMPORTED_MODULE_0___default.a, {
        title: "\u521B\u5EFA\u9879\u76EE",
        autoFocus: true,
        className: "poject-config-dialog",
        footerAlign: "center",
        onClose: this.props.handleClose,
        footer: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "project-config-footer"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: this.props.handleGeneratorProject,
          disabled: this.props.scaffold.isDisabled,
          type: "primary"
        }, this.props.scaffold.isCreating ? '正在创建项目' : '开始创建项目'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icedesign_base_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          disabled: this.props.scaffold.isCreating && this.props.scaffold.progress <= 0,
          onClick: this.props.handleClose
        }, "\u53D6\u6D88")),
        visible: this.props.scaffold.visible
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Scaffold__WEBPACK_IMPORTED_MODULE_4__[/* Form */ "a"], null));
    }
  }]);

  return CreateProjectDialog;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]), _class2.displayName = 'CreateProjectDialog', _class2.propTypes = {
  scaffold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  handleGeneratorProject: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
}, _class2.defaultProps = {}, _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Object(_Scaffold__WEBPACK_IMPORTED_MODULE_4__[/* ScaffoldHoc */ "d"])(CreateProjectDialog));

/***/ }),

/***/ 810:
/***/ (function(module, exports) {


// when this is loaded into the browser, 
// just use the defaults...

module.exports = function (name, defaults) {
  return defaults
}


/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = sortableContainer;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _invariant = __webpack_require__(301);

var _invariant2 = _interopRequireDefault(_invariant);

var _Manager = __webpack_require__(896);

var _Manager2 = _interopRequireDefault(_Manager);

var _utils = __webpack_require__(722);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Export Higher Order Sortable Container Component
function sortableContainer(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { withRef: false };

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.handleStart = function (event) {
        var _this$props = _this.props,
            distance = _this$props.distance,
            shouldCancelStart = _this$props.shouldCancelStart;


        if (event.button === 2 || shouldCancelStart(event)) {
          return false;
        }

        _this._touched = true;
        _this._pos = (0, _utils.getPosition)(event);

        var node = (0, _utils.closest)(event.target, function (el) {
          return el.sortableInfo != null;
        });

        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo,
              index = _node$sortableInfo.index,
              collection = _node$sortableInfo.collection;


          if (useDragHandle && !(0, _utils.closest)(event.target, function (el) {
            return el.sortableHandle != null;
          })) return;

          _this.manager.active = { index: index, collection: collection };

          /*
          * Fixes a bug in Firefox where the :active state of anchor tags
          * prevent subsequent 'mousemove' events from being fired
          * (see https://github.com/clauderic/react-sortable-hoc/issues/118)
          */
          if (!(0, _utils.isTouchEvent)(event) && event.target.tagName.toLowerCase() === 'a') {
            event.preventDefault();
          }

          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function () {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      };

      _this.nodeIsChild = function (node) {
        return node.sortableInfo.manager === _this.manager;
      };

      _this.handleMove = function (event) {
        var _this$props2 = _this.props,
            distance = _this$props2.distance,
            pressThreshold = _this$props2.pressThreshold;


        if (!_this.state.sorting && _this._touched) {
          var position = (0, _utils.getPosition)(event);
          var delta = _this._delta = {
            x: _this._pos.x - position.x,
            y: _this._pos.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);

          if (!distance && (!pressThreshold || pressThreshold && combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      };

      _this.handleEnd = function () {
        _this._touched = false;
        _this.cancel();
      };

      _this.cancel = function () {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;


        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }
          _this.manager.active = null;
        }
      };

      _this.handlePress = function (event) {
        var active = _this.manager.getActive();

        if (active) {
          var _this$props3 = _this.props,
              axis = _this$props3.axis,
              getHelperDimensions = _this$props3.getHelperDimensions,
              helperClass = _this$props3.helperClass,
              hideSortableGhost = _this$props3.hideSortableGhost,
              onSortStart = _this$props3.onSortStart,
              useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
          var node = active.node,
              collection = active.collection;
          var index = node.sortableInfo.index;

          var margin = (0, _utils.getElementMargin)(node);

          var containerBoundingRect = _this.container.getBoundingClientRect();
          var dimensions = getHelperDimensions({ index: index, node: node, collection: collection });

          _this.node = node;
          _this.margin = margin;
          _this.width = dimensions.width;
          _this.height = dimensions.height;
          _this.marginOffset = {
            x: _this.margin.left + _this.margin.right,
            y: Math.max(_this.margin.top, _this.margin.bottom)
          };
          _this.boundingClientRect = node.getBoundingClientRect();
          _this.containerBoundingRect = containerBoundingRect;
          _this.index = index;
          _this.newIndex = index;

          _this.axis = {
            x: axis.indexOf('x') >= 0,
            y: axis.indexOf('y') >= 0
          };
          _this.offsetEdge = (0, _utils.getEdgeOffset)(node, _this.container);
          _this.initialOffset = (0, _utils.getPosition)(event);
          _this.initialScroll = {
            top: _this.container.scrollTop,
            left: _this.container.scrollLeft
          };

          _this.initialWindowScroll = {
            top: window.pageYOffset,
            left: window.pageXOffset
          };

          var fields = node.querySelectorAll('input, textarea, select');
          var clonedNode = node.cloneNode(true);
          var clonedFields = [].concat(_toConsumableArray(clonedNode.querySelectorAll('input, textarea, select'))); // Convert NodeList to Array

          clonedFields.forEach(function (field, index) {
            if (field.type !== 'file' && fields[index]) {
              field.value = fields[index].value;
            }
          });

          _this.helper = _this.document.body.appendChild(clonedNode);

          _this.helper.style.position = 'fixed';
          _this.helper.style.top = _this.boundingClientRect.top - margin.top + 'px';
          _this.helper.style.left = _this.boundingClientRect.left - margin.left + 'px';
          _this.helper.style.width = _this.width + 'px';
          _this.helper.style.height = _this.height + 'px';
          _this.helper.style.boxSizing = 'border-box';
          _this.helper.style.pointerEvents = 'none';

          if (hideSortableGhost) {
            _this.sortableGhost = node;
            node.style.visibility = 'hidden';
            node.style.opacity = 0;
          }

          _this.minTranslate = {};
          _this.maxTranslate = {};
          if (_this.axis.x) {
            _this.minTranslate.x = (useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
            _this.maxTranslate.x = (useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
          }
          if (_this.axis.y) {
            _this.minTranslate.y = (useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
            _this.maxTranslate.y = (useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
          }

          if (helperClass) {
            var _this$helper$classLis;

            (_this$helper$classLis = _this.helper.classList).add.apply(_this$helper$classLis, _toConsumableArray(helperClass.split(' ')));
          }

          _this.listenerNode = event.touches ? node : _this.contentWindow;
          _utils.events.move.forEach(function (eventName) {
            return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
          });
          _utils.events.end.forEach(function (eventName) {
            return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
          });

          _this.setState({
            sorting: true,
            sortingIndex: index
          });

          if (onSortStart) {
            onSortStart({ node: node, index: index, collection: collection }, event);
          }
        }
      };

      _this.handleSortMove = function (event) {
        var onSortMove = _this.props.onSortMove;

        event.preventDefault(); // Prevent scrolling on mobile

        _this.updatePosition(event);
        _this.animateNodes();
        _this.autoscroll();

        if (onSortMove) {
          onSortMove(event);
        }
      };

      _this.handleSortEnd = function (event) {
        var _this$props4 = _this.props,
            hideSortableGhost = _this$props4.hideSortableGhost,
            onSortEnd = _this$props4.onSortEnd;
        var collection = _this.manager.active.collection;

        // Remove the event listeners if the node is still in the DOM

        if (_this.listenerNode) {
          _utils.events.move.forEach(function (eventName) {
            return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
          });
          _utils.events.end.forEach(function (eventName) {
            return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
          });
        }

        // Remove the helper from the DOM
        _this.helper.parentNode.removeChild(_this.helper);

        if (hideSortableGhost && _this.sortableGhost) {
          _this.sortableGhost.style.visibility = '';
          _this.sortableGhost.style.opacity = '';
        }

        var nodes = _this.manager.refs[collection];
        for (var i = 0, len = nodes.length; i < len; i++) {
          var node = nodes[i];
          var el = node.node;

          // Clear the cached offsetTop / offsetLeft value
          node.edgeOffset = null;

          // Remove the transforms / transitions
          el.style[_utils.vendorPrefix + 'Transform'] = '';
          el.style[_utils.vendorPrefix + 'TransitionDuration'] = '';
        }

        // Stop autoscroll
        clearInterval(_this.autoscrollInterval);
        _this.autoscrollInterval = null;

        // Update state
        _this.manager.active = null;

        _this.setState({
          sorting: false,
          sortingIndex: null
        });

        if (typeof onSortEnd === 'function') {
          onSortEnd({
            oldIndex: _this.index,
            newIndex: _this.newIndex,
            collection: collection
          }, event);
        }

        _this._touched = false;
      };

      _this.autoscroll = function () {
        var translate = _this.translate;
        var direction = {
          x: 0,
          y: 0
        };
        var speed = {
          x: 1,
          y: 1
        };
        var acceleration = {
          x: 10,
          y: 10
        };

        if (translate.y >= _this.maxTranslate.y - _this.height / 2) {
          direction.y = 1; // Scroll Down
          speed.y = acceleration.y * Math.abs((_this.maxTranslate.y - _this.height / 2 - translate.y) / _this.height);
        } else if (translate.x >= _this.maxTranslate.x - _this.width / 2) {
          direction.x = 1; // Scroll Right
          speed.x = acceleration.x * Math.abs((_this.maxTranslate.x - _this.width / 2 - translate.x) / _this.width);
        } else if (translate.y <= _this.minTranslate.y + _this.height / 2) {
          direction.y = -1; // Scroll Up
          speed.y = acceleration.y * Math.abs((translate.y - _this.height / 2 - _this.minTranslate.y) / _this.height);
        } else if (translate.x <= _this.minTranslate.x + _this.width / 2) {
          direction.x = -1; // Scroll Left
          speed.x = acceleration.x * Math.abs((translate.x - _this.width / 2 - _this.minTranslate.x) / _this.width);
        }

        if (_this.autoscrollInterval) {
          clearInterval(_this.autoscrollInterval);
          _this.autoscrollInterval = null;
          _this.isAutoScrolling = false;
        }

        if (direction.x !== 0 || direction.y !== 0) {
          _this.autoscrollInterval = setInterval(function () {
            _this.isAutoScrolling = true;
            var offset = {
              left: 1 * speed.x * direction.x,
              top: 1 * speed.y * direction.y
            };
            _this.scrollContainer.scrollTop += offset.top;
            _this.scrollContainer.scrollLeft += offset.left;
            _this.translate.x += offset.left;
            _this.translate.y += offset.top;
            _this.animateNodes();
          }, 5);
        }
      };

      _this.manager = new _Manager2.default();
      _this.events = {
        start: _this.handleStart,
        move: _this.handleMove,
        end: _this.handleEnd
      };

      (0, _invariant2.default)(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');

      _this.state = {};
      return _this;
    }

    _createClass(_class, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          manager: this.manager
        };
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;

        /*
         *  Set our own default rather than using defaultProps because Jest
         *  snapshots will serialize window, causing a RangeError
         *  https://github.com/clauderic/react-sortable-hoc/issues/249
         */

        var container = this.getContainer();

        Promise.resolve(container).then(function (containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;

          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;

          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : _this2.container;

          var _loop = function _loop(key) {
            if (_this2.events.hasOwnProperty(key)) {
              _utils.events[key].forEach(function (eventName) {
                return _this2.container.addEventListener(eventName, _this2.events[key], false);
              });
            }
          };

          for (var key in _this2.events) {
            _loop(key);
          }
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this3 = this;

        if (this.container) {
          var _loop2 = function _loop2(key) {
            if (_this3.events.hasOwnProperty(key)) {
              _utils.events[key].forEach(function (eventName) {
                return _this3.container.removeEventListener(eventName, _this3.events[key]);
              });
            }
          };

          for (var key in this.events) {
            _loop2(key);
          }
        }
      }
    }, {
      key: 'getLockPixelOffsets',
      value: function getLockPixelOffsets() {
        var width = this.width,
            height = this.height;
        var lockOffset = this.props.lockOffset;

        var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];

        (0, _invariant2.default)(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);

        var _offsets = _slicedToArray(offsets, 2),
            minLockOffset = _offsets[0],
            maxLockOffset = _offsets[1];

        return [(0, _utils.getLockPixelOffset)({ lockOffset: minLockOffset, width: width, height: height }), (0, _utils.getLockPixelOffset)({ lockOffset: maxLockOffset, width: width, height: height })];
      }
    }, {
      key: 'updatePosition',
      value: function updatePosition(event) {
        var _props = this.props,
            lockAxis = _props.lockAxis,
            lockToContainerEdges = _props.lockToContainerEdges;


        var offset = (0, _utils.getPosition)(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };

        // Adjust for window scroll
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;

        this.translate = translate;

        if (lockToContainerEdges) {
          var _getLockPixelOffsets = this.getLockPixelOffsets(),
              _getLockPixelOffsets2 = _slicedToArray(_getLockPixelOffsets, 2),
              minLockOffset = _getLockPixelOffsets2[0],
              maxLockOffset = _getLockPixelOffsets2[1];

          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };

          translate.x = (0, _utils.limit)(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = (0, _utils.limit)(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }

        if (lockAxis === 'x') {
          translate.y = 0;
        } else if (lockAxis === 'y') {
          translate.x = 0;
        }

        this.helper.style[_utils.vendorPrefix + 'Transform'] = 'translate3d(' + translate.x + 'px,' + translate.y + 'px, 0)';
      }
    }, {
      key: 'animateNodes',
      value: function animateNodes() {
        var _props2 = this.props,
            transitionDuration = _props2.transitionDuration,
            hideSortableGhost = _props2.hideSortableGhost,
            onSortOver = _props2.onSortOver;

        var nodes = this.manager.getOrderedRefs();
        var containerScrollDelta = {
          left: this.container.scrollLeft - this.initialScroll.left,
          top: this.container.scrollTop - this.initialScroll.top
        };
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var windowScrollDelta = {
          top: window.pageYOffset - this.initialWindowScroll.top,
          left: window.pageXOffset - this.initialWindowScroll.left
        };
        var prevIndex = this.newIndex;
        this.newIndex = null;

        for (var i = 0, len = nodes.length; i < len; i++) {
          var node = nodes[i].node;

          var index = node.sortableInfo.index;
          var width = node.offsetWidth;
          var height = node.offsetHeight;
          var offset = {
            width: this.width > width ? width / 2 : this.width / 2,
            height: this.height > height ? height / 2 : this.height / 2
          };

          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;

          // If we haven't cached the node's offsetTop / offsetLeft value

          if (!edgeOffset) {
            nodes[i].edgeOffset = edgeOffset = (0, _utils.getEdgeOffset)(node, this.container);
          }

          // Get a reference to the next and previous node
          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];

          // Also cache the next node's edge offset if needed.
          // We need this for calculating the animation in a grid setup
          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = (0, _utils.getEdgeOffset)(nextNode.node, this.container);
          }

          // If the node is the one we're currently animating, skip it
          if (index === this.index) {
            if (hideSortableGhost) {
              /*
              * With windowing libraries such as `react-virtualized`, the sortableGhost
              * node may change while scrolling down and then back up (or vice-versa),
              * so we need to update the reference to the new node just to be safe.
              */
              this.sortableGhost = node;
              node.style.visibility = 'hidden';
              node.style.opacity = 0;
            }
            continue;
          }

          if (transitionDuration) {
            node.style[_utils.vendorPrefix + 'TransitionDuration'] = transitionDuration + 'ms';
          }

          if (this.axis.x) {
            if (this.axis.y) {
              // Calculations for a grid setup
              if (index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                // If the current node is to the left on the same row, or above the node that's being dragged
                // then move it to the right
                translate.x = this.width + this.marginOffset.x;
                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  // If it moves passed the right bounds, then animate it to the first position of the next row.
                  // We just use the offset of the next node to calculate where to move, because that node's original position
                  // is exactly where we want to go
                  translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                  translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                }
                if (this.newIndex === null) {
                  this.newIndex = index;
                }
              } else if (index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                // If the current node is to the right on the same row, or below the node that's being dragged
                // then move it to the left
                translate.x = -(this.width + this.marginOffset.x);
                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  // If it moves passed the left bounds, then animate it to the last position of the previous row.
                  // We just use the offset of the previous node to calculate where to move, because that node's original position
                  // is exactly where we want to go
                  translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                  translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                }
                this.newIndex = index;
              }
            } else {
              if (index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index;
              } else if (index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;
                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
          } else if (this.axis.y) {
            if (index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index;
            } else if (index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;
              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }
          node.style[_utils.vendorPrefix + 'Transform'] = 'translate3d(' + translate.x + 'px,' + translate.y + 'px,0)';
        }

        if (this.newIndex == null) {
          this.newIndex = this.index;
        }

        if (onSortOver && this.newIndex !== prevIndex) {
          onSortOver({
            newIndex: this.newIndex,
            oldIndex: prevIndex,
            index: this.index,
            collection: this.manager.active.collection
          });
        }
      }
    }, {
      key: 'getWrappedInstance',
      value: function getWrappedInstance() {
        (0, _invariant2.default)(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');

        return this.refs.wrappedInstance;
      }
    }, {
      key: 'getContainer',
      value: function getContainer() {
        var getContainer = this.props.getContainer;


        if (typeof getContainer !== 'function') {
          return (0, _reactDom.findDOMNode)(this);
        }

        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
      }
    }, {
      key: 'render',
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;

        return _react2.default.createElement(WrappedComponent, _extends({
          ref: ref
        }, (0, _utils.omit)(this.props, 'contentWindow', 'useWindowAsScrollContainer', 'distance', 'helperClass', 'hideSortableGhost', 'transitionDuration', 'useDragHandle', 'pressDelay', 'pressThreshold', 'shouldCancelStart', 'onSortStart', 'onSortMove', 'onSortEnd', 'axis', 'lockAxis', 'lockOffset', 'lockToContainerEdges', 'getContainer', 'getHelperDimensions')));
      }
    }]);

    return _class;
  }(_react.Component), _class.displayName = (0, _utils.provideDisplayName)('sortableList', WrappedComponent), _class.defaultProps = {
    axis: 'y',
    transitionDuration: 300,
    pressDelay: 0,
    pressThreshold: 5,
    distance: 0,
    useWindowAsScrollContainer: false,
    hideSortableGhost: true,
    shouldCancelStart: function shouldCancelStart(e) {
      // Cancel sorting if the event target is an `input`, `textarea`, `select` or `option`
      var disabledElements = ['input', 'textarea', 'select', 'option', 'button'];

      if (disabledElements.indexOf(e.target.tagName.toLowerCase()) !== -1) {
        return true; // Return true to cancel sorting
      }
    },
    lockToContainerEdges: false,
    lockOffset: '50%',
    getHelperDimensions: function getHelperDimensions(_ref) {
      var node = _ref.node;
      return {
        width: node.offsetWidth,
        height: node.offsetHeight
      };
    }
  }, _class.propTypes = {
    axis: _propTypes2.default.oneOf(['x', 'y', 'xy']),
    distance: _propTypes2.default.number,
    lockAxis: _propTypes2.default.string,
    helperClass: _propTypes2.default.string,
    transitionDuration: _propTypes2.default.number,
    contentWindow: _propTypes2.default.any,
    onSortStart: _propTypes2.default.func,
    onSortMove: _propTypes2.default.func,
    onSortOver: _propTypes2.default.func,
    onSortEnd: _propTypes2.default.func,
    shouldCancelStart: _propTypes2.default.func,
    pressDelay: _propTypes2.default.number,
    useDragHandle: _propTypes2.default.bool,
    useWindowAsScrollContainer: _propTypes2.default.bool,
    hideSortableGhost: _propTypes2.default.bool,
    lockToContainerEdges: _propTypes2.default.bool,
    lockOffset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]))]),
    getContainer: _propTypes2.default.func,
    getHelperDimensions: _propTypes2.default.func
  }, _class.childContextTypes = {
    manager: _propTypes2.default.object.isRequired
  }, _temp;
}

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manager = function () {
  function Manager() {
    _classCallCheck(this, Manager);

    this.refs = {};
  }

  _createClass(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(
      // eslint-disable-next-line eqeqeq
      function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;

      return this.refs[collection].sort(sortByIndex);
    }
  }]);

  return Manager;
}();

exports.default = Manager;


function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;

  return index1 - index2;
}

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = sortableElement;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(5);

var _invariant = __webpack_require__(301);

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = __webpack_require__(722);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Export Higher Order Sortable Element Component
function sortableElement(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { withRef: false };

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            collection = _props.collection,
            disabled = _props.disabled,
            index = _props.index;


        if (!disabled) {
          this.setDraggable(collection, index);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.index !== nextProps.index && this.node) {
          this.node.sortableInfo.index = nextProps.index;
        }
        if (this.props.disabled !== nextProps.disabled) {
          var collection = nextProps.collection,
              disabled = nextProps.disabled,
              index = nextProps.index;

          if (disabled) {
            this.removeDraggable(collection);
          } else {
            this.setDraggable(collection, index);
          }
        } else if (this.props.collection !== nextProps.collection) {
          this.removeDraggable(this.props.collection);
          this.setDraggable(nextProps.collection, nextProps.index);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _props2 = this.props,
            collection = _props2.collection,
            disabled = _props2.disabled;


        if (!disabled) this.removeDraggable(collection);
      }
    }, {
      key: 'setDraggable',
      value: function setDraggable(collection, index) {
        var node = this.node = (0, _reactDom.findDOMNode)(this);

        node.sortableInfo = {
          index: index,
          collection: collection,
          manager: this.context.manager
        };

        this.ref = { node: node };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: 'removeDraggable',
      value: function removeDraggable(collection) {
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: 'getWrappedInstance',
      value: function getWrappedInstance() {
        (0, _invariant2.default)(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: 'render',
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;

        return _react2.default.createElement(WrappedComponent, _extends({
          ref: ref
        }, (0, _utils.omit)(this.props, 'collection', 'disabled', 'index')));
      }
    }]);

    return _class;
  }(_react.Component), _class.displayName = (0, _utils.provideDisplayName)('sortableElement', WrappedComponent), _class.contextTypes = {
    manager: _propTypes2.default.object.isRequired
  }, _class.propTypes = {
    index: _propTypes2.default.number.isRequired,
    collection: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    disabled: _propTypes2.default.bool
  }, _class.defaultProps = {
    collection: 0
  }, _temp;
}

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = sortableHandle;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _invariant = __webpack_require__(301);

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = __webpack_require__(722);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Export Higher Order Sortable Element Component
function sortableHandle(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { withRef: false };

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var node = (0, _reactDom.findDOMNode)(this);
        node.sortableHandle = true;
      }
    }, {
      key: 'getWrappedInstance',
      value: function getWrappedInstance() {
        (0, _invariant2.default)(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: 'render',
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;

        return _react2.default.createElement(WrappedComponent, _extends({ ref: ref }, this.props));
      }
    }]);

    return _class;
  }(_react.Component), _class.displayName = (0, _utils.provideDisplayName)('sortableHandle', WrappedComponent), _temp;
}

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const packageJson = __webpack_require__(922);

module.exports = name => packageJson(name.toLowerCase()).then(data => data.version);


/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const url = __webpack_require__(40);
const got = __webpack_require__(923);
const registryUrl = __webpack_require__(938);
const registryAuthToken = __webpack_require__(939);
const semver = __webpack_require__(117);

module.exports = (name, opts) => {
	const scope = name.split('/')[0];
	const regUrl = registryUrl(scope);
	const pkgUrl = url.resolve(regUrl, encodeURIComponent(name).replace(/^%40/, '@'));
	const authInfo = registryAuthToken(regUrl, {recursive: true});

	opts = Object.assign({
		version: 'latest'
	}, opts);

	const headers = {
		accept: 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*'
	};

	if (opts.fullMetadata) {
		delete headers.accept;
	}

	if (authInfo) {
		headers.authorization = `${authInfo.type} ${authInfo.token}`;
	}

	return got(pkgUrl, {json: true, headers})
		.then(res => {
			let data = res.body;
			let version = opts.version;

			if (opts.allVersions) {
				return data;
			}

			if (data['dist-tags'][version]) {
				data = data.versions[data['dist-tags'][version]];
			} else if (version) {
				if (!data.versions[version]) {
					const versions = Object.keys(data.versions);
					version = semver.maxSatisfying(versions, version);

					if (!version) {
						throw new Error('Version doesn\'t exist');
					}
				}

				data = data.versions[version];

				if (!data) {
					throw new Error('Version doesn\'t exist');
				}
			}

			return data;
		})
		.catch(err => {
			if (err.statusCode === 404) {
				throw new Error(`Package \`${name}\` doesn't exist`);
			}

			throw err;
		});
};


/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const EventEmitter = __webpack_require__(32);
const http = __webpack_require__(66);
const https = __webpack_require__(85);
const PassThrough = __webpack_require__(41).PassThrough;
const urlLib = __webpack_require__(40);
const querystring = __webpack_require__(103);
const duplexer3 = __webpack_require__(924);
const isStream = __webpack_require__(925);
const getStream = __webpack_require__(926);
const timedOut = __webpack_require__(928);
const urlParseLax = __webpack_require__(929);
const lowercaseKeys = __webpack_require__(931);
const isRedirect = __webpack_require__(932);
const unzipResponse = __webpack_require__(933);
const createErrorClass = __webpack_require__(934);
const isRetryAllowed = __webpack_require__(936);
const Buffer = __webpack_require__(50).Buffer;
const pkg = __webpack_require__(937);

function requestAsEventEmitter(opts) {
	opts = opts || {};

	const ee = new EventEmitter();
	const requestUrl = opts.href || urlLib.resolve(urlLib.format(opts), opts.path);
	let redirectCount = 0;
	let retryCount = 0;
	let redirectUrl;

	const get = opts => {
		const fn = opts.protocol === 'https:' ? https : http;

		const req = fn.request(opts, res => {
			const statusCode = res.statusCode;

			if (isRedirect(statusCode) && opts.followRedirect && 'location' in res.headers && (opts.method === 'GET' || opts.method === 'HEAD')) {
				res.resume();

				if (++redirectCount > 10) {
					ee.emit('error', new got.MaxRedirectsError(statusCode, opts), null, res);
					return;
				}

				const bufferString = Buffer.from(res.headers.location, 'binary').toString();

				redirectUrl = urlLib.resolve(urlLib.format(opts), bufferString);
				const redirectOpts = Object.assign({}, opts, urlLib.parse(redirectUrl));

				ee.emit('redirect', res, redirectOpts);

				get(redirectOpts);

				return;
			}

			setImmediate(() => {
				const response = typeof unzipResponse === 'function' && req.method !== 'HEAD' ? unzipResponse(res) : res;
				response.url = redirectUrl || requestUrl;
				response.requestUrl = requestUrl;

				ee.emit('response', response);
			});
		});

		req.once('error', err => {
			const backoff = opts.retries(++retryCount, err);

			if (backoff) {
				setTimeout(get, backoff, opts);
				return;
			}

			ee.emit('error', new got.RequestError(err, opts));
		});

		if (opts.gotTimeout) {
			timedOut(req, opts.gotTimeout);
		}

		setImmediate(() => {
			ee.emit('request', req);
		});
	};

	get(opts);
	return ee;
}

function asPromise(opts) {
	return new Promise((resolve, reject) => {
		const ee = requestAsEventEmitter(opts);

		ee.on('request', req => {
			if (isStream(opts.body)) {
				opts.body.pipe(req);
				opts.body = undefined;
				return;
			}

			req.end(opts.body);
		});

		ee.on('response', res => {
			const stream = opts.encoding === null ? getStream.buffer(res) : getStream(res, opts);

			stream
				.catch(err => reject(new got.ReadError(err, opts)))
				.then(data => {
					const statusCode = res.statusCode;
					const limitStatusCode = opts.followRedirect ? 299 : 399;

					res.body = data;

					if (opts.json && res.body) {
						try {
							res.body = JSON.parse(res.body);
						} catch (e) {
							throw new got.ParseError(e, statusCode, opts, data);
						}
					}

					if (statusCode < 200 || statusCode > limitStatusCode) {
						throw new got.HTTPError(statusCode, opts);
					}

					resolve(res);
				})
				.catch(err => {
					Object.defineProperty(err, 'response', {value: res});
					reject(err);
				});
		});

		ee.on('error', reject);
	});
}

function asStream(opts) {
	const input = new PassThrough();
	const output = new PassThrough();
	const proxy = duplexer3(input, output);

	if (opts.json) {
		throw new Error('got can not be used as stream when options.json is used');
	}

	if (opts.body) {
		proxy.write = () => {
			throw new Error('got\'s stream is not writable when options.body is used');
		};
	}

	const ee = requestAsEventEmitter(opts);

	ee.on('request', req => {
		proxy.emit('request', req);

		if (isStream(opts.body)) {
			opts.body.pipe(req);
			return;
		}

		if (opts.body) {
			req.end(opts.body);
			return;
		}

		if (opts.method === 'POST' || opts.method === 'PUT' || opts.method === 'PATCH') {
			input.pipe(req);
			return;
		}

		req.end();
	});

	ee.on('response', res => {
		const statusCode = res.statusCode;

		res.pipe(output);

		if (statusCode < 200 || statusCode > 299) {
			proxy.emit('error', new got.HTTPError(statusCode, opts), null, res);
			return;
		}

		proxy.emit('response', res);
	});

	ee.on('redirect', proxy.emit.bind(proxy, 'redirect'));
	ee.on('error', proxy.emit.bind(proxy, 'error'));

	return proxy;
}

function normalizeArguments(url, opts) {
	if (typeof url !== 'string' && typeof url !== 'object') {
		throw new Error(`Parameter \`url\` must be a string or object, not ${typeof url}`);
	}

	if (typeof url === 'string') {
		url = url.replace(/^unix:/, 'http://$&');
		url = urlParseLax(url);

		if (url.auth) {
			throw new Error('Basic authentication must be done with auth option');
		}
	}

	opts = Object.assign(
		{
			protocol: 'http:',
			path: '',
			retries: 5
		},
		url,
		opts
	);

	opts.headers = Object.assign({
		'user-agent': `${pkg.name}/${pkg.version} (https://github.com/sindresorhus/got)`,
		'accept-encoding': 'gzip,deflate'
	}, lowercaseKeys(opts.headers));

	const query = opts.query;

	if (query) {
		if (typeof query !== 'string') {
			opts.query = querystring.stringify(query);
		}

		opts.path = `${opts.path.split('?')[0]}?${opts.query}`;
		delete opts.query;
	}

	if (opts.json && opts.headers.accept === undefined) {
		opts.headers.accept = 'application/json';
	}

	let body = opts.body;

	if (body) {
		if (typeof body !== 'string' && !(body !== null && typeof body === 'object')) {
			throw new Error('options.body must be a ReadableStream, string, Buffer or plain Object');
		}

		opts.method = opts.method || 'POST';

		if (isStream(body) && typeof body.getBoundary === 'function') {
			// Special case for https://github.com/form-data/form-data
			opts.headers['content-type'] = opts.headers['content-type'] || `multipart/form-data; boundary=${body.getBoundary()}`;
		} else if (body !== null && typeof body === 'object' && !Buffer.isBuffer(body) && !isStream(body)) {
			opts.headers['content-type'] = opts.headers['content-type'] || 'application/x-www-form-urlencoded';
			body = opts.body = querystring.stringify(body);
		}

		if (opts.headers['content-length'] === undefined && opts.headers['transfer-encoding'] === undefined && !isStream(body)) {
			const length = typeof body === 'string' ? Buffer.byteLength(body) : body.length;
			opts.headers['content-length'] = length;
		}
	}

	opts.method = (opts.method || 'GET').toUpperCase();

	if (opts.hostname === 'unix') {
		const matches = /(.+):(.+)/.exec(opts.path);

		if (matches) {
			opts.socketPath = matches[1];
			opts.path = matches[2];
			opts.host = null;
		}
	}

	if (typeof opts.retries !== 'function') {
		const retries = opts.retries;

		opts.retries = (iter, err) => {
			if (iter > retries || !isRetryAllowed(err)) {
				return 0;
			}

			const noise = Math.random() * 100;

			return ((1 << iter) * 1000) + noise;
		};
	}

	if (opts.followRedirect === undefined) {
		opts.followRedirect = true;
	}

	if (opts.timeout) {
		opts.gotTimeout = opts.timeout;
		delete opts.timeout;
	}

	return opts;
}

function got(url, opts) {
	try {
		return asPromise(normalizeArguments(url, opts));
	} catch (err) {
		return Promise.reject(err);
	}
}

const helpers = [
	'get',
	'post',
	'put',
	'patch',
	'head',
	'delete'
];

helpers.forEach(el => {
	got[el] = (url, opts) => got(url, Object.assign({}, opts, {method: el}));
});

got.stream = (url, opts) => asStream(normalizeArguments(url, opts));

for (const el of helpers) {
	got.stream[el] = (url, opts) => got.stream(url, Object.assign({}, opts, {method: el}));
}

function stdError(error, opts) {
	if (error.code !== undefined) {
		this.code = error.code;
	}

	Object.assign(this, {
		message: error.message,
		host: opts.host,
		hostname: opts.hostname,
		method: opts.method,
		path: opts.path
	});
}

got.RequestError = createErrorClass('RequestError', stdError);
got.ReadError = createErrorClass('ReadError', stdError);
got.ParseError = createErrorClass('ParseError', function (e, statusCode, opts, data) {
	stdError.call(this, e, opts);
	this.statusCode = statusCode;
	this.statusMessage = http.STATUS_CODES[this.statusCode];
	this.message = `${e.message} in "${urlLib.format(opts)}": \n${data.slice(0, 77)}...`;
});

got.HTTPError = createErrorClass('HTTPError', function (statusCode, opts) {
	stdError.call(this, {}, opts);
	this.statusCode = statusCode;
	this.statusMessage = http.STATUS_CODES[this.statusCode];
	this.message = `Response code ${this.statusCode} (${this.statusMessage})`;
});

got.MaxRedirectsError = createErrorClass('MaxRedirectsError', function (statusCode, opts) {
	stdError.call(this, {}, opts);
	this.statusCode = statusCode;
	this.statusMessage = http.STATUS_CODES[this.statusCode];
	this.message = 'Redirected 10 times. Aborting.';
});

module.exports = got;


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stream = __webpack_require__(41);

function DuplexWrapper(options, writable, readable) {
  if (typeof readable === "undefined") {
    readable = writable;
    writable = options;
    options = null;
  }

  stream.Duplex.call(this, options);

  if (typeof readable.read !== "function") {
    readable = (new stream.Readable(options)).wrap(readable);
  }

  this._writable = writable;
  this._readable = readable;
  this._waiting = false;

  var self = this;

  writable.once("finish", function() {
    self.end();
  });

  this.once("finish", function() {
    writable.end();
  });

  readable.on("readable", function() {
    if (self._waiting) {
      self._waiting = false;
      self._read();
    }
  });

  readable.once("end", function() {
    self.push(null);
  });

  if (!options || typeof options.bubbleErrors === "undefined" || options.bubbleErrors) {
    writable.on("error", function(err) {
      self.emit("error", err);
    });

    readable.on("error", function(err) {
      self.emit("error", err);
    });
  }
}

DuplexWrapper.prototype = Object.create(stream.Duplex.prototype, {constructor: {value: DuplexWrapper}});

DuplexWrapper.prototype._write = function _write(input, encoding, done) {
  this._writable.write(input, encoding, done);
};

DuplexWrapper.prototype._read = function _read() {
  var buf;
  var reads = 0;
  while ((buf = this._readable.read()) !== null) {
    this.push(buf);
    reads++;
  }
  if (reads === 0) {
    this._waiting = true;
  }
};

module.exports = function duplex2(options, writable, readable) {
  return new DuplexWrapper(options, writable, readable);
};

module.exports.DuplexWrapper = DuplexWrapper;


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isStream = module.exports = function (stream) {
	return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
};

isStream.writable = function (stream) {
	return isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
};

isStream.readable = function (stream) {
	return isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
};

isStream.duplex = function (stream) {
	return isStream.writable(stream) && isStream.readable(stream);
};

isStream.transform = function (stream) {
	return isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
};


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const bufferStream = __webpack_require__(927);

function getStream(inputStream, opts) {
	if (!inputStream) {
		return Promise.reject(new Error('Expected a stream'));
	}

	opts = Object.assign({maxBuffer: Infinity}, opts);

	const maxBuffer = opts.maxBuffer;
	let stream;
	let clean;

	const p = new Promise((resolve, reject) => {
		const error = err => {
			if (err) { // null check
				err.bufferedData = stream.getBufferedValue();
			}

			reject(err);
		};

		stream = bufferStream(opts);
		inputStream.once('error', error);
		inputStream.pipe(stream);

		stream.on('data', () => {
			if (stream.getBufferedLength() > maxBuffer) {
				reject(new Error('maxBuffer exceeded'));
			}
		});
		stream.once('error', error);
		stream.on('end', resolve);

		clean = () => {
			// some streams doesn't implement the `stream.Readable` interface correctly
			if (inputStream.unpipe) {
				inputStream.unpipe(stream);
			}
		};
	});

	p.then(clean, clean);

	return p.then(() => stream.getBufferedValue());
}

module.exports = getStream;
module.exports.buffer = (stream, opts) => getStream(stream, Object.assign({}, opts, {encoding: 'buffer'}));
module.exports.array = (stream, opts) => getStream(stream, Object.assign({}, opts, {array: true}));


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const PassThrough = __webpack_require__(41).PassThrough;

module.exports = opts => {
	opts = Object.assign({}, opts);

	const array = opts.array;
	let encoding = opts.encoding;
	const buffer = encoding === 'buffer';
	let objectMode = false;

	if (array) {
		objectMode = !(encoding || buffer);
	} else {
		encoding = encoding || 'utf8';
	}

	if (buffer) {
		encoding = null;
	}

	let len = 0;
	const ret = [];
	const stream = new PassThrough({objectMode});

	if (encoding) {
		stream.setEncoding(encoding);
	}

	stream.on('data', chunk => {
		ret.push(chunk);

		if (objectMode) {
			len = ret.length;
		} else {
			len += chunk.length;
		}
	});

	stream.getBufferedValue = () => {
		if (array) {
			return ret;
		}

		return buffer ? Buffer.concat(ret, len) : ret.join('');
	};

	stream.getBufferedLength = () => len;

	return stream;
};


/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (req, time) {
	if (req.timeoutTimer) {
		return req;
	}

	var delays = isNaN(time) ? time : {socket: time, connect: time};
	var host = req._headers ? (' to ' + req._headers.host) : '';

	if (delays.connect !== undefined) {
		req.timeoutTimer = setTimeout(function timeoutHandler() {
			req.abort();
			var e = new Error('Connection timed out on request' + host);
			e.code = 'ETIMEDOUT';
			req.emit('error', e);
		}, delays.connect);
	}

	// Clear the connection timeout timer once a socket is assigned to the
	// request and is connected.
	req.on('socket', function assign(socket) {
		// Socket may come from Agent pool and may be already connected.
		if (!(socket.connecting || socket._connecting)) {
			connect();
			return;
		}

		socket.once('connect', connect);
	});

	function clear() {
		if (req.timeoutTimer) {
			clearTimeout(req.timeoutTimer);
			req.timeoutTimer = null;
		}
	}

	function connect() {
		clear();

		if (delays.socket !== undefined) {
			// Abort the request if there is no activity on the socket for more
			// than `delays.socket` milliseconds.
			req.setTimeout(delays.socket, function socketTimeoutHandler() {
				req.abort();
				var e = new Error('Socket timed out on request' + host);
				e.code = 'ESOCKETTIMEDOUT';
				req.emit('error', e);
			});
		}
	}

	return req.on('error', clear);
};


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var url = __webpack_require__(40);
var prependHttp = __webpack_require__(930);

module.exports = function (x) {
	var withProtocol = prependHttp(x);
	var parsed = url.parse(withProtocol);

	if (withProtocol !== x) {
		parsed.protocol = null;
	}

	return parsed;
};


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (url) {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string, got ' + typeof url);
	}

	url = url.trim();

	if (/^\.*\/|^(?!localhost)\w+:/.test(url)) {
		return url;
	}

	return url.replace(/^(?!(?:\w+:)?\/\/)/, 'http://');
};


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (obj) {
	var ret = {};
	var keys = Object.keys(Object(obj));

	for (var i = 0; i < keys.length; i++) {
		ret[keys[i].toLowerCase()] = obj[keys[i]];
	}

	return ret;
};


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	if (typeof x !== 'number') {
		throw new TypeError('Expected a number');
	}

	return x === 300 ||
		x === 301 ||
		x === 302 ||
		x === 303 ||
		x === 305 ||
		x === 307 ||
		x === 308;
};


/***/ }),

/***/ 933:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var captureStackTrace = __webpack_require__(935);

function inherits(ctor, superCtor) {
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype, {
		constructor: {
			value: ctor,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
}

module.exports = function createErrorClass(className, setup) {
	if (typeof className !== 'string') {
		throw new TypeError('Expected className to be a string');
	}

	if (/[^0-9a-zA-Z_$]/.test(className)) {
		throw new Error('className contains invalid characters');
	}

	setup = setup || function (message) {
		this.message = message;
	};

	var ErrorClass = function () {
		Object.defineProperty(this, 'name', {
			configurable: true,
			value: className,
			writable: true
		});

		captureStackTrace(this, this.constructor);

		setup.apply(this, arguments);
	};

	inherits(ErrorClass, Error);

	return ErrorClass;
};


/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Error.captureStackTrace || function (error) {
	var container = new Error();

	Object.defineProperty(error, 'stack', {
		configurable: true,
		get: function getStack() {
			var stack = container.stack;

			Object.defineProperty(this, 'stack', {
				value: stack
			});

			return stack;
		}
	});
};


/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WHITELIST = [
	'ETIMEDOUT',
	'ECONNRESET',
	'EADDRINUSE',
	'ESOCKETTIMEDOUT',
	'ECONNREFUSED',
	'EPIPE'
];

var BLACKLIST = [
	'ENOTFOUND',
	'ENETUNREACH',

	// SSL errors from https://github.com/nodejs/node/blob/ed3d8b13ee9a705d89f9e0397d9e96519e7e47ac/src/node_crypto.cc#L1950
	'UNABLE_TO_GET_ISSUER_CERT',
	'UNABLE_TO_GET_CRL',
	'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
	'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
	'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
	'CERT_SIGNATURE_FAILURE',
	'CRL_SIGNATURE_FAILURE',
	'CERT_NOT_YET_VALID',
	'CERT_HAS_EXPIRED',
	'CRL_NOT_YET_VALID',
	'CRL_HAS_EXPIRED',
	'ERROR_IN_CERT_NOT_BEFORE_FIELD',
	'ERROR_IN_CERT_NOT_AFTER_FIELD',
	'ERROR_IN_CRL_LAST_UPDATE_FIELD',
	'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
	'OUT_OF_MEM',
	'DEPTH_ZERO_SELF_SIGNED_CERT',
	'SELF_SIGNED_CERT_IN_CHAIN',
	'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
	'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
	'CERT_CHAIN_TOO_LONG',
	'CERT_REVOKED',
	'INVALID_CA',
	'PATH_LENGTH_EXCEEDED',
	'INVALID_PURPOSE',
	'CERT_UNTRUSTED',
	'CERT_REJECTED'
];

module.exports = function (err) {
	if (!err || !err.code) {
		return true;
	}

	if (WHITELIST.indexOf(err.code) !== -1) {
		return true;
	}

	if (BLACKLIST.indexOf(err.code) !== -1) {
		return false;
	}

	return true;
};


/***/ }),

/***/ 937:
/***/ (function(module) {

module.exports = {"name":"got","version":"6.7.1","description":"Simplified HTTP requests","license":"MIT","repository":"sindresorhus/got","maintainers":[{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},{"name":"Vsevolod Strukchinsky","email":"floatdrop@gmail.com","url":"github.com/floatdrop"}],"engines":{"node":">=4"},"browser":{"unzip-response":false},"scripts":{"test":"xo && nyc ava","coveralls":"nyc report --reporter=text-lcov | coveralls"},"files":["index.js"],"keywords":["http","https","get","got","url","uri","request","util","utility","simple","curl","wget","fetch"],"dependencies":{"create-error-class":"^3.0.0","duplexer3":"^0.1.4","get-stream":"^3.0.0","is-redirect":"^1.0.0","is-retry-allowed":"^1.0.0","is-stream":"^1.0.0","lowercase-keys":"^1.0.0","safe-buffer":"^5.0.1","timed-out":"^4.0.0","unzip-response":"^2.0.1","url-parse-lax":"^1.0.0"},"devDependencies":{"ava":"^0.17.0","coveralls":"^2.11.4","form-data":"^2.1.1","get-port":"^2.0.0","into-stream":"^3.0.0","nyc":"^10.0.0","pem":"^1.4.4","pify":"^2.3.0","tempfile":"^1.1.1","xo":"*"},"xo":{"esnext":true},"ava":{"concurrency":4}};

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (scope) {
	var rc = __webpack_require__(810)('npm', {registry: 'https://registry.npmjs.org/'});
	var url = rc[scope + ':registry'] || rc.registry;
	return url.slice(-1) === '/' ? url : url + '/';
};


/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(40)
var base64 = __webpack_require__(940)

var decodeBase64 = base64.decodeBase64
var encodeBase64 = base64.encodeBase64

var tokenKey = ':_authToken'
var userKey = ':username'
var passwordKey = ':_password'

module.exports = function () {
  var checkUrl
  var options
  if (arguments.length >= 2) {
    checkUrl = arguments[0]
    options = arguments[1]
  } else if (typeof arguments[0] === 'string') {
    checkUrl = arguments[0]
  } else {
    options = arguments[0]
  }
  options = options || {}
  options.npmrc = options.npmrc || __webpack_require__(810)('npm', {registry: 'https://registry.npmjs.org/'})
  checkUrl = checkUrl || options.npmrc.registry
  return getRegistryAuthInfo(checkUrl, options) || getLegacyAuthInfo(options.npmrc)
}

function getRegistryAuthInfo (checkUrl, options) {
  var parsed = url.parse(checkUrl, false, true)
  var pathname

  while (pathname !== '/' && parsed.pathname !== pathname) {
    pathname = parsed.pathname || '/'

    var regUrl = '//' + parsed.host + pathname.replace(/\/$/, '')
    var authInfo = getAuthInfoForUrl(regUrl, options.npmrc)
    if (authInfo) {
      return authInfo
    }

    // break if not recursive
    if (!options.recursive) {
      return /\/$/.test(checkUrl)
        ? undefined
        : getRegistryAuthInfo(url.resolve(checkUrl, '.'), options)
    }

    parsed.pathname = url.resolve(normalizePath(pathname), '..') || '/'
  }

  return undefined
}

function getLegacyAuthInfo (npmrc) {
  if (npmrc._auth) {
    return {token: npmrc._auth, type: 'Basic'}
  }
  return undefined
}

function normalizePath (path) {
  return path[path.length - 1] === '/' ? path : path + '/'
}

function getAuthInfoForUrl (regUrl, npmrc) {
  // try to get bearer token
  var bearerAuth = getBearerToken(npmrc[regUrl + tokenKey] || npmrc[regUrl + '/' + tokenKey])
  if (bearerAuth) {
    return bearerAuth
  }

  // try to get basic token
  var username = npmrc[regUrl + userKey] || npmrc[regUrl + '/' + userKey]
  var password = npmrc[regUrl + passwordKey] || npmrc[regUrl + '/' + passwordKey]
  var basicAuth = getTokenForUsernameAndPassword(username, password)
  if (basicAuth) {
    return basicAuth
  }

  return undefined
}

function getBearerToken (tok) {
  if (!tok) {
    return undefined
  }

  // check if bearer token
  var token = tok.replace(/^\$\{?([^}]*)\}?$/, function (fullMatch, envVar) {
    return process.env[envVar]
  })

  return {token: token, type: 'Bearer'}
}

function getTokenForUsernameAndPassword (username, password) {
  if (!username || !password) {
    return undefined
  }

  // passwords are base64 encoded, so we need to decode it
  // See https://github.com/npm/npm/blob/v3.10.6/lib/config/set-credentials-by-uri.js#L26
  var pass = decodeBase64(password.replace(/^\$\{?([^}]*)\}?$/, function (fullMatch, envVar) {
    return process.env[envVar]
  }))

  // a basic auth token is base64 encoded 'username:password'
  // See https://github.com/npm/npm/blob/v3.10.6/lib/config/get-credentials-by-uri.js#L70
  var token = encodeBase64(username + ':' + pass)

  // we found a basicToken token so let's exit the loop
  return {
    token: token,
    type: 'Basic',
    password: pass,
    username: username
  }
}


/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

const safeBuffer = __webpack_require__(50).Buffer

function decodeBase64 (base64) {
  return safeBuffer.from(base64, 'base64').toString('utf8')
}

function encodeBase64 (string) {
  return safeBuffer.from(string, 'utf8').toString('base64')
}

module.exports = {
  decodeBase64: decodeBase64,
  encodeBase64: encodeBase64
}


/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);