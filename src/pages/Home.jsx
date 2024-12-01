import styled from 'styled-components';
import NFTCard from '../components/NFTCard';
import ConnectWallet from '../components/ConnectWallet';
import InfoCard from '../components/InfoCard';
import { useState } from 'react';
import FilterBar from '../components/FilterBar';
import tonPunksImage from '../assets/images/tonpunks.png';
import tonDeadImage from '../assets/images/tondead.png';
// Основной контейнер
const Section = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > *:not(button) { // Исключаем кнопки из правила width: 100%
    transition: all 0.5s ease-in-out;
    width: 100%;
  }
`;

// Сетка для NFT карточек
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  max-width: 1400px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); // Максимум 4 карточки в ряд
  }
`;

// Информация о TON блокчейне
const tonInfo = {
  title: "TON Blockchain",
  description: "The Open Network (TON) - быстрый, безопасный и масштабируемый блокчейн",
  features: [
    "Высокая пропускная способность",
    "Низкие комиссии за транзакции",
    "Proof-of-Stake консенсус",
    "Смарт-контракты на FunC"
  ],
  category: 'Infrastructure',
  isTelegram: true // Добавляем флаг для телеграм кнопок
};

// Информация о DEX платформах
const dexInfo = {
  title: "Децентрализованные биржи",
  description: "Торгуйте токенами без посредников на DEX платформах",
  features: [
    "Ston.fi - Автоматический маркет-мейкер",
    "DeDust - Торговля токенами и NFT",
    "Пулы ликвидности с высокой доходностью",
    "Мгновенные свопы токенов"
  ],
  category: 'DeFi Projects',
  isDex: true // Добавляем флаг для определения DEX карточки
};

// Информация о DApps и токенах
const dappsInfo = {
  title: "DApps и Токены",
  description: "Децентрализованные приложения и токены в экосистеме TON",
  features: [
    "Telegram-боты и мини-приложения",
    "Мемкоины с реальной утилитарностью",
    "Кросс-чейн мосты и обмены",
    "Децентрализованные протоколы"
  ],
  category: 'Social'
};

// Информация о протоколе Eva
const evaInfo = {
  title: "Протокол Eva",
  description: "Децентрализованное кредитование и заимствование на TON",
  features: [
    "Безопасное кредитование под залог",
    "Гибкие условия займов",
    "Автоматическое начисление процентов",
    "Управление ликвидностью"
  ],
  category: 'DeFi Projects'
};

// Основной компонент Home
const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    'Postmarks: The Jaegers',
    'DeFi Projects',
    'Welcome to TON',
    'Social',
    'Infrastructure',
    'SBTcampaign'
  ];
  const infoCards = [
    tonInfo,
    dexInfo,
    dappsInfo,
    evaInfo
  ];
   
  // Массив с данными NFT коллекций
  const nftCollections = [
    
    // Ваши существующие коллекции остаются без изменений
    {
      image: "https://i.getgems.io/3hu2YDiJ5cTo42tYTcGFyc5DKcDCbIXoQuSyZku7kNc/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYi9jLzY3MmNiNDliNWJkNGUxMWNkNWQwMmNjMi9pbWFnZXMvZjQ1YzRlNThjYmVhOWQzNGVlNjI0NDIzOTBkZTU3NzVkODk4NzAzNi5wbmc",
      title: "TON Postmarks",
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/EQDkyNJ9RFNcVNjIxhSUHUMU8SRWpruCG-gxCEgGtnXY3aSt",
      category: "Postmarks: The Jaegers"
    },
    {
      image: "https://i.getgems.io/w8ymkOe2Zm01cipSJkUNh-EI7koV0_nRIM8vJEV-1c4/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYi9jLzY3MmNiNDliNWJkNGUxMWNkNWQwMmNjMi9pbWFnZXMvNDI0MjVlYzhhNzg0YWM0NmZkY2Y0OTMwMzVjZTM1ZmNmNzZmMDE3NS5wbmc", 
      title: "TON Postmarks",
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/EQDkyNJ9RFNcVNjIxhSUHUMU8SRWpruCG-gxCEgGtnXY3aSt",
      category: "Postmarks: The Jaegers"
    },
    {
      image: "https://i.getgems.io/GzCdGhOSiVhs7eCT5yrc45yDDnjreM8F12zAPh1rG9c/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYi9jLzY3MmNiNDliNWJkNGUxMWNkNWQwMmNjMi9pbWFnZXMvYWM4YzBkYzMwMjI4YjllZjNiNDkyNjA5MTVkMDAzZmFmNzA1YzMwNi5wbmc",
      title: "TON Postmarks",
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/EQDkyNJ9RFNcVNjIxhSUHUMU8SRWpruCG-gxCEgGtnXY3aSt",
      category: "Postmarks: The Jaegers"
    },
    {
      image: "https://i.getgems.io/tsgOtO1WGV7dbjfKWZ6PFh2FulWZyGRo8qPqDaJYFjQ/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYi9jLzY3MmNiNDliNWJkNGUxMWNkNWQwMmNjMi9pbWFnZXMvNjIzZjliZjA5ZjE2ODI2OWZlZjhmMjVjYWE3NGNjZWVkMDY2YTE3NS5wbmc",
      title: "TON Postmarks",
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/EQDkyNJ9RFNcVNjIxhSUHUMU8SRWpruCG-gxCEgGtnXY3aSt",
      category: "Postmarks: The Jaegers"
    },
    {
      image: "https://i.getgems.io/D3DO0gvvRJsBcEjsFjl9t5R3PFMzH0x6nFHf3Awundg/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUUR5V1pJb1RYdUVVYU02Uk90bktzMGxtdGtKVldFZzF2WE1pbW1fQV9yZE1JeUUvNTkxYmEyOGUxODAzNGM5OA",
      title: "Welcome to TON",
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/EQDyWZIoTXuEUaM6ROtnKs0lmtkJVWEg1vXMimm_A_rdMIyE?utm_source=homepage&utm_medium=top_collections&utm_campaign=collection_overview",
      category: "Welcome to TON"
    },
    {
      image: "https://i.getgems.io/MHXF5yUHuYSwrjz2CS4RMs47Xes8oN6s4Izge5IpMog/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUUR5V1pJb1RYdUVVYU02Uk90bktzMGxtdGtKVldFZzF2WE1pbW1fQV9yZE1JeUUvZWJlMzMwZDhmMzBkODkzYQ",
      title: "Welcome to TON",
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/EQDyWZIoTXuEUaM6ROtnKs0lmtkJVWEg1vXMimm_A_rdMIyE?utm_source=homepage&utm_medium=top_collections&utm_campaign=collection_overview",
      category: "Welcome to TON"
    }
    // ... остальные коллекции
    ,
    {
      image: "https://i.getgems.io/1piGoHLXY3gJHseQZb0C3vGW-JfjwQ15Fwf6IAOy-pg/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUUR5V1pJb1RYdUVVYU02Uk90bktzMGxtdGtKVldFZzF2WE1pbW1fQV9yZE1JeUUvYmQxMDgyNWU1ZDhiZDU3MQ",
      title: "Welcome to TON",
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/EQDyWZIoTXuEUaM6ROtnKs0lmtkJVWEg1vXMimm_A_rdMIyE?utm_source=homepage&utm_medium=top_collections&utm_campaign=collection_overview",
      category: "Welcome to TON"
    },
    {
      image: "https://i.getgems.io/_toc-MW6TkBbR8ESb-M1hpAfjFgOtKw5uePnB7qIZl0/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUUR5V1pJb1RYdUVVYU02Uk90bktzMGxtdGtKVldFZzF2WE1pbW1fQV9yZE1JeUUvN2E0MTAyN2RkMzIzNTQ0MA",
      title: "Welcome to TON", 
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/EQDyWZIoTXuEUaM6ROtnKs0lmtkJVWEg1vXMimm_A_rdMIyE?utm_source=homepage&utm_medium=top_collections&utm_campaign=collection_overview",
      category: "Welcome to TON"
    },
    {
      image: "https://getgems.io/assets/main/tonrobots.png",
      title: "TON Robots",
      description: "Memorable token for completing an onboarding quest about the TON ecosystem",
      link: "https://getgems.io/collection/TON_ROBOTS",
      category: "NFT Collections"
    }
  ];
  // Объединяем контент и добавляем тип
  const allContent = [
    ...infoCards.map(card => ({ ...card, type: 'info' })),
    ...nftCollections.map(nft => ({ ...nft, type: 'nft' }))
  ];

  // Фильтруем и сортируем весь контент
  const filteredContent = activeCategory === 'all'
  ? allContent
  : allContent.filter(item => item.category === activeCategory)
      .sort((a, b) => {
        // При выборе NFT Collections, NFT карточки идут первыми
        if (activeCategory === 'NFT Collections') {
          return a.type === 'nft' ? -1 : 1;
        }
        // Для других категорий, информационные карточки идут первыми
        return a.type === 'info' ? -1 : 1;
      });
 
  return (
  <Section>
    <ConnectWallet />
    <h1>TON Blockchain & NFT</h1>
    
    <FilterBar 
      categories={categories}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    />
    
    {/* Сначала рендерим информационные карточки */}
    {filteredContent
      .filter(item => item.type === 'info')
      .map((item, index) => (
        <InfoCard key={`info-${index}`} {...item} />
    ))}
      
      {/* Затем рендерим NFT карточки в сетке */}
    {filteredContent.filter(item => item.type === 'nft').length > 0 && (
      <CardGrid>
        {filteredContent
          .filter(item => item.type === 'nft')
          .map((item, index) => (
            <NFTCard key={`nft-${index}`} {...item} />
        ))}
      </CardGrid>
    )}
    
      
      
      
    </Section>
    
  );
};
      
    

export default Home;