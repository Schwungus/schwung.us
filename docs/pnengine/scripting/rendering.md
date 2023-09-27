# Rendering

Todo

## Constants

### Font Alignment

| Name | Type |
| ---- | ---- |
| `FA_LEFT` | `Constant.HAlign` |
| `FA_CENTER` | `Constant.HAlign` |
| `FA_RIGHT` | `Constant.HAlign` |
| `FA_TOP` | `Constant.VAlign` |
| `FA_MIDDLE` | `Constant.VAlign` |
| `FA_BOTTOM` | `Constant.VAlign` |

### Shaders

| Name | Type | Description |
| ---- | ---- | ----------- |
| `SH_WORLD` | `Shader` | Basic shader for rendering a level. |
| `SH_SKY` | `Shader` | Basic shader for rendering a Sky. |
| `SH_BLOOM` | `Shader` | Post-processing shader for bloom. |
| `SH_CURVE` | `Shader` | Post-processing shader for drawing a curved screen with a stereoscopic 3D effect. |

### Particle Data

| Name | Type | Description |
| ---- | ---- | ----------- |
| `PART_DEAD` | `ParticleData` -> `bool` | Whether or not the particle is valid. |
| `PART_IMAGE` | `ParticleData` -> `undefined` or `Image` | |
| `PART_FRAME` | `ParticleData` -> `real` | |
| `PART_FRAME` | `ParticleData` -> `real` | |
| `PART_ANIMATION` | `ParticleData` -> `ParticleAnimationType` | Determines how the particle should be animated. See [Particle Animation](#particle-animation). |
| `PART_WIDTH` | `ParticleData` -> `real` | |
| `PART_HEIGHT` | `ParticleData` -> `real` | |
| `PART_WIDTH_SPEED` | `ParticleData` -> `real` | The shrinking/growing speed of the particle's width. |
| `PART_HEIGHT_SPEED` | `ParticleData` -> `real` | The shrinking/growing speed of the particle's height. |
| `PART_ANGLE` | `ParticleData` -> `real` | |
| `PART_ANGLE_SPEED` | `ParticleData` -> `real` | |
| `PART_COLOR` | `ParticleData` -> `Constant.Color` | |
| `PART_ALPHA` | `ParticleData` -> `real` | |
| `PART_ALPHA_SPEED` | `ParticleData` -> `real` | |
| `PART_BRIGHT` | `ParticleData` -> `real` | How much the particle is unaffected by lighting. |
| `PART_BRIGHT_SPEED` | `ParticleData` -> `real` | The decreasing/growing speed of the particle's brightness. |
| `PART_TICKS` | `ParticleData` -> `real` | How many ticks the particle lasts before dying. |
| `PART_X` | `ParticleData` -> `real` | |
| `PART_Y` | `ParticleData` -> `real` | |
| `PART_Z` | `ParticleData` -> `real` | |
| `PART_FLOOR_Z` | `ParticleData` -> `real` | |
| `PART_CEILING_Z` | `ParticleData` -> `real` | |
| `PART_X_SPEED` | `ParticleData` -> `real` | |
| `PART_Y_SPEED` | `ParticleData` -> `real` | |
| `PART_Z_SPEED` | `ParticleData` -> `real` | |
| `PART_X_FRICTION` | `ParticleData` -> `real` | |
| `PART_Y_FRICTION` | `ParticleData` -> `real` | |
| `PART_Z_FRICTION` | `ParticleData` -> `real` | |
| `PART_GRAVITY` | `ParticleData` -> `real` | |
| `PART_MAX_FLY_SPEED` | `ParticleData` -> `real` | |
| `PART_MAX_FALL_SPEED` | `ParticleData` -> `real` | |

### Particle Animation

| Name | Type | Description |
| ---- | ---- | ----------- |
| `PANI_PLAY` | `ParticleAnimations` | Plays its animation and dies after the last frame. |
| `PANI_PLAY_STAY` | `ParticleAnimations` | Plays its animation and stays on the last frame. |
| `PANI_LOOP` | `ParticleAnimations` | Loops its animation. |

## Constructors

### Shader

#### Methods

| Name | Returns | Description |
| ---- | ------- | ----------- |
| `set()` | `N/A` | Sets this shader as the current one for drawing. |
| `set_uniform(name, values...)` | `bool` | Sets a uniform with the specified value(s). |

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

### shader_current

`shader_current()`

**Returns:** `Shader` or `undefined`

Returns the shader that is currently being used to draw with.

## GameMaker Functions

- [`shader_reset()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_reset.htm)