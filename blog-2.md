# utility types in typescript

### Pick
When we want to create a type, but the the properties of this type is already exist in another type. We can use `Pick` utility type to select specific properties and their type. 
</br>
For Example
</br>
```ts
type Product = {
    id: number;
    name:string;
    price:number;
    description:string;
}

type Blog = Pick<Product, "name" | "description">
// A new type created {
//    name:string;
//   description:string;
//}
```


### Omit
Omit is the opposite of Pick. When we need to define a type , But the properties are already exist in another type with some extra properties, by using Omit we can remove the properties that we do not need and keep the rest. 
</br>
For Example
</br>
```ts
type Product = {
    id: number;
    name:string;
    price:number;
    description:string;
}

type Blog = Omit<Product, "id" | "price">
// A new type created {
//    name:string;
//   description:string;
//}
```

# DRY z
To build a standard web application we must not duplicate our code. We have already use this concept "Dry" by using Omit and Pick utility type. 

```ts 
// (Not DRY)
function add1() {
  return 2 + 3;
}

function add2() {
  return 4 + 5;
} 

// (DRY)

function add(a: number, b: number) {
  return a + b;
}

```

Dry is a good idea. It help to simplify our codes and reduce repetition. 