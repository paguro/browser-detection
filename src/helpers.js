var helpers = {
  getFeature: function(feature) {
    return helpers.getProperty(helpers.windowObject, feature);
  },
  hasFeature: function(feature) {
    return typeof helpers.getFeature(feature) !== 'undefined';
  },
  hasStyle: function(name) {
    var style = helpers.windowObject.document.documentElement.style;
    return typeof style[name] !== 'undefined';
  },
  getProperty: function(target, path) {
    var segment;

    path = path.split('.');

    while ((segment = path.shift())) {
      if (!(segment in target)) {
        return;
      }

      target = target[segment];
    }

    return target;
  },
  windowObject: window
};

export default helpers;
