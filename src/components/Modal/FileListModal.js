import React, {useState} from 'react';
import {Button, Modal, Table} from "antd";

const FileListModal = ({fileList, showModal, setShowModal}) => {


    const handleCancel = () => {
        setShowModal(false);
    }
    console.log(fileList)

    const columns = [
        {title: 'File Name', dataIndex: 'name', align: 'center'},
        {title: 'Upload Date / Time', dataIndex: 'date', align: 'center'},
        {title: 'Download', align: 'center'},
    ]


    return (
        <>
            <Modal
                title='File List'
                open={showModal}
                footer={null}
                onCancel={handleCancel}
                width={800}
            >
                <Table columns={columns} dataSource={fileList}/>
            </Modal>
        </>
    );
};

export default FileListModal;