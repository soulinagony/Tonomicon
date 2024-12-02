import styled from 'styled-components';

// Широкая карточка для информационного контента
const WideCard = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.5s ease-in-out;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

// Заголовок секции
const SectionTitle = styled.h2`
  color: #646cff;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

// Контейнер для списка преимуществ
const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  box-sizing: border-box;
`;

// Элемент списка преимуществ
const FeatureItem = styled.li`
  padding: 1rem;
  background: rgba(100, 108, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;
const CategoryTag = styled.span`
  background: rgba(100, 108, 255, 0.1);
  color: #646cff;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  font-size: 0.9em;
  margin-top: 0.5rem; // Изменили margin-bottom на margin-top
  display: inline-block; // Добавили для лучшего позиционирования
`;
// Контейнер для DEX кнопок
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;
// Стилизованная кнопка DEX
const DexButton = styled.a`
  background: rgba(255, 0, 0, 0.2);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 0, 0, 0.3);
  min-width: 200px;
  text-align: center;

  &:hover {
    background: rgba(255, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;
// Увеличенный текст описания
const Description = styled.p`
  font-size: 1.3rem;
  text-align: center;
  margin: 1rem 0;
`;
const TelegramButton = styled.a`
  background: rgba(100, 108, 255, 0.2);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid rgba(100, 108, 255, 0.3);

  &:hover {
    background: rgba(100, 108, 255, 0.3);
    transform: translateY(-5px);
  }
`;

const InfoCard = ({ title, features, description, category, isDex, isTelegram }) => {
  // Проверяем, является ли карточка SBTCampaign
  const isSBTCampaign = category === 'SBTcampaign';
  
  return (
    <WideCard data-category={category}>
      <SectionTitle>{title}</SectionTitle>
      <CategoryTag>{category}</CategoryTag>
      
      {isDex && (
        <ButtonsContainer>
          <DexButton href="https://dedust.io" target="_blank" rel="noopener noreferrer">
            DeDust.io
          </DexButton>
          <DexButton href="https://ston.fi" target="_blank" rel="noopener noreferrer">
            Ston.Fi
          </DexButton>
        </ButtonsContainer>
      )}

      {/* Показываем Telegram боты только для SBTCampaign */}
      {isSBTCampaign && (
        <ButtonsContainer>
          <TelegramButton href="https://t.me/tbook_incentive_bot" target="_blank">
          @tbook_incentive_bot
          </TelegramButton>
          <TelegramButton href="https://t.me/BroContestsBot" target="_blank">
            @BroContestsBot
          </TelegramButton>
          <TelegramButton href="https://t.me/theontonbot" target="_blank">
            @theontonbot
          </TelegramButton>
        </ButtonsContainer>
      )}
      
      <Description>{description}</Description>
      
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeaturesList>
    </WideCard>
  );
};

export default InfoCard;