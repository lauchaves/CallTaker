export const setToken = token => { sessionStorage.setItem('token',token) };

export const logout = () => { sessionStorage.removeItem('token') };

export const getToken = () => { return sessionStorage.getItem('token') };

/*  
    const getProfile = token => { 
        const decoded= jwt.verify(getToken(),secret);
        console.log(decoded);
    
    } */