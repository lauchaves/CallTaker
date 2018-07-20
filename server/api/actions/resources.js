import { getResources } from '../../services/resources'

export const resource  = async (req, res) => {
    console.log('actions resource');
    const result = await getResources();
    res.send(result);
    return res;
};

