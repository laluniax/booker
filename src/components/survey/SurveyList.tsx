import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSessionHandler } from '../../api/supabase.api';
import * as St from './SurveyList.styled';

const SurveyList = () => {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  // const userData = async () => {
  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();
  //   const userNickname = user?.user_metadata.full_name;
  //   setNickname(userNickname);
  // };

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
      <St.BtnContainer>
        <St.TitleAndImageWrapper>
          <St.Title>
            <St.NickName>{nickname}</St.NickName> 님이 좋아할만한 책을 추천해드릴게요!
          </St.Title>
        </St.TitleAndImageWrapper>

        <St.ServeyContentWrapper>
          <St.SurveyContentBox>
            <St.IconAndButtonBox>
              <St.Righticon />
              <St.SurveyButton
                onClick={() => {
                  navigate('/BestSellerDomForSurvey');
                  window.scrollTo(0, 0);
                }}>
                요즘 핫한 국내도서 vs 외국도서 추천받기
              </St.SurveyButton>
            </St.IconAndButtonBox>
          </St.SurveyContentBox>

          <St.SurveyContentBox>
            <St.IconAndButtonBox>
              <St.Righticon />
              <St.SurveyButton
                onClick={() => {
                  navigate('/BestSellerGenreSurvey');
                  window.scrollTo(0, 0);
                }}>
                요즘 인기있는 책을 장르별로 추천받기
              </St.SurveyButton>
            </St.IconAndButtonBox>
          </St.SurveyContentBox>

          <St.SurveyContentBox>
            <St.IconAndButtonBox>
              <St.Righticon />
              <St.SurveyButton
                onClick={() => {
                  navigate('/BestSellerNewSurvey');
                  window.scrollTo(0, 0);
                }}>
                따끈따끈한 신작을 장르별로 추천받기
              </St.SurveyButton>
            </St.IconAndButtonBox>
          </St.SurveyContentBox>
          <St.SurveyContentBox>
            <St.IconAndButtonBox>
              <St.Righticon />
              <St.SurveyButton
                onClick={() => {
                  navigate('/BestSellerValueSurvey');
                  window.scrollTo(0, 0);
                }}>
                {nickname}님이 추구하는 가치에 걸맞는 책 추천받기
              </St.SurveyButton>
            </St.IconAndButtonBox>
          </St.SurveyContentBox>
          <St.SurveyContentBox>
            <St.IconAndButtonBox>
              <St.Righticon />
              <St.SurveyButton
                onClick={() => {
                  navigate('/BestSellerCheapSurvey');
                  window.scrollTo(0, 0);
                }}>
                텅장러를 위한 책 추천받기
              </St.SurveyButton>
            </St.IconAndButtonBox>
          </St.SurveyContentBox>
        </St.ServeyContentWrapper>
      </St.BtnContainer>
    </St.Container>
  );
};

export default SurveyList;
