import React, { useState } from 'react';
import { Redirect, BrowserRouter as Router } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import '../css/LoginForm.css';
// import { Left } from 'react-bootstrap/lib/Media';
//import Image from '../../img/iconlogin.png';
// material-ui 사용 : styles, textField, button, alert
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
const btnStyle = {
  color: "white",
  background: "black",
  width: "300px",
  padding: ".375rem .75rem",
  border: "1px solid white",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  textAlign:"center",
  marginTop: 10
};
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //width: 330,
    },
  },
  item:{
    marginTop: 5,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 230,
  }
}));

function LoginForm({ authenticated, login, location }) {
  // style
  const classes = useStyles();

  // 회원가입을 위한 DB setting
  const [user_email, setEmail] = useState('');
  const [user_name, setName] = useState('');
  const [user_password, setPW] = useState('');
  const [user_birthday, setBIRTH] = useState('');
  const [visible, setVB] = useState('');
  const [error, setERROR] = useState('');
  // 로그인 form DB setting
  const [login_email, setlogin_Email] = useState('');
  const [login_password, setlogin_PW] = useState('');
  //alert snckbar 
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
      setVB(true);
      // this.setState({  visible : true  });
  }

  const closeModal =() => {
      setVB(false);
      // this.setState({  visible : false  });
    }

  // server&DB 에서 유효성 검사 후 유효 혹은 에러 발생
  const getUsers = (newUser) => {
    try {
      return axios.post('/login/user', newUser);
    } catch (error) {
      console.error(error)
    }
  };
  const getoverlaps = (overlapEmail) => {
    try {
      return axios.post('/login/sign/overlap', overlapEmail);
    } catch (error) {
      console.error(error)
    }
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const onSubmit = () => {
    try {
      console.log(`로그인 입력 정보`);
      console.log(`commnet text: ${login_email}`);
      console.log(`commnet user: ${login_password}`);

      const newLogin = {
        login_email: login_email,
        login_password: login_password
      };
      const usrs = getUsers(newLogin).then(res => {
        if (res.data===login_email){
          console.log(res.data);
          login({ login_email, login_password });
        }
        else if (res.data==='false'){
          //alert('로그인 실패, 다시 시도해주세요.');
          setOpen(true);
          console.log('=> err_location : react login form에서 로그인 실패.');
          setlogin_Email('');
          setlogin_PW('');
        }
      })
      
    } catch (e) {
      alert('Failed to login');
      setlogin_Email('');
      setlogin_PW('');
    }
  }
  const SignOnclick = () => {
    try {
      console.log(`회원가입 정보`);
      console.log(`user_email: ${user_email}`);
      console.log(`user_name: ${user_name}`);
      console.log(`user_name: ${user_birthday}`);
      console.log(`user_password: ${user_password}`);
      
      if (user_password.length > 6 ){
        const newUser = {
          user_email: user_email,
          user_name: user_name,
          user_birthday: user_birthday,
          user_password: user_password
        };
        axios.post('https://hyunsojung-dev.github.io/react_hsj/login/sign/add', newUser)
            .then(res => console.log(res.data))
            .catch(function (error) {
              if (error){
                console.log(error);
                alert('중복 아이디가 있습니다.');
                setERROR('err');
              }
              else if(error!=='err') {
              }
          })
        //alert('회원가입 성공!');
        setEmail('');
        setPW('');
        setName('');
        setBIRTH('');
        setVB(false);
      }
      else {
        alert('비밀번호 6자리 이상 입력해주세요.');
      }

    } catch (e) {
      alert('회원가입 실패, 다시 시도해주세요.');
      // setEmail('');
      setPW('');
      setName('');
      setBIRTH('');
    }
  } 

  const overlap = () => {
    const overlapEmail = {
      user_email: user_email
    };
    const overs = getoverlaps(overlapEmail).then(res => {
      if (res.data==='false'){
        alert('중복 아이디 존재');
      }
      else if(res.data===""){
        alert('아이디를 입력해주세요.');
      }
      else if (res.data==='true'){
        alert('아이디 사용가능');
      }
    }) 

  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <><Router>
    <div style={{margin: 25}}>      
    <div style={{marginLeft: 10}}>LOGIN</div>
      <form className={classes.root} noValidate autoComplete="off">
      {/* <form noValidate autoComplete="off"> */}
        <div style={{width: 300}} >
        <TextField
          required
          id="filled-required"
          label="Email"
          defaultValue="Hello World"
          variant="filled"
          value={login_email} onChange={({ target: { value } }) => setlogin_Email(value)}
        />
        </div>
        <div className={classes.item}>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={login_password} onChange={({ target: { value } }) => setlogin_PW(value)}
        />
        </div>
        <div >
        {/* <Button variant="outlined" onClick={onSubmit} >submit</Button> */}
        <button style={btnStyle} onClick={onSubmit} >submit</button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" >가입되지 않은 아이디이거나, 잘못된 패스워드 입니다.</Alert>
        </Snackbar>
        {/* </div> */}
        <section>
          {/* <button style={btnStyle} onClick={openModal} >회원가입</button> */}
              <Button variant="outlined" onClick={openModal} > 회원가입 </Button>              
                {/* <Modal visible={visible} width="400" height="400" effect="fadeInUp"   onClickAway={closeModal}> */}
                <Modal visible={visible} effect="fadeInUp"   onClickAway={closeModal}>
                    <div>
                      <div>
                        <div className="register-header">회원가입</div>   
                        {/* <div style={{ marginLeft: 20}}> */}
                        <div className="register-item">
                        <form className={classes.root} noValidate autoComplete="off">
                          <div style={{ float: "left"}} >                            
                            <TextField id="standard-basic" label="email"  
                              className={classes.textField}                           
                              // defaultValue="email"
                              value={user_email}
                              onChange={({ target: { value } }) => setEmail(value)}  />   
                              <Button variant="outlined" onClick={overlap} > 검사 </Button>                         
                          </div>
                          <div>
                          <TextField  id="standard-password-input" label="password" 
                            className={classes.textField}
                            autoComplete="current-password"
                            defaultValue="password" 
                            value={user_password}
                            onChange={({ target: { value } }) => setPW(value)}
                            type="password"  />
                          </div>
                          <div>
                            <TextField id="standard-basic" label="name" 
                               className={classes.textField}
                                // defaultValue="email"
                                value={user_name}
                                onChange={({ target: { value } }) => setName(value)}  />
                          </div>
                          <div className={classes.container} noValidate>
                            <TextField    id="date"  label="Birthday"  type="date"  defaultValue="2020-01-01"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              value={user_birthday}
                              onChange={({ target: { value } }) => setBIRTH(value)}   />
                          </div>
                          <div style={{ marginTop: 15}}>
                              <Button variant="outlined" onClick={SignOnclick} >submit</Button> </div> 
                          <div style={{ textAlign: "left", margin: 15}}>
                              <a href="javascript:void(0);" onClick={closeModal}>Close</a>   </div>                          
                        </form>    
                        </div>                                     
                      </div>                        
                    </div>
                </Modal>
            </section>
            </div>
        </form>
      </div>     
    </Router>
   </>
  );
}

export default LoginForm;