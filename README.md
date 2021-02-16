# Mention-converter
It is library that support **Discord.js** community!
It will help you guys to convert those **string** that includes discord mentions string form to a simple **ID**!

# How to install it
You can simple install with this command here
```
npm install mention-converter
```

# How to do it?

**Detailed**
```js
const converter = require('mention-converter');
const result = converter('<@!123456789>', {detail: true})
// {"id": "123456789", detail: {type: "user", mobile: false}}
```

**Simpled**
```js
const converter = require('mention-converter');
const result = converter('<@!123456789>')
// 123456789
```

**Discord bot [click here](https://moddy.js.org)**

**My github profile [click here](https://github.com/CutieCat6778)**

**Personal profile [click here](https://moddy.js.org/owner)**
