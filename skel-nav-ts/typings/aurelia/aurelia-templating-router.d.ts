declare module 'aurelia-templating-router/route-loader' {
	import { RouteLoader } from 'aurelia-router';
	export class TemplatingRouteLoader extends RouteLoader {
	    compositionEngine: any;
	    constructor(compositionEngine: any);
	    loadRoute(router: any, config: any): any;
	}

}
declare module 'aurelia-templating-router/router-view' {
	export class RouterView {
	    element: any;
	    container: any;
	    viewSlot: any;
	    router: any;
	    view: any;
	    constructor(element: any, container: any, viewSlot: any, router: any);
	    process(viewPortInstruction: any, waitToSwap: any): any;
	    swap(viewPortInstruction: any): void;
	}

}
declare module 'aurelia-templating-router/index' {
	import {Router, AppRouter, RouteLoader} from 'aurelia-router';
	import {TemplatingRouteLoader} from 'aurelia-templating-router/route-loader';
	import {RouterView} from 'aurelia-templating-router/router-view';

	 function install(aurelia: any): void;
	export { TemplatingRouteLoader, RouterView, install };

}
declare module 'aurelia-templating-router' {
	export * from 'aurelia-templating-router/index';
}
