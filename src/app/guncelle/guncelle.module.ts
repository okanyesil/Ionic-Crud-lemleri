import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuncellePageRoutingModule } from './guncelle-routing.module';

import { GuncellePage } from './guncelle.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GuncellePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [GuncellePage]
})
export class GuncellePageModule {}
