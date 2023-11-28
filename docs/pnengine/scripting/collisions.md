# Collisions

Todo

## Constants

### Triangle Data

| Name | Type | Description |
| ---- | ---- | ----------- |
| `TRIANGLE_X1` | `TriangleData` | |
| `TRIANGLE_Y1` | `TriangleData` | |
| `TRIANGLE_Z1` | `TriangleData` | |
| `TRIANGLE_X2` | `TriangleData` | |
| `TRIANGLE_Y2` | `TriangleData` | |
| `TRIANGLE_Z2` | `TriangleData` | |
| `TRIANGLE_X3` | `TriangleData` | |
| `TRIANGLE_Y3` | `TriangleData` | |
| `TRIANGLE_Z3` | `TriangleData` | |
| `TRIANGLE_NX` | `TriangleData` | |
| `TRIANGLE_NY` | `TriangleData` | |
| `TRIANGLE_NZ` | `TriangleData` | |
| `TRIANGLE_SURFACE` | `TriangleData` | Surface ID. |
| `TRIANGLE_FLAGS` | `TriangleData` | Collision flags. |
| `TRIANGLE_LAYERS` | `TriangleData` | Collision layers. |

### Collision Flags

| Name | Type | Description |
| ---- | ---- | ----------- |
| `CFLAG_BODY` | `CollisionFlags` | Collide with bodies. |
| `CFLAG_BULLET` | `CollisionFlags` | Collide with projectiles. |
| `CFLAG_VISION` | `CollisionFlags` | Collide with line of sight checks. |
| `CFLAG_CAMERA` | `CollisionFlags` | Collide with cameras. |
| `CFLAG_ALL` | `CollisionFlags` | Collide with everything. |

### Collision Layers

A collision mesh can use up to 8 different layers.

| Name | Type | Description |
| ---- | ---- | ----------- |
| `CLAYER_0` | `CollisionLayers` | |
| `CLAYER_1` | `CollisionLayers` | |
| `CLAYER_2` | `CollisionLayers` | |
| `CLAYER_3` | `CollisionLayers` | |
| `CLAYER_4` | `CollisionLayers` | |
| `CLAYER_5` | `CollisionLayers` | |
| `CLAYER_6` | `CollisionLayers` | |
| `CLAYER_7` | `CollisionLayers` | |
| `CLAYER_ALL` | `CollisionLayers` | |

### Raycast Data

| Name | Type | Description |
| ---- | ---- | ----------- |
| `RAY_HIT` | `RaycastData` | Whether or not the raycast hit a triangle. |
| `RAY_X` | `RaycastData` | |
| `RAY_Y` | `RaycastData` | |
| `RAY_Z` | `RaycastData` | |
| `RAY_NX` | `RaycastData` | |
| `RAY_NY` | `RaycastData` | |
| `RAY_NZ` | `RaycastData` | |
| `RAY_SURFACE` | `RaycastData` | The surface ID of the triangle. |
| `RAY_THING` | `RaycastData` | The Thing that the hit triangle belongs to. |
| `RAY_TRIANGLE` | `RaycastData` | The triangle that was hit by the ray. |