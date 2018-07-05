import { login as loginService } from './../../services/login'

const login = async (req, res) => {
    console.log('hello world2');
    const email = req.body.username;
    const password = req.body.password;

    // if no username or password then send
    if (!email || !password) {
      //next(new Error('You need a username and password'));
      res.status(400).send(
        {errors: [{status:400, message: 'You need a username and password', code: 10}]}
      );
      //res.status(400).send('You need a username and password');
      return;
      }

    const userData = {
        email: email,
        password: password
    };
    return await loginService.login(userData);

};

 export default login;