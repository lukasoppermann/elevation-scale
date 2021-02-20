![Elevation Scale plugin for figma](https://github.com/lukasoppermann/elevation-scale/raw/main/_resources/Elevation-Scale-Plugin-Cover.png)
# Elevation Scale

> Create shadow systems and effect styles with your choice of steps from a custom function.

## Installation

<img src="https://github.com/lukasoppermann/elevation-scale/blob/main/_resources/Plugin-Icon-rounded.png" width="50px"> 

1. Go to the [elevation scale plugin page](https://www.figma.com/community/plugin/940989130927509964/Elevation-Scale)
2. Click on install in the top right corner

## Usage
1. Run the plugin and click the `Create a new elevation scale` button
2. Select the elevation scale frame
3. Adjust the settings to your liking

Changes are automatically applied and saved.

### Steps
`Steps` are the amount of elevations/shadows you want to create. For example `steps:2` will create two shadows each with all the layers you specify.

### Effect Styles
To automatically create & update effect styles enable the `Sync Styles` option.
You can optionall provide a `style name` that will be used to create the effect styles. If you add a `#` to the name it will be replaced with the current step.
A `##` will result in a 0 prefixed number if below 10.

```js
// Example style name with #
Elevation / Level # // Elevation / Level 0, Elevation / Level 1, ...

// Example style name with ##
Elevation / ##dp // Elevation / 00dp, Elevation / 01dp, ..., Elevation / 12dp
```

### Properties
- **Shadow type:**: Either `dropshadow` or `innershadow`
- **x**: The x offset of the shadow. `#` is replaced by the current step. E.g. `.5*#`
- **y**: The y offset of the shadow. `#` is replaced by the current step. E.g. `2+#`
- **blur**: The shadows blur radius. `#` is replaced by the current step. E.g. `(1+#)*4`
- **spread**: The shadows spread. `#` is replaced by the current step. E.g. `#/.5`
- **color**: a 6-digit hex color code between `000000` and `FFFFFF`
- **opacity**: The opacity for the color. `#` is replaced by the current step. E.g. `10+#` if `#` = 1 -> `11%`
