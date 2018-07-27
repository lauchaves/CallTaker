import moment from 'moment';
import { notify, notifyPriority } from '../socketIO';
import * as dal from './../dal/emergencyRepo';

export const setEmergencyPriority = async () => {
    const fiveMin = 5;
    const tenMin = 10;
    const result = await dal.getInfoEmergencyPriority();
    
    result.map( emergency => {
    
       console.log('------------------');
       let current = moment().format();

        const formartEmergencyDate= moment(emergency.creationdate).format();

        console.log('current', current);
        console.log('new emr', formartEmergencyDate);

       let minutesDifference = moment(current).diff(formartEmergencyDate, 'minutes');
        
        console.log('minutesDifference', minutesDifference);

        if( minutesDifference < fiveMin ) {
            console.log ('less than 5 minutes');
            notify({id: emergency.id , color:"##008000" });
            return {id: emergency.id , color:"##008000" };
        }

        if ( (fiveMin < minutesDifference) &&  ( minutesDifference < tenMin ) ) {
            console.log ('between 5 minutes and 10 minutes');
            notify({id: emergency.id , color:"#FFFF00" });
            return {id: emergency.id , color:"#FFFF00" };
        }
        console.log('more than 10 minutes');
        notify({id: emergency.id , color:"#FF0000" })
        return {id: emergency.id , color:"#FF0000" };
        
        });
};

