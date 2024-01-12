import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PiCheckFatThin } from "react-icons/pi";
import CardMain from "Components/Cards/main";
import { Model } from "Components";
import { useDispatch, useSelector } from "react-redux";
import * as action from "Services/redux/reducer";
import { Alert, Snackbar } from "@mui/material";
import WaveAnimation from "Components/Loading"; // Adjust the path based on your file structure
import { RxCross2 } from "react-icons/rx";
import { CgArrowsExchange } from "react-icons/cg";

function LaonApplication() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [modelOpen, setModelOpen] = useState(false);
  const [active, setActive] = useState("Approve");
  const message = useSelector((state) => state.message);
  const open = useSelector((state) => state.open);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.Loading);

  const handleClose = () => {
    dispatch(action.Message({ open: false }));
  };

  return (
    <div className="py-5">
      <WaveAnimation show={loading} />

      <CardMain
        width="w-full"
        iconStyle="text-3xl text-primary "
        headerDisable={true}>
        <div className="">
          <div className="flex flex-row justify-between items-center border-b-2	 border-gray-200 pb-3 pt-1 ">
            <div className="flex flex-row">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              />
              <div className="flex flex-col mx-3 space-y-0.5">
                <a className="text-xs text-gray-400">Name</a>
                <a className="text-sm text-gray-700 font-semibold">Rakesh Kr</a>
                <a className="text-xs text-gray-400">Assistant Manager</a>
              </div>
            </div>
            <div className="flex flex-row">
              <Text heading="Loan Amount" value={"30,000"} />
              <Text heading="Monthly Income" value={"30,000"} />{" "}
              <Text heading="Tenure" value={"36 Months"} />{" "}
              <Text heading="CIBIL Score" value={"30,000"} />{" "}
              <Text heading="Application Number" value={"PL1000134"} />{" "}
            </div>
            <div>
              <a className="text-xs text-gray-400 px-2">2 Days ago</a>
            </div>
          </div>
          <div className="flex flex-row pt-7">
            <div className="flex flex-row w-1/2 ">
              <div className="flex flex-row w-1/2 ">
                <div className="flex flex-col pb-5 space-y-5">
                  <div className="flex flex-col">
                    <a className="text-xs text-gray-400">User ID</a>
                    <a className="text-sm text-gray-700 font-semibold opacity-90">
                      PL1000134
                    </a>
                  </div>

                  <div className="flex flex-col ">
                    <a className="text-xs text-gray-400 uppercase">
                      Employment Type
                    </a>
                    <a className="text-sm text-gray-700  opacity-90">
                      Salaried
                    </a>
                    <a className="text-sm text-gray-700  opacity-90">
                      Mahindra Group
                    </a>
                  </div>

                  <div className="flex flex-col ">
                    <a className="text-xs text-gray-400 ">
                      Years Of Experience Current Company
                    </a>
                    <a className="text-sm text-gray-700  opacity-90">2</a>
                  </div>
                  <div className="flex flex-col ">
                    <a className="text-xs text-gray-400 ">
                      Total Years Of Experience
                    </a>
                    <a className="text-sm text-gray-700  opacity-90">5</a>
                  </div>
                  <div className="flex flex-col ">
                    <a className="text-xs text-gray-400 uppercase text-green-400">
                      E-verified{" "}
                    </a>
                    <a className="text-sm text-gray-700  opacity-90">
                      Pan Card &nbsp; 2139912
                    </a>
                  </div>
                  <div className="flex flex-col ">
                    <a className="text-xs text-gray-400 uppercase text-green-400">
                      E-verified{" "}
                    </a>
                    <a className="text-sm text-gray-700  opacity-90">
                      Adhaar &nbsp; #J2139912
                    </a>
                  </div>
                  <div className="flex flex-col ">
                    <a className="text-xs text-gray-400 ">Contact Details</a>
                    <a className="text-sm text-gray-700  opacity-90">
                      niktash@gmail.com
                    </a>
                    <a className="text-sm text-gray-700  opacity-90">
                      1213123 | 12312312
                    </a>
                  </div>
                  <div className="flex flex-col ">
                    <a className="text-xs text-gray-400 ">Current Address</a>
                    <a className="text-sm text-gray-700  opacity-90">
                      oldpura / taxax 801 A Block
                    </a>
                    <a className="text-sm text-gray-700  opacity-90">
                      Kerala , United States
                    </a>
                    <a className="text-xs text-blue-400  opacity-80">
                      View All
                    </a>
                  </div>

                  <div className="flex flex-col ">
                    <a className="text-xs text-gray-700 ">Documents</a>

                    <a className="text-xs text-blue-400  opacity-80">
                      Preview &nbsp; &nbsp; Download All
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-1/2  border-l-2	 border-r-2	 border-gray-200 px-4">
                <div className="flex flex-col  pb-5 space-y-6">
                  <div className="flex flex-col">
                    <a className="text-xs text-gray-400 uppercase">
                      CIBIL Score
                    </a>
                    <a className="text-xl text-green-500 font-semibold opacity-90">
                      750
                    </a>
                    <a className="text-xs text-blue-400  opacity-80">
                      View CIBIL Report
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-xs text-gray-400 uppercase">
                      Custom Score
                    </a>
                    <a className="text-xl text-green-500 font-semibold opacity-90">
                      750
                    </a>
                    <a className="text-xs text-blue-400  opacity-80">
                      View Custom Report
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-xs text-gray-400 uppercase">ABB</a>
                    <a className="text-xl text-gray-600 font-semibold opacity-90">
                      30,000
                    </a>
                  </div>

                  <div className="flex flex-col">
                    <a className="text-xs text-gray-400 uppercase">
                      Eligibility
                    </a>
                    <a className="text-xl text-green-500 font-semibold opacity-90">
                      4,00,000
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-xs text-gray-400 uppercase">Tenure</a>
                    <a className="text-xl text-gray-600 font-semibold opacity-90">
                      36 Month
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-xs text-gray-400 uppercase">FOIR</a>
                    <a className="text-xl text-gray-600 font-semibold opacity-90">
                      12%
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2  px-4 ">
              <div className="w-3/5		space-y-10">
                <Progress
                  heading="Eligibility Loan Amount"
                  value="30,000"
                  progressValue="50%"
                  min="Min 2K"
                  max="Max 4 Lakh"
                />

                <Progress
                  heading="Tenure"
                  value="48 Months"
                  progressValue="80%"
                  min="Min 6 Months"
                  max="Min 36 Months"
                />
              </div>

              <div className="flex flex-row mt-6">
                <Text2 heading="Intrest Rate" value={"10%"} />
                <Text2 heading="Fees" value={"30,000"} />{" "}
                <Text2 heading="EMI" value={"3500"} />{" "}
              </div>

              <div className="flex flex-row justify-between mt-10">
                <Button
                  setActive={(e) => setActive(e)}
                  active={active}
                  value="Approve"
                  icon={<PiCheckFatThin className="text-2xl" />}
                />
                <Button
                  setActive={(e) => setActive(e)}
                  active={active}
                  value="Follow UP"
                  icon={<CgArrowsExchange className="text-2xl" />}
                />
                <Button
                  setActive={(e) => setActive(e)}
                  active={active}
                  value="Reject"
                  icon={<RxCross2 className="text-2xl" />}
                />
              </div>
              <textarea
                placeholder="Reason"
                className=" text-sm max-h-36   border border-gray-300 rounded-md bg-gray-50 outline-none px-3 py-2 mt-4"
              />
              <div className="mt-5 flex flex-row justify-between">
                <div></div>

                <div
                  className={` w-min text-white bg-blue-500 hover:opacity-80 duration-200 cursor-pointer border-blue-400 border px-8 py-2 rounded-md  items-center flex flex-col   `}>
                  <div className="uppercase text-xs font-semibold">Submit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardMain>

      <Model
        heading="Delete User"
        isOpen={modelOpen}
        style="w-1/3"
        innerStyle="py-10"
        setState={() => setModelOpen(!modelOpen)}
        action1Value="Cancel"
        action2Value="Delete"
        action2={() => setModelOpen(false)}
        action1={() => setModelOpen(!modelOpen)}>
        <a className=" text-xl text-gray-800 ">
          Are You Sure To Delete
          <span className="font-semibold"> Ali Imtayaz</span> ?
        </a>
      </Model>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={!error ? "success" : "error"}
          sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default LaonApplication;

function Button({ value, icon, active, setActive }) {
  return (
    <div
      onClick={() => setActive(value)}
      className={`${
        active == value ? "text-white bg-blue-400" : "text-blue-400"
      } hover:opacity-80 duration-200 cursor-pointer border-blue-400 border px-8 py-4 rounded-md  items-center flex flex-col   `}>
      {icon}
      <div className="uppercase text-xs font-semibold">{value}</div>
    </div>
  );
}
function Progress({ heading, value, progressValue, min, max }) {
  return (
    <div className="flex flex-col ">
      <a className="text-xs text-gray-400 uppercase">{heading}</a>
      <a className="text-xl text-gray-700 font-semibold opacity-90 mt-1">
        {value}
      </a>
      <div className="relative mt-1">
        <div
          className="w-full bg-gray-400  absolute rounded-full"
          style={{ height: 1 }}></div>
        <div className="" style={{ marginTop: -5 }}>
          <div
            className="relative items-center flex justify-end "
            style={{ width: progressValue }}>
            <div
              className="w-full bg-blue-500  flex flex-row justify-between absolute rounded-full"
              style={{ height: 1 }}></div>

            <div className="h-3  w-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <a className="text-xs text-gray-600 opacity-90 mt-1">{min}</a>{" "}
        <a className="text-xs text-gray-600 opacity-90 mt-1">{max}</a>{" "}
      </div>{" "}
    </div>
  );
}

function Text({ heading, value }) {
  return (
    <div className="flex flex-col mx-3 space-y-0.5 px-1">
      <a className="text-xs text-gray-400">{heading}</a>
      <a className="text-sm text-gray-700 font-semibold opacity-90 p-1">
        {value}
      </a>
    </div>
  );
}

function Text2({ heading, value }) {
  return (
    <div className="flex flex-col space-y-0.5  w-1/3	">
      <a className="text-xs text-gray-400">{heading}</a>
      <a className="text-sm text-gray-700  opacity-90 pt-1">{value}</a>
    </div>
  );
}
