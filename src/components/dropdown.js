(() => ({
  name: 'Dropdown',
  icon: 'DropdownIcon',
  category: 'FORM',
  type: 'DROPDOWN',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={[classes.formComponent, classes.formComponentEmpty].join(' ')}>
		  <label className={classes.formLabel}>{options.formComponentLabel}</label>
      {(() => {
				const {env, getProperty, GetAll} = B;
        const [value, setValue] = useState(options.formComponentValue);
        const [valid, setValid] = useState(true);
        const inputRef = React.createRef();

        const setLabelWidth = target => {
        };

        const unsetLabelWidth = target => {
        };

        React.useEffect(() => {
          if (
            (B.env === 'prod' && value) ||
            (B.env === 'dev' && options.formComponentValue)
          ) {
            setLabelWidth(inputRef.current);
          } else if (B.env === 'dev' && options.formComponentValue === '') {
            unsetLabelWidth(inputRef.current);
          }
          if (options.showValid && options.formComponentRequired) {
            setValid(!!value);
          }
        });

        const propertyNames = options.properties.map(id => {
          const property = getProperty(id);
          return property && property.name;
        });

        const valuePropertyNames = options.valueproperties.map(id => {
          const property = getProperty(id);
          return property && property.name;
        });


        return (
	        <div className={classes.formField}>
						<div className={classes.formBorder} />
						<span className={classes.arrowDown} />
            <select
              name={options.formComponentName}

              className={[
                classes.formControl,
                B.env === 'dev' ? classes.noEvents : '',
                value || (B.env === 'dev' && options.formComponentValue)
                  ? classes.hasValue
                  : '',
              ].join(' ')}

              onChange={e => {
                setValue(e.target.value);
                if (options.formComponentRequired) {
                  setValid(e.target.value !== '');
                }
                if (options.handleChange) {
                  options.handleChange(e);
                }
              }}
              onFocus={e => {
                setLabelWidth(e.target);
              }}
              onBlur={e => {
                if (!value) {
                  unsetLabelWidth(e.target);
                }
              }}
              defaultValue={options.formComponentValue}
              required={options.formComponentRequired}
            >
							<option value="">Blank option</option>
	            <GetAll
	              modelId={options.model}
							>
	              {({ loading, error, data }) => {
									if(loading) {
										return <option>LOADING DATA</option>

									}
	                const { totalCount, results } = data;
									return (<>{results.map(result => <option value={(() => {
											return valuePropertyNames.map(propertyname => result[propertyname]).join(' ')
										})()

									}>
										{(() => {
											return propertyNames.map(propertyname => result[propertyname]).join(' ')
										})()}
									</option>)}
									</>)
									// <option>NO DATA</option>

								}}
							</GetAll>
						</select>
          </div>

        );
      })()}
    </div>
  ),
  styles: B => t => {
		const base = t.base;
		const style = new B.Styling(t);
    return {
	    formComponent: {
	      extend: base,
	      marginBottom: '1.25rem',
	      '& $formField:hover': {
	        '& $formBorder': {
	          borderColor: t.colors.black,
	        },
	      },
	      '&:focus-within': {
	        '& $formLabel': {
	          color: t.colors.primary,
	        },
	        '& $formBorder': {
	          borderColor: t.colors.primary,
	          borderWidth: '0.125rem',
	        },
	      },
	      '&:focus-within $formField:hover': {
	        '& $formBorder': {
	          borderColor: t.colors.primary,
	        },
	      },
	    },
	    formLabel: {
	      display: 'block',
	      color: ({ options: { formInputLabelType } }) =>
					style.getFontColor(formInputLabelType) || t.colors.gray800,
	      fontFamily: ({ options: { formInputLabelType } }) =>
					style.getFontFamily(formInputLabelType),
	      fontSize: ({ options: { formInputLabelType } }) =>
					style.getFontSize(formInputLabelType),
	      fontWeight: ({ options: { formInputLabelType } }) =>
	        style.getFontWeight(formInputLabelType),
	      textTransform: ({ options: { formInputLabelType } }) =>
					style.getTextTransform(formInputLabelType),
	      letterSpacing: ({ options: { formInputLabelType } }) =>
					style.getLetterSpacing(formInputLabelType),
	      padding: '0 0.75rem 0.5rem',
	      '&:focus-within': {
	        color: t.colors.primary,
	      },
	    },
	    formField: {
	      position: 'relative',
        height: '3.5rem',

	    },
	    formFieldMask: {
	      '&::before': {
	        display: 'block',
	        content: '""',
	        position: 'absolute',
	        background: 'transparent',
	        top: 0,
	        bottom: 0,
	        right: 0,
	        left: 0,
	        userSelect: 'none',
	      },
	      '& $formControl': {
	        pointerEvents: 'none',
	      },
	    },
	    formBorder: {
	      position: 'absolute',
	      top: 0,
	      bottom: 0,
	      right: 0,
	      left: 0,
	      pointerEvents: 'none',
	      borderRadius: '0.25rem',
				border: '0.0625rem solid rgba(0,0,0,.38)',
	      zIndex: 1,
	    },
	    formControl: {
	      display: 'block',
	      width: '100%',
	      border: 0,
	      outline: 'none',
	      position: 'relative',
	      appearance: 'none',
	      background: 'none',
        height: '3.5rem',
				fontSize: '1rem',
				padding: ['0.75rem', '1rem', '0.875rem'],
	      '-moz-appearance': 'none',
	      '-webkit-appearance': 'none',
	      '-webkit-tap-highlight-color': 'transparent',
	      color: t.colors.dark,
	      '&::placeholder': {
	        color: t.colors.gray800,
	        opacity: 1,
	      },
	      '&:-moz-focusring': {
	        color: 'transparent',
	        textShadow: '0 0 0 #000',
	      },
				'&:focus - $formLabel': {
          transform: 'translateY(-130%) scale(0.75)',
          display: 'inline-block',
          position: 'relative',
          top: '1rem',
          bottom: 'auto',
          maxWidth: 'calc(100% / 0.75)',
          textOverflow: 'clip',
				}
	    },
	    arrowDown: {
	      position: 'absolute',
	      display: 'block',
	      right: '0.875rem',
	      bottom: '40%',
	      width: 0,
	      height: 0,
	      borderLeft: '0.25rem solid transparent',
	      borderRight: '0.25rem solid transparent',
	      borderTop: `0.3125rem solid ${t.colors.gray800}`,
	      zIndex: 1,
	    },


    };
  },
}))();
