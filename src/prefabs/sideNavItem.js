(() => ({
  name: 'Sidenav Item',
  icon: 'NavItemIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'SideNavItem',
      options: [
        {
          value: 'Side Nav Item',
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
      ],
      descendants: [],
    },
  ],
}))();
