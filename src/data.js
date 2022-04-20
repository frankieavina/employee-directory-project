const initialFields = [
    {
      label: 'First Name',
      name: 'fName',
      type: 'text',
      placeholder: 'Frankie',
      value: '',
      errorMessage: "",
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
      errorMessage: "",
      validate(val) {
        return !!(val && val.length > 0);
      },
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'email',
      placeholder: 'employee@bitwise.com',
      value: '',
      errorMessage: "",
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
      errorMessage: "",
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
        errorMessage: "",
        validate(val) {
          return !!(val && val.length > 0);
        },
      },
      {
        label: 'Phone',
        name: 'phone',
        type: 'text',
        placeholder: '01-23-45-67-89',
        value: '',
        errorMessage: "",
        validate(val) {
          return !!(val && val.length>0);
        },
      },
  ];
  
  export default initialFields;