import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./components/Page/MainPage";
import {Layout, Menu} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import AppHeader from "./Layout/Header/AppHeader";
import AppFooter from "./Layout/Footer/AppFooter";
import AdminPage from "./components/Page/AdminPage";
import LoginPage from "./components/Page/LoginPage";

function App() {

  return (
      <>
        <Router>
            <Layout style={{minHeight: '100vh'}}>
                <AppHeader/>
                <Content style={{padding: '30px 30px'}}>
                    <Switch>
                        <Route exact path="/" component={LoginPage}/>
                        <Route exact path="/main" component={MainPage}/>
                        <Route exact path="/admin" component={AdminPage}/>
                        <Route path='*' component={MainPage}/>
                    </Switch>
                </Content>
                <AppFooter/>
            </Layout>

        </Router>
      </>
  );
}

export default App;
