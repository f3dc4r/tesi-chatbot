export class Constants {

    public static TITLE_INFO = 'INFO!';
    public static TITLE_ERROR = 'ERROR!';
    public static TITLE_WARNING = 'WARNING!';
    public static TITLE_SUCCESS = 'SUCCESS!';
    public static TITLE_OFFLINE = 'IS OFFLINE!';

    static Routing = class {
        public static DASHBOARD = { label: 'Dashboard', path: 'dashboard', routerLink: ['/dashboard'] };
        public static GENERATIVE_DATA = { label: 'Generative Data', path: 'gen_ai_search', routerLink: ['/gen_ai_search'] };
        public static NOT_FOUND = { label: 'Not Found', path: 'not_found', routerLink: ['/not_found'] };
    }

}
