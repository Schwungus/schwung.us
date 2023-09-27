# Debugging

## Functions

### current_time

`current_time()`

**Returns:** `real`

Returns the number of milliseconds that have passed since the game was started.

This function is **non-deterministic** and may break demo playback if used in gameplay.

### get_timer

`get_timer()`

**Returns:** `real`

Returns the number of microseconds that have passed since the game was started. This function is asynchronous, so calling it multiple times in a function will never return the same value, which is useful for debugging and benchmarking.

This function is **non-deterministic** and may break demo playback if used in gameplay.

### print

`print(value_or_format, [value]...)`

**Returns:** `N/A`

Prints a message to the console.

### show_error

`show_error(str)`

**Returns:** `N/A`

Shows an error message and closes the game.

### show_caption

`show_caption(string, [time])`

**Returns:** `N/A`

Shows a text caption at the bottom of the screen for a specified amount of ticks. If no time was specified, the default value is the length of the string times 4.