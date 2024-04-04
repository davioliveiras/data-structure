import Arvore from './binary-tree'
import LinkedList from './linked-list'
import Queue from './queue'
import Stack from './stack'

const newStack = new Stack()
const newList = new LinkedList()
const tree = new Arvore(24)
const queue = new Queue()


/***  LINKED LIST  ***/

// newList.addOnList('bruno')
// newList.addOnList('davi')
// newList.addOnList('nicolas')
// newList.showList()

// newList.removeFromList()
// newList.removeFromList()
// console.log('-------')
// newList.showList()
// newList.removeFromList()
// newList.removeFromList()



/***  BINARY TREE  ***/

// tree.insere(35)
// tree.insere(40)
// tree.insere(2)
// // tree.insere(35)
// // tree.insere(29)
// // tree.insere(14)
// tree.showMeTheTree()



/***  STACK  ***/

// newStack.empilha(10)
// newStack.empilha(20)
// // newStack.empilha(30)
// // newStack.empilha(40)
// // newStack.empilha(50)
// // newStack.empilha(60)
// // newStack.empilha(80)
// // newStack.empilha(90)
// // newStack.empilha(100)
// // newStack.empilha(200)
// newStack.empilha(300)
// newStack.desempilha()
// newStack.desempilha()
// newStack.desempilha()
// newStack.showMeTheStack()



/***  QUEUE  ***/

queue.enfileira(10)
queue.enfileira(20)
queue.enfileira(30)
queue.enfileira(40)
queue.enfileira(50)
// queue.enfileira(60)
// queue.enfileira(70)
queue.desemfileira()
queue.desemfileira()
queue.desemfileira()
queue.desemfileira()
queue.enfileira(-60)
queue.showQueue()
