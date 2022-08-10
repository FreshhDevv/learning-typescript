type ComponentOptions = {
    selector: string;
}

//Decorator factory
function Component(options:ComponentOptions) {
    
    return  (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDom = () => {
            console.log('Inserting the component in DOM');
        }
    }
}


@Component({selector: '#my-profile'})
class ProfileComponent{

}