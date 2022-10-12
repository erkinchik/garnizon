import React, { FC, useEffect } from "react";
import classes from "./AuthForms.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ERROR_PAGE, HOME_PAGE, REGISTRATION_PAGE } from "../../../routes/path";
import { Button, Checkbox, Form, Input } from "antd";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchLogin } from "../../../store/slices/authSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.auth)

  console.log(isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate(HOME_PAGE)
    }
  }, [isAuth]);

  const onFinish = (values: any) => {
    dispatch(fetchLogin(values))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={classes.login}>
      {/*<div className={classes.loginHeader}>*/}
      {/*  <Link to={HOME_PAGE}>LOGO</Link>*/}
      {/*</div>*/}

      <Form
        className={classes.loginForm}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Укажите адрес Эл. Почты!" }]}
        >
          <Input placeholder="Эл. почта" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Заполните Пароль!" }]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <div className={classes.rememberPass}>
          <Form.Item
            className={classes.remember}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
          <Link className={classes.forgotPass} to={ERROR_PAGE}>
            Забыли Пароль?
          </Link>
        </div>

        <Form.Item wrapperCol={{ offset: 5 }}>
          <Button className={classes.btn} type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>

      <Link className={classes.createAccount} to={REGISTRATION_PAGE}>
        Создать учетную запись
      </Link>
    </div>
  );
};

export default LoginForm;
