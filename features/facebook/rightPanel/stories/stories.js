export function removeStories(mutationObserverInstance) {
    mutationObserverInstance.updateWatchlist({
        'type': 'nodeAdded',
        'DOMIdentifier': '#fb_stories_card_root',
        'action': performRemoval
    });

    function performRemoval() {
        const storiesPanel = document.getElementById('stories_pagelet_rhc');
        storiesPanel.remove();
    }
}