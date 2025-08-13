const currentImports = {};
      const exportSet = new Set(['Module', '__esModule', 'default', '_export_sfc']);
      let moduleMap = {
"./LoginForm":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './LoginForm');
      return __federation_import('./__federation_expose_LoginForm-aJnCuS7X.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./RegisterForm":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './RegisterForm');
      return __federation_import('./__federation_expose_RegisterForm-C7AW29Yp.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./ResetPass":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './ResetPass');
      return __federation_import('./__federation_expose_ResetPass-DUUH7gOC.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./ValidationPass":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './ValidationPass');
      return __federation_import('./__federation_expose_ValidationPass-BdAN2GEh.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./Dashboard":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './Dashboard');
      return __federation_import('./__federation_expose_Dashboard-CHbyfYjJ.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./ThirdPartyCampaign":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './ThirdPartyCampaign');
      return __federation_import('./__federation_expose_ThirdPartyCampaign-BoITBXci.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./SettingsUser":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './SettingsUser');
      return __federation_import('./__federation_expose_SettingsUser-9WGuI6T8.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./autenticationService":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './autenticationService');
      return __federation_import('./__federation_expose_AutenticationService-xRPwCfF-.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./Report":()=>{
      dynamicLoadingCss(["style-WcqRBfrO.css"], false, './Report');
      return __federation_import('./__federation_expose_Report-Czlpokv_.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},};
      const seen = {};
      const dynamicLoadingCss = (cssFilePaths, dontAppendStylesToHead, exposeItemName) => {
        const metaUrl = import.meta.url;
        if (typeof metaUrl === 'undefined') {
          console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
          return;
        }

        const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf('remoteEntry.js'));
        const base = '/';
        'assets';

        cssFilePaths.forEach(cssPath => {
         let href = '';
         const baseUrl = base || curUrl;
         if (baseUrl) {
           const trimmer = {
             trailing: (path) => (path.endsWith('/') ? path.slice(0, -1) : path),
             leading: (path) => (path.startsWith('/') ? path.slice(1) : path)
           };
           const isAbsoluteUrl = (url) => url.startsWith('http') || url.startsWith('//');

           const cleanBaseUrl = trimmer.trailing(baseUrl);
           const cleanCssPath = trimmer.leading(cssPath);
           const cleanCurUrl = trimmer.trailing(curUrl);

           if (isAbsoluteUrl(baseUrl)) {
             href = [cleanBaseUrl, cleanCssPath].filter(Boolean).join('/');
           } else {
            if (cleanCurUrl.includes(cleanBaseUrl)) {
              href = [cleanCurUrl, cleanCssPath].filter(Boolean).join('/');
            } else {
              href = [cleanCurUrl + cleanBaseUrl, cleanCssPath].filter(Boolean).join('/');
            }
           }
         } else {
           href = cssPath;
         }
         
          if (dontAppendStylesToHead) {
            const key = 'css__appmathildeweb__' + exposeItemName;
            window[key] = window[key] || [];
            window[key].push(href);
            return;
          }

          if (href in seen) return;
          seen[href] = true;

          const element = document.createElement('link');
          element.rel = 'stylesheet';
          element.href = href;
          document.head.appendChild(element);
        });
      };
      async function __federation_import(name) {
        currentImports[name] ??= import(name);
        return currentImports[name]
      }      const get =(module) => {
        if(!moduleMap[module]) throw new Error('Can not find remote module ' + module)
        return moduleMap[module]();
      };
      const init =(shareScope) => {
        globalThis.__federation_shared__= globalThis.__federation_shared__|| {};
        Object.entries(shareScope).forEach(([key, value]) => {
          for (const [versionKey, versionValue] of Object.entries(value)) {
            const scope = versionValue.scope || 'default';
            globalThis.__federation_shared__[scope] = globalThis.__federation_shared__[scope] || {};
            const shared= globalThis.__federation_shared__[scope];
            (shared[key] = shared[key]||{})[versionKey] = versionValue;
          }
        });
      };

export { dynamicLoadingCss, get, init };
