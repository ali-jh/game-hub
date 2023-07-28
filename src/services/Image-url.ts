import noimage from "../assets/logo.webp"

const GetCroppedImageUrl = (url: string) => {
  if(!url) return noimage;
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
 return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default GetCroppedImageUrl;
