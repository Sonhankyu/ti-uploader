import React, {useEffect, useState} from 'react';
import {Menu} from "antd";
import GetMenuItem from "../../../components/Function/GetMenuItem";
import {CrownOutlined, HomeOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";

const HeaderMenu = () => {
    const history = useHistory();
    const [path, setPath] = useState(history.location.pathname);

    useEffect(() => {
        setPath(history.location.pathname);
    }, [path])

    const menuItems = [
        GetMenuItem('Home', '/main', <HomeOutlined />, null),
        GetMenuItem('Admin', '/admin', <CrownOutlined />, null)
    ]

    const onClickMenu = (menu) => {
        history.push(menu.key);
    }

    return (
        <>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[path]} items={menuItems} onClick={onClickMenu}/>
        </>
    );
};

export default HeaderMenu;