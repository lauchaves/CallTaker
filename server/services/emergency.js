import * as dal from './../dal/emergencyRepo';
import { notify } from '../socketIO';
import * as constants from '../../common/constants';

export const getEmergencies = async () => {
    console.log('service');
    const result = await dal.getEmergencies();

    const { emergencyType }= constants;
    
    const formattedResult = result.map( emergency => { 
        return { ...emergency, emergency_type: emergencyType[emergency.emergency_type]  };
    });

    //console.log(formattedResult);

    return formattedResult;
};

export const postEmergencies = async (emergency) => {
    
    try {
        const result = await dal.postEmergencies(emergency);
        await notify(result);
        return result; // emergency_id

    }catch (err) {
        console.log(err);
    }
    

}

// configurar el emitter socket io


/*
        de las emergencias q venga id de la persona q tiene la emergencia
        desplegar id, al click --> dialog con sass, 
                                --> nombre telefeno persona, resources q puede asignar  si no esta tomada la info
                                --> user q tiene la sesion q hace el dispatch y el timestamp --> agrega en el boton  dispatch    

*/ 