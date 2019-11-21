(() => ({
  name: 'Divider',
  icon: 'HorizontalRuleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Divider',
      options: [
        {
          value: 'S',
          label: 'Thickness',
          key: 'thickness',
          type: 'SIZE',
        },
        {
          value: 'Light',
          label: 'Color',
          key: 'color',
          type: 'COLOR',
        },
      ],
      descendants: [],
    },
  ],
}))();
