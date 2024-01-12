import React from "react";
import CardMain from "../../../Components/Cards/main";
import { useState, useRef } from "react";
import { Button } from "Components";
import { RiImageAddLine } from "react-icons/ri";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import WaveAnimation from "Components/Loading"; // Adjust the path based on your file structure
import * as action from "Services/redux/reducer";
import TextEditor from "./textEditor";
function CreateUser() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const message = useSelector((state) => state.message);
  const open = useSelector((state) => state.open);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.Loading);

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [notificationType, setNotificationType] = useState("option1");
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  const handleClose = () => {
    dispatch(action.Message({ open: false })); // Closing the message
  };

  const fileInputRef = useRef(null); // Create a ref for the file input

  function handleSelectImage(e) {
    console.log("slec", e.target.files);
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }
  function handleClick() {
    fileInputRef.current.click();
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      "name",
      name,
      "link",
      link,
      "description",
      description,
      "notificationType",
      notificationType
    );
    // dispatch({
    //   type: "Add_NEW_USER",
    //   payload: {
    //     email: email,
    //     username: username,
    //     password: password,
    //     name: firstName,
    //   },
    // });
  }

  return (
    <div className="md:mt-0 mt-5">
      <WaveAnimation show={loading} />
      <form onSubmit={handleSubmit}>
        <CardMain width="w-full" heading={"Create Notification"}>
          {/* <div className="flex flex-row justify-center ">
            <div
              onClick={handleClick}
              className="h-32 w-32 overflow-hidden rounded-full border border-primary text-center justify-center flex  flex-row items-center text-primary hover:bg-gray-100 duration-200 cursor-pointer">
              {!image && <RiImageAddLine style={{ fontSize: 70 }} />}
              {image && <img src={image} className="h-full w-full " />}
            </div>
          </div> */}

          <div className="flex md:flex-row flex-col md:space-x-20 mt-5 rtl:space-x-reverse">
            <div className="w-full w-full space-y-5">
              <InputField
                heading={t("Compaign Name")}
                value={name}
                onChange={(e) => setName(e)}
              />
              <InputField
                heading={t("Navigation Link")}
                value={link}
                onChange={(e) => setLink(e)}
              />

              <Select
                heading={t("Notification Type")}
                type="select"
                // value={role}
                options={t(notificationType)}
                onChange={(e) => setNotificationType(e)}
              />
              <Description
                heading={t("Description")}
                handleChange={(e) => setDescription(e)}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end mt-10">
            <Button
              type="submit"
              buttonValue={t("Submit")}
              buttonStyle="px-20 py-2 w-full md:w-max"
            />
          </div>
        </CardMain>
      </form>
      <div className="w-full">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleSelectImage}
          style={{ display: "none" }}
        />
      </div>
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
export default CreateUser;

function Select({ heading, value, onChange, type }) {
  const { t } = useTranslation();

  var options = [
    { value: "option1", label: "Option1" },
    { value: "option1", label: "option1" },
    { value: "option2", label: "option2" },
  ];
  return (
    <div className="flex md:flex-row flex-col w-full">
      <div className="md:w-1/3 w-full flex flex-row md:justify-between items-center ">
        <a></a>
        <a className="text-sm text-gray-700 mx-6">{heading} :</a>
      </div>
      <div className="md:w-2/3	w-full">
        <select
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className="border-primary border rounded-md px-3 py-2 outline-none mt-2 md:w-3/4	w-full">
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {t(option.label)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function InputField({ heading, value, onChange, type }) {
  return (
    <div className="flex md:flex-row flex-col w-full">
      <div className="md:w-1/3 w-full flex flex-row md:justify-between items-center ">
        <a></a>
        <a className="text-sm text-gray-700 mx-6">{heading} :</a>
      </div>
      <div className="md:w-2/3	w-full">
        <input
          type={type || "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-primary border rounded-md px-3 py-1.5 outline-none mt-2 md:w-3/4	w-full	"
        />
      </div>
    </div>
  );
}

function Description({ heading, value, onChange, type, handleChange }) {
  return (
    <div className="flex md:flex-row flex-col w-full">
      <div className="md:w-1/3 w-full  flex flex-row md:justify-between items-center ">
        <a></a>
        <a className="text-sm text-gray-700 mx-6">{heading} :</a>
      </div>
      <div className="md:w-2/3	w-full">
        <div className="md:w-3/4 w-full">
          <TextEditor handleChange={(e) => handleChange(e)} />
        </div>
      </div>
    </div>
  );
}
