import styled from 'styled-components';
import { MessageComponentProps, MessageProps } from './ChatMessages.type';

export const DateLabel = styled.div`
  background-color: #f0f0f0; // 배경색
  color: #333; // 텍스트 색상
  text-align: center; // 텍스트 중앙 정렬
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 그림자 효과
  width: fit-content; // 콘텐츠에 맞는 너비
  margin: 0 auto;
  padding: 4px 12px; // 패딩
  margin: 6px 0; // 위 아래 마진
  border-radius: 2px; // 테두리 둥글게
  font-size: 0.7em; // 폰트 크기
  margin-left: auto; // 왼쪽 자동 마진
  margin-right: auto; // 오른쪽 자동 마진

  ${({ theme }) => theme.mediaQuery.sm`
  padding: 6px 14px; // 패딩
  margin: 8px 0; // 위 아래 마진
  border-radius: 3px; // 테두리 둥글게
  font-size: 0.8em; // 폰트 크기
  margin-left: auto; // 왼쪽 자동 마진
  margin-right: auto; // 오른쪽 자동 마진
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 8px 16px; // 패딩
  margin: 10px 0; // 위 아래 마진
  border-radius: 4px; // 테두리 둥글게
  font-size: 0.9em; // 폰트 크기
  margin-left: auto; // 왼쪽 자동 마진
  margin-right: auto; // 오른쪽 자동 마진
  `};
`;
export const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
`;

export const MessageComponent = styled.div<MessageComponentProps>`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: ${(props) => (props.isoutgoing ? '#FCA311' : '#14213D')}; /* 배경 색상을 변경합니다. */
  color: ${(props) => (props.isoutgoing ? '#fff' : '#fff')}; /* 텍스트 색상을 변경합니다. */
  align-self: ${(props) => (props.isoutgoing ? 'flex-end' : 'flex-start')};
  /* 추가: 메시지 버블 안에 텍스트가 중앙에 오도록 만듭니다. */
  align-items: ${(props) => (props.isoutgoing ? 'flex-end' : 'flex-start')};
  font-weight: bold;
  text-align: ${(props) => (props.isoutgoing ? 'right' : 'left')};
  text-align: right;
  padding: 0.6rem;
  margin: 0.3rem;
  border-radius: 1rem;
  max-width: 10rem;
  width: auto; /* 메시지의 최대 너비를 설정합니다. */
  height: auto;

  ${({ theme }) => theme.mediaQuery.sm`
    padding: 0.8rem;
    margin: 0.5rem ;
    border-radius: 1rem;
    max-width: 15rem;
    width: auto; /* 메시지의 최대 너비를 설정합니다. */
    height:auto;g
    `}

  ${({ theme }) => theme.mediaQuery.lg`
    padding: 1rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    max-width: 20rem;
    width: auto; /* 메시지의 최대 너비를 설정합니다. */
    height:auto;
    `};
`;

export const NicknameLabel = styled.div`
  color: black; // 닉네임 라벨 텍스트 색상
  align-self: flex-start; // 부모 요소의 시작점에 정렬
  border-radius: 10px; // 닉네임 라벨 둥근 모서리
  margin-left: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  font-size: 1.1rem; // 닉네임 라벨 글꼴 크기

  ${({ theme }) => theme.mediaQuery.sm`
  margin-left:0.5rem;
  margin-top:1rem;
  margin-bottom:0.3rem;
  font-size: 1.4rem; // 닉네임 라벨 글꼴 크기
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  border-radius: 10px; // 닉네임 라벨 둥근 모서리
  margin-left:0.4rem;
  margin-top:1rem;
  margin-bottom:-0.1rem;
  font-size: 1.7rem; // 닉네임 라벨 글꼴 크기
  `};
`;
