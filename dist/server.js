"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _index = require("../routes/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("../config/passport-setup");

_dotenv["default"].config();

var server = (0, _express["default"])();
server.use((0, _cors["default"])());
server.use((0, _helmet["default"])());
server.use((0, _morgan["default"])("combined"));
server.use(_passport["default"].initialize());
server.use("/", _index.User);
server.use("/auth", _index.Auth);
var _default = server;
exports["default"] = _default;