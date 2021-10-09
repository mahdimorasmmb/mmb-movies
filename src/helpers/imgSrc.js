export default function imgSrc(path, size = "orginal") {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
