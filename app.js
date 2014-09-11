var app = angular.module('madlibs', ['ngAnimate'])
				 .constant('VERSION', 1.1);

app.controller('MadlibController', function(){
  this.data = {
    name : "",
    dirtyTask : "",
    obnoxiousCelebrity : "", 
    jobTitle : "", 
    celebrity : "", 
    hugeNumber : "", 
    tediousTask : "", 
    uselessSkill : "", 
    adjective : "", 
    gender : ""
  };

  this.isForm = true;

  this.submit = function(){
    this.isForm = false;
  };

  this.reset = function(){
      this.isForm = true;
      this.data = {
      name : "",
      dirtyTask : "",
      obnoxiousCelebrity : "", 
      jobTitle : "", 
      celebrity : "", 
      hugeNumber : "", 
      tediousTask : "", 
      uselessSkill : "", 
      adjective : "", 
      gender : ""
    };
  };
});