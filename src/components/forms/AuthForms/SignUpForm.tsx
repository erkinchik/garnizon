import React from "react";
import { Link } from "react-router-dom";

import classes from "./AuthForms.module.scss";
import {
  ERROR_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
} from "../../../routes/path";
import { Button, Checkbox, Form, Input } from "antd";

const SignUpForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={classes.signUp}>
      {/*<div className={classes.signUpHeader}>*/}
      {/*  <Link to={HOME_PAGE}>LOGO</Link>*/}
      {/*</div>*/}

      <Form
        className={classes.signUpForm}
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
          name="phoneNumber"
          rules={[{ required: true, message: "Укажите номер телефона!" }]}
        >
          <Input placeholder="Номер Телефона" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Заполните Пароль!" }]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item
          name="passwordRepeat"
          rules={[{ required: true, message: "Повторите Пароль!" }]}
        >
          <Input.Password placeholder="Повторите Пароль" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 0 }}>
          <Button className={classes.btn} type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>

      <Link className={classes.createAccount} to={LOGIN_PAGE}>
        Есть учетная запись? Войти.
      </Link>
    </div>
  );
};

export default SignUpForm;
