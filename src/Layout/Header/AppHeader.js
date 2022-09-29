import React, {useEffect, useState} from 'react';
import {Button, Col, Layout, Row, Space} from "antd";
import {useHistory, useLocation} from "react-router-dom";

const AppHeader = () => {
    const { Header } = Layout;
    const [visible, setVisible] = useState(true);
    const url = useLocation().pathname;
    const history = useHistory();


    useEffect(() => {
        url.includes('/main') || url.includes('/admin') ? setVisible(true) : setVisible(false);
    }, [url]);

    const onClickMain = () => {
        history.push('/main');
    }
    const onClickLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        visible === true ?
            <Header style={{backgroundColor: '#001529', padding: '0px 45px'}}>
            </Header>
            :
            null
    );
};

export default AppHeader;