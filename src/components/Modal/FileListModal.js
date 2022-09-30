import React, {useState} from 'react';
import {Button, Modal, Table} from "antd";
import {FileSearchOutlined} from "@ant-design/icons";

const FileListModal = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true)
    }
    const handleOk = () => {
        setShowModal(false);
    }
    const handleCancel = () => {
        setShowModal(false);
    }

    const columns = [
        {title: 'File Name', align: 'center'},
        {title: 'Upload Date / Time', align: 'center'},
        {title: 'Download', align: 'center'},
    ]


    return (
        <>
            <Button onClick={openModal} icon={<FileSearchOutlined />}/>
            <Modal
                title='File List'
                open={showModal}
                footer={null}
                onCancel={handleCancel}
            >
                <Table columns={columns}/>
            </Modal>
        </>
    );
};

export default FileListModal;