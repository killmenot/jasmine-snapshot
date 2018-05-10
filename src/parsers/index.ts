import { parse as himalaya, HimalayaOptions } from "./himalaya";
import { parse as x2js, Xml2jsOptions } from "./x2js";

declare type ParserOptions = HimalayaOptions | Xml2jsOptions;

export {
    himalaya,
    x2js,
    ParserOptions,
    HimalayaOptions,
    Xml2jsOptions
};

export default (parser) => {
    switch (parser) {
        case "himalaya":
            return himalaya;

        default:
            return x2js;
    }
};