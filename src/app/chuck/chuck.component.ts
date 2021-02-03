import { Component, ChangeDetectionStrategy } from '@angular/core';

enum Mode {
  random = 'random',
  serach = 'serach'
}

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChuckComponent {
  public activeMode: Mode = Mode.random;
  public mode = Mode;

  public setMode(selectedMode: Mode): void {
    this.activeMode = selectedMode;
  }

  public get modes(): string[] {
    return Object.keys(Mode);
  }

}
