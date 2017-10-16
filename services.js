/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 669);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process==='undefined' || !process.env || process.env.NODE_ENV!=='production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev) { prev = parent.children[0]; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var c = render$1(wrap, container);
	if (callback) { callback(c); }
	return c._component || c.base;
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		if (children == null) { return []; }
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
		element.nodeName || element.type,
		elementProps,
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(ref) {
	var attributes = ref.attributes;

	if (!attributes) { return; }
	var cl = attributes.className || attributes.class;
	if (cl) { attributes.className = cl; }
}


function extend(base, props) {
	for (var key in props) {
		if (props.hasOwnProperty(key)) {
			base[key] = props[key];
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && component.base || component;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};



var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , core      = __webpack_require__(56)
  , hide      = __webpack_require__(18)
  , redefine  = __webpack_require__(28)
  , ctx       = __webpack_require__(25)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * preact plugin that provides an I18n helper using a Higher Order Component.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate = exports.I18n = exports.DEFAULT_LANG = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _translation = __webpack_require__(241);

var _format = __webpack_require__(259);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_LANG = exports.DEFAULT_LANG = 'en';

// Provider root component

var I18n = exports.I18n = function (_Component) {
  _inherits(I18n, _Component);

  function I18n(props) {
    _classCallCheck(this, I18n);

    var _this = _possibleConstructorReturn(this, (I18n.__proto__ || Object.getPrototypeOf(I18n)).call(this, props));

    _this.init(_this.props);
    return _this;
  }

  _createClass(I18n, [{
    key: 'init',
    value: function init(props) {
      var lang = props.lang,
          dictRequire = props.dictRequire,
          context = props.context,
          defaultLang = props.defaultLang;


      this.translation = (0, _translation.initTranslation)(lang, dictRequire, context, defaultLang);
      this.format = (0, _format.initFormat)(lang, defaultLang);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        t: this.translation.t.bind(this.translation),
        f: this.format,
        lang: this.props.lang
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.locale !== this.props.locale) {
        this.init(newProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children && this.props.children[0] || null;
    }
  }]);

  return I18n;
}(_react.Component);

I18n.propTypes = {
  lang: _react2.default.PropTypes.string.isRequired, // current language.
  dictRequire: _react2.default.PropTypes.func.isRequired, // A callback to load locales.
  context: _react2.default.PropTypes.string, // current context.
  defaultLang: _react2.default.PropTypes.string // default language. By default is 'en'
};

I18n.childContextTypes = {
  t: _react2.default.PropTypes.func,
  f: _react2.default.PropTypes.func,
  lang: _react2.default.PropTypes.string

  // higher order decorator for components that need `t` and/or `f`
};var translate = exports.translate = function translate() {
  return function (WrappedComponent) {
    var _translate = function _translate(props, context) {
      return _react2.default.createElement(WrappedComponent, _extends({}, props, { t: context.t, f: context.f, lang: context.lang }));
    };
    return _translate;
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(168)('wks')
  , uid        = __webpack_require__(36)
  , Symbol     = __webpack_require__(5).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(205)
  , toPrimitive    = __webpack_require__(57)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("client", [], factory);
	else if(typeof exports === 'object')
		exports["client"] = factory();
	else
		root["cozy"] = root["cozy"] || {}, root["cozy"]["client"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(2);
	module.exports = self.fetch.bind(self);


/***/ },
/* 2 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function(header) {
	        this.append(header[0], header[1])
	      }, this)
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch URL */
	
	
	__webpack_require__(4);
	
	__webpack_require__(45);
	
	__webpack_require__(72);
	
	__webpack_require__(73);
	
	__webpack_require__(74);
	
	__webpack_require__(75);
	
	__webpack_require__(76);
	
	__webpack_require__(77);
	
	__webpack_require__(78);
	
	__webpack_require__(79);
	
	__webpack_require__(80);
	
	__webpack_require__(88);
	
	__webpack_require__(89);
	
	__webpack_require__(93);
	
	__webpack_require__(94);
	
	__webpack_require__(95);
	
	__webpack_require__(98);
	
	__webpack_require__(99);
	
	__webpack_require__(100);
	
	__webpack_require__(101);
	
	__webpack_require__(102);
	
	__webpack_require__(103);
	
	__webpack_require__(104);
	
	__webpack_require__(105);
	
	__webpack_require__(107);
	
	__webpack_require__(108);
	
	__webpack_require__(109);
	
	__webpack_require__(110);
	
	__webpack_require__(113);
	
	__webpack_require__(119);
	
	__webpack_require__(120);
	
	__webpack_require__(121);
	
	__webpack_require__(122);
	
	__webpack_require__(123);
	
	__webpack_require__(124);
	
	__webpack_require__(125);
	
	__webpack_require__(127);
	
	__webpack_require__(129);
	
	__webpack_require__(133);
	
	__webpack_require__(134);
	
	__webpack_require__(135);
	
	__webpack_require__(137);
	
	__webpack_require__(139);
	
	__webpack_require__(140);
	
	__webpack_require__(141);
	
	__webpack_require__(142);
	
	__webpack_require__(144);
	
	__webpack_require__(145);
	
	__webpack_require__(146);
	
	__webpack_require__(147);
	
	__webpack_require__(148);
	
	__webpack_require__(62);
	
	__webpack_require__(149);
	
	__webpack_require__(150);
	
	__webpack_require__(152);
	
	__webpack_require__(153);
	
	__webpack_require__(154);
	
	__webpack_require__(155);
	
	__webpack_require__(156);
	
	__webpack_require__(157);
	
	__webpack_require__(159);
	
	__webpack_require__(160);
	
	__webpack_require__(161);
	
	__webpack_require__(163);
	
	__webpack_require__(164);
	
	__webpack_require__(165);
	
	__webpack_require__(167);
	
	__webpack_require__(168);
	
	__webpack_require__(169);
	
	__webpack_require__(170);
	
	__webpack_require__(171);
	
	__webpack_require__(172);
	
	__webpack_require__(173);
	
	__webpack_require__(174);
	
	__webpack_require__(175);
	
	__webpack_require__(176);
	
	__webpack_require__(177);
	
	__webpack_require__(178);
	
	__webpack_require__(180);
	
	__webpack_require__(181);
	
	__webpack_require__(182);
	
	__webpack_require__(184);
	
	__webpack_require__(185);
	
	__webpack_require__(188);
	
	__webpack_require__(189);
	
	__webpack_require__(190);
	
	var _utils = __webpack_require__(192);
	
	var _auth_storage = __webpack_require__(193);
	
	var _auth_v = __webpack_require__(194);
	
	var _auth_v2 = __webpack_require__(195);
	
	var auth = _interopRequireWildcard(_auth_v2);
	
	var _data = __webpack_require__(198);
	
	var data = _interopRequireWildcard(_data);
	
	var _fetch = __webpack_require__(196);
	
	var cozyFetch = _interopRequireWildcard(_fetch);
	
	var _mango = __webpack_require__(200);
	
	var mango = _interopRequireWildcard(_mango);
	
	var _files = __webpack_require__(201);
	
	var files = _interopRequireWildcard(_files);
	
	var _intents = __webpack_require__(202);
	
	var intents = _interopRequireWildcard(_intents);
	
	var _jobs = __webpack_require__(203);
	
	var jobs = _interopRequireWildcard(_jobs);
	
	var _offline = __webpack_require__(204);
	
	var offline = _interopRequireWildcard(_offline);
	
	var _settings = __webpack_require__(205);
	
	var settings = _interopRequireWildcard(_settings);
	
	var _relations = __webpack_require__(206);
	
	var relations = _interopRequireWildcard(_relations);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AppTokenV3 = auth.AppToken,
	    AccessTokenV3 = auth.AccessToken,
	    ClientV3 = auth.Client;
	
	
	var AuthNone = 0;
	var AuthRunning = 1;
	var AuthError = 2;
	var AuthOK = 3;
	
	var defaultClientParams = {
	  softwareID: 'github.com/cozy/cozy-client-js'
	};
	
	var dataProto = {
	  create: data.create,
	  find: data.find,
	  findMany: data.findMany,
	  findAll: data.findAll,
	  update: data.update,
	  delete: data._delete,
	  updateAttributes: data.updateAttributes,
	  changesFeed: data.changesFeed,
	  defineIndex: mango.defineIndex,
	  query: mango.query,
	  addReferencedFiles: relations.addReferencedFiles,
	  removeReferencedFiles: relations.removeReferencedFiles,
	  listReferencedFiles: relations.listReferencedFiles,
	  fetchReferencedFiles: relations.fetchReferencedFiles,
	  destroy: function destroy() {
	    (0, _utils.warn)('destroy is deprecated, use cozy.data.delete instead.');
	    return data._delete.apply(data, arguments);
	  }
	};
	
	var authProto = {
	  client: auth.client,
	  registerClient: auth.registerClient,
	  updateClient: auth.updateClient,
	  unregisterClient: auth.unregisterClient,
	  getClient: auth.getClient,
	  getAuthCodeURL: auth.getAuthCodeURL,
	  getAccessToken: auth.getAccessToken,
	  refreshToken: auth.refreshToken
	};
	
	var filesProto = {
	  create: files.create,
	  createDirectory: files.createDirectory,
	  createDirectoryByPath: files.createDirectoryByPath,
	  updateById: files.updateById,
	  updateAttributesById: files.updateAttributesById,
	  updateAttributesByPath: files.updateAttributesByPath,
	  trashById: files.trashById,
	  statById: files.statById,
	  statByPath: files.statByPath,
	  downloadById: files.downloadById,
	  downloadByPath: files.downloadByPath,
	  getDownloadLinkById: files.getDownloadLinkById,
	  getDownloadLink: files.getDownloadLinkByPath, // DEPRECATED, should be removed very soon
	  getDownloadLinkByPath: files.getDownloadLinkByPath,
	  getArchiveLink: function getArchiveLink() {
	    (0, _utils.warn)('getArchiveLink is deprecated, use cozy.files.getArchiveLinkByPaths instead.');
	    return files.getArchiveLinkByPaths.apply(files, arguments);
	  },
	  getArchiveLinkByPaths: files.getArchiveLinkByPaths,
	  getArchiveLinkByIds: files.getArchiveLinkByIds,
	  getFilePath: files.getFilePath,
	  getCollectionShareLink: files.getCollectionShareLink,
	  query: mango.queryFiles,
	  listTrash: files.listTrash,
	  clearTrash: files.clearTrash,
	  restoreById: files.restoreById,
	  destroyById: files.destroyById
	};
	
	var intentsProto = {
	  create: intents.create,
	  createService: intents.createService
	};
	
	var jobsProto = {
	  create: jobs.create,
	  count: jobs.count
	};
	
	var offlineProto = {
	  init: offline.init,
	  getDoctypes: offline.getDoctypes,
	  // database
	  hasDatabase: offline.hasDatabase,
	  getDatabase: offline.getDatabase,
	  createDatabase: offline.createDatabase,
	  destroyDatabase: offline.destroyDatabase,
	  destroyAllDatabase: offline.destroyAllDatabase,
	  // replication
	  hasReplication: offline.hasReplication,
	  replicateFromCozy: offline.replicateFromCozy,
	  stopReplication: offline.stopReplication,
	  stopAllReplication: offline.stopAllReplication,
	  // repeated replication
	  hasRepeatedReplication: offline.hasRepeatedReplication,
	  startRepeatedReplication: offline.startRepeatedReplication,
	  stopRepeatedReplication: offline.stopRepeatedReplication,
	  stopAllRepeatedReplication: offline.stopAllRepeatedReplication
	};
	
	var settingsProto = {
	  diskUsage: settings.diskUsage,
	  changePassphrase: settings.changePassphrase,
	  getInstance: settings.getInstance,
	  updateInstance: settings.updateInstance,
	  getClients: settings.getClients,
	  deleteClientById: settings.deleteClientById,
	  updateLastSync: settings.updateLastSync
	};
	
	var Client = function () {
	  function Client(options) {
	    _classCallCheck(this, Client);
	
	    this.data = {};
	    this.files = {};
	    this.intents = {};
	    this.jobs = {};
	    this.offline = {};
	    this.settings = {};
	    this.auth = {
	      Client: ClientV3,
	      AccessToken: AccessTokenV3,
	      AppToken: AppTokenV3,
	      AppTokenV2: _auth_v.AppToken,
	      LocalStorage: _auth_storage.LocalStorage,
	      MemoryStorage: _auth_storage.MemoryStorage
	    };
	    this._inited = false;
	    if (options) {
	      this.init(options);
	    }
	  }
	
	  _createClass(Client, [{
	    key: 'init',
	    value: function init() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      this._inited = true;
	      this._oauth = false; // is oauth activated or not
	      this._token = null; // application token
	      this._authstate = AuthNone;
	      this._authcreds = null;
	      this._storage = null;
	      this._version = options.version || null;
	      this._offline = null;
	
	      var token = options.token;
	      var oauth = options.oauth;
	      if (token && oauth) {
	        throw new Error('Cannot specify an application token with a oauth activated');
	      }
	
	      if (token) {
	        this._token = new AppTokenV3({ token: token });
	      } else if (oauth) {
	        this._oauth = true;
	        this._storage = oauth.storage;
	        this._clientParams = Object.assign({}, defaultClientParams, oauth.clientParams);
	        this._onRegistered = oauth.onRegistered || nopOnRegistered;
	      }
	
	      var url = options.cozyURL || '';
	      while (url[url.length - 1] === '/') {
	        url = url.slice(0, -1);
	      }
	
	      this._url = url;
	
	      var disablePromises = !!options.disablePromises;
	      addToProto(this, this.data, dataProto, disablePromises);
	      addToProto(this, this.auth, authProto, disablePromises);
	      addToProto(this, this.files, filesProto, disablePromises);
	      addToProto(this, this.intents, intentsProto, disablePromises);
	      addToProto(this, this.jobs, jobsProto, disablePromises);
	      addToProto(this, this.offline, offlineProto, disablePromises);
	      addToProto(this, this.settings, settingsProto, disablePromises);
	
	      if (options.offline) {
	        this.offline.init(options.offline);
	      }
	
	      // Exposing cozyFetchJSON to make some development easier. Should be temporary.
	      this.fetchJSON = function _fetchJSON() {
	        var args = [this].concat(Array.prototype.slice.call(arguments));
	        return cozyFetch.cozyFetchJSON.apply(this, args);
	      };
	    }
	  }, {
	    key: 'authorize',
	    value: function authorize() {
	      var _this = this;
	
	      var forceTokenRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      var state = this._authstate;
	      if (state === AuthOK || state === AuthRunning) {
	        return this._authcreds;
	      }
	
	      this._authstate = AuthRunning;
	      this._authcreds = this.isV2().then(function (isV2) {
	        if (isV2 && _this._oauth) {
	          throw new Error('OAuth is not supported on the V2 stack');
	        }
	        if (_this._oauth) {
	          if (forceTokenRefresh && _this._clientParams.redirectURI) {
	            var url = new URL(_this._clientParams.redirectURI);
	            if (!url.searchParams.has('reconnect')) url.searchParams.append('reconnect', 1);
	            _this._clientParams.redirectURI = url.toString();
	          }
	          return auth.oauthFlow(_this, _this._storage, _this._clientParams, _this._onRegistered, forceTokenRefresh);
	        }
	        // we expect to be on a client side application running in a browser
	        // with cookie-based authentication.
	        if (isV2) {
	          return (0, _auth_v.getAppToken)();
	        } else if (_this._token) {
	          return Promise.resolve({ client: null, token: _this._token });
	        } else {
	          throw new Error('Missing application token');
	        }
	      });
	
	      this._authcreds.then(function () {
	        _this._authstate = AuthOK;
	      }, function () {
	        _this._authstate = AuthError;
	      });
	
	      return this._authcreds;
	    }
	  }, {
	    key: 'saveCredentials',
	    value: function saveCredentials(client, token) {
	      var creds = { client: client, token: token };
	      if (!this._storage || this._authstate === AuthRunning) {
	        return Promise.resolve(creds);
	      }
	      this._storage.save(auth.CredsKey, creds);
	      this._authcreds = Promise.resolve(creds);
	      return this._authcreds;
	    }
	  }, {
	    key: 'fullpath',
	    value: function fullpath(path) {
	      var _this2 = this;
	
	      return this.isV2().then(function (isV2) {
	        var pathprefix = isV2 ? '/ds-api' : '';
	        return _this2._url + pathprefix + path;
	      });
	    }
	  }, {
	    key: 'isV2',
	    value: function isV2() {
	      var _this3 = this;
	
	      if (!this._version) {
	        return (0, _utils.retry)(function () {
	          return fetch(_this3._url + '/status/');
	        }, 3)().then(function (res) {
	          if (!res.ok) {
	            throw new Error('Could not fetch cozy status');
	          } else {
	            return res.json();
	          }
	        }).then(function (status) {
	          _this3._version = status.datasystem !== undefined ? 2 : 3;
	          return _this3.isV2();
	        });
	      }
	      return Promise.resolve(this._version === 2);
	    }
	  }]);
	
	  return Client;
	}();
	
	function nopOnRegistered() {
	  throw new Error('Missing onRegistered callback');
	}
	
	function protoify(context, fn) {
	  return function prototyped() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return fn.apply(undefined, [context].concat(args));
	  };
	}
	
	function addToProto(ctx, obj, proto, disablePromises) {
	  for (var attr in proto) {
	    var fn = protoify(ctx, proto[attr]);
	    if (disablePromises) {
	      fn = (0, _utils.unpromiser)(fn);
	    }
	    obj[attr] = fn;
	  }
	}
	
	module.exports = new Client();
	Object.assign(module.exports, { Client: Client, LocalStorage: _auth_storage.LocalStorage, MemoryStorage: _auth_storage.MemoryStorage });

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	$export($export.G + $export.W + $export.F * !__webpack_require__(23).ABV, {
	  DataView: __webpack_require__(24).DataView
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(9)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(13) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(10)
	  , IE8_DOM_DEFINE = __webpack_require__(12)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(13) && !__webpack_require__(14)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(11);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , has       = __webpack_require__(19)
	  , SRC       = __webpack_require__(20)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(22);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , hide   = __webpack_require__(8)
	  , uid    = __webpack_require__(20)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , DESCRIPTORS    = __webpack_require__(13)
	  , LIBRARY        = __webpack_require__(25)
	  , $typed         = __webpack_require__(23)
	  , hide           = __webpack_require__(8)
	  , redefineAll    = __webpack_require__(26)
	  , fails          = __webpack_require__(14)
	  , anInstance     = __webpack_require__(27)
	  , toInteger      = __webpack_require__(28)
	  , toLength       = __webpack_require__(29)
	  , gOPN           = __webpack_require__(30).f
	  , dP             = __webpack_require__(9).f
	  , arrayFill      = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(43)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(28)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(40).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(19)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(38)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(37);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(28)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(39)('keys')
	  , uid    = __webpack_require__(20);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(42)
	  , toIndex  = __webpack_require__(37)
	  , toLength = __webpack_require__(29);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(9).f
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(44)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(39)('wks')
	  , uid        = __webpack_require__(20)
	  , Symbol     = __webpack_require__(6).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(13)){
	  var LIBRARY             = __webpack_require__(25)
	    , global              = __webpack_require__(6)
	    , fails               = __webpack_require__(14)
	    , $export             = __webpack_require__(5)
	    , $typed              = __webpack_require__(23)
	    , $buffer             = __webpack_require__(24)
	    , ctx                 = __webpack_require__(21)
	    , anInstance          = __webpack_require__(27)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(8)
	    , redefineAll         = __webpack_require__(26)
	    , toInteger           = __webpack_require__(28)
	    , toLength            = __webpack_require__(29)
	    , toIndex             = __webpack_require__(37)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(19)
	    , same                = __webpack_require__(47)
	    , classof             = __webpack_require__(48)
	    , isObject            = __webpack_require__(11)
	    , toObject            = __webpack_require__(42)
	    , isArrayIter         = __webpack_require__(49)
	    , create              = __webpack_require__(51)
	    , getPrototypeOf      = __webpack_require__(55)
	    , gOPN                = __webpack_require__(30).f
	    , getIterFn           = __webpack_require__(56)
	    , uid                 = __webpack_require__(20)
	    , wks                 = __webpack_require__(44)
	    , createArrayMethod   = __webpack_require__(57)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(61)
	    , ArrayIterators      = __webpack_require__(62)
	    , Iterators           = __webpack_require__(50)
	    , $iterDetect         = __webpack_require__(67)
	    , setSpecies          = __webpack_require__(68)
	    , arrayFill           = __webpack_require__(41)
	    , arrayCopyWithin     = __webpack_require__(69)
	    , $DP                 = __webpack_require__(9)
	    , $GOPD               = __webpack_require__(70)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 47 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(44)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(50)
	  , ITERATOR   = __webpack_require__(44)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(10)
	  , dPs         = __webpack_require__(52)
	  , enumBugKeys = __webpack_require__(40)
	  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(54).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(9)
	  , anObject = __webpack_require__(10)
	  , getKeys  = __webpack_require__(53);
	
	module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(40);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(19)
	  , toObject    = __webpack_require__(42)
	  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(48)
	  , ITERATOR  = __webpack_require__(44)('iterator')
	  , Iterators = __webpack_require__(50);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(21)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(42)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(58);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(59);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , isArray  = __webpack_require__(60)
	  , SPECIES  = __webpack_require__(44)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(10)
	  , aFunction = __webpack_require__(22)
	  , SPECIES   = __webpack_require__(44)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(63)
	  , step             = __webpack_require__(64)
	  , Iterators        = __webpack_require__(50)
	  , toIObject        = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(65)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(44)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(25)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(50)
	  , $iterCreate    = __webpack_require__(66)
	  , setToStringTag = __webpack_require__(43)
	  , getPrototypeOf = __webpack_require__(55)
	  , ITERATOR       = __webpack_require__(44)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(51)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(43)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(44)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(44)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , dP          = __webpack_require__(9)
	  , DESCRIPTORS = __webpack_require__(13)
	  , SPECIES     = __webpack_require__(44)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(42)
	  , toIndex  = __webpack_require__(37)
	  , toLength = __webpack_require__(29);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(71)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(19)
	  , IE8_DOM_DEFINE = __webpack_require__(12)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(81);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(85)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(9).f
	  , create      = __webpack_require__(51)
	  , redefineAll = __webpack_require__(26)
	  , ctx         = __webpack_require__(21)
	  , anInstance  = __webpack_require__(27)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(82)
	  , $iterDefine = __webpack_require__(65)
	  , step        = __webpack_require__(64)
	  , setSpecies  = __webpack_require__(68)
	  , DESCRIPTORS = __webpack_require__(13)
	  , fastKey     = __webpack_require__(84).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(21)
	  , call        = __webpack_require__(83)
	  , isArrayIter = __webpack_require__(49)
	  , anObject    = __webpack_require__(10)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(56)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(10);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(20)('meta')
	  , isObject = __webpack_require__(11)
	  , has      = __webpack_require__(19)
	  , setDesc  = __webpack_require__(9).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(14)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(6)
	  , $export           = __webpack_require__(5)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(26)
	  , meta              = __webpack_require__(84)
	  , forOf             = __webpack_require__(82)
	  , anInstance        = __webpack_require__(27)
	  , isObject          = __webpack_require__(11)
	  , fails             = __webpack_require__(14)
	  , $iterDetect       = __webpack_require__(67)
	  , setToStringTag    = __webpack_require__(43)
	  , inheritIfRequired = __webpack_require__(86);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(11)
	  , setPrototypeOf = __webpack_require__(87).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(11)
	  , anObject = __webpack_require__(10);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(21)(Function.call, __webpack_require__(70).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(81);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(85)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(57)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(84)
	  , assign       = __webpack_require__(90)
	  , weak         = __webpack_require__(92)
	  , isObject     = __webpack_require__(11)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(85)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(53)
	  , gOPS     = __webpack_require__(91)
	  , pIE      = __webpack_require__(71)
	  , toObject = __webpack_require__(42)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(14)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 91 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(26)
	  , getWeak           = __webpack_require__(84).getWeak
	  , anObject          = __webpack_require__(10)
	  , isObject          = __webpack_require__(11)
	  , anInstance        = __webpack_require__(27)
	  , forOf             = __webpack_require__(82)
	  , createArrayMethod = __webpack_require__(57)
	  , $has              = __webpack_require__(19)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(92);
	
	// 23.4 WeakSet Objects
	__webpack_require__(85)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(22)
	  , anObject  = __webpack_require__(10)
	  , rApply    = (__webpack_require__(6).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(14)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(5)
	  , create     = __webpack_require__(51)
	  , aFunction  = __webpack_require__(22)
	  , anObject   = __webpack_require__(10)
	  , isObject   = __webpack_require__(11)
	  , fails      = __webpack_require__(14)
	  , bind       = __webpack_require__(96)
	  , rConstruct = (__webpack_require__(6).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(22)
	  , isObject   = __webpack_require__(11)
	  , invoke     = __webpack_require__(97)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(9)
	  , $export     = __webpack_require__(5)
	  , anObject    = __webpack_require__(10)
	  , toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(14)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , gOPD     = __webpack_require__(70).f
	  , anObject = __webpack_require__(10);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(70)
	  , getPrototypeOf = __webpack_require__(55)
	  , has            = __webpack_require__(19)
	  , $export        = __webpack_require__(5)
	  , isObject       = __webpack_require__(11)
	  , anObject       = __webpack_require__(10);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(70)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(10);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(55)
	  , anObject = __webpack_require__(10);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(10)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(106)});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(30)
	  , gOPS     = __webpack_require__(91)
	  , anObject = __webpack_require__(10)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(10)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(9)
	  , gOPD           = __webpack_require__(70)
	  , getPrototypeOf = __webpack_require__(55)
	  , has            = __webpack_require__(19)
	  , $export        = __webpack_require__(5)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(10)
	  , isObject       = __webpack_require__(11);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(87);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(25)
	  , global             = __webpack_require__(6)
	  , ctx                = __webpack_require__(21)
	  , classof            = __webpack_require__(48)
	  , $export            = __webpack_require__(5)
	  , isObject           = __webpack_require__(11)
	  , aFunction          = __webpack_require__(22)
	  , anInstance         = __webpack_require__(27)
	  , forOf              = __webpack_require__(82)
	  , speciesConstructor = __webpack_require__(61)
	  , task               = __webpack_require__(111).set
	  , microtask          = __webpack_require__(112)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(44)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(26)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(43)($Promise, PROMISE);
	__webpack_require__(68)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(67)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(21)
	  , invoke             = __webpack_require__(97)
	  , html               = __webpack_require__(54)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(111).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(13)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(84).KEY
	  , $fails         = __webpack_require__(14)
	  , shared         = __webpack_require__(39)
	  , setToStringTag = __webpack_require__(43)
	  , uid            = __webpack_require__(20)
	  , wks            = __webpack_require__(44)
	  , wksExt         = __webpack_require__(114)
	  , wksDefine      = __webpack_require__(115)
	  , keyOf          = __webpack_require__(116)
	  , enumKeys       = __webpack_require__(117)
	  , isArray        = __webpack_require__(60)
	  , anObject       = __webpack_require__(10)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(51)
	  , gOPNExt        = __webpack_require__(118)
	  , $GOPD          = __webpack_require__(70)
	  , $DP            = __webpack_require__(9)
	  , $keys          = __webpack_require__(53)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(30).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(71).f  = $propertyIsEnumerable;
	  __webpack_require__(91).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(25)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(44);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(6)
	  , core           = __webpack_require__(7)
	  , LIBRARY        = __webpack_require__(25)
	  , wksExt         = __webpack_require__(114)
	  , defineProperty = __webpack_require__(9).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(53)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(53)
	  , gOPS    = __webpack_require__(91)
	  , pIE     = __webpack_require__(71);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(30).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(90)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(47)});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(87).set});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(9).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(13) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(29);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(37)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(126)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(28)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(128)
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(28)
	  , defined   = __webpack_require__(35);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(130)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(132)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(131)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(11)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(44)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(44)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(130)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(132)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(130)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(132)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(13) && /./g.flags != 'g')__webpack_require__(9).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(136)
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(10);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(138)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(14)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(44);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(138)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(138)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(131)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(138)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(21)
	  , $export        = __webpack_require__(5)
	  , toObject       = __webpack_require__(42)
	  , call           = __webpack_require__(83)
	  , isArrayIter    = __webpack_require__(49)
	  , toLength       = __webpack_require__(29)
	  , createProperty = __webpack_require__(143)
	  , getIterFn      = __webpack_require__(56);
	
	$export($export.S + $export.F * !__webpack_require__(67)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(9)
	  , createDesc      = __webpack_require__(17);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(5)
	  , createProperty = __webpack_require__(143);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(14)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(69)});
	
	__webpack_require__(63)('copyWithin');

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(57)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(63)(KEY);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(57)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(63)(KEY);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {fill: __webpack_require__(41)});
	
	__webpack_require__(63)('fill');

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(151)});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(11)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(151)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(158)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 158 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(162);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5)
	  , $expm1  = __webpack_require__(166);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 166 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(162)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(14)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(158)});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {sign: __webpack_require__(162)});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(166)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(14)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(166)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(63)('includes');

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(179)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(53)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(71).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(179)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(5)
	  , ownKeys        = __webpack_require__(106)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(70)
	  , createProperty = __webpack_require__(143);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(183);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(128)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(183);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(97)
	  , partial    = __webpack_require__(186)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(187)
	  , invoke    = __webpack_require__(97)
	  , aFunction = __webpack_require__(22);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(111);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(62)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(6)
	  , hide          = __webpack_require__(8)
	  , Iterators     = __webpack_require__(50)
	  , wks           = __webpack_require__(44)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(191)))

/***/ },
/* 191 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unpromiser = unpromiser;
	exports.isPromise = isPromise;
	exports.isOnline = isOnline;
	exports.isOffline = isOffline;
	exports.sleep = sleep;
	exports.retry = retry;
	exports.getFuzzedDelay = getFuzzedDelay;
	exports.getBackedoffDelay = getBackedoffDelay;
	exports.createPath = createPath;
	exports.encodeQuery = encodeQuery;
	exports.decodeQuery = decodeQuery;
	exports.warn = warn;
	/* global navigator */
	var FuzzFactor = 0.3;
	
	function unpromiser(fn) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var value = fn.apply(this, args);
	    if (!isPromise(value)) {
	      return value;
	    }
	    var l = args.length;
	    if (l === 0 || typeof args[l - 1] !== 'function') {
	      return;
	    }
	    var cb = args[l - 1];
	    value.then(function (res) {
	      return cb(null, res);
	    }, function (err) {
	      return cb(err, null);
	    });
	  };
	}
	
	function isPromise(value) {
	  return !!value && typeof value.then === 'function';
	}
	
	function isOnline() {
	  return typeof navigator !== 'undefined' ? navigator.onLine : true;
	}
	
	function isOffline() {
	  return !isOnline();
	}
	
	function sleep(time, args) {
	  return new Promise(function (resolve) {
	    setTimeout(resolve, time, args);
	  });
	}
	
	function retry(fn, count) {
	  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
	
	  return function doTry() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return fn.apply(undefined, args).catch(function (err) {
	      if (--count < 0) {
	        throw err;
	      }
	      return sleep(getBackedoffDelay(delay, count)).then(function () {
	        return doTry.apply(undefined, args);
	      });
	    });
	  };
	}
	
	function getFuzzedDelay(retryDelay) {
	  var fuzzingFactor = (Math.random() * 2 - 1) * FuzzFactor;
	  return retryDelay * (1.0 + fuzzingFactor);
	}
	
	function getBackedoffDelay(retryDelay) {
	  var retryCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	  return getFuzzedDelay(retryDelay * Math.pow(2, retryCount - 1));
	}
	
	function createPath(cozy, isV2, doctype) {
	  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
	  var query = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	  var route = '/data/';
	  if (!isV2) {
	    route += encodeURIComponent(doctype) + '/';
	  }
	  if (id !== '') {
	    route += encodeURIComponent(id);
	  }
	  var q = encodeQuery(query);
	  if (q !== '') {
	    route += '?' + q;
	  }
	  return route;
	}
	
	function encodeQuery(query) {
	  if (!query) {
	    return '';
	  }
	  var q = '';
	  for (var qname in query) {
	    if (q !== '') {
	      q += '&';
	    }
	    q += encodeURIComponent(qname) + '=' + encodeURIComponent(query[qname]);
	  }
	  return q;
	}
	
	function decodeQuery(url) {
	  var queryIndex = url.indexOf('?');
	  if (queryIndex < 0) {
	    queryIndex = url.length;
	  }
	  var queries = {};
	  var fragIndex = url.indexOf('#');
	  if (fragIndex < 0) {
	    fragIndex = url.length;
	  }
	  if (fragIndex < queryIndex) {
	    return queries;
	  }
	  var queryStr = url.slice(queryIndex + 1, fragIndex);
	  if (queryStr === '') {
	    return queries;
	  }
	  var parts = queryStr.split('&');
	  for (var i = 0; i < parts.length; i++) {
	    var pair = parts[i].split('=');
	    if (pair.length === 0 || pair[0] === '') {
	      continue;
	    }
	    var qname = decodeURIComponent(pair[0]);
	    if (queries.hasOwnProperty(qname)) {
	      continue;
	    }
	    if (pair.length === 1) {
	      queries[qname] = true;
	    } else if (pair.length === 2) {
	      queries[qname] = decodeURIComponent(pair[1]);
	    } else {
	      throw new Error('Malformed URL');
	    }
	  }
	  return queries;
	}
	
	var warned = [];
	function warn(text) {
	  if (warned.indexOf(text) === -1) {
	    warned.push(text);
	    console.warn('cozy-client-js', text);
	  }
	}

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LocalStorage = exports.LocalStorage = function () {
	  function LocalStorage(storage, prefix) {
	    _classCallCheck(this, LocalStorage);
	
	    if (!storage && typeof window !== 'undefined') {
	      storage = window.localStorage;
	    }
	    this.storage = storage;
	    this.prefix = prefix || 'cozy:oauth:';
	  }
	
	  _createClass(LocalStorage, [{
	    key: 'save',
	    value: function save(key, value) {
	      var _this = this;
	
	      return new Promise(function (resolve) {
	        _this.storage.setItem(_this.prefix + key, JSON.stringify(value));
	        resolve(value);
	      });
	    }
	  }, {
	    key: 'load',
	    value: function load(key) {
	      var _this2 = this;
	
	      return new Promise(function (resolve) {
	        var item = _this2.storage.getItem(_this2.prefix + key);
	        if (!item) {
	          resolve();
	        } else {
	          resolve(JSON.parse(item));
	        }
	      });
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(key) {
	      var _this3 = this;
	
	      return new Promise(function (resolve) {
	        return resolve(_this3.storage.removeItem(_this3.prefix + key));
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this4 = this;
	
	      return new Promise(function (resolve) {
	        var storage = _this4.storage;
	        for (var i = 0; i < storage.length; i++) {
	          var key = storage.key(i);
	          if (key.indexOf(_this4.prefix) === 0) {
	            storage.removeItem(key);
	          }
	        }
	        resolve();
	      });
	    }
	  }]);
	
	  return LocalStorage;
	}();
	
	var MemoryStorage = exports.MemoryStorage = function () {
	  function MemoryStorage() {
	    _classCallCheck(this, MemoryStorage);
	
	    this.hash = Object.create(null);
	  }
	
	  _createClass(MemoryStorage, [{
	    key: 'save',
	    value: function save(key, value) {
	      this.hash[key] = value;
	      return Promise.resolve(value);
	    }
	  }, {
	    key: 'load',
	    value: function load(key) {
	      return Promise.resolve(this.hash[key]);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(key) {
	      var deleted = delete this.hash[key];
	      return Promise.resolve(deleted);
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.hash = Object.create(null);
	      return Promise.resolve();
	    }
	  }]);

	  return MemoryStorage;
	}();

/***/ },
/* 194 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.getAppToken = getAppToken;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* global btoa */
	var V2TOKEN_ABORT_TIMEOUT = 3000;
	
	function getAppToken() {
	  return new Promise(function (resolve, reject) {
	    if (typeof window === 'undefined') {
	      return reject(new Error('getV2Token should be used in browser'));
	    } else if (!window.parent) {
	      return reject(new Error('getV2Token should be used in iframe'));
	    } else if (!window.parent.postMessage) {
	      return reject(new Error('getV2Token should be used in modern browser'));
	    }
	    var origin = window.location.origin;
	    var intent = { action: 'getToken' };
	    var timeout = null;
	    var receiver = function receiver(event) {
	      var token = void 0;
	      try {
	        token = new AppToken({
	          appName: event.data.appName,
	          token: event.data.token
	        });
	      } catch (e) {
	        reject(e);
	        return;
	      }
	      window.removeEventListener('message', receiver);
	      clearTimeout(timeout);
	      resolve({ client: null, token: token });
	    };
	    window.addEventListener('message', receiver, false);
	    window.parent.postMessage(intent, origin);
	    timeout = setTimeout(function () {
	      reject(new Error('No response from parent iframe after 3s'));
	    }, V2TOKEN_ABORT_TIMEOUT);
	  });
	}
	
	var AppToken = exports.AppToken = function () {
	  function AppToken(opts) {
	    _classCallCheck(this, AppToken);
	
	    this.appName = opts.appName || '';
	    this.token = opts.token || '';
	  }
	
	  _createClass(AppToken, [{
	    key: 'toAuthHeader',
	    value: function toAuthHeader() {
	      return 'Basic ' + btoa(this.appName + ':' + this.token);
	    }
	  }]);

	  return AppToken;
	}();

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppToken = exports.AccessToken = exports.Client = exports.StateKey = exports.CredsKey = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global btoa */
	
	
	exports.client = client;
	exports.registerClient = registerClient;
	exports.updateClient = updateClient;
	exports.unregisterClient = unregisterClient;
	exports.getClient = getClient;
	exports.getAuthCodeURL = getAuthCodeURL;
	exports.getAccessToken = getAccessToken;
	exports.refreshToken = refreshToken;
	exports.oauthFlow = oauthFlow;
	
	var _utils = __webpack_require__(192);
	
	var _fetch = __webpack_require__(196);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StateSize = 16;
	
	var CredsKey = exports.CredsKey = 'creds';
	var StateKey = exports.StateKey = 'state';
	
	var Client = exports.Client = function () {
	  function Client(opts) {
	    _classCallCheck(this, Client);
	
	    this.clientID = opts.clientID || opts.client_id || '';
	    this.clientSecret = opts.clientSecret || opts.client_secret || '';
	    this.registrationAccessToken = opts.registrationAccessToken || opts.registration_access_token || '';
	
	    if (opts.redirect_uris) {
	      this.redirectURI = opts.redirect_uris[0] || '';
	    } else {
	      this.redirectURI = opts.redirectURI || '';
	    }
	
	    this.softwareID = opts.softwareID || opts.software_id || '';
	    this.softwareVersion = opts.softwareVersion || opts.software_version || '';
	    this.clientName = opts.clientName || opts.client_name || '';
	    this.clientKind = opts.clientKind || opts.client_kind || '';
	    this.clientURI = opts.clientURI || opts.client_uri || '';
	
	    this.logoURI = opts.logoURI || opts.logo_uri || '';
	    this.policyURI = opts.policyURI || opts.policy_uri || '';
	
	    if (!this.registrationAccessToken) {
	      if (this.redirectURI === '') {
	        throw new Error('Missing redirectURI field');
	      }
	      if (this.softwareID === '') {
	        throw new Error('Missing softwareID field');
	      }
	      if (this.clientName === '') {
	        throw new Error('Missing clientName field');
	      }
	    }
	  }
	
	  _createClass(Client, [{
	    key: 'isRegistered',
	    value: function isRegistered() {
	      return this.clientID !== '';
	    }
	  }, {
	    key: 'toRegisterJSON',
	    value: function toRegisterJSON() {
	      return {
	        redirect_uris: [this.redirectURI],
	        software_id: this.softwareID,
	        software_version: this.softwareVersion,
	        client_name: this.clientName,
	        client_kind: this.clientKind,
	        client_uri: this.clientURI,
	        logo_uri: this.logoURI,
	        policy_uri: this.policyURI
	      };
	    }
	  }, {
	    key: 'toAuthHeader',
	    value: function toAuthHeader() {
	      return 'Bearer ' + this.registrationAccessToken;
	    }
	  }]);
	
	  return Client;
	}();
	
	var AccessToken = exports.AccessToken = function () {
	  function AccessToken(opts) {
	    _classCallCheck(this, AccessToken);
	
	    this.tokenType = opts.tokenType || opts.token_type;
	    this.accessToken = opts.accessToken || opts.access_token;
	    this.refreshToken = opts.refreshToken || opts.refresh_token;
	    this.scope = opts.scope;
	  }
	
	  _createClass(AccessToken, [{
	    key: 'toAuthHeader',
	    value: function toAuthHeader() {
	      return 'Bearer ' + this.accessToken;
	    }
	  }, {
	    key: 'toBasicAuth',
	    value: function toBasicAuth() {
	      return 'user:' + this.accessToken + '@';
	    }
	  }]);
	
	  return AccessToken;
	}();
	
	var AppToken = exports.AppToken = function () {
	  function AppToken(opts) {
	    _classCallCheck(this, AppToken);
	
	    this.token = opts.token || '';
	  }
	
	  _createClass(AppToken, [{
	    key: 'toAuthHeader',
	    value: function toAuthHeader() {
	      return 'Bearer ' + this.token;
	    }
	  }, {
	    key: 'toBasicAuth',
	    value: function toBasicAuth() {
	      return 'user:' + this.token + '@';
	    }
	  }]);
	
	  return AppToken;
	}();
	
	function client(cozy, clientParams) {
	  if (!clientParams) {
	    clientParams = cozy._clientParams;
	  }
	  if (clientParams instanceof Client) {
	    return clientParams;
	  }
	  return new Client(clientParams);
	}
	
	function registerClient(cozy, clientParams) {
	  var cli = client(cozy, clientParams);
	  if (cli.isRegistered()) {
	    return Promise.reject(new Error('Client already registered'));
	  }
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/auth/register', cli.toRegisterJSON(), {
	    disableAuth: true
	  }).then(function (data) {
	    return new Client(data);
	  });
	}
	
	function updateClient(cozy, clientParams) {
	  var resetSecret = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  var cli = client(cozy, clientParams);
	  if (!cli.isRegistered()) {
	    return Promise.reject(new Error('Client not registered'));
	  }
	  var data = cli.toRegisterJSON();
	  data.client_id = cli.clientID;
	  if (resetSecret) data.client_secret = cli.clientSecret;
	
	  return (0, _fetch.cozyFetchJSON)(cozy, 'PUT', '/auth/register/' + cli.clientID, data, {
	    manualAuthCredentials: {
	      token: cli
	    }
	  }).then(function (data) {
	    return createClient(data, cli);
	  });
	}
	
	function unregisterClient(cozy, clientParams) {
	  var cli = client(cozy, clientParams);
	  if (!cli.isRegistered()) {
	    return Promise.reject(new Error('Client not registered'));
	  }
	  return (0, _fetch.cozyFetchJSON)(cozy, 'DELETE', '/auth/register/' + cli.clientID, null, {
	    manualAuthCredentials: {
	      token: cli
	    }
	  });
	}
	
	// getClient will retrive the registered client informations from the server.
	function getClient(cozy, clientParams) {
	  var cli = client(cozy, clientParams);
	  if (!cli.isRegistered()) {
	    return Promise.reject(new Error('Client not registered'));
	  }
	  if ((0, _utils.isOffline)()) {
	    return Promise.resolve(cli);
	  }
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/auth/register/' + cli.clientID, null, {
	    manualAuthCredentials: {
	      token: cli
	    }
	  }).then(function (data) {
	    return createClient(data, cli);
	  }).catch(function (err) {
	    // If we fall into an error while fetching the client (because of a
	    // bad connectivity for instance), we do not bail the whole process
	    // since the client should be able to continue with the persisted
	    // client and token.
	    //
	    // If it is an explicit Unauthorized error though, we bail, clear th
	    // cache and retry.
	    if (_fetch.FetchError.isUnauthorized(err) || _fetch.FetchError.isNotFound(err)) {
	      throw new Error('Client has been revoked');
	    }
	    throw err;
	  });
	}
	
	// createClient returns a new Client instance given on object containing the
	// data of the client, from the API, and an old instance of the client.
	function createClient(data, oldClient) {
	  var newClient = new Client(data);
	  // we need to keep track of the registrationAccessToken since it is send
	  // only on registration. The GET /auth/register/:client-id endpoint does
	  // not return this token.
	  var shouldPassRegistration = !!oldClient && oldClient.registrationAccessToken !== '' && newClient.registrationAccessToken === '';
	  if (shouldPassRegistration) {
	    newClient.registrationAccessToken = oldClient.registrationAccessToken;
	  }
	  return newClient;
	}
	
	// getAuthCodeURL returns a pair {authURL,state} given a registered client. The
	// state should be stored in order to be checked against on the user validation
	// phase.
	function getAuthCodeURL(cozy, client) {
	  var scopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	  if (!(client instanceof Client)) {
	    client = new Client(client);
	  }
	  if (!client.isRegistered()) {
	    throw new Error('Client not registered');
	  }
	  var state = generateRandomState();
	  var query = {
	    'client_id': client.clientID,
	    'redirect_uri': client.redirectURI,
	    'state': state,
	    'response_type': 'code',
	    'scope': scopes.join(' ')
	  };
	  return {
	    url: cozy._url + ('/auth/authorize?' + (0, _utils.encodeQuery)(query)),
	    state: state
	  };
	}
	
	// getAccessToken perform a request on the access_token entrypoint with the
	// authorization_code grant type in order to generate a new access token for a
	// newly registered client.
	//
	// This method extracts the access code and state from the given URL. By
	// default it uses window.location.href. Also, it checks the given state with
	// the one specified in the URL query parameter to prevent CSRF attacks.
	function getAccessToken(cozy, client, state) {
	  var pageURL = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
	
	  if (!state) {
	    return Promise.reject(new Error('Missing state value'));
	  }
	  var grantQueries = getGrantCodeFromPageURL(pageURL);
	  if (grantQueries === null) {
	    return Promise.reject(new Error('Missing states from current URL'));
	  }
	  if (state !== grantQueries.state) {
	    return Promise.reject(new Error('Given state does not match url query state'));
	  }
	  return retrieveToken(cozy, client, null, {
	    'grant_type': 'authorization_code',
	    'code': grantQueries.code
	  });
	}
	
	// refreshToken perform a request on the access_token entrypoint with the
	// refresh_token grant type in order to refresh the given token.
	function refreshToken(cozy, client, token) {
	  return retrieveToken(cozy, client, token, {
	    'grant_type': 'refresh_token',
	    'refresh_token': token.refreshToken
	  });
	}
	
	// oauthFlow performs the stateful registration and access granting of an OAuth
	// client.
	function oauthFlow(cozy, storage, clientParams, onRegistered) {
	  var ignoreCachedCredentials = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	  if (ignoreCachedCredentials) {
	    return storage.clear().then(function () {
	      return oauthFlow(cozy, storage, clientParams, onRegistered, false);
	    });
	  }
	
	  var tryCount = 0;
	
	  function clearAndRetry(err) {
	    if (tryCount++ > 0) {
	      throw err;
	    }
	    return storage.clear().then(function () {
	      return oauthFlow(cozy, storage, clientParams, onRegistered);
	    });
	  }
	
	  function registerNewClient() {
	    return storage.clear().then(function () {
	      return registerClient(cozy, clientParams);
	    }).then(function (client) {
	      var _getAuthCodeURL = getAuthCodeURL(cozy, client, clientParams.scopes),
	          url = _getAuthCodeURL.url,
	          state = _getAuthCodeURL.state;
	
	      return storage.save(StateKey, { client: client, url: url, state: state });
	    });
	  }
	
	  return Promise.all([storage.load(CredsKey), storage.load(StateKey)]).then(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        credentials = _ref2[0],
	        storedState = _ref2[1];
	
	    // If credentials are cached we re-fetch the registered client with the
	    // said token. Fetching the client, if the token is outdated we should try
	    // the token is refreshed.
	    if (credentials) {
	      var oldClient = void 0,
	          _token = void 0;
	      try {
	        oldClient = new Client(credentials.client);
	        _token = new AccessToken(credentials.token);
	      } catch (err) {
	        // bad cache, we should clear and retry the process
	        return clearAndRetry(err);
	      }
	      return getClient(cozy, oldClient).then(function (client) {
	        return { client: client, token: _token };
	      }).catch(function (err) {
	        // If we fall into an error while fetching the client (because of a
	        // bad connectivity for instance), we do not bail the whole process
	        // since the client should be able to continue with the persisted
	        // client and token.
	        //
	        // If it is an explicit Unauthorized error though, we bail, clear th
	        // cache and retry.
	        if (_fetch.FetchError.isUnauthorized(err) || _fetch.FetchError.isNotFound(err)) {
	          throw new Error('Client has been revoked');
	        }
	        return { client: oldClient, token: _token };
	      });
	    }
	
	    // Otherwise register a new client if necessary (ie. no client is stored)
	    // and call the onRegistered callback to wait for the user to grant the
	    // access. Finally fetches to access token on success.
	    var statePromise = void 0;
	    if (!storedState) {
	      statePromise = registerNewClient();
	    } else {
	      statePromise = Promise.resolve(storedState);
	    }
	
	    var client = void 0,
	        state = void 0,
	        token = void 0;
	    return statePromise.then(function (data) {
	      client = data.client;
	      state = data.state;
	      return Promise.resolve(onRegistered(client, data.url));
	    }).then(function (pageURL) {
	      return getAccessToken(cozy, client, state, pageURL);
	    }).then(function (t) {
	      token = t;
	    }).then(function () {
	      return storage.delete(StateKey);
	    }).then(function () {
	      return { client: client, token: token };
	    });
	  }).then(function (creds) {
	    return storage.save(CredsKey, creds);
	  }, function (err) {
	    if (_fetch.FetchError.isUnauthorized(err)) {
	      return clearAndRetry(err);
	    } else {
	      throw err;
	    }
	  });
	}
	
	// retrieveToken perform a request on the access_token entrypoint in order to
	// fetch a token.
	function retrieveToken(cozy, client, token, query) {
	  if (!(client instanceof Client)) {
	    client = new Client(client);
	  }
	  if (!client.isRegistered()) {
	    return Promise.reject(new Error('Client not registered'));
	  }
	  var body = (0, _utils.encodeQuery)(Object.assign({}, query, {
	    'client_id': client.clientID,
	    'client_secret': client.clientSecret
	  }));
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/auth/access_token', body, {
	    disableAuth: token === null,
	    dontRetry: true,
	    manualAuthCredentials: { client: client, token: token },
	    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	  }).then(function (data) {
	    data.refreshToken = data.refreshToken || query.refresh_token;
	    return new AccessToken(data);
	  });
	}
	
	// getGrantCodeFromPageURL extract the state and access_code query parameters
	// from the given url
	function getGrantCodeFromPageURL() {
	  var pageURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	  if (pageURL === '' && typeof window !== 'undefined') {
	    pageURL = window.location.href;
	  }
	  var queries = (0, _utils.decodeQuery)(pageURL);
	  if (!queries.hasOwnProperty('state')) {
	    return null;
	  }
	  return {
	    state: queries['state'],
	    code: queries['access_code']
	  };
	}
	
	// generateRandomState will try to generate a 128bits random value from a secure
	// pseudo random generator. It will fallback on Math.random if it cannot find
	// such generator.
	function generateRandomState() {
	  var buffer = void 0;
	  if (typeof window !== 'undefined' && typeof window.crypto !== 'undefined' && typeof window.crypto.getRandomValues === 'function') {
	    buffer = new Uint8Array(StateSize);
	    window.crypto.getRandomValues(buffer);
	  } else {
	    try {
	      buffer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"crypto\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).randomBytes(StateSize);
	    } catch (e) {}
	  }
	  if (!buffer) {
	    buffer = new Array(StateSize);
	    for (var i = 0; i < buffer.length; i++) {
	      buffer[i] = Math.floor(Math.random() * 255);
	    }
	  }
	  return btoa(String.fromCharCode.apply(null, buffer)).replace(/=+$/, '').replace(/\//g, '_').replace(/\+/g, '-');
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FetchError = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* global fetch */
	
	
	exports.cozyFetch = cozyFetch;
	exports.cozyFetchJSON = cozyFetchJSON;
	exports.cozyFetchRawJSON = cozyFetchRawJSON;
	
	var _auth_v = __webpack_require__(195);
	
	var _utils = __webpack_require__(192);
	
	var _jsonapi = __webpack_require__(197);
	
	var _jsonapi2 = _interopRequireDefault(_jsonapi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function cozyFetch(cozy, path) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  return cozy.fullpath(path).then(function (fullpath) {
	    var resp = void 0;
	    if (options.disableAuth) {
	      resp = fetch(fullpath, options);
	    } else if (options.manualAuthCredentials) {
	      resp = cozyFetchWithAuth(cozy, fullpath, options, options.manualAuthCredentials);
	    } else {
	      resp = cozy.authorize().then(function (credentials) {
	        return cozyFetchWithAuth(cozy, fullpath, options, credentials);
	      });
	    }
	    return resp.then(handleResponse);
	  });
	}
	
	function cozyFetchWithAuth(cozy, fullpath, options, credentials) {
	  if (credentials) {
	    options.headers = options.headers || {};
	    options.headers['Authorization'] = credentials.token.toAuthHeader();
	  }
	
	  // the option credentials:include tells fetch to include the cookies in the
	  // request even for cross-origin requests
	  options.credentials = 'include';
	
	  return Promise.all([cozy.isV2(), fetch(fullpath, options)]).then(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        isV2 = _ref2[0],
	        res = _ref2[1];
	
	    if (res.status !== 400 && res.status !== 401 || isV2 || !credentials || options.dontRetry) {
	      return res;
	    }
	    // we try to refresh the token only for OAuth, ie, the client defined
	    // and the token is an instance of AccessToken.
	    var client = credentials.client,
	        token = credentials.token;
	
	    if (!client || !(token instanceof _auth_v.AccessToken)) {
	      return res;
	    }
	    options.dontRetry = true;
	    return (0, _utils.retry)(function () {
	      return (0, _auth_v.refreshToken)(cozy, client, token);
	    }, 3)().then(function (newToken) {
	      return cozy.saveCredentials(client, newToken);
	    }).then(function (credentials) {
	      return cozyFetchWithAuth(cozy, fullpath, options, credentials);
	    });
	  });
	}
	
	function cozyFetchJSON(cozy, method, path, body) {
	  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	  return fetchJSON(cozy, method, path, body, options).then(handleJSONResponse);
	}
	
	function cozyFetchRawJSON(cozy, method, path, body) {
	  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	  return fetchJSON(cozy, method, path, body, options).then(function (response) {
	    return handleJSONResponse(response, false);
	  });
	}
	
	function fetchJSON(cozy, method, path, body) {
	  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	  options.method = method;
	
	  var headers = options.headers = options.headers || {};
	
	  headers['Accept'] = 'application/json';
	
	  if (method !== 'GET' && method !== 'HEAD' && body !== undefined) {
	    if (headers['Content-Type']) {
	      options.body = body;
	    } else {
	      headers['Content-Type'] = 'application/json';
	      options.body = JSON.stringify(body);
	    }
	  }
	
	  return cozyFetch(cozy, path, options);
	}
	
	function handleResponse(res) {
	  if (res.ok) {
	    return res;
	  }
	  var data = void 0;
	  var contentType = res.headers.get('content-type');
	  if (contentType && contentType.indexOf('json') >= 0) {
	    data = res.json();
	  } else {
	    data = res.text();
	  }
	  return data.then(function (err) {
	    throw new FetchError(res, err);
	  });
	}
	
	function handleJSONResponse(res) {
	  var processJSONAPI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	  var contentType = res.headers.get('content-type');
	  if (!contentType || contentType.indexOf('json') < 0) {
	    return res.text(function (data) {
	      throw new FetchError(res, new Error('Response is not JSON: ' + data));
	    });
	  }
	
	  var json = res.json();
	  if (contentType.indexOf('application/vnd.api+json') === 0 && processJSONAPI) {
	    return json.then(_jsonapi2.default);
	  } else {
	    return json;
	  }
	}
	
	var FetchError = exports.FetchError = function (_Error) {
	  _inherits(FetchError, _Error);
	
	  function FetchError(res, reason) {
	    _classCallCheck(this, FetchError);
	
	    var _this = _possibleConstructorReturn(this, (FetchError.__proto__ || Object.getPrototypeOf(FetchError)).call(this));
	
	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(_this, _this.constructor);
	    }
	    // XXX We have to hardcode this because babel doesn't play nice when extending Error
	    _this.name = 'FetchError';
	    _this.response = res;
	    _this.url = res.url;
	    _this.status = res.status;
	    _this.reason = reason;
	
	    Object.defineProperty(_this, 'message', {
	      value: reason.message || (typeof reason === 'string' ? reason : JSON.stringify(reason))
	    });
	    return _this;
	  }
	
	  return FetchError;
	}(Error);
	
	FetchError.isUnauthorized = function (err) {
	  // XXX We can't use err instanceof FetchError because of the caveats of babel
	  return err.name === 'FetchError' && err.status === 401;
	};
	
	FetchError.isNotFound = function (err) {
	  // XXX We can't use err instanceof FetchError because of the caveats of babel
	  return err.name === 'FetchError' && err.status === 404;
	};

/***/ },
/* 197 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function indexKey(doc) {
	  return doc.type + '/' + doc.id;
	}
	
	function findByRef(resources, ref) {
	  return resources[indexKey(ref)];
	}
	
	function handleResource(rawResource, resources, links) {
	  var resource = {
	    _id: rawResource.id,
	    _type: rawResource.type,
	    _rev: rawResource.meta && rawResource.meta.rev,
	    links: Object.assign({}, rawResource.links, links),
	    attributes: rawResource.attributes,
	    relations: function relations(name) {
	      var rels = rawResource.relationships[name];
	      if (rels === undefined || rels.data === undefined) return undefined;
	      if (rels.data === null) return null;
	      if (!Array.isArray(rels.data)) return findByRef(resources, rels.data);
	      return rels.data.map(function (ref) {
	        return findByRef(resources, ref);
	      });
	    }
	  };
	  if (rawResource.relationships) {
	    resource.relationships = rawResource.relationships;
	  }
	
	  resources[indexKey(rawResource)] = resource;
	
	  return resource;
	}
	
	function handleTopLevel(doc) {
	  var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  // build an index of included resource by Type & ID
	  var included = doc.included;
	
	  if (Array.isArray(included)) {
	    included.forEach(function (r) {
	      return handleResource(r, resources, doc.links);
	    });
	  }
	
	  if (Array.isArray(doc.data)) {
	    return doc.data.map(function (r) {
	      return handleResource(r, resources, doc.links);
	    });
	  } else {
	    return handleResource(doc.data, resources, doc.links);
	  }
	}
	
	exports.default = handleTopLevel;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = create;
	exports.find = find;
	exports.findMany = findMany;
	exports.findAll = findAll;
	exports.changesFeed = changesFeed;
	exports.update = update;
	exports.updateAttributes = updateAttributes;
	exports._delete = _delete;
	
	var _utils = __webpack_require__(192);
	
	var _doctypes = __webpack_require__(199);
	
	var _fetch = __webpack_require__(196);
	
	var NOREV = 'stack-v2-no-rev';
	
	function create(cozy, doctype, attributes) {
	  return cozy.isV2().then(function (isV2) {
	    doctype = (0, _doctypes.normalizeDoctype)(cozy, isV2, doctype);
	    if (isV2) {
	      attributes.docType = doctype;
	    }
	    var path = (0, _utils.createPath)(cozy, isV2, doctype, attributes._id);
	    var httpVerb = attributes._id ? 'PUT' : 'POST';
	    delete attributes._id;
	    return (0, _fetch.cozyFetchJSON)(cozy, httpVerb, path, attributes).then(function (resp) {
	      if (isV2) {
	        return find(cozy, doctype, resp._id);
	      } else {
	        return resp.data;
	      }
	    });
	  });
	}
	
	function find(cozy, doctype, id) {
	  return cozy.isV2().then(function (isV2) {
	    doctype = (0, _doctypes.normalizeDoctype)(cozy, isV2, doctype);
	
	    if (!id) {
	      return Promise.reject(new Error('Missing id parameter'));
	    }
	
	    var path = (0, _utils.createPath)(cozy, isV2, doctype, id);
	    return (0, _fetch.cozyFetchJSON)(cozy, 'GET', path).then(function (resp) {
	      if (isV2) {
	        return Object.assign(resp, { _rev: NOREV });
	      } else {
	        return resp;
	      }
	    });
	  });
	}
	
	function findMany(cozy, doctype, ids) {
	  if (!(ids instanceof Array)) {
	    return Promise.reject(new Error('Parameter ids must be a non-empty array'));
	  }
	  if (ids.length === 0) {
	    // So users don't need to be defensive regarding the array content.
	    // This should not hide issues in user code since the result will be an
	    // empty object anyway.
	    return Promise.resolve({});
	  }
	
	  return cozy.isV2().then(function (isV2) {
	    if (isV2) {
	      return Promise.reject(new Error('findMany is not available on v2'));
	    }
	
	    var path = (0, _utils.createPath)(cozy, isV2, doctype, '_all_docs', { include_docs: true });
	
	    return (0, _fetch.cozyFetchJSON)(cozy, 'POST', path, { keys: ids }).then(function (resp) {
	      var docs = {};
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = resp.rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var row = _step.value;
	          var key = row.key,
	              doc = row.doc,
	              error = row.error;
	
	          docs[key] = error ? { error: error } : { doc: doc };
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return docs;
	    }).catch(function (error) {
	      if (error.status !== 404) return Promise.reject(error);
	
	      // When no doc was ever created and the database does not exist yet,
	      // the response will be a 404 error.
	      var docs = {};
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = ids[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var id = _step2.value;
	
	          docs[id] = { error: error };
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      return docs;
	    });
	  });
	}
	
	function findAll(cozy, doctype) {
	  return cozy.isV2().then(function (isV2) {
	    if (isV2) {
	      return Promise.reject(new Error('findAll is not available on v2'));
	    }
	
	    var path = (0, _utils.createPath)(cozy, isV2, doctype, '_all_docs', { include_docs: true });
	
	    return (0, _fetch.cozyFetchJSON)(cozy, 'POST', path, {}).then(function (resp) {
	      var docs = [];
	
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = resp.rows[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var row = _step3.value;
	          var doc = row.doc;
	          // if not couchDB indexes
	
	          if (!doc._id.match(/_design\//)) docs.push(doc);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	
	      return docs;
	    }).catch(function (error) {
	      // the _all_docs endpoint returns a 404 error if no document with the given
	      // doctype exists.
	      if (error.status === 404) return [];
	      throw error;
	    });
	  });
	}
	
	function changesFeed(cozy, doctype, options) {
	  return cozy.isV2().then(function (isV2) {
	    doctype = (0, _doctypes.normalizeDoctype)(cozy, isV2, doctype);
	    var path = (0, _utils.createPath)(cozy, isV2, doctype, '_changes', options);
	    return (0, _fetch.cozyFetchJSON)(cozy, 'GET', path);
	  });
	}
	
	function update(cozy, doctype, doc, changes) {
	  return cozy.isV2().then(function (isV2) {
	    doctype = (0, _doctypes.normalizeDoctype)(cozy, isV2, doctype);
	    var _id = doc._id,
	        _rev = doc._rev;
	
	
	    if (!_id) {
	      return Promise.reject(new Error('Missing _id field in passed document'));
	    }
	
	    if (!isV2 && !_rev) {
	      return Promise.reject(new Error('Missing _rev field in passed document'));
	    }
	
	    if (isV2) {
	      changes = Object.assign({ _id: _id }, changes);
	    } else {
	      changes = Object.assign({ _id: _id, _rev: _rev }, changes);
	    }
	
	    var path = (0, _utils.createPath)(cozy, isV2, doctype, _id);
	    return (0, _fetch.cozyFetchJSON)(cozy, 'PUT', path, changes).then(function (resp) {
	      if (isV2) {
	        return find(cozy, doctype, _id);
	      } else {
	        return resp.data;
	      }
	    });
	  });
	}
	
	function updateAttributes(cozy, doctype, _id, changes) {
	  var tries = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
	
	  return cozy.isV2().then(function (isV2) {
	    doctype = (0, _doctypes.normalizeDoctype)(cozy, isV2, doctype);
	    return find(cozy, doctype, _id).then(function (doc) {
	      return update(cozy, doctype, doc, Object.assign({ _id: _id }, doc, changes));
	    }).catch(function (err) {
	      if (tries > 0) {
	        return updateAttributes(cozy, doctype, _id, changes, tries - 1);
	      } else {
	        throw err;
	      }
	    });
	  });
	}
	
	function _delete(cozy, doctype, doc) {
	  return cozy.isV2().then(function (isV2) {
	    doctype = (0, _doctypes.normalizeDoctype)(cozy, isV2, doctype);
	    var _id = doc._id,
	        _rev = doc._rev;
	
	
	    if (!_id) {
	      return Promise.reject(new Error('Missing _id field in passed document'));
	    }
	
	    if (!isV2 && !_rev) {
	      return Promise.reject(new Error('Missing _rev field in passed document'));
	    }
	
	    var query = isV2 ? null : { rev: _rev };
	    var path = (0, _utils.createPath)(cozy, isV2, doctype, _id, query);
	    return (0, _fetch.cozyFetchJSON)(cozy, 'DELETE', path).then(function (resp) {
	      if (isV2) {
	        return { id: _id, rev: NOREV };
	      } else {
	        return resp;
	      }
	    });
	  });
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DOCTYPE_FILES = undefined;
	exports.normalizeDoctype = normalizeDoctype;
	
	var _utils = __webpack_require__(192);
	
	var DOCTYPE_FILES = exports.DOCTYPE_FILES = 'io.cozy.files';
	
	var KNOWN_DOCTYPES = {
	  'files': DOCTYPE_FILES,
	  'folder': DOCTYPE_FILES,
	  'contact': 'io.cozy.contacts',
	  'event': 'io.cozy.events',
	  'track': 'io.cozy.labs.music.track',
	  'playlist': 'io.cozy.labs.music.playlist'
	};
	
	var REVERSE_KNOWN = {};
	Object.keys(KNOWN_DOCTYPES).forEach(function (k) {
	  REVERSE_KNOWN[KNOWN_DOCTYPES[k]] = k;
	});
	
	function normalizeDoctype(cozy, isV2, doctype) {
	  var isQualified = doctype.indexOf('.') !== -1;
	  if (isV2 && isQualified) {
	    var known = REVERSE_KNOWN[doctype];
	    if (known) return known;
	    return doctype.replace(/\./g, '-');
	  }
	  if (!isV2 && !isQualified) {
	    var _known = KNOWN_DOCTYPES[doctype];
	    if (_known) {
	      (0, _utils.warn)('you are using a non-qualified doctype ' + doctype + ' assumed to be ' + _known);
	      return _known;
	    }
	    throw new Error('Doctype ' + doctype + ' should be qualified.');
	  }
	  return doctype;
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.defineIndex = defineIndex;
	exports.query = query;
	exports.queryFiles = queryFiles;
	exports.parseSelector = parseSelector;
	exports.normalizeSelector = normalizeSelector;
	exports.makeMapReduceQuery = makeMapReduceQuery;
	
	var _utils = __webpack_require__(192);
	
	var _doctypes = __webpack_require__(199);
	
	var _fetch = __webpack_require__(196);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function defineIndex(cozy, doctype, fields) {
	  return cozy.isV2().then(function (isV2) {
	    doctype = (0, _doctypes.normalizeDoctype)(cozy, isV2, doctype);
	    if (!Array.isArray(fields) || fields.length === 0) {
	      throw new Error('defineIndex fields should be a non-empty array');
	    }
	    if (isV2) {
	      return defineIndexV2(cozy, doctype, fields);
	    } else {
	      return defineIndexV3(cozy, doctype, fields);
	    }
	  });
	}
	
	function query(cozy, indexRef, options) {
	  return cozy.isV2().then(function (isV2) {
	    if (!indexRef) {
	      throw new Error('query should be passed the indexRef');
	    }
	    if (isV2) {
	      return queryV2(cozy, indexRef, options);
	    } else {
	      return queryV3(cozy, indexRef, options);
	    }
	  });
	}
	
	function queryFiles(cozy, indexRef, options) {
	  var opts = getV3Options(indexRef, options);
	  return (0, _fetch.cozyFetchRawJSON)(cozy, 'POST', '/files/_find', opts).then(function (response) {
	    return options.wholeResponse ? response : response.docs;
	  });
	}
	
	// Internals
	
	var VALUEOPERATORS = ['$eq', '$gt', '$gte', '$lt', '$lte'];
	var LOGICOPERATORS = ['$or', '$and', '$not'];
	
	/* eslint-disable */
	var MAP_TEMPLATE = function (doc) {
	  if (doc.docType.toLowerCase() === 'DOCTYPEPLACEHOLDER') {
	    emit(FIELDSPLACEHOLDER, doc);
	  }
	}.toString().replace(/ /g, '').replace(/\n/g, '');
	var COUCHDB_INFINITY = { '\uFFFF': '\uFFFF' };
	var COUCHDB_LOWEST = null;
	/* eslint-enable */
	
	// defineIndexV2 is equivalent to defineIndex but only works for V2.
	// It transforms the index fields into a map reduce view.
	function defineIndexV2(cozy, doctype, fields) {
	  var indexName = 'by' + fields.map(capitalize).join('');
	  var indexDefinition = { map: makeMapFunction(doctype, fields), reduce: '_count' };
	  var path = '/request/' + doctype + '/' + indexName + '/';
	  return (0, _fetch.cozyFetchJSON)(cozy, 'PUT', path, indexDefinition).then(function () {
	    return { doctype: doctype, type: 'mapreduce', name: indexName, fields: fields };
	  });
	}
	
	function defineIndexV3(cozy, doctype, fields) {
	  var path = (0, _utils.createPath)(cozy, false, doctype, '_index');
	  var indexDefinition = { 'index': { fields: fields } };
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', path, indexDefinition).then(function (response) {
	    var indexResult = { doctype: doctype, type: 'mango', name: response.id, fields: fields };
	
	    if (response.result === 'exists') return indexResult;
	
	    // indexes might not be usable right after being created; so we delay the resolving until they are
	    var selector = {};
	    selector[fields[0]] = { '$gt': null };
	
	    var opts = getV3Options(indexResult, { 'selector': selector });
	    var path = (0, _utils.createPath)(cozy, false, indexResult.doctype, '_find');
	    return (0, _fetch.cozyFetchJSON)(cozy, 'POST', path, opts).then(function () {
	      return indexResult;
	    }).catch(function () {
	      // one retry
	      return (0, _utils.sleep)(1000).then(function () {
	        return (0, _fetch.cozyFetchJSON)(cozy, 'POST', path, opts);
	      }).then(function () {
	        return indexResult;
	      }).catch(function () {
	        return (0, _utils.sleep)(500).then(function () {
	          return indexResult;
	        });
	      });
	    });
	  });
	}
	
	// queryV2 is equivalent to query but only works for V2.
	// It transforms the query into a _views call using makeMapReduceQuery
	function queryV2(cozy, indexRef, options) {
	  if (indexRef.type !== 'mapreduce') {
	    throw new Error('query indexRef should be the return value of defineIndexV2');
	  }
	  if (options.fields) {
	    (0, _utils.warn)('query fields will be ignored on v2');
	  }
	
	  var path = '/request/' + indexRef.doctype + '/' + indexRef.name + '/';
	  var opts = makeMapReduceQuery(indexRef, options);
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', path, opts).then(function (response) {
	    return response.map(function (r) {
	      return r.value;
	    });
	  });
	}
	
	// queryV3 is equivalent to query but only works for V3
	function queryV3(cozy, indexRef, options) {
	  var opts = getV3Options(indexRef, options);
	
	  var path = (0, _utils.createPath)(cozy, false, indexRef.doctype, '_find');
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', path, opts).then(function (response) {
	    return options.wholeResponse ? response : response.docs;
	  });
	}
	
	function getV3Options(indexRef, options) {
	  if (indexRef.type !== 'mango') {
	    throw new Error('indexRef should be the return value of defineIndexV3');
	  }
	
	  var opts = {
	    use_index: indexRef.name,
	    fields: options.fields,
	    selector: options.selector,
	    limit: options.limit,
	    skip: options.skip,
	    since: options.since,
	    sort: options.sort
	  };
	
	  if (options.descending) {
	    opts.sort = indexRef.fields.map(function (f) {
	      return _defineProperty({}, f, 'desc');
	    });
	  }
	
	  return opts;
	}
	
	// misc
	function capitalize(name) {
	  return name.charAt(0).toUpperCase() + name.slice(1);
	}
	
	function makeMapFunction(doctype, fields) {
	  fields = '[' + fields.map(function (name) {
	    return 'doc.' + name;
	  }).join(',') + ']';
	
	  return MAP_TEMPLATE.replace('DOCTYPEPLACEHOLDER', doctype.toLowerCase()).replace('FIELDSPLACEHOLDER', fields);
	}
	
	// parseSelector takes a mango selector and returns it as an array of filter
	// a filter is [path, operator, value] array
	// a path is an array of field names
	// This function is only exported so it can be unit tested.
	// Example :
	// parseSelector({"test":{"deep": {"$gt": 3}}})
	// [[['test', 'deep'], '$gt', 3 ]]
	function parseSelector(selector) {
	  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var operator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '$eq';
	
	  if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) !== 'object') {
	    return [[path, operator, selector]];
	  }
	
	  var keys = Object.keys(selector);
	  if (keys.length === 0) {
	    throw new Error('empty selector');
	  } else {
	    return keys.reduce(function (acc, k) {
	      if (LOGICOPERATORS.indexOf(k) !== -1) {
	        throw new Error('cozy-client-js does not support mango logic ops');
	      } else if (VALUEOPERATORS.indexOf(k) !== -1) {
	        return acc.concat(parseSelector(selector[k], path, k));
	      } else {
	        return acc.concat(parseSelector(selector[k], path.concat(k), '$eq'));
	      }
	    }, []);
	  }
	}
	
	// normalizeSelector takes a mango selector and returns it as an object
	// normalized.
	// This function is only exported so it can be unit tested.
	// Example :
	// parseSelector({"test":{"deep": {"$gt": 3}}})
	// {"test.deep": {"$gt": 3}}
	function normalizeSelector(selector) {
	  var filters = parseSelector(selector);
	  return filters.reduce(function (acc, filter) {
	    var _filter = _slicedToArray(filter, 3),
	        path = _filter[0],
	        op = _filter[1],
	        value = _filter[2];
	
	    var field = path.join('.');
	    acc[field] = acc[field] || {};
	    acc[field][op] = value;
	    return acc;
	  }, {});
	}
	
	// applySelector takes the normalized selector for the current field
	// and append the proper values to opts.startkey, opts.endkey
	function applySelector(selector, opts) {
	  var value = selector['$eq'];
	  var lower = COUCHDB_LOWEST;
	  var upper = COUCHDB_INFINITY;
	  var inclusiveEnd = void 0;
	
	  if (value) {
	    opts.startkey.push(value);
	    opts.endkey.push(value);
	    return false;
	  }
	
	  value = selector['$gt'];
	  if (value) {
	    throw new Error('operator $gt (strict greater than) not supported');
	  }
	
	  value = selector['$gte'];
	  if (value) {
	    lower = value;
	  }
	
	  value = selector['$lte'];
	  if (value) {
	    upper = value;
	    inclusiveEnd = true;
	  }
	
	  value = selector['$lt'];
	  if (value) {
	    upper = value;
	    inclusiveEnd = false;
	  }
	
	  opts.startkey.push(lower);
	  opts.endkey.push(upper);
	  if (inclusiveEnd !== undefined) opts.inclusive_end = inclusiveEnd;
	  return true;
	}
	
	// makeMapReduceQuery takes a mango query and generate _views call parameters
	// to obtain same results depending on fields in the passed indexRef.
	function makeMapReduceQuery(indexRef, query) {
	  var mrquery = {
	    startkey: [],
	    endkey: [],
	    reduce: false
	  };
	  var firstFreeValueField = null;
	  var normalizedSelector = normalizeSelector(query.selector);
	
	  indexRef.fields.forEach(function (field) {
	    var selector = normalizedSelector[field];
	
	    if (selector && firstFreeValueField != null) {
	      throw new Error('Selector on field ' + field + ', but not on ' + firstFreeValueField + ' which is higher in index fields.');
	    } else if (selector) {
	      selector.used = true;
	      var isFreeValue = applySelector(selector, mrquery);
	      if (isFreeValue) firstFreeValueField = field;
	    } else if (firstFreeValueField == null) {
	      firstFreeValueField = field;
	      mrquery.endkey.push(COUCHDB_INFINITY);
	    }
	  });
	
	  Object.keys(normalizedSelector).forEach(function (field) {
	    if (!normalizedSelector[field].used) {
	      throw new Error('Cant apply selector on ' + field + ', it is not in index');
	    }
	  });
	
	  if (query.descending) {
	    mrquery = {
	      descending: true,
	      reduce: false,
	      startkey: mrquery.endkey,
	      endkey: mrquery.startkey,
	      inclusive_end: mrquery.inclusive_end
	    };
	  }
	
	  return mrquery;
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TRASH_DIR_ID = exports.ROOT_DIR_ID = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global Blob, File */
	
	
	exports.create = create;
	exports.createDirectory = createDirectory;
	exports.createDirectoryByPath = createDirectoryByPath;
	exports.updateById = updateById;
	exports.updateAttributesById = updateAttributesById;
	exports.updateAttributesByPath = updateAttributesByPath;
	exports.trashById = trashById;
	exports.statById = statById;
	exports.statByPath = statByPath;
	exports.downloadById = downloadById;
	exports.downloadByPath = downloadByPath;
	exports.getDownloadLinkByPath = getDownloadLinkByPath;
	exports.getDownloadLinkById = getDownloadLinkById;
	exports.getFilePath = getFilePath;
	exports.getCollectionShareLink = getCollectionShareLink;
	exports.getArchiveLinkByPaths = getArchiveLinkByPaths;
	exports.getArchiveLinkByIds = getArchiveLinkByIds;
	exports.listTrash = listTrash;
	exports.clearTrash = clearTrash;
	exports.restoreById = restoreById;
	exports.destroyById = destroyById;
	
	var _fetch = __webpack_require__(196);
	
	var _jsonapi = __webpack_require__(197);
	
	var _jsonapi2 = _interopRequireDefault(_jsonapi);
	
	var _doctypes = __webpack_require__(199);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// global variables
	var ROOT_DIR_ID = exports.ROOT_DIR_ID = 'io.cozy.files.root-dir';
	var TRASH_DIR_ID = exports.TRASH_DIR_ID = 'io.cozy.files.trash-dir';
	
	var contentTypeOctetStream = 'application/octet-stream';
	
	function doUpload(cozy, data, method, path, options) {
	  if (!data) {
	    throw new Error('missing data argument');
	  }
	
	  // transform any ArrayBufferView to ArrayBuffer
	  if (data.buffer && data.buffer instanceof ArrayBuffer) {
	    data = data.buffer;
	  }
	
	  var isBuffer = typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer;
	  var isFile = typeof File !== 'undefined' && data instanceof File;
	  var isBlob = typeof Blob !== 'undefined' && data instanceof Blob;
	  var isStream = data.readable === true && typeof data.pipe === 'function';
	  var isString = typeof data === 'string';
	
	  if (!isBuffer && !isFile && !isBlob && !isStream && !isString) {
	    throw new Error('invalid data type');
	  }
	
	  var _ref = options || {},
	      contentType = _ref.contentType,
	      checksum = _ref.checksum,
	      lastModifiedDate = _ref.lastModifiedDate,
	      ifMatch = _ref.ifMatch;
	
	  if (!contentType) {
	    if (isBuffer) {
	      contentType = contentTypeOctetStream;
	    } else if (isFile) {
	      contentType = data.type || contentTypeOctetStream;
	      if (!lastModifiedDate) {
	        lastModifiedDate = data.lastModifiedDate;
	      }
	    } else if (isBlob) {
	      contentType = data.type || contentTypeOctetStream;
	    } else if (isStream) {
	      contentType = contentTypeOctetStream;
	    } else if (typeof data === 'string') {
	      contentType = 'text/plain';
	    }
	  }
	
	  if (lastModifiedDate && typeof lastModifiedDate === 'string') {
	    lastModifiedDate = new Date(lastModifiedDate);
	  }
	
	  return (0, _fetch.cozyFetch)(cozy, path, {
	    method: method,
	    headers: {
	      'Content-Type': contentType,
	      'Content-MD5': checksum || '',
	      'Date': lastModifiedDate ? lastModifiedDate.toGMTString() : '',
	      'If-Match': ifMatch || ''
	    },
	    body: data
	  }).then(function (res) {
	    var json = res.json();
	    if (!res.ok) {
	      return json.then(function (err) {
	        throw err;
	      });
	    } else {
	      return json.then(_jsonapi2.default);
	    }
	  });
	}
	
	function create(cozy, data, options) {
	  var _ref2 = options || {},
	      name = _ref2.name,
	      dirID = _ref2.dirID,
	      executable = _ref2.executable;
	
	  // handle case where data is a file and contains the name
	
	
	  if (!name && typeof data.name === 'string') {
	    name = data.name;
	  }
	
	  if (typeof name !== 'string' || name === '') {
	    throw new Error('missing name argument');
	  }
	
	  if (executable === undefined) {
	    executable = false;
	  }
	
	  var path = '/files/' + encodeURIComponent(dirID || '');
	  var query = '?Name=' + encodeURIComponent(name) + '&Type=file&Executable=' + executable;
	  return doUpload(cozy, data, 'POST', '' + path + query, options);
	}
	
	function createDirectory(cozy, options) {
	  var _ref3 = options || {},
	      name = _ref3.name,
	      dirID = _ref3.dirID,
	      lastModifiedDate = _ref3.lastModifiedDate;
	
	  if (typeof name !== 'string' || name === '') {
	    throw new Error('missing name argument');
	  }
	
	  if (lastModifiedDate && typeof lastModifiedDate === 'string') {
	    lastModifiedDate = new Date(lastModifiedDate);
	  }
	
	  var path = '/files/' + encodeURIComponent(dirID || '');
	  var query = '?Name=' + encodeURIComponent(name) + '&Type=directory';
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '' + path + query, undefined, {
	    headers: {
	      'Date': lastModifiedDate ? lastModifiedDate.toGMTString() : ''
	    }
	  });
	}
	
	function getDirectoryOrCreate(cozy, name, parentDirectory) {
	  if (parentDirectory && !parentDirectory.attributes) throw new Error('Malformed parent directory');
	
	  var path = (parentDirectory._id === ROOT_DIR_ID ? '' : parentDirectory.attributes.path) + '/' + name;
	
	  return cozy.files.statByPath(path || '/').catch(function (error) {
	    var parsedError = JSON.parse(error.message);
	    var errors = parsedError.errors;
	    if (errors && errors.length && errors[0].status === '404') {
	      return cozy.files.createDirectory({
	        name: name,
	        dirID: parentDirectory && parentDirectory._id
	      });
	    }
	
	    throw errors;
	  });
	}
	
	function createDirectoryByPath(cozy, path) {
	  var parts = path.split('/').filter(function (part) {
	    return part !== '';
	  });
	
	  var rootDirectoryPromise = cozy.files.statById(ROOT_DIR_ID);
	
	  return parts.length ? parts.reduce(function (parentDirectoryPromise, part) {
	    return parentDirectoryPromise.then(function (parentDirectory) {
	      return getDirectoryOrCreate(cozy, part, parentDirectory);
	    });
	  }, rootDirectoryPromise) : rootDirectoryPromise;
	}
	
	function updateById(cozy, id, data, options) {
	  return doUpload(cozy, data, 'PUT', '/files/' + encodeURIComponent(id), options);
	}
	
	function doUpdateAttributes(cozy, attrs, path, options) {
	  if (!attrs || (typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs)) !== 'object') {
	    throw new Error('missing attrs argument');
	  }
	
	  var _ref4 = options || {},
	      ifMatch = _ref4.ifMatch;
	
	  var body = { data: { attributes: attrs } };
	  return (0, _fetch.cozyFetchJSON)(cozy, 'PATCH', path, body, {
	    headers: {
	      'If-Match': ifMatch || ''
	    }
	  });
	}
	
	function updateAttributesById(cozy, id, attrs, options) {
	  return doUpdateAttributes(cozy, attrs, '/files/' + encodeURIComponent(id), options);
	}
	
	function updateAttributesByPath(cozy, path, attrs, options) {
	  return doUpdateAttributes(cozy, attrs, '/files/metadata?Path=' + encodeURIComponent(path), options);
	}
	
	function trashById(cozy, id, options) {
	  if (typeof id !== 'string' || id === '') {
	    throw new Error('missing id argument');
	  }
	
	  var _ref5 = options || {},
	      ifMatch = _ref5.ifMatch;
	
	  return (0, _fetch.cozyFetchJSON)(cozy, 'DELETE', '/files/' + encodeURIComponent(id), undefined, {
	    headers: {
	      'If-Match': ifMatch || ''
	    }
	  });
	}
	
	function statById(cozy, id) {
	  var offline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  if (offline && cozy.offline.hasDatabase(_doctypes.DOCTYPE_FILES)) {
	    var db = cozy.offline.getDatabase(_doctypes.DOCTYPE_FILES);
	    return Promise.all([db.get(id), db.find(Object.assign({ selector: { 'dir_id': id } }, options))]).then(function (_ref6) {
	      var _ref7 = _slicedToArray(_ref6, 2),
	          doc = _ref7[0],
	          children = _ref7[1];
	
	      if (id === ROOT_DIR_ID) {
	        children.docs = children.docs.filter(function (doc) {
	          return doc._id !== TRASH_DIR_ID;
	        });
	      }
	      children = sortFiles(children.docs.map(function (doc) {
	        return addIsDir(toJsonApi(cozy, doc));
	      }));
	      return addIsDir(toJsonApi(cozy, doc, children));
	    });
	  }
	  var query = Object.keys(options).length === 0 ? '' : '?' + encodePageOptions(options);
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/files/' + encodeURIComponent(id) + query).then(addIsDir);
	}
	
	function statByPath(cozy, path) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/files/metadata?Path=' + encodeURIComponent(path)).then(addIsDir);
	}
	
	function downloadById(cozy, id) {
	  return (0, _fetch.cozyFetch)(cozy, '/files/download/' + encodeURIComponent(id));
	}
	
	function downloadByPath(cozy, path) {
	  return (0, _fetch.cozyFetch)(cozy, '/files/download?Path=' + encodeURIComponent(path));
	}
	
	function extractResponseLinkRelated(res) {
	  var href = res.links && res.links.related;
	  if (!href) throw new Error('No related link in server response');
	  return href;
	}
	
	function getDownloadLinkByPath(cozy, path) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/files/downloads?Path=' + encodeURIComponent(path)).then(extractResponseLinkRelated);
	}
	
	function getDownloadLinkById(cozy, id) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/files/downloads?Id=' + encodeURIComponent(id)).then(extractResponseLinkRelated);
	}
	
	function getFilePath(cozy) {
	  var file = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var folder = arguments[2];
	
	  if (!folder || !folder.attributes) {
	    throw Error('Folder should be valid with an attributes.path property');
	  }
	
	  var folderPath = folder.attributes.path.endsWith('/') ? folder.attributes.path : folder.attributes.path + '/';
	
	  return '' + folderPath + file.name;
	}
	
	function getCollectionShareLink(cozy, id, collectionType) {
	  if (!id) {
	    return Promise.reject(Error('An id should be provided to create a share link'));
	  }
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/permissions?codes=email', {
	    data: {
	      type: 'io.cozy.permissions',
	      attributes: {
	        permissions: {
	          files: {
	            type: 'io.cozy.files',
	            verbs: ['GET'],
	            values: [id],
	            selector: 'referenced_by'
	          },
	          collection: {
	            type: collectionType,
	            verbs: ['GET'],
	            values: [id]
	          }
	        }
	      }
	    }
	  }).then(function (data) {
	    return { sharecode: 'sharecode=' + data.attributes.codes.email, id: 'id=' + id };
	  });
	}
	
	function getArchiveLinkByPaths(cozy, paths) {
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'files';
	
	  var archive = {
	    type: 'io.cozy.archives',
	    attributes: {
	      name: name,
	      files: paths
	    }
	  };
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/files/archive', { data: archive }).then(extractResponseLinkRelated);
	}
	
	function getArchiveLinkByIds(cozy, ids) {
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'files';
	
	  var archive = {
	    type: 'io.cozy.archives',
	    attributes: {
	      name: name,
	      ids: ids
	    }
	  };
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/files/archive', { data: archive }).then(extractResponseLinkRelated);
	}
	
	function listTrash(cozy) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/files/trash');
	}
	
	function clearTrash(cozy) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'DELETE', '/files/trash');
	}
	
	function restoreById(cozy, id) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/files/trash/' + encodeURIComponent(id));
	}
	
	function destroyById(cozy, id, options) {
	  var _ref8 = options || {},
	      ifMatch = _ref8.ifMatch;
	
	  return (0, _fetch.cozyFetchJSON)(cozy, 'DELETE', '/files/trash/' + encodeURIComponent(id), undefined, {
	    headers: {
	      'If-Match': ifMatch || ''
	    }
	  });
	}
	
	function addIsDir(obj) {
	  obj.isDir = obj.attributes.type === 'directory';
	  return obj;
	}
	
	function encodePageOptions(options) {
	  var opts = [];
	  for (var name in options) {
	    opts.push('page[' + encodeURIComponent(name) + ']=' + encodeURIComponent(options[name]));
	  }
	  return opts.join('&');
	}
	
	function toJsonApi(cozy, doc) {
	  var contents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	  var clone = JSON.parse(JSON.stringify(doc));
	  delete clone._id;
	  delete clone._rev;
	  return {
	    _id: doc._id,
	    _rev: doc._rev,
	    _type: _doctypes.DOCTYPE_FILES,
	    attributes: clone,
	    relationships: {
	      contents: {
	        data: contents,
	        meta: {
	          count: contents.length
	        }
	      }
	    },
	    relations: function relations(name) {
	      if (name === 'contents') {
	        return contents;
	      }
	    }
	  };
	}
	
	function sortFiles(allFiles) {
	  var folders = allFiles.filter(function (f) {
	    return f.attributes.type === 'directory';
	  });
	  var files = allFiles.filter(function (f) {
	    return f.attributes.type !== 'directory';
	  });
	  var sort = function sort(files) {
	    return files.sort(function (a, b) {
	      return a.attributes.name.localeCompare(b.attributes.name);
	    });
	  };
	  return sort(folders).concat(sort(files));
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = create;
	exports.createService = createService;
	
	var _fetch = __webpack_require__(196);
	
	var intentClass = 'coz-intent';
	
	// helper to serialize/deserialize an error for/from postMessage
	var errorSerializer = function () {
	  function mapErrorProperties(from, to) {
	    var result = Object.assign(to, from);
	    var nativeProperties = ['name', 'message'];
	    return nativeProperties.reduce(function (result, property) {
	      if (from[property]) {
	        to[property] = from[property];
	      }
	      return result;
	    }, result);
	  }
	  return {
	    serialize: function serialize(error) {
	      return mapErrorProperties(error, {});
	    },
	    deserialize: function deserialize(data) {
	      return mapErrorProperties(data, new Error(data.message));
	    }
	  };
	}();
	
	// inject iframe for service in given element
	function injectService(url, element, intent, data, onReadyCallback) {
	  var document = element.ownerDocument;
	  if (!document) throw new Error('Cannot retrieve document object from given element');
	
	  var window = document.defaultView;
	  if (!window) throw new Error('Cannot retrieve window object from document');
	
	  var iframe = document.createElement('iframe');
	  // if callback provided for when iframe is loaded
	  if (typeof onReadyCallback === 'function') iframe.onload = onReadyCallback;
	  iframe.setAttribute('src', url);
	  iframe.classList.add(intentClass);
	  element.appendChild(iframe);
	
	  // Keeps only http://domain:port/
	  var serviceOrigin = url.split('/', 3).join('/');
	
	  return new Promise(function (resolve, reject) {
	    var handshaken = false;
	    var messageHandler = function messageHandler(event) {
	      if (event.origin !== serviceOrigin) return;
	
	      if (event.data.type === 'load') {
	        // Safari 9.1 (At least) send a MessageEvent when the iframe loads,
	        // making the handshake fails.
	        console.warn && console.warn('Cozy Client ignored MessageEvent having data.type `load`.');
	        return;
	      }
	
	      if (event.data.type === 'intent-' + intent._id + ':ready') {
	        handshaken = true;
	        return event.source.postMessage(data, event.origin);
	      }
	
	      if (handshaken && event.data.type === 'intent-' + intent._id + ':resize') {
	        ['width', 'height', 'maxWidth', 'maxHeight'].forEach(function (prop) {
	          if (event.data.transition) element.style.transition = event.data.transition;
	          if (event.data.dimensions[prop]) element.style[prop] = event.data.dimensions[prop] + 'px';
	        });
	
	        return true;
	      }
	
	      window.removeEventListener('message', messageHandler);
	      var removeIntentFrame = function removeIntentFrame() {
	        iframe.parentNode.removeChild(iframe);
	      };
	
	      if (handshaken && event.data.type === 'intent-' + intent._id + ':exposeFrameRemoval') {
	        return resolve({ removeIntentFrame: removeIntentFrame, doc: event.data.document });
	      }
	
	      removeIntentFrame();
	
	      if (event.data.type === 'intent-' + intent._id + ':error') {
	        return reject(errorSerializer.deserialize(event.data.error));
	      }
	
	      if (handshaken && event.data.type === 'intent-' + intent._id + ':cancel') {
	        return resolve(null);
	      }
	
	      if (handshaken && event.data.type === 'intent-' + intent._id + ':done') {
	        return resolve(event.data.document);
	      }
	
	      if (!handshaken) {
	        return reject(new Error('Unexpected handshake message from intent service'));
	      }
	
	      // We may be in a state where the messageHandler is still attached to then
	      // window, but will not be needed anymore. For example, the service failed
	      // before adding the `unload` listener, so no `intent:cancel` message has
	      // never been sent.
	      // So we simply ignore other messages, and this listener will stay here,
	      // waiting for a message which will never come, forever (almost).
	    };
	
	    window.addEventListener('message', messageHandler);
	  });
	}
	
	function create(cozy, action, type) {
	  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  var permissions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	
	  if (!action) throw new Error('Misformed intent, "action" property must be provided');
	  if (!type) throw new Error('Misformed intent, "type" property must be provided');
	
	  var createPromise = (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/intents', {
	    data: {
	      type: 'io.cozy.intents',
	      attributes: {
	        action: action,
	        type: type,
	        data: data,
	        permissions: permissions
	      }
	    }
	  });
	
	  createPromise.start = function (element, onReadyCallback) {
	    return createPromise.then(function (intent) {
	      var service = intent.attributes.services && intent.attributes.services[0];
	
	      if (!service) {
	        return Promise.reject(new Error('Unable to find a service'));
	      }
	
	      return injectService(service.href, element, intent, data, onReadyCallback);
	    });
	  };
	
	  return createPromise;
	}
	
	function listenClientData(intent, window) {
	  return new Promise(function (resolve, reject) {
	    var messageEventListener = function messageEventListener(event) {
	      if (event.origin !== intent.attributes.client) return;
	
	      window.removeEventListener('message', messageEventListener);
	      resolve(event.data);
	    };
	
	    window.addEventListener('message', messageEventListener);
	    window.parent.postMessage({
	      type: 'intent-' + intent._id + ':ready'
	    }, intent.attributes.client);
	  });
	}
	
	// returns a service to communicate with intent client
	function createService(cozy, intentId, serviceWindow) {
	  serviceWindow = serviceWindow || typeof window !== 'undefined' && window;
	  if (!serviceWindow) throw new Error('Intent service should be used in browser');
	
	  intentId = intentId || serviceWindow.location.search.split('=')[1];
	  if (!intentId) throw new Error('Cannot retrieve intent from URL');
	
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/intents/' + intentId).then(function (intent) {
	    var terminated = false;
	
	    var _terminate = function _terminate(message) {
	      if (terminated) throw new Error('Intent service has already been terminated');
	      terminated = true;
	      serviceWindow.parent.postMessage(message, intent.attributes.client);
	    };
	
	    var resizeClient = function resizeClient(dimensions, transitionProperty) {
	      if (terminated) throw new Error('Intent service has been terminated');
	
	      var message = {
	        type: 'intent-' + intent._id + ':resize',
	        // if a dom element is passed, calculate its size
	        dimensions: dimensions.element ? Object.assign({}, dimensions, {
	          maxHeight: dimensions.element.clientHeight,
	          maxWidth: dimensions.element.clientWidth
	        }) : dimensions,
	        transition: transitionProperty
	      };
	
	      serviceWindow.parent.postMessage(message, intent.attributes.client);
	    };
	
	    var cancel = function cancel() {
	      _terminate({ type: 'intent-' + intent._id + ':cancel' });
	    };
	
	    // Prevent unfulfilled client promises when this window unloads for a
	    // reason or another.
	    serviceWindow.addEventListener('unload', function () {
	      if (!terminated) cancel();
	    });
	
	    return listenClientData(intent, serviceWindow).then(function (data) {
	      return {
	        getData: function getData() {
	          return data;
	        },
	        getIntent: function getIntent() {
	          return intent;
	        },
	        terminate: function terminate(doc) {
	          if (data && data.exposeIntentFrameRemoval) {
	            return _terminate({
	              type: 'intent-' + intent._id + ':exposeFrameRemoval',
	              document: doc
	            });
	          } else {
	            return _terminate({
	              type: 'intent-' + intent._id + ':done',
	              document: doc
	            });
	          }
	        },
	        throw: function _throw(error) {
	          return _terminate({
	            type: 'intent-' + intent._id + ':error',
	            error: errorSerializer.serialize(error)
	          });
	        },
	        resizeClient: resizeClient,
	        cancel: cancel
	      };
	    });
	  });
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.count = count;
	exports.create = create;
	
	var _fetch = __webpack_require__(196);
	
	function count(cozy, workerType) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/jobs/queue/' + workerType).then(function (data) {
	    return data.attributes.count;
	  });
	}
	
	function create(cozy, workerType, args, options) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/jobs/queue/' + workerType, {
	    data: {
	      type: 'io.cozy.jobs',
	      attributes: {
	        arguments: args || {},
	        options: options || {}
	      }
	    }
	  });
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replicationOfflineError = undefined;
	exports.init = init;
	exports.getDoctypes = getDoctypes;
	exports.hasDatabase = hasDatabase;
	exports.getDatabase = getDatabase;
	exports.setDatabase = setDatabase;
	exports.createDatabase = createDatabase;
	exports.destroyDatabase = destroyDatabase;
	exports.destroyAllDatabase = destroyAllDatabase;
	exports.hasReplication = hasReplication;
	exports.replicateFromCozy = replicateFromCozy;
	exports.stopReplication = stopReplication;
	exports.stopAllReplication = stopAllReplication;
	exports.hasRepeatedReplication = hasRepeatedReplication;
	exports.startRepeatedReplication = startRepeatedReplication;
	exports.stopRepeatedReplication = stopRepeatedReplication;
	exports.stopAllRepeatedReplication = stopAllRepeatedReplication;
	
	var _doctypes = __webpack_require__(199);
	
	var _auth_v = __webpack_require__(195);
	
	var _utils = __webpack_require__(192);
	
	var replicationOfflineError = exports.replicationOfflineError = 'Replication abort, your device is actually offline.'; /* global PouchDB, pouchdbFind */
	
	
	var pluginLoaded = false;
	
	/*
	  For each doctype we have some parameters:
	  cozy._offline[doctype] = {
	    database: pouchdb database
	    replication: the pouchdb replication
	    replicationPromise: promise of replication
	    interval: repeated replication interval
	  }
	*/
	
	function init(cozy, _ref) {
	  var _ref$options = _ref.options,
	      options = _ref$options === undefined ? {} : _ref$options,
	      _ref$doctypes = _ref.doctypes,
	      doctypes = _ref$doctypes === undefined ? [] : _ref$doctypes;
	
	  if (typeof PouchDB === 'undefined') throw new Error('Missing pouchdb dependency for offline mode. Please run "yarn add pouchdb" and provide PouchDB as a webpack plugin.');
	  if (typeof pouchdbFind === 'undefined') throw new Error('Missing pouchdb-find dependency for offline mode. Please run "yarn add pouchdb-find" and provide pouchdbFind as webpack plugin.');
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = doctypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var doctype = _step.value;
	
	      createDatabase(cozy, doctype, options);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}
	
	// helper
	
	function getInfo(cozy, doctype) {
	  cozy._offline = cozy._offline || [];
	  cozy._offline[doctype] = cozy._offline[doctype] || {};
	  return cozy._offline[doctype];
	}
	
	function getDoctypes(cozy) {
	  cozy._offline = cozy._offline || [];
	  return Object.keys(cozy._offline);
	}
	
	//
	// DATABASE
	//
	
	function hasDatabase(cozy, doctype) {
	  return getDatabase(cozy, doctype) !== undefined;
	}
	
	function getDatabase(cozy, doctype) {
	  return getInfo(cozy, doctype).database;
	}
	
	function setDatabase(cozy, doctype, database) {
	  cozy._offline[doctype].database = database;
	  return getDatabase(cozy, doctype);
	}
	
	function createDatabase(cozy, doctype) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if (!pluginLoaded) {
	    PouchDB.plugin(pouchdbFind);
	    pluginLoaded = true;
	  }
	
	  if (hasDatabase(cozy, doctype)) {
	    return Promise.resolve(getDatabase(cozy, doctype));
	  }
	
	  setDatabase(cozy, doctype, new PouchDB(doctype, options));
	  return createIndexes(cozy, doctype).then(function () {
	    return getDatabase(cozy, doctype);
	  });
	}
	
	function destroyDatabase(cozy, doctype) {
	  if (!hasDatabase(cozy, doctype)) {
	    return Promise.resolve(false);
	  }
	
	  return stopRepeatedReplication(cozy, doctype).then(function () {
	    return stopReplication(cozy, doctype);
	  }).then(function () {
	    return getDatabase(cozy, doctype).destroy();
	  }).then(function (response) {
	    setDatabase(cozy, doctype, undefined);
	    return response;
	  });
	}
	
	function destroyAllDatabase(cozy) {
	  var doctypes = getDoctypes(cozy);
	  var destroy = function destroy(doctype) {
	    return destroyDatabase(cozy, doctype);
	  };
	  return Promise.all(doctypes.map(destroy));
	}
	
	function createIndexes(cozy, doctype) {
	  if (doctype === _doctypes.DOCTYPE_FILES) {
	    return getDatabase(cozy, doctype).createIndex({ index: { fields: ['dir_id'] } });
	  }
	  return Promise.resolve();
	}
	
	//
	// REPLICATION
	//
	
	function hasReplication(cozy, doctype) {
	  return getReplication(cozy, doctype) !== undefined;
	}
	
	function getReplication(cozy, doctype) {
	  return getInfo(cozy, doctype).replication;
	}
	
	function setReplication(cozy, doctype, replication) {
	  cozy._offline[doctype].replication = replication;
	  return getReplication(cozy, doctype);
	}
	
	function getReplicationUrl(cozy, doctype) {
	  return cozy.authorize().then(function (credentials) {
	    var basic = credentials.token.toBasicAuth();
	    return (cozy._url + '/data/' + doctype).replace('//', '//' + basic);
	  });
	}
	
	function getReplicationPromise(cozy, doctype) {
	  return getInfo(cozy, doctype).replicationPromise;
	}
	
	function setReplicationPromise(cozy, doctype, promise) {
	  cozy._offline[doctype].replicationPromise = promise;
	  return getReplicationPromise(cozy, doctype);
	}
	
	function replicateFromCozy(cozy, doctype) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  return setReplicationPromise(cozy, doctype, new Promise(function (resolve, reject) {
	    if (!hasDatabase(cozy, doctype)) {
	      createDatabase(cozy, doctype);
	    }
	    if (options.live === true) {
	      return reject(new Error('You can\'t use `live` option with Cozy couchdb.'));
	    }
	
	    if ((0, _utils.isOffline)()) {
	      reject(replicationOfflineError);
	      options.onError && options.onError(replicationOfflineError);
	      return;
	    }
	
	    getReplicationUrl(cozy, doctype).then(function (url) {
	      return setReplication(cozy, doctype, getDatabase(cozy, doctype).replicate.from(url, options).on('complete', function (info) {
	        setReplication(cozy, doctype, undefined);
	        resolve(info);
	        options.onComplete && options.onComplete(info);
	      }).on('error', function (err) {
	        if (err.error === 'code=400, message=Expired token') {
	          cozy.authorize().then(function (_ref2) {
	            var client = _ref2.client,
	                token = _ref2.token;
	
	            (0, _auth_v.refreshToken)(cozy, client, token).then(function (newToken) {
	              return cozy.saveCredentials(client, newToken);
	            }).then(function (credentials) {
	              return replicateFromCozy(cozy, doctype, options);
	            });
	          });
	        } else {
	          console.warn('ReplicateFromCozy \'' + doctype + '\' Error:');
	          console.warn(err);
	          setReplication(cozy, doctype, undefined);
	          reject(err);
	          options.onError && options.onError(err);
	        }
	      }));
	    });
	  }));
	}
	
	function stopReplication(cozy, doctype) {
	  if (!getDatabase(cozy, doctype) || !hasReplication(cozy, doctype)) {
	    return Promise.resolve();
	  }
	
	  return new Promise(function (resolve) {
	    try {
	      getReplicationPromise(cozy, doctype).then(function () {
	        resolve();
	      });
	      getReplication(cozy, doctype).cancel();
	      // replication is set to undefined by complete replication
	    } catch (e) {
	      resolve();
	    }
	  });
	}
	
	function stopAllReplication(cozy) {
	  var doctypes = getDoctypes(cozy);
	  var stop = function stop(doctype) {
	    return stopReplication(cozy, doctype);
	  };
	  return Promise.all(doctypes.map(stop));
	}
	
	//
	// REPEATED REPLICATION
	//
	
	function getRepeatedReplication(cozy, doctype) {
	  return getInfo(cozy, doctype).interval;
	}
	
	function setRepeatedReplication(cozy, doctype, interval) {
	  cozy._offline[doctype].interval = interval;
	}
	
	function hasRepeatedReplication(cozy, doctype) {
	  return getRepeatedReplication(cozy, doctype) !== undefined;
	}
	
	function startRepeatedReplication(cozy, doctype, timer) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  // TODO: add timer limitation for not flooding Gozy
	  if (hasRepeatedReplication(cozy, doctype)) {
	    return getRepeatedReplication(cozy, doctype);
	  }
	
	  return setRepeatedReplication(cozy, doctype, setInterval(function () {
	    if ((0, _utils.isOffline)()) {
	      // network is offline, replication cannot be launched
	      console.info(replicationOfflineError);
	      return;
	    }
	    if (!hasReplication(cozy, doctype)) {
	      replicateFromCozy(cozy, doctype, options);
	      // TODO: add replicationToCozy
	    }
	  }, timer * 1000));
	}
	
	function stopRepeatedReplication(cozy, doctype) {
	  if (hasRepeatedReplication(cozy, doctype)) {
	    clearInterval(getRepeatedReplication(cozy, doctype));
	    setRepeatedReplication(cozy, doctype, undefined);
	  }
	  if (hasReplication(cozy, doctype)) {
	    return stopReplication(cozy, doctype);
	  }
	
	  return Promise.resolve();
	}
	
	function stopAllRepeatedReplication(cozy) {
	  var doctypes = getDoctypes(cozy);
	  var stop = function stop(doctype) {
	    return stopRepeatedReplication(cozy, doctype);
	  };
	  return Promise.all(doctypes.map(stop));
	}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.diskUsage = diskUsage;
	exports.changePassphrase = changePassphrase;
	exports.getInstance = getInstance;
	exports.updateInstance = updateInstance;
	exports.getClients = getClients;
	exports.deleteClientById = deleteClientById;
	exports.updateLastSync = updateLastSync;
	
	var _fetch = __webpack_require__(196);
	
	function diskUsage(cozy) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/settings/disk-usage');
	}
	
	function changePassphrase(cozy, currentPassPhrase, newPassPhrase) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'PUT', '/settings/passphrase', {
	    current_passphrase: currentPassPhrase,
	    new_passphrase: newPassPhrase
	  });
	}
	
	function getInstance(cozy) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/settings/instance');
	}
	
	function updateInstance(cozy, instance) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'PUT', '/settings/instance', instance);
	}
	
	function getClients(cozy) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', '/settings/clients');
	}
	
	function deleteClientById(cozy, id) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'DELETE', '/settings/clients/' + id);
	}
	
	function updateLastSync(cozy) {
	  return (0, _fetch.cozyFetchJSON)(cozy, 'POST', '/settings/synchronized');
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeReferencedFiles = exports.addReferencedFiles = undefined;
	exports.listReferencedFiles = listReferencedFiles;
	exports.fetchReferencedFiles = fetchReferencedFiles;
	
	var _fetch = __webpack_require__(196);
	
	var _doctypes = __webpack_require__(199);
	
	function updateRelations(verb) {
	  return function (cozy, doc, ids) {
	    if (!doc) throw new Error('missing doc argument');
	    if (!Array.isArray(ids)) ids = [ids];
	
	    var refs = ids.map(function (id) {
	      return { type: _doctypes.DOCTYPE_FILES, id: id };
	    });
	
	    return (0, _fetch.cozyFetchJSON)(cozy, verb, makeReferencesPath(doc), { data: refs });
	  };
	}
	
	var addReferencedFiles = exports.addReferencedFiles = updateRelations('POST');
	var removeReferencedFiles = exports.removeReferencedFiles = updateRelations('DELETE');
	
	function listReferencedFiles(cozy, doc) {
	  if (!doc) throw new Error('missing doc argument');
	  return (0, _fetch.cozyFetchJSON)(cozy, 'GET', makeReferencesPath(doc)).then(function (files) {
	    return files.map(function (file) {
	      return file._id;
	    });
	  });
	}
	
	function fetchReferencedFiles(cozy, doc, options) {
	  if (!doc) throw new Error('missing doc argument');
	  var params = Object.keys(options).map(function (key) {
	    return '&page[' + key + ']=' + options[key];
	  }).join('');
	  // As datetime is the only sort option available, I see no reason to not have it by default
	  return (0, _fetch.cozyFetchRawJSON)(cozy, 'GET', makeReferencesPath(doc) + '?include=files&sort=datetime' + params);
	}
	
	function makeReferencesPath(doc) {
	  var type = encodeURIComponent(doc._type);
	  var id = encodeURIComponent(doc._id);
	  return '/data/' + type + '/' + id + '/relationships/references';
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cozy-client.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(42)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(12)
  , createDesc = __webpack_require__(27);
module.exports = __webpack_require__(17) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(90)

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(165)
  , defined = __webpack_require__(29);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_cozy_dot_client) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openFileWith = exports.toggleAvailableOffline = exports.downloadFiles = exports.trashFiles = exports.createFolder = exports.abortAddFolder = exports.uploadedFile = exports.openFileInNewTab = exports.getFileDownloadUrl = exports.fetchMoreFiles = exports.fetchRecentFiles = exports.openFolder = exports.openTrash = exports.openRecent = exports.openFiles = exports.META_DEFAULTS = exports.extractFileAttributes = exports.getOpenedFolderId = exports.OPEN_FILE_E_NO_APP = exports.OPEN_FILE_E_OFFLINE = exports.OPEN_FILE_WITH = exports.DOWNLOAD_FILE_E_OFFLINE = exports.DOWNLOAD_FILE_E_MISSING = exports.DOWNLOAD_FILE = exports.DOWNLOAD_SELECTION = exports.TRASH_FILES_FAILURE = exports.TRASH_FILES_SUCCESS = exports.TRASH_FILES = exports.UPLOAD_FILE_SUCCESS = exports.CREATE_FOLDER_SUCCESS = exports.CREATE_FOLDER_FAILURE_DUPLICATE = exports.CREATE_FOLDER_FAILURE_GENERIC = exports.CREATE_FOLDER = exports.ABORT_ADD_FOLDER = exports.FETCH_MORE_FILES_FAILURE = exports.FETCH_MORE_FILES_SUCCESS = exports.FETCH_MORE_FILES = exports.FETCH_RECENT_FAILURE = exports.FETCH_RECENT_SUCCESS = exports.FETCH_RECENT = exports.OPEN_FOLDER_FAILURE = exports.OPEN_FOLDER_SUCCESS = exports.OPEN_FOLDER = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global cozy */


var _device = __webpack_require__(160);

var _filesystem = __webpack_require__(196);

var _actions = __webpack_require__(313);

var _files = __webpack_require__(53);

var _availableOffline = __webpack_require__(54);

var availableOffline = _interopRequireWildcard(_availableOffline);

var _config = __webpack_require__(71);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var OPEN_FOLDER = exports.OPEN_FOLDER = 'OPEN_FOLDER';
var OPEN_FOLDER_SUCCESS = exports.OPEN_FOLDER_SUCCESS = 'OPEN_FOLDER_SUCCESS';
var OPEN_FOLDER_FAILURE = exports.OPEN_FOLDER_FAILURE = 'OPEN_FOLDER_FAILURE';
var FETCH_RECENT = exports.FETCH_RECENT = 'FETCH_RECENT';
var FETCH_RECENT_SUCCESS = exports.FETCH_RECENT_SUCCESS = 'FETCH_RECENT_SUCCESS';
var FETCH_RECENT_FAILURE = exports.FETCH_RECENT_FAILURE = 'FETCH_RECENT_FAILURE';
var FETCH_MORE_FILES = exports.FETCH_MORE_FILES = 'FETCH_MORE_FILES';
var FETCH_MORE_FILES_SUCCESS = exports.FETCH_MORE_FILES_SUCCESS = 'FETCH_MORE_FILES_SUCCESS';
var FETCH_MORE_FILES_FAILURE = exports.FETCH_MORE_FILES_FAILURE = 'FETCH_MORE_FILES_FAILURE';
var ABORT_ADD_FOLDER = exports.ABORT_ADD_FOLDER = 'ABORT_ADD_FOLDER';
var CREATE_FOLDER = exports.CREATE_FOLDER = 'CREATE_FOLDER';
var CREATE_FOLDER_FAILURE_GENERIC = exports.CREATE_FOLDER_FAILURE_GENERIC = 'CREATE_FOLDER_FAILURE_GENERIC';
var CREATE_FOLDER_FAILURE_DUPLICATE = exports.CREATE_FOLDER_FAILURE_DUPLICATE = 'CREATE_FOLDER_FAILURE_DUPLICATE';
var CREATE_FOLDER_SUCCESS = exports.CREATE_FOLDER_SUCCESS = 'CREATE_FOLDER_SUCCESS';
var UPLOAD_FILE_SUCCESS = exports.UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
var TRASH_FILES = exports.TRASH_FILES = 'TRASH_FILES';
var TRASH_FILES_SUCCESS = exports.TRASH_FILES_SUCCESS = 'TRASH_FILES_SUCCESS';
var TRASH_FILES_FAILURE = exports.TRASH_FILES_FAILURE = 'TRASH_FILES_FAILURE';
var DOWNLOAD_SELECTION = exports.DOWNLOAD_SELECTION = 'DOWNLOAD_SELECTION';
var DOWNLOAD_FILE = exports.DOWNLOAD_FILE = 'DOWNLOAD_FILE';
var DOWNLOAD_FILE_E_MISSING = exports.DOWNLOAD_FILE_E_MISSING = 'DOWNLOAD_FILE_E_MISSING';
var DOWNLOAD_FILE_E_OFFLINE = exports.DOWNLOAD_FILE_E_OFFLINE = 'DOWNLOAD_FILE_E_OFFLINE';
var OPEN_FILE_WITH = exports.OPEN_FILE_WITH = 'OPEN_FILE_WITH';
var OPEN_FILE_E_OFFLINE = exports.OPEN_FILE_E_OFFLINE = 'OPEN_FILE_E_OFFLINE';
var OPEN_FILE_E_NO_APP = exports.OPEN_FILE_E_NO_APP = 'OPEN_FILE_E_NO_APP';

// selectors

var getOpenedFolderId = exports.getOpenedFolderId = function getOpenedFolderId(state) {
  return state.view.openedFolderId;
};

var extractFileAttributes = exports.extractFileAttributes = function extractFileAttributes(f) {
  return _extends({}, f.attributes, {
    id: f._id,
    _id: f._id,
    _type: 'io.cozy.files',
    links: f.links,
    relationships: f.relationships
  });
};

var HTTP_CODE_CONFLICT = 409;
var ALERT_LEVEL_ERROR = 'error';

var META_DEFAULTS = exports.META_DEFAULTS = {
  cancelSelection: true,
  hideActionMenu: true
};

var openFiles = exports.openFiles = function openFiles() {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', dispatch(openFolder(_config.ROOT_DIR_ID)));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var openRecent = exports.openRecent = function openRecent() {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', dispatch(fetchRecentFiles()));

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var openTrash = exports.openTrash = function openTrash() {
  return function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', dispatch(openFolder(_config.TRASH_DIR_ID)));

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var openFolder = exports.openFolder = function openFolder(folderId) {
  return function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(dispatch, getState) {
      var settings, offline, folder, parentId, parent, contents, files;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: OPEN_FOLDER,
                folderId: folderId,
                meta: {
                  cancelSelection: true
                }
              });
              _context4.prev = 1;
              settings = getState().settings;
              offline = settings.offline && settings.firstReplication;
              _context4.next = 6;
              return __webpack_provided_cozy_dot_client.files.statById(folderId, offline);

            case 6:
              folder = _context4.sent;
              parentId = folder.attributes.dir_id;
              _context4.t0 = !!parentId;

              if (!_context4.t0) {
                _context4.next = 13;
                break;
              }

              _context4.next = 12;
              return __webpack_provided_cozy_dot_client.files.statById(parentId, offline).catch(function (ex) {
                if (ex.status === 403) {
                  console.warn("User don't have access to parent folder");
                } else {
                  throw ex;
                }
              });

            case 12:
              _context4.t0 = _context4.sent;

            case 13:
              parent = _context4.t0;
              contents = folder.relationships.contents;
              // folder.relations('contents') returns null when the trash is empty
              // the filter call is a temporary fix due to a cozy-client-js bug

              files = folder.relations('contents').filter(function (f) {
                return f !== undefined;
              }) || [];
              return _context4.abrupt('return', dispatch({
                type: OPEN_FOLDER_SUCCESS,
                folder: Object.assign(extractFileAttributes(folder), {
                  parent: !!parent && extractFileAttributes(parent)
                }),
                fileCount: contents.meta.count || 0,
                files: files.map(function (c) {
                  return extractFileAttributes(c);
                })
              }));

            case 19:
              _context4.prev = 19;
              _context4.t1 = _context4['catch'](1);
              return _context4.abrupt('return', dispatch({ type: OPEN_FOLDER_FAILURE, error: _context4.t1 }));

            case 22:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[1, 19]]);
    }));

    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var fetchRecentFiles = exports.fetchRecentFiles = function fetchRecentFiles() {
  return function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(dispatch, getState) {
      var index, files;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({
                type: FETCH_RECENT,
                meta: {
                  cancelSelection: true
                }
              });

              _context5.prev = 1;
              _context5.next = 4;
              return __webpack_provided_cozy_dot_client.data.defineIndex('io.cozy.files', ['updated_at', 'size', 'trashed']);

            case 4:
              index = _context5.sent;
              _context5.next = 7;
              return __webpack_provided_cozy_dot_client.data.query(index, {
                selector: { updated_at: { $gt: null }, trashed: false },
                sort: [{ updated_at: 'desc' }],
                limit: 50
              });

            case 7:
              files = _context5.sent;
              return _context5.abrupt('return', dispatch({
                type: FETCH_RECENT_SUCCESS,
                fileCount: files.length,
                files: files.map(function (f) {
                  return _extends({}, f, { id: f._id });
                })
              }));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5['catch'](1);
              return _context5.abrupt('return', dispatch({ type: FETCH_RECENT_FAILURE, error: _context5.t0 }));

            case 14:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[1, 11]]);
    }));

    return function (_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var fetchMoreFiles = exports.fetchMoreFiles = function fetchMoreFiles(folderId, skip, limit) {
  return function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(dispatch, getState) {
      var settings, offline, folder, files;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({ type: FETCH_MORE_FILES, folderId: folderId, skip: skip, limit: limit });
              _context6.prev = 1;
              settings = getState().settings;
              offline = settings.offline && settings.firstReplication;
              _context6.next = 6;
              return __webpack_provided_cozy_dot_client.files.statById(folderId, offline, {
                skip: skip,
                limit: limit
              });

            case 6:
              folder = _context6.sent;
              files = folder.relations('contents').filter(function (f) {
                return f !== undefined;
              }) || [];
              return _context6.abrupt('return', dispatch({
                type: FETCH_MORE_FILES_SUCCESS,
                files: files.map(function (c) {
                  return extractFileAttributes(c);
                }),
                skip: skip,
                limit: limit
              }));

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6['catch'](1);
              return _context6.abrupt('return', dispatch({ type: FETCH_MORE_FILES_FAILURE, error: _context6.t0 }));

            case 14:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[1, 11]]);
    }));

    return function (_x8, _x9) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var getFileDownloadUrl = exports.getFileDownloadUrl = function () {
  var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(id) {
    var link;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return __webpack_provided_cozy_dot_client.files.getDownloadLinkById(id);

          case 2:
            link = _context7.sent;
            return _context7.abrupt('return', '' + __webpack_provided_cozy_dot_client._url + link);

          case 4:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function getFileDownloadUrl(_x10) {
    return _ref7.apply(this, arguments);
  };
}();

var openFileInNewTab = exports.openFileInNewTab = function openFileInNewTab(file) {
  return function () {
    var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(dispatch) {
      var newTab, href;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!file.availableOffline) {
                _context8.next = 4;
                break;
              }

              (0, _filesystem.openOfflineFile)(file).catch(function (error) {
                console.error('openFileInNewTab', error);
                dispatch((0, _actions.openWithNoAppError)({
                  cancelSelection: true,
                  hideActionMenu: true
                }));
              });
              _context8.next = 9;
              break;

            case 4:
              newTab = window.open('about:blank', '_blank' // must be done before the async calls, otherwise pop-up blockers are trigered

              );
              _context8.next = 7;
              return getFileDownloadUrl(file.id);

            case 7:
              href = _context8.sent;

              if ((0, _device.isCordova)()) {
                newTab.executeScript({ code: 'window.location.href = \'' + href + '\'' });
              } else {
                newTab.location.href = href;
              }

            case 9:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    return function (_x11) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var uploadedFile = exports.uploadedFile = function uploadedFile(file) {
  return {
    type: UPLOAD_FILE_SUCCESS,
    file: extractFileAttributes(file)
  };
};

var abortAddFolder = exports.abortAddFolder = function abortAddFolder(accidental) {
  var action = {
    type: ABORT_ADD_FOLDER,
    accidental: accidental
  };
  if (accidental) {
    action.alert = {
      message: 'alert.folder_abort'
    };
  }
  return action;
};

var createFolder = exports.createFolder = function createFolder(name) {
  return function () {
    var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(dispatch, getState) {
      var existingFolder, currentFileCount, folder;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              existingFolder = getState().view.files.find(function (f) {
                return (0, _files.isDirectory)(f) && f.name === name;
              });
              currentFileCount = getState().view.fileCount;

              if (!existingFolder) {
                _context9.next = 5;
                break;
              }

              dispatch({
                type: CREATE_FOLDER_FAILURE_DUPLICATE,
                alert: {
                  message: 'alert.folder_name',
                  messageData: { folderName: name }
                }
              });
              throw new Error('alert.folder_name');

            case 5:

              dispatch({
                type: CREATE_FOLDER,
                name: name
              });

              _context9.prev = 6;
              _context9.next = 9;
              return __webpack_provided_cozy_dot_client.files.createDirectory({
                name: name,
                dirID: getState().view.displayedFolder.id
              });

            case 9:
              folder = _context9.sent;

              dispatch({
                type: CREATE_FOLDER_SUCCESS,
                folder: extractFileAttributes(folder),
                currentFileCount: currentFileCount
              });
              _context9.next = 17;
              break;

            case 13:
              _context9.prev = 13;
              _context9.t0 = _context9['catch'](6);

              if (_context9.t0.response && _context9.t0.response.status === HTTP_CODE_CONFLICT) {
                dispatch({
                  type: CREATE_FOLDER_FAILURE_DUPLICATE,
                  alert: {
                    message: 'alert.folder_name',
                    messageData: { folderName: name }
                  }
                });
              } else {
                dispatch({
                  type: CREATE_FOLDER_FAILURE_GENERIC,
                  alert: {
                    message: 'alert.folder_generic'
                  }
                });
              }
              throw _context9.t0;

            case 17:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined, [[6, 13]]);
    }));

    return function (_x12, _x13) {
      return _ref9.apply(this, arguments);
    };
  }();
};

var trashFiles = exports.trashFiles = function trashFiles(files) {
  var meta = META_DEFAULTS;
  return function () {
    var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(dispatch) {
      var trashed, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, ref;

      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              dispatch({ type: TRASH_FILES, files: files, meta: meta });
              trashed = [];
              _context10.prev = 2;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context10.prev = 6;
              _iterator = files[Symbol.iterator]();

            case 8:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context10.next = 46;
                break;
              }

              file = _step.value;
              _context10.t0 = trashed;
              _context10.next = 13;
              return __webpack_provided_cozy_dot_client.files.trashById(file.id);

            case 13:
              _context10.t1 = _context10.sent;

              _context10.t0.push.call(_context10.t0, _context10.t1);

              if (!(0, _files.isReferencedByAlbum)(file)) {
                _context10.next = 43;
                break;
              }

              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context10.prev = 19;
              _iterator2 = file.relationships.referenced_by.data[Symbol.iterator]();

            case 21:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                _context10.next = 29;
                break;
              }

              ref = _step2.value;

              if (!(ref.type === _files.ALBUMS_DOCTYPE)) {
                _context10.next = 26;
                break;
              }

              _context10.next = 26;
              return __webpack_provided_cozy_dot_client.data.removeReferencedFiles({ _type: ref.type, _id: ref.id }, file.id);

            case 26:
              _iteratorNormalCompletion2 = true;
              _context10.next = 21;
              break;

            case 29:
              _context10.next = 35;
              break;

            case 31:
              _context10.prev = 31;
              _context10.t2 = _context10['catch'](19);
              _didIteratorError2 = true;
              _iteratorError2 = _context10.t2;

            case 35:
              _context10.prev = 35;
              _context10.prev = 36;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 38:
              _context10.prev = 38;

              if (!_didIteratorError2) {
                _context10.next = 41;
                break;
              }

              throw _iteratorError2;

            case 41:
              return _context10.finish(38);

            case 42:
              return _context10.finish(35);

            case 43:
              _iteratorNormalCompletion = true;
              _context10.next = 8;
              break;

            case 46:
              _context10.next = 52;
              break;

            case 48:
              _context10.prev = 48;
              _context10.t3 = _context10['catch'](6);
              _didIteratorError = true;
              _iteratorError = _context10.t3;

            case 52:
              _context10.prev = 52;
              _context10.prev = 53;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 55:
              _context10.prev = 55;

              if (!_didIteratorError) {
                _context10.next = 58;
                break;
              }

              throw _iteratorError;

            case 58:
              return _context10.finish(55);

            case 59:
              return _context10.finish(52);

            case 60:
              _context10.next = 66;
              break;

            case 62:
              _context10.prev = 62;
              _context10.t4 = _context10['catch'](2);

              if (isAlreadyInTrash(_context10.t4)) {
                _context10.next = 66;
                break;
              }

              return _context10.abrupt('return', dispatch({
                type: TRASH_FILES_FAILURE,
                alert: {
                  message: 'alert.try_again'
                }
              }));

            case 66:
              return _context10.abrupt('return', dispatch({
                type: TRASH_FILES_SUCCESS,
                ids: files.map(function (f) {
                  return f.id;
                }),
                alert: {
                  message: 'alert.trash_file_success'
                }
              }));

            case 67:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, undefined, [[2, 62], [6, 48, 52, 60], [19, 31, 35, 43], [36,, 38, 42], [53,, 55, 59]]);
    }));

    return function (_x14) {
      return _ref10.apply(this, arguments);
    };
  }();
};

var downloadFiles = exports.downloadFiles = function downloadFiles(files) {
  var meta = META_DEFAULTS;
  return function () {
    var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(dispatch) {
      var paths, href, fullpath;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (!(files.length === 1 && !(0, _files.isDirectory)(files[0]))) {
                _context11.next = 2;
                break;
              }

              return _context11.abrupt('return', dispatch(downloadFile(files[0], meta)));

            case 2:
              paths = files.map(function (f) {
                return f.path;
              });
              _context11.next = 5;
              return __webpack_provided_cozy_dot_client.files.getArchiveLinkByPaths(paths);

            case 5:
              href = _context11.sent;
              _context11.next = 8;
              return __webpack_provided_cozy_dot_client.fullpath(href);

            case 8:
              fullpath = _context11.sent;

              forceFileDownload(fullpath, 'files.zip');
              return _context11.abrupt('return', dispatch({ type: DOWNLOAD_SELECTION, files: files, meta: meta }));

            case 11:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, undefined);
    }));

    return function (_x15) {
      return _ref11.apply(this, arguments);
    };
  }();
};

var toggleAvailableOffline = exports.toggleAvailableOffline = function toggleAvailableOffline(file) {
  return function () {
    var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(dispatch, getState) {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt('return', availableOffline.isAvailableOffline(getState())(file.id) ? dispatch(undoMakeAvailableOffline(file)) : dispatch(makeAvailableOffline(file)));

            case 1:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, undefined);
    }));

    return function (_x16, _x17) {
      return _ref12.apply(this, arguments);
    };
  }();
};

var undoMakeAvailableOffline = function undoMakeAvailableOffline(file) {
  return function () {
    var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(dispatch) {
      var filename;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              filename = file.id;

              if ((0, _device.isCordova)() && window.cordova.file) {
                (0, _filesystem.deleteOfflineFile)(filename);
              }
              dispatch(availableOffline.undoMakeAvailableOffline(file.id));

            case 3:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, undefined);
    }));

    return function (_x18) {
      return _ref13.apply(this, arguments);
    };
  }();
};

var makeAvailableOffline = function makeAvailableOffline(file) {
  return function () {
    var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(dispatch) {
      var response, blob, filename;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return __webpack_provided_cozy_dot_client.files.downloadById(file.id).catch(function (error) {
                dispatch(downloadFileError(error, META_DEFAULTS));
                throw error;
              });

            case 2:
              response = _context14.sent;
              _context14.next = 5;
              return response.blob();

            case 5:
              blob = _context14.sent;
              filename = file.id;


              if ((0, _device.isCordova)() && window.cordova.file) {
                (0, _filesystem.saveFileWithCordova)(blob, filename);
              }
              dispatch(availableOffline.makeAvailableOffline(file.id));

            case 9:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, undefined);
    }));

    return function (_x19) {
      return _ref14.apply(this, arguments);
    };
  }();
};

var isMissingFile = function isMissingFile(error) {
  return error.status === 404;
};

var downloadFileError = function downloadFileError(error, meta) {
  var message = isMissingFile(error) ? 'error.download_file.missing' : 'error.download_file.offline';
  var type = isMissingFile(error) ? DOWNLOAD_FILE_E_MISSING : DOWNLOAD_FILE_E_OFFLINE;
  return { type: type, alert: { message: message, level: ALERT_LEVEL_ERROR }, meta: meta };
};

var downloadFile = function downloadFile(file, meta) {
  return function () {
    var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(dispatch) {
      var response, blob, filename;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return __webpack_provided_cozy_dot_client.files.downloadById(file.id).catch(function (error) {
                dispatch(downloadFileError(error, meta));
                throw error;
              });

            case 2:
              response = _context15.sent;
              _context15.next = 5;
              return response.blob();

            case 5:
              blob = _context15.sent;
              filename = file.name;


              if ((0, _device.isCordova)() && window.cordova.file) {
                (0, _filesystem.saveFileWithCordova)(blob, filename);
              } else {
                forceFileDownload(window.URL.createObjectURL(blob), filename);
              }
              return _context15.abrupt('return', dispatch({ type: DOWNLOAD_FILE, file: file, meta: meta }));

            case 9:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, undefined);
    }));

    return function (_x20) {
      return _ref15.apply(this, arguments);
    };
  }();
};

var forceFileDownload = function forceFileDownload(href, filename) {
  var element = document.createElement('a');
  element.setAttribute('href', href);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

var openFileWith = exports.openFileWith = function openFileWith(id, filename) {
  var meta = {
    cancelSelection: true,
    hideActionMenu: true
  };
  return function () {
    var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(dispatch, getState) {
      var response, blob;
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              if (!((0, _device.isCordova)() && window.cordova.plugins.fileOpener2)) {
                _context16.next = 12;
                break;
              }

              dispatch({ type: OPEN_FILE_WITH, id: id });
              _context16.next = 4;
              return __webpack_provided_cozy_dot_client.files.downloadById(id).catch(function (error) {
                console.error('downloadById', error);
                dispatch(downloadFileError(error, meta));
                throw error;
              });

            case 4:
              response = _context16.sent;
              _context16.next = 7;
              return response.blob();

            case 7:
              blob = _context16.sent;
              _context16.next = 10;
              return (0, _filesystem.saveAndOpenWithCordova)(blob, filename).catch(function (error) {
                console.error('openFileWithCordova', error);
                dispatch((0, _actions.openWithNoAppError)(meta));
              });

            case 10:
              _context16.next = 13;
              break;

            case 12:
              dispatch((0, _actions.openWithNoAppError)(meta));

            case 13:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, undefined);
    }));

    return function (_x21, _x22) {
      return _ref16.apply(this, arguments);
    };
  }();
};

// helpers
var isAlreadyInTrash = function isAlreadyInTrash(err) {
  var reasons = err.reason !== undefined ? err.reason.errors : undefined;
  if (reasons) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = reasons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var reason = _step3.value;

        if (reason.detail === 'File or directory is already in the trash') {
          return true;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }
  return false;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(37);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if(__webpack_require__(17)){
  var LIBRARY             = __webpack_require__(39)
    , global              = __webpack_require__(5)
    , fails               = __webpack_require__(11)
    , $export             = __webpack_require__(1)
    , $typed              = __webpack_require__(164)
    , $buffer             = __webpack_require__(206)
    , ctx                 = __webpack_require__(25)
    , anInstance          = __webpack_require__(41)
    , propertyDesc        = __webpack_require__(27)
    , hide                = __webpack_require__(18)
    , redefineAll         = __webpack_require__(40)
    , toInteger           = __webpack_require__(42)
    , toLength            = __webpack_require__(16)
    , toIndex             = __webpack_require__(44)
    , toPrimitive         = __webpack_require__(57)
    , has                 = __webpack_require__(15)
    , same                = __webpack_require__(208)
    , classof             = __webpack_require__(172)
    , isObject            = __webpack_require__(8)
    , toObject            = __webpack_require__(38)
    , isArrayIter         = __webpack_require__(173)
    , create              = __webpack_require__(59)
    , getPrototypeOf      = __webpack_require__(60)
    , gOPN                = __webpack_require__(58).f
    , getIterFn           = __webpack_require__(174)
    , uid                 = __webpack_require__(36)
    , wks                 = __webpack_require__(9)
    , createArrayMethod   = __webpack_require__(61)
    , createArrayIncludes = __webpack_require__(166)
    , speciesConstructor  = __webpack_require__(171)
    , ArrayIterators      = __webpack_require__(175)
    , Iterators           = __webpack_require__(46)
    , $iterDetect         = __webpack_require__(73)
    , setSpecies          = __webpack_require__(72)
    , arrayFill           = __webpack_require__(170)
    , arrayCopyWithin     = __webpack_require__(213)
    , $DP                 = __webpack_require__(12)
    , $GOPD               = __webpack_require__(30)
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    }
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true)
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , hide      = __webpack_require__(18)
  , has       = __webpack_require__(15)
  , SRC       = __webpack_require__(36)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(56).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(62)
  , createDesc     = __webpack_require__(27)
  , toIObject      = __webpack_require__(22)
  , toPrimitive    = __webpack_require__(57)
  , has            = __webpack_require__(15)
  , IE8_DOM_DEFINE = __webpack_require__(205)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(195);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(312);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spinner = exports.Spinner = function Spinner(_ref) {
  var _classNames;

  var t = _ref.t,
      loadingType = _ref.loadingType,
      middle = _ref.middle,
      noMargin = _ref.noMargin,
      color = _ref.color,
      size = _ref.size;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(_styles2.default['coz-spinner'], (_classNames = {}, _defineProperty(_classNames, _styles2.default['coz-spinner--middle'], middle), _defineProperty(_classNames, _styles2.default['coz-spinner--no-margin'], noMargin), _defineProperty(_classNames, _styles2.default['coz-spinner--' + color], color), _defineProperty(_classNames, _styles2.default['coz-spinner--' + size], size), _classNames))
    },
    loadingType && _react2.default.createElement(
      'p',
      null,
      t('loading.' + loadingType)
    )
  );
};

exports.default = (0, _i18n.translate)()(Spinner);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(226)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(228)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(29);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(28);
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f
  , has = __webpack_require__(15)
  , TAG = __webpack_require__(9)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(207)
  , enumBugKeys = __webpack_require__(169);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(9)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(18)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FILE_TYPE = 'file';
var DIR_TYPE = 'directory';
var ALBUMS_DOCTYPE = exports.ALBUMS_DOCTYPE = 'io.cozy.photos.albums';
var isFile = exports.isFile = function isFile(file) {
  return file && file.type === FILE_TYPE;
};
var isDirectory = exports.isDirectory = function isDirectory(file) {
  return file && file.type === DIR_TYPE;
};
var isReferencedByAlbum = exports.isReferencedByAlbum = function isReferencedByAlbum(file) {
  if (file.relationships && file.relationships.referenced_by && file.relationships.referenced_by.data && file.relationships.referenced_by.data.length > 0) {
    var references = file.relationships.referenced_by.data;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = references[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var reference = _step.value;

        if (reference.type === ALBUMS_DOCTYPE) {
          return true;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return false;
};

// selectors
var getFiles = exports.getFiles = function getFiles(state) {
  return state.view.files;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var MAKE_AVAILABLE_OFFLINE = 'MAKE_AVAILABLE_OFFLINE';
var UNDO_MAKE_AVAILABLE_OFFLINE = 'UNDO_MAKE_AVAILABLE_OFFLINE';

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case MAKE_AVAILABLE_OFFLINE:
      return [].concat(_toConsumableArray(state), [action.id]);
    case UNDO_MAKE_AVAILABLE_OFFLINE:
      var index = state.indexOf(action.id);
      return [].concat(_toConsumableArray(state.slice(0, index)), _toConsumableArray(state.slice(index + 1)));
    default:
      return state;
  }
};

var makeAvailableOffline = exports.makeAvailableOffline = function makeAvailableOffline(id) {
  return { type: MAKE_AVAILABLE_OFFLINE, id: id };
};
var undoMakeAvailableOffline = exports.undoMakeAvailableOffline = function undoMakeAvailableOffline(id) {
  return {
    type: UNDO_MAKE_AVAILABLE_OFFLINE,
    id: id
  };
};

var isAvailableOffline = exports.isAvailableOffline = function isAvailableOffline(_ref) {
  var state = _ref.availableOffline;
  return function (id) {
    return state.indexOf(id) !== -1;
  };
};

/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(207)
  , hiddenKeys = __webpack_require__(169).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(7)
  , dPs         = __webpack_require__(345)
  , enumBugKeys = __webpack_require__(169)
  , IE_PROTO    = __webpack_require__(167)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(163)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(209).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(15)
  , toObject    = __webpack_require__(38)
  , IE_PROTO    = __webpack_require__(167)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(25)
  , IObject  = __webpack_require__(165)
  , toObject = __webpack_require__(38)
  , toLength = __webpack_require__(16)
  , asc      = __webpack_require__(346);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(36)('meta')
  , isObject = __webpack_require__(8)
  , has      = __webpack_require__(15)
  , setDesc  = __webpack_require__(12).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var implementation = __webpack_require__(246);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(266)

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  Redux constants
**/

// global variables
var ROOT_DIR_ID = exports.ROOT_DIR_ID = 'io.cozy.files.root-dir';
var TRASH_DIR_ID = exports.TRASH_DIR_ID = 'io.cozy.files.trash-dir';
var APPS_DIR_PATH = exports.APPS_DIR_PATH = '/.cozy_apps';
var TRASH_DIR_PATH = exports.TRASH_DIR_PATH = '/.cozy_trash';
var KONNECTORS_DIR_PATH = exports.KONNECTORS_DIR_PATH = '/.cozy_konnectors';

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(5)
  , dP          = __webpack_require__(12)
  , DESCRIPTORS = __webpack_require__(17)
  , SPECIES     = __webpack_require__(9)('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(9)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(25)
  , call        = __webpack_require__(215)
  , isArrayIter = __webpack_require__(173)
  , anObject    = __webpack_require__(7)
  , toLength    = __webpack_require__(16)
  , getIterFn   = __webpack_require__(174)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global            = __webpack_require__(5)
  , $export           = __webpack_require__(1)
  , redefine          = __webpack_require__(28)
  , redefineAll       = __webpack_require__(40)
  , meta              = __webpack_require__(63)
  , forOf             = __webpack_require__(74)
  , anInstance        = __webpack_require__(41)
  , isObject          = __webpack_require__(8)
  , fails             = __webpack_require__(11)
  , $iterDetect       = __webpack_require__(73)
  , setToStringTag    = __webpack_require__(45)
  , inheritIfRequired = __webpack_require__(358);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide     = __webpack_require__(18)
  , redefine = __webpack_require__(28)
  , fails    = __webpack_require__(11)
  , defined  = __webpack_require__(29)
  , wks      = __webpack_require__(9);

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(64);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

!function(global, factory) {
     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
}(this, function(exports) {
    function VNode(nodeName, attributes, children) {
        this.nodeName = nodeName;
        this.attributes = attributes;
        this.children = children;
        this.key = attributes && attributes.key;
    }
    function h(nodeName, attributes) {
        var children, lastSimple, child, simple, i;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !0 && child !== !1) {
            if ('number' == typeof child) child = String(child);
            simple = 'string' == typeof child;
            if (simple && lastSimple) children[children.length - 1] += child; else {
                (children || (children = [])).push(child);
                lastSimple = simple;
            }
        }
        var p = new VNode(nodeName, attributes || void 0, children || EMPTY_CHILDREN);
        if (options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        if (props) for (var i in props) obj[i] = props[i];
        return obj;
    }
    function clone(obj) {
        return extend({}, obj);
    }
    function delve(obj, key) {
        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
        return obj;
    }
    function isFunction(obj) {
        return 'function' == typeof obj;
    }
    function isString(obj) {
        return 'string' == typeof obj;
    }
    function hashToClassName(c) {
        var str = '';
        for (var prop in c) if (c[prop]) {
            if (str) str += ' ';
            str += prop;
        }
        return str;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function createLinkedState(component, key, eventPath) {
        var path = key.split('.');
        return function(e) {
            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
            obj[path[i]] = v;
            component.setState(state);
        };
    }
    function enqueueRender(component) {
        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p._dirty) renderComponent(p);
    }
    function isFunctionalComponent(vnode) {
        var nodeName = vnode && vnode.nodeName;
        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
    }
    function buildFunctionalComponent(vnode, context) {
        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
    }
    function isSameNodeType(node, vnode) {
        if (isString(vnode)) return node instanceof Text;
        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode); else return;
    }
    function isNamedNode(node, nodeName) {
        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
    }
    function getNodeProps(vnode) {
        var props = clone(vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function removeNode(node) {
        var p = node.parentNode;
        if (p) p.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var l = node._listeners || (node._listeners = {});
            name = toLowerCase(name.substring(2));
            if (value) {
                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            l[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name.match(/^xlink\:?(.+)/);
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this._listeners[e.type](options.event && options.event(e) || e);
    }
    function collectNode(node) {
        removeNode(node);
        if (node instanceof Element) {
            node._component = node._componentConstructor = null;
            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
            (nodes[_name] || (nodes[_name] = [])).push(node);
        }
    }
    function createNode(nodeName, isSvg) {
        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
        node.normalizedNodeName = name;
        return node;
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = parent && void 0 !== parent.ownerSVGElement;
            hydrating = dom && !(ATTR_KEY in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll) {
        var ref = vnode && vnode.attributes && vnode.attributes.ref;
        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
        if (null == vnode) vnode = '';
        if (isString(vnode)) {
            if (dom && dom instanceof Text && dom.parentNode) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                if (dom) recollectNodeTree(dom);
                dom = document.createTextNode(vnode);
            }
            return dom;
        }
        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
        var out = dom, nodeName = String(vnode.nodeName), prevSvgMode = isSvgMode, vchildren = vnode.children;
        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
            out = createNode(nodeName, isSvgMode);
            while (dom.firstChild) out.appendChild(dom.firstChild);
            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
            recollectNodeTree(dom);
        }
        var fc = out.firstChild, props = out[ATTR_KEY];
        if (!props) {
            out[ATTR_KEY] = props = {};
            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll, !!props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        if (ref) (props.ref = ref)(out);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, absorb) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
        if (len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child[ATTR_KEY], key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (hydrating || absorb || props || _child instanceof Text) children[childrenLen++] = _child;
        }
        if (vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && key in keyed) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
                c = children[j];
                if (c && isSameNodeType(c, vchild)) {
                    child = c;
                    children[j] = void 0;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                }
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) {
                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
                dom.insertBefore(child, originalChildren[i] || null);
            }
        }
        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
        while (min <= childrenLen) {
            child = children[childrenLen--];
            if (child) recollectNodeTree(child);
        }
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component, !unmountOnly); else {
            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
            if (!unmountOnly) collectNode(node);
            var c;
            while (c = node.lastChild) recollectNodeTree(c, unmountOnly);
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if (!(attrs && name in attrs) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        if (attrs) for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name, list = components[name];
        if (list) list.push(component); else components[name] = [ component ];
    }
    function createComponent(Ctor, props, context) {
        var inst = new Ctor(props, context), list = components[Ctor.name];
        Component.call(inst, props, context);
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.nextBase = list[i].nextBase;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component._disable) {
            component._disable = !0;
            if (component.__ref = props.ref) delete props.ref;
            if (component.__key = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.prevContext) component.prevContext = component.context;
                component.context = context;
            }
            if (!component.prevProps) component.prevProps = component.props;
            component.props = props;
            component._disable = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__ref) component.__ref(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component._disable) {
            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
            component._dirty = !1;
            if (!skip) {
                if (component.render) rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if (isFunction(childComponent)) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context); else {
                        toUnmount = inst;
                        inst = createComponent(childComponent, childProps, context);
                        inst.nextBase = inst.nextBase || nextBase;
                        inst._parentComponent = component;
                        component._component = inst;
                        setComponentProps(inst, childProps, 0, context);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t._parentComponent) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            var fn, cb = component._renderCallbacks;
            if (cb) while (fn = cb.pop()) fn.call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent, !0);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.nextBase) {
                c.nextBase = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom);
            }
        }
        return dom;
    }
    function unmountComponent(component, remove) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component._disable = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner, remove); else if (base) {
            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
            component.nextBase = base;
            if (remove) {
                removeNode(base);
                collectComponent(component);
            }
            var c;
            while (c = base.lastChild) recollectNodeTree(c, !remove);
        }
        if (component.__ref) component.__ref(null);
        if (component.componentDidUnmount) component.componentDidUnmount();
    }
    function Component(props, context) {
        this._dirty = !0;
        this.context = context;
        this.props = props;
        if (!this.state) this.state = {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var lcCache = {};
    var toLowerCase = function(s) {
        return lcCache[s] || (lcCache[s] = s.toLowerCase());
    };
    var resolved = 'undefined' != typeof Promise && Promise.resolve();
    var defer = resolved ? function(f) {
        resolved.then(f);
    } : setTimeout;
    var EMPTY = {};
    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
    var NON_DIMENSION_PROPS = {
        boxFlex: 1,
        boxFlexGroup: 1,
        columnCount: 1,
        fillOpacity: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        fontWeight: 1,
        lineClamp: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        strokeOpacity: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1
    };
    var NON_BUBBLING_EVENTS = {
        blur: 1,
        error: 1,
        focus: 1,
        load: 1,
        resize: 1,
        scroll: 1
    };
    var items = [];
    var nodes = {};
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        linkState: function(key, eventPath) {
            var c = this._linkedStates || (this._linkedStates = {});
            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
        },
        setState: function(state, callback) {
            var s = this.state;
            if (!this.prevState) this.prevState = clone(s);
            extend(s, isFunction(state) ? state(s, this.props) : state);
            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function() {
            renderComponent(this, 2);
        },
        render: function() {}
    });
    exports.h = h;
    exports.cloneElement = cloneElement;
    exports.Component = Component;
    exports.render = render;
    exports.rerender = rerender;
    exports.options = options;
});
//# sourceMappingURL=preact.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(248);
var foreach = __webpack_require__(250);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(68);
var ES = __webpack_require__(251);
var replace = bind.call(Function.call, String.prototype.replace);

var leftWhitespace = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;

module.exports = function trim() {
	var S = ES.ToString(ES.CheckObjectCoercible(this));
	return replace(replace(S, leftWhitespace, ''), rightWhitespace, '');
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(87);

var zeroWidthSpace = '\u200b';

module.exports = function getPolyfill() {
	if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace) {
		return String.prototype.trim;
	}
	return implementation;
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(20)
var startOfISOWeek = __webpack_require__(69)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(93)
var buildFormatLocale = __webpack_require__(94)

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 93 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_lib/build_formatting_tokens_reg_exp/index": 2,
	"./ar/build_distance_in_words_locale/index": 96,
	"./ar/build_format_locale/index": 97,
	"./ar/index": 269,
	"./bg/build_distance_in_words_locale/index": 98,
	"./bg/build_format_locale/index": 99,
	"./bg/index": 270,
	"./ca/build_distance_in_words_locale/index": 100,
	"./ca/build_format_locale/index": 101,
	"./ca/index": 271,
	"./cs/build_distance_in_words_locale/index": 102,
	"./cs/build_format_locale/index": 103,
	"./cs/index": 272,
	"./da/build_distance_in_words_locale/index": 104,
	"./da/build_format_locale/index": 105,
	"./da/index": 273,
	"./de/build_distance_in_words_locale/index": 106,
	"./de/build_format_locale/index": 107,
	"./de/index": 274,
	"./el/build_distance_in_words_locale/index": 108,
	"./el/build_format_locale/index": 109,
	"./el/index": 275,
	"./en/build_distance_in_words_locale/index": 93,
	"./en/build_format_locale/index": 94,
	"./en/index": 92,
	"./eo/build_distance_in_words_locale/index": 110,
	"./eo/build_format_locale/index": 111,
	"./eo/index": 276,
	"./es/build_distance_in_words_locale/index": 112,
	"./es/build_format_locale/index": 113,
	"./es/index": 277,
	"./fi/build_distance_in_words_locale/index": 114,
	"./fi/build_format_locale/index": 115,
	"./fi/index": 278,
	"./fil/build_distance_in_words_locale/index": 116,
	"./fil/build_format_locale/index": 117,
	"./fil/index": 279,
	"./fr/build_distance_in_words_locale/index": 118,
	"./fr/build_format_locale/index": 119,
	"./fr/index": 280,
	"./hr/build_distance_in_words_locale/index": 120,
	"./hr/build_format_locale/index": 121,
	"./hr/index": 281,
	"./id/build_distance_in_words_locale/index": 122,
	"./id/build_format_locale/index": 123,
	"./id/index": 282,
	"./is/build_distance_in_words_locale/index": 124,
	"./is/build_format_locale/index": 125,
	"./is/index": 283,
	"./it/build_distance_in_words_locale/index": 126,
	"./it/build_format_locale/index": 127,
	"./it/index": 284,
	"./ja/build_distance_in_words_locale/index": 128,
	"./ja/build_format_locale/index": 129,
	"./ja/index": 285,
	"./ko/build_distance_in_words_locale/index": 130,
	"./ko/build_format_locale/index": 131,
	"./ko/index": 286,
	"./mk/build_distance_in_words_locale/index": 132,
	"./mk/build_format_locale/index": 133,
	"./mk/index": 287,
	"./nb/build_distance_in_words_locale/index": 134,
	"./nb/build_format_locale/index": 135,
	"./nb/index": 288,
	"./nl/build_distance_in_words_locale/index": 136,
	"./nl/build_format_locale/index": 137,
	"./nl/index": 289,
	"./pl/build_distance_in_words_locale/index": 138,
	"./pl/build_format_locale/index": 139,
	"./pl/index": 290,
	"./pt/build_distance_in_words_locale/index": 140,
	"./pt/build_format_locale/index": 141,
	"./pt/index": 291,
	"./ro/build_distance_in_words_locale/index": 142,
	"./ro/build_format_locale/index": 143,
	"./ro/index": 292,
	"./ru/build_distance_in_words_locale/index": 144,
	"./ru/build_format_locale/index": 145,
	"./ru/index": 293,
	"./sk/build_distance_in_words_locale/index": 146,
	"./sk/build_format_locale/index": 147,
	"./sk/index": 294,
	"./sv/build_distance_in_words_locale/index": 148,
	"./sv/build_format_locale/index": 149,
	"./sv/index": 295,
	"./th/build_distance_in_words_locale/index": 150,
	"./th/build_format_locale/index": 151,
	"./th/index": 296,
	"./tr/build_distance_in_words_locale/index": 152,
	"./tr/build_format_locale/index": 153,
	"./tr/index": 297,
	"./zh_cn/build_distance_in_words_locale/index": 154,
	"./zh_cn/build_format_locale/index": 155,
	"./zh_cn/index": 298,
	"./zh_tw/build_distance_in_words_locale/index": 156,
	"./zh_tw/build_format_locale/index": 157,
	"./zh_tw/index": 299
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 95;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'أقل من ثانية واحدة',
      other: 'أقل من {{count}} ثواني'
    },

    xSeconds: {
      one: 'ثانية واحدة',
      other: '{{count}} ثواني'
    },

    halfAMinute: 'نصف دقيقة',

    lessThanXMinutes: {
      one: 'أقل من دقيقة',
      other: 'أقل من {{count}} دقيقة'
    },

    xMinutes: {
      one: 'دقيقة واحدة',
      other: '{{count}} دقائق'
    },

    aboutXHours: {
      one: 'ساعة واحدة تقريباً',
      other: '{{count}} ساعات تقريباً'
    },

    xHours: {
      one: 'ساعة واحدة',
      other: '{{count}} ساعات'
    },

    xDays: {
      one: 'يوم واحد',
      other: '{{count}} أيام'
    },

    aboutXMonths: {
      one: 'شهر واحد تقريباً',
      other: '{{count}} أشهر تقريباً'
    },

    xMonths: {
      one: 'شهر واحد',
      other: '{{count}} أشهر'
    },

    aboutXYears: {
      one: 'عام واحد تقريباً',
      other: '{{count}} أعوام تقريباً'
    },

    xYears: {
      one: 'عام واحد',
      other: '{{count}} أعوام'
    },

    overXYears: {
      one: 'أكثر من عام',
      other: 'أكثر من {{count}} أعوام'
    },

    almostXYears: {
      one: 'عام واحد تقريباً',
      other: '{{count}} أعوام تقريباً'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'في خلال ' + result
      } else {
        return 'منذ ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
  var monthsFull = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر']
  var weekdays2char = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
  var weekdays3char = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
  var weekdaysFull = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
  var meridiemUppercase = ['صباح', 'مساء']
  var meridiemLowercase = ['ص', 'م']
  var meridiemFull = ['صباحاً', 'مساءاً']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return String(number)
}

module.exports = buildFormatLocale


/***/ }),
/* 98 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'по-малко от секунда',
      other: 'по-малко от {{count}} секунди'
    },

    xSeconds: {
      one: '1 секунда',
      other: '{{count}} секунди'
    },

    halfAMinute: 'половин минута',

    lessThanXMinutes: {
      one: 'по-малко от минута',
      other: 'по-малко от {{count}} минути'
    },

    xMinutes: {
      one: '1 минута',
      other: '{{count}} минути'
    },

    aboutXHours: {
      one: 'около час',
      other: 'около {{count}} часа'
    },

    xHours: {
      one: '1 час',
      other: '{{count}} часа'
    },

    xDays: {
      one: '1 ден',
      other: '{{count}} дни'
    },

    aboutXMonths: {
      one: 'около месец',
      other: 'около {{count}} месеца'
    },

    xMonths: {
      one: '1 месец',
      other: '{{count}} месеца'
    },

    aboutXYears: {
      one: 'около година',
      other: 'около {{count}} години'
    },

    xYears: {
      one: '1 година',
      other: '{{count}} години'
    },

    overXYears: {
      one: 'над година',
      other: 'над {{count}} години'
    },

    almostXYears: {
      one: 'почти година',
      other: 'почти {{count}} години'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'след ' + result
      } else {
        return 'преди ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек']
  var monthsFull = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
  var weekdays2char = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  var weekdays3char = ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб']
  var weekdaysFull = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
  var meridiem = ['сутринта', 'на обяд', 'следобед', 'вечерта']

  var timeOfDay = function (date) {
    var hours = date.getHours()
    if (hours >= 4 && hours < 12) {
      return meridiem[0]
    } else if (hours >= 12 && hours < 14) {
      return meridiem[1]
    } else if (hours >= 14 && hours < 17) {
      return meridiem[2]
    } else {
      return meridiem[3]
    }
  }

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': timeOfDay,

    // am, pm
    'a': timeOfDay,

    // a.m., p.m.
    'aa': timeOfDay
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви'
      case 2:
        return number + '-ри'
    }
  }
  return number + '-и'
}

module.exports = buildFormatLocale


/***/ }),
/* 100 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: "menys d'un segon",
      other: 'menys de {{count}} segons'
    },

    xSeconds: {
      one: '1 segon',
      other: '{{count}} segons'
    },

    halfAMinute: 'mig minut',

    lessThanXMinutes: {
      one: "menys d'un minut",
      other: 'menys de {{count}} minuts'
    },

    xMinutes: {
      one: '1 minut',
      other: '{{count}} minuts'
    },

    aboutXHours: {
      one: 'aproximadament una hora',
      other: 'aproximadament {{count}} hores'
    },

    xHours: {
      one: '1 hora',
      other: '{{count}} hores'
    },

    xDays: {
      one: '1 dia',
      other: '{{count}} dies'
    },

    aboutXMonths: {
      one: 'aproximadament un mes',
      other: 'aproximadament {{count}} mesos'
    },

    xMonths: {
      one: '1 mes',
      other: '{{count}} mesos'
    },

    aboutXYears: {
      one: 'aproximadament un any',
      other: 'aproximadament {{count}} anys'
    },

    xYears: {
      one: '1 any',
      other: '{{count}} anys'
    },

    overXYears: {
      one: "més d'un any",
      other: 'més de {{count}} anys'
    },

    almostXYears: {
      one: 'gairebé un any',
      other: 'gairebé {{count}} anys'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'en ' + result
      } else {
        return 'fa ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['gen', 'feb', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'des']
  var monthsFull = ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octobre', 'novembre', 'desembre']
  var weekdays2char = ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds']
  var weekdays3char = ['dge', 'dls', 'dts', 'dcs', 'djs', 'dvs', 'dss']
  var weekdaysFull = ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  switch (number) {
    case 1:
      return '1r'
    case 2:
      return '2n'
    case 3:
      return '3r'
    case 4:
      return '4t'
    default:
      return number + 'è'
  }
}

module.exports = buildFormatLocale


/***/ }),
/* 102 */
/***/ (function(module, exports) {

function declensionGroup (scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  if (count >= 2 && count <= 4) {
    return scheme.twoFour
  }

  // if count === null || count === 0 || count >= 5
  return scheme.other
}

function declension (scheme, count, time) {
  var group = declensionGroup(scheme, count)
  var finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function extractPreposition (token) {
  var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
    return !!token.match(new RegExp('^' + preposition))
  })

  return result[0]
}

function prefixPreposition (preposition) {
  var translation = ''

  if (preposition === 'almost') {
    translation = 'skoro'
  }

  if (preposition === 'about') {
    translation = 'přibližně'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function suffixPreposition (preposition) {
  var translation = ''

  if (preposition === 'lessThan') {
    translation = 'méně než'
  }

  if (preposition === 'over') {
    translation = 'více než'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function lowercaseFirstLetter (string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    xSeconds: {
      one: {
        regular: 'vteřina',
        past: 'vteřinou',
        future: 'vteřinu'
      },
      twoFour: {
        regular: '{{count}} vteřiny',
        past: '{{count}} vteřinami',
        future: '{{count}} vteřiny'
      },
      other: {
        regular: '{{count}} vteřin',
        past: '{{count}} vteřinami',
        future: '{{count}} vteřin'
      }
    },

    halfAMinute: {
      other: {
        regular: 'půl minuty',
        past: 'půl minutou',
        future: 'půl minuty'
      }
    },

    xMinutes: {
      one: {
        regular: 'minuta',
        past: 'minutou',
        future: 'minutu'
      },
      twoFour: {
        regular: '{{count}} minuty',
        past: '{{count}} minutami',
        future: '{{count}} minuty'
      },
      other: {
        regular: '{{count}} minut',
        past: '{{count}} minutami',
        future: '{{count}} minut'
      }
    },

    xHours: {
      one: {
        regular: 'hodina',
        past: 'hodinou',
        future: 'hodinu'
      },
      twoFour: {
        regular: '{{count}} hodiny',
        past: '{{count}} hodinami',
        future: '{{count}} hodiny'
      },
      other: {
        regular: '{{count}} hodin',
        past: '{{count}} hodinami',
        future: '{{count}} hodin'
      }
    },

    xDays: {
      one: {
        regular: 'den',
        past: 'dnem',
        future: 'den'
      },
      twoFour: {
        regular: '{{count}} dni',
        past: '{{count}} dny',
        future: '{{count}} dni'
      },
      other: {
        regular: '{{count}} dní',
        past: '{{count}} dny',
        future: '{{count}} dní'
      }
    },

    xMonths: {
      one: {
        regular: 'měsíc',
        past: 'měsícem',
        future: 'měsíc'
      },
      twoFour: {
        regular: '{{count}} měsíce',
        past: '{{count}} měsíci',
        future: '{{count}} měsíce'
      },
      other: {
        regular: '{{count}} měsíců',
        past: '{{count}} měsíci',
        future: '{{count}} měsíců'
      }
    },

    xYears: {
      one: {
        regular: 'rok',
        past: 'rokem',
        future: 'rok'
      },
      twoFour: {
        regular: '{{count}} roky',
        past: '{{count}} roky',
        future: '{{count}} roky'
      },
      other: {
        regular: '{{count}} roků',
        past: '{{count}} roky',
        future: '{{count}} roků'
      }
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var preposition = extractPreposition(token) || ''
    var key = lowercaseFirstLetter(token.substring(preposition.length))
    var scheme = distanceInWordsLocale[key]

    if (!options.addSuffix) {
      return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'regular')
    }

    if (options.comparison > 0) {
      return prefixPreposition(preposition) + 'za ' + suffixPreposition(preposition) + declension(scheme, count, 'future')
    } else {
      return prefixPreposition(preposition) + 'před ' + suffixPreposition(preposition) + declension(scheme, count, 'past')
    }
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro']
  var monthsFull = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
  var weekdays2char = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
  var weekdays3char = ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob']
  var weekdaysFull = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
  var meridiemUppercase = ['DOP.', 'ODP.']
  var meridiemLowercase = ['dop.', 'odp.']
  var meridiemFull = ['dopoledne', 'odpoledne']

  var formatters = {
    // Month: led, úno, ..., pro
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: leden, únor, ..., prosinec
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: ne, po, ..., so
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: ned, pon, ..., sob
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: neděle, pondělí, ..., sobota
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // DOP., ODP.
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // dop., odp.
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // dopoledne, odpoledne
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),
/* 104 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mindre end et sekund',
      other: 'mindre end {{count}} sekunder'
    },

    xSeconds: {
      one: '1 sekund',
      other: '{{count}} sekunder'
    },

    halfAMinute: 'et halvt minut',

    lessThanXMinutes: {
      one: 'mindre end et minut',
      other: 'mindre end {{count}} minutter'
    },

    xMinutes: {
      one: '1 minut',
      other: '{{count}} minutter'
    },

    aboutXHours: {
      one: 'cirka 1 time',
      other: 'cirka {{count}} timer'
    },

    xHours: {
      one: '1 time',
      other: '{{count}} timer'
    },

    xDays: {
      one: '1 dag',
      other: '{{count}} dage'
    },

    aboutXMonths: {
      one: 'cirka 1 måned',
      other: 'cirka {{count}} måneder'
    },

    xMonths: {
      one: '1 måned',
      other: '{{count}} måneder'
    },

    aboutXYears: {
      one: 'cirka 1 år',
      other: 'cirka {{count}} år'
    },

    xYears: {
      one: '1 år',
      other: '{{count}} år'
    },

    overXYears: {
      one: 'over 1 år',
      other: 'over {{count}} år'
    },

    almostXYears: {
      one: 'næsten 1 år',
      other: 'næsten {{count}} år'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'om ' + result
      } else {
        return result + ' siden'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
  var weekdays3char = ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør']
  var weekdaysFull = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),
/* 106 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      standalone: {
        one: 'weniger als eine Sekunde',
        other: 'weniger als {{count}} Sekunden'
      },
      withPreposition: {
        one: 'weniger als einer Sekunde',
        other: 'weniger als {{count}} Sekunden'
      }
    },

    xSeconds: {
      standalone: {
        one: 'eine Sekunde',
        other: '{{count}} Sekunden'
      },
      withPreposition: {
        one: 'einer Sekunde',
        other: '{{count}} Sekunden'
      }
    },

    halfAMinute: {
      standalone: 'eine halbe Minute',
      withPreposition: 'einer halben Minute'
    },

    lessThanXMinutes: {
      standalone: {
        one: 'weniger als eine Minute',
        other: 'weniger als {{count}} Minuten'
      },
      withPreposition: {
        one: 'weniger als einer Minute',
        other: 'weniger als {{count}} Minuten'
      }
    },

    xMinutes: {
      standalone: {
        one: 'eine Minute',
        other: '{{count}} Minuten'
      },
      withPreposition: {
        one: 'einer Minute',
        other: '{{count}} Minuten'
      }
    },

    aboutXHours: {
      standalone: {
        one: 'etwa eine Stunde',
        other: 'etwa {{count}} Stunden'
      },
      withPreposition: {
        one: 'etwa einer Stunde',
        other: 'etwa {{count}} Stunden'
      }
    },

    xHours: {
      standalone: {
        one: 'eine Stunde',
        other: '{{count}} Stunden'
      },
      withPreposition: {
        one: 'einer Stunde',
        other: '{{count}} Stunden'
      }
    },

    xDays: {
      standalone: {
        one: 'ein Tag',
        other: '{{count}} Tage'
      },
      withPreposition: {
        one: 'einem Tag',
        other: '{{count}} Tagen'
      }

    },

    aboutXMonths: {
      standalone: {
        one: 'etwa ein Monat',
        other: 'etwa {{count}} Monate'
      },
      withPreposition: {
        one: 'etwa einem Monat',
        other: 'etwa {{count}} Monaten'
      }
    },

    xMonths: {
      standalone: {
        one: 'ein Monat',
        other: '{{count}} Monate'
      },
      withPreposition: {
        one: 'einem Monat',
        other: '{{count}} Monaten'
      }
    },

    aboutXYears: {
      standalone: {
        one: 'etwa ein Jahr',
        other: 'etwa {{count}} Jahre'
      },
      withPreposition: {
        one: 'etwa einem Jahr',
        other: 'etwa {{count}} Jahren'
      }
    },

    xYears: {
      standalone: {
        one: 'ein Jahr',
        other: '{{count}} Jahre'
      },
      withPreposition: {
        one: 'einem Jahr',
        other: '{{count}} Jahren'
      }
    },

    overXYears: {
      standalone: {
        one: 'mehr als ein Jahr',
        other: 'mehr als {{count}} Jahre'
      },
      withPreposition: {
        one: 'mehr als einem Jahr',
        other: 'mehr als {{count}} Jahren'
      }
    },

    almostXYears: {
      standalone: {
        one: 'fast ein Jahr',
        other: 'fast {{count}} Jahre'
      },
      withPreposition: {
        one: 'fast einem Jahr',
        other: 'fast {{count}} Jahren'
      }
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var usageGroup = options.addSuffix
      ? distanceInWordsLocale[token].withPreposition
      : distanceInWordsLocale[token].standalone

    var result
    if (typeof usageGroup === 'string') {
      result = usageGroup
    } else if (count === 1) {
      result = usageGroup.one
    } else {
      result = usageGroup.other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return 'vor ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  // Note: in German, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  var monthsFull = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  var weekdays2char = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  var weekdays3char = ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam']
  var weekdaysFull = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),
/* 108 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'λιγότερο από ένα δευτερόλεπτο',
      other: 'λιγότερο από {{count}} δευτερόλεπτα'
    },

    xSeconds: {
      one: '1 δευτερόλεπτο',
      other: '{{count}} δευτερόλεπτα'
    },

    halfAMinute: 'μισό λεπτό',

    lessThanXMinutes: {
      one: 'λιγότερο από ένα λεπτό',
      other: 'λιγότερο από {{count}} λεπτά'
    },

    xMinutes: {
      one: '1 λεπτό',
      other: '{{count}} λεπτά'
    },

    aboutXHours: {
      one: 'περίπου 1 ώρα',
      other: 'περίπου {{count}} ώρες'
    },

    xHours: {
      one: '1 ώρα',
      other: '{{count}} ώρες'
    },

    xDays: {
      one: '1 ημέρα',
      other: '{{count}} ημέρες'
    },

    aboutXMonths: {
      one: 'περίπου 1 μήνας',
      other: 'περίπου {{count}} μήνες'
    },

    xMonths: {
      one: '1 μήνας',
      other: '{{count}} μήνες'
    },

    aboutXYears: {
      one: 'περίπου 1 χρόνο',
      other: 'περίπου {{count}} χρόνια'
    },

    xYears: {
      one: '1 χρόνο',
      other: '{{count}} χρόνια'
    },

    overXYears: {
      one: 'πάνω από 1 χρόνο',
      other: 'πάνω από {{count}} χρόνια'
    },

    almostXYears: {
      one: 'περίπου 1 χρόνο',
      other: 'περίπου {{count}} χρόνια'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'σε ' + result
      } else {
        return result + ' πρίν'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ']
  var monthsFull = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος']
  var monthsGenitive = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
  var weekdays2char = ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πέ', 'Πα', 'Σά']
  var weekdays3char = ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ']
  var weekdaysFull = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
  var meridiemUppercase = ['ΠΜ', 'ΜΜ']
  var meridiemLowercase = ['πμ', 'μμ']
  var meridiemFull = ['π.μ.', 'μ.μ.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalGenders = {
    'M': 'ος',
    'D': 'η',
    'DDD': 'η',
    'd': 'η',
    'Q': 'ο',
    'W': 'η'
  }
  var ordinalKeys = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalKeys.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + ordinalGenders[formatterToken]
    }
  })

  // Generate genitive variant of full months
  var formatsWithGenitive = ['D', 'Do', 'DD']
  formatsWithGenitive.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),
/* 110 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'malpli ol sekundo',
      other: 'malpli ol {{count}} sekundoj'
    },

    xSeconds: {
      one: '1 sekundo',
      other: '{{count}} sekundoj'
    },

    halfAMinute: 'duonminuto',

    lessThanXMinutes: {
      one: 'malpli ol minuto',
      other: 'malpli ol {{count}} minutoj'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutoj'
    },

    aboutXHours: {
      one: 'proksimume 1 horo',
      other: 'proksimume {{count}} horoj'
    },

    xHours: {
      one: '1 horo',
      other: '{{count}} horoj'
    },

    xDays: {
      one: '1 tago',
      other: '{{count}} tagoj'
    },

    aboutXMonths: {
      one: 'proksimume 1 monato',
      other: 'proksimume {{count}} monatoj'
    },

    xMonths: {
      one: '1 monato',
      other: '{{count}} monatoj'
    },

    aboutXYears: {
      one: 'proksimume 1 jaro',
      other: 'proksimume {{count}} jaroj'
    },

    xYears: {
      one: '1 jaro',
      other: '{{count}} jaroj'
    },

    overXYears: {
      one: 'pli ol 1 jaro',
      other: 'pli ol {{count}} jaroj'
    },

    almostXYears: {
      one: 'preskaŭ 1 jaro',
      other: 'preskaŭ {{count}} jaroj'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'post ' + result
      } else {
        return 'antaŭ ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro']
  var weekdays2char = ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa']
  var weekdays3char = ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab']
  var weekdaysFull = ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato']
  var meridiemUppercase = ['A.T.M.', 'P.T.M.']
  var meridiemLowercase = ['a.t.m.', 'p.t.m.']
  var meridiemFull = ['antaŭtagmeze', 'posttagmeze']

  var formatters = {
    // Month: jan, feb, ..., deс
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: januaro, februaro, ..., decembro
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: di, lu, ..., sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: dim, lun, ..., sab
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: dimanĉo, lundo, ..., sabato
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // A.T.M., P.T.M.
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // a.t.m., p.t.m.
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // antaŭtagmeze, posttagmeze
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-a'
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),
/* 112 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'menos de un segundo',
      other: 'menos de {{count}} segundos'
    },

    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundos'
    },

    halfAMinute: 'medio minuto',

    lessThanXMinutes: {
      one: 'menos de un minuto',
      other: 'menos de {{count}} minutos'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutos'
    },

    aboutXHours: {
      one: 'alrededor de 1 hora',
      other: 'alrededor de {{count}} horas'
    },

    xHours: {
      one: '1 hora',
      other: '{{count}} horas'
    },

    xDays: {
      one: '1 día',
      other: '{{count}} días'
    },

    aboutXMonths: {
      one: 'alrededor de 1 mes',
      other: 'alrededor de {{count}} meses'
    },

    xMonths: {
      one: '1 mes',
      other: '{{count}} meses'
    },

    aboutXYears: {
      one: 'alrededor de 1 año',
      other: 'alrededor de {{count}} años'
    },

    xYears: {
      one: '1 año',
      other: '{{count}} años'
    },

    overXYears: {
      one: 'más de 1 año',
      other: 'más de {{count}} años'
    },

    almostXYears: {
      one: 'casi 1 año',
      other: 'casi {{count}} años'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'en ' + result
      } else {
        return 'hace ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  var monthsFull = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  var weekdays2char = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sa']
  var weekdays3char = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb']
  var weekdaysFull = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + 'º'
}

module.exports = buildFormatLocale


/***/ }),
/* 114 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  function futureSeconds (text) {
    return text.replace(/sekuntia?/, 'sekunnin')
  }

  function futureMinutes (text) {
    return text.replace(/minuuttia?/, 'minuutin')
  }

  function futureHours (text) {
    return text.replace(/tuntia?/, 'tunnin')
  }

  function futureDays (text) {
    return text.replace(/päivää?/, 'päivän')
  }

  function futureMonths (text) {
    return text.replace(/(kuukausi|kuukautta)/, 'kuukauden')
  }

  function futureYears (text) {
    return text.replace(/(vuosi|vuotta)/, 'vuoden')
  }

  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'alle sekunti',
      other: 'alle {{count}} sekuntia',
      futureTense: futureSeconds
    },

    xSeconds: {
      one: 'sekunti',
      other: '{{count}} sekuntia',
      futureTense: futureSeconds
    },

    halfAMinute: {
      one: 'puoli minuuttia',
      other: 'puoli minuuttia',
      futureTense: function (text) {
        return 'puolen minuutin'
      }
    },

    lessThanXMinutes: {
      one: 'alle minuutti',
      other: 'alle {{count}} minuuttia',
      futureTense: futureMinutes
    },

    xMinutes: {
      one: 'minuutti',
      other: '{{count}} minuuttia',
      futureTense: futureMinutes
    },

    aboutXHours: {
      one: 'noin tunti',
      other: 'noin {{count}} tuntia',
      futureTense: futureHours
    },

    xHours: {
      one: 'tunti',
      other: '{{count}} tuntia',
      futureTense: futureHours
    },

    xDays: {
      one: 'päivä',
      other: '{{count}} päivää',
      futureTense: futureDays
    },

    aboutXMonths: {
      one: 'noin kuukausi',
      other: 'noin {{count}} kuukautta',
      futureTense: futureMonths
    },

    xMonths: {
      one: 'kuukausi',
      other: '{{count}} kuukautta',
      futureTense: futureMonths
    },

    aboutXYears: {
      one: 'noin vuosi',
      other: 'noin {{count}} vuotta',
      futureTense: futureYears
    },

    xYears: {
      one: 'vuosi',
      other: '{{count}} vuotta',
      futureTense: futureYears
    },

    overXYears: {
      one: 'yli vuosi',
      other: 'yli {{count}} vuotta',
      futureTense: futureYears
    },

    almostXYears: {
      one: 'lähes vuosi',
      other: 'lähes {{count}} vuotta',
      futureTense: futureYears
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var distance = distanceInWordsLocale[token]
    var result = count === 1 ? distance.one : distance.other.replace('{{count}}', count)

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return distance.futureTense(result) + ' kuluttua'
      } else {
        return result + ' sitten'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu']
  var monthsFull = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu']
  var weekdays2char = ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
  var weekdaysFull = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']

  // In Finnish `a.m.` / `p.m.` are virtually never used, but it seems `AP` (aamupäivä) / `IP` (iltapäivä) are acknowleded terms:
  // https://fi.wikipedia.org/wiki/24_tunnin_kello
  function meridiem (date) {
    return date.getHours() < 12 ? 'AP' : 'IP'
  }

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      // Finnish doesn't use two-char weekdays
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': meridiem,

    // am, pm
    'a': meridiem,

    // a.m., p.m.
    'aa': meridiem
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date).toString() + '.'
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),
/* 116 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mas maliit sa isang segundo',
      other: 'mas maliit sa {{count}} segundo'
    },

    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundo'
    },

    halfAMinute: 'kalahating minuto',

    lessThanXMinutes: {
      one: 'mas maliit sa isang minuto',
      other: 'mas maliit sa {{count}} minuto'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minuto'
    },

    aboutXHours: {
      one: 'mga 1 oras',
      other: 'mga {{count}} oras'
    },

    xHours: {
      one: '1 oras',
      other: '{{count}} oras'
    },

    xDays: {
      one: '1 araw',
      other: '{{count}} araw'
    },

    aboutXMonths: {
      one: 'mga 1 buwan',
      other: 'mga {{count}} buwan'
    },

    xMonths: {
      one: '1 buwan',
      other: '{{count}} buwan'
    },

    aboutXYears: {
      one: 'mga 1 taon',
      other: 'mga {{count}} taon'
    },

    xYears: {
      one: '1 taon',
      other: '{{count}} taon'
    },

    overXYears: {
      one: 'higit sa 1 taon',
      other: 'higit sa {{count}} taon'
    },

    almostXYears: {
      one: 'halos 1 taon',
      other: 'halos {{count}} taon'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'sa loob ng ' + result
      } else {
        return result + ' ang nakalipas'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis']
  var monthsFull = ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre']
  var weekdays2char = ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa']
  var weekdays3char = ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab']
  var weekdaysFull = ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado']
  var meridiemUppercase = ['NU', 'NT', 'NH', 'NG']
  var meridiemLowercase = ['nu', 'nt', 'nh', 'ng']
  var meridiemFull = ['ng umaga', 'ng tanghali', 'ng hapon', 'ng gabi']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemUppercase[2]
        } else {
          return meridiemUppercase[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemUppercase[0]
      } else {
        return meridiemUppercase[1]
      }
    },

    // am, pm
    'a': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemLowercase[2]
        } else {
          return meridiemLowercase[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemLowercase[0]
      } else {
        return meridiemLowercase[1]
      }
    },

    // a.m., p.m.
    'aa': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemFull[2]
        } else {
          return meridiemFull[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemFull[0]
      } else {
        return meridiemFull[1]
      }
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return 'ika-' + number
}

module.exports = buildFormatLocale


/***/ }),
/* 118 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'moins d’une seconde',
      other: 'moins de {{count}} secondes'
    },

    xSeconds: {
      one: '1 seconde',
      other: '{{count}} secondes'
    },

    halfAMinute: '30 secondes',

    lessThanXMinutes: {
      one: 'moins d’une minute',
      other: 'moins de {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'environ 1 heure',
      other: 'environ {{count}} heures'
    },

    xHours: {
      one: '1 heure',
      other: '{{count}} heures'
    },

    xDays: {
      one: '1 jour',
      other: '{{count}} jours'
    },

    aboutXMonths: {
      one: 'environ 1 mois',
      other: 'environ {{count}} mois'
    },

    xMonths: {
      one: '1 mois',
      other: '{{count}} mois'
    },

    aboutXYears: {
      one: 'environ 1 an',
      other: 'environ {{count}} ans'
    },

    xYears: {
      one: '1 an',
      other: '{{count}} ans'
    },

    overXYears: {
      one: 'plus d’un an',
      other: 'plus de {{count}} ans'
    },

    almostXYears: {
      one: 'presqu’un an',
      other: 'presque {{count}} ans'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'dans ' + result
      } else {
        return 'il y a ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
  var monthsFull = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  var weekdays2char = ['di', 'lu', 'ma', 'me', 'je', 've', 'sa']
  var weekdays3char = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.']
  var weekdaysFull = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['du matin', 'de l’après-midi', 'du soir']

  var formatters = {
    // Month: Jan, Feb, …, Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, …, December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, …, Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, …, Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, …, Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      var hours = date.getHours()

      if (hours <= 12) {
        return meridiemFull[0]
      }

      if (hours <= 16) {
        return meridiemFull[1]
      }

      return meridiemFull[2]
    },

    // ISO week, ordinal version: 1st, 2nd, …, 53rd
    // NOTE: Week has feminine grammatical gender in French: semaine
    'Wo': function (date, formatters) {
      return feminineOrdinal(formatters.W(date))
    }
  }

  // Generate ordinal version of formatters: M → Mo, D → Do, etc.
  // NOTE: For words with masculine grammatical gender in French: mois, jour, trimestre
  var formatterTokens = ['M', 'D', 'DDD', 'd', 'Q']
  formatterTokens.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return masculineOrdinal(formatters[formatterToken](date))
    }
  })

  // Special case for day of month ordinals in long date format context:
  // 1er mars, 2 mars, 3 mars, …
  // See https://github.com/date-fns/date-fns/issues/437
  //
  // NOTE: The below implementation works because parsing of tokens inside a
  // format string is done by a greedy regular expression, i.e. longer tokens
  // have priority. E.g. formatter for "Do MMMM" has priority over individual
  // formatters for "Do" and "MMMM".
  var monthsTokens = ['MMM', 'MMMM']
  monthsTokens.forEach(function (monthToken) {
    formatters['Do ' + monthToken] = function (date, commonFormatters) {
      var dayOfMonthToken = date.getDate() === 1
        ? 'Do'
        : 'D'
      var dayOfMonthFormatter = formatters[dayOfMonthToken] || commonFormatters[dayOfMonthToken]

      return dayOfMonthFormatter(date, commonFormatters) + ' ' + formatters[monthToken](date)
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function masculineOrdinal (number) {
  if (number === 1) {
    return '1er'
  }

  return number + 'e'
}

function feminineOrdinal (number) {
  if (number === 1) {
    return '1re'
  }

  return number + 'e'
}

module.exports = buildFormatLocale


/***/ }),
/* 120 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: {
        standalone: 'manje od 1 sekunde',
        withPrepositionAgo: 'manje od 1 sekunde',
        withPrepositionIn: 'manje od 1 sekundu'
      },
      dual: 'manje od {{count}} sekunde',
      other: 'manje od {{count}} sekundi'
    },

    xSeconds: {
      one: {
        standalone: '1 sekunda',
        withPrepositionAgo: '1 sekunde',
        withPrepositionIn: '1 sekundu'
      },
      dual: '{{count}} sekunde',
      other: '{{count}} sekundi'
    },

    halfAMinute: 'pola minute',

    lessThanXMinutes: {
      one: {
        standalone: 'manje od 1 minute',
        withPrepositionAgo: 'manje od 1 minute',
        withPrepositionIn: 'manje od 1 minutu'
      },
      dual: 'manje od {{count}} minute',
      other: 'manje od {{count}} minuta'
    },

    xMinutes: {
      one: {
        standalone: '1 minuta',
        withPrepositionAgo: '1 minute',
        withPrepositionIn: '1 minutu'
      },
      dual: '{{count}} minute',
      other: '{{count}} minuta'
    },

    aboutXHours: {
      one: {
        standalone: 'oko 1 sat',
        withPrepositionAgo: 'oko 1 sat',
        withPrepositionIn: 'oko 1 sat'
      },
      dual: 'oko {{count}} sata',
      other: 'oko {{count}} sati'
    },

    xHours: {
      one: {
        standalone: '1 sat',
        withPrepositionAgo: '1 sat',
        withPrepositionIn: '1 sat'
      },
      dual: '{{count}} sata',
      other: '{{count}} sati'
    },

    xDays: {
      one: {
        standalone: '1 dan',
        withPrepositionAgo: '1 dan',
        withPrepositionIn: '1 dan'
      },
      dual: '{{count}} dana',
      other: '{{count}} dana'
    },

    aboutXMonths: {
      one: {
        standalone: 'oko 1 mjesec',
        withPrepositionAgo: 'oko 1 mjesec',
        withPrepositionIn: 'oko 1 mjesec'
      },
      dual: 'oko {{count}} mjeseca',
      other: 'oko {{count}} mjeseci'
    },

    xMonths: {
      one: {
        standalone: '1 mjesec',
        withPrepositionAgo: '1 mjesec',
        withPrepositionIn: '1 mjesec'
      },
      dual: '{{count}} mjeseca',
      other: '{{count}} mjeseci'
    },

    aboutXYears: {
      one: {
        standalone: 'oko 1 godinu',
        withPrepositionAgo: 'oko 1 godinu',
        withPrepositionIn: 'oko 1 godinu'
      },
      dual: 'oko {{count}} godine',
      other: 'oko {{count}} godina'
    },

    xYears: {
      one: {
        standalone: '1 godina',
        withPrepositionAgo: '1 godine',
        withPrepositionIn: '1 godinu'
      },
      dual: '{{count}} godine',
      other: '{{count}} godina'
    },

    overXYears: {
      one: {
        standalone: 'preko 1 godinu',
        withPrepositionAgo: 'preko 1 godinu',
        withPrepositionIn: 'preko 1 godinu'
      },
      dual: 'preko {{count}} godine',
      other: 'preko {{count}} godina'
    },

    almostXYears: {
      one: {
        standalone: 'gotovo 1 godinu',
        withPrepositionAgo: 'gotovo 1 godinu',
        withPrepositionIn: 'gotovo 1 godinu'
      },
      dual: 'gotovo {{count}} godine',
      other: 'gotovo {{count}} godina'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result

    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      if (options.addSuffix) {
        if (options.comparison > 0) {
          result = distanceInWordsLocale[token].one.withPrepositionIn
        } else {
          result = distanceInWordsLocale[token].one.withPrepositionAgo
        }
      } else {
        result = distanceInWordsLocale[token].one.standalone
      }
    } else if (
      count % 10 > 1 && count % 10 < 5 && // if last digit is between 2 and 4
      String(count).substr(-2, 1) !== '1' // unless the 2nd to last digit is "1"
    ) {
      result = distanceInWordsLocale[token].dual.replace('{{count}}', count)
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'za ' + result
      } else {
        return 'prije ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro']
  var monthsFull = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac']
  var monthsGenitive = ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenog', 'prosinca']
  var weekdays2char = ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su']
  var weekdays3char = ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']
  var weekdaysFull = ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota']
  var meridiemUppercase = ['ujutro', 'popodne']
  var meridiemLowercase = ['ujutro', 'popodne']
  var meridiemFull = ['ujutro', 'popodne']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  // Generate formatters like 'D MMMM', where the month is in the genitive case
  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),
/* 122 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'kurang dari 1 detik',
      other: 'kurang dari {{count}} detik'
    },

    xSeconds: {
      one: '1 detik',
      other: '{{count}} detik'
    },

    halfAMinute: 'setengah menit',

    lessThanXMinutes: {
      one: 'kurang dari 1 menit',
      other: 'kurang dari {{count}} menit'
    },

    xMinutes: {
      one: '1 menit',
      other: '{{count}} menit'
    },

    aboutXHours: {
      one: 'sekitar 1 jam',
      other: 'sekitar {{count}} jam'
    },

    xHours: {
      one: '1 jam',
      other: '{{count}} jam'
    },

    xDays: {
      one: '1 hari',
      other: '{{count}} hari'
    },

    aboutXMonths: {
      one: 'sekitar 1 bulan',
      other: 'sekitar {{count}} bulan'
    },

    xMonths: {
      one: '1 bulan',
      other: '{{count}} bulan'
    },

    aboutXYears: {
      one: 'sekitar 1 tahun',
      other: 'sekitar {{count}} tahun'
    },

    xYears: {
      one: '1 tahun',
      other: '{{count}} tahun'
    },

    overXYears: {
      one: 'lebih dari 1 tahun',
      other: 'lebih dari {{count}} tahun'
    },

    almostXYears: {
      one: 'hampir 1 tahun',
      other: 'hampir {{count}} tahun'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'dalam waktu ' + result
      } else {
        return result + ' yang lalu'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  // Note: in Indonesian, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  var monthsFull = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  var weekdays2char = ['Mi', 'Sn', 'Sl', 'Ra', 'Ka', 'Ju', 'Sa']
  var weekdays3char = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  var weekdaysFull = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  switch (number) {
    case 1:
      return 'pertama'
    case 2:
      return 'kedua'
    case 3:
      return 'ketiga'
    default:
      return 'ke-' + number
  }
}

module.exports = buildFormatLocale


/***/ }),
/* 124 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'minna en 1 sekúnda',
      other: 'minna en {{count}} sekúndur'
    },

    xSeconds: {
      one: '1 sekúnda',
      other: '{{count}} sekúndur'
    },

    halfAMinute: 'hálf mínúta',

    lessThanXMinutes: {
      one: 'minna en 1 mínúta',
      other: 'minna en {{count}} mínútur'
    },

    xMinutes: {
      one: '1 mínúta',
      other: '{{count}} mínútur'
    },

    aboutXHours: {
      one: 'u.þ.b. 1 klukkustund',
      other: 'u.þ.b. {{count}} klukkustundir'
    },

    xHours: {
      one: '1 klukkustund',
      other: '{{count}} klukkustundir'
    },

    xDays: {
      one: '1 dagur',
      other: '{{count}} dagar'
    },

    aboutXMonths: {
      one: 'u.þ.b. 1 mánuður',
      other: 'u.þ.b. {{count}} mánuðir'
    },

    xMonths: {
      one: '1 mánuður',
      other: '{{count}} mánuðir'
    },

    aboutXYears: {
      one: 'u.þ.b. 1 ár',
      other: 'u.þ.b. {{count}} ár'
    },

    xYears: {
      one: '1 ár',
      other: '{{count}} ár'
    },

    overXYears: {
      one: 'meira en 1 ár',
      other: 'meira en {{count}} ár'
    },

    almostXYears: {
      one: 'næstum 1 ár',
      other: 'næstum {{count}} ár'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'í ' + result
      } else {
        return result + ' síðan'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maí', 'jún', 'júl', 'ágú', 'sep', 'okt', 'nóv', 'des']
  var monthsFull = ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember']
  var weekdays2char = ['su', 'má', 'þr', 'mi', 'fi', 'fö', 'la']
  var weekdays3char = ['sun', 'mán', 'þri', 'mið', 'fim', 'fös', 'lau']
  var weekdaysFull = ['sunnudaginn', 'mánudaginn', 'þriðjudaginn', 'miðvikudaginn', 'fimmtudaginn', 'föstudaginn', 'laugardaginn']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return '' + number
}

module.exports = buildFormatLocale


/***/ }),
/* 126 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'meno di un secondo',
      other: 'meno di {{count}} secondi'
    },

    xSeconds: {
      one: 'un secondo',
      other: '{{count}} secondi'
    },

    halfAMinute: 'alcuni secondi',

    lessThanXMinutes: {
      one: 'meno di un minuto',
      other: 'meno di {{count}} minuti'
    },

    xMinutes: {
      one: 'un minuto',
      other: '{{count}} minuti'
    },

    aboutXHours: {
      one: 'circa un\'ora',
      other: 'circa {{count}} ore'
    },

    xHours: {
      one: 'un\'ora',
      other: '{{count}} ore'
    },

    xDays: {
      one: 'un giorno',
      other: '{{count}} giorni'
    },

    aboutXMonths: {
      one: 'circa un mese',
      other: 'circa {{count}} mesi'
    },

    xMonths: {
      one: 'un mese',
      other: '{{count}} mesi'
    },

    aboutXYears: {
      one: 'circa un anno',
      other: 'circa {{count}} anni'
    },

    xYears: {
      one: 'un anno',
      other: '{{count}} anni'
    },

    overXYears: {
      one: 'piú di un anno',
      other: 'piú di {{count}} anni'
    },

    almostXYears: {
      one: 'quasi un anno',
      other: 'quasi {{count}} anni'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' fa'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
  var monthsFull = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
  var weekdays2char = ['do', 'lu', 'ma', 'me', 'gi', 've', 'sa']
  var weekdays3char = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab']
  var weekdaysFull = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + 'º'
}

module.exports = buildFormatLocale


/***/ }),
/* 128 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '1秒以下',
      other: '{{count}}秒以下'
    },

    xSeconds: {
      one: '1秒',
      other: '{{count}}秒'
    },

    halfAMinute: '30秒ぐらい',

    lessThanXMinutes: {
      one: '1分以下',
      other: '{{count}}分以下'
    },

    xMinutes: {
      one: '1分',
      other: '{{count}}分'
    },

    aboutXHours: {
      one: '1時間ぐらい',
      other: '{{count}}時間ぐらい'
    },

    xHours: {
      one: '1時間',
      other: '{{count}}時間'
    },

    xDays: {
      one: '1日',
      other: '{{count}}日'
    },

    aboutXMonths: {
      one: '1ヶ月ぐらい',
      other: '{{count}}ヶ月ぐらい'
    },

    xMonths: {
      one: '1ヶ月',
      other: '{{count}}ヶ月'
    },

    aboutXYears: {
      one: '1年ぐらい',
      other: '{{count}}年ぐらい'
    },

    xYears: {
      one: '1年',
      other: '{{count}}年'
    },

    overXYears: {
      one: '1年以上',
      other: '{{count}}年以上'
    },

    almostXYears: {
      one: '1年以下',
      other: '{{count}}年以下'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return result + '後'
      } else {
        return result + '前'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  var weekdays2char = ['日', '月', '火', '水', '木', '金', '土']
  var weekdays3char = ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
  var weekdaysFull = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
  var meridiemUppercase = ['午前', '午後']
  var meridiemLowercase = ['午前', '午後']
  var meridiemFull = ['午前', '午後']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '日'
}

module.exports = buildFormatLocale


/***/ }),
/* 130 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '1초 미만',
      other: '{{count}}초 미만'
    },

    xSeconds: {
      one: '1초',
      other: '{{count}}초'
    },

    halfAMinute: '30초',

    lessThanXMinutes: {
      one: '1분 미만',
      other: '{{count}}분 미만'
    },

    xMinutes: {
      one: '1분',
      other: '{{count}}분'
    },

    aboutXHours: {
      one: '약 1시간',
      other: '약 {{count}}시간'
    },

    xHours: {
      one: '1시간',
      other: '{{count}}시간'
    },

    xDays: {
      one: '1일',
      other: '{{count}}일'
    },

    aboutXMonths: {
      one: '약 1개월',
      other: '약 {{count}}개월'
    },

    xMonths: {
      one: '1개월',
      other: '{{count}}개월'
    },

    aboutXYears: {
      one: '약 1년',
      other: '약 {{count}}년'
    },

    xYears: {
      one: '1년',
      other: '{{count}}년'
    },

    overXYears: {
      one: '1년 이상',
      other: '{{count}}년 이상'
    },

    almostXYears: {
      one: '거의 1년',
      other: '거의 {{count}}년'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return result + ' 후'
      } else {
        return result + ' 전'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  var monthsFull = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  var weekdays2char = ['일', '월', '화', '수', '목', '금', '토']
  var weekdays3char = ['일', '월', '화', '수', '목', '금', '토']
  var weekdaysFull = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  var meridiemUppercase = ['오전', '오후']
  var meridiemLowercase = ['오전', '오후']
  var meridiemFull = ['오전', '오후']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '일'
}

module.exports = buildFormatLocale


/***/ }),
/* 132 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'помалку од секунда',
      other: 'помалку од {{count}} секунди'
    },

    xSeconds: {
      one: '1 секунда',
      other: '{{count}} секунди'
    },

    halfAMinute: 'половина минута',

    lessThanXMinutes: {
      one: 'помалку од минута',
      other: 'помалку од {{count}} минути'
    },

    xMinutes: {
      one: '1 минута',
      other: '{{count}} минути'
    },

    aboutXHours: {
      one: 'околу 1 час',
      other: 'околу {{count}} часа'
    },

    xHours: {
      one: '1 час',
      other: '{{count}} часа'
    },

    xDays: {
      one: '1 ден',
      other: '{{count}} дена'
    },

    aboutXMonths: {
      one: 'околу 1 месец',
      other: 'околу {{count}} месеци'
    },

    xMonths: {
      one: '1 месец',
      other: '{{count}} месеци'
    },

    aboutXYears: {
      one: 'околу 1 година',
      other: 'околу {{count}} години'
    },

    xYears: {
      one: '1 година',
      other: '{{count}} години'
    },

    overXYears: {
      one: 'повеќе од 1 година',
      other: 'повеќе од {{count}} години'
    },

    almostXYears: {
      one: 'безмалку 1 година',
      other: 'безмалку {{count}} години'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'за ' + result
      } else {
        return 'пред ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'ное', 'дек']
  var monthsFull = ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември']
  var weekdays2char = ['не', 'по', 'вт', 'ср', 'че', 'пе', 'са']
  var weekdays3char = ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб']
  var weekdaysFull = ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота']
  var meridiem = ['претпладне', 'попладне']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви'
      case 2:
        return number + '-ри'
      case 7:
      case 8:
        return number + '-ми'
    }
  }
  return number + '-ти'
}

module.exports = buildFormatLocale


/***/ }),
/* 134 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mindre enn ett sekund',
      other: 'mindre enn {{count}} sekunder'
    },

    xSeconds: {
      one: 'ett sekund',
      other: '{{count}} sekunder'
    },

    halfAMinute: 'et halvt minutt',

    lessThanXMinutes: {
      one: 'mindre enn ett minutt',
      other: 'mindre enn {{count}} minutter'
    },

    xMinutes: {
      one: 'ett minutt',
      other: '{{count}} minutter'
    },

    aboutXHours: {
      one: 'rundt en time',
      other: 'rundt {{count}} timer'
    },

    xHours: {
      one: 'en time',
      other: '{{count}} timer'
    },

    xDays: {
      one: 'en dag',
      other: '{{count}} dager'
    },

    aboutXMonths: {
      one: 'rundt en måned',
      other: 'rundt {{count}} måneder'
    },

    xMonths: {
      one: 'en måned',
      other: '{{count}} måneder'
    },

    aboutXYears: {
      one: 'rundt ett år',
      other: 'rundt {{count}} år'
    },

    xYears: {
      one: 'ett år',
      other: '{{count}} år'
    },

    overXYears: {
      one: 'over ett år',
      other: 'over {{count}} år'
    },

    almostXYears: {
      one: 'nesten ett år',
      other: 'nesten {{count}} år'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'om ' + result
      } else {
        return result + ' siden'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['jan.', 'feb.', 'mars', 'april', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.']
  var monthsFull = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']
  var weekdays2char = ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
  var weekdays3char = ['sø.', 'ma.', 'ti.', 'on.', 'to.', 'fr.', 'lø.']
  var weekdaysFull = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),
/* 136 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'minder dan een seconde',
      other: 'minder dan {{count}} seconden'
    },

    xSeconds: {
      one: '1 seconde',
      other: '{{count}} seconden'
    },

    halfAMinute: 'een halve minuut',

    lessThanXMinutes: {
      one: 'minder dan een minuut',
      other: 'minder dan {{count}} minuten'
    },

    xMinutes: {
      one: 'een minuut',
      other: '{{count}} minuten'
    },

    aboutXHours: {
      one: 'ongeveer 1 uur',
      other: 'ongeveer {{count}} uur'
    },

    xHours: {
      one: '1 uur',
      other: '{{count}} uur'
    },

    xDays: {
      one: '1 dag',
      other: '{{count}} dagen'
    },

    aboutXMonths: {
      one: 'ongeveer 1 maand',
      other: 'ongeveer {{count}} maanden'
    },

    xMonths: {
      one: '1 maand',
      other: '{{count}} maanden'
    },

    aboutXYears: {
      one: 'ongeveer 1 jaar',
      other: 'ongeveer {{count}} jaar'
    },

    xYears: {
      one: '1 jaar',
      other: '{{count}} jaar'
    },

    overXYears: {
      one: 'meer dan 1 jaar',
      other: 'meer dan {{count}} jaar'
    },

    almostXYears: {
      one: 'bijna 1 jaar',
      other: 'bijna {{count}} jaar'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'over ' + result
      } else {
        return result + ' geleden'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
  var weekdays3char = ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat']
  var weekdaysFull = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + 'e'
}

module.exports = buildFormatLocale


/***/ }),
/* 138 */
/***/ (function(module, exports) {

function declensionGroup (scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  var rem100 = count % 100

  // ends with 11-20
  if (rem100 <= 20 && rem100 > 10) {
    return scheme.other
  }

  var rem10 = rem100 % 10

  // ends with 2, 3, 4
  if (rem10 >= 2 && rem10 <= 4) {
    return scheme.twoFour
  }

  return scheme.other
}

function declension (scheme, count, time) {
  time = time || 'regular'
  var group = declensionGroup(scheme, count)
  var finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: {
        regular: 'mniej niż sekunda',
        past: 'mniej niż sekundę',
        future: 'mniej niż sekundę'
      },
      twoFour: 'mniej niż {{count}} sekundy',
      other: 'mniej niż {{count}} sekund'
    },

    xSeconds: {
      one: {
        regular: 'sekunda',
        past: 'sekundę',
        future: 'sekundę'
      },
      twoFour: '{{count}} sekundy',
      other: '{{count}} sekund'
    },

    halfAMinute: {
      one: 'pół minuty',
      twoFour: 'pół minuty',
      other: 'pół minuty'
    },

    lessThanXMinutes: {
      one: {
        regular: 'mniej niż minuta',
        past: 'mniej niż minutę',
        future: 'mniej niż minutę'
      },
      twoFour: 'mniej niż {{count}} minuty',
      other: 'mniej niż {{count}} minut'
    },

    xMinutes: {
      one: {
        regular: 'minuta',
        past: 'minutę',
        future: 'minutę'
      },
      twoFour: '{{count}} minuty',
      other: '{{count}} minut'
    },

    aboutXHours: {
      one: {
        regular: 'około godzina',
        past: 'około godziny',
        future: 'około godzinę'
      },
      twoFour: 'około {{count}} godziny',
      other: 'około {{count}} godzin'
    },

    xHours: {
      one: {
        regular: 'godzina',
        past: 'godzinę',
        future: 'godzinę'
      },
      twoFour: '{{count}} godziny',
      other: '{{count}} godzin'
    },

    xDays: {
      one: {
        regular: 'dzień',
        past: 'dzień',
        future: '1 dzień'
      },
      twoFour: '{{count}} dni',
      other: '{{count}} dni'
    },

    aboutXMonths: {
      one: 'około miesiąc',
      twoFour: 'około {{count}} miesiące',
      other: 'około {{count}} miesięcy'
    },

    xMonths: {
      one: 'miesiąc',
      twoFour: '{{count}} miesiące',
      other: '{{count}} miesięcy'
    },

    aboutXYears: {
      one: 'około rok',
      twoFour: 'około {{count}} lata',
      other: 'około {{count}} lat'
    },

    xYears: {
      one: 'rok',
      twoFour: '{{count}} lata',
      other: '{{count}} lat'
    },

    overXYears: {
      one: 'ponad rok',
      twoFour: 'ponad {{count}} lata',
      other: 'ponad {{count}} lat'
    },

    almostXYears: {
      one: 'prawie rok',
      twoFour: 'prawie {{count}} lata',
      other: 'prawie {{count}} lat'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var scheme = distanceInWordsLocale[token]
    if (!options.addSuffix) {
      return declension(scheme, count)
    }

    if (options.comparison > 0) {
      return 'za ' + declension(scheme, count, 'future')
    } else {
      return declension(scheme, count, 'past') + ' temu'
    }
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru']
  var monthsFull = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
  var weekdays2char = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb']
  var weekdays3char = ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'piąt.', 'sob.']
  var weekdaysFull = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
  var meridiem = ['w nocy', 'rano', 'po południu', 'wieczorem']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // Time of day
    'A': function (date) {
      var hours = date.getHours()
      if (hours >= 17) {
        return meridiem[3]
      } else if (hours >= 12) {
        return meridiem[2]
      } else if (hours >= 4) {
        return meridiem[1]
      } else {
        return meridiem[0]
      }
    }
  }

  formatters.a = formatters.A
  formatters.aa = formatters.A

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      // Well, it should be just a number without any suffix
      return formatters[formatterToken](date).toString()
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),
/* 140 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'menos de um segundo',
      other: 'menos de {{count}} segundos'
    },

    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundos'
    },

    halfAMinute: 'meio minuto',

    lessThanXMinutes: {
      one: 'menos de um minuto',
      other: 'menos de {{count}} minutos'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutos'
    },

    aboutXHours: {
      one: 'aproximadamente 1 hora',
      other: 'aproximadamente {{count}} horas'
    },

    xHours: {
      one: '1 hora',
      other: '{{count}} horas'
    },

    xDays: {
      one: '1 dia',
      other: '{{count}} dias'
    },

    aboutXMonths: {
      one: 'aproximadamente 1 mês',
      other: 'aproximadamente {{count}} meses'
    },

    xMonths: {
      one: '1 mês',
      other: '{{count}} meses'
    },

    aboutXYears: {
      one: 'aproximadamente 1 ano',
      other: 'aproximadamente {{count}} anos'
    },

    xYears: {
      one: '1 ano',
      other: '{{count}} anos'
    },

    overXYears: {
      one: 'mais de 1 ano',
      other: 'mais de {{count}} anos'
    },

    almostXYears: {
      one: 'quase 1 ano',
      other: 'quase {{count}} anos'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'daqui a ' + result
      } else {
        return 'há ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  var monthsFull = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  var weekdays2char = ['do', 'se', 'te', 'qa', 'qi', 'se', 'sa']
  var weekdays3char = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
  var weekdaysFull = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + 'º'
}

module.exports = buildFormatLocale


/***/ }),
/* 142 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mai puțin de o secundă',
      other: 'mai puțin de {{count}} secunde'
    },

    xSeconds: {
      one: '1 secundă',
      other: '{{count}} secunde'
    },

    halfAMinute: 'jumătate de minut',

    lessThanXMinutes: {
      one: 'mai puțin de un minut',
      other: 'mai puțin de {{count}} minute'
    },

    xMinutes: {
      one: '1 minut',
      other: '{{count}} minute'
    },

    aboutXHours: {
      one: 'circa 1 oră',
      other: 'circa {{count}} ore'
    },

    xHours: {
      one: '1 oră',
      other: '{{count}} ore'
    },

    xDays: {
      one: '1 zi',
      other: '{{count}} zile'
    },

    aboutXMonths: {
      one: 'circa 1 lună',
      other: 'circa {{count}} luni'
    },

    xMonths: {
      one: '1 lună',
      other: '{{count}} luni'
    },

    aboutXYears: {
      one: 'circa 1 an',
      other: 'circa {{count}} ani'
    },

    xYears: {
      one: '1 an',
      other: '{{count}} ani'
    },

    overXYears: {
      one: 'peste 1 an',
      other: 'peste {{count}} ani'
    },

    almostXYears: {
      one: 'aproape 1 an',
      other: 'aproape {{count}} ani'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'în ' + result
      } else {
        return result + ' în urmă'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  // Note: in Romanian language the weekdays and months should be in the lowercase.
  var months3char = ['ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'noi', 'dec']
  var monthsFull = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie']
  var weekdays2char = ['du', 'lu', 'ma', 'mi', 'jo', 'vi', 'sâ']
  var weekdays3char = ['dum', 'lun', 'mar', 'mie', 'joi', 'vin', 'sâm']
  var weekdaysFull = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbăta']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number.toString()
}

module.exports = buildFormatLocale


/***/ }),
/* 144 */
/***/ (function(module, exports) {

function declension (scheme, count) {
  // scheme for count=1 exists
  if (scheme.one !== undefined && count === 1) {
    return scheme.one
  }

  var rem10 = count % 10
  var rem100 = count % 100

  // 1, 21, 31, ...
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace('{{count}}', count)

  // 2, 3, 4, 22, 23, 24, 32 ...
  } else if ((rem10 >= 2 && rem10 <= 4) && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace('{{count}}', count)

  // 5, 6, 7, 8, 9, 10, 11, ...
  } else {
    return scheme.pluralGenitive.replace('{{count}}', count)
  }
}

function buildLocalizeTokenFn (scheme) {
  return function (count, options) {
    if (options.addSuffix) {
      if (options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count)
        } else {
          return 'через ' + declension(scheme.regular, count)
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count)
        } else {
          return declension(scheme.regular, count) + ' назад'
        }
      }
    } else {
      return declension(scheme.regular, count)
    }
  }
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
      regular: {
        one: 'меньше секунды',
        singularNominative: 'меньше {{count}} секунды',
        singularGenitive: 'меньше {{count}} секунд',
        pluralGenitive: 'меньше {{count}} секунд'
      },
      future: {
        one: 'меньше, чем через секунду',
        singularNominative: 'меньше, чем через {{count}} секунду',
        singularGenitive: 'меньше, чем через {{count}} секунды',
        pluralGenitive: 'меньше, чем через {{count}} секунд'
      }
    }),

    xSeconds: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} секунда',
        singularGenitive: '{{count}} секунды',
        pluralGenitive: '{{count}} секунд'
      },
      past: {
        singularNominative: '{{count}} секунду назад',
        singularGenitive: '{{count}} секунды назад',
        pluralGenitive: '{{count}} секунд назад'
      },
      future: {
        singularNominative: 'через {{count}} секунду',
        singularGenitive: 'через {{count}} секунды',
        pluralGenitive: 'через {{count}} секунд'
      }
    }),

    halfAMinute: function (_, options) {
      if (options.addSuffix) {
        if (options.comparison > 0) {
          return 'через полминуты'
        } else {
          return 'полминуты назад'
        }
      }

      return 'полминуты'
    },

    lessThanXMinutes: buildLocalizeTokenFn({
      regular: {
        one: 'меньше минуты',
        singularNominative: 'меньше {{count}} минуты',
        singularGenitive: 'меньше {{count}} минут',
        pluralGenitive: 'меньше {{count}} минут'
      },
      future: {
        one: 'меньше, чем через минуту',
        singularNominative: 'меньше, чем через {{count}} минуту',
        singularGenitive: 'меньше, чем через {{count}} минуты',
        pluralGenitive: 'меньше, чем через {{count}} минут'
      }
    }),

    xMinutes: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} минута',
        singularGenitive: '{{count}} минуты',
        pluralGenitive: '{{count}} минут'
      },
      past: {
        singularNominative: '{{count}} минуту назад',
        singularGenitive: '{{count}} минуты назад',
        pluralGenitive: '{{count}} минут назад'
      },
      future: {
        singularNominative: 'через {{count}} минуту',
        singularGenitive: 'через {{count}} минуты',
        pluralGenitive: 'через {{count}} минут'
      }
    }),

    aboutXHours: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'около {{count}} часа',
        singularGenitive: 'около {{count}} часов',
        pluralGenitive: 'около {{count}} часов'
      },
      future: {
        singularNominative: 'приблизительно через {{count}} час',
        singularGenitive: 'приблизительно через {{count}} часа',
        pluralGenitive: 'приблизительно через {{count}} часов'
      }
    }),

    xHours: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} час',
        singularGenitive: '{{count}} часа',
        pluralGenitive: '{{count}} часов'
      }
    }),

    xDays: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} день',
        singularGenitive: '{{count}} дня',
        pluralGenitive: '{{count}} дней'
      }
    }),

    aboutXMonths: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'около {{count}} месяца',
        singularGenitive: 'около {{count}} месяцев',
        pluralGenitive: 'около {{count}} месяцев'
      },
      future: {
        singularNominative: 'приблизительно через {{count}} месяц',
        singularGenitive: 'приблизительно через {{count}} месяца',
        pluralGenitive: 'приблизительно через {{count}} месяцев'
      }
    }),

    xMonths: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} месяц',
        singularGenitive: '{{count}} месяца',
        pluralGenitive: '{{count}} месяцев'
      }
    }),

    aboutXYears: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'около {{count}} года',
        singularGenitive: 'около {{count}} лет',
        pluralGenitive: 'около {{count}} лет'
      },
      future: {
        singularNominative: 'приблизительно через {{count}} год',
        singularGenitive: 'приблизительно через {{count}} года',
        pluralGenitive: 'приблизительно через {{count}} лет'
      }
    }),

    xYears: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} год',
        singularGenitive: '{{count}} года',
        pluralGenitive: '{{count}} лет'
      }
    }),

    overXYears: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'больше {{count}} года',
        singularGenitive: 'больше {{count}} лет',
        pluralGenitive: 'больше {{count}} лет'
      },
      future: {
        singularNominative: 'больше, чем через {{count}} год',
        singularGenitive: 'больше, чем через {{count}} года',
        pluralGenitive: 'больше, чем через {{count}} лет'
      }
    }),

    almostXYears: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'почти {{count}} год',
        singularGenitive: 'почти {{count}} года',
        pluralGenitive: 'почти {{count}} лет'
      },
      future: {
        singularNominative: 'почти через {{count}} год',
        singularGenitive: 'почти через {{count}} года',
        pluralGenitive: 'почти через {{count}} лет'
      }
    })
  }

  function localize (token, count, options) {
    options = options || {}
    return distanceInWordsLocale[token](count, options)
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  // http://new.gramota.ru/spravka/buro/search-answer?s=242637
  var monthsShort = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.']
  var monthsFull = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
  var monthsGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  var weekdays2char = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  var weekdays3char = ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб']
  var weekdaysFull = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  var meridiem = ['ночи', 'утра', 'дня', 'вечера']

  var formatters = {
    // Month: янв., фев., ..., дек.
    'MMM': function (date) {
      return monthsShort[date.getMonth()]
    },

    // Month: январь, февраль, ..., декабрь
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: вс, пн, ..., сб
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: вск, пнд, ..., суб
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: воскресенье, понедельник, ..., суббота
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // Time of day: ночи, утра, дня, вечера
    'A': function (date) {
      var hours = date.getHours()
      if (hours >= 17) {
        return meridiem[3]
      } else if (hours >= 12) {
        return meridiem[2]
      } else if (hours >= 4) {
        return meridiem[1]
      } else {
        return meridiem[0]
      }
    },

    'Do': function (date, formatters) {
      return formatters.D(date) + '-е'
    },

    'Wo': function (date, formatters) {
      return formatters.W(date) + '-я'
    }
  }

  formatters.a = formatters.A
  formatters.aa = formatters.A

  // Generate ordinal version of formatters: M -> Mo, DDD -> DDDo, etc.
  var ordinalFormatters = ['M', 'DDD', 'd', 'Q']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-й'
    }
  })

  // Generate formatters like 'D MMMM',
  // where month is in the genitive case: января, февраля, ..., декабря
  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),
/* 146 */
/***/ (function(module, exports) {

function declensionGroup (scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  if (count >= 2 && count <= 4) {
    return scheme.twoFour
  }

  // if count === null || count === 0 || count >= 5
  return scheme.other
}

function declension (scheme, count, time) {
  var group = declensionGroup(scheme, count)
  var finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function extractPreposition (token) {
  var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
    return !!token.match(new RegExp('^' + preposition))
  })

  return result[0]
}

function prefixPreposition (preposition) {
  var translation = ''

  if (preposition === 'almost') {
    translation = 'takmer'
  }

  if (preposition === 'about') {
    translation = 'približne'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function suffixPreposition (preposition) {
  var translation = ''

  if (preposition === 'lessThan') {
    translation = 'menej než'
  }

  if (preposition === 'over') {
    translation = 'viac než'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function lowercaseFirstLetter (string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    xSeconds: {
      one: {
        regular: 'sekunda',
        past: 'sekundou',
        future: 'sekundu'
      },
      twoFour: {
        regular: '{{count}} sekundy',
        past: '{{count}} sekundami',
        future: '{{count}} sekundy'
      },
      other: {
        regular: '{{count}} sekúnd',
        past: '{{count}} sekundami',
        future: '{{count}} sekúnd'
      }
    },

    halfAMinute: {
      other: {
        regular: 'pol minúty',
        past: 'pol minútou',
        future: 'pol minúty'
      }
    },

    xMinutes: {
      one: {
        regular: 'minúta',
        past: 'minútou',
        future: 'minútu'
      },
      twoFour: {
        regular: '{{count}} minúty',
        past: '{{count}} minútami',
        future: '{{count}} minúty'
      },
      other: {
        regular: '{{count}} minút',
        past: '{{count}} minútami',
        future: '{{count}} minút'
      }
    },

    xHours: {
      one: {
        regular: 'hodina',
        past: 'hodinou',
        future: 'hodinu'
      },
      twoFour: {
        regular: '{{count}} hodiny',
        past: '{{count}} hodinami',
        future: '{{count}} hodiny'
      },
      other: {
        regular: '{{count}} hodín',
        past: '{{count}} hodinami',
        future: '{{count}} hodín'
      }
    },

    xDays: {
      one: {
        regular: 'deň',
        past: 'dňom',
        future: 'deň'
      },
      twoFour: {
        regular: '{{count}} dni',
        past: '{{count}} dňami',
        future: '{{count}} dni'
      },
      other: {
        regular: '{{count}} dní',
        past: '{{count}} dňami',
        future: '{{count}} dní'
      }
    },

    xMonths: {
      one: {
        regular: 'mesiac',
        past: 'mesiacom',
        future: 'mesiac'
      },
      twoFour: {
        regular: '{{count}} mesiace',
        past: '{{count}} mesiacmi',
        future: '{{count}} mesiace'
      },
      other: {
        regular: '{{count}} mesiacov',
        past: '{{count}} mesiacmi',
        future: '{{count}} mesiacov'
      }
    },

    xYears: {
      one: {
        regular: 'rok',
        past: 'rokom',
        future: 'rok'
      },
      twoFour: {
        regular: '{{count}} roky',
        past: '{{count}} rokmi',
        future: '{{count}} roky'
      },
      other: {
        regular: '{{count}} rokov',
        past: '{{count}} rokmi',
        future: '{{count}} rokov'
      }
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var preposition = extractPreposition(token) || ''
    var key = lowercaseFirstLetter(token.substring(preposition.length))
    var scheme = distanceInWordsLocale[key]

    if (!options.addSuffix) {
      return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'regular')
    }

    if (options.comparison > 0) {
      return prefixPreposition(preposition) + 'za ' + suffixPreposition(preposition) + declension(scheme, count, 'future')
    } else {
      return prefixPreposition(preposition) + 'pred ' + suffixPreposition(preposition) + declension(scheme, count, 'past')
    }
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december']
  var weekdays2char = ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so']
  var weekdays3char = ['neď', 'pon', 'uto', 'str', 'štv', 'pia', 'sob']
  var weekdaysFull = ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: jan, feb, ..., dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: január, február, ..., december
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: ne, po, ..., so
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: neď, pon, ..., sob
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: neďeľa, pondelok, ..., sobota
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),
/* 148 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      singular: 'mindre än en sekund',
      plural: 'mindre än {{count}} sekunder'
    },

    xSeconds: {
      singular: 'en sekund',
      plural: '{{count}} sekunder'
    },

    halfAMinute: 'en halv minut',

    lessThanXMinutes: {
      singular: 'mindre än en minut',
      plural: 'mindre än {{count}} minuter'
    },

    xMinutes: {
      singular: 'en minut',
      plural: '{{count}} minuter'
    },

    aboutXHours: {
      singular: 'ungefär en timme',
      plural: 'ungefär {{count}} timmar'
    },

    xHours: {
      singular: 'en timme',
      plural: '{{count}} timmar'
    },

    xDays: {
      singular: 'en dag',
      plural: '{{count}} dagar'
    },

    aboutXMonths: {
      singular: 'ungefär en månad',
      plural: 'ungefär {{count}} månader'
    },

    xMonths: {
      singular: 'en månad',
      plural: '{{count}} månader'
    },

    aboutXYears: {
      singular: 'ungefär ett år',
      plural: 'ungefär {{count}} år'
    },

    xYears: {
      singular: 'ett år',
      plural: '{{count}} år'
    },

    overXYears: {
      singular: 'över ett år',
      plural: 'över {{count}} år'
    },

    almostXYears: {
      singular: 'nästan ett år',
      plural: 'nästan {{count}} år'
    }
  }

  var wordMapping = [
    'noll',
    'en',
    'två',
    'tre',
    'fyra',
    'fem',
    'sex',
    'sju',
    'åtta',
    'nio',
    'tio',
    'elva',
    'tolv'
  ]

  function localize (token, count, options) {
    options = options || {}

    var translation = distanceInWordsLocale[token]
    var result
    if (typeof translation === 'string') {
      result = translation
    } else if (count === 0 || count > 1) {
      result = translation.plural.replace('{{count}}', count < 13 ? wordMapping[count] : count)
    } else {
      result = translation.singular
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'om ' + result
      } else {
        return result + ' sedan'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö']
  var weekdays3char = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör']
  var weekdaysFull = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag']
  var meridiemFull = ['f.m.', 'e.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  formatters.A = formatters.aa
  formatters.a = formatters.aa

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
      case 2:
        return number + ':a'
    }
  }
  return number + ':e'
}

module.exports = buildFormatLocale


/***/ }),
/* 150 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'น้อยกว่า 1 วินาที',
      other: 'น้อยกว่า {{count}} วินาที'
    },

    xSeconds: {
      one: '1 วินาที',
      other: '{{count}} วินาที'
    },

    halfAMinute: 'ครึ่งนาที',

    lessThanXMinutes: {
      one: 'น้อยกว่า 1 นาที',
      other: 'น้อยกว่า {{count}} นาที'
    },

    xMinutes: {
      one: '1 นาที',
      other: '{{count}} นาที'
    },

    aboutXHours: {
      one: 'ประมาณ 1 ชั่วโมง',
      other: 'ประมาณ {{count}} ชั่วโมง'
    },

    xHours: {
      one: '1 ชั่วโมง',
      other: '{{count}} ชั่วโมง'
    },

    xDays: {
      one: '1 วัน',
      other: '{{count}} วัน'
    },

    aboutXMonths: {
      one: 'ประมาณ 1 เดือน',
      other: 'ประมาณ {{count}} เดือน'
    },

    xMonths: {
      one: '1 เดือน',
      other: '{{count}} เดือน'
    },

    aboutXYears: {
      one: 'ประมาณ 1 ปี',
      other: 'ประมาณ {{count}} ปี'
    },

    xYears: {
      one: '1 ปี',
      other: '{{count}} ปี'
    },

    overXYears: {
      one: 'มากกว่า 1 ปี',
      other: 'มากกว่า {{count}} ปี'
    },

    almostXYears: {
      one: 'เกือบ 1 ปี',
      other: 'เกือบ {{count}} ปี'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        if (token === 'halfAMinute') {
          return 'ใน' + result
        } else {
          return 'ใน ' + result
        }
      } else {
        return result + 'ที่ผ่านมา'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
  var monthsFull = ['มกราคาม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
  var weekdays2char = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  var weekdays3char = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  var weekdaysFull = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
  var meridiemUppercase = ['น.']
  var meridiemLowercase = ['น.']
  var meridiemFull = ['นาฬิกา']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return meridiemFull[0]
    }
  }

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),
/* 152 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'bir saniyeden az',
      other: '{{count}} saniyeden az'
    },

    xSeconds: {
      one: '1 saniye',
      other: '{{count}} saniye'
    },

    halfAMinute: 'yarım dakika',

    lessThanXMinutes: {
      one: 'bir dakikadan az',
      other: '{{count}} dakikadan az'
    },

    xMinutes: {
      one: '1 dakika',
      other: '{{count}} dakika'
    },

    aboutXHours: {
      one: 'yaklaşık 1 saat',
      other: 'yaklaşık {{count}} saat'
    },

    xHours: {
      one: '1 saat',
      other: '{{count}} saat'
    },

    xDays: {
      one: '1 gün',
      other: '{{count}} gün'
    },

    aboutXMonths: {
      one: 'yaklaşık 1 ay',
      other: 'yaklaşık {{count}} ay'
    },

    xMonths: {
      one: '1 ay',
      other: '{{count}} ay'
    },

    aboutXYears: {
      one: 'yaklaşık 1 yıl',
      other: 'yaklaşık {{count}} yıl'
    },

    xYears: {
      one: '1 yıl',
      other: '{{count}} yıl'
    },

    overXYears: {
      one: '1 yıldan fazla',
      other: '{{count}} yıldan fazla'
    },

    almostXYears: {
      one: 'neredeyse 1 yıl',
      other: 'neredeyse {{count}} yıl'
    }
  }

  var extraWordTokens = [
    'lessThanXSeconds',
    'lessThanXMinutes',
    'overXYears'
  ]

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      var extraWord = ''
      if (extraWordTokens.indexOf(token) > -1) {
        extraWord = ' bir süre'
      }

      if (options.comparison > 0) {
        return result + extraWord + ' içinde'
      } else {
        return result + extraWord + ' önce'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  // Note: in Turkish, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
  var monthsFull = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  var weekdays2char = ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
  var weekdays3char = ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts']
  var weekdaysFull = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
  var meridiemUppercase = ['ÖÖ', 'ÖS']
  var meridiemLowercase = ['öö', 'ös']
  var meridiemFull = ['ö.ö.', 'ö.s.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var suffixes = {
    1: '\'inci',
    2: '\'inci',
    3: '\'üncü',
    4: '\'üncü',
    5: '\'inci',
    6: '\'ıncı',
    7: '\'inci',
    8: '\'inci',
    9: '\'uncu',
    10: '\'uncu',
    20: '\'inci',
    30: '\'uncu',
    50: '\'inci',
    60: '\'ıncı',
    70: '\'inci',
    80: '\'inci',
    90: '\'ıncı',
    100: '\'üncü'
  }

  if (number === 0) {
    return '0\'ıncı'
  }

  var x = number % 10
  var y = number % 100 - x
  var z = number >= 100 ? 100 : null

  return number + (suffixes[x] || suffixes[y] || suffixes[z])
}

module.exports = buildFormatLocale


/***/ }),
/* 154 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '不到 1 秒',
      other: '不到 {{count}} 秒'
    },

    xSeconds: {
      one: '1 秒',
      other: '{{count}} 秒'
    },

    halfAMinute: '半分钟',

    lessThanXMinutes: {
      one: '不到 1 分钟',
      other: '不到 {{count}} 分钟'
    },

    xMinutes: {
      one: '1 分钟',
      other: '{{count}} 分钟'
    },

    xHours: {
      one: '1 小时',
      other: '{{count}} 小时'
    },

    aboutXHours: {
      one: '大约 1 小时',
      other: '大约 {{count}} 小时'
    },

    xDays: {
      one: '1 天',
      other: '{{count}} 天'
    },

    aboutXMonths: {
      one: '大约 1 个月',
      other: '大约 {{count}} 个月'
    },

    xMonths: {
      one: '1 个月',
      other: '{{count}} 个月'
    },

    aboutXYears: {
      one: '大约 1 年',
      other: '大约 {{count}} 年'
    },

    xYears: {
      one: '1 年',
      other: '{{count}} 年'
    },

    overXYears: {
      one: '超过 1 年',
      other: '超过 {{count}} 年'
    },

    almostXYears: {
      one: '将近 1 年',
      other: '将近 {{count}} 年'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return result + '内'
      } else {
        return result + '前'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  var weekdays2char = ['日', '一', '二', '三', '四', '五', '六']
  var weekdays3char = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  var weekdaysFull = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  var meridiemFull = ['上午', '下午']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    }
  }

  // AM, PM / am, pm / a.m., p.m. all translates to 上午, 下午
  formatters.a = formatters.aa = formatters.A = function (date) {
    return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number.toString()
}

module.exports = buildFormatLocale


/***/ }),
/* 156 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '少於 1 秒',
      other: '少於 {{count}} 秒'
    },

    xSeconds: {
      one: '1 秒',
      other: '{{count}} 秒'
    },

    halfAMinute: '半分鐘',

    lessThanXMinutes: {
      one: '少於 1 分鐘',
      other: '少於 {{count}} 分鐘'
    },

    xMinutes: {
      one: '1 分鐘',
      other: '{{count}} 分鐘'
    },

    xHours: {
      one: '1 小時',
      other: '{{count}} 小時'
    },

    aboutXHours: {
      one: '大約 1 小時',
      other: '大約 {{count}} 小時'
    },

    xDays: {
      one: '1 天',
      other: '{{count}} 天'
    },

    aboutXMonths: {
      one: '大約 1 個月',
      other: '大約 {{count}} 個月'
    },

    xMonths: {
      one: '1 個月',
      other: '{{count}} 個月'
    },

    aboutXYears: {
      one: '大約 1 年',
      other: '大約 {{count}} 年'
    },

    xYears: {
      one: '1 年',
      other: '{{count}} 年'
    },

    overXYears: {
      one: '超過 1 年',
      other: '超過 {{count}} 年'
    },

    almostXYears: {
      one: '將近 1 年',
      other: '將近 {{count}} 年'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return result + '內'
      } else {
        return result + '前'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(2)

function buildFormatLocale () {
  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  var weekdays2char = ['日', '一', '二', '三', '四', '五', '六']
  var weekdays3char = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  var weekdaysFull = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['上午', '下午']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number.toString()
}

module.exports = buildFormatLocale


/***/ }),
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// platform
var isCordova = exports.isCordova = function isCordova() {
  return window.cordova !== undefined;
};
var getPlatformId = exports.getPlatformId = function getPlatformId() {
  return isCordova() ? window.cordova.platformId : undefined;
};
var isPlatform = function isPlatform(platform) {
  return getPlatformId() === platform;
};
var isIos = exports.isIos = function isIos() {
  return isPlatform('ios');
};
var isAndroid = exports.isAndroid = function isAndroid() {
  return isPlatform('android'

  // device
  );
};var hasDeviceCordovaPlugin = function hasDeviceCordovaPlugin() {
  return isCordova() && window.device !== undefined;
};
var getDeviceName = exports.getDeviceName = function getDeviceName() {
  return hasDeviceCordovaPlugin() ? window.device.model : undefined;
};

/***/ }),
/* 161 */,
/* 162 */
/***/ (function(module, exports) {

module.exports = {
	"Nav": {
		"item_drive": "Drive",
		"item_recent": "Recent",
		"item_shared": "Shared by me",
		"item_activity": "Activity",
		"item_trash": "Trash",
		"item_settings": "Settings",
		"btn-client": "Get Cozy for desktop",
		"btn-client-web": "Get Cozy",
		"btn-client-mobile": "Get Cozy Drive on your mobile!",
		"banner-txt-client": "Tip: your pictures, bills, ID documents, all accessible anytime, from any of your device with Cozy Drive installed on your computer",
		"banner-btn-client": "Download now",
		"link-client": "https://docs.cozy.io/en/download/",
		"link-client-web": "https://cozy.io/fr/try-it?from=albumsharing"
	},
	"breadcrumb": {
		"title_drive": "Drive",
		"title_recent": "Recent",
		"title_shared": "Shared by me",
		"title_activity": "Activity",
		"title_trash": "Trash"
	},
	"toolbar": {
		"item_upload": "Upload",
		"item_more": "More",
		"menu_upload": "Upload files",
		"menu_new_folder": "New folder",
		"menu_select": "Select items",
		"menu_download_folder": "Download folder",
		"empty_trash": "Empty trash",
		"share": "Share"
	},
	"Share": {
		"status": {
			"pending": "Pending",
			"accepted": {
				"master-slave": "Can View",
				"master-master": "Can Change"
			},
			"refused": "Refused",
			"error": "Error",
			"unregistered": "Error",
			"mail-not-sent": "Error",
			"revoked": "Error"
		}
	},
	"Files": {
		"share": {
			"cta": "Share",
			"title": "Share with others",
			"shareByLink": {
				"title": "By public link",
				"subtitle": "Share by link",
				"desc": "Anyone with the provided link can see and download your files."
			},
			"shareByEmail": {
				"title": "By email",
				"subtitle": "Share by email",
				"email": "email",
				"emailPlaceholder": "Enter email address or name of your recipient",
				"send": "Send",
				"success": "You sent an invite to %{email}."
			},
			"unshare": {
				"title": "Remove from sharing",
				"success": "You removed this shared file from %{email}."
			},
			"sharingLink": {
				"title": "Link to share",
				"copy": "Copy",
				"copied": "Copied"
			},
			"whoHasAccess": {
				"title": "Who has access"
			},
			"protectedShare": {
				"title": "Coming soon!",
				"desc": "Share anything by email with your family and friends!"
			},
			"close": "Close",
			"gettingLink": "Getting your link...",
			"error": {
				"generic": "An error occurred when creating the file share link, please try again."
			}
		},
		"viewer-fallback": "If the file has started downloading, you can close this."
	},
	"table": {
		"head_name": "Name",
		"head_update": "Last update",
		"head_size": "Size",
		"head_status": "Status",
		"row_update_format": "MMM D, YYYY",
		"row_read_only": "Share (Read only)",
		"row_read_write": "Share (Read & Write)",
		"row_size_symbols": {
			"B": "B",
			"KB": "KB",
			"MB": "MB",
			"GB": "GB",
			"TB": "TB",
			"PB": "PB",
			"EB": "EB",
			"ZB": "ZB",
			"YB": "YB"
		}
	},
	"SelectionBar": {
		"selected_count": "item selected |||| items selected",
		"share": "Share",
		"download": "Download",
		"trash": "Remove",
		"destroy": "Delete permanently",
		"moveto": "Move",
		"rename": "Rename",
		"restore": "Restore",
		"close": "Close",
		"openWith": "Open with",
		"availableOffline": "Make available offline"
	},
	"deleteconfirmation": {
		"title": "Delete this element? |||| Delete these elements?",
		"trash": "It will be moved to the Trash. |||| They will be moved to the Trash.",
		"restore": "You can still restore it whenever you want. |||| You can still restore them whenever you want.",
		"shared": "If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.",
		"referenced": "Some of the files within the selection are related to a photo album. They will be removed from it if you proceed to trash them.",
		"cancel": "Cancel",
		"delete": "Remove"
	},
	"emptytrashconfirmation": {
		"title": "Permanently delete?",
		"forbidden": "You won't be able to access these files anymore.",
		"restore": "You won't be able to restore these files if you didn't make a backup.",
		"cancel": "Cancel",
		"delete": "Delete all"
	},
	"destroyconfirmation": {
		"title": "Permanently delete?",
		"forbidden": "You won't be able to access this file anymore. |||| You won't be able to access these files anymore.",
		"restore": "You won't be able to restore this file if you didn't make a backup. |||| You won't be able to restore these files if you didn't make a backup.",
		"cancel": "Cancel",
		"delete": "Delete permanently"
	},
	"quotaalert": {
		"title": "Your disk space is full :(",
		"desc": " Please remove files and empty your trash before uploading files again.",
		"confirm": "OK"
	},
	"loading": {
		"message": "Loading"
	},
	"empty": {
		"title": "You don’t have any files in this folder.",
		"text": "Click the \"upload\" button to add files to this folder.",
		"trash": {
			"title": "You don’t have any deleted files.",
			"text": "Move files you don't need anymore to the Trash and permanently delete items to free up storage page."
		}
	},
	"error": {
		"open_folder": "Something went wrong when opening the folder.",
		"button": {
			"reload": "Refresh now"
		},
		"download_file": {
			"offline": "You should be connected to download this file",
			"missing": "This file is missing"
		},
		"public_unshared_title": "Sorry, this link is no longer available.",
		"public_unshared_text": "One lost, ten found... or just check out with the owner for help. This file might not be lost."
	},
	"alert": {
		"could_not_open_file": "The file could not be opened",
		"try_again": "An error has occurred, please try again in a moment.",
		"restore_file_success": "The selection has been successfully restored.",
		"trash_file_success": "The selection has been moved to the Trash.",
		"destroy_file_success": "The selection has been deleted permanently.",
		"empty_trash_success": "The trash has been emptied.",
		"folder_name": "The element %{folderName} already exists, please choose a new name.",
		"folder_generic": "An error occurred, please try again.",
		"folder_abort": "You need to add a name to your new folder if you would like to save it. Your information has not been saved.",
		"offline": "This feature is not available offline."
	},
	"mobile": {
		"onboarding": {
			"welcome": {
				"title1": "Welcome to Cozy",
				"title2": "Your own personal cloud",
				"button": "Sign in to your Cozy",
				"no_account_link": "Don’t have an account? Request one here."
			},
			"server_selection": {
				"description": "This is the web address you use to access your Cozy.",
				"cozy_address_placeholder": "tonystark.mycozy.cloud",
				"button": "Next",
				"wrong_address_with_email": "You typed an email address. To connect on your cozy you must type its url, something like https://tonystark.mycozy.cloud",
				"wrong_address_v2": "You have just entered the address of old Cozy version. This application is only compatible with the latest version. [Please refer to our site for more information.](https://blog.cozycloud.cc/post/2016/11/21/On-the-road-to-Cozy-version-3?lang=en)",
				"wrong_address": "This address doesn’t seem to be a cozy. Please check the address you provide."
			},
			"files": {
				"title": "Access your drive",
				"description": "In order to save your Cozy Drive on your device, the application must access your files."
			},
			"photos": {
				"title": "Backup your photos and videos",
				"description": "Automatically backup the photos taken with your phone to your Cozy, so you never lose them."
			},
			"contacts": {
				"title": "Sync your contacts",
				"description": "Save your phone's contact on your Cozy — this will facilitate sharing files with them."
			},
			"step": {
				"button": "Enable now",
				"skip": "Later",
				"next": "Next"
			},
			"analytics": {
				"title": "Help us improve Cozy",
				"description": "The application will automatically provide data (mainly errors) to Cozy Cloud. It will allow us to resolve problems faster."
			}
		},
		"settings": {
			"title": "Settings",
			"about": {
				"title": "About",
				"app_version": "App Version",
				"account": "Account"
			},
			"unlink": {
				"title": "Reset this application",
				"description": "By clicking Reset, you will be able to start your application over, and will only lose the data saved on your smartphone.",
				"button": "Reset",
				"confirmation": {
					"title": "Reset this application?",
					"description": "By logging out of your Cozy, you will erase all data synchronized locally by your mobile application.",
					"cancel": "Cancel",
					"unlink": "Reset"
				}
			},
			"media_backup": {
				"media_folder": "/Photos/Backuped from my mobile",
				"title": "Media Backup",
				"images": {
					"title": "Backup images",
					"label": "Backup your images automatically to your Cozy not to ever lose them and share them easily."
				},
				"launch": "Launch Backup",
				"stop": "Stop Backup",
				"wifi": {
					"title": "Backup on WIFI only",
					"label": "If the option is enabled, your device will only backup photos when it's on WIFI in order to save your package."
				},
				"media_upload": "Backing up %{upload_counter} of %{total_upload} photos"
			},
			"support": {
				"title": "Support",
				"analytics": {
					"title": "Help us improve Cozy",
					"label": "The application will automatically provide data (mainly errors) to Cozy Cloud. It will allow us to resolve problems faster."
				},
				"logs": {
					"title": "Help us to understand your problem",
					"description": "Send the application log to help us improve its quality and stability.",
					"button": "Send my logs",
					"success": "Thanks, we will investigate your problem and contact you soon.",
					"error": "A problem happened, logs couldn't be sent, please try again."
				}
			},
			"contacts": {
				"title": "Contacts",
				"subtitle": "Import contacts",
				"text": "Import the contacts from your device to your Cozy to easily share content with them."
			}
		},
		"error": {
			"open_with": {
				"offline": "You should be connected to open this file",
				"noapp": "No application can open this file"
			}
		},
		"revoked": {
			"title": "Access revoked",
			"description": "It appears you revoked this device from your Cozy. If you didn't, please let us know at contact@cozycloud.cc. All your local data related to your Cozy will be removed.",
			"loginagain": "Log in again",
			"logout": "Log out"
		},
		"rating": {
			"enjoy": {
				"title": "Enjoying Cozy Drive?",
				"yes": "Yes!",
				"no": "Not really"
			},
			"rate": {
				"title": "Would you mind rating it?",
				"yes": "Let's do that!",
				"no": "No, thanks",
				"later": "Maybe later"
			},
			"feedback": {
				"title": "Would you mind giving us some feedback?",
				"yes": "Send",
				"no": "No, thanks"
			},
			"email": {
				"subject": "Feedback on Cozy Drive",
				"placeholder": "Hello, I think Cozy Drive would be better if…"
			},
			"alert": {
				"rated": "Thank you! You're ⭐️⭐️⭐️⭐️⭐️",
				"declined": "Awesome. You will love the upcoming features. Stay Cozy!",
				"later": "No problem, we'll ask again later.",
				"feedback": "Thank you for the feedback. We'll definitely work on it!"
			}
		}
	},
	"upload": {
		"alert": {
			"success": "%{smart_count} file uploaded with success. |||| %{smart_count} files uploaded with success.",
			"success_conflicts": "%{smart_count} file uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} files uploaded with %{conflictNumber} conflict(s).",
			"errors": "Errors occurred during the file upload."
		}
	},
	"UploadQueue": {
		"header": "Uploading %{smart_count} photo to Cozy Drive |||| Uploading %{smart_count} photos to Cozy Drive",
		"header_mobile": "%{done} of %{total} uploading…",
		"header_done": "Uploaded %{done} out of %{total} successfully",
		"close": "close",
		"item": {
			"pending": "Pending"
		}
	}
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8)
  , document = __webpack_require__(5).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , hide   = __webpack_require__(18)
  , uid    = __webpack_require__(36)
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22)
  , toLength  = __webpack_require__(16)
  , toIndex   = __webpack_require__(44);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(168)('keys')
  , uid    = __webpack_require__(36);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 169 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(38)
  , toIndex  = __webpack_require__(44)
  , toLength = __webpack_require__(16);
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(7)
  , aFunction = __webpack_require__(37)
  , SPECIES   = __webpack_require__(9)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(43)
  , TAG = __webpack_require__(9)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(46)
  , ITERATOR   = __webpack_require__(9)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(172)
  , ITERATOR  = __webpack_require__(9)('iterator')
  , Iterators = __webpack_require__(46);
module.exports = __webpack_require__(56).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(48)
  , step             = __webpack_require__(211)
  , Iterators        = __webpack_require__(46)
  , toIObject        = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(212)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8)
  , anObject = __webpack_require__(7);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(25)(Function.call, __webpack_require__(30).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(25)
  , invoke             = __webpack_require__(77)
  , html               = __webpack_require__(209)
  , cel                = __webpack_require__(163)
  , global             = __webpack_require__(5)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(43)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(221)
  , defined  = __webpack_require__(29);

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(9)('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12)
  , createDesc      = __webpack_require__(27);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 181 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * preact plugin that provides an I18n helper using a Higher Order Component.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate = exports.I18nProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Provider root component
var I18nProvider = exports.I18nProvider = function (_Component) {
  _inherits(I18nProvider, _Component);

  function I18nProvider() {
    _classCallCheck(this, I18nProvider);

    return _possibleConstructorReturn(this, (I18nProvider.__proto__ || Object.getPrototypeOf(I18nProvider)).apply(this, arguments));
  }

  _createClass(I18nProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        t: this.props.i18n.t.bind(this.props.i18n),
        f: this.props.i18nDate.bind(this.props.i18nDate)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children && this.props.children[0] || null;
    }
  }]);

  return I18nProvider;
}(_react.Component);

I18nProvider.childContextTypes = {
  t: _react2.default.PropTypes.func,
  f: _react2.default.PropTypes.func

  // higher order decorator for components that need `t` and/or `f`
};var translate = exports.translate = function translate() {
  return function (WrappedComponent) {
    var _translate = function _translate(props, context) {
      return _react2.default.createElement(WrappedComponent, _extends({}, props, { t: context.t, f: context.f }));
    };
    return _translate;
  };
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openOfflineFile = exports.saveAndOpenWithCordova = exports.temporarySave = exports.saveFileWithCordova = exports.deleteOfflineFile = exports.writeFile = exports.getDirectory = exports.createCozyPath = exports.getCozyEntry = exports.getEntry = exports.getCozyPath = exports.getTemporaryRootPath = exports.getRootPath = undefined;

var _device = __webpack_require__(160);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ERROR_GET_DIRECTORY = 'Error to get directory';
var ERROR_WRITE_FILE = 'Error to write file';
var ERROR_GET_FILE = 'Error to get file';
var COZY_PATH = 'Cozy';
var COZY_FILES_PATH = 'Cozy Drive';

var getRootPath = exports.getRootPath = function getRootPath() {
  return (0, _device.isAndroid)() ? window.cordova.file.externalRootDirectory : window.cordova.file.dataDirectory;
};

var getTemporaryRootPath = exports.getTemporaryRootPath = function getTemporaryRootPath() {
  return (0, _device.isAndroid)() ? window.cordova.file.externalCacheDirectory : window.cordova.file.cacheDirectory;
};

var getCozyPath = exports.getCozyPath = function getCozyPath() {
  return COZY_PATH + '/' + COZY_FILES_PATH + '/';
};

var getEntry = exports.getEntry = function getEntry(path) {
  return new Promise(function (resolve, reject) {
    window.resolveLocalFileSystemURL(path, resolve, reject);
  });
};

var getCozyEntry = exports.getCozyEntry = function getCozyEntry() {
  return new Promise(function (resolve, reject) {
    getEntry(getRootPath() + getCozyPath()).then(resolve).catch(function () {
      createCozyPath().then(resolve).catch(reject);
    });
  });
};

var createCozyPath = exports.createCozyPath = function createCozyPath() {
  return new Promise(function (resolve, reject) {
    getEntry(getRootPath()).then(function (entry) {
      getDirectory(entry, COZY_PATH).then(function (entry) {
        getDirectory(entry, COZY_FILES_PATH).then(resolve).catch(reject);
      }).catch(reject);
    }).catch(reject);
  });
};

var getDirectory = exports.getDirectory = function getDirectory(rootDirEntry, folderName) {
  return new Promise(function (resolve, reject) {
    rootDirEntry.getDirectory(folderName, { create: true }, resolve, function (error) {
      console.warn(ERROR_GET_DIRECTORY, folderName);
      console.warn(error);
      reject(ERROR_GET_DIRECTORY);
    });
  });
};

var writeFile = exports.writeFile = function writeFile(fileEntry, dataObj) {
  return new Promise(function (resolve, reject) {
    fileEntry.createWriter(function (fileWriter) {
      fileWriter.onwriteend = function () {
        resolve(fileEntry);
      };
      fileWriter.onerror = function (error) {
        console.warn(ERROR_WRITE_FILE);
        console.warn(error);
        reject(ERROR_WRITE_FILE);
      };
      fileWriter.write(dataObj);
    });
  });
};

var saveFile = function saveFile(dirEntry, fileData, fileName) {
  return new Promise(function (resolve, reject) {
    dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
      writeFile(fileEntry, fileData).then(function () {
        resolve(fileEntry);
      }).catch(reject);
    }, function (error) {
      console.warn(ERROR_GET_FILE);
      console.warn(error);
      reject(ERROR_GET_FILE);
    });
  });
};

var openFileWithCordova = function openFileWithCordova(uri, mimetype) {
  return new Promise(function (resolve, reject) {
    window.cordova.plugins.fileOpener2.open(decodeURIComponent(uri), mimetype, {
      error: reject,
      success: resolve
    });
  });
};

var deleteOfflineFile = exports.deleteOfflineFile = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(filename) {
    var entry, fileEntry;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getCozyEntry();

          case 2:
            entry = _context.sent;
            _context.next = 5;
            return getEntry('' + entry.nativeURL + filename);

          case 5:
            fileEntry = _context.sent;
            return _context.abrupt('return', fileEntry.remove());

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function deleteOfflineFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

var saveFileWithCordova = exports.saveFileWithCordova = function saveFileWithCordova(fileData, fileName) {
  return new Promise(function (resolve, reject) {
    getCozyEntry().then(function (entry) {
      return saveFile(entry, fileData, fileName);
    }).then(resolve).catch(reject);
  });
};

var temporarySave = exports.temporarySave = function temporarySave(file, filename) {
  return new Promise(function (resolve, reject) {
    getEntry(getTemporaryRootPath()).then(function (entry) {
      return saveFile(entry, file, filename);
    }).then(resolve).catch(reject);
  });
};

var saveAndOpenWithCordova = exports.saveAndOpenWithCordova = function saveAndOpenWithCordova(file, filename) {
  return new Promise(function (resolve, reject) {
    temporarySave(file, filename).then(function (entry) {
      return openFileWithCordova(decodeURIComponent(entry.nativeURL), file.type);
    }).then(resolve).catch(reject);
  });
};

var openOfflineFile = exports.openOfflineFile = function openOfflineFile(file) {
  return new Promise(function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(resolve, reject) {
      var entry, fileEntry;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getCozyEntry();

            case 2:
              entry = _context2.sent;
              _context2.next = 5;
              return getEntry('' + entry.nativeURL + file.id);

            case 5:
              fileEntry = _context2.sent;
              return _context2.abrupt('return', openFileWithCordova(fileEntry.nativeURL, file.mime).then(resolve).catch(reject));

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
};

/***/ }),
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": 162,
	"./en.json": 162
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 204;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(17) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(163)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(5)
  , DESCRIPTORS    = __webpack_require__(17)
  , LIBRARY        = __webpack_require__(39)
  , $typed         = __webpack_require__(164)
  , hide           = __webpack_require__(18)
  , redefineAll    = __webpack_require__(40)
  , fails          = __webpack_require__(11)
  , anInstance     = __webpack_require__(41)
  , toInteger      = __webpack_require__(42)
  , toLength       = __webpack_require__(16)
  , gOPN           = __webpack_require__(58).f
  , dP             = __webpack_require__(12).f
  , arrayFill      = __webpack_require__(170)
  , setToStringTag = __webpack_require__(45)
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value)
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(15)
  , toIObject    = __webpack_require__(22)
  , arrayIndexOf = __webpack_require__(166)(false)
  , IE_PROTO     = __webpack_require__(167)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 208 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5).document && document.documentElement;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(43);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(39)
  , $export        = __webpack_require__(1)
  , redefine       = __webpack_require__(28)
  , hide           = __webpack_require__(18)
  , has            = __webpack_require__(15)
  , Iterators      = __webpack_require__(46)
  , $iterCreate    = __webpack_require__(348)
  , setToStringTag = __webpack_require__(45)
  , getPrototypeOf = __webpack_require__(60)
  , ITERATOR       = __webpack_require__(9)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(38)
  , toIndex  = __webpack_require__(44)
  , toLength = __webpack_require__(16);

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(12).f
  , create      = __webpack_require__(59)
  , redefineAll = __webpack_require__(40)
  , ctx         = __webpack_require__(25)
  , anInstance  = __webpack_require__(41)
  , defined     = __webpack_require__(29)
  , forOf       = __webpack_require__(74)
  , $iterDefine = __webpack_require__(212)
  , step        = __webpack_require__(211)
  , setSpecies  = __webpack_require__(72)
  , DESCRIPTORS = __webpack_require__(17)
  , fastKey     = __webpack_require__(63).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(47)
  , gOPS     = __webpack_require__(76)
  , pIE      = __webpack_require__(62)
  , toObject = __webpack_require__(38)
  , IObject  = __webpack_require__(165)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll       = __webpack_require__(40)
  , getWeak           = __webpack_require__(63).getWeak
  , anObject          = __webpack_require__(7)
  , isObject          = __webpack_require__(8)
  , anInstance        = __webpack_require__(41)
  , forOf             = __webpack_require__(74)
  , createArrayMethod = __webpack_require__(61)
  , $has              = __webpack_require__(15)
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN     = __webpack_require__(58)
  , gOPS     = __webpack_require__(76)
  , anObject = __webpack_require__(7)
  , Reflect  = __webpack_require__(5).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(42)
  , defined   = __webpack_require__(29);

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(8)
  , cof      = __webpack_require__(43)
  , MATCH    = __webpack_require__(9)('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(8)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 223 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(47)
  , toIObject = __webpack_require__(22)
  , isEnum    = __webpack_require__(62).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(16)
  , repeat   = __webpack_require__(220)
  , defined  = __webpack_require__(29);

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(64);
var invariant = __webpack_require__(65);
var warning = __webpack_require__(84);

var ReactPropTypesSecret = __webpack_require__(66);
var checkPropTypes = __webpack_require__(227);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(65);
  var warning = __webpack_require__(84);
  var ReactPropTypesSecret = __webpack_require__(66);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(64);
var invariant = __webpack_require__(65);
var ReactPropTypesSecret = __webpack_require__(66);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTranslation = exports._polyglot = undefined;

var _nodePolyglot = __webpack_require__(242);

var _nodePolyglot2 = _interopRequireDefault(_nodePolyglot);

var _ = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _polyglot = exports._polyglot = void 0;

var initTranslation = exports.initTranslation = function initTranslation(lang, dictRequire, context) {
  var defaultLang = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _.DEFAULT_LANG;

  exports._polyglot = _polyglot = new _nodePolyglot2.default({
    phrases: dictRequire(defaultLang),
    locale: defaultLang
  });

  // Load global locales
  if (lang && lang !== defaultLang) {
    try {
      var dict = dictRequire(lang);
      _polyglot.extend(dict);
      _polyglot.locale(lang);
    } catch (e) {
      console.warn('The dict phrases for "' + lang + '" can\'t be loaded');
    }
  }

  // Load context locales
  if (context) {
    var _dict = dictRequire(lang, context);
    _polyglot.extend(_dict);
  }

  return _polyglot;
};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//     (c) 2012-2016 Airbnb, Inc.
//
//     polyglot.js may be freely distributed under the terms of the BSD
//     license. For all licensing information, details, and documention:
//     http://airbnb.github.com/polyglot.js
//
//
// Polyglot.js is an I18n helper library written in JavaScript, made to
// work both in the browser and in Node. It provides a simple solution for
// interpolation and pluralization, based off of Airbnb's
// experience adding I18n functionality to its Backbone.js and Node apps.
//
// Polylglot is agnostic to your translation backend. It doesn't perform any
// translation; it simply gives you a way to manage translated phrases from
// your client- or server-side JavaScript application.
//



var forEach = __webpack_require__(243);
var warning = __webpack_require__(19);
var has = __webpack_require__(245);
var trim = __webpack_require__(247);

var warn = function warn(message) {
  warning(false, message);
};

var replace = String.prototype.replace;
var split = String.prototype.split;

// #### Pluralization methods
// The string that separates the different phrase possibilities.
var delimeter = '||||';

// Mapping from pluralization group plural logic.
var pluralTypes = {
  arabic: function (n) {
    // http://www.arabeyes.org/Plural_Forms
    if (n < 3) { return n; }
    if (n % 100 >= 3 && n % 100 <= 10) return 3;
    return n % 100 >= 11 ? 4 : 5;
  },
  chinese: function () { return 0; },
  german: function (n) { return n !== 1 ? 1 : 0; },
  french: function (n) { return n > 1 ? 1 : 0; },
  russian: function (n) {
    if (n % 10 === 1 && n % 100 !== 11) { return 0; }
    return n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  czech: function (n) {
    if (n === 1) { return 0; }
    return (n >= 2 && n <= 4) ? 1 : 2;
  },
  polish: function (n) {
    if (n === 1) { return 0; }
    return n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  icelandic: function (n) { return (n % 10 !== 1 || n % 100 === 11) ? 1 : 0; }
};

// Mapping from pluralization group to individual locales.
var pluralTypeToLanguages = {
  arabic: ['ar'],
  chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
  german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
  french: ['fr', 'tl', 'pt-br'],
  russian: ['hr', 'ru', 'lt'],
  czech: ['cs', 'sk'],
  polish: ['pl'],
  icelandic: ['is']
};

function langToTypeMap(mapping) {
  var ret = {};
  forEach(mapping, function (langs, type) {
    forEach(langs, function (lang) {
      ret[lang] = type;
    });
  });
  return ret;
}

function pluralTypeName(locale) {
  var langToPluralType = langToTypeMap(pluralTypeToLanguages);
  return langToPluralType[locale]
    || langToPluralType[split.call(locale, /-/, 1)[0]]
    || langToPluralType.en;
}

function pluralTypeIndex(locale, count) {
  return pluralTypes[pluralTypeName(locale)](count);
}

var dollarRegex = /\$/g;
var dollarBillsYall = '$$';
var tokenRegex = /%\{(.*?)\}/g;

// ### transformPhrase(phrase, substitutions, locale)
//
// Takes a phrase string and transforms it by choosing the correct
// plural form and interpolating it.
//
//     transformPhrase('Hello, %{name}!', {name: 'Spike'});
//     // "Hello, Spike!"
//
// The correct plural form is selected if substitutions.smart_count
// is set. You can pass in a number instead of an Object as `substitutions`
// as a shortcut for `smart_count`.
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
//     // "1 new message"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
//     // "2 new messages"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
//     // "5 new messages"
//
// You should pass in a third argument, the locale, to specify the correct plural type.
// It defaults to `'en'` with 2 plural forms.
function transformPhrase(phrase, substitutions, locale) {
  if (typeof phrase !== 'string') {
    throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
  }

  if (substitutions == null) {
    return phrase;
  }

  var result = phrase;

  // allow number as a pluralization shortcut
  var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;

  // Select plural form: based on a phrase text that contains `n`
  // plural forms separated by `delimeter`, a `locale`, and a `substitutions.smart_count`,
  // choose the correct plural form. This is only done if `count` is set.
  if (options.smart_count != null && result) {
    var texts = split.call(result, delimeter);
    result = trim(texts[pluralTypeIndex(locale || 'en', options.smart_count)] || texts[0]);
  }

  // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
  result = replace.call(result, tokenRegex, function (expression, argument) {
    if (!has(options, argument) || options[argument] == null) { return expression; }
    // Ensure replacement value is escaped to prevent special $-prefixed regex replace tokens.
    return replace.call(options[argument], dollarRegex, dollarBillsYall);
  });

  return result;
}

// ### Polyglot class constructor
function Polyglot(options) {
  var opts = options || {};
  this.phrases = {};
  this.extend(opts.phrases || {});
  this.currentLocale = opts.locale || 'en';
  var allowMissing = opts.allowMissing ? transformPhrase : null;
  this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
  this.warn = opts.warn || warn;
}

// ### polyglot.locale([locale])
//
// Get or set locale. Internally, Polyglot only uses locale for pluralization.
Polyglot.prototype.locale = function (newLocale) {
  if (newLocale) this.currentLocale = newLocale;
  return this.currentLocale;
};

// ### polyglot.extend(phrases)
//
// Use `extend` to tell Polyglot how to translate a given key.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The key can be any string.  Feel free to call `extend` multiple times;
// it will override any phrases with the same key, but leave existing phrases
// untouched.
//
// It is also possible to pass nested phrase objects, which get flattened
// into an object with the nested keys concatenated using dot notation.
//
//     polyglot.extend({
//       "nav": {
//         "hello": "Hello",
//         "hello_name": "Hello, %{name}",
//         "sidebar": {
//           "welcome": "Welcome"
//         }
//       }
//     });
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}',
//     //   'nav.sidebar.welcome': 'Welcome'
//     // }
//
// `extend` accepts an optional second argument, `prefix`, which can be used
// to prefix every key in the phrases object with some string, using dot
// notation.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     }, "nav");
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}'
//     // }
//
// This feature is used internally to support nested phrase objects.
Polyglot.prototype.extend = function (morePhrases, prefix) {
  forEach(morePhrases, function (phrase, key) {
    var prefixedKey = prefix ? prefix + '.' + key : key;
    if (typeof phrase === 'object') {
      this.extend(phrase, prefixedKey);
    } else {
      this.phrases[prefixedKey] = phrase;
    }
  }, this);
};

// ### polyglot.unset(phrases)
// Use `unset` to selectively remove keys from a polyglot instance.
//
//     polyglot.unset("some_key");
//     polyglot.unset({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The unset method can take either a string (for the key), or an object hash with
// the keys that you would like to unset.
Polyglot.prototype.unset = function (morePhrases, prefix) {
  if (typeof morePhrases === 'string') {
    delete this.phrases[morePhrases];
  } else {
    forEach(morePhrases, function (phrase, key) {
      var prefixedKey = prefix ? prefix + '.' + key : key;
      if (typeof phrase === 'object') {
        this.unset(phrase, prefixedKey);
      } else {
        delete this.phrases[prefixedKey];
      }
    }, this);
  }
};

// ### polyglot.clear()
//
// Clears all phrases. Useful for special cases, such as freeing
// up memory if you have lots of phrases but no longer need to
// perform any translation. Also used internally by `replace`.
Polyglot.prototype.clear = function () {
  this.phrases = {};
};

// ### polyglot.replace(phrases)
//
// Completely replace the existing phrases with a new set of phrases.
// Normally, just use `extend` to add more phrases, but under certain
// circumstances, you may want to make sure no old phrases are lying around.
Polyglot.prototype.replace = function (newPhrases) {
  this.clear();
  this.extend(newPhrases);
};


// ### polyglot.t(key, options)
//
// The most-used method. Provide a key, and `t` will return the
// phrase.
//
//     polyglot.t("hello");
//     => "Hello"
//
// The phrase value is provided first by a call to `polyglot.extend()` or
// `polyglot.replace()`.
//
// Pass in an object as the second argument to perform interpolation.
//
//     polyglot.t("hello_name", {name: "Spike"});
//     => "Hello, Spike"
//
// If you like, you can provide a default value in case the phrase is missing.
// Use the special option key "_" to specify a default.
//
//     polyglot.t("i_like_to_write_in_language", {
//       _: "I like to write in %{language}.",
//       language: "JavaScript"
//     });
//     => "I like to write in JavaScript."
//
Polyglot.prototype.t = function (key, options) {
  var phrase, result;
  var opts = options == null ? {} : options;
  if (typeof this.phrases[key] === 'string') {
    phrase = this.phrases[key];
  } else if (typeof opts._ === 'string') {
    phrase = opts._;
  } else if (this.onMissingKey) {
    var onMissingKey = this.onMissingKey;
    result = onMissingKey(key, opts, this.currentLocale);
  } else {
    this.warn('Missing translation for key: "' + key + '"');
    result = key;
  }
  if (typeof phrase === 'string') {
    result = transformPhrase(phrase, opts, this.currentLocale);
  }
  return result;
};


// ### polyglot.has(key)
//
// Check if polyglot has a translation for given key
Polyglot.prototype.has = function (key) {
  return has(this.phrases, key);
};

// export transformPhrase
Polyglot.transformPhrase = transformPhrase;

module.exports = Polyglot;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(244)

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}


/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(68);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 246 */
/***/ (function(module, exports) {

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(68);
var define = __webpack_require__(86);

var implementation = __webpack_require__(87);
var getPolyfill = __webpack_require__(89);
var shim = __webpack_require__(258);

var boundTrim = bind.call(Function.call, getPolyfill());

define(boundTrim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundTrim;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(249);
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 250 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(252);
var $isFinite = __webpack_require__(253);

var sign = __webpack_require__(254);
var mod = __webpack_require__(255);

var IsCallable = __webpack_require__(88);
var toPrimitive = __webpack_require__(256);

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return Boolean(value);
	},
	ToNumber: function ToNumber(value) {
		return Number(value);
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) { return 0; }
		if (number === 0 || !$isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// http://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	}
};

module.exports = ES5;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),
/* 253 */
/***/ (function(module, exports) {

var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(257);

var isCallable = __webpack_require__(88);

// https://es5.github.io/#x8.12
var ES5internalSlots = {
	'[[DefaultValue]]': function (O, hint) {
		var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// https://es5.github.io/#x9
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
};


/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(86);
var getPolyfill = __webpack_require__(89);

module.exports = function shimStringTrim() {
	var polyfill = getPolyfill();
	define(String.prototype, { trim: polyfill }, { trim: function () { return String.prototype.trim !== polyfill; } });
	return polyfill;
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFormat = undefined;

var _format = __webpack_require__(260);

var _format2 = _interopRequireDefault(_format);

var _ = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initFormat = exports.initFormat = function initFormat(lang) {
  var defaultLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _.DEFAULT_LANG;

  var locales = _defineProperty({}, defaultLang, __webpack_require__(95)("./" + defaultLang + '/index'));
  if (lang && lang !== defaultLang) {
    try {
      locales[lang] = __webpack_require__(95)("./" + lang + '/index');
    } catch (e) {
      console.warn('The "' + lang + '" locale isn\'t supported by date-fns');
    }
  }
  return function (date, formatStr) {
    return (0, _format2.default)(date, formatStr, { locale: locales[lang] });
  };
};

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(261)
var getISOWeek = __webpack_require__(265)
var getISOYear = __webpack_require__(91)
var parse = __webpack_require__(20)
var isValid = __webpack_require__(268)
var enLocale = __webpack_require__(92)

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(20)
var startOfYear = __webpack_require__(262)
var differenceInCalendarDays = __webpack_require__(263)

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(20)

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(264)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(20)

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(20)
var startOfISOWeek = __webpack_require__(69)
var startOfISOYear = __webpack_require__(267)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(20)

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(91)
var startOfISOWeek = __webpack_require__(69)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(90)

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(96)
var buildFormatLocale = __webpack_require__(97)

/**
 * @category Locales
 * @summary Arabic locale (Modern Standard Arabic - Al-fussha).
 * @author Abdallah Hassan [@AbdallahAHO]{@link https://github.com/AbdallahAHO}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(98)
var buildFormatLocale = __webpack_require__(99)

/**
 * @category Locales
 * @summary Bulgarian locale.
 * @author Nikolay Stoynov [@arvigeus]{@link https://github.com/arvigeus}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(100)
var buildFormatLocale = __webpack_require__(101)

/**
 * @category Locales
 * @summary Catalan locale.
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(102)
var buildFormatLocale = __webpack_require__(103)

/**
 * @category Locales
 * @summary Czech locale.
 * @author David Rus [@davidrus]{@link https://github.com/davidrus}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(104)
var buildFormatLocale = __webpack_require__(105)

/**
 * @category Locales
 * @summary Danish locale.
 * @author Anders B. Hansen [@Andersbiha]{@link https://github.com/Andersbiha}
 * @author [@kgram]{@link https://github.com/kgram}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(106)
var buildFormatLocale = __webpack_require__(107)

/**
 * @category Locales
 * @summary German locale.
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Asia [@asia-t]{@link https://github.com/asia-t}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(108)
var buildFormatLocale = __webpack_require__(109)

/**
 * @category Locales
 * @summary Greek locale.
 * @author Theodoros Orfanidis [@teoulas]{@link https://github.com/teoulas}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(110)
var buildFormatLocale = __webpack_require__(111)

/**
 * @category Locales
 * @summary Esperanto locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(112)
var buildFormatLocale = __webpack_require__(113)

/**
 * @category Locales
 * @summary Spanish locale.
 * @author Juan Angosto [@juanangosto]{@link https://github.com/juanangosto}
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 * @author Fernando Agüero [@fjaguero]{@link https://github.com/fjaguero}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(114)
var buildFormatLocale = __webpack_require__(115)

/**
 * @category Locales
 * @summary Finnish locale.
 * @author Pyry-Samuli Lahti [@Pyppe]{@link https://github.com/Pyppe}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(116)
var buildFormatLocale = __webpack_require__(117)

/**
 * @category Locales
 * @summary Filipino locale.
 * @author Ian De La Cruz [@RIanDeLaCruz]{@link https://github.com/RIanDeLaCruz}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(118)
var buildFormatLocale = __webpack_require__(119)

/**
 * @category Locales
 * @summary French locale.
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(120)
var buildFormatLocale = __webpack_require__(121)

/**
 * @category Locales
 * @summary Croatian locale.
 * @author Matija Marohnić [@silvenon]{@link https://github.com/silvenon}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(122)
var buildFormatLocale = __webpack_require__(123)

/**
 * @category Locales
 * @summary Indonesian locale.
 * @author Rahmat Budiharso [@rbudiharso]{@link https://github.com/rbudiharso}
 * @author Benget Nata [@bentinata]{@link https://github.com/bentinata}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(124)
var buildFormatLocale = __webpack_require__(125)

/**
 * @category Locales
 * @summary Icelandic locale.
 * @author Derek Blank [@derekblank]{@link https://github.com/derekblank}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(126)
var buildFormatLocale = __webpack_require__(127)

/**
 * @category Locales
 * @summary Italian locale.
 * @author Alberto Restifo [@albertorestifo]{@link https://github.com/albertorestifo}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(128)
var buildFormatLocale = __webpack_require__(129)

/**
 * @category Locales
 * @summary Japanese locale.
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Yamagishi Kazutoshi [@ykzts]{@link https://github.com/ykzts}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(130)
var buildFormatLocale = __webpack_require__(131)

/**
 * @category Locales
 * @summary Korean locale.
 * @author Hong Chulju [@angdev]{@link https://github.com/angdev}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(132)
var buildFormatLocale = __webpack_require__(133)

/**
 * @category Locales
 * @summary Macedonian locale.
 * @author Petar Vlahu [@vlahupetar]{@link https://github.com/vlahupetar}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(134)
var buildFormatLocale = __webpack_require__(135)

/**
 * @category Locales
 * @summary Norwegian Bokmål locale.
 * @author Hans-Kristian Koren [@Hanse]{@link https://github.com/Hanse}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(136)
var buildFormatLocale = __webpack_require__(137)

/**
 * @category Locales
 * @summary Dutch locale.
 * @author Jorik Tangelder [@jtangelder]{@link https://github.com/jtangelder}
 * @author Ruben Stolk [@rubenstolk]{@link https://github.com/rubenstolk}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(138)
var buildFormatLocale = __webpack_require__(139)

/**
 * @category Locales
 * @summary Polish locale.
 * @author Mateusz Derks [@ertrzyiks]{@link https://github.com/ertrzyiks}
 * @author Just RAG [@justrag]{@link https://github.com/justrag}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(140)
var buildFormatLocale = __webpack_require__(141)

/**
 * @category Locales
 * @summary Portuguese locale.
 * @author Dário Freire [@dfreire]{@link https://github.com/dfreire}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(142)
var buildFormatLocale = __webpack_require__(143)

/**
 * @category Locales
 * @summary Romanian locale.
 * @author Sergiu Munteanu [@jsergiu]{@link https://github.com/jsergiu}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(144)
var buildFormatLocale = __webpack_require__(145)

/**
 * @category Locales
 * @summary Russian locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(146)
var buildFormatLocale = __webpack_require__(147)

/**
 * @category Locales
 * @summary Slovak locale.
 * @author Marek Suscak [@mareksuscak]{@link https://github.com/mareksuscak}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(148)
var buildFormatLocale = __webpack_require__(149)

/**
 * @category Locales
 * @summary Swedish locale.
 * @author Johannes Ulén [@ejulen]{@link https://github.com/ejulen}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(150)
var buildFormatLocale = __webpack_require__(151)

/**
 * @category Locales
 * @summary Thai locale.
 * @author Athiwat Hirunworawongkun [@athivvat]{@link https://github.com/athivvat}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(152)
var buildFormatLocale = __webpack_require__(153)

/**
 * @category Locales
 * @summary Turkish locale.
 * @author Alpcan Aydın [@alpcanaydin]{@link https://github.com/alpcanaydin}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(154)
var buildFormatLocale = __webpack_require__(155)

/**
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author Changyu Geng [@KingMario]{@link https://github.com/KingMario}
 * @author Song Shuoyun [@fnlctrl]{@link https://github.com/fnlctrl}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(156)
var buildFormatLocale = __webpack_require__(157)

/**
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author tonypai [@tpai]{@link https://github.com/tpai}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coz-spinner":"coz-spinner--2XrW6","coz-spinner--blue":"coz-spinner--blue--28EMk","coz-spinner--grey":"coz-spinner--grey--2VnDf","coz-spinner--white":"coz-spinner--white--3mvRb","coz-spinner--red":"coz-spinner--red--OvIRW","coz-spinner--tiny":"coz-spinner--tiny--3-DFI","coz-spinner--small":"coz-spinner--small--1IRkp","coz-spinner--medium":"coz-spinner--medium--2U1hl","coz-spinner--large":"coz-spinner--large--13LKx","coz-spinner--xlarge":"coz-spinner--xlarge--7noCH","coz-spinner--xxlarge":"coz-spinner--xxlarge--1qvT-","spin":"spin--1ywvo","coz-spinner--middle":"coz-spinner--middle--1myrG","coz-spinner--nomargin":"coz-spinner--nomargin--2cFDy"};

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openWithNoAppError = exports.openWithOfflineError = exports.createError = exports.OPEN_WITH_NO_APP_ERROR = exports.OPEN_WITH_OFFLINE_ERROR = undefined;

var _actions = __webpack_require__(24);

var OPEN_WITH_OFFLINE_ERROR = exports.OPEN_WITH_OFFLINE_ERROR = 'mobile.error.open_with.offline';
var OPEN_WITH_NO_APP_ERROR = exports.OPEN_WITH_NO_APP_ERROR = 'mobile.error.open_with.noapp';
var createError = exports.createError = function createError(type, msg) {
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    type: type,
    alert: { message: msg, level: 'error' },
    meta: meta
  };
};
var openWithOfflineError = exports.openWithOfflineError = function openWithOfflineError(meta) {
  return createError(_actions.OPEN_FILE_E_OFFLINE, OPEN_WITH_OFFLINE_ERROR, meta);
};
var openWithNoAppError = exports.openWithNoAppError = function openWithNoAppError(meta) {
  return createError(_actions.OPEN_FILE_E_NO_APP, OPEN_WITH_NO_APP_ERROR, meta);
};

/***/ }),
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(__webpack_require__(85)) :
  typeof define === 'function' && define.amd ? define(['preact'], factory) :
  (factory(global.preact));
}(this, (function (preact) { 'use strict';

var babelHelpers = {};

babelHelpers.inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

// render modes

var ATTR_KEY = typeof Symbol !== 'undefined' ? Symbol['for']('preactattr') : '__preactattr_';

/** Copy own-properties from `props` onto `obj`.
 *	@returns obj
 *	@private
 */
/** @private is the given object a Function? */

function isFunction(obj) {
	return 'function' === typeof obj;
}

/** Check if a VNode is a reference to a stateless functional component.
 *	A function component is represented as a VNode whose `nodeName` property is a reference to a function.
 *	If that function is not a Component (ie, has no `.render()` method on a prototype), it is considered a stateless functional component.
 *	@param {VNode} vnode	A VNode
 *	@private
 */

function isFunctionalComponent(vnode) {
  var nodeName = vnode && vnode.nodeName;
  return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
}

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

// Internal helpers from preact
/**
 * Return a ReactElement-compatible object for the current state of a preact
 * component.
 */
function createReactElement(component) {
	return {
		type: component.constructor,
		key: component.key,
		ref: null, // Unsupported
		props: component.props
	};
}

/**
 * Create a ReactDOMComponent-compatible object for a given DOM node rendered
 * by preact.
 *
 * This implements the subset of the ReactDOMComponent interface that
 * React DevTools requires in order to display DOM nodes in the inspector with
 * the correct type and properties.
 *
 * @param {Node} node
 */
function createReactDOMComponent(node) {
	var childNodes = node.nodeType === Node.ELEMENT_NODE ? Array.from(node.childNodes) : [];

	var isText = node.nodeType === Node.TEXT_NODE;

	return {
		// --- ReactDOMComponent interface
		_currentElement: isText ? node.textContent : {
			type: node.nodeName.toLowerCase(),
			props: node[ATTR_KEY]
		},
		_renderedChildren: childNodes.map(function (child) {
			if (child._component) {
				return updateReactComponent(child._component);
			}
			return updateReactComponent(child);
		}),
		_stringText: isText ? node.textContent : null,

		// --- Additional properties used by preact devtools

		// A flag indicating whether the devtools have been notified about the
		// existence of this component instance yet.
		// This is used to send the appropriate notifications when DOM components
		// are added or updated between composite component updates.
		_inDevTools: false,
		node: node
	};
}

/**
 * Return the name of a component created by a `ReactElement`-like object.
 *
 * @param {ReactElement} element
 */
function typeName(element) {
	if (typeof element.type === 'function') {
		return element.type.displayName || element.type.name;
	}
	return element.type;
}

/**
 * Return a ReactCompositeComponent-compatible object for a given preact
 * component instance.
 *
 * This implements the subset of the ReactCompositeComponent interface that
 * the DevTools requires in order to walk the component tree and inspect the
 * component's properties.
 *
 * See https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/getData.js
 */
function createReactCompositeComponent(component) {
	var _currentElement = createReactElement(component);
	var node = component.base;

	var instance = {
		// --- ReactDOMComponent properties
		getName: function getName() {
			return typeName(_currentElement);
		},
		_currentElement: createReactElement(component),
		props: component.props,
		state: component.state,
		forceUpdate: component.forceUpdate && component.forceUpdate.bind(component),
		setState: component.setState && component.setState.bind(component),

		// --- Additional properties used by preact devtools
		node: node
	};

	// React DevTools exposes the `_instance` field of the selected item in the
	// component tree as `$r` in the console.  `_instance` must refer to a
	// React Component (or compatible) class instance with `props` and `state`
	// fields and `setState()`, `forceUpdate()` methods.
	instance._instance = component;

	// If the root node returned by this component instance's render function
	// was itself a composite component, there will be a `_component` property
	// containing the child component instance.
	if (component._component) {
		instance._renderedComponent = updateReactComponent(component._component);
	} else {
		// Otherwise, if the render() function returned an HTML/SVG element,
		// create a ReactDOMComponent-like object for the DOM node itself.
		instance._renderedComponent = updateReactComponent(node);
	}

	return instance;
}

/**
 * Map of Component|Node to ReactDOMComponent|ReactCompositeComponent-like
 * object.
 *
 * The same React*Component instance must be used when notifying devtools
 * about the initial mount of a component and subsequent updates.
 */
var instanceMap = typeof Map === 'function' && new Map();

/**
 * Update (and create if necessary) the ReactDOMComponent|ReactCompositeComponent-like
 * instance for a given preact component instance or DOM Node.
 *
 * @param {Component|Node} componentOrNode
 */
function updateReactComponent(componentOrNode) {
	var newInstance = componentOrNode instanceof Node ? createReactDOMComponent(componentOrNode) : createReactCompositeComponent(componentOrNode);
	if (instanceMap.has(componentOrNode)) {
		var inst = instanceMap.get(componentOrNode);
		Object.assign(inst, newInstance);
		return inst;
	}
	instanceMap.set(componentOrNode, newInstance);
	return newInstance;
}

function nextRootKey(roots) {
	return '.' + Object.keys(roots).length;
}

/**
 * Find all root component instances rendered by preact in `node`'s children
 * and add them to the `roots` map.
 *
 * @param {DOMElement} node
 * @param {[key: string] => ReactDOMComponent|ReactCompositeComponent}
 */
function findRoots(node, roots) {
	Array.from(node.childNodes).forEach(function (child) {
		if (child._component) {
			roots[nextRootKey(roots)] = updateReactComponent(child._component);
		} else {
			findRoots(child, roots);
		}
	});
}

/**
 * Map of functional component name -> wrapper class.
 */
var functionalComponentWrappers = typeof Map === 'function' && new Map();

/**
 * Wrap a functional component with a stateful component.
 *
 * preact does not record any information about the original hierarchy of
 * functional components in the rendered DOM nodes. Wrapping functional components
 * with a trivial wrapper allows us to recover information about the original
 * component structure from the DOM.
 *
 * @param {VNode} vnode
 */
function wrapFunctionalComponent(vnode) {
	var originalRender = vnode.nodeName;
	var name = vnode.nodeName.name || '(Function.name missing)';
	var wrappers = functionalComponentWrappers;
	if (!wrappers.has(originalRender)) {
		(function () {
			var wrapper = (function (_Component) {
				babelHelpers.inherits(wrapper, _Component);

				function wrapper() {
					babelHelpers.classCallCheck(this, wrapper);

					_Component.apply(this, arguments);
				}

				wrapper.prototype.render = function render(props, state, context) {
					return originalRender(props, context);
				};

				return wrapper;
			})(preact.Component);

			// Expose the original component name. React Dev Tools will use
			// this property if it exists or fall back to Function.name
			// otherwise.
			wrapper.displayName = name;

			wrappers.set(originalRender, wrapper);
		})();
	}
	vnode.nodeName = wrappers.get(originalRender);
}

/**
 * Create a bridge for exposing preact's component tree to React DevTools.
 *
 * It creates implementations of the interfaces that ReactDOM passes to
 * devtools to enable it to query the component tree and hook into component
 * updates.
 *
 * See https://github.com/facebook/react/blob/59ff7749eda0cd858d5ee568315bcba1be75a1ca/src/renderers/dom/ReactDOM.js
 * for how ReactDOM exports its internals for use by the devtools and
 * the `attachRenderer()` function in
 * https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/attachRenderer.js
 * for how the devtools consumes the resulting objects.
 */
function createDevToolsBridge() {
	// The devtools has different paths for interacting with the renderers from
	// React Native, legacy React DOM and current React DOM.
	//
	// Here we emulate the interface for the current React DOM (v15+) lib.

	// ReactDOMComponentTree-like object
	var ComponentTree = {
		getNodeFromInstance: function getNodeFromInstance(instance) {
			return instance.node;
		},
		getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
			while (node && !node._component) {
				node = node.parentNode;
			}
			return node ? updateReactComponent(node._component) : null;
		}
	};

	// Map of root ID (the ID is unimportant) to component instance.
	var roots = {};
	findRoots(document.body, roots);

	// ReactMount-like object
	//
	// Used by devtools to discover the list of root component instances and get
	// notified when new root components are rendered.
	var Mount = {
		_instancesByReactRootID: roots,

		// Stub - React DevTools expects to find this method and replace it
		// with a wrapper in order to observe new root components being added
		_renderNewRootComponent: function _renderNewRootComponent() /* instance, ... */{}
	};

	// ReactReconciler-like object
	var Reconciler = {
		// Stubs - React DevTools expects to find these methods and replace them
		// with wrappers in order to observe components being mounted, updated and
		// unmounted
		mountComponent: function mountComponent() /* instance, ... */{},
		performUpdateIfNecessary: function performUpdateIfNecessary() /* instance, ... */{},
		receiveComponent: function receiveComponent() /* instance, ... */{},
		unmountComponent: function unmountComponent() /* instance, ... */{}
	};

	/** Notify devtools that a new component instance has been mounted into the DOM. */
	var componentAdded = function componentAdded(component) {
		var instance = updateReactComponent(component);
		if (isRootComponent(component)) {
			instance._rootID = nextRootKey(roots);
			roots[instance._rootID] = instance;
			Mount._renderNewRootComponent(instance);
		}
		visitNonCompositeChildren(instance, function (childInst) {
			childInst._inDevTools = true;
			Reconciler.mountComponent(childInst);
		});
		Reconciler.mountComponent(instance);
	};

	/** Notify devtools that a component has been updated with new props/state. */
	var componentUpdated = function componentUpdated(component) {
		var prevRenderedChildren = [];
		visitNonCompositeChildren(instanceMap.get(component), function (childInst) {
			prevRenderedChildren.push(childInst);
		});

		// Notify devtools about updates to this component and any non-composite
		// children
		var instance = updateReactComponent(component);
		Reconciler.receiveComponent(instance);
		visitNonCompositeChildren(instance, function (childInst) {
			if (!childInst._inDevTools) {
				// New DOM child component
				childInst._inDevTools = true;
				Reconciler.mountComponent(childInst);
			} else {
				// Updated DOM child component
				Reconciler.receiveComponent(childInst);
			}
		});

		// For any non-composite children that were removed by the latest render,
		// remove the corresponding ReactDOMComponent-like instances and notify
		// the devtools
		prevRenderedChildren.forEach(function (childInst) {
			if (!document.body.contains(childInst.node)) {
				instanceMap['delete'](childInst.node);
				Reconciler.unmountComponent(childInst);
			}
		});
	};

	/** Notify devtools that a component has been unmounted from the DOM. */
	var componentRemoved = function componentRemoved(component) {
		var instance = updateReactComponent(component);
		visitNonCompositeChildren(function (childInst) {
			instanceMap['delete'](childInst.node);
			Reconciler.unmountComponent(childInst);
		});
		Reconciler.unmountComponent(instance);
		instanceMap['delete'](component);
		if (instance._rootID) {
			delete roots[instance._rootID];
		}
	};

	return {
		componentAdded: componentAdded,
		componentUpdated: componentUpdated,
		componentRemoved: componentRemoved,

		// Interfaces passed to devtools via __REACT_DEVTOOLS_GLOBAL_HOOK__.inject()
		ComponentTree: ComponentTree,
		Mount: Mount,
		Reconciler: Reconciler
	};
}

/**
 * Return `true` if a preact component is a top level component rendered by
 * `render()` into a container Element.
 */
function isRootComponent(component) {
	if (component._parentComponent) {
		// Component with a composite parent
		return false;
	}
	if (component.base.parentElement && component.base.parentElement[ATTR_KEY]) {
		// Component with a parent DOM element rendered by Preact
		return false;
	}
	return true;
}

/**
 * Visit all child instances of a ReactCompositeComponent-like object that are
 * not composite components (ie. they represent DOM elements or text)
 *
 * @param {Component} component
 * @param {(Component) => void} visitor
 */
function visitNonCompositeChildren(component, visitor) {
	if (component._renderedComponent) {
		if (!component._renderedComponent._component) {
			visitor(component._renderedComponent);
			visitNonCompositeChildren(component._renderedComponent, visitor);
		}
	} else if (component._renderedChildren) {
		component._renderedChildren.forEach(function (child) {
			visitor(child);
			if (!child._component) visitNonCompositeChildren(child, visitor);
		});
	}
}

/**
 * Create a bridge between the preact component tree and React's dev tools
 * and register it.
 *
 * After this function is called, the React Dev Tools should be able to detect
 * "React" on the page and show the component tree.
 *
 * This function hooks into preact VNode creation in order to expose functional
 * components correctly, so it should be called before the root component(s)
 * are rendered.
 *
 * Returns a cleanup function which unregisters the hooks.
 */

function initDevTools() {
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
		// React DevTools are not installed
		return;
	}

	// Hook into preact element creation in order to wrap functional components
	// with stateful ones in order to make them visible in the devtools
	var nextVNode = preact.options.vnode;
	preact.options.vnode = function (vnode) {
		if (isFunctionalComponent(vnode)) wrapFunctionalComponent(vnode);
		if (nextVNode) return nextVNode(vnode);
	};

	// Notify devtools when preact components are mounted, updated or unmounted
	var bridge = createDevToolsBridge();

	var nextAfterMount = preact.options.afterMount;
	preact.options.afterMount = function (component) {
		bridge.componentAdded(component);
		if (nextAfterMount) nextAfterMount(component);
	};

	var nextAfterUpdate = preact.options.afterUpdate;
	preact.options.afterUpdate = function (component) {
		bridge.componentUpdated(component);
		if (nextAfterUpdate) nextAfterUpdate(component);
	};

	var nextBeforeUnmount = preact.options.beforeUnmount;
	preact.options.beforeUnmount = function (component) {
		bridge.componentRemoved(component);
		if (nextBeforeUnmount) nextBeforeUnmount(component);
	};

	// Notify devtools about this instance of "React"
	__REACT_DEVTOOLS_GLOBAL_HOOK__.inject(bridge);

	return function () {
		preact.options.afterMount = nextAfterMount;
		preact.options.afterUpdate = nextAfterUpdate;
		preact.options.beforeUnmount = nextBeforeUnmount;
	};
}

initDevTools();

})));
//# sourceMappingURL=devtools.js.map


/***/ }),
/* 323 */,
/* 324 */,
/* 325 */
/***/ (function(module, exports) {

exports.remove = removeDiacritics;

var replacementList = [
  {
    base: ' ',
    chars: "\u00A0",
  }, {
    base: '0',
    chars: "\u07C0",
  }, {
    base: 'A',
    chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F",
  }, {
    base: 'AA',
    chars: "\uA732",
  }, {
    base: 'AE',
    chars: "\u00C6\u01FC\u01E2",
  }, {
    base: 'AO',
    chars: "\uA734",
  }, {
    base: 'AU',
    chars: "\uA736",
  }, {
    base: 'AV',
    chars: "\uA738\uA73A",
  }, {
    base: 'AY',
    chars: "\uA73C",
  }, {
    base: 'B',
    chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181",
  }, {
    base: 'C',
    chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B",
  }, {
    base: 'D',
    chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779",
  }, {
    base: 'Dh',
    chars: "\u00D0",
  }, {
    base: 'DZ',
    chars: "\u01F1\u01C4",
  }, {
    base: 'Dz',
    chars: "\u01F2\u01C5",
  }, {
    base: 'E',
    chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07",
  }, {
    base: 'F',
    chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B",
  }, {
    base: 'G',
    chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262",
  }, {
    base: 'H',
    chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D",
  }, {
    base: 'I',
    chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197",
  }, {
    base: 'J',
    chars: "\u24BF\uFF2A\u0134\u0248\u0237",
  }, {
    base: 'K',
    chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2",
  }, {
    base: 'L',
    chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780",
  }, {
    base: 'LJ',
    chars: "\u01C7",
  }, {
    base: 'Lj',
    chars: "\u01C8",
  }, {
    base: 'M',
    chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB",
  }, {
    base: 'N',
    chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E",
  }, {
    base: 'NJ',
    chars: "\u01CA",
  }, {
    base: 'Nj',
    chars: "\u01CB",
  }, {
    base: 'O',
    chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C",
  }, {
    base: 'OE',
    chars: "\u0152",
  }, {
    base: 'OI',
    chars: "\u01A2",
  }, {
    base: 'OO',
    chars: "\uA74E",
  }, {
    base: 'OU',
    chars: "\u0222",
  }, {
    base: 'P',
    chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754",
  }, {
    base: 'Q',
    chars: "\u24C6\uFF31\uA756\uA758\u024A",
  }, {
    base: 'R',
    chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782",
  }, {
    base: 'S',
    chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784",
  }, {
    base: 'T',
    chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786",
  }, {
    base: 'Th',
    chars: "\u00DE",
  }, {
    base: 'TZ',
    chars: "\uA728",
  }, {
    base: 'U',
    chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244",
  }, {
    base: 'V',
    chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245",
  }, {
    base: 'VY',
    chars: "\uA760",
  }, {
    base: 'W',
    chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72",
  }, {
    base: 'X',
    chars: "\u24CD\uFF38\u1E8A\u1E8C",
  }, {
    base: 'Y',
    chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE",
  }, {
    base: 'Z',
    chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762",
  }, {
    base: 'a',
    chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251",
  }, {
    base: 'aa',
    chars: "\uA733",
  }, {
    base: 'ae',
    chars: "\u00E6\u01FD\u01E3",
  }, {
    base: 'ao',
    chars: "\uA735",
  }, {
    base: 'au',
    chars: "\uA737",
  }, {
    base: 'av',
    chars: "\uA739\uA73B",
  }, {
    base: 'ay',
    chars: "\uA73D",
  }, {
    base: 'b',
    chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182",
  }, {
    base: 'c',
    chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184",
  }, {
    base: 'd',
    chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA",
  }, {
    base: 'dh',
    chars: "\u00F0",
  }, {
    base: 'dz',
    chars: "\u01F3\u01C6",
  }, {
    base: 'e',
    chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD",
  }, {
    base: 'f',
    chars: "\u24D5\uFF46\u1E1F\u0192",
  }, {
    base: 'ff',
    chars: "\uFB00",
  }, {
    base: 'fi',
    chars: "\uFB01",
  }, {
    base: 'fl',
    chars: "\uFB02",
  }, {
    base: 'ffi',
    chars: "\uFB03",
  }, {
    base: 'ffl',
    chars: "\uFB04",
  }, {
    base: 'g',
    chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79",
  }, {
    base: 'h',
    chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265",
  }, {
    base: 'hv',
    chars: "\u0195",
  }, {
    base: 'i',
    chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131",
  }, {
    base: 'j',
    chars: "\u24D9\uFF4A\u0135\u01F0\u0249",
  }, {
    base: 'k',
    chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3",
  }, {
    base: 'l',
    chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D",
  }, {
    base: 'lj',
    chars: "\u01C9",
  }, {
    base: 'm',
    chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F",
  }, {
    base: 'n',
    chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509",
  }, {
    base: 'nj',
    chars: "\u01CC",
  }, {
    base: 'o',
    chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11",
  }, {
    base: 'oe',
    chars: "\u0153",
  }, {
    base: 'oi',
    chars: "\u01A3",
  }, {
    base: 'oo',
    chars: "\uA74F",
  }, {
    base: 'ou',
    chars: "\u0223",
  }, {
    base: 'p',
    chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1",
  }, {
    base: 'q',
    chars: "\u24E0\uFF51\u024B\uA757\uA759",
  }, {
    base: 'r',
    chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783",
  }, {
    base: 's',
    chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282",
  }, {
    base: 'ss',
    chars: "\xDF",
  }, {
    base: 't',
    chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787",
  }, {
    base: 'th',
    chars: "\u00FE",
  }, {
    base: 'tz',
    chars: "\uA729",
  }, {
    base: 'u',
    chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289",
  }, {
    base: 'v',
    chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C",
  }, {
    base: 'vy',
    chars: "\uA761",
  }, {
    base: 'w',
    chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73",
  }, {
    base: 'x',
    chars: "\u24E7\uFF58\u1E8B\u1E8D",
  }, {
    base: 'y',
    chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF",
  }, {
    base: 'z',
    chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763",
  }
];

var diacriticsMap = {};
for (var i = 0; i < replacementList.length; i += 1) {
  var chars = replacementList[i].chars;
  for (var j = 0; j < chars.length; j += 1) {
    diacriticsMap[chars[j]] = replacementList[i].base;
  }
}

function removeDiacritics(str) {
  return str.replace(/[^\u0000-\u007e]/g, function(c) {
    return diacriticsMap[c] || c;
  });
}

exports.replacementList = replacementList;
exports.diacriticsMap = diacriticsMap;


/***/ }),
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__(1)
  , $typed       = __webpack_require__(164)
  , buffer       = __webpack_require__(206)
  , anObject     = __webpack_require__(7)
  , toIndex      = __webpack_require__(44)
  , toLength     = __webpack_require__(16)
  , isObject     = __webpack_require__(8)
  , ArrayBuffer  = __webpack_require__(5).ArrayBuffer
  , speciesConstructor = __webpack_require__(171)
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(11)(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(72)(ARRAY_BUFFER);

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(12)
  , anObject = __webpack_require__(7)
  , getKeys  = __webpack_require__(47);

module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(347);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8)
  , isArray  = __webpack_require__(210)
  , SPECIES  = __webpack_require__(9)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(59)
  , descriptor     = __webpack_require__(27)
  , setToStringTag = __webpack_require__(45)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(9)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(214);

// 23.1 Map Objects
module.exports = __webpack_require__(75)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var isObject       = __webpack_require__(8)
  , setPrototypeOf = __webpack_require__(176).set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(214);

// 23.2 Set Objects
module.exports = __webpack_require__(75)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each         = __webpack_require__(61)(0)
  , redefine     = __webpack_require__(28)
  , meta         = __webpack_require__(63)
  , assign       = __webpack_require__(216)
  , weak         = __webpack_require__(217)
  , isObject     = __webpack_require__(8)
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(75)('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(217);

// 23.4 WeakSet Objects
__webpack_require__(75)('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = __webpack_require__(1)
  , aFunction = __webpack_require__(37)
  , anObject  = __webpack_require__(7)
  , rApply    = (__webpack_require__(5).Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(11)(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = __webpack_require__(1)
  , create     = __webpack_require__(59)
  , aFunction  = __webpack_require__(37)
  , anObject   = __webpack_require__(7)
  , isObject   = __webpack_require__(8)
  , fails      = __webpack_require__(11)
  , bind       = __webpack_require__(364)
  , rConstruct = (__webpack_require__(5).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction  = __webpack_require__(37)
  , isObject   = __webpack_require__(8)
  , invoke     = __webpack_require__(77)
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = __webpack_require__(12)
  , $export     = __webpack_require__(1)
  , anObject    = __webpack_require__(7)
  , toPrimitive = __webpack_require__(57);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(11)(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = __webpack_require__(1)
  , gOPD     = __webpack_require__(30).f
  , anObject = __webpack_require__(7);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = __webpack_require__(30)
  , getPrototypeOf = __webpack_require__(60)
  , has            = __webpack_require__(15)
  , $export        = __webpack_require__(1)
  , isObject       = __webpack_require__(8)
  , anObject       = __webpack_require__(7);

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = __webpack_require__(30)
  , $export  = __webpack_require__(1)
  , anObject = __webpack_require__(7);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = __webpack_require__(1)
  , getProto = __webpack_require__(60)
  , anObject = __webpack_require__(7);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(1);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export       = __webpack_require__(1)
  , anObject      = __webpack_require__(7)
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(1);

$export($export.S, 'Reflect', {ownKeys: __webpack_require__(218)});

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export            = __webpack_require__(1)
  , anObject           = __webpack_require__(7)
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = __webpack_require__(12)
  , gOPD           = __webpack_require__(30)
  , getPrototypeOf = __webpack_require__(60)
  , has            = __webpack_require__(15)
  , $export        = __webpack_require__(1)
  , createDesc     = __webpack_require__(27)
  , anObject       = __webpack_require__(7)
  , isObject       = __webpack_require__(8);

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = __webpack_require__(1)
  , setProto = __webpack_require__(176);

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(39)
  , global             = __webpack_require__(5)
  , ctx                = __webpack_require__(25)
  , classof            = __webpack_require__(172)
  , $export            = __webpack_require__(1)
  , isObject           = __webpack_require__(8)
  , aFunction          = __webpack_require__(37)
  , anInstance         = __webpack_require__(41)
  , forOf              = __webpack_require__(74)
  , speciesConstructor = __webpack_require__(171)
  , task               = __webpack_require__(177).set
  , microtask          = __webpack_require__(377)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(9)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(40)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(45)($Promise, PROMISE);
__webpack_require__(72)(PROMISE);
Wrapper = __webpack_require__(56)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(73)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , macrotask = __webpack_require__(177).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(43)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(5)
  , has            = __webpack_require__(15)
  , DESCRIPTORS    = __webpack_require__(17)
  , $export        = __webpack_require__(1)
  , redefine       = __webpack_require__(28)
  , META           = __webpack_require__(63).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(168)
  , setToStringTag = __webpack_require__(45)
  , uid            = __webpack_require__(36)
  , wks            = __webpack_require__(9)
  , wksExt         = __webpack_require__(219)
  , wksDefine      = __webpack_require__(379)
  , keyOf          = __webpack_require__(380)
  , enumKeys       = __webpack_require__(381)
  , isArray        = __webpack_require__(210)
  , anObject       = __webpack_require__(7)
  , toIObject      = __webpack_require__(22)
  , toPrimitive    = __webpack_require__(57)
  , createDesc     = __webpack_require__(27)
  , _create        = __webpack_require__(59)
  , gOPNExt        = __webpack_require__(382)
  , $GOPD          = __webpack_require__(30)
  , $DP            = __webpack_require__(12)
  , $keys          = __webpack_require__(47)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(58).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(62).f  = $propertyIsEnumerable;
  __webpack_require__(76).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(39)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(5)
  , core           = __webpack_require__(56)
  , LIBRARY        = __webpack_require__(39)
  , wksExt         = __webpack_require__(219)
  , defineProperty = __webpack_require__(12).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(47)
  , toIObject = __webpack_require__(22);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(47)
  , gOPS    = __webpack_require__(76)
  , pIE     = __webpack_require__(62);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22)
  , gOPN      = __webpack_require__(58).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(1);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(216)});

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(1);
$export($export.S, 'Object', {is: __webpack_require__(208)});

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(1);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(176).set});

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(12).f
  , createDesc = __webpack_require__(27)
  , has        = __webpack_require__(15)
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || __webpack_require__(17) && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(1)
  , toIObject = __webpack_require__(22)
  , toLength  = __webpack_require__(16);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var $export        = __webpack_require__(1)
  , toIndex        = __webpack_require__(44)
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1)
  , $at     = __webpack_require__(390)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42)
  , defined   = __webpack_require__(29);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(220)
});

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export     = __webpack_require__(1)
  , toLength    = __webpack_require__(16)
  , context     = __webpack_require__(178)
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(179)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export   = __webpack_require__(1)
  , toLength  = __webpack_require__(16)
  , context   = __webpack_require__(178)
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(179)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export  = __webpack_require__(1)
  , context  = __webpack_require__(178)
  , INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(179)(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if(__webpack_require__(17) && /./g.flags != 'g')__webpack_require__(12).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(396)
});

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(7);
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(78)('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(78)('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(78)('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = __webpack_require__(221)
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(78)('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(25)
  , $export        = __webpack_require__(1)
  , toObject       = __webpack_require__(38)
  , call           = __webpack_require__(215)
  , isArrayIter    = __webpack_require__(173)
  , toLength       = __webpack_require__(16)
  , createProperty = __webpack_require__(180)
  , getIterFn      = __webpack_require__(174);

$export($export.S + $export.F * !__webpack_require__(73)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export        = __webpack_require__(1)
  , createProperty = __webpack_require__(180);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(11)(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(1);

$export($export.P, 'Array', {copyWithin: __webpack_require__(213)});

__webpack_require__(48)('copyWithin');

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(1)
  , $find   = __webpack_require__(61)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(48)(KEY);

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(1)
  , $find   = __webpack_require__(61)(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(48)(KEY);

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(1);

$export($export.P, 'Array', {fill: __webpack_require__(170)});

__webpack_require__(48)('fill');

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export   = __webpack_require__(1)
  , _isFinite = __webpack_require__(5).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(1);

$export($export.S, 'Number', {isInteger: __webpack_require__(222)});

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export   = __webpack_require__(1)
  , isInteger = __webpack_require__(222)
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(1);

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(1);

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(1);

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(1);

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(1)
  , log1p   = __webpack_require__(223)
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(1)
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(1)
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(1)
  , sign    = __webpack_require__(181);

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(1)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(1)
  , $expm1  = __webpack_require__(182);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export   = __webpack_require__(1)
  , sign      = __webpack_require__(181)
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(1)
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(1)
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(11)(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {log1p: __webpack_require__(223)});

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {sign: __webpack_require__(181)});

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(1)
  , expm1   = __webpack_require__(182)
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(11)(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(1)
  , expm1   = __webpack_require__(182)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export   = __webpack_require__(1)
  , $includes = __webpack_require__(166)(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(48)('includes');

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(1)
  , $values = __webpack_require__(224)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export  = __webpack_require__(1)
  , $entries = __webpack_require__(224)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = __webpack_require__(1)
  , ownKeys        = __webpack_require__(218)
  , toIObject      = __webpack_require__(22)
  , gOPD           = __webpack_require__(30)
  , createProperty = __webpack_require__(180);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(1)
  , $pad    = __webpack_require__(225);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(1)
  , $pad    = __webpack_require__(225);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global     = __webpack_require__(5)
  , $export    = __webpack_require__(1)
  , invoke     = __webpack_require__(77)
  , partial    = __webpack_require__(438)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path      = __webpack_require__(439)
  , invoke    = __webpack_require__(77)
  , aFunction = __webpack_require__(37);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1)
  , $task   = __webpack_require__(177);
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators    = __webpack_require__(175)
  , redefine      = __webpack_require__(28)
  , global        = __webpack_require__(5)
  , hide          = __webpack_require__(18)
  , Iterators     = __webpack_require__(46)
  , wks           = __webpack_require__(9)
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ }),
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_cozy_dot_client) {

__webpack_require__(343);

__webpack_require__(344);

__webpack_require__(349);

__webpack_require__(350);

__webpack_require__(351);

__webpack_require__(352);

__webpack_require__(353);

__webpack_require__(354);

__webpack_require__(355);

__webpack_require__(356);

__webpack_require__(357);

__webpack_require__(359);

__webpack_require__(360);

__webpack_require__(361);

__webpack_require__(362);

__webpack_require__(363);

__webpack_require__(365);

__webpack_require__(366);

__webpack_require__(367);

__webpack_require__(368);

__webpack_require__(369);

__webpack_require__(370);

__webpack_require__(371);

__webpack_require__(372);

__webpack_require__(373);

__webpack_require__(374);

__webpack_require__(375);

__webpack_require__(376);

__webpack_require__(378);

__webpack_require__(383);

__webpack_require__(384);

__webpack_require__(385);

__webpack_require__(386);

__webpack_require__(387);

__webpack_require__(388);

__webpack_require__(389);

__webpack_require__(391);

__webpack_require__(392);

__webpack_require__(393);

__webpack_require__(394);

__webpack_require__(395);

__webpack_require__(397);

__webpack_require__(398);

__webpack_require__(399);

__webpack_require__(400);

__webpack_require__(401);

__webpack_require__(402);

__webpack_require__(403);

__webpack_require__(404);

__webpack_require__(405);

__webpack_require__(406);

__webpack_require__(175);

__webpack_require__(407);

__webpack_require__(408);

__webpack_require__(409);

__webpack_require__(410);

__webpack_require__(411);

__webpack_require__(412);

__webpack_require__(413);

__webpack_require__(414);

__webpack_require__(415);

__webpack_require__(416);

__webpack_require__(417);

__webpack_require__(418);

__webpack_require__(419);

__webpack_require__(420);

__webpack_require__(421);

__webpack_require__(422);

__webpack_require__(423);

__webpack_require__(424);

__webpack_require__(425);

__webpack_require__(426);

__webpack_require__(427);

__webpack_require__(428);

__webpack_require__(429);

__webpack_require__(430);

__webpack_require__(431);

__webpack_require__(432);

__webpack_require__(433);

__webpack_require__(434);

__webpack_require__(435);

__webpack_require__(436);

__webpack_require__(437);

__webpack_require__(440);

__webpack_require__(441);

__webpack_require__(442);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(0);

var _services = __webpack_require__(670);

var _services2 = _interopRequireDefault(_services);

var _I18n = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __DEVELOPMENT__ */
/* global cozy */

if (true) {
  // Enables React dev tools for Preact
  // Cannot use import as we are in a condition
  __webpack_require__(322

  // Export React to window for the devtools
  );window.React = _react2.default;
}

var arrToObj = function arrToObj() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var varval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['var', 'val'];

  obj[varval[0]] = varval[1];
  return obj;
};

var getQueryParameter = function getQueryParameter() {
  return window.location.search.substring(1).split('&').map(function (varval) {
    return varval.split('=');
  }).reduce(arrToObj, {});
};

document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('[role=application]');
  var data = root.dataset;

  var _getQueryParameter = getQueryParameter(),
      intent = _getQueryParameter.intent;

  __webpack_provided_cozy_dot_client.init({
    cozyURL: '//' + data.cozyDomain,
    token: data.cozyToken
  });

  (0, _reactDom.render)(_react2.default.createElement(
    _I18n.I18n,
    { lang: data.cozyLocale, dictRequire: function dictRequire(lang) {
        return __webpack_require__(204)("./" + lang);
      } },
    _react2.default.createElement(_services2.default, { intentId: intent })
  ), root);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IntentHandler = __webpack_require__(671);

var _IntentHandler2 = _interopRequireDefault(_IntentHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _IntentHandler2.default;

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_cozy_dot_client) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Embeder = __webpack_require__(672);

var _Embeder2 = _interopRequireDefault(_Embeder);

var _URLGetter = __webpack_require__(674);

var _URLGetter2 = _interopRequireDefault(_URLGetter);

var _SuggestionProvider = __webpack_require__(675);

var _SuggestionProvider2 = _interopRequireDefault(_SuggestionProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global cozy */


var IntentHandler = function (_React$Component) {
  _inherits(IntentHandler, _React$Component);

  function IntentHandler(props) {
    _classCallCheck(this, IntentHandler);

    var _this = _possibleConstructorReturn(this, (IntentHandler.__proto__ || Object.getPrototypeOf(IntentHandler)).call(this, props));

    _this.state = {
      component: null,
      service: null,
      intent: null
    };
    return _this;
  }

  _createClass(IntentHandler, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startService();
    }
  }, {
    key: 'startService',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var intentId, component, service, intent;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                intentId = this.props.intentId;
                component = void 0;
                service = void 0;
                intent = void 0;
                _context.prev = 4;
                _context.next = 7;
                return __webpack_provided_cozy_dot_client.intents.createService(intentId, window);

              case 7:
                service = _context.sent;

                intent = service.getIntent();

                if (intent.attributes.action === 'OPEN' && intent.attributes.type === 'io.cozy.suggestions') {
                  component = _SuggestionProvider2.default;
                } else if (intent.attributes.action === 'OPEN' && intent.attributes.type === 'io.cozy.files') {
                  component = _Embeder2.default;
                } else if (intent.attributes.action === 'GET_URL') {
                  component = _URLGetter2.default;
                }

                this.setState({
                  component: component,
                  service: service,
                  intent: intent
                });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                service.throw(_context.t0);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      function startService() {
        return _ref.apply(this, arguments);
      }

      return startService;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          service = _state.service,
          intent = _state.intent;

      var ServiceComponent = this.state.component;

      return ServiceComponent ? _react2.default.createElement(ServiceComponent, { service: service, intent: intent }) : null;
    }
  }]);

  return IntentHandler;
}(_react2.default.Component);

exports.default = IntentHandler;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _services = __webpack_require__(673);

var _services2 = _interopRequireDefault(_services);

var _Spinner = __webpack_require__(33);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _actions = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Embeder = function (_React$Component) {
  _inherits(Embeder, _React$Component);

  function Embeder(props) {
    _classCallCheck(this, Embeder);

    var _this = _possibleConstructorReturn(this, (Embeder.__proto__ || Object.getPrototypeOf(Embeder)).call(this, props));

    _this.state = {
      loading: true
    };
    return _this;
  }

  _createClass(Embeder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchFileUrl();
    }
  }, {
    key: 'fetchFileUrl',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var service, _service$getData, id, url;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.props.service;
                _context.prev = 1;
                _service$getData = service.getData(), id = _service$getData.id;
                _context.next = 5;
                return (0, _actions.getFileDownloadUrl)(id);

              case 5:
                url = _context.sent;

                this.setState({ url: url, loading: false });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                this.setState({ error: _context.t0, loading: false });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function fetchFileUrl() {
        return _ref.apply(this, arguments);
      }

      return fetchFileUrl;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.loading && _react2.default.createElement(_Spinner2.default, { size: 'xxlarge', loadingType: 'message', middle: 'true' }),
        this.state.error && _react2.default.createElement(
          'pre',
          { className: 'coz-error' },
          this.state.error.toString()
        ),
        this.state.url && _react2.default.createElement('embed', { className: _services2.default.fullscreen, src: this.state.url })
      );
    }
  }]);

  return Embeder;
}(_react2.default.Component);

exports.default = Embeder;

/***/ }),
/* 673 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fullscreen":"fullscreen--3gsbb"};

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var URLGetter = function (_React$Component) {
  _inherits(URLGetter, _React$Component);

  function URLGetter() {
    _classCallCheck(this, URLGetter);

    return _possibleConstructorReturn(this, (URLGetter.__proto__ || Object.getPrototypeOf(URLGetter)).apply(this, arguments));
  }

  _createClass(URLGetter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getURL();
    }
  }, {
    key: 'getURL',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var service, _service$getData, id, url;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.props.service;
                _context.prev = 1;
                _service$getData = service.getData(), id = _service$getData.id;
                _context.next = 5;
                return (0, _actions.getFileDownloadUrl)(id);

              case 5:
                url = _context.sent;

                service.terminate({ url: url });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                service.throw(_context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function getURL() {
        return _ref.apply(this, arguments);
      }

      return getURL;
    }()
  }]);

  return URLGetter;
}(_react2.default.Component);

exports.default = URLGetter;

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_cozy_dot_client) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FuzzyPathSearch = __webpack_require__(676);

var _FuzzyPathSearch2 = _interopRequireDefault(_FuzzyPathSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global cozy */


var SuggestionProvider = function (_React$Component) {
  _inherits(SuggestionProvider, _React$Component);

  function SuggestionProvider() {
    _classCallCheck(this, SuggestionProvider);

    return _possibleConstructorReturn(this, (SuggestionProvider.__proto__ || Object.getPrototypeOf(SuggestionProvider)).apply(this, arguments));
  }

  _createClass(SuggestionProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var intent = this.props.intent;

      this.hasIndexedFiles = false;

      // re-attach the message listener for the intent to receive the suggestion requests
      window.addEventListener('message', function (event) {
        if (event.origin !== intent.attributes.client) return null;
        var query = event.data.query;

        _this2.provideSuggestions(query, intent);
      });
    }
  }, {
    key: 'provideSuggestions',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(query, intent) {
        var searchResults;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.hasIndexedFiles) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.indexFiles();

              case 3:
                searchResults = this.fuzzyPathSearch.search(query);


                window.parent.postMessage({
                  type: 'intent-' + intent._id + ':data',
                  suggestions: searchResults.map(function (result) {
                    return {
                      id: result.id,
                      title: result.name,
                      subtitle: result.path,
                      term: result.name,
                      onSelect: 'open:' + result.url
                    };
                  })
                }, intent.attributes.client);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function provideSuggestions(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return provideSuggestions;
    }()

    // fetches pretty much all the files and preloads FuzzyPathSearch

  }, {
    key: 'indexFiles',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', new Promise(function () {
                  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(resolve) {
                    var index, files, limit, pageLimit, page, response, folders, normalizedFiles;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return __webpack_provided_cozy_dot_client.data.defineIndex('io.cozy.files', ['_id']);

                          case 2:
                            index = _context2.sent;
                            files = [];
                            limit = 100;
                            pageLimit = 500; // that's 50 000 files max

                            page = 0;
                            response = void 0;

                          case 8:
                            _context2.next = 10;
                            return __webpack_provided_cozy_dot_client.data.query(index, {
                              selector: { _id: { $gt: null } },
                              limit: limit,
                              skip: page * limit,
                              wholeResponse: true
                            });

                          case 10:
                            response = _context2.sent;

                            files = files.concat(response.docs);
                            ++page;

                          case 13:
                            if (response.next && page < pageLimit) {
                              _context2.next = 8;
                              break;
                            }

                          case 14:
                            folders = files.filter(function (file) {
                              return file.type === 'directory';
                            });
                            normalizedFiles = files.filter(function (file) {
                              return file.trashed === false;
                            }).map(function (file) {
                              var isDir = file.type === 'directory';
                              var dirId = isDir ? file._id : file.dir_id;
                              var path = void 0;
                              if (isDir) {
                                path = file.path;
                              } else {
                                var parentDir = folders.find(function (folder) {
                                  return folder._id === file.dir_id;
                                });
                                path = parentDir && parentDir.path ? parentDir.path : '';
                              }

                              return {
                                id: file._id,
                                name: file.name,
                                path: path,
                                url: window.location.origin + '/#/folder/' + dirId
                              };
                            });


                            _this3.fuzzyPathSearch = new _FuzzyPathSearch2.default(normalizedFiles);
                            _this3.hasIndexedFiles = true;
                            resolve();

                          case 19:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this3);
                  }));

                  return function (_x3) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function indexFiles() {
        return _ref2.apply(this, arguments);
      }

      return indexFiles;
    }()
  }]);

  return SuggestionProvider;
}(_react2.default.Component);

exports.default = SuggestionProvider;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _diacritics = __webpack_require__(325);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Search for keywords inside a list of files and folders, while being permissive regardig the order of words
var FuzzyPathSearch = function () {
  function FuzzyPathSearch() {
    var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, FuzzyPathSearch);

    // files must have a `path` and `name` property
    this.files = files;
    this.previousQuery = [];
    this.previousSuggestions = files;
  }

  _createClass(FuzzyPathSearch, [{
    key: 'search',
    value: function search(query) {
      if (!query) return [];

      var queryArray = (0, _diacritics.remove)(query.replace(/\//g, ' ').trim().toLowerCase()).split(' ');
      var preparedQuery = queryArray.map(function (word) {
        return {
          word: word,
          isAugmentedWord: false,
          isNewWord: true
        };
      });

      var isQueryAugmented = this.isAugmentingPreviousQuery(preparedQuery);
      var sortedQuery = isQueryAugmented ? this.sortQueryByRevelance(preparedQuery) : this.sortQuerybyLength(preparedQuery);
      var suggestions = void 0;

      if (isQueryAugmented && this.previousSuggestions.length !== 0) {
        // the new query is just a more selective version of the previous one, so we narrow down the existing list
        suggestions = this.filterAndScore(this.previousSuggestions, sortedQuery.map(function (segment) {
          return segment.word;
        }));
      } else {
        suggestions = this.filterAndScore(this.files, sortedQuery.map(function (segment) {
          return segment.word;
        }));
      }

      this.previousQuery = sortedQuery;
      this.previousSuggestions = suggestions;

      return suggestions;
    }
  }, {
    key: 'isAugmentingPreviousQuery',
    value: function isAugmentingPreviousQuery(query) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = query[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var currentQuerySegment = _step.value;

          var isInPreviousQuery = false;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.previousQuery[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var previousQuerySegment = _step2.value;

              if (currentQuerySegment.word.includes(previousQuerySegment.word)) {
                isInPreviousQuery = true;
                break;
              }
            }

            // we found a word in the current query that was not included in the previous query, so we consider it a completely new query
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (isInPreviousQuery === false) return false;
        }

        // all words are in the previous query
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }, {
    key: 'sortQueryByRevelance',
    value: function sortQueryByRevelance(query) {
      // query terms are sorted in two categories: those that are new or have changed, and therefore may further reduce the set of results, are prioritzed. Those that were there and have not changed come second.
      // finally, longer words are placed first to allow discarding files earlier in the scoring loop
      var priorizedWords = [];
      var wordsFromPreviousQuery = [];

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = query[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var currentQuerySegment = _step3.value;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.previousQuery[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var previousQuerySegment = _step4.value;

              if (currentQuerySegment.word.includes(previousQuerySegment.word)) {
                if (currentQuerySegment.word !== previousQuerySegment.word) {
                  currentQuerySegment.isAugmentedWord = true;
                  priorizedWords.push(currentQuerySegment);
                } else {
                  currentQuerySegment.isNewWord = false;
                  wordsFromPreviousQuery.push(currentQuerySegment);
                }

                continue;
              }
            }

            // this segment wasn't included in any previous query segment so it's a new word and we prioritize it
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          priorizedWords.push(currentQuerySegment);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return this.sortQuerybyLength(priorizedWords).concat(this.sortQuerybyLength(wordsFromPreviousQuery));
    }
  }, {
    key: 'sortQuerybyLength',
    value: function sortQuerybyLength(query) {
      return query.sort(function (a, b) {
        return b.word.length - a.word.length;
      });
    }
  }, {
    key: 'filterAndScore',
    value: function filterAndScore(files, words) {
      var suggestions = [];

      files.forEach(function (file) {
        var fileScore = 0;

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = words[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var word = _step5.value;

            // let the magic begin...
            // essentialy, matched words that are at the end of the path get better scores
            var wordScore = 0;
            var wordOccurenceValue = 10000;
            var firstOccurence = true;
            var pathArray = (0, _diacritics.remove)((file.path + '/' + file.name).toLowerCase()).split('/');
            var maxDepth = pathArray.length;

            for (var depth = 0; depth < maxDepth; ++depth) {
              var dirName = pathArray[depth];

              if (dirName.includes(word)) {
                if (firstOccurence) {
                  wordOccurenceValue = 52428800; // that's 2^19 * 100
                  wordScore += wordOccurenceValue / 2 * (1 + word.length / dirName.length);
                  firstOccurence = false;
                } else {
                  wordScore -= wordOccurenceValue * (1 - word.length / dirName.length);
                }

                wordOccurenceValue /= 2;
              } else {
                wordScore -= wordOccurenceValue;
                wordOccurenceValue /= 2;
                if (depth === maxDepth - 1) {
                  // make the penality bigger if the last part of the path doesn't include the word at all
                  wordScore /= 2;
                }
              }

              wordOccurenceValue /= 2;
            }

            if (wordScore < 0) return;

            fileScore += wordScore;
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        if (fileScore > 0) {
          suggestions.push({
            file: file,
            score: fileScore
          });
        }
      });

      suggestions.sort(function (a, b) {
        var score = a.score - b.score;
        return score !== 0 ? score : a.file.path.localeCompare(b.file.path);
      });

      return suggestions.map(function (suggestion) {
        return suggestion.file;
      });
    }
  }]);

  return FuzzyPathSearch;
}();

exports.default = FuzzyPathSearch;

/***/ })
/******/ ]);
//# sourceMappingURL=services.js.map