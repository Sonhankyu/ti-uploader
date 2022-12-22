import React, {useState} from 'react';
import {Button, Col, Form, Input, InputNumber, Modal, Row} from "antd";
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

    const onClickSubmit = () => {
        form.validateFields().then((value) => {
            dispatch(createExtUserAction({
                "uploadUserEmail": value.email,
                "expireTime": value.expireTime,
            }, setShowModal))
        })
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
                <Form form={form} onFinish={onClickSubmit} layout='vertical'>
                    <Row>
                        <Col span={24}>
                            <Form.Item label='Name' name='email' rules={[{required: true, message: 'Please Input'}]}>
                                <Input placeholder={'E-mail'}/>
                            </Form.Item>
                        </Col>
                        {/*<Col span={24}>*/}
                        {/*    <Form.Item label='Name' name='name' rules={[{required: true, message: ''}]}>*/}
                        {/*        <Input placeholder={'Name'}/>*/}
                        {/*    </Form.Item>*/}
                        {/*</Col>*/}
                        <Col span={24}>
                            <Form.Item label='Upload Expire Time' name='expireTime' rules={[{required: true, message: 'Please Input'}]}>
                                <InputNumber style={{width: '100%'}} min={1} max={60} placeholder={'Minute'}/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <Button style={{marginTop: '0.5rem', width: '100%', height: '2.5rem', borderRadius: '0.5rem'}} type='primary' htmlType='submit'>Save</Button>
                            </Form.Item>
                        </Col>

                    </Row>
                </Form>
            </Modal>

        </>
    );
};

export default ExternalUserAddModal;