define(function(require){
  require('foundation');
  require('foundation.reveal');
  require('foundation.abide');

  var statesPartial = require('stache!partials/states');

  $(function(){
    $('.state-dropdown').html( statesPartial() );


    $(document).foundation();
  });

  
});
