import React, { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";

import { ReactComponent as TelegramIcon } from "../../icons/telegramIcon.svg";
import { ReactComponent as WhatsAppIcon } from "../../icons/whatsappIcon.svg";
import { ReactComponent as ProfileIcon } from "../../icons/profileIcon.svg";
import {
  ERROR_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE,
} from "../../routes/path";
import { logout } from "../../store/slices/authSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const links = [
  {
    title: "Telegram",
    className: classes.telegramLink,
    icon: <TelegramIcon />,
    path: "https://t.me/+996703701000",
  },
  {
    title: "WhatsApp",
    className: classes.whatsAppLink,
    icon: <WhatsAppIcon />,
    path: "https://wa.me/+996703701000",
  },
];

const Header: FC = () => {
  const dispatch = useAppDispatch()
  return (
    <header className={classes.siteHeader}>
      <div className={classes.topHeader}>
        <div className={classes.homeLinkWrapper}>
          <Link className={classes.homeLink} to={HOME_PAGE} />
        </div>
        <ul className={classes.linkContainer}>
          <li className={classes.linkItem}>
            <span className={classes.link}>
              <a className={classes.link} href="tel:+996 (703) 701000 ">
                +996 (703) 701000
              </a>
            </span>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link}>Пополнить баланс</a>
          </li>
        </ul>
        <ul className={`${classes.linkContainer} ${classes.icons}`}>
          {links.map(({ path, className, title, icon }) => {
            return (
              <li
                key={path}
                className={`${classes.linkItem} ${classes.icon} ${className || ""
                  }`}
                data-tooltip={title}
              >
                <a
                  className={`${classes.link} ${classes.icon}`}
                  href={path}
                  target="_blank"
                >
                  {icon}
                </a>
              </li>
            );
          })}

          <li
            className={`${classes.linkItem} ${classes.icon} ${classes.profile} `}
            data-tooltip={"Личный Кабинет"}
          >
            <Link
              to={PROFILE_PAGE}
              className={`${classes.link} ${classes.icon} ${classes.profile}`}
            >
              <ProfileIcon />
            </Link>
          </li>

          <li
            className={`${classes.linkItem} ${classes.icon} ${classes.profile} `}
            data-tooltip={"Выйти"}
          >

            <ProfileIcon onClick={()=>dispatch(logout())}/>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Header;
