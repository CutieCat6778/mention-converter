test('Testing does the NPM module will convert a mentions string to only IDs', () => {
    const f = require('./index.js');
    expect(f('<@!9398139485>')).toBe('9398139485')
    expect(f('<@9398139485>')).toBe('9398139485')
    expect(f('<@&9398139485>')).toBe('9398139485')
    expect(f('<#9398139485>')).toBe('9398139485')
    expect(f('<#9398139485>', {detail: false})).toBe('9398139485')
    expect(f('<@!9398139485>', {detail: false})).toBe('9398139485')
    expect(f('<@9398139485>', {detail: false})).toBe('9398139485')
    expect(f('<@&9398139485>', {detail: false})).toBe('9398139485')
    expect(f('<#9398139485>', {detail: true})).toEqual({id: '9398139485', detail: {type: "channel", mobile: undefined}})
    expect(f('<@!9398139485>', {detail: true})).toEqual({id: '9398139485', detail: {type: "user", mobile: false}})
    expect(f('<@9398139485>', {detail: true})).toEqual({id: '9398139485', detail: {type: "user", mobile: true}})
    expect(f('<@&9398139485>', {detail: true})).toEqual({id: '9398139485', detail: {type: "role", mobile: undefined}})
    expect(f('9398139485')).toBe('9398139485')
    expect(f('9398139485', {detail: true})).toEqual({id: '9398139485', detail: {type: undefined, mobile: undefined}})
    const array = ['<@328471324>', '<#8509348509348>', '<@&8503285034>', '<@!3980938534>'];
    const output = ['328471324', '8509348509348', '8503285034', '3980938534'];
    const output2 = [{ id: '328471324', detail: { type: 'user', mobile: true } },{id: '8509348509348',detail: { type: 'channel', mobile: undefined }},{ id: '8503285034', detail: { type: 'role', mobile: undefined } },{ id: '3980938534', detail: { type: 'user', mobile: false } }]
    expect(f(array)).toEqual(output)
    expect(f(array, {detail: false})).toEqual(output)
    expect(f(array, {detail: true})).toEqual(output2)
})