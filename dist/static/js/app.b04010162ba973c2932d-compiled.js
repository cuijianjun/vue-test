webpackJsonp([0], [,,, function (t, s, i) {
  function e(t) {
    i(65);
  }var a = i(0)(i(45), i(97), e, "data-v-17ab1963", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(76);
  }var a = i(0)(i(46), i(108), e, "data-v-ce20719e", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(63);
  }var a = i(0)(i(47), i(95), e, "data-v-15b99d5e", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(71);
  }var a = i(0)(i(48), i(103), e, "data-v-71d37533", null);t.exports = a.exports;
},,,,,,, function (t, s, i) {
  t.exports = i.p + "static/img/1.0de5539.png";
}, function (t, s, i) {
  function e(t) {
    i(67);
  }var a = i(0)(i(44), i(99), e, "data-v-23095922", null);t.exports = a.exports;
},,, function (t, s, i) {
  function e(t) {
    i(64);
  }var a = i(0)(i(50), i(96), e, null, null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(62);
  }var a = i(0)(i(54), i(94), e, null, null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(73);
  }var a = i(0)(i(55), i(105), e, "data-v-7de3a9db", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(69);
  }var a = i(0)(i(56), i(101), e, "data-v-3273c320", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(70);
  }var a = i(0)(i(57), i(102), e, "data-v-6052cd0c", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(61);
  }var a = i(0)(i(58), i(93), e, null, null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(77);
  }var a = i(0)(i(59), i(109), e, "data-v-cf2861da", null);t.exports = a.exports;
},,,,,,,,,,,,,,,,,,,, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { data: function data() {
      return { nowIndex: 0, banks: [{ id: 201, label: "招商银行", name: "zhaoshang" }, { id: 301, label: "中国建设银行", name: "jianshe" }, { id: 601, label: "浦发银行", name: "pufa" }, { id: 1101, label: "交通银行", name: "jiaotong" }, { id: 101, label: "中国工商银行", name: "gongshang" }, { id: 401, label: "中国农业银行", name: "nongye" }, { id: 1201, label: "中国银行", name: "zhongguo" }, { id: 501, label: "中信银行", name: "zhongxin" }] };
    }, methods: { chooseSelection: function chooseSelection(t) {
        this.nowIndex = t, this.$emit("on-change", this.banks[t]);
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { props: { selections: { type: Array, default: [{ label: "test", value: 0 }] } }, data: function data() {
      return { nowIndex: 0 };
    }, methods: { chosenSelection: function chosenSelection(t) {
        this.nowIndex = t, this.$emit("on-change", this.selections[t]);
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { props: { max: { type: Number, default: 5 }, min: { type: Number, default: 1 } }, data: function data() {
      return { number: this.min };
    }, watch: { number: function number() {
        this.$emit("on-change", this.number);
      } }, methods: { fixNumber: function fixNumber() {
        var t = void 0;t = "string" == typeof this.number ? Number(this.number.replace(/\D/g, "")) : this.number, (t > this.max || t < this.min) && (t = this.min), this.number = t;
      }, minus: function minus() {
        this.number <= this.min || this.number--;
      }, add: function add() {
        this.number >= this.max || this.number++;
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { props: { isShow: { type: Boolean, default: !1 } }, methods: { closeMyself: function closeMyself() {
        this.$emit("on-close");
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(12),
      a = i.n(e);s.default = { props: { selections: { type: Array, default: [{ label: "test", value: 0 }] } }, data: function data() {
      return { nowIndexes: [0] };
    }, methods: { toggleSelection: function toggleSelection(t) {
        var s = this;-1 === this.nowIndexes.indexOf(t) ? this.nowIndexes.push(t) : this.nowIndexes = a.a.remove(this.nowIndexes, function (s) {
          return s !== t;
        });var i = a.a.map(this.nowIndexes, function (t) {
          return s.selections[t];
        });this.$emit("on-change", i);
      }, checkActive: function checkActive(t) {
        return -1 !== this.nowIndexes.indexOf(t);
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { props: { selections: { type: Array, default: [{ label: "test", value: 0 }] } }, data: function data() {
      return { isDrop: !1, nowIndex: 0 };
    }, methods: { toggleDrop: function toggleDrop() {
        this.isDrop = !this.isDrop;
      }, chooseSelection: function chooseSelection(t) {
        this.nowIndex = t, this.isDrop = !1, this.$emit("on-change", this.selections[this.nowIndex]);
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(4),
      a = i.n(e);s.default = { components: { thisDialog: a.a }, props: { isShowCheckDialog: { type: Boolean, default: !1 }, orderId: { type: [String, Number] } }, data: function data() {
      return { isShowSuccessDialog: !1, isShowFailDialog: !1 };
    }, methods: { checkStatus: function checkStatus() {
        var t = this;this.$http.post("/api/checkOrder", { orderId: this.orderId }).then(function (s) {
          t.isShowSuccessDialog = !0, t.$emit("on-close-check-dialog");
        }, function (s) {
          t.isShowFailDialog = !0, t.$emit("on-close-check-dialog");
        });
      }, toOrderList: function toOrderList() {
        this.$router.push({ path: "/orderList" });
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(4),
      a = i.n(e),
      n = i(90),
      l = i.n(n),
      o = i(91),
      r = i.n(o);s.default = { components: { MyDialog: a.a, LogForm: l.a, RegForm: r.a }, data: function data() {
      return { isShowDialog: !1, isShowAboutDialog: !1, isShowLogDialog: !1, isShowRegDialog: !1, username: "" };
    }, methods: { aboutClick: function aboutClick() {
        this.isShowAboutDialog = !0;
      }, closeDialog: function closeDialog(t) {
        this[t] = !1;
      }, logClick: function logClick() {
        this.isShowLogDialog = !0;
      }, regClick: function regClick() {
        this.isShowRegDialog = !0;
      }, onSuccessLog: function onSuccessLog(t) {
        this.closeDialog("isShowLogDialog"), this.username = t.username;
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { data: function data() {
      return { usernameModel: "", passwordModel: "", errorText: "" };
    }, computed: { userErrors: function userErrors() {
        var t = void 0,
            s = void 0;return (/@/g.test(this.usernameModel) ? (s = !0, t = "") : (s = !1, t = "不包含@"), this.userFlag || (t = "", this.userFlag = !0), { status: s, errorText: t }
        );
      }, passwordErrors: function passwordErrors() {
        var t = void 0,
            s = void 0;return (/^\w{1,6}$/g.test(this.passwordModel) ? (s = !0, t = "") : (s = !1, t = "密码不是1-6位"), this.passwordFlag || (t = "", this.passwordFlag = !0), { status: s, errorText: t }
        );
      } }, methods: { onLogin: function onLogin() {
        var t = this;this.userErrors.status && this.passwordErrors.status ? (this.errorText = "", this.$axios.get("api/login").then(function (s) {
          t.$emit("has-log", s.data);
        }, function (t) {
          console.log(t);
        })) : this.errorText = "部分选项未通过";
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { props: { isShow: "boolean" }, data: function data() {
      return {};
    }, computed: { userErrors: function userErrors() {
        var t = void 0,
            s = void 0;return (/@/g.test(this.usernameModel) ? (t = !0, s = "") : (t = !1, s = "必须包含@"), { status: t, errorText: s }
        );
      }, passwordErrors: function passwordErrors() {
        var t = void 0,
            s = void 0;return (/@/g.test(this.usernameModel) ? (t = !0, s = "") : (t = !1, s = "必须包含@"), { status: t, errorText: s }
        );
      } }, methods: { closeMyself: function closeMyself() {
        this.$emit("on-close");
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { props: { slides: { type: Array, default: [] }, inv: { type: Number, default: 1e3 } }, data: function data() {
      return { nowIndex: 0, isShow: !0 };
    }, computed: { prevIndex: function prevIndex() {
        return 0 === this.nowIndex ? this.slides.length - 1 : this.nowIndex - 1;
      }, nextIndex: function nextIndex() {
        return this.nowIndex === this.slides.length - 1 ? 0 : this.nowIndex + 1;
      } }, methods: { goto: function goto(t) {
        var s = this;this.isShow = !1, setTimeout(function () {
          s.isShow = !0, s.nowIndex = t;
        }, 10);
      }, runInv: function runInv() {
        var t = this;this.invId = setInterval(function () {
          t.goto(t.nextIndex);
        }, this.inv);
      }, clearInv: function clearInv() {
        clearInterval(this.invId);
      } }, mounted: function mounted() {
      this.runInv();
    } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = { data: function data() {
      return { products: [{ name: "数据统计", path: "count", icon: i(13), active: !1 }, { name: "数据预测", path: "forecast", active: !1 }, { name: "流量分析", path: "analysis", active: !1 }, { name: "广告发布", path: "publish", active: !1 }], imgMap: { "/detail/count": i(13), "/detail/forecast": i(80), "/detail/analysis": i(81), "/detail/publish": i(82) } };
    }, computed: { productIcon: function productIcon() {
        return this.imgMap[this.$route.path];
      } } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(6),
      a = i.n(e),
      n = i(3),
      l = i.n(n),
      o = i(14),
      r = i.n(o),
      c = i(5),
      v = i.n(c),
      d = i(4),
      u = i.n(d),
      h = i(88),
      _ = i.n(h),
      f = i(89),
      p = i.n(f),
      b = i(12),
      C = i.n(b);s.default = { components: { VSelection: a.a, VCounter: l.a, VChooser: r.a, VMulChooser: v.a, MyDialog: u.a, BankChooser: _.a, CheckOrder: p.a }, data: function data() {
      return { buyNum: 0, buyType: {}, versions: [], period: {}, price: 0, versionList: [{ label: "客户版", value: 0 }, { label: "代理商版", value: 1 }, { label: "专家版", value: 2 }], periodList: [{ label: "半年", value: 0 }, { label: "一年", value: 1 }, { label: "三年", value: 2 }], buyTypes: [{ label: "入门版", value: 0 }, { label: "中级版", value: 1 }, { label: "高级版", value: 2 }], isShowPayDialog: !1, bankId: null, orderId: null, isShowCheckOrder: !1, isShowErrDialog: !1 };
    }, methods: { onParamChange: function onParamChange(t, s) {
        this[t] = s, this.getPrice();
      }, getPrice: function getPrice() {
        var t = this,
            s = C.a.map(this.versions, function (t) {
          return t.value;
        }),
            i = { buyNumber: this.buyNum, buyType: this.buyType.value, period: this.period.value, version: s.join(",") };this.$axios.post("/api/getPrice", i).then(function (s) {
          t.price = s.data.amount;
        });
      }, showPayDialog: function showPayDialog() {
        this.isShowPayDialog = !0;
      }, hidePayDialog: function hidePayDialog() {
        this.isShowPayDialog = !1;
      }, hideErrDialog: function hideErrDialog() {
        this.isShowErrDialog = !1;
      }, hideCheckOrder: function hideCheckOrder() {
        this.isShowCheckOrder = !1;
      }, onChangeBanks: function onChangeBanks(t) {
        this.bankId = t.id;
      }, confirmBuy: function confirmBuy() {
        var t = this,
            s = C.a.map(this.versions, function (t) {
          return t.value;
        }),
            i = { buyNumber: this.buyNum, buyType: this.buyType.value, period: this.period.value, version: s.join(","), bankId: this.bankId };this.$axios.post("/api/createOrder", i).then(function (s) {
          t.orderId = s.data.orderId, t.isShowCheckOrder = !0, t.isShowPayDialog = !1;
        }, function (s) {
          t.isShowBuyDialog = !1, t.isShowErrDialog = !0;
        });
      } }, mounted: function mounted() {
      this.buyNum = 1, this.buyType = this.buyTypes[0], this.versions = [this.versionList[0]], this.period = this.periodList[0], this.getPrice();
    } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(6),
      a = i.n(e),
      n = i(14),
      l = i.n(n);s.default = { components: { VChooser: l.a, VSelection: a.a }, data: function data() {
      return { buyTypes: [{ label: "红色版", value: 0 }, { label: "绿色版", value: 1 }, { label: "紫色版", value: 2 }], districts: [{ label: "北京", value: 0 }, { label: "上海", value: 1 }, { label: "广州", value: 2 }, { label: "天津", value: 3 }, { label: "武汉", value: 4 }, { label: "重庆", value: 5 }] };
    } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(3),
      a = i.n(e),
      n = i(5),
      l = i.n(n);s.default = { components: { VCounter: a.a, VMulChooser: l.a }, data: function data() {
      return { versionList: [{ label: "纸质报告", value: 0 }, { label: "pdf", value: 1 }, { label: "页面报告", value: 2 }, { label: "邮件", value: 3 }] };
    } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(6),
      a = i.n(e),
      n = i(3),
      l = i.n(n),
      o = i(5),
      r = i.n(o);s.default = { components: { VSelection: a.a, VCounter: l.a, VMulChooser: r.a }, data: function data() {
      return { tradeList: [{ label: "出版业", value: 0 }, { label: "媒体", value: 1 }, { label: "金融", value: 2 }, { label: "互联网", value: 3 }, { label: "游戏", value: 4 }], versionList: [{ label: "初级版", value: 0 }, { label: "中级版", value: 1 }, { label: "高级版", value: 2 }, { label: "专家版", value: 3 }] };
    } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(92),
      a = i.n(e);s.default = { components: { slideShow: a.a }, created: function created() {
      var t = this;this.$axios.get("api/getNewsList").then(function (s) {
        console.log(s.data), t.newsList = s.data;
      }).catch(function (t) {
        console.log(t);
      });
    }, data: function data() {
      return { slideSpeed: 2e3, slides: [{ src: i(84), title: "xxx1", href: "detail/analysis" }, { src: i(85), title: "xxx2", href: "detail/count" }, { src: i(86), title: "xxx3", href: "http://xxx.xxx.com" }, { src: i(87), title: "xxx4", href: "detail/forecast" }], boardList: [{ title: "开放产品", description: "开放产品是一款开放产品", id: "car", toKey: "analysis", saleout: !1 }, { title: "品牌营销", description: "品牌营销帮助你的产品更好地找到定位", id: "earth", toKey: "count", saleout: !1 }, { title: "使命必达", description: "使命必达快速迭代永远保持最前端的速度", id: "loud", toKey: "forecast", saleout: !0 }, { title: "勇攀高峰", description: "帮你勇闯高峰，到达事业的顶峰", id: "hill", toKey: "publish", saleout: !1 }], newsList: [], productList: { pc: { title: "PC产品", list: [{ name: "数据统计", url: "http://starcraft.com" }, { name: "数据预测", url: "http://warcraft.com" }, { name: "流量分析", url: "http://overwatch.com", hot: !0 }, { name: "广告发布", url: "http://hearstone.com" }] }, app: { title: "手机应用类", last: !0, list: [{ name: "91助手", url: "http://weixin.com" }, { name: "产品助手", url: "http://twitter.com", hot: !0 }, { name: "智能地图", url: "http://maps.com" }, { name: "团队语音", url: "http://phone.com" }] } } };
    } };
}, function (t, s, i) {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });var e = i(25),
      a = i(17),
      n = i.n(a),
      l = i(23),
      o = i.n(l),
      r = i(18),
      c = i.n(r),
      v = i(19),
      d = i.n(v),
      u = i(20),
      h = i.n(u),
      _ = i(21),
      f = i.n(_),
      p = i(22),
      b = i.n(p),
      C = i(16),
      m = i.n(C),
      g = i(24);e.a.use(g.a), e.a.prototype.$axios = m.a;var x = new g.a({ mode: "history", routes: [{ path: "/", component: o.a }, { path: "/detail", component: c.a, redirect: "/detail/analysis", children: [{ path: "analysis", component: d.a }, { path: "count", component: h.a }, { path: "forecast", component: f.a }, { path: "publish", component: b.a }] }] });e.a.config.productionTip = !1, new e.a({ el: "#app", router: x, template: "<Layout/>", components: { Layout: n.a } });
}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {}, function (t, s) {},,, function (t, s, i) {
  t.exports = i.p + "static/img/2.2fcd00f.png";
}, function (t, s, i) {
  t.exports = i.p + "static/img/3.2735a83.png";
}, function (t, s, i) {
  t.exports = i.p + "static/img/4.128ec98.png";
}, function (t, s) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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";
}, function (t, s, i) {
  t.exports = i.p + "static/img/pic1.d105a22.jpg";
}, function (t, s, i) {
  t.exports = i.p + "static/img/pic2.9a074f2.jpg";
}, function (t, s, i) {
  t.exports = i.p + "static/img/pic3.b9cc7e7.jpg";
}, function (t, s, i) {
  t.exports = i.p + "static/img/pic4.d50c168.jpg";
}, function (t, s, i) {
  function e(t) {
    i(66);
  }var a = i(0)(i(43), i(98), e, "data-v-1b4f7bca", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(72);
  }var a = i(0)(i(49), i(104), e, "data-v-75c239ea", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(74);
  }var a = i(0)(i(51), i(106), e, "data-v-975a60da", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(75);
  }var a = i(0)(i(52), i(107), e, "data-v-b25ed63a", null);t.exports = a.exports;
}, function (t, s, i) {
  function e(t) {
    i(68);
  }var a = i(0)(i(53), i(100), e, "data-v-2b2b4df9", null);t.exports = a.exports;
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board" }, [t._m(0), t._v(" "), i("div", { staticClass: "sales-board-form" }, [i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                购买数量：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-counter", { attrs: { max: 100, min: 20 } })], 1)]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                行业：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-selection", { attrs: { selections: t.tradeList } })], 1)]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                产品版本：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-mul-chooser", { attrs: { selections: t.versionList } })], 1)]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3)]), t._v(" "), t._m(4)]);
    }, staticRenderFns: [function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-intro" }, [i("h2", [t._v("广告发布")]), t._v(" "), i("p", [t._v("广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                有效时间：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [t._v("\n                半年\n            ")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                总价：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [t._v("\n                500 元\n            ")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v(" ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("div", { staticClass: "button" }, [t._v("\n                  立即购买\n                ")])])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-des" }, [i("h2", [t._v("产品说明")]), t._v(" "), i("p", [t._v("广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。")]), t._v(" "), i("table", { staticClass: "sales-board-table" }, [i("tbody", [i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("安全安保")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("办公文教")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("彩票")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("车辆物流")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("成人用品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("出版传媒")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("电脑硬件")])])])]), t._v(" "), i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("电子电工")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("房地产建筑装修")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("分类平台")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("服装鞋帽")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("箱包饰品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("化工原料制品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("机械设备")])])])]), t._v(" "), i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("家庭日用品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("家用电器")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("教育培训")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("节能环保")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("金融服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("礼品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("旅游住宿")])])])]), t._v(" "), i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("美容化妆")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("母婴护理")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("农林牧渔")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("软件")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("商务服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("生活服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("食品保健品")])])])]), t._v(" "), i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("手机数码")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("通讯服务设备")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("网络服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("医疗服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("游戏")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("运动休闲娱乐")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("招商加盟")])])])])])])]);
    }] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "detail-wrap" }, [i("div", { staticClass: "detail-left" }, [i("div", { staticClass: "product-board" }, [i("img", { attrs: { src: t.productIcon } }), t._v(" "), i("ul", t._l(t.products, function (s) {
        return i("router-link", { attrs: { to: { path: s.path }, tag: "li", "active-class": "active" } }, [t._v("\n          " + t._s(s.name) + "\n        ")]);
      }))])]), t._v(" "), i("div", { staticClass: "detail-right" }, [i("keep-alive", [i("router-view")], 1)], 1)]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "chooser-component" }, [i("ul", { staticClass: "chooser-list" }, t._l(t.selections, function (s, e) {
        return i("li", { class: { active: t.checkActive(e) }, attrs: { title: s.label }, on: { click: function click(s) {
              t.toggleSelection(e);
            } } }, [t._v(t._s(s.label))]);
      }))]);
    }, staticRenderFns: [] };
}, function (t, s, i) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          e = t._self._c || s;return e("div", [e("div", { staticClass: "app-head" }, [e("div", { staticClass: "app-head-inner" }, [e("router-link", { attrs: { to: { path: "/" } } }, [e("img", { attrs: { src: i(83) } })]), t._v(" "), e("div", { staticClass: "head-nav" }, [e("ul", { staticClass: "nav-list" }, [e("li", [t._v(t._s(t.username))]), t._v(" "), "" === t.username ? e("li", { on: { click: t.logClick } }, [t._v("登录")]) : t._e(), t._v(" "), "" !== t.username ? e("li", { on: { click: t.logClick } }, [t._v("退出")]) : t._e(), t._v(" "), "" === t.username ? e("li", { staticClass: "nav-pile" }, [t._v("|")]) : t._e(), t._v(" "), "" === t.username ? e("li", { on: { click: t.regClick } }, [t._v("注册")]) : t._e(), t._v(" "), "" === t.username ? e("li", { staticClass: "nav-pile" }, [t._v("|")]) : t._e(), t._v(" "), "" === t.username ? e("li", { on: { click: t.aboutClick } }, [t._v("关于")]) : t._e()])])], 1)]), t._v(" "), e("div", { staticClass: "app-content" }, [e("keep-alive", [e("router-view")], 1)], 1), t._v(" "), t._m(0), t._v(" "), e("my-dialog", { attrs: { "is-show": t.isShowAboutDialog }, on: { "on-close": function onClose(s) {
            t.closeDialog("isShowAboutDialog");
          } } }, [e("p", [t._v("本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 ")])]), t._v(" "), e("my-dialog", { attrs: { "is-show": t.isShowLogDialog }, on: { "on-close": function onClose(s) {
            t.closeDialog("isShowLogDialog");
          } } }, [e("log-form", { on: { "has-log": t.onSuccessLog } })], 1), t._v(" "), e("my-dialog", { attrs: { "is-show": t.isShowRegDialog }, on: { "on-close": function onClose(s) {
            t.closeDialog("isShowRegDialog");
          } } }, [e("reg-form")], 1)], 1);
    }, staticRenderFns: [function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "app-foot" }, [i("p", [t._v("© 2016 fishenal MIT")])]);
    }] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "counter-component" }, [i("div", { staticClass: "counter-btn", on: { click: t.minus } }, [t._v(" - ")]), t._v(" "), i("div", { staticClass: "counter-show" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.number, expression: "number" }], attrs: { type: "text" }, domProps: { value: t.number }, on: { keyup: t.fixNumber, input: function input(s) {
            s.target.composing || (t.number = s.target.value);
          } } })]), t._v(" "), i("div", { staticClass: "counter-btn", on: { click: t.add } }, [t._v(" + ")])]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "chooser-component" }, [i("ul", { staticClass: "chooser-list" }, t._l(t.banks, function (s, e) {
        return i("li", { class: [s.name, { active: e === t.nowIndex }], attrs: { title: s.label }, on: { click: function click(s) {
              t.chooseSelection(e);
            } } });
      }))]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "chooser-component" }, [i("ul", { staticClass: "chooser-list" }, t._l(t.selections, function (s, e) {
        return i("li", { class: { active: e === t.nowIndex }, attrs: { title: s.label }, on: { click: function click(s) {
              t.chosenSelection(e);
            } } }, [t._v(t._s(s.label))]);
      }))]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "slide-show", on: { mouseover: t.clearInv, mouseout: t.runInv } }, [i("div", { staticClass: "slide-img" }, [i("a", { attrs: { href: t.slides[t.nowIndex].href } }, [i("transition", { attrs: { name: "slide-trans" } }, [t.isShow ? i("img", { attrs: { src: t.slides[t.nowIndex].src, alt: "" } }) : t._e()]), t._v(" "), i("transition", { attrs: { name: "slide-trans-old" } }, [t.isShow ? t._e() : i("img", { attrs: { src: t.slides[t.nowIndex].src, alt: "" } })])], 1)]), t._v(" "), i("h2", [t._v(t._s(t.slides[t.nowIndex].title))]), t._v(" "), i("ul", { staticClass: "slide-pages" }, [i("li", { on: { click: function click(s) {
            t.goto(t.prevIndex);
          } } }, [t._v("<")]), t._v(" "), t._l(t.slides, function (s, e) {
        return i("li", { on: { click: function click(s) {
              t.goto(e);
            } } }, [i("a", { class: { on: e === t.nowIndex } }, [t._v(t._s(e + 1))])]);
      }), t._v(" "), i("li", { on: { click: function click(s) {
            t.goto(t.nextIndex);
          } } }, [t._v(">")])], 2)]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board" }, [t._m(0), t._v(" "), i("div", { staticClass: "sales-board-form" }, [i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                产品类型：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-chooser", { attrs: { selections: t.buyTypes } })], 1)]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                适用地区：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-selection", { attrs: { selections: t.districts } })], 1)]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3)]), t._v(" "), t._m(4)]);
    }, staticRenderFns: [function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-intro" }, [i("h2", [t._v("数据统计")]), t._v(" "), i("p", [t._v("历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                有效时间：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [t._v("\n                半年\n            ")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                总价：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [t._v("\n                500 元\n            ")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v(" ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("div", { staticClass: "button" }, [t._v("\n                  立即购买\n                ")])])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-des" }, [i("h2", [t._v("产品说明")]), t._v(" "), i("p", [t._v("历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。")]), t._v(" "), i("table", { staticClass: "sales-board-table" }, [i("tbody", [i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("安全安保")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("办公文教")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("彩票")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("车辆物流")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("成人用品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("出版传媒")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("电脑硬件")])])])]), t._v(" "), i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("电子电工")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("房地产建筑装修")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("分类平台")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("服装鞋帽")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("箱包饰品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("化工原料制品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("机械设备")])])])]), t._v(" "), i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("家庭日用品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("家用电器")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("教育培训")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("节能环保")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("金融服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("礼品")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("旅游住宿")])])])]), t._v(" "), i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("美容化妆")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("母婴护理")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("农林牧渔")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("软件")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("商务服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("生活服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("食品保健品")])])])]), t._v(" "), i("tr", { staticClass: "ui-table-row" }, [i("td", { staticClass: "col-first" }, [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("手机数码")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("通讯服务设备")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("网络服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("医疗服务")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("游戏")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("运动休闲娱乐")])])]), t._v(" "), i("td", [i("div", { staticClass: "intro-pic" }, [i("label", [t._v("招商加盟")])])])])])])]);
    }] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board" }, [t._m(0), t._v(" "), i("div", { staticClass: "sales-board-form" }, [i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                  购买数量：\n              ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-counter", { attrs: { max: 100, min: 20 } })], 1)]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                  媒介：\n              ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-mul-chooser", { attrs: { selections: t.versionList } })], 1)]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3)]), t._v(" "), t._m(4)]);
    }, staticRenderFns: [function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-intro" }, [i("h2", [t._v("数据预测")]), t._v(" "), i("p", [t._v("未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                  有效时间：\n              ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [t._v("\n                  一年\n              ")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                  总价：\n              ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [t._v("\n                  500 元\n              ")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v(" ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("div", { staticClass: "button" }, [t._v("\n                    立即购买\n                  ")])])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-des" }, [i("h2", [t._v("产品说明")]), t._v(" "), i("p", [t._v("2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……\n以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。\n大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。\n作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。\n关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。")])]);
    }] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "selection-component" }, [i("div", { staticClass: "selection-show", on: { click: t.toggleDrop } }, [i("span", [t._v(t._s(t.selections[t.nowIndex].label))]), t._v(" "), i("div", { staticClass: "arrow" })]), t._v(" "), t.isDrop ? i("div", { staticClass: "selection-list" }, [i("ul", t._l(t.selections, function (s, e) {
        return i("li", { on: { click: function click(s) {
              t.chooseSelection(e);
            } } }, [t._v(t._s(s.label))]);
      }))]) : t._e()]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", [i("this-dialog", { attrs: { "is-show": t.isShowCheckDialog }, on: { "on-close": t.checkStatus } }, [t._v("\n    请检查你的支付状态！\n    "), i("div", { staticClass: "button", on: { click: t.checkStatus } }, [t._v("\n      支付成功\n    ")]), t._v(" "), i("div", { staticClass: "button", on: { click: t.checkStatus } }, [t._v("\n      支付失败\n    ")])]), t._v(" "), i("this-dialog", { attrs: { "is-show": t.isShowSuccessDialog }, on: { "on-close": t.toOrderList } }, [t._v("\n    购买成功！\n  ")]), t._v(" "), i("this-dialog", { attrs: { "is-show": t.isShowFailDialog }, on: { "on-close": t.toOrderList } }, [t._v("\n    购买失败！\n  ")])], 1);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board" }, [t._m(0), t._v(" "), i("div", { staticClass: "sales-board-form" }, [i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                购买数量：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-counter", { on: { "on-change": function onChange(s) {
            t.onParamChange("buyNum", s);
          } } })], 1)]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                产品类型：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-selection", { attrs: { selections: t.buyTypes }, on: { "on-change": function onChange(s) {
            t.onParamChange("buyType", s);
          } } })], 1)]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                有效时间：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-chooser", { attrs: { selections: t.periodList }, on: { "on-change": function onChange(s) {
            t.onParamChange("period", s);
          } } })], 1)]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                产品版本：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("v-mul-chooser", { attrs: { selections: t.versionList }, on: { "on-change": function onChange(s) {
            t.onParamChange("versions", s);
          } } })], 1)]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v("\n                总价：\n            ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [t._v("\n                " + t._s(t.price) + " 元\n            ")])]), t._v(" "), i("div", { staticClass: "sales-board-line" }, [i("div", { staticClass: "sales-board-line-left" }, [t._v(" ")]), t._v(" "), i("div", { staticClass: "sales-board-line-right" }, [i("div", { staticClass: "button", on: { click: t.showPayDialog } }, [t._v("\n                  立即购买\n                ")])])])]), t._v(" "), t._m(1), t._v(" "), i("my-dialog", { attrs: { "is-show": t.isShowPayDialog }, on: { "on-close": t.hidePayDialog } }, [i("table", { staticClass: "buy-dialog-table" }, [i("tr", [i("th", [t._v("购买数量")]), t._v(" "), i("th", [t._v("产品类型")]), t._v(" "), i("th", [t._v("有效时间")]), t._v(" "), i("th", [t._v("产品版本")]), t._v(" "), i("th", [t._v("总价")])]), t._v(" "), i("tr", [i("td", [t._v(t._s(t.buyNum))]), t._v(" "), i("td", [t._v(t._s(t.buyType.label))]), t._v(" "), i("td", [t._v(t._s(t.period.label))]), t._v(" "), i("td", t._l(t.versions, function (s) {
        return i("span", [t._v(t._s(s.label))]);
      })), t._v(" "), i("td", [t._v(t._s(t.price))])])]), t._v(" "), i("h3", { staticClass: "buy-dialog-title" }, [t._v("请选择银行")]), t._v(" "), i("bank-chooser", { on: { "on-change": t.onChangeBanks } }), t._v(" "), i("div", { staticClass: "button buy-dialog-btn", on: { click: t.confirmBuy } }, [t._v("\n        确认购买\n      ")])], 1), t._v(" "), i("my-dialog", { attrs: { "is-show": t.isShowErrDialog }, on: { "on-close": t.hideErrDialog } }, [t._v("\n      支付失败！\n    ")]), t._v(" "), i("check-order", { attrs: { "is-show-check-dialog": t.isShowCheckOrder, "order-id": t.orderId }, on: { "on-close-check-dialog": t.hideCheckOrder } })], 1);
    }, staticRenderFns: [function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-intro" }, [i("h2", [t._v("流量分析")]), t._v(" "), i("p", [t._v("是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的")])]);
    }, function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "sales-board-des" }, [i("h2", [t._v("产品说明")]), t._v(" "), i("p", [t._v("网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。")]), t._v(" "), i("h3", [t._v("用户行为指标")]), t._v(" "), i("ul", [i("li", [t._v("用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：")]), t._v(" "), i("li", [t._v("用户在网站的停留时间；")]), t._v(" "), i("li", [t._v("用户来源网站（也叫“引导网站”）；")]), t._v(" "), i("li", [t._v("用户所使用的搜索引擎及其关键词；")]), t._v(" "), i("li", [t._v("在不同时段的用户访问量情况等。")])]), t._v(" "), i("h3", [t._v("浏览网站方式")]), t._v(" "), i("ul", [i("li", [t._v("用户上网设备类型")]), t._v(" "), i("li", [t._v("用户浏览器的名称和版本")]), t._v(" "), i("li", [t._v("访问者电脑分辨率显示模式")]), t._v(" "), i("li", [t._v("用户所使用的操作系统名称和版本")]), t._v(" "), i("li", [t._v("用户所在地理区域分布状况等")])])]);
    }] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "login-form" }, [i("div", { staticClass: "g-form" }, [i("div", { staticClass: "g-form-line" }, [i("span", { staticClass: "g-form-label" }, [t._v("用户名：")]), t._v(" "), i("div", { staticClass: "g-form-input" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.usernameModel, expression: "usernameModel" }], attrs: { type: "text", placeholder: "请输入用户名" }, domProps: { value: t.usernameModel }, on: { input: function input(s) {
            s.target.composing || (t.usernameModel = s.target.value);
          } } })]), t._v(" "), i("span", { staticClass: "g-form-error" }, [t._v(t._s(t.userErrors.errorText))])]), t._v(" "), i("div", { staticClass: "g-form-line" }, [i("span", { staticClass: "g-form-label" }, [t._v("密码：")]), t._v(" "), i("div", { staticClass: "g-form-input" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: t.passwordModel, expression: "passwordModel" }], attrs: { type: "password", placeholder: "请输入密码" }, domProps: { value: t.passwordModel }, on: { input: function input(s) {
            s.target.composing || (t.passwordModel = s.target.value);
          } } })]), t._v(" "), i("span", { staticClass: "g-form-error" }, [t._v(t._s(t.passwordErrors.errorText))])]), t._v(" "), i("div", { staticClass: "g-form-line" }, [i("div", { staticClass: "g-form-btn" }, [i("a", { staticClass: "button", on: { click: t.onLogin } }, [t._v("登录")])])]), t._v(" "), i("p", [t._v(t._s(t.errorText))])])]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "login-form" }, [i("div", { staticClass: "g-form" }, [t._l(t.formData, function (s) {
        return i("div", { staticClass: "g-form-line" }, [i("span", { staticClass: "g-form-label" }, [t._v(t._s(s.label) + "：")]), t._v(" "), i("div", { staticClass: "g-form-input" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: s.model, expression: "formLine.model" }], attrs: { type: "text", placeholder: "请输入用户名" }, domProps: { value: s.model }, on: { input: function input(t) {
              t.target.composing || (s.model = t.target.value);
            } } })])]);
      }), t._v(" "), i("div", { staticClass: "g-form-line" }, [i("div", { staticClass: "g-form-btn" }, [i("a", { staticClass: "button", on: { click: t.onLogin } }, [t._v("登录")])])])], 2)]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", [i("div", { staticClass: "dialog-wrap" }, [t.isShow ? i("div", { staticClass: "dialog-cover", on: { click: t.closeMyself } }) : t._e(), t._v(" "), i("transition", { attrs: { name: "drop" } }, [t.isShow ? i("div", { staticClass: "dialog-content" }, [i("p", { staticClass: "dialog-close", on: { click: t.closeMyself } }, [t._v("x")]), t._v(" "), t._t("default", [t._v("empty")])], 2) : t._e()])], 1)]);
    }, staticRenderFns: [] };
}, function (t, s) {
  t.exports = { render: function render() {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "index-wrap" }, [i("div", { staticClass: "index-left" }, [i("div", { staticClass: "index-left-block" }, [i("h2", [t._v("全部产品")]), t._v(" "), t._l(t.productList, function (s) {
        return [i("h3", [t._v(t._s(s.title))]), t._v(" "), t._l(s.list, function (s) {
          return i("ul", [i("li", [i("a", { attrs: { href: s.url } }, [t._v(t._s(s.name))]), t._v(" "), s.hot ? i("span", { staticClass: "hot-tag" }, [t._v("HOT")]) : t._e()])]);
        }), t._v(" "), s.last ? t._e() : i("div", { staticClass: "hr" })];
      })], 2), t._v(" "), i("div", { staticClass: "index-left-block lastest-news" }, [i("h2", [t._v("最新消息")]), t._v(" "), i("ul", t._l(t.newsList, function (s) {
        return i("li", [i("a", { staticClass: "new-item", attrs: { href: s.url } }, [t._v(t._s(s.title))])]);
      }))])]), t._v(" "), i("div", { staticClass: "index-right" }, [i("slide-show", { attrs: { slides: t.slides, inv: t.slideSpeed } }), t._v(" "), i("div", { staticClass: "index-board-list" }, t._l(t.boardList, function (s, e) {
        return i("div", { staticClass: "index-board-item", class: [{ "line-last": e % 2 != 0 }, "index-board-" + s.id] }, [i("div", { staticClass: "index-board-item-inner" }, [i("h2", [t._v(t._s(s.title))]), t._v(" "), i("p", [t._v(t._s(s.description))]), t._v(" "), t._m(0, !0)])]);
      }))], 1)]);
    }, staticRenderFns: [function () {
      var t = this,
          s = t.$createElement,
          i = t._self._c || s;return i("div", { staticClass: "index-board-button" }, [i("a", { staticClass: "button", attrs: { href: "" } }, [t._v("立即购买")])]);
    }] };
}], [60]);
//# sourceMappingURL=app.b04010162ba973c2932d.js.map

//# sourceMappingURL=app.b04010162ba973c2932d-compiled.js.map