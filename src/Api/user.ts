import api from '@/Api/api';

// checkAuthUser -> 로그인 유무 확인 true, false 반환
const checkAuthUser = async () => {
  try {
    const token = localStorage.getItem('login-token');
    if (token === null) {
      return false;
    }
    const response = await api.get(`/auth-user`, {
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

// getUserInformation -> 유저 정보 반환, 없는 경우 false 반환
// 호출할 때 async await로 받아줘야 합니다!
const getUserInformation = async () => {
  try {
    const token = localStorage.getItem('login-token');
    if (token === null) {
      return false;
    }
    const response = await api.get(`/auth-user`, {
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { checkAuthUser, getUserInformation };
