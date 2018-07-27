import { getEmergencies, putEmergencies, postEmergencies } from '../services/emergency';

describe('API/emergencies', ()=> {
    describe('Get all emergencies', () => {
        it('should get all the emergencies',  async ()  => {
            //expect.assertions(1);
            const emergencies = await getEmergencies();
            expect(emergencies);
        });
    });

    describe('Create an emergency', () =>{
        it('should post an emergency', async () => {
            //expect.assertions(1);
            const emergency = {
                type: 'phoneCall',
                description: 'Drug overdose',
            };
            const emergencies = await postEmergencies(emergency);
            expect(emergencies);
        });
    });

    describe('Update an emeregency', ()=>{
        it('should update an emergency', async () => {
            //expect.assertions(1);
            const emergency = {
                emergency_id: '1ffb7b25-1b02-46c6-a119-025efb8ddb9e',
                fullname: 'Laurens',
                phone: '888',
                details: 'no more details',
                personId: '1234'   
            };
            const emergencies = await putEmergencies(emergency);
            expect(emergencies);
        });
    });
});


