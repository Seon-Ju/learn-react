const React = require('react');
const { memo } = React;

const TryHooks = memo(({ v }) => {
    return (
        <li>
            <div>{v.try}</div>
            <div>{v.result}</div>
        </li>
    );
});

module.exports = TryHooks;