import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit = () => {
        this.props.submitValue(this.state.name);
        this.setState({
            name: ''
        });
    }

    render(){
        return(
            <Dialog
                open={this.props.openDialog}
                onClose={this.props.handleToggle}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Please, Register your name here
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter Name"
                    type="text"
                    fullWidth
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleToggle} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                    Submit
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
} 