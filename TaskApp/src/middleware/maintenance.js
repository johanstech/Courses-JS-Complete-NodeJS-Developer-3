const maintenanceMiddleware = (req, res, next) => {
  res.status(503).send({ error: "Temporarily unavailable." });
};

module.exports = maintenanceMiddleware;
