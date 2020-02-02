import Home from '../pages/Home';

const serverRoutes = () => {
  return [
    {
      path: '/',
      component: Home,
      exact: true,
    },
  ];
};

export default serverRoutes;
