import React from 'react';
import {Layout, Space, Typography} from "antd";

const AppFooter = () => {
    const { Footer } = Layout;

    return (
        <Footer style={{textAlign: 'center', backgroundColor: '#d4d5da'}}>
            <Space size='large'>
                <Typography>
                    © 2022 TrialInformatics
                </Typography>
            </Space>
        </Footer>
    )
};

export default AppFooter;