(() => ({
  name: 'DataTableColumn',
  icon: 'DataTableColumnIcon',
  category: 'DATATABLE',
  type: 'DATATABLE_COLUMN',
  allowedTypes: ['TEXT', 'IMAGE', 'BUTTON'],
  orientation: 'VERTICAL',
  jsx: (
    <div className={classes.column}>
      {(() => {
        const { index, value, page, order, field } = parent;
        const { env, GetOneProvider, getProperty, Link } = B;

        if (env === 'dev' || !value) {
          return (
            <>
              <div className={classes.heading}>
                <span className={classes.headingContentWrapper}>
                  <span className={classes.headingContent}>
                    {options.headerText.length === 0 &&
                      options.property &&
                      '{property}'}
                    {options.headerText.length > 0
                      ? options.headerText[0]
                      : String.fromCharCode(160)}
                  </span>
                </span>
              </div>
              <div className={classes.content}>{children}</div>
            </>
          );
        }

        function TableHeading({ heading, search }) {
          const {
            location: { pathname },
          } = useRouter();

          const to = [
            pathname,
            '?',
            page ? `page=${page}&` : '',
            search ? `search=${search}&` : '',
            `sort=${heading}&`,
            order && field === heading
              ? `order=${order === 'desc' ? 'asc' : 'desc'}`
              : 'order=asc',
          ].join('');

          const headingText =
            options.headerText.length > 0
              ? options.headerText[0]
              : heading
                  .split('')
                  .map((char, charIndex) => {
                    const charUppercased = char.toUpperCase();

                    if (charIndex === 0) {
                      return charUppercased;
                    }

                    if (char === charUppercased) {
                      return ` ${char.toLowerCase()}`;
                    }

                    return char;
                  })
                  .join('');

          return (
            <div key={heading} className={classes.columnHeading}>
              <Link to={to} className={classes.columnHeadingLink}>
                {headingText}
                <i
                  className={[
                    classes.columnHeadingIcon,
                    field === heading &&
                      (order === 'desc'
                        ? 'zmdi zmdi-long-arrow-up'
                        : 'zmdi zmdi-long-arrow-down'),
                  ].join(' ')}
                />
              </Link>
            </div>
          );
        }

        const propertyName = options.property
          ? getProperty(options.property) && getProperty(options.property).name
          : '';

        const searchParam = '';

        return (
          <>
            {index === 0 ? (
              <>
                <div className={classes.heading}>
                  <span className={classes.headingContentWrapper}>
                    <span className={classes.headingContent}>
                      {propertyName && (
                        <TableHeading
                          heading={propertyName}
                          search={searchParam}
                        />
                      )}
                      {!propertyName && options.headerText.length > 0
                        ? options.headerText[0]
                        : String.fromCharCode(160)}
                    </span>
                  </span>
                </div>
                <div className={classes.content}>
                  <GetOneProvider value={value}>{children}</GetOneProvider>
                </div>
              </>
            ) : (
              <div className={classes.content}>
                <GetOneProvider value={value}>{children}</GetOneProvider>
              </div>
            )}
          </>
        );
      })()}
    </div>
  ),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      column: {
        display: 'table-cell',
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
      heading: {
        height: '2.625rem',
        padding: '0.75rem 1rem 0.75rem 0',
        boxSizing: 'border-box',
        fontFamily: style.getFont('Body2').fontFamily,
        fontSize: style.getFont('Body2').Mobile,
        fontWeight: style.getFont('Body2').fontWeight,
        textTransform: style.getFont('Body2').textTransform,
        letterSpacing: style.getFont('Body2').letterSpacing,
        lineHeight: '1.2',
        color: style.getFont('Body2').color,
        borderBottom: `0.125rem solid ${style.getColor('Accent1')}`,
        [`@media ${B.mediaMinWidth(768)}`]: {
          fontSize: style.getFont('Body2').Portrait,
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
          fontSize: style.getFont('Body2').Landscape,
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
          fontSize: style.getFont('Body2').Desktop,
        },
      },
      headingContentWrapper: {
        display: 'table',
        tableLayout: 'fixed',
        width: '100%',
      },
      headingContent: {
        display: 'table-cell',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      content: {
        padding: '0.75rem 1rem 0.75rem 0',
      },
    };
  },
}))();
