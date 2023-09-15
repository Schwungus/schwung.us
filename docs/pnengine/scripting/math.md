# Math

Todo

## Constants

| Name | Type | Description |
| ---- | ---- | ----------- |
| `PI` | `real` | The value of pi. |
| `EPSILON` | `real` | The epsilon value. |
| `RNG` | `RNG` | A constructor containing methods for pseudo-random number generation. |
| `RNG_GAME` | `RNGSeeds` | Gameplay-related RNG seed. **Do not use this in drawing functions!** |
| `RNG_VISUAL` | `RNGSeeds` | RNG seed for visual effects. |

## Constructors

### RNG

#### Methods

Todo

## Functions

### point_pitch

`point_pitch(x1, y1, z1, x2, y2, z2)`

**Returns:** `real`

Calculates the pitch angle from points `(x1, y1, z1)` to `(x2, y2, z2)` in degrees.

### matrix_transform_point

`matrix_transform_point(matrix, x, y, z)`

**Returns:** `array`

Transforms a vector by a matrix and returns the result in a static array.

### dq_build

`dq_build(rad, ax, ay, az, x, y, z)`

**Returns:** `array`

Creates a dual quaternion from an axis angle and a translation vector.

### dq_build_identity

`dq_build_identity()`

**Returns:** `array`

Creates a dual quaternion without any transformations.

### dq_lerp

`dq_lerp(dq1, dq2, amount, [out])`

**Returns:** `array`

Lerps between two dual quaternions by the specified amount and outputs it to an existing dual quaternion. If an output is not specified, a new dual quaternion will be created.

## GameMaker Functions

Todo