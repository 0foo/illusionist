export class Utils{

     /* ensure an object has methods/replacement for interfaces
       Usage:
        if(hasMethods(obj, 'quak', 'flapWings','waggle')) {
            //  IT'S A DUCK, do your duck thang
        }
        https://stackoverflow.com/questions/3710275/does-javascript-have-the-interface-type-such-as-javas-interface
     */
    static hasMethods(obj /*, method list as strings */){
        var i = 1, methodName;
        while((methodName = arguments[i++])){
            if(typeof obj[methodName] != 'function') {
                return false;
            }
        }
        return true;
    }

    // create an id of length = x
    static makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }    

}