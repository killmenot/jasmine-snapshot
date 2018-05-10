// tslint:disable:max-line-length
import { expectjs, registerSnapshots, expectxml } from "../src/index";

describe("sample snapshotting", () =>
{
    describe("basic examples", () =>
    {
        let snapshots = {
            "sample snapshotting basic examples does a basic js snapshot 1": `{ "chicken_type": "fried"}`,
            "sample snapshotting basic examples does a basic html snapshot (x2js) 1": `{ "div": { "_class": "ribbit frogs", "_id": "freddy", "span": "hails yeahs" }}`,
            "sample snapshotting basic examples does a basic html snapshot (himalaya) 1": `[ { "attributes": [{"key": "[formGroup]", "value": "form"}, {"key": "(ngSubmit)", "value": "submit()"}], "children": [], "tagName": "form", "type": "element" } ]`
        };

        beforeAll(() =>
        {
            registerSnapshots(snapshots, "basic examples suite");
        });

        it("does a basic js snapshot", () =>
        {
            let actual = { chicken_type: "fried" };

            expectjs(actual).toMatchSnapshot();
        });

        it("does a basic html snapshot (x2js)", () =>
        {
            let actual = `<div id="freddy" class="ribbit frogs"><span>hails yeahs</span></div>`;

            expectxml(actual).toMatchSnapshot();
        });

        it("does a basic html snapshot (himalaya)", () =>
        {
            let actual = `<form [formGroup]="form" (ngSubmit)="submit()"></form>`;

            expectxml(actual, "himalaya").toMatchSnapshot();
        });
    });

    describe("complex examples", () =>
    {
        let snapshots = {
            "sample snapshotting complex examples does a more complex js snapshot 1": `{ "DEFAULT_TIMEOUT_INTERVAL": 5000, "MAX_PRETTY_PRINT_ARRAY_LENGTH": 50, "MAX_PRETTY_PRINT_CHARS": 1000, "MAX_PRETTY_PRINT_DEPTH": 8, "currentEnv_": { "clock": {} }, "matchers": {}, "matchersUtil": {}, "util": {}, "version": "2.99.0"}`,
            "sample snapshotting complex examples does a more complex html snapshot (x2js) 1": `{ "script": { "__text": "window.__karma__.loaded();", "_type": "text/javascript" }}`,
            "sample snapshotting complex examples does a more complex html snapshot (himalaya) 1": `[{"attributes":[],"children":[],"tagName":"title","type":"element"},{"attributes":[{"key":"http-equiv","value":"Content-Type"},{"key":"content","value":"text/html; charset=UTF-8"}],"children":[],"tagName":"meta","type":"element"},{"attributes":[{"key":"name","value":"viewport"},{"key":"content","value":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}],"children":[],"tagName":"meta","type":"element"}]`,
        };

        beforeAll(() =>
        {
            registerSnapshots(snapshots, "complex examples suite");
        });

        it("does a more complex js snapshot", () =>
        {
            let actual = jasmine as any;
            delete actual.errors;

            expectjs(actual).toMatchSnapshot();
        });

        it("does a more complex html snapshot (x2js)", () =>
        {
            let actual = window.document.body.innerHTML;

            expectxml(actual).toMatchSnapshot();
        });

        it("does a more complex html snapshot (himalaya)", () =>
        {
            let actual = window.document.head.innerHTML;

            expectxml(actual, "himalaya").toMatchSnapshot();
        });
    });
});