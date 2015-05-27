(function() {
  app = {};
  app.Example = Backbone.Model.extend({
    defaults: function (){ return {
      hello: "cruel",
      world: []
    }},
    addEmphasis: function(arg) {
      return arg + "!"
    }
  });
})();