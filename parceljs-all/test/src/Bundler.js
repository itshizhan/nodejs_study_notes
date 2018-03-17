const { EventEmitter } = require("events");

class Bundler extends EventEmitter{
	constructor(main,option){
		super();
		this.mainFile = main;
		this.option = this.normalizeOptions(option)
	}

	normalizeOptions(option){
		console.log("我负责初始化选项");
		return option;
	}

}

module.exports = Bundler;