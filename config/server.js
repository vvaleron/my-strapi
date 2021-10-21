module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  "production": true,
  "autoReload": {
    "enabled": true
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '033e3ad5972a86fa6d40e818fcbf3f83'),
    },
  },
});
