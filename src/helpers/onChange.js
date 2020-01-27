export default (objToWatch, onChangeFunction) => {
  const handler = {
    set(target, property, value, receiver) {
      onChangeFunction(target, property, value, receiver);

      return Reflect.set(target, property,
        typeof value === 'object' && value !== null
          ? new Proxy(value, handler)
          : value);
    },
    deleteProperty(target, property) {
      onChangeFunction(target, property);

      return Reflect.deleteProperty(target, property);
    }
  };

  return new Proxy(objToWatch, handler);
}
