define(function(require){
  require('foundation');
  require('foundation.reveal');
  require('foundation.abide');

  // Added functionality to a foundation.abide form
  var AbideForm = require('app/AbideForm');

  $(function(){
    $(document).foundation();
    
    var myForm = new AbideForm('#myModal form');
    myForm.init();

    // Uncomment out the following line to show the form immediately. Handy for styling.
    // $('#myModal').foundation('reveal', 'open');
  });

  
});
