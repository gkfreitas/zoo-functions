const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Sem parâmetros retorna todos dias e horas', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(actual).toEqual(expected);
  });

  it('Se o primeiro parâmetro não for um dia da semana retorna erro', () => {
    const expected = /^The day must be valid. Example: Monday$/;
    const actual = 'Segunda';
    expect(() => getOpeningHours(actual)).toThrow(expected);
  });

  it('Se a hora não representar um número retorna um erro', () => {
    const expected = /^The hour should represent a number$/;
    expect(() => getOpeningHours('Monday', '12PM')).toThrow(expected);
  });

  it('O horário deve ser em formato AM ou PM', () => {
    const expected = /^The abbreviation must be 'AM' or 'PM'$/;
    expect(() => getOpeningHours('Monday', '12:00')).toThrow(expected);
  });

  it('As horas devem ser numericos', () => {
    const expected = /^The hour should represent a number$/;
    expect(() => getOpeningHours('Monday', 'Oi:00-PM')).toThrow(expected);
  });

  it('Os minutos devem ser numericos', () => {
    const expected = /^The minutes should represent a number$/;
    expect(() => getOpeningHours('Monday', '10:oi-PM')).toThrow(expected);
  });

  it('As horas devem ser entre 0 e 12', () => {
    const expected = /^The hour must be between 0 and 12$/;
    expect(() => getOpeningHours('Monday', '16:00-PM')).toThrow(expected);
  });

  it('Os minutos devem estar entre 0 e 59', () => {
    const expected = /^The minutes must be between 0 and 59$/;
    expect(() => getOpeningHours('Monday', '10:99-PM')).toThrow(expected);
  });

  it('Retorna que o zoo está fecahdo se estiver.', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Friday', '10:00-PM');
    expect(actual).toEqual(expected);
  });

  it('Retorna que o zoo está aberto se estiver.', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('Friday', '12:00-PM');
    expect(actual).toEqual(expected);
  });
});
