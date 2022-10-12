import React, { useEffect } from "react";

import classes from "./ProfilePage.module.scss";

import profile from "../../media/profile.jpg";
import { HistoryCard } from "../../components";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../routes/path";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getHistory } from "../../store/slices/userSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ItemType } from "../../types/type";



const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const { history } = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(getHistory(user.id))
  }, []);

  console.log('history', history)
  const plan = true;
  return (
    <div className={classes.profile}>
      <div className={`${classes.profileInner} ${classes.container}`}>
        <section className={classes.profileHeader}>
          <div className={classes.profilePageInfo}>
            <div className={classes.profileImage}>
              <img src={profile} alt="profile-image" />
            </div>
            <div className={classes.profileText}>
              <h4 className={classes.profileUserInfo}>
                <span>Имя: Jhon</span>
                <span>Фамилия: Jamson</span>
              </h4>
              <h4 className={classes.profileContactInfo}>
                <span>Номер телефона: +996777897746</span>
                <span>Email: jhon@gmail.com</span>
              </h4>
              {plan ? (
                <h5 className={classes.currentPlan}>
                  Тариф: &nbsp;<span>Стандартный</span>
                </h5>
              ) : (
                <h5 className={classes.nonePlan}>
                  Нет подписки. <Link to={HOME_PAGE}>Оформить!</Link>
                </h5>
              )}
            </div>
          </div>
          <div className={classes.profileEdit}>
            <button>Редактировать</button>
          </div>
        </section>

        <section className={classes.historySection}>
          <div className={classes.historyBlock}>
            {history?.data.length ?

              history.data.map((item: ItemType) => {
                <HistoryCard item={item}/>
              })
              :
              <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>Нет вызовов</h3>
            }
          </div>
          <Pagination />
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
