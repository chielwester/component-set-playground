(() => ({
  name: 'Divider',
  icon: 'HorizontalRuleIcon',
  category: 'CONTENT',
  type: 'DIVIDER',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={classes.root}>
      <div className={B.env === 'dev' ? classes.clickSpace : ''}>
        <hr className={classes.divider} />
      </div>
    </div>
  ),
  styles: B => t => {
    const style = new B.Styling(t);
    const getSpacing = (s, v = 'Mobile') => `${style.getSpacing(s, v)} 0`;

    return {
      root: {
        width: '100%',
        margin: getSpacing('S'),
        [`@media ${B.mediaMinWidth(768)}`]: {
          margin: getSpacing('S', 'Portrait'),
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
          margin: getSpacing('S', 'Landscape'),
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
          margin: getSpacing('S', 'Desktop'),
        },
      },
      clickSpace: {
        padding: '0.25rem 0',
      },
      divider: {
        height: ({ options: { thickness } }) => style.getBorderSize(thickness),
        margin: 0,
        backgroundColor: ({ options: { color } }) => style.getColor(color),
        border: 'none',
      },
    };
  },
}))();
