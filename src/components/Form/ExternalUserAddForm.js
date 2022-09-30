import React from 'react';
import {Col, DatePicker, Divider, Form, Input, Row, Select, Table} from "antd";

const InternalUserAddForm = ({form}) => {

    const {RangePicker} = DatePicker;

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
                        <Form.Item label='Upload Period' name='period' rules={[{required: true, message: ''}]}>
                            <RangePicker/>
                        </Form.Item>
                    </Col>

                </Row>
            </Form>
        </>
    );
};

export default InternalUserAddForm;