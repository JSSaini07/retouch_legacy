export class MutationObserverService {
    constructor() {
        this.watchlist = [];
        this.mutationTypeMap = {
            'nodeAdded': 'childList',
            'nodeRemoved': 'childList',
        }
        const callback = this.generateCallbackFromWatchlist();
        const observer = new MutationObserver(callback);
        observer.observe(document, {childList: true, subtree: true});
    }
    updateWatchlist(data) {
        this.watchlist.push(data);
    }
    generateCallbackFromWatchlist() {
        return (mutationsList) => {
            mutationsList.forEach((mutation) => {
                this.watchlist.map((watchItem) => {
                    if(mutation.type !== this.mutationTypeMap[watchItem.type]) {return;}
                    if(watchItem.type === 'nodeAdded'){
                        this.nodeAddition(watchItem, mutation);
                    }
                })
            });
        };
    }
    nodeAddition(watchItem, mutation){
        const watchElement = document.querySelectorAll(watchItem.DOMIdentifier)[0];
        const addedNodes = mutation.addedNodes;
        for(var i=0;i<addedNodes.length;i++) {
            if(addedNodes[i] === watchElement) {
                watchItem.action();
            }
        }
    }
}