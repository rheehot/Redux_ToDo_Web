import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';

const Button = styled.button`
    display: flex;
    flex-direction: flex-start;
    font-size: 18px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
        margin-left: 10px;

        :hover {
            font-size: 16px;
        }
    }
`;

function ClearCompletedButton({ dispatch }) {
    function onClickClearCompletedButton() {
        dispatch(actionCreators.clearCompletedTodoItem());
    }
    return (
        <Button
            className="header-button"
            onClick={() => onClickClearCompletedButton()}
        >
            CLEAR COMPLETED
        </Button>
    );
}

export default connect()(ClearCompletedButton);