# Game

## Constants

| Name | Type | Description |
| ---- | ---- | ----------- |
| `GAME_NORMAL` | `GameStatus` | The game is being played on singleplayer or local multiplayer. |
| `GAME_DEMO` | `GameStatus` | The game is being played through a demo. |
| `GAME_NETGAME` | `GameStatus` | The game is being played online. |
| `TICKRATE` | `real` | The update rate of the game loop. |
| `TOPT_NEW_FILE` | `TitleOptions` | |
| `TOPT_LOAD_FILE` | `TitleOptions` | |
| `TOPT_DELETE_FILE` | `TitleOptions` | |
| `TOPT_OPTIONS` | `TitleOptions` | |

## Functions

### game_status

`game_status()`

**Returns:** `GameStatus`

Gets the current status of the game.

### delta_time

`delta_time()`

**Returns:** `real`

The interval from the last frame to the current one in seconds. **Do not use this in deterministic functions!**