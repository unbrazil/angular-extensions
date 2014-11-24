(function () {
    'use strict';

    var app = angular.module('app');

    app.filter('brPhone', function(){
    	return function(phoneNumber){
    		if(!phoneNumber) return "";
    		
    		var ddd = phoneNumber.substring(0,2);
    		var isNewSize = phoneNumber.length > 10;
    		var first = null;
    		var second = null;
    		
    		if(isNewSize){
				first = phoneNumber.substring(2, 7);
				second = phoneNumber.substring(7, 11);
    		}
    		else{
    			first = phoneNumber.substring(2, 6);
    			second = phoneNumber.substring(6, 10);
    		}
    		
    		return "(" + ddd + ") " + first + "-" + second;
    	};
    });
    
    app.filter('skypeCallUrl', function(){
    	return function(value){
    		if(!value) return "";
    		
    		return "skype://" + value + "?call";
    	};
    });
    
    app.filter('skypeUrl', function(){
    	return function(value){
    		if(!value) return "";
    		
    		return "skype://" + value;
    	};
    });

})();