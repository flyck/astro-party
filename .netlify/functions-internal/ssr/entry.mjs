import { renderers } from './renderers.mjs';
import { manifest } from './manifest_s07YokJy.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Dlj0XeNd.mjs');
const _page1 = () => import('./chunks/create_BUI37zAz.mjs');
const _page2 = () => import('./chunks/details_DLsEDYYp.mjs');
const _page3 = () => import('./chunks/participants_CAgmH99j.mjs');
const _page4 = () => import('./chunks/create_cKWZMDfs.mjs');
const _page5 = () => import('./chunks/read_BeJp2359.mjs');
const _page6 = () => import('./chunks/create_CyBG17uA.mjs');
const _page7 = () => import('./chunks/delete_Da4sG5Sw.mjs');
const _page8 = () => import('./chunks/read_B-FkdSAC.mjs');
const _page9 = () => import('./chunks/update_B8npvqs-.mjs');
const _page10 = () => import('./chunks/index_kBmt0_NU.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/create.astro", _page1],
    ["src/pages/details.astro", _page2],
    ["src/pages/participants.astro", _page3],
    ["src/pages/server/participant/create.astro", _page4],
    ["src/pages/server/participants/read.astro", _page5],
    ["src/pages/server/party/create.astro", _page6],
    ["src/pages/server/party/delete.astro", _page7],
    ["src/pages/server/party/read.astro", _page8],
    ["src/pages/server/party/update.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0628b203-a59f-42c5-8152-2920de074af7"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
