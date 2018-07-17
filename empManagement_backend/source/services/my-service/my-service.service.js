// Initializes the `myService` service on path `/my-service`
const createService = require('./my-service.class.js');
const hooks = require('./my-service.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/my-service', createService(options));
  const service = app.service('my-service');
  app.use('/getServices', function (req, res) {
    service.find({}).then(services => {
      res.send({
        services: services
      });
    });
  });
  app.use('/updateServices', function (req, res) {
    service.update(1, req.body, {}).then(services => {
      res.send({
        services: services
      });

    });
  });
  
  // Get our initialized service so that we can register hooks


  service.hooks(hooks);
};
