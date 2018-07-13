import jwt from 'jsonwebtoken';
import { secret } from './config';

export const verifyToken = (req, res, next) => {
  var token = req.headers['authorization'];

  if (!token)
    return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, secret, function(err, decoded) {
    if (err)
      return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });

    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}