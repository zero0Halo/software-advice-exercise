define(function(require){
  var AbideForm = function(obj){
    this.$form = $(obj);
    this.statesPartial = require('stache!partials/states');
    this.jsonData = {};
    this.events = {
      'valid.fndtn.abide form': 'validForm',
      'invalid.fndtn.abide form': 'invalidForm',
      'click a.button.custom-submit': 'submitForm'        
    };
  };
  AbideForm.prototype.addStatesDropdown = function(){
    var $obj = this.$form.find('.state-dropdown');
    
    if($obj.length > 0){
      $obj.html( this.statesPartial() );
    }
  };
  AbideForm.prototype.registerEvents = function(){
    var split, event, $obj, func;

    for(var e in this.events){
      split = e.split(' ');
      event = split[0];
      $obj = split[1] === 'form' ? this.$form : this.$form.find(split[1]);
      func = this[this.events[e]].bind(this);

      $obj.on(event, func);
    }
  };
  AbideForm.prototype.validForm = function(){
    console.log(this.jsonData);
  };
  AbideForm.prototype.invalidForm = function(){
    console.log('Invalid Form Submission');
  };
  AbideForm.prototype.submitForm = function(){
    var formData = this.$form.serializeArray();

    for(var i=0;i<formData.length;i++){
      var key = formData[i].name;
      var value = formData[i].value;

      this.jsonData[key] = value;
    };

    this.$form.submit();  
  };
  AbideForm.prototype.init = function(){
    this.addStatesDropdown();
    this.registerEvents();
  };  


  return AbideForm;
});