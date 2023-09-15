# Console

The debug console in PNEngine provides debugging information and allows the use of console commands. It can be opened with the tilde key (`~`)* and closed by pressing Escape.

While the console is open, the game world will not tick unless the current game is being played online, in which case all of the player's input will be consumed by the console until it is closed.

<sub>*The key for opening the console may vary on different keyboard layouts. For example, the Swedish layout uses `Ö` to open the console.</sub>

## Commands

### print

**Usage:** `print <message>`

Prints a message to the console.

### script

**Usage:** `script <code>`

**Not implemented!**

Executes a Catspeak script. This will not work in demos and during a netgame.

For more information about scripting, see [Scripting](pnengine/scripting/).

### log

**Usage:** `log [context]`

Saves the console log to a text file which can then be found at the user's Local AppData.

### level

**Usage:** `level <name> [area] [tag]`

Warps to another level. If `area` is specified, then the level will start at that area ID. If `tag` is specified and the area has a PlayerSpawn, then the players will spawn at the actor that has the matching tag. This will not work in demos and during a netgame when you are not the host.

### host

**Usage:** `host [port]`

Hosts a netgame on the specified port. This will not work if you have more than one local player ready or active or in demos.

### connect

**Usage:** `connect <ip> [port]`

Connects to a netgame using the specified IP address and port. This will not work if you have more than one local player ready or active or in demos.

### disconnect

**Usage:** `disconnect`

Disconnects from the current netgame. After disconnecting, you will return to the game's title screen.

### say

**Usage:** `say <message>`

Sends a chat message to all players in a netgame.