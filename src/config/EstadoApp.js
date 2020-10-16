export default class EstadoApp{
    constructor(){}

    static tipo="PrimeiraExec";
    static usuario = {};
    static redirect = false;
    static getRedirect(){
        return EstadoApp.redirect;
    }
    static setRedirect(r){
        EstadoApp.redirect = r;
    }
    static getUsuario(){
        return EstadoApp.usuario;
    }

    static setUsuario(usuario){
        EstadoApp.usuario = usuario;
        console.log("SETTT" + EstadoApp.usuario);
    }

    getTipo(){
        return tipo;
    }

    setTipo(tipo){
        this.tipo = tipo;
    }
}

