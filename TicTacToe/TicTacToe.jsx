import React, { useEffect, useReducer, useCallback } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1]
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            return {
                ...state,
                winner: action.winner,
            };

        case CLICK_CELL:
            const tableData = [...state.tableData]; // useReducer의 단점. 객체는 얕은 복사를 해줘야 한다. 이 가독성 문제는 추후 유료강좌에서 immer라는 라이브러리로 해결
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;

            return {
                ...state,
                tableData,
                recentCell: [action.row, action.cell]
            };

        case CHANGE_TURN:
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O'
            };

        case RESET_GAME:
            return {
                ...state,
                turn: 'O',
                tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                  ],
                recentCell: [-1, -1]
            };
        default:
            return state;
    }
};

const TicTacToe = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner, recentCell } = state;

    const onClickTable = useCallback(() => {
        dispatch({ type: SET_WINNER, winner: 'O' });
    }, []);

    useEffect(() => {

        const [row, cell] = recentCell;

        if (row < 0) {
            return;
        }

        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) { // 가로줄 검사
            win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) { // 세로줄 검사
            win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) { // 좌상단->우하단 대각선 검사
            win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) { // 우상단->좌하단 대각선 검사
            win = true;
        }

        console.log(turn);

        if (win) {
            dispatch({ type: SET_WINNER, winner: turn });
            dispatch({ type: RESET_GAME });
        } else {
            let all = true; // all이 true면 무승부
            tableData.forEach((row) => { // 무승부 검사
                row.forEach((cell) => {
                    if (!cell) {
                        all = false; // 하나라도 안 차있는 칸이 있으면 
                    }
                });
            });
            if (all) { // 칸이 다 차서 무승부라면 게임 리셋
                dispatch({ type: RESET_GAME });
            } else {
                dispatch({ type: CHANGE_TURN }); // 턴을 넘김
            }
        }

    }, [recentCell]);

    return (
        <>
            <Table onClick={onClickTable} tableData = {tableData} dispatch={dispatch}/>
            {winner && <div>{winner}님의 승리</div>}
        </>
    );
};

export default TicTacToe;