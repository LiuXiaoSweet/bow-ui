import { Component, ViewChild } from '@angular/core';
import { HeaderComponent, LanguageService } from 'app-lib';
import { MatDialog } from '@angular/material/dialog';
import { ChooseWalletDlgComponent } from 'app-lib';
import { InstallWalletDlgComponent } from 'app-lib';
import { ProxyService } from 'app-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'sssp-app';

    curTab = 0;

    @ViewChild('header')
    header: HeaderComponent;

    constructor(public boot: ProxyService, public lang: LanguageService, private dialog: MatDialog) {
        if (this.boot.isMetaMaskInstalled() || this.boot.isBinanceInstalled()) {
            let web3Type = localStorage.getItem('web3Type');
            if (web3Type && web3Type === 'walletconnect') {
                this.boot.connectWC();
            } else if (web3Type && web3Type === 'metamask') {
                this.boot.connentMetaMask();
            } else if (web3Type === 'binance') {
                this.boot.connectBinance();
            } else if (web3Type === 'tokenPocket') {
                this.boot.connectTokenPocket();
            } else {
                this.chooseWallet();
            }
        }
    }



    changeTab(tab) {
        this.curTab = tab;
    }

    chooseWallet() {
        let dlgRef = this.dialog.open(ChooseWalletDlgComponent, {
            height: 'auto',
            minWidth: '30%'
        });
        dlgRef.afterClosed().toPromise().then(res => {
            this.header.onLoaded();
        });
    }

    public async connectWallet() {
        if (!this.boot.isMetaMaskInstalled() && !this.boot.isBinanceInstalled()) {
            this.dialog.open(InstallWalletDlgComponent, {
                height: 'auto',
                width: '30%'
            });
            return;
        } else {
            this.chooseWallet();
        }
    }

    public getVpDiff() {
        let r = this.boot.poolInfo.virtualPrice.minus(1).multipliedBy(100).abs();
        if (r.comparedTo(100) === 0) {
            return null;
        } else {
            return r;
        }
    }



}
