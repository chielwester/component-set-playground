(() => ({
  name: 'ConfirmModal',
  icon: 'AlertIcon',
  category: 'CONTENT',
  type: 'CONFIRM_MODAL',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (
    <div>
      <button
        type="button"
        className={classes.button}
        aria-controls="dialog1"
        onClick={() =>
          typeof setState !== 'undefined' ? setState(state => !state) : true
        }
      >
        Open Dialog
      </button>

      <div
        id="dialog1"
        className={[
          classes.dialog,
          ...[
            typeof state !== 'undefined' && state
              ? classes.dialogIsVisible
              : '',
          ],
        ].join(' ')}
      >
        <div
          className={classes.content}
          role="alertdialog"
          tabIndex="-1"
          aria-labelledby="dialogTitle1"
          aria-describedby="dialogDescription1"
        >
          <div>
            <h4 id="dialogTitle1" className={classes.title}>
              Are you sure you want to permanently delete this file?
            </h4>
            <p id="dialogDescription1" className={classes.subtitle}>
              This action cannot be undone.
            </p>
          </div>

          <footer className={classes.footer}>
            <button
              type="button"
              className={[classes.button, classes.buttonModal].join(' ')}
              onClick={() =>
                typeof setState !== 'undefined' && setState(state => !state)
              }
            >
              Cancel
            </button>
            <button
              type="button"
              className={[
                classes.button,
                classes.buttonModal,
                classes.buttonDelete,
              ].join(' ')}
              onClick={() =>
                typeof setState !== 'undefined' && setState(state => !state)
              }
            >
              Delete
            </button>
          </footer>
        </div>
      </div>
    </div>
  ),
  styles: () => theme => ({
    button: {
      height: '2.25rem',
      minWidth: '4rem',
      padding: '0 1rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.colors.white,
      textTransform: 'uppercase',
      backgroundColor: theme.colors.primary,
      border: 'none',
      borderRadius: '0.25rem',
      boxSizing: 'border-box',
    },
    buttonModal: {
      marginLeft: '0.5rem',
      backgroundColor: theme.colors.medium,
    },
    buttonDelete: {
      backgroundColor: theme.colors.danger,
    },
    dialog: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1001,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity .3s, visibility 0s .3s',
      perspective: 800,
    },
    dialogIsVisible: {
      opacity: 1,
      visibility: 'visible',
      transition: 'none',
      '& $content': {
        transform: 'translateY(0)',
      },
    },
    content: {
      width: '32rem',
      padding: '2rem',
      backgroundColor: theme.colors.white,
      boxShadow:
        '0 0.0625rem 0.5rem rgba(0, 0, 0, .1), 0 1rem 3rem rgba(0, 0, 0, .1), 0 1.5rem 3.75rem rgba(0, 0, 0, .1)',
      borderRadius: '0 0 0.25rem 0.25rem',
      overflow: 'auto',
      willChange: 'transform',
      transition: 'transform .3s ease-out',
      transform: 'translateY(-100%)',
    },
    title: {
      marginTop: 0,
      marginBottom: '0.5rem',
    },
    subtitle: {
      margin: 0,
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '2rem',
    },
  }),
}))();
