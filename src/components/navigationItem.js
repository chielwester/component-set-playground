(() => ({
  name: 'NavigationItem',
  icon: 'NavItemIcon',
  category: 'NAVIGATION',
  type: 'NAVIGATION_ITEM',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (
    <li className={classes.navigationItem}>
      {(() => {
        if (!options.navigationContent)
          return (
            <span
              className={[
                classes.navigationLink,
                B.env === 'dev' ? classes.placeholder : classes.hidden,
              ].join(' ')}
            >
              Empty item
            </span>
          );

        return (
          options.navigationContent &&
          (B.env === 'prod' && options.endpointId ? (
            <B.Link
              to={B.getRoute(options.endpointId)}
              className={classes.navigationLink}
            >
              {options.navigationContent}
            </B.Link>
          ) : (
            <span className={classes.navigationLink}>
              {options.navigationContent}
            </span>
          ))
        );
      })()}
    </li>
  ),
  styles: B => theme => {
    const style = new B.Styling(theme);
		const colors = theme.colors;

		return {
	    navigationItem: {
	      extend: theme.base,
	      position: 'relative',
	      display: 'block',
	      whiteSpace: 'nowrap',
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      borderRadius: '0.125rem',
	      height: '3.5rem',

	      [`@media ${B.mediaMinWidth(1024)}`]: {
	        float: 'left',
	        height: '4rem',
	      },
	    },
	    navigationLink: {
	      fontFamily: 'Roboto, sans-serif',
	      fontSize: '0.875rem',
	      fontWeight: '400',
	      display: 'flex',
	      flex: 1,
	      alignItems: 'center',
	      paddingTop: '0.5rem',
	      paddingRight: '0.5rem',
	      paddingBottom: '0.5rem',
	      paddingLeft: '0.5rem',
	      textDecoration: 'none',
	      cursor: 'pointer',
	      transition: 'background-color 0.15s ease-in-out',
	      justifyContent: 'center',
	      color: ({ options: { responsivecolor } }) =>
		          style.getColor(responsivecolor)||colors.primary,
	      height: 'calc(100% - 1rem)',

	      '&:hover': {
	        backgroundColor: 'rgba(0, 0, 0, 0.08)',
	      },
	      '&:focus, &:active': {
	        backgroundColor: 'rgba(0, 0, 0, 0.24)',
	      },
	      [`@media ${B.mediaMinWidth(768)}`]: {
	        fontSize: '1rem',
	      },
	      [`@media ${B.mediaMinWidth(1024)}`]: {
	        color: ({ options: { desktopcolor } }) =>
		          style.getColor(desktopcolor)||colors.white,
	        paddingRight: '1rem',
	        paddingLeft: '1rem',
	      },
	    },
	    icon: {
	      marginRight: ({ options: { navigationContent } }) =>
	        navigationContent && '0.5rem',
	      width: '1rem',
	    },
	    placeholder: {
	      color: colors.grey600,
	    },
	    hidden: {
	      opacity: 0,
	      pointerEvents: 'none',
	      userSelect: 'none',
	    }
	  }
	}
}))();
