import React, { Component } from 'react';

import ResponseCheck from '../ResponseCheck/ResponseCheck';
import RockScissorsPaper from '../RockScissorsPaper/RockScissorsPaper';
import Lotto from '../Lotto/Lotto';

export default class GameMatcher extends Component {
    render() {
        let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
        console.log(urlSearchParams.get('hello'));
        if (this.props.match.params.name === 'response-check'){
            return <ResponseCheck />;
        } else if (this.props.match.params.name === 'rock-scissors-paper'){
            return <RockScissorsPaper />;
        } else if (this.props.match.params.name === 'lotto'){
            return <Lotto />;
        } else {
            return(
                <div>일치하는 게임이 없습니다.</div>
            );
        }
    }
}