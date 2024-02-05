import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userSession } from '../../../state/atom/userSessionAtom';
import * as St from './SurveyList.styled';

const SurveyList = () => {
  const session = useRecoilValue(userSession);
  const navigate = useNavigate();

  return (
    <St.Container>
      <St.TitleWrapper>
        <St.Title>
          {session ? (
            <>
              <St.NickName>
                {session?.user_metadata.full_name ||
                  session?.user_metadata.preferred_name ||
                  session?.user_metadata.user_name ||
                  session?.user_metadata.name}
              </St.NickName>
              <span>님이 </span>
            </>
          ) : null}
          좋아할만한 책을 추천해드릴게요!
        </St.Title>
      </St.TitleWrapper>
      <St.SurveyContentWrapper>
        <St.SurveyContentBox>
          <St.Righticon />
          <St.SurveyButton
            onClick={() => {
              navigate('/survey/domfor');
              window.scrollTo(0, 0);
            }}>
            요즘 핫한 국내도서{' '}
            <St.BreakPoint>
              <br />
            </St.BreakPoint>{' '}
            vs 외국도서 추천받기
          </St.SurveyButton>
        </St.SurveyContentBox>
        <St.SurveyContentBox>
          <St.Righticon />
          <St.SurveyButton
            onClick={() => {
              navigate('/survey/genre');
              window.scrollTo(0, 0);
            }}>
            요즘 인기 있는 책을 &nbsp;
            <St.BreakPoint>
              <br />
            </St.BreakPoint>
            장르별로 추천받기
          </St.SurveyButton>
        </St.SurveyContentBox>
        <St.SurveyContentBox>
          <St.Righticon />
          <St.SurveyButton
            onClick={() => {
              navigate('/survey/new');
              window.scrollTo(0, 0);
            }}>
            따끈따끈한 신작을 &nbsp;
            <St.BreakPoint>
              <br />
            </St.BreakPoint>
            장르별로 추천받기
          </St.SurveyButton>
        </St.SurveyContentBox>
        <St.SurveyContentBox>
          <St.Righticon />
          <St.SurveyButton
            onClick={() => {
              navigate('/survey/price');
              window.scrollTo(0, 0);
            }}>
            텅장러를 위한 책 추천받기
          </St.SurveyButton>
        </St.SurveyContentBox>
      </St.SurveyContentWrapper>
    </St.Container>
  );
};

export default SurveyList;
