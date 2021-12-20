import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Fade, Stack, TextField } from '@mui/material';

export default function NewColection(props) {
  const { onClose, ...other } = props;
  const [openDes, setOpenDes] = React.useState(false);
  const openDescription = () => setOpenDes(true);
  const closeDescription = () => setOpenDes(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    height: '60%',
    bgcolor: 'background.paper',
    boxShadow: 3,
    p: 4,
  };

  return (
    <div>
      <Modal
        keepMounted
        open={true}
        onClose={onClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        {...other}
      >
        <Fade in={true}>
          <Container maxWidth="md" sx={style}>
            <Stack
              direction="column"
              alignItems="stretch"
              sx={{ height: '100%', padding: '2rem 0' }}
            >
              <Typography
                id="spring-modal-title"
                variant="h4"
                component="h4"
                sx={{
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                Create new list
              </Typography>

              <Container
                maxWidth="xs"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  paddingTop: '3rem',
                }}
              >
                <Box>
                  <TextField
                    variant="standard"
                    placeholder="Give it a name"
                    fullWidth
                    sx={{ marginBottom: '1.5rem' }}
                  />
                  {!openDes && (
                    <Button
                      sx={{
                        border: 'none',
                        color: '#1a8917',
                        textTransform: 'none',
                        padding: 0,
                        fontSize: '1rem',
                        fontWeight: 400,
                        margin: '0',
                        textAlign: 'start',
                      }}
                      onClick={openDescription}
                    >
                      Add a description
                    </Button>
                  )}
                  {openDes && (
                    <TextField
                      variant="standard"
                      placeholder="Description"
                      fullWidth
                      sx={{ marginBottom: '1.5rem' }}
                    />
                  )}
                  {openDes && (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Button
                        sx={{
                          border: 'none',
                          color: '#1a8917',
                          textTransform: 'none',
                          padding: 0,
                          fontSize: '1rem',
                          fontWeight: 400,
                          margin: '0',
                          textAlign: 'end',
                        }}
                        onClick={closeDescription}
                      >
                        Remove description
                      </Button>
                    </Box>
                  )}
                </Box>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    onClick={onClose}
                    sx={{
                      padding: '0.25rem 1rem',
                      border: '1px solid #3a3838',
                      borderRadius: '20px',
                      color: '#3a3838',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 400,
                      margin: '0 1rem',
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={onClose}
                    sx={{
                      padding: '0.25rem 1rem',
                      border: '1px solid #1a8917',
                      backgroundColor: '#1a8917',
                      borderRadius: '20px',
                      color: '#ffffff',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: '400',
                    }}
                  >
                    Create
                  </Button>
                </Stack>
              </Container>
            </Stack>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}
