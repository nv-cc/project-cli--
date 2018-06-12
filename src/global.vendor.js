//please use require , not import
const vendors = {
  Vue: require('vue'),
};
vendors.forEach(v => v.default);
Object.assign(window, vendors);
