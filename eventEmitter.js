function EventEmitter() {

  let events = {};

  const EventsHandlers = {
    bind(event, callback) {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(callback);
    },
    unbind(event, callback) {
      events[event] = events[event].filter((event) => event !== callback);
    },
    trigger(event, ...args) {
      events[event].forEach((event) => event.apply(this, ...args));
    }
  }

  return {
    mixin(toObject) {
      Object.assign(toObject, EventsHandlers);
    }
  }
}

/**sample code**/

let storeEvents = EventEmitter();
let store = {
  value: 0
}

storeEvents.mixin(store);

store.bind('tick', function() {
  this.value += 1;
});
console.log(store.value);
store.trigger('tick');
console.log(store.value);
