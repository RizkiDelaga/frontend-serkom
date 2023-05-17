import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';
import MainMenu from '../../components/MainMenu';
import axios from 'axios';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function FormBeasiswa() {
  const navigate = useNavigate();
  const [formBeasiswa, setFormBeasiswa] = React.useState({
    name: '',
    email: '',
    noTelp: null,
    currentSemester: null,
    lastIPK: null,
    beasiswaType: '',
    files: { file: null, fileName: '' },
  });

  React.useEffect(() => {
    document.title = 'Form Pendaftaran Beasiswa';
    handleIPK(formBeasiswa.currentSemester);
  }, [formBeasiswa.currentSemester]);

  const handleSubmit = async (data) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `http://localhost:4000/beasiswa/`,
        data: {
          name: data.name,
          email: data.email,
          noTelp: parseInt(data.noTelp),
          currentSemester: parseInt(data.currentSemester),
          lastIPK: parseFloat(data.lastIPK),
          beasiswaType: data.beasiswaType,
          files: data.files.fileName,
          status: 'Belum di Verifikasi',
        },
      });
      console.log('data: ', data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIPK = (value) => {
    switch (parseInt(value)) {
      case 1:
        setFormBeasiswa({ ...formBeasiswa, lastIPK: 2.4 });
        break;
      case 2:
        setFormBeasiswa({ ...formBeasiswa, lastIPK: 3.1 });
        break;
      case 3:
        setFormBeasiswa({ ...formBeasiswa, lastIPK: 3 });
        break;
      case 4:
        setFormBeasiswa({ ...formBeasiswa, lastIPK: 4 });
        break;
      case 5:
        setFormBeasiswa({ ...formBeasiswa, lastIPK: 2.9 });
        break;
      case 6:
        setFormBeasiswa({ ...formBeasiswa, lastIPK: 1.6 });
        break;
      case 7:
        setFormBeasiswa({ ...formBeasiswa, lastIPK: 2.7 });
        break;
      case 8:
        setFormBeasiswa({ ...formBeasiswa, lastIPK: 3.2 });
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <MainMenu buttonPosition={2} />
      <br />

      <Container>
        <form onSubmit={(e) => e.preventDefault()}>
          <Paper elevation={8} sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '42px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
              Daftar Beasiswa
            </span>
            <Grid container spacing={2}>
              <Grid item xs style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Nama Mahasiswa</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  label="Nama Lengkap"
                  variant="outlined"
                  onChange={(e) => {
                    setFormBeasiswa({ ...formBeasiswa, name: e.target.value });
                  }}
                  sx={{ width: '100%' }}
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Email</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  label="Email"
                  placeholder="example@mail.com"
                  type="email"
                  variant="outlined"
                  onChange={(e) => {
                    setFormBeasiswa({ ...formBeasiswa, email: e.target.value });
                  }}
                  sx={{ width: '100%' }}
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>No Telp</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  label="Nomer Hp"
                  type="number"
                  variant="outlined"
                  onChange={(e) => {
                    setFormBeasiswa({ ...formBeasiswa, noTelp: e.target.value });
                  }}
                  sx={{ width: '100%' }}
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Semester Saat Ini</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <FormControl fullWidth>
                  <InputLabel>Semester *</InputLabel>
                  <Select
                    label="Semester"
                    onChange={(e) => {
                      setFormBeasiswa({ ...formBeasiswa, currentSemester: e.target.value });
                    }}
                    required
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>IPK Terakhir</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  placeholder="IPK"
                  type="number"
                  value={formBeasiswa.lastIPK}
                  variant="outlined"
                  onChange={(e) => {
                    setFormBeasiswa({ ...formBeasiswa, lastIPK: e.target.value });
                  }}
                  sx={{ width: '100%' }}
                  required
                  InputProps={{
                    readOnly: true,
                  }}
                  disabled={true}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Pilih Beasiswa</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <FormControl fullWidth>
                  <InputLabel>Tipe Beasiswa *</InputLabel>
                  <Select
                    label="Tipe Beasiswa"
                    onChange={(e) => {
                      setFormBeasiswa({ ...formBeasiswa, beasiswaType: e.target.value });
                    }}
                    required
                    disabled={formBeasiswa.lastIPK < 3}
                  >
                    <MenuItem value={'Akademik'}>Akademik</MenuItem>
                    <MenuItem value={'Non Akademik'}>Non Akademik</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Upload Berkas Syarat</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Button
                  variant="contained"
                  size="small"
                  component="label"
                  startIcon={<AttachFileIcon />}
                  sx={{ height: 'fit-content' }}
                  disabled={formBeasiswa.lastIPK < 3}
                >
                  Pilih File
                  <input
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files);
                      console.log(e.target.value);
                      setFormBeasiswa({
                        ...formBeasiswa,
                        files: {
                          file: e.target.files[0],
                          fileName: e.target.files[0].name,
                        },
                      });
                    }}
                    hidden
                    required
                  />
                </Button>{' '}
                {formBeasiswa.files.fileName}
              </Grid>
            </Grid>

            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                gap: '16px',
                marginTop: '24px',
              }}
            >
              <Button
                type="submit"
                variant="contained"
                onClick={() => {
                  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formBeasiswa.email)) {
                    // return true;
                    handleSubmit(formBeasiswa);
                    navigate('/Hasil');
                  } else {
                    alert('Format email salah!');
                  }
                }}
                sx={{ borderRadius: '14px', height: '48px', width: '100%' }}
                disabled={
                  formBeasiswa.name === '' ||
                  formBeasiswa.email === '' ||
                  formBeasiswa.noTelp === null ||
                  formBeasiswa.currentSemester === null ||
                  formBeasiswa.lastIPK === null ||
                  formBeasiswa.beasiswaType === '' ||
                  formBeasiswa.files.fileName === ''
                    ? true
                    : false
                }
              >
                Daftar
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate('/')}
                sx={{ borderRadius: '14px', height: '48px', width: '100%' }}
              >
                Batal
              </Button>
            </div>
          </Paper>
        </form>
      </Container>
    </Fragment>
  );
}

export default FormBeasiswa;
