module.exports = function(RED){
	function converter(celsius){
		RED.nodes.createNode(this, celsius);
		var context = this.context();
		var node= this;
		this.on("input", function(msg){
			
			var outMsg = {payload: (msg.payload*9/5+32)};
			
			node.send(outMsg);
		});
	}
	RED.nodes.registerType("converter", converter);
};