import React from './node_modules/react';
import Button from './node_modules/@material-ui/core/Button';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Modal from './node_modules/@material-ui/core/Modal';
import LeaseFormMaterial from './LeaseFormMaterial';
import Container from './node_modules/@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container maxWidth='sm'>
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal open={open} onClose={handleClose}>
          <div className={classes.paper}>
            <h2>Add a lease</h2>
            <p>
              <LeaseFormMaterial />
            </p>
          </div>
        </Modal>
      </Container>
    </div>
  );
}
