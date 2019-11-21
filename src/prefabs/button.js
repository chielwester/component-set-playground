(() => ({
  name: 'Button',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Button',
      options: [
        {
          value: 'Button',
          label: 'Button text',
          key: 'buttonText',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Link to',
          key: 'linkTo',
          type: 'ENDPOINT',
        },
        {
          value: 'Primary',
          label: 'Button Color',
          key: 'backgroundColor',
          type: 'COLOR',
        },
      ],
      descendants: [],
    },
  ],
}))();
