class EncodingExtension {
    maxcharlength = 6;
    encoded = 0;
    decoded = 0;
    getInfo() {
        return {
            id: 'cs2627883Encoding',
            name: 'Encoding',
            blocks: [{
                opcode: 'Encode',
                blockType: Scratch.BlockType.COMMAND,
                text: 'Encode [DATA] to numbers',
                arguments: {
                    DATA: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Hello!'
                    }
                }
            },
            {
                opcode: 'Decode',
                blockType: Scratch.BlockType.COMMAND,
                text: 'Decode [ENCODED] back to text',
                arguments: {
                    DATA: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '{encodedhellohere}'
                    }
                }
            },
            {
                opcode: 'GetEncoded',
                blockType: Scratch.BlockType.REPORTER,
                text: 'encoded',
            },
            {
                opcode: 'GetDecoded',
                blockType: Scratch.BlockType.REPORTER,
                text: 'decoded',
            }]
        }
    }
    Encode(args) {
        const toencode = String(args.DATA);
        var encoded = "";
        for (var i = 0; i < toencode.length; ++i) {
            encodedchar = toencode.charCodeAt(i);
            for (var _ = 0; this.maxcharlength - encodedchar.length ; ++_) {
                encodedchar = "0" + encodedchar;
            }
        }
        encoded += encodedchar;
        this.encoded = encoded;
    }
    Decode(args) {
        const todecode = String(args.DATA);
        var decoded = "";
        const regex = new RegexExp('.{1,' + this.maxcharlength + '}');
        for (encodedchar in todecode.match(regex)) {
            decodedchar = String.fromCharCode(encodedchar);
            decoded += decodedchar;
        }
        this.decoded =  decoded;
    }
    GetEncoded(args) {
        return this.encoded;
    }
    GetDecoded(args) {
        return this.decoded;
    }
}

    Scratch.extensions.register(new ClipboardExtension());