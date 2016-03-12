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
      let handlers = ['bind', 'unbind', 'trigger'];
      if (typeof toObject === 'function') {
        handlers.forEach((handler) => toObject.prototype[handler] = EventsHandlers[handler]);
      } else {
        handlers.forEach((handler) => toObject[handler] = EventsHandlers[handler]);
      }
      // When there is more support, the above can be replace with Object.assign
      // Object.assign(toObject, EventsHandlers);
    }
  }
}
