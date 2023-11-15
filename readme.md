# Cn

Util for merging tailwind classes with clsx and tailwind-merge.

## Install

```
$ npm install --save @nhui/cn
```

## Usage

```js
  import cn from "@nhui/cn"
  // or
  import {cn} from "@nhui/cn"

  cn("bg-zinc-50 text-zinc-100", true && "bg-zinc-100", false && "text-zinc-50")
  //=> "text-zinc-100 bg-zinc-100"
```