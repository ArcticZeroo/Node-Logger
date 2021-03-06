import { Chalk } from 'chalk';

type LogFunction = (text: any, prefix?: any, meta?: {}) => any;

export default class Logger {
    info: LogFunction;
    warn: LogFunction;
    warning: LogFunction;
    error: LogFunction;
    debug: LogFunction;
    command: (name: string, cmd: string, type: string, success?: boolean) => any;

    constructor(prefix?: string, filename?: string);

    readonly prefix: string;
    readonly exitOnError: boolean;

    chalk: Chalk;
    static chalk: Chalk;
}
