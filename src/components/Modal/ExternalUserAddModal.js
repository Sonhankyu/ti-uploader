import React, {useState} from 'react';
import {Button, Form, Modal} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import ExternalUserAddForm from "../Form/ExternalUserAddForm";
import {useDispatch} from "react-redux";
import {createExtUserAction, loadExtUserAction} from "../../_redux/actions/ExternalUserAction";
import moment from "moment";

const ExternalUserAddModal = () => {
    const [form] = Form.useForm();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const openModal = () => {
        setShowModal(true)
    }
    const handleOk = () => {
        form.validateFields().then((value) => {
            dispatch(createExtUserAction({
                "uploadUserEmail": value.email,
                "expireTime": value.expireTime,
            }))
        })
        setShowModal(false);
        form.resetFields();
    }
    const handleCancel = () => {
        setShowModal(false);
        form.resetFields();
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
                width={300}
                footer={null}
                maskClosable={false}
            >
                <ExternalUserAddForm form={form} submit={handleOk}/>
            </Modal>

        </>
    );
};

export default ExternalUserAddModal;