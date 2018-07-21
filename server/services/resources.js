import * as dal from '../dal/resources';
import * as constants from '../../common/constants';

export const getResources = async () => {
    //console.log('service');
    const result = await dal.getResources();

    return result;
};
