function get_domain() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3000";
  } else {
    return "https://any-share.netlify.com";
  }
}

export const DOMAIN = get_domain();
