import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./components/Page/MainPage";
import {Layout, Menu} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import AppHeader from "./Layout/Header/AppHeader";
import AppFooter from "./Layout/Footer/AppFooter";

function App() {

  return (
      <>
        <Router>
            <Layout style={{minHeight: '100vh'}}>
                <AppHeader/>
                <Content style={{padding: '30px 30px'}}>
                    <Switch>
                        <Route exact path="/"/>
                        <Route exact path="/main" component={MainPage}/>
                    </Switch>
                </Content>
                <AppFooter/>
            </Layout>

        </Router>
      </>
  );
}

export default App;
