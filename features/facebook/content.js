import {removeStories} from './rightPanel/stories/stories.js';
import { MutationObserverService } from '../../commons/mutationObserver.js';

const mutationObserverInstance = new MutationObserverService();
removeStories(mutationObserverInstance);