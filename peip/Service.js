var PEIP = PEIP || {};


/**
 * Container with left inputs and right outputs
 * @class InOutContainer
 * @extends WireIt.Container
 * @constructor
 * @param {Object} options
 * @param {WireIt.Layer} layer
 */
PEIP.Service = function(options, layer) {
   PEIP.Service.superclass.constructor.call(this, options, layer);
};

YAHOO.lang.extend(PEIP.Service, WireIt.Container, {
   
   component: 'Service',
   render: function() {
      this.options.inputs = this.options.inputs || [];
	PEIP.Service.superclass.render.call(this);

      this.options.outputs = ["ref"];
		for(i = 0 ; i < this.options.outputs.length ; i++) {
			var output = this.options.outputs[i];
			this.options.terminals.push({
				"name": output, 
				"direction": [1,0], 
				"offsetPosition": {"right": -14, "top": 3+30*(i+1+this.options.inputs.length) }, 
				"ddConfig": {
             "type": "object",
             "allowedTypes": ["reference"]
          	},
				"alwaysSrc": true
			});
			this.bodyEl.appendChild(WireIt.cn('div', null, {lineHeight: "30px", textAlign: "right"}, output));
		}
		
   }
   
});