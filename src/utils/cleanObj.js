export const cleanObj = (obj) => {
  for (const propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === false
    ) {
      delete obj[propName];
    }
  }
  return obj;
};
