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
      { title: 'Search Categories', text: 'Select a search category to get more results as you type' },
      { title: 'Search Categories', text: 'Select a search category to get more results as you type' },
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
      { title: 'Test', text: 'Select a search category to get more results as you type' },
      { title: 'Test1', text: 'Select a search category to get more results as you type' },
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
  },
  {
    title: 'Legend',
    icon: 'legend',
    isTool: false,
    isActive: false,
    container: 'legend',
    component: 'Legend',
    path: '../Legend/Legend',
  },
  {
    title: 'Basemaps',
    icon: 'basemap',
    isTool: false,
    isActive: false,
    container: 'basemaps',
    component: 'Basemaps',
    path: '../Basemaps/Basemaps',
  },
  {
    title: 'Property Select',
    icon: 'selection',
    isTool: true,
    isActive: false,
    container: 'propertySelect',
    component: 'PropertySelect',
    path: '../PropertySelect/PropertySelect',
  },
  {
    title: 'Measure',
    icon: 'measure',
    isTool: true,
    isActive: false,
    container: 'measure',
    component: 'Measure',
    path: '../Measure/Measure',
  },
  {
    title: 'Sketch',
    icon: 'pencil',
    isTool: true,
    isActive: false,
    container: 'sketch',
    component: 'Sketch',
    path: '../Sketch/Sketch',
  },
  {
    title: 'Bookmarks',
    icon: 'bookmark',
    isTool: true,
    isActive: false,
    container: 'bookmarks',
    component: 'Bookmarks',
    path: '../Bookmarks/Bookmarks',
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
      { title: 'Wake County Open Data', href: 'https://data-wake.opendata.arcgis.com/' },
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
