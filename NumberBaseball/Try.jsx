const React = require('react');

class Try extends React.Component {
    render() {
        const { v } = this.props;
        return (
            <>
                <li>
                    <div>{v.try}</div>
                    <div>{v.result}</div>
                </li>
            </>
        );
    }
}

module.exports = Try;