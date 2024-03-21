/** @jsxImportSource @emotion/react */
"use client";

import { css, keyframes } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// const fadeOut = keyframes`
//   from {
//     width: 100vw;
//   }
//   to {
//     width: 100%;
//   }
// `;

const LoginContainer = () => css`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  background: radial-gradient(
    209.64% 186.34% at 176.13% 51.41%,
    #030c28 0%,
    #263e89 100vw
  );
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
    #263e89 100vw
  );
  padding-right: 70px;
  color: white;

  span {
    white-space: pre-line;
    font-weight: bold;
    
    &:first-child {
      font-size: 40px;
      text-align: right;
      transform: rotate(-90deg);
    }
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
  const [autoLoginStarted, setAutoLoginStarted] = useState(false);
  const [text, setText] = useState("I want to know about you!!");
  const [showText, setShowText] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setShowText(false);
    }, 2000);

    setTimeout(() => {
      setText("Hey, Injae! Auto login please!");
      setShowText(true);
    }, 3000);

    setTimeout(() => {
      setAutoLoginStarted(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setAutoLoginStarted(true);
 
    setTimeout(() => {
      setInput({ ...input, email: "l", password: "" });
    }, 4100);

    setTimeout(() => {
      setInput({ ...input, email: "le", password: "" });
    }, 4200);

    setTimeout(() => {
      setInput({ ...input, email: "lee", password: "" });
    }, 4300);

    setTimeout(() => {
      setInput({ ...input, email: "leei", password: "" });
    }, 4400);

    setTimeout(() => {
      setInput({ ...input, email: "leein", password: "" });
    }, 4500);

    setTimeout(() => {
      setInput({ ...input, email: "leeinj", password: "" });
    }, 4600);

    setTimeout(() => {
      setInput({ ...input, email: "leeinja", password: "" });
    }, 4700);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "" });
    }, 4800);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "1" });
    }, 5000);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "12" });
    }, 5100);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "123" });
    }, 5200);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "1234" });
    }, 5300);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "12345" });
    }, 5400);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "123456" });
    }, 5500);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "1234567" });
    }, 5600);

    setTimeout(() => {
      setInput({ ...input, email: "leeinjae", password: "12345678" });
    }, 5700);

    setTimeout(() => {
      handleLogin();
    }, 7000);
  }, []);

  const handleLogin = () => {
    // router.push("/MainPage");
  };

  return (
    <div css={[LoginContainer]}>
      <div css={LogoBox}>
        <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <span>{text}</span>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
      <form css={LoginFormBox}>
        <AnimatePresence>
          <motion.div 
            css={LoginBox}         
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ delay: 3.5, duration: 2 }}
          >
            <div css={InputBox}>
              <input
                css={InputContainer(false)}
                placeholder="아이디 입력"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                type="text"
              />
              <input
                css={InputContainer(false)}
                placeholder="패스워드 입력"
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
                type="password"
              />
            </div>
            <button css={LoginButton} type="submit">
              로그인
            </button>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};

export default LoginPage;

