import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router';

function MainMenu({ buttonPosition }) {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonGroup variant="contained" sx={{ height: '50px', width: '100%', mt: 2 }}>
        <Button
          onClick={() => {
            navigate('/');
          }}
          sx={{ width: '100%', backgroundColor: buttonPosition === 1 ? '#1c5598' : null }}
        >
          Pilihan Beasiswa
        </Button>
        <Button
          onClick={() => {
            navigate('/DaftarBeasiswa');
          }}
          sx={{ width: '100%', backgroundColor: buttonPosition === 2 ? '#1c5598' : null }}
        >
          Daftar
        </Button>
        <Button
          onClick={() => {
            navigate('/Hasil');
          }}
          sx={{ width: '100%', backgroundColor: buttonPosition === 3 ? '#1c5598' : null }}
        >
          Hasil
        </Button>
      </ButtonGroup>
    </Container>
  );
}
export default MainMenu;
