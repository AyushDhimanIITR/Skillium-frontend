import React from "react";
import style from "./login.module.css";
import illustration from "../../Assets/loginIllust.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className={style.loginCont}>
        <div className={style.box}>
          <div className={style.form}>
            <p>Sign in to your account</p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item

                name="email"
                rules={[
                  {type:"email", required: true, message: "Please input your Email!" },
                ]}
                hasFeedback
              >
                <Input style={{padding:"0.5rem "}}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  style={{padding:"0.5rem "}}
                />
              </Form.Item>
              <Form.Item>
                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item> */}
                <a style={{color: "#525252"}} className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button loginBtn"
                  style={{background:'#343434', padding:"auto 1rem"}}
                >
                  Sign in
                </Button> 
                {/* Or <a href="">register now!</a> */}
              </Form.Item>
            </Form>
          </div>
          <div className={style.illustration}>
            <img loading="lazy" src={illustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
