import {
  require_react_dom
} from "/build/_shared/chunk-H5ZE7JVG.js";
import {
  require_react
} from "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
function scaleRem(remValue) {
  return `calc(${remValue} * var(--mantine-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  function converter(value) {
    if (value === 0 || value === "0") {
      return `0${units}`;
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value.startsWith("calc(") || value.startsWith("var(") || value.startsWith("clamp(")) {
        return value;
      }
      if (value.includes(" ")) {
        return value.split(" ").map((val) => converter(val)).join(" ");
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  }
  return converter;
}
var rem = createConverter("rem", { shouldScale: true });
var em = createConverter("em");

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.mjs
var import_react = __toESM(require_react(), 1);
"use client";
function useDisclosure(initialState = false, callbacks) {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = (0, import_react.useState)(initialState);
  const open = (0, import_react.useCallback)(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen?.();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);
  const close = (0, import_react.useCallback)(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose?.();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);
  const toggle = (0, import_react.useCallback)(() => {
    opened ? close() : open();
  }, [close, open, opened]);
  return [opened, { open, close, toggle }];
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs
"use client";
function clamp(value, min2, max2) {
  if (min2 === void 0 && max2 === void 0) {
    return value;
  }
  if (min2 !== void 0 && max2 === void 0) {
    return Math.max(value, min2);
  }
  if (min2 === void 0 && max2 !== void 0) {
    return Math.min(value, max2);
  }
  return Math.min(Math.max(value, min2), max2);
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs
"use client";
function randomId() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-callback-ref/use-callback-ref.mjs
var import_react2 = __toESM(require_react(), 1);
"use client";
function useCallbackRef(callback) {
  const callbackRef = (0, import_react2.useRef)(callback);
  (0, import_react2.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react2.useMemo)(() => (...args) => callbackRef.current?.(...args), []);
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-debounced-callback/use-debounced-callback.mjs
var import_react3 = __toESM(require_react(), 1);
"use client";
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = (0, import_react3.useRef)(0);
  (0, import_react3.useEffect)(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return (0, import_react3.useCallback)(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-click-outside/use-click-outside.mjs
var import_react4 = __toESM(require_react(), 1);
"use client";
var DEFAULT_EVENTS = ["mousedown", "touchstart"];
function useClickOutside(handler, events, nodes) {
  const ref = (0, import_react4.useRef)();
  (0, import_react4.useEffect)(() => {
    const listener = (event) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = target?.hasAttribute("data-ignore-outside-clicks") || !document.body.contains(target) && target.tagName !== "HTML";
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        shouldTrigger && !shouldIgnore && handler();
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };
    (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));
    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler, nodes]);
  return ref;
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs
var import_react5 = __toESM(require_react(), 1);
"use client";
function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = (0, import_react5.useState)(
    getInitialValueInEffect ? initialValue : getInitialValue(query)
  );
  const queryRef = (0, import_react5.useRef)();
  (0, import_react5.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches;
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var import_react6 = __toESM(require_react(), 1);
"use client";
var useIsomorphicEffect = typeof document !== "undefined" ? import_react6.useLayoutEffect : import_react6.useEffect;

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs
var import_react8 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs
var import_react7 = __toESM(require_react(), 1);
"use client";
function useDidUpdate(fn, dependencies) {
  const mounted = (0, import_react7.useRef)(false);
  (0, import_react7.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
  (0, import_react7.useEffect)(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs
"use client";
function useFocusReturn({ opened, shouldReturnFocus = true }) {
  const lastActiveElement = (0, import_react8.useRef)();
  const returnFocus = () => {
    if (lastActiveElement.current && "focus" in lastActiveElement.current && typeof lastActiveElement.current.focus === "function") {
      lastActiveElement.current?.focus({ preventScroll: true });
    }
  };
  useDidUpdate(() => {
    let timeout = -1;
    const clearFocusTimeout = (event) => {
      if (event.key === "Tab") {
        window.clearTimeout(timeout);
      }
    };
    document.addEventListener("keydown", clearFocusTimeout);
    if (opened) {
      lastActiveElement.current = document.activeElement;
    } else if (shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, 10);
    }
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("keydown", clearFocusTimeout);
    };
  }, [opened, shouldReturnFocus]);
  return returnFocus;
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/create-aria-hider.mjs
"use client";
function createAriaHider(containerNode, selector = "body > :not(script)") {
  const id = randomId();
  const rootNodes = Array.from(
    document.querySelectorAll(selector)
  ).map((node) => {
    if (node?.shadowRoot?.contains(containerNode) || node.contains(containerNode)) {
      return void 0;
    }
    const ariaHidden = node.getAttribute("aria-hidden");
    const prevAriaHidden = node.getAttribute("data-hidden");
    const prevFocusId = node.getAttribute("data-focus-id");
    node.setAttribute("data-focus-id", id);
    if (ariaHidden === null || ariaHidden === "false") {
      node.setAttribute("aria-hidden", "true");
    } else if (!prevAriaHidden && !prevFocusId) {
      node.setAttribute("data-hidden", ariaHidden);
    }
    return {
      node,
      ariaHidden: prevAriaHidden || null
    };
  });
  return () => {
    rootNodes.forEach((item) => {
      if (!item || id !== item.node.getAttribute("data-focus-id")) {
        return;
      }
      if (item.ariaHidden === null) {
        item.node.removeAttribute("aria-hidden");
      } else {
        item.node.setAttribute("aria-hidden", item.ariaHidden);
      }
      item.node.removeAttribute("data-focus-id");
      item.node.removeAttribute("data-hidden");
    });
  };
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/tabbable.mjs
"use client";
var TABBABLE_NODES = /input|select|textarea|button|object/;
var FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
function hidden(element) {
  if (false) {
    return false;
  }
  return element.style.display === "none";
}
function visible(element) {
  const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
  if (isHidden) {
    return false;
  }
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body || parentElement.nodeType === 11) {
      break;
    }
    if (hidden(parentElement)) {
      return false;
    }
    parentElement = parentElement.parentNode;
  }
  return true;
}
function getElementTabIndex(element) {
  let tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) {
    tabIndex = void 0;
  }
  return parseInt(tabIndex, 10);
}
function focusable(element) {
  const nodeName = element.nodeName.toLowerCase();
  const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
  const res = (
    // @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition
    TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN)
  );
  return res && visible(element);
}
function tabbable(element) {
  const tabIndex = getElementTabIndex(element);
  const isTabIndexNaN = Number.isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}
function findTabbableDescendants(element) {
  return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/scope-tab.mjs
"use client";
function scopeTab(node, event) {
  const tabbable2 = findTabbableDescendants(node);
  if (!tabbable2.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable2[event.shiftKey ? 0 : tabbable2.length - 1];
  const root = node.getRootNode();
  let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
  const activeElement = root.activeElement;
  const activeElementIsRadio = activeElement.tagName === "INPUT" && activeElement.getAttribute("type") === "radio";
  if (activeElementIsRadio) {
    const activeRadioGroup = tabbable2.filter(
      (element) => element.getAttribute("type") === "radio" && element.getAttribute("name") === activeElement.getAttribute("name")
    );
    leavingFinalTabbable = activeRadioGroup.includes(finalTabbable);
  }
  if (!leavingFinalTabbable) {
    return;
  }
  event.preventDefault();
  const target = tabbable2[event.shiftKey ? tabbable2.length - 1 : 0];
  if (target) {
    target.focus();
  }
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.mjs
"use client";
function useFocusTrap(active = true) {
  const ref = (0, import_react9.useRef)();
  const restoreAria = (0, import_react9.useRef)(null);
  const focusNode = (node) => {
    let focusElement = node.querySelector("[data-autofocus]");
    if (!focusElement) {
      const children = Array.from(node.querySelectorAll(FOCUS_SELECTOR));
      focusElement = children.find(tabbable) || children.find(focusable) || null;
      if (!focusElement && focusable(node))
        focusElement = node;
    }
    if (focusElement) {
      focusElement.focus({ preventScroll: true });
    } else if (true) {
      console.warn(
        "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
        node
      );
    }
  };
  const setRef = (0, import_react9.useCallback)(
    (node) => {
      if (!active) {
        return;
      }
      if (node === null) {
        if (restoreAria.current) {
          restoreAria.current();
          restoreAria.current = null;
        }
        return;
      }
      restoreAria.current = createAriaHider(node);
      if (ref.current === node) {
        return;
      }
      if (node) {
        setTimeout(() => {
          if (node.getRootNode()) {
            focusNode(node);
          } else if (true) {
            console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", node);
          }
        });
        ref.current = node;
      } else {
        ref.current = null;
      }
    },
    [active]
  );
  (0, import_react9.useEffect)(() => {
    if (!active) {
      return void 0;
    }
    ref.current && setTimeout(() => focusNode(ref.current));
    const handleKeyDown = (event) => {
      if (event.key === "Tab" && ref.current) {
        scopeTab(ref.current, event);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (restoreAria.current) {
        restoreAria.current();
      }
    };
  }, [active]);
  return setRef;
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-id/use-id.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs
var import_react10 = __toESM(require_react(), 1);
"use client";
var __useId = import_react10.default["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-id/use-id.mjs
"use client";
function useId(staticId) {
  const reactId = useReactId();
  const [uuid, setUuid] = (0, import_react11.useState)(reactId);
  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);
  if (typeof staticId === "string") {
    return staticId;
  }
  if (typeof window === "undefined") {
    return reactId;
  }
  return uuid;
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-window-event/use-window-event.mjs
var import_react12 = __toESM(require_react(), 1);
"use client";
function useWindowEvent(type, listener, options) {
  (0, import_react12.useEffect)(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs
var import_react13 = __toESM(require_react(), 1);
"use client";
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
function useMergedRef(...refs) {
  return (0, import_react13.useCallback)(mergeRefs(...refs), refs);
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs
var import_react14 = __toESM(require_react(), 1);
"use client";
function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = (0, import_react14.useState)(
    defaultValue !== void 0 ? defaultValue : finalValue
  );
  const handleUncontrolledChange = (val, ...payload) => {
    setUncontrolledValue(val);
    onChange?.(val, ...payload);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}

// node_modules/.pnpm/@mantine+hooks@7.5.1_react@18.2.0/node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs
"use client";
function useReducedMotion(initialValue, options) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue, options);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
var import_react26 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs
"use client";
function isMantineColorScheme(value) {
  return value === "auto" || value === "dark" || value === "light";
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs
"use client";
function localStorageColorSchemeManager({
  key = "mantine-color-scheme-value"
} = {}) {
  let handleStorageEvent;
  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }
      try {
        const storedColorScheme = window.localStorage.getItem(key);
        return isMantineColorScheme(storedColorScheme) ? storedColorScheme : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          error
        );
      }
    },
    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };
      window.addEventListener("storage", handleStorageEvent);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },
    clear: () => {
      window.localStorage.removeItem(key);
    }
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var import_react15 = __toESM(require_react(), 1);
"use client";
var MantineContext = (0, import_react15.createContext)(null);
function useMantineContext() {
  const ctx = (0, import_react15.useContext)(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs
"use client";
function keys(object) {
  return Object.keys(object);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs
function getTransformedScaledValue(value) {
  if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
    return value;
  }
  return value.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim();
}
function px(value) {
  const transformedValue = getTransformedScaledValue(value);
  if (typeof transformedValue === "number") {
    return transformedValue;
  }
  if (typeof transformedValue === "string") {
    if (transformedValue.includes("calc") || transformedValue.includes("var")) {
      return transformedValue;
    }
    if (transformedValue.includes("px")) {
      return Number(transformedValue.replace("px", ""));
    }
    if (transformedValue.includes("rem")) {
      return Number(transformedValue.replace("rem", "")) * 16;
    }
    if (transformedValue.includes("em")) {
      return Number(transformedValue.replace("em", "")) * 16;
    }
    return Number(transformedValue);
  }
  return NaN;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  if (hexString.length === 8) {
    const alpha = parseInt(hexString.slice(6, 8), 16) / 255;
    return {
      r: parseInt(hexString.slice(0, 2), 16),
      g: parseInt(hexString.slice(2, 4), 16),
      b: parseInt(hexString.slice(4, 6), 16),
      a: alpha
    };
  }
  const parsed = parseInt(hexString, 16);
  const r2 = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r: r2,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r2, g, b, a] = color.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: r2, g, b, a: a || 1 };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r2;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r2 = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r2 = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r2 = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r2 = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r2 = x;
    g = 0;
    b = chroma;
  } else {
    r2 = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r2 + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs
function darken(color, alpha) {
  if (color.startsWith("var(")) {
    return `color-mix(in srgb, ${color}, black ${alpha * 100}%)`;
  }
  const { r: r2, g, b, a } = toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r2)}, ${dark(g)}, ${dark(b)}, ${a})`;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs
"use client";
function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs
"use client";
function gammaCorrect(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function getLightnessFromOklch(oklchColor) {
  const match = oklchColor.match(/oklch\((.*?)%\s/);
  return match ? parseFloat(match[1]) : null;
}
function luminance(color) {
  if (color.startsWith("oklch(")) {
    return (getLightnessFromOklch(color) || 0) / 100;
  }
  const { r: r2, g, b } = toRgba(color);
  const sR = r2 / 255;
  const sG = g / 255;
  const sB = b / 255;
  const rLinear = gammaCorrect(sR);
  const gLinear = gammaCorrect(sG);
  const bLinear = gammaCorrect(sB);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
function isLightColor(color, luminanceThreshold = 0.179) {
  if (color.startsWith("var(")) {
    return false;
  }
  return luminance(color) > luminanceThreshold;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs
"use client";
function parseThemeColor({
  color,
  theme,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof color}`
    );
  }
  if (color === "bright") {
    return {
      color,
      value: colorScheme === "dark" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  }
  if (color === "dimmed") {
    return {
      color,
      value: colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        color === "white" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: `--mantine-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme.colors;
  if (isThemeColor) {
    const colorValue = colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][getPrimaryShade(theme, colorScheme || "light")];
    return {
      color: _color,
      value: colorValue,
      shade: colorShade,
      isThemeColor,
      isLight: isLightColor(colorValue, theme.luminanceThreshold),
      variable: shade ? `--mantine-color-${_color}-${colorShade}` : `--mantine-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    isLight: isLightColor(color, theme.luminanceThreshold),
    shade: colorShade,
    variable: void 0
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs
"use client";
function getThemeColor(color, theme) {
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs
"use client";
function getGradient(gradient, theme) {
  const merged = {
    from: gradient?.from || theme.defaultGradient.from,
    to: gradient?.to || theme.defaultGradient.to,
    deg: gradient?.deg || theme.defaultGradient.deg || 0
  };
  const fromColor = getThemeColor(merged.from, theme);
  const toColor = getThemeColor(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs
function rgba(color, alpha2) {
  if (typeof color !== "string" || alpha2 > 1 || alpha2 < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  if (color.startsWith("var(")) {
    const mixPercentage = (1 - alpha2) * 100;
    return `color-mix(in srgb, ${color}, transparent ${mixPercentage}%)`;
  }
  if (color.startsWith("oklch")) {
    if (color.includes("/")) {
      return color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha2})`);
    }
    return color.replace(")", ` / ${alpha2})`);
  }
  const { r: r2, g, b } = toRgba(color);
  return `rgba(${r2}, ${g}, ${b}, ${alpha2})`;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs
"use client";
var defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient,
  autoContrast
}) => {
  const parsed = parseThemeColor({ color, theme });
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (variant === "filled") {
    const textColor = _autoContrast ? parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: textColor,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: textColor,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken(color, 0.1),
      color: textColor,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: rgba(color, 0.1),
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${rem(1)} solid var(--mantine-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.05),
      color,
      border: `${rem(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--mantine-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: darken(theme.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "var(--mantine-color-white)",
      hover: darken(theme.white, 0.01),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: getGradient(gradient, theme),
      hover: getGradient(gradient, theme),
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${rem(1)} solid var(--mantine-color-default-border)`
    };
  }
  return {};
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs
var DEFAULT_COLORS = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs
var DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
var DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: defaultVariantColorsResolver,
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: rem(34), lineHeight: "1.3" },
      h2: { fontSize: rem(26), lineHeight: "1.35" },
      h3: { fontSize: rem(22), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.45" },
      h5: { fontSize: rem(16), lineHeight: "1.5" },
      h6: { fontSize: rem(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32)
  },
  spacing: {
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(10)} ${rem(
      15
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(-5)}`,
    md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(20)} ${rem(
      25
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(-5)}`,
    lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(28)} ${rem(
      23
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(-7)}`,
    xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(36)} ${rem(
      28
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(-7)}`
  },
  other: {},
  components: {}
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = { ...target };
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs
var import_react18 = __toESM(require_react(), 1);
var INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";
var INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateMantineTheme(theme) {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme.primaryShade === "object") {
    if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeMantineTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }
  const result = deepMerge(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !themeOverride.headings?.fontFamily) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateMantineTheme(result);
  return result;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
"use client";
var MantineThemeContext = (0, import_react19.createContext)(null);
var useSafeMantineTheme = () => (0, import_react19.useContext)(MantineThemeContext) || DEFAULT_THEME;
function useMantineTheme() {
  const ctx = (0, import_react19.useContext)(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = (0, import_react19.useMemo)(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );
  return /* @__PURE__ */ import_react19.default.createElement(MantineThemeContext.Provider, { value: mergedTheme }, children);
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
"use client";
function MantineClasses() {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const classes26 = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    const isPxBreakpoint = theme.breakpoints[breakpoint].includes("px");
    const pxValue = px(theme.breakpoints[breakpoint]);
    const maxWidthBreakpoint = isPxBreakpoint ? `${pxValue - 0.1}px` : em(pxValue - 0.1);
    const minWidthBreakpoint = isPxBreakpoint ? `${pxValue}px` : em(pxValue);
    return `${acc}@media (max-width: ${maxWidthBreakpoint}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${minWidthBreakpoint}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ import_react20.default.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: classes26 }
    }
  );
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
var import_react24 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs
"use client";
function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs
"use client";
function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs
"use client";
function convertCssVariables(input, selector) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : "";
  const dark = cssVariablesObjectToString(input.dark);
  const darkForced = dark ? wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
  const light = cssVariablesObjectToString(input.light);
  const lightForced = light ? wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs
var import_react22 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs
var import_react21 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs
"use client";
function getContrastColor({ color, theme, autoContrast = true }) {
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (!_autoContrast) {
    return "var(--mantine-color-white)";
  }
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function getPrimaryContrastColor(theme, colorScheme) {
  return getContrastColor({
    color: theme.colors[theme.primaryColor][getPrimaryShade(theme, colorScheme)],
    theme,
    autoContrast: null
  });
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs
"use client";
function assignSizeVariables(variables, sizes, name) {
  keys(sizes).forEach(
    (size3) => Object.assign(variables, { [`--mantine-${name}-${size3}`]: sizes[size3] })
  );
}
var defaultCssVariablesResolver = (theme) => {
  const darkPrimaryShade = getPrimaryShade(theme, "dark");
  const lightPrimaryShade = getPrimaryShade(theme, "light");
  const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : rem(theme.defaultRadius);
  const result = {
    variables: {
      "--mantine-scale": theme.scale.toString(),
      "--mantine-cursor-type": theme.cursorType,
      "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--mantine-color-scheme": "light dark",
      "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme.white,
      "--mantine-color-black": theme.black,
      "--mantine-line-height": theme.lineHeights.md,
      "--mantine-font-family": theme.fontFamily,
      "--mantine-font-family-monospace": theme.fontFamilyMonospace,
      "--mantine-font-family-headings": theme.headings.fontFamily,
      "--mantine-heading-font-weight": theme.headings.fontWeight,
      "--mantine-heading-text-wrap": theme.headings.textWrap,
      "--mantine-radius-default": defaultRadius,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": theme.black,
      "--mantine-color-body": theme.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)"
    },
    dark: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)"
    }
  };
  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");
  theme.colors[theme.primaryColor].forEach((_, index3) => {
    result.variables[`--mantine-primary-color-${index3}`] = `var(--mantine-color-${theme.primaryColor}-${index3})`;
  });
  keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index3) => {
      result.variables[`--mantine-color-${color}-${index3}`] = shade;
    });
    const lightFilledHover = `var(--mantine-color-${color}-${lightPrimaryShade === 9 ? 8 : lightPrimaryShade + 1})`;
    const darkFilledHover = `var(--mantine-color-${color}-${darkPrimaryShade === 9 ? 8 : darkPrimaryShade + 1})`;
    result.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)";
    result.light[`--mantine-color-${color}-text`] = `var(--mantine-color-${color}-filled)`;
    result.light[`--mantine-color-${color}-filled`] = `var(--mantine-color-${color}-${lightPrimaryShade})`;
    result.light[`--mantine-color-${color}-filled-hover`] = lightFilledHover;
    result.light[`--mantine-color-${color}-light`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.1
    );
    result.light[`--mantine-color-${color}-light-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.12
    );
    result.light[`--mantine-color-${color}-light-color`] = `var(--mantine-color-${color}-${lightPrimaryShade})`;
    result.light[`--mantine-color-${color}-outline`] = `var(--mantine-color-${color}-${lightPrimaryShade})`;
    result.light[`--mantine-color-${color}-outline-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.05
    );
    result.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)";
    result.dark[`--mantine-color-${color}-text`] = `var(--mantine-color-${color}-4)`;
    result.dark[`--mantine-color-${color}-filled`] = `var(--mantine-color-${color}-${darkPrimaryShade})`;
    result.dark[`--mantine-color-${color}-filled-hover`] = darkFilledHover;
    result.dark[`--mantine-color-${color}-light`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.15
    );
    result.dark[`--mantine-color-${color}-light-hover`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.2
    );
    result.dark[`--mantine-color-${color}-light-color`] = `var(--mantine-color-${color}-${Math.max(
      darkPrimaryShade - 5,
      0
    )})`;
    result.dark[`--mantine-color-${color}-outline`] = `var(--mantine-color-${color}-${Math.max(
      darkPrimaryShade - 4,
      0
    )})`;
    result.dark[`--mantine-color-${color}-outline-hover`] = rgba(
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)],
      0.05
    );
  });
  const headings2 = theme.headings.sizes;
  keys(headings2).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings2[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings2[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings2[heading].fontWeight || theme.headings.fontWeight;
  });
  return result;
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs
"use client";
function getMergedVariables({ theme, generator }) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator?.(theme);
  return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs
var import_react23 = __toESM(require_react(), 1);
"use client";
var defaultCssVariables = defaultCssVariablesResolver(DEFAULT_THEME);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  keys(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  keys(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  keys(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
"use client";
function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({ cssVariablesSelector }) {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  if (css) {
    return /* @__PURE__ */ import_react24.default.createElement(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce?.(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs
"use client";
function suppressNextjsWarning() {
  const originalError = console.error;
  console.error = (...args) => {
    if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-mantine-color-scheme"))
      ;
    else {
      originalError(...args);
    }
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs
var import_react25 = __toESM(require_react(), 1);
"use client";
function setColorSchemeAttribute(colorScheme, getRootElement) {
  const computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  getRootElement()?.setAttribute("data-mantine-color-scheme", computedColorScheme);
}
function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
  forceColorScheme
}) {
  const media = (0, import_react25.useRef)();
  const [value, setValue] = (0, import_react25.useState)(() => manager.get(defaultColorScheme));
  const colorSchemeValue = forceColorScheme || value;
  const setColorScheme = (0, import_react25.useCallback)(
    (colorScheme) => {
      if (!forceColorScheme) {
        setColorSchemeAttribute(colorScheme, getRootElement);
        setValue(colorScheme);
        manager.set(colorScheme);
      }
    },
    [manager.set, colorSchemeValue, forceColorScheme]
  );
  const clearColorScheme = (0, import_react25.useCallback)(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);
  (0, import_react25.useEffect)(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);
  useIsomorphicEffect(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);
  (0, import_react25.useEffect)(() => {
    if (forceColorScheme) {
      setColorSchemeAttribute(forceColorScheme, getRootElement);
      return () => {
      };
    }
    if (forceColorScheme === void 0) {
      setColorSchemeAttribute(value, getRootElement);
    }
    media.current = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event) => {
      if (value === "auto") {
        setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
      }
    };
    media.current?.addEventListener("change", listener);
    return () => media.current?.removeEventListener("change", listener);
  }, [value, forceColorScheme]);
  return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs
"use client";
function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  useIsomorphicEffect(() => {
    if (respectReducedMotion) {
      getRootElement()?.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
"use client";
suppressNextjsWarning();
function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "light",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  useRespectReduceMotion({
    respectReducedMotion: theme?.respectReducedMotion || false,
    getRootElement
  });
  return /* @__PURE__ */ import_react26.default.createElement(
    MantineContext.Provider,
    {
      value: {
        colorSchemeManager,
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector
      }
    },
    /* @__PURE__ */ import_react26.default.createElement(MantineThemeProvider, { theme }, withCssVariables && /* @__PURE__ */ import_react26.default.createElement(MantineCssVariables, { cssVariablesSelector }), /* @__PURE__ */ import_react26.default.createElement(MantineClasses, null), children)
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/ColorSchemeScript/ColorSchemeScript.mjs
var import_react27 = __toESM(require_react(), 1);
"use client";
var getScript = ({
  defaultColorScheme,
  localStorageKey,
  forceColorScheme
}) => forceColorScheme ? `document.documentElement.setAttribute("data-mantine-color-scheme", '${forceColorScheme}');` : `try {
  var _colorScheme = window.localStorage.getItem("${localStorageKey}");
  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "${defaultColorScheme}";
  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
} catch (e) {}
`;
function ColorSchemeScript({
  defaultColorScheme = "light",
  localStorageKey = "mantine-color-scheme-value",
  forceColorScheme,
  ...others
}) {
  const _defaultColorScheme = ["light", "dark", "auto"].includes(defaultColorScheme) ? defaultColorScheme : "light";
  return /* @__PURE__ */ import_react27.default.createElement(
    "script",
    {
      ...others,
      "data-mantine-script": true,
      dangerouslySetInnerHTML: {
        __html: getScript({
          defaultColorScheme: _defaultColorScheme,
          localStorageKey,
          forceColorScheme
        })
      }
    }
  );
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Paper/Paper.mjs
var import_react44 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs
"use client";
function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
      return true;
    }
    return /[0-9]/.test(value.trim().replace("-", "")[0]);
  }
  return false;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
"use client";
function getSize(size3, prefix = "size", convertToRem = true) {
  if (size3 === void 0) {
    return void 0;
  }
  return isNumberLike(size3) ? convertToRem ? rem(size3) : size3 : `var(--${prefix}-${size3})`;
}
function getSpacing(size3) {
  return getSize(size3, "mantine-spacing");
}
function getRadius(size3) {
  if (size3 === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size3, "mantine-radius");
}
function getFontSize(size3) {
  return getSize(size3, "mantine-font-size");
}
function getLineHeight(size3) {
  return getSize(size3, "mantine-line-height", false);
}
function getShadow(size3) {
  if (!size3) {
    return void 0;
  }
  return getSize(size3, "mantine-shadow", false);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
"use client";
function createVarsResolver(resolver) {
  return resolver;
}

// node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs
"use client";
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var import_react28 = __toESM(require_react(), 1);
"use client";
function useProps(component, defaultProps54, props) {
  const theme = useMantineTheme();
  const contextPropsPayload = theme.components[component]?.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return { ...defaultProps54, ...contextProps, ...filterProps(props) };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs
"use client";
var FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
  return clsx_default(
    options?.focusable && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    options?.active && !unstyled && theme.activeClassName
  );
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs
"use client";
var EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = clsx_default(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });
  return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map(
    (item) => typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(resolvedClassNames);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs
"use client";
function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return resolveClassNames({
    theme,
    classNames: options?.classNames,
    props: options?.props || props,
    stylesCtx
  })[selector];
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs
"use client";
function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs
"use client";
function getRootClassName({ rootSelector, selector, className }) {
  return rootSelector === selector ? className : void 0;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs
"use client";
function getSelectorClassName({ selector, classes: classes26, unstyled }) {
  return unstyled ? void 0 : classes26[selector];
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs
"use client";
function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector,
  withStaticClass
}) {
  if (withStaticClass === false) {
    return [];
  }
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs
"use client";
function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => resolveClassNames({
      theme,
      classNames: theme.components[n]?.classNames,
      props,
      stylesCtx
    })?.[selector]
  );
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs
"use client";
function getVariantClassName({
  options,
  classes: classes26,
  selector,
  unstyled
}) {
  return options?.variant && !unstyled ? classes26[`${selector}--${options.variant}`] : void 0;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs
"use client";
function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes: classes26,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx
}) {
  return clsx_default(
    getGlobalClassNames({ theme, options, unstyled }),
    getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes: classes26, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes: classes26, unstyled }),
    getStaticClassNames({
      themeName,
      classNamesPrefix,
      selector,
      withStaticClass: options?.withStaticClass
    }),
    options?.className
  );
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs
"use client";
function resolveStyles({ theme, styles, props, stylesCtx }) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  return arrayStyles.reduce((acc, style) => {
    if (typeof style === "function") {
      return { ...acc, ...style(theme, props, stylesCtx) };
    }
    return { ...acc, ...style };
  }, {});
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs
"use client";
function getThemeStyles({
  theme,
  themeName,
  props,
  stylesCtx,
  selector
}) {
  return themeName.map(
    (n) => resolveStyles({
      theme,
      styles: theme.components[n]?.styles,
      props,
      stylesCtx
    })[selector]
  ).reduce((acc, val) => ({ ...acc, ...val }), {});
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs
"use client";
function resolveStyle({ style, theme }) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs
var import_react29 = __toESM(require_react(), 1);
"use client";
function mergeVars(vars) {
  return vars.reduce((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = { ...acc[key], ...filterProps(current[key]) };
      });
    }
    return acc;
  }, {});
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs
"use client";
function resolveVars({
  vars,
  varsResolver: varsResolver28,
  theme,
  props,
  stylesCtx,
  selector,
  themeName
}) {
  return mergeVars([
    varsResolver28?.(theme, props, stylesCtx),
    ...themeName.map((name) => theme.components?.[name]?.vars?.(theme, props, stylesCtx)),
    vars?.(theme, props, stylesCtx)
  ])?.[selector];
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs
"use client";
function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver: varsResolver28
}) {
  return {
    ...getThemeStyles({ theme, themeName, props, stylesCtx, selector }),
    ...resolveStyles({ theme, styles, props, stylesCtx })[selector],
    ...resolveStyles({ theme, styles: options?.styles, props: options?.props || props, stylesCtx })[selector],
    ...resolveVars({ theme, props, stylesCtx, vars, varsResolver: varsResolver28, selector, themeName }),
    ...rootSelector === selector ? resolveStyle({ style, theme }) : null,
    ...resolveStyle({ style: options?.style, theme })
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs
"use client";
function useStyles({
  name,
  classes: classes26,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver: varsResolver28
}) {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  return (selector, options) => ({
    className: getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes: classes26,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx
    }),
    style: getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver: varsResolver28
    })
  });
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/Box.mjs
var import_react40 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs
function createPolymorphicComponent(component) {
  return component;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
var import_react32 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs
"use client";
function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs
var import_react31 = __toESM(require_react(), 1);
"use client";
function cssObjectToString(css) {
  return keys(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs
"use client";
function stylesToString({ selector, styles, media }) {
  const baseStyles = styles ? cssObjectToString(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}`.trim();
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
"use client";
function InlineStyles({ selector, styles, media }) {
  const nonce = useMantineStyleNonce();
  return /* @__PURE__ */ import_react32.default.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: stylesToString({ selector, styles, media }) }
    }
  );
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs
"use client";
function transformModKey(key) {
  return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value === void 0 || value === "" || value === false || value === null) {
      return acc;
    }
    acc[transformModKey(key)] = props[key];
    return acc;
  }, {});
}
function getBoxMod(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "string") {
    return { [transformModKey(mod)]: true };
  }
  if (Array.isArray(mod)) {
    return [...mod].reduce(
      (acc, value) => ({ ...acc, ...getBoxMod(value) }),
      {}
    );
  }
  return getMod(mod);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs
"use client";
function mergeStyles(styles, theme) {
  if (Array.isArray(styles)) {
    return [...styles].reduce(
      (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
      {}
    );
  }
  if (typeof styles === "function") {
    return styles(theme);
  }
  if (styles == null) {
    return {};
  }
  return styles;
}
function getBoxStyle({
  theme,
  style,
  vars,
  styleProps
}) {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return { ..._style, ..._vars, ...styleProps };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs
var import_react33 = __toESM(require_react(), 1);
"use client";
function extractStyleProps(others) {
  const {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    ...rest
  } = others;
  const styleProps = filterProps({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden
  });
  return { styleProps, rest };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs
"use client";
var STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs
var import_react38 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs
var import_react34 = __toESM(require_react(), 1);
"use client";
function colorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  if (parsedColor.color === "bright") {
    return "var(--mantine-color-bright)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function textColorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
    return `var(--mantine-color-${parsedColor.color}-text)`;
  }
  return colorResolver(color, theme);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs
"use client";
var values = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
  if (typeof fontFamily === "string" && fontFamily in values) {
    return values[fontFamily];
  }
  return fontFamily;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs
var import_react35 = __toESM(require_react(), 1);
"use client";
function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    return rem(value);
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs
"use client";
function identityResolver(value) {
  return value;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs
"use client";
function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.lineHeights) {
    return `var(--mantine-line-height-${value})`;
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs
var import_react36 = __toESM(require_react(), 1);
"use client";
function sizeResolver(value) {
  if (typeof value === "number") {
    return rem(value);
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs
var import_react37 = __toESM(require_react(), 1);
"use client";
function spacingResolver(value, theme) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme.spacing)) {
      return rem(value);
    }
    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs
"use client";
var resolvers = {
  color: colorResolver,
  textColor: textColorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver,
  fontFamily: fontFamilyResolver
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs
"use client";
function replaceMediaQuery(query) {
  return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({
  media,
  ...props
}) {
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
  return { ...props, media: sortedMedia };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs
"use client";
function hasResponsiveStyles(styleProp) {
  if (typeof styleProp !== "object" || styleProp === null) {
    return false;
  }
  const breakpoints = Object.keys(styleProp);
  if (breakpoints.length === 1 && breakpoints[0] === "base") {
    return false;
  }
  return true;
}
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}
function getBreakpointKeys(value) {
  if (typeof value === "object" && value !== null) {
    return keys(value).filter((key) => key !== "base");
  }
  return [];
}
function getBreakpointValue(value, breakpoint) {
  if (typeof value === "object" && value !== null && breakpoint in value) {
    return value[breakpoint];
  }
  return value;
}
function parseStyleProps({
  styleProps,
  data,
  theme
}) {
  return sortMediaQueries(
    keys(styleProps).reduce(
      (acc, styleProp) => {
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom") {
          return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
          properties.forEach((property) => {
            acc.inlineStyles[property] = resolvers[propertyData.type](baseValue, theme);
          });
          return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property) => {
          if (baseValue) {
            acc.styles[property] = resolvers[propertyData.type](baseValue, theme);
          }
          breakpoints.forEach((breakpoint) => {
            const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
            acc.media[bp] = {
              ...acc.media[bp],
              [property]: resolvers[propertyData.type](
                getBreakpointValue(styleProps[styleProp], breakpoint),
                theme
              )
            };
          });
        });
        return acc;
      },
      {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs
var import_react39 = __toESM(require_react(), 1);
"use client";
function useRandomClassName() {
  const id = (0, import_react39.useId)().replace(/:/g, "");
  return `__m__-${id}`;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/Box.mjs
"use client";
var _Box = (0, import_react40.forwardRef)(
  ({
    component,
    style,
    __vars,
    className,
    variant,
    mod,
    size: size3,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    renderRoot,
    ...others
  }, ref) => {
    const theme = useMantineTheme();
    const Element2 = component || "div";
    const { styleProps, rest } = extractStyleProps(others);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA
    });
    const props = {
      ref,
      style: getBoxStyle({
        theme,
        style,
        vars: __vars,
        styleProps: parsedStyleProps.inlineStyles
      }),
      className: clsx_default(className, {
        [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
        "mantine-light-hidden": lightHidden,
        "mantine-dark-hidden": darkHidden,
        [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
        [`mantine-visible-from-${visibleFrom}`]: visibleFrom
      }),
      "data-variant": variant,
      "data-size": isNumberLike(size3) ? void 0 : size3 || void 0,
      ...getBoxMod(mod),
      ...rest
    };
    return /* @__PURE__ */ import_react40.default.createElement(import_react40.default.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ import_react40.default.createElement(
      InlineStyles,
      {
        selector: `.${responsiveClassName}`,
        styles: parsedStyleProps.styles,
        media: parsedStyleProps.media
      }
    ), typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ import_react40.default.createElement(Element2, { ...props }));
  }
);
_Box.displayName = "@mantine/core/Box";
var Box = createPolymorphicComponent(_Box);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var import_react42 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/factory/factory.mjs
var import_react41 = __toESM(require_react(), 1);
"use client";
function identity(value) {
  return value;
}
function factory(ui) {
  const Component = (0, import_react41.forwardRef)(ui);
  Component.extend = identity;
  return Component;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
"use client";
function polymorphicFactory(ui) {
  const Component = (0, import_react42.forwardRef)(ui);
  Component.extend = identity;
  return Component;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs
var import_react43 = __toESM(require_react(), 1);
"use client";
var DirectionContext = (0, import_react43.createContext)({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function useDirection() {
  return (0, import_react43.useContext)(DirectionContext);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs
"use client";
var classes = { "root": "m-1b7284a3" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Paper/Paper.mjs
"use client";
var defaultProps = {};
var varsResolver = createVarsResolver((_, { radius, shadow }) => ({
  root: {
    "--paper-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--paper-shadow": getShadow(shadow)
  }
}));
var Paper = polymorphicFactory((_props, ref) => {
  const props = useProps("Paper", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Paper",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react44.default.createElement(
    Box,
    {
      ref,
      mod: [{ "data-with-border": withBorder }, mod],
      ...getStyles2("root"),
      variant,
      ...others
    }
  );
});
Paper.classes = classes;
Paper.displayName = "@mantine/core/Paper";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Group/Group.mjs
var import_react46 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs
var import_react45 = __toESM(require_react(), 1);
"use client";
function filterFalsyChildren(children) {
  return import_react45.Children.toArray(children).filter(Boolean);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs
"use client";
var classes2 = { "root": "m-4081bf90" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Group/Group.mjs
"use client";
var defaultProps2 = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
var varsResolver2 = createVarsResolver(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": getSpacing(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = factory((_props, ref) => {
  const props = useProps("Group", defaultProps2, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size,
    mod,
    ...others
  } = props;
  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const resolvedGap = getSpacing(gap ?? "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles2 = useStyles({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: classes2,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ import_react46.default.createElement(
    Box,
    {
      ...getStyles2("root"),
      ref,
      variant,
      mod: [{ grow }, mod],
      size: __size,
      ...others
    },
    filteredChildren
  );
});
Group.classes = classes2;
Group.displayName = "@mantine/core/Group";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Flex/Flex.mjs
var import_react47 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Flex/flex-props.mjs
"use client";
var FLEX_STYLE_PROPS_DATA = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" }
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Flex/Flex.module.css.mjs
"use client";
var classes3 = { "root": "m-8bffd616" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Flex/Flex.mjs
"use client";
var defaultProps3 = {};
var Flex = polymorphicFactory((_props, ref) => {
  const props = useProps("Flex", defaultProps3, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Flex",
    classes: classes3,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const theme = useMantineTheme();
  const responsiveClassName = useRandomClassName();
  const parsedStyleProps = parseStyleProps({
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA
  });
  return /* @__PURE__ */ import_react47.default.createElement(import_react47.default.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ import_react47.default.createElement(
    InlineStyles,
    {
      selector: `.${responsiveClassName}`,
      styles: parsedStyleProps.styles,
      media: parsedStyleProps.media
    }
  ), /* @__PURE__ */ import_react47.default.createElement(
    Box,
    {
      ref,
      ...getStyles2("root", {
        className: responsiveClassName,
        style: filterProps(parsedStyleProps.inlineStyles)
      }),
      ...others
    }
  ));
});
Flex.classes = classes3;
Flex.displayName = "@mantine/core/Flex";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs
var import_react58 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/get-safe-id/get-safe-id.mjs
"use client";
function getSafeId(uid, errorMessage) {
  return (value) => {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(errorMessage);
    }
    return `${uid}-${value}`;
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs
var import_react49 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs
var import_react48 = __toESM(require_react(), 1);
"use client";
function createSafeContext(errorMessage) {
  const Context = (0, import_react48.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react48.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react48.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs
"use client";
var [AccordionProvider, useAccordionContext] = createSafeContext(
  "Accordion component was not found in the tree"
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs
var import_react50 = __toESM(require_react(), 1);
"use client";
function AccordionChevron({ style, size: size3 = 16, ...others }) {
  return /* @__PURE__ */ import_react50.default.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...style, width: rem(size3), height: rem(size3), display: "block" },
      ...others
    },
    /* @__PURE__ */ import_react50.default.createElement(
      "path",
      {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
AccordionChevron.displayName = "@mantine/core/AccordionChevron";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/AccordionControl/AccordionControl.mjs
var import_react53 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs
"use client";
function findElementAncestor(element, selector) {
  let _element = element;
  while ((_element = _element.parentElement) && !_element.matches(selector))
    ;
  return _element;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs
"use client";
function getPreviousIndex(current, elements, loop) {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function getNextIndex(current, elements, loop) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function onSameLevel(target, sibling, parentSelector) {
  return findElementAncestor(target, parentSelector) === findElementAncestor(sibling, parentSelector);
}
function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
  activateOnFocus = false,
  dir = "rtl",
  orientation
}) {
  return (event) => {
    onKeyDown?.(event);
    const elements = Array.from(
      findElementAncestor(event.currentTarget, parentSelector)?.querySelectorAll(
        siblingSelector
      ) || []
    ).filter((node) => onSameLevel(event.currentTarget, node, parentSelector));
    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements, loop);
    const _previousIndex = getPreviousIndex(current, elements, loop);
    const nextIndex = dir === "rtl" ? _previousIndex : _nextIndex;
    const previousIndex = dir === "rtl" ? _nextIndex : _previousIndex;
    switch (event.key) {
      case "ArrowRight": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[nextIndex].focus();
          activateOnFocus && elements[nextIndex].click();
        }
        break;
      }
      case "ArrowLeft": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[previousIndex].focus();
          activateOnFocus && elements[previousIndex].click();
        }
        break;
      }
      case "ArrowUp": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }
        break;
      }
      case "ArrowDown": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }
        break;
      }
      case "Home": {
        event.stopPropagation();
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }
      case "End": {
        event.stopPropagation();
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
var import_react51 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs
"use client";
var classes4 = { "root": "m-87cf2631" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
"use client";
var defaultProps4 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps4, _props);
    const {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style,
      ...others
    } = props;
    const getStyles2 = useStyles({
      name: __staticSelector,
      props,
      classes: classes4,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react51.default.createElement(
      Box,
      {
        ...getStyles2("root", { focusable: true }),
        component,
        ref,
        type: component === "button" ? "button" : void 0,
        ...others
      }
    );
  }
);
UnstyledButton.classes = classes4;
UnstyledButton.displayName = "@mantine/core/UnstyledButton";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/AccordionItem.context.mjs
var import_react52 = __toESM(require_react(), 1);
"use client";
var [AccordionItemProvider, useAccordionItemContext] = createSafeContext("Accordion.Item component was not found in the tree");

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/Accordion.module.css.mjs
"use client";
var classes5 = { "root": "m-9bdbb667", "panel": "m-df78851f", "content": "m-4ba554d4", "itemTitle": "m-8fa820a0", "control": "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", "label": "m-df3ffa0f", "chevron": "m-3f35ae96", "icon": "m-9bd771fe", "item": "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/AccordionControl/AccordionControl.mjs
"use client";
var defaultProps5 = {};
var AccordionControl = factory((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    chevron,
    icon,
    onClick,
    onKeyDown,
    children,
    disabled,
    mod,
    ...others
  } = useProps("AccordionControl", defaultProps5, props);
  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  const isActive = ctx.isItemActive(value);
  const shouldWrapWithHeading = typeof ctx.order === "number";
  const Heading = `h${ctx.order}`;
  const content = /* @__PURE__ */ import_react53.default.createElement(
    UnstyledButton,
    {
      ...others,
      ...ctx.getStyles("control", { className, classNames, style, styles, variant: ctx.variant }),
      unstyled: ctx.unstyled,
      mod: [
        "accordion-control",
        { active: isActive, "chevron-position": ctx.chevronPosition, disabled },
        mod
      ],
      ref,
      onClick: (event) => {
        onClick?.(event);
        ctx.onChange(value);
      },
      type: "button",
      disabled,
      "aria-expanded": isActive,
      "aria-controls": ctx.getRegionId(value),
      id: ctx.getControlId(value),
      onKeyDown: createScopedKeydownHandler({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: false,
        loop: ctx.loop,
        orientation: "vertical",
        onKeyDown
      })
    },
    /* @__PURE__ */ import_react53.default.createElement(
      Box,
      {
        component: "span",
        mod: { rotate: !ctx.disableChevronRotation && isActive, position: ctx.chevronPosition },
        ...ctx.getStyles("chevron", { classNames, styles })
      },
      chevron || ctx.chevron
    ),
    /* @__PURE__ */ import_react53.default.createElement("span", { ...ctx.getStyles("label", { classNames, styles }) }, children),
    icon && /* @__PURE__ */ import_react53.default.createElement(
      Box,
      {
        component: "span",
        mod: { "chevron-position": ctx.chevronPosition },
        ...ctx.getStyles("icon", { classNames, styles })
      },
      icon
    )
  );
  return shouldWrapWithHeading ? /* @__PURE__ */ import_react53.default.createElement(Heading, { ...ctx.getStyles("itemTitle", { classNames, styles }) }, content) : content;
});
AccordionControl.displayName = "@mantine/core/AccordionControl";
AccordionControl.classes = classes5;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/AccordionItem/AccordionItem.mjs
var import_react54 = __toESM(require_react(), 1);
"use client";
var defaultProps6 = {};
var AccordionItem = factory((props, ref) => {
  const { classNames, className, style, styles, vars, value, mod, ...others } = useProps(
    "AccordionItem",
    defaultProps6,
    props
  );
  const ctx = useAccordionContext();
  return /* @__PURE__ */ import_react54.default.createElement(AccordionItemProvider, { value: { value } }, /* @__PURE__ */ import_react54.default.createElement(
    Box,
    {
      ref,
      mod: [{ active: ctx.isItemActive(value) }, mod],
      ...ctx.getStyles("item", { className, classNames, styles, style, variant: ctx.variant }),
      ...others
    }
  ));
});
AccordionItem.displayName = "@mantine/core/AccordionItem";
AccordionItem.classes = classes5;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/AccordionPanel/AccordionPanel.mjs
var import_react57 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Collapse/Collapse.mjs
var import_react56 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs
"use client";
function getStyleObject(style, theme) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...getStyleObject(item, theme) }),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Collapse/use-collapse.mjs
var import_react55 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
"use client";
function getAutoHeightDuration(height) {
  if (!height || typeof height === "string") {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function getElementHeight(el) {
  return el?.current ? el.current.scrollHeight : "auto";
}
var raf = typeof window !== "undefined" && window.requestAnimationFrame;
function useCollapse({
  transitionDuration,
  transitionTimingFunction = "ease",
  onTransitionEnd = () => {
  },
  opened
}) {
  const el = (0, import_react55.useRef)(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    display: "none",
    height: 0,
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = (0, import_react55.useState)(opened ? {} : collapsedStyles);
  const setStyles = (newStyles) => {
    (0, import_react_dom.flushSync)(() => setStylesRaw(newStyles));
  };
  const mergeStyles2 = (newStyles) => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };
  function getTransitionStyles2(height) {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transition: `height ${_duration}ms ${transitionTimingFunction}, opacity ${_duration}ms ${transitionTimingFunction}`
    };
  }
  useDidUpdate(() => {
    if (typeof raf === "function") {
      if (opened) {
        raf(() => {
          mergeStyles2({ willChange: "height", display: "block", overflow: "hidden" });
          raf(() => {
            const height = getElementHeight(el);
            mergeStyles2({ ...getTransitionStyles2(height), height });
          });
        });
      } else {
        raf(() => {
          const height = getElementHeight(el);
          mergeStyles2({ ...getTransitionStyles2(height), willChange: "height", height });
          raf(() => mergeStyles2({ height: collapsedHeight, overflow: "hidden" }));
        });
      }
    }
  }, [opened]);
  const handleTransitionEnd = (e) => {
    if (e.target !== el.current || e.propertyName !== "height") {
      return;
    }
    if (opened) {
      const height = getElementHeight(el);
      if (height === styles.height) {
        setStyles({});
      } else {
        mergeStyles2({ height });
      }
      onTransitionEnd();
    } else if (styles.height === collapsedHeight) {
      setStyles(collapsedStyles);
      onTransitionEnd();
    }
  };
  function getCollapseProps({ style = {}, refKey = "ref", ...rest } = {}) {
    const theirRef = rest[refKey];
    return {
      "aria-hidden": !opened,
      ...rest,
      [refKey]: mergeRefs(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: { boxSizing: "border-box", ...style, ...styles }
    };
  }
  return getCollapseProps;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Collapse/Collapse.mjs
"use client";
var defaultProps7 = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
var Collapse = factory((props, ref) => {
  const {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity,
    ...others
  } = useProps("Collapse", defaultProps7, props);
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd
  });
  if (duration === 0) {
    return opened ? /* @__PURE__ */ import_react56.default.createElement(Box, { ...others }, children) : null;
  }
  return /* @__PURE__ */ import_react56.default.createElement(
    Box,
    {
      ...getCollapseProps({
        style: {
          opacity: opened || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : "none",
          ...getStyleObject(style, theme)
        },
        ref,
        ...others
      })
    },
    children
  );
});
Collapse.displayName = "@mantine/core/Collapse";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/AccordionPanel/AccordionPanel.mjs
"use client";
var defaultProps8 = {};
var AccordionPanel = factory((props, ref) => {
  const { classNames, className, style, styles, vars, children, ...others } = useProps(
    "AccordionPanel",
    defaultProps8,
    props
  );
  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  return /* @__PURE__ */ import_react57.default.createElement(
    Collapse,
    {
      ref,
      ...ctx.getStyles("panel", { className, classNames, style, styles }),
      ...others,
      in: ctx.isItemActive(value),
      transitionDuration: ctx.transitionDuration ?? 200,
      role: "region",
      id: ctx.getRegionId(value),
      "aria-labelledby": ctx.getControlId(value)
    },
    /* @__PURE__ */ import_react57.default.createElement("div", { ...ctx.getStyles("content", { classNames, styles }) }, children)
  );
});
AccordionPanel.displayName = "@mantine/core/AccordionPanel";
AccordionPanel.classes = classes5;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs
"use client";
var defaultProps9 = {
  multiple: false,
  disableChevronRotation: false,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ import_react58.default.createElement(AccordionChevron, null)
};
var varsResolver3 = createVarsResolver(
  (_, { transitionDuration, chevronSize, radius }) => ({
    root: {
      "--accordion-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--accordion-chevron-size": chevronSize === void 0 ? void 0 : rem(chevronSize),
      "--accordion-radius": radius === void 0 ? void 0 : getRadius(radius)
    }
  })
);
function Accordion(_props) {
  const props = useProps("Accordion", defaultProps9, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    id,
    loop,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    variant,
    radius,
    ...others
  } = props;
  const uid = useId(id);
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange
  });
  const isItemActive = (itemValue) => Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value;
  const handleItemChange = (itemValue) => {
    const nextValue = Array.isArray(_value) ? _value.includes(itemValue) ? _value.filter((selectedValue) => selectedValue !== itemValue) : [..._value, itemValue] : itemValue === _value ? null : itemValue;
    handleChange(nextValue);
  };
  const getStyles2 = useStyles({
    name: "Accordion",
    classes: classes5,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3
  });
  return /* @__PURE__ */ import_react58.default.createElement(
    AccordionProvider,
    {
      value: {
        isItemActive,
        onChange: handleItemChange,
        getControlId: getSafeId(
          `${uid}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: getSafeId(
          `${uid}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration,
        disableChevronRotation,
        chevronPosition,
        order,
        chevron,
        loop,
        getStyles: getStyles2,
        variant,
        unstyled
      }
    },
    /* @__PURE__ */ import_react58.default.createElement(Box, { ...getStyles2("root"), id: uid, ...others, variant, "data-accordion": true }, children)
  );
}
var extendAccordion = (c) => c;
Accordion.extend = extendAccordion;
Accordion.classes = classes5;
Accordion.displayName = "@mantine/core/Accordion";
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Control = AccordionControl;
Accordion.Chevron = AccordionChevron;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs
var import_react60 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Text/Text.mjs
var import_react59 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Text/Text.module.css.mjs
"use client";
var classes6 = { "root": "m-b6d8b162" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Text/Text.mjs
"use client";
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps10 = {
  inherit: false
};
var varsResolver4 = createVarsResolver(
  (theme, { variant, lineClamp, gradient, size: size3, color }) => ({
    root: {
      "--text-fz": getFontSize(size3),
      "--text-lh": getLineHeight(size3),
      "--text-gradient": variant === "gradient" ? getGradient(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--text-color": color ? getThemeColor(color, theme) : void 0
    }
  })
);
var Text = polymorphicFactory((_props, ref) => {
  const props = useProps("Text", defaultProps10, _props);
  const {
    lineClamp,
    truncate,
    inline: inline3,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size: size3,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: ["Text", __staticSelector],
    props,
    classes: classes6,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
  });
  return /* @__PURE__ */ import_react59.default.createElement(
    Box,
    {
      ...getStyles2("root", { focusable: true }),
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline3,
          "data-inherit": inherit
        },
        mod
      ],
      size: size3,
      ...others
    }
  );
});
Text.classes = classes6;
Text.displayName = "@mantine/core/Text";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Anchor/Anchor.module.css.mjs
"use client";
var classes7 = { "root": "m-849cf0da" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs
"use client";
var defaultProps11 = {
  underline: "hover"
};
var Anchor = polymorphicFactory((props, ref) => {
  const { underline, className, unstyled, mod, ...others } = useProps(
    "Anchor",
    defaultProps11,
    props
  );
  return /* @__PURE__ */ import_react60.default.createElement(
    Text,
    {
      component: "a",
      ref,
      className: clsx_default({ [classes7.root]: !unstyled }, className),
      ...others,
      mod: [{ underline }, mod],
      __staticSelector: "Anchor",
      unstyled
    }
  );
});
Anchor.classes = classes7;
Anchor.displayName = "@mantine/core/Anchor";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs
var import_react78 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs
"use client";
var elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs
var import_react61 = __toESM(require_react(), 1);
"use client";
var [AppShellProvider, useAppShellContext] = createSafeContext(
  "AppShell was not found in tree"
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellAside/AppShellAside.mjs
var import_react62 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs
"use client";
var classes8 = { "root": "m-89ab340", "navbar": "m-45252eee", "aside": "m-9cdde9a", "header": "m-3b16f56b", "main": "m-8983817", "footer": "m-3840c879", "section": "m-6dcfc7c7" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellAside/AppShellAside.mjs
"use client";
var defaultProps12 = {};
var AppShellAside = factory((_props, ref) => {
  const props = useProps("AppShellAside", defaultProps12, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react62.default.createElement(
    Box,
    {
      component: "aside",
      ref,
      mod: [{ "with-border": withBorder ?? ctx.withBorder }, mod],
      ...ctx.getStyles("aside", { className, classNames, styles, style }),
      ...others,
      __vars: {
        "--app-shell-aside-z-index": `calc(${zIndex ?? ctx.zIndex} + 1)`
      }
    }
  );
});
AppShellAside.classes = classes8;
AppShellAside.displayName = "@mantine/core/AppShellAside";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellFooter/AppShellFooter.mjs
var import_react64 = __toESM(require_react(), 1);

// node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React30 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var React26 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/.pnpm/use-callback-ref@1.3.1_@types+react@18.2.52_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/.pnpm/use-callback-ref@1.3.1_@types+react@18.2.52_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react63 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react63.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/.pnpm/use-callback-ref@1.3.1_@types+react@18.2.52_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React24 = __toESM(require_react());
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef2(ref, newValue);
    });
  });
  React24.useLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef2(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef2(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.52_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.52_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
var React25 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React25.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React26.forwardRef(function(props, parentRef) {
  var ref = React26.useRef(null);
  var _a = React26.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container2 = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React26.createElement(
    React26.Fragment,
    null,
    enabled && React26.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React26.cloneElement(React26.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React26.createElement(Container2, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React29 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React28 = __toESM(require_react());

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.52_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var React27 = __toESM(require_react());

// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.52_react@18.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.52_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React27.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.52_react@18.2.0/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React28.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React28.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React29.useRef([]);
  var touchStartRef = React29.useRef([0, 0]);
  var activeAxis = React29.useRef();
  var id = React29.useState(idCounter++)[0];
  var Style2 = React29.useState(styleSingleton)[0];
  var lastProps = React29.useRef(props);
  React29.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React29.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React29.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React29.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React29.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React29.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React29.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React29.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React29.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React29.createElement(
    React29.Fragment,
    null,
    inert ? React29.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React29.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.52_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React30.forwardRef(function(props, ref) {
  return React30.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellFooter/AppShellFooter.mjs
"use client";
var defaultProps13 = {};
var AppShellFooter = factory((_props, ref) => {
  const props = useProps("AppShellFooter", defaultProps13, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react64.default.createElement(
    Box,
    {
      component: "footer",
      ref,
      mod: [{ "with-border": withBorder ?? ctx.withBorder }, mod],
      ...ctx.getStyles("footer", {
        className: clsx_default({ [Combination_default.classNames.zeroRight]: ctx.offsetScrollbars }, className),
        classNames,
        styles,
        style
      }),
      ...others,
      __vars: { "--app-shell-footer-z-index": (zIndex ?? ctx.zIndex)?.toString() }
    }
  );
});
AppShellFooter.classes = classes8;
AppShellFooter.displayName = "@mantine/core/AppShellFooter";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellHeader/AppShellHeader.mjs
var import_react65 = __toESM(require_react(), 1);
"use client";
var defaultProps14 = {};
var AppShellHeader = factory((_props, ref) => {
  const props = useProps("AppShellHeader", defaultProps14, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react65.default.createElement(
    Box,
    {
      component: "header",
      ref,
      mod: [{ "with-border": withBorder ?? ctx.withBorder }, mod],
      ...ctx.getStyles("header", {
        className: clsx_default({ [Combination_default.classNames.zeroRight]: ctx.offsetScrollbars }, className),
        classNames,
        styles,
        style
      }),
      ...others,
      __vars: { "--app-shell-header-z-index": (zIndex ?? ctx.zIndex)?.toString() }
    }
  );
});
AppShellHeader.classes = classes8;
AppShellHeader.displayName = "@mantine/core/AppShellHeader";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMain/AppShellMain.mjs
var import_react66 = __toESM(require_react(), 1);
"use client";
var defaultProps15 = {};
var AppShellMain = factory((_props, ref) => {
  const props = useProps("AppShellMain", defaultProps15, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useAppShellContext();
  return /* @__PURE__ */ import_react66.default.createElement(
    Box,
    {
      component: "main",
      ref,
      ...ctx.getStyles("main", { className, style, classNames, styles }),
      ...others
    }
  );
});
AppShellMain.classes = classes8;
AppShellMain.displayName = "@mantine/core/AppShellMain";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/AppShellMediaStyles.mjs
var import_react74 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-variables/get-variables.mjs
var import_react73 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs
"use client";
function getBreakpointValue2(breakpoint, theme) {
  if (breakpoint in theme.breakpoints) {
    return px(theme.breakpoints[breakpoint]);
  }
  return px(breakpoint);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs
"use client";
function getSortedBreakpoints(breakpoints, theme) {
  const convertedBreakpoints = breakpoints.map((breakpoint) => ({
    value: breakpoint,
    px: getBreakpointValue2(breakpoint, theme)
  }));
  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.mjs
var import_react67 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs
"use client";
function getBaseSize(size3) {
  if (typeof size3 === "object") {
    return size3.base;
  }
  return size3;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs
"use client";
function isPrimitiveSize(size3) {
  const isBaseSize = typeof size3 === "object" && size3 !== null && typeof size3.base !== "undefined" && Object.keys(size3).length === 1;
  return typeof size3 === "number" || typeof size3 === "string" || isBaseSize;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs
"use client";
function isResponsiveSize(size3) {
  if (typeof size3 !== "object" || size3 === null) {
    return false;
  }
  if (Object.keys(size3).length === 1 && "base" in size3) {
    return false;
  }
  return true;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.mjs
"use client";
function assignAsideVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  aside,
  theme
}) {
  const asideWidth = aside?.width;
  const collapsedAsideTransform = "translateX(var(--app-shell-aside-width))";
  const collapsedAsideTransformRtl = "translateX(calc(var(--app-shell-aside-width) * -1))";
  if (aside?.breakpoint && !aside?.collapsed?.mobile) {
    maxMediaStyles[aside?.breakpoint] = maxMediaStyles[aside?.breakpoint] || {};
    maxMediaStyles[aside?.breakpoint]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[aside?.breakpoint]["--app-shell-aside-offset"] = "0px";
  }
  if (isPrimitiveSize(asideWidth)) {
    const baseSize = rem(getBaseSize(asideWidth));
    baseStyles["--app-shell-aside-width"] = baseSize;
    baseStyles["--app-shell-aside-offset"] = baseSize;
  }
  if (isResponsiveSize(asideWidth)) {
    if (typeof asideWidth.base !== "undefined") {
      baseStyles["--app-shell-aside-width"] = rem(asideWidth.base);
      baseStyles["--app-shell-aside-offset"] = rem(asideWidth.base);
    }
    keys(asideWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-aside-width"] = rem(asideWidth[key]);
        minMediaStyles[key]["--app-shell-aside-offset"] = rem(asideWidth[key]);
      }
    });
  }
  if (aside?.collapsed?.desktop) {
    const breakpointValue = aside.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    minMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px !important";
  }
  if (aside?.collapsed?.mobile) {
    const breakpointValue = getBreakpointValue2(aside.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
  }
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-footer-variables/assign-footer-variables.mjs
var import_react68 = __toESM(require_react(), 1);
"use client";
function assignFooterVariables({
  baseStyles,
  minMediaStyles,
  footer
}) {
  const footerHeight = footer?.height;
  const collapsedFooterTransform = "translateY(var(--app-shell-footer-height))";
  const shouldOffset = footer?.offset ?? true;
  if (isPrimitiveSize(footerHeight)) {
    const baseSize = rem(getBaseSize(footerHeight));
    baseStyles["--app-shell-footer-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-footer-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(footerHeight)) {
    if (typeof footerHeight.base !== "undefined") {
      baseStyles["--app-shell-footer-height"] = rem(footerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-footer-offset"] = rem(footerHeight.base);
      }
    }
    keys(footerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-footer-height"] = rem(footerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-footer-offset"] = rem(footerHeight[key]);
        }
      }
    });
  }
  if (footer?.collapsed) {
    baseStyles["--app-shell-footer-transform"] = collapsedFooterTransform;
    baseStyles["--app-shell-footer-offset"] = "0px !important";
  }
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-header-variables/assign-header-variables.mjs
var import_react69 = __toESM(require_react(), 1);
"use client";
function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header
}) {
  const headerHeight = header?.height;
  const collapsedHeaderTransform = "translateY(calc(var(--app-shell-header-height) * -1))";
  const shouldOffset = header?.offset ?? true;
  if (isPrimitiveSize(headerHeight)) {
    const baseSize = rem(getBaseSize(headerHeight));
    baseStyles["--app-shell-header-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-header-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== "undefined") {
      baseStyles["--app-shell-header-height"] = rem(headerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-header-offset"] = rem(headerHeight.base);
      }
    }
    keys(headerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-header-height"] = rem(headerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-header-offset"] = rem(headerHeight[key]);
        }
      }
    });
  }
  if (header?.collapsed) {
    baseStyles["--app-shell-header-transform"] = collapsedHeaderTransform;
    baseStyles["--app-shell-header-offset"] = "0px !important";
  }
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-navbar-variables/assign-navbar-variables.mjs
var import_react70 = __toESM(require_react(), 1);
"use client";
function assignNavbarVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  navbar,
  theme
}) {
  const navbarWidth = navbar?.width;
  const collapsedNavbarTransform = "translateX(calc(var(--app-shell-navbar-width) * -1))";
  const collapsedNavbarTransformRtl = "translateX(var(--app-shell-navbar-width))";
  if (navbar?.breakpoint && !navbar?.collapsed?.mobile) {
    maxMediaStyles[navbar?.breakpoint] = maxMediaStyles[navbar?.breakpoint] || {};
    maxMediaStyles[navbar?.breakpoint]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[navbar?.breakpoint]["--app-shell-navbar-offset"] = "0px";
  }
  if (isPrimitiveSize(navbarWidth)) {
    const baseSize = rem(getBaseSize(navbarWidth));
    baseStyles["--app-shell-navbar-width"] = baseSize;
    baseStyles["--app-shell-navbar-offset"] = baseSize;
  }
  if (isResponsiveSize(navbarWidth)) {
    if (typeof navbarWidth.base !== "undefined") {
      baseStyles["--app-shell-navbar-width"] = rem(navbarWidth.base);
      baseStyles["--app-shell-navbar-offset"] = rem(navbarWidth.base);
    }
    keys(navbarWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-navbar-width"] = rem(navbarWidth[key]);
        minMediaStyles[key]["--app-shell-navbar-offset"] = rem(navbarWidth[key]);
      }
    });
  }
  if (navbar?.collapsed?.desktop) {
    const breakpointValue = navbar.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px !important";
  }
  if (navbar?.collapsed?.mobile) {
    const breakpointValue = getBreakpointValue2(navbar.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
  }
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.mjs
var import_react72 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-padding-value/get-padding-value.mjs
var import_react71 = __toESM(require_react(), 1);
"use client";
function getPaddingValue(padding) {
  return Number(padding) === 0 ? "0px" : getSpacing(padding);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.mjs
"use client";
function assignPaddingVariables({
  padding,
  baseStyles,
  minMediaStyles
}) {
  if (isPrimitiveSize(padding)) {
    baseStyles["--app-shell-padding"] = getPaddingValue(getBaseSize(padding));
  }
  if (isResponsiveSize(padding)) {
    if (padding.base) {
      baseStyles["--app-shell-padding"] = getPaddingValue(padding.base);
    }
    keys(padding).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-padding"] = getPaddingValue(padding[key]);
      }
    });
  }
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-variables/get-variables.mjs
"use client";
function getVariables({ navbar, header, footer, aside, padding, theme }) {
  const minMediaStyles = {};
  const maxMediaStyles = {};
  const baseStyles = {};
  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme
  });
  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    aside,
    theme
  });
  assignHeaderVariables({ baseStyles, minMediaStyles, header });
  assignFooterVariables({ baseStyles, minMediaStyles, footer });
  assignPaddingVariables({ baseStyles, minMediaStyles, padding });
  const minMedia = getSortedBreakpoints(keys(minMediaStyles), theme).map((breakpoint) => ({
    query: `(min-width: ${em(breakpoint.px)})`,
    styles: minMediaStyles[breakpoint.value]
  }));
  const maxMedia = getSortedBreakpoints(keys(maxMediaStyles), theme).map((breakpoint) => ({
    query: `(max-width: ${em(breakpoint.px)})`,
    styles: maxMediaStyles[breakpoint.value]
  }));
  const media = [...minMedia, ...maxMedia];
  return { baseStyles, media };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/AppShellMediaStyles.mjs
"use client";
function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding
}) {
  const theme = useMantineTheme();
  const ctx = useMantineContext();
  const { media, baseStyles } = getVariables({ navbar, header, footer, aside, padding, theme });
  return /* @__PURE__ */ import_react74.default.createElement(InlineStyles, { media, styles: baseStyles, selector: ctx.cssVariablesSelector });
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellNavbar/AppShellNavbar.mjs
var import_react75 = __toESM(require_react(), 1);
"use client";
var defaultProps16 = {};
var AppShellNavbar = factory((_props, ref) => {
  const props = useProps("AppShellNavbar", defaultProps16, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react75.default.createElement(
    Box,
    {
      component: "nav",
      ref,
      mod: [{ "with-border": withBorder ?? ctx.withBorder }, mod],
      ...ctx.getStyles("navbar", { className, classNames, styles, style }),
      ...others,
      __vars: {
        "--app-shell-navbar-z-index": `calc(${zIndex ?? ctx.zIndex} + 1)`
      }
    }
  );
});
AppShellNavbar.classes = classes8;
AppShellNavbar.displayName = "@mantine/core/AppShellNavbar";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShellSection/AppShellSection.mjs
var import_react76 = __toESM(require_react(), 1);
"use client";
var defaultProps17 = {};
var AppShellSection = polymorphicFactory((_props, ref) => {
  const props = useProps("AppShellSection", defaultProps17, _props);
  const { classNames, className, style, styles, vars, grow, mod, ...others } = props;
  const ctx = useAppShellContext();
  return /* @__PURE__ */ import_react76.default.createElement(
    Box,
    {
      ref,
      mod: [{ grow }, mod],
      ...ctx.getStyles("section", { className, style, classNames, styles }),
      ...others
    }
  );
});
AppShellSection.classes = classes8;
AppShellSection.displayName = "@mantine/core/AppShellSection";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/use-resizing/use-resizing.mjs
var import_react77 = __toESM(require_react(), 1);
"use client";
function useResizing({ transitionDuration, disabled }) {
  const [resizing, setResizing] = (0, import_react77.useState)(false);
  const resizingTimeout = (0, import_react77.useRef)();
  const disabledTimeout = (0, import_react77.useRef)();
  useWindowEvent("resize", () => {
    setResizing(true);
    clearTimeout(resizingTimeout.current);
    resizingTimeout.current = window.setTimeout(() => setResizing(false), 200);
  });
  useIsomorphicEffect(() => {
    setResizing(true);
    clearTimeout(disabledTimeout.current);
    disabledTimeout.current = window.setTimeout(() => setResizing(false), transitionDuration || 0);
  }, [disabled, transitionDuration]);
  return resizing;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs
"use client";
var defaultProps18 = {
  withBorder: true,
  offsetScrollbars: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  zIndex: getDefaultZIndex("app")
};
var varsResolver5 = createVarsResolver(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--app-shell-transition-duration": `${transitionDuration}ms`,
      "--app-shell-transition-timing-function": transitionTimingFunction
    }
  })
);
var AppShell = factory((_props, ref) => {
  const props = useProps("AppShell", defaultProps18, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    layout,
    disabled,
    aside,
    footer,
    offsetScrollbars,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "AppShell",
    classes: classes8,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5
  });
  const resizing = useResizing({ disabled, transitionDuration });
  return /* @__PURE__ */ import_react78.default.createElement(AppShellProvider, { value: { getStyles: getStyles2, withBorder, zIndex, disabled, offsetScrollbars } }, /* @__PURE__ */ import_react78.default.createElement(
    AppShellMediaStyles,
    {
      navbar,
      header,
      aside,
      footer,
      padding
    }
  ), /* @__PURE__ */ import_react78.default.createElement(
    Box,
    {
      ref,
      ...getStyles2("root"),
      mod: [{ resizing, layout, disabled }, mod],
      ...others
    }
  ));
});
AppShell.classes = classes8;
AppShell.displayName = "@mantine/core/AppShell";
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Burger/Burger.mjs
var import_react79 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Burger/Burger.module.css.mjs
"use client";
var classes9 = { "root": "m-fea6bf1a", "burger": "m-d4fb9cad" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Burger/Burger.mjs
"use client";
var defaultProps19 = {};
var varsResolver6 = createVarsResolver(
  (theme, { color, size: size3, transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--burger-color": color ? getThemeColor(color, theme) : void 0,
      "--burger-size": getSize(size3, "burger-size"),
      "--burger-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--burger-transition-timing-function": transitionTimingFunction
    }
  })
);
var Burger = factory((_props, ref) => {
  const props = useProps("Burger", defaultProps19, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    children,
    transitionDuration,
    transitionTimingFunction,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Burger",
    classes: classes9,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  return /* @__PURE__ */ import_react79.default.createElement(UnstyledButton, { ...getStyles2("root"), ref, ...others }, /* @__PURE__ */ import_react79.default.createElement(Box, { mod: ["reduce-motion", { opened }], ...getStyles2("burger") }), children);
});
Burger.classes = classes9;
Burger.displayName = "@mantine/core/Burger";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Button/Button.mjs
var import_react85 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Loader/Loader.mjs
var import_react83 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
var import_react80 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs
"use client";
var classes10 = { "root": "m-5ae2e3c", "barsLoader": "m-7a2bd4cd", "bar": "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", "dotsLoader": "m-4e3f22d7", "dot": "m-870c4af", "loader-dots-animation": "m-aac34a1", "ovalLoader": "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
"use client";
var Bars = (0, import_react80.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ import_react80.default.createElement(Box, { component: "span", className: clsx_default(classes10.barsLoader, className), ...others, ref }, /* @__PURE__ */ import_react80.default.createElement("span", { className: classes10.bar }), /* @__PURE__ */ import_react80.default.createElement("span", { className: classes10.bar }), /* @__PURE__ */ import_react80.default.createElement("span", { className: classes10.bar })));

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs
var import_react81 = __toESM(require_react(), 1);
"use client";
var Dots = (0, import_react81.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ import_react81.default.createElement(Box, { component: "span", className: clsx_default(classes10.dotsLoader, className), ...others, ref }, /* @__PURE__ */ import_react81.default.createElement("span", { className: classes10.dot }), /* @__PURE__ */ import_react81.default.createElement("span", { className: classes10.dot }), /* @__PURE__ */ import_react81.default.createElement("span", { className: classes10.dot })));

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs
var import_react82 = __toESM(require_react(), 1);
"use client";
var Oval = (0, import_react82.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ import_react82.default.createElement(Box, { component: "span", className: clsx_default(classes10.ovalLoader, className), ...others, ref }));

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Loader/Loader.mjs
"use client";
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps20 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver7 = createVarsResolver((theme, { size: size3, color }) => ({
  root: {
    "--loader-size": getSize(size3, "loader-size"),
    "--loader-color": color ? getThemeColor(color, theme) : void 0
  }
}));
var Loader = factory((_props, ref) => {
  const props = useProps("Loader", defaultProps20, _props);
  const {
    size: size3,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    children,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Loader",
    props,
    classes: classes10,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7
  });
  if (children) {
    return /* @__PURE__ */ import_react83.default.createElement(Box, { ...getStyles2("root"), ref, ...others }, children);
  }
  return /* @__PURE__ */ import_react83.default.createElement(
    Box,
    {
      ...getStyles2("root"),
      ref,
      component: loaders[type],
      variant,
      size: size3,
      ...others
    }
  );
});
Loader.defaultLoaders = defaultLoaders;
Loader.classes = classes10;
Loader.displayName = "@mantine/core/Loader";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
var import_react84 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs
"use client";
var classes11 = { "root": "m-77c9d27d", "inner": "m-80f1301b", "loader": "m-a25b86ee", "label": "m-811560b9", "section": "m-a74036a", "group": "m-80d6d844" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
"use client";
var defaultProps21 = {
  orientation: "horizontal"
};
var varsResolver8 = createVarsResolver((_, { borderWidth }) => ({
  group: { "--button-border-width": rem(borderWidth) }
}));
var ButtonGroup = factory((_props, ref) => {
  const props = useProps("ButtonGroup", defaultProps21, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = useProps("ButtonGroup", defaultProps21, _props);
  const getStyles2 = useStyles({
    name: "ButtonGroup",
    props,
    classes: classes11,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8,
    rootSelector: "group"
  });
  return /* @__PURE__ */ import_react84.default.createElement(
    Box,
    {
      ...getStyles2("group"),
      ref,
      variant,
      mod: [{ "data-orientation": orientation }, mod],
      role: "group",
      ...others
    }
  );
});
ButtonGroup.classes = classes11;
ButtonGroup.displayName = "@mantine/core/ButtonGroup";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Button/Button.mjs
"use client";
var defaultProps22 = {};
var varsResolver9 = createVarsResolver(
  (theme, { radius, color, gradient, variant, size: size3, justify, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize(size3, "button-height"),
        "--button-padding-x": getSize(size3, "button-padding-x"),
        "--button-fz": size3?.includes("compact") ? getFontSize(size3.replace("compact-", "")) : getFontSize(size3),
        "--button-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": colors.color,
        "--button-bd": color || variant ? colors.border : void 0,
        "--button-hover-color": color || variant ? colors.hoverColor : void 0
      }
    };
  }
);
var Button = polymorphicFactory((_props, ref) => {
  const props = useProps("Button", defaultProps22, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Button",
    props,
    classes: classes11,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver9
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ import_react85.default.createElement(
    UnstyledButton,
    {
      ref,
      ...getStyles2("root", { active: !disabled && !loading && !dataDisabled }),
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        },
        mod
      ],
      ...others
    },
    /* @__PURE__ */ import_react85.default.createElement(Box, { component: "span", ...getStyles2("loader"), "aria-hidden": true }, /* @__PURE__ */ import_react85.default.createElement(
      Loader,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...loaderProps
      }
    )),
    /* @__PURE__ */ import_react85.default.createElement("span", { ...getStyles2("inner") }, leftSection && /* @__PURE__ */ import_react85.default.createElement(Box, { component: "span", ...getStyles2("section"), mod: { position: "left" } }, leftSection), /* @__PURE__ */ import_react85.default.createElement(Box, { component: "span", mod: { loading }, ...getStyles2("label") }, children), rightSection && /* @__PURE__ */ import_react85.default.createElement(Box, { component: "span", ...getStyles2("section"), mod: { position: "right" } }, rightSection))
  );
});
Button.classes = classes11;
Button.displayName = "@mantine/core/Button";
Button.Group = ButtonGroup;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Center/Center.mjs
var import_react86 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Center/Center.module.css.mjs
"use client";
var classes12 = { "root": "m-4451eb3a" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Center/Center.mjs
"use client";
var defaultProps23 = {};
var Center = polymorphicFactory((_props, ref) => {
  const props = useProps("Center", defaultProps23, _props);
  const { classNames, className, style, styles, unstyled, vars, inline: inline3, mod, ...others } = props;
  const getStyles2 = useStyles({
    name: "Center",
    props,
    classes: classes12,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  return /* @__PURE__ */ import_react86.default.createElement(Box, { ref, mod: [{ inline: inline3 }, mod], ...getStyles2("root"), ...others });
});
Center.classes = classes12;
Center.displayName = "@mantine/core/Center";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Container/Container.mjs
var import_react87 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs
"use client";
var classes13 = { "root": "m-7485cace" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Container/Container.mjs
"use client";
var defaultProps24 = {};
var varsResolver10 = createVarsResolver((_, { size: size3, fluid }) => ({
  root: {
    "--container-size": fluid ? void 0 : getSize(size3, "container-size")
  }
}));
var Container = factory((_props, ref) => {
  const props = useProps("Container", defaultProps24, _props);
  const { classNames, className, style, styles, unstyled, vars, fluid, mod, ...others } = props;
  const getStyles2 = useStyles({
    name: "Container",
    classes: classes13,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver10
  });
  return /* @__PURE__ */ import_react87.default.createElement(Box, { ref, mod: [{ fluid }, mod], ...getStyles2("root"), ...others });
});
Container.classes = classes13;
Container.displayName = "@mantine/core/Container";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/Grid.mjs
var import_react92 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/Grid.context.mjs
var import_react88 = __toESM(require_react(), 1);
"use client";
var [GridProvider, useGridContext] = createSafeContext(
  "Grid component was not found in tree"
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/GridCol/GridCol.mjs
var import_react90 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/GridCol/GridColVariables.mjs
var import_react89 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/get-base-value/get-base-value.mjs
"use client";
function getBaseValue2(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/GridCol/GridColVariables.mjs
"use client";
var getColumnFlexBasis = (colSpan, columns) => {
  if (colSpan === "content") {
    return "auto";
  }
  if (colSpan === "auto") {
    return "0rem";
  }
  return colSpan ? `${100 / (columns / colSpan)}%` : void 0;
};
var getColumnMaxWidth = (colSpan, columns, grow) => {
  if (grow || colSpan === "auto") {
    return "100%";
  }
  if (colSpan === "content") {
    return "unset";
  }
  return getColumnFlexBasis(colSpan, columns);
};
var getColumnFlexGrow = (colSpan, grow) => {
  if (!colSpan) {
    return void 0;
  }
  return colSpan === "auto" || grow ? "1" : "auto";
};
var getColumnOffset = (offset2, columns) => offset2 === 0 ? "0" : offset2 ? `${100 / (columns / offset2)}%` : void 0;
function GridColVariables({ span, order, offset: offset2, selector }) {
  const theme = useMantineTheme();
  const ctx = useGridContext();
  const baseValue = getBaseValue2(span);
  const baseSpan = baseValue === void 0 ? 12 : getBaseValue2(span);
  const baseStyles = filterProps({
    "--col-order": getBaseValue2(order)?.toString(),
    "--col-flex-grow": getColumnFlexGrow(baseSpan, ctx.grow),
    "--col-flex-basis": getColumnFlexBasis(baseSpan, ctx.columns),
    "--col-width": baseSpan === "content" ? "auto" : void 0,
    "--col-max-width": getColumnMaxWidth(baseSpan, ctx.columns, ctx.grow),
    "--col-offset": getColumnOffset(getBaseValue2(offset2), ctx.columns)
  });
  const queries = keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof order === "object" && order[breakpoint] !== void 0) {
        acc[breakpoint]["--col-order"] = order[breakpoint]?.toString();
      }
      if (typeof span === "object" && span[breakpoint] !== void 0) {
        acc[breakpoint]["--col-flex-grow"] = getColumnFlexGrow(span[breakpoint], ctx.grow);
        acc[breakpoint]["--col-flex-basis"] = getColumnFlexBasis(span[breakpoint], ctx.columns);
        acc[breakpoint]["--col-width"] = span[breakpoint] === "content" ? "auto" : void 0;
        acc[breakpoint]["--col-max-width"] = getColumnMaxWidth(
          span[breakpoint],
          ctx.columns,
          ctx.grow
        );
      }
      if (typeof offset2 === "object" && offset2[breakpoint] !== void 0) {
        acc[breakpoint]["--col-offset"] = getColumnOffset(offset2[breakpoint], ctx.columns);
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ import_react89.default.createElement(InlineStyles, { styles: baseStyles, media, selector });
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/Grid.module.css.mjs
"use client";
var classes14 = { "root": "m-410352e9", "inner": "m-dee7bd2f", "col": "m-96bdd299" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/GridCol/GridCol.mjs
"use client";
var defaultProps25 = {
  span: 12
};
var GridCol = factory((_props, ref) => {
  const props = useProps("GridCol", defaultProps25, _props);
  const { classNames, className, style, styles, vars, span, order, offset: offset2, ...others } = props;
  const ctx = useGridContext();
  const responsiveClassName = useRandomClassName();
  return /* @__PURE__ */ import_react90.default.createElement(import_react90.default.Fragment, null, /* @__PURE__ */ import_react90.default.createElement(
    GridColVariables,
    {
      selector: `.${responsiveClassName}`,
      span,
      order,
      offset: offset2
    }
  ), /* @__PURE__ */ import_react90.default.createElement(
    Box,
    {
      ref,
      ...ctx.getStyles("col", {
        className: clsx_default(className, responsiveClassName),
        style,
        classNames,
        styles
      }),
      ...others
    }
  ));
});
GridCol.classes = classes14;
GridCol.displayName = "@mantine/core/GridCol";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/GridVariables.mjs
var import_react91 = __toESM(require_react(), 1);
"use client";
function GridVariables({ gutter, selector }) {
  const theme = useMantineTheme();
  const baseStyles = filterProps({
    "--grid-gutter": getSpacing(getBaseValue2(gutter))
  });
  const queries = keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof gutter === "object" && gutter[breakpoint] !== void 0) {
        acc[breakpoint]["--grid-gutter"] = getSpacing(gutter[breakpoint]);
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ import_react91.default.createElement(InlineStyles, { styles: baseStyles, media, selector });
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/Grid.mjs
"use client";
var defaultProps26 = {
  gutter: "md",
  grow: false,
  columns: 12
};
var varsResolver11 = createVarsResolver((_, { justify, align, overflow }) => ({
  root: {
    "--grid-justify": justify,
    "--grid-align": align,
    "--grid-overflow": overflow
  }
}));
var Grid = factory((_props, ref) => {
  const props = useProps("Grid", defaultProps26, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    grow,
    gutter,
    columns,
    align,
    justify,
    children,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Grid",
    classes: classes14,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver11
  });
  const responsiveClassName = useRandomClassName();
  return /* @__PURE__ */ import_react92.default.createElement(GridProvider, { value: { getStyles: getStyles2, grow, columns } }, /* @__PURE__ */ import_react92.default.createElement(GridVariables, { selector: `.${responsiveClassName}`, ...props }), /* @__PURE__ */ import_react92.default.createElement(Box, { ref, ...getStyles2("root", { className: responsiveClassName }), ...others }, /* @__PURE__ */ import_react92.default.createElement("div", { ...getStyles2("inner") }, children)));
});
Grid.classes = classes14;
Grid.displayName = "@mantine/core/Grid";
Grid.Col = GridCol;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs
var import_react107 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs
var import_react93 = __toESM(require_react(), 1);
"use client";
function useResolvedStylesApi({
  classNames,
  styles,
  props,
  stylesCtx
}) {
  const theme = useMantineTheme();
  return {
    resolvedClassNames: resolveClassNames({
      theme,
      classNames,
      props,
      stylesCtx: stylesCtx || void 0
    }),
    resolvedStyles: resolveStyles({
      theme,
      styles,
      props,
      stylesCtx: stylesCtx || void 0
    })
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs
var import_react95 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIconGroup/ActionIconGroup.mjs
var import_react94 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.module.css.mjs
"use client";
var classes15 = { "root": "m-8d3f4000", "loader": "m-302b9fb1", "icon": "m-8d3afb97", "group": "m-1a0f1b21" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIconGroup/ActionIconGroup.mjs
"use client";
var defaultProps27 = {
  orientation: "horizontal"
};
var varsResolver12 = createVarsResolver((_, { borderWidth }) => ({
  group: { "--ai-border-width": rem(borderWidth) }
}));
var ActionIconGroup = factory((_props, ref) => {
  const props = useProps("ActionIconGroup", defaultProps27, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = useProps("ActionIconGroup", defaultProps27, _props);
  const getStyles2 = useStyles({
    name: "ActionIconGroup",
    props,
    classes: classes15,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver12,
    rootSelector: "group"
  });
  return /* @__PURE__ */ import_react94.default.createElement(
    Box,
    {
      ...getStyles2("group"),
      ref,
      variant,
      mod: [{ "data-orientation": orientation }, mod],
      role: "group",
      ...others
    }
  );
});
ActionIconGroup.classes = classes15;
ActionIconGroup.displayName = "@mantine/core/ActionIconGroup";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs
"use client";
var defaultProps28 = {};
var varsResolver13 = createVarsResolver(
  (theme, { size: size3, radius, variant, gradient, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--ai-size": getSize(size3, "ai-size"),
        "--ai-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--ai-bg": color || variant ? colors.background : void 0,
        "--ai-hover": color || variant ? colors.hover : void 0,
        "--ai-hover-color": color || variant ? colors.hoverColor : void 0,
        "--ai-color": colors.color,
        "--ai-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ActionIcon = polymorphicFactory((_props, ref) => {
  const props = useProps("ActionIcon", defaultProps28, _props);
  const {
    className,
    unstyled,
    variant,
    classNames,
    styles,
    style,
    loading,
    loaderProps,
    size: size3,
    color,
    radius,
    __staticSelector,
    gradient,
    vars,
    children,
    disabled,
    "data-disabled": dataDisabled,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: ["ActionIcon", __staticSelector],
    props,
    className,
    style,
    classes: classes15,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver13
  });
  return /* @__PURE__ */ import_react95.default.createElement(
    UnstyledButton,
    {
      ...getStyles2("root", { active: !disabled && !loading && !dataDisabled }),
      ...others,
      unstyled,
      variant,
      size: size3,
      disabled: disabled || loading,
      ref,
      mod: [{ loading, disabled: disabled || dataDisabled }, mod]
    },
    /* @__PURE__ */ import_react95.default.createElement(Box, { component: "span", ...getStyles2("loader"), "aria-hidden": true }, /* @__PURE__ */ import_react95.default.createElement(Loader, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...loaderProps })),
    /* @__PURE__ */ import_react95.default.createElement(Box, { component: "span", mod: { loading }, ...getStyles2("icon") }, children)
  );
});
ActionIcon.classes = classes15;
ActionIcon.displayName = "@mantine/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/Input.mjs
var import_react103 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs
var import_react98 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs
var import_react97 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs
var import_react96 = __toESM(require_react(), 1);
"use client";
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react96.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react96.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react96.default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs
"use client";
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs
"use client";
var classes16 = { "wrapper": "m-6c018570", "input": "m-8fb7ebe7", "section": "m-82577fc2", "placeholder": "m-88bacfd0", "root": "m-46b77525", "label": "m-8fdc1311", "required": "m-78a94662", "error": "m-8f816625", "description": "m-fe47ce59" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs
"use client";
var defaultProps29 = {};
var varsResolver14 = createVarsResolver((_, { size: size3 }) => ({
  description: {
    "--input-description-size": size3 === void 0 ? void 0 : `calc(${getFontSize(size3)} - ${rem(2)})`
  }
}));
var InputDescription = factory((_props, ref) => {
  const props = useProps("InputDescription", defaultProps29, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size3,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = useProps("InputDescription", defaultProps29, props);
  const ctx = useInputWrapperContext();
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes16,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "description",
    vars,
    varsResolver: varsResolver14
  });
  const getStyles2 = __inheritStyles && ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ import_react98.default.createElement(
    Box,
    {
      component: "p",
      ref,
      variant,
      size: size3,
      ...getStyles2("description"),
      ...others
    }
  );
});
InputDescription.classes = classes16;
InputDescription.displayName = "@mantine/core/InputDescription";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs
var import_react99 = __toESM(require_react(), 1);
"use client";
var defaultProps30 = {};
var varsResolver15 = createVarsResolver((_, { size: size3 }) => ({
  error: {
    "--input-error-size": size3 === void 0 ? void 0 : `calc(${getFontSize(size3)} - ${rem(2)})`
  }
}));
var InputError = factory((_props, ref) => {
  const props = useProps("InputError", defaultProps30, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size3,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = props;
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes16,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver15
  });
  const ctx = useInputWrapperContext();
  const getStyles2 = __inheritStyles && ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ import_react99.default.createElement(
    Box,
    {
      component: "p",
      ref,
      variant,
      size: size3,
      ...getStyles2("error"),
      ...others
    }
  );
});
InputError.classes = classes16;
InputError.displayName = "@mantine/core/InputError";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs
var import_react100 = __toESM(require_react(), 1);
"use client";
var defaultProps31 = {
  labelElement: "label"
};
var varsResolver16 = createVarsResolver((_, { size: size3 }) => ({
  label: {
    "--input-label-size": getFontSize(size3),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = factory((_props, ref) => {
  const props = useProps("InputLabel", defaultProps31, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size: size3,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant,
    mod,
    ...others
  } = useProps("InputLabel", defaultProps31, props);
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes16,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: varsResolver16
  });
  const ctx = useInputWrapperContext();
  const getStyles2 = ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ import_react100.default.createElement(
    Box,
    {
      ...getStyles2("label"),
      component: labelElement,
      variant,
      size: size3,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: [{ required }, mod],
      onMouseDown: (event) => {
        onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      },
      ...others
    },
    children,
    required && /* @__PURE__ */ import_react100.default.createElement("span", { ...getStyles2("required"), "aria-hidden": true }, " *")
  );
});
InputLabel.classes = classes16;
InputLabel.displayName = "@mantine/core/InputLabel";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputPlaceholder/InputPlaceholder.mjs
var import_react101 = __toESM(require_react(), 1);
"use client";
var defaultProps32 = {};
var InputPlaceholder = factory((_props, ref) => {
  const props = useProps("InputPlaceholder", defaultProps32, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    variant,
    error,
    mod,
    ...others
  } = useProps("InputPlaceholder", defaultProps32, props);
  const getStyles2 = useStyles({
    name: ["InputPlaceholder", __staticSelector],
    props,
    classes: classes16,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ import_react101.default.createElement(
    Box,
    {
      ...getStyles2("placeholder"),
      mod: [{ error: !!error }, mod],
      component: "span",
      variant,
      ref,
      ...others
    }
  );
});
InputPlaceholder.classes = classes16;
InputPlaceholder.displayName = "@mantine/core/InputPlaceholder";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs
var import_react102 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputWrapper/get-input-offsets/get-input-offsets.mjs
"use client";
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder[inputIndex - 1];
  const belowInput = inputWrapperOrder[inputIndex + 1];
  const offsetTop = hasDescription && aboveInput === "description" || hasError && aboveInput === "error";
  const offsetBottom = hasDescription && belowInput === "description" || hasError && belowInput === "error";
  return { offsetBottom, offsetTop };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs
"use client";
var defaultProps33 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver17 = createVarsResolver((_, { size: size3 }) => ({
  label: {
    "--input-label-size": getFontSize(size3),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size3 === void 0 ? void 0 : `calc(${getFontSize(size3)} - ${rem(2)})`
  },
  description: {
    "--input-description-size": size3 === void 0 ? void 0 : `calc(${getFontSize(size3)} - ${rem(2)})`
  }
}));
var InputWrapper = factory((_props, ref) => {
  const props = useProps("InputWrapper", defaultProps33, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size3,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes16,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver17
  });
  const sharedProps = {
    size: size3,
    variant,
    __staticSelector
  };
  const idBase = useId(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = errorProps?.id || `${idBase}-error`;
  const descriptionId = descriptionProps?.id || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = labelProps?.id || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ import_react102.default.createElement(
    InputLabel,
    {
      key: "label",
      labelElement,
      id: labelId,
      htmlFor: inputId,
      required: isRequired,
      ...sharedProps,
      ...labelProps
    },
    label
  );
  const _description = hasDescription && /* @__PURE__ */ import_react102.default.createElement(
    InputDescription,
    {
      key: "description",
      ...descriptionProps,
      ...sharedProps,
      size: descriptionProps?.size || sharedProps.size,
      id: descriptionProps?.id || descriptionId
    },
    description
  );
  const _input = /* @__PURE__ */ import_react102.default.createElement(import_react102.default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ import_react102.default.createElement(
    InputError,
    {
      ...errorProps,
      ...sharedProps,
      size: errorProps?.size || sharedProps.size,
      key: "error",
      id: errorProps?.id || errorId
    },
    error
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ import_react102.default.createElement(
    InputWrapperProvider,
    {
      value: {
        getStyles: getStyles2,
        describedBy,
        inputId,
        labelId,
        ...getInputOffsets(inputWrapperOrder, { hasDescription, hasError })
      }
    },
    /* @__PURE__ */ import_react102.default.createElement(
      Box,
      {
        ref,
        variant,
        size: size3,
        mod: [{ error: !!error }, mod],
        ...getStyles2("root"),
        ...others
      },
      content
    )
  );
});
InputWrapper.classes = classes16;
InputWrapper.displayName = "@mantine/core/InputWrapper";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/Input.mjs
"use client";
var defaultProps34 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver18 = createVarsResolver((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": getSize(props.size, "input-height"),
    "--input-fz": getFontSize(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : getRadius(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? getSize(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = polymorphicFactory((_props, ref) => {
  const props = useProps("Input", defaultProps34, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size: size3,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles,
    mod,
    ...others
  } = props;
  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = { offsetBottom: ctx?.offsetBottom, offsetTop: ctx?.offsetTop };
  const getStyles2 = useStyles({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes16,
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver18
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx?.describedBy,
    id: ctx?.inputId || id
  } : {};
  return /* @__PURE__ */ import_react103.default.createElement(
    Box,
    {
      ...getStyles2("wrapper"),
      ...styleProps,
      ...wrapperProps,
      mod: [
        {
          error: !!error && withErrorStyles,
          pointer,
          disabled,
          multiline,
          "data-with-right-section": !!rightSection,
          "data-with-left-section": !!leftSection
        },
        mod
      ],
      variant,
      size: size3
    },
    leftSection && /* @__PURE__ */ import_react103.default.createElement(
      "div",
      {
        ...leftSectionProps,
        "data-position": "left",
        ...getStyles2("section", {
          className: leftSectionProps?.className,
          style: leftSectionProps?.style
        })
      },
      leftSection
    ),
    /* @__PURE__ */ import_react103.default.createElement(
      Box,
      {
        component: "input",
        ...rest,
        ...ariaAttributes,
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant,
        ...getStyles2("input")
      }
    ),
    rightSection && /* @__PURE__ */ import_react103.default.createElement(
      "div",
      {
        ...rightSectionProps,
        "data-position": "right",
        ...getStyles2("section", {
          className: rightSectionProps?.className,
          style: rightSectionProps?.style
        })
      },
      rightSection
    )
  );
});
Input.classes = classes16;
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.displayName = "@mantine/core/Input";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs
var import_react105 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Input/use-input-props.mjs
var import_react104 = __toESM(require_react(), 1);
"use client";
function useInputProps(component, defaultProps54, _props) {
  const props = useProps(component, defaultProps54, _props);
  const {
    label,
    description,
    error,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    __stylesApiProps,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    id,
    size: size3,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    vars,
    mod,
    ...others
  } = props;
  const { styleProps, rest } = extractStyleProps(others);
  const wrapperProps = {
    label,
    description,
    error,
    required,
    classNames,
    className,
    __staticSelector,
    __stylesApiProps: __stylesApiProps || props,
    errorProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles,
    size: size3,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    id,
    mod,
    ..._wrapperProps
  };
  return {
    ...rest,
    classNames,
    styles,
    unstyled,
    wrapperProps: { ...wrapperProps, ...styleProps },
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      size: size3,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error,
      variant,
      id
    }
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs
"use client";
var defaultProps35 = {
  __staticSelector: "InputBase",
  withAria: true
};
var InputBase = polymorphicFactory((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps("InputBase", defaultProps35, props);
  return /* @__PURE__ */ import_react105.default.createElement(Input.Wrapper, { ...wrapperProps }, /* @__PURE__ */ import_react105.default.createElement(Input, { ...inputProps, ...others, ref }));
});
InputBase.classes = { ...Input.classes, ...Input.Wrapper.classes };
InputBase.displayName = "@mantine/core/InputBase";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/PasswordInput/PasswordToggleIcon.mjs
var import_react106 = __toESM(require_react(), 1);
"use client";
var PasswordToggleIcon = ({
  reveal
}) => /* @__PURE__ */ import_react106.default.createElement(
  "svg",
  {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { width: "var(--psi-icon-size)", height: "var(--psi-icon-size)" }
  },
  /* @__PURE__ */ import_react106.default.createElement(
    "path",
    {
      d: reveal ? "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z" : "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  )
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.module.css.mjs
"use client";
var classes17 = { "root": "m-f61ca620", "input": "m-ccf8da4c", "innerInput": "m-f2d85dd2", "visibilityToggle": "m-b1072d44" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs
"use client";
var defaultProps36 = {
  visibilityToggleIcon: PasswordToggleIcon
};
var varsResolver19 = createVarsResolver((_, { size: size3 }) => ({
  root: {
    "--psi-icon-size": getSize(size3, "psi-icon-size"),
    "--psi-button-size": getSize(size3, "psi-button-size")
  }
}));
var PasswordInput = factory((_props, ref) => {
  const props = useProps("PasswordInput", defaultProps36, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    required,
    error,
    leftSection,
    disabled,
    id,
    variant,
    inputContainer,
    description,
    label,
    size: size3,
    errorProps,
    descriptionProps,
    labelProps,
    withAsterisk,
    inputWrapperOrder,
    wrapperProps,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionWidth,
    visible: visible2,
    defaultVisible,
    onVisibilityChange,
    visibilityToggleIcon,
    visibilityToggleButtonProps,
    rightSectionProps,
    leftSectionProps,
    leftSectionPointerEvents,
    mod,
    ...others
  } = props;
  const uuid = useId(id);
  const [_visible, setVisibility] = useUncontrolled({
    value: visible2,
    defaultValue: defaultVisible,
    finalValue: false,
    onChange: onVisibilityChange
  });
  const toggleVisibility = () => setVisibility(!_visible);
  const getStyles2 = useStyles({
    name: "PasswordInput",
    classes: classes17,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver19
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const { styleProps, rest } = extractStyleProps(others);
  const VisibilityToggleIcon = visibilityToggleIcon;
  const visibilityToggleButton = /* @__PURE__ */ import_react107.default.createElement(
    ActionIcon,
    {
      ...getStyles2("visibilityToggle"),
      disabled,
      radius,
      "aria-hidden": !visibilityToggleButtonProps,
      tabIndex: -1,
      ...visibilityToggleButtonProps,
      variant: "subtle",
      color: "gray",
      unstyled,
      onMouseDown: (event) => {
        event.preventDefault();
        visibilityToggleButtonProps?.onMouseDown?.(event);
        toggleVisibility();
      },
      onKeyDown: (event) => {
        visibilityToggleButtonProps?.onKeyDown?.(event);
        if (event.key === " ") {
          event.preventDefault();
          toggleVisibility();
        }
      }
    },
    /* @__PURE__ */ import_react107.default.createElement(VisibilityToggleIcon, { reveal: _visible })
  );
  return /* @__PURE__ */ import_react107.default.createElement(
    Input.Wrapper,
    {
      required,
      id: uuid,
      label,
      error,
      description,
      size: size3,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: "PasswordInput",
      errorProps,
      descriptionProps,
      unstyled,
      withAsterisk,
      inputWrapperOrder,
      inputContainer,
      variant,
      labelProps: { ...labelProps, htmlFor: uuid },
      mod,
      ...getStyles2("root"),
      ...styleProps,
      ...wrapperProps
    },
    /* @__PURE__ */ import_react107.default.createElement(
      Input,
      {
        component: "div",
        error,
        leftSection,
        size: size3,
        classNames: { ...resolvedClassNames, input: clsx_default(classes17.input, resolvedClassNames.input) },
        styles: resolvedStyles,
        radius,
        disabled,
        __staticSelector: "PasswordInput",
        rightSectionWidth,
        rightSection: rightSection ?? visibilityToggleButton,
        variant,
        unstyled,
        leftSectionWidth,
        rightSectionPointerEvents: rightSectionPointerEvents || "all",
        rightSectionProps,
        leftSectionProps,
        leftSectionPointerEvents,
        withAria: false
      },
      /* @__PURE__ */ import_react107.default.createElement(
        "input",
        {
          required,
          "data-invalid": !!error || void 0,
          "data-with-left-section": !!leftSection || void 0,
          ...getStyles2("innerInput"),
          disabled,
          id: uuid,
          ref,
          ...rest,
          autoComplete: rest.autoComplete || "off",
          type: _visible ? "text" : "password"
        }
      )
    )
  );
});
PasswordInput.classes = { ...InputBase.classes, ...classes17 };
PasswordInput.displayName = "@mantine/core/PasswordInput";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs
var import_react108 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stack/Stack.module.css.mjs
"use client";
var classes18 = { "root": "m-6d731127" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs
"use client";
var defaultProps37 = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
};
var varsResolver20 = createVarsResolver((_, { gap, align, justify }) => ({
  root: {
    "--stack-gap": getSpacing(gap),
    "--stack-align": align,
    "--stack-justify": justify
  }
}));
var Stack = factory((_props, ref) => {
  const props = useProps("Stack", defaultProps37, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    variant,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Stack",
    props,
    classes: classes18,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver20
  });
  return /* @__PURE__ */ import_react108.default.createElement(Box, { ref, ...getStyles2("root"), variant, ...others });
});
Stack.classes = classes18;
Stack.displayName = "@mantine/core/Stack";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stepper/Stepper.mjs
var import_react115 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-auto-contrast-value/get-auto-contrast-value.mjs
"use client";
function getAutoContrastValue(autoContrast, theme) {
  return typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stepper/Stepper.context.mjs
var import_react109 = __toESM(require_react(), 1);
"use client";
var [StepperProvider, useStepperContext] = createSafeContext(
  "Stepper component was not found in tree"
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stepper/StepperCompleted/StepperCompleted.mjs
"use client";
var StepperCompleted = () => null;
StepperCompleted.displayName = "@mantine/core/StepperCompleted";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stepper/StepperStep/StepperStep.mjs
var import_react114 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Checkbox/CheckIcon.mjs
var import_react110 = __toESM(require_react(), 1);
"use client";
function CheckIcon({ size: size3, style, ...others }) {
  const _style = size3 !== void 0 ? { width: rem(size3), height: rem(size3), ...style } : style;
  return /* @__PURE__ */ import_react110.default.createElement(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style,
      "aria-hidden": true,
      ...others
    },
    /* @__PURE__ */ import_react110.default.createElement(
      "path",
      {
        d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Transition/transitions.mjs
var import_react111 = __toESM(require_react(), 1);
"use client";
var popIn = (from) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem(from === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
});
var transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(-${rem(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...popIn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...popIn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...popIn("top"),
    common: { transformOrigin: "top right" }
  }
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Transition/Transition.mjs
var import_react113 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs
"use client";
var transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return {
      transitionProperty: transitions[transition].transitionProperty,
      ...shared,
      ...transitions[transition].common,
      ...transitions[transition][transitionStatuses[state]]
    };
  }
  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition.common,
    ...transition[transitionStatuses[state]]
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Transition/use-transition.mjs
var import_react112 = __toESM(require_react(), 1);
"use client";
function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited
}) {
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react112.useState)(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = (0, import_react112.useState)(mounted ? "entered" : "exited");
  const timeoutRef = (0, import_react112.useRef)(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
    window.clearTimeout(timeoutRef.current);
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === "function" && preHandler();
        setStatus(shouldMount ? "entering" : "exiting");
      }, 10);
      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      }, newTransitionDuration);
    }
  };
  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react112.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Transition/Transition.mjs
"use client";
function Transition({
  keepMounted,
  transition = "fade",
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited
  });
  if (transitionDuration === 0) {
    return mounted ? /* @__PURE__ */ import_react113.default.createElement(import_react113.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react113.default.createElement(import_react113.default.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@mantine/core/Transition";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stepper/Stepper.module.css.mjs
"use client";
var classes19 = { "root": "m-cbb4ea7e", "steps": "m-aaf89d0b", "separator": "m-2a371ac9", "content": "m-78da155d", "step": "m-cbb57068", "step--horizontal": "m-f56b1e2c", "step--vertical": "m-833edb7e", "verticalSeparator": "m-6496b3f3", "stepWrapper": "m-818e70b", "stepIcon": "m-1959ad01", "stepCompletedIcon": "m-a79331dc", "stepBody": "m-1956aa2a", "stepLabel": "m-12051f6c", "stepDescription": "m-164eea74" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stepper/StepperStep/StepperStep.mjs
"use client";
var getStepFragment = (Fragment4, step) => {
  if (typeof Fragment4 === "function") {
    return /* @__PURE__ */ import_react114.default.createElement(Fragment4, { step: step || 0 });
  }
  return Fragment4;
};
var defaultProps38 = {
  withIcon: true,
  allowStepClick: true,
  iconPosition: "left"
};
var StepperStep = factory((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    step,
    state,
    color,
    icon,
    completedIcon,
    progressIcon,
    label,
    description,
    withIcon,
    iconSize,
    loading,
    allowStepClick,
    allowStepSelect,
    iconPosition,
    orientation,
    mod,
    ...others
  } = useProps("StepperStep", defaultProps38, props);
  const ctx = useStepperContext();
  const theme = useMantineTheme();
  const stylesApi = { classNames, styles };
  const _icon = state === "stepCompleted" ? null : state === "stepProgress" ? progressIcon : icon;
  const dataAttributes = {
    "data-progress": state === "stepProgress" || void 0,
    "data-completed": state === "stepCompleted" || void 0
  };
  return /* @__PURE__ */ import_react114.default.createElement(
    UnstyledButton,
    {
      ...ctx.getStyles("step", { className, style, variant: ctx.orientation, ...stylesApi }),
      mod: [
        { "icon-position": iconPosition || ctx.iconPosition, "allow-click": allowStepClick },
        mod
      ],
      ref,
      ...dataAttributes,
      ...others,
      __vars: { "--step-color": color ? getThemeColor(color, theme) : void 0 },
      tabIndex: allowStepClick ? 0 : -1
    },
    withIcon && /* @__PURE__ */ import_react114.default.createElement("span", { ...ctx.getStyles("stepWrapper", stylesApi) }, /* @__PURE__ */ import_react114.default.createElement("span", { ...ctx.getStyles("stepIcon", stylesApi), ...dataAttributes }, /* @__PURE__ */ import_react114.default.createElement(Transition, { mounted: state === "stepCompleted", transition: "pop", duration: 200 }, (transitionStyles) => /* @__PURE__ */ import_react114.default.createElement(
      "span",
      {
        ...ctx.getStyles("stepCompletedIcon", { style: transitionStyles, ...stylesApi })
      },
      loading ? /* @__PURE__ */ import_react114.default.createElement(
        Loader,
        {
          color: "var(--mantine-color-white)",
          size: "calc(var(--stepper-icon-size) / 2)",
          ...ctx.getStyles("stepLoader", stylesApi)
        }
      ) : getStepFragment(completedIcon, step) || /* @__PURE__ */ import_react114.default.createElement(CheckIcon, { size: "60%" })
    )), state !== "stepCompleted" ? loading ? /* @__PURE__ */ import_react114.default.createElement(
      Loader,
      {
        ...ctx.getStyles("stepLoader", stylesApi),
        size: "calc(var(--stepper-icon-size) / 2)",
        color
      }
    ) : getStepFragment(_icon || icon, step) : null), orientation === "vertical" && /* @__PURE__ */ import_react114.default.createElement(
      "span",
      {
        ...ctx.getStyles("verticalSeparator", stylesApi),
        "data-active": state === "stepCompleted" || void 0
      }
    )),
    (label || description) && /* @__PURE__ */ import_react114.default.createElement(
      "span",
      {
        ...ctx.getStyles("stepBody", stylesApi),
        "data-orientation": ctx.orientation,
        "data-icon-position": iconPosition || ctx.iconPosition
      },
      label && /* @__PURE__ */ import_react114.default.createElement("span", { ...ctx.getStyles("stepLabel", stylesApi) }, getStepFragment(label, step)),
      description && /* @__PURE__ */ import_react114.default.createElement("span", { ...ctx.getStyles("stepDescription", stylesApi) }, getStepFragment(description, step))
    )
  );
});
StepperStep.classes = classes19;
StepperStep.displayName = "@mantine/core/StepperStep";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stepper/Stepper.mjs
"use client";
var defaultProps39 = {
  orientation: "horizontal",
  iconPosition: "left",
  allowNextStepsSelect: true,
  wrap: true
};
var varsResolver21 = createVarsResolver(
  (theme, { color, iconSize, size: size3, contentPadding, radius, autoContrast }) => ({
    root: {
      "--stepper-color": color ? getThemeColor(color, theme) : void 0,
      "--stepper-icon-color": getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme }) : void 0,
      "--stepper-icon-size": iconSize === void 0 ? getSize(size3, "stepper-icon-size") : rem(iconSize),
      "--stepper-content-padding": getSpacing(contentPadding),
      "--stepper-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--stepper-fz": getFontSize(size3),
      "--stepper-spacing": getSpacing(size3)
    }
  })
);
var Stepper = factory((_props, ref) => {
  const props = useProps("Stepper", defaultProps39, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    onStepClick,
    active,
    icon,
    completedIcon,
    progressIcon,
    color,
    iconSize,
    contentPadding,
    orientation,
    iconPosition,
    size: size3,
    radius,
    allowNextStepsSelect,
    wrap,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Stepper",
    classes: classes19,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver21
  });
  const convertedChildren = import_react115.Children.toArray(children);
  const _children = convertedChildren.filter((child) => child.type !== StepperCompleted);
  const completedStep = convertedChildren.find((item) => item.type === StepperCompleted);
  const items = _children.reduce((acc, item, index3) => {
    const state = active === index3 ? "stepProgress" : active > index3 ? "stepCompleted" : "stepInactive";
    const shouldAllowSelect = () => {
      if (typeof onStepClick !== "function") {
        return false;
      }
      if (typeof item.props.allowStepSelect === "boolean") {
        return item.props.allowStepSelect;
      }
      return state === "stepCompleted" || allowNextStepsSelect;
    };
    const isStepSelectionEnabled = shouldAllowSelect();
    acc.push(
      (0, import_react115.cloneElement)(item, {
        icon: item.props.icon || icon || index3 + 1,
        key: index3,
        step: index3,
        state,
        onClick: () => isStepSelectionEnabled && onStepClick?.(index3),
        allowStepClick: isStepSelectionEnabled,
        completedIcon: item.props.completedIcon || completedIcon,
        progressIcon: item.props.progressIcon || progressIcon,
        color: item.props.color || color,
        iconSize,
        radius,
        iconPosition: item.props.iconPosition || iconPosition,
        orientation,
        unstyled
      })
    );
    if (orientation === "horizontal" && index3 !== _children.length - 1) {
      acc.push(
        /* @__PURE__ */ import_react115.default.createElement(
          "div",
          {
            ...getStyles2("separator"),
            "data-active": index3 < active || void 0,
            "data-orientation": orientation,
            key: `separator-${index3}`
          }
        )
      );
    }
    return acc;
  }, []);
  const stepContent = _children[active]?.props?.children;
  const completedContent = completedStep?.props?.children;
  const content = active > _children.length - 1 ? completedContent : stepContent;
  return /* @__PURE__ */ import_react115.default.createElement(StepperProvider, { value: { getStyles: getStyles2, orientation, iconPosition } }, /* @__PURE__ */ import_react115.default.createElement(Box, { ...getStyles2("root"), ref, size: size3, ...others }, /* @__PURE__ */ import_react115.default.createElement(
    Box,
    {
      ...getStyles2("steps"),
      mod: {
        orientation,
        "icon-position": iconPosition,
        wrap: wrap && orientation !== "vertical"
      }
    },
    items
  ), content && /* @__PURE__ */ import_react115.default.createElement("div", { ...getStyles2("content") }, content)));
});
Stepper.classes = classes19;
Stepper.displayName = "@mantine/core/Stepper";
Stepper.Completed = StepperCompleted;
Stepper.Step = StepperStep;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Tabs/Tabs.mjs
var import_react120 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Tabs/Tabs.context.mjs
var import_react116 = __toESM(require_react(), 1);
"use client";
var [TabsProvider, useTabsContext] = createSafeContext(
  "Tabs component was not found in the tree"
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Tabs/TabsList/TabsList.mjs
var import_react117 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Tabs/Tabs.module.css.mjs
"use client";
var classes20 = { "root": "m-89d60db1", "list--default": "m-576c9d4", "list": "m-89d33d6d", "panel": "m-b0c91715", "tab": "m-4ec4dce6", "tabSection": "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Tabs/TabsList/TabsList.mjs
"use client";
var defaultProps40 = {};
var TabsList = factory((_props, ref) => {
  const props = useProps("TabsList", defaultProps40, _props);
  const { children, className, grow, justify, classNames, styles, style, mod, ...others } = props;
  const ctx = useTabsContext();
  return /* @__PURE__ */ import_react117.default.createElement(
    Box,
    {
      ...others,
      ...ctx.getStyles("list", {
        className,
        style,
        classNames,
        styles,
        props,
        variant: ctx.variant
      }),
      ref,
      role: "tablist",
      variant: ctx.variant,
      mod: [
        {
          grow,
          orientation: ctx.orientation,
          placement: ctx.orientation === "vertical" && ctx.placement,
          inverted: ctx.inverted
        },
        mod
      ],
      "aria-orientation": ctx.orientation,
      __vars: { "--tabs-justify": justify }
    },
    children
  );
});
TabsList.classes = classes20;
TabsList.displayName = "@mantine/core/TabsList";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Tabs/TabsPanel/TabsPanel.mjs
var import_react118 = __toESM(require_react(), 1);
"use client";
var defaultProps41 = {};
var TabsPanel = factory((_props, ref) => {
  const props = useProps("TabsPanel", defaultProps41, _props);
  const { children, className, value, classNames, styles, style, mod, ...others } = props;
  const ctx = useTabsContext();
  const active = ctx.value === value;
  const content = ctx.keepMounted || props.keepMounted ? children : active ? children : null;
  return /* @__PURE__ */ import_react118.default.createElement(
    Box,
    {
      ...others,
      ...ctx.getStyles("panel", {
        className,
        classNames,
        styles,
        style: [style, !active ? { display: "none" } : void 0],
        props
      }),
      ref,
      mod: [{ orientation: ctx.orientation }, mod],
      role: "tabpanel",
      id: ctx.getPanelId(value),
      "aria-labelledby": ctx.getTabId(value)
    },
    content
  );
});
TabsPanel.classes = classes20;
TabsPanel.displayName = "@mantine/core/TabsPanel";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Tabs/TabsTab/TabsTab.mjs
var import_react119 = __toESM(require_react(), 1);
"use client";
var defaultProps42 = {};
var TabsTab = factory((_props, ref) => {
  const props = useProps("TabsTab", defaultProps42, _props);
  const {
    className,
    children,
    rightSection,
    leftSection,
    value,
    onClick,
    onKeyDown,
    disabled,
    color,
    style,
    classNames,
    styles,
    vars,
    mod,
    ...others
  } = props;
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const ctx = useTabsContext();
  const active = value === ctx.value;
  const activateTab = (event) => {
    ctx.onChange(ctx.allowTabDeactivation ? value === ctx.value ? null : value : value);
    onClick?.(event);
  };
  const stylesApiProps = { classNames, styles, props };
  return /* @__PURE__ */ import_react119.default.createElement(
    UnstyledButton,
    {
      ...others,
      ...ctx.getStyles("tab", { className, style, variant: ctx.variant, ...stylesApiProps }),
      disabled,
      unstyled: ctx.unstyled,
      variant: ctx.variant,
      mod: [
        {
          active,
          disabled,
          orientation: ctx.orientation,
          inverted: ctx.inverted,
          placement: ctx.orientation === "vertical" && ctx.placement
        },
        mod
      ],
      ref,
      role: "tab",
      id: ctx.getTabId(value),
      "aria-selected": active,
      tabIndex: active || ctx.value === null ? 0 : -1,
      "aria-controls": ctx.getPanelId(value),
      onClick: activateTab,
      __vars: { "--tabs-color": color ? getThemeColor(color, theme) : void 0 },
      onKeyDown: createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        orientation: ctx.orientation || "horizontal",
        dir,
        onKeyDown
      })
    },
    leftSection && /* @__PURE__ */ import_react119.default.createElement("span", { ...ctx.getStyles("tabSection", stylesApiProps), "data-position": "left" }, leftSection),
    children && /* @__PURE__ */ import_react119.default.createElement("span", { ...ctx.getStyles("tabLabel", stylesApiProps) }, children),
    rightSection && /* @__PURE__ */ import_react119.default.createElement("span", { ...ctx.getStyles("tabSection", stylesApiProps), "data-position": "right" }, rightSection)
  );
});
TabsTab.classes = classes20;
TabsTab.displayName = "@mantine/core/TabsTab";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Tabs/Tabs.mjs
"use client";
var VALUE_ERROR = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value";
var defaultProps43 = {
  keepMounted: true,
  orientation: "horizontal",
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: "default",
  placement: "left"
};
var varsResolver22 = createVarsResolver((theme, { radius, color, autoContrast }) => ({
  root: {
    "--tabs-radius": getRadius(radius),
    "--tabs-color": getThemeColor(color, theme),
    "--tabs-text-color": getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme }) : void 0
  }
}));
var Tabs = factory((_props, ref) => {
  const props = useProps("Tabs", defaultProps43, _props);
  const {
    defaultValue,
    value,
    onChange,
    orientation,
    children,
    loop,
    id,
    activateTabWithKeyboard,
    allowTabDeactivation,
    variant,
    color,
    radius,
    inverted,
    placement,
    keepMounted,
    classNames,
    styles,
    unstyled,
    className,
    style,
    vars,
    autoContrast,
    mod,
    ...others
  } = props;
  const uid = useId(id);
  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const getStyles2 = useStyles({
    name: "Tabs",
    props,
    classes: classes20,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver22
  });
  return /* @__PURE__ */ import_react120.default.createElement(
    TabsProvider,
    {
      value: {
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId(`${uid}-tab`, VALUE_ERROR),
        getPanelId: getSafeId(`${uid}-panel`, VALUE_ERROR),
        onChange: setCurrentTab,
        allowTabDeactivation,
        variant,
        color,
        radius,
        inverted,
        keepMounted,
        unstyled,
        getStyles: getStyles2
      }
    },
    /* @__PURE__ */ import_react120.default.createElement(
      Box,
      {
        ref,
        id: uid,
        variant,
        mod: [
          {
            orientation,
            inverted: orientation === "horizontal" && inverted,
            placement: orientation === "vertical" && placement
          },
          mod
        ],
        ...getStyles2("root"),
        ...others
      },
      children
    )
  );
});
Tabs.classes = classes20;
Tabs.displayName = "@mantine/core/Tabs";
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs
var import_react121 = __toESM(require_react(), 1);
"use client";
var defaultProps44 = {};
var TextInput = factory((props, ref) => {
  const _props = useProps("TextInput", defaultProps44, props);
  return /* @__PURE__ */ import_react121.default.createElement(InputBase, { component: "input", ref, ..._props, __staticSelector: "TextInput" });
});
TextInput.classes = InputBase.classes;
TextInput.displayName = "@mantine/core/TextInput";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Title/Title.mjs
var import_react123 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Title/get-title-size.mjs
var import_react122 = __toESM(require_react(), 1);
"use client";
var headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function getTitleSize(order, size3) {
  const titleSize = size3 !== void 0 ? size3 : `h${order}`;
  if (headings.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-${titleSize}-font-size)`,
      fontWeight: `var(--mantine-${titleSize}-font-weight)`,
      lineHeight: `var(--mantine-${titleSize}-line-height)`
    };
  }
  return {
    fontSize: rem(titleSize),
    fontWeight: `var(--mantine-h${order}-font-weight)`,
    lineHeight: `var(--mantine-h${order}-line-height)`
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Title/Title.module.css.mjs
"use client";
var classes21 = { "root": "m-8a5d1357" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Title/Title.mjs
"use client";
var defaultProps45 = {
  order: 1
};
var varsResolver23 = createVarsResolver((_, { order, size: size3, lineClamp, textWrap }) => {
  const sizeVariables = getTitleSize(order, size3);
  return {
    root: {
      "--title-fw": sizeVariables.fontWeight,
      "--title-lh": sizeVariables.lineHeight,
      "--title-fz": sizeVariables.fontSize,
      "--title-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--title-text-wrap": textWrap
    }
  };
});
var Title = factory((_props, ref) => {
  const props = useProps("Title", defaultProps45, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    order,
    vars,
    size: size3,
    variant,
    lineClamp,
    textWrap,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Title",
    props,
    classes: classes21,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver23
  });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ import_react123.default.createElement(
    Box,
    {
      ...getStyles2("root"),
      component: `h${order}`,
      variant,
      ref,
      mod: [{ order, "data-line-clamp": typeof lineClamp === "number" }, mod],
      size: size3,
      ...others
    }
  );
});
Title.classes = classes21;
Title.displayName = "@mantine/core/Title";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs
var import_react124 = __toESM(require_react(), 1);
"use client";
function isElement(value) {
  if (Array.isArray(value) || value === null) {
    return false;
  }
  if (typeof value === "object") {
    if (value.type === import_react124.default.Fragment) {
      return false;
    }
    return true;
  }
  return false;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/noop/noop.mjs
"use client";
var noop = () => {
};

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/utils/close-on-escape/close-on-escape.mjs
"use client";
function closeOnEscape(callback, options = { active: true }) {
  if (typeof callback !== "function" || !options.active) {
    return options.onKeyDown || noop;
  }
  return (event) => {
    if (event.key === "Escape") {
      callback(event);
      options.onTrigger?.();
    }
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs
function createTheme(theme) {
  return theme;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs
var import_react139 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaCorner/ScrollAreaCorner.mjs
var import_react126 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs
var import_react125 = __toESM(require_react(), 1);
"use client";
var [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/use-resize-observer.mjs
"use client";
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useIsomorphicEffect(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
    return void 0;
  }, [element, handleResize]);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaCorner/ScrollAreaCorner.mjs
"use client";
var Corner = import_react126.default.forwardRef((props, ref) => {
  const { style, ...others } = props;
  const ctx = useScrollAreaContext();
  const [width, setWidth] = import_react126.default.useState(0);
  const [height, setHeight] = import_react126.default.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(ctx.scrollbarX, () => {
    const h = ctx.scrollbarX?.offsetHeight || 0;
    ctx.onCornerHeightChange(h);
    setHeight(h);
  });
  useResizeObserver(ctx.scrollbarY, () => {
    const w = ctx.scrollbarY?.offsetWidth || 0;
    ctx.onCornerWidthChange(w);
    setWidth(w);
  });
  return hasSize ? /* @__PURE__ */ import_react126.default.createElement("div", { ...others, ref, style: { ...style, width, height } }) : null;
});
var ScrollAreaCorner = import_react126.default.forwardRef(
  (props, ref) => {
    const ctx = useScrollAreaContext();
    const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
    const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ import_react126.default.createElement(Corner, { ...props, ref }) : null;
  }
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaRoot/ScrollAreaRoot.mjs
var import_react127 = __toESM(require_react(), 1);
"use client";
var defaultProps46 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var ScrollAreaRoot = (0, import_react127.forwardRef)((_props, ref) => {
  const props = useProps("ScrollAreaRoot", defaultProps46, _props);
  const { type, scrollHideDelay, scrollbars, ...others } = props;
  const [scrollArea, setScrollArea] = (0, import_react127.useState)(null);
  const [viewport, setViewport] = (0, import_react127.useState)(null);
  const [content, setContent] = (0, import_react127.useState)(null);
  const [scrollbarX, setScrollbarX] = (0, import_react127.useState)(null);
  const [scrollbarY, setScrollbarY] = (0, import_react127.useState)(null);
  const [cornerWidth, setCornerWidth] = (0, import_react127.useState)(0);
  const [cornerHeight, setCornerHeight] = (0, import_react127.useState)(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react127.useState)(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react127.useState)(false);
  const rootRef = useMergedRef(ref, (node) => setScrollArea(node));
  return /* @__PURE__ */ import_react127.default.createElement(
    ScrollAreaProvider,
    {
      value: {
        type,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight
      }
    },
    /* @__PURE__ */ import_react127.default.createElement(
      Box,
      {
        ...others,
        ref: rootRef,
        __vars: {
          "--sa-corner-width": scrollbars !== "xy" ? "0px" : `${cornerWidth}px`,
          "--sa-corner-height": scrollbars !== "xy" ? "0px" : `${cornerHeight}px`
        }
      }
    )
  );
});
ScrollAreaRoot.displayName = "@mantine/core/ScrollAreaRoot";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbar.mjs
var import_react136 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.mjs
var import_react133 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs
var import_react132 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-ratio.mjs
"use client";
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-size.mjs
"use client";
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/linear-scale.mjs
"use client";
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-offset-from-scroll.mjs
"use client";
function clamp2(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp2(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-scroll-position-from-pointer.mjs
"use client";
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset2 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset2;
  const minPointerPos = sizes.scrollbar.paddingStart + offset2;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarX.mjs
var import_react130 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/is-scrolling-within-scrollbar-bounds.mjs
"use client";
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/to-int.mjs
"use client";
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.mjs
var import_react129 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/compose-event-handlers.mjs
"use client";
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler?.(event);
    }
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.context.mjs
var import_react128 = __toESM(require_react(), 1);
"use client";
var [ScrollbarProvider, useScrollbarContext] = createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.mjs
"use client";
var Scrollbar = (0, import_react129.forwardRef)((props, forwardedRef) => {
  const {
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext();
  const [scrollbar, setScrollbar] = import_react129.default.useState(null);
  const composeRefs = useMergedRef(forwardedRef, (node) => setScrollbar(node));
  const rectRef = import_react129.default.useRef(null);
  const prevWebkitUserSelectRef = import_react129.default.useRef("");
  const { viewport } = context;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  const handleDragScroll = (event) => {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  };
  (0, import_react129.useEffect)(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  (0, import_react129.useEffect)(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ import_react129.default.createElement(
    ScrollbarProvider,
    {
      value: {
        scrollbar,
        hasThumb,
        onThumbChange: useCallbackRef(onThumbChange),
        onThumbPointerUp: useCallbackRef(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: useCallbackRef(onThumbPointerDown)
      }
    },
    /* @__PURE__ */ import_react129.default.createElement(
      "div",
      {
        ...scrollbarProps,
        ref: composeRefs,
        style: { position: "absolute", ...scrollbarProps.style },
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          const mainPointer = 0;
          if (event.button === mainPointer) {
            const element = event.target;
            element.setPointerCapture(event.pointerId);
            rectRef.current = scrollbar.getBoundingClientRect();
            prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
            document.body.style.webkitUserSelect = "none";
            handleDragScroll(event);
          }
        }),
        onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          const element = event.target;
          if (element.hasPointerCapture(event.pointerId)) {
            element.releasePointerCapture(event.pointerId);
          }
          document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
          rectRef.current = null;
        })
      }
    )
  );
});

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarX.mjs
"use client";
var ScrollAreaScrollbarX = (0, import_react130.forwardRef)(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const ctx = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = (0, import_react130.useState)();
    const ref = (0, import_react130.useRef)(null);
    const composeRefs = useMergedRef(forwardedRef, ref, ctx.onScrollbarXChange);
    (0, import_react130.useEffect)(() => {
      if (ref.current)
        setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ import_react130.default.createElement(
      Scrollbar,
      {
        "data-orientation": "horizontal",
        ...others,
        ref: composeRefs,
        sizes,
        style: {
          ...style,
          ["--sa-thumb-width"]: `${getThumbSize(sizes)}px`
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos) => {
          if (ctx.viewport) {
            const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && ctx.viewport && computedStyle) {
            onSizesChange({
              content: ctx.viewport.scrollWidth,
              viewport: ctx.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight)
              }
            });
          }
        }
      }
    );
  }
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarY.mjs
var import_react131 = __toESM(require_react(), 1);
"use client";
var ScrollAreaScrollbarY = (0, import_react131.forwardRef)(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const context = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = import_react131.default.useState();
    const ref = (0, import_react131.useRef)(null);
    const composeRefs = useMergedRef(forwardedRef, ref, context.onScrollbarYChange);
    (0, import_react131.useEffect)(() => {
      if (ref.current)
        setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ import_react131.default.createElement(
      Scrollbar,
      {
        ...others,
        "data-orientation": "vertical",
        ref: composeRefs,
        sizes,
        style: {
          ["--sa-thumb-height"]: `${getThumbSize(sizes)}px`,
          ...style
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom)
              }
            });
          }
        }
      }
    );
  }
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs
"use client";
var ScrollAreaScrollbarVisible = (0, import_react132.forwardRef)((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const { dir } = useDirection();
  const context = useScrollAreaContext();
  const thumbRef = (0, import_react132.useRef)(null);
  const pointerOffsetRef = (0, import_react132.useRef)(0);
  const [sizes, setSizes] = (0, import_react132.useState)({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => {
      thumbRef.current = thumb;
    },
    onThumbPointerUp: () => {
      pointerOffsetRef.current = 0;
    },
    onThumbPointerDown: (pointerPos) => {
      pointerOffsetRef.current = pointerPos;
    }
  };
  const getScrollPosition = (pointerPos, direction) => getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, direction);
  if (orientation === "horizontal") {
    return /* @__PURE__ */ import_react132.default.createElement(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes, dir);
            thumbRef.current.style.transform = `translate3d(${offset2}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ import_react132.default.createElement(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset2}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport)
            context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.mjs
"use client";
var ScrollAreaScrollbarAuto = (0, import_react133.forwardRef)(
  (props, ref) => {
    const context = useScrollAreaContext();
    const { forceMount, ...scrollbarProps } = props;
    const [visible2, setVisible] = (0, import_react133.useState)(false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebounceCallback(() => {
      if (context.viewport) {
        const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
        const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
        setVisible(isHorizontal ? isOverflowX : isOverflowY);
      }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    if (forceMount || visible2) {
      return /* @__PURE__ */ import_react133.default.createElement(
        ScrollAreaScrollbarVisible,
        {
          "data-state": visible2 ? "visible" : "hidden",
          ...scrollbarProps,
          ref
        }
      );
    }
    return null;
  }
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarHover.mjs
var import_react134 = __toESM(require_react(), 1);
"use client";
var ScrollAreaScrollbarHover = (0, import_react134.forwardRef)(
  (props, ref) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const [visible2, setVisible] = (0, import_react134.useState)(false);
    (0, import_react134.useEffect)(() => {
      const { scrollArea } = context;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
      return void 0;
    }, [context.scrollArea, context.scrollHideDelay]);
    if (forceMount || visible2) {
      return /* @__PURE__ */ import_react134.default.createElement(
        ScrollAreaScrollbarAuto,
        {
          "data-state": visible2 ? "visible" : "hidden",
          ...scrollbarProps,
          ref
        }
      );
    }
    return null;
  }
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.mjs
var import_react135 = __toESM(require_react(), 1);
"use client";
var ScrollAreaScrollbarScroll = (0, import_react135.forwardRef)(
  (props, red) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const isHorizontal = props.orientation === "horizontal";
    const [state, setState] = (0, import_react135.useState)("hidden");
    const debounceScrollEnd = useDebounceCallback(() => setState("idle"), 100);
    (0, import_react135.useEffect)(() => {
      if (state === "idle") {
        const hideTimer = window.setTimeout(() => setState("hidden"), context.scrollHideDelay);
        return () => window.clearTimeout(hideTimer);
      }
      return void 0;
    }, [state, context.scrollHideDelay]);
    (0, import_react135.useEffect)(() => {
      const { viewport } = context;
      const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
      if (viewport) {
        let prevScrollPos = viewport[scrollDirection];
        const handleScroll2 = () => {
          const scrollPos = viewport[scrollDirection];
          const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
          if (hasScrollInDirectionChanged) {
            setState("scrolling");
            debounceScrollEnd();
          }
          prevScrollPos = scrollPos;
        };
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
      return void 0;
    }, [context.viewport, isHorizontal, debounceScrollEnd]);
    if (forceMount || state !== "hidden") {
      return /* @__PURE__ */ import_react135.default.createElement(
        ScrollAreaScrollbarVisible,
        {
          "data-state": state === "hidden" ? "hidden" : "visible",
          ...scrollbarProps,
          ref: red,
          onPointerEnter: composeEventHandlers(props.onPointerEnter, () => setState("interacting")),
          onPointerLeave: composeEventHandlers(props.onPointerLeave, () => setState("idle"))
        }
      );
    }
    return null;
  }
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbar.mjs
"use client";
var ScrollAreaScrollbar = import_react136.default.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    import_react136.default.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ import_react136.default.createElement(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ import_react136.default.createElement(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ import_react136.default.createElement(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ import_react136.default.createElement(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaThumb/ScrollAreaThumb.mjs
var import_react137 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/utils/add-unlinked-scroll-listener.mjs
"use client";
function addUnlinkedScrollListener(node, handler = () => {
}) {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaThumb/ScrollAreaThumb.mjs
"use client";
var Thumb = (0, import_react137.forwardRef)((props, forwardedRef) => {
  const { style, ...others } = props;
  const scrollAreaContext = useScrollAreaContext();
  const scrollbarContext = useScrollbarContext();
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = useMergedRef(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
  const removeUnlinkedScrollListenerRef = (0, import_react137.useRef)();
  const debounceScrollEnd = useDebounceCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = void 0;
    }
  }, 100);
  (0, import_react137.useEffect)(() => {
    const { viewport } = scrollAreaContext;
    if (viewport) {
      const handleScroll2 = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
    return void 0;
  }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
  return /* @__PURE__ */ import_react137.default.createElement(
    "div",
    {
      "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
      ...others,
      ref: composedRef,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...style
      },
      onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
        const thumb = event.target;
        const thumbRect = thumb.getBoundingClientRect();
        const x = event.clientX - thumbRect.left;
        const y = event.clientY - thumbRect.top;
        scrollbarContext.onThumbPointerDown({ x, y });
      }),
      onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    }
  );
});
var ScrollAreaThumb = import_react137.default.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext();
    if (forceMount || scrollbarContext.hasThumb) {
      return /* @__PURE__ */ import_react137.default.createElement(Thumb, { ref: forwardedRef, ...thumbProps });
    }
    return null;
  }
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaViewport/ScrollAreaViewport.mjs
var import_react138 = __toESM(require_react(), 1);
"use client";
var ScrollAreaViewport = (0, import_react138.forwardRef)(
  ({ children, style, ...others }, ref) => {
    const ctx = useScrollAreaContext();
    const rootRef = useMergedRef(ref, ctx.onViewportChange);
    return /* @__PURE__ */ import_react138.default.createElement(
      Box,
      {
        ...others,
        ref: rootRef,
        style: {
          overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden",
          ...style
        }
      },
      /* @__PURE__ */ import_react138.default.createElement("div", { style: { minWidth: "100%", display: "table" }, ref: ctx.onContentChange }, children)
    );
  }
);
ScrollAreaViewport.displayName = "@mantine/core/ScrollAreaViewport";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.module.css.mjs
"use client";
var classes22 = { "root": "m-d57069b5", "viewport": "m-c0783ff9", "viewportInner": "m-f8f631dd", "scrollbar": "m-c44ba933", "thumb": "m-d8b5e363", "corner": "m-21657268" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs
"use client";
var defaultProps47 = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
};
var varsResolver24 = createVarsResolver((_, { scrollbarSize }) => ({
  root: {
    "--scrollarea-scrollbar-size": rem(scrollbarSize)
  }
}));
var ScrollArea = factory((_props, ref) => {
  const props = useProps("ScrollArea", defaultProps47, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars,
    scrollbars,
    ...others
  } = props;
  const [scrollbarHovered, setScrollbarHovered] = (0, import_react139.useState)(false);
  const getStyles2 = useStyles({
    name: "ScrollArea",
    props,
    classes: classes22,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver24
  });
  return /* @__PURE__ */ import_react139.default.createElement(
    ScrollAreaRoot,
    {
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref,
      scrollbars,
      ...getStyles2("root"),
      ...others
    },
    /* @__PURE__ */ import_react139.default.createElement(
      ScrollAreaViewport,
      {
        ...viewportProps,
        ...getStyles2("viewport"),
        ref: viewportRef,
        "data-offset-scrollbars": offsetScrollbars === true ? "xy" : offsetScrollbars || void 0,
        "data-scrollbars": scrollbars || void 0,
        onScroll: typeof onScrollPositionChange === "function" ? ({ currentTarget }) => onScrollPositionChange({
          x: currentTarget.scrollLeft,
          y: currentTarget.scrollTop
        }) : void 0
      },
      children
    ),
    (scrollbars === "xy" || scrollbars === "x") && /* @__PURE__ */ import_react139.default.createElement(
      ScrollAreaScrollbar,
      {
        ...getStyles2("scrollbar"),
        orientation: "horizontal",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      },
      /* @__PURE__ */ import_react139.default.createElement(ScrollAreaThumb, { ...getStyles2("thumb") })
    ),
    (scrollbars === "xy" || scrollbars === "y") && /* @__PURE__ */ import_react139.default.createElement(
      ScrollAreaScrollbar,
      {
        ...getStyles2("scrollbar"),
        orientation: "vertical",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      },
      /* @__PURE__ */ import_react139.default.createElement(ScrollAreaThumb, { ...getStyles2("thumb") })
    ),
    /* @__PURE__ */ import_react139.default.createElement(
      ScrollAreaCorner,
      {
        ...getStyles2("corner"),
        "data-hovered": scrollbarHovered || void 0,
        "data-hidden": type === "never" || void 0
      }
    )
  );
});
ScrollArea.displayName = "@mantine/core/ScrollArea";
var ScrollAreaAutosize = factory((props, ref) => {
  const {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    scrollbars,
    style,
    vars,
    ...others
  } = useProps("ScrollAreaAutosize", defaultProps47, props);
  return /* @__PURE__ */ import_react139.default.createElement(Box, { ...others, ref, style: [{ display: "flex", overflow: "auto" }, style] }, /* @__PURE__ */ import_react139.default.createElement(Box, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ import_react139.default.createElement(
    ScrollArea,
    {
      classNames,
      styles,
      scrollHideDelay,
      scrollbarSize,
      type,
      dir,
      offsetScrollbars,
      viewportRef,
      onScrollPositionChange,
      unstyled,
      variant,
      viewportProps,
      vars,
      scrollbars
    },
    children
  )));
});
ScrollArea.classes = classes22;
ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize";
ScrollAreaAutosize.classes = classes22;
ScrollArea.Autosize = ScrollAreaAutosize;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/Popover.mjs
var import_react154 = __toESM(require_react(), 1);

// node_modules/.pnpm/@floating-ui+utils@0.2.1/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp3(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// node_modules/.pnpm/@floating-ui+core@1.6.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp3(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
var inline = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform: platform2,
        strategy
      } = state;
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from(await (platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect2() {
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === "y") {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === "top";
            const top2 = firstRect.top;
            const bottom2 = lastRect.bottom;
            const left2 = isTop ? firstRect.left : lastRect.left;
            const right2 = isTop ? firstRect.right : lastRect.right;
            const width2 = right2 - left2;
            const height2 = bottom2 - top2;
            return {
              top: top2,
              bottom: bottom2,
              left: left2,
              right: right2,
              width: width2,
              height: height2,
              x: left2,
              y: top2
            };
          }
          const isLeftSide = getSide(placement) === "left";
          const maxRight = max(...clientRects.map((rect) => rect.right));
          const minLeft = min(...clientRects.map((rect) => rect.left));
          const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform2.getElementRects({
        reference: {
          getBoundingClientRect: getBoundingClientRect2
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp3(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp3(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/.pnpm/@floating-ui+utils@0.2.1/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement2(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement2(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/.pnpm/@floating-ui+dom@1.6.1/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement2(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement2(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement2(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function topLayer(floating) {
  let isTopLayer = false;
  let x = 0;
  let y = 0;
  function setIsTopLayer(selector) {
    try {
      isTopLayer = isTopLayer || floating.matches(selector);
    } catch (e) {
    }
  }
  topLayerSelectors.forEach((selector) => {
    setIsTopLayer(selector);
  });
  if (isTopLayer) {
    const containingBlock = getContainingBlock(floating);
    if (containingBlock) {
      const rect = containingBlock.getBoundingClientRect();
      x = rect.x;
      y = rect.y;
    }
  }
  return [isTopLayer, x, y];
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const documentElement = getDocumentElement(offsetParent);
  const [isTopLayer] = elements ? topLayer(elements.floating) : [false];
  if (offsetParent === documentElement || isTopLayer) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement2(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement2(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement2(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement2(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy, floating) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  let x = rect.left + scroll.scrollLeft - offsets.x;
  let y = rect.top + scroll.scrollTop - offsets.y;
  const [isTopLayer, topLayerX, topLayerY] = topLayer(floating);
  if (isTopLayer) {
    x += topLayerX;
    y += topLayerY;
    if (isOffsetParentAnElement) {
      x += offsetParent.clientLeft;
      y += offsetParent.clientTop;
    }
  }
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy, data.floating),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(data.floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement2,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var arrow2 = arrow;
var inline2 = inline;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/.pnpm/@floating-ui+react-dom@2.0.8_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React88 = __toESM(require_react(), 1);
var import_react140 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var arrow3 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react140.useLayoutEffect : import_react140.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys2;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys2[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys2[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React88.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React88.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React88.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React88.useState(null);
  const [_floating, _setFloating] = React88.useState(null);
  const setReference = React88.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React88.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React88.useRef(null);
  const floatingRef = React88.useRef(null);
  const dataRef = React88.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React88.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React88.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React88.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React88.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React88.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React88.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// node_modules/.pnpm/@floating-ui+react@0.24.8_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
var React89 = __toESM(require_react());
var import_react141 = __toESM(require_react());
var import_react_dom4 = __toESM(require_react_dom());
var index2 = typeof document !== "undefined" ? import_react141.useLayoutEffect : import_react141.useEffect;
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React89.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React89.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId2 = React89[/* @__PURE__ */ "useId".toString()];
var useId3 = useReactId2 || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
    }
  };
}
var FloatingTreeContext = /* @__PURE__ */ React89.createContext(null);
var useFloatingTree = () => React89.useContext(FloatingTreeContext);
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
function isElement3(value) {
  return value ? value instanceof Element || value instanceof getWindow2(value).Element : false;
}
var useInsertionEffect = React89[/* @__PURE__ */ "useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React89.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React89.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
function useFloating2(options) {
  var _options$elements;
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const [_domReference, setDomReference] = React89.useState(null);
  const domReference = ((_options$elements = options.elements) == null ? void 0 : _options$elements.reference) || _domReference;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const onOpenChange = useEffectEvent((open2, event) => {
    if (open2) {
      dataRef.current.openEvent = event;
    }
    unstable_onOpenChange == null ? void 0 : unstable_onOpenChange(open2, event);
  });
  const domReferenceRef = React89.useRef(null);
  const dataRef = React89.useRef({});
  const events = React89.useState(() => createPubSub())[0];
  const floatingId = useId3();
  const setPositionReference = React89.useCallback((node) => {
    const positionReference = isElement3(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React89.useCallback((node) => {
    if (isElement3(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement3(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement3(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React89.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React89.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React89.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React89.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Floating/get-floating-position/get-floating-position.mjs
"use client";
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs
var import_react143 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Floating/FloatingArrow/get-arrow-position-styles.mjs
var import_react142 = __toESM(require_react(), 1);
"use client";
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
  if (placement === "center" || arrowPosition === "center") {
    return { top: arrowY };
  }
  if (placement === "end") {
    return { bottom: arrowOffset };
  }
  if (placement === "start") {
    return { top: arrowOffset };
  }
  return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
  if (placement === "center" || arrowPosition === "center") {
    return { left: arrowX };
  }
  if (placement === "end") {
    return { [dir === "ltr" ? "right" : "left"]: arrowOffset };
  }
  if (placement === "start") {
    return { [dir === "ltr" ? "left" : "right"]: arrowOffset };
  }
  return {};
}
var radiusByFloatingSide = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function getArrowPositionStyles({
  position,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir
}) {
  const [side, placement = "center"] = position.split("-");
  const baseStyles = {
    width: rem(arrowSize),
    height: rem(arrowSize),
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: rem(arrowRadius)
  };
  const arrowPlacement = rem(-arrowSize / 2);
  if (side === "left") {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      right: arrowPlacement,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent"
    };
  }
  if (side === "right") {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      left: arrowPlacement,
      borderRightColor: "transparent",
      borderTopColor: "transparent"
    };
  }
  if (side === "top") {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      bottom: arrowPlacement,
      borderTopColor: "transparent",
      borderLeftColor: "transparent"
    };
  }
  if (side === "bottom") {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      top: arrowPlacement,
      borderBottomColor: "transparent",
      borderRightColor: "transparent"
    };
  }
  return {};
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs
"use client";
var FloatingArrow = (0, import_react143.forwardRef)(
  ({
    position,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    visible: visible2,
    arrowX,
    arrowY,
    style,
    ...others
  }, ref) => {
    const { dir } = useDirection();
    if (!visible2) {
      return null;
    }
    return /* @__PURE__ */ import_react143.default.createElement(
      "div",
      {
        ...others,
        ref,
        style: {
          ...style,
          ...getArrowPositionStyles({
            position,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition,
            dir,
            arrowX,
            arrowY
          })
        }
      }
    );
  }
);
FloatingArrow.displayName = "@mantine/core/FloatingArrow";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs
var import_react144 = __toESM(require_react(), 1);
"use client";
var [PopoverContextProvider, usePopoverContext] = createSafeContext(
  "Popover component was not found in the tree"
);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/PopoverDropdown/PopoverDropdown.mjs
var import_react148 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs
var import_react145 = __toESM(require_react(), 1);
"use client";
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children?.ref);
  if (!isElement(children)) {
    return children;
  }
  return (0, import_react145.cloneElement)(children, { [refProp]: ref });
}
FocusTrap.displayName = "@mantine/core/FocusTrap";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Portal/Portal.mjs
var import_react146 = __toESM(require_react(), 1);
var import_react_dom5 = __toESM(require_react_dom(), 1);
"use client";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" ").filter(Boolean));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps48 = {};
var Portal = (0, import_react146.forwardRef)((props, ref) => {
  const { children, target, ...others } = useProps("Portal", defaultProps48, props);
  const [mounted, setMounted] = (0, import_react146.useState)(false);
  const nodeRef = (0, import_react146.useRef)(null);
  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    assignRef(ref, nodeRef.current);
    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return (0, import_react_dom5.createPortal)(/* @__PURE__ */ import_react146.default.createElement(import_react146.default.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@mantine/core/Portal";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs
var import_react147 = __toESM(require_react(), 1);
"use client";
function OptionalPortal({ withinPortal = true, children, ...others }) {
  if (withinPortal) {
    return /* @__PURE__ */ import_react147.default.createElement(Portal, { ...others }, children);
  }
  return /* @__PURE__ */ import_react147.default.createElement(import_react147.default.Fragment, null, children);
}
OptionalPortal.displayName = "@mantine/core/OptionalPortal";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/Popover.module.css.mjs
"use client";
var classes23 = { "dropdown": "m-38a85659", "arrow": "m-a31dc6c1" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/PopoverDropdown/PopoverDropdown.mjs
"use client";
var defaultProps49 = {};
var PopoverDropdown = factory((_props, ref) => {
  const props = useProps("PopoverDropdown", defaultProps49, _props);
  const {
    className,
    style,
    vars,
    children,
    onKeyDownCapture,
    variant,
    classNames,
    styles,
    ...others
  } = props;
  const ctx = usePopoverContext();
  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus
  });
  const accessibleProps = ctx.withRoles ? {
    "aria-labelledby": ctx.getTargetId(),
    id: ctx.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {};
  const mergedRef = useMergedRef(ref, ctx.floating);
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react148.default.createElement(OptionalPortal, { ...ctx.portalProps, withinPortal: ctx.withinPortal }, /* @__PURE__ */ import_react148.default.createElement(
    Transition,
    {
      mounted: ctx.opened,
      ...ctx.transitionProps,
      transition: ctx.transitionProps?.transition || "fade",
      duration: ctx.transitionProps?.duration ?? 150,
      keepMounted: ctx.keepMounted,
      exitDuration: typeof ctx.transitionProps?.exitDuration === "number" ? ctx.transitionProps.exitDuration : ctx.transitionProps?.duration
    },
    (transitionStyles) => /* @__PURE__ */ import_react148.default.createElement(FocusTrap, { active: ctx.trapFocus }, /* @__PURE__ */ import_react148.default.createElement(
      Box,
      {
        ...accessibleProps,
        ...others,
        variant,
        ref: mergedRef,
        onKeyDownCapture: closeOnEscape(ctx.onClose, {
          active: ctx.closeOnEscape,
          onTrigger: returnFocus,
          onKeyDown: onKeyDownCapture
        }),
        "data-position": ctx.placement,
        ...ctx.getStyles("dropdown", {
          className,
          props,
          classNames,
          styles,
          style: [
            {
              ...transitionStyles,
              zIndex: ctx.zIndex,
              top: ctx.y ?? 0,
              left: ctx.x ?? 0,
              width: ctx.width === "target" ? void 0 : rem(ctx.width)
            },
            style
          ]
        })
      },
      children,
      /* @__PURE__ */ import_react148.default.createElement(
        FloatingArrow,
        {
          ref: ctx.arrowRef,
          arrowX: ctx.arrowX,
          arrowY: ctx.arrowY,
          visible: ctx.withArrow,
          position: ctx.placement,
          arrowSize: ctx.arrowSize,
          arrowRadius: ctx.arrowRadius,
          arrowOffset: ctx.arrowOffset,
          arrowPosition: ctx.arrowPosition,
          ...ctx.getStyles("arrow", {
            props,
            classNames,
            styles
          })
        }
      )
    ))
  ));
});
PopoverDropdown.classes = classes23;
PopoverDropdown.displayName = "@mantine/core/PopoverDropdown";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/PopoverTarget/PopoverTarget.mjs
var import_react149 = __toESM(require_react(), 1);
"use client";
var defaultProps50 = {
  refProp: "ref",
  popupType: "dialog"
};
var PopoverTarget = factory((props, ref) => {
  const { children, refProp, popupType, ...others } = useProps(
    "PopoverTarget",
    defaultProps50,
    props
  );
  if (!isElement(children)) {
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const forwardedProps = others;
  const ctx = usePopoverContext();
  const targetRef = useMergedRef(ctx.reference, children.ref, ref);
  const accessibleProps = ctx.withRoles ? {
    "aria-haspopup": popupType,
    "aria-expanded": ctx.opened,
    "aria-controls": ctx.getDropdownId(),
    id: ctx.getTargetId()
  } : {};
  return (0, import_react149.cloneElement)(children, {
    ...forwardedProps,
    ...accessibleProps,
    ...ctx.targetProps,
    className: clsx_default(ctx.targetProps.className, forwardedProps.className, children.props.className),
    [refProp]: targetRef,
    ...!ctx.controlled ? { onClick: ctx.onToggle } : null
  });
});
PopoverTarget.displayName = "@mantine/core/PopoverTarget";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/use-popover.mjs
var import_react153 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Floating/use-floating-auto-update.mjs
var import_react150 = __toESM(require_react(), 1);
"use client";
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = (0, import_react150.useState)(0);
  (0, import_react150.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return void 0;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    opened,
    delayedUpdate,
    position
  ]);
  useDidUpdate(() => {
    floating.update();
  }, positionDependencies);
  useDidUpdate(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/use-popover.mjs
"use client";
function getPopoverMiddlewares(options, getFloating) {
  const middlewares = [offset(options.offset)];
  if (options.middlewares?.shift) {
    middlewares.push(shift2({ limiter: limitShift2() }));
  }
  if (options.middlewares?.flip) {
    middlewares.push(flip2());
  }
  if (options.middlewares?.inline) {
    middlewares.push(inline2());
  }
  middlewares.push(arrow3({ element: options.arrowRef, padding: options.arrowOffset }));
  if (options.middlewares?.size || options.width === "target") {
    middlewares.push(
      size2({
        apply({ rects, availableWidth, availableHeight }) {
          const floating = getFloating();
          const styles = floating.refs.floating.current?.style ?? {};
          if (options.middlewares?.size) {
            Object.assign(styles, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`
            });
          }
          if (options.width === "target") {
            Object.assign(styles, {
              width: `${rects.reference.width}px`
            });
          }
        }
      })
    );
  }
  return middlewares;
}
function usePopover(options) {
  const [_opened, setOpened] = useUncontrolled({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange
  });
  const onClose = () => {
    if (_opened) {
      options.onClose?.();
      setOpened(false);
    }
  };
  const onToggle = () => {
    if (_opened) {
      options.onClose?.();
      setOpened(false);
    } else {
      options.onOpen?.();
      setOpened(true);
    }
  };
  const floating = useFloating2({
    placement: options.position,
    middleware: getPopoverMiddlewares(options, () => floating)
  });
  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating
  });
  useDidUpdate(() => {
    options.onPositionChange?.(floating.placement);
  }, [floating.placement]);
  useDidUpdate(() => {
    if (!options.opened) {
      options.onClose?.();
    } else {
      options.onOpen?.();
    }
  }, [options.opened]);
  return {
    floating,
    controlled: typeof options.opened === "boolean",
    opened: _opened,
    onClose,
    onToggle
  };
}

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Popover/Popover.mjs
"use client";
var defaultProps51 = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: true,
  withinPortal: true,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: getDefaultZIndex("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
var varsResolver25 = createVarsResolver((_, { radius, shadow }) => ({
  dropdown: {
    "--popover-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--popover-shadow": getShadow(shadow)
  }
}));
function Popover(_props) {
  const props = useProps("Popover", defaultProps51, _props);
  const {
    children,
    position,
    offset: offset2,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape: closeOnEscape2,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    vars,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: __staticSelector,
    props,
    classes: classes23,
    classNames,
    styles,
    unstyled,
    rootSelector: "dropdown",
    vars,
    varsResolver: varsResolver25
  });
  const arrowRef = (0, import_react154.useRef)(null);
  const [targetNode, setTargetNode] = (0, import_react154.useState)(null);
  const [dropdownNode, setDropdownNode] = (0, import_react154.useState)(null);
  const { dir } = useDirection();
  const uid = useId(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position),
    offset: typeof offset2 === "number" ? offset2 + (withArrow ? arrowSize / 2 : 0) : offset2,
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose
  });
  useClickOutside(
    () => closeOnClickOutside && popover.onClose(),
    clickOutsideEvents,
    [
      targetNode,
      dropdownNode
    ]
  );
  const reference = (0, import_react154.useCallback)(
    (node) => {
      setTargetNode(node);
      popover.floating.refs.setReference(node);
    },
    [popover.floating.refs.setReference]
  );
  const floating = (0, import_react154.useCallback)(
    (node) => {
      setDropdownNode(node);
      popover.floating.refs.setFloating(node);
    },
    [popover.floating.refs.setFloating]
  );
  return /* @__PURE__ */ import_react154.default.createElement(
    PopoverContextProvider,
    {
      value: {
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        arrowX: popover.floating?.middlewareData?.arrow?.x,
        arrowY: popover.floating?.middlewareData?.arrow?.y,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape: closeOnEscape2,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
        getStyles: getStyles2
      }
    },
    children
  );
}
Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = "@mantine/core/Popover";
Popover.extend = (input) => input;

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/CloseButton/CloseIcon.mjs
var import_react155 = __toESM(require_react(), 1);
"use client";
var CloseIcon = (0, import_react155.forwardRef)(
  ({ size: size3 = "var(--cb-icon-size, 70%)", style, ...others }, ref) => /* @__PURE__ */ import_react155.default.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...style, width: size3, height: size3 },
      ref,
      ...others
    },
    /* @__PURE__ */ import_react155.default.createElement(
      "path",
      {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  )
);
CloseIcon.displayName = "@mantine/core/CloseIcon";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs
var import_react156 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.module.css.mjs
"use client";
var classes24 = { "root": "m-86a44da5", "root--subtle": "m-220c80f2" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs
"use client";
var defaultProps52 = {
  variant: "subtle"
};
var varsResolver26 = createVarsResolver((_, { size: size3, radius, iconSize }) => ({
  root: {
    "--cb-size": getSize(size3, "cb-size"),
    "--cb-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--cb-icon-size": rem(iconSize)
  }
}));
var CloseButton = polymorphicFactory((_props, ref) => {
  const props = useProps("CloseButton", defaultProps52, _props);
  const {
    iconSize,
    children,
    vars,
    radius,
    className,
    classNames,
    style,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    disabled,
    variant,
    icon,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "CloseButton",
    props,
    className,
    style,
    classes: classes24,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver26
  });
  return /* @__PURE__ */ import_react156.default.createElement(
    UnstyledButton,
    {
      ref,
      ...others,
      unstyled,
      variant,
      disabled,
      mod: [{ disabled: disabled || dataDisabled }, mod],
      ...getStyles2("root", { variant, active: true })
    },
    icon || /* @__PURE__ */ import_react156.default.createElement(CloseIcon, null),
    children
  );
});
CloseButton.classes = classes24;
CloseButton.displayName = "@mantine/core/CloseButton";

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ThemeIcon/ThemeIcon.mjs
var import_react157 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ThemeIcon/ThemeIcon.module.css.mjs
"use client";
var classes25 = { "root": "m-7341320d" };

// node_modules/.pnpm/@mantine+core@7.5.1_@mantine+hooks@7.5.1_@types+react@18.2.52_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ThemeIcon/ThemeIcon.mjs
"use client";
var defaultProps53 = {};
var varsResolver27 = createVarsResolver(
  (theme, { size: size3, radius, variant, gradient, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--ti-size": getSize(size3, "ti-size"),
        "--ti-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--ti-bg": color || variant ? colors.background : void 0,
        "--ti-color": color || variant ? colors.color : void 0,
        "--ti-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ThemeIcon = factory((_props, ref) => {
  const props = useProps("ThemeIcon", defaultProps53, _props);
  const { classNames, className, style, styles, unstyled, vars, autoContrast, ...others } = props;
  const getStyles2 = useStyles({
    name: "ThemeIcon",
    classes: classes25,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver27
  });
  return /* @__PURE__ */ import_react157.default.createElement(Box, { ref, ...getStyles2("root"), ...others });
});
ThemeIcon.classes = classes25;
ThemeIcon.displayName = "@mantine/core/ThemeIcon";

export {
  rem,
  getSize,
  getSpacing,
  getFontSize,
  createVarsResolver,
  clamp,
  useDidUpdate,
  useUncontrolled,
  useDisclosure,
  MantineProvider,
  useResolvedStylesApi,
  useStyles,
  ColorSchemeScript,
  useProps,
  createTheme,
  Box,
  factory,
  Collapse,
  ScrollArea,
  UnstyledButton,
  Paper,
  Popover,
  CloseButton,
  Group,
  Input,
  useInputProps,
  Flex,
  AccordionChevron,
  Accordion,
  Text,
  Anchor,
  AppShell,
  Burger,
  Button,
  Center,
  Container,
  Grid,
  PasswordInput,
  Stack,
  Stepper,
  Tabs,
  TextInput,
  ThemeIcon,
  Title
};
//# sourceMappingURL=/build/_shared/chunk-REOWHZ4E.js.map
