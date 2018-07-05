import { loginService } from './../../services/login'

export const login = async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    // if no username or password then send
    if (!email || !password) {
      //next(new Error('You need a username and password'));
      res.status(400).send(
        {errors: [{status:400, message: 'You need a username and password', code: 10}]}
      );
      
      return res;
      }

    const userData = {
        email: email,
        password: password
    };

    console.log('actions: '+ userData);

    const result = await loginService(userData);
    // devolver result json dentro de response
    console.log(result);
    res.send(result);
};



 // api > actions > services > repos
 // index punto de entrada