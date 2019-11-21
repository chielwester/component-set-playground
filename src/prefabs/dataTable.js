(() => ({
  name: 'DataTable',
  icon: 'DataTable',
  category: 'DATA',
  structure: [
    {
      name: 'DataTable',
      options: [
        {
          value: '',
          label: 'Title',
          key: 'title',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Model',
          key: 'model',
          type: 'MODEL',
        },
        {
          value: ['', 'eq', ''],
          label: 'Filter',
          key: 'filter',
          type: 'FILTER',
          configuration: {
            dependsOn: 'model',
          },
        },
        {
          value: '',
          label: 'Search on property',
          key: 'searchProperty',
          type: 'PROPERTY',
          configuration: {
            dependsOn: 'model',
          },
        },
        {
          value: '15',
          label: 'Rows per page (max 50)',
          key: 'take',
          type: 'NUMBER',
        },
        {
          value: false,
          label: 'Real-time',
          key: 'polling',
          type: 'TOGGLE',
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [
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
    },
  ],
}))();
