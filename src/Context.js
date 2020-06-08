import React, {createContext} from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [colorOption, setColorOption] = React.useState('hex');
    const updateOption = (e) => {
        setColorOption(e.target.value);
        
     }
    return(
      <Context.Provider value={{colorOption, setColorOption, updateOption}}>
          {props.children}
      </Context.Provider>
    )

}

export default ContextProvider