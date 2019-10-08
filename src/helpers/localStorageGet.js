export default Storage.prototype.get = function(key) {
  return JSON.parse(this.getItem(key));
};
