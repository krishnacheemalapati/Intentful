const User = require('../../../Entities/UserSchema');
const getAllIntentsInteractor = require('../../../UseCases/GetUseCases/getAllIntentsInteractor');
// might want to figure out some way to mock User schema if possible

test('returns intents correctly', () => {
    let email = 'hello@gmail.com';
    let password = 'password';
    let transcripts = [];
    let intents = 'testtesttest'
    const user = new User({ email, password, transcripts, intents });
    expect(getAllIntentsInteractor(user)).toEqual(intents);
})