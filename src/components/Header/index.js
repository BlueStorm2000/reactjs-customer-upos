import './index.module.scss'
import Notification from '../Notification'
import Message from '../Message'
import Language from '../Language'
import UserInformation from '../UserInformation'
import css from './index.module.scss'
import cls from "clsx"

const Index = () => {
    return ( 
        <div className={cls(css.header)}>
            <div className={cls(css.left)}>
                <img className={cls(css.logo)} alt={"upos-logo"} src={"/my-assets/images/logo/full-logo-v1.png"} />
            </div>
            <div className={cls(css.right)}>
                <Notification />
                <Message />
                <Language />
                <div className={cls(css.separate)}>
                    <span>|</span>
                </div>
                <UserInformation />
            </div>
        </div>
    );
}

export default Index