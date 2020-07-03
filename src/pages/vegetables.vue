<style lang='less' scoped>
div::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  /**/
}
div::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}
div::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #333;
}
div::-webkit-scrollbar-corner {
  background: #179a16;
}
.character_page {
  width: 100%;
  z-index: 1;

  position: relative;
  cursor: pointer;
  .login {
    position: fixed;
    top: 0;
    left: 0;
    // width: 6.25rem;
    // height: 6.25rem;
    width: 100%;
    height: 100vh;
    z-index: 1;
    img {
      width: 100%;
      height: 100vh;
    }
  }
  .character_top {
    height: 3.55rem;
  }
  .character_banner {
    height: 37.5rem;
  }
  .character_nav {
    position: absolute;
    display: flex;
    top: 40rem;
    width: 100%;
    height: 4rem;
    line-height: 3.85rem;
    background: #fff;
    box-shadow: 0px 3px 3px 0px rgba(173, 173, 173, 0.2);
    text-align: center;
    z-index: 999;
    .nav {
      height: 4rem;
      margin: 0 auto;
      span {
        display: inline-block;
        padding: 0 0.5rem;
        margin: 0 1.6875rem;
        &.active {
          border-bottom: 3px solid #000;
        }
      }
    }
  }
  .identity_introduce {
    width: 100%;
    padding-bottom: 3.75rem;
    background: #f2f2f2;
    h3 {
      font-size: 1.875rem;
      padding-top: 5.625rem;
      width: 8.0625rem;
      margin: 0 auto;
    }
    .identity_top {
      width: 100%;
      margin: 0 auto;
      margin-top: 4rem;
      height: 3rem;
      text-align: center;
      border-bottom: 1px solid #dfe1e6;
      span {
        width: 8rem;
        font-size: 1rem;
        display: inline-block;
        height: 3rem;
        margin: 0 1.8rem;
        &.active {
          color: #0d73e9;
          border-bottom: 3px solid #0d73e9;
        }
      }
    }
    .identity_top {
      width: 100%;
      margin: 0 auto;
      margin-top: 4rem;
      height: 3rem;
      text-align: center;
      border-bottom: 1px solid #dfe1e6;
      span {
        width: 8rem;
        font-size: 1rem;
        display: inline-block;
        height: 3rem;
        margin: 0 1.8rem;
        &.active {
          color: #0d73e9;
          border-bottom: 3px solid #0d73e9;
        }
      }
    }
    .identity_bottom {
      margin-top: 2.3125rem;
      .identity_left {
        width: 49.3125rem;
        height: 31.125rem;
        background: #c7c5c7;
        position: relative;
        z-index: 0;
        .phtotos {
          width: 49.3125rem;
          height: 31.125rem;
          display: none;
          img {
            width: 100%;
            height: 100%;
          }
          &.active {
            display: block;
          }
        }

        .uploading {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 5.9375rem;
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          .avatar {
            width: 43.37375rem;
            height: 31.125rem;
            display: block;
            position: absolute;
            top: -25.15rem;
            z-index: -1;
            left: 3.19rem;
          }
          .avatar-uploader {
            /deep/ .el-upload {
              .el-icon-plus {
                margin-top: 1rem;
                margin-left: 21.5rem;
                color: #fff;
                width: 6.875rem;
                height: 2.25rem;
                line-height: 2.25rem;
                background: #0c74e5;
                text-align: center;
                &:before {
                  content: "";
                }
              }
              p {
                color: #c4c4c4;
                position: absolute;
                left: 11rem;
                bottom: 1rem;
              }
            }
          }
        }
      }
      .identity_lefta {
        height: 8.125rem;
        background: #ebebeb;
        width: 49.375rem;
        // overflow: hidden;
        .slidea {
          width: 100%;

          li {
            width: 9.125rem;
            height: 6.75rem;
            display: inline-block;
            margin: 0.75rem 1.5625rem;
            &.active {
              border: 0.125rem solid #0073eb;
              width: 8.875rem;
              height: 6.5rem;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .identity_right {
        width: 23.875rem;
        height: 37.625rem;
        background: #fff;
        padding: 0.8125rem 1.0625rem;
        h5 {
          font-size: 0.875rem;
          color: #333;
          margin-bottom: 0.9375rem;
        }
        .pagesbottom {
          margin-bottom: 1.9375rem;
          b {
            font-size: 0.75rem;
            color: #333;
            font-weight: 600;
          }
          h6 {
            font-size: 0.75rem;
          }
          .pagesb {
            margin-bottom: 0.8125rem;
            p,
            span {
              font-size: 0.75rem;
              margin-right: 0.3rem;
              font-size: 0.75rem;
              color: #333;
            }
            p {
              margin-right: 1.9375rem;
            }
          }
        }
      }
    }
  }
  .exchange {
    height: 22rem;
    background-color: #f2f2f2;
    h2 {
      width: 8rem;
      height: 2rem;
      font-size: 2rem;
      margin: 0 auto;
      padding: 4rem 0;
    }
    .exchangethree {
      .quick_all {
        height: 7rem;
        width: 23rem;
        margin-right: 3rem;
        overflow: hidden;
        background-size: 100% 100;
        background-repeat: no-repeat;
        &:last-child {
          margin-right: 0;
        }
        .quick_1 {
          // background: url("../../../static/img/img_fast@2x.png") no-repeat;
          background-size: 100%;
          background-position: center;
        }
        .quick_2 {
          // background: url("../../../static/img/img_question@2x.png") no-repeat;
          background-size: 100%;
          background-position: center;
        }
        .quick_3 {
          // background: url("../../../static/img/img_tools@2x.png") no-repeat;
          background-size: 100%;
          background-position: center;
        }
        .quick_1,
        .quick_2,
        .quick_3 {
          width: 22rem;
          height: 6rem;
          overflow: hidden;
          transition: all 0.5s;

          &:hover {
            width: 22rem;
            height: 6rem;
            background-position: center;
            background-size: 120%;
          }
          h3 {
            margin-top: 1.5rem;
            margin-left: 2rem;
            color: #fcfbfb;
            font-size: 1rem;
          }
          img {
            width: 0.875rem;
            height: 0.4375rem;
            margin-top: 2rem;
            margin-left: 0.3125rem;
          }
          p {
            margin-top: 1rem;
            margin-left: 2rem;
            font-size: 0.875rem;
            color: #e2e2e2;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .certificate_footer {
    width: 100%;
    height: 26.25rem;
  }
}
</style>
<template>
  <div class="character_page">
    <div
      class="login"
      v-if="loading"
      v-loading="loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
    ></div>
    <!-- <div class="character_top">
      <headera></headera>
    </div>
    <div class="character_banner">
      <banner :photo="4"></banner>
    </div>
    <div class="character_nav" ref="refcontent">
      <div class="nav">
        <span
          ref="spana"
          v-for="(item,index) in list"
          :key="index"
          :class="{active:cur==index}"
        >{{item}}</span>
      </div>
    </div>
    <functions :functionlist="functionlist"></functions>-->
    <div class="identity_introduce">
      <div class="w1180">
        <h3>功能演示</h3>

        <div class="identity_bottom">
          <div class="flex" v-show="now == 0">
            <div>
              <div class="identity_left">
                <div v-if="imageUrl=='' || imageUrls==''">
                  <div
                    class="phtotos"
                    v-for="(item,index) in picture"
                    :key="index"
                    :class="{active:photo==index}"
                  >
                    <!-- <img :src="item.src" alt /> -->
                  </div>
                </div>

                <div class="uploading">
                  <el-upload
                    class="avatar-uploader"
                    action="http://222.187.102.126:60022"
                    :show-file-list="false"
                    :on-change="getFile"
                    accept="image/jpeg, image/jpg, image/png"
                    :on-success="handleAvatarSuccess"
                    :on-error="errorss"
                  >
                    <!-- <img
                      v-if="imageUrl"
                      :src="imageUrl"
                      onerror="javascript:this.src='../../../static/img/微信图片_20200415152122.png'"
                      class="avatar"
                    /> -->

                    <i class="el-icon-plus avatar-uploader-icon">本地上传</i>
                    <p>图片文件类型支持PNG、JPG、JPEG、BMP、图片大小不超多2M</p>
                  </el-upload>
                </div>
              </div>

              <div class="identity_lefta">
                <div class="slidea">
                  <li
                    @click="pictures(index,$event,item)"
                    :class="{active:photo==index}"
                    v-for="(item,index) in picture"
                    :key="index"
                  >
                    <!-- <img :src="item.src" /> -->
                  </li>
                </div>
              </div>
            </div>

            <div class="identity_right">
              <h5>识别结果</h5>
              <div class="pagesbottom flex">
                <h6>序号：</h6>
                <b>{{serial}}</b>
              </div>
              <div class="pagesbottom">
                <div class="flex pagesb">
                  <p>检测结果：</p>
                  <span v-if="this.sjlistmsg!='非菜'">{{this.sjlistmsg ||"香菜"}}</span>
                  <span v-else>未识别出来蔬菜种类</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <feature :featurelist="featurelist"></feature> -->
    <!-- <div class="exchange">
      <div class="w1180">
        <h2>支持交流</h2>
        <div class="exchangethree flex">
          <div class="quick_all">
            <div class="quick_1" @mouseover="mouseOvera" @mouseleave="mouseLeavea">
              <div class="flex">
                <h3>快速入门</h3>
                <img :style="active" src="../../../static/img/img_arrow_white@2x.png" />
              </div>
              <p>AI接入指南</p>
            </div>
          </div>
          <div class="quick_all">
            <div class="quick_2" @mouseover="mouseOverb" @mouseleave="mouseLeaveb">
              <div class="flex">
                <h3>常见问题</h3>
                <img :style="activeb" src="../../../static/img/img_arrow_white@2x.png" />
              </div>
              <p>人脸口罩检测注意事项</p>
            </div>
          </div>
          <div class="quick_all">
            <div class="quick_3" @mouseover="mouseOverc" @mouseleave="mouseLeavec">
              <div class="flex">
                <h3>产品文档</h3>
                <img :style="activec" src="../../../static/img/img_arrow_white@2x.png" />
              </div>
              <p>人脸口罩检测API文档</p>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- <recommend :relevant="relevant" @clickHeadAction="tolists"></recommend>
    <div class="character_footer">
      <bottoms></bottoms>
    </div>-->
  </div>
</template>

<script>
// import banner from "../../components/background";
// import headera from "../../components/header";
// import bottoms from "../../components/bottoms";
// import feature from "../../components/feature";
// import functions from "../../components/function";
// import recommend from "../../components/footer_recommend";
// import { Upload, Loading, Notification } from "element-ui";
export default {
  components: {
    // headera,
    // bottoms,
    // banner,
    // recommend,
    // functions,
    // feature,
    // Upload,
    // Loading,
    // Notification
  },
  data() {
    return {
      sjlistmsg: "",
      // loadings: false,
      loading: false,
      error: "",
      imageUrls: "",
      imageUrl: "",
      photolist: -1,
      active: "",
      activeb: "",
      activec: "",
      // 相关推荐
      relevant: [
        {
          name: "人脸对比",
          type: "支持证件与人脸对比，检测是否为证件本人 "
        },
        {
          name: "活体检测",
          type:
            "支持活体检测 6 种在线/离线活体检测服务， 识别业务场景中的用户是否为「真人」。"
        },
        {
          name: "学历证书",
          type:
            "支持百万级人脸库管理，毫秒级识别响应，可满足身份核验、 人脸考勤、刷脸通行等应用场景"
        }
      ],
      serial: "内容",
      photo: 0,
      sjlist: [
        {
          card: "b225 7b88 88888 8888",
          data: "88/88",
          bankname: "招商银行",
          type: "人民币信用卡"
        }
      ],
      sjlists: [
        {
          office: "南京市公安局江宁分局",
          data: "2011.04.15-2021.04.15"
        }
      ],
      fileList: [],
      formlist: [
        {
          name: "多样化AI场景支持",
          type:
            "支持计算机视觉相关图像业务，自然语 言处理业务，语音业务及地图位置相关 业务。"
        },
        {
          name: "慢SQL统计及诊断",
          type:
            "通过百度智能云多年运维经验，提供全 面的慢SQL统计及诊断功能，加速AI实 践。"
        }
      ],
      now: 0,
      scene: ["人面像", "国徽面"],
      cur: 0,
      list: ["功能介绍", "功能演示", "特色优势", "支持交流", "相关推荐"],
      //  特色优势
      featurelist: [
        {
          name: "灵活简单易用",
          type:
            "可自定义接口的返回参数信息，灵活组合各项人脸技术模块，实现不同业务功能",
          img: "img_Simple@2x",
          src: "img_Simple@2x"
        },
        {
          name: "服务稳定",
          type:
            "提供企业级稳定、精确的大流量服务。支持毫秒级的识别响应能力、弹性灵活的高并发",
          img: "img_service@2x",
          src: "img_service@2x"
        },
        {
          name: "准确率高",
          type: "基于品安专业的深度学习算法和海量数据训练，识别准确率超过99%",
          img: "img_accuracy@2x",
          src: "img_accuracy@2x"
        }
      ],
      //   功能介绍
      functionlist: [
        {
          name: "人脸检测定位",
          type: "检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸",
          img: "img_face@2x_1",
          src: "img_face@2x_1"
        },
        {
          name: "人脸属性分析",
          type:
            "准确识别多种人脸属性信息，包括年龄、性别、颜值、表情、情 绪、脸型、头部姿态、是否闭眼、是否配戴眼镜等",
          img: "img_property@2x",
          src: "img_property@2x"
        }
      ],
      picture: [
        {
          img: "1.1",
          src: "1.1",
          filenames: "1.1.png"
        },
        {
          img: "1.2",
          src: "1.2",
          filenames: "1.2.png"
        },
        {
          img: "1.3",
          src: "1.3",
          filenames: "1.3.png"
        },
        {
          img: "1.4",
          src: "1.4",
          filenames: "1.4.png"
        }
      ]
    };
  },

  computed: {},
  created() {
    window.aa = '1'
    // this.functionlist.map(item => {
    //   item.src = this.srcimg(item.img);
    // });
    // this.featurelist.map(item => {
    //   item.src = this.srcimg(item.img);
    // });

    // this.picture.map(item => {
    //   item.src = this.srcimg(item.img);
    // });
    // console.log("128888", this.loading, this.loadings);

    // loading;
  },
  mounted() {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    //监听页面滚动事件
    // window.addEventListener("scroll", this.menu);
  },
watch: {
  loading(news){
    console.log(news)
  }
},
  methods: {
    tolists(index) {
      // // console.log("weeeeeeeeeeeeeee", index);
      // if (index == 0) {
      //   this.$router.push("/comparison");
      // } else if (index == 1) {
      //   this.$router.push("/detectionjc");
      // } else if (index == 2) {
      //   this.$router.push("/education");
      // }
    },
    errorss(err, file, fileList) {
      console.log(err.type)
      if (err.type == "error") {
        this.loading = false;
        this.$notify({
          title: "警告",
          message: "接口获取失败请重新刷新页面"
        });
        // this.fullscreenLoading = false;
      }
      // console.log("jieshu", this.loadings, this.loading);
    },
    // progress(event, file, fileList) {
    //   this.loading = true;
    //   this.loadings = true;
    // },
    beforeAvatarUpload(file) {
      console.log("路径1", file);
      // if (/\.(png|jpeg|jpg)(\?.*)?$/.test(file) == false) {
      //   console.log(Date.now());

      //   this.$message({
      //     message: "上传文件只能是png、jpg、jpeg、bmp格式!",
      //     type: "warning"
      //   });
      //   return;
      // }
      // this.file = file;
      // console.log(this.file);
      const isJPEG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isJPG = file.type === "image/jpg";
      if (!isPNG && !isJPEG && !isJPG) {
        this.$message.error("1 JPG、PNG、JPEG 格式!");
      }
      // else if (!isJPEG) {
      //   this.$message.error("2 JPG、PNG、JPEG 格式!");
      // } else if (!isJPG) {
      //   this.$message.error("3 JPG、PNG、JPEG 格式!");
      // }
      return isJPEG || isPNG || isJPG;
    },
    handleAvatarSuccess(res, file, response) {
      // this.formInline.logFile = file.raw;
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log("res", res);
      if (res.name != "") {
        this.sjlistmsg = res.name;
        console.log("444", this.sjlistmsg);
        this.loading = false;
        // this.loadings = false;
      }
      this.loading = false;
      // this.loadings = false;
    },
    // 上传照片时
    getFile(file, fileList) {
      // var strRegex = "(.jpg|.png|.gif|.ps|.jpeg)$"; //用于验证图片扩展名的正则表达式
      // var re = new RegExp(strRegex);
      // if (!re.test(file.raw.name.toLowerCase())) {
      //   this.imageUrl = "xxxx.jpg";
      //   return;
      // }
      this.getBase64(file.raw).then(res => {
        // 图片传送错误时
        if (/\.(png|jpeg|bmp|jpg)(\?.*)?$/.test(file.raw.name) == false) {
          // this.$message({
          //   message: "上传文件只能是png、jpg、jpeg、bmp格式!",
          //   type: "warning"
          // });
          this.imageUrl = res;
          this.imageUrls = 1;
          // return;
        }

        this.file = file.raw.name;
        this.imageUrl = res;
        this.imageUrls = 1;
        // setTimeout(() => {
        this.loading = true;
        console.log('111111111')
        // }, 10);

        // this.vegetables(res, this.file);
      });
    },
    async vegetables(res, file) {
      // this.update = true;
      // {base64:"base64",filename:"file.name"}
      let data = await this.$req(window.api.vegetables, {
        base64: res,
        filename: file
      });
      // console.log("eeeeeeeeeeeeeeeeeeeee", data.status);

      if (data) {
        // if (data.data.name == "非菜") {
        // this.loading = true;
        // this.loadings = true;
        this.sjlistmsg = data.data.name;
        console.log("444");
        this.loading = false;
        // this.loadings = false;
        // } else {
        //   this.loading = true;
        //   this.loadings = true;
        //   // console.log("wqeqewq");
        //   // ;
        //   this.sjlistmsg = data.data.name;
        //   console.log("444");
        //   this.loading = false;
        //   this.loadings = false;
        // }
      } else {
        this.loading = false;
        // this.loadings = false;
        // this.$message.error({
        //   message: "接口获取失败请重新刷新页面",
        //   type: "warning",
        //   offset: 150
        // });
        console.log("werrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");

        this.$notify({
          title: "警告",
          message: "接口获取失败请重新刷新页面"
        });
      }
    },
    // base64转换
    getBase64(file) {
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function() {
          imgResult = reader.result;
        };
        reader.onerror = function(error) {
          reject(error);
        };
        reader.onloadend = function() {
          resolve(imgResult);
        };
      });
    },
    // 照片点击事件
    pictures(index, event, item) {
      console.log("dsaddf", item.filename);
      var filename = item.filenames;
      this.imageUrls = "";
      this.photo = index;
      var that = this;
      that.loading = true;
      // that.loadings = true;
      getBase64(event.target.src, filename);
      function getBase64(imgUrl, filename) {
        window.URL = window.URL || window.webkitURL;

        // var xhr = new XMLHttpRequest();
        // xhr.open("post", "http://222.187.102.126:60043/", true); // 至关重要
        // xhr.responseType = "text/html";
        // xhr.send();
        console.log("wwwwwwww", filename);
        var canvas = document.createElement("CANVAS");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imgUrl;

        img.onload = function() {
          //console.log("onload");
          canvas.height = img.height;
          canvas.width = img.width;
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL("image/png");
          //console.log(dataURL);
          that.vegetables(dataURL, filename);
          canvas = null;
          ctx = null;
        };
      }
    },
    // 图片
    srcimg(img) {
      // return require(`../../../static/img/${img}.png`);
    },
    srcimgs(img) {
      // return require(`../../../static/img/${img}.png`);
    },
    // 上传文件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    purchase() {},
    handleTab(index) {
      this.now = index;
    },
    handleTab(index) {
      this.now = index;
    },
    mouseOvera() {
      this.active = "margin-left:1rem;transition:all 0.5s;";
    },
    mouseLeavea() {
      this.active = "";
    },
    mouseOverb() {
      this.activeb = "margin-left:1rem;transition:all 0.5s;";
    },
    mouseLeaveb() {
      this.activeb = "";
    },
    mouseOverc() {
      this.activec = "margin-left:1rem;transition:all 0.5s;";
    },
    mouseLeavec() {
      this.activec = "";
    },
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (this.scroll >= 635 && this.scroll <= 998) {
        this.$refs.refcontent.style.position = "fixed";
        this.$refs.refcontent.style.top = "0";
        for (let i = 0; i < this.$refs.spana.length; i++) {
          this.$refs.spana[0].className = "active";
          this.$refs.spana[1].className = "";
          this.$refs.spana[2].className = "";
          this.$refs.spana[3].className = "";
          this.$refs.spana[4].className = "";
        }
      } else if (this.scroll >= 999 && this.scroll <= 1805) {
        this.$refs.refcontent.style.position = "fixed";
        this.$refs.refcontent.style.top = "0";
        for (let i = 0; i < this.$refs.spana.length; i++) {
          this.$refs.spana[0].className = "";
          this.$refs.spana[1].className = "active";
          this.$refs.spana[2].className = "";
          this.$refs.spana[3].className = "";
          this.$refs.spana[4].className = "";
        }
      } else if (this.scroll >= 1806 && this.scroll <= 2265) {
        this.$refs.refcontent.style.position = "fixed";
        this.$refs.refcontent.style.top = "0";
        for (let i = 0; i < this.$refs.spana.length; i++) {
          this.$refs.spana[0].className = "";
          this.$refs.spana[1].className = "";
          this.$refs.spana[2].className = "active";
          this.$refs.spana[3].className = "";
          this.$refs.spana[4].className = "";
        }
      } else if (this.scroll >= 2266 && this.scroll <= 2645) {
        this.$refs.refcontent.style.position = "fixed";
        this.$refs.refcontent.style.top = "0";
        for (let i = 0; i < this.$refs.spana.length; i++) {
          this.$refs.spana[0].className = "";
          this.$refs.spana[1].className = "";
          this.$refs.spana[2].className = "";
          this.$refs.spana[3].className = "active";
          this.$refs.spana[4].className = "";
        }
      } else if (this.scroll >= 2646) {
        this.$refs.refcontent.style.position = "fixed";
        this.$refs.refcontent.style.top = "0";
        for (let i = 0; i < this.$refs.spana.length; i++) {
          this.$refs.spana[0].className = "";
          this.$refs.spana[1].className = "";
          this.$refs.spana[2].className = "";
          this.$refs.spana[3].className = "";
          this.$refs.spana[4].className = "active";
        }
      } else {
        this.$refs.refcontent.style.position = "absolute";
        this.$refs.refcontent.style.top = "40rem";
      }
      // if (this.scroll >= 635) {
      //

      // } else {
      //   this.$refs.refcontent.style.position = "absolute";
      //   this.$refs.refcontent.style.top = "40rem";

      // }
    }
  }
};
</script>