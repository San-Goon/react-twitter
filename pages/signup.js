import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Button, Form, Input} from "antd";
import {useCallback, useState} from "react";
import LoginForm from "../components/LoginForm";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`

const Signup = () => {
    const [id, onChangeId, idError] = useInput("", 6, 12);
    const [nickname, onChangeNickname, nicknameError] = useInput("", 2, 8);
    const [password, onChangePassword, passwordError] = useInput("",8,20);
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordCheckError, setPasswordCheckError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordCheckError(e.target.value !== password)
    }, [password])

    const onSubmit = useCallback(()=> {
            if (password !== passwordCheck) {
                return setPasswordCheckError(true)
            }
            if (idError || nicknameError || passwordError || passwordCheckError)  {
                return;
            }
        },[password, passwordCheck, idError, nicknameError, passwordError, passwordCheckError]
    )

    return <AppLayout>
        <Head>
            <title>회원가입 | twitter</title>
        </Head>
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor={"user-id"}>아이디</label>
                <br />
                <Input name={"user-id"} value={id} required onChange={onChangeId} placeholder={"6자이상 12자이하"} />
                {idError && <ErrorMessage>아이디는 6자이상, 12자이하여야 합니다.</ErrorMessage>}
            </div>
            <div>
                <label htmlFor={"user-nickname"}>닉네임</label>
                <br />
                <Input name={"user-nickname"} value={nickname} required onChange={onChangeNickname} placeholder={"2자이상 8자이하"} />
                {nicknameError && <ErrorMessage>닉네임은 2자이상, 8자이하여야 합니다.</ErrorMessage>}
            </div>
            <div>
                <label htmlFor={"user-password"}>비밀번호</label>
                <br />
                <Input name={"user-password"} type={"password"} value={password} required onChange={onChangePassword} placeholder={"8자이상 20자이하"} />
                {passwordError && <ErrorMessage>비밀번호는 8자이상, 20자이하여야 합니다.</ErrorMessage>}
            </div>
            <div>
                <label htmlFor={"user-passwordCheck"}>비밀번호 확인</label>
                <br />
                <Input name={"user-passwordCheck"} type={"password"} value={passwordCheck} required onChange={onChangePasswordCheck} />
                {passwordCheckError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div style={{ marginTop: 10}}>
                <Button type={"primary"} htmlType={"submit"}>가입하기</Button>
            </div>
        </Form>
    </AppLayout>
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default Signup;
