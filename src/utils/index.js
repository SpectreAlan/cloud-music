export const debounce = (func, delay) => {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}

export const getCount = (count) => {
  if (count < 0) {return;}
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
};

export const formatPlayTime = (interval) => {
  interval = interval | 0;// |0表示向下取整
  const minute = (interval / 60) | 0;
  const second = (interval % 60).toString().padStart(2, '0');
  return `${minute}:${second}`;
};

export const formatDuration = (t) => {
  t = t / 1000
  let hours = parseInt(t / 3600)
  t = t % 3600
  let minutes = parseInt(t / 60)
  let seconds = parseInt(t % 60)
  let sec = hours < 10 ? '0' + hours : hours
  let minStr = minutes < 10 ? '0' + minutes : minutes
  let hourStr = seconds < 10 ? '0' + seconds : seconds
  return sec + ':' + minStr + ':' + hourStr
};
