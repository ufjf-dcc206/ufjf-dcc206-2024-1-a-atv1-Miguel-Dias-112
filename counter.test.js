import { test, expect} from 'vitest'
test('testediv',()=>{
    const div = document.createElement('div');
    div.textContent= "Olá mundo";

    expect.div.textContent.toBe('');
})