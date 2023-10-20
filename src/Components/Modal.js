import React from 'react';
import '../CSS/Modal.css';
import { Modal, Button, Box } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: 'fit-content',
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
        <Box sx={style} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <div id="btn-close-area"><button id='btn-close' type='button' onClick={handleClose}>X</button></div>
          <div id='links-modal'>
            <p>{desc}</p>
            <div id="links-img">
              <a href={urlRepo} target="_blank" rel="noopener noreferrer" ><GitHubIcon style={{color: 'white'}} /></a>
              <a href={urlDeploy} target="_blank" rel="noopener noreferrer"><LaunchIcon style={{color: 'white'}} /></a>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}