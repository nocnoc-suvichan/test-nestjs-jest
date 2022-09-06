const forEach = (
  items: number[],
  callback: (arg: any, index?: number) => void,
) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
};
export { forEach };
export const foo = 'foo';
export const bar = () => 'bar';
export default () => 'baz';
