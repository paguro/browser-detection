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
  isMobile: function() {
    return helpers.hasFeature('orientation');
  },

  hasPlugin: function(name) {
    var plugins = helpers.getFeature('navigator.plugins');

    if (typeof plugins[name] !== 'undefined') {
      return true;
    }

    for (var plugin in plugins) {
      if (plugins[plugin]['name'] === name) {
        return true;
      }
    }

    return false;
  },

  windowObject: window
};
export default helpers;
