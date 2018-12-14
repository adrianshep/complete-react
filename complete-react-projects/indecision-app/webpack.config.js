const path = require('path');
// entry -> output
// relative path:  ~/complete-react/complete-react-projects/indecision-app
// or: /Users/adrianshepelavey/complete-react/complete-react-projects/indecision-app

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
