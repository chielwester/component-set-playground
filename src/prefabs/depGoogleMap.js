(() => ({
  name: 'DepGoogleMap',
  icon: 'ImageIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'DepGoogleMap',
      options: [
        {
          value: '',
          label: 'Markers Model',
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
          type: 'TOGGLE',
          label: 'Use variable',
          key: 'usevariable',
          value: false,
				},
        {
          type: 'VARIABLE',
          label: 'Record',
          key: 'object',
          value: ['Type your content here...'],
          configuration: {
            dependsOn: 'model',
          },
        },
				{
          value: 'result.latitude',
          label: 'Latitude property',
          key: 'latitude',
          type: 'TEXT',
				},
				{
          value: 'result.longitude',
          label: 'Longitude property',
          key: 'longitude',
          type: 'TEXT',
				},
				{
          value: 'result.name',
          label: 'Marker text',
          key: 'markertext',
          type: 'TEXT',
				},
				{
					value: '52.6807342',
					label: 'Start latitude',
					key: 'startlat',
					type: 'TEXT'
				},
				{
					value: '4.8897931',
					label: 'Start longitude',
					key: 'startlong',
					type: 'TEXT'
				},
				{
					value: '8',
					label: 'Start zoom',
					key: 'zoom',
					type: 'TEXT'
				},

        {
          value: '',
          label: 'Link to',
          key: 'linkTo',
          type: 'ENDPOINT',
        },


			],
			descendants: [

			]
		}
	],
}))();
