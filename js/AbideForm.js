define(function(require){
  require('jqueryCookie');
  require('underscore');

  var AbideForm = function(obj){
    this.$form = $(obj);
    this.statesPartial = require('stache!partials/states');
    this.classNames = ['advice', 'reviews', 'research'];
    this.className = '';
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
  AbideForm.prototype.setRandomImage = function(){
    var $image = this.$form.find('.cookie-image');

    if( !$.cookie('className') ) {
      this._setRandomClass();

      $.cookie('className', this.className);
      $image.addClass(this.className);
    } else {
      $image.addClass( $.cookie('className') );
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
    var formData = this.$form.serializeArray();
    this._setRandomClass();

    for(var i=0;i<formData.length;i++){
      var key = formData[i].name;
      var value = formData[i].value;

      this.jsonData[key] = value;
    };

    this.jsonData['className'] = this.className;
    $.cookie('className', this.className);

    console.log(this.jsonData);
  };
  AbideForm.prototype.invalidForm = function(){
    console.log('Invalid Form Submission');
  };
  AbideForm.prototype.submitForm = function(){
    this.$form.submit();  
  };
  AbideForm.prototype._setRandomClass = function(){
    var random = _.random(this.classNames.length-1);
    this.className = this.classNames[random];
  };  
  AbideForm.prototype.init = function(){
    this.addStatesDropdown();
    this.setRandomImage();
    this.registerEvents();
  };  


  return AbideForm;
});