import React, { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";

import { ReactComponent as TelegramIcon } from "../../icons/telegramIcon.svg";
import { ReactComponent as WhatsAppIcon } from "../../icons/whatsappIcon.svg";
import { ReactComponent as ProfileIcon } from "../../icons/profileIcon.svg";
import { ReactComponent as MenuIcon } from "../../icons/menuIcon.svg";

import "../../pages/HomePage/HomePage.scss";
import { ERROR_PAGE, HOME_PAGE } from "../../routes/path";

const links = [
  {
    title: "Telegram",
    className: classes.telegramLink,
    icon: <TelegramIcon />,
    path: "https://t.me/+79260017544",
  },
  {
    title: "WhatsApp",
    className: classes.whatsAppLink,
    icon: <WhatsAppIcon />,
    path: "https://wa.me/79260017544",
  },
  {
    title: "Личный Кабинет",
    className: classes.profile,
    icon: <ProfileIcon />,
    path: ERROR_PAGE,
    isLink: true,
  },
];

const Header: FC = () => {
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
          {links.map(({ path, className, title, icon, isLink }) => {
            return (
              <li
                key={path}
                className={`${classes.linkItem} ${classes.icon} ${
                  className || ""
                }`}
                data-tooltip={title}
              >
                {isLink ? (
                  <Link className={`${classes.link} ${classes.icon}`} to={path}>
                    {icon}
                  </Link>
                ) : (
                  <a
                    className={`${classes.link} ${classes.icon}`}
                    href={path}
                    target="_blank"
                  >
                    {icon}
                  </a>
                )}
              </li>
            );
          })}

          <li className={`${classes.linkItem} ${classes.icon}`}>
            <div
              aria-pressed="false"
              className={`${classes.link} ${classes.icon} ${classes.menuBtn}`}
              role="button"
              tabIndex={0}
            >
              <MenuIcon />
            </div>
          </li>
        </ul>
      </div>
      <div className="menu-content-header on-dark">
        <div className="mobile-nav">
          <div className="dropdown city-dropdown">
            <span className="regions-title">Москва</span>
            <span>
              <svg
                className="chevron-container"
                fill="none"
                height={5}
                viewBox="0 0 8 5"
                width={8}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className="chevron" d="M1 1L4 4L7 1" stroke="white" />
              </svg>
            </span>
          </div>
          <a href="tel:+74957774147">+7 (495) 777-41-47</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
