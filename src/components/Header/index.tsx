import { Link } from 'react-router-dom';
import CitySelect from './CitySelect';
import { HeaderWrapper, Logo } from './styles';

const Header = () => {
  return (
    <HeaderWrapper as='header'>
      <Logo>
        <Link to='/'>
          <img src='./images/logo.svg' alt='logo' />
        </Link>
        <h2>날씨</h2>
      </Logo>
      <CitySelect />
    </HeaderWrapper>
  );
};

export default Header;
