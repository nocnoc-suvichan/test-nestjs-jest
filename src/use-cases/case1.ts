const sum = (a: number, b: number): number => {
  return a + b;
};

const fetchData = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('peanut butter');
      }, 200);
    } catch (e) {
      reject(e);
    }
  });
};

export { sum, fetchData };
