import {
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  FieldError,
} from 'react-hook-form';

export type navigationName = '홈' | '검색' | '알림' | '만들기' | '내 정보' | '로그아웃';
export type navigationNameAndIcon = Record<navigationName, ReactElement>;

export type navigationItem = {
  title: string;
  link: string;
  icon: IconType;
  activeIcon: IconType;
};

export type CategoryName = '노트북' | '키보드' | '휴대폰' | '모니터' | '오디오' | '시계';

export type CategoryNameAndIcon = Record<categoryName, IconType>;

export type Category = {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: CategoryName;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Post = {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image: Optional<string>;
  imagePublicId: Optional<string>;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
};
// React-hook-forms
export type RegisterType<RegisterData extends FieldValues> = {
  register: UseFormRegister<RegisterData>;
  registerName: keyof RegisterData;
  registerRules?: RegisterOptions;
  errors?: FieldError;
};

export type RegisterInputProps<RegisterData> = {
  type: string;
  placeholder?: string;
  style?: {
    container?: string;
    input?: string;
  };
  accept?: string;
} & RegisterType<RegisterData>;

export type RegisterTextareaProps<RegisterData> = {
  rows: number;
  placeholder: string;
  style?: {
    container?: string;
    textarea?: string;
  };
} & RegisterType<RegisterData>;

export type ReviewFormData = {
  title: string;
  contents: string;
  image: string;
};

// 타입 별칭 이름을 ReviewPoster로 작성하면 error가 발생한느 이유를 모르겠습니다.
export type ReviewPosterType = {
  _id?: string;
  id: string;
  title: string;
  image: string;
};
