import { Container, Grid, Paper } from '@mui/material';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';
import MainMenu from '../../components/MainMenu';
import BeasiswaAkademik from '../../assets/images/akademik.jpg';
import BeasiswaNonAkademik from '../../assets/images/nonakademik.jpg';
import { Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = 'Home | Example React JS Program';
  }, []);

  return (
    <Fragment>
      <MainMenu buttonPosition={1} />
      <br />

      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Link className="disable-link-style" to={'/DaftarBeasiswa'} style={{ width: '100%' }}>
              <Paper elevation={8} sx={{ p: 2, borderRadius: '12px' }}>
                <img src={BeasiswaAkademik} alt="" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                <h2 style={{ margin: '10px 0px' }}>Beasiswa Akademik</h2>
                <div>
                  Beasiswa akademik merupakan beasiswa yang diberikan oleh institusi setiap tahun kepada mahasiswa aktif
                  dan berprestasi dalam bidang akademik.
                </div>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Link className="disable-link-style" to={'/DaftarBeasiswa'} style={{ width: '100%' }}>
              <Paper elevation={8} sx={{ p: 2, borderRadius: '12px' }}>
                <img src={BeasiswaNonAkademik} alt="" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                <h2 style={{ margin: '10px 0px' }}>Beasiswa Non Akademik</h2>
                <div>
                  Beasiswa non akademik merupakan beasiswa yang diberikan oleh institusi setiap tahun kepada mahasiswa
                  aktif dan berprestasi dalam bidang teknologi dan seni.
                </div>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Home;
