import React, { useEffect } from "react";
import WaveAnimation from "Components/Loading"; // Adjust the path based on your file structure
import { useSelector, useDispatch } from "react-redux";
import * as action from "../Services/redux/reducer";

function MainTemplate({ children }) {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.Loading);
  const state = useSelector((state) => state);
  console.log("state", state);

  useEffect(() => {
    const storage = localStorage.getItem("user");
    if (storage) {
      const user = JSON.parse(storage);
      console.log("user", user);
      if (user?.islogin) {
        dispatch(
          action.Auth({
            islogin: user?.islogin,
            user: user?.data,
            role: user?.data?.roles[0],
            token: user?.data?.token,
          })
        );
      }
    }
  }, []);

  return (
    <div>
      <WaveAnimation show={loading} />
      <div>{children}</div>
    </div>
  );
}
export default MainTemplate;
