import React from 'react';
import ExternalUserTable from "../Table/ExternalUserTable";
import {Card, Col, Row} from "antd";
import ExternalUserAddModal from "../Modal/ExternalUserAddModal";

const MainPage = () => {
    return (
        <Card title='Information' style={{borderRadius: '1rem'}}>
            <ExternalUserAddModal/>
            <ExternalUserTable/>
        </Card>
    );
};

export default MainPage;