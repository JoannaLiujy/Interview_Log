const curry = (fn, arity = fn.length, ...args) =>
  args.length >= arity ? fn(...args) : curry.bind(null, fn, arity, ...args);


curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2