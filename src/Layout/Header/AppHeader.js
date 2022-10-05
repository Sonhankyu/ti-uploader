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
                <Row justify='space-between'>
                    <Row justify='space-between'>
                        <span style={{height: '60px'}} onClick={onClickMain}>
                            <img style={{cursor: 'pointer', maxWidth: '100%', maxHeight: '100%'}} src="/images/TI_360x90.png" alt="logo"/>
                        </span>
                        <span style={{width: '210px', marginLeft: '5rem'}}>
                            <HeaderMenu/>
                        </span>
                    </Row>


                    <Col>
                        <UserProfile/>
                    </Col>
                </Row>
            </Header>
            :
            null
    );
};

export default AppHeader;