(() => ({
  name: 'ExternalLibrary',
  icon: 'RowIcon',
  category: 'LAYOUT',
  type: 'ROW',
  allowedTypes: ['ROW','COLUMN'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, GetAll, Link } = B;
		const [loaded, setLoaded] = useState(false);

		useEffect(() => {
			const script = document.createElement('script');

			script.type = "text/javascript";
			script.src = options.javascripturl;
			script.onload = function() {
				setLoaded(true);
			}
			document.getElementsByTagName('head')[0].appendChild(script);
		}, []);
		if (!loaded) {
			return <div></div>;
		}
    const isEmpty = children.length === 0;

    const isPristine = isEmpty && B.env === 'dev';

		return (
			<div className={[
              classes.container,
              ...[isEmpty ? classes.empty : ''],
              ...[isPristine ? classes.pristine : ''],
            ].join(' ')}>
				{children}
			</div>
		)
  })(),
  styles: B => theme => {
    const width = ['100%', '1200px', '960px', '720px', '540px'];

    const size = idx =>
      ['', 'small', 'medium', 'large', 'xLarge'][parseInt(idx, 10)];

    const getSpacing = (idx, device = 'mobileSpacing') =>
      idx === '0' ? '0rem' : theme.spacing[size(idx)][device];

		return {
    container: {
      flexGrow: 1,
      width: '100%',
      width: '100%',
      height: 'auto',
      maxWidth: ({ options: { maxRowWidth } }) =>
        width[parseInt(maxRowWidth, 10)],
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      backgroundPosition: 'left top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderWidth: 0,
      borderColor: 'transparent',
      borderStyle: 'none',
      borderRadius: 0,
      boxSizing: 'border-box',
      marginTop: getSpacing('0'),
      marginRight: ({ options: { maxRowWidth } }) =>
        maxRowWidth && maxRowWidth !== '0' ? 'auto' : getSpacing('0'),
      marginBottom: getSpacing('0'),
      marginLeft: ({ options: { maxRowWidth } }) =>
        maxRowWidth && maxRowWidth !== '0' ? 'auto' : getSpacing('0'),
      [`@media ${B.mediaMinWidth(768)}`]: {
        marginTop: getSpacing('0', 'tabletPortraitSpacing'),
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
        marginTop: getSpacing('0', 'tabletLandscapeSpacing'),
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
        marginTop: getSpacing('0', 'desktopSpacing'),
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
    empty: {
      alignItems: 'center',
      justifyContent: () => 'center',
      minHeight: '1px',
      height: '100vh',
      fontSize: '0.75rem',
      color: '#262A3A',
      textTransform: 'uppercase',
    },
    pristine: {
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
      backgroundColor: '#F0F1F5',
    },

  }},
}))();
