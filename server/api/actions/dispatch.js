import { postDispatch } from './../../services/dispatch'

export const dispatch  = async (req, res) => {
    const token = req.headers['authorization'];
    const data = req.body;
    data.token = token;
    const result = await postDispatch(data);
    res.send(result);
    return res;
};

