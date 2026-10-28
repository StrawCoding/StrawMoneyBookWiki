#!/usr/bin/env node
/**
 * Patch VitePress dist/404.html to fix legacy Wiki URLs (missing base, /StrawMoneyBookWiki prefix, .html, wrong case).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const dist404 = resolve(import.meta.dirname, '../docs/.vitepress/dist/404.html')
let html = readFileSync(dist404, 'utf8')

const injector = `<script id="smb-wiki-legacy-redirect">(function(){try{
  var p=(location.pathname||'').replace(/\\/+$/,'')||'/';
  if(/^\\/StrawMoneyBookWiki(\\/|$)/i.test(p)){
    p=p.replace(/^\\/StrawMoneyBookWiki/i,'')||'/';
    location.replace(p+location.search+location.hash);
    return;
  }
  var roots=['operations','guide','architecture','domains','quick-start'];
  for(var i=0;i<roots.length;i++){
    var r=roots[i];
    var re=new RegExp('^/'+r+'(/|$)','i');
    if(re.test(p)){
      var rest=p.replace(new RegExp('^/'+r+'/?','i'),'');
      rest=rest.replace(/\\.html$/i,'').toLowerCase();
      var target='/'+r+(rest?'/'+rest:'');
      if(target!==p) location.replace(target+location.search+location.hash);
      return;
    }
  }
}catch(e){}})();</script>`

if (!html.includes('smb-wiki-legacy-redirect')) {
  html = html.replace('</head>', `${injector}\n</head>`)
  writeFileSync(dist404, html)
  console.log('[patch-vitepress-404] injected legacy redirect script into dist/404.html')
} else {
  console.log('[patch-vitepress-404] already patched')
}
