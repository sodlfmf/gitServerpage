(()=>{var e={};e.id=67,e.ids=[67],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},852:e=>{"use strict";e.exports=require("async_hooks")},1017:e=>{"use strict";e.exports=require("path")},5034:e=>{"use strict";e.exports=require("url")},2979:(e,i,t)=>{"use strict";t.r(i),t.d(i,{GlobalError:()=>s.a,__next_app__:()=>m,originalPathname:()=>h,pages:()=>c,routeModule:()=>u,tree:()=>d}),t(3773),t(2142),t(5382);var r=t(4660),a=t(7423),n=t(9046),s=t.n(n),l=t(6442),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(i,o);let d=["",{children:["(menu-header)",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3773)),"D:\\백업\\YEOWOON-1015\\src\\app\\(menu-header)\\contact\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,2142)),"D:\\백업\\YEOWOON-1015\\src\\app\\(menu-header)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5382,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,8185))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,5382,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,8185))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\백업\\YEOWOON-1015\\src\\app\\(menu-header)\\contact\\page.tsx"],h="/(menu-header)/contact/page",m={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(menu-header)/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2387:(e,i,t)=>{Promise.resolve().then(t.t.bind(t,282,23)),Promise.resolve().then(t.t.bind(t,3971,23)),Promise.resolve().then(t.t.bind(t,782,23)),Promise.resolve().then(t.t.bind(t,742,23)),Promise.resolve().then(t.t.bind(t,2263,23)),Promise.resolve().then(t.t.bind(t,1989,23))},4872:(e,i,t)=>{Promise.resolve().then(t.bind(t,4565))},5260:(e,i,t)=>{Promise.resolve().then(t.bind(t,3684))},4565:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>d});var r=t(9802),a=t(373),n=t(757);let s={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"]};t(9542),t(6076);var l=t(8047);async function o(e){let i=await fetch("/contact/api",{method:"POST",body:JSON.stringify(e),headers:{"Contact-Type":"application/json"}}),t=await i.json();if(!i.ok)throw Error(t.message||"서버요청 실패");return t}let d=()=>{let[e,i]=(0,l.useState)({name:"",mail:"",inquiy:""}),[t,d]=(0,l.useState)(""),c=t=>{i({...e,[t.target.name]:t.target.value})};return(0,r.jsxs)("div",{className:"contact",children:[r.jsx("div",{children:(0,r.jsxs)("div",{className:"contact_Us",children:[r.jsx("h1",{children:"Contact us"}),(0,r.jsxs)("form",{className:"gform",method:"post",id:"gform",onSubmit:t=>{t.preventDefault(),""==e.name?d("Please enter your name"):""==e.mail?d("Please enter your email"):""==e.inquiy?d("Please enter inquiry"):(d("Your inquiry has been forwarded."),o({...e}),i({name:"",mail:"",inquiy:""}))},children:[(0,r.jsxs)("div",{children:[r.jsx("div",{children:r.jsx("input",{id:"name",name:"name",placeholder:"Name",onChange:c,value:e.name})}),r.jsx("div",{children:r.jsx("input",{id:"mail",name:"mail",placeholder:"Mail",onChange:c,value:e.mail})}),r.jsx("div",{children:r.jsx("textarea",{id:"inquiy",name:"inquiy",rows:1,placeholder:"Inquiry",onChange:c,value:e.inquiy})})]}),r.jsx("button",{children:r.jsx("p",{children:"SUBMIT"})}),r.jsx("div",{id:"submit_message",children:r.jsx("h2",{children:t})})]})]})}),(0,r.jsxs)("div",{className:"contact_link",children:[(0,r.jsxs)("div",{children:[r.jsx("div",{className:"mailIcon",children:r.jsx(a.G,{icon:s,size:"6x"})}),r.jsx("div",{children:r.jsx("a",{href:"mailto:yeowoon@yeowoon.co.kr",children:r.jsx("b",{children:"yeowoon@yeowoon.co.kr"})})})]}),(0,r.jsxs)("div",{className:"links",children:[(0,r.jsxs)("div",{children:[r.jsx("div",{className:"icon",children:r.jsx(a.G,{icon:n.D9H,size:"4x"})}),r.jsx("b",{children:"LinkedIn"}),r.jsx("div",{children:"Jung Soonhee"})]}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"icon",children:r.jsx(a.G,{icon:n.VHX,size:"4x"})}),r.jsx("b",{children:"What'sapp"}),r.jsx("div",{children:"+8210-9573-4680"})]}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"icon",children:r.jsx(a.G,{icon:n.Zzi,size:"4x"})}),r.jsx("b",{children:"Instagram"}),r.jsx("div",{children:r.jsx("a",{href:"https://www.instagram.com/s.tree_official/",children:"@s.tree_offcial"})}),r.jsx("div",{children:r.jsx("a",{href:"https://www.instagram.com/soonhee_official/",children:"@soonhee.offcial"})})]})]})]})]})}},3684:(e,i,t)=>{"use strict";t.d(i,{default:()=>c});var r=t(9802),a=t(5784);t(2665);var n=t(5740),s=t(5768),l=t(7734),o=t(8047),d=t(2309);let c=()=>{let e=(0,l.usePathname)().replace("/",""),{isModalOpen:i,setIsModalOpen:t}=(0,d.k)(),[c,h]=(0,o.useState)(!1);return(0,r.jsxs)("header",{className:`menu_header ${"brand"===e?"header_brand":""}`,children:[r.jsx("div",{className:"menu_bar_container",children:r.jsx("svg",{onClick:()=>t(i),className:"menu_bar_Btn",width:"42",height:"32",viewBox:"0 0 42 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsxs)("g",{id:"barButton",children:[r.jsx("path",{id:"bar1",d:"M0 2H42",stroke:"white",strokeWidth:"3"}),r.jsx("path",{id:"bar2",d:"M0 16H42",stroke:"white",strokeWidth:"3"}),r.jsx("path",{id:"bar3",d:"M0 30H42",stroke:"white",strokeWidth:"3"})]})})}),r.jsx("nav",{children:(0,r.jsxs)("ul",{children:[r.jsx("li",{children:r.jsx(a.default,{href:"/",children:r.jsx(n.default,{className:"menu_titleImg",src:"/img/mainTitle.svg",width:50,height:50,style:{},alt:"mainTitle"})})}),s.Kw.map((i,t)=>{let n=e===i;return"archive"===i?(0,r.jsxs)("li",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[r.jsx(a.default,{className:n?"active_link":"link",href:`/${i}/artwork`,children:i}),r.jsx("ul",{className:`archive_sub ${c?"subActive":""}`,children:s.rl.map((e,t)=>r.jsx("li",{children:r.jsx(a.default,{href:`/${i}/${e}`,children:e})},t))})]},t):r.jsx("li",{children:r.jsx(a.default,{className:n?"active_link":"link",href:`/${i}`,children:i})},t)})]})})]})}},5768:(e,i,t)=>{"use strict";t.d(i,{Kw:()=>r,nr:()=>n,rl:()=>a});let r=["about","brand","archive","contact"],a=["exhibition","artwork"],n=[{id:"couture2024",imgUrl:"/img/exhibiton/couture2024.png",title:"Couture Las Vagas \n 2024"},{id:"couture2023",imgUrl:"/img/exhibiton/couture2023-2.png",title:"COUTURE Las Vegas 2023"},{id:"MideastjewellerySharjah2023",imgUrl:"/img/exhibiton/MideastjewellerySharjah2023.png",title:"Mideastjewellery Sharjah 2023"},{id:"jgtdubai2023",imgUrl:"/img/exhibiton/jgtdubai2023.png",title:"JGT Dubai 2023"},{id:"JCKLasVagas2022",imgUrl:"/img/exhibiton/JCKLasVagas2022.png",title:"JCK Las Vagas 2022"},{id:"VicenzaoroItaly2022",imgUrl:"/img/exhibiton/VicenzaoroItaly2022.png",title:"Vicenzaoro Italy 2022"},{id:"jgtdubai2022",imgUrl:"/img/exhibiton/jgtdubai2022-2.png",title:"JGT Dubai 2022"},{id:"PremierLAsVagas2019",imgUrl:"/img/exhibiton/barcode.png",title:"Premier Las Vagas 2019"},{id:"JaNewYork2019",imgUrl:"/img/exhibiton/JaNewYork2019.png",title:"Ja New York 2019"}]},2309:(e,i,t)=>{"use strict";t.d(i,{k:()=>a,u:()=>n});var r=t(3875);let a=(0,r.U)(e=>({isModalOpen:!1,setIsModalOpen:i=>e({isModalOpen:!i})})),n=(0,r.U)(e=>({isArtworkModalOpen:!1,setIsArtworkModalOpen:i=>{e({isArtworkModalOpen:!i})}}))},3773:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>r});let r=(0,t(6443).createProxy)(String.raw`D:\백업\YEOWOON-1015\src\app\(menu-header)\contact\page.tsx#default`)},2142:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>n});var r=t(4789);t(4971),t(4330);let a=(0,t(6443).createProxy)(String.raw`D:\백업\YEOWOON-1015\src\components\about-archive-contact-header.tsx#default`);function n({children:e}){return r.jsx("html",{lang:"kr",children:(0,r.jsxs)("body",{children:[(0,r.jsxs)("div",{className:"container",children:[r.jsx(a,{}),r.jsx("main",{className:"main",children:e})]}),r.jsx("div",{id:"portal"}),r.jsx("div",{id:"artworkPortal"})]})})}},8185:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>a});var r=t(7952);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},6076:()=>{},4330:()=>{},4971:()=>{},2665:()=>{}};var i=require("../../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),r=i.X(0,[235,102,961,373,493],()=>t(2979));module.exports=r})();