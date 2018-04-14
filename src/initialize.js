export default function initialize(mod) {
  if (window && typeof window.interactionLoaded === 'function') {
    window.interactionLoaded(mod);
  } else {
    console.warn('interactionLoaded callback is not defined');
  }
}
