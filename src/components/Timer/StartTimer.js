import React from 'react';
import {authAction} from "../../_redux/actions/authAction";

const StartTimer = (dispatch, detectMove) => {
    dispatch(authAction({jwt: window.localStorage.getItem('token')}));
    document.addEventListener('mousemove', detectMove);
};

export default StartTimer;