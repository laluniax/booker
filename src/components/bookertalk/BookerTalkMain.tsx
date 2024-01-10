import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookerTalkMain = () => {
  const navigation = useNavigate();
  const genreData = {
    인문: ['책1', '책2'],
    경제경영: ['책3', '책4'],
    자기계발: ['책5', '책6'],
    정치사회: ['책7', '책8'],
    역사문화: ['책9', '책10'],
    과학: ['책11', '책12'],
    소설: ['책13', '책14'],
    시에세이: ['책15', '책16'],
  };
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const GenreClickhandler = (genre: string) => {
    setSelectedGenre(genre);
  };

  const renderGenreButtons = () =>
    Object.keys(genreData).map((genre) => (
      <button key={genre} onClick={() => GenreClickhandler(genre)}>
        {genre}
      </button>
    ));

  const renderSelectedGenre = () =>
    selectedGenre && (
      <div>
        <h2>{selectedGenre}</h2>
        <ul>
          {genreData[selectedGenre as keyof typeof genreData].map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
      </div>
    );

  return (
    <div>
      <div>
        <h1>도서추천</h1>
        <div>{renderGenreButtons()}</div>
        <div>{renderSelectedGenre()}</div>
      </div>
      <div>
        <h1>자유수다</h1>
        <div>{renderGenreButtons()}</div>
        <div>{renderSelectedGenre()}</div>
      </div>
      <div>
        <button onClick={() => navigation('/bookertalk/write')}>글 작성</button>
      </div>
    </div>
  );
};

export default BookerTalkMain;
