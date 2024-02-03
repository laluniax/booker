export type CategoriesTypes = {
  자유수다: string[];
  도서추천: string[];
};

export type CateGenresTypes = {
  [key: string]: string;
};

export type HookMap = {
  // 첫번째 인자로 파일 정보다 담긴 Blob 객체 , 두번째 인자로 콜백함수 받음
  addImageBlobHook?: (blob: File, callback: HookCallbackType) => void;
};

export type HookCallbackType = (url: string, text?: string) => void;
