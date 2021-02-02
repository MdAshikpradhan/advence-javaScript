const students = [
    {id: 21, name: 'Abdullah'},
    {id: 31, name: 'Abdur Rahman'},
    {id: 41, name: 'Abdul ALi'},
    {id: 71, name: 'Abdul kashem'}
];

const names= students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const bigger1 = students.find(s => s.id> 40);
console.log(bigger1);