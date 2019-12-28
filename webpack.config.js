const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require("fs");

const FEEDS = {
  "CNN": {
    "name": "CNN Top Stories",
    "link": "http://rss.cnn.com/rss/cnn_topstories.rss"
  },
  "BBC": {
    "name": "BBC World - US and Canada",
    "link": "http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml"
  }
};

module.exports = {
  entry: ["./src/index.jsx"],
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
    before: (app, server) => {
      app.get("/account", (req, res) => {
        res.status(200).json({
          "userid": "noone",
          "username": "noone",
          "email": "noone@nowhere.com",
          "displayName": "No One"
        });
      });

      app.get("/auth/google", (req, res) => {
        res.redirect("/");
      });

      app.get("/logoff", (req, res) => {
        res.redirect("/");
      });

      app.get("/feeds", (req, res) => {
        res.status(200).json(FEEDS);
      });

      app.get("/feeds/:name", (req, res) => {
        if((req.params.name).toUpperCase() === "CNN") {
          fs.readFile("CNN.json", "utf-8", (err, data) => {
              if (err) throw err;

              res.status(200).send(JSON.parse(data));
          });
        } else if((req.params.name).toUpperCase() === "BBC") {
          fs.readFile("BBC.json", "utf-8", (err, data) => {
              if (err) throw err;

              res.status(200).send(JSON.parse(data));
          });
        }
      });
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  stats: "errors-only",
  devtool: "cheap-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      favicon: "./src/images/favicon.png"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    }),
    new CopyWebpackPlugin([
      { from: "src/images", to: "images" }
    ]),
    new ManifestPlugin()
  ],
  // optimization
  optimization: {
    namedModules: true,
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        // vendor chunk
        vendor: {
          // sync + async chunks
          chunks: "all",

          // import file path containing node_modules
          test: /node_modules/
        }
      }
    }
  }
};
