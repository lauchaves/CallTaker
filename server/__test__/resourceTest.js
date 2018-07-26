import { getResources } from '../services/resources';

describe('API/resources', () => {
    describe('Get resources', ()=>{
        it('should get all the resources', async  => {
            expect.assertions(1);
            const resources = await getResources();
            expect(resources);
        });
    });
});