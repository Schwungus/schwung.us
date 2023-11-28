# Math

Todo

## Constants

| Name | Type | Description |
| ---- | ---- | ----------- |
| `PI` | `real` | The value of pi. |
| `EPSILON` | `real` | The epsilon value. |
| `RNG` | `RNG` | A constructor containing methods for pseudo-random number generation. |
| `RNG_GAME` | `RNGSeeds` | Gameplay-related RNG seed. **Do not use this in non-deterministic functions!** |
| `RNG_VISUAL` | `RNGSeeds` | RNG seed for visual effects. |

## Constructors

### RNG

#### Methods

| Name | Returns | Description |
| ---- | ------- | ----------- |
| `float(seed)`* | `real` | Returns a random float value ranging from 0 to 1. |
| `random(x, [seed])`* | `real` | Returns a random float value ranging from 0 to `x`. |
| `random_range(x, y, [seed])`* | `real` | Returns a random float value ranging from `x` to `y`. |
| `irandom(x, [seed])`* | `real` | Returns a random integer value ranging from 0 to `x`. |
| `irandom_range(x, y, [seed])`* | `real` | Returns a random integer value ranging from `x` to `y`. |

## Functions

### lerp_angle

`lerp_angle(val1, val2, amount)`

**Returns:** `real`

Linearly interpolates an angle from `val1` to `val2` by the specified amount

### lerp_smooth

`lerp_smooth(val1, val2, amount)`

**Returns:** `real`

Smoothly interpolates from `val1` to `val2` by the specified amount.

### lerp_delta

`lerp_delta(val1, val2, amount)`

**Returns:** `real`

Linearly interpolates from `val1` to `val2` by the specified amount with delta
time compensation. **Do not use this in deterministic functions!**

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

* [`round(n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/round.htm)
* [`frac(n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/frac.htm)
* [`abs(val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/abs.htm)
* [`sign(n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/sign.htm)
* [`floor(n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/floor.htm)
* [`ceil(val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/ceil.htm)
* [`min(val1, val2, ... max_val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/min.htm)
* [`max(val1, val2, ... max_val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/max.htm)
* [`mean(val1, val2, ... max_val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/mean.htm)
* [`median(val1, val2, ... max_val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/median.htm)
* [`lerp(a, b, amt)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/lerp.htm)
* [`clamp(val, min, max)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/clamp.htm)
* [`exp(n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/exp.htm)
* [`ln(n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/ln.htm)
* [`power(x, n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/power.htm)
* [`sqr(val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/sqr.htm)
* [`sqrt(val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/sqrt.htm)
* [`log2(n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/log2.htm)
* [`log10(n)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/log10.htm)
* [`logn(n, val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/logn.htm)
* [`arccos(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arccos.htm)
* [`arcsin(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arcsin.htm)
* [`arctan(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arctan.htm)
* [`arctan2(y, x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arctan2.htm)
* [`cos(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/cos.htm)
* [`sin(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/sin.htm)
* [`tan(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/tan.htm)
* [`dcos(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dcos.htm)
* [`dsin(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dsin.htm)
* [`dtan(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dtan.htm)
* [`darccos(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darccos.htm)
* [`darcsin(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darcsin.htm)
* [`darctan(x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darctan.htm)
* [`darctan2(y, x)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darctan2.htm)
* [`degtorad(deg)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/degtorad.htm)
* [`radtodeg(rad)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/radtodeg.htm)
* [`point_direction(x1, y1, x2, y2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/point_direction.htm)
* [`point_distance(x1, y1, x2, y2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/point_distance.htm)
* [`dot_product(x1, y1, x2, y2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dot_product.htm)
* [`dot_product_normalised(x1, y1, x2, y2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dot_product_normalised.htm)
* [`angle_difference(dest, src)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/angle_difference.htm)
* [`lengthdir_x(len, dir)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/lengthdir_x.htm)
* [`lengthdir_y(len, dir)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/lengthdir_y.htm)
* [`point_distance_3d(x1, y1, z1, x2, y2, z2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/point_distance_3d.htm)
* [`dot_product_3d(x1, y1, z1, x2, y2, z2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dot_product.htm)
* [`dot_product_3d_normalised(x1, y1, z1, x2, y2, z2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dot_product_normalised.htm)
* [`matrix_build(x, y, z, xrotation, yrotation, zrotation, xscale, yscale, zscale)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build.htm)
* [`matrix_multiply(matrix1, matrix2)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_multiply.htm)
* [`matrix_build_identity()`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_identity.htm)
* [`matrix_build_lookat(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_lookat.htm)
* [`matrix_build_projection_ortho(width, height, znear, zfar)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_ortho.htm)
* [`matrix_build_projection_perspective(width, height, znear, zfar)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective.htm)
* [`matrix_build_projection_perspective_fov(fov_y, aspect, znear, zfar)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Maths_And_Numbers/Matrix_Functions/matrix_build_projection_perspective_fov.htm)