import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { TabContentComponent } from '../tab-content/tab-content.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent implements AfterContentInit {
  @ContentChildren(TabContentComponent)
  tabContents!: QueryList<TabContentComponent>;

  tabs: any[] = [];
  activeTab: number = 0;

  ngAfterContentInit() {
    this.tabs = this.tabContents.map((tab) => ({
      tabtitle: tab.tabtitle,
      icon: tab.icon,
    }));
  }

  selectTab(index: number) {
    this.activeTab = index;
  }
}
