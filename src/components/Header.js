import logo from '../images/logo.svg';
function Header() {
  return (
    <header className="header page__header">
      <a href="#" target="_blank" rel="noopener">
        <img src={logo} alt='Логотип Место Россия' className="header__logo" />
      </a>
    </header>
  )
}

export default Header;
