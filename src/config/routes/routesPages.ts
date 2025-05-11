import MainLayout from "../../layouts/mainLayout";
import HomePageComponent from "../../pages/home";
import TechnologiesPageComponent from "../../pages/techonologies";

const routesPages = [
  {
    path: '/',
    title: 'Home',
    component: HomePageComponent,
    layout: MainLayout,
  },
  {
    path: '/technologies',
    title: 'Tecnologías',
    component: TechnologiesPageComponent, 
    layout: MainLayout,
  },
];

export default routesPages;
