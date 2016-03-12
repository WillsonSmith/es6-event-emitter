## ES6 event emitter

or es2015 - whatever you want to call it


Sample code
```
let storeEvents = EventEmitter();
let store = {
  value: 0
}

storeEvents.mixin(store);

function increaseValue() {
  this.value += 1;
}

store.bind('tick', increaseValue);
console.log(store.value); // 0
store.trigger('tick');
console.log(store.value); // 1
store.unbind('tick', increaseValue);
store.trigger('tick');
console.log(store.value); // 1
```

This uses `Object.assign` you will need a polyfill for IE support.
