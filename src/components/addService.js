import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import serviceStore from '../Store/serviceStore';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
const AddService = observer((props) =>{
  const [open, setOpen] = React.useState(false);
const[service,setService]=React.useState({
    id: 0,
    name: "",
    description: "",
    price: "",
    duration: "",
})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(feild,value)
  {
    let tempService=service
    tempService[feild]=value
    setService(tempService)
  }
   function handleClick()
  {
     console.log(service)
     serviceStore.insert(service)
    //להודיע למנהל אם השרות נמצא כבר הוא מחזיר 400 אז להודיע לו במקרה כזה
  }
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        AddService
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>AddService</DialogTitle>
        <DialogContent>
          <TextField autoFocus required margin="dense" id="name" label="Name" variant="standard"
         onChange={(e)=>{handleChange("name",e.target.value)}}/><br/><br/>
           <TextField autoFocus required margin="dense" id="description" label="Description" variant="standard"
         onChange={(e)=>{handleChange("description",e.target.value)}} /><br/><br/>
           <TextField autoFocus required margin="dense" id="price" label="Price" variant="standard"
          onChange={(e)=>{handleChange("price",e.target.value)}}  /><br/><br/>
           <TextField autoFocus required margin="dense" id="duration" label="Duration" variant="standard"
           onChange={(e)=>{handleChange("duration",e.target.value)}} /><br/><br/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClick}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
})
export default AddService