// session
export const setAccessToken = (data) => {
    localStorage.setItem('token', JSON.stringify(data))
};

export const getAccessToken = () => {
    return JSON.parse(localStorage.getItem('token'))
};

export const removeSessionToken = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
};

export const setLocalStorageUserData = (data) => {
    localStorage.setItem('userData', JSON.stringify(data))
};

export const getLocalStorageUserData = () => {
    return JSON.parse(localStorage.getItem('userData'))
};

export const removeLocalStorageUserData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
};
