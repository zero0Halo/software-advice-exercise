define(function(require){
  require('foundation');
  require('foundation.reveal');
  require('foundation.abide');

  var statesPartial = require('stache!partials/states');

  $(function(){
    // $('#myModal').foundation('reveal', 'open');
    $('.state-dropdown').html( statesPartial() );

    $('a.button.submit').on('click',function(e){
      $(this).parents('form').submit();      
    });

    $(document).foundation();
  });

  
});
