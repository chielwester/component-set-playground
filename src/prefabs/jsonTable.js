(() => ({
  name: 'JsonTable',
  icon: 'DataTable',
  category: 'DATA',
  structure: [
    {
      name: 'JsonTable',
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
					type: 'MODEL'
			  },
				{
					value: ['Type your content here...'],
					label: 'ENDPOINTURL',
					key: 'endpoint',
					type: 'VARIABLE',
					configuration: {
						dependsOn: 'model'
					}
				},
				{
					value: 'id,name',
					label: 'Columns',
					type: 'TEXT',
					key: 'columns'
				},
				{
					value: 'Id,Name',
					label: 'Column names',
					type: 'TEXT',
					key: 'columnnames'
				},
				{
					value: false,
					label: 'AUTO REFRESH',
					type: 'TOGGLE',
					key: 'autorefresh'
				},
				{
					value: 5,
					label: 'POLL INTERVAL (in seconds)',
					type: 'NUMBER',
					key: 'pollinterval'
				},
        {
          value: 15,
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
      descendants: [],
    },
  ],
}))();
