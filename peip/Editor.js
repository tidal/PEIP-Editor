
PEIP.Editor = function(options) {
   PEIP.Editor.superclass.constructor.call(this, options);
};

YAHOO.lang.extend(PEIP.Editor , WireIt.ComposableWiringEditor, {
	
	getValue: function() {
   var i;
   var obj = {modules: [], wires: [], properties: null};

   for( i = 0 ; i < this.layer.containers.length ; i++) {
      obj.modules.push( {
		name: this.layer.containers[i].options.title, 
		value: this.layer.containers[i].getValue(), 
		config: this.layer.containers[i].getConfig(),
		component: this.layer.containers[i].component
	});
   }

   for( i = 0 ; i < this.layer.wires.length ; i++) {
      var wire = this.layer.wires[i];

      var wireObj = { 
         src: {moduleId: WireIt.indexOf(wire.terminal1.container, this.layer.containers), terminal: wire.terminal1.options.name}, 
         tgt: {moduleId: WireIt.indexOf(wire.terminal2.container, this.layer.containers), terminal: wire.terminal2.options.name}
      };
      obj.wires.push(wireObj);
   }
   
   obj.properties = this.propertiesForm.getValue();
    
   return {
      name: obj.properties.name,
      working: obj
   };
	},
   /**
    * Add the "run" button
    */
   renderButtons: function() {
      PEIP.Editor.superclass.renderButtons.call(this);

		// Add the run button to the toolbar
      var toolbar = YAHOO.util.Dom.get('toolbar');
      var runButton = new YAHOO.widget.Button({ label:"Run", id:"WiringEditor-runButton", container: toolbar });
      runButton.on("click", EditorConfig.run, EditorConfig, true);
   }

});