declare module 'aurelia-skeleton-navigation/app' {
	export class App {
	    static inject(): any[];
	    router: any;
	    constructor(router: any);
	}

}
declare module 'aurelia-skeleton-navigation/child-router' {
	export class ChildRouter {
	    static inject(): any[];
	    heading: string;
	    router: any;
	    constructor(router: any);
	}

}
declare module 'aurelia-skeleton-navigation/flickr' {
	export class Flickr {
	    static inject(): any[];
	    heading: string;
	    images: any[];
	    http: any;
	    url: string;
	    constructor(http: any);
	    activate(): any;
	    canDeactivate(): boolean;
	}

}
declare module 'aurelia-skeleton-navigation/nav-bar' {
	export class NavBar {
	    router: any;
	}

}
declare module 'aurelia-skeleton-navigation/welcome' {
	export class Welcome {
	    heading: string;
	    firstName: string;
	    lastName: string;
	    fullName: string;
	    welcome(): void;
	}
	export class UpperValueConverter {
	    toView(value: any): any;
	}

}
declare module 'aurelia-skeleton-navigation' {
	export * from 'aurelia-skeleton-navigation/index';
	}
