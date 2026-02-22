const scrollable = document.getElementById('scrollable');
const hotdog = document.getElementById('hotdog');
const track = document.getElementById('track');

scrollable.addEventListener('scroll', () => {
  const scrollRatio = scrollable.scrollTop / (scrollable.scrollHeight - scrollable.clientHeight);
  const maxTop = track.clientHeight - hotdog.clientHeight;
  hotdog.style.top = (scrollRatio * maxTop) + 'px';
});