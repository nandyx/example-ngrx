import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from 'src/store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../../store/effects/user.effects';
import { UserService } from 'src/services/user.service';
import { UserState } from 'src/services/user.state';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    StoreModule.forFeature(fromReducer.userFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserService, UserState],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
