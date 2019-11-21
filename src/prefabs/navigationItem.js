(() => ({
  name: 'Navigation Item',
  icon: 'NavItemIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'NavigationItem',
      options: [
        {
          value: 'Item',
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
}))();
