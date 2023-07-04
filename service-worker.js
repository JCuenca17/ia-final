var GHPATH =  '/ia-final' ;
var APP_PREFIX =  'ifpwa_' ;
var VERSION =  'version_00' ;

const staticDevIa = "dev-ia-final-v1"
const assets = [
  `${GHPATH}/`, 
  `${GHPATH}/index.html`, 
  `${GHPATH}/css/styles.css`, 
  `${GHPATH} /css/normalize.css`,
  `${GHPATH}/img/yape.png`, 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevIa).then(cache => {
      cache.addAll(assets)
    })
  )
})