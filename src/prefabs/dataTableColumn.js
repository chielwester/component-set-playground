(() => ({
  name: 'DataTableColumn',
  icon: 'DataTableColumn',
  category: 'DATA',
  structure: [
    {
      name: 'DataTableColumn',
      options: [
        {
          value: '',
          label: 'Order by',
          key: 'property',
          type: 'PROPERTY',
        },
        {
          type: 'VARIABLE',
          label: 'Header text',
          key: 'headerText',
          value: ['Column'],
        },
      ],
      descendants: [
        {
          name: 'Text',
          options: [
            {
              type: 'VARIABLE',
              label: 'Content',
              key: 'content',
              value: ['Type your content here...'],
            },
            {
              value: 'Body1',
              label: 'Type',
              key: 'type',
              type: 'FONT',
            },
            {
              type: 'CUSTOM',
              label: 'Text Alignment',
              key: 'textAlignment',
              value: 'left',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Left', value: 'left' },
                  { name: 'Center', value: 'center' },
                  { name: 'Right', value: 'right' },
                ],
              },
            },
            {
              value: ['0rem', '0rem', '0rem', '0rem'],
              label: 'Outer space',
              key: 'outerSpacing',
              type: 'SIZES',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
