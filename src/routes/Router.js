import React from "react";
import { Switch, Route } from "react-router";
import CoppaItalia from "../components/pages/CoppaItalia"
import ChampionsLeague from "../components/pages/ChampionsLeague"
import EuropeLeague from "../components/pages/EuropeLeague"
import ClassificaCoppaItalia from "../components/pages/ClassificaCoppaItalia"
import ClassificaEurope from "../components/pages/ClassificaEurope"
import ClassificaChampions from "../components/pages/ClassificaChampions"

const Router = () => {
   return (
       <main>
           <Switch>
               <Route exact path="/" component={CoppaItalia} />
               <Route path="/champions" component={ChampionsLeague} />
               <Route path="/europe" component={EuropeLeague} />
               <Route path="/classifica" component={ClassificaCoppaItalia} />
               <Route path="/classifica-europe" exact component={ClassificaEurope} />
               <Route path="/classifica-champions" exact component={ClassificaChampions} />
           </Switch>
       </main>
   )
 }

export default Router;