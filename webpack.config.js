module.exports = {
  entry: "./index.tsx",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },

  devtool: "source-map",

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
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