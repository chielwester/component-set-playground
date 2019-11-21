(() => ({
  name: 'Partial',
  type: 'PARTIAL',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div>
      {(() => {
        const { env, getEndpoint } = B;
        const { pageId } = options;

        if (env === 'prod') {
          const endpoint = getEndpoint(pageId);

          if (endpoint) {
            const { asset } = endpoint;

            return React.createElement(
              React.lazy(() => System.import(`./assets/${asset}`)),
            );
          }
        }

        return <div className={classes.root} />;
      })()}

    </div>
  ),
  styles: () => () => ({
    root: {
      height: '100px',
      backgroundColor: 'grey',
    },
  }),
}))();
