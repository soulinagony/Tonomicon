import styled from 'styled-components';

const FilterContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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

const SubCategoryList = styled(FilterContainer)`
  margin-top: 0.5rem;
  padding-top: 0;
`;

const FilterBar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  showNftSubCategories,
  onNftSubCategoryChange,
  activeNftSubCategory 
}) => {
  const nftSubCategories = [
    'Postmarks: The Jaegers',
    'Welcome to TON'
  ];

  return (
    <div>
      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category}
            active={category === activeCategory && 
              (category !== 'NFTMarkets' || !activeNftSubCategory)}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>
      
      {showNftSubCategories && (
        <SubCategoryList>
          {nftSubCategories.map(subCategory => (
            <FilterButton
              key={subCategory}
              active={activeNftSubCategory === subCategory}
              onClick={() => onNftSubCategoryChange(subCategory)}
            >
              {subCategory}
            </FilterButton>
          ))}
        </SubCategoryList>
      )}
    </div>
  );
};

export default FilterBar;