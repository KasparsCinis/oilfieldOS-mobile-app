import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from 'material-ui-pickers';

import Gantt from "../../../components/gantt";
import './Lookahead.style.css';
import moment from "moment";

const styles = theme => ({
    scrollContainer: {
        overflowX:'scroll'
    },
    pobSuccess: {
        backgroundColor:'#dff0d8'
    },
    pobDanger: {
        backgroundColor:'#f2dede'
    },
});

const LookaheadComponent = ({ classes, ganttData, pobData, config, isDateModalOpen, handleDateModalClose, handleDateModalOpen, handleDateChange,
                                fromDate, toDate, numberOfDays }) => {

    return (
        <div style={{height:"600px"}}>
            <Typography variant='display1'>
                Lookahead
            </Typography>
            <Typography variant='body1' onClick={handleDateModalOpen}>
                {fromDate.format("DD/MM/YYYY")} - {toDate.format("DD/MM/YYYY")}
            </Typography>

            <div className={classes.scrollContainer}>
                <div style={{width:'3000px'}}>
                <Gantt
                    tasks={ganttData}
                    config={config}
                />

                <table>
                    <thead style={{backgroundColor:'#5da5e2'}}>
                        <tr>
                            <th style={{width:'300px'}}></th>
                            <th></th>
                            {Array(numberOfDays).fill(1).map((iterator, index) => {
                                let date = fromDate.clone().add(index, 'days').format('DD/MM/YYYY');

                                return <th key={index} colspan="2">{date}</th>
                            })}
                        </tr>
                        <tr>
                            <th>Vendor</th>
                            <th>POB</th>
                            {Array(numberOfDays * 2).fill(1).map((iterator, index) => {
                                let text = (index % 2 === 0) ? "ON" : "OFF";

                                return <th className={(index % 2 === 0) ? classes.pobSuccess : classes.pobDanger}>{text}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {pobData.models.map((pobRow, index) => {

                            let startPob = pobRow.days.length > 0 ? pobRow.days[0].pob : 0;

                            return <tr key={index}>
                                <td>{pobRow.vendor}</td>
                                <td>{startPob}</td>
                                {Array(numberOfDays * 2).fill(1).map((iterator, pobDayIndex) => {
                                    let pobData = pobRow.days[Math.floor(pobDayIndex / 2)];

                                    if (pobData === undefined) {
                                        return <th key={pobDayIndex}></th>
                                    }

                                    let amount = (pobDayIndex % 2 === 0) ? pobData.in : pobData.out;
                                    let className = (pobDayIndex % 2 === 0) ?
                                        (pobData.in > 0 ? classes.pobSuccess : ''):
                                        (pobData.out > 0 ? classes.pobDanger : '');

                                    return <th key={pobDayIndex} className={className}>{amount}</th>;
                                })}
                            </tr>;
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            {Array(numberOfDays * 2).fill(1).map((iterator, index) => {
                                let text = (index % 2 === 0) ? "ON" : "OFF";

                                return <th className={(index % 2 === 0) ? classes.pobSuccess : classes.pobDanger}>{text}</th>;
                            })}
                        </tr>
                        <tr>
                            <td>Daily Totals (on/off)</td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>MAX POB PERMITTED {pobData.permittedPob}</td>
                        </tr>
                    </tfoot>
                </table>
                </div>
            </div>




            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={isDateModalOpen}
                onClose={handleDateModalClose}
            >
                <DialogTitle>Change Dates</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <DatePicker
                                label="From Date"
                                showTodayButton
                                maxDate={toDate}
                                maxDateMessage="Date must be before end date"
                                value={fromDate}
                                onChange={date => {handleDateChange('fromDate', date)}}
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <DatePicker
                                label="To Date"
                                showTodayButton
                                minDate={fromDate}
                                maxDateMessage="Date must be after start date"
                                value={toDate}
                                onChange={date => {handleDateChange('toDate', date)}}
                            />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDateModalClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDateModalClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};

export default withStyles(styles)(LookaheadComponent);