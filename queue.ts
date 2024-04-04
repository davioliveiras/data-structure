export default class Queue{
    private inicio = 0
    private fim = 0 
    private quantidade = 0
    private max = 5
    private lista: number[] = []

    constructor(){
        this.fim = this.max - 1
    }

    private isEmpty(){
        return this.quantidade == 0
    }

    private isFull(){
        return this.quantidade == this.max
    }

    enfileira(item: number){
        if(this.isFull()){
            console.log('A fila esta cheia.')
            return
        }

        this.fim = (this.fim + 1) % this.max
        this.lista[this.fim] = item
        this.quantidade++
    }

    desemfileira(){
        if(this.isEmpty()){
            console.log('A fila está vazia.')
            return
        }

        this.inicio = (this.inicio + 1) % this.max
        this.quantidade--
    }

    showQueue(){
        if(this.isEmpty()){
            console.log('A fila esta vazia.')
            return
        }

        if(this.inicio <= this.fim){
            for(let i = this.inicio; i <= this.fim; i++){
                console.log(this.lista[i])
            }
        } else {
            let aux = this.inicio
            for(let i = 0; i < this.quantidade; i++){
                console.log(this.lista[aux])
                if(aux == this.max -1 ) aux = 0 
                else aux++
            }
        }
    }
}
