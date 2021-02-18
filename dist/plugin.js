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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_updateElevation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/updateElevation */ "./src/modules/updateElevation.ts");
/* harmony import */ var _modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getCurrentContainer */ "./src/modules/getCurrentContainer.ts");
/* harmony import */ var _modules_refreshUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/refreshUi */ "./src/modules/refreshUi.ts");
/* harmony import */ var _modules_addNewContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addNewContainer */ "./src/modules/addNewContainer.ts");
/* harmony import */ var _modules_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/defaults */ "./src/modules/defaults.ts");





/**
 * This is were the execution of the plugin starts
 */
Object(_modules_refreshUi__WEBPACK_IMPORTED_MODULE_2__["default"])(figma, Object(_modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(figma));
// run code on commands from UI
figma.ui.onmessage = msg => {
    // create a new scale
    if (msg.type === 'createScale') {
        // create new container
        const newContainer = Object(_modules_addNewContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(figma);
        // update container
        Object(_modules_updateElevation__WEBPACK_IMPORTED_MODULE_0__["default"])(figma, newContainer, Object.assign({ type: 'updateScale' }, _modules_defaults__WEBPACK_IMPORTED_MODULE_4__["ELEVATION_DEFAULTS"]));
    }
    // update an exsisting scale
    if (msg.type === 'updateScale') {
        Object(_modules_updateElevation__WEBPACK_IMPORTED_MODULE_0__["default"])(figma, Object(_modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(figma), msg);
    }
};
// update ui if selection changes
figma.on('selectionchange', () => {
    Object(_modules_refreshUi__WEBPACK_IMPORTED_MODULE_2__["default"])(figma, Object(_modules_getCurrentContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(figma));
});


/***/ }),

/***/ "./src/modules/addNewContainer.ts":
/*!****************************************!*\
  !*** ./src/modules/addNewContainer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createContainer */ "./src/modules/createContainer.ts");
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults */ "./src/modules/defaults.ts");



/* harmony default export */ __webpack_exports__["default"] = ((figma) => {
    // create new container
    const container = Object(_createContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(figma);
    // append to current page
    figma.currentPage.appendChild(container);
    // add default data
    Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["setContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS, _defaults__WEBPACK_IMPORTED_MODULE_2__["ELEVATION_DEFAULTS"]);
    // select new container
    return container;
});


/***/ }),

/***/ "./src/modules/containerStore.ts":
/*!***************************************!*\
  !*** ./src/modules/containerStore.ts ***!
  \***************************************/
/*! exports provided: storeKeys, setContainerData, getContainerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeys", function() { return storeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContainerData", function() { return setContainerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainerData", function() { return getContainerData; });
const storeKeys = {
    ELEVATION_SETTNGS: 'elevationSettings'
};
const isValidContainer = (container) => {
    if (container !== undefined && container !== null) {
        return true;
    }
    return false;
};
const setContainerData = (container, key, data) => {
    if (isValidContainer(container)) {
        if (typeof data === 'object') {
            container.setPluginData(key, JSON.stringify(data));
        }
        if (typeof data === 'number' || typeof data === 'string') {
            container.setPluginData(key, data);
        }
    }
};
const getContainerData = (container, key) => {
    if (isValidContainer(container)) {
        try {
            const jsonString = JSON.parse(container.getPluginData(key));
            return jsonString;
        }
        catch (e) {
        }
        return container.getPluginData(key);
    }
    return null;
};


/***/ }),

/***/ "./src/modules/createContainer.ts":
/*!****************************************!*\
  !*** ./src/modules/createContainer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SETTINGS = {
    NAME: 'Elevation Scale',
    LAYOUT_MODE: 'VERTICAL',
    SPACING: 20,
    PADDING: 20
};
/* harmony default export */ __webpack_exports__["default"] = ((figma) => {
    const container = figma.createFrame();
    container.name = SETTINGS.NAME;
    container.layoutMode = SETTINGS.LAYOUT_MODE;
    container.itemSpacing = SETTINGS.SPACING;
    container.paddingTop = SETTINGS.PADDING;
    container.paddingRight = SETTINGS.PADDING;
    container.paddingBottom = SETTINGS.PADDING;
    container.paddingLeft = SETTINGS.PADDING;
    container.primaryAxisSizingMode = 'AUTO';
    container.counterAxisSizingMode = 'AUTO';
    // return container
    return container;
});


/***/ }),

/***/ "./src/modules/createElevationLayer.ts":
/*!*********************************************!*\
  !*** ./src/modules/createElevationLayer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseValue */ "./src/modules/parseValue.ts");
/* harmony import */ var _hexToRgba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hexToRgba */ "./src/modules/hexToRgba.ts");


const allowedEffectType = ['DROP_SHADOW', 'INNER_SHADOW'];
/* harmony default export */ __webpack_exports__["default"] = ((index, layer) => {
    return {
        // define elevation
        name: layer.name,
        type: allowedEffectType.includes(layer.type) ? layer.type : 'DROP_SHADOW',
        color: Object(_hexToRgba__WEBPACK_IMPORTED_MODULE_1__["default"])(layer.color, Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.opacity, index)),
        offset: {
            x: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.x, index),
            y: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.y, index)
        },
        spread: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.spread, index),
        radius: Object(_parseValue__WEBPACK_IMPORTED_MODULE_0__["default"])(layer.radius, index),
        // defaults
        blendMode: 'NORMAL',
        visible: true
    };
});


/***/ }),

/***/ "./src/modules/createPreviewElement.ts":
/*!*********************************************!*\
  !*** ./src/modules/createPreviewElement.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const SETTINGS = {
    WIDTH: 320,
    HEIGHT: 120,
    RADIUS: 5,
    NAME: 'Elevation'
};
/* harmony default export */ __webpack_exports__["default"] = ((index, elevationLayers) => {
    // remove name from layers
    const effects = elevationLayers.map(layer => {
        const { name } = layer, effects = __rest(layer
        // retuzrn effects only
        , ["name"]);
        // retuzrn effects only
        return effects;
    });
    // create element
    const element = figma.createRectangle();
    // set name
    element.name = `${SETTINGS.NAME} ${index}`;
    // set size
    element.resizeWithoutConstraints(SETTINGS.WIDTH, SETTINGS.HEIGHT);
    // set radius
    element.cornerRadius = SETTINGS.RADIUS;
    // set fill to white
    element.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    // set elevation
    element.effects = effects;
    // return
    return element;
});


/***/ }),

/***/ "./src/modules/createStyles.ts":
/*!*************************************!*\
  !*** ./src/modules/createStyles.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* harmony default export */ __webpack_exports__["default"] = ((elevation, styleId = null, styleName = 'Elevation') => {
    // get or create new style
    const style = figma.getStyleById(styleId) || figma.createEffectStyle();
    // set style name
    style.name = styleName;
    // set effects
    const effects = elevation.map(layer => {
        const { name } = layer, effects = __rest(layer
        // retuzrn effects only
        , ["name"]);
        // retuzrn effects only
        return effects;
    });
    style.effects = effects;
    return style;
});


/***/ }),

/***/ "./src/modules/defaults.ts":
/*!*********************************!*\
  !*** ./src/modules/defaults.ts ***!
  \*********************************/
/*! exports provided: ELEVATION_DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEVATION_DEFAULTS", function() { return ELEVATION_DEFAULTS; });
const ELEVATION_DEFAULTS = {
    name: 'Elevation',
    steps: 5,
    createStyles: false,
    elevationLayer: [{
            type: 'dropshadow',
            color: '000000',
            opacity: '10+#',
            x: 0,
            y: '0.5*#',
            spread: '2*#',
            radius: '#'
        }],
    styles: []
};


/***/ }),

/***/ "./src/modules/getCurrentContainer.ts":
/*!********************************************!*\
  !*** ./src/modules/getCurrentContainer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");

/* harmony default export */ __webpack_exports__["default"] = ((figma) => {
    // get current selection
    const currentSelection = figma.currentPage.selection[0];
    // return if frame
    if (currentSelection !== undefined && currentSelection.type === 'FRAME' && Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(currentSelection, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS)) {
        return currentSelection;
    }
    //
    return null;
});


/***/ }),

/***/ "./src/modules/hexToRgba.ts":
/*!**********************************!*\
  !*** ./src/modules/hexToRgba.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minMax */ "./src/modules/minMax.ts");

/* harmony default export */ __webpack_exports__["default"] = ((hex, opacity) => {
    // extract rgb from hex
    const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // return rgb
    return {
        r: parseInt(r) / 255,
        g: parseInt(g) / 255,
        b: parseInt(b) / 255,
        a: Object(_minMax__WEBPACK_IMPORTED_MODULE_0__["default"])(parseInt(opacity, 10) / 100, 0, 1)
    };
});


/***/ }),

/***/ "./src/modules/minMax.ts":
/*!*******************************!*\
  !*** ./src/modules/minMax.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((number, min, max) => {
    // return min if number smaller
    if (number < min) {
        return min;
    }
    // return max if number bigger
    if (number > max) {
        return max;
    }
    // return number if between
    return number;
});


/***/ }),

/***/ "./src/modules/parseValue.ts":
/*!***********************************!*\
  !*** ./src/modules/parseValue.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const placeholders = {
    INDEX: '#'
};
/* harmony default export */ __webpack_exports__["default"] = ((value, index) => {
    // replace placeholders in string
    if (typeof value === 'string') {
        value = value
            // replace comma
            .replace(',', '.')
            // replace space
            .replace(' ', '')
            // replace 0 at beginning
            .replace(/^0+/i, '')
            // replace 0 after char
            .replace(/(\+|\*|\/|-|#)(0)(.)/i, '$1')
            // replace placeholder with index
            .replace(placeholders.INDEX, index);
        // replace leading zeros
    }
    // eval and parse int
    try {
        value = parseFloat(eval(value));
        if (!isNaN(value)) {
            return value;
        }
    }
    catch (e) {
        console.error(e);
    }
    return 0;
});


/***/ }),

/***/ "./src/modules/refreshUi.ts":
/*!**********************************!*\
  !*** ./src/modules/refreshUi.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");
/* harmony import */ var _minMax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minMax */ "./src/modules/minMax.ts");


const SETTINGS = {
    LAYER_SIZE: 40,
    BASE_SIZE: 562,
    UI_WIDTH: 360,
    EMPTY_STATE_WIDTH: 360,
    EMPTY_STATE_HEIGHT: 160
};
/* harmony default export */ __webpack_exports__["default"] = ((figma, container) => {
    // show the html ui
    figma.showUI(__html__, {
        width: SETTINGS.EMPTY_STATE_WIDTH,
        height: SETTINGS.EMPTY_STATE_HEIGHT
    });
    // if selected container
    if (container !== null) {
        const elevationProperties = Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS);
        // calc height for UI window
        const UI_HEIGHT = Math.round(Object(_minMax__WEBPACK_IMPORTED_MODULE_1__["default"])(SETTINGS.BASE_SIZE + SETTINGS.LAYER_SIZE * (elevationProperties.elevationLayer.length + 2), 300, figma.viewport.bounds.height - 80));
        // update UI size
        figma.ui.resize(SETTINGS.UI_WIDTH, UI_HEIGHT);
        // send data to UI
        figma.ui.postMessage(JSON.stringify({
            type: 'updateProperties',
            properties: elevationProperties
        }));
    }
    // if no container is selected
    else {
        figma.ui.postMessage(JSON.stringify({
            type: 'emptyState'
        }));
    }
});


/***/ }),

/***/ "./src/modules/updateElevation.ts":
/*!****************************************!*\
  !*** ./src/modules/updateElevation.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyles */ "./src/modules/createStyles.ts");
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");
/* harmony import */ var _createPreviewElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPreviewElement */ "./src/modules/createPreviewElement.ts");
/* harmony import */ var _createElevationLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElevationLayer */ "./src/modules/createElevationLayer.ts");




/* harmony default export */ __webpack_exports__["default"] = ((figma, container, data) => {
    const focusNodes = [];
    // remove children nodes
    data.steps = parseInt(data.steps);
    container.children.forEach(child => child.remove());
    // get styles
    const containerData = Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["getContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS);
    data.styles = containerData.styles || [];
    // add updated children nodes
    for (let i = 0; i < data.steps; i++) {
        // get elevation
        const elevation = [...data.elevationLayer].map(layer => {
            return Object(_createElevationLayer__WEBPACK_IMPORTED_MODULE_3__["default"])(i, layer);
        });
        // elevation name
        const elevationName = `Elevation / ${i}`;
        // create elements
        const previewElements = Object(_createPreviewElement__WEBPACK_IMPORTED_MODULE_2__["default"])(i, elevation);
        // append to container
        container.appendChild(previewElements);
        focusNodes.push(previewElements);
        // create styles
        if (data.createStyles === true) {
            const style = Object(_createStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(elevation, data.styles[i] || null, elevationName);
            data.styles[i] = style.id;
        }
    }
    // zoom to container if new
    figma.viewport.scrollAndZoomIntoView(focusNodes);
    // elevation settings
    Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["setContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS, data);
    // append & select
    figma.currentPage.selection = [container];
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FkZE5ld0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250YWluZXJTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlRWxldmF0aW9uTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJldmlld0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2RlZmF1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dldEN1cnJlbnRDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGV4VG9SZ2JhLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL21pbk1heC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYXJzZVZhbHVlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3JlZnJlc2hVaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91cGRhdGVFbGV2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFDUTtBQUNwQjtBQUNZO0FBQ0E7QUFDeEQ7QUFDQTtBQUNBO0FBQ0Esa0VBQVMsUUFBUSw0RUFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3RUFBZTtBQUM1QztBQUNBLFFBQVEsd0VBQWUscUNBQXFDLHNCQUFzQixFQUFFLG9FQUFrQjtBQUN0RztBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFlLFFBQVEsNEVBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBUyxRQUFRLDRFQUFtQjtBQUN4QyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUJEO0FBQUE7QUFBQTtBQUFBO0FBQWdEO0FBQ2U7QUFDZjtBQUNqQztBQUNmO0FBQ0Esc0JBQXNCLGdFQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWdCLFlBQVkseURBQVMsb0JBQW9CLDREQUFrQjtBQUMvRTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDWkY7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbkJGO0FBQUE7QUFBQTtBQUFzQztBQUNGO0FBQ3BDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMERBQVMsY0FBYywyREFBVTtBQUNoRDtBQUNBLGVBQWUsMkRBQVU7QUFDekIsZUFBZSwyREFBVTtBQUN6QixTQUFTO0FBQ1QsZ0JBQWdCLDJEQUFVO0FBQzFCLGdCQUFnQiwyREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ25CRjtBQUFBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixjQUFjLEdBQUcsTUFBTTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QixtQkFBbUIsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hDRjtBQUFBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzFCRjtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQStEO0FBQ2hEO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHdFQUFnQixtQkFBbUIseURBQVM7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNWRjtBQUFBO0FBQThCO0FBQ2Y7QUFDZjtBQUNBLHFDQUFxQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQU07QUFDakI7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRjtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRjtBQUFBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzlCRjtBQUFBO0FBQUE7QUFBK0Q7QUFDakM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0Msd0VBQWdCLFlBQVkseURBQVM7QUFDekU7QUFDQSxxQ0FBcUMsdURBQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUN1QztBQUN2QjtBQUNBO0FBQzNDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3RUFBZ0IsWUFBWSx5REFBUztBQUMvRDtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsbUJBQW1CLHFFQUFvQjtBQUN2QyxTQUFTO0FBQ1Q7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBLGdDQUFnQyxxRUFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2REFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFnQixZQUFZLHlEQUFTO0FBQ3pDO0FBQ0E7QUFDQSxDQUFDLEVBQUMiLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgdXBkYXRlRWxldmF0aW9uIGZyb20gJy4vbW9kdWxlcy91cGRhdGVFbGV2YXRpb24nO1xuaW1wb3J0IGdldEN1cnJlbnRDb250YWluZXIgZnJvbSAnLi9tb2R1bGVzL2dldEN1cnJlbnRDb250YWluZXInO1xuaW1wb3J0IHJlZnJlc2hVSSBmcm9tICcuL21vZHVsZXMvcmVmcmVzaFVpJztcbmltcG9ydCBhZGROZXdDb250YWluZXIgZnJvbSAnLi9tb2R1bGVzL2FkZE5ld0NvbnRhaW5lcic7XG5pbXBvcnQgeyBFTEVWQVRJT05fREVGQVVMVFMgfSBmcm9tICcuL21vZHVsZXMvZGVmYXVsdHMnO1xuLyoqXG4gKiBUaGlzIGlzIHdlcmUgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgcGx1Z2luIHN0YXJ0c1xuICovXG5yZWZyZXNoVUkoZmlnbWEsIGdldEN1cnJlbnRDb250YWluZXIoZmlnbWEpKTtcbi8vIHJ1biBjb2RlIG9uIGNvbW1hbmRzIGZyb20gVUlcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgLy8gY3JlYXRlIGEgbmV3IHNjYWxlXG4gICAgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlU2NhbGUnKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IGFkZE5ld0NvbnRhaW5lcihmaWdtYSk7XG4gICAgICAgIC8vIHVwZGF0ZSBjb250YWluZXJcbiAgICAgICAgdXBkYXRlRWxldmF0aW9uKGZpZ21hLCBuZXdDb250YWluZXIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiAndXBkYXRlU2NhbGUnIH0sIEVMRVZBVElPTl9ERUZBVUxUUykpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgYW4gZXhzaXN0aW5nIHNjYWxlXG4gICAgaWYgKG1zZy50eXBlID09PSAndXBkYXRlU2NhbGUnKSB7XG4gICAgICAgIHVwZGF0ZUVsZXZhdGlvbihmaWdtYSwgZ2V0Q3VycmVudENvbnRhaW5lcihmaWdtYSksIG1zZyk7XG4gICAgfVxufTtcbi8vIHVwZGF0ZSB1aSBpZiBzZWxlY3Rpb24gY2hhbmdlc1xuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICByZWZyZXNoVUkoZmlnbWEsIGdldEN1cnJlbnRDb250YWluZXIoZmlnbWEpKTtcbn0pO1xuIiwiaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tICcuL2NyZWF0ZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBzZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmltcG9ydCB7IEVMRVZBVElPTl9ERUZBVUxUUyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hKSA9PiB7XG4gICAgLy8gY3JlYXRlIG5ldyBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoZmlnbWEpO1xuICAgIC8vIGFwcGVuZCB0byBjdXJyZW50IHBhZ2VcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIC8vIGFkZCBkZWZhdWx0IGRhdGFcbiAgICBzZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTLCBFTEVWQVRJT05fREVGQVVMVFMpO1xuICAgIC8vIHNlbGVjdCBuZXcgY29udGFpbmVyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4iLCJleHBvcnQgY29uc3Qgc3RvcmVLZXlzID0ge1xuICAgIEVMRVZBVElPTl9TRVRUTkdTOiAnZWxldmF0aW9uU2V0dGluZ3MnXG59O1xuY29uc3QgaXNWYWxpZENvbnRhaW5lciA9IChjb250YWluZXIpID0+IHtcbiAgICBpZiAoY29udGFpbmVyICE9PSB1bmRlZmluZWQgJiYgY29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IHNldENvbnRhaW5lckRhdGEgPSAoY29udGFpbmVyLCBrZXksIGRhdGEpID0+IHtcbiAgICBpZiAoaXNWYWxpZENvbnRhaW5lcihjb250YWluZXIpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0UGx1Z2luRGF0YShrZXksIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBnZXRDb250YWluZXJEYXRhID0gKGNvbnRhaW5lciwga2V5KSA9PiB7XG4gICAgaWYgKGlzVmFsaWRDb250YWluZXIoY29udGFpbmVyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvblN0cmluZyA9IEpTT04ucGFyc2UoY29udGFpbmVyLmdldFBsdWdpbkRhdGEoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4ganNvblN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXIuZ2V0UGx1Z2luRGF0YShrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJjb25zdCBTRVRUSU5HUyA9IHtcbiAgICBOQU1FOiAnRWxldmF0aW9uIFNjYWxlJyxcbiAgICBMQVlPVVRfTU9ERTogJ1ZFUlRJQ0FMJyxcbiAgICBTUEFDSU5HOiAyMCxcbiAgICBQQURESU5HOiAyMFxufTtcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgY29udGFpbmVyLm5hbWUgPSBTRVRUSU5HUy5OQU1FO1xuICAgIGNvbnRhaW5lci5sYXlvdXRNb2RlID0gU0VUVElOR1MuTEFZT1VUX01PREU7XG4gICAgY29udGFpbmVyLml0ZW1TcGFjaW5nID0gU0VUVElOR1MuU1BBQ0lORztcbiAgICBjb250YWluZXIucGFkZGluZ1RvcCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdSaWdodCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdCb3R0b20gPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nTGVmdCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJztcbiAgICBjb250YWluZXIuY291bnRlckF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xuICAgIC8vIHJldHVybiBjb250YWluZXJcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbiIsImltcG9ydCBwYXJzZVZhbHVlIGZyb20gJy4vcGFyc2VWYWx1ZSc7XG5pbXBvcnQgaGV4VG9SZ2JhIGZyb20gJy4vaGV4VG9SZ2JhJztcbmNvbnN0IGFsbG93ZWRFZmZlY3RUeXBlID0gWydEUk9QX1NIQURPVycsICdJTk5FUl9TSEFET1cnXTtcbmV4cG9ydCBkZWZhdWx0IChpbmRleCwgbGF5ZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBkZWZpbmUgZWxldmF0aW9uXG4gICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgIHR5cGU6IGFsbG93ZWRFZmZlY3RUeXBlLmluY2x1ZGVzKGxheWVyLnR5cGUpID8gbGF5ZXIudHlwZSA6ICdEUk9QX1NIQURPVycsXG4gICAgICAgIGNvbG9yOiBoZXhUb1JnYmEobGF5ZXIuY29sb3IsIHBhcnNlVmFsdWUobGF5ZXIub3BhY2l0eSwgaW5kZXgpKSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICB4OiBwYXJzZVZhbHVlKGxheWVyLngsIGluZGV4KSxcbiAgICAgICAgICAgIHk6IHBhcnNlVmFsdWUobGF5ZXIueSwgaW5kZXgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwcmVhZDogcGFyc2VWYWx1ZShsYXllci5zcHJlYWQsIGluZGV4KSxcbiAgICAgICAgcmFkaXVzOiBwYXJzZVZhbHVlKGxheWVyLnJhZGl1cywgaW5kZXgpLFxuICAgICAgICAvLyBkZWZhdWx0c1xuICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfTtcbn07XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBXSURUSDogMzIwLFxuICAgIEhFSUdIVDogMTIwLFxuICAgIFJBRElVUzogNSxcbiAgICBOQU1FOiAnRWxldmF0aW9uJ1xufTtcbmV4cG9ydCBkZWZhdWx0IChpbmRleCwgZWxldmF0aW9uTGF5ZXJzKSA9PiB7XG4gICAgLy8gcmVtb3ZlIG5hbWUgZnJvbSBsYXllcnNcbiAgICBjb25zdCBlZmZlY3RzID0gZWxldmF0aW9uTGF5ZXJzLm1hcChsYXllciA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbGF5ZXIsIGVmZmVjdHMgPSBfX3Jlc3QobGF5ZXJcbiAgICAgICAgLy8gcmV0dXpybiBlZmZlY3RzIG9ubHlcbiAgICAgICAgLCBbXCJuYW1lXCJdKTtcbiAgICAgICAgLy8gcmV0dXpybiBlZmZlY3RzIG9ubHlcbiAgICAgICAgcmV0dXJuIGVmZmVjdHM7XG4gICAgfSk7XG4gICAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgICBjb25zdCBlbGVtZW50ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgLy8gc2V0IG5hbWVcbiAgICBlbGVtZW50Lm5hbWUgPSBgJHtTRVRUSU5HUy5OQU1FfSAke2luZGV4fWA7XG4gICAgLy8gc2V0IHNpemVcbiAgICBlbGVtZW50LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyhTRVRUSU5HUy5XSURUSCwgU0VUVElOR1MuSEVJR0hUKTtcbiAgICAvLyBzZXQgcmFkaXVzXG4gICAgZWxlbWVudC5jb3JuZXJSYWRpdXMgPSBTRVRUSU5HUy5SQURJVVM7XG4gICAgLy8gc2V0IGZpbGwgdG8gd2hpdGVcbiAgICBlbGVtZW50LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgIC8vIHNldCBlbGV2YXRpb25cbiAgICBlbGVtZW50LmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgIC8vIHJldHVyblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydCBkZWZhdWx0IChlbGV2YXRpb24sIHN0eWxlSWQgPSBudWxsLCBzdHlsZU5hbWUgPSAnRWxldmF0aW9uJykgPT4ge1xuICAgIC8vIGdldCBvciBjcmVhdGUgbmV3IHN0eWxlXG4gICAgY29uc3Qgc3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQoc3R5bGVJZCkgfHwgZmlnbWEuY3JlYXRlRWZmZWN0U3R5bGUoKTtcbiAgICAvLyBzZXQgc3R5bGUgbmFtZVxuICAgIHN0eWxlLm5hbWUgPSBzdHlsZU5hbWU7XG4gICAgLy8gc2V0IGVmZmVjdHNcbiAgICBjb25zdCBlZmZlY3RzID0gZWxldmF0aW9uLm1hcChsYXllciA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbGF5ZXIsIGVmZmVjdHMgPSBfX3Jlc3QobGF5ZXJcbiAgICAgICAgLy8gcmV0dXpybiBlZmZlY3RzIG9ubHlcbiAgICAgICAgLCBbXCJuYW1lXCJdKTtcbiAgICAgICAgLy8gcmV0dXpybiBlZmZlY3RzIG9ubHlcbiAgICAgICAgcmV0dXJuIGVmZmVjdHM7XG4gICAgfSk7XG4gICAgc3R5bGUuZWZmZWN0cyA9IGVmZmVjdHM7XG4gICAgcmV0dXJuIHN0eWxlO1xufTtcbiIsImV4cG9ydCBjb25zdCBFTEVWQVRJT05fREVGQVVMVFMgPSB7XG4gICAgbmFtZTogJ0VsZXZhdGlvbicsXG4gICAgc3RlcHM6IDUsXG4gICAgY3JlYXRlU3R5bGVzOiBmYWxzZSxcbiAgICBlbGV2YXRpb25MYXllcjogW3tcbiAgICAgICAgICAgIHR5cGU6ICdkcm9wc2hhZG93JyxcbiAgICAgICAgICAgIGNvbG9yOiAnMDAwMDAwJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxMCsjJyxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAnMC41KiMnLFxuICAgICAgICAgICAgc3ByZWFkOiAnMiojJyxcbiAgICAgICAgICAgIHJhZGl1czogJyMnXG4gICAgICAgIH1dLFxuICAgIHN0eWxlczogW11cbn07XG4iLCJpbXBvcnQgeyBnZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSkgPT4ge1xuICAgIC8vIGdldCBjdXJyZW50IHNlbGVjdGlvblxuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgLy8gcmV0dXJuIGlmIGZyYW1lXG4gICAgaWYgKGN1cnJlbnRTZWxlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50U2VsZWN0aW9uLnR5cGUgPT09ICdGUkFNRScgJiYgZ2V0Q29udGFpbmVyRGF0YShjdXJyZW50U2VsZWN0aW9uLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MpKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBudWxsO1xufTtcbiIsImltcG9ydCBtaW5NYXggZnJvbSAnLi9taW5NYXgnO1xuZXhwb3J0IGRlZmF1bHQgKGhleCwgb3BhY2l0eSkgPT4ge1xuICAgIC8vIGV4dHJhY3QgcmdiIGZyb20gaGV4XG4gICAgY29uc3QgWywgciwgZywgYl0gPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICAvLyByZXR1cm4gcmdiXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogcGFyc2VJbnQocikgLyAyNTUsXG4gICAgICAgIGc6IHBhcnNlSW50KGcpIC8gMjU1LFxuICAgICAgICBiOiBwYXJzZUludChiKSAvIDI1NSxcbiAgICAgICAgYTogbWluTWF4KHBhcnNlSW50KG9wYWNpdHksIDEwKSAvIDEwMCwgMCwgMSlcbiAgICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChudW1iZXIsIG1pbiwgbWF4KSA9PiB7XG4gICAgLy8gcmV0dXJuIG1pbiBpZiBudW1iZXIgc21hbGxlclxuICAgIGlmIChudW1iZXIgPCBtaW4pIHtcbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgLy8gcmV0dXJuIG1heCBpZiBudW1iZXIgYmlnZ2VyXG4gICAgaWYgKG51bWJlciA+IG1heCkge1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICAvLyByZXR1cm4gbnVtYmVyIGlmIGJldHdlZW5cbiAgICByZXR1cm4gbnVtYmVyO1xufTtcbiIsImNvbnN0IHBsYWNlaG9sZGVycyA9IHtcbiAgICBJTkRFWDogJyMnXG59O1xuZXhwb3J0IGRlZmF1bHQgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIC8vIHJlcGxhY2UgcGxhY2Vob2xkZXJzIGluIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgY29tbWFcbiAgICAgICAgICAgIC5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBzcGFjZVxuICAgICAgICAgICAgLnJlcGxhY2UoJyAnLCAnJylcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgMCBhdCBiZWdpbm5pbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eMCsvaSwgJycpXG4gICAgICAgICAgICAvLyByZXBsYWNlIDAgYWZ0ZXIgY2hhclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhcXCt8XFwqfFxcL3wtfCMpKDApKC4pL2ksICckMScpXG4gICAgICAgICAgICAvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggaW5kZXhcbiAgICAgICAgICAgIC5yZXBsYWNlKHBsYWNlaG9sZGVycy5JTkRFWCwgaW5kZXgpO1xuICAgICAgICAvLyByZXBsYWNlIGxlYWRpbmcgemVyb3NcbiAgICB9XG4gICAgLy8gZXZhbCBhbmQgcGFyc2UgaW50XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KGV2YWwodmFsdWUpKTtcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG4iLCJpbXBvcnQgeyBnZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmltcG9ydCBtaW5NYXggZnJvbSAnLi9taW5NYXgnO1xuY29uc3QgU0VUVElOR1MgPSB7XG4gICAgTEFZRVJfU0laRTogNDAsXG4gICAgQkFTRV9TSVpFOiA1NjIsXG4gICAgVUlfV0lEVEg6IDM2MCxcbiAgICBFTVBUWV9TVEFURV9XSURUSDogMzYwLFxuICAgIEVNUFRZX1NUQVRFX0hFSUdIVDogMTYwXG59O1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hLCBjb250YWluZXIpID0+IHtcbiAgICAvLyBzaG93IHRoZSBodG1sIHVpXG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgIHdpZHRoOiBTRVRUSU5HUy5FTVBUWV9TVEFURV9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBTRVRUSU5HUy5FTVBUWV9TVEFURV9IRUlHSFRcbiAgICB9KTtcbiAgICAvLyBpZiBzZWxlY3RlZCBjb250YWluZXJcbiAgICBpZiAoY29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZXZhdGlvblByb3BlcnRpZXMgPSBnZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICAgICAgLy8gY2FsYyBoZWlnaHQgZm9yIFVJIHdpbmRvd1xuICAgICAgICBjb25zdCBVSV9IRUlHSFQgPSBNYXRoLnJvdW5kKG1pbk1heChTRVRUSU5HUy5CQVNFX1NJWkUgKyBTRVRUSU5HUy5MQVlFUl9TSVpFICogKGVsZXZhdGlvblByb3BlcnRpZXMuZWxldmF0aW9uTGF5ZXIubGVuZ3RoICsgMiksIDMwMCwgZmlnbWEudmlld3BvcnQuYm91bmRzLmhlaWdodCAtIDgwKSk7XG4gICAgICAgIC8vIHVwZGF0ZSBVSSBzaXplXG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShTRVRUSU5HUy5VSV9XSURUSCwgVUlfSEVJR0hUKTtcbiAgICAgICAgLy8gc2VuZCBkYXRhIHRvIFVJXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICd1cGRhdGVQcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGVsZXZhdGlvblByb3BlcnRpZXNcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBpZiBubyBjb250YWluZXIgaXMgc2VsZWN0ZWRcbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdHlwZTogJ2VtcHR5U3RhdGUnXG4gICAgICAgIH0pKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN0eWxlcyBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5pbXBvcnQgeyBnZXRDb250YWluZXJEYXRhLCBzZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmltcG9ydCBjcmVhdGVQcmV2aWV3RWxlbWVudCBmcm9tICcuL2NyZWF0ZVByZXZpZXdFbGVtZW50JztcbmltcG9ydCBjcmVhdGVFbGV2YXRpb25MYXllciBmcm9tICcuL2NyZWF0ZUVsZXZhdGlvbkxheWVyJztcbmV4cG9ydCBkZWZhdWx0IChmaWdtYSwgY29udGFpbmVyLCBkYXRhKSA9PiB7XG4gICAgY29uc3QgZm9jdXNOb2RlcyA9IFtdO1xuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBub2Rlc1xuICAgIGRhdGEuc3RlcHMgPSBwYXJzZUludChkYXRhLnN0ZXBzKTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5yZW1vdmUoKSk7XG4gICAgLy8gZ2V0IHN0eWxlc1xuICAgIGNvbnN0IGNvbnRhaW5lckRhdGEgPSBnZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICBkYXRhLnN0eWxlcyA9IGNvbnRhaW5lckRhdGEuc3R5bGVzIHx8IFtdO1xuICAgIC8vIGFkZCB1cGRhdGVkIGNoaWxkcmVuIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnN0ZXBzOyBpKyspIHtcbiAgICAgICAgLy8gZ2V0IGVsZXZhdGlvblxuICAgICAgICBjb25zdCBlbGV2YXRpb24gPSBbLi4uZGF0YS5lbGV2YXRpb25MYXllcl0ubWFwKGxheWVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGV2YXRpb25MYXllcihpLCBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbGV2YXRpb24gbmFtZVxuICAgICAgICBjb25zdCBlbGV2YXRpb25OYW1lID0gYEVsZXZhdGlvbiAvICR7aX1gO1xuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgcHJldmlld0VsZW1lbnRzID0gY3JlYXRlUHJldmlld0VsZW1lbnQoaSwgZWxldmF0aW9uKTtcbiAgICAgICAgLy8gYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJldmlld0VsZW1lbnRzKTtcbiAgICAgICAgZm9jdXNOb2Rlcy5wdXNoKHByZXZpZXdFbGVtZW50cyk7XG4gICAgICAgIC8vIGNyZWF0ZSBzdHlsZXNcbiAgICAgICAgaWYgKGRhdGEuY3JlYXRlU3R5bGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGNyZWF0ZVN0eWxlcyhlbGV2YXRpb24sIGRhdGEuc3R5bGVzW2ldIHx8IG51bGwsIGVsZXZhdGlvbk5hbWUpO1xuICAgICAgICAgICAgZGF0YS5zdHlsZXNbaV0gPSBzdHlsZS5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB6b29tIHRvIGNvbnRhaW5lciBpZiBuZXdcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZm9jdXNOb2Rlcyk7XG4gICAgLy8gZWxldmF0aW9uIHNldHRpbmdzXG4gICAgc2V0Q29udGFpbmVyRGF0YShjb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUywgZGF0YSk7XG4gICAgLy8gYXBwZW5kICYgc2VsZWN0XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2NvbnRhaW5lcl07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==