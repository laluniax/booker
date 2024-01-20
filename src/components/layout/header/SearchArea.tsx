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
  return (
    <div>
      {searchBarOpen ? (
        <St.SearchBox
          onSubmit={(e) => {
            onSubmitHandler(e);
          }}>
          <St.SearchBar
            type="text"
            value={input}
            // 문자열 모든 공백 제거하여 input 값으로 받아옴
            onChange={(e) => setInput(e.target.value.replace(/(\s*)/g, ''))}
          />
        </St.SearchBox>
      ) : null}
      <St.HeaderBtn onClick={() => setSearchBarOpen(!searchBarOpen)}>
        <St.Image
          src={`${process.env.PUBLIC_URL}/images/header/searchIcon.jpg`}
          alt="searchIcon"
          style={{ width: '32px', height: '33px' }}
        />
      </St.HeaderBtn>
    </div>
  );
};

export default SearchArea;
