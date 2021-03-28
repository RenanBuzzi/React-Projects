import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { Grid, Paper, Table, TableBody, TableContainer, TableCell, TableHead, TableRow, withStyles, ButtonGroup, Button } from "@material-ui/core";
import DCandidateForm from "./DCandidateForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";
import TablePagination from '@material-ui/core/TablePagination';

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


const DataGridCandidates = ({classes, ...props}) => {

    //toast msg.
    const { addToast } = useToasts()

    /*Getting the row on the Grid Component*/
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllDCandidates()
    }, [] = useState(0))

    /*Delete record by ID*/
    const onDelete = id => {
        if(window.confirm('Are you sure to delete this message?'))
        props.deleteDCandidate(id, () => addToast("Deleted successfully", { appearance: 'info' }))
    }

    /*Paginator Material UI*/
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
   
    const counter = () => {
        let countRows = 0;
    }

    /*count rows from datatable*/
    const countRows = props.dCandidateList.filter(rows => rows)
    const numRows = countRows.length

    const emptyRows = 
            rowsPerPage - Math.min(rowsPerPage, numRows - page * rowsPerPage);     
   
    

    return(
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xl={12}>
                <DCandidateForm {...({ currentId, setCurrentId })}></DCandidateForm>
                </Grid>
            </Grid>
            <Paper className={classes.paper} elevation={10}>
            <Grid container>
            <Grid item xs={12}>
                <TableContainer>
                    <Table>
                        <TableHead className={classes.root} >
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>Blood Group</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {               
                                props.dCandidateList
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((record, index) => {
                                    return (
                                            <TableRow Key={index} hover>
                                                <TableCell>{record.fullName}</TableCell>
                                                <TableCell>{record.mobile}</TableCell>
                                                <TableCell>{record.bloodGroup}</TableCell>
                                                <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                      onClick={() => {setCurrentId(record.id)}} 
                                                    />
                                                    </Button>
                                                    <Button>
                                                        <DeleteIcon color="secondary"
                                                         onClick={() => onDelete(record.id)} 
                                                        />
                                                    </Button>
                                                </ButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                        )
                                })
                            }
                            {emptyRows > 0 && (
                                <TableRow style={{height:53 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <TablePagination
                    component="div"
                    count={numRows}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                </TableContainer>
                </Grid>
            </Grid>
            </Paper>
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

export default connect(mapStateToProps,mapActionToProps)(withStyles(style)(DataGridCandidates));

