import './App.css';
import Customer  from './components/customer';
import { Component } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/material/styles';
import { ClassNames } from '@emotion/react';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : 'auto'
  },
  table : {
    minWidth : 1000
  }
})

const customers =  [
  {
  'id' : 1,
  'name' : '김민욱',
  'birthday' : '000406',
  'gender' : '남자',
  'job' : '대학생',
  },
  {
    'id' : 2,
    'name' : '백진겸',
    'birthday' : '001010', 
    'gender' : '남자',
    'job' : '백수',
  }
]

class App extends Component{
  render(){
   
    return(
      <Paper className={ClassNames.root}>
        <Table className={ClassNames.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>MBTI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c => { return ( <Customer key = {c.id} id={c.id} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job} />) }) }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}


export default App;
