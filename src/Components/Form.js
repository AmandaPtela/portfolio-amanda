import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../CSS/Form.css';
import { Box, FormHelperText } from '@mui/material';
/* import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'useramanda',
	password: 'passwordptela',
	host: 'smtp.mandaptela@gmail.com',
	ssl: true,
}); */

const style = {
    bgcolor: '#141414',
    borderRadius: '5ch',
    fontWeight: 500,
    fontSize: '25px',
    color: '#f9f7fa',
    p: 4,
    display: "flex",
    alignItems: 'center',
    height: '10%',
    width: 'fit-content',
    padding: '20px'
};
/* const [message, setMesage] = React.useState('');
const [fromEmail, setFromEmail] = React.useState('');
const [subject, setSubject] = React.useState(''); */

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

/*     const handleSend = () => {
        client.send(
            {
                text: message,
                from: fromEmail,
                to: client.email,
                subject: subject,
            },
            (err, message) => {
                console.log(err || message);
            }
        );
    } */

    return (
        <Box sx={style}>
            <Button variant="dense" onClick={handleClickOpen}>
                Send me an Email
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form method='get' action="mailto:mandaptela@gmail.com" style={ window.innerWidth < 800 ? { width: '400px', backgroundColor: 'whitesmoke' } : { width: '600px', backgroundColor: 'whitesmoke' }} >
                    <DialogTitle>
                        Contact by email</DialogTitle>
                    <DialogContent id="dialogContent">
                        <div>
                            <FormHelperText>
                                Please enter your email address here
                            </FormHelperText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <FormHelperText>
                                Please enter your message here
                            </FormHelperText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Message"
                                type="text"
                                fullWidth
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button /* style={ { color: '#5f0979' }} */ onClick={handleClose}>Cancel</Button>
                        <Button /* style={ { color: '#5f0979' }} */ type="submit" onClick={handleClose}>
                            Send email
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
}