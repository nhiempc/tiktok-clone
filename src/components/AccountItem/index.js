import React from 'react';
import styles from './AccountsItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_100x100.jpeg?x-expires=1666872000&x-signature=zAWvwLsNiyfwCHh9WagQTsIwj5M%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van Nhiem</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>one.die.no.return</span>
            </div>
        </div>
    );
}

export default AccountsItem;
