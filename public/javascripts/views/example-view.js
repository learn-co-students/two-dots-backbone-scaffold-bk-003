(function() {
  app.ExampleView = Backbone.View.extend({
    events: {
      "click": "handleClick"
    },
    initialize : function() {
      this.example = new app.Example();
    },
    handleClick: function() {
      console.log("clicked!");
    }
  });
})();