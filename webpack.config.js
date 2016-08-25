module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },

  devtool: "source-map",

  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    // alias: {
    //   'react-dom': path.resolve('./node_modules/react-dom'),
    //   'react': path.resolve('./node_modules/react'),
    // }
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          // presets: ['es2015', 'react', 'react-hmre']
          presets: ['es2015', 'react']
        }
      },

      {
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        test: /\.tsx?$/,
        // loader: "ts-loader"
        loaders:['ts-loader']
      }

    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  
}