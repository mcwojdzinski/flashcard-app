import { Routes } from '@angular/router';
import { ComponentsListView } from './views/components-list-view/components-list-view';
import { StudyModeComponent } from './views/study-mode-component/study-mode-component';

export const routes: Routes = [
    {
        path: '', component: StudyModeComponent
    },
    {
        path: 'components-list', component: ComponentsListView
    }
];
