import React, {useEffect, useState} from 'react';
import ExternalUserTable from "../components/Table/ExternalUserTable";
import {Card, Col, Row} from "antd";
import ExternalUserAddModal from "../components/Modal/ExternalUserAddModal";
import {useDispatch, useSelector} from "react-redux";
import {loadExtUserAction} from "../_redux/actions/ExternalUserAction";

const MainPage = () => {

    const dispatch = useDispatch();
    const extUserList = useSelector(state => state.user['extUserList']);
    const uploadURL = useSelector(state => state.user['uploadURL']);

    useEffect(() => {
        dispatch(loadExtUserAction());
    }, [])

    console.log(extUserList)
    return (
        <Card title='Information' style={{borderRadius: '1rem'}}>
            <ExternalUserAddModal/>
            <ExternalUserTable extUserList={extUserList} uploadURL={uploadURL}/>
        </Card>
    );
};

export default MainPage;