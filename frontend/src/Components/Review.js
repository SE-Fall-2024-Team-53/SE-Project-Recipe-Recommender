import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Review(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {props.order.map((product) => (
          <ListItem key={product} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product} secondary={product} />
            <Typography variant="body2">{12.99}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {12.99*props.order.length}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}