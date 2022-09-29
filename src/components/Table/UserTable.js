import React from 'react';
import {Button, message, Table} from "antd";
import FileListModal from "../Modal/FileListModal";
import {LinkOutlined, MailOutlined} from "@ant-design/icons";

const UserTable = () => {


    const onClickCopy = () => {
        message.success({content: 'URL copy'}).then();
    }
    const onClickSendMail = () => {
        message.success({content: 'Send Mail'}).then();
    }

    const dataSource = [
        {key: 1, name: '김씨', startDate: '2022-01-01', endDate: '2022-02-01'},
        {key: 2, name: '이씨', startDate: '2022-02-01', endDate: '2022-03-02'},
        {key: 3, name: '박씨', startDate: '2022-03-01', endDate: '2022-04-03'},
    ]

    const columns = [
        {title: 'Name', dataIndex: 'name', align: 'center'},
        {title: 'Start Date', dataIndex: 'startDate', align: 'center'},
        {title: 'End Date', dataIndex: 'endDate', align: 'center'},
        {title: 'File List', align: 'center', render: (row) => (
            <FileListModal/>
            )},
        {title: 'URL', dataIndex: 'url', align: 'center', render: (row) => (
            <Button onClick={onClickCopy} icon={<LinkOutlined />}/>
            )},
        {title: 'Send Mail', dataIndex: 'sendMail', align: 'center', render: (row) => (
            <Button onClick={onClickSendMail} icon={<MailOutlined />}/>
            )},
    ]


    return (
        <Table columns={columns} dataSource={dataSource}/>
    );
};

export default UserTable;