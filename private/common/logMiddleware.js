function logMiddleware(req, res, next) {
  console.log('Request started...');
  console.log(`Request: ${req.method} ${req.url}`);
  next();
  console.log('Request finished...');
}

module.exports = logMiddleware;
