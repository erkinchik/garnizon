import React from "react";
import './HomePage.scss'

const HomePage = () => {
        return (
            <div>
                <div className="mobile-menu mobile-menu__eldes collapse-list" id="mobile-menu">
                    <div className="mobile-menu-close-btn" />
                    <div className="mobile-menu__shadow" />
                    <ul className="mobile-menu__list">
                        <li className="mobile-menu__item mobile-menu__item-eldes mobile-menu__item-mobile">
                            <span className="mobile-menu__link" style={{backgroundImage: 'url("static/public-v2/images/icon-phone-light.2733317247f4.svg")'}}><a href="tel:+74957774147">+7 (495) 777-41-47</a></span>
                        </li>
                        <li className="mobile-menu__item mobile-menu__item-eldes mobile-menu__item-mobile">
                            <a className="mobile-menu__link" data-toggle="modal" href="https://lk.delta.ru/" style={{backgroundImage: 'url("static/public-v2/images/icon-user-light.79c25ce8a0ba.svg")'}}>Личный кабинет</a>
                        </li>
                        <li className="mobile-menu__item mobile-menu__item-eldes mobile-menu__item-mobile">
                            <a className="mobile-menu__link" data-target="#paymentModal" href="index.html#" style={{backgroundImage: 'url("static/public-v2/images/icon-wallet-light.73baa76d65e6.svg")'}}>Пополнить кошелек</a>
                        </li>
                        <li className="mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="smartvideo/index.html" style={{backgroundImage: 'url("static/public-v2/images/new-product-menu/video-white.d0d0f1972266.svg")'}}>Видеонаблюдение</a>
                        </li>
                        <li className="panel mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="ohrana-kvartir/index.html" style={{backgroundImage: 'url("static/public-v2/images/new-product-menu/ohrana-kvartir-white.ef38527838fc.svg")'}}>Охрана квартиры</a>
                        </li>
                        <li className="panel mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="ohrana-kottedjej/index.html" style={{backgroundImage: 'url("static/public-v2/images/new-product-menu/ohrana-kottedjej-white.9e04cce37762.svg")'}}>Охрана коттеджа</a>
                        </li>
                        <li className="panel mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="ohrana-biznesa/index.html" style={{backgroundImage: 'url("static/public-v2/images/new-product-menu/ohrana-business-white.4da91397d073.svg")'}}>Охрана бизнеса</a>
                        </li>
                        <li className="panel mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link mobile-menu__link--toggle collapsed" data-parent="#mobile-menu" data-toggle="collapse" href="index.html#mobile-menu-1" style={{backgroundImage: 'url("static/public-v2/images/new-product-menu/ohrana-car-white.6be45bf414c5.svg")'}}>Охрана авто</a>
                            <div className="mobile-menu__item-content collapse" id="mobile-menu-1">
                                <div className="mobile-menu__item-content-inner">
                                    <ul className="mobile-menu__list mobile-menu__list--sub">
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="ohrana-auto/systemsX/index.html">Delta Systems X</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="ohrana-auto/systems3/index.html">Delta Systems 3</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="ohrana-auto/systems4/index.html">Delta Systems 4</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="ohrana-auto/systems5/index.html">Delta Systems 5</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="ohrana-auto/systems6/index.html">Delta Systems 6</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="ohrana-auto/systems7/index.html">Delta Systems 7</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="ohrana-auto/systems8/index.html">Delta Systems 8</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="ohrana-auto/logistics/index.html">Delta Logistics</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="pozharnaya-signalizaciya/index.html" style={{backgroundImage: 'url("static/public-v2/images/new-product-menu/fire-alarm-white.fc200aa728ce.svg")'}}>Пожарная сигнализация</a>
                        </li>
                        <li className="mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="skud/index.html" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_skud.fb864718eacb.png")'}}>Управление доступом</a>
                        </li>
                        <li className="mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="https://lk.delta.ru" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_lk.64998a7392f4.png")'}}>Личный кабинет</a>
                        </li>
                        <li className="panel mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link mobile-menu__link--toggle collapsed" data-parent="#mobile-menu" data-toggle="collapse" href="index.html#mobile-menu-2" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_faq.c8663aa5a712.svg")'}}>FAQ</a>
                            <div className="mobile-menu__item-content collapse" id="mobile-menu-2">
                                <div className="mobile-menu__item-content-inner">
                                    <ul className="mobile-menu__list mobile-menu__list--sub">
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="faq/questions/index.html#help_qa">Вопросы и ответы</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="faq/questions/index.html#help_instructions">Инструкции</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="faq/documents/index.html#help_documents">Документы</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="faq/documents/index.html#help_methods_of_payment">Способы оплаты</a>
                                        </li>
                                        <li className="mobile-menu__item">
                                            <a className="mobile-menu__link" href="faq/questions/index.html#help_system">Как работает система</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="mobilnoe-prilojenie/index.html" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_download.cd29d919478b.svg")'}}>Скачать приложение</a>
                        </li>
                        <li className="mobile-menu__item-eldes mobile-menu__item">
                            <a className="mobile-menu__link" href="https://lk.delta.ru/hotline/" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_support.923469959441.png")'}}>Помощь</a>
                        </li>
                    </ul>
                </div>
                <div className="site">
                    <main className="site-main line-height" role="main">
                        <div className="hero">
                            <div className="hero-m">
                                <div className="hero-m_block hero-m_block--products">
                                    <div className="hero-m_person hero-m_person--products" />
                                    <div className="hero-m_title">
                                        ПОЛУЧИТЬ <br />
                                        <span>ЗАЩИТУ</span>
                                    </div>
                                </div>
                                <div className="hero-m_block hero-m_block--support">
                                    <div className="hero-m_person hero-m_person--support" />
                                    <div className="hero-m_title">
                                        <span>ПОДДЕРЖКА</span> <br />
                                        КЛИЕНТОВ
                                    </div>
                                </div>
                            </div>
                            <div className="hero-area hero-area--products">
                                <div className="hero__link-preview">
                                    <img alt="" className="hero__link-preview-img" />
                                </div>
                                <div className="hero-area__title">ПОЛУЧИТЬ ЗАЩИТУ</div>
                                <div className="hero-area__content">
                                    <div className="hero-area__content-inner">
                                        <div className="hero__mobile-title">Получить защиту</div>
                                        <button className="hero-area__cta btn btn-danger btn-block btn-long btn-cta" data-form-type="call" data-target="#leadForm" data-toggle="modal">
                                            Заказать звонок
                                        </button>
                                        <div className="hero-area__nav">
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/leftMenu/camera_noBG.4c8ce723a571.png" data-text="
							Видеонаблюдение, о котором вы мечтали:
							<p class=&quot;text-advantages&quot;><br/> - Облачное хранение <br/> - Обнаружение движения <br/> - Обнаружение шума <br/> - Максимальная кастомизация</p>
						" href="smartvideo/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_video.6dd4cf7403b3.svg")'}} />
                                                Видеонаблюдение</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/leftMenu/plan_noBG.62643faa2c36.png" data-text="
								Современные решения по организации охраны
							" href="ohrana-kvartir/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_flats.3c57c15466c3.svg")'}} />
                                                Защита квартиры</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/leftMenu/house_noBG.b108602fb06a.png" data-text="
							Предлагаем современные решения для защиты и предотвращения:
							<p class=&quot;text-advantages&quot;><br/> - Краж <br/> - Пожаров <br/> - Затоплений <br/> - Задымлений <br/> - Утечки газа</p>
						" href="ohrana-kottedjej/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_cottages.bc4ed20cb099.svg")'}} />
                                                Защита коттеджа</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/leftMenu/business.247fe085c8a0.png" data-text="
							Выберите уровень защищенности для своего бизнес-объекта. Предлагаем решения любой сложности – от тревожной кнопки до сложных инженерных проектов.
						" href="ohrana-biznesa/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_bussiness.c56c61d13bde.svg")'}} />
                                                Защита бизнеса</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/leftMenu/transport.cb3493528e38.png" data-text="
							Безопасность для автомобиля. Комфорт для вас. Решения для бизнеса и частных лиц.
							<p class=&quot;text-advantages&quot;><br/> - Защита от угона <br/> - Реагирование <br/> - Спутник <br/> - Автозапуск <br/> - Мониторинг <br/> - И многое другое</p>
						" href="ohrana-auto/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_auto.610aa20268a9.svg")'}} />
                                                Защита автомобиля</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/leftMenu/industrial_redesign_noBG.15ca3f30561a.png" data-text="
							DELTA осуществляет полный комплекс работ по обеспечению пожарной безопасности объектов любой сложности:
							<p class=&quot;text-advantages&quot;><br/> - Проектирование <br/> - Монтаж <br/> - Настройка <br/> - Обслуживание <br/> - Ремонт</p>
						" href="pozharnaya-signalizaciya/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_fire.8a16ea280057.png")'}} />
                                                Пожарная сигнализация</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/leftMenu/fiz-ohrana.cccbb94c30e4.png" data-text="
							Охрана объектов и мероприятий по всей стране любой сложности
            " href="postovaya-ohrana/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_skud.fb864718eacb.png")'}} />
                                                Физическая охрана</a><button className="hero-area__link hero-area__link--back" data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/back_noBG.c93c654c3c00.png" data-text="Свернуть меню">
                                            <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/redesign/icons/arrow-back.94ccbf1f2ce8.png")'}} />
                                            Назад
                                        </button>
                                        </div>
                                        <button className="hero__back btn btn-primary btn-long" type="button">
                                            Назад
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-area hero-area--support">
                                <div className="hero__link-preview">
                                    <img alt="" className="hero__link-preview-img" />
                                </div>
                                <div className="hero-area__title">ПОДДЕРЖКА КЛИЕНТОВ</div>
                                <div className="hero-area__content">
                                    <div className="hero-area__content-inner">
                                        <div className="hero__mobile-title">Поддержка абонентов</div>
                                        <div className="hero-area__nav">
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/lk_noBG.807d83eed6b1.png" data-text="Ваш центр управления безопасностью DELTA" href="https://lk.delta.ru">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_lk.64998a7392f4.png")'}} />
                                                Личный кабинет</a>
                                            <a className="hero-area__link" data-ga-category="btn_pay" data-ga-type="right_menu" data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/balance_noBG.585599642fec.png" data-target="#paymentModal" data-text="Пополняйте баланс быстро и удобно" data-toggle="modal" href="index.html#">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_balance.ba21ef4894d8.svg")'}} />
                                                Пополнить баланс</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/dwnldapp_noBG.7873859f96db.png" data-text="С приложением DELTA управлять безопасностью удобно. В любой момент вы можете проверить статус охраны, сколько осталось денег, или пополнить счет." href="mobilnoe-prilojenie/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_download.cd29d919478b.svg")'}} />
                                                Скачать приложение</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/FAQ_no_BG.b4e99707c6e8.png" data-text="Здесь собраны ответы на самые популярные вопросы, возникающие у абонентов DELTA" href="faq/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_faq.c8663aa5a712.svg")'}} />
                                                Помощь</a>
                                            <a className="hero-area__link" data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/stock_noBG.5c9e2d2e6f2d.png" data-text="Самые выгодные предложения для клиентов DELTA" href="clients-stock/index.html">
                                                <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/pages/home/ic_stock.39d0c66b6ede.svg")'}} />
                                                Акции для клиентов</a><button className="hero-area__link hero-area__link--back" data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/back_noBG.c93c654c3c00.png" data-text="Свернуть меню">
                                            <div className="hero-area__icon" style={{backgroundImage: 'url("static/public-v2/images/redesign/icons/arrow-back.94ccbf1f2ce8.png")'}} />
                                            Назад
                                        </button>
                                        </div>
                                        <button className="hero__back btn btn-primary btn-long" type="button">
                                            Назад
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__slides-wrap">
                                <div className="hero__area-text" />
                                <div className="hero__slide--event hero__slide--event--desktop" data-target="#popup-new-app" data-toggle="modal" />
                                <div className="hero__slides-overlay" />
                            </div>
                            <div className="hero__overlay" />
                        </div>
                        <section className="hero__slides-wrap-m">
                            <div className="hero__slides">
                                <div className="hero__slide--event" data-target="#popup-new-app" data-toggle="modal" />
                                <div className="hero__object" />
                            </div>
                        </section>
                        <section className="main-text">
                            <div className="main-text__content container py-5">
                                DELTA – федеральный провайдер услуг безопасности, создавший полноценную
                                экосистему решений для защиты объектов бизнеса, частной недвижимости и
                                транспортных средств.
                            </div>
                        </section>
                        <section className="mainproducts">
                            <a className="mainproducts-item mainproducts-item-triple" href="smartvideo/index.html" target="_blank">
                                <div className="mainproducts-item-title">Видеонаблюдение</div>
                            </a>
                            <a className="mainproducts-item mainproducts-item-triple" href="skud/index.html" target="_blank">
                                <div className="mainproducts-item-title">Управление доступом</div>
                            </a>
                            <a className="mainproducts-item mainproducts-item-triple" href="pozharnaya-signalizaciya/index.html" target="_blank">
                                <div className="mainproducts-item-title">Противопожарная система</div>
                            </a>
                        </section>
                        <section className="mainproducts">
                            <a className="mainproducts-item mainproducts-item-double" href="ajax-ohrana/index.html" target="_blank">
                                <div>
                                    <div className="mainproducts-item-title">Стильные решения</div>
                                </div>
                            </a>
                            <a className="mainproducts-item mainproducts-item-double" data-form-type="automatization" data-target="#leadForm" data-toggle="modal">
                                <div>
                                    <div className="mainproducts-item-title">Охрана периметра</div>
                                </div>
                            </a>
                        </section>
                        <section className="mainproducts">
                            <a className="mainproducts-item mainproducts-item-solo" href="postovaya-ohrana/index.html" target="_blank">
                                <div>
                                    <div className="mainproducts-item-title">Физическая охрана</div>
                                </div>
                            </a>
                        </section>
                        <section className="main-best-product pt-5">
                            <div className="section-cottage">
                                <div className="mbp-item">
                                    <div className="mbp-item-badge">Хит продаж</div>
                                    <div className="mbp-item--wrapper mbp-item--wrapper--image">
                                        <div className="mbp-item-image" style={{backgroundImage: 'url("media/security/hit-prodazh-ajax-fire-protect-vertikal-3-4.png")'}} />
                                    </div>
                                    <div className="mbp-item--wrapper mbp-item--wrapper--text">
                                        <div className="mbp-item-text">
                                            <div className="mbp-item-text-title">
                                                Датчик дыма Ajax fire protect
                                            </div>
                                            <div className="mbp-item-text-description">
                                                Автономный датчик обнаружения и оповещения о задымлении и
                                                возгорании. Анализирует содержание примесей в воздухе и
                                                температуру в помещении. В случае обнаружения угрозы оповестит
                                                громкой сиреной и уведомлением в приложение. Управление из
                                                приложения
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mbp-item--wrapper mbp-item--wrapper--order">
                                        <div className="mbp-item-order">
                                            <div className="mbp-item-order-price">
                                                <div className="mbp-item-order-price-title">Подключение</div>
                                                <div className="mbp-item-order-price-value mbp-item-order-price-value--old">
                                                    5&nbsp;000 ₽
                                                </div>
                                                <div className="mbp-item-order-price-value">3&nbsp;350 ₽</div>
                                            </div>
                                            <button className="mbp-item-order-price-btn btn btn-primary" data-form-type="call" data-target="#leadForm" data-toggle="modal">
                                                Заказать
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="main-best-product pt-5">
                            <div className="section-cottage swiper mbp-slider main-new-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide mbp-item">
                                        <div className="mbp-item-badge">Акция</div>
                                        <div className="mbp-item--wrapper mbp-item--wrapper--image">
                                            <div className="mbp-item-image" style={{backgroundImage: 'url("media/security/aktsiya-kamera-3-4.png")'}} />
                                        </div>
                                        <div className="mbp-item--wrapper mbp-item--wrapper--text">
                                            <div className="mbp-item-text">
                                                <div className="mbp-item-text-title">Видеокамера Cute 2</div>
                                                <div className="mbp-item-text-description">
                                                    Высокоинтеллектуальная многофункциональная камера. Работает на
                                                    обнаружение движения и звука. Локальное и облачное хранение до
                                                    30 дней. Может быть использована для двусторонней голосовой
                                                    связи.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mbp-item--wrapper mbp-item--wrapper--order">
                                            <div className="mbp-item-order">
                                                <div className="mbp-item-order-price">
                                                    <div className="mbp-item-order-price-title">Подключение:</div>
                                                    <div className="mbp-item-order-price-value--wrapper">
                                                        <div className="mbp-item-order-price-value mbp-item-order-price-value--old">
                                                            6&nbsp;990 ₽
                                                        </div>
                                                        <div className="mbp-item-order-price-value">4&nbsp;990 ₽</div>
                                                    </div>
                                                </div>
                                                <button className="mbp-item-order-price-btn btn btn-primary" data-form-type="call" data-target="#leadForm" data-toggle="modal">
                                                    Заказать
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                                <div className="swiper-pagination" />
                            </div>
                        </section>
                        <section className="section-cottage pb-5">
                            <div className="promotion-block promotion-block--main">
                                <div className="description-container">
                                    <h3 className="description-heading">
                                        DELTA рекомендует! <br />
                                        Датчик движения с видеофиксацией Ajax motion cam
                                    </h3>
                                    <div className="description">
                                        <p>
                                            Универсальный круглосуточный датчик обнаружения. Фиксирует
                                            движение, записывает короткое видео, сохраняет и отправляет в
                                            приложение. Имеет прогрессивную защиту в том числе от вандализма и
                                            маскирования. Работает в составе охранных систем AJAX Hub2
                                        </p>
                                    </div>
                                    <div className="price">
                                        <p className="price--old">8&nbsp;500 ₽</p>
                                        <p className="price--new">7&nbsp;950 ₽</p>
                                    </div>
                                </div>
                                <button className="btn btn-rassrochka" data-form-type="call" data-target="#leadForm" data-toggle="modal">
                                    Позвонить
                                </button>
                                <div className="promotion-block-image" style={{backgroundImage: 'url("media/security/m-0-18-1.png")'}} />
                            </div>
                        </section>
                        <section className="pt-5 container main-house-scheme">
                            <div className="main-house-scheme-image" />
                        </section>
                        <section className="py-5 container main-how-work">
                            <p className="main-how-work-text">
                                Комплексная система безопасности DELTA поможет предупредить большинство
                                современных угроз для любого объекта недвижимости: от возгорания до
                                проникновения. <br /><br />
                                На основании многолетней экспертизы DELTA были сформированы базовые
                                комплекты защиты объектов недвижимости, но только в разговоре с
                                экспертом вы сможете сформировать систему, которая подойдет именно вам.
                                А эволюция охранных систем позволила им составить конкуренцию решениям
                                для умного дома и теперь в состав охранных систем вы можете добавить
                                элементы дистанционного управления комфортом на ваших объектах.
                                Сформируйте свой центр безопасности и комфорта.
                            </p>
                            <div className="main-how-work-image my-5" />
                            <h2 className="main-new-title main-how-work-title pt-4">
                                ОСНОВНЫЕ ПРИНЦИПЫ СОВРЕМЕННОЙ ЭКОСИСТЕМЫ БЕЗОПАСНОСТИ
                            </h2>
                            <p className="main-how-work-text">
                                Все процессы, отвечающие за обеспечение мониторинга и реагирования,
                                автоматизированы и соединены в единую бесшовную инфраструктуру. Для
                                пользователя это значит только то, что человек не вмешивается в алгоритм
                                обеспечения безопасности и выполняет администрирующую функцию.
                                <br /><br />
                                Система по средствам защищенной инфраструктуры самостоятельно и
                                автономно обменивается сигналами между объектами, станциями мониторинга
                                и экипажами реагирования. <br /><br />
                                Также в автоматическом режиме происходит расстановка и назначение
                                экипажа в случае тревоги и расчет оптимального маршрута прибытия к
                                объекту. То, что недавно казалось фантастикой, уже реализовано
                                экспертами DELTA.
                            </p>
                        </section>
                        <section className="py-5 container main-gbr">
                            <h2 className="main-new-title main-gbr-title">
                                СЛУЖБА РЕАГИРОВАНИЯ DELTA ЭТО:
                            </h2>
                            <div className="main-gbr-block">
                                <div className="main-gbr-block-image--wrapper">
                                    <div className="main-gbr-block-image main-gbr-block-image--1" />
                                </div>
                                <p className="main-gbr-block-text">
                                    6 000+ экипажей <br /><br />
                                    Приедут на тревогу за 5-7 мин <br /><br />
                                    Охранники высшей категории <br /><br />
                                    Владение техниками боя <br /><br />
                                    Разрешение на огнестрельное оружие <br /><br />
                                    Навыки психологического воздействия <br /><br />
                                    Умение оказывать первую помощь <br /><br />
                                    Ежегодно подтверждают квалификацию и <br />
                                    повышают профориентацию
                                </p>
                            </div>
                            <h2 className="main-new-title main-gbr-title pt-5">
                                РЕАГИРОВАНИЕ РОСГВАРДИЕЙ ЭТО:
                            </h2>
                            <div className="main-gbr-block">
                                <div className="main-gbr-block-image--wrapper">
                                    <div className="main-gbr-block-image main-gbr-block-image--2" />
                                </div>
                                <p className="main-gbr-block-text">
                                    Государственные гарантии <br /><br />
                                    Преимущества проезда <br />
                                    по дорогам общего пользования <br /><br />
                                    Федеральная сеть реагирования <br /><br />
                                    Право на арест
                                </p>
                            </div>
                            <h2 className="main-new-title main-gbr-title">
                                DELTA. КОГДА МГНОВЕНИЕ ИМЕЕТ ЗНАЧЕНИЕ.
                            </h2>
                            <div className="main-gbr-full-image my-5" />
                            <div className="main-gbr-info">
                                <strong>Поможем разобраться и определиться:</strong> <br />
                                <a href="populyarno-ob-ohrane/index.html">Как выбрать охрану?</a>
                            </div>
                        </section>
                        <section className="expert-block--wrapper">
                            <div className="container">
                                <div className="expert-block">
                                    <div className="expert-block--col">
                                        <h5 className="modal-title text-white">Эксперт на связи</h5>
                                        <h6 className="modal-subtitle text-white mb-5">
                                            Подберет решение и ответит на все вопросы
                                        </h6>
                                        <form action="/universal_form/lead_form/" className="expert-form" >
                                            <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                                            <div className="form-group">
                                                <input autoComplete="off" className="form-control" name="name" placeholder="Имя" type="text" />
                                            </div>
                                            <div className="form-group">
                                                <input autoComplete="off" className="form-control" name="phone" placeholder="Телефон" type="tel" />
                                            </div>
                                            <input className="btn btn-white w-100 mt-1"  type="submit" defaultValue="Заказать звонок" />
                                        </form>
                                        <small className="mt-2 text-center text-white">Нажимая "Отправить", вы принимаете
                                            <a className="text-nowrap text-white" href="media/documents/personal_data_agreement.pdf" target="_blank">Условия обработки персональных данных</a></small>
                                    </div>
                                    <div className="expert-block-man" />
                                </div>
                            </div>
                        </section>
                        <section className="mt-4 pt-5 container main-mobile-app">
                            <h2 className="main-mobile-app-title main-new-title">
                                СОВРЕМЕННОЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
                            </h2>
                            <div className="main-mobile-app-features">
                                <ul >
                                    <li className="main-mobile-app-features-item">
                                        Постановка и снятие с охраны еще не были такими удобными.
                                    </li>
                                    <li className="main-mobile-app-features-item">
                                        Настройте управление под себя.
                                    </li>
                                    <li className="main-mobile-app-features-item">
                                        Вызывайте помощь одним касанием.
                                    </li>
                                    <li className="main-mobile-app-features-item">
                                        Смотрите видео онлайн или в записи.
                                    </li>
                                    <li className="main-mobile-app-features-item">
                                        Пополняйте счет удобно. Поддерживаем СБП.
                                    </li>
                                    <li className="main-mobile-app-features-item">
                                        Быстрый доступ к чату с сотрудниками клиентского сервиса.
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <div className="main-full-image main-full-image--mobile-app" />
                        <section className="container main-review py-5 mt-4">
                            <h2 className="main-review-title main-review-title--long main-new-title mb-0">
                                СИСТЕМЫ БЕЗОПАСНОСТИ DELTA - <br />
                                ЭТО СОВРЕМЕННО, РАЗУМНО, УДОБНО И ПОДХОДИТ КАЖДОМУ.
                            </h2>
                        </section>
                        <section className="main-review">
                            <div className="container">
                                <p className="main-review-text mb-5">
                                    <strong>Знаем о своих клиентах все!</strong> <br />
                                    Разработали более 200 решений под задачи владельцев бизнеса,
                                    работающих родителей, любителей домашних животных, геймеров, блогеров,
                                    жителей загородных домов и многих других.
                                </p>
                                <div className="main-full-image main-full-image--review" />
                            </div>
                        </section>
                        <section className="main-best-product pt-5">
                            <div className="section-cottage">
                                <div className="mbp-item">
                                    <div className="mbp-item-badge">Хит продаж</div>
                                    <div className="mbp-item--wrapper mbp-item--wrapper--image">
                                        <div className="mbp-item-image" style={{backgroundImage: 'url("media/security/hit-prodazh-ajax-fire-protect-vertikal-3-4.png")'}} />
                                    </div>
                                    <div className="mbp-item--wrapper mbp-item--wrapper--text">
                                        <div className="mbp-item-text">
                                            <div className="mbp-item-text-title">
                                                Датчик дыма Ajax fire protect
                                            </div>
                                            <div className="mbp-item-text-description">
                                                Автономный датчик обнаружения и оповещения о задымлении и
                                                возгорании. Анализирует содержание примесей в воздухе и
                                                температуру в помещении. В случае обнаружения угрозы оповестит
                                                громкой сиреной и уведомлением в приложение. Управление из
                                                приложения
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mbp-item--wrapper mbp-item--wrapper--order">
                                        <div className="mbp-item-order">
                                            <div className="mbp-item-order-price">
                                                <div className="mbp-item-order-price-title">Подключение</div>
                                                <div className="mbp-item-order-price-value mbp-item-order-price-value--old">
                                                    5&nbsp;000 ₽
                                                </div>
                                                <div className="mbp-item-order-price-value">3&nbsp;350 ₽</div>
                                            </div>
                                            <button className="mbp-item-order-price-btn btn btn-primary" data-form-type="call" data-target="#leadForm" data-toggle="modal">
                                                Заказать
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-partners">
                            <div className="text-wrapper">
                                <div className="brands-title">Наши партнёры:</div>
                            </div>
                            <div className="brands-wrapper">
                                <div className="brands-container" />
                            </div>
                        </section>
                        <section className="container main-feedback pt-5">
                            <h2 className="main-feedback-title main-new-title">
                                ВСЕГДА ВАЖНО МНЕНИЕ КЛИЕНТОВ. <br />
                                НАПИШИТЕ НАМ:
                            </h2>
                            <div className="main-feedback-info">
                                <div className="main-feedback-info-block">
                                    <div className="main-feedback-info-block-title">Есть идея?</div>
                                    <a href="mailto:attention@hello.delta.ru">Напиши нам на почту</a>
                                    <a href="https://t.me/+79260017544">Telegram</a>
                                    <a href="https://wa.me/79260017544">WhatsApp</a>
                                </div>
                                <div className="main-feedback-info-block">
                                    <div className="main-feedback-info-block-title">Хочу пожаловаться</div>
                                    <a href="mailto:cc@delta.ru">Решите мою проблему</a>
                                </div>
                            </div>
                        </section>
                        <div className="seo-text">
                            <div className="container">
                                <p />
                                <h1>
                  <span style={{color: '#365f91'}}>Компания DELTA: надежность охранных систем для недвижимости и
                    транспорта</span>
                                </h1>
                                <p>
                                    DELTA предлагает передовые охранные системы от различных бытовых
                                    угроз. Хотите защитить себя, свое жилье, транспорт и имущество от
                                    злоумышленников и чрезвычайных ситуаций? Минимизировать возможные
                                    риски, с которыми связана деятельность предприятия? У нас есть
                                    подходящее решение.
                                </p>
                                <h2><span style={{color: '#4f81bd'}}>Как работаем</span></h2>
                                <p>
                                    Каждый наш сотрудник осознает важность своей работы и
                                    профессионального выполнения возложенных на него обязанностей, ведь от
                                    этого напрямую зависит эффективность защиты доверившегося нам клиента.
                                </p>
                                <p>
                                    Большое внимание уделяется профессиональной и физической подготовке
                                    охранников, привлекаемых для защиты недвижимости и транспорта,
                                    используем полностью исправный служебный транспорт, устанавливаем
                                    современные виды оборудования.
                                </p>
                                <h2><span style={{color: '#4f81bd'}}>Что предлагаем</span></h2>
                                <p>Обеспечиваем:</p>
                                <ul>
                                    <li>защиту квартир и коттеджей;</li>
                                    <li>мониторинг и охрану автотраснпорта;</li>
                                    <li>организацию охраны бизнеса, автомобилей;</li>
                                    <li>установку противопожарной защиты;</li>
                                    <li>продажу и установку средств видеонаблюдения;</li>
                                    <li>монтаж и настройку СКУД;</li>
                                    <li>продажу, установку и настройку датчиков;</li>
                                    <li>разработку и реализацию комплексных решений.</li>
                                </ul>
                                <p>
                                    Всего 200+ решений для безопасности недвижимости и транспортных
                                    средств.
                                </p>
                                <h3><span style={{color: '#4f81bd'}}>Защита квартир и коттеджей</span></h3>
                                <p>
                                    Надежная защита квартир, а также коттеджей и гаражей обеспечивается
                                    путем установки инновационных систем безопасности. Эксперты
                                    круглосуточно находятся на связи и готовы ответить на любой вопрос,
                                    касающийся эксплуатации устройств.
                                </p>
                                <p>
                                    В случае несанкционированного проникновения система сразу же
                                    отправляет на пульт сигнал — на его прохождение требуется меньше одной
                                    секунды. ГБР незамедлительно выезжает на место, прибывая туда за
                                    считаные минуты благодаря широкой сети реагирования.
                                </p>
                                <h3><span style={{color: '#4f81bd'}}>Организация охраны бизнеса</span></h3>
                                <p>
                                    Осуществляется по сходному принципу, только прибавляются
                                    дополнительные устройства. Работаем как с крупными фирмами, так и с
                                    малым бизнесом.
                                </p>
                                <p>
                                    Предварительно эксперты DELTA проводят аудит здания и прилегающей
                                    территории для выявления слабых сторон. После этого подготавливается
                                    проект, который утверждается заказчиком. Мы готовы предложить ряд
                                    дополнительных услуг по комплексной охране, а также увеличить размер
                                    материальной ответственности.
                                </p>
                                <h3><span style={{color: '#4f81bd'}}>Защита автомобилей</span></h3>
                                <p>
                                    Это предложение будет особенно полезно и выгодно для владельцев
                                    коммерческого транспорта или автомобильных парков, но воспользоваться
                                    им могут и частные лица. DELTA предлагает установку комплексов, в
                                    состав которых входят:
                                </p>
                                <ul>
                                    <li>модуль GSM;</li>
                                    <li>модуль GPS, «ГЛОНАСС»;</li>
                                    <li>индивидуальный комплект датчиков.</li>
                                </ul>
                                <p>
                                    Комплектация подбирается с учетом задач клиента. От нее зависит общая
                                    стоимость реализации проекта.<br />
                                    <br />
                                    На ваш смартфон устанавливается приложение, с помощью которого можно
                                    эффективно контролировать как одну машину, так и весь парк. Сигнал
                                    тревоги поступает одновременно на телефон клиента и на пульт охраны,
                                    после чего вооруженная охрана ЧОП&nbsp;быстро прибывает на место.
                                </p>
                                <p>
                                    Установка охранного комплекса на новый автомобиль не приведет к его
                                    снятию с гарантии. Клиентам предоставляется скидка на каско.
                                </p>
                                <h3>
                                    <span style={{color: '#4f81bd'}}>Установка пожарной сигнализации</span>
                                </h3>
                                <p>
                                    Возгорание, которое не было замечено вовремя, почти всегда приводит к
                                    тяжелым последствиям: уничтожаются материальные ценности, порой гибнут
                                    люди. Охранно-пожарная сигнализация нового поколения позволяет
                                    своевременно заметить появление огня, локализовать и потушить его,
                                    сведя ущерб к минимуму.
                                </p>
                                <p>Чем будут полезны наши эксперты:</p>
                                <ul>
                                    <li>окажут помощь в разработке конфигурации;</li>
                                    <li>смонтируют и настроят комплекс;</li>
                                    <li>выполнят подключение и проверят работоспособность;</li>
                                    <li>
                                        в ходе эксплуатации по необходимости проведут техническое
                                        обслуживание и ремонт.
                                    </li>
                                </ul>
                                <p>
                                    Обычно устанавливается комбинированная противопожарная система,
                                    которая включает в себя тревожную кнопку для подачи сигнала на
                                    охранный пульт вручную и автоматические извещатели.
                                </p>
                                <h3><span style={{color: '#4f81bd'}}>Видеонаблюдение</span></h3>
                                <p>
                                    Хотите всегда быть в курсе того, что происходит дома или на работе в
                                    ваше отсутствие? Установите средства видеофиксации. Мы выпускаем и
                                    продаем по приятным ценам IP-камеры, которые в зависимости от типа
                                    устройства подходят для установки на горизонтальную поверхность внутри
                                    помещения, на потолок или на наружную стену здания.
                                </p>
                                <p>
                                    Любое из устройств можно установить самостоятельно, так как все
                                    необходимое входит в комплект. Для подключения нужен хороший интернет,
                                    а также электросеть на 220 В. Можно доверить эту работу и экспертам
                                    DELTA.
                                </p>
                                <p>
                                    Изображение с камер передается на мобильное устройство через
                                    приложение, которое может быть дополнено виртуальной тревожной
                                    кнопкой. В случае происшествия вы сможете вызвать экипаж на объект
                                    прямо со смартфона.
                                </p>
                                <h3><span style={{color: '#4f81bd'}}>Управление доступом</span></h3>
                                <p>
                                    Внедрять СКУД старается большинство компаний. Управление доступом
                                    позволяет предотвратить проникновение посторонних людей, а также
                                    упорядочить работу сотрудников учреждения.
                                </p>
                                <p>СКУД может выполнять разные функции:</p>
                                <ul>
                                    <li>допуск в здание и отдельные помещения;</li>
                                    <li>идентификация личности;</li>
                                    <li>измерение температуры, детекция маски;</li>
                                    <li>учет рабочего времени;</li>
                                    <li>контроль работы сотрудников.</li>
                                </ul>
                                <p>
                                    Эксперты DELTA выполнят установку, настройку и проверку СКУД, а также
                                    обучат ваших сотрудников работе с ней.
                                </p>
                                <h3><span style={{color: '#4f81bd'}}>Датчики</span></h3>
                                <p>В нашем каталоге вы найдете датчики:</p>
                                <ul>
                                    <li>утечки газа;</li>
                                    <li>протечки воды;</li>
                                    <li>открытия двери;</li>
                                    <li>движения;</li>
                                    <li>дыма;</li>
                                    <li>температуры.</li>
                                </ul>
                                <p>
                                    Кроме того, здесь представлены световой извещатель и беспроводная
                                    внутренняя сирена.
                                </p>
                                <h2>
                                    <span style={{color: '#4f81bd'}}>Почему стоит сотрудничать с DELTA</span>
                                </h2>
                                <p>
                                    DELTA является федеральным провайдером услуг и продуктов безопасности.
                                    Обеспечивает безопасность на&nbsp;более 250&nbsp;000 объектах&nbsp;в 30 крупных
                                    городах РФ, в том числе в Москве. Эксперты DELTA готовы разработать и
                                    реализовать защиту под любую задачу. Используем лучшим образом
                                    зарекомендовавшее себя беспроводное оборудование с привлекательным
                                    дизайном, которое легко устанавливается и гармонично вписывается в
                                    любой интерьер.
                                </p>
                                <p>Мы гарантируем:</p>
                                <ul>
                                    <li>
                                        профессионализм, а также отличную огневую и физическую подготовку
                                        членов экипажей ГБР;
                                    </li>
                                    <li>высокое качество используемого оборудования;</li>
                                    <li>
                                        наличие различных средств связи для обеспечения надежной защиты;
                                    </li>
                                    <li>индивидуальную разработку плана охраны для каждого случая;</li>
                                    <li>мгновенное реагирование на поступившие сигналы тревоги.</li>
                                </ul>
                                <p>
                                    Условия сотрудничества, а также стоимость оказания услуг оговариваются
                                    предварительно и вносятся в договор. Все охранники, обеспечивающие
                                    защиту, лицензированы и имеют высшую категорию. Каждый год компания
                                    занимает ведущие места в рейтинге охранных агентств, получив за 10 лет
                                    большое количество положительных отзывов от благодарных клиентов.
                                </p>
                                <p>
                                    Телефоны и электронные адреса наших отделов и служб указаны в разделе
                                    <a href="contacts/index.html" style={{color: 'blue', textDecoration: 'underline'}}>«Контакты»</a>.
                                </p>
                                <p>&nbsp;</p>
                                <p />
                            </div>
                        </div>
                    </main>
                    <footer className="site-footer mt-5">
                        <div className="footer-wrapper">
                            <div className="top-block-wrapper">
                                <div className="link-container">
                                    <div className="link-column">
                                        <ul className="link-wrapper">
                                            <li className="link-item">
                                                <a className="link menu-link" href="ohrana-kvartir/index.html">Охрана квартир</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="ohrana-kottedjej/index.html">Охрана коттеджей</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="ohrana-biznesa/index.html">Охрана бизнеса</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="ohrana-auto/index.html">Охрана автомобиля</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="pozharnaya-signalizaciya/index.html">Пожарная сигнализация</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="smartvideo/index.html">Видеонаблюдение</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="skud/index.html">Управление доступом</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="datchiki/index.html">Датчики</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="link-column">
                                        <ul className="link-wrapper">
                                            <li className="link-item">
                                                <span className="link menu-link" style={{cursor: 'default'}}>О компании</span>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="stock/index.html">Акции</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="career/index.html">Вакансии</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="about/news/index.html">Новости</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="contacts/index.html">Контакты</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="https://business.delta.ru/">Корпоративным клиентам</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="partnership/index.html">Партнерам</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="blog/index.html">Блог</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="link-column">
                                        <ul className="link-wrapper">
                                            <li className="link-item">
                                                <a className="link menu-link" href="faq/index.html">Помощь</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="faq/questions/index.html#help_instructions">Инструкции</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="faq/documents/index.html#help_documents">Документы</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="faq/documents/index.html#help_methods_of_payment">Способы оплаты</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="faq/questions/index.html#help_system">Как работает система</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="mobilnoe-prilojenie/index.html">Мобильное приложение</a>
                                            </li>
                                            <li className="link-item">
                                                <a className="link menu-link" href="populyarno-ob-ohrane/index.html">Популярно об охране</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contacts-block">
                                        <div className="phone-email">
                                            <span className="call_phone_1"><a href="tel:+74957774147">+7 (495) 777-41-47</a></span><button className="btn btn-primary btn-rounded footer__button uni-form-trigger mr-4" data-target="#modal-write-us" data-toggle="modal">
                                            Написать нам
                                        </button>
                                        </div>
                                        <div className="social-links">
                                            <a className="link social vk" href="https://vk.com/deltasecurity" target="_blank" />
                                            <a className="link social whatsapp" href="https://wa.me/79260017544" target="_blank" />
                                            <a className="link social telegram" href="https://t.me/+79260017544" target="_blank" />
                                        </div>
                                        <div className="app-links">
                                            <a className="link apple" data-ga-category="btn_ios" data-ga-type="footer" href="https://itunes.apple.com/ru/app/delta-licnyj-kabinet/id708986747?mt=8" rel="nofollow" target="_blank" />
                                            <a className="link google" data-ga-category="btn_android" data-ga-type="footer" href="https://play.google.com/store/apps/details?id=ru.albertsoft.acabinet" rel="nofollow" target="_blank" />
                                            <a className="link huawei" data-ga-category="btn_huawei" data-ga-type="footer" href="https://appgallery.huawei.com/#/app/C102892775" rel="nofollow" target="_blank" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-block-wrapper">
                                <div className="text-container footnote-text mb-4">
                                    * По отзывам клиентов компании.
                                </div>
                                <div className="text-container ab-note-text mb-4">
                                    * Согласно рейтингам агентства Markswebb за 2019-2021 г.г. по
                                    направлениям «Лучшие цифровые офисы в мобильном банке на IOS» и
                                    «Лучшие цифровые офисы в мобильном банке на Android» АО «АЛЬФА-БАНК»,
                                    лицензия ЦБ РФ №1326 от 16.01.2015 г.
                                </div>
                                <div className="text-container">
                                    <div className="text">© 2022 Дельта</div>
                                    <div className="text">
                                        Применяемые на данном интернет-сайте названия: Компания Дельта,
                                        Дельта, Федеральная компания Дельта — это предприятия, работающие
                                        под брендом и оказывающие услуги по организации охраны недвижимости,
                                        имущества, транспортных средств, и имеющие все необходимые лицензии
                                        и разрешения. Данный интернет-сайт носит исключительно
                                        справочно-информационный, аналитический, обзорный характер и ни при
                                        каких условиях не является публичной офертой, определяемой
                                        положениями Статьи 437 Гражданского кодекса РФ, и не имеет в
                                        качестве основной цели продвижение услуг на рынке.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <div className="page-up-btn" id="page-up-btn">
                    <div className="page-up-btn-image" />
                </div>
                <div aria-hidden="true" className="modal fade" id="popup-new-app" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-content--width">
                            <div className="modal-header">
                                <h5 className="modal-title">Новое мобильное приложение уже доступно!</h5>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <div className="popup-block">
                                    <div className="popup-block-info">
                                        <div className="app-links">
                                            <p>
                                                - управляйте безопасностью охраняемого объекта удаленно; <br />
                                                - просматривайте и пополняйте баланс; <br />
                                                - заказывайте дополнительное оборудование и подключайте новые
                                                объекты к охране; <br />
                                                - связывайтесь с поддержкой по любым вопросам 24/7.
                                            </p>
                                            <a className="link apple" data-ga-category="btn_ios" data-ga-type="footer" href="https://itunes.apple.com/ru/app/delta-licnyj-kabinet/id708986747?mt=8" rel="nofollow" target="_blank" />
                                            <a className="link google" data-ga-category="btn_android" data-ga-type="footer" href="https://play.google.com/store/apps/details?id=ru.albertsoft.acabinet" rel="nofollow" target="_blank" />
                                            <a className="link huawei" data-ga-category="btn_huawei" data-ga-type="footer" href="https://appgallery.huawei.com/#/app/C102892775" rel="nofollow" target="_blank" />
                                        </div>
                                    </div>
                                    <div className="popup-block-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal fade" id="leadForm" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Эксперт на связи</h5>
                                <h6 className="modal-subtitle">
                                    Подберет решение и ответит на все вопросы
                                </h6>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form action="/universal_form/lead_form/" className="lead-form">
                                    <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_name" maxLength={100} name="name" placeholder="Ваше имя" required type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_phone" maxLength={20} name="phone" placeholder="Телефон" required type="tel" />
                                    </div>
                                    <input name="duration" type="hidden" defaultValue={0} /><input className="btn btn-primary btn-secondary w-100 mt-1"  type="submit" defaultValue="Заказать" />
                                </form>
                                <small className="d-block w-100 text-center mt-3 js-conditions">Нажимая "Заказать звонок", вы принимаете
                                    <a className="text-nowrap" href="media/documents/personal_data_agreement.pdf" target="_blank">Условия обработки персональных данных</a></small>
                            </div>
                            <div className="modal-image" />
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal fade" id="rememberNumObForm" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-content--width">
                            <div className="modal-header">
                                <h5 className="modal-title">Кажется вам требуется помощь</h5>
                                <h6 className="modal-subtitle">Отправьте заявку и мы свяжемся с вами</h6>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form action="/universal_form/lead_form/" className="nkp-form">
                                    <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_name" maxLength={100} name="name" placeholder="Ваше имя" required type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_phone" maxLength={20} name="phone" placeholder="Телефон" required type="tel" />
                                    </div>
                                    <input name="remember-num-ob-form" type="hidden" defaultValue={1} /><input name="duration" type="hidden" defaultValue={0} /><input className="btn btn-primary btn-secondary w-100 mt-1"  type="submit" defaultValue="Отправить" />
                                </form>
                                <small className="d-block w-100 text-center mt-3 js-conditions">Нажимая "Отправить", вы принимаете
                                    <a className="text-nowrap" href="media/documents/personal_data_agreement.pdf" target="_blank">Условия обработки персональных данных</a></small>
                            </div>
                            <div className="modal-image modal-image--request" />
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal fade" id="chooseOhranaProductForm" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-content--width">
                            <div className="modal-header">
                                <h5 className="modal-title">Оставьте заявку</h5>
                                <h6 className="modal-subtitle">
                                    Вы в одном шаге от территории безопасности. Осталось обсудить
                                    финальные детали.
                                </h6>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form action="/universal_form/product_form/" className="choose-ohrana-product-form">
                                    <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_name" maxLength={100} name="name" placeholder="Ваше имя" required type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_phone" maxLength={20} name="phone" placeholder="Телефон" required type="tel" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_promocode" maxLength={100} name="promocode" placeholder="Промокод" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-kit-name" data-default-value id="id_kit_name" name="kit_name" type="hidden"  />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-connection-cost" id="id_connection_cost" name="connection_cost" type="hidden" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-subscription-cost" id="id_subscription_cost" name="subscription_cost" type="hidden" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-options" id="id_products" name="products" type="hidden"  />
                                    </div>
                                    <div className="form-group">
                                        <ul className="is-client" id="id_ohrana_type">
                                            <li>
                                                <label htmlFor="id_ohrana_type_ovo"><input autoComplete="off" className="is-client" id="id_ohrana_type_ovo" name="ohrana_type" type="radio" defaultValue="ovo" />реагирование росгвардией</label>
                                            </li>
                                            <li>
                                                <label htmlFor="id_ohrana_type_delta"><input autoComplete="off"  className="is-client" id="id_ohrana_type_delta" name="ohrana_type" type="radio" defaultValue="delta" />реагирование DELTA</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-subscription-cost" name="subscription_cost_ovo" type="hidden" defaultValue={0} />
                                    </div>
                                    <input name="duration" type="hidden" defaultValue={0} /><input className="btn btn-primary btn-secondary w-100 mt-1"  type="submit" defaultValue="Заказать" />
                                </form>
                                <small className="d-block w-100 text-center mt-3 js-conditions">Нажимая "Заказать звонок", вы принимаете
                                    <a className="text-nowrap" href="media/documents/personal_data_agreement.pdf" target="_blank">Условия обработки персональных данных</a></small>
                            </div>
                            <div className="modal-image modal-image--request" />
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal fade" id="newProductForm" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-content--width">
                            <div className="modal-header">
                                <h5 className="modal-title">Оставьте заявку</h5>
                                <h6 className="modal-subtitle">
                                    Вы в одном шаге от территории безопасности. Осталось обсудить
                                    финальные детали.
                                </h6>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form action="/universal_form/product_form/" className="new-product-form">
                                    <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_name" maxLength={100} name="name" placeholder="Ваше имя" required type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_phone" maxLength={20} name="phone" placeholder="Телефон" required type="tel" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_promocode" maxLength={100} name="promocode" placeholder="Промокод" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-kit-name" data-default-value id="id_kit_name" name="kit_name" type="hidden"  />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-connection-cost" id="id_connection_cost" name="connection_cost" type="hidden" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-subscription-cost" id="id_subscription_cost" name="subscription_cost" type="hidden" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-options" id="id_products" name="products" type="hidden"  />
                                    </div>
                                    <input name="duration" type="hidden" defaultValue={0} /><input className="btn btn-primary btn-secondary w-100 mt-1"  type="submit" defaultValue="Заказать" />
                                </form>
                                <small className="d-block w-100 text-center mt-3 js-conditions">Нажимая "Заказать звонок", вы принимаете
                                    <a className="text-nowrap" href="media/documents/personal_data_agreement.pdf" target="_blank">Условия обработки персональных данных</a></small>
                            </div>
                            <div className="modal-image modal-image--request" />
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal fade" id="vacancyForm" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-content--width">
                            <div className="modal-header">
                                <h5 className="modal-title">Оставить резюме</h5>
                                <h6 className="modal-subtitle">
                                    Оставьте заявку и мы вам обязательно перезвоним!
                                </h6>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form action="/universal_form/vacancy_form/" className="vacancy-form" id="vacancy-form">
                                    <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" /><input name="duration" type="hidden" defaultValue={0} /><input className="btn btn-primary btn-secondary w-100 mt-1"  type="submit" defaultValue="Отправить" />
                                </form>
                                <small className="d-block w-100 text-center mt-3 js-conditions">Нажимая "Отправить", вы принимаете
                                    <a className="text-nowrap" href="media/documents/personal_data_agreement.pdf" target="_blank">Условия обработки персональных данных</a></small>
                            </div>
                            <div className="modal-image" />
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal fade" id="productForm" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center">Заказать комплект</h5>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form action="/universal_form/product_form/" className="product-form">
                                    <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_name" maxLength={100} name="name" placeholder="Ваше имя" required type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_phone" maxLength={20} name="phone" placeholder="Телефон" required type="tel" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_promocode" maxLength={100} name="promocode" placeholder="Промокод" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-kit-name" data-default-value id="id_kit_name" name="kit_name" type="hidden"  />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-connection-cost" id="id_connection_cost" name="connection_cost" type="hidden" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-subscription-cost" id="id_subscription_cost" name="subscription_cost" type="hidden" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <input className="js-order-options" id="id_products" name="products" type="hidden"  />
                                    </div>
                                    <input name="duration" type="hidden" defaultValue={0} /><input className="btn btn-primary btn-secondary w-100 mt-1"  type="submit" defaultValue="Заказать" />
                                </form>
                                <small className="d-block w-100 text-center mt-3">Нажимая "Заказать", вы принимаете
                                    <a className="text-nowrap" href="media/documents/personal_data_agreement.pdf" target="_blank">Условия обработки персональных данных</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal modal-with-image fade" id="modal-write-us" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content modal-content--width">
                            <div className="modal-header">
                                <div className="modal-title">Написать нам</div>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form action="/universal_form/write_us_form/" data-unified-form id="WriteUsForm" method="POST">
                                    <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_name" maxLength={100} name="name" placeholder="Ваше имя" required type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control" id="id_phone" maxLength={20} minLength={18} name="phone" placeholder="Телефон" required type="tel" />
                                    </div>
                                    <div className="form-group">
                                        <textarea autoComplete="off" className="form-control" cols={40} id="id_message" name="message" placeholder="Введите текст сообщения" rows={3}  defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control num-object" id="id_object_number" maxLength={50} minLength={10} name="object_number" placeholder="Номер объекта" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input autoComplete="off" className="form-control num-contract" id="id_contract_number" maxLength={50} minLength={13} name="contract_number" placeholder="Номер договора" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <ul className="is-client" id="id_is_client">
                                            <li>
                                                <label htmlFor="id_is_client_0"><input autoComplete="off" className="is-client" id="id_is_client_0" name="is_client" placeholder="Являетесь клиентом" required type="radio" defaultValue="yes" />Да</label>
                                            </li>
                                            <li>
                                                <label htmlFor="id_is_client_1"><input autoComplete="off" className="is-client" id="id_is_client_1" name="is_client" placeholder="Являетесь клиентом" required type="radio" defaultValue="no" />Нет</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <input name="duration" type="hidden" defaultValue={0} />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary btn-block btn-secondary"  form="WriteUsForm" type="submit">
                                    Отправить</button><small className="mt-2 text-center">Нажимая "Отправить", вы принимаете
                                <a className="text-nowrap" href="media/documents/personal_data_agreement.pdf" target="_blank">Условия обработки персональных данных</a></small>
                            </div>
                            <div className="modal-with-image__img-wrap">
                                <img alt="" className="modal-with-image__img mb-5" data-src="/static/public-v2/images/redesign/snippets/box.dde042907a60.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal modal-payment fade" id="paymentModal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title">Пополнить счёт</div>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <form  className="agreement-number-form" id="agreement_number_form" method="post">
                                <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="form-control-container mb-2">
                                            <input autoComplete="off" className="form-control" id="agreement_number_input_sub" name="agreementNumberSub" placeholder="Введите номер договора" type="text" /><input className="hidden" disabled hidden id="agreement_number_input" name="agreementNumber" type="text" />
                                        </div>
                                        <span className="pseudo-link" data-target="#rememberNumObForm" data-toggle="modal" data-type-form="help" id="forgot_agreement_number_toggle">Не помню номер договора</span>
                                    </div>
                                    <div className="alert alert-danger text-center hidden" id="payment-modal-server-message" />
                                </div>
                                <div className="modal-footer">
                                    <input className="btn btn-primary btn-block" type="submit" defaultValue="Далее" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal modal-payment fade" id="paymentMethodsModal" role="dialog" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title">Способы оплаты</div>
                                <button className="close" data-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <div className="payment-methods">
                                    <div className="payment-methods__item" data-ga-category="btn_payment" data-ga-type="sbp" data-payment-logo="/static/public-v2/images/icon_sbp.75d28db0b95e.png" data-payment-type="cyberplat" data-payment-type-toggle="sbp" data-target="#paymentSummModal" data-toggle="modal">
                                        <div className="payment-methods__item-icon payment-methods__item-icon--sbp" />
                                        <div className="payment-methods__item-title link">
                                            Система быстрых платежей
                                        </div>
                                    </div>
                                    <div className="payment-open--mobile" id="payment-open">
                                        <div aria-controls="payment-open--click" aria-expanded="true" className="payment-open--mobile-header collapsed" data-parent="#payment-open" data-toggle="collapse" >
                                            Другие способы оплаты
                                        </div>
                                        <div className="collapse" id="payment-open--click">
                                            <div className="payment-methods__item" data-ga-category="btn_payment" data-ga-type="card" data-payment-logo="/static/public-v2/images/icon_credit_card.47e18c744de1.png" data-payment-type="cyberplat" data-payment-type-toggle="cyberplat" data-target="#paymentSummModal" data-toggle="modal">
                                                <div className="payment-methods__item-icon payment-methods__item-icon--credit-card" />
                                                <div className="payment-methods__item-title link">
                                                    банковской картой <br />
                                                    Visa/MasterCard/МИР/JCB <br />
                                                    ApplePay/AndroidPay
                                                </div>
                                            </div>
                                            <a className="payment-methods__item" data-ga-category="btn_payment" data-ga-type="receipt" href="https://lk.delta.ru/">
                                                <div className="payment-methods__item-icon payment-methods__item-icon--receipt" />
                                                <div className="payment-methods__item-title link">
                                                    Квитанцией в банке <br />
                                                    или безналичным расчётом
                                                </div>
                                            </a>
                                            <a className="payment-methods__item payment-methods__item--other" data-ga-category="btn_payment" data-ga-type="anyway" href="faq/documents/index.html#help_methods_of_payment">
                                                <div className="payment-methods__item-title link">
                                                    Справка по способам оплаты
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="modal modal-payment-summ fade" id="paymentSummModal" role="dialog" style={{position: 'absolute'}} tabIndex={-1}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header modal-header-payment pb-1">
                                <button className="close" data-dismiss="modal" type="button" />
                                <div className="modal-payment-summ__header">
                                    <div className="modal-title">Сумма платежа</div>
                                    <div className="modal-payment-summ__payment-logo" />
                                </div>
                            </div>
                            <div className="modal-body modal-body-payment">
                                <form action="https://lk.delta.ru/payments/" className="payment-form" data-form="cyberplat" id="payment_cyberplat_form" method="POST">
                                    <input name="paymentdetails" type="hidden" /><input name="number" type="hidden" /><input name="orderid" type="hidden" /><input name="return_to" type="hidden" defaultValue={0} />
                                    <div className="form-group">
                                        <div className="form-control-summ-container">
                                            <input autoComplete="off" className="form-control-summ-container__input form-control" name="amount" /><span className="form-control-summ-container__currency">p</span>
                                        </div>
                                    </div>
                                    <div className="form-group summ-buttons-wrapper">
                                        <div className="fast-select-summ-container">
                                            <div className="fast-select-summ-container-item">
                                                <div className="summ">
                                                    <span className="summ-number" /><span className="rub">p</span>
                                                </div>
                                                <div className="description">Только задолженность</div>
                                            </div>
                                            <div className="fast-select-summ-container-item default">
                                                <div className="summ">
                                                    <span className="summ-number" /><span className="rub">p</span>
                                                </div>
                                                <div className="description">Задолженность + аванс</div>
                                            </div>
                                            <div className="fast-select-summ-container-item">
                                                <div className="summ">
                                                    <span className="summ-number" /><span className="rub">p</span>
                                                </div>
                                                <div className="description">АКЦИЯ 6+0,5 *</div>
                                            </div>
                                            <div className="fast-select-summ-container-item">
                                                <div className="summ">
                                                    <span className="summ-number" /><span className="rub">p</span>
                                                </div>
                                                <div className="description">АКЦИЯ 12+1 *</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sbp-banks-title">
                                        Выберите приложение банка, которое установлено на вашем устройстве:
                                    </div>
                                    <div className="form-group sbp-banks" id="sbp-banks">
                                        <div id="sbp-banks-list">
                                            <div className="form-control-container">
                                                <input autoComplete="off" className="search-banks form-control" id="search-banks" name="search_banks" placeholder="Введите название банка для поиска" required type="text" />
                                            </div>
                                            <input autoComplete="off" className="js-search-banks" id="js-search-banks" name="search_banks_id" required type="hidden" />
                                            <div className="sbp-banks-list--wrapper">
                                                <template id="sbp-banks-items" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group js-autopay-toggle">
                                        <label className="custom-control custom-checkbox" data-ga-autopay="autopay"><input className="custom-control-input" data-ga-autopay="autopay" name="enableAutopay" type="checkbox" /><span className="custom-control-indicator" />
                                            <span className="custom-control-description">Автоплатеж. Я согласен с
                        <a href="faq/index.html#payments_autopayment" target="_blank">условиями</a></span></label>
                                    </div>
                                    <div className="form-group">
                                        <input className="btn btn-primary btn-block btn-secondary mt-0" disabled type="submit" defaultValue="Далее" />
                                    </div>
                                    <div className="form-group summ-description">
                                        <div className="summ-description-wrapper">
                                            <span className="summ-description-star">*</span>
                                            <span>Для участия в
                        <a href="stock/195/index.html" target="_blank">акции «12+1» или «6+0,5»</a>
                        необходимо направить подтверждение факта оплаты на
                        <a href="mailto:cc@delta.ru">cc@delta.ru</a></span>
                                    </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-payment-summ__back" />
                </div>
            </div>
    </div>
        <div aria-hidden="true" className="modal modal-with-image fade" id="modal-better-conditions" role="dialog" tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close" data-dismiss="modal" type="button" />
                        <div className="modal-title">Предложим лучшие условия</div>
                        <div className="modal-text" />
                    </div>
                    <div className="modal-body">
                        <form action="/unified_form/" data-unified-form id="BetterConditionsForm" method="POST">
                            <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" /><input name="duration" type="hidden" /><input name="type" type="hidden" defaultValue="other_form" />
                            <div className="form-group">
                                <label htmlFor="fullName">Ваше полное имя</label><input className="form-control" name="fullName" placeholder="ФИО" type="text" />
                            </div>
                            <input className="form-control" name="feedbackPhone2" style={{display: 'none'}} type="text" />
                            <div className="form-group">
                                <label htmlFor="phone">Номер телефона</label><input className="form-control" name="phone" placeholder="+7 ___ ___-__-__" type="text" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary btn-block btn-secondary" form="BetterConditionsForm" type="submit">
                            Узнать условия
                        </button>
                    </div>
                    <div className="modal-with-image__img-wrap">
                        <img alt="" className="modal-with-image__img" data-src="/static/public-v2/images/redesign/snippets/support-woman.bd83931990f5.png" />
                    </div>
                </div>
            </div>
        </div>
        <div aria-hidden="true" className="modal modal-with-image modal-note fade" id="modal-view-details" role="dialog" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content modal-content--width">
                    <div className="modal-header">
                        <div className="modal-title">Посмотреть детали</div>
                        <div className="modal-text">
                            Состав комплекта и его стоимость можно <br />посмотреть в корзине
                        </div>
                        <button className="close" data-dismiss="modal" type="button" />
                    </div>
                    <div className="modal-with-image__img-wrap">
                        <img alt="" className="modal-with-image__img" data-src="/static/public-v2/images/redesign/snippets/genius-man.4fb31bce4d2e.png" />
                    </div>
                </div>
            </div>
        </div>
        <div aria-hidden="true" className="modal modal-with-image fade" id="modal-best-offer" role="dialog" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <form action="/unified_form/" autoComplete="off" data-unified-form method="POST">
                        <input name="duration" type="hidden" /><input name="type" type="hidden" defaultValue="other_form" />
                        <div className="modal-header">
                            <button className="close" data-dismiss="modal" type="button" />
                            <div className="modal-title">Предложим лучшие <br />условия</div>
                        </div>
                        <div className="modal-body">
                            <input name="csrfmiddlewaretoken" type="hidden" defaultValue="sx9jYZoyLOPayteWjb3MmANEm9MtjgASCxGb26OB0rICBrYbvvw2vZv75jBXSSIA" />
                            <div className="form-group">
                                <label htmlFor="fullName">Ваше имя</label><input className="form-control" name="fullName" type="text" />
                            </div>
                            <input className="form-control" name="feedbackPhone2" style={{display: 'none'}} type="text" />
                            <div className="form-group">
                                <label htmlFor="phone">Телефон</label><input className="form-control" name="phone" placeholder="+7 ___ ___-__-__" type="text" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary btn-block" type="button">
                                Обсудить
                            </button>
                        </div>
                    </form>
                    <div className="modal-with-image__img-wrap">
                        <img alt="" className="modal-with-image__img" data-src="/static/public-v2/images/redesign/snippets/support-woman.bd83931990f5.png" />
                    </div>
                </div>
            </div>
        </div>
        <div aria-hidden="true" className="modal modal-note fade" id="modal-form-submitted" role="dialog" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content modal-form-submitted">
                    <div className="modal-header">
                        <div className="modal-title">Сообщение успешно <br />отправлено</div>
                        <div className="modal-text">Эксперт свяжется с Вами в ближайшее время</div>
                    </div>
                    <div className="modal-body">
                        <button className="btn btn-primary btn-long text-uppercase" data-dismiss="modal" type="button">
                            Ок
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="cookies-message cookies-message--hidden">
            <div className="cookies-message_inner">
                <div className="cookies-message__text">
                    <b>Этот сайт использует файлы cookie</b> <br />
                    На этом сайте используются данные об IP-адресе, местоположении
                    пользователей, файлы cookie, в том числе третьих лиц, для функционирования
                    сайта, а также персонализации предложений. Закрывая данный баннер,
                    прокручивая данную страницу вниз или нажимая на любой элемент, вы
                    соглашаетесь на использование файлов cookie. Вы можете отказаться от
                    использования cookies, настроив необходимые параметры в своем браузере.
                </div>
                <div className="cookies-message__btn">Принято</div>
            </div>
        </div>
    </div>
);
}

export default HomePage