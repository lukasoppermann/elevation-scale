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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ui/ui.ts":
/*!**********************!*\
  !*** ./src/ui/ui.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// selections
const elevationLayerTemplate = document.getElementById('elevationLayerTemplate');
const sectionElevationSettings = document.querySelector('[data-section="elevationSettings"]');
const sectionEmptyState = document.querySelector('[data-section="emptyState"]');
const list = document.getElementById('elevationLayers');
const count = document.querySelector('[data-property="count"]');
const createStyles = document.querySelector('[data-property="createStyles"]');
// events
onmessage = ({ data = undefined }) => {
    if (data !== undefined && data.pluginMessage !== undefined) {
        const eventData = JSON.parse(data.pluginMessage);
        if (eventData.type === 'updateProperties') {
            updatePanel(eventData.properties);
        }
        // toggle state
        toggleEmptyState(eventData.type === 'emptyState');
    }
};
const updatePanel = data => {
    count.value = data.count;
    createStyles.checked = (data.createStyles === true);
    data.elevationLayer.forEach(layer => {
        list.appendChild(createShadowLayer(layer));
    });
};
const toggleEmptyState = active => {
    if (active === true) {
        sectionEmptyState.classList.remove('hidden');
        sectionElevationSettings.classList.add('hidden');
        // hide emptyState
    }
    else {
        sectionEmptyState.classList.add('hidden');
        sectionElevationSettings.classList.remove('hidden');
    }
};
const getShadowLayerValues = shadowDetails => {
    const properties = [
        'type',
        'x',
        'y',
        'radius',
        'spread',
        'color',
        'opacity'
    ];
    const propertyValues = {};
    properties.forEach(property => {
        propertyValues[property] = shadowDetails.querySelector(`[data-property="${property}"]`).value;
    });
    // return values
    return propertyValues;
};
const saveShadows = (list) => {
    // get data for each shadow layer
    const elevationLayers = Array.from(list.querySelectorAll('details')).map(shadowDetails => getShadowLayerValues(shadowDetails));
    // send data
    parent.postMessage({
        pluginMessage: {
            type: 'saveShadows',
            count: count.value,
            createStyles: createStyles.checked,
            elevationLayers
        }
    }, '*');
};
// create scale
document.getElementById('createScale').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'createScale' } }, '*');
};
const createShadowLayer = (values = {}) => {
    // get clone
    const clone = elevationLayerTemplate.content.cloneNode(true);
    // replace values
    for (const key in values) {
        clone.querySelector(`[data-property="${key}"]`).value = values[key];
    }
    // return layer
    return clone;
};
document.getElementById('add').onclick = () => {
    list.appendChild(createShadowLayer());
};
list.onclick = (e) => {
    if (e.target.dataset.action === 'deleteItem') {
        e.target.parentNode.parentNode.remove();
    }
};
// append new shadowLayer to list
// list.appendChild(createShadowLayer())


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsU0FBUztBQUMzRixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLHNCQUFzQixFQUFFO0FBQ2pFO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLElBQUk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpL3VpLnRzXCIpO1xuIiwiLy8gc2VsZWN0aW9uc1xuY29uc3QgZWxldmF0aW9uTGF5ZXJUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGV2YXRpb25MYXllclRlbXBsYXRlJyk7XG5jb25zdCBzZWN0aW9uRWxldmF0aW9uU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWN0aW9uPVwiZWxldmF0aW9uU2V0dGluZ3NcIl0nKTtcbmNvbnN0IHNlY3Rpb25FbXB0eVN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VjdGlvbj1cImVtcHR5U3RhdGVcIl0nKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxldmF0aW9uTGF5ZXJzJyk7XG5jb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb3BlcnR5PVwiY291bnRcIl0nKTtcbmNvbnN0IGNyZWF0ZVN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb3BlcnR5PVwiY3JlYXRlU3R5bGVzXCJdJyk7XG4vLyBldmVudHNcbm9ubWVzc2FnZSA9ICh7IGRhdGEgPSB1bmRlZmluZWQgfSkgPT4ge1xuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YS5wbHVnaW5NZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZXZlbnREYXRhID0gSlNPTi5wYXJzZShkYXRhLnBsdWdpbk1lc3NhZ2UpO1xuICAgICAgICBpZiAoZXZlbnREYXRhLnR5cGUgPT09ICd1cGRhdGVQcm9wZXJ0aWVzJykge1xuICAgICAgICAgICAgdXBkYXRlUGFuZWwoZXZlbnREYXRhLnByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRvZ2dsZSBzdGF0ZVxuICAgICAgICB0b2dnbGVFbXB0eVN0YXRlKGV2ZW50RGF0YS50eXBlID09PSAnZW1wdHlTdGF0ZScpO1xuICAgIH1cbn07XG5jb25zdCB1cGRhdGVQYW5lbCA9IGRhdGEgPT4ge1xuICAgIGNvdW50LnZhbHVlID0gZGF0YS5jb3VudDtcbiAgICBjcmVhdGVTdHlsZXMuY2hlY2tlZCA9IChkYXRhLmNyZWF0ZVN0eWxlcyA9PT0gdHJ1ZSk7XG4gICAgZGF0YS5lbGV2YXRpb25MYXllci5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVTaGFkb3dMYXllcihsYXllcikpO1xuICAgIH0pO1xufTtcbmNvbnN0IHRvZ2dsZUVtcHR5U3RhdGUgPSBhY3RpdmUgPT4ge1xuICAgIGlmIChhY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgc2VjdGlvbkVtcHR5U3RhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHNlY3Rpb25FbGV2YXRpb25TZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgLy8gaGlkZSBlbXB0eVN0YXRlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZWN0aW9uRW1wdHlTdGF0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgc2VjdGlvbkVsZXZhdGlvblNldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn07XG5jb25zdCBnZXRTaGFkb3dMYXllclZhbHVlcyA9IHNoYWRvd0RldGFpbHMgPT4ge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3gnLFxuICAgICAgICAneScsXG4gICAgICAgICdyYWRpdXMnLFxuICAgICAgICAnc3ByZWFkJyxcbiAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgJ29wYWNpdHknXG4gICAgXTtcbiAgICBjb25zdCBwcm9wZXJ0eVZhbHVlcyA9IHt9O1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgICAgIHByb3BlcnR5VmFsdWVzW3Byb3BlcnR5XSA9IHNoYWRvd0RldGFpbHMucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvcGVydHk9XCIke3Byb3BlcnR5fVwiXWApLnZhbHVlO1xuICAgIH0pO1xuICAgIC8vIHJldHVybiB2YWx1ZXNcbiAgICByZXR1cm4gcHJvcGVydHlWYWx1ZXM7XG59O1xuY29uc3Qgc2F2ZVNoYWRvd3MgPSAobGlzdCkgPT4ge1xuICAgIC8vIGdldCBkYXRhIGZvciBlYWNoIHNoYWRvdyBsYXllclxuICAgIGNvbnN0IGVsZXZhdGlvbkxheWVycyA9IEFycmF5LmZyb20obGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdkZXRhaWxzJykpLm1hcChzaGFkb3dEZXRhaWxzID0+IGdldFNoYWRvd0xheWVyVmFsdWVzKHNoYWRvd0RldGFpbHMpKTtcbiAgICAvLyBzZW5kIGRhdGFcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc2F2ZVNoYWRvd3MnLFxuICAgICAgICAgICAgY291bnQ6IGNvdW50LnZhbHVlLFxuICAgICAgICAgICAgY3JlYXRlU3R5bGVzOiBjcmVhdGVTdHlsZXMuY2hlY2tlZCxcbiAgICAgICAgICAgIGVsZXZhdGlvbkxheWVyc1xuICAgICAgICB9XG4gICAgfSwgJyonKTtcbn07XG4vLyBjcmVhdGUgc2NhbGVcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVTY2FsZScpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnY3JlYXRlU2NhbGUnIH0gfSwgJyonKTtcbn07XG5jb25zdCBjcmVhdGVTaGFkb3dMYXllciA9ICh2YWx1ZXMgPSB7fSkgPT4ge1xuICAgIC8vIGdldCBjbG9uZVxuICAgIGNvbnN0IGNsb25lID0gZWxldmF0aW9uTGF5ZXJUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAvLyByZXBsYWNlIHZhbHVlc1xuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlcykge1xuICAgICAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9wZXJ0eT1cIiR7a2V5fVwiXWApLnZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgfVxuICAgIC8vIHJldHVybiBsYXllclxuICAgIHJldHVybiBjbG9uZTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkJykub25jbGljayA9ICgpID0+IHtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVNoYWRvd0xheWVyKCkpO1xufTtcbmxpc3Qub25jbGljayA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQuYWN0aW9uID09PSAnZGVsZXRlSXRlbScpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH1cbn07XG4vLyBhcHBlbmQgbmV3IHNoYWRvd0xheWVyIHRvIGxpc3Rcbi8vIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlU2hhZG93TGF5ZXIoKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=