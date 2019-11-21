(() => ({
  name: 'Button',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  type: 'BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (
    <span className={classes.wrapper}>
      {(() => {
        if (options.linkTo && options.linkTo !== '') {
          return (
            <B.Link
              to={B.getRoute(options.linkTo)}
              className={[
                classes.root,
                classes['size-normal'],
                classes.link,
                ...[B.env === 'dev' ? classes.noEvents : ''],
              ].join(' ')}
            >
              {options.buttonText}
            </B.Link>
          );
        }

        return (
          <button
            type="button"
            className={[
              classes.root,
              classes['size-normal'],
              ...[B.env === 'dev' ? classes.noEvents : ''],
            ].join(' ')}
            disabled={B.env === 'dev' ? false : options.disabled === 'true'}
          >
            {options.buttonText}
          </button>
        );
      })()}
    </span>
  ),
  styles: B => t => {
    const style = new B.Styling(t);
    const getSpacing = (s, v = 'Mobile') => `0 ${style.getSpacing(s, v)}`;

    return {
      wrapper: {
        display: 'inline-block',
        margin: getSpacing('S'),
      },
      root: {
        extend: t.base,
        display: 'inline-flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        color: style.getColor('White'),
        fontFamily: style.getFontFamily('Button'),
        fontSize: style.getFontSize('Button'),
        fontWeight: style.getFontWeight('Button'),
        textTransform: style.getTextTransform('Button'),
        letterSpacing: style.getLetterSpacing('Button'),
        textDecoration: 'none',
        backgroundColor: ({ options: { backgroundColor } }) =>
          style.getColor(backgroundColor),
        border: 'none',
        borderRadius: style.getBorderRadius('M'),
        boxSizing: 'border-box',
        padding: '0 1rem',
        minWidth: '4rem',
        height: '2.25rem',
        appearance: 'none',
        overflow: 'hidden',
        verticalAlign: 'middle',
        userSelect: 'none',
        transition: 'box-shadow 0.1s',
        opacity: ({ options: { disabled } }) =>
          disabled === 'true' ? 0.38 : 1,
        '&::-moz-focus-inner': {
          border: 0,
        },
        '&:hover': {
          backgroundColor: ({ options: { backgroundColor } }) =>
            B.color.darken(style.getColor(backgroundColor), 0.08),
        },
        '&:active': {
          backgroundColor: ({ options: { backgroundColor } }) =>
            B.color.darken(style.getColor(backgroundColor), 0.08),
        },
        '&:hover, &:active, &:focus': {
          outline: 'none',
        },
        '&:not(:active):focus': {
          boxShadow: ({ options: { backgroundColor } }) =>
            `0 0 0 0.2rem ${B.color.alpha(
              style.getColor(backgroundColor),
              0.5,
            )}`,
        },
      },
      link: {
        cursor: 'pointer',
        '&:active': {
          boxShadow: ({ options: { backgroundColor } }) =>
            `0 0 0 0.2rem ${B.color.alpha(
              style.getColor(backgroundColor),
              0.5,
            )}`,
        },
      },
      noEvents: {
        pointerEvents: 'none',
      },
      normal: {
        padding: '0 1rem',
        fontSize: '0.875rem',
        height: '2.25rem',
      },
    };
  },
}))();
