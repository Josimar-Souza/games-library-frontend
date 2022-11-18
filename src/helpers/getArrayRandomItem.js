const getArrayRandomItem = (array) => {
  const index = Math.floor(Math.random() * (array.length - 1));

  return array[index];
};

export default getArrayRandomItem;
