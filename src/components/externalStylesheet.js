(() => ({
  name: 'ExternalStylesheet',
  icon: 'RowIcon',
  category: 'LAYOUT',
  type: 'ROW',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
	jsx: (() => {
    return (<div className={classes.root}></div>)
	})(),
	styles: B => theme => {
		console.log(B);
		return {
			'@global': {
				'@import': 'url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")'
			 },
			 root: {
			 	 height: 20,
				 width: B.env === 'dev' ? '100%' : 0,
				 border: '1px solid black'

			 }
		 }

	}
}))();
