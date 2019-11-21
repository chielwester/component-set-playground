(() => ({
  name: 'HiddenInput',
  icon: 'TextInputIcon',
  category: 'FORM',
  type: 'HIDDEN_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={B.env === 'dev' && (classes.root)}>
      {(() => {
				const {env, useText} = B;
        const [value, setValue] = useState(options.formComponentValue);
        const [valid, setValid] = useState(true);
        const inputRef = React.createRef();
				const defaultValue = B.env === 'prod' && options.variable.length > 0 ? <B.Text value={options.variable} /> : null
				const formHandle = options.handleHiddenInput;

				if(env === 'dev') {
					return <div>HIDDEN INPUT</div>;
				}

				useEffect(() => {
					if(options.handleHiddenInput && inputRef.current) {
						options.handleHiddenInput({name: options.formComponentName, value: inputRef.current.value})
					}
				}, [])

        const HiddenInput = ({ variable }) => {
					if(B.env === 'dev') {
						return <input type="text" className={classes.formControl}/>
					}
          const text = useText(variable);
          return <input defaultValue={text} type='hidden' name={options.formComponentName} ref={inputRef} />;
        };


        return (
					<HiddenInput variable={options.variable} />
        );
      })()}
    </div>
  ),
  styles: B => t => {
    const style = new B.Styling(t);

    return {
      root: {
        display: 'block',
        width: '100%',
				height: 80,
				border: '1px solid black',
        marginBottom: '1rem',
      },
      formField: {
        display: 'flex',
        position: 'relative',
        height: '3.5rem',
        borderRadius: ['0.25rem', '0.25rem', '0', '0'],
        boxSizing: 'border-box',
      },
      formControl: {
        display: 'flex',
        alignSelf: 'flex-end',
        width: '100%',
        minWidth: '20rem',
        padding: ['0.75rem', '1rem', '0.875rem'],
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '1rem',
        lineHeight: '1.75rem',
        fontWeight: '400',
        letterSpacing: '.009375em',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        boxSizing: 'border-box',

        '&:hover + $borders > $border': {
          borderColor: 'rgba(0,0,0,.87)',
        },

        '&:focus, &:active': {
          outline: 'none',
        },

        '&:focus + $borders > $border, &:active + $borders > $border': {
          borderWidth: '0.125rem',
          borderColor: style.getColor('Primary'),
        },

        '&:focus + $borders > $borderMiddle, &:active + $borders > $borderMiddle, &$hasValue + $borders > $borderMiddle': {
          borderTop: 'none',
        },

        '&:focus + $borders $formLabel, &:active + $borders $formLabel': {
          color: style.getColor('Primary'),
        },

        '&:focus + $borders $formLabel, &:active + $borders $formLabel, &$hasValue + $borders $formLabel': {
          transform: 'translateY(-130%) scale(0.75)',
          display: 'inline-block',
          position: 'relative',
          top: '1rem',
          bottom: 'auto',
          maxWidth: 'calc(100% / 0.75)',
          textOverflow: 'clip',
        },
      },
      invalid: {
        '& $border': {
          borderColor: style.getColor('Danger'),
        },
        '& $formLabel': {
          color: style.getColor('Danger'),
        },
        '& $formControl:focus + $borders > $border, & $formControl:active + $borders > $border': {
          borderWidth: '0.125rem',
          borderColor: style.getColor('Danger'),
        },
        '& $formControl:focus + $borders $formLabel, & $formControl:active + $borders $formLabel': {
          color: style.getColor('Danger'),
        },
        '& $helperText': {
          color: style.getColor('Danger'),
        },
      },
      noEvents: {
        pointerEvents: 'none',
      },
      hasValue: {
        width: '100%',
      },
      borders: {
        display: 'flex',
        position: 'absolute',
        right: 0,
        left: 0,
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        textAlign: 'left',
        pointerEvents: 'none',
      },
      border: {
        boxSizing: 'border-box',
        height: '100%',
        borderTop: '0.0625rem solid rgba(0,0,0,.38)',
        borderBottom: '0.0625rem solid rgba(0,0,0,.38)',
        pointerEvents: 'none',
      },
      borderStart: {
        width: '0.75rem',
        borderRadius: ['0.25rem', '0', '0', '0.25rem'],
        borderLeft: '0.0625rem solid rgba(0,0,0,.38)',
        borderRight: 'none',
      },
      borderMiddle: {
        borderTop: '0.0625rem solid rgba(0,0,0,.38)',
        borderBottom: '0.0625rem solid rgba(0,0,0,.38)',
        flex: '0 0 auto',
        width: 'auto',
        maxWidth: 'calc(100% - 0.75rem * 2)',
      },
      borderEnd: {
        flexGrow: 1,
        borderRadius: ['0', '0.25rem', '0.25rem', '0'],
        borderLeft: 'none',
        borderRight: '0.0625rem solid rgba(0,0,0,.38)',
      },
      formLabel: {
        fontFamily: 'Roboto,sans-serif',
        fontSize: '1rem',
        lineHeight: '1.15rem',
        fontWeight: '400',
        padding: ['0', '0.375rem'],
        color: 'rgba(0,0,0,.6)',
        letterSpacing: '.009375em',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        transformOrigin: 'left top',
        whiteSpace: 'nowrap',
        cursor: 'text',
        overflow: 'hidden',
        display: 'inline-block',
        position: 'relative',
        top: '1.0625rem',
        bottom: 'auto',
        maxWidth: '100%',
        willChange: 'transform',
        textOverflow: 'ellipsis',
        transition:
          'transform .15s cubic-bezier(.4,0,.2,1), color .15s cubic-bezier(.4,0,.2,1), top .15s cubic-bezier(.4,0,.2,1)',
      },
      helperLine: {
        paddingRight: '1rem',
        paddingLeft: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      },
      helperText: {
        fontSize: '0.75rem',
        fontWeight: '400',
        letterSpacing: '.0333333333em',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        display: 'block',
        lineHeight: 'normal',
        margin: '0',
        color: 'rgba(0,0,0,.6)',

        '&::before': {
          display: 'inline-block',
          width: '0',
          height: '1rem',
          content: '""',
          verticalAlign: '0',
        },
      },
    };
  },
}))();
