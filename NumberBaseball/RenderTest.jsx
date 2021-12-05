const React = require('react');

class RenderTest extends React.PureComponent {
    state = {
        counter: 0,
        array: []
    }

    onClick = () => {
        this.setState({
            array: [...this.state.array, 1]
        });
    };

    render() {
        console.log('렌더링', this.state);
        return (
            <>
                <button onClick={this.onClick}>클릭</button>
            </>
        );
    }
}

module.exports = RenderTest;