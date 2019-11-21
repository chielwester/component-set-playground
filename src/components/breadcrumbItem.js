(() => ({
  name: 'BreadcrumbItem',
  icon: 'BreadcrumbItemIcon',
  category: 'NAVIGATION',
  type: 'BREADCRUMB_ITEM',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (
    <li className={classes.breadcrumbItem}>
      {(() => {
        if (!options.breadcrumbContent)
          return (
            <span
              className={[
                classes.breadcrumbLink,
                B.env === 'dev' ? classes.placeholder : classes.hidden,
              ].join(' ')}
            >
              Empty item
            </span>
          );

        return (
          options.breadcrumbContent &&
          (B.env === 'prod' && options.endpointId ? (
            <B.Link
              to={B.getRoute(options.endpointId)}
              className={classes.breadcrumbLink}
            >
              {options.breadcrumbContent}
            </B.Link>
          ) : (
            <span className={classes.breadcrumbLink}>
              {options.breadcrumbContent}
            </span>
          ))
        );
      })()}
    </li>
  ),
  styles: B => ({ colors }) => ({
    breadcrumbItem: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&:not(:first-of-type)::before': {
        display: 'block',
        content: '"/"',
        fontSize: '0.75rem',
        color: '#999999',
        width: '5px',
      },
    },
    breadcrumbLink: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '0.75rem',
      fontWeight: '400',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      padding: '0.5rem',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.15s ease-in-out',
      justifyContent: 'center',
      color: colors.black,

      '&:hover': {
        color: B.env === 'prod' ? colors.primary : colors.black,
        textDecoration: B.env === 'prod' ? 'underline' : 'none',
      },
      '&:active': {
        outline: 'none',
      },
      '&:not(:active):focus': {
        boxShadow:
          B.env === 'prod' ? `${colors.primary} 0 0 0 0.125rem inset` : 'none',
        outline: 'none',
      },
    },
    icon: {
      marginRight: ({ options: { breadcrumbContent } }) =>
        breadcrumbContent && '0.5rem',
      width: '1rem',
    },
    placeholder: {
      color: '#DADDE4',
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none',
      userSelect: 'none',
    },
  }),
}))();
