const path = require('path');

module.exports = {
    entry:'./src/index.ts',
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                exclude:/node_modules/,
                use:'ts-loader'
            }
        ]
    }
}