var PEIP = PEIP || {};



PEIP.Gateway = function(options, layer) {
   PEIP.Gateway .superclass.constructor.call(this, options, layer);
};

YAHOO.lang.extend(PEIP.Gateway , PEIP.Component, {
   
    component: 'Gateway', 
   render: function() {
 	
	this.addRightTerminal("request ch", "message_send", ["message_handle", "event_handle"]);
	this.addLeftTerminal("send", "input", ["output"]);
	this.addLeftTerminal("receive", "output", ["input"]);	
	this.addRightTerminal("reply ch", "message_handle", ["message_send", "event_send"]);
	
	PEIP.Gateway.superclass.render.call(this);
		
   }



   
});