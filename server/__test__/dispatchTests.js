import { postDispatch } from "../services/dispatch";

describe('API/dispatch', () => {
    describe('Make a dispatch', () =>{
        it('test postDispatch', async  => {
            expect.assertions(1);
            const dispatch = {
                resourceId: '452842b0-52f1-487e-bff1-f0c50d31ee21',
                emergencyId: '1ffb7b25-1b02-46c6-a119-025efb8ddb9e',
                token: '' 
            };
            const dispatchRes = await postDispatch(dispatch);
            expect(dispatchRes);
        });
    });
});

