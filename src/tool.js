exports.formGenerator = (formInputs) => {
  let output = '';

  // loop through array
  formInputs.forEach((input) => {
    // checks for element of type
    if (input.type) {
      // switch to check input type
      switch (input.type.toLowerCase()) {
        // check if form has id, text, name, etc.
        case 'password':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.placeholder ? `placeholder="${input.placeholder}" ` : '';
          output += input.required ? 'required' : '';
          output += '/>';
          break;

        case 'text':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.placeholder ? `placeholder="${input.placeholder}" ` : '';
          output += input.required ? 'required' : '';
          output += '/>';
          break;

        case 'label':
          output += '<label ';
          output += input.id ? `id="${input.id}" ` : '';
          output += input.for ? `for="${input.for}" ` : '';
          output += input.text ? `>${input.text}</label>` : '></label>';
          break;

        case 'submit':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.name ? `name="${input.name}" ` : '';
          output += input.value ? `value="${input.value}" ` : '';
          output += '></input>';
          break;

        default:
          // error if input type doesnt match
          throw new Error(`❗️ Error❗️ invalid type ➡️  ${input.type} ⬅️`);
      }
    } else {
      throw new Error('❗️ Error❗️ Missing input type please Check input array');
    }
  });
  // return Output
  return `<form method="post">${output}</form>`;
};
