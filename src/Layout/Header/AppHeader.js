import React, {useEffect, useState} from 'react';
import {Button, Col, Layout, Row, Space} from "antd";
import {useHistory, useLocation} from "react-router-dom";
import UserProfile from "./Profile/UserProfile";
import HeaderMenu from "./Menu/HeaderMenu";

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
            <Header style={{backgroundColor: '#001529'}}>
                <Row>
                    <Col span={1}>
                        <span style={{height: '60px', marginTop: '5px'}} onClick={onClickMain}>
                            <img style={{cursor: 'pointer', maxWidth: '100%', maxHeight: '100%'}} src="/images/TI_360x90.png" alt="logo"/>
                        </span>
                    </Col>
                    <Col span={3} offset={1}>
                        <HeaderMenu/>

                    </Col>
                    <Col span={3} offset={16}>
                        <UserProfile/>
                    </Col>
                </Row>
            </Header>
            :
            null
    );
};

export default AppHeader;