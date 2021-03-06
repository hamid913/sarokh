import React from "react";
import {useRecoilState} from 'recoil';
import {user} from '../globalState/userDetails';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Login(props) {

  const [User,setUser] = useRecoilState(user);
  const hist = useHistory();
  const onSubmit = async (event)=>{
    event.preventDefault();
    const Form = new FormData(event.target);
    let data = {};
    for (let a of Form.entries()) {
      data[a[0]] = a[1];
    }

    await axios.post(`http://vps789305.ovh.net:8443/user/login`,
    {
      ...data
    })
    .then((response)=>{
      console.log(response);
      setUser(response.data);
      hist.push('/shipper/dashboard');


    })
    .catch((err)=>{
      console.log(err);
    });


  };

  return (
    <div className="app-body login-testimonial-container">
      <main className="main d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 mx-auto">
              <div className="card-group">
                <div className="card p-5">
                  <div className="card-body">
                    <form onSubmit={onSubmit}>
                    <fieldset>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-user" />
                          </span>
                        </div>
                        <input
                          name="username"
                          type="text"
                          className="form-control"
                          formcontrolname="username"
                          placeholder="Username"
                          autoComplete="username"
                          required
                        />
                      </div>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-lock" />
                          </span>
                        </div>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          formcontrolname="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button type="submit" className="btn btn-danger px-4">
                            Login
                          </button>
                        </div>
                        <div className="col-6 text-right">
                          <button type="button" className="btn btn-link px-0">
                            Forgot password?
                          </button>
                        </div>
                        <div className="col-12 text-right">
                          <label>Remember me</label>
                          <input type="checkbox" className=" px-0" />
                        </div>
                      </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;