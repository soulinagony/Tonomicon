import styled from 'styled-components';
import tonLogo from '../assets/images/ton_logo_dark_background.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 32px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 24px;
  }
`;

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={tonLogo} alt="TON Logo" />
      </LogoContainer>
      {children}
    </HeaderContainer>
  );
};

export default Header; 