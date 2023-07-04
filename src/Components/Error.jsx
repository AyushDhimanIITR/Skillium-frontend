import { useState, useEffect } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const ErrorPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])
  
  const nav = useNavigate();
  
  return (
    <>
    { 
      loading? (<Loader />) : (

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
      )
    }
      </>
  );
};

export default ErrorPage;
