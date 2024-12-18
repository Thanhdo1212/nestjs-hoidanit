'use strict';

function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = 'function' == typeof Map ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ('function' != typeof t)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper.prototype = Object.create(t.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        _setPrototypeOf(Wrapper, t)
      );
    }),
    _wrapNativeSuper(t)
  );
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf('[native code]');
  } catch (n) {
    return 'function' == typeof t;
  }
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
customElements.define(
  'compodoc-menu',
  /*#__PURE__*/ (function (_HTMLElement) {
    function _class() {
      var _this;
      _classCallCheck(this, _class);
      _this = _callSuper(this, _class);
      _this.isNormalMode = _this.getAttribute('mode') === 'normal';
      return _this;
    }
    _inherits(_class, _HTMLElement);
    return _createClass(_class, [
      {
        key: 'connectedCallback',
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        },
      },
      {
        key: 'render',
        value: function render(isNormalMode) {
          var tp = lithtml.html(
            '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link"> documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
              .concat(
                isNormalMode
                  ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                  : '',
                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class="link">\n                                    <a href="properties.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-apps"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#modules-links"'
                  : 'data-bs-target="#xs-modules-links"',
                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                '>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-AppModule-b438ce0c2a66af1812cb06f7c8a11efc9d6e59fa456597d1ac9bf23ab29fc1719a0ae4e24dc0a2235fa3ff4f72ad4923343e6db06334fd9997b2cabb36d4422c"'
                  : 'data-bs-target="#xs-controllers-links-module-AppModule-b438ce0c2a66af1812cb06f7c8a11efc9d6e59fa456597d1ac9bf23ab29fc1719a0ae4e24dc0a2235fa3ff4f72ad4923343e6db06334fd9997b2cabb36d4422c"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-AppModule-b438ce0c2a66af1812cb06f7c8a11efc9d6e59fa456597d1ac9bf23ab29fc1719a0ae4e24dc0a2235fa3ff4f72ad4923343e6db06334fd9997b2cabb36d4422c"'
                  : 'id="xs-controllers-links-module-AppModule-b438ce0c2a66af1812cb06f7c8a11efc9d6e59fa456597d1ac9bf23ab29fc1719a0ae4e24dc0a2235fa3ff4f72ad4923343e6db06334fd9997b2cabb36d4422c"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-AppModule-b438ce0c2a66af1812cb06f7c8a11efc9d6e59fa456597d1ac9bf23ab29fc1719a0ae4e24dc0a2235fa3ff4f72ad4923343e6db06334fd9997b2cabb36d4422c"'
                  : 'data-bs-target="#xs-injectables-links-module-AppModule-b438ce0c2a66af1812cb06f7c8a11efc9d6e59fa456597d1ac9bf23ab29fc1719a0ae4e24dc0a2235fa3ff4f72ad4923343e6db06334fd9997b2cabb36d4422c"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AppModule-b438ce0c2a66af1812cb06f7c8a11efc9d6e59fa456597d1ac9bf23ab29fc1719a0ae4e24dc0a2235fa3ff4f72ad4923343e6db06334fd9997b2cabb36d4422c"'
                  : 'id="xs-injectables-links-module-AppModule-b438ce0c2a66af1812cb06f7c8a11efc9d6e59fa456597d1ac9bf23ab29fc1719a0ae4e24dc0a2235fa3ff4f72ad4923343e6db06334fd9997b2cabb36d4422c"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-AuthModule-4ce7b2d2209419da031c78899600d30f92ade625af525dce76fb9f03eb571b932642b1b583da3b401af2d76e106f9eed6d5f93140d75d74dc4a164f8b0c60e15"'
                  : 'data-bs-target="#xs-controllers-links-module-AuthModule-4ce7b2d2209419da031c78899600d30f92ade625af525dce76fb9f03eb571b932642b1b583da3b401af2d76e106f9eed6d5f93140d75d74dc4a164f8b0c60e15"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-AuthModule-4ce7b2d2209419da031c78899600d30f92ade625af525dce76fb9f03eb571b932642b1b583da3b401af2d76e106f9eed6d5f93140d75d74dc4a164f8b0c60e15"'
                  : 'id="xs-controllers-links-module-AuthModule-4ce7b2d2209419da031c78899600d30f92ade625af525dce76fb9f03eb571b932642b1b583da3b401af2d76e106f9eed6d5f93140d75d74dc4a164f8b0c60e15"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-AuthModule-4ce7b2d2209419da031c78899600d30f92ade625af525dce76fb9f03eb571b932642b1b583da3b401af2d76e106f9eed6d5f93140d75d74dc4a164f8b0c60e15"'
                  : 'data-bs-target="#xs-injectables-links-module-AuthModule-4ce7b2d2209419da031c78899600d30f92ade625af525dce76fb9f03eb571b932642b1b583da3b401af2d76e106f9eed6d5f93140d75d74dc4a164f8b0c60e15"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AuthModule-4ce7b2d2209419da031c78899600d30f92ade625af525dce76fb9f03eb571b932642b1b583da3b401af2d76e106f9eed6d5f93140d75d74dc4a164f8b0c60e15"'
                  : 'id="xs-injectables-links-module-AuthModule-4ce7b2d2209419da031c78899600d30f92ade625af525dce76fb9f03eb571b932642b1b583da3b401af2d76e106f9eed6d5f93140d75d74dc4a164f8b0c60e15"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"'
                  : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"'
                  : 'id="xs-controllers-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"'
                  : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"'
                  : 'id="xs-injectables-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-DatabasesModule-0d35987fb058b6e37d21ee3bde7411b07576f91090de39951c454f7883792aeed68afa94e9ba7379df6d1f1f7abc6f5482b5048026a3db11b2ce8277da7e5302"'
                  : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-0d35987fb058b6e37d21ee3bde7411b07576f91090de39951c454f7883792aeed68afa94e9ba7379df6d1f1f7abc6f5482b5048026a3db11b2ce8277da7e5302"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-DatabasesModule-0d35987fb058b6e37d21ee3bde7411b07576f91090de39951c454f7883792aeed68afa94e9ba7379df6d1f1f7abc6f5482b5048026a3db11b2ce8277da7e5302"'
                  : 'id="xs-controllers-links-module-DatabasesModule-0d35987fb058b6e37d21ee3bde7411b07576f91090de39951c454f7883792aeed68afa94e9ba7379df6d1f1f7abc6f5482b5048026a3db11b2ce8277da7e5302"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-DatabasesModule-0d35987fb058b6e37d21ee3bde7411b07576f91090de39951c454f7883792aeed68afa94e9ba7379df6d1f1f7abc6f5482b5048026a3db11b2ce8277da7e5302"'
                  : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-0d35987fb058b6e37d21ee3bde7411b07576f91090de39951c454f7883792aeed68afa94e9ba7379df6d1f1f7abc6f5482b5048026a3db11b2ce8277da7e5302"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-DatabasesModule-0d35987fb058b6e37d21ee3bde7411b07576f91090de39951c454f7883792aeed68afa94e9ba7379df6d1f1f7abc6f5482b5048026a3db11b2ce8277da7e5302"'
                  : 'id="xs-injectables-links-module-DatabasesModule-0d35987fb058b6e37d21ee3bde7411b07576f91090de39951c454f7883792aeed68afa94e9ba7379df6d1f1f7abc6f5482b5048026a3db11b2ce8277da7e5302"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"'
                  : 'data-bs-target="#xs-controllers-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"'
                  : 'id="xs-controllers-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"'
                  : 'data-bs-target="#xs-injectables-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"'
                  : 'id="xs-injectables-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"'
                  : 'data-bs-target="#xs-controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"'
                  : 'id="xs-controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-JobsModule-e1d44dd2bc553ca95869bafbe30fa9da35b303469654e40fec8406a7d1db5788f96d0030a037f4e0e86e2975fa21c7429bee87d9e412b93a55d86019eb14b26a"'
                  : 'data-bs-target="#xs-controllers-links-module-JobsModule-e1d44dd2bc553ca95869bafbe30fa9da35b303469654e40fec8406a7d1db5788f96d0030a037f4e0e86e2975fa21c7429bee87d9e412b93a55d86019eb14b26a"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-JobsModule-e1d44dd2bc553ca95869bafbe30fa9da35b303469654e40fec8406a7d1db5788f96d0030a037f4e0e86e2975fa21c7429bee87d9e412b93a55d86019eb14b26a"'
                  : 'id="xs-controllers-links-module-JobsModule-e1d44dd2bc553ca95869bafbe30fa9da35b303469654e40fec8406a7d1db5788f96d0030a037f4e0e86e2975fa21c7429bee87d9e412b93a55d86019eb14b26a"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-JobsModule-e1d44dd2bc553ca95869bafbe30fa9da35b303469654e40fec8406a7d1db5788f96d0030a037f4e0e86e2975fa21c7429bee87d9e412b93a55d86019eb14b26a"'
                  : 'data-bs-target="#xs-injectables-links-module-JobsModule-e1d44dd2bc553ca95869bafbe30fa9da35b303469654e40fec8406a7d1db5788f96d0030a037f4e0e86e2975fa21c7429bee87d9e412b93a55d86019eb14b26a"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-JobsModule-e1d44dd2bc553ca95869bafbe30fa9da35b303469654e40fec8406a7d1db5788f96d0030a037f4e0e86e2975fa21c7429bee87d9e412b93a55d86019eb14b26a"'
                  : 'id="xs-injectables-links-module-JobsModule-e1d44dd2bc553ca95869bafbe30fa9da35b303469654e40fec8406a7d1db5788f96d0030a037f4e0e86e2975fa21c7429bee87d9e412b93a55d86019eb14b26a"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-MailModule-8f8cee5f541b8601852cd6d6d89a479f18280df8735dc0d94dea70adc53902ee7ee96090cb77d1cb1c9f5a1daa8357113bd027c70c4dcf5d76ad55ff479040f6"'
                  : 'data-bs-target="#xs-controllers-links-module-MailModule-8f8cee5f541b8601852cd6d6d89a479f18280df8735dc0d94dea70adc53902ee7ee96090cb77d1cb1c9f5a1daa8357113bd027c70c4dcf5d76ad55ff479040f6"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-MailModule-8f8cee5f541b8601852cd6d6d89a479f18280df8735dc0d94dea70adc53902ee7ee96090cb77d1cb1c9f5a1daa8357113bd027c70c4dcf5d76ad55ff479040f6"'
                  : 'id="xs-controllers-links-module-MailModule-8f8cee5f541b8601852cd6d6d89a479f18280df8735dc0d94dea70adc53902ee7ee96090cb77d1cb1c9f5a1daa8357113bd027c70c4dcf5d76ad55ff479040f6"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-MailModule-8f8cee5f541b8601852cd6d6d89a479f18280df8735dc0d94dea70adc53902ee7ee96090cb77d1cb1c9f5a1daa8357113bd027c70c4dcf5d76ad55ff479040f6"'
                  : 'data-bs-target="#xs-injectables-links-module-MailModule-8f8cee5f541b8601852cd6d6d89a479f18280df8735dc0d94dea70adc53902ee7ee96090cb77d1cb1c9f5a1daa8357113bd027c70c4dcf5d76ad55ff479040f6"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-MailModule-8f8cee5f541b8601852cd6d6d89a479f18280df8735dc0d94dea70adc53902ee7ee96090cb77d1cb1c9f5a1daa8357113bd027c70c4dcf5d76ad55ff479040f6"'
                  : 'id="xs-injectables-links-module-MailModule-8f8cee5f541b8601852cd6d6d89a479f18280df8735dc0d94dea70adc53902ee7ee96090cb77d1cb1c9f5a1daa8357113bd027c70c4dcf5d76ad55ff479040f6"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-PermissionsModule-641f99452045437093d87e96ced663b8ff30c674135db051f00f9038613fb6880630a76888024a834019d1f9ea85e579002cb6aaf2354f71fee9ff793b4395bb"'
                  : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-641f99452045437093d87e96ced663b8ff30c674135db051f00f9038613fb6880630a76888024a834019d1f9ea85e579002cb6aaf2354f71fee9ff793b4395bb"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-PermissionsModule-641f99452045437093d87e96ced663b8ff30c674135db051f00f9038613fb6880630a76888024a834019d1f9ea85e579002cb6aaf2354f71fee9ff793b4395bb"'
                  : 'id="xs-controllers-links-module-PermissionsModule-641f99452045437093d87e96ced663b8ff30c674135db051f00f9038613fb6880630a76888024a834019d1f9ea85e579002cb6aaf2354f71fee9ff793b4395bb"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-PermissionsModule-641f99452045437093d87e96ced663b8ff30c674135db051f00f9038613fb6880630a76888024a834019d1f9ea85e579002cb6aaf2354f71fee9ff793b4395bb"'
                  : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-641f99452045437093d87e96ced663b8ff30c674135db051f00f9038613fb6880630a76888024a834019d1f9ea85e579002cb6aaf2354f71fee9ff793b4395bb"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-PermissionsModule-641f99452045437093d87e96ced663b8ff30c674135db051f00f9038613fb6880630a76888024a834019d1f9ea85e579002cb6aaf2354f71fee9ff793b4395bb"'
                  : 'id="xs-injectables-links-module-PermissionsModule-641f99452045437093d87e96ced663b8ff30c674135db051f00f9038613fb6880630a76888024a834019d1f9ea85e579002cb6aaf2354f71fee9ff793b4395bb"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-ResumesModule-568eb8735e5e29a49d087e3e8e6ce031e191edda741ec36c6d1ef278952476ac183b6e8a004c6087a047b2bcdacb9e7e1a4a230491e228fbc91e102dc3e953cf"'
                  : 'data-bs-target="#xs-controllers-links-module-ResumesModule-568eb8735e5e29a49d087e3e8e6ce031e191edda741ec36c6d1ef278952476ac183b6e8a004c6087a047b2bcdacb9e7e1a4a230491e228fbc91e102dc3e953cf"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-ResumesModule-568eb8735e5e29a49d087e3e8e6ce031e191edda741ec36c6d1ef278952476ac183b6e8a004c6087a047b2bcdacb9e7e1a4a230491e228fbc91e102dc3e953cf"'
                  : 'id="xs-controllers-links-module-ResumesModule-568eb8735e5e29a49d087e3e8e6ce031e191edda741ec36c6d1ef278952476ac183b6e8a004c6087a047b2bcdacb9e7e1a4a230491e228fbc91e102dc3e953cf"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-ResumesModule-568eb8735e5e29a49d087e3e8e6ce031e191edda741ec36c6d1ef278952476ac183b6e8a004c6087a047b2bcdacb9e7e1a4a230491e228fbc91e102dc3e953cf"'
                  : 'data-bs-target="#xs-injectables-links-module-ResumesModule-568eb8735e5e29a49d087e3e8e6ce031e191edda741ec36c6d1ef278952476ac183b6e8a004c6087a047b2bcdacb9e7e1a4a230491e228fbc91e102dc3e953cf"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-ResumesModule-568eb8735e5e29a49d087e3e8e6ce031e191edda741ec36c6d1ef278952476ac183b6e8a004c6087a047b2bcdacb9e7e1a4a230491e228fbc91e102dc3e953cf"'
                  : 'id="xs-injectables-links-module-ResumesModule-568eb8735e5e29a49d087e3e8e6ce031e191edda741ec36c6d1ef278952476ac183b6e8a004c6087a047b2bcdacb9e7e1a4a230491e228fbc91e102dc3e953cf"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-RolesModule-0839291a1dadf9bc1ac3ff1bbf91bc99577b75e3248823f3da0493bf21ea7668caf2a2ec54c13c2c295f85e6f3d73c587450284567d1e3e380a797bac742da62"'
                  : 'data-bs-target="#xs-controllers-links-module-RolesModule-0839291a1dadf9bc1ac3ff1bbf91bc99577b75e3248823f3da0493bf21ea7668caf2a2ec54c13c2c295f85e6f3d73c587450284567d1e3e380a797bac742da62"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-RolesModule-0839291a1dadf9bc1ac3ff1bbf91bc99577b75e3248823f3da0493bf21ea7668caf2a2ec54c13c2c295f85e6f3d73c587450284567d1e3e380a797bac742da62"'
                  : 'id="xs-controllers-links-module-RolesModule-0839291a1dadf9bc1ac3ff1bbf91bc99577b75e3248823f3da0493bf21ea7668caf2a2ec54c13c2c295f85e6f3d73c587450284567d1e3e380a797bac742da62"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-RolesModule-0839291a1dadf9bc1ac3ff1bbf91bc99577b75e3248823f3da0493bf21ea7668caf2a2ec54c13c2c295f85e6f3d73c587450284567d1e3e380a797bac742da62"'
                  : 'data-bs-target="#xs-injectables-links-module-RolesModule-0839291a1dadf9bc1ac3ff1bbf91bc99577b75e3248823f3da0493bf21ea7668caf2a2ec54c13c2c295f85e6f3d73c587450284567d1e3e380a797bac742da62"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-RolesModule-0839291a1dadf9bc1ac3ff1bbf91bc99577b75e3248823f3da0493bf21ea7668caf2a2ec54c13c2c295f85e6f3d73c587450284567d1e3e380a797bac742da62"'
                  : 'id="xs-injectables-links-module-RolesModule-0839291a1dadf9bc1ac3ff1bbf91bc99577b75e3248823f3da0493bf21ea7668caf2a2ec54c13c2c295f85e6f3d73c587450284567d1e3e380a797bac742da62"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-SubscribersModule-3cc601a80b806d7679eed99cfd5c3b58169652a6ed17c14c12c87f09f9cb9e77996f265c6432ad5c7a25b863d931e8e2b8d3c0be464ee9644686d1c72dc6d334"'
                  : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-3cc601a80b806d7679eed99cfd5c3b58169652a6ed17c14c12c87f09f9cb9e77996f265c6432ad5c7a25b863d931e8e2b8d3c0be464ee9644686d1c72dc6d334"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-SubscribersModule-3cc601a80b806d7679eed99cfd5c3b58169652a6ed17c14c12c87f09f9cb9e77996f265c6432ad5c7a25b863d931e8e2b8d3c0be464ee9644686d1c72dc6d334"'
                  : 'id="xs-controllers-links-module-SubscribersModule-3cc601a80b806d7679eed99cfd5c3b58169652a6ed17c14c12c87f09f9cb9e77996f265c6432ad5c7a25b863d931e8e2b8d3c0be464ee9644686d1c72dc6d334"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-SubscribersModule-3cc601a80b806d7679eed99cfd5c3b58169652a6ed17c14c12c87f09f9cb9e77996f265c6432ad5c7a25b863d931e8e2b8d3c0be464ee9644686d1c72dc6d334"'
                  : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-3cc601a80b806d7679eed99cfd5c3b58169652a6ed17c14c12c87f09f9cb9e77996f265c6432ad5c7a25b863d931e8e2b8d3c0be464ee9644686d1c72dc6d334"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-SubscribersModule-3cc601a80b806d7679eed99cfd5c3b58169652a6ed17c14c12c87f09f9cb9e77996f265c6432ad5c7a25b863d931e8e2b8d3c0be464ee9644686d1c72dc6d334"'
                  : 'id="xs-injectables-links-module-SubscribersModule-3cc601a80b806d7679eed99cfd5c3b58169652a6ed17c14c12c87f09f9cb9e77996f265c6432ad5c7a25b863d931e8e2b8d3c0be464ee9644686d1c72dc6d334"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"'
                  : 'data-bs-target="#xs-controllers-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"'
                  : 'id="xs-controllers-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"'
                  : 'data-bs-target="#xs-injectables-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"'
                  : 'id="xs-injectables-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links"'
                  : 'data-bs-target="#xs-controllers-links"',
                '>\n                                <span class="icon ion-md-swap"></span>\n                                <span>Controllers</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links"'
                  : 'id="xs-controllers-links"',
                '>\n                                <li class="link">\n                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#classes-links"'
                  : 'data-bs-target="#xs-classes-links"',
                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                '>\n                            <li class="link">\n                                <a href="classes/Company.html" data-type="entity-link" >Company</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateCVDto.html" data-type="entity-link" >CreateCVDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/File.html" data-type="entity-link" >File</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Job.html" data-type="entity-link" >Job</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Role.html" data-type="entity-link" >Role</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/User.html" data-type="entity-link" >User</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links"'
                  : 'data-bs-target="#xs-injectables-links"',
                '>\n                                <span class="icon ion-md-arrow-round-down"></span>\n                                <span>Injectables</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links"'
                  : 'id="xs-injectables-links"',
                '>\n                                <li class="link">\n                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#interfaces-links"'
                  : 'data-bs-target="#xs-interfaces-links"',
                '>\n                            <span class="icon ion-md-information-circle-outline"></span>\n                            <span>Interfaces</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? ' id="interfaces-links"'
                  : 'id="xs-interfaces-links"',
                '>\n                            <li class="link">\n                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#miscellaneous-links"'
                  : 'data-bs-target="#xs-miscellaneous-links"',
                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="miscellaneous-links"'
                  : 'id="xs-miscellaneous-links"',
                '>\n                            <li class="link">\n                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        ',
              ),
          );
          this.innerHTML = tp.strings;
        },
      },
    ]);
  })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement)),
);
