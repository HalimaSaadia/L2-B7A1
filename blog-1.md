# any vs unknown

## Introduction

In TypeScript, we try to make our code safe during development.  
That means we want to avoid mistakes before the program runs.

But there is one type called **`any`** that can break this safety.  
That’s why people call it a **“type safety hole.”**

There is another type called **`unknown`**, which is a bit safer.



---

## 1. What is `any` and why it is less safer?

`any` means:  
*  “I don’t care what type this is”

So TypeScript stops checking it.

### Example:

```ts
let data: any;

data = "Hello";
data.toUpperCase(); // this will not give any error or warning while developing

data = 10;
data.toUpperCase(); //  Runtime error (crash!)

```
## What is unknown and why it is safer?
`unknown` means 
* “I don’t know the type yet but Typescript does not let you use it directly”

```ts
let data2: unknown;
data2 = "Hello";

data2.toUpperCase();  //Error before runtime
```

## Type Narrowing
* We check the type before using it

```ts
let test: unknown;

data = "Hello";

if (typeof test === "string") {
  console.log(test.toUpperCase()); 
}
```

### If we always use unknown instead of any, our code will be much safer and easier to maintain. We should not trust unknown data. First narrow down the type, then use it safely.