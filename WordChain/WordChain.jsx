const React = require('react');

class WordChain extends React.Component {
    state = {
        text: 'Hello, webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>
    };
}

module.exports = WordChain;