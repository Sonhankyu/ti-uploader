import React from 'react';
import UserAddModal from "../Modal/UserAddModal";
import UserTable from "../Table/UserTable";
import {Card} from "antd";

const AdminPage = () => {
    return (
        <Card title='User Management' style={{borderRadius: '1rem'}}>
            <UserAddModal/>
            <UserTable/>
        </Card>
    );
};

export default AdminPage;