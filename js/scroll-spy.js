!(function (t, o) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = o())
    : 'function' == typeof define && define.amd
    ? define([], o)
    : 'object' == typeof exports
    ? (exports.scrollSpy = o())
    : (t.scrollSpy = o());
})(self, () =>
  (() => {
    var t = {
        138: (t, o, e) => {
          t.exports = (t, o = {}) => {
            const { ScrollSpy: s } = e(218),
              i = new s(t, o);
            return (window.onload = i.onScroll()), window.addEventListener('scroll', () => i.onScroll()), i;
          };
        },
        218: (t, o, e) => {
          'use strict';
          e.r(o), e.d(o, { ScrollSpy: () => s });
          class s {
            constructor(t, o = {}) {
              if (!t) throw new Error('First argument is query selector to your navigation.');
              if ('object' != typeof o) throw new Error('Second argument must be instance of Object.');
              (o.smoothScroll = (!0 === o.smoothScroll && {}) || o.smoothScroll),
                (this.menuList = t instanceof HTMLElement ? t : document.querySelector(t)),
                (this.options = Object.assign(
                  {},
                  { sectionClass: '.scrollspy', menuActiveTarget: 'li > a', offset: 0, hrefAttribute: 'href', activeClass: 'active', scrollContainer: '', smoothScroll: {} },
                  o
                )),
                this.options.scrollContainer
                  ? (this.scroller = this.options.scrollContainer instanceof HTMLElement ? this.options.scrollContainer : document.querySelector(this.options.scrollContainer))
                  : (this.scroller = window),
                (this.sections = document.querySelectorAll(this.options.sectionClass)),
                this.attachEventListeners();
            }
            attachEventListeners() {
              if (this.scroller && (this.scroller.addEventListener('scroll', () => this.onScroll()), this.options.smoothScroll)) {
                this.menuList.querySelectorAll(this.options.menuActiveTarget).forEach((t) => t.addEventListener('click', this.onClick.bind(this)));
              }
            }
            onClick(t) {
              const o = t.target.getAttribute(this.options.hrefAttribute),
                e = document.querySelector(o);
              e && this.options.smoothScroll && (t.preventDefault(), this.scrollTo(e));
            }
            onScroll() {
              const t = this.getSectionInView(),
                o = this.getMenuItemBySection(t);
              o && (this.removeCurrentActive({ ignore: o }), this.setActive(o));
            }
            scrollTo(t) {
              const o = 'function' == typeof this.options.smoothScrollBehavior && this.options.smoothScrollBehavior;
              o ? o(t, this.options.smoothScroll) : t.scrollIntoView({ ...this.options.smoothScroll, behavior: 'smooth' });
            }
            getMenuItemBySection(t) {
              if (!t) return;
              const o = t.getAttribute('id');
              return this.menuList.querySelector(`[${this.options.hrefAttribute}="#${o}"]`);
            }
            getSectionInView() {
              for (let t = 0; t < this.sections.length; t++) {
                const o = this.sections[t].offsetTop,
                  e = o + this.sections[t].offsetHeight;
                let s = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.offset;
                this.options.scrollContainer && this.scroller && (s = this.scroller.scrollTop + this.options.offset);
                if (s > o && s <= e) return this.sections[t];
              }
            }
            setActive(t) {
              t.classList.contains(this.options.activeClass) || t.classList.add(this.options.activeClass);
            }
            removeCurrentActive({ ignore: t }) {
              const { hrefAttribute: o, menuActiveTarget: e, activeClass: s } = this.options,
                i = `${e}.${s}:not([${o}="${t.getAttribute(o)}"])`;
              this.menuList.querySelectorAll(i).forEach((t) => t.classList.remove(this.options.activeClass));
            }
          }
        },
      },
      o = {};
    function e(s) {
      var i = o[s];
      if (void 0 !== i) return i.exports;
      var r = (o[s] = { exports: {} });
      return t[s](r, r.exports, e), r.exports;
    }
    return (
      (e.d = (t, o) => {
        for (var s in o) e.o(o, s) && !e.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: o[s] });
      }),
      (e.o = (t, o) => Object.prototype.hasOwnProperty.call(t, o)),
      (e.r = (t) => {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      e(138)
    );
  })()
);
