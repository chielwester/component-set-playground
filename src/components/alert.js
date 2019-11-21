(() => ({
  name: 'Alert',
  icon: 'AlertIcon',
  category: 'CONTENT',
  type: 'ALERT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <section className={classes.root}>
      <div className={classes.iconWrapper}>
        {options.icon && (
          <i className={[classes.icon, options.icon].join(' ')} />
        )}
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.textWrapper}>
          {options.titleText && (
            <h1 className={classes.title}>{options.titleText}</h1>
          )}
          {options.bodyText && (
            <p className={classes.content}>{options.bodyText}</p>
          )}
        </div>
      </div>
      <div className={classes.controlsWrapper}>
        <div className={classes.buttonsWrapper}>
          {options.buttonText && options.buttonLink ? (
            <B.Link
              to={B.getRoute(options.buttonLink)}
              className={[classes.button, classes.link].join(' ')}
            >
              {options.buttonText}
            </B.Link>
          ) : (
            <button type="button" className={classes.button}>
              {options.buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  ),
  styles: B => theme => {
    const style = new B.Styling(theme);

    return {
      root: {
        extend: theme.base,
        display: 'flex',
        fontFamily: style.getColor('Default'),
        backgroundColor: style.getColor('White'),
        border: ({ options }) => `1px solid ${style.getColor(options.color)}`,
        borderRadius: '0.125rem',
        width: '100%',
      },
      iconWrapper: {
        padding: '0.25rem',
        margin: '-0.0625rem 0 -0.0625rem -0.0625rem',
        backgroundColor: ({ options }) => style.getColor(options.color),
        borderRadius: '0.125rem 0 0 0.125rem',
      },
      icon: {
        margin: ({ options: { titleText } }) =>
          `${titleText ? '1rem' : '0.875rem'} 0.5rem 0`,
        fontSize: '1.5rem',
        color: style.getColor('White'),
        [`@media ${B.mediaMinWidth(768)}`]: {
          marginTop: ({ options: { titleText } }) =>
            titleText ? '1.25rem' : '1rem',
        },
      },
      contentWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        flex: 1,
        padding: '0 1rem',
      },
      textWrapper: {
        flex: '1 1 auto',
      },
      controlsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 0.625rem',
      },
      buttonsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      title: {
        margin: '1.25rem 0',
        fontSize: style.getFontSize('Title6'),
        fontWeight: style.getFontSize('Title6'),
      },
      content: {
        margin: '1.125rem 0',
        fontSize: style.getFontSize('Body1'),
        fontWeight: style.getFontWeight('Body1'),
        color: ({ options: { titleText, color } }) =>
          titleText ? style.getColor(color) : style.getColor('Dark'),
      },
      buttonWrapper: {
        display: 'flex',
        alignItems: ({ options: { titleText, bodyText } }) =>
          !titleText || !bodyText ? 'center' : 'flex-end',
        paddingLeft: '2.5rem',
      },
      button: {
        padding: '0.625rem 0.75rem',
        margin: '0 0.5rem 0.5rem',
        marginBottom: ({ options: { titleText, bodyText } }) =>
          (!titleText || !bodyText) && 0,
        fontFamily: style.getFontFamily('Button'),
        fontSize: style.getFontSize('Button'),
        fontWeight: style.getFontWeight('Button'),
        color: style.getColor('Primary'),
        textTransform: 'uppercase',
        backgroundColor: 'transparent',
        border: 'none',
        '&:first-of-type': {
          marginLeft: 0,
        },
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      link: {
        cursor: 'pointer',
        textDecoration: 'none',
        '&:active': {
          boxShadow: ({ options: { backgroundColor } }) =>
            `0 0 0 0.2rem ${B.color.alpha(
              style.getColor(backgroundColor),
              0.5,
            )}`,
        },
      },
    };
  },
}))();
