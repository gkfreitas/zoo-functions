const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se o parâmetro for vazio retorna undefined', () => {
    const expected = undefined;
    const actual = handlerElephants();
    expect(actual).toBe(expected);
  });

  it('Se o parâmetro não for uma string retorna uma mensagem', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants(1);
    expect(actual).toEqual(expected);
  });

  it('Se as umas das chaves do objeto elefantes tiver o parâmetro retorne esta chave', () => {
    const expected = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    const actual = handlerElephants('id');
    expect(actual).toEqual(expected);
  });

  it('Teste o retorno do count', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(actual).toBe(expected);
  });

  it('Teste o retorno de names', () => {
    const expected = 'Jefferson';
    const actual = handlerElephants('names');
    expect(actual).toContain(expected);
  });

  it('Teste o retorno de averageAge', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');
    expect(actual).toBeLessThanOrEqual(expected);
  });

  it('Retorno caso a string for invalida', () => {
    const expected = null;
    const actual = handlerElephants('blbblb');
    expect(actual).toBe(expected);
  });
});
