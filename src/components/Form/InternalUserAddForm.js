// import React from 'react';
// import {Button, Col, Divider, Form, Input, Row, Select, Table} from "antd";
// import {createIntUserAction} from "../../_redux/actions/InternalUserAction";
// import {useDispatch} from "react-redux";
//
// const InternalUserAddForm = ({form}) => {
//
//     const dispatch = useDispatch();
//
//
//     const onClickSubmit = () => {
//         form.validateFields().then((value) => {
//             dispatch(createIntUserAction({
//                 "name": value.name,
//                 "email": value.id,
//                 "password": value.password,
//             }))
//         })
//     }
//     return (
//         <>
//             <Form form={form} onFinish={onClickSubmit} layout='vertical'>
//                 <Row>
//                     <Col span={24}>
//                         <Form.Item label='Name' name='name' rules={[{required: true, message: 'Please Input'}]}>
//                             <Input placeholder={'Name'}/>
//                         </Form.Item>
//                     </Col>
//                     <Col span={24}>
//                         <Form.Item label='E-mail' name='id' rules={[{required: true, message: 'Please Input'}]}>
//                             <Input placeholder={'E-mail'}/>
//                         </Form.Item>
//                     </Col>
//                     <Col span={24}>
//                         <Form.Item label='Password' name='password' rules={[{required: true, message: 'Please Input'}]}>
//                             <Input.Password placeholder={'Password'}/>
//                         </Form.Item>
//                     </Col>
//                     <Col span={24}>
//                         <Form.Item>
//                             <Button style={{marginTop: '0.5rem', width: '100%', height: '2.5rem', borderRadius: '0.5rem'}} type='primary' htmlType='submit'>Save</Button>
//                         </Form.Item>
//                     </Col>
//
//                     {/*<Col span={24}>*/}
//                     {/*    <Form.Item label='Role' name='role' rules={[{required: true, message: ''}]}>*/}
//                     {/*        <Select placeholder={'Select Role'}>*/}
//                     {/*            <Option value={'role1'} key={1}/>*/}
//                     {/*            <Option value={'role2'} key={2}/>*/}
//                     {/*            <Option value={'role3'} key={3}/>*/}
//                     {/*        </Select>*/}
//                     {/*    </Form.Item>*/}
//                     {/*</Col>*/}
//
//                 </Row>
//             </Form>
//         </>
//     );
// };
//
// export default InternalUserAddForm;