import Styles from './Header.module.sass'

const Header = () => {
    return (
        <div className={Styles.Header} >
            <div className={Styles.InfoLine} >
                <div className={Styles.Geo} >
                    Moscow
                </div>
                <nav className={Styles.HeaderNav}>
                    <ul>
                        <li><a href="">Блог о бизнесе</a></li>
                        <li><a href="">Контакты</a></li>
                        <li><a href="">О нас</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header;