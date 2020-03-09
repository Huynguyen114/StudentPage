import StudentPage from '../containers/StudentPage';
import AdminHomePage from '../containers/AdminHomePage';

export const ROUTES = [
  {
    path: '/',
    name: 'Trang quan tri',
    exact: true,
    component: AdminHomePage
  },
  {
    path: '/student',
    name: 'Quan ly sinh vien',
    component: StudentPage
  }
];
