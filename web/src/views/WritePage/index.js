import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {
  Avatar,
  Box,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Link,
  MenuItem,
  Slide,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CustomizeButton from 'components/CustomizeButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Dante from 'Dante2';
import logo from 'image/logo.svg';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles, styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Setting from 'views/userHomePage/NavBar/Setting/Setting';
import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Notification from 'views/userHomePage/NavBar/notification/notification';

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
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [featuredImgs, setFeaturedImgs] = useState([]);
  const [idxFeaturedImg, setIdxFeaturedImg] = useState(-1);
  const [content, setContent] = useState({});
  const [openSearch, setOpenSearch] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const posts = useSelector(state => state.posts.current);

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
          backgroundColor: '#f8eee7',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid #000000',
            padding: { xs: '0.25rem 0', md: '0.25rem 2rem' },
            backgroundColor: '#f8eee7',
            position: 'sticky',
            top: 0,
            zIndex: 20,
            transition: '350ms ease-in-out',
          }}
        >
          <Container maxWidth="xl">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Link href="/">
                <Box component="img" src={logo} sx={{ height: 50 }}></Box>
              </Link>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box>
                  <IconButton
                    sx={{ color: '#000000' }}
                    onClick={() => {
                      setOpenSearch(!openSearch);
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                  {openSearch && (
                    <TextField
                      size="small"
                      type="search"
                      variant="standard"
                      inputProps={{
                        style: {
                          textAlign: 'left',
                          padding: '0.35rem',
                          border: '0px',
                          outline: '0px',
                        },
                      }}
                      placeholder="Tìm kiếm"
                    >
                      {' '}
                    </TextField>
                  )}
                </Box>
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
                  {props.edit ? 'Lưu chỉnh sửa' : 'Đăng bài'}
                </CustomizeButton>
                <Box sx={{ position: 'relative' }}>
                  {' '}
                  <IconButton
                    sx={{ color: '#000000' }}
                    onClick={() => {
                      setOpenNotification(!openNotification);
                    }}
                  >
                    <NotificationsNoneIcon />
                  </IconButton>
                  {openNotification && (
                    <Notification
                      onClose={() => {
                        setOpenNotification(false);
                      }}
                    />
                  )}
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/736x/69/5f/eb/695febfc4d7bf517892f37076bbaf48b.jpg"
                    onClick={() => {
                      setOpenSetting(!openSetting);
                    }}
                    sx={{ cursor: 'pointer' }}
                  />
                  {openSetting && (
                    <Setting
                      user={{
                        name: 'Võ Quốc Minh',
                        id: '@voquocminh',
                        avatar:
                          'https://image.thanhnien.vn/w660/Uploaded/2021/ygtmjz/2021_05_15/loki_vrkk.jpg',
                      }}
                      onClose={() => {
                        setOpenSetting(false);
                      }}
                    />
                  )}
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Box sx={{ maxWidth: '740px', m: '0px auto', pt: '68px' }}>
        <Dante
          body_placeholder={'Viết ở đây'}
          content={props.edit ? posts[4].content : ''}
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
              <TextFieldCustom
                multiline
                value={title}
                onChange={e => setTitle(e.target.value)}
                variant="standard"
                placeholder="Tiêu đề chính"
                inputProps={{
                  style: { fontWeight: 700, fontSize: 28 },
                }}
              />
              <TextFieldCustom
                multiline
                value={subTitle}
                onChange={e => setSubTitle(e.target.value)}
                variant="standard"
                placeholder="Tiêu đề phụ"
              />
              <AutocompleteCustom
                multiple
                id="tags-filled"
                options={tags.map(option => option)}
                freeSolo
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="standard"
                    // label="Add a tags"
                    placeholder="Thêm thẻ chủ đề..."
                  />
                )}
              />
              <CustomizeButton
                height="40px"
                width={props.edit ? '150px' : '100px'}
                backgroundColor="#ab92bf"
                color="#fff"
                fontSize="15px"
                variant="filled"
                onClick={() => {
                  handleExport();
                  navigate('/user/yourStories', { replace: true });
                }}
              >
                {props.edit ? 'Lưu chỉnh sửa' : 'Đăng bài'}
              </CustomizeButton>
            </Stack>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

const tags = ['Education', 'Marvel Studio', 'Javascript', 'Cryptocurrentcy'];

const TextFieldCustom = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
});

const AutocompleteCustom = styled(Autocomplete)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
});

export default WritePage;
