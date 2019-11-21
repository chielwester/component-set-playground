(() => ({
  name: 'Breadcrumb',
  icon: 'BreadcrumbIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'Breadcrumb',
      options: [],
      descendants: [
        {
          name: 'BreadcrumbItem',
          options: [
            {
              value: 'Breadcrumb Item',
              label: 'Content',
              key: 'breadcrumbContent',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Link to',
              key: 'endpointId',
              type: 'ENDPOINT',
            },
          ],
          descendants: [],
        },
        {
          name: 'BreadcrumbItem',
          options: [
            {
              value: 'Breadcrumb Item',
              label: 'Content',
              key: 'breadcrumbContent',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Link to',
              key: 'endpointId',
              type: 'ENDPOINT',
            },
          ],
          descendants: [],
        },
        {
          name: 'BreadcrumbItem',
          options: [
            {
              value: 'Breadcrumb Item',
              label: 'Content',
              key: 'breadcrumbContent',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Link to',
              key: 'endpointId',
              type: 'ENDPOINT',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
