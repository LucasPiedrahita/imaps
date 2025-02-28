/* eslint-disable @typescript-eslint/no-explicit-any */
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import * as type from '@arcgis/core/smartMapping/symbology/type';
export const createOverview = (view: __esri.MapView): __esri.MapView => {
  const map: ArcGISMap = new ArcGISMap({ basemap: view.map.basemap });
  const overview = new MapView({
    map: map,
    navigation: {
      browserTouchPanEnabled: false,
      mouseWheelZoomEnabled: false,
      gamepad: {
        enabled: false,
      },
    },
    container: 'overviewMap',
  });

  overview.on('drag', function (event) {
    event.stopPropagation();
  });
  overview.ui.remove('zoom');
  overview.ui.remove('attribution');
  return overview;
};
const setGraphicSymbol = (overview: __esri.MapView): SimpleFillSymbol | undefined => {
  const scheme = type.getSchemes({ basemap: overview.map.basemap, geometryType: 'polygon' });
  const isImage =
    overview.map.basemap.baseLayers.filter((layer: __esri.Layer) => {
      return layer.type === 'imagery';
    }).length > 0;
  if (scheme.basemapTheme === 'light' && !isImage && !overview.map.basemap.title.includes('Dark')) {
    return new SimpleFillSymbol({ color: { r: 0, g: 0, b: 0 } as __esri.Color });
  }

  if (scheme.basemapTheme === 'dark' || isImage || overview.map.basemap.title.includes('Dark')) {
    return new SimpleFillSymbol({ color: { r: 255, g: 255, b: 255 } as __esri.Color });
  }
};
export const configureOverview = (overview: __esri.MapView, mainView: __esri.MapView): void => {
  overview.map.basemap = mainView.map.basemap;
  overview.constraints = mainView.constraints;
  let extent = mainView.extent.clone();
  extent.expand(4);
  overview.extent = extent;
  const graphicLayer = new GraphicsLayer({ listMode: 'hide', opacity: 0.5 });
  graphicLayer.add(new Graphic({ symbol: setGraphicSymbol(overview) }));
  overview.map.add(graphicLayer);
  mainView.watch(['stationary'], () => {
    graphicLayer.graphics.getItemAt(0).geometry = mainView.extent;
    extent = mainView.extent.clone();
    extent.expand(4);
    overview.goTo({ target: extent }, { duration: 1000, easing: 'ease' });
  });
  mainView.map.watch('basemap', (basemap) => {
    overview.map.basemap = basemap;
    graphicLayer.graphics.getItemAt(0).symbol = setGraphicSymbol(overview) as __esri.SimpleFillSymbol;
  });
  mainView.watch('rotation', (rotation) => {
    (overview as any).rotation = rotation;
  });
};
