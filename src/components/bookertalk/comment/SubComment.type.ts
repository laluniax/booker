export type PropsType = {
  commentId: number | undefined;
  session: string | undefined;
  setCommentsCount: React.Dispatch<React.SetStateAction<number>>;
};
