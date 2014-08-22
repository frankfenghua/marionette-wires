var Module = require('../common/module');
var Router = require('./router');


module.exports = Module.extend({
  initialize: function() {
    this.router = new Router({
      container: this.options.container
    });
  }
});
