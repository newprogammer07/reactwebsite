import React from "react";
import { Link } from "react-router-dom";
import LeftNav from "./LeftNav";

export default function AdminHome() {
  return (
    <div>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-2 col-12 ">
            <LeftNav />
          </div>
          <div className="col-lg-10 col-12">
            <div className="row">
              <div className="col-md-6 ">
                <img src="assets/images/bg_1.jpg" alt="" height="450px" width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="text-danger text-center bg-primary ">Admin Section</h4>

                <div className="d-flex">
                  <div className="border  p-3 w-50">Name:</div>
                  <div className="border  p-3 w-50">
                    Dushyant kumar
                  </div>
                </div>
                <div className="d-flex">
                  <div className="border  p-3 w-50">User Name</div>
                  <div className="border  p-3 w-50">
                     Admin
                  </div>
                </div>
                <div className="d-flex">
                  <div className="border  p-3 w-50">Email:</div>
                  <div className="border  p-3 w-50">
                     dushyant180@gmail.com
                  </div>
                </div>
                <div className="d-flex">
                  <div className="border  p-3 w-50">Phone:</div>
                  <div className="border  p-3 w-50">
                      +91-9506061859
                  </div>
                </div>
                <div className="d-flex">
                  <div className="border  p-3 w-50">Role</div>
                  <div className="border  p-3 w-50">
                     Admin
                  </div>
                </div>
                <div>
                  <Link to="/update_profile" className="btn btn-primary w-100 p-2 mt-3">
                    Update Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
