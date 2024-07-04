if (document.location.host == 'beta.music.apple.com' && document.location.pathname.startsWith("/us/")) {
    document.location.replace(document.location.toString().replace("/us/","/ca/"))
}