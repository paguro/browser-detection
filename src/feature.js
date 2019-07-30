export function hasFeature(feature) {
  function inWindow(property) {
    return property in window;
  }

  function inObject(feature) {
    if (!feature.indexOf('.')) {
      return false;
    }

    var featurePath = feature.split('.');

    var object = featurePath[0];
    var property = featurePath[1];

    return (
      inWindow(object) &&
      (property in window[object] ||
        ('prototype' in window[object] && property in window[object].prototype))
    );
  }

  return inWindow(feature) || inObject(feature);
}
