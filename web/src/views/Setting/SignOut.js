import { Button, Stack, Typography } from '@mui/material';

const SignOut = props => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Stack direction="column" spacing={1} paddingTop={2} paddingBottom={2}>
        <Typography variant="h6" component="h6" fontWeight={700}>
          Đăng xuất khỏi tất cả các thiết bị khác
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          color="#757575"
          component="div"
        >
          Thao tác này sẽ đăng xuất tài khoản của bạn khỏi các trình duyệt hoặc
          các máy khác
        </Typography>
      </Stack>
      <Button
        sx={{
          borderRadius: '20px',
          border: '1px solid #757575',
          color: '#757575',
          textTransform: 'none',
          padding: '0.25rem 1rem',
          fontWeight: 400,
          '&:hover': {
            color: '#000000',
            borderColor: '#000000',
          },
          whiteSpace: 'nowrap',
          minWidth: '245px',
        }}
      >
        Đăng xuất khỏi các thiết bị khác
      </Button>
    </Stack>
  );
};

export default SignOut;
