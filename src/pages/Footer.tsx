import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstragramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      Grupo Elba
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );}


const social = [
  { name: 'Instagram', icon: InstragramIcon, link: "https://www.instagram.com/jae_j_jay/" },
  { name: 'LinkedIn', icon: LinkedInIcon, link: "https://www.linkedin.com/in/jaehurnnam/" },
  { name: 'Facebook', icon: FacebookIcon, link: "https://www.facebook.com/jaehurnnamalsolloyd/" },
];

export default function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }} alignItems="center">
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} justifyContent="center">
          {social.map((network) => (
          <Link
            align='center'
            display="block"
            variant="body1"
            href={network.link}
            key={network.name}
            sx={{ mb: 0.5 }}
          >
            <Stack direction="column" spacing={1} alignItems="center">
              <network.icon />
              <span>{network.name}</span>
            </Stack>
        </Link>
        
      ))}
      </Stack>
      <Copyright />
      </Container>
    </Box>
  );
}
