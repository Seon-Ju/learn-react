const React = require('react');
const ReactDom = require('react-dom');

const HelloWebpack = require('./HelloWebpack');

ReactDom.render(<HelloWebpack />, document.querySelector('#root'));