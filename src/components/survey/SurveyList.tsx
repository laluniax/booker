import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSessionHandler } from '../../api/supabase.api';
import * as St from './SurveyList.styled';

const SurveyList = () => {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setNickname(
      result.session?.user.user_metadata.full_name ||
        result.session?.user.user_metadata.preferred_name ||
        result.session?.user.user_metadata.user_name ||
        result.session?.user.user_metadata.name,
    );
  };

  useEffect(() => {
    getUserSession();
  }, []);

  return (
    <St.Container>
      <St.TitleWrapper>
        <St.Title>
          {nickname ? (
            <>
              <St.NickName>{nickname}</St.NickName>
              <span>님이 </span>
            </>
          ) : null}
          좋아할만한 책을 추천해드릴게요!
        </St.Title>
      </St.TitleWrapper>

      <St.SurveyContentWrapper>
        <St.SurveyContentBox>
          {/* <St.IconAndButtonBox> */}
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
          {/* </St.IconAndButtonBox> */}
        </St.SurveyContentBox>

        <St.SurveyContentBox>
          {/* <St.IconAndButtonBox> */}
          <St.Righticon />
          <St.SurveyButton
            onClick={() => {
              navigate('/survey/genre');
              window.scrollTo(0, 0);
            }}>
            요즘 인기있는 책을
            <St.BreakPoint>
              <br />
            </St.BreakPoint>
            장르별로 추천받기
          </St.SurveyButton>
          {/* </St.IconAndButtonBox> */}
        </St.SurveyContentBox>

        <St.SurveyContentBox>
          {/* <St.IconAndButtonBox> */}
          <St.Righticon />
          <St.SurveyButton
            onClick={() => {
              navigate('/survey/new');
              window.scrollTo(0, 0);
            }}>
            따끈따끈한 신작을
            <St.BreakPoint>
              <br />
            </St.BreakPoint>
            장르별로 추천받기
          </St.SurveyButton>
          {/* </St.IconAndButtonBox> */}
        </St.SurveyContentBox>
        {/* <St.SurveyContentBox>
            <St.IconAndButtonBox>
              <St.Righticon />
              <St.SurveyButton
                onClick={() => {
                  navigate('/survey/value');
                  window.scrollTo(0, 0);
                }}>
                {nickname ? (
                  <>
                    {nickname}
                    <span>님이</span>
                  </>
                ) : null}
                추구하는 가치에 걸맞는 책 추천받기
              </St.SurveyButton>
            </St.IconAndButtonBox>
          </St.SurveyContentBox> */}
        <St.SurveyContentBox>
          {/* <St.IconAndButtonBox> */}
          <St.Righticon />
          <St.SurveyButton
            onClick={() => {
              navigate('/survey/price');
              window.scrollTo(0, 0);
            }}>
            텅장러를 위한 책 추천받기
          </St.SurveyButton>
          {/* </St.IconAndButtonBox> */}
        </St.SurveyContentBox>
      </St.SurveyContentWrapper>
    </St.Container>
  );
};

export default SurveyList;
