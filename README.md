# Mention-validator
It is library that support **Discord.js** comunity!
It will help you guys to convert those **string** that includes discord mentions form to just a simple **ID**!

#How to do it?

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

*If you want to visit my personal discord bot [click here](https://moddy.js.org)*
