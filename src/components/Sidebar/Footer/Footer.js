import {
    faCircleQuestion,
    faGear,
    faHandsHelping,
    faHeart,
    faHome,
    faPaperPlane,
    faSave,
} from '@fortawesome/free-solid-svg-icons';
import { SideButton } from '../components/SideButton';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section')}>
                <a className={cx('footer-link')} href="">
                    Giới thiệu
                </a>
                <a className={cx('footer-link')} href="">
                    Liên hệ với chúng tôi
                </a>
                <a className={cx('footer-link')} href="">
                    Người sáng tạo
                </a>
                <a className={cx('footer-link')} href="">
                    Nhà phát triển
                </a>
            </div>
            <div className={cx('section')}>
                <a className={cx('footer-link')} href="">
                    Điều khoản
                </a>
                <a className={cx('footer-link')} href="">
                    Quyền riêng tư
                </a>
                <a className={cx('footer-link')} href="">
                    Chính sách và an toàn
                </a>
            </div>
        </div>
    );
}

export default Footer;
