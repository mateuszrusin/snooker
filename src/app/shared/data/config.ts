export class Config {
    static readonly SERVER_PROTOCOL = 'http://';
    static readonly SERVER_HOST = document.location.hostname;
    static readonly SERVER_PORT = '3000';
    static readonly SERVER_URL = Config.SERVER_PROTOCOL + Config.SERVER_HOST + ':' + Config.SERVER_PORT + '/';

    static readonly APP_URL = document.location.origin + '/';

    static readonly PEER_PARAMS = {
        host: Config.SERVER_HOST,
        port: Config.SERVER_PORT,
        path: '/peer',
        debug: 0
    };
}