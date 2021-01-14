export const environment = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    // apiUrl: 'https://gamerapp-api-dev.azurewebsites.net',
    apiUrl: 'https://gamerapp-api.azurewebsites.net',
  },
  test: {
    apiUrl: 'https://gamerapp-api-dev.azurewebsites.net',
  },
  production: {
    apiUrl: 'https://gamerapp-api.azurewebsites.net',
  },
}[environment];

export const SITE_TITLE = 'GamerApp - Comunidade e Loja de Jogos Digitais';

export default configs;
