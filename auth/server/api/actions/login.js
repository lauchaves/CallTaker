import { loginService } from './../../services/login'

export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res.send({auth: false, error: {status:404, message: 'You need a username and password', code: 10}});
      return res;
    };

    const userData = {
        email: email,
        password: password
    };

    const result = await loginService(userData);

    if (result.type == 'error') 
      res.send({auth: false, error: {status:400, message: result.msg, code: 10}});
    else 
      res.send({ auth: true, token: result });
};

