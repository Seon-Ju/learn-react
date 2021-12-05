const React = require('react');

const Try = (({ v }) => {
    return (
        <li>
            <div>{v.try}</div>
            <div>{v.result}</div>
        </li>
    );
});

module.exports = Try;