import { faFlag, faGear, faPaperPlane, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { SideButton } from '../components/SideButton';

function Support() {
    return (
        <div>
            <SideButton children={'Cài đặt'} icon={faGear} />
            <SideButton children={'Trợ giúp'} icon={faQuestionCircle} />
            <SideButton children={'Nhật ký báo cáo'} icon={faFlag} />
            <SideButton children={'Gửi ý kiến phản hồi'} icon={faPaperPlane} />
        </div>
    );
}

export default Support;
