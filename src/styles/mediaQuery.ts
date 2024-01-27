import { css } from 'styled-components';
import { CSSProp, Styles } from 'styled-components/dist/types';

const breakPoints = {
  sm: 768,
  md: 996,
  lg: 1200,
};

let init: { [key: string]: (param: Styles<object>) => CSSProp } = {};

export const mediaQuery = Object.entries(breakPoints).reduce((acc, [key, value]) => {
  acc[key] = (...arg) => css`
    @media (max-width: ${value}px) {
      ${css(...arg)}
    }
  `;
  return acc;
}, init);

export default mediaQuery;

// 사용 예시 : export const ProfileWrapper = styled.div`
//   box-sizing: border-box;
//   margin: 3rem auto;
//   padding: 3rem;
//   border: 0.2rem solid #dcdcdc;
//   height: 100%;
//   width: 50rem;
//   ${({ theme }) => theme.mediaQuery.sm`
//     width : 80rem;
// `}
//   ${({ theme }) => theme.mediaQuery.lg`
//     width : 100rem;
// `}
// `;
