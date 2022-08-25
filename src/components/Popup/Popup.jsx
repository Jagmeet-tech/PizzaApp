import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import RadioButton from '../RadioButton/RadioButton';
import Checkbox from '../Checkbox/Checkbox';
import "./Popup.css";
import { useDispatch } from 'react-redux';
import { setItem } from '../../redux/actions/actions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(0),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{m: 0, p: 1 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 2,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Popup({popup,setPopup,item}) {
  let dispatch = useDispatch();
  let [details,setDetails] = React.useState({});
 
  const handleClickOpen = () => {
    setPopup(true);
  };
  const handleClose = () => {
    setPopup(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={popup}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <img className = "logo" src='https://acegif.com/wp-content/gifs/pizza-64.gif'/>
          Mention the Pizza Details!!!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <RadioButton item = {item} details= {details} setDetails = {setDetails}/>
          <Checkbox item = {item} details= {details} setDetails = {setDetails}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>{
            let {toppings,size} = details;
            if(toppings.length == 0){
              toppings = ["Onion"]
            }
            if(!size)
              size = "Regular";
              
            let obj = {...item,toppings:toppings,size:size};
            dispatch(setItem(obj))
            handleClose()
          }}>
            ADD
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
