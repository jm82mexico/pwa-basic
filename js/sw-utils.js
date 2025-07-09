
/* exported actualizarCacheDinamico */
// function actualizarCacheDinamico(dynamicCache,req,res){
//
//     if(res.ok){
//         return caches.open(dynamicCache). then(cache => {
//             cache.put(req, res.clone());
//             return res.clone();
//         });
//     }else{
//         return res;
//     }
// }
function actualizarCacheDinamico(dynamicCache, req, res) {
    if (!req.url.startsWith('http')) {
        return res; // Ignora peticiones que no sean http/https
    }
    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}