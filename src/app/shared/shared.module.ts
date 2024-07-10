import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, TabComponent, TabContentComponent],
  exports: [TabComponent, TabContentComponent],
})
export class SharedModule {}
