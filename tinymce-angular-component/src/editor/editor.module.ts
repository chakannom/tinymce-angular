import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditorOptions } from './editor.options';
import { EditorComponent } from './editor.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [EditorComponent],
  exports: [EditorComponent]
})
export class EditorModule {
    static forRoot(options: EditorOptions): ModuleWithProviders {
        return {
            ngModule: EditorModule,
            providers: [
                { provide: EditorOptions, useValue: options }
            ],
        };
    }
}
