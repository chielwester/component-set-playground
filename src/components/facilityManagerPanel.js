(() => ({
  name: 'FacilityManagerPanel',
  icon: 'RowIcon',
  category: 'LAYOUT',
  type: 'PANEL',
  allowedTypes: [
		'ACCORDION',
    'ALERT',
    'BREADCRUMB',
    'BUTTON',
    'DATATABLE',
    'DIVIDER',
    'FORM',
    'IMAGE',
    'PARTIAL',
    'PANEL',
    'PROGRESS',
    'TABS',
    'TEXT',
		'ROW',
		'COLUMN',
		'GOOGLEMAP'
	],
  orientation: 'HORIZONTAL',
  jsx: (() => {
		return (
    <div className={classes.container}>
			{options.imageurl && (<div className={classes.absolute}>
				<div className={classes.topimage}>
					<img src={options.imageurl} />
				</div>
			</div>)}
      {React.createElement(() => {
        const isEmpty = children.length === 0;

        const isPristine = isEmpty && B.env === 'dev';

        return (
          <section
            className={[
              classes.row,
              ...[isEmpty ? classes.empty : ''],
              ...[isPristine ? classes.pristine : ''],
            ].join(' ')}
          >
            {isPristine ? 'Row' : children}
          </section>
        );
      })}
    </div>
  )})(),
  styles: B => theme => {
    const width = ['100%', '1200px', '960px', '720px', '540px'];

	  const size = idx =>
	    ['', 'small', 'medium', 'large', 'xLarge'][parseInt(idx, 10)];

	  const getSpacing = (idx, device = 'mobileSpacing') =>
	    idx === '0' ? '0rem' : theme.spacing[size(idx)][device];

		const style = new B.Styling(theme);

    return {
      container: {
        width: '100%',
        height: 'auto',
        maxWidth: ({ options: { maxRowWidth } }) =>
          width[parseInt(maxRowWidth, 10)],
        backgroundColor: 'white',
        backgroundImage: 'none',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',


        borderWidth: theme.borders.borderSize.small,
        borderColor: theme.colors.primary,
        borderStyle: 'solid',
				padding: '40px 10px 10px 10px',
				paddingTop: ({ options: { spacing }}) => style.getSpacing(spacing),
        borderRadius: theme.borders.borderRadius.xLarge,
        boxSizing: 'border-box',

        marginRight: ({ options: { maxRowWidth } }) =>
          maxRowWidth && maxRowWidth !== '0' ? 'auto' : getSpacing('0'),
        marginBottom: getSpacing('0'),
        marginLeft: ({ options: { maxRowWidth } }) =>
          maxRowWidth && maxRowWidth !== '0' ? 'auto' : getSpacing('0'),
        [`@media ${B.mediaMinWidth(768)}`]: {
marginTop: 50,
          marginRight: ({ options: { maxRowWidth } }) =>
            maxRowWidth && maxRowWidth !== '0'
              ? 'auto'
              : getSpacing('0', 'tabletPortraitSpacing'),
          marginBottom: getSpacing('0', 'tabletPortraitSpacing'),
          marginLeft: ({ options: { maxRowWidth } }) =>
            maxRowWidth && maxRowWidth !== '0'
              ? 'auto'
              : getSpacing('0', 'tabletPortraitSpacing'),
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
marginTop: 50,
          marginRight: ({ options: { maxRowWidth } }) =>
            maxRowWidth && maxRowWidth !== '0'
              ? 'auto'
              : getSpacing('0', 'tabletLandscapeSpacing'),
          marginBottom: getSpacing('0', 'tabletLandscapeSpacing'),
          marginLeft: ({ options: { maxRowWidth } }) =>
            maxRowWidth && maxRowWidth !== '0'
              ? 'auto'
              : getSpacing('0', 'tabletLandscapeSpacing'),
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
marginTop: 50,
          marginRight: ({ options: { maxRowWidth } }) =>
            maxRowWidth && maxRowWidth !== '0'
              ? 'auto'
              : getSpacing('0', 'desktopSpacing'),
          marginBottom: getSpacing('0', 'desktopSpacing'),
          marginLeft: ({ options: { maxRowWidth } }) =>
            maxRowWidth && maxRowWidth !== '0'
              ? 'auto'
              : getSpacing('0', 'desktopSpacing'),
        },
      },

			row: {
	      display: 'block',
	      height: '100%',
	      flexWrap: 'wrap',
	      justifyContent: 'flex-start',
	      boxSizing: 'border-box',
	    },
	    empty: {
	      alignItems: 'center',
	      justifyContent: () => 'center',
	      minHeight: '1px',
	      height: '4rem',
	      fontSize: '0.75rem',
	      color: '#262A3A',
	      textTransform: 'uppercase',
	    },
	    pristine: {
	      borderWidth: '0.0625rem',
	      borderColor: '#AFB5C8',
	      borderStyle: 'dashed',
				opacity: '0.8',
	      backgroundColor: '#F0F1F5',
	    },
			topimage: {
				backgroundColor: '#21B4D8',
				padding: 20,
				borderRadius: 100,
				borderWidth: 1,
				borderColor: 'white',
				marginBottom: 20,
				borderStyle: 'solid',
				display: 'flex',
				flexShrink: 1,
				flexGrow: 0,
				alignSelf: 'center',
			},
			absolute: {
				fontSize: 70,
				marginRight: 0,
				marginBottom: 0,
				marginLeft: 0,
				paddingTop: 10,
				paddingRight: 0,
				paddingLeft: 0,
				lineHeight: 0,
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'center',
				marginTop: -50,
			},
		}
  }
}))();
