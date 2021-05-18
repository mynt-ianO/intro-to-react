class Queue {
    
    constructor() {
        this.array = []
    }

    push(str) {
        this.array.push(str)
        return
    }

    pop() {
        if (this.array.length === 0) {
            console.log('Queue is empty, no need to pop!')
            return
        }
        this.array.pop()
        return
    }

    check() {
        console.log(this.array)
        return
    }
}

const myQueue = new Queue()
myQueue.push('Milk')
myQueue.push('Eggs')
myQueue.check()
myQueue.pop()
myQueue.check()
myQueue.pop()
myQueue.check()
myQueue.pop()