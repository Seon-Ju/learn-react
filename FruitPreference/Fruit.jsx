const React = require('react');

class Fruit extends React.Component {
    render() {
        return(
            <li>
                {this.props.i}번째, <b>{this.props.v.fruit}</b>
                <div>{this.props.v.preference}</div>
            </li>
        );
    }
}

module.exports = Fruit;