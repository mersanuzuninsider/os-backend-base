import baseConfig from './base';


const config = Object.freeze({
  ...baseConfig.config,
  key: 'prod'
});

export default config;
