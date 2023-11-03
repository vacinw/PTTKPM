import { faChartLine, faFireFlameCurved, faNewspaper, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { SideButton } from '../components/SideButton';

import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className="wrapper">
            <h3 className={cx('title')}>Khám phá</h3>
            <SideButton children={'Món ăn trending'} icon={faFireFlameCurved} />
            <SideButton children={'Blog được yêu thích'} icon={faThumbsUp} />
            <SideButton children={'Tin tức'} icon={faNewspaper} />
            <SideButton children={'Thống kê'} icon={faChartLine} />
        </div>
    );
}

export default Discover;
