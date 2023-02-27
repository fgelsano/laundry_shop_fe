import Dashboard from '../components/admin/dashboards/Dashboard';
import Customers from '../components/admin/customers/Customers';
import Order from '../components/admin/orders/Order';
import Sales from '../components/admin/reports/Sales';
import Expenditures from '../components/admin/reports/Expenditures';
import NewSMS from './../components/admin/SMS/NewSMS';
import SmsLoadBalance from './../components/admin/SMS/SmsLoadBalance';
import Chart from './../components/admin/reviews/Chart';
import Reviews from './../components/admin/reviews/Reviews';

const routes = [
    {path: '/admin', exact: true, name: 'Admin' },
    {path: '/admin/dashboard', exact: true, name: 'Dashboard' , component: Dashboard },
    {path: '/admin/customers', exact: true, name: 'Customers' , component: Customers},
    {path: '/admin/expenditures', exact: true, name: 'Expenditures' , component: Expenditures},
    {path: '/admin/sales', exact: true, name: 'Sales' , component: Sales},
    {path: '/admin/newSMS', exact: true, name: 'NewSMS' , component: NewSMS},
    {path: '/admin/chart', exact: true, name: 'Chart' , component: Chart},
    {path: '/admin/reviews', exact: true, name: 'Reviews' , component: Reviews},
    {path: '/admin/loadBalance', exact: true, name: 'SmsLoadBalance' , component: SmsLoadBalance},
    {path: '/admin/order', exact: true, name: 'Order' , component: Order},
    {path: '/admin/sales', exact: true, name: 'Sales' , component: Sales},
    {path: '/admin/expenditures', exact: true, name: 'Expenditures' , component: Expenditures},

];

export default routes;