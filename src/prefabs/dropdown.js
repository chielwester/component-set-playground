(() => ({
  name: 'Dropdown',
  icon: 'DropdownIcon',
  category: 'FORM',
  structure: [
    {
      name: 'Dropdown',
      options: [
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
          value: 'Body1',
          label: 'Label type',
          key: 'formInputLabelType',
          type: 'FONT',
        },

        {
          value: false,
          label: 'Required',
          key: 'formComponentRequired',
          type: 'TOGGLE',
        },
        {
          value: '',
          label: 'Model',
          key: 'model',
          type: 'MODEL',
        },
        {
          value: [],
          label: 'Properties',
          key: 'properties',
          type: 'PROPERTIES',
          configuration: {
            dependsOn: 'model',
          },
        },
        {
          value: [],
          label: 'Value Properties',
          key: 'valueproperties',
          type: 'PROPERTIES',
          configuration: {
            dependsOn: 'model',
          },
        },

      ],
      descendants: [],
    },
  ],
}))();
