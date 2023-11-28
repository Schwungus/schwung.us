# Rendering

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

### Blend Modes

| Name | Type |
| ---- | ---- |
| `BM_NORMAL` | `Constant.BlendMode` |
| `BM_ADD` | `Constant.BlendMode` |
| `BM_SUBTRACT` | `Constant.BlendMode` |
| `BM_MAX` | `Constant.BlendMode` |
| `BM_ZERO` | `Constant.BlendModeFactor` |
| `BM_ONE` | `Constant.BlendModeFactor` |
| `BM_SRC_COLOR` | `Constant.BlendModeFactor` |
| `BM_INV_SRC_COLOR` | `Constant.BlendModeFactor` |
| `BM_SRC_ALPHA` | `Constant.BlendModeFactor` |
| `BM_INV_SRC_ALPHA` | `Constant.BlendModeFactor` |
| `BM_DEST_ALPHA` | `Constant.BlendModeFactor` |
| `BM_INV_DEST_ALPHA` | `Constant.BlendModeFactor` |
| `BM_DEST_COLOR` | `Constant.BlendModeFactor` |
| `BM_INV_DEST_COLOR` | `Constant.BlendModeFactor` |
| `BM_SRC_ALPHA_SAT` | `Constant.BlendModeFactor` |

### Primitive Types

| Name | Type |
| ---- | ---- |
| `PR_POINT_LIST` | `Constant.PrimitiveType` |
| `PR_LINE_LIST` | `Constant.PrimitiveType` |
| `PR_LINE_STRIP` | `Constant.PrimitiveType` |
| `PR_TRIANGLE_LIST` | `Constant.PrimitiveType` |
| `PR_TRIANGLE_STRIP` | `Constant.PrimitiveType` |
| `PR_TRIANGLE_FAN` | `Constant.PrimitiveType` |

### Shaders

| Name | Type | Description |
| ---- | ---- | ----------- |
| `SH_WORLD` | `Shader` | Basic shader for rendering a level. |
| `SH_SKY` | `Shader` | Basic shader for rendering a Sky. |
| `SH_BLOOM_PASS` | `Shader` | Post-processing shader for bloom pass. |
| `SH_BLOOM` | `Shader` | Post-processing shader for bloom. |
| `SH_CURVE` | `Shader` | Post-processing shader for drawing a curved screen with a stereoscopic 3D effect. |

### Uniforms

| Name | Type | Description |
| `U_AMBIENT_COLOR` | `Uniform` -> `vec4` | The ambient color of the world. |
| `U_COLOR` | `Uniform` -> `vec4` | The tinting color of the vertex buffer. |
| `U_FOG_DISTANCE` | `Uniform` -> `vec2` | The start and end distance of the fog. |
| `U_FOG_COLOR` | `Uniform` -> `vec4` | |
| `U_MATERIAL_ALPHA_TEST` | `Uniform` -> `float` | The alpha test value of the vertex buffer's material. `0` enables alpha blending. |
| `U_MATERIAL_BRIGHT` | `Uniform` -> `float` | The brightness value of the vertex buffer's material. |
| `U_MATERIAL_COLOR` | `Uniform` -> `vec4` | The tinting color of the vertex buffer's material. |
| `U_MATERIAL_SCROLL` | `Uniform` -> `vec2` | The scrolling speed of the vertex buffer's material in full scrolls per millisecond. |
| `U_MATERIAL_SPECULAR` | `Uniform` -> `vec2` | The specular amount and exponent of the vertex buffer's material. |
| `U_MATERIAL_WIND` | `Uniform` -> `vec3` | The wind properties of the vertex buffer's material. `x` is the waviness of the material, `y` enables/disables the wind at the bottom of the texture and `z` is the speed of the wind animation. |
| `U_CURVE` | `Uniform` -> `vec4` | The properties of the curve shader. `r` is the curviness, `g` is the factor for the 3D anaglyph effect, `b` is the width of the screen and `a` is the height of the screen. |

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


### Uniform

#### Methods

| Name | Returns | Description |
| ---- | ------- | ----------- |
| `set(args...)` | `N/A` | Applies values to this uniform in the current shader, if available. |

### Canvas

See Canvas' **[Canvas](https://tabularelf.com/docs/canvas/#/2.0.0/canvas)** constructor.

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
| `animation_name` | `real` | Name of the current animation. Empty string means no animation. |
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
| `set_animation(animation, [frame], [time])` | `N/A` | Changes the current animation to the specified one while transitioning to it for `time` amount of ticks. |
| `get_bone_dq(index)` | `array` | Returns the dual quaternion of the model's bone. If the model isn't animated or its current animation is undefined, this will either return an identity dual quaternion or the result from the previous model instance that called this method. |
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

### draw_image

`draw_image(collage_image, image_index, x, y)`

**Returns:** `N/A`

Draws a frame of an Image at the specified position.

### draw_image_ext

`draw_image_ext(collage_image, image_index, x, y, xscale, yscale, rot, col, alpha)`

**Returns:** `N/A`

Draws a frame of an Image at the specified position with transformations and coloring.

### draw_image_general

`draw_image_general(collage_image, image_index, left, top, width, height, x, y, xscale, yscale, rot, col1, col2, col3, col4, alpha)`

**Returns:** `N/A`

Extended version of `draw_image_ext()`.

### draw_image_stretched

`draw_image_stretched(collage_image, image_index, x, y, width, height)`

**Returns:** `N/A`

Draws a stretched frame of an Image.

### draw_image_stretched_ext

`draw_image_stretched_ext(collage_image, image_index, x, y, width, height, color, alpha)`

**Returns:** `N/A`

Draws a stretched frame of an Image with coloring.

### draw_image_part

`draw_image_part(collage_image, image_index, left, top, width, height, x, y)`

**Returns:** `N/A`

Draws a part of a frame of an Image. 

### draw_image_part_ext

`draw_image_part_ext(collage_image, image_index, left, top, width, height, x, y, xscale, yscale, color, alpha)`

**Returns:** `N/A`

Draws a part of a frame of an Image with transformations and coloring.

### draw_image_tiled

`draw_image_tiled(collage_image, image_index, x, y)`

**Returns:** `N/A`

Draws a frame of an Image as a tiled background.

### draw_image_tiled_ext

`draw_image_tiled_ext(collage_image, image_index, x, y, xscale, yscale, color, alpha)`

**Returns:** `N/A`

Draws a frame of an Image as a tiled background with transformations and coloring.

### batch_billboard

`batch_billboard(image, frame, width, height, x, y, z, angle, color, alpha)`

**Returns:** `N/A`

Adds a X/Y billboard image that faces the camera to the batch.

### batch_floor

`batch_floor(image, frame, width, height, x, y, z, angle, color, alpha)`

**Returns:** `N/A`

Adds a flat image to the batch.

### batch_floor_ext

`batch_floor_ext(image, frame, width, height, x, y, z, nx, ny, nz, angle, color, alpha)`

**Returns:** `N/A`

Adds a flat angled image to the batch.

### batch_set_alpha_test

`batch_set_alpha_test(threshold)`

**Returns:** `N/A`

Sets the current alpha testing threshold of the batch. This can cause batch breaks!

### batch_set_bright

`batch_set_bright(bright)`

**Returns:** `N/A`

Sets the current brightness of the batch. This can cause batch breaks!

## GameMaker Functions

- [`gpu_get_tex_filter()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_texfilter.htm)
- [`gpu_get_blendmode()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode.htm)
- [`gpu_get_blendmode_ext()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_ext.htm)
- [`gpu_get_blendmode_ext_sepalpha()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_ext_sepalpha.htm)
- [`gpu_get_blendmode_src()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_src.htm)
- [`gpu_get_blendmode_dest()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_dest.htm)
- [`gpu_get_blendmode_srcalpha()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_srcalpha.htm)
- [`gpu_get_blendmode_destalpha()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_get_blendmode_destalpha.htm)
- [`gpu_set_tex_filter(enable)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_texfilter.htm)
- [`gpu_set_blendmode(mode)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_blendmode.htm)
- [`gpu_set_blendmode_ext(src, dest)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/GPU_Control/gpu_set_blendmode_ext.htm)
- [`draw_get_color()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_get_colour.htm)
- [`draw_get_alpha()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_get_alpha.htm)
- [`draw_get_font()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_get_font.htm)
- [`draw_get_halign()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_get_halign.htm)
- [`draw_get_valign()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_get_valign.htm)
- [`draw_set_color(col)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_set_colour.htm)
- [`draw_set_alpha(alpha)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_set_alpha.htm)
- [`draw_set_font(font)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_set_font.htm)
- [`draw_set_halign(halign)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_set_halign.htm)
- [`draw_set_valign(valign)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_set_valign.htm)
- [`draw_arrow(x1, y1, x2, y2, size)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_arrow.htm)
- [`draw_circle(x, y, r, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_circle.htm)
- [`draw_circle_color(x, y, r, col1, col2, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_circle_colour.htm)
- [`draw_ellipse(x1, y1, x2, y2, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_ellipse.htm)
- [`draw_ellipse_color(x1, y1, x2, y2, col1, col2, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_ellipse_colour.htm)
- [`draw_line(x1, y1, x2, y2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line.htm)
- [`draw_line_color(x1, y1, x2, y2, col1, col2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_colour.htm)
- [`draw_line_width(x1, y1, x2, y2, w)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_width.htm)
- [`draw_line_width_color(x1, y1, x2, y2, w, col1, col2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_width_colour.htm)
- [`draw_point(x, y)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_point.htm)
- [`draw_point_color(x, y, col)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_point_colour.htm)
- [`draw_rectangle(x1, y1, x2, y2, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_rectangle.htm)
- [`draw_rectangle_color(x1, y1, x2, y2, col1, col2, col3, col4, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_rectangle_colour.htm)
- [`draw_roundrect(x1, y1, x2, y2, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect.htm)
- [`draw_roundrect_color(x1, y1, x2, y2, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_colour.htm)
- [`draw_roundrect_ext(x1, y1, x2, y2, xrad, yrad, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_ext.htm)
- [`draw_roundrect_color_ext(x1, y1, x2, y2, xrad, yrad, col1, col2, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_colour_ext.htm)
- [`draw_triangle(x1, y1, x2, y2, x3, y3, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_triangle.htm)
- [`draw_triangle_color(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_triangle_colour.htm)
- [`draw_text(x, y, string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_text.htm)
- [`draw_text_ext(x, y, string, sep, w)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_ext.htm)
- [`draw_text_color(x, y, string, c1, c2, c3, c4, alpha)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_colour.htm)
- [`draw_text_transformed(x, y, string, xscale, yscale, angle)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_transformed.htm)
- [`draw_text_ext_color(x, y, string, sep, w, c1, c2, c3, c4, alpha)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_ext_colour.htm)
- [`draw_text_ext_transformed(x, y, string, sep, w, xscale, yscale, angle)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_ext_transformed.htm)
- [`draw_text_transformed_color(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_transformed_colour.htm)
- [`draw_text_ext_transformed_color(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Text/draw_text_ext_transformed_colour.htm)
- [`draw_primitive_begin(kind)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_primitive_begin.htm)
- [`draw_primitive_end()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_primitive_end.htm)
- [`draw_vertex(x, y)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_vertex.htm)
- [`draw_vertex_color(x, y, col, alpha)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_vertex_colour.htm)
- [`shader_reset()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_reset.htm)