import React, {useState} from 'react';
import {Button, message, Table} from "antd";
import FileListModal from "../Modal/FileListModal";
import {FileSearchOutlined, LinkOutlined, MailOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {loadFileList} from "../../_redux/actions/fileAction";

const ExternalUserTable = ({extUserList}) => {


    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const fileList = useSelector(state => state.file['fileList']);

    const onClickFileList = (row) => {
        dispatch(loadFileList(row.id));
        setShowModal(true);
    }
    const onClickCopy = (row) => {
        navigator.clipboard.writeText(row.url).then();
        message.success({content: 'URL copy'}).then();
    }
    const onClickSendMail = () => {
        message.success({content: 'Send Mail'}).then();
    }

    const columns = [
        {title: 'User Name', dataIndex: 'userName', align: 'center'},
        {title: 'Start Date', dataIndex: 'sDate', align: 'center'},
        {title: 'End Date', dataIndex: 'eDate', align: 'center'},
        {title: 'File List', align: 'center', render: (row) => (
                <Button onClick={() => onClickFileList(row)} icon={<FileSearchOutlined />}/>
            )},
        {title: 'URL', align: 'center', render: (row) => (
                <Button onClick={() => onClickCopy(row)} icon={<LinkOutlined />}/>
            )},
        {title: 'Send Mail', dataIndex: 'sendMail', align: 'center', render: (row) => (
                <Button onClick={onClickSendMail} icon={<MailOutlined />}/>
            )},
    ]


    return (
        <>
            <Table columns={columns} dataSource={extUserList} rowKey='id'/>
            <FileListModal fileList={fileList} showModal={showModal} setShowModal={setShowModal}/>
        </>
    );
};

export default ExternalUserTable;