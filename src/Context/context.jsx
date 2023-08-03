import React, { useState, useEffect, useReducer } from "react";

const Context = React.createContext({
  name: "",
  isGood: false,
  someFunction: () => {},
});

const smthReducer = (state, action) => {
  switch (action) {
    case "Smth1":
      return { thatstate: action.val, thatsecond: state.thatsecond };
    case "Smth2":
      return { thatstate: action.val, thatsecond: state.thatsecond };
    default:
      return state;
  }
};


const ContextProvider = (props) => {
  const [smthState, smthDispactcher] = useReducer(smthReducer, {
    thatstate: "smth",
    thatsecond: "smthsecond",
  });
  const {thatsecond : getInfo} = smthState
  
  const [name, setName] = useState("Joshua");
  const [good, setGood] = useState(false);

  const aFunction = (name, feeling) => {
    setName(name);
    setGood(feeling);
  };

  useEffect(() => {
    const theTimeOutFunction = setTimeout(() => {
      console.log("Function running after 100ms")
      aFunction("smth", false);
    }, 100);
    return () => {
      console.log("Cleanup")
      clearTimeout(theTimeOutFunction);
    };
  }, [good, name]);

  return (
    <Context.Provider
      value={{
        name: name,
        isGood: good,
        someFunction: aFunction,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
