import './polyfills.server.mjs';
import{a as v}from"./chunk-SXNA6UJE.mjs";import"./chunk-JNO7ST2A.mjs";import{a as f}from"./chunk-FPWFO7V3.mjs";import"./chunk-KRHHTLWT.mjs";import"./chunk-LDSOU5NY.mjs";import{Gb as p,Hb as u,Nb as l,Qa as a,Y as n,aa as s,nb as d,ob as g,pb as m,qb as r,rb as c}from"./chunk-ILMFCX3N.mjs";import"./chunk-VVCT4QZE.mjs";function C(e,t){if(e&1&&(r(0,"div",2)(1,"div",3)(2,"h3",4),p(3),c()()()),e&2){let y=t.$implicit;a(3),u(y.name)}}var D=(()=>{let t=class t{constructor(){this._ActivatedRoute=n(f),this._CategService=n(v),this.onCtaegoryData=[]}ngOnInit(){this.unsub=this._ActivatedRoute.paramMap.subscribe({next:o=>{this.cartegoryId=o.get("cartId"),console.log(this.cartegoryId)}}),this._CategService.getSOneCategoriesApi(this.cartegoryId).subscribe({next:o=>{console.log(o.data),this.onCtaegoryData=o.data}})}ngOnDestroy(){this.unsubcategory?.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["app-onecategory"]],standalone:!0,features:[l],decls:4,vars:0,consts:[[1,"container-fluid","mx-auto","my-5"],[1,"row","g-3","p-5"],[1,"col-md-6"],[1,"product","item","bg-sec"],[1,"text-center","text-light","py-5"]],template:function(i,h){i&1&&(r(0,"section",0)(1,"div",1),g(2,C,4,1,"div",2,d),c()()),i&2&&(a(2),m(h.onCtaegoryData))},styles:[".bg-sec[_ngcontent-%COMP%]{background-color:#9f9595}.item[_ngcontent-%COMP%]:hover{background-color:#da3e0f}"]});let e=t;return e})();export{D as OnecategoryComponent};
