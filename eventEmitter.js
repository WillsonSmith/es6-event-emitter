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
