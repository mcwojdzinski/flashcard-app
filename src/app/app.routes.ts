import { Routes } from '@angular/router';
import { ComponentsListView } from './views/components-list-view/components-list-view';
import { StudyModeComponent } from './views/study-mode-component/study-mode-component';
import { AllCardsComponent } from './views/all-cards-component/all-cards-component';

export const routes: Routes = [
    {
        path: '', component: StudyModeComponent
    },
    {
        path: 'all-cards', component: AllCardsComponent
    },
    {
        path: 'components-list', component: ComponentsListView
    }
];
