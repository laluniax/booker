import * as St from '../components/bookintroduction/BookIntroduction.styled';
import BookBestseller from '../components/bookintroduction/bookbestseller/BookBestseller';
import AboutBookNav from '../components/bookintroduction/bookintronav/AboutBookNav';

const AboutBooks = () => {
  return (
    <St.Wrapper>
      <AboutBookNav />
      <BookBestseller />
    </St.Wrapper>
  );
};

export default AboutBooks;
