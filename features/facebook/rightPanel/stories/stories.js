
export function removeStories(mutationObserverInstance) {
    mutationObserverInstance.updateWatchlist({
        'type': 'NODE_ADDED',
        'DOMIdentifier': '#stories_pagelet_rhc',
        'action': performRemoval
    });

    function performRemoval() {
        const storiesPanel = document.getElementById('stories_pagelet_rhc');
        storiesPanel.remove();
    }
}