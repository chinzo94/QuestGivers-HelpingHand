import { NgModule, ErrorHandler} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SelectPage } from '../pages/select/select';
import { ViewStatsPage } from '../pages/viewStats/viewStats';
import { CreatePage } from '../pages/create/create';
import { JournalPage } from '../pages/journal/journal';
import { RollPage } from '../pages/roll/roll';
import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDYH3gp6pufmt-P-K7mcJ2Idy6OoSH5ZoM",
    authDomain: "helpinghand-2afe3.firebaseapp.com",
    databaseURL: "https://helpinghand-2afe3.firebaseio.com",
    projectId: "helpinghand-2afe3",
    storageBucket: "helpinghand-2afe3.appspot.com",
    messagingSenderId: "619781676709"
};

@NgModule({
  declarations: [
    MyApp,
    SelectPage,
    ViewStatsPage,
    CreatePage,
    RollPage,
    JournalPage,
    HomePage
    //TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SelectPage,
    ViewStatsPage,
    CreatePage,
    RollPage,
    JournalPage,
    HomePage
    //TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
