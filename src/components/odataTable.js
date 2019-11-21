(() => ({
  name: 'OdataTable',
  icon: 'DataTable',
  category: 'DATA',
  type: 'DATATABLE',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={classes.root}>
      {(() => {
        const { env, getProperty, GetAll, Link, useText } = B;
				const {data, setData} = useState(null);
        const take = parseInt(options.take, 10) || 50;

				const pollInterval = options.pollinterval * 1000;

        if (env === 'dev' || !options.model) {
          return (
            <div className={classes.table}>
              <div className={classes.row}>
                <div
                  className={[classes.column, classes.columnHeading].join(' ')}
                >
                  Heading
                </div>
              </div>
              {Array.from(Array(take).keys()).map(key => (
                <div key={key} className={classes.row}>
                  <div className={classes.column}>
                    You are either in the builder environment or the model id
                    you selected is incorrect
                  </div>
                </div>
              ))}
            </div>
          );
        }

        const [isTyping, setIsTyping] = useState(false);

        const {
          location: { search: querystring = '' },
          history,
        } = useRouter();

        const queryParams = new URLSearchParams(querystring);

        const FetchedTable = ({ children, variable, setData, pollincrement }) => {
					console.log('fetching');
					const [status, setStatus] = useState('IDLE');
					const [result, setResult] = useState(null);

					const endpointurl = useText(variable);

					useEffect( () => {
						setStatus('LOADING');

						fetch(endpointurl).then(response => response.json()).then(json => {
							setResult(json);
							setStatus('SUCCESS');

						});
					}, [endpointurl]);

					if(typeof children === 'function') {
						return <>{children({loading: status === 'LOADING' || status === 'IDLE',
					    error: status === 'ERROR',
						data: status === 'SUCCESS' && result})}</>
					}

					if(status == 'LOADING' || status == 'IDLE') {
					  return <div>LOADING DATA</div>;
					}

					if(status == 'ERROR') {
						return <div>ERROR LOADING DATA</div>;
					}

          return <div>{JSON.stringify(result)}</div>;
        };

				const columns = options.columns.split(',');
				const columnnames = options.columnnames.split(',');

				const [pollincrement, setPollincrement] = useState(1);

				function refreshTable() {
					setPollincrement(pollincrement + 1);
				}

				if(options.autorefresh) {
					const poller = setInterval(refreshTable, pollInterval);
				}

        return (
          <>
            <div className={classes.tableHeader}>
              <div>
                {options.title && (
                  <h1 className={classes.title}>{options.title}</h1>
                )}
              </div>
            </div>
							<div className={classes.table}>
					      <div onClick={() => setPollincrement(pollincrement + 1)}>REFRESH</div>
										<FetchedTable pollincrement={pollincrement} variable={options.endpoint} >{({loading, error, data}) => {
											if(loading) {
												return <LoadingTable numberOfItems={10} />
											}

											if(error) {
												return <div>ERROR</div>
											}

											return (<>
												<div className={classes.row}>
													{columnnames.map((col) => (
								            <div
								              className={[classes.column, classes.columnHeading].join(' ')}
															>{col}</div>
													))}
												</div>
	                      {data.value.map(value => (
	                        <div className={classes.row}>
														{columns.map((col) => (
															<div className={classes.column}>{(() => {
																try {
																	return eval('value.' + col)
																} catch(e) {

																}
															})()}</div>
														))}
	                        </div>
	                      ))}
												</>)
									}}</FetchedTable></div>


          </>
        );

        /* Private components */

        // eslint-disable-next-line no-shadow

        function LoadingTable({ numberOfItems }) {
          const skeletonHeadingClass = [
            classes.skeleton,
            classes.skeletonHeading,
          ].join(' ');

          return (
            <>
              <div className={classes.table}>
                <div className={classes.row}>
                  <div
                    className={[classes.column, classes.columnHeading].join(
                      ' ',
                    )}
                  >
                    <div className={skeletonHeadingClass} />
                  </div>
                  <div
                    className={[classes.column, classes.columnHeading].join(
                      ' ',
                    )}
                  >
                    <div className={skeletonHeadingClass} />
                  </div>
                  <div
                    className={[classes.column, classes.columnHeading].join(
                      ' ',
                    )}
                  >
                    <div className={skeletonHeadingClass} />
                  </div>
                </div>
                {Array.from(Array(numberOfItems).keys()).map(idx => (
                  <div key={idx} className={classes.row}>
                    <div className={classes.column}>
                      <div className={classes.skeleton} />
                    </div>
                    <div className={classes.column}>
                      <div className={classes.skeleton} />
                    </div>
                    <div className={classes.column}>
                      <div className={classes.skeleton} />
                    </div>
                  </div>
                ))}
              </div>

              <div className={classes.tableFooter}>
                <span className={classes.paginationInfoSkeleton} />
                <div className={classes.paginationSkeleton}>
                  <div className={classes.arrowSkeleton} />
                  <div className={classes.arrowSkeleton} />
                </div>
              </div>
            </>
          );
        }







      })()}
    </div>
  ),
  styles: B => theme => {
    const style = new B.Styling(theme);
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);

    return {
      root: {
        marginTop: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[3]),
      },
      tableHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '4rem',
      },
      title: {
        margin: 0,
        fontFamily: style.getFontFamily('Title2'),
        fontSize: style.getFontSize('Title2'),
        fontWeight: style.getFontWeight('Title2'),
        textTransform: style.getTextTransform('Title2'),
        letterSpacing: style.getLetterSpacing('Title2'),
        color: style.getFontColor('Title2'),
      },
      searchWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: [0, '0.5rem'],
        borderBottom: [1, 'solid', '#000'],
      },
      searchIcon: {
        fontSize: '1.25rem',
        marginRight: '1rem',
      },
      search: {
        padding: ['0.25rem', 0],
        fontSize: '1rem',
        border: 'none',
        outline: 'none',
      },
      table: {
        display: 'table',
        width: '100%',
        borderCollapse: 'collapse',
      },
      row: {
        display: 'table-row',
      },
      column: {
        display: 'table-cell',
        padding: '0.75rem 1rem 0.75rem 0',
        fontFamily: style.getFontFamily('Body1'),
        fontSize: style.getFontSize('Body1'),
        fontWeight: style.getFontWeight('Body1'),
        textTransform: style.getTextTransform('Body1'),
        letterSpacing: style.getLetterSpacing('Body1'),
        color: style.getFontColor('Body1'),
        borderBottom: `0.0625rem solid ${style.getColor('Accent1')}`,
        [`@media ${B.mediaMinWidth(768)}`]: {
          fontSize: style.getFontSize('Body1', 'Portrait'),
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
          fontSize: style.getFontSize('Body1', 'Landscape'),
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
          fontSize: style.getFontSize('Body1', 'Desktop'),
        },
      },
      columnHeading: {
        fontFamily: style.getFont('Body2').fontFamily,
        fontSize: style.getFont('Body2').Mobile,
        fontWeight: style.getFont('Body2').fontWeight,
        textTransform: style.getFont('Body2').textTransform,
        letterSpacing: style.getFont('Body2').letterSpacing,
        lineHeight: '1.2',
        color: style.getFont('Body2').color,
        [`@media ${B.mediaMinWidth(768)}`]: {
          fontSize: style.getFont('Body2').Portrait,
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
          fontSize: style.getFont('Body2').Landscape,
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
          fontSize: style.getFont('Body2').Desktop,
        },
        borderBottomWidth: '0.125rem',
      },
      columnHeadingLink: {
        display: 'flex',
        alignItems: 'center',
        color: style.getFont('Body2').color,
        whiteSpace: 'nowrap',
        textDecoration: 'none',
      },
      columnHeadingIcon: {
        position: 'relative',
        top: '0.0625rem',
        margin: [0, '0.5rem'],
      },
      skeleton: {
        height: `calc(${style.getFont('Body1').Mobile} * 1.2)`,
        [`@media ${B.mediaMinWidth(768)}`]: {
          height: `calc(${style.getFont('Body1').Portrait} * 1.2)`,
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
          height: `calc(${style.getFont('Body1').Landscape} * 1.2)`,
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
          height: `calc(${style.getFont('Body1').Desktop} * 1.2)`,
        },
      },
      skeletonHeading: {
        height: `calc(${style.getFont('Body2').Mobile} * 1.15)`,
        [`@media ${B.mediaMinWidth(768)}`]: {
          height: `calc(${style.getFont('Body2').Portrait} * 1.15)`,
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
          height: `calc(${style.getFont('Body2').Landscape} * 1.15)`,
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
          height: `calc(${style.getFont('Body2').Desktop} * 1.15)`,
        },
        backgroundColor: '#eee',
        borderRadius: 8,
        overflow: 'hidden',
        '&::after': {
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(90deg, #eee 25%, #fff 50%, #eee 75%)',
          backgroundSize: '200% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '150%',
          borderRadius: `calc(${style.getFont('Body2').Landscape} / 2)`,
          content: '""',
          animation: 'loading 1.5s infinite',
        },
      },
      '@keyframes loading': {
        to: {
          backgroundPositionX: '-150%',
        },
      },
      tableFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: ['0.75rem', 0],
      },
      paginationInfoSkeleton: {
        height: 'calc(1rem * 1.2)',
        width: 100,
        backgroundColor: '#eee',
        borderRadius: 'calc(1rem / 2)',
        '&::after': {
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(90deg, #eee 25%, #fff 50%, #eee 75%)',
          backgroundSize: '200% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '150%',
          borderRadius: 'calc(1rem / 2)',
          content: '""',
          animation: 'loading 1.5s infinite',
        },
      },
      pagination: {
        marginLeft: '1rem',
      },
      paginationSkeleton: {
        marginLeft: '1rem',
      },
      arrow: {
        padding: '1rem',
        fontSize: '1.625rem',
        color: '#000',
        textDecoration: 'none',
      },
      arrowDisabled: { color: '#ccc' },
      arrowSkeleton: {
        display: 'inline-block',
        height: 'calc(1.625rem * 1.2)',
        width: 'calc(1.625rem * 1.2)',
        margin: '0.75rem 0.375rem',
        backgroundColor: '#eee',
        borderRadius: '50%',
        '&::after': {
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(90deg, #eee 25%, #fff 50%, #eee 75%)',
          backgroundSize: '200% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '150%',
          borderRadius: '50%',
          content: '""',
          animation: 'loading 1.5s infinite',
        },
      },
      [`@media ${B.mediaMinWidth(768)}`]: {
        root: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Portrait'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Portrait'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Portrait'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Portrait'),
        },
      },
      [`@media ${B.mediaMinWidth(1024)}`]: {
        root: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Landscape'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Landscape'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Landscape'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Landscape'),
        },
      },
      [`@media ${B.mediaMinWidth(1200)}`]: {
        root: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Desktop'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Desktop'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Desktop'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Desktop'),
        },
      },
    };
  },
}))();
