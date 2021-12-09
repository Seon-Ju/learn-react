import React, { useCallback } from 'react';
import { CLICK_CELL } from './TicTacToe';

const Td = ({ rowIndex, cellIndex, cellData, dispatch }) => {

    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);

        if (cellData) {
            return; // 이미 클릭된 칸이면 끝내기
        }

        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex }); // 칸을 클릭
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    );
};

export default Td;