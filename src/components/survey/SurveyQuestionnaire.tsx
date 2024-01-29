import { useNavigate, useParams } from 'react-router-dom';
import * as St from './SurveyQuestionnaire.styled';

const SurveyQuestionnaire = () => {
  const surveyArr = ['domfor', 'genre', 'new', 'value', 'cheap'];
  const domforArr = ['국내작가도서', '외국작가도서'];

  const questions = {
    domfor: { question: 'Q1. 어떤 책을 추천받고 싶나요??', answers: ['국내작가도서', '외국작가도서'] },
    genre: {
      question: 'Q1. 어떤 장르의 책을 읽고 싶나요?',
      answers: ['소설', '자기계발', '인문학', '경제경영', '만화', '건강', '역사', '에세이'],
    },
    new: { question: 'Q1. 어떤 장르의 책을 읽고 싶나요?', answers: ['소설', '자기계발', '경제경영', '건강', '에세이'] },
    // value: { question: 'Q1. 살아감에 있어 꼭 하나를 챙겨야한다면??', answers: ['성공과행복', '지혜'] },
    price: {
      question: 'Q1. 어떤 장르의 책을 읽고 싶나요??',
      answers: ['인문학', '자기계발', '장르소설', '만화', '경제경영', '한국시'],
    },
    pricenovel: {
      question: 'Q2. 어떤 소설을 읽고 싶나요??',
      answers: ['아일랜드소설', '한국소설', '영미소설', '일본소설'],
    },
  };

  const navigate = useNavigate();
  const params = useParams().id;

  const targetQuestion = questions[params as keyof typeof questions];
  // console.log(params);

  const answerClickHandler = (genre: string) => {
    if (genre === '장르소설') navigate(`/survey/pricenovel`);
    else navigate(`/survey/search?search=${params}/${genre}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {targetQuestion.answers.length >= 4 ? (
        <St.LongContainer className="genre">
          <St.Question>{targetQuestion.question as keyof typeof targetQuestion}</St.Question>
          <St.LongAnswer>
            {targetQuestion.answers.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    answerClickHandler(item);
                  }}>
                  {item}
                </button>
              );
            })}
          </St.LongAnswer>
        </St.LongContainer>
      ) : (
        <St.Container>
          <St.Question>{targetQuestion.question as keyof typeof targetQuestion}</St.Question>
          {targetQuestion.answers.map((item, i) => {
            return (
              <St.Answer key={i}>
                <button onClick={() => answerClickHandler(item)}>{item}</button>
              </St.Answer>
            );
          })}
        </St.Container>
      )}
    </>
  );
};

export default SurveyQuestionnaire;
