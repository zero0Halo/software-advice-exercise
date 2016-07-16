requirejs.config({
    baseUrl: "js/lib",
    paths: {
      app: "../",
      views: "../views",

      jquery: "jquery.min",
      underscore: "underscore.min",
      backbone: "backbone.min",
      
      jqueryCookie: "jquery.cookie",
      modernizr: "modernizr",
      placeholder: "placeholder",
      fastclick: "fastclick",

      moustache: "moustache.min",
      text: "text",
      stache: "stache",

      foundation: "foundation/foundation",
      "foundation.abide": "foundation/foundation.abide",
      "foundation.accordion": "foundation/foundation.accordion",
      "foundation.alert": "foundation/foundation.alert",
      "foundation.clearing": "foundation/foundation.clearing",
      "foundation.dropdown": "foundation/foundation.dropdown",
      "foundation.equalizer": "foundation/foundation.equalizer",
      "foundation.interchange": "foundation/foundation.interchange",
      "foundation.joyride": "foundation/foundation.joyride",      
      "foundation.magellan": "foundation/foundation.magellan",
      "foundation.offcanvas": "foundation/foundation.offcanvas",
      "foundation.orbit": "foundation/foundation.orbit",
      "foundation.reveal": "foundation/foundation.reveal",
      "foundation.slider": "foundation/foundation.slider",
      "foundation.tab": "foundation/foundation.tab",
      "foundation.tooltip": "foundation/foundation.tooltip",
      "foundation.topbar": "foundation/foundation.topbar"
    },
    stache: {
      path: "../../templates/"
    },
    shim: {
    	backbone: {
    		deps: ["underscore", "jquery"],
    		exports: "Backbone"
    	},
      jqueryCookie: {
        deps: ["jquery"],
        exports: "jqueryCookie"
      },
      foundation: {
        deps: ["jquery", "modernizr", "placeholder", "jqueryCookie","fastclick"],
        exports: "foundation"
      },
      "foundation.abide": {
        deps: ['foundation']
      },
      "foundation.accordion": {
        deps: ['foundation']
      },
      "foundation.alert": {
        deps: ['foundation']
      },
      "foundation.clearing": {
        deps: ['foundation']
      },
      "foundation.dropdown": {
        deps: ['foundation']
      },
      "foundation.equalizer": {
        deps: ['foundation']
      },
      "foundation.interchange": {
        deps: ['foundation']
      },
      "foundation.joyride": {
        deps: ['foundation']
      },
      "foundation.magellan": {
        deps: ['foundation']
      },
      "foundation.offcanvas": {
        deps: ['foundation']
      },
      "foundation.orbit": {
        deps: ['foundation']
      },
      "foundation.reveal": {
        deps: ['foundation']
      },
      "foundation.slider": {
        deps: ['foundation']
      },
      "foundation.tab": {
        deps: ['foundation']
      },
      "foundation.tooltip": {
        deps: ['foundation']
      },
      "foundation.topbar": {
        deps: ['foundation']
      }
    }
});

requirejs(["app/main"]);