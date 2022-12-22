import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Modal, Row} from "antd";
import {useDispatch} from "react-redux";
import {changePassword} from "../../_redux/actions/authAction";

const ChangePasswordModal = ({visible, setVisible, userInfo}) => {

    const [confirm, setConfirm] = useState(false);
    const [samePw, setSamePw] = useState(false)
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        })
    }, [])

    const onClose = () => {
        setVisible(false);
    }

    const onClickSave = () => {
        form.validateFields().then((value) => {
            dispatch(changePassword({
                "password": value.newPassword
            }, setVisible))
        })
    }

    return (
        <Modal
            open={visible}
            onCancel={onClose}
            title='Change Password'
            footer={null}
            maskClosable={false}
        >
            <Form form={form} onFinish={onClickSave} layout='vertical'>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item label='Password' name="oldPassword" rules={[{required: true, message: 'Please Input'}]}>
                            <Input.Password/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label='New Password' name="newPassword" rules={[{required: true, message: 'Please Input'},
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('oldPassword') !== value) {
                                    setSamePw(true);
                                    return Promise.resolve();
                                }
                                setSamePw(false);
                                return Promise.reject((new Error('Same Old Password')));
                            }
                        })
                        ]}>
                            <Input.Password/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label='Confirm Password' name="confirmPassword" rules={[{required: true, message: 'Please Input'},
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        setConfirm(true);
                                        return Promise.resolve();
                                    }
                                    setConfirm(false);
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                        >
                            <Input.Password/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Button style={{width: '100%', height: '2.5rem', borderRadius: '0.5rem'}} type='primary' disabled={(!confirm || !samePw)} htmlType='submit'>Save</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default ChangePasswordModal;