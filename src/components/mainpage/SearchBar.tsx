import styled from "styled-components";
import { SearchIcons } from "../../assets/mainpage";
import { useRef } from "react";

function SearchBar() {
  const SearchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (SearchRef.current) {
      console.log(SearchRef.current.value);
      SearchRef.current.value = "";
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBarWrapper>
      <SearchIcon src={SearchIcons} alt="search icon" onClick={handleSearch} />
      <SearchBarInput type="text" ref={SearchRef} onKeyUp={handleKeyUp} />
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  position: relative;
  width: 292px;
  height: 45px;
  background: #e6e6e6;
  margin-left: 100px;
  margin-right: 15px;
  border-radius: 20px;
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 40px;
  background: none;
  border-radius: 20px;
  outline: none;
`;

export default SearchBar;
