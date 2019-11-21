(() => ({
  name: 'HiddenInput',
  icon: 'TextInputIcon',
  category: 'FORM',
  structure: [
    {
      name: 'HiddenInput',
      options: [
        {
          value: '',
          label: 'Model',
          key: 'model',
          type: 'MODEL',
        },
        {
          value: ['Type value here...'],
          label: 'Variable',
          key: 'variable',
          type: 'VARIABLE',
					configuration: {
						dependsOn: 'model'
					}
        },
        {
          value: '',
          label: 'Name',
          key: 'formComponentName',
          type: 'TEXT',
        },
        {
          value: 'Label text',
          label: 'Label text',
          key: 'formComponentLabel',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Input text',
          key: 'formComponentValue',
          type: 'TEXT',
        },
        {
          value: false,
          label: 'Required',
          key: 'formComponentRequired',
          type: 'TOGGLE',
        },
      ],
      descendants: [],
    },
  ],
}))();
