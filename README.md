# Turbowarp-Encoding-Extension
Turbowarp extension that adds encode and decode blocks, allowing you to easily store non-numerical data in cloud variables.

# Details
This is a sandboxed `extension.

It adds 2 co`mmand blocks: `Encode` and `Decode`.

Each command block has a respective reporter block: `encoded` and `decoded`

# Why is this useful?
While it is easy to write your own encode / decode system in vanilla scratch, there are some limitations. 

One of these limitations is case-sensitivity - while this is possible, the only way to do it is with sprite costumes. This is messy, inefficient, and painstaking to write and debug. Worse, it's horrible unorganized and clunky, which sacrifices debugging, portability, and compactness. 

Another limitation is that Scratch does not allow you to convert between characters and their numerical representations. If you want to do this, you must create your own character index. This means that all characters have to be manually implemented. While mashing your keyboard for 5 minutes doesn't sound too bad, what if someone wants to use emojis, or characters from another language?

This extension bypasses both of these limitations. Javascript is case-sensitive, and has `charCodeAt` and `fromCharCode` methods. This extension supports all 149,186 unicode characters.

# How to use
If you do not know what turbowarp extensions are or how to use them, check out the [Official Docs](https://docs.turbowarp.org/development/custom-extensions)
