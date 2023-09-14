# Strings

Todo

## string_localize

`string_localize(textEntry, [substring], [...])`

**Returns:** `string`

Returns a localized version of a text pointer defined by the game's current langauge's localization files.

The additional optional arguments replace `%s` with each and every subsequent argument.

## string_rich

`string_rich(string, [uniqueID])`

**Returns:** A text element containing the string (`__scribble_class_element`)

Generates a text element used for advanced text rendering.

For formatting, see Scribble's [Text Formatting](https://www.jujuadams.com/Scribble/#/latest/text-formatting).*

<sub>*Some of Scribble's formatting tags are incompatible with PNEngine.</sub>

## GameMaker Functions

* [`ansi_char(val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/ansi_char.htm)
* [`chr(val)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/chr.htm)
* [`ord(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/ord.htm)
* [`string_byte_at(str, index)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_byte_at.htm)
* [`string_byte_length(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_byte_length.htm)
* [`string_set_byte_at(str, pos, byte)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_set_byte_at.htm)
* [`string_char_at(str, index)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_char_at.htm)
* [`string_ord_at(str, index)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_ord_at.htm)
* [`string_length(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_length.htm)
* [`string_pos(substr, str)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_pos.htm)
* [`string_pos_ext(substr, str, start_pos)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_pos_ext.htm)
* [`string_last_pos(substr, str)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_last_pos.htm)
* [`string_last_pos_ext(substr, str, start_pos)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_last_pos_ext.htm)
* [`string_starts_with(str, substr)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_starts_with.htm)
* [`string_ends_with(str, substr)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_ends_with.htm)
* [`string_count(substr, str)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_count.htm)
* [`string_copy(str, index, count)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_copy.htm)
* [`string_delete(str, index, count)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_delete.htm)
* [`string_digits(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_digits.htm)
* [`string_format(val, total, dec)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_format.htm)
* [`string_insert(substr, str, index)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_insert.htm)
* [`string_letters(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_letters.htm)
* [`string_lettersdigits(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_lettersdigits.htm)
* [`string_lower(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_lower.htm)
* [`string_repeat(str, count)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_repeat.htm)
* [`string_replace(str, substr, newstr)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_replace.htm)
* [`string_replace_all(str, substr, newstr)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_replace_all.htm)
* [`string_upper(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_upper.htm)
* [`string_hash_to_newline(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_hash_to_newline.htm)
* [`string_trim(str)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_trim.htm)
* [`string_trim_start(str)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_trim_start.htm)
* [`string_trim_end(str)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_trim_end.htm)
* [`string_split(string, delimiter, [remove_empty], [max_splits])`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_split.htm)
* [`string_split_ext(string, delimiter_array, [remove_empty], [max_splits])`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_split_ext.htm)
* [`string_join(delimiter, value, [value]...)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_join.htm)
* [`string_join_ext(delimiter, values_array, [offset], [length])`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_join_ext.htm)
* [`string_concat(value, [value]...)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_concat.htm)
* [`string_concat_ext(values_array, [offset], [length])`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_concat_ext.htm)
* [`string_width(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_width.htm)
* [`string_width_ext(string, sep, w)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_width_ext.htm)
* [`string_height(string)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_height.htm)
* [`string_height_ext(string, sep, w)`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_height_ext.htm)
* [`string_foreach(string, function, [pos], [length])`](https://manual.yoyogames.com/GameMaker_Language/GML_Reference/Strings/string_foreach.htm)