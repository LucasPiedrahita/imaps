import * as promiseUtils from '@arcgis/core/core/promiseUtils';
export const geometryChanged = (
  view: __esri.MapView,
  layer: __esri.FeatureLayer,
  geometry: __esri.Geometry,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  return promiseUtils.create((resolve, reject) => {
    if (geometry != undefined) {
      layer
        ?.queryFeatures({
          geometry: geometry,
          outFields: ['OBJECTID', 'REID', 'PIN_NUM'],
          returnGeometry: true,
          outSpatialReference: view?.spatialReference,
        })
        .then((featureSet) => {
          view?.goTo(featureSet.features, { duration: 1000, easing: 'ease' });
          const oids = featureSet.features.map((feature) => {
            return feature.getObjectId();
          });
          layer.queryRelatedFeatures({ relationshipId: 0, objectIds: oids, outFields: ['*'] }).then((result) => {
            const reloids: number[] = [];
            const features: __esri.Graphic[] = [];
            oids.forEach((oid) => {
              result[oid]?.features.forEach((feature: __esri.Graphic) => {
                reloids.push(feature.getAttribute('OBJECTID'));
                features.push(feature);
              });
            });
            if (reloids.length) {
              resolve({
                where: `OBJECTID in (${reloids.toString()})`,
                features: features,
                properties: featureSet.features,
              });
            } else {
              reject();
            }
          });
        });
    }
  });
};

export const setSearchParams = (features: __esri.Graphic[]): void => {
  const pins: string[] = features.map((feature: __esri.Graphic) => {
    return feature.getAttribute('PIN_NUM');
  });
  //	const url = new URL(document.URL);
  const searchParams = new URLSearchParams();
  if (pins) {
    searchParams.set('pins', pins.toString());

    const state = { pins: pins.toString() };
    if (history.state) {
      if (history.state.pins != state.pins) {
        history.pushState({ pins: pins.toString() }, '', `${location.pathname}?${searchParams.toString()}`);
      }
    } else {
      history.pushState({ pins: pins.toString() }, '', `${location.pathname}?${searchParams.toString()}`);
    }

    //url.searchParams
  } else {
    history.replaceState(history.state, '', location.pathname);
  }
};
