class App{
    constructor(){
        this.serverName='localHost'
         document.querySelector('button').addEventListener('click',this.getServerName.bind(this))
    }
    getServerName(){
    console.log(this.serverName)
   
}
}



const app=new App()


