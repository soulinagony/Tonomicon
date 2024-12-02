import styled from 'styled-components';

// Стилизованная кнопка с инвертированными цветами
const WalletButton = styled.button`
  background: transparent;
  color: #646cff;
  border: 2px solid #646cff;
  padding: 0.8em 1.5em;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 0.6em;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    justify-content: center;
  }

  &:hover {
    background: #646cff;
    color: black;
    box-shadow: 0 0 15px rgba(100, 108, 255, 0.5);
    transform: translateY(-2px);
  }

  // Иконка кошелька
  .wallet-icon {
    font-size: 1.2rem;
  }

  // Текст кнопки
  .button-text {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ConnectWallet = () => {
  const handleConnect = () => {
    console.log('Connecting wallet...');
  };

  return (
    <WalletButton onClick={handleConnect}>
      <span className="wallet-icon">👛</span>
      <span className="button-text">Connect Wallet</span>
    </WalletButton>
  );
};

export default ConnectWallet;