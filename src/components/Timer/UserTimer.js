import React from 'react';

const UserTimer = (countdown) => {
    const now = new Date();
    const difMove = new Date(window.localStorage.getItem('move')) - now;

    if (difMove <= 0) {
        clearInterval(countdown);
    }

    // console.log(String(Math.floor((difMove / (1000 * 60 * 60 )) % 24 )).padStart(2, "0") + '시간'
    //     + String(Math.floor((difMove / (1000 * 60 )) % 60 )).padStart(2, "0") + '분'
    //     + String(Math.floor((difMove / 1000 ) % 60)).padStart(2, "0")+ '초 남음');
};

export default UserTimer;