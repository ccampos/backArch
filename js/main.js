// Require.js allows us to configure shortcut aliases
// Their usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app'
], function(App) {
  // The "app" dependency is passed in as "App"
  App.initialize();
});