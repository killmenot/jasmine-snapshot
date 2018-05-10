import himalaya = require("himalaya");

function removeEmptyNodes(nodes) {
  return nodes.filter(node => {
    if (node.type === "element") {
      node.children = removeEmptyNodes(node.children);
      return true;
    }
    return node.content.length;
  });
}

function stripWhitespace(nodes) {
  return nodes.map(node => {
    if (node.type === "element") {
      node.children = stripWhitespace(node.children);
    } else {
      node.content = node.content.trim();
    }
    return node;
  });
}

function removeWhitespace(nodes) {
  return removeEmptyNodes(stripWhitespace(nodes));
}

export interface HimalayaOptions {
    preservesWhitespace?: boolean;
}

export let parse = (xml, options?: HimalayaOptions) => {
    let json = himalaya.parse(xml);

    let preservesWhitespace = (options || {}).preservesWhitespace !== false;
    if (preservesWhitespace) {
        json = removeWhitespace(json);
    }

    return json;
};