"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRating = void 0;
var _renderTemplate = require("../../../../utils/renderTemplate.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var getFiles = (0, _renderTemplate.renderTemplate)("components/StarRating/StarRating.template.html", "components/StarRating/StarRating.styles.css");
var StarRating = exports.StarRating = /*#__PURE__*/function (_HTMLElement) {
  function StarRating() {
    var _this;
    _classCallCheck(this, StarRating);
    _this = _callSuper(this, StarRating);
    // shadow root
    _this._$root = _this.attachShadow({
      mode: "open"
    });

    // elements
    _this._$container = null;

    // data
    _this._disabled = false;
    _this._value = 0;

    // listeners
    _this._listener = null;
    return _this;
  }
  _inherits(StarRating, _HTMLElement);
  return _createClass(StarRating, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      this._listener = function (event) {
        if (_this2._disabled) return;
        _this2.value = event.target.getAttribute("data-value");
        _this2._render();
      };
      getFiles.then(function (template) {
        _this2._$root.appendChild(template.content.cloneNode(true));
        _this2._$container = _this2._$root.querySelector(".container");
        _this2._$container.addEventListener("click", _this2._listener);
        _this2._disabled = _this2.getAttribute("disabled") !== null;
        _this2._render();
      });
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (value === null) return;
      if (value === this._value) this._value = 0;else this._value = value;
      this.dispatchEvent(new Event("change"));
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      var _this3 = this;
      var attributes = {
        disabled: function disabled() {
          _this3._disabled = newValue !== null;
        },
        value: function value() {
          _this3.value = newValue;
          _this3._render();
        }
      };
      if (oldValue !== newValue) return attributes[attr]();
    }
  }, {
    key: "handleSelection",
    value: function handleSelection() {
      var _this4 = this;
      if (this._$container === null) return;
      this._$container.querySelectorAll("span").forEach(function (star) {
        var isSelectedStar = _this4.value == star.getAttribute("data-value");
        var isAlreadySelected = star.classList.contains("selected");
        if (!isSelectedStar || isAlreadySelected) star.classList.remove("selected");else star.classList.add("selected");
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      this.handleSelection();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this._$container.removeEventListener("click", this._listener);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["disabled", "value"];
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
window.customElements.define("star-rating", StarRating);