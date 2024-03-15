/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import React, { ChangeEvent, FormEvent, useState } from "react";

const FullScreenGradient = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    209.64% 186.34% at 176.13% 51.41%,
    #030c28 0%,
    #263e89 100%
  );
  color: white;
  flex-direction: column;
  gap: 20px;
`;

const LoginContainer = css`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
`;

const LogoBox = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  background: radial-gradient(
    209.64% 186.34% at 176.13% 51.41%,
    #030c28 0%,
    #263e89 100%
  );
  padding-right: 70px;
  color: white;

  span {
    white-space: pre-line;
    text-align: right;
    font-size: 14px;
  }
`;

const LoginFormBox = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 70px;
  background-color: #fff;

  h1 {
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 23px;
  }
`;

const LoginBox = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`;

const InputBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const InputContainer = (readOnly: boolean) => css`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  background: ${readOnly ? "#666666" : "#D9D9D9"};
  color: ${readOnly ? "white" : "black"};

  &::placeholder {
    color: #b2b2b2;
    font-size: 12px;
    font-weight: bold;
  }
`;

const LoginButton = css`
  width: 100px;
  height: 90px;
  background-color: #263e89;
  color: #ffffff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

interface IFORM {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [input, setInput] = useState<IFORM>({ email: "", password: "" });
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.email || !input.password) {
      return;
    }
  };

  const toggleView = () => setShowLoginPage(!showLoginPage);

  if (!showLoginPage) {
    return (
      <div css={FullScreenGradient}>
        <h2>Welcome</h2>
        <button onClick={() => setShowLoginPage(true)}>Enter Site</button>
      </div>
    );
  }

  return (
    <div css={[LoginContainer]}>
      <div css={[LogoBox]}>
        <span>하하하하</span>
      </div>
      <form css={[LoginFormBox]}>
        <h1>로그인</h1>
        <div css={[LoginBox]}>
          <div css={[InputBox]}>
            <input
              css={[InputContainer(false)]}
              placeholder="아이디 입력"
              name="email"
              type="text"
            />
            <input
              css={[InputContainer(false)]}
              placeholder="패스워드 입력"
              name="password"
              type="password"
            />
          </div>
          <button css={[LoginButton]} type="submit">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

