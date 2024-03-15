import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_qWz9nA0A.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"},{"type":"external","src":"/_astro/create.BRYZMzll.css"}],"routeData":{"route":"/create","isIndex":false,"type":"page","pattern":"^\\/create\\/?$","segments":[[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/create.astro","pathname":"/create","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"},{"type":"external","src":"/_astro/create.BRYZMzll.css"}],"routeData":{"route":"/details","isIndex":false,"type":"page","pattern":"^\\/details\\/?$","segments":[[{"content":"details","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/details.astro","pathname":"/details","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"},{"type":"external","src":"/_astro/create.BRYZMzll.css"}],"routeData":{"route":"/participants","isIndex":false,"type":"page","pattern":"^\\/participants\\/?$","segments":[[{"content":"participants","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/participants.astro","pathname":"/participants","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"}],"routeData":{"route":"/server/participant/create","isIndex":false,"type":"page","pattern":"^\\/server\\/participant\\/create\\/?$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"participant","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/participant/create.astro","pathname":"/server/participant/create","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"}],"routeData":{"route":"/server/participants/read","isIndex":false,"type":"page","pattern":"^\\/server\\/participants\\/read\\/?$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"participants","dynamic":false,"spread":false}],[{"content":"read","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/participants/read.astro","pathname":"/server/participants/read","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"}],"routeData":{"route":"/server/party/create","isIndex":false,"type":"page","pattern":"^\\/server\\/party\\/create\\/?$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"party","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/party/create.astro","pathname":"/server/party/create","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"}],"routeData":{"route":"/server/party/delete","isIndex":false,"type":"page","pattern":"^\\/server\\/party\\/delete\\/?$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"party","dynamic":false,"spread":false}],[{"content":"delete","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/party/delete.astro","pathname":"/server/party/delete","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"}],"routeData":{"route":"/server/party/read","isIndex":false,"type":"page","pattern":"^\\/server\\/party\\/read\\/?$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"party","dynamic":false,"spread":false}],[{"content":"read","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/party/read.astro","pathname":"/server/party/read","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"}],"routeData":{"route":"/server/party/update","isIndex":false,"type":"page","pattern":"^\\/server\\/party\\/update\\/?$","segments":[[{"content":"server","dynamic":false,"spread":false}],[{"content":"party","dynamic":false,"spread":false}],[{"content":"update","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/server/party/update.astro","pathname":"/server/party/update","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/create.CZMA9ZFS.css"},{"type":"external","src":"/_astro/create.BRYZMzll.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/felix.brilej/git/astro-party/src/pages/create.astro",{"propagation":"none","containsHead":true}],["/Users/felix.brilej/git/astro-party/src/pages/details.astro",{"propagation":"none","containsHead":true}],["/Users/felix.brilej/git/astro-party/src/pages/participants.astro",{"propagation":"none","containsHead":true}],["/Users/felix.brilej/git/astro-party/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/server/party/delete.astro":"chunks/pages/delete_z35ICjLm.mjs","/src/pages/details.astro":"chunks/pages/details_DxXCSFg4.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_50e4CgXF.mjs","/src/pages/index.astro":"chunks/pages/index_4hVll4Ki.mjs","/src/pages/participants.astro":"chunks/pages/participants_DeDjw6qT.mjs","/src/pages/server/party/update.astro":"chunks/pages/update_CHwi8giE.mjs","\u0000@astrojs-manifest":"manifest_BoLnzznV.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_D3ku_PnZ.mjs","\u0000@astro-page:src/pages/create@_@astro":"chunks/create_DFM7nMxA.mjs","\u0000@astro-page:src/pages/details@_@astro":"chunks/details_CvFbQpgZ.mjs","\u0000@astro-page:src/pages/participants@_@astro":"chunks/participants_DJ5r-FYu.mjs","\u0000@astro-page:src/pages/server/participant/create@_@astro":"chunks/create_BXmdYOOx.mjs","\u0000@astro-page:src/pages/server/participants/read@_@astro":"chunks/read_BTLIitWg.mjs","\u0000@astro-page:src/pages/server/party/create@_@astro":"chunks/create_DfGhe9m0.mjs","\u0000@astro-page:src/pages/server/party/delete@_@astro":"chunks/delete_UoRTxkaG.mjs","\u0000@astro-page:src/pages/server/party/read@_@astro":"chunks/read_DmblV19y.mjs","\u0000@astro-page:src/pages/server/party/update@_@astro":"chunks/update_CWc705ei.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_YCpDoC5O.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/create.CZMA9ZFS.css","/_astro/create.BRYZMzll.css","/favicon.svg"],"buildFormat":"directory"});

export { manifest };
