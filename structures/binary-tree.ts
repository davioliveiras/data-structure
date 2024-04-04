class Pointer{
    private item: number
    private esquerda: Pointer | null
    private direita: Pointer | null

    constructor(item: number){
        this.item = item
        this.direita = null
        this.esquerda = null
    }

    getItem(){
        return this.item
    }    

    getDireita(){
        return this.direita
    }

    getEsquerda(){
        return this.esquerda
    }

    setDireita(newPointer: Pointer | null){
        this.direita = newPointer
    }

    setEsquerda(newPointer: Pointer | null){
        this.esquerda = newPointer
    }
}

export default class Arvore{
    private root: Pointer | null

    constructor(first?: number){
        if(first)
        this.root = new Pointer(first)
        else
        this.root = null
    }  

    insere(item: number){
        this.addItem(this.root, item)
    }

    private addItem(noParm: Pointer | null, item: number){

        if(noParm == null){
            return new Pointer(item)
        }

        if(item < noParm.getItem()){
            noParm.setEsquerda(this.addItem(noParm.getEsquerda(), item))
        }

        if(item > noParm.getItem()){
            noParm.setDireita(this.addItem(noParm.getDireita(), item))
        }

        return noParm
    }

    private EmOrdem(no: Pointer | null){
        if(no){
            this.EmOrdem(no.getEsquerda())
            console.log(no.getItem())
            this.EmOrdem(no.getDireita())
        }
    }

    showMeTheTree(){
        if(!this.root){
            console.log('arvore vazia')
            return
        }

        this.EmOrdem(this.root)
    }
}


