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


class App extends Component{

  state = { // 컴포넌트 내에서 변경될 수 있음을 명시
    costomers: ""
  }

  componentDidMount() { // 모든 컴포넌트가 마운트 완료 시 실행
    this.callAPI()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err))
  }

  callAPI = async () => {
    const response = await fetch('/api/customers')
    const body = await response.json()
    return body
  }

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
          { //  this.state.customers 가 존재해야만 실행
          this.state.customers ? this.state.customers.map(c => {
             return ( <Customer key = {c.id} id={c.id} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job} />) }) 
             : ""}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}


export default App;
