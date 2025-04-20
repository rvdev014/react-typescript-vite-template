import React, {useEffect} from 'react';
import styles from './styles.module.scss';
import {Outlet} from "react-router-dom";
import {useAppStore} from "../../../shared/model/app-store.ts";
import {UI_COLOR} from "../../../shared/consts.ts";

export const MainLayout = () => {

    const isAppLoading = useAppStore(state => state.isAppLoading)

    if (isAppLoading) {
        return (
            <div className='AppLoader'>
                Loading...
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {/* Navbar */}
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    );
};
