import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

interface Option {
  value: string;
  selected?: boolean;
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent {
  @Output() change: EventEmitter<string[]> = new EventEmitter();
  @Input() placeholder: string;
  @Input() set options(options: string[]) {
    if (options) {
      for (const option of options) {
        this._options.push({ value: option });
      }
    }
  }
  public _options: Option[] = [];
  public selectedOptions: string[] = [];
  public isOpen: boolean;

  public toggleOptions(): void {
    this.isOpen = !this.isOpen;
  }

  public toggleOption(option: Option): void {
    option.selected = !option.selected;
  }

  public close(): void {
    this.isOpen = false;
    this.selectedOptions = this._options.filter((op: Option) => op.selected).map((op: Option) => op.value);
    this.change.emit(this.selectedOptions);
  }
}
