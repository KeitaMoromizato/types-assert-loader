# types-assert loader for webpack

Using [types-assert](https://github.com/KeitaMoromizato/types-assert) in browser.

## Install

```
$ npm i types-assert-loader -D
```

## How To Use

`webpack.config`.

```
{
  module: {
    loaders: [
      { test: /\.ts$/, loader: "types-assert" }
    ]
  }
}
```

Using TypeScript type definition files.

`type.ts`

```ts
interface Interface1 {
  stringProp: string;
  numProp: number;
}
```


```
import assert from 'types-assert/assert';

import { Interface1 } from './type.ts';
  
const obj1 = {
  stringProp: "hoge",
  numProp: "2"
};
 
assert(obj1, Interface1);
// => throw Error!! 
```

## License

MIT
