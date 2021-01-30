import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BootService } from 'app-lib';

@Component({
    selector: 'app-choose-wallet-dlg',
    templateUrl: './choose-wallet-dlg.component.html',
    styleUrls: ['./choose-wallet-dlg.component.less']
})
export class ChooseWalletDlgComponent implements OnInit {

    constructor(public boot: BootService, public dialogRef: MatDialogRef<ChooseWalletDlgComponent>) { }

    ngOnInit(): void {
    }

    connectWC() {
        this.dialogRef.close();
        this.boot.connectWC();
    }

    connectBinance() {
        this.dialogRef.close();
        this.boot.connectBinance();
    }

    connectMetaMask() {
        this.dialogRef.close();
        this.boot.connentMetaMask();
    }

    connectTokenPocket() {
        this.dialogRef.close();
        this.boot.connectTokenPocket();
    }

}
