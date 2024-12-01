import styled from 'styled-components';

const FilterContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#646cff' : 'transparent'};
  color: ${props => props.active ? 'black' : '#646cff'};
  border: 2px solid #646cff;
  padding: 0.5em 1em;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Ubuntu Mono', monospace;

  &:hover {
    background: #646cff;
    color: black;
    box-shadow: 0 0 15px rgba(100, 108, 255, 0.3);
  }
`;

const FilterBar = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <FilterContainer>
      <FilterButton 
        active={activeCategory === 'all'}
        onClick={() => onCategoryChange('all')}
      >
        Все
      </FilterButton>
      {categories.map(category => (
        <FilterButton
          key={category}
          active={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default FilterBar;