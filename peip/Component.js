var PEIP = PEIP || {};


/**
 * Container with left inputs and right outputs
 * @class InOutContainer
 * @extends WireIt.Container
 * @constructor
 * @param {Object} options
 * @param {WireIt.Layer} layer
 */
PEIP.Component = function(options, layer) {
   PEIP.Component.superclass.constructor.call(this, options, layer);
};

YAHOO.lang.extend(PEIP.Component , WireIt.Container, {
   
   component: 'Component',   
   render: function() {			   

	 	PEIP.Component.superclass.render.call(this);
		this.bodyEl = this.bodyEl.appendChild(document.createElement('div'));
		var cont = this.bodyEl.appendChild(WireIt.cn('div', {"class":"yui-g"}, {}, null));
		this.footer = this.bodyEl.appendChild(WireIt.cn('div', {"height":"40px"}, {"text-align":"center"}, null));
		this.leftColumn = cont.appendChild(WireIt.cn('div', {"class":"yui-u first"}, {}, null));	 	
		this.rightColumn = cont.appendChild(WireIt.cn('div', {"class":"yui-u"}, {}, null));
	 	this.options.leftTerminals = this.options.leftTerminals || [];	 	
		this.options.rightTerminals = this.options.rightTerminals || [];
		this.options.bottomTerminals = this.options.bottomTerminals || [];
		this.renderLeftTerminals();	
		this.renderRightTerminals();
		this.renderBottomTerminals();	
		
	
   },
   setFocus: function() {
	PEIP.Component.superclass.setFocus.call(this);
	//console.info(this.properties);
   },
   renderLeftTerminals: function(){
  	//this.leftColumn = this.bodyEl.appendChild(WireIt.cn('span', null, {"float": "right"}, ''));
	for(i = 0 ; i < this.options.leftTerminals.length ; i++) {
			var opts = this.options.leftTerminals[i];
			this.options.terminals.push({
				"name": opts.name, 
				"direction": [-1,0], 
				"offsetPosition": {"left": -16, "top": 3+30*(i+1)}, 
				"ddConfig": {
					"type": opts.type,
					"allowedTypes": opts.allowedTypes
				}
			});
			this.leftColumn.appendChild(WireIt.cn('div', null, {lineHeight: "30px"}, opts.name));			   
	   }	   
   },
   renderRightTerminals: function(){
	//this.rightColumn= this.bodyEl.appendChild(WireIt.cn('span', null, {"text-align": "right"}, ''));   
	for(i = 0 ; i < this.options.rightTerminals.length ; i++) {
			var opts = this.options.rightTerminals[i];
			this.options.terminals.push({
				"name": opts.name, 
				"direction": [1,0],
				"wireConfig": { "drawingMethod": "bezierArrows"}, 
				"offsetPosition": {"right": -16, "top":3+30*(i+1)}, 
				"ddConfig": {
					"type": opts.type,
					"allowedTypes": opts.allowedTypes
				}
			});
			this.rightColumn.appendChild(WireIt.cn('div', null, {lineHeight: "30px", "text-align": "right"}, opts.name));			   
	   }	   
   },
   renderBottomTerminals: function(){
	//this.rightColumn= this.bodyEl.appendChild(WireIt.cn('span', null, {"text-align": "right"}, ''));   
	for(i = 0 ; i < this.options.bottomTerminals.length ; i++) {
			var opts = this.options.bottomTerminals[i];
			this.options.terminals.push({
				"name": opts.name, 
				"direction": [1,0],
				"wireConfig": { "drawingMethod": "bezierArrows"}, 
				"offsetPosition": {"left": 70, "bottom":-14}, 
				"ddConfig": {
					"type": opts.type,
					"allowedTypes": opts.allowedTypes
				}
			});
			this.footer.appendChild(WireIt.cn('span', null, {lineHeight: "30px", "text-align": "right"}, opts.name));			   
	   }	   
   },
   addLeftTerminal: function(name, type, allowedTypes){ 
	   this.options.leftTerminals = this.options.leftTerminals || [];
	   this.options.leftTerminals[this.options.leftTerminals.length] = {
			   name: name,
			   type: type,
			   allowedTypes: allowedTypes
	   };  
   },
   addRightTerminal: function(name, type, allowedTypes){
	   this.options.rightTerminals = this.options.rightTerminals || [];
	   this.options.rightTerminals[this.options.rightTerminals.length] = {
			   name: name,
			   type: type,
			   allowedTypes: allowedTypes
	   };  
   },
   addBottomTerminal: function(name, type, allowedTypes){
	   this.options.bottomTerminals = this.options.bottomTerminals || [];
	   this.options.bottomTerminals[this.options.bottomTerminals.length] = {
			   name: name,
			   type: type,
			   allowedTypes: allowedTypes
	   };  
   },
getConfig: function() {
      var obj = PEIP.Component.superclass.getConfig.call(this);
   
      // Position
      obj.component = this.component;
      return obj;	
}
   
});