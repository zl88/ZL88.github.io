var posts=["posts/49412.html","posts/46337.html","posts/40639.html","posts/12834.html","posts/41503.html","posts/9021.html","posts/14808.html","posts/58959.html","posts/44229.html","posts/56198.html","posts/aboutdj.html","posts/12106.html","posts/62318.html","posts/8130.html","posts/60151.html","posts/30747.html","posts/sj.html","posts/21814.html","posts/2241.html","posts/58162.html","posts/60549.html","posts/33180.html","posts/62681.html","posts/14709.html","posts/13770.html","posts/16126.html","posts/56307.html","posts/52116.html","posts/50931.html","posts/29257.html","posts/20042.html","posts/64860.html","posts/3185.html","posts/34237.html","posts/35326.html","posts/38690.html","posts/16765.html","posts/34228.html","posts/27566.html","posts/1188.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}