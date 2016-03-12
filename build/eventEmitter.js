'use strict';

function EventEmitter() {

  var events = {};

  var EventsHandlers = {
    bind: function bind(event, callback) {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(callback);
    },
    unbind: function unbind(event, callback) {
      events[event] = events[event].filter(function (event) {
        return event !== callback;
      });
    },
    trigger: function trigger(event) {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      events[event].forEach(function (event) {
        return event.apply.apply(event, [_this].concat(args));
      });
    }
  };

  return {
    mixin: function mixin(toObject) {
      Object.assign(toObject, EventsHandlers);
    }
  };
}

/**sample code**/

var storeEvents = EventEmitter();
var store = {
  value: 0
};

storeEvents.mixin(store);

store.bind('tick', function () {
  this.value += 1;
});
console.log(store.value);
store.trigger('tick');
console.log(store.value);

//# sourceMappingURL=eventEmitter.js.map