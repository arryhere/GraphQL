const roles = [
  { id: '5c7585ed-b5db-4aa1-ac2b-0680622a386d', name: 'SuperAdmin', desc: 'super admin role' },
  { id: 'fa5062c7-6929-4eac-8eb6-4ac8cd5e1a34', name: 'Admin', desc: 'admin role' },
  { id: '9861aaa2-e420-4124-bf17-d98994f83035', name: 'User', desc: 'user role' },
];

const users = [
  {
    id: '9d466a83-e6fb-4ce5-81af-7d69b3e8001f',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    passwordHash: 'ZXNhd2VjcXd4ZXF3eGVxdw==',
    dob: '1999-05-28',
    verified: true,
    active: true,
    failedLoginCount: 0,
    role: roles[0],
    hoobies: ['Football', 'Cricket'],
  },
  {
    id: '173043ff-7efd-49f1-9565-ba3fb2843a91',
    firstName: 'Foo',
    lastName: 'Doe',
    email: 'foo@example.com',
    passwordHash: 'bWRxaW5mYnd3cXh3cnhx',
    dob: '1999-05-28',
    verified: true,
    active: true,
    failedLoginCount: 0,
    role: roles[2],
    hoobies: ['Chess'],
  },
];

export const db = {
  users,
  roles,
};
