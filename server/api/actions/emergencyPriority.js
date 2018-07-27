
export const setEmergencyPriority  = async (req, res) => {
    //console.log('actions emergency');
    const result = await setEmergencyPriority();
   
    res.send(result);
    return res;
};