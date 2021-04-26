var routerTitle = '',siteTitle = '';

function setTitle () {
    if (!routerTitle && !siteTitle){
        document.title = 'loading...'
    }else if (!routerTitle && siteTitle) {
        document.title = siteTitle
    }else if (routerTitle && !siteTitle){
        document.title = routerTitle
    }else {
        document.title = routerTitle + '-' + siteTitle
    }
}

let titleControl = {
    setRouterTitle (title) {
        routerTitle = title
        setTitle();
    },
    setSiteTitle (title) {
        siteTitle = title;
        setTitle();
    }
}
export default titleControl