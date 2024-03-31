"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SideMenu", {
  enumerable: true,
  get: function get() {
    return _SideMenuComponent.SideMenu;
  }
});
Object.defineProperty(exports, "StarRating", {
  enumerable: true,
  get: function get() {
    return _StarRatingComponent.StarRating;
  }
});
var _SideMenuComponent = require("./components/SideMenu/SideMenu.component.js");
var _StarRatingComponent = require("./components/StarRating/StarRating.component.js");
var $starRating = document.querySelector("star-rating");
$starRating.addEventListener("change", function (event) {
  var value = event.target.value;
  console.log("change", value);
});