import React, {useState} from 'react';
import {Button, Form, Modal} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import InternalUserAddForm from "../Form/InternalUserAddForm";
import {useDispatch} from "react-redux";
import {createIntUserAction, createUserAction} from "../../_redux/actions/InternalUserAction";

const ExternalUserAddModal = () => {
    const [form] = Form.useForm();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const openModal = () => {
        setShowModal(true)
        form.setFieldsValue({name: '', email: '', password: ''});
    }
    const handleOk = () => {
        form.validateFields().then((value) => {
            dispatch(createIntUserAction({
                "name": value.name,
                "email": value.id,
                "password": value.password,
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
                onCancel={handleCancel}
                width={300}
                footer={null}
                maskClosable={false}
            >
                <InternalUserAddForm form={form} submit={handleOk}/>
            </Modal>

        </>
    );
};

export default ExternalUserAddModal;