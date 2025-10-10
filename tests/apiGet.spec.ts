import {test,expect} from '@playwright/test'

test.describe.parallel('API Testing', ()=> {
    const baseUrl = "https://reqres.in/api"

    test('validate GET response - valid', async ({request}) => {
        const response = await request.get(`${baseUrl}/users/2`)
        expect(response.status()).toBe(200)
    })

      
  test('validate GET response - user not found (404)', async ({ request }) => {
    const res = await request.get(`${baseUrl}/users/23`);
    expect(res.status()).toBe(404);
  });
});
