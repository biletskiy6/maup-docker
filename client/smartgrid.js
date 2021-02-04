const smartgrid = require('smart-grid')

const settings = {
  outputStyle: 'scss',
  columns: 12,
  offset: '20px',
  mobileFirst: false,
  container: {
    maxWidth: '1480px',
    fields: '20px'
  },
  breakPoints: {
    lg: {
      width: '1680px',
      fields: '15px'
    },
    lgm: {
      width: '1600px',
      fields: '15px'
    },
    mdl: {
      width: '1450px',
      fields: '15px'
    },
    md: {
      width: '1366px',
      fields: '15px'
    },
    mdx: {
      width: '1280px',
      fields: '15px'
    },
    tablet: {
      width: '1024px',
      fields: '15px'
    },
    tabletl: {
      width: '992px',
      fields: '15px'
    },
    tabletx: {
      width: '768px',
      fields: '15px'
    },
    phonex: {
      width: '576px',
      fields: '10px'
    },
    phone: {
      width: '480px',
      fields: '10px'
    },
    iphone: {
      width: '320px',
      fields: '10px'
    }
  }
}

smartgrid('./theme/', settings)
