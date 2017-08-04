var links = ["http://sherlockholmes.com/wp/wp-content/uploads/2013/09/logo31.jpg",

"http://wonder4.co/wp-content/uploads/2015/09/%E5%85%8B%E8%8E%89%E7%B5%B2%E8%92%82TOP12%E6%9B%B8%E7%9B%92%E7%89%88990811-864x1024.jpg",

"http://0.share.photo.xuite.net/sweetcookies51319/108d288/4130481/157313495_x.jpg",

"http://www.spy-nets.com/img/p/109-630-thickbox.jpg"
,"https://vignette2.wikia.nocookie.net/hellokitty/images/5/5e/Sanrio_Characters_Pompompurin_Image009.gif/revision/latest/zoom-crop/width/240/height/240?cb=20100814044557",
"http://www.goupuzi.com/dogbrand/dogpic103.jpg"             
];
var titles = ["~Sherlock Holmes~","克莉絲蒂推理全集 很好看","mamegoma 很可愛","眼鏡拍攝器 很想要這種東西!","Sanrio系列我最喜歡的是pompompurin","我最喜歡的狗是博美犬"]
var index = 0;
var autoplay = fales
function prevPic() {
  console.log("prevPic: " + index);
  let img = document.getElementById("pic");
  index--;
  img.src = links[index % links.length];
  let title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
}

function nextPic() {
  console.log("nextPic: " + index);
  var img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
   if(autoplay) {
    setTimeout(nextPic, 3000);
  }
  var title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);
}

 if(autoplay) {
    setTimeout(nextPic, 3000);
  }
