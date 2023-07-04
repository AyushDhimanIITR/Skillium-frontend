import React from "react";
import style from "./login.module.css";
import illustration from "../../Assets/loginIllust.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import { API_DOMAIN } from "../../js/config";
import { useNavigate } from "react-router-dom";
import {useCookies } from "react-cookie";


const Login = () => {
  const [apis, contextHolder] = notification.useNotification();
  const [, setCookie] = useCookies();
  const navigate = useNavigate();

  
  const errorNotification = (type) => {
    apis[type]({
      message: "Login failed",
      description: "You have entered incorrect credentials",
    });
  };

  const onFinish = async (values) => {
    try {
      const { email, password } = values;
      const data = await fetch(`${API_DOMAIN}students/authenticate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      const response = await data.json();
      setCookie("token", response.jwtToken);
      // localStorage.setItem('token', response.jwtToken)
      localStorage.setItem('user', values.email);
      localStorage.removeItem('image');
      console.log(response);
      navigate("/profile");
    } catch (error) {
      errorNotification("error");
      console.log(error);
    }
  };

  

  return (
    <>
      <div className={style.loginCont}>
        {contextHolder}
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
                  { required: true, message: "Please input your Email!" },
                ]}
                hasFeedback
              >
                <Input
                  style={{ padding: "0.5rem " }}
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
                  style={{ padding: "0.5rem " }}
                />
              </Form.Item>
              <Form.Item>
                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item> */}
                <a
                  style={{ color: "#525252" }}
                  className="login-form-forgot"
                  href="/"
                >
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button loginBtn"
                  style={{ background: "#343434", padding: "auto 1rem" }}
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
