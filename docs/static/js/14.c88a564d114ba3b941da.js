webpackJsonp([14],{"Vl5/":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l={name:"TestRegistrationForm",components:{},props:{},data:function(){return{username:"",password:"",show:!1,picker_columns:[{text:"浙江",children:[{text:"杭州",children:[{text:"西湖区"},{text:"余杭区"}]},{text:"温州",children:[{text:"鹿城区"},{text:"瓯海区"}]}]},{text:"福建",children:[{text:"福州",children:[{text:"鼓楼区"},{text:"台江区"}]},{text:"厦门",children:[{text:"思明区"},{text:"海沧区"}]}],picker_title:""}]}},created:function(){},mounted:function(){},activated:function(){},update:function(){},methods:{fieldClick:function(e){console.log(e),"报考点"==e&&(this.picker_title="选择城市"),this.show=!0},picker_confirm:function(){console.log("确定"),this.show=!1},picker_cancel:function(){console.log("取消"),this.show=!1}},filters:{},computed:{},watch:{}},a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"TestRegistrationForm"}},[t("div",{staticClass:"box"},[t("van-form",{attrs:{"show-error-message":!1},on:{submit:e.onSubmit}},[t("section",[t("div",{staticClass:"section_title"},[t("span"),e._v(" "),t("span",[e._v("科目信息")])]),e._v(" "),t("van-field",{attrs:{name:"报考点",label:"报考点",placeholder:"请选择下属单位","is-link":!0,"input-align":e.right},on:{click:function(n){return e.fieldClick("报考点")}},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{name:"考试类型",label:"考试类型",placeholder:"请选择","is-link":!0},on:{click:function(n){return e.fieldClick("考试类型")}},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{name:"考点",label:"考点",placeholder:"请选择","is-link":!0},on:{click:function(n){return e.fieldClick("考点")}},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{name:"报考科目",label:"报考科目",placeholder:"请选择","is-link":!0},on:{click:function(n){return e.fieldClick("报考科目")}},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{name:"报考级别",label:"报考级别",placeholder:"请选择","is-link":!0},on:{click:function(n){return e.fieldClick("报考级别")}},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{name:"辅导课",label:"辅导课",placeholder:"请选择","is-link":!0},on:{click:function(n){return e.fieldClick("辅导课")}},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}})],1),e._v(" "),t("section",[t("div",{staticClass:"section_title"},[t("span"),e._v(" "),t("span",[e._v("邮寄地址")])]),e._v(" "),t("van-field",{attrs:{name:"联系人",label:"联系人",placeholder:"请输入联系人"},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{name:"手机号码",label:"手机号码",placeholder:"联系人手机号"},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{name:"所在地区",label:"所在地区",placeholder:"请选择","is-link":!0},on:{click:function(n){return e.fieldClick("所在地区")}},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{rows:"2",type:"textarea",maxlength:"50",placeholder:"输入您的详细地址"},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}})],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("下一步")])],1)])],1),e._v(" "),t("van-popup",{style:{height:"45%"},attrs:{position:"bottom"},model:{value:e.show,callback:function(n){e.show=n},expression:"show"}},[t("van-picker",{attrs:{"show-toolbar":"",title:e.picker_title,columns:e.picker_columns},on:{confirm:e.picker_confirm,cancel:e.picker_cancel}})],1)],1)},staticRenderFns:[]};var i=t("VU/8")(l,a,!1,function(e){t("lwEO")},"data-v-4046bd23",null);n.default=i.exports},lwEO:function(e,n){}});
//# sourceMappingURL=14.c88a564d114ba3b941da.js.map