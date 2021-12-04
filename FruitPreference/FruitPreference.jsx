const React = require('react');
const Fruit = require('./Fruit');

class FruitPreference extends React.Component {
    fruits = [
        { fruit: '사과', preference: '그닥' },
        { fruit: '포도', preference: '좋음' },
        { fruit: '복숭아', preference: '완전 좋음' },
        { fruit: '딸기', preference: '너무 좋음' },
        { fruit: '사과', preference: '다시 생각해보니 좋음' },
    ];

    render() {
        return(
            <>
                <ul>
                    {this.fruits.map((v, i) =>
                        <Fruit key={v.fruit + v.preference} v={v} i={i} />
                    )}
                </ul>
            </>
        );
    }
}

module.exports = FruitPreference;