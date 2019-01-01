import React from 'react';
import { Container } from 'rebass';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    cardGreen: {
        backgroundColor: theme.palette.success.A700
    },
    cardWarning: {
        backgroundColor: theme.palette.warning.A700
    },

    smallHeader: {
        color: 'rgba(255,255,255, 0.7)',
        float: 'left'
    },
    smallContent: {
        color: 'white',
        fontSize: '30px'
    },
    smallSubContent: {
        color: 'rgba(255,255,255, 0.85)',
        fontSize: '14px',
        paddingLeft: '10px'
    }
});

const DashboardComponent = ({classes, visibleDailyCost, visibleTotalCost, dailyCost, totalCost,
                                notifications, todos}) => (
    <Container className={classes.root}>
        <Grid container spacing={24}>
            {
                visibleDailyCost ?
                    <Grid item xs={12} sm={6} m={6} l={6} xl={4}>
                        <Card className={classes.paper + ' ' + classes.cardGreen}>
                            <span className={classes.smallHeader}>DAILY COSTS</span>
                            <span className={classes.smallContent}>{dailyCost.value}</span>
                            <span className={classes.smallSubContent}>{dailyCost.currency}</span>
                        </Card>
                    </Grid> : ''
            }
            {
                visibleDailyCost ?
                    <Grid item xs={12} sm={6} m={6} l={6} xl={4}>
                        <Card className={classes.paper + ' ' + classes.cardWarning}>
                            <span className={classes.smallHeader}>TOTAL COSTS</span>
                            <span className={classes.smallContent}>{totalCost.value}</span>
                            <span className={classes.smallSubContent}>{totalCost.currency}</span>
                        </Card>
                    </Grid> : ''
            }
            <Grid item xs={12} sm={12} m={6} l={4} xl={3}>
                <Card className={classes.paper}>
                    <Typography component="h5" variant="subheading" style={{float:'left'}}>
                        <Icon>notifications</Icon> Last 5 notifications
                    </Typography>
                    <Table className={classes.table}>
                        <TableBody>
                            {notifications.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.text}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} m={6} l={4} xl={3}>
                <Card className={classes.paper}>
                    <Typography component="h5" variant="subheading" style={{float:'left'}}>
                        <Icon>check_circle</Icon> Last 5 system actions
                    </Typography>
                    <Table className={classes.table}>
                        <TableBody>
                            {todos.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.text}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Card>
            </Grid>
        </Grid>
    </Container>
);

export default withStyles(styles)(DashboardComponent);