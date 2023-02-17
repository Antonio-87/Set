import Team from '../team';

import Character from '../character';

test('add check', () => {
    const team = new Team();
    const characterJack = new Character('Jack');
    team.add(characterJack);
    expect(() => team.members.has(characterJack)).toBeTruthy();
});

test('addAll check', () => {
    const team = new Team();
    const characterJack = new Character('Jack');
    const characterJohn = new Character('John');
    team.addAll(characterJack, characterJohn);
    expect(team.members.size).toBe(2);
});

test('duplication error on method add', () => {
    const team = new Team();
    const characterJack = new Character('Jack');
    team.add(characterJack);
    expect(() => team.add(characterJack)).toThrow();
});

test('no duplication in the members in the method addAll', () => {
    const team = new Team();
    const characterJack = new Character('Jack');
    team.addAll(characterJack, characterJack);
    expect(team.members.size).toBe(1);
});

test('convert array to set', () => {
    const team = new Team();
    const characterJack = new Character('Jack');
    const characterJohn = new Character('John');
    team.addAll(characterJack, characterJohn);
    expect(team.toArray()).toEqual(expect.arrayContaining(team.toArray()));
});
