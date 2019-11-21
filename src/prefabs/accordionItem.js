(() => ({
  name: 'Accordion Item',
  icon: 'AccordionItemIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'AccordionItem',
      options: [
        {
          value: 'Item',
          label: 'Title',
          key: 'itemTitle',
          type: 'TEXT',
        },
      ],
      descendants: [
        {
          name: 'Text',
          options: [
            {
              value: 'Type your content here...',
              label: 'Content',
              key: 'content',
              type: 'TEXT',
            },
            {
              value: 'Body1',
              label: 'Type',
              key: 'type',
              type: 'FONT',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
