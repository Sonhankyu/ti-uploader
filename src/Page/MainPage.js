import React from 'react';
import ExternalUserTable from "../components/Table/ExternalUserTable";
import {Card, Col, Row} from "antd";
import ExternalUserAddModal from "../components/Modal/ExternalUserAddModal";

const MainPage = () => {
    return (
        <Card title='Information' style={{borderRadius: '1rem'}}>
            <ExternalUserAddModal/>
            <ExternalUserTable/>
        </Card>
    );
};

export default MainPage;