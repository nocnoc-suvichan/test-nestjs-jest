let data = [];

const setData = (input) => {
  data.push(input);
};

const getData = () => {
  return data;
};

const clearData = () => {
  data = [];
};

const isFound = (input) => {
  return data.includes(input);
};

export { setData, getData, clearData, isFound };
