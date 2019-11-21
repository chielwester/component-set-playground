(() => ({
  name: 'Accordion',
  icon: 'AccordionIcon',
  category: 'LAYOUT',
  type: 'ACCORDION',
  allowedTypes: ['ACCORDION_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={[children.length === 0 ? classes.empty : ''].join(' ')}>
      {(() => {
        const [itemActive, setItemActive] = useState(
          parseInt(options.selectedItem, 10),
        );

        const ref = React.createRef();

        const selectItem = itemIndex => {
          const items = [].slice.call(
            ref.current.querySelectorAll('[data-type="accordion-item"]'),
          );

          const openItem = itemIndex === itemActive ? null : items[itemIndex];
          const closeItem = itemActive < 0 ? null : items[itemActive];

          const paddingTop = !closeItem
            ? 0
            : parseInt(window.getComputedStyle(closeItem).paddingTop, 10);
          const paddingBottom = !closeItem
            ? 0
            : parseInt(window.getComputedStyle(closeItem).paddingBottom, 10);

          // animate the new item to its height
          if (openItem) {
            openItem.style.height = `${openItem.scrollHeight}px`;
          }

          // animate the current item from its height to 0 (minus the top/bottom padding)
          if (closeItem) {
            closeItem.style.height = `${closeItem.scrollHeight -
              paddingTop -
              paddingBottom}px`;
            setTimeout(() => {
              closeItem.style.height = 0;
            }, 10);
          }

          const handleOpenItemAnimationEnd = () => {
            openItem.removeEventListener(
              'transitionend',
              handleOpenItemAnimationEnd,
            );
            openItem.style.height = null;
          };

          const handleCloseItemAnimationEnd = () => {
            closeItem.removeEventListener(
              'transitionend',
              handleCloseItemAnimationEnd,
            );
            closeItem.style.height = null;
          };

          // remove inline styling on animation end
          if (openItem) {
            openItem.addEventListener(
              'transitionend',
              handleOpenItemAnimationEnd,
            );
          }
          if (closeItem) {
            closeItem.addEventListener(
              'transitionend',
              handleCloseItemAnimationEnd,
            );
          }

          setItemActive(itemIndex === itemActive ? -1 : itemIndex);
        };
        const childrenWithProps = React.Children.map(
          children,
          (child, index) => {
            const totalOptions = child.props.options || {};
            const isSelected =
              typeof itemActive !== 'undefined' && itemActive !== null
                ? itemActive === index
                : parseInt(options.selectedItem, 10) === index;

            totalOptions.selectItem = selectItem;
            totalOptions.itemIndex = index;
            totalOptions.selected = isSelected;

            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={`tab_${index}`}
                className={[
                  isSelected ? classes.selected : '',
                  isSelected && B.env === 'dev' ? classes.heightHelper : '',
                  isSelected && B.env !== 'dev' ? classes.animatedMargin : '',
                ].join(' ')}
              >
                {React.cloneElement(child, {
                  options: { ...totalOptions },
                })}
              </div>
            );
          },
        );

        return children.length > 0 ? (
          <div ref={ref}>{childrenWithProps}</div>
        ) : (
          'Accordion'
        );
      })()}
    </div>
  ),
  styles: () => () => ({
    selected: {
      display: 'block',
      '& > div': {
        marginBottom: '1rem',
        marginTop: '1rem',
      },
      '&:first-child > div': {
        marginTop: 0,
      },
      '&:last-child > div': {
        marginBottom: 0,
      },
      '& [data-type="accordion-title"]': {
        height: '4rem',
        '& > span + span': {
          marginTop: '0.25rem',
          transform: 'rotate(180deg)',
        },
      },
    },
    animatedMargin: {
      '& > div': {
        transition: 'margin 225ms cubic-bezier(.4,0,.2,1)',
      },
    },
    heightHelper: {
      '& [data-type="accordion-item"]': {
        height: 'auto',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        maxHeight: '50rem',
      },
    },
    empty: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '4rem',
      width: '100%',
      fontSize: '0.75rem',
      color: '#262A3A',
      textTransform: 'uppercase',
      boxSizing: 'border-box',
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
      backgroundColor: '#F0F1F5',
    },
  }),
}))();
