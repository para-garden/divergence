const PAGES_ORIGIN = "https://divergence-5ax.pages.dev";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Redirect /divergence to /divergence/ so relative paths resolve correctly
    if (url.pathname === "/divergence") {
      url.pathname = "/divergence/";
      return Response.redirect(url.toString(), 301);
    }

    // Strip /divergence prefix and fetch from Pages
    const path = url.pathname.replace(/^\/divergence/, "") || "/";
    const pagesUrl = new URL(path + url.search, PAGES_ORIGIN);

    const response = await fetch(pagesUrl, {
      method: request.method,
      headers: request.headers,
    });

    // Pass through with immutable headers copied
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  },
};
