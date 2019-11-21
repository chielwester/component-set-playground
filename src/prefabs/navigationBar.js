(() => ({
  name: 'Navigation Bar',
  icon: 'NavbarIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'NavigationBar',
      options: [
        {
          value: '',
          label: 'Logo URL',
          key: 'logoUrl',
          type: 'TEXT',
        },
        {
          value: 'Brand name',
          label: 'Brand name',
          key: 'brandName',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Link to',
          key: 'endpointId',
          type: 'ENDPOINT',
        },
				{
					value: '',
					label: 'Background Color',
					key: 'backgroundcolor',
					type: 'COLOR'
				}
      ],
      descendants: [
        {
          name: 'NavigationItem',
          options: [
            {
              value: 'Item 1',
              label: 'Button text',
              key: 'navigationContent',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Link to',
              key: 'endpointId',
              type: 'ENDPOINT',
            },
						{
							value: 'White',
							label: 'Color desktop',
							key: 'desktopcolor',
							type: 'COLOR'
						},
						{
							value: 'Primary',
							label: 'Color responsive',
							key: 'responsive',
							type: 'COLOR'
						},

          ],
          descendants: [],
        },
        {
          name: 'NavigationItem',
          options: [
            {
              value: 'Item 2',
              label: 'Button text',
              key: 'navigationContent',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Link to',
              key: 'endpointId',
              type: 'ENDPOINT',
            },
						{
							value: 'White',
							label: 'Color desktop',
							key: 'desktopcolor',
							type: 'COLOR'
						},
						{
							value: 'Primary',
							label: 'Color responsive',
							key: 'responsive',
							type: 'COLOR'
						},

          ],
          descendants: [],
        },
        {
          name: 'NavigationItem',
          options: [
            {
              value: 'Item 3',
              label: 'Button text',
              key: 'navigationContent',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Link to',
              key: 'endpointId',
              type: 'ENDPOINT',
            },
						{
							value: 'White',
							label: 'Color desktop',
							key: 'desktopcolor',
							type: 'COLOR'
						},
						{
							value: 'Primary',
							label: 'Color responsive',
							key: 'responsive',
							type: 'COLOR'
						},

          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
