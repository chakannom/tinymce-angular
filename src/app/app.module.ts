import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditorModule } from '../../tinymce-angular-component/src/editor/editor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
      EditorModule.forRoot({
          baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.13/'
      }),
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
