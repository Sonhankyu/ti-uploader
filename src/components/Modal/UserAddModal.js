import React, {useState} from 'react';
import {Button, Modal} from "antd";
import {PlusOutlined} from '@ant-design/icons';

const UserAddModal = () => {

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

    return (
        <>
            <div style={{textAlign: 'right', marginBottom: '1rem'}}>
                <Button onClick={openModal} icon={<PlusOutlined />}/>
            </div>
            <Modal
                title='Add User'
                open={showModal}
                onOk={handleOk}
                onCancel={handleCancel}
            >

            </Modal>

        </>
    );
};

export default UserAddModal;