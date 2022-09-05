import React from "react";

const AppContext = React.createContext({
  firstTrip: "",
  secondTrip:"",
  isOneWay: false,
  setFirstTrip: () => {

  },
  setSecondTrip: () => {
    
  },
  setIsOneWay: () =>{

  }
});

export default AppContext;