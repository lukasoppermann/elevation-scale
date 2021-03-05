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
    container.primaryAxisSizingMode = 'AUTO';
    container.counterAxisSizingMode = 'AUTO';
    container.itemSpacing = SETTINGS.SPACING;
    container.paddingTop = SETTINGS.PADDING;
    container.paddingRight = SETTINGS.PADDING;
    container.paddingBottom = SETTINGS.PADDING;
    container.paddingLeft = SETTINGS.PADDING;
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

/***/ "./src/modules/createStyle.ts":
/*!************************************!*\
  !*** ./src/modules/createStyle.ts ***!
  \************************************/
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
    // replace if missing
    if (styleName === null || styleName.trim() === '') {
        style.name = 'Elevation';
    }
    // set effects
    const effects = elevation.map(layer => {
        const { name } = layer, effects = __rest(layer
        // return effects only
        , ["name"]);
        // return effects only
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
    containerId: null,
    steps: 5,
    createStyles: false,
    elevationLayer: [{
            type: 'DROP_SHADOW',
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

/***/ "./src/modules/fixDuplicate.ts":
/*!*************************************!*\
  !*** ./src/modules/fixDuplicate.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");

/* harmony default export */ __webpack_exports__["default"] = (currentContainer => {
    const containerData = Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(currentContainer, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS);
    // remove styles if container was duplicated
    if (containerData.containerId !== null && containerData.containerId !== currentContainer.id) {
        containerData.styles = [];
        containerData.createStyles = false;
    }
    // add container id
    containerData.containerId = currentContainer.id;
    // update container data
    Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["setContainerData"])(currentContainer, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS, containerData);
});


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
/* harmony import */ var _fixDuplicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixDuplicate */ "./src/modules/fixDuplicate.ts");


/* harmony default export */ __webpack_exports__["default"] = ((figma) => {
    // get current selection
    const currentSelection = figma.currentPage.selection[0];
    // return if frame
    if (currentSelection !== undefined && currentSelection.type === 'FRAME' && Object(_containerStore__WEBPACK_IMPORTED_MODULE_0__["getContainerData"])(currentSelection, _containerStore__WEBPACK_IMPORTED_MODULE_0__["storeKeys"].ELEVATION_SETTNGS)) {
        // deal with duplicates
        Object(_fixDuplicate__WEBPACK_IMPORTED_MODULE_1__["default"])(currentSelection);
        // return current container
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
        r: parseInt(r, 16) / 255,
        g: parseInt(g, 16) / 255,
        b: parseInt(b, 16) / 255,
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
        const UI_HEIGHT = 700;
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
/* harmony import */ var _createStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyle */ "./src/modules/createStyle.ts");
/* harmony import */ var _containerStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containerStore */ "./src/modules/containerStore.ts");
/* harmony import */ var _createPreviewElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPreviewElement */ "./src/modules/createPreviewElement.ts");
/* harmony import */ var _createElevationLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElevationLayer */ "./src/modules/createElevationLayer.ts");




/* harmony default export */ __webpack_exports__["default"] = ((figma, container, data) => {
    const focusNodes = [];
    // remove children nodes
    data.steps = parseInt(data.steps);
    container.children.forEach(child => child.remove());
    // get styles & id
    const containerData = Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["getContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS);
    data.containerId = containerData.containerId;
    data.styles = containerData.styles || [];
    // add updated children nodes
    for (let i = 0; i < data.steps; i++) {
        // get elevation
        const elevation = [...data.elevationLayer].map(layer => {
            return Object(_createElevationLayer__WEBPACK_IMPORTED_MODULE_3__["default"])(i, layer);
        });
        // elevation name
        const elevationName = elevationStyleName(i, data.styleName);
        // create elements
        const previewElements = Object(_createPreviewElement__WEBPACK_IMPORTED_MODULE_2__["default"])(i, elevation);
        // append to container
        container.appendChild(previewElements);
        focusNodes.push(previewElements);
        // create styles
        if (data.createStyles === true) {
            const style = Object(_createStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(elevation, data.styles[i] || null, elevationName);
            data.styles[i] = style.id;
        }
        // sync styles is off
        else if (data.styles.length > 0) {
            data.styles.forEach(styleId => {
                figma.getStyleById(styleId).remove();
            });
            // unset styles
            data.styles = [];
        }
    }
    // zoom to container if new
    figma.viewport.scrollAndZoomIntoView(focusNodes);
    // elevation settings
    Object(_containerStore__WEBPACK_IMPORTED_MODULE_1__["setContainerData"])(container, _containerStore__WEBPACK_IMPORTED_MODULE_1__["storeKeys"].ELEVATION_SETTNGS, data);
    // append & select
    figma.currentPage.selection = [container];
});
const elevationStyleName = (i, styleName) => {
    if (styleName !== undefined) {
        const number = String(i).padStart(2, '0');
        if (styleName.indexOf('#') > -1) {
            return styleName.replace('##', number).replace('#', String(i));
        }
        else {
            return `${styleName} ${number}`;
        }
    }
    return null;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FkZE5ld0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250YWluZXJTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jcmVhdGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlRWxldmF0aW9uTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJldmlld0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY3JlYXRlU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZml4RHVwbGljYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dldEN1cnJlbnRDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGV4VG9SZ2JhLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL21pbk1heC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYXJzZVZhbHVlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3JlZnJlc2hVaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91cGRhdGVFbGV2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtR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Ozs7OztBQzlCRjtBQUFBO0FBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DLHdFQUFnQixZQUFZLHlEQUFTO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ3lDO0FBQ3ZCO0FBQ0E7QUFDM0M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdFQUFnQixZQUFZLHlEQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBLG1CQUFtQixxRUFBb0I7QUFDdkMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxRUFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0REFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFnQixZQUFZLHlEQUFTO0FBQ3pDO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVLEdBQUcsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB1cGRhdGVFbGV2YXRpb24gZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZUVsZXZhdGlvbic7XG5pbXBvcnQgZ2V0Q3VycmVudENvbnRhaW5lciBmcm9tICcuL21vZHVsZXMvZ2V0Q3VycmVudENvbnRhaW5lcic7XG5pbXBvcnQgcmVmcmVzaFVJIGZyb20gJy4vbW9kdWxlcy9yZWZyZXNoVWknO1xuaW1wb3J0IGFkZE5ld0NvbnRhaW5lciBmcm9tICcuL21vZHVsZXMvYWRkTmV3Q29udGFpbmVyJztcbmltcG9ydCB7IEVMRVZBVElPTl9ERUZBVUxUUyB9IGZyb20gJy4vbW9kdWxlcy9kZWZhdWx0cyc7XG4vKipcbiAqIFRoaXMgaXMgd2VyZSB0aGUgZXhlY3V0aW9uIG9mIHRoZSBwbHVnaW4gc3RhcnRzXG4gKi9cbnJlZnJlc2hVSShmaWdtYSwgZ2V0Q3VycmVudENvbnRhaW5lcihmaWdtYSkpO1xuLy8gcnVuIGNvZGUgb24gY29tbWFuZHMgZnJvbSBVSVxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAvLyBjcmVhdGUgYSBuZXcgc2NhbGVcbiAgICBpZiAobXNnLnR5cGUgPT09ICdjcmVhdGVTY2FsZScpIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjb250YWluZXJcbiAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyID0gYWRkTmV3Q29udGFpbmVyKGZpZ21hKTtcbiAgICAgICAgLy8gdXBkYXRlIGNvbnRhaW5lclxuICAgICAgICB1cGRhdGVFbGV2YXRpb24oZmlnbWEsIG5ld0NvbnRhaW5lciwgT2JqZWN0LmFzc2lnbih7IHR5cGU6ICd1cGRhdGVTY2FsZScgfSwgRUxFVkFUSU9OX0RFRkFVTFRTKSk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBhbiBleHNpc3Rpbmcgc2NhbGVcbiAgICBpZiAobXNnLnR5cGUgPT09ICd1cGRhdGVTY2FsZScpIHtcbiAgICAgICAgdXBkYXRlRWxldmF0aW9uKGZpZ21hLCBnZXRDdXJyZW50Q29udGFpbmVyKGZpZ21hKSwgbXNnKTtcbiAgICB9XG59O1xuLy8gdXBkYXRlIHVpIGlmIHNlbGVjdGlvbiBjaGFuZ2VzXG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgIHJlZnJlc2hVSShmaWdtYSwgZ2V0Q3VycmVudENvbnRhaW5lcihmaWdtYSkpO1xufSk7XG4iLCJpbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gJy4vY3JlYXRlQ29udGFpbmVyJztcbmltcG9ydCB7IHNldENvbnRhaW5lckRhdGEsIHN0b3JlS2V5cyB9IGZyb20gJy4vY29udGFpbmVyU3RvcmUnO1xuaW1wb3J0IHsgRUxFVkFUSU9OX0RFRkFVTFRTIH0gZnJvbSAnLi9kZWZhdWx0cyc7XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEpID0+IHtcbiAgICAvLyBjcmVhdGUgbmV3IGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcihmaWdtYSk7XG4gICAgLy8gYXBwZW5kIHRvIGN1cnJlbnQgcGFnZVxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgLy8gYWRkIGRlZmF1bHQgZGF0YVxuICAgIHNldENvbnRhaW5lckRhdGEoY29udGFpbmVyLCBzdG9yZUtleXMuRUxFVkFUSU9OX1NFVFROR1MsIEVMRVZBVElPTl9ERUZBVUxUUyk7XG4gICAgLy8gc2VsZWN0IG5ldyBjb250YWluZXJcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbiIsImV4cG9ydCBjb25zdCBzdG9yZUtleXMgPSB7XG4gICAgRUxFVkFUSU9OX1NFVFROR1M6ICdlbGV2YXRpb25TZXR0aW5ncydcbn07XG5jb25zdCBpc1ZhbGlkQ29udGFpbmVyID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIGlmIChjb250YWluZXIgIT09IHVuZGVmaW5lZCAmJiBjb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q29udGFpbmVyRGF0YSA9IChjb250YWluZXIsIGtleSwgZGF0YSkgPT4ge1xuICAgIGlmIChpc1ZhbGlkQ29udGFpbmVyKGNvbnRhaW5lcikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29udGFpbmVyLnNldFBsdWdpbkRhdGEoa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKGtleSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGdldENvbnRhaW5lckRhdGEgPSAoY29udGFpbmVyLCBrZXkpID0+IHtcbiAgICBpZiAoaXNWYWxpZENvbnRhaW5lcihjb250YWluZXIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gSlNPTi5wYXJzZShjb250YWluZXIuZ2V0UGx1Z2luRGF0YShrZXkpKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5nZXRQbHVnaW5EYXRhKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbiIsImNvbnN0IFNFVFRJTkdTID0ge1xuICAgIE5BTUU6ICdFbGV2YXRpb24gU2NhbGUnLFxuICAgIExBWU9VVF9NT0RFOiAnVkVSVElDQUwnLFxuICAgIFNQQUNJTkc6IDIwLFxuICAgIFBBRERJTkc6IDIwXG59O1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBjb250YWluZXIubmFtZSA9IFNFVFRJTkdTLk5BTUU7XG4gICAgY29udGFpbmVyLmxheW91dE1vZGUgPSBTRVRUSU5HUy5MQVlPVVRfTU9ERTtcbiAgICBjb250YWluZXIucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xuICAgIGNvbnRhaW5lci5jb3VudGVyQXhpc1NpemluZ01vZGUgPSAnQVVUTyc7XG4gICAgY29udGFpbmVyLml0ZW1TcGFjaW5nID0gU0VUVElOR1MuU1BBQ0lORztcbiAgICBjb250YWluZXIucGFkZGluZ1RvcCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdSaWdodCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgY29udGFpbmVyLnBhZGRpbmdCb3R0b20gPSBTRVRUSU5HUy5QQURESU5HO1xuICAgIGNvbnRhaW5lci5wYWRkaW5nTGVmdCA9IFNFVFRJTkdTLlBBRERJTkc7XG4gICAgLy8gcmV0dXJuIGNvbnRhaW5lclxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuIiwiaW1wb3J0IHBhcnNlVmFsdWUgZnJvbSAnLi9wYXJzZVZhbHVlJztcbmltcG9ydCBoZXhUb1JnYmEgZnJvbSAnLi9oZXhUb1JnYmEnO1xuY29uc3QgYWxsb3dlZEVmZmVjdFR5cGUgPSBbJ0RST1BfU0hBRE9XJywgJ0lOTkVSX1NIQURPVyddO1xuZXhwb3J0IGRlZmF1bHQgKGluZGV4LCBsYXllcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGRlZmluZSBlbGV2YXRpb25cbiAgICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgdHlwZTogYWxsb3dlZEVmZmVjdFR5cGUuaW5jbHVkZXMobGF5ZXIudHlwZSkgPyBsYXllci50eXBlIDogJ0RST1BfU0hBRE9XJyxcbiAgICAgICAgY29sb3I6IGhleFRvUmdiYShsYXllci5jb2xvciwgcGFyc2VWYWx1ZShsYXllci5vcGFjaXR5LCBpbmRleCkpLFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHg6IHBhcnNlVmFsdWUobGF5ZXIueCwgaW5kZXgpLFxuICAgICAgICAgICAgeTogcGFyc2VWYWx1ZShsYXllci55LCBpbmRleClcbiAgICAgICAgfSxcbiAgICAgICAgc3ByZWFkOiBwYXJzZVZhbHVlKGxheWVyLnNwcmVhZCwgaW5kZXgpLFxuICAgICAgICByYWRpdXM6IHBhcnNlVmFsdWUobGF5ZXIucmFkaXVzLCBpbmRleCksXG4gICAgICAgIC8vIGRlZmF1bHRzXG4gICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICB9O1xufTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmNvbnN0IFNFVFRJTkdTID0ge1xuICAgIFdJRFRIOiAzMjAsXG4gICAgSEVJR0hUOiAxMjAsXG4gICAgUkFESVVTOiA1LFxuICAgIE5BTUU6ICdFbGV2YXRpb24nXG59O1xuZXhwb3J0IGRlZmF1bHQgKGluZGV4LCBlbGV2YXRpb25MYXllcnMpID0+IHtcbiAgICAvLyByZW1vdmUgbmFtZSBmcm9tIGxheWVyc1xuICAgIGNvbnN0IGVmZmVjdHMgPSBlbGV2YXRpb25MYXllcnMubWFwKGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBsYXllciwgZWZmZWN0cyA9IF9fcmVzdChsYXllclxuICAgICAgICAvLyByZXR1enJuIGVmZmVjdHMgb25seVxuICAgICAgICAsIFtcIm5hbWVcIl0pO1xuICAgICAgICAvLyByZXR1enJuIGVmZmVjdHMgb25seVxuICAgICAgICByZXR1cm4gZWZmZWN0cztcbiAgICB9KTtcbiAgICAvLyBjcmVhdGUgZWxlbWVudFxuICAgIGNvbnN0IGVsZW1lbnQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAvLyBzZXQgbmFtZVxuICAgIGVsZW1lbnQubmFtZSA9IGAke1NFVFRJTkdTLk5BTUV9ICR7aW5kZXh9YDtcbiAgICAvLyBzZXQgc2l6ZVxuICAgIGVsZW1lbnQucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKFNFVFRJTkdTLldJRFRILCBTRVRUSU5HUy5IRUlHSFQpO1xuICAgIC8vIHNldCByYWRpdXNcbiAgICBlbGVtZW50LmNvcm5lclJhZGl1cyA9IFNFVFRJTkdTLlJBRElVUztcbiAgICAvLyBzZXQgZmlsbCB0byB3aGl0ZVxuICAgIGVsZW1lbnQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgLy8gc2V0IGVsZXZhdGlvblxuICAgIGVsZW1lbnQuZWZmZWN0cyA9IGVmZmVjdHM7XG4gICAgLy8gcmV0dXJuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgKGVsZXZhdGlvbiwgc3R5bGVJZCA9IG51bGwsIHN0eWxlTmFtZSA9ICdFbGV2YXRpb24nKSA9PiB7XG4gICAgLy8gZ2V0IG9yIGNyZWF0ZSBuZXcgc3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChzdHlsZUlkKSB8fCBmaWdtYS5jcmVhdGVFZmZlY3RTdHlsZSgpO1xuICAgIC8vIHNldCBzdHlsZSBuYW1lXG4gICAgc3R5bGUubmFtZSA9IHN0eWxlTmFtZTtcbiAgICAvLyByZXBsYWNlIGlmIG1pc3NpbmdcbiAgICBpZiAoc3R5bGVOYW1lID09PSBudWxsIHx8IHN0eWxlTmFtZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHN0eWxlLm5hbWUgPSAnRWxldmF0aW9uJztcbiAgICB9XG4gICAgLy8gc2V0IGVmZmVjdHNcbiAgICBjb25zdCBlZmZlY3RzID0gZWxldmF0aW9uLm1hcChsYXllciA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbGF5ZXIsIGVmZmVjdHMgPSBfX3Jlc3QobGF5ZXJcbiAgICAgICAgLy8gcmV0dXJuIGVmZmVjdHMgb25seVxuICAgICAgICAsIFtcIm5hbWVcIl0pO1xuICAgICAgICAvLyByZXR1cm4gZWZmZWN0cyBvbmx5XG4gICAgICAgIHJldHVybiBlZmZlY3RzO1xuICAgIH0pO1xuICAgIHN0eWxlLmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgIHJldHVybiBzdHlsZTtcbn07XG4iLCJleHBvcnQgY29uc3QgRUxFVkFUSU9OX0RFRkFVTFRTID0ge1xuICAgIG5hbWU6ICdFbGV2YXRpb24nLFxuICAgIGNvbnRhaW5lcklkOiBudWxsLFxuICAgIHN0ZXBzOiA1LFxuICAgIGNyZWF0ZVN0eWxlczogZmFsc2UsXG4gICAgZWxldmF0aW9uTGF5ZXI6IFt7XG4gICAgICAgICAgICB0eXBlOiAnRFJPUF9TSEFET1cnLFxuICAgICAgICAgICAgY29sb3I6ICcwMDAwMDAnLFxuICAgICAgICAgICAgb3BhY2l0eTogJzEwKyMnLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6ICcwLjUqIycsXG4gICAgICAgICAgICBzcHJlYWQ6ICcyKiMnLFxuICAgICAgICAgICAgcmFkaXVzOiAnIydcbiAgICAgICAgfV0sXG4gICAgc3R5bGVzOiBbXVxufTtcbiIsImltcG9ydCB7IGdldENvbnRhaW5lckRhdGEsIHNldENvbnRhaW5lckRhdGEsIHN0b3JlS2V5cyB9IGZyb20gJy4vY29udGFpbmVyU3RvcmUnO1xuZXhwb3J0IGRlZmF1bHQgY3VycmVudENvbnRhaW5lciA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyRGF0YSA9IGdldENvbnRhaW5lckRhdGEoY3VycmVudENvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICAvLyByZW1vdmUgc3R5bGVzIGlmIGNvbnRhaW5lciB3YXMgZHVwbGljYXRlZFxuICAgIGlmIChjb250YWluZXJEYXRhLmNvbnRhaW5lcklkICE9PSBudWxsICYmIGNvbnRhaW5lckRhdGEuY29udGFpbmVySWQgIT09IGN1cnJlbnRDb250YWluZXIuaWQpIHtcbiAgICAgICAgY29udGFpbmVyRGF0YS5zdHlsZXMgPSBbXTtcbiAgICAgICAgY29udGFpbmVyRGF0YS5jcmVhdGVTdHlsZXMgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWRkIGNvbnRhaW5lciBpZFxuICAgIGNvbnRhaW5lckRhdGEuY29udGFpbmVySWQgPSBjdXJyZW50Q29udGFpbmVyLmlkO1xuICAgIC8vIHVwZGF0ZSBjb250YWluZXIgZGF0YVxuICAgIHNldENvbnRhaW5lckRhdGEoY3VycmVudENvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTLCBjb250YWluZXJEYXRhKTtcbn07XG4iLCJpbXBvcnQgeyBnZXRDb250YWluZXJEYXRhLCBzdG9yZUtleXMgfSBmcm9tICcuL2NvbnRhaW5lclN0b3JlJztcbmltcG9ydCBmaXhEdXBsaWNhdGUgZnJvbSAnLi9maXhEdXBsaWNhdGUnO1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hKSA9PiB7XG4gICAgLy8gZ2V0IGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICAvLyByZXR1cm4gaWYgZnJhbWVcbiAgICBpZiAoY3VycmVudFNlbGVjdGlvbiAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRTZWxlY3Rpb24udHlwZSA9PT0gJ0ZSQU1FJyAmJiBnZXRDb250YWluZXJEYXRhKGN1cnJlbnRTZWxlY3Rpb24sIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUykpIHtcbiAgICAgICAgLy8gZGVhbCB3aXRoIGR1cGxpY2F0ZXNcbiAgICAgICAgZml4RHVwbGljYXRlKGN1cnJlbnRTZWxlY3Rpb24pO1xuICAgICAgICAvLyByZXR1cm4gY3VycmVudCBjb250YWluZXJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTZWxlY3Rpb247XG4gICAgfVxuICAgIC8vXG4gICAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IG1pbk1heCBmcm9tICcuL21pbk1heCc7XG5leHBvcnQgZGVmYXVsdCAoaGV4LCBvcGFjaXR5KSA9PiB7XG4gICAgLy8gZXh0cmFjdCByZ2IgZnJvbSBoZXhcbiAgICBjb25zdCBbLCByLCBnLCBiXSA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIC8vIHJldHVybiByZ2JcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBwYXJzZUludChyLCAxNikgLyAyNTUsXG4gICAgICAgIGc6IHBhcnNlSW50KGcsIDE2KSAvIDI1NSxcbiAgICAgICAgYjogcGFyc2VJbnQoYiwgMTYpIC8gMjU1LFxuICAgICAgICBhOiBtaW5NYXgocGFyc2VJbnQob3BhY2l0eSwgMTApIC8gMTAwLCAwLCAxKVxuICAgIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKG51bWJlciwgbWluLCBtYXgpID0+IHtcbiAgICAvLyByZXR1cm4gbWluIGlmIG51bWJlciBzbWFsbGVyXG4gICAgaWYgKG51bWJlciA8IG1pbikge1xuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICAvLyByZXR1cm4gbWF4IGlmIG51bWJlciBiaWdnZXJcbiAgICBpZiAobnVtYmVyID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIC8vIHJldHVybiBudW1iZXIgaWYgYmV0d2VlblxuICAgIHJldHVybiBudW1iZXI7XG59O1xuIiwiY29uc3QgcGxhY2Vob2xkZXJzID0ge1xuICAgIElOREVYOiAnIydcbn07XG5leHBvcnQgZGVmYXVsdCAodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgLy8gcmVwbGFjZSBwbGFjZWhvbGRlcnMgaW4gc3RyaW5nXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBjb21tYVxuICAgICAgICAgICAgLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICAgICAgICAvLyByZXBsYWNlIHNwYWNlXG4gICAgICAgICAgICAucmVwbGFjZSgnICcsICcnKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSAwIGF0IGJlZ2lubmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoL14wKy9pLCAnJylcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgMCBhZnRlciBjaGFyXG4gICAgICAgICAgICAucmVwbGFjZSgvKFxcK3xcXCp8XFwvfC18IykoMCkoLikvaSwgJyQxJylcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgcGxhY2Vob2xkZXIgd2l0aCBpbmRleFxuICAgICAgICAgICAgLnJlcGxhY2UocGxhY2Vob2xkZXJzLklOREVYLCBpbmRleCk7XG4gICAgICAgIC8vIHJlcGxhY2UgbGVhZGluZyB6ZXJvc1xuICAgIH1cbiAgICAvLyBldmFsIGFuZCBwYXJzZSBpbnRcbiAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQoZXZhbCh2YWx1ZSkpO1xuICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcbiIsImltcG9ydCB7IGdldENvbnRhaW5lckRhdGEsIHN0b3JlS2V5cyB9IGZyb20gJy4vY29udGFpbmVyU3RvcmUnO1xuY29uc3QgU0VUVElOR1MgPSB7XG4gICAgTEFZRVJfU0laRTogNDAsXG4gICAgQkFTRV9TSVpFOiA1NjIsXG4gICAgVUlfV0lEVEg6IDM2MCxcbiAgICBFTVBUWV9TVEFURV9XSURUSDogMzYwLFxuICAgIEVNUFRZX1NUQVRFX0hFSUdIVDogMTYwXG59O1xuZXhwb3J0IGRlZmF1bHQgKGZpZ21hLCBjb250YWluZXIpID0+IHtcbiAgICAvLyBzaG93IHRoZSBodG1sIHVpXG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgIHdpZHRoOiBTRVRUSU5HUy5FTVBUWV9TVEFURV9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBTRVRUSU5HUy5FTVBUWV9TVEFURV9IRUlHSFRcbiAgICB9KTtcbiAgICAvLyBpZiBzZWxlY3RlZCBjb250YWluZXJcbiAgICBpZiAoY29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZXZhdGlvblByb3BlcnRpZXMgPSBnZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICAgICAgLy8gY2FsYyBoZWlnaHQgZm9yIFVJIHdpbmRvd1xuICAgICAgICBjb25zdCBVSV9IRUlHSFQgPSA3MDA7XG4gICAgICAgIC8vIHVwZGF0ZSBVSSBzaXplXG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShTRVRUSU5HUy5VSV9XSURUSCwgVUlfSEVJR0hUKTtcbiAgICAgICAgLy8gc2VuZCBkYXRhIHRvIFVJXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHR5cGU6ICd1cGRhdGVQcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGVsZXZhdGlvblByb3BlcnRpZXNcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBpZiBubyBjb250YWluZXIgaXMgc2VsZWN0ZWRcbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdHlwZTogJ2VtcHR5U3RhdGUnXG4gICAgICAgIH0pKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN0eWxlIGZyb20gJy4vY3JlYXRlU3R5bGUnO1xuaW1wb3J0IHsgZ2V0Q29udGFpbmVyRGF0YSwgc2V0Q29udGFpbmVyRGF0YSwgc3RvcmVLZXlzIH0gZnJvbSAnLi9jb250YWluZXJTdG9yZSc7XG5pbXBvcnQgY3JlYXRlUHJldmlld0VsZW1lbnQgZnJvbSAnLi9jcmVhdGVQcmV2aWV3RWxlbWVudCc7XG5pbXBvcnQgY3JlYXRlRWxldmF0aW9uTGF5ZXIgZnJvbSAnLi9jcmVhdGVFbGV2YXRpb25MYXllcic7XG5leHBvcnQgZGVmYXVsdCAoZmlnbWEsIGNvbnRhaW5lciwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGZvY3VzTm9kZXMgPSBbXTtcbiAgICAvLyByZW1vdmUgY2hpbGRyZW4gbm9kZXNcbiAgICBkYXRhLnN0ZXBzID0gcGFyc2VJbnQoZGF0YS5zdGVwcyk7XG4gICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICAgIC8vIGdldCBzdHlsZXMgJiBpZFxuICAgIGNvbnN0IGNvbnRhaW5lckRhdGEgPSBnZXRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgc3RvcmVLZXlzLkVMRVZBVElPTl9TRVRUTkdTKTtcbiAgICBkYXRhLmNvbnRhaW5lcklkID0gY29udGFpbmVyRGF0YS5jb250YWluZXJJZDtcbiAgICBkYXRhLnN0eWxlcyA9IGNvbnRhaW5lckRhdGEuc3R5bGVzIHx8IFtdO1xuICAgIC8vIGFkZCB1cGRhdGVkIGNoaWxkcmVuIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnN0ZXBzOyBpKyspIHtcbiAgICAgICAgLy8gZ2V0IGVsZXZhdGlvblxuICAgICAgICBjb25zdCBlbGV2YXRpb24gPSBbLi4uZGF0YS5lbGV2YXRpb25MYXllcl0ubWFwKGxheWVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGV2YXRpb25MYXllcihpLCBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbGV2YXRpb24gbmFtZVxuICAgICAgICBjb25zdCBlbGV2YXRpb25OYW1lID0gZWxldmF0aW9uU3R5bGVOYW1lKGksIGRhdGEuc3R5bGVOYW1lKTtcbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHByZXZpZXdFbGVtZW50cyA9IGNyZWF0ZVByZXZpZXdFbGVtZW50KGksIGVsZXZhdGlvbik7XG4gICAgICAgIC8vIGFwcGVuZCB0byBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZpZXdFbGVtZW50cyk7XG4gICAgICAgIGZvY3VzTm9kZXMucHVzaChwcmV2aWV3RWxlbWVudHMpO1xuICAgICAgICAvLyBjcmVhdGUgc3R5bGVzXG4gICAgICAgIGlmIChkYXRhLmNyZWF0ZVN0eWxlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBjcmVhdGVTdHlsZShlbGV2YXRpb24sIGRhdGEuc3R5bGVzW2ldIHx8IG51bGwsIGVsZXZhdGlvbk5hbWUpO1xuICAgICAgICAgICAgZGF0YS5zdHlsZXNbaV0gPSBzdHlsZS5pZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBzeW5jIHN0eWxlcyBpcyBvZmZcbiAgICAgICAgZWxzZSBpZiAoZGF0YS5zdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGF0YS5zdHlsZXMuZm9yRWFjaChzdHlsZUlkID0+IHtcbiAgICAgICAgICAgICAgICBmaWdtYS5nZXRTdHlsZUJ5SWQoc3R5bGVJZCkucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHVuc2V0IHN0eWxlc1xuICAgICAgICAgICAgZGF0YS5zdHlsZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB6b29tIHRvIGNvbnRhaW5lciBpZiBuZXdcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZm9jdXNOb2Rlcyk7XG4gICAgLy8gZWxldmF0aW9uIHNldHRpbmdzXG4gICAgc2V0Q29udGFpbmVyRGF0YShjb250YWluZXIsIHN0b3JlS2V5cy5FTEVWQVRJT05fU0VUVE5HUywgZGF0YSk7XG4gICAgLy8gYXBwZW5kICYgc2VsZWN0XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2NvbnRhaW5lcl07XG59O1xuY29uc3QgZWxldmF0aW9uU3R5bGVOYW1lID0gKGksIHN0eWxlTmFtZSkgPT4ge1xuICAgIGlmIChzdHlsZU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBTdHJpbmcoaSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgaWYgKHN0eWxlTmFtZS5pbmRleE9mKCcjJykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlTmFtZS5yZXBsYWNlKCcjIycsIG51bWJlcikucmVwbGFjZSgnIycsIFN0cmluZyhpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7c3R5bGVOYW1lfSAke251bWJlcn1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=