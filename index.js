class GetWebpackPlugin {
  constructor(name) {
    this.name = name || '';
  }

  apply(compiler) {
    compiler.hooks.beforeRun.tap('GetWebpackPlugin', () => {
      console.log('--------------------------------------------');
      const names = this.name.split('.');
      const result = this.name?
        names.reduce((pre, name) => pre[name], compiler.options)
        : compiler.options;
      console.log(result)
      console.log('--------------------------------------------');
    })
  }
}

exports.GetWebpackPlugin = GetWebpackPlugin;