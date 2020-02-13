import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
//import Dialog from 'react-bootstrap-dialog'
// import Moment from 'react-moment';
// import trashImage from'../icon-trash.png';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import SkipPreviousTwoToneIcon from '@material-ui/icons/SkipPreviousTwoTone';
import SkipNextTwoToneIcon from '@material-ui/icons/SkipNextTwoTone';
import NavigationTwoToneIcon from '@material-ui/icons/NavigationTwoTone';
import blueGrey from '@material-ui/core/colors/blueGrey';
const bluegrey_primary = blueGrey[900];

const Problem = props => ( 
      <TableRow >  
        <TableCell component="th" scope="row">{props.problem.problem_index}</TableCell>
        <TableCell align="left">{props.problem.problem_info}</TableCell>
        <TableCell align="left">{props.problem.problem_answer}</TableCell>
        <TableCell align="left">{props.problem.problem_year}</TableCell>
      </TableRow>
)

const btnStyle = {
  color: bluegrey_primary,
  background: "white",
  padding: ".375rem .75rem",
  border: "1px solid white",
  borderRadius: ".25rem",
  fontSize: "10",
  lineHeight: 1.5,
  textAlign:"center",
  marginTop: 15,

};

const useStyles = makeStyles(theme => ({
    root: {
      padding: 10,
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    paper: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 500,
    },
  }));

  class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button style={btnStyle} title='Back to top' className='scroll' 
                 onClick={ () => { this.scrollToTop(); }}>
                  <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
                  <NavigationTwoToneIcon/>
                </button>;
     }
  } 

export default class problemList extends Component {


    constructor(props) {
        super(props);
        this.state = {problems: [], page:1, start:0, end:10};
        this.handleChangeIndexUP = this.handleChangeIndexUP.bind(this);
        this.handleChangeIndexDown = this.handleChangeIndexDown.bind(this);
        //this.onDeletebutton = this.onDeletebutton.bind(this);
    }

    handleChangeIndexUP = () => {
      const {page, start, end} = this.state;
      if(end > this.state.problems.length) return;
      this.setState({
        page: page+1,
        start: start +10,
        end: end+10
      });
    };

    handleChangeIndexDown = () => {
      const {page, start, end} = this.state;
      if(start===0) return;
      this.setState({
        page: page -1,
        start: start -10,
        end: end-10
      })
    };

    componentDidMount() {
        axios.get('http://localhost:7376/comment/2018')
            .then(response => {
                this.setState({ problems: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    yearProblemList() {
        var data = this.state.problems;
        return data.slice(this.state.start, this.state.end).map(function(currentTodo, i){
            return <Problem problem={currentTodo} key={i} /> ;
        })
    }

    render() {
        return (
          <div >         
            <div className={useStyles.root}>
              <Paper className={useStyles.paper}>
                <Table className={useStyles.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell >#</TableCell>
                      <TableCell align="left" >문제</TableCell>
                      <TableCell align="left">정답</TableCell>
                      <TableCell align="left">년도</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                          { this.yearProblemList() }  
                  </TableBody>
                </Table>
              </Paper>
            </div>
            <div style={{ float: "right"}}>
              <button style={btnStyle} onClick={this.handleChangeIndexDown.bind(this)}> <ChevronLeftTwoToneIcon/></button>
              <dic style={btnStyle} >{this.state.page}</dic>
              <button style={btnStyle} onClick={this.handleChangeIndexUP.bind(this)}> <ChevronRightTwoToneIcon/> </button>
            </div>
            <ScrollButton scrollStepInPx="50" delayInMs="16.66">  </ScrollButton>
             {/* <div> {this.state.start} </div> <div> {this.state.end} </div> */}
        </div>
           
        )
    }
}