import React from "react";
import { Switch, Route } from "react-router";
import CoppaItalia from "../components/pages/CoppaItalia"
import ChampionsLeague from "../components/pages/ChampionsLeague"
import EuropeLeague from "../components/pages/EuropeLeague"
import Classifica from "../components/pages/Classifica"

const Router = () => {
   return (
       <main>
           <Switch>
               <Route exact path="/" component={CoppaItalia} />
               <Route path="/champions" component={ChampionsLeague} />
               <Route path="/europe" component={EuropeLeague} />
               <Route path="/classifica" component={() => <Classifica label={"Coppa Italia"}/>} />
               <Route path="/classifica-europe" component={() => <Classifica label={"Europe Leauge"}/>} />
               <Route path="/classifica-champions" component={() => <Classifica label={"Champions League"}/>} />
           </Switch>
       </main>
   )
 }

export default Router;