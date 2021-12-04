const React = require('react');

class FruitPreference extends React.Component {
    render() {
        return(
            <>
                <ul>
                    {[
                        { fruit: '사과', preference: '그닥' },
                        { fruit: '포도', preference: '좋음' },
                        { fruit: '복숭아', preference: '완전 좋음' },
                        { fruit: '딸기', preference: '너무 좋음' },
                        { fruit: '사과', preference: '다시 생각해보니 좋음' },
                    ].map((v) =>
                        <li key={v.fruit + v.preference}><b>{v.fruit}</b>: {v.preference}</li>)}
                </ul>
            </>
        );
    }
}

module.exports = FruitPreference;