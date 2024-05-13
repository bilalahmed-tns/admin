import React, { useEffect, useState } from "react";
import Header from "./Header";
import DataProvider from "./DataProvider";
import CreditReportSummary from "./creditReportSummary";
import PreviousInquiries from "./previousInquiries";
import DefaultProductSummary from "./defaultProductSummary";
import GurantersDefaultSummry from "./gaurantersDefaultSummary";
import BouncingCheckSummry from "./BouncingCheckSummary";
import PublicNotes from "./publicNotes";
import EnforcementJudgement from "./enforcementJudgement";
import ProductDetail from "./productDetail";
import MemberNarative from "./memberNarrative";
import PersonalNarative from "./personalNarrative";
import ContactNumbers from "./contactNumbers";
import Addresses from "./addresses";

import Disclaimer from "./disclaimer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function UserSimah({ active }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [state, setState] = useState();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("id");
  const data = useSelector(
    (state) => (state.getSimahReport && state.getSimahReport[0]) || []
  );
  const w1 = "w-2/12 text-center";
  const w2 = "w-10/12";
  useEffect(() => {
    dispatch({
      type: "GET_SIMAH_REPORT",
      payload: userId,
    });
  }, []);

  const temp2 = data?.creditInstrumentDetails?.filter(
    (item) => item?.ciStatus?.creditInstrumentStatusDescEn === "Active"
  );
  // console.log("helo to from temp 2 ", temp2);
  // console.log("data", data?.creditInstrumentDetails);

  useEffect(() => {
    // console.log("active", active);
    if (data?.creditInstrumentDetails) {
    }
    if (data?.creditInstrumentDetails && active === "All") {
      const temp = data?.creditInstrumentDetails?.filter(
        (item) => item?.ciStatus?.creditInstrumentStatusDescEn
      );
      setState(temp);
      console.log("All", temp);
    } else if (data?.creditInstrumentDetails && active === "Default Products") {
      const temp = data?.creditInstrumentDetails?.filter(
        (item) => item?.ciStatus?.creditInstrumentStatusDescEn === "Default"
      );
      setState(temp);
      console.log("Default", temp);
    } else if (data?.creditInstrumentDetails && active === "Closed Products") {
      const temp = data?.creditInstrumentDetails?.filter(
        (item) => item?.ciStatus?.creditInstrumentStatusDescEn === "Closed"
      );
      setState(temp);
      console.log("Closed", temp);
    } else if (data?.creditInstrumentDetails && active === "Active Products") {
      const temp = data?.creditInstrumentDetails?.filter(
        (item) => item?.ciStatus?.creditInstrumentStatusDescEn === "Active"
      );
      setState(temp);
      console.log("Active", temp);
    }
  }, [active]);
  return (
    <>
      {data.length < 1 ? (
        <div className=" px-10 py-20 bg-white  border  w-full mt-4 md:mt-0 text-center text-lg font-semibold opacity-80">
          Credit Bureau Report not available !
        </div>
      ) : (
        <div className="  py-10   w-full mt-4 md:mt-0">
          {data?.reportDetails && (
            <Header
              data={data?.reportDetails}
              data2={data?.providedDemographicsInfo}
            />
          )}
          {data?.providedDemographicsInfo && (
            <DataProvider
              data={data?.providedDemographicsInfo}
              data2={data?.reportDetails}
              w1={w1}
              w2={w2}
            />
          )}
          {data?.summaryInfo && (
            <CreditReportSummary w1={w1} w2={w2} data={data?.summaryInfo} />
          )}
          {data?.prevEnquiries && (
            <PreviousInquiries w1={w1} w2={w2} data={data?.prevEnquiries} />
          )}
          {data?.creditInstrumentDetails && (
            <>
              {state?.map((v, k) => {
                return <ProductDetail w1={w1} w2={w2} data={v} />;
              })}
            </>
          )}

          {data?.primaryDefaults && (
            <DefaultProductSummary
              w1={w1}
              w2={w2}
              data={data?.primaryDefaults}
            />
          )}

          {/* <BouncingCheckSummry w1={w1} w2={w2} /> */}
          {/* <PublicNotes w1={w1} w2={w2} /> */}

          {data?.guarantorDefaults && (
            <GurantersDefaultSummry
              w1={w1}
              w2={w2}
              data={data?.guarantorDefaults}
            />
          )}

          {data?.judgements && (
            <EnforcementJudgement w1={w1} w2={w2} data={data?.judgements} />
          )}
          {data?.memberNarratives && (
            <MemberNarative w1={w1} w2={w2} data={data?.memberNarratives} />
          )}

          {data?.contacts && (
            <ContactNumbers w1={w1} w2={w2} data={data?.contacts} />
          )}
          {data?.addresses && (
            <Addresses w1={w1} w2={w2} data={data?.addresses} />
          )}
          {data?.personalNarratives && (
            <PersonalNarative w1={w1} w2={w2} data={data?.personalNarratives} />
          )}
          {data?.disclerText && (
            <Disclaimer w1={w1} w2={w2} data={data?.disclerText} />
          )}
        </div>
      )}
    </>
  );
}
export default UserSimah;
