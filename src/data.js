const initialFields = [
    {
      label: 'First Name',
      name: 'fName',
      type: 'text',
      placeholder: 'Frankie',
      value: '',
      errorMessage: "'First Name' must contain at least one character!",
      validate(val) {
        return !!(val && val.length > 0);
      },
    },
    {
      label: 'Last Name',
      name: 'lName',
      type: 'text',
      placeholder: 'Avina',
      value: '',
      errorMessage: "'Last Name' must contain at least one character!",
      validate(val) {
        return !!(val && val.length > 0);
      },
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'text',
      placeholder: 'employee@bitwise.com',
      value: '',
      errorMessage: "'Email' must contain valid email address!",
      validate(val) {
        return !!(val && val.length > 0);
      },
    },
    {
      label: 'Location',
      name: 'location',
      type: 'text',
      placeholder: 'Denver, CO',
      value: '',
      errorMessage: "'Location' must be valid!",
      validate(val) {
        return !!(val && val.length > 0);
      },
    },
    {
        label: 'Department',
        name: 'department',
        type: 'text',
        placeholder: 'Project Management',
        value: '',
        errorMessage: "'Department' must be valid!",
        validate(val) {
          return !!(val && val.length > 0);
        },
      },
  ];
  
  export default initialFields;