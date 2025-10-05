import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

export default function Header() {
  return (
    <Grid item justifyContent="center" sx={{ mt: 0 }}>
      <Link href='/home' style={{ textDecoration: 'none' }}>
        <img
          id="image"
          alt='anchor'
          src='https://images.unsplash.com/photo-1683484068227-276126368255?q=80&w=2210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Typography id="text"
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          sx={{ color: "#4a4a4a" }}
        >
          .Anchor.
        </Typography>
      </Link>
    </Grid>
  );
}
