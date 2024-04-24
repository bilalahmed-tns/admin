import React, { useEffect } from "react";
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
function UserSimah() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getSimahReport[0]);
  const w1 = "w-2/12 text-center";
  const w2 = "w-10/12";
  useEffect(() => {
    dispatch({
      type: "GET_SIMAH_REPORT",
      payload: 90,
    });
  }, []);
  console.log("data", data);
  return (
    <div className=" px-10 py-10 bg-white  border  w-full mt-4 md:mt-0">
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
        <ProductDetail w1={w1} w2={w2} data={data?.creditInstrumentDetails} />
      )}

      {data?.primaryDefaults && (
        <DefaultProductSummary w1={w1} w2={w2} data={data?.primaryDefaults} />
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
      {data?.addresses && <Addresses w1={w1} w2={w2} data={data?.addresses} />}
      {data?.personalNarratives && (
        <PersonalNarative w1={w1} w2={w2} data={data?.personalNarratives} />
      )}
      {data?.disclerText && (
        <Disclaimer w1={w1} w2={w2} data={data?.disclerText} />
      )}
    </div>
  );
}
export default UserSimah;
