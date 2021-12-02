const React = require('react');
const ReactDom = require('react-dom');

const WordChain = require('./WordChain');

ReactDom.render(<WordChain />, document.querySelector('#root'));