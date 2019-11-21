(() => ({
  name: 'BreadCrumb Item',
  icon: 'BreadcrumbItemIcon',
  category: 'NAVIGATION',
  structure: [
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
}))();
