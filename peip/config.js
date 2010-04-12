/**
 * peip config
 */
EditorConfig = {
	   
   language: {
	
	   languageName: "PEIP",
	
		modules: [
		   {
		      "name": "jsBox",
		      "container": {"xtype": "jsBox.Container"}
		   },
		   {
		      "name": "Publish Subscribe",
		      "container": {"xtype": "PEIP.PublishSubscribeChannel "
			}
		   },
		   {
		      "name": "Service",
		      "container": {"xtype": "PEIP.Service"
			}
		   },
		   {
		      "name": "Service Activator",
		      "container": {"xtype": "PEIP.ServiceActivator"
			}
		   },
		   {
		      "name": "Gateway",
		      "container": {"xtype": "PEIP.Gateway"
			}
		   },		   
		   {
		      "name": "comment",
		      "container": {
		         "xtype": "WireIt.FormContainer",
		   		"title": "Comment",
		   		"fields": [
		            {"type": "text", "inputParams": {"label": "", "name": "comment", "wirable": false }}
		         ]
		      },
		      "value": {
		         "input": {
		            "type":"url","inputParams":{}
		         }
		      }
		   },
		   
		   {
		      "name": "callback",
		      "container": {
		         "xtype": "WireIt.Container",
		         "title": "Callback",
		         "terminals": [
		            {
		               "name": "callbackFunction",
		               "direction": [0,1], "offsetPosition": {"left": 56, "bottom": -15}, "ddConfig": {
                         "type": "output",
                         "allowedTypes": ["input"]
                      },
                      "wireConfig":{"color": "#EEEE11", "bordercolor":"#FFFF00"}
		            },
		             {
   		               "name": "output",
   		               "direction": [0,1], "offsetPosition": {"left": 126, "bottom": -15}, "ddConfig": {
                            "type": "output",
                            "allowedTypes": ["input"]
                         }
   		            }
		         ]
		      }
		   }
		]
	},
   
   /**
    * @method init
    * @static
    */
   init: function() { 
   	this.editor = new PEIP.Editor(this.language);
		
		// Open the infos panel
		this.editor.accordionView.openPanel(2);
   },
   
   /**
    * Execute the module in the "ExecutionFrame" virtual machine
    * @method run
    * @static
    */
   run: function() {
      var ef = new ExecutionFrame( this.editor.getValue() );
      ef.run();
   }
   
};

