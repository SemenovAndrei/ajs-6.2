import getSpecial from '../getspecial';

test.each([
  [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  }, [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
    },
  ]],
  [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
      {
        id: 10,
        name: 'Хвост дракона',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  }, [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
    },
    {
      id: 10, name: 'Хвост дракона', icon: 'http://...', description: 'Описание недоступно',
    },
  ]],
  [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
      {
        id: 10,
        name: 'Хвост дракона',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
      {
        id: 11,
        name: 'Отрыв',
        icon: 'http://...',
        description: 'Прыжок назад на 20 метров',
      },
    ],
  }, [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
    },
    {
      id: 10, name: 'Хвост дракона', icon: 'http://...', description: 'Описание недоступно',
    },
    {
      id: 11, name: 'Отрыв', icon: 'http://...', description: 'Прыжок назад на 20 метров',
    },
  ]],
])('%p', (obj, expected) => {
  const result = getSpecial(obj);
  expect(result).toEqual(expected);
});
