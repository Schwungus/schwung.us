# Assets

Todo

## Constants

| Name | Type | Description |
| ---- | ---- | ----------- |
| `IMAGES` | `ImageMap` | An asset map containing all of the loaded images. |
| `MATERIALS` | `MaterialMap` | An asset map containing all of the loaded materials. |
| `MODELS` | `ModelMap` | An asset map containing all of the loaded models. |
| `FONTS` | `FontMap` | An asset map containing all of the loaded fonts. |
| `SOUNDS` | `SoundMap` | An asset map containing all of the loaded sounds. |
| `MUSIC` | `MusicMap` | An asset map containing all of the loaded music tracks. |

## AssetMap

Todo

### Methods

| Name | Returns | Description |
| ---- | ------- | ----------- |
| `load(name)` | `N/A` | Loads an asset to the map. `MaterialMap` has an extra argument `[strict]` which, when set to `true`, will prevent this method from loading the placeholder material `?` if the specified material could not be found. |
| `get(name)` | `Asset` or `undefined` | Tries to get an asset from the map. |
| `clear(name)` | `N/A` | Destroys all assets in the map. |

## Image

See Collage's [Image](https://tabularelf.com/docs/collage/#/0.3.0/collage-image) constructor.

## Material

### Variables

| Name | Type | Description |
| ---- | ---- | ----------- |
| `image` | `real` or `Image` | The image to use as the material's texture. `-1` is considered an empty white texture. |
| `frame_speed` | `real` | The playback speed of the image in frames per millisecond. |
| `bright` | `real` | Determines how much of the material is affected by lighting. |
| `x_scroll` | `real` | The horizontal scrolling speed in full scrolls per millisecond. |
| `y_scroll` | `real` | The vertical scrolling speed in full scrolls per millisecond. |
| `specular` | `real` | The intensity of specular highlights. |
| `specular_exponent` | `real` | Determines how "smooth" the material's surface is for specular highlights. Higher values mean smaller highlights. |
| `wind` | `real` | Determines how much the material is affected by the level's wind. |
| `wind_lock_bottom` | `real` | Determines how much of the material's bottom is unaffected by the wind. |
| `wind_speed` | `real` | The swaying speed of the material under the wind. |
| `color` | `array` | The color to tint the material's texture with. The array consists of red, green, blue and alpha components as well as the BGR value. |

## Model

### Variables

| Name | Type | Description |
| ---- | ---- | ----------- |
| `submodels` | `array` | An array containing all of the model's submodels. |
| `collider` | `undefined` or `Collider` | Collision data of the model. |
| `animation` | `array` | An array containing all of the model's animations. |
| `head_bone` | `real` | The bone index of the model's head. |
| `torso_bone` | `real` | The bone index of the model's torso. |
| `hold_bone` | `real` | The bone index of the model's holding hand. |
| `hold_offset_x` | `real` | The X offset of the model when held in another model's hand. |
| `hold_offset_y` | `real` | The Y offset of the model when held in another model's hand. |
| `hold_offset_z` | `real` | The Z offset of the model when held in another model's hand. |

## Font

### Variables

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | The name of the font for use with formatting tags. |
| `font` | `font` | The font's handle. |

## Sound

### Variables

| Name | Type | Description |
| ---- | ---- | ----------- |
| `pitch_high` | `real` | The highest random pitch. |
| `pitch_low` | `real` | The lowest random pitch. |

## Music

### Variables

| Name | Type | Description |
| ---- | ---- | ----------- |
| `metadata` | `struct` | Metadata used for special handling. |

## thing_load

`thing_load(name)`

**Returns:** `N/A`

Loads a type of Thing and its assets.