importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "636ebb623625cb35c85fede66d5e062b"
  },
  {
    "url": "inline.c03e63b20bc58e605c93.bundle.js",
    "revision": "fa88dd86d7adf1f8ecb5677dd28cfb00"
  },
  {
    "url": "main.97e1b942d6f32b58012a.bundle.js",
    "revision": "daf75e2bada90ffa9de2ac5589b53037"
  },
  {
    "url": "polyfills.337db143b9a9630c10a6.bundle.js",
    "revision": "854491caff7a7052a578c365385da5a6"
  },
  {
    "url": "styles.90f7a6a7b6c6449ccd98.bundle.css",
    "revision": "90f7a6a7b6c6449ccd98b86d3ca10618"
  },
  {
    "url": "vendor.c43b6f91e5b1b95bd0e3.bundle.js",
    "revision": "e0847ad244ffd375ee6f2ddefe1faebc"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "cbfd22a00ab05c8904c485d367196491"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
