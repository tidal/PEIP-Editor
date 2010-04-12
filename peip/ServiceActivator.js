var PEIP = PEIP || {};


/**
 * Container with left inputs and right outputs
 * @class InOutContainer
 * @extends WireIt.Container
 * @constructor
 * @param {Object} options
 * @param {WireIt.Layer} layer
 */
PEIP.ServiceActivator = function(options, layer) {
   PEIP.ServiceActivator .superclass.constructor.call(this, options, layer);
};

YAHOO.lang.extend(PEIP.ServiceActivator , PEIP.Component, {
   
   component: 'ServiceActivator',
   render: function() {
 	
	this.addRightTerminal("input ch", "message_handle", ["message_send", "event_send"]);
	this.addLeftTerminal("service", "reference", ["object"]);
	this.addRightTerminal("output ch", "message_send", ["message_handle", "event_handle"]);  
	
	PEIP.ServiceActivator.superclass.render.call(this);
		
   }



   
});