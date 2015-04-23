declare module 'aurelia-app-contacts/web-api' {
	export class WebAPI {
	    isRequesting: any;
	    getContactList(): Promise<{}>;
	    getContactDetails(id: any): Promise<{}>;
	    saveContact(contact: any): Promise<{}>;
	}

}
declare module 'aurelia-app-contacts/app' {
	export class App {
	    router: any;
	    api: any;
	    constructor(router: any, api: any);
	}

}
declare module 'aurelia-app-contacts/messages' {
	export class ContactUpdated {
	    contact: any;
	    constructor(contact: any);
	}
	export class ContactViewed {
	    contact: any;
	    constructor(contact: any);
	}

}
declare module 'aurelia-app-contacts/utility' {
	export function areEqual(obj1: any, obj2: any): boolean;

}
declare module 'aurelia-app-contacts/contact-detail' {
	export class ContactDetail {
	    app: any;
	    api: any;
	    ea: any;
	    contact: any;
	    originalContact: any;
	    constructor(app: any, api: any, ea: any);
	    activate(params: any, qs: any, config: any): any;
	    canSave: boolean;
	    save(): void;
	    canDeactivate(): boolean;
	}

}
declare module 'aurelia-app-contacts/contact-list' {
	export class ContactList {
	    api: any;
	    contacts: any;
	    selectedId: any;
	    constructor(api: any, ea: any);
	    created(): void;
	    select(contact: any): boolean;
	}

}
declare module 'aurelia-app-contacts/loading-indicator' {
	export class LoadingIndicator {
	    loadingChanged(newValue: any): void;
	}

}
declare module 'aurelia-app-contacts/no-selection' {
	export class NoSelection {
	    message: any;
	    constructor();
	}

}
declare module 'aurelia-app-contacts' {
	export * from 'aurelia-app-contacts/index';
	}
