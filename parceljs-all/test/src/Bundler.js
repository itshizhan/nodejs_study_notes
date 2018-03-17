const { EventEmitter } = require("events");

class Bundler extends EventEmitter{
	constructor(){
		super();
		this.mainFile = "wo shi main file"
	}

	normalizeOptions(){
		console.log("我负责初始化选项");
	}
	
}

module.exports = Bundler;