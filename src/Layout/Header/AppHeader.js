import React, {useEffect, useState} from 'react';
import {Button, Col, Divider, Layout, Row, Space} from "antd";
import {useHistory, useLocation} from "react-router-dom";
import UserProfile from "./Profile/UserProfile";
import HeaderMenu from "./Menu/HeaderMenu";
import {LogoutOutlined} from "@ant-design/icons";
import {logoutAction} from "../../_redux/actions/authAction";
import {useDispatch} from "react-redux";

const AppHeader = () => {
    const { Header } = Layout;
    const [visible, setVisible] = useState(true);
    const url = useLocation().pathname;
    const history = useHistory();
    const dispatch = useDispatch();


    useEffect(() => {
        url.includes('/main') || url.includes('/admin') ? setVisible(true) : setVisible(false);
    }, [url]);

    const onClickMain = () => {
        history.push('/main');
    }
    const onClickLogout = () => {
        const token = window.localStorage.getItem('token');
        dispatch(logoutAction({jwt : token}));
        window.localStorage.clear();
    }

    return (
        visible === true ?
            <Header style={{lineHeight: '66px', height: '66px', backgroundColor: '#001529'}}>
                <Row>
                    <Col flex='100px' style={{height: '60px'}} onClick={onClickMain}>
                        <img style={{cursor: 'pointer', maxWidth: '100%', maxHeight: '100%'}} src="/images/TI_360x90.png" alt="logo"/>
                    </Col>
                    <Col flex='auto' span={22} offset={1}>
                        <HeaderMenu/>
                    </Col>
                    <Col style={{lineHeight: 'normal'}}>
                        <Space size='large' split={<Divider style={{backgroundColor: 'white'}} type='vertical'/>}>
                            <UserProfile/>
                            <Button style={{borderRadius: '1rem'}} onClick={onClickLogout} icon={<LogoutOutlined />}/>
                        </Space>
                    </Col>
                </Row>
            </Header>
            :
            null
    );
};

export default AppHeader;