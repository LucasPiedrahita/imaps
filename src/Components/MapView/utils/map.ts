/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import Compass from '@arcgis/core/widgets/Compass';
import Track from '@arcgis/core/widgets/Track';
import Home from '@arcgis/core/widgets/Home';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import Expand from '@arcgis/core/widgets/Expand';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Extent from '@arcgis/core/geometry/Extent';
import * as type from '@arcgis/core/smartMapping/symbology/type';
import Collection from '@arcgis/core/core/Collection';
import { handlePolygonLabels } from './labeling';

export const createSelectionLayer = (view: __esri.MapView) => {
  const layer = new FeatureLayer({
    source: [],
    editingEnabled: true,
    listMode: 'hide',
    legendEnabled: false,
    geometryType: 'polygon',
    spatialReference: view.spatialReference,
    id: 'selection-layer',
    objectIdField: 'OBJECTID',
    fields: [
      { name: 'OBJECTID', type: 'oid' },
      { name: 'selected', type: 'small-integer' },
      { name: 'PIN_NUM', type: 'string' },
    ],
    renderer: new UniqueValueRenderer({
      field: 'selected',
      defaultSymbol: new SimpleFillSymbol({
        style: 'none',
        outline: {
          color: [255, 255, 0],
          width: 2,
        },
      }),
      uniqueValueInfos: [
        {
          value: 1,
          symbol: new SimpleFillSymbol({
            style: 'none',
            outline: {
              color: '#da4246',
              width: 3,
            },
          }),
          label: 'single',
        },
        {
          value: 0,
          symbol: new SimpleFillSymbol({
            style: 'none',
            outline: {
              color: '#ffe44b',
              width: 2,
            },
          }),
          label: 'multiple',
        },
      ],
    }),
    orderBy: [
      {
        order: 'descending',
        field: 'selected',
      },
    ],
  });

  return layer;
};

export const enableStreetHitTest = (view: __esri.MapView, layer: __esri.FeatureLayer): __esri.Handle => {
  return view.on('click', (e: __esri.ViewClickEvent) => {
    const opacity = layer.opacity;
    const visible = layer.visible;
    layer.visible = true;
    layer.opacity = 0.001;

    view.hitTest(view.toScreen(e.mapPoint), { include: [layer] }).then(() => {
      layer.opacity = opacity;
      layer.visible = visible;
    });
  });
};

export const customizePopup = (view: __esri.MapView) => {
  const propertyLayer = view.map.allLayers.find((layer) => {
    return layer.type === 'feature' && layer.title.startsWith('Property');
  }) as __esri.FeatureLayer;
  view.whenLayerView(propertyLayer).then(() => {
    if (propertyLayer) {
      if (propertyLayer.popupTemplate) {
        propertyLayer.popupTemplate.actions = new Collection([
          {
            title: 'Select',
            id: 'property-select',
            className: 'esri-icon-search',
          } as __esri.ActionButton,
        ]);
      }
    }
  });
  //check for streets layer and display popup on hit test
  const streetsLayer = view.map.allLayers.find((layer) => {
    return layer.type === 'feature' && layer.title === 'Streets';
  }) as __esri.FeatureLayer;
  if (streetsLayer) {
    let clickHandler: __esri.Handle = enableStreetHitTest(view, streetsLayer);
    view.popup.watch('autoOpenEnabled', (autoOpenEnabled) => {
      if (autoOpenEnabled) {
        document.querySelector('.identify-widget')?.classList.add('active');
        clickHandler = enableStreetHitTest(view, streetsLayer);
      } else {
        document.querySelector('.identify-widget')?.classList.remove('active');
        clickHandler.remove();
      }
    });
  }
};

export const checkBasemapScheme = (activeBasemap: __esri.Basemap, view: __esri.MapView) => {
  const handle = activeBasemap.watch('loaded', (loaded) => {
    if (loaded) {
      const scheme = type.getSchemes({ basemap: activeBasemap, geometryType: 'polygon' });
      const propertyLayer = view.map.allLayers.find((layer) => {
        return layer.type === 'feature' && layer.title.startsWith('Property');
      }) as __esri.FeatureLayer;
      const renderer = (propertyLayer.renderer as __esri.SimpleRenderer).clone();
      if (scheme.basemapTheme === 'light') {
        (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 0;
        (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 0;
        (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 0;
      }
      const isImage =
        activeBasemap.baseLayers.filter((layer: __esri.Layer) => {
          return layer.type === 'imagery';
        }).length > 0;
      if (scheme.basemapTheme === 'dark' || isImage || activeBasemap.title.toLocaleLowerCase().includes('dark')) {
        (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 255;
        (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 255;
        (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 255;
      }
      propertyLayer.renderer = renderer;
      // propertyLayer.refresh();
      handle.remove();
    }
  });
};

export const createMapView = (mapRef: any, mapProperties: any, viewProperties: any): MapView => {
  const map = new WebMap({ portalItem: mapProperties });
  //hide login window if map contains layer that is not shared publicly

  viewProperties.map = map;
  viewProperties.container = mapRef;
  viewProperties.constraints = {
    minZoom: 9,
    geometry: {
      type: 'polygon',
      rings: [
        [
          [-78.757458636999957, 36.070027180000068],
          [-78.706070661999945, 36.08235327400007],
          [-78.499343823999936, 36.012638772000059],
          [-78.412423414999978, 35.970995647000052],
          [-78.391380921999939, 35.944141155000068],
          [-78.349012644999959, 35.93119994500006],
          [-78.339159479999978, 35.913731514000062],
          [-78.287870576999978, 35.891199952000079],
          [-78.245326746999979, 35.820179324000037],
          [-78.465650834999963, 35.70069565700004],
          [-78.708899327999973, 35.519481978000044],
          [-78.75843785699999, 35.53222101800003],
          [-78.995072509999943, 35.610178497000049],
          [-78.949385179999979, 35.753017484000054],
          [-78.949267660999965, 35.795162885000025],
          [-78.934367633999955, 35.834113977000072],
          [-78.906079037999973, 35.868106451000074],
          [-78.832520153999951, 35.868333760000041],
          [-78.811532427999964, 35.929404193000039],
          [-78.765480039999943, 35.921115857000075],
          [-78.75440329099996, 35.936258378000048],
          [-78.720010866999985, 35.962579521000066],
          [-78.700550740999972, 36.00774804200006],
          [-78.756361870999967, 36.027280124000072],
          [-78.757458636999957, 36.070027180000068],
        ],
      ],
    },
  };
  const view = new MapView(viewProperties);

  //workaround for bug when popup has multiple features
  // view.popup.watch('features', (features) => {
  //   console.log(features);
  //   requestAnimationFrame(() => {
  //     document.querySelector('.esri-popup__feature-menu-button')?.dispatchEvent(new MouseEvent('click'));
  //     requestAnimationFrame(() => {
  //       document.querySelector('.esri-popup__feature-menu-button')?.dispatchEvent(new MouseEvent('click'));
  //     });
  //   });
  // });

  return view;
};

export const checkLocalStorage = (view: MapView): void => {
  if (window.localStorage.getItem('imaps')) {
    const webmap: WebMap = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps') as string));
    webmap.load().then(() => {
      view.map.allLayers.forEach((layer) => {
        const lyr = webmap.allLayers.find((l) => {
          return layer.id === l.id;
        });
        layer.visible = lyr?.visible;
        layer.opacity = lyr?.opacity;
      });
    });

    view.map.basemap = webmap.basemap;

    view.extent = webmap.initialViewProperties.viewpoint.targetGeometry.extent;
  }
};
export const addOverviewMap = (view: __esri.MapView): Expand => {
  const expand: Expand = new Expand({
    mode: 'floating',
    expandIconClass: 'esri-icon-overview-arrow-top-left',
    collapseIconClass: 'esri-icon-overview-arrow-bottom-right',
  });

  view.ui.add(expand, 'bottom-right');
  return expand;
};
export const streetviewClick: IHandle | null = null;

export const createStreetviewButton = (): any => {
  const button = document.createElement('div');
  button.classList.add('streetview-widget');
  button.classList.add('esri-component');
  button.classList.add('esri-widget--button');
  button.classList.add('esri-widget');
  button.classList.add('map-tool');
  button.setAttribute('role', 'button');
  button.setAttribute('aria-label', 'Open streetview');
  button.setAttribute('title', 'Open streetview');
  const icon = document.createElement('calcite-icon');

  //icon.classList.add('esri-icon');
  icon.setAttribute('icon', '360-view');
  //icon.setAttribute('aria-hidden', 'true');

  const text = document.createElement('span');
  text.classList.add('esri-icon-font-fallback-text');
  text.textContent = 'Open streetview';
  button.appendChild(icon);
  button.appendChild(text);

  return button;
};
export const createIdentifyButton = (view: MapView): any => {
  const infoButton = document.createElement('div');
  infoButton.classList.add('identify-widget');
  infoButton.classList.add('esri-component');
  infoButton.classList.add('esri-widget--button');
  infoButton.classList.add('esri-widget');
  infoButton.classList.add('active');
  infoButton.classList.add('map-tool');

  infoButton.setAttribute('role', 'button');
  infoButton.setAttribute('aria-label', 'Identify features');
  infoButton.setAttribute('title', 'Identify features');
  const icon = document.createElement('span');
  icon.classList.add('esri-icon');
  icon.classList.add('esri-icon-description');
  icon.setAttribute('aria-hidden', 'true');

  const text = document.createElement('span');
  text.classList.add('esri-icon-font-fallback-text');
  text.textContent = 'Idenfity features';
  infoButton.appendChild(icon);
  infoButton.appendChild(text);
  view.popup.autoOpenEnabled = true;
  return infoButton;
};

export const createAlert = () => {
  const alert = document.createElement('calcite-alert');

  alert.setAttribute('scale', 'm');
  alert.setAttribute('color', 'red');
  alert.setAttribute('icon', 'exclamation-mark-triangle');
  alert.classList.add(document.body.classList.contains('dark') ? 'calcite-theme-dark' : 'calcite-theme-light');
  const title = document.createElement('div');
  title.slot = 'title';
  title.textContent = 'Required layers missing from web map';
  const message = document.createElement('div');
  message.slot = 'message';
  message.textContent = 'iMAPS cannot load, please contact';
  const link = document.createElement('a');
  link.slot = 'link';
  link.href = 'mailto:gis@wakegov.com';
  link.textContent = 'Wake County GIS';
  alert.appendChild(title);
  alert.appendChild(message);
  alert.append(link);
  document.body.appendChild(alert);
  alert.setAttribute('active', '');
};
export const createMapWidgets = (view: MapView): any[] => {
  setTimeout(() => {
    handlePolygonLabels(view);
  }, 5000);
  const widgets = [];
  const identify = createIdentifyButton(view);
  widgets.push(identify);
  view.ui.add(identify, 'top-left');

  const streetview = createStreetviewButton();
  widgets.push(streetview);
  view.ui.add(streetview, 'top-left');

  const home = new Home({
    view: view,
    goToOverride: (view: __esri.MapView | __esri.SceneView) => {
      view.goTo(
        new Extent({
          xmin: -79.65669272952547,
          xmax: -77.64619468265059,
          ymin: 35.02761892388883,
          ymax: 36.52937589457206,
          spatialReference: { wkid: 4326 },
        }),
      );
    },
  });
  view.ui.add(home, 'top-left');
  widgets.push(home);
  const compass = new Compass({ view: view });
  view.ui.add(compass, 'top-left');
  widgets.push(compass);
  const track = new Track({ view: view });
  view.ui.add(track, 'top-left');
  widgets.push(track);
  const scalebar = new ScaleBar({ view: view });
  view.ui.add(scalebar, 'bottom-left');
  widgets.push(scalebar);
  return widgets;
};
