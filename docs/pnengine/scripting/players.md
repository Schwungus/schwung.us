# Players

Players are avatars of users playing a game. They can directly pass inputs to their `PlayerPawn`, a user-controlled Thing, in order to interact with the game world. As such, demos and netgames record player input as they are the only non-deterministic part of the game.

In order to play multiplayers, up to 3 other players may join locally by using a separate controller, or online through a netgame.

## Constants

| Name | Type | Description |
| ---- | ---- | ----------- |
| `MAX_PLAYERS`* | `real` | The maximum amount of players the game can handle in a session. |
| `PLAYERS`* | `array` | An array containing all 4 [`Player`](#Player) structs. |
| `PS_INACTIVE`* | `PlayerStatus` | The player is inactive and not in-game. |
| `PS_READY`* | `PlayerStatus` | The player is active but won't be in-game until the current level changes. |
| `PS_ACTIVE`* | `PlayerStatus` | The player is active and in-game. |

<sub>*Currently not exposed to scripting.</sub>

## Constructors

### Player

The `Player` struct holds all the variables and methods pertaining to each player. It can be used to read and modify player data directly and can be either accessed locally through a PlayerPawn's `player` variable, or globally through the `PLAYERS` array which holds up to 4 players.

#### Variables

| Name | Type | Description |
| ---- | ---- | ----------- |
| `slot` | `real` | The player index. |
| `status` | `PlayerStatus` | Whether or not the player is inactive, ready or in-game. |
| `level`* | `Level` | The player's current level. |
| `area`* | `Area` | The player's area in the current level. |
| `thing` | `PlayerPawn` | The player's Thing. |
| `camera`* | `Camera` | The player's camera. |
| `input`* | `array` | Player inputs during the current tick. |
| `input_previous`* | `array` | Player inputs from the previous tick. |

<sub>*Can also be accessed directly through `PlayerPawn`.</sub>

#### Methods

| Name | Returns | Description |
| ---- | ------- | ----------- |
| `get_state(name)`* | `any` or `undefined` | Returns the value of a state. |
| `set_state(name, value)`* | `bool` | Sets the value of a state. In a netgame, this will sync player states as a host (`true`), but do nothing as a client (`false`). |
| `clear_states()` | `N/A` | Removes all custom states and resets to default values. |

<sub>*This method can also be accessed through the player's pawn.</sub>

## Functions

### players_ready

`players_ready()`

**Returns:** `real`

Returns the amount of ready players. **Not implemented!**

### players_active

`players_active()`

**Returns:** `real`

Returns the amount of active players. **Not implemented!**