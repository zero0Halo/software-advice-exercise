define(function(require){
  require('jqueryCookie');
  require('underscore');

  // Basic constructor
  var AbideForm = function(obj){
    this.$form = $(obj);
    this.statesPartial = require('stache!partials/states');
    this.imagePaths = ['img/image01.jpg', 'img/image02.jpg'];
    this.imagePath = '';
    this.jsonData = {};

    // I very much like the way events are registered in Backbone.
    // Very readable and consolidated. 
    // This object will be parsed in the .registerEvents method.
    this.events = {
      'valid.fndtn.abide form': 'validForm', // [event, [object]] : [function]
      'invalid.fndtn.abide form': 'invalidForm',
      'click a.button.custom-submit': 'submitForm'        
    };
  };

  // Adds the state dropdown if the .state-dropdown class exists
  AbideForm.prototype.addStatesDropdown = function(){
    var $obj = this.$form.find('.state-dropdown');
    
    if($obj.length > 0){
      $obj.html( this.statesPartial() );
    }
  };

  // Gets the path of the random image and applys it.
  AbideForm.prototype.applyRandomImage = function(){
    var $image = this.$form.find('.cookie-image');

    if( !$.cookie('imagePath') ) {
      this._setRandomImage();

      $.cookie('imagePath', this.imagePath);
      $image.attr('src', this.imagePath);
    } else {
      $image.attr('src', $.cookie('imagePath') );
    }
  };

  // Registers events declared in the constructor
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

  // Only fires if the form is valid when the submit button is clicked.
  AbideForm.prototype.validForm = function(){
    var formData = this.$form.serializeArray();
    this._setRandomImage();

    for(var i=0;i<formData.length;i++){
      var key = formData[i].name;
      var value = formData[i].value;

      this.jsonData[key] = value;
    };

    this.jsonData['imagePath'] = this.imagePath;
    $.cookie('imagePath', this.imagePath);

    console.log(this.jsonData);
  };

  // Only fires if the form is invalid when the submit button is clicked.
  AbideForm.prototype.invalidForm = function(){
    console.log('Invalid Form Submission');
  };

  // In all candor, this method is most likely not necessary.
  // However since I was co-opting the submit method from abide, it seemed prudent to build a method of my own.
  // Could be useful for later upgrades to the functionality.
  AbideForm.prototype.submitForm = function(){
    this.$form.submit();  
  };

  // Draws a random image path from those set in the constructor and sets it to .imagePath
  AbideForm.prototype._setRandomImage = function(){
    var random = _.random(this.imagePaths.length-1);
    this.imagePath = this.imagePaths[random];
  };  

  // Call this to fire off the prototype.
  AbideForm.prototype.init = function(){
    this.addStatesDropdown();
    this.applyRandomImage();
    this.registerEvents();
  };  


  return AbideForm;
});