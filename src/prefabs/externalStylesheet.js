(() => ({
  name: 'ExternalStylesheet',
  icon: 'RowIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'ExternalStylesheet',
      options: [
        {
          value: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
          label: 'Stylesheet url',
          key: 'stylesheeturl',
          type: 'TEXT',
        },
      ],
      descendants: [],
    },
  ],
}))();
