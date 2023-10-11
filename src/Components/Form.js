import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import '../CSS/Contato.css';
import { Box } from '@mui/material';

const style = {
    bgcolor: 'transparent',
    fontWeight: 500,
    color: '#f9f7fa',
    boxShadow: '2px 2px #3f3e3e',
    p: 4,
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
        <Box className='links-nav'>
            <Button style={{ color: '#f9f7fa' }} onClick={handleClickOpen}>
                Fale comigo
            </Button>
            <Dialog open={open} onClose={handleClose} id='Dialog' sx={style}>
                <DialogContent id="dialogContent">
                    <div id="btn-close-area"><button id='btn-close' type='button' onClick={handleClose}>X</button></div>
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
                </DialogContent>
            </Dialog>
        </Box>
    );
}