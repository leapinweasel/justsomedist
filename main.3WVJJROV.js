import{a as u}from"./chunk-GHTMT4A2.js";import"./chunk-76TU3OSB.js";import{b as K}from"./chunk-YZJLV2DQ.js";import{a as J,b as N,c as P,d as Q,e as g,f as U,g as V,h as Y,i as f}from"./chunk-DYE7QTCV.js";import{Aa as _,Ba as z,Ca as d,Da as k,Fa as I,Ia as m,Ja as L,Ka as O,Na as B,O as o,Q as l,U as y,V as w,ba as E,ib as G,j as q,jb as H,kb as c,na as b,sa as A,ta as F,u as D,ua as R,va as i,wa as a,xa as s,za as T}from"./chunk-2FFS3JCV.js";import{c as h}from"./chunk-FC6Q6UXU.js";var $="justsome",W="0.0.1";var M=new E("PACKAGE_JSON"),X=()=>({provide:M,useValue:{name:$,version:W}});var S=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["app-logo"]],standalone:!0,features:[m],decls:9,vars:0,consts:[["routerLink","/",1,"flex","items-center","space-x-2"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","aria-hidden","true","role","img","width","32","height","32","preserveAspectRatio","xMidYMid meet","viewBox","0 0 32 32",1,"iconify","iconify--vscode-icons"],["fill","#dd0031","d","M16 2L2.966 6.648l1.988 17.234L16 30l11.046-6.118l1.988-17.234L16 2z"],["fill","#c3002f","d","M16 2v3.108v-.014V30l11.046-6.118l1.988-17.234L16 2z"],["fill","#fff","d","m16 5.094l-8.148 18.27h3.038l1.638-4.088h6.916l1.638 4.088h3.038L16 5.094Zm2.38 11.662h-4.76L16 11.03Z"],[1,"text-xl","tracking-tighter","font-medium","md:hidden"],[1,"text-xl","tracking-tighter","font-medium","hidden","md:inline-block"]],template:function(n,p){n&1&&(i(0,"a",0),y(),i(1,"svg",1),s(2,"path",2)(3,"path",3)(4,"path",4),a(),w(),i(5,"span",5),d(6," AB "),a(),i(7,"span",6),d(8," Angular Boilerplate "),a()())},dependencies:[c,f,U],encapsulation:2,changeDetection:0})})(),t})();var ee=(()=>{let e=class{constructor(){this.packageJson=o(M),this.currentYear=new Date().getFullYear()}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["app-footer"]],standalone:!0,features:[I([X()]),m],decls:11,vars:2,consts:[[1,"w-full","container","mx-auto","flex-shrink-0","px-4","py-8"],[1,"bg-white","dark:bg-zinc-800","flex","items-center","px-6","py-4","rounded-lg","shadow","justify-between"],[1,"flex","flex-wrap","items-center","space-x-3"],["href","https://github.com/leapinweasel/justsome","title","Repository",1,"btn","btn-fit"],[1,"icon-[mdi--github]","text-3xl"],[1,"block","pt-6","text-sm","text-gray-500","text-center"],["href","https://github.com/leapinweasel/justsome",1,"hover:underline"]],template:function(n,p){n&1&&(i(0,"footer",0)(1,"div",1),s(2,"app-logo"),i(3,"nav",2)(4,"a",3),s(5,"span",4),a()()(),i(6,"span",5),d(7),i(8,"a",6),d(9," AngularBoilerplate "),a(),d(10),a()()),n&2&&(b(7),k(" \xA9 ",p.currentYear," "),b(3),k(" - ",p.packageJson.version," - Built on planet \u{1F30E} "))},dependencies:[c,f,S],encapsulation:2,changeDetection:0})})(),t})();var te=(()=>{let e=class{constructor(){this._router=o(g),this._authService=o(u)}onClickSignOut(){this._authService.logout(),this._router.navigate(["/auth/login"])}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["app-navbar"]],standalone:!0,features:[m],decls:9,vars:0,consts:[[1,"w-full","py-2","z-20","bg-white/20","dark:bg-zinc-900/40","backdrop-blur","border-b","border-base"],[1,"container","flex","items-center","justify-between","h-full","mx-auto","center"],[1,"flex","items-center","space-x-2"],["data-cy","logout-button",1,"btn","btn-secondary",3,"click"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","aria-hidden","true","role","img","width","22","height","22","preserveAspectRatio","xMidYMid meet","viewBox","0 0 24 24",1,"iconify","iconify--material-symbols"],["fill","currentColor","d","M15.325 16.275q-.275-.325-.275-.738q0-.412.275-.687l1.85-1.85H10q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h7.175l-1.85-1.85q-.3-.3-.3-.712q0-.413.3-.713q.275-.3.688-.3q.412 0 .687.275l3.6 3.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.325.325-.712.287q-.388-.037-.663-.312ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h6q.425 0 .713.287Q12 3.575 12 4t-.287.712Q11.425 5 11 5H5v14h6q.425 0 .713.288q.287.287.287.712t-.287.712Q11.425 21 11 21Z"],[1,"ml-2"]],template:function(n,p){n&1&&(i(0,"header",0)(1,"div",1),s(2,"app-logo"),i(3,"nav",2)(4,"button",3),T("click",function(){return p.onClickSignOut()}),y(),i(5,"svg",4),s(6,"path",5),a(),w(),i(7,"span",6),d(8,"Log out"),a()()()()())},dependencies:[c,f,S],encapsulation:2,changeDetection:0})})(),t})();var me=["*"],ne=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["app-layout-horizontal"]],standalone:!0,features:[m],ngContentSelectors:me,decls:4,vars:0,consts:[[1,"container","py-6"]],template:function(n,p){n&1&&(_(),s(0,"app-navbar"),i(1,"main",0),z(2),a(),s(3,"app-footer"))},dependencies:[c,te,ee],encapsulation:2,changeDetection:0})})(),t})();function ce(t,e){t&1&&(i(0,"app-layout-horizontal"),s(1,"router-outlet"),a())}function ue(t,e){t&1&&s(0,"router-outlet")}var ie=(()=>{let e=class{constructor(){this.isAuthenticated$=o(u).isAuthenticated$,this._themeService=o(K)}ngOnInit(){this._themeService.init()}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["notAuthorized",""]],template:function(n,p){if(n&1&&(A(0,ce,2,0,"app-layout-horizontal",0),L(1,"async"),A(2,ue,1,0,"ng-template",null,1,B)),n&2){let j=F(3);R("ngIf",O(1,2,p.isAuthenticated$))("ngIfElse",j)}},dependencies:[c,G,H,f,Q,ne],encapsulation:2})})(),t})();var oe={production:!0,apiUrl:"http://localhost:3000/api/v1"};var re=(t,e)=>{if(o(u).isAuthenticated&&t.url.startsWith(oe.apiUrl)){let n=t.clone({setHeaders:{Authorization:"Bearer JWT TOKEN"}});return e(n)}return e(t)};var ae=(t,e)=>{let x=o(g),r=o(u);return e(t).pipe(D(n=>([401,403].includes(n.status)&&(r.logout(),x.navigateByUrl("/auth/login")),q(()=>n))))};var de=()=>({requiresAuthentication:!0}),v=(t=de())=>(e,x)=>{let r=o(g),n=o(u);return t.requiresAuthentication===n.isAuthenticated?!0:t.requiresAuthentication?r.createUrlTree(["/auth/login"],{queryParams:{returnUrl:x.map(p=>p.path).join("/")}}):r.createUrlTree(["/"])};var se=[{path:"auth",loadChildren:()=>h(void 0,null,function*(){return(yield import("./auth-B4OT2G2Z.js")).routes}),canMatch:[v({requiresAuthentication:!1})]},{path:"",loadChildren:()=>h(void 0,null,function*(){return(yield import("./home-CH3GUXQP.js")).routes}),canMatch:[v()]},{path:"users/:username",loadChildren:()=>h(void 0,null,function*(){return(yield import("./user-WFF52FRE.js")).routes}),canMatch:[v()]},{path:"settings",loadChildren:()=>h(void 0,null,function*(){return(yield import("./settings-ISEDHSTT.js")).routes}),canMatch:[v()]},{path:"**",loadComponent:()=>h(void 0,null,function*(){return(yield import("./not-found.component-ST4KPMFV.js")).NotFoundComponent})}];var pe={providers:[V(se,Y()),J(N([ae,re]))]};P(ie,pe).catch(t=>{console.error(t)});
