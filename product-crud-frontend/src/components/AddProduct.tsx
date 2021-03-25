import * as React from 'react';
import { Grid, Card, Typography, Button, CardActions, CardContent, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 400,
    },
  });

const AddProduct = () => {

    const classes = useStyles();
    const [localState, setLocalState] = React.useState({
        name: '',
        description: ''
    });

    const { name, description } = localState;

    const onSubmit = () => {
        console.log(localState);
    }

    return (
        <Grid container justify={'center'}>
            <Grid item>
            <Card className={classes.root}>
            <CardContent>
                <Typography component={'div'}  color="textSecondary" gutterBottom>
                    <TextField 
                        onChange={(e) => setLocalState(prev => ({...prev, name: e.target.value}))} 
                        value={name} 
                        fullWidth 
                        id="name" 
                        label="Name" 
                        variant="outlined" 
                    />
                </Typography>
                <Typography component={'div'} color="textSecondary" gutterBottom>
                    <TextField 
                        onChange={(e) => setLocalState(prev => ({...prev, description: e.target.value}))}  
                        value={description} 
                        fullWidth 
                        multiline 
                        rows={4} 
                        id="description" 
                        label="Description" 
                        variant="outlined" 
                    />
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onSubmit} fullWidth size="small" color={'primary'} variant={'outlined'}>Add</Button>
            </CardActions>
        </Card>
            </Grid>
        </Grid>
    )
}
export default AddProduct;