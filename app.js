var app = angular.module('madlibs', [])
				 .constant('VERSION', 1.1);

app.controller('MadlibController', function(){
	this.mName = "Male Name";
	this.dirtyTask = "Dirty Task";
	this.obnoxiousCelebrity = "Obnoxious Celebrity";
	this.jobTitle = "Job Title";
	this.celebrity = "Celebrity";
	this.hugeNumber = "Huge Number";
	this.tediousTask = "Tedious Task";
	this.uselessSkill = "Useless Skill";
	this.adjective = "Adjective";
});