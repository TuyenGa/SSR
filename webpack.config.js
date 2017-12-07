const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        path:  path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },

    module:{
        loaders: [
            {
               loader: 'babel-loader',
                query: {
                   presets: ['react','es2015','stage-2']
                },
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/
            }
        ]

    }
};
