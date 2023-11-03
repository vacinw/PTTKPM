import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children, link = null, onClick = null, ...classNames }) {
    return (
        <>
            {!link && (
                <button className={cx('btn', { ...classNames })} onClick={onClick}>
                    {children}
                </button>
            )}
            {link && (
                <Link to={link} className={cx('btn', { ...classNames })}>
                    {children}
                </Link>
            )}
        </>
    );
}

export default Button;
