(() => ({
  name: 'Alert',
  icon: 'AlertIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Alert',
      options: [
        {
          value: 'Type your content here...',
          label: 'Title text',
          key: 'titleText',
          type: 'TEXT',
        },
        {
          value: 'Type your content here...',
          label: 'Body text',
          key: 'bodyText',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Icon',
          key: 'icon',
          type: 'TEXT',
        },
        {
          value: 'Primary',
          label: 'Color',
          key: 'color',
          type: 'COLOR',
        },
        {
          value: 'Button text',
          label: 'Button text',
          key: 'buttonText',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Button Link',
          key: 'buttonLink',
          type: 'ENDPOINT',
        },
      ],
      descendants: [
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
    },
  ],
}))();
