const logRequest = (req, res, next) => {
  console.log("log req ke Path :", req.path);
  next();
};

module.exports = logRequest;
