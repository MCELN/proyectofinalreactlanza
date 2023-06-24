import React from 'react';
import { Ellipsis } from 'react-pure-spinners';
import style from './loading.module.css';

const Loading = () => {
    return (
        <div className={style.loading}>
            <Ellipsis />
        </div>
    )
}

export default Loading
