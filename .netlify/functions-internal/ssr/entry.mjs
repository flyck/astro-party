import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BoLnzznV.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_D3ku_PnZ.mjs');
const _page1 = () => import('./chunks/create_DFM7nMxA.mjs');
const _page2 = () => import('./chunks/details_CvFbQpgZ.mjs');
const _page3 = () => import('./chunks/participants_DJ5r-FYu.mjs');
const _page4 = () => import('./chunks/create_BXmdYOOx.mjs');
const _page5 = () => import('./chunks/read_BTLIitWg.mjs');
const _page6 = () => import('./chunks/create_DfGhe9m0.mjs');
const _page7 = () => import('./chunks/delete_UoRTxkaG.mjs');
const _page8 = () => import('./chunks/read_DmblV19y.mjs');
const _page9 = () => import('./chunks/update_CWc705ei.mjs');
const _page10 = () => import('./chunks/index_YCpDoC5O.mjs');
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
    "middlewareSecret": "8964d0c0-8985-4c7b-a48e-c4a914ac032b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
