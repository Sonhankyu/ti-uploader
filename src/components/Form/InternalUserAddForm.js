import React from 'react';
import {Col, Divider, Form, Input, Row, Select, Table} from "antd";

const InternalUserAddForm = ({form}) => {
    const {Option} = Select;

    return (
        <>
            <Form form={form} layout='vertical'>
                <Row>
                    <Col span={24}>
                        <Form.Item label='E-mail' name='id' rules={[{required: true, message: ''}]}>
                            <Input placeholder={'E-mail'}/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label='Name' name='name' rules={[{required: true, message: ''}]}>
                            <Input placeholder={'Name'}/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label='Role' name='role' rules={[{required: true, message: ''}]}>
                            <Select placeholder={'Select Role'}>
                                <Option value={'role1'} key={1}/>
                                <Option value={'role2'} key={2}/>
                                <Option value={'role3'} key={3}/>
                            </Select>
                        </Form.Item>
                    </Col>

                </Row>
            </Form>
        </>
    );
};

export default InternalUserAddForm;