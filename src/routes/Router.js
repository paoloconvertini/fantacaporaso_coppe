import React from "react";
import { Switch, Route } from "react-router";
import CoppaItalia from "../components/pages/CoppaItalia"
import ChampionsLeague from "../components/pages/ChampionsLeague"
import EuropeLeague from "../components/pages/EuropeLeague"

const Router = () => {
   return (
       <main>
           <Switch>
               <Route exact path="/" component={CoppaItalia} />
               <Route path="/champions" component={ChampionsLeague} />
               <Route path="/europe" component={EuropeLeague} />
           </Switch>
       </main>
   )
 }

export default Router;