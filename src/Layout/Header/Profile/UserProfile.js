import React from 'react';
import {Avatar, Button, Card, Divider, Space} from "antd";
import {LogoutOutlined, UserOutlined} from "@ant-design/icons";
import styled from "styled-components";

const StyledCard = styled(Card)`
    .ant-card-body {
        background-color: #001529;
        padding: 15px;
        height: 64px;
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

    return (
        <>
            <StyledCard bordered={false}>
                <Space size='large' split={<Divider type='vertical' style={{backgroundColor: "#dcdcdc"}}/>}>
                    <Meta avatar={<Avatar icon={<UserOutlined/> } size='small'/> } title={'User Name'} style={{backgroundColor: ''}}/>
                    <Button style={{borderRadius: '1rem'}} onClick={null} icon={<LogoutOutlined />}/>
                </Space>
                {/*<Card.Grid style={{width: '80%'}} hoverable={false}>*/}

                {/*</Card.Grid>*/}
                {/*<Card.Grid style={{width: '20%'}} hoverable={false}>*/}

                {/*</Card.Grid>*/}
            </StyledCard>
        </>
    );
};

export default UserProfile;