declare module 'aurelia-route-recognizer/dsl' {
	export function map(callback: any, addRouteCallback: any): void;

}
declare module 'aurelia-route-recognizer/index' {
	export class RouteRecognizer {
	    map: any;
	    rootState: any;
	    names: any;
	    constructor();
	    add(route: any): any;
	    handlersFor(name: any): any[];
	    hasRoute(name: any): boolean;
	    generate(name: any, params: any): string;
	    generateQueryString(params: any): string;
	    parseQueryString(queryString: any): {};
	    recognize(path: any): any;
	}

}
declare module 'aurelia-route-recognizer' {
	export * from 'aurelia-route-recognizer/index';
	}
