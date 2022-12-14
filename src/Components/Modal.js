import React from 'react';
import './CSS/Modal.css';
import {Modal, Typography, Button, Box} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'black',
  color: 'white',
  boxShadow: '2px 2px white',
  p: 4,
};

export default function BasicModal(title, desc, urlDeploy, urlRepo, img) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ver projeto</Button>
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
              <span>Repositório: <a href={urlRepo}>{urlRepo}</a></span>
              <span>Projeto: <a href={urlDeploy}>{urlDeploy}</a></span>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}