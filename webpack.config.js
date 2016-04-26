var webpack = require('webpack'),
HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context:__dirname,
    entry:['./index.js'],
    output:{
        filename:'index.bundle.js'
    },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]
    },
    plugins: [
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ], ["normal", "loader"]),
        new HtmlWebpackPlugin()
    ]
};
