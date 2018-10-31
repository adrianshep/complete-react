'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Adam Jura'
  ),
  React.createElement(
    'p',
    null,
    'Age: 18'
  ),
  React.createElement(
    'p',
    null,
    'Location: New Meeting, PA'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
