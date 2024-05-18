function createConstants(...keys) {
  const constants = keys.reduce((obj, key) => {
    obj[key] = key;
    return obj;
  }, {});
  return new Proxy(constants, {
    get: (target, name) => {
      if (name in target)
        return target[name];
      else
        throw new Error(lang.constantNotDefined.replace('%1', String(name)));
    }
  });
}

function constantsMap(entries = {}) {
  return new Proxy(entries, {
    get: (target, name) => {
      if (name in target)
        return target[name];
      else
        throw new Error(lang.constantNotDefined.replace('%1', String(name)));
    }
  });
}

const eventIds = createConstants('input');

const colorIds = createConstants('black', 'cyan', 'white');

const htmlTags = constantsMap([
  'div', 'form', 'input', 'p', 'span', 'td', 'tr', 'table', 'select', 'option'
].reduce(function(obj, tag) {
  obj[tag] = `<${tag}>`;
  return obj;
}, {}));

const htmlProps = createConstants('disabled');
const htmlInputTypes = createConstants('submit');
const cssProps = createConstants('display');
const cssDisplayValues = createConstants('inline', 'none');

// overload map to return the key if the value is not found
const lang = new Proxy(langProxy, {
    get: (target, name) => {
        if (name in target)
            return target[name];
        else
            return name;
    }
});
window.document.title = lang.title;