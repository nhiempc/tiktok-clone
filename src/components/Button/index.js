import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    disable = false,
    small = false,
    large = false,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary: primary,
        outline: outline,
        rounded: rounded,
        text: text,
        disable: disable,
        small: small,
        large: large,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
