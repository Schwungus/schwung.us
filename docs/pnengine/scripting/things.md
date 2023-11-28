# Things

Todo

## Constants

### Tags

| Name | Type | Description |
| ---- | ---- | ----------- |
| `TAG_NONE` | `real` | No Things. |
| `TAG_ALL` | `real` | All Things. |
| `TAG_PLAYERS` | `real` | All PlayerPawns. |
| `TAG_FRIENDS` | `real` | All Things marked as friends. |
| `TAG_ENEMIES` | `real` | All Things marked as enemies. |

### Collision Modes

| Name | Type | Description |
| ---- | ---- | ----------- |
| `M_COLLISION_NONE` | `MCollision` | Don't interact with collision meshes. |
| `M_COLLISION_NORMAL` | `MCollision` | Default collision mesh handling. |
| `M_COLLISION_BOUNCE` | `MCollision` | Bounce against collision meshes. |
| `M_COLLISION_PROJECTILE` | `MCollision` | Get damaged upon hitting collision meshes. |

### Bump Modes

| Name | Type | Description |
| ---- | ---- | ----------- |
| `M_BUMP_NONE` | `MBump` | Disable Thing collisions. |
| `M_BUMP_ALL` | `MBump` | Handle Thing collisions from both the sending and receiving side. |
| `M_BUMP_TO` | `MBump` | Only send collisions to other Things. |
| `M_BUMP_FROM` | `MBump` | Only receive collisions from other Things. |

### Shadow Modes

| Name | Type | Description |
| ---- | ---- | ----------- |
| `M_SHADOW_NONE` | `MShadow` | Disable the shadow. |
| `M_SHADOW_NORMAL` | `MShadow` | Cast a shadow from the center. |
| `M_SHADOW_BONE` | `MShadow` | Cast a shadow from the specified bone in `shadow_bone`. |

### NetVariable Flags

| Name | Type | Description |
| ---- | ---- | ----------- |
| `NVAR_DEFAULT` | `NetVarFlags` | Only sync when prompted. |
| `NVAR_CREATE` | `NetVarFlags` | Sync on creation. |
| `NVAR_TICK` | `NetVarFlags` | Sync every tick. |
| `NVAR_GENERIC` | `NetVarFlags` | Sync on creation and every tick. |