export const mapId = '95092428774c4b1fb6a3b6f5fed9fbc4';

export const alert = {
  show: false,
  autoDismiss: true,
  color: 'yellow',
  icon: 'exclamation-mark-triangle',
  title: 'Maintenance',
  message: 'iMAPS will be unavailable due to scheduled maintenance on May 18th from 8PM to 12AM',
};

export const Actions = [
  {
    title: 'Property Search',
    icon: 'search',
    isTool: false,
    isActive: true,
    container: 'propertySearch',
    component: 'PropertyPanel',
    path: '../PropertyPanel/PropertyPanel',
    widget: null,
    tips: [
      { title: 'Click and Hold to Select', text: 'Click and hold on a property to select it from the map.' },
      { title: 'Search Categories', text: 'Select a search category to get more results as you type' },
      {
        title: 'New Layout',
        text: 'The property information is now displayed in an easier to read layout.  Deeds, photos and service have all been moved into a single display.',
      },
      {
        title: 'Display Additional Columns',
        text: 'In the new version, you can now display more columns on the property list. ',
      },
    ],
  },
  {
    title: 'Location Search',
    icon: 'pin',
    isTool: false,
    isActive: false,
    container: 'locationSearch',
    component: 'LocationSearch',
    path: '../LocationSearch/LocationSearch',
    tips: [
      {
        title: 'Search By Place',
        text: 'Search for places of interest such as schools and parks by typing the name of the school or park you are looking for.',
      },
    ],
  },
  {
    title: 'Layers',
    icon: 'layers',
    isTool: false,
    isActive: false,
    container: 'layers',
    component: 'Layers',
    path: '../Layers/Layers',
    tips: [
      {
        title: 'Group Layers',
        text: 'Layers in the layer list are now grouped based on category, making it easier to find layers.',
      },
    ],
  },
  {
    title: 'Legend',
    icon: 'legend',
    isTool: false,
    isActive: false,
    container: 'legend',
    component: 'Legend',
    path: '../Legend/Legend',
    tips: [
      {
        title: 'New Legend Widget',
        text: 'In the previous version of iMAPS, the legend was only avaiable in the layer list.  New to this version is a dedicated legend widget that will show the symbols for all visible layers.',
      },
    ],
  },
  {
    title: 'Basemaps',
    icon: 'basemap',
    isTool: false,
    isActive: false,
    container: 'basemaps',
    component: 'Basemaps',
    path: '../Basemaps/Basemaps',
    tips: [
      {
        title: 'Imagery Basemap',
        text: 'The lastest years of imagery are available in the Imagery basemap under the base maps option.  We recommend using this base map for imagery, unless you need to access historic imagery.',
      },
      {
        title: 'Esri Basemaps',
        text: 'You now have access to all basemaps created by Esri by select the Esri Basemaps option from the dropdown.',
      },
      {
        title: 'Property Color',
        text: 'If you switch to a dark themed basemap or an imagery basemap, the property lines will change to white for better visibility.  They will change back to black when on a light themed basemap.',
      },
      {
        title: 'Available Imagery',
        text: 'If you go to an area outside of Raleigh, the list of available imagery will change to show you what is available in your area.  Also it will switch to the latest year available and warn you the the imagery has changed.',
      },
    ],
  },
  {
    title: 'Property Select',
    icon: 'selection',
    isTool: true,
    isActive: false,
    container: 'propertySelect',
    component: 'PropertySelect',
    path: '../PropertySelect/PropertySelect',
    tips: [
      {
        title: 'Long Press to Select',
        text: 'You can now select a property by long pressing on a property on the map.  This can be done at any time, even without having the property select tool active.',
      },
    ],
  },
  {
    title: 'Measure',
    icon: 'measure',
    isTool: true,
    isActive: false,
    container: 'measure',
    component: 'Measure',
    path: '../Measure/Measure',
    tips: [
      {
        title: 'Coordinate Search',
        text: 'The coordinate search has been moved to the measure widget, previously this was available under location search.',
      },
    ],
  },
  {
    title: 'Sketch',
    icon: 'pencil',
    isTool: true,
    isActive: false,
    container: 'sketch',
    component: 'Sketch',
    path: '../Sketch/Sketch',
    tips: [
      {
        title: 'Custom Symbols',
        text: 'You can now specify custom symbols in the sketch tool by changing the fill color, outline color, size, etc. of your graphics.',
      },
    ],
  },
  {
    title: 'Bookmarks',
    icon: 'bookmark',
    isTool: true,
    isActive: false,
    container: 'bookmarks',
    component: 'Bookmarks',
    path: '../Bookmarks/Bookmarks',
    tips: [
      {
        title: 'Saving Bookmarks',
        text: 'Bookmarks are automatically saved to your local storage in your browser.  Next time you open iMAPS in the same browser you will see the bookmarks from your last session.',
      },
    ],
  },
  {
    title: 'Print',
    icon: 'print',
    isTool: true,
    isActive: false,
    container: 'print',
    component: 'Print',
    path: '../Print/Print',
  },
];

export const links = [
  {
    title: 'Help',
    links: [
      { title: 'Help Document', href: 'https://raleighnc.gov' },
      { title: 'Feedback', href: 'https://arcg.is/1GurDS' },
    ],
  },
  {
    title: 'Data Download',
    links: [
      { title: 'Wake County Open Data', href: 'https://data.wakegov.com/' },
      { title: 'Raleigh Open Data', href: 'https://data.raleighnc.gov/' },
    ],
  },
  {
    title: 'Links',
    links: [
      { title: 'Wake County', href: 'https://wakegov.com' },
      { title: 'City of Raleigh', href: 'https://raleighnc.gov/' },
    ],
  },
];

export const basemaps = {
  default: {
    id: 'f6329364e80c438a958ce74aadc3a89f',
  },
  imagery: {
    id: '492386759d264d49948bf7f83957ddb9',
  },
};

export const services = [
  {
    group: {
      title: 'Electoral',
      layers: [
        'Precincts',
        'US House of Representatives Districts',
        'NC House of Representatives Districts',
        'NC Senate Districts',
        'School Board Districts',
        'Board of Commissioners Districts',
        'Superior Court Districts',
        'Raleigh City Council',
        'Morrisville Town Council Districts',
      ],
    },
  },
  {
    group: {
      title: 'Environmental',
      layers: ['Floodplain', 'Soils', 'Critical Watersheds', 'Water Supply Watersheds'],
    },
  },
  {
    group: {
      title: 'Planning',
      layers: [
        'Angier Zoning',
        'Apex Zoning',
        'Cary Zoning',
        'County Zoning',
        'Fuquay-Varina Zoning',
        'Garner Zoning',
        'Holly Springs Zoning',
        'Morrisville Zoning',
        'Knightdale Zoning',
        'Rolesville Zoning',
        'Wake Forest Zoning',
        'Wendell Zoning',
        'Zebulon Zoning',
        'Corporate Limits',
        'Planning Jurisdictions',
        'Subdivisions',
        'Development Plans',
      ],
    },
  },
  {
    group: {
      title: 'Public Safety',
      layers: [
        'Raleigh Police Districts',
        'Sheriff Zones',
        'Fire Insurance Districts',
        'Fire Response Zones',
        'EMS Franchise Districts',
        'EMS Response Zones',
        'Garner Police Beats',
      ],
    },
  },
  {
    group: {
      title: 'Solid Waste',
      layers: ['Cary Collection Routes', 'Raleigh Solid Waste Collection Routes'],
    },
  },
];
