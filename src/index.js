import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return <div>Hello World!</div>
}

function HelloWorld2() {
  return React.createElement('div', {}, 'Hello World 2!');
}

function Hello() {
  return <span>Hello</span>
}

function World() {
  return <span>World</span>
}

function HelloWorld3() {
  return (
    <div><Hello/><World/></div>
  );
}

// Works but includes warnings in the browser
// A component must return a single element
function HelloWorld4() {
  return [<Hello />, <World />];
}

ReactDOM.render(HelloWorld3(), document.querySelector('#root'));