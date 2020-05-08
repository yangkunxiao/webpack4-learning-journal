const { SyncHook, AsyncParallelHook } = require("tapable");

class Compiler {
  constructor(options) {
    this.hooks = {
      kzSyncHook: new SyncHook(["name", "age"]),
      kzAsyncParallaHook: new AsyncParallelHook(["name", "age"])
    };
    let plugins = options.plugins;
    if (plugins && plugins.length > 0) {
      plugins.forEach(plugin => plugin.apply(this));
    }
  }
  run() {
    console.log('开始执行了---------');
    this.kzSyncHook('kaka', 25);
    this.kzAsyncHook('kaka', 35);
  }
  kzSyncHook(name, age) {
    this.hooks.kzSyncHook.call(name, age);
  }
  kzAsyncHook(name, age) {
    this.hooks.kzAsyncParallaHook.callAsync(name, age,() => {
        console.log('end')
    });
  }
}

module.exports = Compiler
