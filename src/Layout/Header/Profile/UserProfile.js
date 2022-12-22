import React, {useState} from 'react';
import {Avatar, Button, Card, Divider, Space} from "antd";
import {LogoutOutlined, SmallDashOutlined, UserOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../../_redux/actions/authAction";
import ProfileDrawer from "../../../components/Drawer/ProfileDrawer";

const StyledCard = styled(Card)`
    .ant-card-body {
        background-color: #001529;
    }
    .ant-card-meta-title {
        color: #dcdcdc;
    }
    .ant-card-meta-description {
        color: #787e6c;
    }
`;

const UserProfile = () => {

    const {Meta} = Card;
    const [showProfile, setShowProfile] = useState(false);
    const userInfo = useSelector(state => state.auth['info']);

    const onClickProfile = () => {
        setShowProfile(true);
    }

    return (
        <>
            <StyledCard bordered={false}>
                    <Meta avatar={<Avatar icon={<UserOutlined/> } size='small'/> } title={<a onClick={onClickProfile}>{userInfo.name}</a> } style={{backgroundColor: ''}}/>
            </StyledCard>
            {showProfile === true ? <ProfileDrawer userInfo={userInfo} visible={showProfile} setVisible={setShowProfile}/> : null}
        </>
    );
};

export default UserProfile;