const  receiveAFunction = (spy) => spy()



function returnsANamedFunction(){
    return function receivesAFunction(spy){
        return 'spy'
    }

}



function returnAnAnonymousFunction(){
    return function(name){
        return 'name'
    }
}



