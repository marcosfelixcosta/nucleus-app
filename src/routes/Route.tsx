import React from "react";
import {RouteProps as ReactDOMRouterProps, Route as ReactDOMRoute, Redirect} from 'react-router-dom';

import { useAuth } from "../context/AuthContext";

interface RouterProps extends ReactDOMRouterProps{
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouterProps> =({isPrivate = false, component: Component, ...rest})=> {
const {nome} = useAuth();

return (
  <ReactDOMRoute {...rest} render={({location})=> {
    return isPrivate=== !!nome ? (
      <Component />
     ) : (
      <Redirect to = {{pathname: isPrivate ? '/' : '/dasboard', state:{from: location}}} />
     );
  }} />
);

};



export default Route;