/**
 * This is the what-can-i-say module
 */

Module.register("help",{
    // Default module config.
    defaults: {
    	contents : {},
    },
    
    // Override dom generator.
    getDom: function() {
    	var wrapper = document.createElement("div");
    	wrapper.className = "bright";
    	
    	var table = document.createElement("table");
    	table.className = "help-table";
    	
    	var self = this;
    	Object.keys(self.config.contents).forEach(function(key){
    		
    		var tr = document.createElement("tr");
    		var th = document.createElement("th");
    		th.innerHTML = key;
    		tr.appendChild(th);
    		
    		var td = document.createElement("td");
    		self.config.contents[key].forEach(function(value){
    			var div = document.createElement('div');
    			div.innerHTML = '"'+value+'"';
    			td.appendChild(div);
    		})
    		
    		tr.appendChild(td);
    		
    		table.appendChild(tr);
    	});
    	
    	
		wrapper.appendChild(table);
		return wrapper;
    },
    
    getStyles: function() {
		return [this.file('help.css')];
	},
	
	getScripts: function() {
		return [];
	},
	
	start: function(){
		
	},
});