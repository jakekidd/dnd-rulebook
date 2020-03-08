const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const THEME = require('./public/theme.json');

//#C03221';//'#F18F01';
// '@layout-header-background': '#BF3100',
// '@layout-header-background': '#540804',
// '@layout-header-background': '#81171B',

// Colors I like
// EDF7F6 white smoke
// 2660A4 lapis
// 2B2D42 gunmetal
// 3A3335 jet
// C03221 dark pastel red

// Previous:
// "HEADER_BG": "#2660A4",

// CA5310 burnt orange
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@layout-header-background': THEME.HEADER_BG,
      '@menu-bg': '@layout-header-background',
      '@font-size-base': `${THEME.BASE_FONT_SIZE}px`,
      '@primary-color': THEME.PRIMARY_COLOR, // primary color for all components
      '@text-color-secondary-dark': 'fade(@white, 85%)',
      '@font-family': '"Lora","Lora-Bold","NotoSerif","NotoSerifBold"',
      '@line-height-base': THEME.BASE_LINE_HEIGHT.toString(),
      // '@menu-item-color': '#CD5360'
      // '@link-color': '#1890ff', // link color
      // '@success-color': '#52c41a', // success state color
      // '@warning-color': '#faad14', // warning state color
      // '@error-color': '#f5222d', // error state color
      // '@font-size-base': '14px', // major text font size
      // '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
      '@text-color': 'rgba(0, 0, 0, 0.95)', // major text color
      // '@text-color-secondary' : 'rgba(0, 0, 0, .45)', // secondary text color
      // '@disabled-color' : 'rgba(0, 0, 0, .25)', // disable state color
      // '@border-radius-base': '4px', // major border radius
      // '@border-color-base': '#d9d9d9', // major border color
      // '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)' // major shadow for layers
    },
  }),
);