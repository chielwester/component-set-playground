(() => ({
  name: 'ContainerWithParams',
  icon: 'RowIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'ContainerWithParams',
      options: [

        {
          value: '',
          label: 'Model',
          key: 'model',
          type: 'MODEL',
        },
				{
					value: 'locationid',
					label: 'Variable name',
					key: 'variablename',
					type: 'TEXT'
				},
        {
          value: ['Some text..'],
          label: 'Variable',
          key: 'variable',
          type: 'VARIABLE',
					configuration: {
						dependsOn: 'model'
					}
        },
      ],
      descendants: [],
    },
  ],
}))();
