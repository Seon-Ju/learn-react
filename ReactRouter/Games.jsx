import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import GameMatcher from './GameMatcher';

const Games = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to='/game/response-check?query=10&hello=zerocho&bye=react'>반응속도체크</Link>
                &nbsp;
                <Link to='/game/rock-scissors-paper'>가위바위보</Link>
                &nbsp;
                <Link to='/game/lotto'>로또</Link>
                &nbsp;
                <Link to='/game/index'>게임 매쳐</Link>
            </div>
            <div>
                <Switch>
                    <Route exact path='/' component={GameMatcher}/>
                    <Route path='/game/:name' component={GameMatcher}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Games;