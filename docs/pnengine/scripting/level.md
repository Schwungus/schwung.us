# Level

Todo

## Constants

| Name | Type | Description |
| ---- | ---- | ----------- |
| `GLOBAL` | `Flags` | Global level flags. Persists between levels and are only cleared after exiting to the title screen. |
| `LOCAL` | `Flags` | Local level flags. Cleared every time the level changes. |

## Constructors

### Flags

#### Methods

| Name | Returns | Description |
| ---- | ------- | ----------- |
| `get(name)` | `any` or `undefined` | Returns the value of a flag. |
| `set(name, value)` | `bool` | Sets the value of a flag. In a netgame, this will sync level flags as a host (`true`), but do nothing as a client (`false`). |
| `clear()` | `N/A` | Clears all flags. |