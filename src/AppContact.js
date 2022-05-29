import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/"
import { Switch,BrowserRouter, Route } from "react-router-dom";
import DetailContact from "./Component/DetailContact/DetailContact";
import EditContact from "./Component/EditContact/EditContact";
import Layout from "./Component/Layout/Layout";
import AddContact from "./Pages/AddContact/AddContact";
import NotFound from "./Pages/NotFound/NotFound";
import ShowContact from "./Pages/ShowContacts/ShowContacts";

const AppContact = () => {
    return (  
      <BrowserRouter>
         <Layout>
           <Switch>
                <Route path="/ShowContact/:id" component={DetailContact} />
                <Route path="/EditContacts/:id" component={EditContact} />
                <Route path="/AddContact" component={AddContact} />
                <Route path="/" component={ShowContact} exact/>
                <Route component={NotFound} />
        </Switch>
        </Layout>
      </BrowserRouter>
    );
}
 
export default AppContact;