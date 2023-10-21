import * as React from 'react';
import Button from '@mui/material/Button';
import '../CSS/Contato.css';
import { Box, Modal } from '@mui/material';

const styleLarge = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: 'fit-content',
    bgcolor: '#141414',
    fontWeight: 500,
    color: '#f9f7fa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const styleSmall = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: 'fit-content',
    bgcolor: '#141414',
    fontWeight: 500,
    color: '#f9f7fa',
};

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button style={{ color: '#f9f7fa' }} onClick={handleClickOpen}>
                Contatos
            </Button>
            <Modal open={open} onClose={handleClose} id='Dialog' sx={window.innerWidth < 800 ? styleSmall : styleLarge}>
                <Box style={{
                    backgroundColor: 'transparent',
                    width: '100%',
                    paddingBottom: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                >
                    <div id="btn-close-area">
                        <button id='btn-close' type='button' onClick={handleClose}>
                            X
                        </button>
                    </div>
                    <div id="links-contatos">
                        <div className='links-modal'>
                            <a href="https://www.linkedin.com/in/amandaptela/" target="_blank" rel="noopener noreferrer" >
                                <img alt="" id="rede-1"
                                    src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=0077b5"
                                />
                            </a>
                        </div>
                        <div className='links-modal'>
                            <a href="https://discord.gg/7zKEsSYh" target="_blank" rel="noopener noreferrer">
                                <img alt="" id="rede-2"
                                    src="https://img.shields.io/badge/Discord-100000?style=for-the-badge&logo=discord&logoColor=white&color=7289da"
                                />
                            </a>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}