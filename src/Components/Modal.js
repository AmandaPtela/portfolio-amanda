import React from 'react';
import '../CSS/Modal.css';
import {Modal, Typography, Button, Box} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#141414',
  fontWeight: 500,
  color: '#f9f7fa',
  boxShadow: '2px 2px #3f3e3e',
  p: 4,
};

export default function BasicModal(title, desc, urlDeploy, urlRepo, img) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button id="modal-button" onClick={handleOpen}>Ver projeto</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="btn-close-area"><button id='btn-close' type='button' onClick={handleClose}>X</button></div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={img} alt={title}/>
            <p>{desc}</p>
            <div id='links-modal'>
              <span><a href={urlRepo}>Ir para GitHub</a></span>
              <span><a href={urlDeploy}>Deploy</a></span>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}