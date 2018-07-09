export const setToken = token => { sessionStorage.setItem('token',token) };

export const logout = () => { sessionStorage.removeItem('token') };

export const getToken = () => { return sessionStorage.getItem('token') };
