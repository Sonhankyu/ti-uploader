import React from 'react';
import {Button, Col, DatePicker, Divider, Form, Input, InputNumber, Row, Select, Table, TimePicker} from "antd";
import dayjs from "dayjs";

const ExternalUserAddForm = ({form, submit}) => {


    return (
        <>
            <Form form={form} onFinish={submit} layout='vertical'>
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
        </>
    );
};

export default ExternalUserAddForm;