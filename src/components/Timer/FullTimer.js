import React from 'react';

const FullTimer = (dispatch, countdown) => {
    const now = new Date();
    const difFull = new Date(window.localStorage.getItem('full')) - now;
    const difMove = new Date(window.localStorage.getItem('move')) - now;

    // console.log(
    //     String(Math.floor((difFull / (1000 * 60 *60 )) % 24 )).padStart(2, "0") + '시간'
    //     + String(Math.floor((difFull / (1000 * 60 )) % 60 )).padStart(2, "0") + '분'
    //     + String(Math.floor((difFull / 1000 ) % 60)).padStart(2, "0")+ '초 남음');

    if (difFull > 0) {
        if (difFull < 600000) {
            if (difMove > 0) {
                window.localStorage.setItem('full', new Date(Date.parse(now) + 7200000));
                //  refresh token
            }
        }
    } else {
        clearInterval(countdown);
        window.location.href = window.location.origin + '/';
    }
};

export default FullTimer;