(() => ({
  name: '3 columns',
  icon: 'Layout444Icon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Row',
      options: [
        {
          value: '1',
          label: 'Width (0 (Full width), 1 (XL), 2 (L), 3 (M), 4 (S))',
          key: 'maxRowWidth',
          type: 'TEXT',
        },
      ],
      descendants: [
        {
          name: 'Column',
          options: [
            {
              value: '4',
              label: 'Column width (hidden = 0, 1 - 12, flexible, fitContent)',
              key: 'columnWidth',
              type: 'TEXT',
            },
            {
              value: '4',
              label: 'Column width (tablet landscape)',
              key: 'columnWidthTabletLandscape',
              type: 'TEXT',
            },
            {
              value: '12',
              label: 'Column width (tablet portrait)',
              key: 'columnWidthTabletPortrait',
              type: 'TEXT',
            },
            {
              value: '12',
              label: 'Column width (mobile)',
              key: 'columnWidthMobile',
              type: 'TEXT',
            },
          ],
          descendants: [],
        },
        {
          name: 'Column',
          options: [
            {
              value: '4',
              label: 'Column width (hidden = 0, 1 - 12, flexible, fitContent)',
              key: 'columnWidth',
              type: 'TEXT',
            },
            {
              value: '4',
              label: 'Column width (tablet landscape)',
              key: 'columnWidthTabletLandscape',
              type: 'TEXT',
            },
            {
              value: '12',
              label: 'Column width (tablet portrait)',
              key: 'columnWidthTabletPortrait',
              type: 'TEXT',
            },
            {
              value: '12',
              label: 'Column width (mobile)',
              key: 'columnWidthMobile',
              type: 'TEXT',
            },
          ],
          descendants: [],
        },
        {
          name: 'Column',
          options: [
            {
              value: '4',
              label: 'Column width (hidden = 0, 1 - 12, flexible, fitContent)',
              key: 'columnWidth',
              type: 'TEXT',
            },
            {
              value: '4',
              label: 'Column width (tablet landscape)',
              key: 'columnWidthTabletLandscape',
              type: 'TEXT',
            },
            {
              value: '12',
              label: 'Column width (tablet portrait)',
              key: 'columnWidthTabletPortrait',
              type: 'TEXT',
            },
            {
              value: '12',
              label: 'Column width (mobile)',
              key: 'columnWidthMobile',
              type: 'TEXT',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
