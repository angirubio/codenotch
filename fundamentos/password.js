class Password {
    constructor (password) {
        this.length = 8;
        this.password = password;
    }
    isStrong() {
        var resultado = false;
        if (this.password.length >= 8) {
            var mayuscula = false;
            var minuscula = false;
            var numero = false;
            var caracterRaro = false;
            for (let i=0;i<this.password.length;i++) {
                if (this.password.charCodeAt(i)>=65 && this.password.charCodeAt(i) <=90) {
                    mayuscula = true;
                }
                else if (this.password.charCodeAt(i) >= 97 && this.password.charCodeAt(i) <= 122) {
                    minuscula = true;
                }
                else if (this.password.charCodeAt(i) >= 48 && this.password.charCodeAt(i) <= 57) {
                    numero = true;
                }
                else {
                    caracterRaro = true;
                }
            };
            if(mayuscula == true && minuscula == true && numero == true && caracterRaro == true) {
                resultado = true;
            }  
        }
        return resultado;    
    };
    generatePass() {
    let resultado = new Array(this.length).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("");
    return resultado;
    }
    //Getter y setter
    get pass() {
        return this.password;
    }
    set setPass(passwordNew) {
        return this.password = passwordNew;
    }

};

module.exports = Password;