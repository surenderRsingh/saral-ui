import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { changeContext } from "../../actions";
import { connect } from "react-redux";

const useContext = (history,changeContext) => {

 useEffect ( ()=> {
    changeContext (history.location.pathname.substring(1));
    return history.listen((location) =>{
      changeContext(location.pathname.substring(1))}
        );
        
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[history]);
}
const InnerLayout = (props) => {
  const history = useHistory();
  useContext(history,props.changeContext);

  return (
    <div className="container-fluid mx-3 mt-1 my-3 px-1  d-flex flex-column ">
      {props.children}
    </div>
  );
};

const mapDispatchToProps = dispatch =>  ({
  changeContext:(context)=>dispatch(changeContext(context))
});

export const Layout =  connect(null,mapDispatchToProps)(InnerLayout);