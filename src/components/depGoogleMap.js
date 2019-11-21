(() => ({
  name: 'DepGoogleMap',
  icon: 'ImageIcon',
  category: 'LAYOUT',
  type: 'GOOGLEMAP',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, GetAll, Link } = B;
		const [loaded, setLoaded] = useState(false);
		const [page, setPage] = useState(1);
		const take = 50;
		const [locations, setLocations] = useState('[]');

		useEffect(() => {
			const script = document.createElement('script');

			script.type = "text/javascript";
			script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBNx0HzwH_CuFDzzWyPsz6zLepU3KrAy6M";
			script.onload = function() {
				setLoaded(true);
			}
			document.getElementsByTagName('head')[0].appendChild(script);
		}, []);

		const refChanged = useCallback(node => {
			if(node) {
				var map = new google.maps.Map(node, {
					center: {lat: parseFloat(options.startlat), lng: parseFloat(options.startlong)},
					zoom: parseInt(options.zoom)
				});

				let locs = [];
				if(parent && parent.record) {
					locs = [parent.record];
					map.setCenter(new google.maps.LatLng(parent.record.latitude, parent.record.longitude));
				} else {

					locs = JSON.parse(locations);
				}

				locs.map(result => {
				  const marker = new google.maps.Marker({
				    position: new google.maps.LatLng(parseFloat(eval(options.latitude)), parseFloat(eval(options.longitude))),
				    map: map,
				    title: result.name,
				  });

					const infowindow = new google.maps.InfoWindow({
				    content: eval(options.markertext)
				  });

					marker.addListener('mouseover', function() {
				    infowindow.open(map, marker);
				  });

					marker.addListener('click', function() {
				    window.location.hash = "/location/" + result.id
				  });

				  marker.addListener('mouseout', function() {
				    infowindow.close();
				  });
				});
			}
		}, [locations]);

		if (!loaded) {
			return <div><div className={classes.map}></div></div>;
		}

    const variables = Object.assign(
      {
        skip: page ? (page - 1) * take : 0,
        take,
      }
		);

	  return (
			<div className={classes.container}>
				<div onClick={() => {setPage(page + 1); return false}}>Load more locations</div>

				{(() => {
					console.log("RENDER");
					if(parent && parent.record) {
						return (<div />);
					} else {
						return <div><GetAll modelId={options.model} __SECRET_VARIABLES_DO_NOT_USE={variables}>
				      {({ loading, error, data }) => {
								if(loading) {
									return <div>LOADING MAP DATA</div>
								}

								if(error) {
									return <div>ERROR</div>

								}

								const {dataCount, results} = data;
								console.log(page);

								if(page > 1) {
									const currentLocations = JSON.parse(locations);

									setLocations(JSON.stringify(results));
								} else {
									setLocations(JSON.stringify(results));
								}
								// console.log(locations);
								//
								//


								return (<div></div>)
							}}
				    </GetAll></div>

					}
					return <div>SOMETHING HERE</div>
				})()}
				<div className={classes.map} ref={refChanged}></div>
		  </div>
		)
  })(),
  styles: B => () => ({
    container: {
      flexGrow: 1,
      width: '100%',
      boxSizing: 'border-box',
			backgroundColor: '#F0F1F5',
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
    },
		map: {
			width: '100%',
			height: 400
		}
  }),
}))();
