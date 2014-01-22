var app = app || {};

// Person model
// ------------
// Represents a user in the application

app.Person = Backbone.Model.extend({
  
  // Default attributes
  defaults: {
    name: 'no name',
    picture: ''
  }
});