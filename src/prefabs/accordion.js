(() => ({
  name: 'Accordion',
  icon: 'AccordionIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Accordion',
      options: [
        {
          value: '0',
          label: 'Selected Item (0-based)',
          key: 'selectedItem',
          type: 'TEXT',
        },
      ],
      descendants: [
        {
          name: 'AccordionItem',
          options: [
            {
              value: 'Item 1',
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
        {
          name: 'AccordionItem',
          options: [
            {
              value: 'Item 2',
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
        {
          name: 'AccordionItem',
          options: [
            {
              value: 'Item 3',
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
    },
  ],
}))();
