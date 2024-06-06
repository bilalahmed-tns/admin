import React, { useState } from "react";
import Family from "./tabs/family";
import Income from "./tabs/income";
function Template() {
  const [state, setState] = useState("Emi Detail");
  const getTab = () => {
    const activeItem = data.find((item) => item.label === state);

    return activeItem ? activeItem.tab : null;
  };

  function setNavigation(stateValue) {
    setState(stateValue);
  }
  // helloooooo
  return (
    <div className=" bg-white  border border-primary w-full rounded-lg ">
      <div className="flex flex-row  ">
        {data?.map((v, k) => {
          return (
            <div
              onClick={() => setNavigation(v.label)}
              className={`px-4 cursor-pointer ${
                state === v.label ? "text-primary " : "text-gray-600 "
              }`}
            >
              <div
                className={`px-3 py-4  w-max  ${
                  state === v.label ? "border-primary border-b-2" : " "
                }`}
              >
                <a className="text-sm">{v.label}</a>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className=" w-full bg-gray-200 "
        style={{ height: 1, marginTop: -1 }}
      ></div>
      <div className=" rtl:space-x-reverse  w-full px-4 flex flex-col justify-center rounded-lg  ">
        <div className="flex flex-row space-x-5 mt-5 ">{getTab()}</div>
      </div>
    </div>
  );
}
export default Template;

const data = [
  {
    label: "Emi Detail",
    tab: <Family />,
  },
  {
    label: "Loan History",
    tab: <Income />,
  },
];
