import F from"node:fs"
let A="00011223",L=[8,15,3,5,2,4]
let V=(P,Q)=>{
let S=new Int32Array(256),C=new Int32Array(64),M=S.slice(),O=new Uint8Array(65536),n=P.length,s=0,c=0,o=0,i=0,p=0,t=0,a,b,x,u,w,k
let E=e=>{throw[O.subarray(0,o),e]}
try{for(;;){
if(t==1e6)E(10)
if(p>>>0>=n)E(9)
let op=P[p]
if(op>>4>5|(op&15)>=L[op>>4])E(5)
let m=op<3?op*op:op>>2==12?2:0
if(p+m>=n)E(9)
t++
let v=p+1+m,po=op<8?A[op]:op<35?(op==23|op==27?1:2):op<53?(op>48&op<51?1:0):op<66?op-63:op!=82
if(s<po)E(2)
if(s>255&(op==1|op==2|op==4|op==6|op==82))E(3)
p=v
switch(op){
case 0:E(0)
case 1:S[s++]=P.readInt8(v-1);break
case 2:S[s++]=P.readInt32LE(v-4);break
case 3:s--;break
case 4:case 6:S[s]=S[s-2+(op==4)];s++;break
case 5:x=S[s-1];S[s-1]=S[s-2];S[s-2]=x;break
case 7:x=S[s-3];S[s-3]=S[s-2];S[s-2]=S[s-1];S[s-1]=x;break
case 23:S[s-1]=-S[s-1];break
case 27:S[s-1]=~S[s-1];break
case 48:case 49:case 50:x=P.readInt16LE(v-2);if(op==48||(S[--s]==0)==(op==49))p=v+x;break
case 51:if(c>63)E(7);C[c++]=v;p=P[v-2]|P[v-1]<<8;break
case 52:if(!c)E(8);p=C[--c];break
case 64:case 65:a=S[s-1];if(a<0|a>255)E(6);if(op==64)S[s-1]=M[a];else{M[a]=S[s-2];s-=2}break
case 80:x=S[--s]+"";if(o+x.length>65536)E(11);for(k of x)O[o++]=k.charCodeAt();break
case 81:if(o>65535)E(11);O[o++]=S[--s]&255;break
case 82:S[s++]=i<Q.length?Q[i++]:-1;break
case 83:E(S[--s]&255)
default:b=S[--s];a=S[s-1];u=a>>>0;w=b>>>0
if(op>18&op<23&!b)E(4)
S[s-1]=op<19?(op==16?a+b:op==17?a-b:Math.imul(a,b)):op<23?(op==19?(a/b)|0:op==20?a%b:op==21?u/w:u%w):op<27?(op==24?a&b:op==25?a|b:a^b):op<31?(op==28?a<<b:op==29?a>>b:a>>>b):op==32?a==b:op==33?a<b:u<w
}}}catch(e){return e}}
let I=process.env.MAKEFUN_INPUT_DIR||"/input",U=process.env.MAKEFUN_OUTPUT_DIR||"/output"
for(let d of F.readdirSync(I)){
let g=I+"/"+d,h=U+"/"+d,[r,y]=V(F.readFileSync(g+"/program.bin"),F.readFileSync(g+"/input.bin"))
F.mkdirSync(h,{recursive:true})
F.writeFileSync(h+"/stdout.bin",r)
F.writeFileSync(h+"/exit.txt",y+"\n")
}
