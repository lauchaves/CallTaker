import { login as loginService } from './../../services/login'

const login = async (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    };
    return await loginService.login(userData);

};

export default login;