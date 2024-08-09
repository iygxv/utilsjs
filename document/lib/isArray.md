# isArray

## 描述
判断给定的值是否为数组。该函数利用 JavaScript 内置的 Array.isArray 方法来确定值的类型

## 参数
- value (any) : 任意值，可能是数组或其他类型

## 返回
- 返回一个布尔值，指示值是否为数组

## 例子
```js
isArray([1, 2, 3])
// => true

isArray("Hello")
// => false

isArray({ key: "value" })
// => false

isArray([])
// => true
```