class Wallet{
    #balance=0
    #transactions=[]
    

    deposit(amount){
        this.#processDeposit(amount)
        this.#balance+=amount
        
    }

    withdraw(amount){
        this.#processWithdraw(amount   )
        this.#balance-=amount
    }

    get balance(){
        return this.#balance
    }
    get transactions(){
       return this.#transactions
    }

    #processDeposit(amount){
        console.log(`Depositing ${amount}`)

        this.#transactions.push({
            type:'deposit',
            amount
        })

    }
    #processWithdraw(amount){
        console.log(`withdraw ${amount}`)

        this.#transactions.push({
            type:'withdraw',
            amount
        })
    }
}

const wallet=new Wallet()

wallet.deposit(300)
wallet.withdraw(50)
console.log(wallet.balance)