import { Button, Result } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  // useEffect(() => {
  //   window.location.reload();
  // }, [])
  
  const nav = useNavigate();
  return (
    <Result
      status="403"
      title="403"
      subTitle="Please Login again to access this page."
      extra={[
        <Button onClick={() => nav("/")} type="primary">
          Back Home
        </Button>,
        <Button onClick={() => nav("/login")} danger>
          Login
        </Button>,
      ]}
    />
  );
};

export default ErrorPage;
