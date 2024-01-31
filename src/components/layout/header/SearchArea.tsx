import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as St from './Header.styled';

const SearchArea = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === '') {
      alert('검색어를 입력해주세요.');
      return;
    }

    setInput('');
    navigate(`/search?search=${input}`);
  };

  const onClickSearchIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (searchBarOpen === false) {
      setSearchBarOpen(!searchBarOpen);
      return;
    }
  };

  return (
    <>
      <St.SearchBox
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}>
        {searchBarOpen ? (
          <St.SearchBar
            type="text"
            value={input}
            // 문자열 모든 공백 제거하여 input 값으로 받아옴
            onChange={(e) => setInput(e.target.value.replace(/(\s*)/g, ''))}
          />
        ) : null}
      </St.SearchBox>
      <St.HeaderBtn onClick={() => setSearchBarOpen(!searchBarOpen)}>
        <St.SearchIconImage />
      </St.HeaderBtn>
    </>
  );
};

export default SearchArea;
