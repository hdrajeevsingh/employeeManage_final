/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
    this.services = [
      { name: 'Web Development', price: 300,active:false },
      { name: 'Design', price: 400,active:false  },
      { name: 'Integration', price: 250,active:false  },
      { name: 'Training', price: 220,active:false  }
    ];
  }

  async find (params) {
    return  this.services;
  }

  async get (id, params) {
    return  this.services
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {   
      this.services.splice(data.index,1,data);      
      return  this.services;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
   this.services=[];
   return this.services;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
