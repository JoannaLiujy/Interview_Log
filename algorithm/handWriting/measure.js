function measure(target, name, descriptor) {
  const oldValue = descriptor.value;

  descriptor.value = async function() {
      console.time(name);
      const ret = await oldValue.apply(this, arguments);
      console.timeEnd(name);
      return ret;
  };

  return descriptor;
}
