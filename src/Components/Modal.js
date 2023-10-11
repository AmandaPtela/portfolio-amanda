import React from 'react';
import '../CSS/Modal.css';
import {Modal, Button, Box} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '85%',
  bgcolor: '#141414',
  fontWeight: 500,
  color: '#f9f7fa',
  boxShadow: '2px 2px #3f3e3e',
};

export default function BasicModal(title, desc, urlDeploy, urlRepo, image) {
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
      >
        <Box sx={style} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: '10px'}}>
        <div id="btn-close-area"><button id='btn-close' type='button' onClick={handleClose}>X</button></div>
        
          <img height="80%" width="95%" src={image} alt={title}/>
          <div id='links-modal'>
            <p>{desc}</p>
            <span><a href={urlRepo} target="_blank" rel="noopener noreferrer">Clique para acessar o repositório do projeto</a></span>
            <span><a href={urlDeploy} target="_blank" rel="noopener noreferrer">Clique para acessar o projeto</a></span>
          </div>
        </Box>
      </Modal>
    </div>
  );
}