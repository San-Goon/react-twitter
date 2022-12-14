import PropTypes from "prop-types"
import Link from "next/link"
import {Input, Row, Col, Menu} from "antd"
import {useCallback, useState} from "react";
import styled, {createGlobalStyle} from "styled-components";

import UserProfile from "./UserProfile"
import LoginForm from "./LoginForm"
import {useSelector} from "react-redux";

const SearchInput = styled(Input.Search) `
  vertical-align: middle;
`

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`

const menuItems = [
    {
        label: <Link href={"/"}><a>노드버드</a></Link>,
        key: "home"
    },
    {
        label: <Link href={"/profile"}><a>프로필</a></Link>,
        key: "profile"
    },
    {
        label: <SearchInput enterButton />,
        key: "searchInput"
    },
    {
        label: <Link href={"/signup"}><a>회원가입</a></Link>,
        key: "signup"
    }
]

const AppLayout = ({selected, children}) => {
    const [current, setCurrent] = useState(selected ? selected : "home");

    const me = useSelector((state) => state.user.me);

    const onMenu = useCallback((e) => {
        setCurrent(e.key)
    },[])

    return (
        <div>
            <Global />
            <Menu mode={"horizontal"} onClick={onMenu} selectedKeys={[current]} items={menuItems}>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href={"https://www.github.com"} target={"_blank"}
                    rel={"noopener noreferrer"}>Made by KyleCho</a>
                </Col>
            </Row>
        </div>
    )
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;

