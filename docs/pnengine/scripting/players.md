# Players

Todo

## Constants

Todo

## Constructors

### Player

#### Variables

| Name | Type | Description |
| ---- | ---- | ----------- |
| `slot` | `real` | The player index. |
| `status` | `PlayerStatus` | Whether or not the player is inactive, ready or in-game. |
| `level` | `Level` | The player's current level. |
| `area` | `Area` | The player's area in the current level. |
| `thing` | `PlayerPawn` | The player's Thing. |
| `camera` | `Camera` | The player's camera. |
| `input` | `array` | Player inputs during the current tick. |
| `input_previous` | `array` | Player inputs from the previous tick. |

#### Methods

| Name | Returns | Description |
| ---- | ------- | ----------- |
| `get_state(name)` | `any` or `undefined` | Returns the value of a state. |
| `set_state(name, value)` | `bool` | Sets the value of a state. In a netgame, this will sync player states as a host (`true`), but do nothing as a client (`false`). |
| `clear_states()` | `N/A` | Removes all custom states and resets to default values. |