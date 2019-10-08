export default Storage.prototype.set = (key, arr) => {
  console.log(arr);
  return this.setItem(key, JSON.stringify(arr));
};
