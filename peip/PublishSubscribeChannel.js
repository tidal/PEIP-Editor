var PEIP = PEIP || {};


/**
 * Container with left inputs and right outputs
 * @class InOutContainer
 * @extends WireIt.Container
 * @constructor
 * @param {Object} options
 * @param {WireIt.Layer} layer
 */
PEIP.PublishSubscribeChannel = function(options, layer) {
   PEIP.PublishSubscribeChannel .superclass.constructor.call(this, options, layer);
};

YAHOO.lang.extend(PEIP.PublishSubscribeChannel , PEIP.Component, {
   
   component: 'PublishSubscribeChannel',
   render: function() {
  
	this.addLeftTerminal("send", "message_handle", ["message_send"]);
	this.addRightTerminal("publish", "message_send", ["message_handle", "event_handle"]);
	this.addRightTerminal("events", "message_send", ["message_handle", "event_handle"]);
	PEIP.Gateway.superclass.render.call(this);

   	
		
   }



   
});