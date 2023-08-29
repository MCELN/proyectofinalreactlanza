import React from 'react';
import { Ripple } from 'react-pure-spinners';
import style from './loading.module.css';

const Loading = () => {
    return (
        <div className={style.loading}>
            <Ripple />
        </div>
    )
}

export default Loading