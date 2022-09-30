import React, { FC } from "react";

import { ReactComponent as TelegramIcon } from "../../icons/telegramIcon.svg";
import { ReactComponent as WhatsAppIcon } from "../../icons/whatsappIcon.svg";

import "../../pages/HomePage/HomePage.scss";

const Header: FC = () => {
  return (
    <header className="site-header">
      <div className="top-header absolute">
        <a className="home-link" href="index.html" />
        <div className="dropdown city-dropdown city-dropdown--header on-dark">
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
          {/*<div className="regions-container">*/}
          {/* */}
          {/*</div>*/}
        </div>
        <ul className="link-container">
          <li className="link-item">
            <span className="link on-dark">
              <a href="tel:+74957774147">+7 (495) 777-41-47</a>
            </span>
          </li>
          <li className="link-item test">
            <a
              className="link on-dark"
              data-ga-category="btn_pay"
              data-ga-type="header"
              data-target="#paymentModal"
              data-toggle="modal"
              href="index.html#"
            >
              Пополнить баланс
            </a>
          </li>
        </ul>
        <ul className="link-container icons">
          <li className="link-item icon telegram-link" data-tooltip="Telegram">
            <a
              className="link icon"
              href="https://t.me/+79260017544"
              target="_blank"
            >
              <TelegramIcon />
            </a>
          </li>
          <li className="link-item icon whatsapp-link" data-tooltip="WhatsApp">
            <a
              className="link icon"
              href="https://wa.me/79260017544"
              target="_blank"
            >
              <WhatsAppIcon />
            </a>
          </li>
          <li className="link-item icon wallet">
            <a
              className="link icon"
              data-ga-category="btn_pay"
              data-ga-type="header"
              data-target="#paymentModal"
              data-toggle="modal"
            >

            </a>
          </li>
          <li className="link-item icon profile" data-tooltip="Личный кабинет">
            <a className="link icon" href="http://lk.delta.ru/">
              <svg
                fill="none"
                height={48}
                viewBox="0 0 48 48"
                width={48}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                  fill="white"
                  fillRule="evenodd"
                />
                <path
                  className="refill"
                  clipRule="evenodd"
                  d="M27.5 19.4091C27.5 21.2919 25.933 22.8182 24 22.8182C22.067 22.8182 20.5 21.2919 20.5 19.4091C20.5 17.5263 22.067 16 24 16C25.933 16 27.5 17.5263 27.5 19.4091ZM24 24.1818C28.4183 24.1818 32 27.2344 32 31H16C16 27.2344 19.5817 24.1818 24 24.1818Z"
                  fill="#434C5D"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li className="link-item icon">
            <div
              aria-pressed="false"
              className="link icon menu-btn"
              role="button"
              tabIndex={0}
            >
              <svg
                fill="none"
                height={48}
                viewBox="0 0 48 48"
                width={48}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                  fill="white"
                  fillRule="evenodd"
                />
                <path
                  className="refill"
                  clipRule="evenodd"
                  d="M12 21.5C12 20.6716 12.6716 20 13.5 20H31.5C32.3284 20 33 20.6716 33 21.5C33 22.3284 32.3284 23 31.5 23H13.5C12.6716 23 12 22.3284 12 21.5ZM17 28.5C17 27.6716 17.6716 27 18.5 27H26.5C27.3284 27 28 27.6716 28 28.5C28 29.3284 27.3284 30 26.5 30H18.5C17.6716 30 17 29.3284 17 28.5ZM34.5 27C35.3284 27 36 27.6716 36 28.5C36 29.3284 35.3284 30 34.5 30H31.5C30.6716 30 30 29.3284 30 28.5C30 27.6716 30.6716 27 31.5 27H34.5Z"
                  fill="#434C5D"
                  fillRule="evenodd"
                />
              </svg>
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
            <div className="regions-container">
              <ul className="regions-list">
                <li className="regions-item">
                  <a className="link region-link" href="volgograd/index.html">
                    Волгоград
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="voronezh/index.html">
                    Воронеж
                  </a>
                </li>
                <li className="regions-item">
                  <a
                    className="link region-link"
                    href="ekaterinburg/index.html"
                  >
                    Екатеринбург
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="kazan/index.html">
                    Казань
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="kaluga/index.html">
                    Калуга
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="krasnodar/index.html">
                    Краснодар
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="kurgan/index.html">
                    Курган
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="kursk/index.html">
                    Курск
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="lipeck/index.html">
                    Липецк
                  </a>
                </li>
                <li className="regions-item">
                  <a
                    className="link region-link"
                    href="magnitogorsk/index.html"
                  >
                    Магнитогорск
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="index.html">
                    Москва
                  </a>
                </li>
                <li className="regions-item">
                  <a
                    className="link region-link"
                    href="naberezhnye-chelny/index.html"
                  >
                    Набережные Челны
                  </a>
                </li>
                <li className="regions-item">
                  <a
                    className="link region-link"
                    href="nizhnij-novgorod/index.html"
                  >
                    Нижний Новгород
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="novokuzneck/index.html">
                    Новокузнецк
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="novosibirsk/index.html">
                    Новосибирск
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="omsk/index.html">
                    Омск
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="perm/index.html">
                    Пермь
                  </a>
                </li>
                <li className="regions-item">
                  <a
                    className="link region-link"
                    href="rostov-na-donu/index.html"
                  >
                    Ростов-на-Дону
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="samara/index.html">
                    Самара
                  </a>
                </li>
                <li className="regions-item">
                  <a
                    className="link region-link"
                    href="sankt-peterburg/index.html"
                  >
                    Санкт-Петербург
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="saratov/index.html">
                    Саратов
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="smolensk/index.html">
                    Смоленск
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="sochi/index.html">
                    Сочи
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="tambov/index.html">
                    Тамбов
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="tolyatti/index.html">
                    Тольятти
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="tula/index.html">
                    Тула
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="tyumen/index.html">
                    Тюмень
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="ufa/index.html">
                    Уфа
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="chelyabinsk/index.html">
                    Челябинск
                  </a>
                </li>
                <li className="regions-item">
                  <a className="link region-link" href="yaroslavl/index.html">
                    Ярославль
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="tel:+74957774147">+7 (495) 777-41-47</a>
        </div>
        <div className="link-container">
          <div className="link-column">
            <ul className="link-wrapper">
              <li className="link-item">
                <a
                  className="link menu-link accent"
                  href="ohrana-kvartir/index.html"
                >
                  Решения
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="ohrana-kvartir/index.html">
                  Охрана квартир
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link menu-link"
                  href="ohrana-kottedjej/index.html"
                >
                  Охрана коттеджей
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="ohrana-biznesa/index.html">
                  Охрана бизнеса
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="ohrana-auto/index.html">
                  Охрана автомобиля
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link menu-link"
                  href="pozharnaya-signalizaciya/index.html"
                >
                  Пожарная сигнализация
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="smartvideo/index.html">
                  Видеонаблюдение
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="skud/index.html">
                  Управление доступом
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="datchiki/index.html">
                  Датчики
                </a>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <ul className="link-wrapper">
              <li className="link-item">
                <span
                  className="link menu-link accent"
                  style={{ cursor: "default" }}
                >
                  О компании
                </span>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="stock/index.html">
                  Акции
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="career/index.html">
                  Вакансии
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="about/news/index.html">
                  Новости
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="contacts/index.html">
                  Контакты
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="http://business.delta.ru/">
                  Корпоративным клиентам
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="partnership/index.html">
                  Партнерам
                </a>
              </li>
              <li className="link-item">
                <a className="link menu-link" href="blog/index.html">
                  Блог
                </a>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <ul className="link-wrapper">
              <li className="link-item">
                <a className="link menu-link accent" href="faq/index.html">
                  Помощь
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link menu-link"
                  href="faq/questions/index.html#help_instructions"
                >
                  Инструкции
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link menu-link"
                  href="faq/documents/index.html#help_documents"
                >
                  Документы
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link menu-link"
                  href="faq/documents/index.html#help_methods_of_payment"
                >
                  Способы оплаты
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link menu-link"
                  href="faq/questions/index.html#help_system"
                >
                  Как работает система
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link menu-link"
                  href="mobilnoe-prilojenie/index.html"
                >
                  Мобильное приложение
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link menu-link"
                  href="populyarno-ob-ohrane/index.html"
                >
                  Популярно об охране
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="app-links">
          <a
            className="link apple"
            data-ga-category="btn_ios"
            href="https://itunes.apple.com/ru/app/delta-licnyj-kabinet/id708986747?mt=8"
            rel="nofollow"
            target="_blank"
          />
          <a
            className="link google"
            data-ga-category="btn_android"
            href="https://play.google.com/store/apps/details?id=ru.albertsoft.acabinet"
            rel="nofollow"
            target="_blank"
          />
          <a
            className="link huawei"
            data-ga-category="btn_huawei"
            href="https://appgallery.huawei.com/#/app/C102892775"
            rel="nofollow"
            target="_blank"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
