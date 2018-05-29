import React from "react";
import { Switch, Route } from "react-router";
import Calendario from "../components/pages/Calendario"
import Classifica from "../components/pages/Classifica"

const Router = () => {
   return (
       <main>
           <Switch>
               <Route exact path="/" component={() => <Calendario label={"Coppa Italia"}/>} />
               <Route path="/champions" component={() => <Calendario label={"Champions League"}/>} />
               <Route path="/europe" component={() => <Calendario label={"Europe Leauge"}/>} />
               <Route path="/classifica" component={() => <Classifica label={"Coppa Italia"}/>} />
               <Route path="/classifica-champions" component={() => <Classifica label={"Champions League"}/>} />
               <Route path="/classifica-europe" component={() => <Classifica label={"Europe Leauge"}/>} />
           </Switch>
       </main>
   )
 }

export default Router;