import React, {useState} from 'react';
import {Button, Col, Form, Input, Modal, Row} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {createIntUserAction} from "../../_redux/actions/InternalUserAction";

const ExternalUserAddModal = () => {
    const [form] = Form.useForm();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const openModal = () => {
        setShowModal(true)
        form.setFieldsValue({name: '', email: '', password: ''});
    }

    const onClickSubmit = () => {
        form.validateFields().then((value) => {
            dispatch(createIntUserAction({
                "name": value.name,
                "email": value.id,
                "password": value.password,
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
                            <Form.Item label='Name' name='name' rules={[{required: true, message: 'Please Input'}]}>
                                <Input placeholder={'Name'}/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label='E-mail' name='id' rules={[{required: true, message: 'Please Input'}]}>
                                <Input placeholder={'E-mail'}/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label='Password' name='password' rules={[{required: true, message: 'Please Input'}]}>
                                <Input.Password placeholder={'Password'}/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <Button style={{marginTop: '0.5rem', width: '100%', height: '2.5rem', borderRadius: '0.5rem'}} type='primary' htmlType='submit'>Save</Button>
                            </Form.Item>
                        </Col>

                        {/*<Col span={24}>*/}
                        {/*    <Form.Item label='Role' name='role' rules={[{required: true, message: ''}]}>*/}
                        {/*        <Select placeholder={'Select Role'}>*/}
                        {/*            <Option value={'role1'} key={1}/>*/}
                        {/*            <Option value={'role2'} key={2}/>*/}
                        {/*            <Option value={'role3'} key={3}/>*/}
                        {/*        </Select>*/}
                        {/*    </Form.Item>*/}
                        {/*</Col>*/}

                    </Row>
                </Form>
            </Modal>

        </>
    );
};

export default ExternalUserAddModal;