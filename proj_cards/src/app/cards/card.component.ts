import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/cards/card";

@Component({
    selector: 'cards',
    styleUrls: ['./card.component.less'],
    templateUrl: './card.component.html',
})

export class cardComponent implements OnInit {

    cards: Card[] = [];
    nome: string = "";
    lista: Array<{ nome: string }> = [];
    conditionClick: boolean = true;
    usuario: string = "Welington Vaz Xavier";
    
    cardDelete: Card = new Card();

    alert: boolean = false;
    alertSuccess: boolean = false;

    mensagemAlert: string = "";

    alertanenhumArquivo: boolean = false;
    alertSalva: boolean = false;
    mensagemSalva: string = "";

    constructor() { }

    ngOnInit(): void { }

    salvar() {
        this.lista.push({ nome: this.nome });
        this.nome = "";
    }

    criarCrads() {
        const novoCard: Card = new Card()
        this.cards.push(novoCard);
        this.conditionClick = true;
    }

    deletarLote() {
        this.cards = [];
    }

    confirmacaoDelete(card: Card) {
        this.alert = true;
        this.cardDelete = card;
        this.mensagemAlert = `O card ${card.id} será excluído, deseja confirmar?`;
    }

    deletarCard(confirmacaoDelete: boolean) {
        let indexCardAtual = this.cards.indexOf(this.cardDelete)

        if (confirmacaoDelete == true) {
            this.cards.splice(indexCardAtual, 1)
            this.alert = false;
            this.alertSuccess = true;
            this.mensagemAlert = `O card foi excluído com secesso!`;
            setTimeout(() => {
                this.alertSuccess = false;
            }, 3000);

        } else if (confirmacaoDelete == false) {
            this.alert = false;
        }
    }

    uploadFiles(event: any, cardIndex: number) {
        const files = event.target.files;
        if (files.length > 0) {
            const file = files[0];
            this.cards[cardIndex].file = file;
            this.cards[cardIndex].fileUrl = '';
            this.cards[cardIndex].fileName = file.name;
        } else {
            this.cards[cardIndex].file = null;
            this.cards[cardIndex].fileUrl = '';
            this.cards[cardIndex].fileName = '';
        }
    }

    salvarArquivo(cardIndex: number) {
        const card = this.cards[cardIndex];
        if (card.file) {
            this.alertSalva = true;
            this.mensagemSalva = `Arquivo ${card.fileName} salvo com sucesso.`;
            setTimeout(() => {
                this.alertSalva = false;
            }, 2000)
            
        } else {
            this.alertanenhumArquivo = true;
            this.mensagemSalva = `Nenhum arquivo para salvar.`;                
            setTimeout(() => {
                this.alertanenhumArquivo = false;
            }, 3000);
        }
    }
}