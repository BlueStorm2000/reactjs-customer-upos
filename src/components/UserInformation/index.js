import css from './index.module.scss'
import cls from "clsx"

const Index = () => {
    return (
        <div className={cls(css.user_info)}>
            <img className={cls(css.user_image)} alt={"user-img"} src={"/my-assets/images/users/empty-img.png"} />
            <p className={cls(css.user_name)}>Anh Thư</p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13.0941L15.0084 8.08578L13.8309 6.90662L10 10.74L6.17003 6.90662L4.9917 8.08495L10 13.0941Z" fill="#B9BBD3"/>
            </svg>
        </div>
    );
}

export default Index;