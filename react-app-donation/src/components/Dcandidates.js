import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { Grid, Paper, Table, TableBody, TableContainer, TableCell, TableHead, TableRow, withStyles, ButtonGroup, Button } from "@material-ui/core";
import DCandidateForm from "./DCandidateForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";

const style = theme => ({
    /*overwriting the existing CSS*/
    root:{
        "& .MuiTableCell-head":{
            fontSize: "1.25rem"
        }
    },

    paper:{
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})


const DCandidates = ({classes, ...props}) => {

    //toast msg.
    const { addToast } = useToasts()

    /*Getting the row on the Grid Component*/
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllDCandidates()
    }, [] = useState(0))


const onDelete = id => {
    if(window.confirm('Are you sure to delete this message?'))
    props.deleteDCandidate(id, () => addToast("Deleted successfully", { appearance: 'info' }))
}

    return(
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                <DCandidateForm {...({ currentId, setCurrentId })}></DCandidateForm>
                </Grid>
                <Grid item xs={6}>
                <TableContainer>
                    <Table>
                        <TableHead className={classes.root} >
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile</TableCell>
                                {/* <TableCell>Email</TableCell>
                                <TableCell>Age</TableCell> */}
                                <TableCell>Blood Group</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.dCandidateList.map((record, index) => {
                                    return (<TableRow Key={index} hover>
                                                <TableCell>{record.fullName}</TableCell>
                                                <TableCell>{record.mobile}</TableCell>
                                                {/* <TableCell>{record.email}</TableCell>
                                                <TableCell>{record.age}</TableCell> */}
                                                <TableCell>{record.bloodGroup}</TableCell>
                                                {/* <TableCell>{record.address}</TableCell> */}
                                                <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                      onClick={() => { setCurrentId(record.id) }} 
                                                    />
                                                    </Button>
                                                    <Button>
                                                        <DeleteIcon color="secondary"
                                                         onClick={() => onDelete(record.id)} 
                                                        />
                                                    </Button>
                                                </ButtonGroup>
                                            </TableCell>
                                            </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteDCandidate: actions.Delete
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(style)(DCandidates));

