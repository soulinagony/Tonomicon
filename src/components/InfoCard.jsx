import styled from 'styled-components';

// Широкая карточка для информационного контента
const WideCard = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding: 2rem;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform: translateY(0);
  opacity: 1;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  }
`;

// Заголовок секции
const SectionTitle = styled.h2`
  color: #646cff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

// Контейнер для списка преимуществ
const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

// Элемент списка преимуществ
const FeatureItem = styled.li`
  padding: 1rem;
  background: rgba(100, 108, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(100, 108, 255, 0.2);
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
const DexButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
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
const TelegramButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
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
  return (
    <WideCard data-category={category}>
      <SectionTitle>{title}</SectionTitle>
      <CategoryTag>{category}</CategoryTag>
      
      {isDex && (
        <DexButtonsContainer>
          <DexButton href="https://dedust.io" target="_blank" rel="noopener noreferrer">
            DeDust.io
          </DexButton>
          <DexButton href="https://ston.fi" target="_blank" rel="noopener noreferrer">
            Ston.Fi
          </DexButton>
        </DexButtonsContainer>
      )}

      {isTelegram && (
        <TelegramButtonsContainer>
          <TelegramButton href="https://t.me/settleton_bot" target="_blank" rel="noopener noreferrer">
            @settleton_bot
          </TelegramButton>
          <TelegramButton href="https://t.me/BroContestsBot" target="_blank" rel="noopener noreferrer">
            @BroContestsBot
          </TelegramButton>
          <TelegramButton href="https://t.me/theontonbot" target="_blank" rel="noopener noreferrer">
            @theontonbot
          </TelegramButton>
        </TelegramButtonsContainer>
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