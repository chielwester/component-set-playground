(() => ({
  name: 'Image',
  icon: 'ImageIcon',
  category: 'CONTENT',
  type: 'IMAGE',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (
    <figure
      className={[classes.figure, !options.imgUrl ? classes.empty : ''].join(
        ' ',
      )}
    >
      {options.imgUrl ? (
        <img
          className={classes.image}
          src={options.imgUrl}
          alt={options.imgAlt ? options.imgAlt : ' '}
        />
      ) : (
        <div className={classes.placeholderWrapper}>
          <svg className={classes.placeholder} viewBox="0 0 86 48">
            <rect x="19.5" y="8.5" rx="2" />
            <path d="M61.1349945 29.020979v3.9160839H25v-2.5379375l6.5998225-4.9892478 5.6729048 4.2829541 13.346858-11.2981564L61.1349945 29.020979zm-22.5-10.270979c0 1.0416667-.3645833 1.9270833-1.09375 2.65625S35.9266612 22.5 34.8849945 22.5s-1.9270833-.3645833-2.65625-1.09375-1.09375-1.6145833-1.09375-2.65625.3645833-1.9270833 1.09375-2.65625S33.8433278 15 34.8849945 15s1.9270833.3645833 2.65625 1.09375 1.09375 1.6145833 1.09375 2.65625z" />
          </svg>
        </div>
      )}
    </figure>
  ),
  styles: () => ({ base }) => ({
    figure: {
      extend: base,
      fontSize: 0,
      margin: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    empty: {
      position: 'relative',
      backgroundColor: '#F0F1F5',
      border: `0.0625rem dashed #AFB5C8`,
      paddingBottom: ({ options: { imgUrl } }) => !imgUrl && '62.5%',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    placeholderWrapper: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    placeholder: {
      maxHeight: '100%',
      width: 86,
      height: 48,

      '& > rect': {
        stroke: '#AFB5C8',
        fill: '#F7F8FA',
        width: 47,
        height: 31,
      },

      '& > path': {
        fill: '#666D85',
      },
    },
  }),
}))();
