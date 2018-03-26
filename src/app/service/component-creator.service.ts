import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';

@Injectable()
export class ComponentCreatorService {

    constructor(private resolver: ComponentFactoryResolver,
                private injector: Injector,
                private app: ApplicationRef

    )  { }

    public attachComponent(componentName, container: HTMLElement, configs: Array<object> = []) {

        const factoryComponent = this.resolver.resolveComponentFactory(componentName);
        const newNode = document.createElement('div');

        container.appendChild(newNode);

        const component = factoryComponent.create(this.injector, [], newNode);

        configs.forEach(
            config => {
                Object.keys(config).forEach(
                    key => {
                        component.instance[key] = config[key];
                    }
                );
            }
        );

        this.app.attachView(component.hostView);
    }
}
