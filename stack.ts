export default class Stack{

    private quantidade = 0
    private max = 10
    private lista: number[] = []

    constructor(){}


    private isEmpty(){
        return this.quantidade == 0
    }

    private isFull(){
        return this.quantidade == this.max
    }

    empilha(item: number){
        if(this.isFull()){
            console.log("A pilha esta cheia")
            return
        }

        this.lista[this.quantidade] = item
        this.quantidade++
    }

    desempilha(){
        if(this.isEmpty()){
            console.log('A pilha ta vazia')
            return
        }
        this.quantidade--        
    }

    showMeTheStack(){
        if(this.isEmpty()){
            console.log('A pilha ta vazia')
            return
        }

        for(let i = 0; i < this.quantidade; i++){
            console.log(this.lista[i])
        }
    }
}
