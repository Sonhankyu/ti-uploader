import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Col, Input, Row, Form, Button} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {authAction, loginAction} from "../../_redux/actions/authAction";

const LoginForm = ({form}) => {
    useEffect(() => {
        form.setFieldsValue({id: '', password: ''})
    }, [])

    const dispatch = useDispatch();

    const onCLickLogin = () => {
        form.validateFields().then((values) => {
            dispatch(loginAction({"id": values.id, "password": values.password}));
        })
    };

    return (
        <>
            <Row>
                <Col span={24}>
                    <Form.Item name="id" rules={[{required: true, message: 'Please input your ID'}]}>
                        <Input style={{height: '3rem'}} prefix={<UserOutlined />} placeholder={'Email'}/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name="password" rules={[{required: true, message: 'Please input your Password'}]}>
                        <Input.Password style={{height: '3rem'}} prefix={<LockOutlined />} placeholder={'Password'}/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={onCLickLogin} block size={'large'} style={{marginTop: '1rem'}}>Login</Button>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
};

export default LoginForm;