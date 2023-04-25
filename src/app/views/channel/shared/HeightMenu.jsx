import React, { useState, forwardRef } from 'react';
import {
  // ** Menu ~
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  // ** delete & edit menu ~
  Button,
  Slide,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  //  ** edit menu ~
  TextField,
  Divider
} from '@mui/material';

const ITEM_HEIGHT = 48;

// ** delete menu showup
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function HeightMenu() {
  // ** menu :
  const [clickMenu, setClickMenu] = React.useState(null);
  const open = Boolean(clickMenu);

  function clickMenuOption(event) {
    setClickMenu(event.currentTarget);
  }

  function closeMenuOption() {
    setClickMenu(null);
  }
  // ** delete
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  // ** edit
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  return (
    <Box>
      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={clickMenuOption}
      >
        <Icon>more_vert</Icon>
      </IconButton>

      <Menu
        open={open}
        id="long-menu"
        anchorEl={clickMenu}
        onClose={closeMenuOption}
        PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 } }}
        sx={{ marginLeft: -20 }}
      >
        {/* EDIT */}
        <MenuItem onClick={handleOpenEdit}>edit</MenuItem>
        <Dialog
          open={openEdit}
          onClose={handleCloseEdit}
          BackdropProps={{
            style: {
              backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.2)'
            }
          }}
        >
          <Box sx={{ color: '#0d47a1' }}>
            <DialogTitle>{'Edit Channel'}</DialogTitle>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src="/assets/images/sundrani-images/img_2.png"
                alt=""
                style={{
                  width: '100px',
                  height: '100px',
                  border: '3px solid red',
                  borderRadius: '50%'
                }}
              />
            </Box>
            <DialogContent>
              Channel Icon
              <TextField fullWidth autoFocus id="name" type="file" margin="dense" />
              Channel Name
              <TextField
                fullWidth
                autoFocus
                id="name"
                type="text"
                margin="dense"
                // variant="standard"
              />
            </DialogContent>

            <Divider />

            <DialogActions>
              <Button variant="outlined" color="secondary" onClick={handleCloseEdit}>
                Cancel
              </Button>

              <Button onClick={handleCloseEdit} color="primary">
                Update
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* DELETE */}
        <MenuItem onClick={handleOpenDelete}>delete</MenuItem>
        <Dialog
          open={openDelete}
          keepMounted
          onClose={handleCloseDelete}
          TransitionComponent={Transition}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          BackdropProps={{
            style: {
              backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.2)'
            }
          }}
          // BackdropProps ={{ style: { backgroundColor: 'rgba(52, 52, 52, 0.1)' }, }}
          // BackdropProps ={{ style: { backgroundColor: 'transparent' }, }}
        >
          <DialogTitle id="alert-dialog-slide-title">Confirm the action!</DialogTitle>
          <Box position="absolute" top={0} right={0}>
            <IconButton onClick={handleCloseDelete}>
              <Icon>close</Icon>
            </IconButton>
          </Box>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to delete this channel?
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleCloseDelete} color="secondary">
              CLOSE
            </Button>
            <Button onClick={handleCloseDelete} color="error">
              CONFIRM
            </Button>
          </DialogActions>
        </Dialog>
      </Menu>
    </Box>
  );
}
