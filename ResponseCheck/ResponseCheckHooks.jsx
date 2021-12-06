const React = require('react');
const { useState, useRef } = React;

const ResponseCheckHooks = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const timeout = useRef(null);
    const startTime = useRef(null);
    const endTime = useRef(null);

    const onClickScreen = () => {
    
        if (state === 'waiting') {
            startTime.current = new Date();
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');

            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
            }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
        }
    
        else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout);
            setState('waiting');
            setMessage('성급하셨군요! 초록색이 된 후에 클릭하세요.')
        }
    
        else if (state == 'now') { // 반응속도 체크
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    };

    const onReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return result.length === 0 ? null : 
            <>
                <div>평균 시간: {result.reduce((a, c) => a + c) / result.length }ms</div>
                <button onClick={onReset}>리셋</button>
            </>
    };

    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    );

};


module.exports = ResponseCheckHooks;