---
title: "Code Fence"
type: "tech" # or "idea"
topics: 
  - React
  - Rust
emoji: 👩‍💻
published: false
---


```vue:index.vue
<template>
  <div class="todo">
    <h1>TODO APP</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Todo',
});
</script>
```

```Dockerfile:Dockerfile
FROM ubuntu
ENV name value # comment
ENV name=value
CMD ["echo", "$name"]
```

```bash:foo.fish
bind -M $mode \cq foo
```

```diff
@@ -4,6 +4,5 @@
-    let foo = bar.baz([1, 2, 3]);
-    foo = foo + 1;
+    const foo = bar.baz([1, 2, 3]) + 1;
     console.log(`foo: ${foo}`);
```

```diff
@@ -4,6 +4,5 @@
-    let foo = bar.baz([1, 2, 3]);
-    foo = foo + 1;
+    const foo = bar.baz([1, 2, 3]) + 1;
     console.log(`foo: ${foo}`);
```

```js diff:aaa
@@ -4,6 +4,5 @@
-    let foo = bar.baz([1, 2, 3]);
-    foo = foo + 1;
+    const foo = bar.baz([1, 2, 3]) + 1;
     console.log(`foo: ${foo}`);
```

```diff js:aaa
@@ -4,6 +4,5 @@
-    let foo = bar.baz([1, 2, 3]);
-    foo = foo + 1;
+    const foo = bar.baz([1, 2, 3]) + 1;
     console.log(`foo: ${foo}`);
```

```js diff:aaa
@@ -4,6 +4,5 @@
let foo = bar.baz([1, 2, 3]);
foo = foo + 1;
+    const foo = bar.baz([1, 2, 3]) + 1;
console.log(`foo: ${foo}`);
```

``` js:fooBar.js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
// 👇can scroll horizontally
console.log(aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa);
```

``` js:example
var foo = function (bar) {
  return bar++;
};
```

``` html:<should escape>
var foo = function (bar) {
  return bar++;
};
```


```html
<div>a</div>
```

```diff html:html差分
     <div>a</div>
-    <div>b</div>
+    <div>c</div>
```

```html diff : html差分
     <div>a</div>
-    <div>b</div>
+    <div>c</div>
```


```"><img/onerror="alert(location)"src=.>
aaa
```