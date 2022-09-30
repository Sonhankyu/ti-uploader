import React from 'react';
import {Card} from "antd";
import InternalUserAddModal from "../Modal/InternalUserAddModal";
import InternalUserTable from "../Table/InternalUserTable";

const AdminPage = () => {
    return (
        <Card title='User Management' style={{borderRadius: '1rem'}}>
            <InternalUserAddModal/>
            <InternalUserTable/>
        </Card>
    );
};

export default AdminPage;