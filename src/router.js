import React,{Component} from 'react'
import { HashRouter,Route,Switch } from 'react-router-dom'

import App from './App'
import Login from './pages/login'
import Admin from './admin'
import NoMatch from './pages/nomatch/nomatch'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Message from './pages/ui/message'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/formlogin'
import Reg from './pages/form/register'
import BasicTable from './pages/table/basic'
import HighTable from './pages/table/high'

export default class IRouter extends Component {
    render () {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/admin" render = {()=>(
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons} />
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route path="/admin/ui/loadings" component={Loading} />
                                    <Route path="/admin/ui/notification" component={Notice} />
                                    <Route path="/admin/ui/messages" component={Message} />
                                    <Route path="/admin/ui/tabs" component={Tabs} />
                                    <Route path="/admin/ui/gallery" component={Gallery} />
                                    <Route path="/admin/ui/carousel" component={Carousel} />
                                    <Route path="/admin/form/login" component={FormLogin} />
                                    <Route path="/admin/form/reg" component={Reg} />
                                    <Route path="/admin/table/basic" component={BasicTable} />
                                    <Route path="/admin/table/high" component={HighTable} />
                                    <Route  component={NoMatch} />
                                </Switch>
                            </Admin>
                        )}/>
                        <Route path="/order/detail" component={Login} />
                    </Switch>
                    
                </App>
            </HashRouter>
        )
    }
}