const errorHandler = (err, req, res, next) => {
  // Line below means, we want to get the statusCode if its set, if not we want our status code to be set to 500
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // We can also have the stack trace, which gives us addition information, but we only want that if we're in development mode. So the line below means, if we're in production, show null, else show the stack.
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
