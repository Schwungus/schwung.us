# Rendering

Todo

## Constants

Todo

## Constructors

### ModelInstance

`new ModelInstance(model, [x], [y], [z], [yaw], [pitch], [roll], [scale], [x_scale], [y_scale], [z_scale])`

Creates an instance of a model with its own transformations and animations.

#### Variables

| Name | Type | Description |
| ---- | ---- | ----------- |
| `skins` | `array` | Array containing the current skin indices of each submodel. A skin index of `-1` makes the submodel invisible. |
| `head_bone` | `real` | See [Model](pnengine/scripting/assets.md#Variables-1). |
| `torso_bone` | `real` | See [Model](pnengine/scripting/assets.md#Variables-1). |
| `hand_bone` | `real` | See [Model](pnengine/scripting/assets.md#Variables-1). |
| `animation_index` | `real` | Index of the current animation. `-1` means no animation. |
| `animation` | `undefined` or `Animation` | [`Animation`](pnengine/scripting/assets.md#Animation) struct of the current animation. `undefined` means no animation. |
| `frame`* | `real` | Frame index of the current animation. |
| `frame_speed` | `real` | Playback multiplier of the current animation's speed. |
| `x`* | `real` | X position of the model. |
| `y`* | `real` | Y position of the model. |
| `z`* | `real` | Z position of the model. |
| `yaw`* | `real` | Z rotation of the model. |
| `pitch`* | `real` | Y rotation of the model. |
| `roll`* | `real` | X rotation of the model. |
| `scale`* | `real` | Global scale of the model. |
| `x_scale`* | `real` | X scale of the model. |
| `y_scale`* | `real` | Y scale of the model. |
| `z_scale`* | `real` | Z scale of the model. |

<sub>*Has an interpolated variant with an `s` prefix.</sub>

#### Methods

| Name | Returns | Description |
| ---- | ------- | ----------- |
| `set_animation(index, [frame], [time])` | `bool` | Changes the current animation to the specified one by index while transitioning to it for `time` amount of ticks. Returns `true` on success and `false` if the index was invalid. |
| `get_bone_dq(index)` | `array` | Returns the dual quaternion of the model's bone. If the model isn't animated or its current animation is undefined, this will either return an identity dual quaternion or the result from the previous model instance that called it. |
| `rotate_bone(index, x, y, z)` | `N/A` | Rotates the bone of the model in the current frame sample. |
| `update_sample()`* | `N/A` | Does changes to the frame sample before submitting it to the current shader. |
| `tick()` | `N/A` | Ticks the current animation. |
| `move(x, y, z)` | `ModelInstance` | Moves the model while skipping interpolation. |
| `rotate(yaw, pitch, roll)` | `ModelInstance` | Rotates the model while skipping interpolation. |
| `resize(scale, [x_scale], [y_scale], [z_scale])` | `ModelInstance` | Changes the scale of the model while skipping interpolation. |
| `draw()` | `N/A` | Draws the model. |

<sub>*Is a virtual function that can be overridden with scripting.</sub>

## Functions

### interp

`interp(in, out, [angle], [scope])`

**Returns:** `N/A`

Adds a Thing or struct's variable to be smoothly interpolated between ticks. The output will be saved in the scope as a separate variable with the name specified in `out`. If `scope` is not specified, then the default scope is the caller.

### interp_skip

`interp_skip(out, [scope])`

**Returns:** `bool`

Skips interpolation for a given variable for a single tick. If `scope` is not specified, then the default scope is the caller.