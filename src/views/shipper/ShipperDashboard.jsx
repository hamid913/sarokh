import React,{useEffect,useState} from "react";
import axios from 'axios';
import {user} from '../../globalState/userDetails';
import {useRecoilValue} from 'recoil';


function ShipperDashboard(props) {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState();
    const userDetails = useRecoilValue(user);
    console.log("this is the data",userDetails);

    useEffect(()=>{
        async function fetchData()
        {
            await axios.get('http://vps789305.ovh.net:8443/shipper/get-details/2')
            .then((response)=>{
                console.log(response.data);
                setdata(response.data);
                setloading(false);
            })
            .catch((err)=>{
                console.log(err);
            });
        }
        fetchData();
    },[]);


  return loading ? (<div>Loading...</div>) : (
    <div className="container-fluid ">
      <div className="card card-accent-primary borderradius40 margintop30 custom-margin">
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-12">
              <UserBio data={data}/>
            </div>
           <StatsCard />
          </div>
        </div>
      </div>
    </div>
  );
}



const UserBio = ({data})=>{
    return(
        <>
        <div className="profile__header">
                <h4 className=" float-left">{data.firstName + data.lastName}</h4>
                <div className="clearfix" />
              </div>

                <div className="float-left mt-2">
                  <div>
                    <div className="float-left mt-2">
                      <div className="icon color-default fs-20 mr-10 float-left">
                        <i className="fa fa-user" />
                      </div>
                      <div style={{ display: "inline-block", marginRight: 30 }}>
                        <p>{data.firstName}</p>
                      </div>
                    </div>
                    <div className="float-left mt-2">
                      <div className="icon color-default fs-20 mr-10 float-left">
                        <i className="fa fa-envelope" />
                      </div>
                      <div style={{ display: "inline-block", marginRight: 30 }}>
                        <p>{data.user.email}</p>
                      </div>
                    </div>
                    <div className="float-left mt-2">
                      <div className="icon color-default fs-20 mr-10 float-left">
                        <i className="fa fa-mobile" />
                      </div>
                      <div style={{ display: "inline-block", marginRight: 30 }}>
                        <p>{data.user.contact}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </>

    );
};

const StatsCard = ({data})=>{
    return( <div className="row">
    <div className="col-md-6 ">
      <div className="row mt-2">
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fa fa-usd font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SAR SADsdsadsad</span>
                <br />
                Total Earning
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fas fa-dolly-flatbed font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SADsdsadsad</span>
                <br />
                Completed Orders
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fa fa-money font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SAR SADsdsadsad</span>
                <br />
                Pending Delivery Charges
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fa fa-money font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SAR SADsdsadsad</span>
                <br />
                Pending COD
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fas fa-dolly-flatbed font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SADsdsadsad</span>
                <br />
                Total Orders
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fas fa-dolly-flatbed font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SADsdsadsad</span>
                <br />
                Pending Order (pickups)
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fas fa-dolly-flatbed font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SADsdsadsad</span>
                <br />
                Return Orders
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fas fa-dolly-flatbed font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SADsdsadsad</span>
                <br />
                Order Pending Deliveries
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="flex-row col-md-6">
          <div className="thumnail-box">
            <div className="icon color-default fs-26 mr-10 float-left">
              <i className="fa fa-exclamation-circle font40" />
            </div>
            <div className="float-left">
              <p>
                <span className="font20">SADsdsadsad</span>
                <br />
                Active Shipment Issues
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <h4>Account Users</h4>
      <div className="profile__avatar-small">
        <img
          src="../../../../../assets/img/avatar-png-icon-6.png"
          alt
          title
        />
      </div>
      <div className="profile__avatar_small_addnew">
        <a>
          <i className="fa fa-user-plus" aria-hidden="true" />
        </a>
      </div>
      <div className="profile__avatar_small_addnew marginleft10">
        <a>
          <i className="fa fa-group" aria-hidden="true" />
        </a>
      </div>
      <div></div>
    </div>
  </div>);
}
export default ShipperDashboard;
