export namespace Animais{
    export class Cachorro{
        latir():void{
            console.log("Au!  Au!");
        }
    }

    export class Gato{
        constructor(){
            this.miar();
        }
        miar():void{
            console.log("Miau! Miau!");
        }
    }
}