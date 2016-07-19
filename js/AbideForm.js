define(function(require){
  require('jqueryCookie');
  require('underscore');

  var AbideForm = function(obj){
    this.$form = $(obj);
    this.statesPartial = require('stache!partials/states');
    this.imagePaths = ['img/image01.jpg', 'img/image02.jpg'];
    this.imagePath = '';
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

    if( !$.cookie('imagePath') ) {
      this._setRandomImage();

      $.cookie('imagePath', this.imagePath);
      $image.attr('src', this.imagePath);
    } else {
      $image.attr('src', $.cookie('imagePath') );
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
  AbideForm.prototype.invalidForm = function(){
    console.log('Invalid Form Submission');
  };
  AbideForm.prototype.submitForm = function(){
    this.$form.submit();  
  };
  AbideForm.prototype._setRandomImage = function(){
    var random = _.random(this.imagePaths.length-1);
    this.imagePath = this.imagePaths[random];
  };  
  AbideForm.prototype.init = function(){
    this.addStatesDropdown();
    this.setRandomImage();
    this.registerEvents();
  };  


  return AbideForm;
});