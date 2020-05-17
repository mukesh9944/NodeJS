const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach( () => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mukesh',
      room: 'office'
    },
    {
      id: 2,
      name: 'Tarun',
      room: 'school'
    },
    {
      id: 3,
      name: 'Sneha',
      room: 'playground'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 23,
      name: 'Mukesh',
      room: 'office'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser(1);

    expect(user.id).toBe(1);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var user = users.removeUser(5);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser(1);

    expect(user.id).toBe(1);
  });

  it('should not find user', () => {
    var user = users.getUser(5);

    expect(user).toBeFalsy();
  });

  it('should return names for school', () => {
    var userList = users.getUserList('school');

    expect(userList).toEqual(['Tarun']);
  });

  it('should return names for office', () => {
    var userList = users.getUserList('office');

    expect(userList).toEqual(['Mukesh']);
  });

});
