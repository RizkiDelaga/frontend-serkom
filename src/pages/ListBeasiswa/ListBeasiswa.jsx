import { Box, Container, Grid, Paper } from '@mui/material';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';
import MainMenu from '../../components/MainMenu';

import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ListBeasiswa() {
  const navigate = useNavigate();
  //   const [formBeasiswa, setFormBeasiswa] = React.useState({ name: '' });
  const [dataBeasiswa, setDataBeasiswa] = React.useState([]);

  React.useEffect(() => {
    document.title = 'Daftar Beasiswa di Ajukan';
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `http://localhost:4000/beasiswa/`,
      });
      setDataBeasiswa(res.data.data);
      console.log('data: ', res.data.data);
      //   navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <MainMenu buttonPosition={3} />
      <br />

      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ maxWidth: '300px' }}>
            <Pie
              data={{
                labels: ['Terverifikasi', 'Belum di Verifikasi'],
                datasets: [
                  {
                    label: 'Status Pendaftaran',
                    data: [
                      dataBeasiswa.filter((value) => value.status === 'Terverifikasi').length,
                      dataBeasiswa.filter((value) => value.status === 'Belum di Verifikasi').length,
                    ],
                    backgroundColor: ['green', 'yellow'],
                    borderColor: ['green', 'yellow'],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </Box>
          <Box sx={{ maxWidth: '300px' }}>
            <Pie
              data={{
                labels: ['Akademik', 'Non Akademik'],
                datasets: [
                  {
                    label: 'Tipe Beasiswa',
                    data: [
                      dataBeasiswa.filter((value) => value.beasiswaType === 'Akademik').length,
                      dataBeasiswa.filter((value) => value.beasiswaType === 'Non Akademik').length,
                    ],
                    backgroundColor: ['rgb(31, 48, 92)', 'rgb(211, 47, 47)'],
                    borderColor: ['rgb(31, 48, 92)', 'rgb(211, 47, 47)'],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </Box>
        </div>

        <br />
        <Grid container spacing={2}>
          {dataBeasiswa.length !== 0
            ? dataBeasiswa.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex', alignItems: 'center' }}>
                    <Paper elevation={8} sx={{ width: '100%', borderRadius: '8px' }}>
                      <div
                        style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                      >
                        <h2 style={{ margin: '0px' }}>{item.name}</h2>
                        <div>Beasiswa {item.beasiswaType}</div>
                      </div>
                      <hr />
                      <div style={{ padding: '16px' }}>
                        <div
                          style={{
                            backgroundColor: '#eeeeee',
                            borderRadius: '8px',
                            padding: '5px 10px',
                            marginBottom: '16px',
                          }}
                        >
                          <div>
                            <strong>Email : </strong> {item.email}
                          </div>
                          <div>
                            <strong>No Telp : </strong>
                            {item.noTelp}
                          </div>
                          <div>
                            <strong>Semester : </strong>
                            {item.currentSemester}
                          </div>
                          <div>
                            <strong>IPK : </strong>
                            {item.lastIPK}
                          </div>
                          <div>
                            <strong>Tipe Beasiswa : </strong>
                            {item.beasiswaType}
                          </div>
                          <div>
                            <strong>Berkas : </strong>
                            {item.files}
                          </div>
                          <div>
                            <strong>Status : </strong>
                            <span
                              style={{
                                borderRadius: '50px',
                                padding: '2px 12px',
                                backgroundColor: item.status === 'Belum di Verifikasi' ? 'yellow' : 'green',
                                color: item.status === 'Belum di Verifikasi' ? 'black' : 'white',
                              }}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Container>
    </Fragment>
  );
}

export default ListBeasiswa;
