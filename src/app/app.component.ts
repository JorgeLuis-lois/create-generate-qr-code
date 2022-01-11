import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-generate-qr-code';

  public qrCodeVal: string;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public firstdosedate: string;
  public seconddosedate: string;
  public vaccine: string;

  lista = this.usersService.getDatos();

  constructor(private usersService: UsersService) {
    this.qrCodeVal = "QR code string value";
    this.level = "L";
    this.width = 200;
    this.firstdosedate = 'YYYY/MM/DD';
    this.seconddosedate = 'YYYY/MM/DD';
    this.vaccine = 'Type';

  }

  updateLevel(newValue: "L" | "M" | "Q" | "H") {
    this.level = newValue;
  }
  updateQrInfo(newValue: string, newFirstdosedate: string, newSeconddosedate: string, newVaccine: string) {
    this.qrCodeVal = newValue;
    this.firstdosedate = newFirstdosedate;
    this.seconddosedate = newSeconddosedate;
    this.vaccine = newVaccine;

  }
  updateWidth(newValue: number) {
    this.width = newValue;
  }

}
