(() => ({
  name: 'Image',
  icon: 'ImageIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Image',
      options: [
        {
          value: '',
          label: 'Image url',
          key: 'imgUrl',
          type: 'TEXT',
        },
        {
          value: '',
          label: 'Image Alternative Text',
          key: 'imgAlt',
          type: 'TEXT',
        },
      ],
      descendants: [],
    },
  ],
}))();
