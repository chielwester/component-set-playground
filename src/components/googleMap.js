(() => ({
  name: 'GoogleMap',
  icon: 'RowIcon',
  category: 'LAYOUT',
  type: 'GOOGLEMAP',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={classes.container}>
      {React.createElement(() => {
				const {env, GetAll, Link} = B;
        const isEmpty = children.length === 0;
				const [page, setPage] = useState(1);
        const isPristine = B.env === 'dev';
				const take = 50;
				const defaultProps = {
			    center: {lat: 59.95, lng: 30.33},
			    zoom: 11
			  };

				function createMapOptions(map) {
					return {
						streetViewControl: true,
						mapTypeControl: true,
						scaleControl: true,
						minZoom: 1,
						maxZoom: 30,
						MapTypeControlOptions: {
				      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
				      mapTypeIds: ['roadmap', 'terrain']
						}
					}
				}

		    const variables = Object.assign(
		      {
		        skip: page ? (page - 1) * take : 0,
		        take,
		      }
				);

        return (
          <section
            className={[
              classes.row,
              ...[isEmpty ? classes.empty : ''],
              ...[isPristine ? classes.pristine : ''],
            ].join(' ')}
          >
						{(() => {
							if(B.env == 'dev') {
								return <div>GOOGLE MAP</div>;
							} else {
								return (
									<div className={classes.row}>
										<div onClick={() => {setPage(page + 1); return false}}>Load more locations</div>
										<GetAll
											modelId={options.model}
											__SECRET_VARIABLES_DO_NOT_USE={variables}
											skip={page ? (page - 1) * take : 0}
									    take={take}>
									      {({ loading, error, data }) => {
													if(loading) {
														return <div className={[classes.row, classes.empty, classes.pristine].join(' ')}></div>
													}

													if(error) {
														return <div>ERROR</div>
													}
													const {dataCount, results} = data;
													const center = {lat: parseFloat(results[0].latitude), lng: parseFloat(results[0].longitude)}

													return (
														<GoogleMapReact
															apiKey={options.apikey}
											        defaultCenter={center}
											        defaultZoom={defaultProps.zoom}
															options={createMapOptions}>
																{results.map(result => {
																	return <div className={classes.marker} lat={result.latitude} lng={result.longitude} onClick={() => {window.location.hash = "/location/" + result.id}}></div>})}
														</GoogleMapReact>
													)
													}}
									   </GetAll>

				      </div>)

							}
						})()}
          </section>
        );
      })}
    </div>
  ),
  styles: B => theme => {
    const width = ['100%', '1200px', '960px', '720px', '540px'];

	  const size = idx =>
	    ['', 'small', 'medium', 'large', 'xLarge'][parseInt(idx, 10)];

	  const getSpacing = (idx, device = 'mobileSpacing') =>
	    idx === '0' ? '0rem' : theme.spacing[size(idx)][device];

    return {
      container: {
        width: '100%',
				height: ({options: {height}}) => height,
        maxWidth: ({ options: { maxRowWidth } }) =>
          width[parseInt(maxRowWidth, 10)],
        backgroundColor: 'transparent',
        backgroundImage: props => props.options.backgroundUrl,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 125%',
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
	      height: '100%',
	      fontSize: '0.75rem',
	      color: '#262A3A',
	      textTransform: 'uppercase',
	    },
	    pristine: {
	      borderWidth: '0.0625rem',
	      borderColor: '#AFB5C8',
	      borderStyle: 'dashed',
				opacity: '0.5',
	      backgroundColor: '#F0F1F5',
	    },
			marker: {
				width: 50,
				height: 50,
				background: 'url(https://assets.bettyblocks.com/250200614e984c5499364bb9b7f7a442_assets/files/building_icon.png)',
				backgroundSize: 'cover',
				position: 'absolute',
				top: -25,
				left: -25
			}
		}
  }
}))();
