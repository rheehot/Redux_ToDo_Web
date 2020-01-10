import React, { useState } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import actionCreators from "redux/action";

const InputContainer = styled.div`
    margin-top: 50px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    height: 50%;
    width: 40%;
    font-size: 22px;
`;

const Button = styled.button`
    height: 50%;
    width: 15%;
    border-radius: 15px;
    margin: 10px;
    font-weight: 600;
    font-size: 22px;
`;

function TodoInput({ dispatch }) {
    const [text, setText] = useState("");

    function onClickCreateButton() {
        if (text === "") {
            alert("메세지를 입력하세요");
        } else {
            dispatch(
                actionCreators.createTodoItem({
                    id: uuid(),
                    text,
                    isCompleted: false
                })
            );
            setText("");
        }
    }

    return (
        <InputContainer>
            <Input
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <Button onClick={() => onClickCreateButton()}>CREATE</Button>
        </InputContainer>
    );
}

TodoInput.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(TodoInput);
