define(function(require){
  require('foundation');
  require('foundation.reveal');
  require('foundation.abide');

  var AbideForm = require('app/AbideForm');

  $(function(){
    $(document).foundation();
    
    

    var myForm = new AbideForm('#myModal form');
    myForm.init();

    $('#myModal').foundation('reveal', 'open');

  });

  
});
