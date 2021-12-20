import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {
  Avatar,
  Box,
  Dialog,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Slide,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CustomizeButton from 'components/CustomizeButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Dante from 'Dante2';
import logo from 'image/logo.svg';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const typeOfDanteText = [
  'unstyled',
  'header-one',
  'header-two',
  'header-three',
  'blockquote',
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function WritePage(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [featuredImgs, setFeaturedImgs] = useState([]);
  const [idxFeaturedImg, setIdxFeaturedImg] = useState(-1);
  const [content, setContent] = useState({});

  const handleEditorsChange = editor => {
    setContent(editor.emitSerializedOutput());
  };

  const handlePublish = () => {
    const blockArr = content.blocks;
    let count = 0;
    const imgs = [];

    for (let i = 0; i < blockArr.length; i++) {
      if (blockArr[i].type === 'image') {
        imgs.push(blockArr[i]);
      } else if (typeOfDanteText.indexOf(blockArr[i].type) !== -1) {
        if (count === 1) {
          setSubTitle(blockArr[i].text.slice(0, 140));
          count++;
        } else if (count === 0) {
          setTitle(blockArr[i].text.slice(0, 100));
          count++;
        }
      }
    }

    setFeaturedImgs(imgs);
    if (imgs.length > 0 && idxFeaturedImg === -1) {
      setIdxFeaturedImg(0);
    } else if (imgs.length === 0) {
      setIdxFeaturedImg(-1);
    } else if (idxFeaturedImg > imgs.length - 1) {
      setIdxFeaturedImg(imgs.length - 1);
    }
  };

  const handleExport = () => {
    console.log(
      JSON.stringify({
        title,
        subTitle,
        img: featuredImgs[idxFeaturedImg]?.data.url,
        content,
      }),
    );
  };

  const [openPublishDialog, setOpenPublishDialog] = React.useState(false);

  const handleOpenPublishDialog = () => {
    setOpenPublishDialog(true);
  };

  const handleClosePublishDialog = () => {
    setOpenPublishDialog(false);
  };

  return (
    <>
      <Box
        sx={{
          height: '65px',
          width: '100%',
          position: 'fixed',
          top: '0',
          right: 0,
          left: 0,
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            maxWidth: '1032px',
            height: '65px',
            p: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            m: '0 auto',
          }}
        >
          <img src={logo} alt="logo" style={{ height: '50px' }} />
          <Stack direction="row" spacing="10px" sx={{ alignItems: 'center' }}>
            <CustomizeButton
              height="30px"
              backgroundColor="#ab92bf"
              color="#fff"
              fontSize="15px"
              variant="filled"
              onClick={() => {
                handlePublish();
                handleOpenPublishDialog();
              }}
            >
              Xuất bản
            </CustomizeButton>

            {/* <IconButton
              disableRipple
              onClick={e => {
                setAnchorEl(e.currentTarget);
              }}
            >
              <MoreHorizRoundedIcon />
            </IconButton> */}

            <IconButton
              disableRipple
              onClick={e => {
                setAnchorEl(e.currentTarget);
              }}
            >
              <NotificationsNoneOutlinedIcon />
            </IconButton>

            <Avatar
              onClick={e => {
                setAnchorEl(e.currentTarget);
              }}
              sx={{
                height: '35px',
                width: '35px',
                cursor: 'pointer',
              }}
            />
          </Stack>
        </Box>
      </Box>
      <Box sx={{ maxWidth: '740px', m: '0px auto', pt: '68px' }}>
        <Dante
          body_placeholder={'Viết ở đây'}
          // onChange={editor => handleEditorsChange(editor)}
          onChange={handleEditorsChange}
        />
      </Box>

      {/* publish dialog */}
      <Dialog
        fullScreen
        open={openPublishDialog}
        onClose={handleClosePublishDialog}
        TransitionComponent={Transition}
      >
        <Grid
          container
          sx={{ maxWidth: '1050px', m: '0px auto', pl: '20px', pr: '20px' }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{ display: 'flex', justifyContent: 'flex-end', pt: '20px' }}
            >
              <IconButton disableRipple onClick={handleClosePublishDialog}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mb="10px">
            <Typography variant="h5" sx={{ fontWeight: '600' }}>
              Xem trước bài viết
            </Typography>
          </Grid>
          <Grid item xs={6} sm={12} md={12} lg={6}>
            <Stack spacing="10px">
              {/* <img
                onClick={() => console.log('Publish')}
                style={{ height: '300px', objectFit: 'cover' }}
                src={
                  !!featuredImgs[idxFeaturedImg]
                    ? featuredImgs[idxFeaturedImg].data.url
                    : ''
                }
                alt="đâsd"
              ></img> */}
              {featuredImgs.length === 0 ? (
                <img
                  style={{
                    height: '300px',
                    objectFit: 'cover',
                    width: '100%',
                  }}
                  src="https://lh3.googleusercontent.com/proxy/mPNfQpPXs9ohG2kvbhY6cTFyL5TSw2qwZ6x1GFFwgVIAyPvngZxyLvC-HyAjEf_7jlW53WO7J3HTXRJsPO-DEFRYwNyDoeHY6fHfTCtTFo86T9mbb--prT67LHY"
                  alt=""
                />
              ) : (
                <Carousel
                  showArrows={true}
                  autoPlay={false}
                  onChange={idx => {
                    setIdxFeaturedImg(idx);
                  }}
                  index={idxFeaturedImg}
                >
                  {featuredImgs.map((item, idx) => (
                    <img
                      key={idx}
                      style={{
                        height: '300px',
                        objectFit: 'cover',
                        width: '100%',
                      }}
                      src={item.data.url}
                      alt=""
                    />
                  ))}
                </Carousel>
              )}
              <Typography variant="body1" align="center">
                Chọn ảnh hiển thị
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={1} sm={0} md={0} lg={1}></Grid>
          <Grid item xs={5} sm={12} md={12} lg={5}>
            <Stack spacing="15px">
              <TextField
                focused
                multiline
                value={title}
                onChange={e => setTitle(e.target.value)}
                color=""
                variant="standard"
                placeholder="Tiêu đề chính"
                inputProps={{
                  style: { fontWeight: 700, fontSize: 28 },
                }}
              />
              <TextField
                focused
                multiline
                value={subTitle}
                onChange={e => setSubTitle(e.target.value)}
                color=""
                variant="standard"
                placeholder="Tiêu đề phụ"
              />

              <CustomizeButton
                height="40px"
                width="100px"
                backgroundColor="#ab92bf"
                color="#fff"
                fontSize="15px"
                variant="filled"
                onClick={() => {
                  handleExport();
                }}
              >
                Xuất bản
              </CustomizeButton>
            </Stack>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

export default WritePage;
