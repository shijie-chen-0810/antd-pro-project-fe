self.importScripts("/spark-md5.min.js"),self.onmessage=f=>{const{fileChunkList:e}=f.data,t=new self.SparkMD5.ArrayBuffer;let a=0,s=0;const r=o=>{const l=new FileReader;l.readAsArrayBuffer(e[o].file),l.onload=p=>{var n;s++,t.append((n=p.target)==null?void 0:n.result),s===e.length?(self.postMessage({percentage:100,hash:t.end()}),self.close()):(a+=100/e.length,self.postMessage({percentage:a}),r(s))}};r(0)};
