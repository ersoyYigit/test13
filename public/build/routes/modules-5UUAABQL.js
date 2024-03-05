import {
  IconAdjustments,
  IconCalendarStats,
  IconChevronRight,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconLogout,
  IconNotes,
  IconPlane,
  IconPlayerTrackNextFilled,
  IconPresentationAnalytics,
  IconSwitchHorizontal
} from "/build/_shared/chunk-E7BJENQJ.js";
import {
  require_auth
} from "/build/_shared/chunk-BZ5ICFE4.js";
import {
  AppShell,
  Box,
  Burger,
  Collapse,
  Group,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
  useDisclosure
} from "/build/_shared/chunk-REOWHZ4E.js";
import {
  Form,
  NavLink,
  Outlet
} from "/build/_shared/chunk-IZVKESBX.js";
import {
  createHotContext
} from "/build/_shared/chunk-H7NTDJTR.js";
import "/build/_shared/chunk-K6PKGSTD.js";
import "/build/_shared/chunk-H5ZE7JVG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  require_react
} from "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/modules.tsx
var import_auth = __toESM(require_auth(), 1);

// app/navbar/LinksGroup.module.css
var LinksGroup_module_default = { "control": "LinksGroup-module__control__ylleE", "link": "LinksGroup-module__link__Niida", "activeLink": "LinksGroup-module__activeLink__EAVZl", "chevron": "LinksGroup-module__chevron__pteEo" };

// node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// app/navbar/LinksGroup.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\navbar\\\\LinksGroup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\navbar\\LinksGroup.tsx"
  );
}
function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  to: link = "/"
}) {
  _s();
  const hasLinks = Array.isArray(links);
  const [opened, {
    toggle
  }] = useDisclosure(initiallyOpened || false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: link, onClick: toggle, className: LinksGroup_module_default.control, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { justify: "space-between", gap: 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { style: {
        display: "flex",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeIcon, { variant: "dark", size: 30, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { style: {
          width: rem(18),
          height: rem(18)
        } }, void 0, false, {
          fileName: "app/navbar/LinksGroup.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/navbar/LinksGroup.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { ml: "md", children: label }, void 0, false, {
          fileName: "app/navbar/LinksGroup.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/navbar/LinksGroup.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      hasLinks && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconChevronRight, { className: LinksGroup_module_default.chevron, stroke: 1.5, style: {
        width: rem(16),
        height: rem(16),
        transform: opened ? "rotate(-90deg)" : "none"
      } }, void 0, false, {
        fileName: "app/navbar/LinksGroup.tsx",
        lineNumber: 54,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/navbar/LinksGroup.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/navbar/LinksGroup.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    hasLinks ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapse, { in: opened, children: links.map((link2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: link2.to, className: ({
      isActive
    }) => clsx_default(LinksGroup_module_default.link, {
      [LinksGroup_module_default.activeLink]: isActive
    }), children: link2.label }, link2.label, false, {
      fileName: "app/navbar/LinksGroup.tsx",
      lineNumber: 64,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/navbar/LinksGroup.tsx",
      lineNumber: 63,
      columnNumber: 19
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/navbar/LinksGroup.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(LinksGroup, "wsVUutJ3BO5OXN4/SlP3GiqvouI=", false, function() {
  return [useDisclosure];
});
_c = LinksGroup;
var _c;
$RefreshReg$(_c, "LinksGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/navbar/Navbar.module.css
var Navbar_module_default = { "navbar": "Navbar-module__navbar__nu-2G", "main": "Navbar-module__main__Q-6Lq", "header": "Navbar-module__header__I0-Wg", "headerTitle": "Navbar-module__headerTitle__oKJxg", "footer": "Navbar-module__footer__MUjG7", "footerLink": "Navbar-module__footerLink__HPxqk", "footerLinkIcon": "Navbar-module__footerLinkIcon__-v37R" };

// app/navbar/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\navbar\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\navbar\\index.tsx"
  );
}
var data = [{
  label: "Fast Track",
  initiallyOpened: true,
  icon: IconPlayerTrackNextFilled,
  to: "fast-track",
  links: [{
    to: "fast-track/gate-1",
    label: "Gate 1"
  }, {
    to: "fast-track/gate-2",
    label: "Gate 2"
  }, {
    to: "fast-track/gate-3",
    label: "Gate 3"
  }, {
    to: "fast-track/gate-4",
    label: "Gate 4"
  }]
}, {
  label: "Dashboard",
  icon: IconGauge
}, {
  label: "Market news",
  icon: IconNotes,
  links: [{
    label: "Overview",
    to: "/"
  }, {
    label: "Forecasts",
    to: "/"
  }, {
    label: "Outlook",
    to: "/"
  }, {
    label: "Real time",
    to: "/"
  }]
}, {
  label: "Releases",
  icon: IconCalendarStats,
  links: [{
    label: "Upcoming releases",
    to: "/"
  }, {
    label: "Previous releases",
    to: "/"
  }, {
    label: "Releases schedule",
    to: "/"
  }]
}, {
  label: "Analytics",
  icon: IconPresentationAnalytics
}, {
  label: "Contracts",
  icon: IconFileAnalytics
}, {
  label: "Settings",
  icon: IconAdjustments
}, {
  label: "Security",
  icon: IconLock,
  links: [{
    label: "Enable 2FA",
    to: "/"
  }, {
    label: "Change password",
    to: "/"
  }, {
    label: "Recovery codes",
    to: "/"
  }]
}];
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: Navbar_module_default.navbar, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/modules", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Group, { className: Navbar_module_default.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeIcon, { color: "red.9", size: 30, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconPlane, { size: 28 }, void 0, false, {
        fileName: "app/navbar/index.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/navbar/index.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { className: Navbar_module_default.headerTitle, children: "Airport Services" }, void 0, false, {
        fileName: "app/navbar/index.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/navbar/index.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/navbar/index.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollArea, { className: Navbar_module_default.main, children: data.map((item) => /* @__PURE__ */ (0, import_react3.createElement)(LinksGroup, { ...item, key: item.label })) }, void 0, false, {
      fileName: "app/navbar/index.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: Navbar_module_default.footer, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: Navbar_module_default.footerLink, onClick: (event) => event.preventDefault(), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconSwitchHorizontal, { className: Navbar_module_default.footerLinkIcon, stroke: 1.5 }, void 0, false, {
          fileName: "app/navbar/index.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Change account" }, void 0, false, {
          fileName: "app/navbar/index.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/navbar/index.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", id: "logout-form", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UnstyledButton, { type: "submit", className: Navbar_module_default.footerLink, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconLogout, { className: Navbar_module_default.footerLinkIcon, stroke: 1.5 }, void 0, false, {
          fileName: "app/navbar/index.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Logout" }, void 0, false, {
          fileName: "app/navbar/index.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/navbar/index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/navbar/index.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/navbar/index.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/navbar/index.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_c2 = Navbar;
var _c2;
$RefreshReg$(_c2, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/modules.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\modules.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\modules.tsx"
  );
  import.meta.hot.lastModified = "1708243737067.7876";
}
var meta = () => {
  return [{
    title: "Airports Services"
  }, {
    name: "description",
    content: "Airport services application!"
  }];
};
function Index() {
  _s2();
  const [mobileOpened, {
    toggle: toggleMobile
  }] = useDisclosure();
  const [desktopOpened] = useDisclosure(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppShell, { layout: "alt", header: {
    height: 64
  }, navbar: {
    width: 300,
    breakpoint: "sm",
    collapsed: {
      mobile: !mobileOpened,
      desktop: !desktopOpened
    }
  }, padding: "md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppShell.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Group, { h: "100%", px: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Burger, { opened: mobileOpened, onClick: toggleMobile, hiddenFrom: "sm", size: "sm" }, void 0, false, {
      fileName: "app/routes/modules.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppShell.Navbar, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/modules.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppShell.Main, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/modules.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/modules.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s2(Index, "qA4THiMCYIK0qNPWl8Tc/cvBjLE=", false, function() {
  return [useDisclosure, useDisclosure];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/modules-5UUAABQL.js.map
