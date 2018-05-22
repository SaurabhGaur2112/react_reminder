import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import Icon from '@material-ui/core/Icon';

export default class extends Component{

    handleDelete = () => {
        this.props.deleteTask(this.props.taskIndex);
    }

    render(){
        return(
            <div className="row" style={{marginBottom: 2}}>
                <div className="col-md-4"></div>
                <Card className="col-md-4">
                    <div className="row">
                        <CardContent className="col-md-8">
                            <Typography color="textSecondary" style={{marginTop: 5}}>
                                {this.props.task}
                            </Typography>
                        </CardContent>
                        <CardActions className="col-md-4">
                            <IconButton aria-label="Delete" aria-label="edit">
                                <i class="fas fa-pencil-alt"></i>
                            </IconButton>
                            <IconButton aria-label="Delete" onClick={this.handleDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </div>
                </Card>
            </div>
        );
    }
} 