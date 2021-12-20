import {
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useState } from 'react';

const ToggleSetting = props => {
  const { name, description, defaultSstatus, ...other } = props;
  const [status, setStatus] = useState(defaultSstatus || 'off');
  const handleChangeStatus = (event, newStatus) => {
    setStatus(newStatus);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      {...other}
    >
      <Stack
        direction="column"
        spacing={1}
        paddingTop={2}
        paddingBottom={2}
        paddingRight={2}
        sx={{
          maxWidth: '760px',
        }}
      >
        <Typography variant="h6" component="h6" fontWeight={700}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={400}
          color="#757575"
          component="div"
        >
          {description}
        </Typography>
      </Stack>
      <ToggleButtonGroup
        value={status}
        exclusive
        onChange={handleChangeStatus}
        aria-label="text alignment"
        color="success"
      >
        <ToggleButton
          value="on"
          size="small"
          aria-label="left aligned"
          sx={{
            borderRadius: '20px',
            overflow: 'hidden',
            padding: '0.25rem 0.75rem',
            fontSize: '0.875rem',
            textTransform: 'none',
          }}
        >
          On
        </ToggleButton>
        <ToggleButton
          value="off"
          size="small"
          aria-label="centered"
          sx={{
            borderRadius: '20px',
            overflow: 'hidden',
            padding: '0.25rem 0.75rem',
            fontSize: '0.875rem',
            textTransform: 'none',
          }}
        >
          Off
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default ToggleSetting;
