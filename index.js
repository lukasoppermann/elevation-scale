(() => {
    const defines = {};
    const entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies, factory };
        entry[0] = name;
    }
    define("require", ["exports"], (exports) => {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: (name) => resolve(name) });
    });
    var __rest = (this && this.__rest) || function (s, e) {
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
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    define("src/modules/createStyle", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = (elevation, styleId = null, styleName = 'Elevation') => {
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
        };
    });
    define("src/modules/containerStore", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getContainerData = exports.setContainerData = exports.storeKeys = void 0;
        exports.storeKeys = {
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
        exports.setContainerData = setContainerData;
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
        exports.getContainerData = getContainerData;
    });
    define("src/modules/createPreviewElement", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const SETTINGS = {
            WIDTH: 320,
            HEIGHT: 120,
            RADIUS: 5,
            NAME: 'Elevation'
        };
        exports.default = (index, elevationLayers) => {
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
        };
    });
    define("src/modules/parseValue", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const placeholders = {
            INDEX: '#'
        };
        exports.default = (value, index) => {
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
        };
    });
    define("src/modules/minMax", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = (number, min, max) => {
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
        };
    });
    define("src/modules/hexToRgba", ["require", "exports", "src/modules/minMax"], function (require, exports, minMax_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        minMax_1 = __importDefault(minMax_1);
        exports.default = (hex, opacity) => {
            // extract rgb from hex
            const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            // return rgb
            return {
                r: parseInt(r, 16) / 255,
                g: parseInt(g, 16) / 255,
                b: parseInt(b, 16) / 255,
                a: minMax_1.default(parseInt(opacity, 10) / 100, 0, 1)
            };
        };
    });
    define("src/modules/createElevationLayer", ["require", "exports", "src/modules/parseValue", "src/modules/hexToRgba"], function (require, exports, parseValue_1, hexToRgba_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        parseValue_1 = __importDefault(parseValue_1);
        hexToRgba_1 = __importDefault(hexToRgba_1);
        const allowedEffectType = ['DROP_SHADOW', 'INNER_SHADOW'];
        exports.default = (index, layer) => {
            return {
                // define elevation
                name: layer.name,
                type: allowedEffectType.includes(layer.type) ? layer.type : 'DROP_SHADOW',
                color: hexToRgba_1.default(layer.color, parseValue_1.default(layer.opacity, index)),
                offset: {
                    x: parseValue_1.default(layer.x, index),
                    y: parseValue_1.default(layer.y, index)
                },
                spread: parseValue_1.default(layer.spread, index),
                radius: parseValue_1.default(layer.radius, index),
                // defaults
                blendMode: 'NORMAL',
                visible: true
            };
        };
    });
    define("src/modules/updateElevation", ["require", "exports", "src/modules/createStyle", "src/modules/containerStore", "src/modules/createPreviewElement", "src/modules/createElevationLayer"], function (require, exports, createStyle_1, containerStore_1, createPreviewElement_1, createElevationLayer_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        createStyle_1 = __importDefault(createStyle_1);
        createPreviewElement_1 = __importDefault(createPreviewElement_1);
        createElevationLayer_1 = __importDefault(createElevationLayer_1);
        exports.default = (figma, container, data) => {
            const focusNodes = [];
            // remove children nodes
            data.steps = parseInt(data.steps);
            container.children.forEach(child => child.remove());
            // get styles & id
            const containerData = containerStore_1.getContainerData(container, containerStore_1.storeKeys.ELEVATION_SETTNGS);
            data.containerId = containerData.containerId;
            data.styles = containerData.styles || [];
            // add updated children nodes
            for (let i = 0; i < data.steps; i++) {
                // get elevation
                const elevation = [...data.elevationLayer].map(layer => {
                    return createElevationLayer_1.default(i, layer);
                });
                // elevation name
                const elevationName = elevationStyleName(i, data.styleName);
                // create elements
                const previewElements = createPreviewElement_1.default(i, elevation);
                // append to container
                container.appendChild(previewElements);
                focusNodes.push(previewElements);
                // create styles
                if (data.createStyles === true) {
                    const style = createStyle_1.default(elevation, data.styles[i] || null, elevationName);
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
            containerStore_1.setContainerData(container, containerStore_1.storeKeys.ELEVATION_SETTNGS, data);
            // append & select
            figma.currentPage.selection = [container];
        };
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
    });
    define("src/modules/fixDuplicate", ["require", "exports", "src/modules/containerStore"], function (require, exports, containerStore_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = currentContainer => {
            const containerData = containerStore_2.getContainerData(currentContainer, containerStore_2.storeKeys.ELEVATION_SETTNGS);
            // remove styles if container was duplicated
            if (containerData.containerId !== null && containerData.containerId !== currentContainer.id) {
                containerData.styles = [];
                containerData.createStyles = false;
            }
            // add container id
            containerData.containerId = currentContainer.id;
            // update container data
            containerStore_2.setContainerData(currentContainer, containerStore_2.storeKeys.ELEVATION_SETTNGS, containerData);
        };
    });
    define("src/modules/getCurrentContainer", ["require", "exports", "src/modules/containerStore", "src/modules/fixDuplicate"], function (require, exports, containerStore_3, fixDuplicate_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        fixDuplicate_1 = __importDefault(fixDuplicate_1);
        exports.default = (figma) => {
            // get current selection
            const currentSelection = figma.currentPage.selection[0];
            // return if frame
            if (currentSelection !== undefined && currentSelection.type === 'FRAME' && containerStore_3.getContainerData(currentSelection, containerStore_3.storeKeys.ELEVATION_SETTNGS)) {
                // deal with duplicates
                fixDuplicate_1.default(currentSelection);
                // return current container
                return currentSelection;
            }
            //
            return null;
        };
    });
    define("src/modules/refreshUi", ["require", "exports", "src/modules/containerStore"], function (require, exports, containerStore_4) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const SETTINGS = {
            LAYER_SIZE: 40,
            BASE_SIZE: 562,
            UI_WIDTH: 360,
            EMPTY_STATE_WIDTH: 360,
            EMPTY_STATE_HEIGHT: 160
        };
        exports.default = (figma, container) => {
            // show the html ui
            figma.showUI(__html__, {
                width: SETTINGS.EMPTY_STATE_WIDTH,
                height: SETTINGS.EMPTY_STATE_HEIGHT
            });
            // if selected container
            if (container !== null) {
                const elevationProperties = containerStore_4.getContainerData(container, containerStore_4.storeKeys.ELEVATION_SETTNGS);
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
        };
    });
    define("src/modules/createContainer", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const SETTINGS = {
            NAME: 'Elevation Scale',
            LAYOUT_MODE: 'VERTICAL',
            SPACING: 20,
            PADDING: 20
        };
        exports.default = (figma) => {
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
        };
    });
    define("src/modules/defaults", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.ELEVATION_DEFAULTS = void 0;
        exports.ELEVATION_DEFAULTS = {
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
    });
    define("src/modules/addNewContainer", ["require", "exports", "src/modules/createContainer", "src/modules/containerStore", "src/modules/defaults"], function (require, exports, createContainer_1, containerStore_5, defaults_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        createContainer_1 = __importDefault(createContainer_1);
        exports.default = (figma) => {
            // create new container
            const container = createContainer_1.default(figma);
            // append to current page
            figma.currentPage.appendChild(container);
            // add default data
            containerStore_5.setContainerData(container, containerStore_5.storeKeys.ELEVATION_SETTNGS, defaults_1.ELEVATION_DEFAULTS);
            // select new container
            return container;
        };
    });
    define("src/index", ["require", "exports", "src/modules/updateElevation", "src/modules/getCurrentContainer", "src/modules/refreshUi", "src/modules/addNewContainer", "src/modules/defaults"], function (require, exports, updateElevation_1, getCurrentContainer_1, refreshUi_1, addNewContainer_1, defaults_2) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        updateElevation_1 = __importDefault(updateElevation_1);
        getCurrentContainer_1 = __importDefault(getCurrentContainer_1);
        refreshUi_1 = __importDefault(refreshUi_1);
        addNewContainer_1 = __importDefault(addNewContainer_1);
        /**
         * This is were the execution of the plugin starts
         */
        refreshUi_1.default(figma, getCurrentContainer_1.default(figma));
        // run code on commands from UI
        figma.ui.onmessage = msg => {
            // create a new scale
            if (msg.type === 'createScale') {
                // create new container
                const newContainer = addNewContainer_1.default(figma);
                // update container
                updateElevation_1.default(figma, newContainer, Object.assign({ type: 'updateScale' }, defaults_2.ELEVATION_DEFAULTS));
            }
            // update an exsisting scale
            if (msg.type === 'updateScale') {
                updateElevation_1.default(figma, getCurrentContainer_1.default(figma), msg);
            }
        };
        // update ui if selection changes
        figma.on('selectionchange', () => {
            refreshUi_1.default(figma, getCurrentContainer_1.default(figma));
        });
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            const dependencies = ['exports'];
            const factory = (exports) => {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies, factory };
        }
    }
    const instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        const define = get_define(name);
        instances[name] = {};
        const dependencies = define.dependencies.map(name => resolve(name));
        define.factory(...dependencies);
        const exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();