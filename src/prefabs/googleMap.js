(() => ({
  name: 'GoogleMap',
  icon: 'ImageIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'GoogleMap',
      options: [
        {
          value: '',
          label: 'Markers Model',
          key: 'model',
          type: 'MODEL',
        },
        {
          value: '200px',
          label: 'Height',
          key: 'height',
          type: 'SIZE',
					configuration: {
						as: 'UNIT'
					}
        },
				{
					value: '',
					label: 'Google maps API KEY',
					key: 'apikey',
					type: 'TEXT'
				}
      ],
      descendants: [],
    },
  ],
}))();
