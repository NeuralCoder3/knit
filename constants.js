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

// use browser setting
var language = (navigator.language || navigator.userLanguage).split('-')[0];
// get overwrite from #lang=xx in URL
if (window.location.hash) {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    if (hashParams.has('lang')) {
        language = hashParams.get('lang');
    }
}

if (langProxy[language] === undefined) {
    language = 'en';
}
const selectedLangProxy = langProxy[language];

// overload map to return the key if the value is not found
const lang = new Proxy(selectedLangProxy, {
    get: (target, name) => {
        if (name in target)
            return target[name];
        else
            return name;
    }
});
window.document.title = lang.title;