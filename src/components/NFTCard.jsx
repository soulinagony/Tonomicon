import styled from 'styled-components';

// Контейнер карточки с анимацией при наведении
const Card = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateY(0);
  opacity: 1;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(100, 108, 255, 0.2);
  }
`;

// Контейнер для изображения
const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

// Изображение с правильным масштабированием
const NFTImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Стилизованная кнопка с неоновым эффектом
const ViewButton = styled.a`
  display: inline-block;
  background: #646cff;
  color: white;
  padding: 0.8em 1.5em;
  border-radius: 8px;
  text-decoration: none;
  margin: 1rem auto; // Центрирование кнопки
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover {
    background: #535bf2;
    color: black;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);

    &::before {
      width: 300%;
      height: 300%;
    }
  }
`;
const CategoryTag = styled.span`
  background: rgba(100, 108, 255, 0.1);
  color: #646cff;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  font-size: 0.9em;
  margin-bottom: 0.5rem;
`;
const NFTCard = ({ image, title, description, link, category }) => {
  return (
    <Card>
      <ImageContainer>
        <NFTImage src={image} alt={title} />
      </ImageContainer>
      {category && <CategoryTag>{category}</CategoryTag>}
      <h3>{title}</h3>
      <p>{description}</p>
      <ViewButton href={link} target="_blank" rel="noopener noreferrer">
        Смотреть коллекцию
      </ViewButton>
    </Card>
  );
};

export default NFTCard;