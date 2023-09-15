# Rendering

Todo

## Constants

Todo

## Constructors

### ModelInstance

`new ModelInstance(model, [x], [y], [z], [yaw], [pitch], [roll], [scale], [x_scale], [y_scale], [z_scale])`

Todo

#### Variables

Todo

#### Methods

Todo

## Functions

### interp

`interp(in, out, [angle], [scope])`

**Returns:** `N/A`

Adds a Thing or struct's variable to be smoothly interpolated between ticks. If `scope` is not specified, then the default scope is the caller.

### interp_skip

`interp_skip(out, [scope])`

**Returns:** `bool`

Skips interpolation for a given variable for a single tick. If `scope` is not specified, then the default scope is the caller.