(() => ({
  name: 'Column',
  icon: 'ColumnIcon',
  category: 'LAYOUT',
  type: 'COLUMN',
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
		'GOOGLEMAP',
		'DATACONTAINER'
  ],
  orientation: 'VERTICAL',
  jsx: (
    <div className={classes.column}>
      {React.createElement(() => {
        const isEmpty = children.length === 0;

        const isPristine = isEmpty && B.env === 'dev';

        return children.length !== 0 ? (
          children
        ) : (
          <div
            className={[
              isEmpty ? classes.empty : '',
              isPristine ? classes.pristine : '',
            ].join(' ')}
          >
            {isPristine ? 'Column' : ''}
          </div>
        );
      })}
    </div>
  ),
  styles: B => theme => {
    const size = idx =>
      ['', 'small', 'medium', 'large', 'xLarge'][parseInt(idx, 10)];

    const getSpacing = (idx, device = 'mobileSpacing') =>
      idx === '0' ? '0rem' : theme.spacing[size(idx)][device];

    return {
      column: {
        display: ({ options: { columnWidthMobile } }) => {
          if (columnWidthMobile === '0') {
            return 'none';
          }
          return 'block';
        },
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexGrow: ({ options: { columnWidthMobile } }) =>
          columnWidthMobile === 'flexible' ? 1 : 0,
        flexShrink: ({ options: { columnWidthMobile } }) =>
          columnWidthMobile === 'flexible' || columnWidthMobile === 'fitContent'
            ? 1
            : 0,
        flexBasis: ({ options: { columnWidthMobile } }) => {
          if (
            columnWidthMobile === 'flexible' ||
            columnWidthMobile === 'fitContent'
          ) {
            return 'auto';
          }

          const marginRight = getSpacing('0');
          const marginLeft = getSpacing('0');

          return `calc(${(columnWidthMobile / 12) *
            100}% - ${marginRight} - ${marginLeft})`;
        },
        marginTop: getSpacing('0'),
        marginRight: getSpacing('0'),
        marginBottom: getSpacing('0'),
        marginLeft: getSpacing('0'),
        paddingTop: getSpacing('2'),
        paddingRight: getSpacing('2'),
        paddingBottom: getSpacing('2'),
        paddingLeft: getSpacing('2'),
        height: 'auto',
        minHeight: 1,
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderWidth: 0,
        borderColor: 'transparent',
        borderStyle: 'none',
        borderRadius: 0,
        overflow: 'auto',
        boxSizing: 'border-box',
        [`@media ${B.mediaMinWidth(768)}`]: {
          display: ({ options: { columnWidthTabletPortrait } }) => {
            if (columnWidthTabletPortrait === '0') {
              return 'none';
            }
            return 'block';
          },
          flexGrow: ({ options: { columnWidthTabletPortrait } }) =>
            columnWidthTabletPortrait === 'flexible' ? 1 : 0,
          flexShrink: ({ options: { columnWidthTabletPortrait } }) =>
            columnWidthTabletPortrait === 'flexible' ||
            columnWidthTabletPortrait === 'fitContent'
              ? 1
              : 0,
          flexBasis: ({ options: { columnWidthTabletPortrait } }) => {
            if (
              columnWidthTabletPortrait === 'flexible' ||
              columnWidthTabletPortrait === 'fitContent'
            ) {
              return 'auto';
            }

            const marginRight = getSpacing('0', 'tabletPortraitSpacing');
            const marginLeft = getSpacing('0', 'tabletPortraitSpacing');

            return `calc(${(columnWidthTabletPortrait / 12) *
              100}% - ${marginRight} - ${marginLeft})`;
          },
          maxWidth: '100%',
          marginTop: getSpacing('0', 'tabletPortraitSpacing'),
          marginRight: getSpacing('0', 'tabletPortraitSpacing'),
          marginBottom: getSpacing('0', 'tabletPortraitSpacing'),
          marginLeft: getSpacing('0', 'tabletPortraitSpacing'),
          paddingTop: getSpacing('2', 'tabletPortraitSpacing'),
          paddingRight: getSpacing('2', 'tabletPortraitSpacing'),
          paddingBottom: getSpacing('2', 'tabletPortraitSpacing'),
          paddingLeft: getSpacing('2', 'tabletPortraitSpacing'),
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
          display: ({ options: { columnWidthTabletLandscape } }) => {
            if (columnWidthTabletLandscape === '0') {
              return 'none';
            }
            return 'block';
          },
          flexGrow: ({ options: { columnWidthTabletLandscape } }) =>
            columnWidthTabletLandscape === 'flexible' ? 1 : 0,
          flexShrink: ({ options: { columnWidthTabletLandscape } }) =>
            columnWidthTabletLandscape === 'flexible' ||
            columnWidthTabletLandscape === 'fitContent'
              ? 1
              : 0,
          flexBasis: ({ options: { columnWidthTabletLandscape } }) => {
            if (
              columnWidthTabletLandscape === 'flexible' ||
              columnWidthTabletLandscape === 'fitContent'
            ) {
              return 'auto';
            }

            const marginRight = getSpacing('0', 'tabletLandscapeSpacing');
            const marginLeft = getSpacing('0', 'tabletLandscapeSpacing');

            return `calc(${(columnWidthTabletLandscape / 12) *
              100}% - ${marginRight} - ${marginLeft})`;
          },
          marginTop: getSpacing('0', 'tabletLandscapeSpacing'),
          marginRight: getSpacing('0', 'tabletLandscapeSpacing'),
          marginBottom: getSpacing('0', 'tabletLandscapeSpacing'),
          marginLeft: getSpacing('0', 'tabletLandscapeSpacing'),
          paddingTop: getSpacing('2', 'tabletLandscapeSpacing'),
          paddingRight: getSpacing('2', 'tabletLandscapeSpacing'),
          paddingBottom: getSpacing('2', 'tabletLandscapeSpacing'),
          paddingLeft: getSpacing('2', 'tabletLandscapeSpacing'),
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
          display: ({ options: { columnWidth } }) => {
            if (columnWidth === '0') {
              return 'none';
            }
            return 'block';
          },
          flexGrow: ({ options: { columnWidth } }) =>
            columnWidth === 'flexible' ? 1 : 0,
          flexShrink: ({ options: { columnWidth } }) =>
            columnWidth === 'flexible' || columnWidth === 'fitContent' ? 1 : 0,
          flexBasis: ({ options: { columnWidth } }) => {
            if (columnWidth === 'flexible' || columnWidth === 'fitContent') {
              return 'auto';
            }

            const marginRight = getSpacing('0', 'desktopSpacing');
            const marginLeft = getSpacing('0', 'desktopSpacing');

            return `calc(${(columnWidth / 12) *
              100}% - ${marginRight} - ${marginLeft})`;
          },
          marginTop: getSpacing('0', 'desktopSpacing'),
          marginRight: getSpacing('0', 'desktopSpacing'),
          marginBottom: getSpacing('0', 'desktopSpacing'),
          marginLeft: getSpacing('0', 'desktopSpacing'),
          paddingTop: getSpacing('2', 'desktopSpacing'),
          paddingRight: getSpacing('2', 'desktopSpacing'),
          paddingBottom: getSpacing('2', 'desktopSpacing'),
          paddingLeft: getSpacing('2', 'desktopSpacing'),
        },
      },
      empty: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '4rem',
        height: '100%',
        width: '100%',
        fontSize: '0.75rem',
        color: '#262A3A',
        textTransform: 'uppercase',
        boxSizing: 'border-box',
      },
      pristine: {
        borderWidth: '0.0625rem',
        borderColor: '#AFB5C8',
        borderStyle: 'dashed',
        backgroundColor: '#F0F1F5',
      },
    };
  },
}))();
