(() => ({
  name: 'Facility Manager Panel',
  icon: 'PanelIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'FacilityManagerPanel',
      options: [
        {
          value: '',
          label: 'Image URL',
          key: 'backgroundUrl',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Border Color',
          key: 'borderColor',
          type: 'COLOR_PICKER',
        },
        {
          value: 'S',
          label: 'Spacing',
          key: 'spacing',
          type: 'SIZE',
        },
        {
          value: 'https://assets.bettyblocks.com/275efcc3995648bfb31ffbea308b6686_assets/files/Alerts.png',
          label: 'Image URL',
          key: 'imageurl',
          type: 'TEXT',
        },

      ],
      descendants: [],
    },
  ],
}))();
