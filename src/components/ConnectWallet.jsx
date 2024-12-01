import styled from 'styled-components';

// Стилизованная кнопка с инвертированными цветами
const WalletButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: transparent;
  color: #646cff;
  padding: 0.8em 1.5em;
  border: 2px solid #646cff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  font-family: 'Ubuntu Mono', monospace;
  width: auto; // Явно указываем автоматическую ширину
  min-width: fit-content; // Гарантируем, что кнопка не будет меньше контента

  &:hover {
    background: #646cff;
    color: black;
    box-shadow: 0 0 15px rgba(100, 108, 255, 0.5);
  }
`;

const ConnectWallet = () => {
  const handleConnect = () => {
    // Здесь будет логика подключения кошелька
    console.log('Connecting wallet...');
  };

  return (
    <WalletButton onClick={handleConnect}>
      Connect Wallet
    </WalletButton>
  );
};

export default ConnectWallet;