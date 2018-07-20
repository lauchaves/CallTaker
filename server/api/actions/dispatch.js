import { postDispatch } from './../../services/dispatch'

export const dispatch  = async (req, res) => {
    console.log('actions postDispatch');
    console.log(req.body);
    const result = await postDispatch(req.body);
    res.send(result);
    return res;
};

