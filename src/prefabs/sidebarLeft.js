(() => ({
  name: 'Sidebar Left',
  icon: 'Layout48Icon',
  category: 'NAVIGATION',
  structure: [
    {
      name: 'PageBody',
      options: [],
      descendants: [
        {
          name: 'SideNavigation',
          options: [
            {
              value: 'Welcome',
              label: 'Title',
              key: 'title',
              type: 'TEXT',
            },
            {
              type: 'TOGGLE',
              label: 'Collapsed',
              key: 'collapsed',
              value: false,
            },
          ],
          descendants: [
            {
              name: 'SideNavItem',
              options: [
                {
                  value: 'Side Nav Item 1',
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
            {
              name: 'SideNavItem',
              options: [
                {
                  value: 'Side Nav Item 2',
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
        },
        {
          name: 'PageContent',
          options: [],
          descendants: [],
        },
      ],
    },
  ],
}))();
