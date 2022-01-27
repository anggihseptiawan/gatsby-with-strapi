module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b7f4850ba39add2d360323bd6df8afa'),
  },
});
