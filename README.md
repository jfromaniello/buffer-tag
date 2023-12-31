A simpler way to write buffer literals in your code.

## Installation

```
npm i buffer-tag --save
```

## Usage

```js
import { utf8, hex } from 'buffer-tag';
// or const { utf8 } = require('buffer-tag);
```

You can use `utf8`, `hex`, etc has string templates:
```js
const buffer = utf8`foo bar`; //same as Buffer.from('foo bar', 'utf8');
```

You can also embed other strings with the same encoding:
```js
const foobar = hex`666f6f${'626172'}`
```

You can embed (which means concat) buffers:
```js
const bar = utf8`bar`;
const foobar = hex`666f6f${bar}`

console.log(foobar.toString('utf8'));
// outputs foobar
```

## Related

[bintag](https://www.npmjs.com/package/bintag) is a similar and more powerful package.

## License

MIT 2023 - José Romaniello
