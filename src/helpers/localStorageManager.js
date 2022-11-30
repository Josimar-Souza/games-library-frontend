export const getItem = (key) => {
  const item = localStorage.getItem(key);
  return item;
};

export const saveItem = (item, key) => {
  localStorage.setItem(key, item);
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};
