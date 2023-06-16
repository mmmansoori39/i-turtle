// login and register page displaying

let reg = document.querySelector("#reg");
let log = document.querySelector("#log");
let logdet = document.querySelector("#logdet");
let regdet = document.querySelector("#regdet");
function regpage() {
  logdet.classList.add("d_none");
  regdet.classList.remove("d_none");
  log.classList.add("light");
  reg.classList.add("dark");
  log.classList.remove("dark");
  reg.classList.remove("light");
}
function logpage() {
  logdet.classList.remove("d_none");
  regdet.classList.add("d_none");
  log.classList.add("dark");
  reg.classList.add("light");
  log.classList.remove("light");
  reg.classList.remove("dark");
}

// name adding in home page
function register() {
  let fname = document.querySelector("#name").value;
  localStorage.setItem("myname", fname);
}

// child, doctor and parent portal access

let child = document.querySelector("#child");
let doctor = document.querySelector("#doctor");
let parent = document.querySelector("#parent");
let content = document.querySelector(".content");
let docparent = document.querySelector(".doc_paren");
child.addEventListener("click", function () {
  docparent.classList.add("d_none");
  content.classList.remove("d_none");
});
doctor.addEventListener("click", function () {
  docparent.classList.remove("d_none");
  content.classList.add("d_none");
});
parent.addEventListener("click", function () {
  docparent.classList.remove("d_none");
  content.classList.add("d_none");
});

// question and responses adding , editing and deleting

const datalist = {
  Hi: "Hello",
  "How are you": "I am fine",
  "What is insulin":
    "Insulin is a hormone made in the pancreas that helps our bodies use the energy from sugar in our food. It's like a key that unlocks the doors to our cells to let sugar in.",
  "Can I go to school": "Yes, you can go to school but Be careful..👍👍",
  "Can I play with other children":
    "Yes, of course you can play with your friends. Enjoy your play time ⛹️‍♂️",
};
const videolist = {
  Hi: "./multimedia/video2.mp4",
  "How are you": "./multimedia/video3.mp4",
  "What is insulin": "./multimedia/video2.mp4",
  "Can I go to school": "./multimedia/video1.mp4",
  "Can I play with other children": "./multimedia/video3.mp4",
};

let addcontent = document.querySelector("#add");
let editcontent = document.querySelector("#edit");
let deletecontent = document.querySelector("#delete");
let question = document.querySelector("#question");
let responses = document.querySelector("#responses");
addcontent.addEventListener("click", function () {
  datalist[question.value] = responses.value;
  if (!question.value == "" && !responses.value == "") {
    makebox();
  }
  clearinput();
});
editcontent.addEventListener("click", function () {
  datalist[question.value] = responses.value;
  makebox();
  clearinput();
});
deletecontent.addEventListener("click", function () {
  delete datalist[question.value];
  makebox();
  clearinput();
});

function clearinput() {
  question.value = "";
  responses.value = "";
}

// creating span tag using javascript

function makebox() {
  let keys = Object.keys(datalist);
  let qbox = document.querySelector(".q_box");
  qbox.innerHTML = "";
  keys.map((data) => {
    let spantag = document.createElement("span");
    let ptag = document.createElement("p");
    spantag.classList.add("btnvalue");
    ptag.innerHTML = data;
    qbox.appendChild(spantag);
    spantag.appendChild(ptag);
  });
}
makebox();

let btn = document.querySelectorAll(".btnvalue");
btn.forEach((item) => {
  item.addEventListener("click", clickevent);
});
function clickevent(e) {
  let para = e.target.innerText;
  fetchdata(para);
}

// code for asking mr turtle

let ask = document.querySelector("#ask");
let rendata = document.querySelector("#rendata");
let video = document.querySelector("#video");
ask.addEventListener("click", function () {
  let datavalue = document.querySelector("#askquestion").value;
  fetchdata(datavalue);
  fetchvideo(datavalue);
  askquestion.value = "";
});
function fetchdata(datavalue) {
  let resdata = getdata(datavalue);
  rendata.innerText = resdata;
}
function fetchvideo(datavalue) {
  let resvideo = getvideo(datavalue);
  video.src = resvideo;
}
function getdata(datavalue) {
  if (datalist[datavalue] == undefined) {
    return "Please enter a valid question";
  } else {
    return datalist[datavalue];
  }
}
function getvideo(datavalue) {
  if (videolist[datavalue] == undefined) {
    return "./multimedia/Diabetes Besties.mp4";
  } else {
    return videolist[datavalue];
  }
}

// add multimedia content

let addvideo = document.querySelector("#addvideo");
let multimedia = document.getElementById("multimedia");
function upload() {
  let freader = new FileReader();
  freader.readAsDataURL(multimedia.files[0]);
  freader.onload = function () {
    addvideo.src = freader.result;
    let videolink = freader.result;
    document.querySelector("#getlink").innerText = "Video is uploaded";
    document.querySelector("#getlink").style.color = "#9A0F5D";
    // console.log(freader.result);
  };
}
