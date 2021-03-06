const tool = require('./tool.js');

const inputArry = [
  {
    type: 'label',
    for: 'email',
    text: 'E-mail',
    id: 'email',
  },
  {
    type: 'text',
    name: 'email',
    id: 'email',
    placeholder: 'E-mail address...',
    required: true,
  },
  {
    type: 'label',
    for: 'password',
    text: 'Password',
    id: 'password',
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password...',
    required: true,
  },
  {
    type: 'submit',
    name: 'submit',
    id: 'submit',
    value: 'Submit',
  },
];

console.log(tool.formGenerator(inputArry));
