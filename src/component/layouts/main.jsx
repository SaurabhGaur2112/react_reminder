import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddDialog from '../boxes/addDialog';
import ShowList from './showList';
import EditDialog from '../boxes/editDialog';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            taskList: []
        }
    }

    handleDialog = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleSubmit = (event) => {
        let printValue = this.state.taskList
        printValue.push(event)
        this.setState({
            taskList: printValue,
            open: !this.state.open
        });
    }

    handleDelete = (index) => {
        let deleteValue = this.state.taskList.splice(index, 1);
        this.setState({
            taskList: this.state.taskList
        });
    }

    render() {
        return (
            <Fragment className="container">
                <div className="row" style={{ marginBottom: 50 }}>
                    <Button onClick={this.handleDialog} variant="fab" color="primary" aria-label="add" style={{ margin: '0 auto' }}>
                        <AddIcon />
                    </Button>
                    <AddDialog handleToggle={this.handleDialog} openDialog={this.state.open} submitValue={this.handleSubmit} />
                </div>

                {this.state.taskList.map((value, index) => <ShowList key={index} task={value} taskIndex={index} deleteTask={this.handleDelete} />)}

            </Fragment>
        );
    }
}