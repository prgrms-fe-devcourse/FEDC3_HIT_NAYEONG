import { BreadCrumbProps, Comment, LikeProps } from '@/types';
import { atom, selector } from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

// 로그인 안내 모달창
export const informLoginModalState = atom<boolean>({
  key: 'informLoginModalState',
  default: false,
});

// 댓글 생성
export const createCommentState = atom<Comment | null>({
  key: 'createCommentState',
  default: null,
});

// 좋아요 (postId, likes)
export const likePropState = atom<LikeProps | null>({
  key: 'likePropState',
  default: null,
});

// BreadCrumb
export const breadCrumbState = atom<BreadCrumbProps>({
  key: 'breadCrumbState',
  default: {
    channelId: '',
    category: '',
  },
});
