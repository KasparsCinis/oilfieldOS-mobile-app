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
import Icon from "@material-ui/core/Icon";

import Gantt from "../../../components/gantt";
import './Lookahead.style.css';
import moment from "moment";
import OilfieldIcon from "../../../components/oilfieldIcon";

const styles = theme => ({
    scrollContainer: {
        overflowX:'scroll',

    },
    pobSuccess: {
        backgroundColor:'#dff0d8'
    },
    pobDanger: {
        backgroundColor:'#f2dede'
    },
    loadoutSail: {
        backgroundColor:'#a0ecff'
    },
    loadoutInfield: {
        backgroundColor:'#e7e7e7'
    },

    flightHeader: {
        backgroundColor:'#aecfdb',
        padding: '3px',
        height: '35px'
    },
    flightSuccess: {
        backgroundColor: '#26B99A'
    },
    flightDanger: {
        backgroundColor: '#de4855'
    }
});

const LookaheadComponent = ({ classes, ganttData, pobData, transportData, flightData, config, isDateModalOpen, handleDateModalClose, handleDateModalOpen, handleDateChange,
                                fromDate, toDate, numberOfDays }) => {

    let startDatTotalPob = pobData.pobTotal.totalDayData[0] !== undefined ? pobData.pobTotal.totalDayData[0].total : 0;
    let todayPobClass = startDatTotalPob > pobData.permittedPob ? classes.pobDanger : classes.pobSuccess;
    let width = 350 + numberOfDays * 200;

    return (
        <div>
            <Typography variant='display1'>
                Lookahead
            </Typography>
            <Typography variant='body1' onClick={handleDateModalOpen}>
                {fromDate.format("DD/MM/YYYY")} - {toDate.format("DD/MM/YYYY")}
            </Typography>

            <div className={classes.scrollContainer}>
                <div style={{width: width+'px'}}>
                <div style={{height:"100%"}}>
                    <Gantt
                        tasks={ganttData}
                        config={config}
                    />
                </div>

                {/** POB */}

                <table className={'striped pobTable'} style={{width:'100%'}}>
                    <thead style={{backgroundColor:'#5da5e2'}}>
                        <tr>
                            <th style={{width:'300px'}}></th>
                            <th style={{width:'42px'}}></th>
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
                                    let dataCell = pobRow.days[Math.floor(pobDayIndex / 2)];

                                    if (dataCell === undefined) {
                                        return <td key={pobDayIndex}></td>
                                    }

                                    let amount = (pobDayIndex % 2 === 0) ? dataCell.out : dataCell.in;
                                    let className = (pobDayIndex % 2 === 0) ?
                                        (dataCell.out > 0 ? classes.pobSuccess : ''):
                                        (dataCell.in > 0 ? classes.pobDanger : '');

                                    return <td key={pobDayIndex} className={className}>{amount}</td>;
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

                                return <td className={(index % 2 === 0) ? classes.pobSuccess : classes.pobDanger}>{text}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Daily Totals (on/off)</td>
                            <td></td>
                            {Array(numberOfDays * 2).fill(1).map((iterator, index) => {
                                let dayTotals = pobData.pobTotal.totalDayData[Math.floor(index / 2)];

                                if (dayTotals === undefined) {
                                    return <th key={index}></th>
                                }

                                let totalAmount = (index % 2 === 0) ? dayTotals.out : dayTotals.in;
                                let className = (index % 2 === 0) ?
                                    (dayTotals.out > 0 ? classes.pobSuccess : ''):
                                    (dayTotals.in > 0 ? classes.pobDanger : '');

                                return <td key={index} className={className}>{totalAmount}</td>;
                            })}
                        </tr>
                        <tr>
                            <td className={classes.pobSuccess} style={{textAlign:'left'}}>MAX POB PERMITTED {pobData.permittedPob}</td>
                            <td className={todayPobClass} style={{textAlign:'right'}}>{startDatTotalPob}</td>
                            {pobData.pobTotal.totalDayData.map((dayTotal, index) => {
                                let className = dayTotal.total > pobData.permittedPob ? classes.pobDanger : classes.pobSuccess;

                                return <td className={className} key={index} colSpan={2}>{dayTotal.total}</td>;
                            })}
                        </tr>
                    </tfoot>
                </table>

                {/** Flights */}

                <table className={'flightTable'} style={{tableLayout:'fixed'}}>
                    <tbody>
                        <tr>
                            <td style={{width:'327px',fontSize:'15px', fontWeight:'600',padding:'10px'}}><OilfieldIcon>&#xe952;</OilfieldIcon> Flights</td>
                            {flightData.map((flights, index) => {

                                let content;

                                if (flights.length > 0) {
                                    content = flights.map((flight, flightIndex) => {

                                        let rows = flight.vendors.map((vendorRow, vendorRowIndex) => {

                                            let classOut = vendorRow.out > 0 ? classes.flightSuccess : '';
                                            let classIn = vendorRow.in > 0 ? classes.flightDanger : '';

                                            return <tr key={vendorRowIndex}>
                                                <td>{vendorRow.name}</td>
                                                <td style={{width:'25px', textAlign:'center'}} className={classOut}>{vendorRow.out}</td>
                                                <td style={{width:'25px', textAlign:'center'}} className={classIn}>{vendorRow.in}</td>
                                            </tr>
                                        });

                                        return <div key={flightIndex}>
                                            <table className={classes.flightHeader}>
                                                <thead>
                                                    <th style={{width:'25px'}}><OilfieldIcon>&#xe952;</OilfieldIcon></th>
                                                    <th style={{textAlign:'left'}}>{flight.name}</th>
                                                    <th className={'flightTime'}>
                                                        <span>
                                                            <Icon>access_time</Icon> {flight.time}
                                                        </span>
                                                    </th>
                                                </thead>
                                            </table>
                                            <table className={'flightContent'}>
                                                <thead>
                                                    <th>Vendor</th>
                                                    <th>Out</th>
                                                    <th>In</th>
                                                </thead>
                                                <tbody>
                                                    {rows}
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td style={{textAlign:'center'}} className={classes.flightSuccess}>{flight.out}</td>
                                                        <td style={{textAlign:'center'}} className={classes.flightDanger}>{flight.in}</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    })
                                } else {
                                    content = <div
                                        style={{backgroundColor:'#d9d9d9', fontWeight:700}}
                                    >
                                        No Flights
                                    </div>;
                                }

                                return <td key={index}>{content}</td>
                            })}
                        </tr>
                    </tbody>
                </table>

                {/** Transport */}

                <table className={'transportTable'}>
                    <thead style={{backgroundColor: '#5da5e2'}}>
                        <tr>
                            <th style={{width: '350px'}}>Supply Vessels</th>
                            {Array(numberOfDays).fill(1).map((iterator, index) => {
                                let date = fromDate.clone().add(index, 'days').format('DD/MM/YYYY');

                                return <th key={index}>{date}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {transportData.map((loadout, index) => {
                            let cells = Array(numberOfDays).fill(1).map((iterator, dayIndex) => {
                                let text = "";
                                let className = "";

                                if (loadout.loadoutDateIndex === dayIndex && loadout.backloadDateIndex !== dayIndex) {
                                    text = 'Load + Sail';
                                    className = classes.loadoutSail;
                                }
                                if (loadout.loadoutDateIndex < dayIndex && loadout.backloadDateIndex > dayIndex) {
                                    text = 'Infield';
                                    className = classes.loadoutInfield;
                                }
                                if (loadout.backloadDateIndex === dayIndex) {
                                    let backloadEquipment = loadout.backload.equipment.map((vendor, vendorIndex) => {
                                        return <tr key={vendorIndex}>
                                            <td>{vendor}</td>
                                        </tr>
                                    });

                                    text = <div>
                                        <Icon style={{float:'left'}}>directions_boat</Icon>
                                        <Typography style={{float:'left'}} variant='subtitle1'> {loadout.transport}</Typography>

                                        <div style={{float:'right', backgroundColor:'#f36a6b', padding:'3px'}}>
                                            IN
                                        </div><br/><br/>

                                        <span style={{fontSize:'9px'}}>BACKLOAD FOR PROVIDERS:</span>
                                        <span style={{float:'right'}}>{loadout.backload.ticket.manifest_no}</span>
                                        <table><tbody>{backloadEquipment}</tbody></table>
                                    </div>;
                                    className = 'transportCell transportBackload';
                                }

                                return <td className={className} key={dayIndex}>{text}</td>
                            });
                            let requests = loadout.requests.map((request, requestIndex) => {
                                return <tr key={requestIndex}>
                                    <td style={{textAlign:'left'}}>{request.name}</td>
                                    <td style={{backgroundColor:request.color}}><Icon>{request.icon}</Icon></td>
                                </tr>
                            });

                            return <tr key={index}>
                                <td className={'transportCell'}>
                                    <span>
                                        <Icon style={{float:'left'}}>directions_boat</Icon>
                                        <Typography style={{float:'left'}} variant='subtitle1'> {loadout.transport}</Typography>
                                    </span>

                                    <div style={{float:'right', backgroundColor:'#88f383', padding:'3px'}}>
                                        OUT
                                    </div>
                                    <br/><br/>

                                    {loadout.requests.length > 0 ? 'Requests' : ''}
                                    <div style={{float:'right'}}>
                                        <OilfieldIcon style={{float:'left'}}>&#xe81f;</OilfieldIcon>
                                        <Typography style={{float:'left'}} variant='subtitle1'> {loadout.entity}</Typography>
                                    </div>
                                    <div style={{float:'right', paddingRight:'10px'}}>
                                        <Icon style={{float:'left'}}>directions_boat</Icon>
                                        <Typography style={{float:'left'}} variant='subtitle1'> {loadout.loadout_number}</Typography>
                                    </div><br/>
                                    <table style={{width:'100%'}}>
                                        <tbody>
                                            {requests}
                                        </tbody>
                                    </table>
                                </td>
                                {cells}
                            </tr>
                        })}
                    </tbody>
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