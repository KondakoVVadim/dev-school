function getRootProperty(obj, targetValue) {
  for (const key in obj) {
    if (Array.isArray(obj[key]) && obj[key].includes(targetValue)) {
      return key;
    } else if (typeof obj[key] === 'object') {
      const result = getRootProperty(obj[key], targetValue);
      if (result) {
        return key;
      }
    }
  }
  return null;
}

