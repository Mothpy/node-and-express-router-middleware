// utils/validateNameLength.js

const validateNameLength = (req, res, next) => {
  const name = req.params.name;
  if (name.length >= 3) {
    next(); // Move on to the next middleware or route handler
  } else {
    next("Name length is too short."); // Trigger error handling middleware
  }
};

module.exports = validateNameLength;
