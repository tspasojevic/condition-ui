import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';
import { CommonUiModule } from '@asseco/common-ui';
import { AssecoMaterialModule, MaterialModule } from '@asseco/components-ui';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConditionsUiComponent } from './conditions-ui.component';

const routes: Routes = [
  { path: '', component: ConditionsUiComponent }
];

@NgModule({
  declarations: [ConditionsUiComponent],
  imports: [
    CommonModule,
    CommonUiModule,
    MaterialModule,
    AssecoMaterialModule,
    L10nTranslationModule,
    RouterModule.forChild(routes)
  ],
  exports: [ConditionsUiComponent]
})
export class ConditionsUiModule { }
