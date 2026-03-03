module.exports = {
  apps: [
    {
      name: "qryptshield-demo",
      script: "server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        PORT: 3000,
        APP_ENV: "DEV"
      },
      env_uat: {
        PORT: 3000,
        APP_ENV: "UAT"
      }
    }
  ]
};