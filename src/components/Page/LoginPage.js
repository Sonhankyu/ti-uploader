import React from 'react';
import {Avatar, Card, Col, Form, Row} from "antd";
import LoginForm from "../Form/LoginForm";
import {LockOutlined} from "@ant-design/icons";

const LoginPage = () => {

    const [form] = Form.useForm();

    return (
        <Row justify={'center'}>
            <Col>
                <Card style={{ borderRadius: '1.5rem', marginTop: '15rem', maxWidth: '25rem'}}>
                    <Row justify={'center'} style={{marginBottom: '1.5rem'}}>
                        <Col style={{marginBottom: '1rem'}}>
                            <Avatar size={64} icon={<LockOutlined />} style={{backgroundColor: 'black'}}/>
                        </Col>
                    </Row>
                    <Row justify={'center'} align={'middle'}>
                        <Col>
                            <Form form={form}>
                                <LoginForm form={form}/>
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
};

export default LoginPage;