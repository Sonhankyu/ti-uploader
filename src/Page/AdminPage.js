import React, {useEffect} from 'react';
import {Card} from "antd";
import InternalUserAddModal from "../components/Modal/InternalUserAddModal";
import InternalUserTable from "../components/Table/InternalUserTable";
import {useDispatch, useSelector} from "react-redux";
import {loadIntUserAction, loadUserAction} from "../_redux/actions/InternalUserAction";

const AdminPage = () => {

    const dispatch = useDispatch();
    const userList = useSelector(state => state.user['intUserList']);
    console.log(userList)

    useEffect(() => {
        console.log('1')
        dispatch(loadIntUserAction());
    }, [])
    return (
        <Card title='User Management' style={{borderRadius: '1rem'}}>
            <InternalUserAddModal/>
            <InternalUserTable userList={userList}/>
        </Card>
    );
};

export default AdminPage;