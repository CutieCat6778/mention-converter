# Mention-validator
It is library that support **Discord.js** community!
It will help you guys to convert those **string** that includes discord mentions string form to a simple **ID**!

# How to install it
You can simple install with this command here
```console
npm install mention-validator
```

# How to do it?

**Detailed convert**
```js
const converter = require('mention-converter');
const result = convert('<@!123456789>', {detail: true})
// {"id": "123456789", detail: {type: "user", mobile: fasle}}
```

**Simpled convert**
```js
const converter = require('mention-converter');
const result = convert('<@!123456789>')
// 123456789
```

**Discord bot [click here](https://moddy.js.org)**
**My github profile [click here](https://github.com/CutieCat6778)**
**Personal profile [click here](https://moddy.js.org/owner)**
