problem :  Can't resolve 'fs' in '/YOUR DIRECTORY ...' 

solution :

It happen with me while I reinstall the node modules my webpack current version is 5.38.1, I have fixed the issue with 'npm i path-browserify -D '
,after installation you have to update your webpack.config.js resolve{} with fallback: {"fs": false, "path": require.resolve("path-browserify")} while not using "fs": false it show errors i.e: Module not found: Error: Can't resolve 'fs' in '/YOUR DIRECTORY ...' so don't forget to add it; with other stuff it look like:

<!-- webpack.config.js is found inside react-scripts folder which exists in node_modules folder -->

module.exports = {
   ...
   resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],// other stuff
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify")
    }
  },
};
remove node property if it exist in your webpack.config.js file



npm cache clean --force
npm install

