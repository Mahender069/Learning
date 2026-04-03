//methods for implementing api versioning

const { version } = require("react");

//by url
const urlVersioning = (version) => (req, res, next) => {
  if (req.path.startsWith(`/api/${version}`)) {
    next();
  } else {
    res.status(404).json({
      // something
    });
  }
};

//By header
const headerVersioning = (version) => (req, res, next) => {
  if (req.headers("Accept-Version") == version) {
    next();
  } else {
    res.json({});
  }
};

//by content type
// instead of application/json -> application/vnd.api.v1+json

const contenttypeVersioning = (version) => (req, res, next) => {
  const acceptHeader = req.headers.accept;
  if (acceptHeader.includes(version)) {
    next();
  } else {
    res.json({
        //something
    })
  }
};


module.exports={urlVersioning,headerVersioning,contenttypeVersioning};
