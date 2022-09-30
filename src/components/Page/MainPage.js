import React from 'react';
import UserTable from "../Table/UserTable";
import {Card, Col, Row} from "antd";
import UserAddModal from "../Modal/UserAddModal";

const MainPage = () => {
    return (
        <Card title='Information' style={{borderRadius: '1rem'}}>
            <UserAddModal/>
            <UserTable/>
        </Card>
    );
};

export default MainPage;