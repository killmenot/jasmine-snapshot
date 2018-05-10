import * as difflib from "difflib";
import { expectxml, registerSnapshots, HimalayaOptions } from "../src/index";

declare var fail: (message: string) => void;

describe("xml himalaya test", () =>
{
    let lastFailedWith = "";
    let snapshots = {
        // tslint:disable-next-line:max-line-length
        "xml himalaya test matches complex string 1": `[{"attributes":[],"children":[{"attributes":[{"key":"name","value":"knocker"},{"key":"id","value":"fart"}],"children":[{"content":"some&nbsp;text","type":"text"}],"tagName":"div","type":"element"}],"tagName":"html","type":"element"}]`
    };

    beforeAll(() =>
    {
        fail = (message: string) => lastFailedWith = message;
        registerSnapshots(snapshots, "xml himalaya test");
    });

    beforeEach(() =>
    {
        lastFailedWith = "";
    });

    it("Matches complex html", () =>
    {
        // tslint:disable-next-line:max-line-length
        let snapshot = `[ { "attributes": [ { "key": "class", "value": "Select Select--single is-searchable" } ], "children": [ { "attributes": [ { "key": "id", "value": "duck" }, { "key": "class", "value": "Select-control" } ], "children": [ { "attributes": [ { "key": "class", "value": "Select-multi-value-wrapper" }, { "key": "id", "value": "react-select-#--value" } ], "children": [ { "attributes": [ { "key": "class", "value": "Select-placeholder" } ], "children": [ { "content": "Select...", "type": "text" } ], "tagName": "div", "type": "element" }, { "attributes": [ { "key": "class", "value": "Select-input" }, { "key": "id", "value": "yourface" }, { "key": "style", "value": "display:inline-block;" } ], "children": [ { "attributes": [ { "key": "role", "value": "combobox" }, { "key": "aria-expanded", "value": "false" }, { "key": "aria-owns", "value": "" }, { "key": "aria-haspopup", "value": "false" }, { "key": "aria-activedescendant", "value": "react-select-#--value" }, { "key": "value", "value": "" }, { "key": "style", "value": "width:5px;box-sizing:content-box;" } ], "children": [], "tagName": "input", "type": "element" }, { "attributes": [ { "key": "style", "value": "position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre;" } ], "children": [], "tagName": "div", "type": "element" } ], "tagName": "div", "type": "element" } ], "tagName": "span", "type": "element" }, { "attributes": [ { "key": "class", "value": "Select-arrow-zone" } ], "children": [ { "attributes": [ { "key": "class", "value": "Select-arrow" } ], "children": [], "tagName": "span", "type": "element" } ], "tagName": "span", "type": "element" } ], "tagName": "div", "type": "element" } ], "tagName": "div", "type": "element" }]`;

        let actual = `
<div class="Select Select--single is-searchable">
    <div id="duck" class="Select-control">
        <span class="Select-multi-value-wrapper" id="react-select-#--value">
            <div class="Select-placeholder">Select...</div>
            <div class="Select-input" id="yourface" style="display:inline-block;">
                <input role="combobox" aria-expanded="false" aria-owns="" aria-haspopup="false" aria-activedescendant="react-select-#--value" value="" style="width:5px;box-sizing:content-box;"/>
                <div style="position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre;"></div>
            </div>
        </span>
        <span class="Select-arrow-zone">
            <span class="Select-arrow"></span>
        </span>
    </div>
</div>`;

        expectxml(actual, "himalaya").toMatchSnapshot(snapshot);

        expect(lastFailedWith).toBe("");
    });

    it("matches complex html two", () =>
    {
        // tslint:disable-next-line:max-line-length
        let snapshot = `[ { "attributes": [ { "key": "class", "value": "Select Select--single is-open is-searchable" } ], "children": [ { "attributes": [ { "key": "class", "value": "Select-control" } ], "children": [ { "attributes": [ { "key": "class", "value": "Select-multi-value-wrapper" }, { "key": "id", "value": "react-select-#--value" } ], "children": [ { "attributes": [ { "key": "class", "value": "Select-placeholder" } ], "children": [ { "content": "Select...", "type": "text" } ], "tagName": "div", "type": "element" }, { "attributes": [ { "key": "class", "value": "Select-input" }, { "key": "style", "value": "display: inline-block;" } ], "children": [ { "attributes": [ { "key": "role", "value": "combobox" }, { "key": "aria-expanded", "value": "true" }, { "key": "aria-owns", "value": "react-select-#--list" }, { "key": "aria-haspopup", "value": "true" }, { "key": "aria-activedescendant", "value": "react-select-#--option-0" }, { "key": "value", "value": "" }, { "key": "style", "value": "width: 5px; box-sizing: content-box;" } ], "children": [], "tagName": "input", "type": "element" }, { "attributes": [ { "key": "style", "value": "position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre;" } ], "children": [], "tagName": "div", "type": "element" } ], "tagName": "div", "type": "element" } ], "tagName": "span", "type": "element" }, { "attributes": [ { "key": "class", "value": "Select-arrow-zone" } ], "children": [ { "attributes": [ { "key": "class", "value": "Select-arrow" } ], "children": [], "tagName": "span", "type": "element" } ], "tagName": "span", "type": "element" } ], "tagName": "div", "type": "element" }, { "attributes": [ { "key": "class", "value": "Select-menu-outer" } ], "children": [ { "attributes": [ { "key": "role", "value": "listbox" }, { "key": "class", "value": "Select-menu" }, { "key": "id", "value": "react-select-#--list" } ], "children": [ { "attributes": [ { "key": "class", "value": "Select-option is-focused" }, { "key": "role", "value": "option" }, { "key": "id", "value": "react-select-#--option-0" } ], "children": [ { "content": "IGLOO Ice Home for Men of The North", "type": "text" } ], "tagName": "div", "type": "element" }, { "attributes": [ { "key": "class", "value": "Select-option" }, { "key": "role", "value": "option" }, { "key": "id", "value": "react-select-#--option-1" } ], "children": [ { "content": "MOOSE The Moose shall be loose", "type": "text" } ], "tagName": "div", "type": "element" } ], "tagName": "div", "type": "element" } ], "tagName": "div", "type": "element" } ], "tagName": "div", "type": "element" } ]`;

        // tslint:disable-next-line:max-line-length
        let actual = `<div class="Select Select--single is-open is-searchable"><div class="Select-control"><span class="Select-multi-value-wrapper" id="react-select-#--value"><div class="Select-placeholder">Select...</div><div class="Select-input" style="display: inline-block;"><input role="combobox" aria-expanded="true" aria-owns="react-select-#--list" aria-haspopup="true" aria-activedescendant="react-select-#--option-0" value="" style="width: 5px; box-sizing: content-box;"><div style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre;"></div></div></span><span class="Select-arrow-zone"><span class="Select-arrow"></span></span></div><div class="Select-menu-outer"><div role="listbox" class="Select-menu" id="react-select-#--list"><div class="Select-option is-focused" role="option" id="react-select-#--option-0">IGLOO Ice Home for Men of The North</div><div class="Select-option" role="option" id="react-select-#--option-1">MOOSE The Moose shall be loose</div></div></div></div>`;

        expectxml(actual, "himalaya").toMatchSnapshot(snapshot);

        expect(lastFailedWith).toBe("");
    });

    it("matches complex string", () =>
    {
        expectxml(`<html><div name="knocker" id="fart">some&nbsp;text</div></html>`, "himalaya").toMatchSnapshot();

        expect(lastFailedWith).toBe("");
    });
});
