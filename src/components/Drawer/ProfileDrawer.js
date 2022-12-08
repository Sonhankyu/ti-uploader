import React, {useState} from 'react';
import {Col, Drawer, Row, Space} from "antd";
import ChangePasswordModal from "../Modal/ChangePasswordModal";

const ProfileDrawer = ({visible, setVisible, userInfo}) => {

    const [showEdit, setShowEdit] = useState(false);
    const onClose = () => {
        setVisible(false);
    }

    const onClickChangePw = () => {
        setShowEdit(true);
    }

    return (
        <>
            <Drawer title='User Profile' maskClosable={false} open={visible} onClose={onClose}>
                <p>Name : {userInfo.name}</p>
                <p>E-mail : {userInfo.id}</p>
                <a onClick={onClickChangePw}>Change Password</a>
                {showEdit === true ? <ChangePasswordModal userInfo={userInfo} visible={showEdit} setVisible={setShowEdit}/> : null}
            </Drawer>
        </>
    );
};

export default ProfileDrawer;