class Pointer<Type>{
    private item: Type
    private next: Pointer<Type> | null

    constructor(item: Type){
        this.item = item
        this.next = null
    }

    getItem(){
        return this.item
    }    

    getNext(){
        return this.next
    }

    setNext(newPointer: Pointer<Type> | null){
        this.next = newPointer
    }
}

export default class LinkedList<Type>{
    private head: Pointer<Type> | null

    constructor(first?: Type){
        if(first)
            this.head = new Pointer<Type>(first)
        else
            this.head = null
    }

    addOnList(newItem: Type){
        const newPointer = new Pointer(newItem)
        
        if(!this.head)
            this.head = newPointer
        else {

            let lastPointer: Pointer<Type> = this.head
            let temp: Pointer<Type> | null

            while (lastPointer.getNext() != null){
                temp = lastPointer.getNext()

                if(temp){
                    lastPointer = temp
                }                
            }            
            lastPointer.setNext(newPointer)
        }
    }

    removeFromList(){
        if(!this.head)
            console.log('A lista já esta vazia')
        else{
            let lastPointer = this.head
            let temp: Pointer<Type> | null

            if(!lastPointer.getNext()){
                this.head = null
                return
            }

            while(lastPointer.getNext() != null){
                temp = lastPointer.getNext()

                if(temp){
                   if(!temp.getNext()){
                    lastPointer.setNext(null)
                   }else{
                    lastPointer = temp
                   }
                }
            }
        }
    }

    showList(){

        if(this.head == null)
            console.log('A lista está vazia')
        else{
            let n = this.head
            console.log(n.getItem())

            while(n.getNext() != null){

                let temp = n.getNext()

                if(temp){
                    n = temp
                }

                console.log(n.getItem())
            }
        }
    }
}
