const path = require('path');

module.exports={
    entry:'./src/index',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {test: /.jsx?$/ , exclude:/node_modules/, use:'babel-loader'},
            {test: /.scss?$/ , exclude:/node_modules/, use:['style-loader','css-loader','sass-loader']}
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
          index: 'index.html'
        }
      }
}