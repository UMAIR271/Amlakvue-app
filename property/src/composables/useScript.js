import { onMounted } from "vue";

const useScript = (src, async = false, defer = false) => {
  onMounted(() => {
    // check if script already exists
    if (document.querySelector(`head script[src="${src}"`)) return;

    // add tag to head
    const tag = document.createElement("script");
    tag.setAttribute("src", src);
    if (async) tag.setAttribute("async", "");
    if (defer) tag.setAttribute("defer", "");
    tag.setAttribute("type", "text/javascript");
    document.head.append(tag);
  });
};

export default useScript;