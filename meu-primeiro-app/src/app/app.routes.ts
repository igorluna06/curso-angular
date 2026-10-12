import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: "home", // Caminho da rota
        component: Home // Componente a ser renderizado quando a rota for acessada
    }

];
