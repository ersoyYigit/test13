import {
  hasLength,
  isEmail,
  useForm
} from "/build/_shared/chunk-JMS3LEPF.js";
import {
  require_auth
} from "/build/_shared/chunk-BZ5ICFE4.js";
import {
  Anchor,
  Button,
  Center,
  Container,
  Flex,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title
} from "/build/_shared/chunk-REOWHZ4E.js";
import {
  Form,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-IZVKESBX.js";
import {
  createHotContext
} from "/build/_shared/chunk-H7NTDJTR.js";
import "/build/_shared/chunk-K6PKGSTD.js";
import "/build/_shared/chunk-H5ZE7JVG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/login.tsx
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1709646700873.1372";
}
var i18n = {
  password: "Password",
  email: "Email",
  submitButton: "Login",
  title: "Airport Services",
  forgotPassword: "Forgot password?"
};
function LoginPage() {
  _s();
  const {
    error
  } = useLoaderData();
  const form = useForm({
    initialValues: {
      email: "john.doe@foo.com",
      password: "P@$$w0rd"
    },
    validate: {
      email: isEmail("Invalid email"),
      password: hasLength({
        min: 4
      }, "Password must be at least 4 characters long")
    }
  });
  const submit = useSubmit();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { justify: "center", h: "100vh", bg: "dark.7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { w: 480, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Center, { c: "white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { order: 2, children: i18n.title }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper, { withBorder: true, shadow: "md", p: 30, mt: 30, radius: "md", children: [
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: error.message }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 78,
        columnNumber: 20
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { onSubmit: form.onSubmit((_values, event) => submit(event.currentTarget, {
        replace: true,
        method: "POST"
      })), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { mt: "sm", required: true, name: "email", label: i18n.email, placeholder: "Email", ...form.getInputProps("email") }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, { mt: "lg", required: true, name: "password", label: i18n.password, placeholder: "Password", ...form.getInputProps("password") }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { justify: "end", mt: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { onClick: (event) => event.preventDefault(), href: "#", size: "sm", children: i18n.forgotPassword }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", mt: "xl", fullWidth: true, children: i18n.submitButton }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(LoginPage, "4gmzc9K+Ru8YQ3Ssqa+lVLKtHZg=", false, function() {
  return [useLoaderData, useForm, useSubmit];
});
_c = LoginPage;
var _c;
$RefreshReg$(_c, "LoginPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoginPage as default
};
//# sourceMappingURL=/build/routes/login-O7HYJGDG.js.map
