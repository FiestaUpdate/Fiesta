const newPostOpen = document.getElementById("newPostOpen"); // 헤더 개시물 작성 버튼
const modalBackground = document.getElementById("modalBackground"); // file 모달창
const newPostClose = document.getElementById("newPostClose"); // 닫기 버튼
const modalBackgroundEidt = document.getElementById("modalBackgroundEidt"); // 파일 편집창
const modalBackgroundText = document.getElementById("modalBackgroundText"); // 텍스트 작성창

const slideImages = document.getElementById("slideImages"); // edit화면 파일 리스트
const filePreview = document.getElementById("filePreview"); // edit화면 파일 추가의 미리보기
const textFileSwiper = document.getElementById("textFileSwiper"); // text화면 파일 리스트(합치기,지우기사용)
const postFileTextArea = document.getElementById("postFileTextArea"); // text 접근성 리스트

const modalBackgroundFinish = document.getElementById("modalBackgroundFinish"); // 새 게시물 작성 완료 창 
const modalBackgroundClose = document.getElementById("modalBackgroundClose"); // 새 게시물 작성 취소 창

var form = new FormData(); // 파일 리스트 보내기 위해 form 선언
// 게시물 작성 버튼 누르면
newPostOpen.addEventListener("click", function () {
  modalBackground.style.display = "flex";
  document.getElementsByTagName("body")[0].classList.add("scrollLock");
});
//! 닫기 버튼
// 닫기 버튼 누르면
newPostClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
  document.getElementsByTagName("body")[0].classList.remove("scrollLock");
  slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
  filePreview.innerHTML = "";
  textFileSwiper.innerHTML = "";
  postFileTextArea.innerHTML = "";
});
``;
// edit작성 중 x버튼
// document
//   .getElementById("newPostClosePostEdit")
//   .addEventListener("click", function () {
//     modalBackground.style.display = "flex";
//     modalBackgroundEidt.style.display = "none";
//     modalBackgroundText.style.display = "none";
//     slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
//     filePreview.innerHTML = "";
//     textFileSwiper.innerHTML = "";
//     postFileTextArea.innerHTML = "";
//   });
const newPostClosePostEdit = document.getElementById("newPostClosePostEdit");
const newPostClosePostText = document.getElementById("newPostClosePostText");
const backBtnedit = document.getElementById("backBtnedit"); // edit 뒤로가기 버튼

backBtnedit.addEventListener("click", function () {
  console.log("닫기버튼 눌림");
  modalBackgroundClose.style.display = "flex";
});
newPostClosePostEdit.addEventListener("click", function () {
  console.log("닫기버튼 눌림");
  modalBackgroundClose.style.display = "flex";
});
newPostClosePostText.addEventListener("click", function () {
  modalBackgroundClose.style.display = "flex";
});
// x-> 삭제
document.getElementById("closeTextDelete").addEventListener("click", () => {
  modalBackground.style.display = "flex";
  modalBackgroundClose.style.display = "none";
  modalBackgroundEidt.style.display = "none";
  modalBackgroundText.style.display = "none";
  slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
  filePreview.innerHTML = "";
  textFileSwiper.innerHTML = "";
  postFileTextArea.innerHTML = "";
});
document.getElementById("closeTextCancel").addEventListener("click", () => {
  modalBackgroundClose.style.display = "none";
});
// text작성중 x버튼
// document
//   .getElementById("newPostClosePostText")
//   .addEventListener("click", function () {
//     modalBackground.style.display = "flex";
//     modalBackgroundEidt.style.display = "none";
//     modalBackgroundText.style.display = "none";
//     slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
//     filePreview.innerHTML = "";
//     textFileSwiper.innerHTML = "";
//     postFileTextArea.innerHTML = "";
//   });

// document.getElementById('newPostBottom').addEventListener('click',()=>{
//   modalBackground.style.display = 'flex';
// });

// modalBackground.addEventListener('click',()=>{
//   modalBackground.style.display = 'none';
//   document.getElementsByTagName('body')[0].classList.remove('scrollLock');

// });

// ! 뒤로가기 버튼

// edit에서 뒤로가기
// document.getElementById("backBtnedit").addEventListener("click", () => {
//   modalBackgroundEidt.style.display = "none";
//   modalBackground.style.display = "flex";
//   slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
//   filePreview.innerHTML = "";
//   textFileSwiper.innerHTML = "";
//   postFileTextArea.innerHTML = "";
//   formData.delete("files");
// });
// text에서 뒤로가기
const backBtnText = document.getElementById("backBtnText");
backBtnText.addEventListener("click", () => {
  modalBackgroundText.style.display = "none";
  modalBackgroundEidt.style.display = "flex";
  textFileSwiper.innerHTML = "";
  postFileTextArea.innerHTML = "";
  // formData.delete('files');
});

//! 접근성 토클
const $toggle = document.querySelector(".toggleSwitch");
$toggle.onclick = () => {
  $toggle.classList.toggle("active");
};

const postFileText = document.getElementById("postFileText"); // 접근성박스
// ! 기본 이미지 선택
//? 1. 바로 텍스트 작성 부분으로 가기
//? 2. 기본 이미지 넣어주기
//? 3. 접근성 부분 안보이게 하기
document.getElementById("basicImage").addEventListener("click", () => {
  modalBackground.style.display = "none";
  modalBackgroundText.style.display = "flex";

  //*기본이미지 생성 부분*
  // <div class="swiper-slide"><img id="file" src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기"></div>
  const swiperSildeDiv = document.createElement("div");
  const fileImg = document.createElement("img");

  swiperSildeDiv.classList.add("swiper-slide");
  fileImg.id = "files";
  fileImg.src = "../../resources/images/default/defaultImg.png";
  form.append("files", fileImg);

  swiperSildeDiv.append(fileImg);
  textFileSwiper.append(swiperSildeDiv);

  postFileText.style.display = "none";
  backBtnText.addEventListener("click", () => {
    modalBackground.style.display = "flex";
    modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "none";
  });
});

//! 컴퓨터에서 선택
document.getElementById("cropperfile").addEventListener("change", (e) => {
  if (e.target.files[0] != undefined) {
    // 이벤트 발생한 요소에 선택된 파일이 있을 경우

    for (let i = 0; i < e.target.files.length; i++) {
      // 이벤트 발생 파일 길이 만큼 반복문 돌림

      form.append("files", e.target.files[i]);
      const reader = new FileReader(); // 파일 읽는 객체
      console.log(e.target.files[i]);
      reader.onload = (e) => {
        

        // *edit부분 파일*-----------------------------------------
        // *<div class="eidt-file swiper-slide"><img id="eidtFile" src=""></div>
        // 나타날 div, img 생성
        const editFileDiv = document.createElement("div");
        const editFileImg = document.createElement("img");
        editFileDiv.classList.add("edit-file", "swiper-slide");

        editFileImg.classList.add("ready");
        editFileImg.id = "cropper-img" + [i];

        // 읽어온 URL을 editFileIm에 src요소로 추가
        editFileImg.setAttribute("src", e.target.result);
        
        // div와 img 합치기
        editFileDiv.append(editFileImg);
        // 부모요소에 div 합치기
        slideImages.append(editFileDiv);

      };
      filelist = e.target.result;
      reader.readAsDataURL(e.target.files[i]); // 파일 정보를 불러와서 URL형태로 저장
    }
    modalBackground.style.display = "none";
    modalBackgroundEidt.style.display = "flex";
    postFileText.style.display = "block";
  }
});

//! 다음 버튼
// edit 다음 버튼
document.getElementById("editNextBtn").addEventListener("click", () => {
  modalBackgroundEidt.style.display = "none";
  modalBackgroundText.style.display = "flex";
  /* key 확인하기 */


  // *text 부분 파일-------------------------------------------------------------
  // <div class="swiper-slide"><img id="file" src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기"></div>
  const reader = new FileReader();
  reader.readAsDataURL(value);

  reader.onload = () => {
   
  };
});

// ! edit에서 파일 추가 버튼
const addFileInput = document.getElementById("addFileInput");

addFileInput.addEventListener("change", (e) => {
  if (e.target.files[0] != undefined) {
    // 이벤트 발생한 요소에 선택된 파일이 있을 경우
    for (let i = 0; i < e.target.files.length; i++) {
      // 이벤트 발생 파일 길이 만큼 반복문 돌림
      const reader = new FileReader(); // 파일 읽는 객체

      reader.readAsDataURL(e.target.files[i]); // 파일 정보를 불러와서 URL형태로 저장

      reader.onload = (e) => {
        // 파일 읽은 후
        // <div class="eidt-file swiper-slide"><img id="eidtFile" src=""></div>

        // *edit부분 파일*
        // 나타날 div, img 생성
        const editFileDiv = document.createElement("div");
        const editFileImg = document.createElement("img");
        editFileDiv.classList.add("edit-file", "swiper-slide");
        editFileImg.classList.add("ready");
        editFileImg.id = "cropper-img";

        // 읽어온 URL을 editFileIm에 src요소로 추가
        editFileImg.setAttribute("src", e.target.result);

        // div와 img 합치기
        editFileDiv.append(editFileImg);

        // 부모요소에 div 합치기
        slideImages.append(editFileDiv);
      };
    }
  }
});

//! 최종 제출(게시하기 버튼 클릭)
const newPostAll = document.getElementById("newPostAll");
newPostAll.addEventListener("click", () => {
  const boardContent = document.getElementById("boardContent");
  const files = document.getElementById("file");

  // 해시태그 인식해서 a 태그로 감싸기
  const regEx = /(#[^\s#]+)/gm;

  boardContent.value = boardContent.value.replace(regEx, (match) => {
    const tagName = match.replace("#", "");
    return (
      "<a href='/search?searchInput=" +
      tagName +
      "' class='hashtag'>" +
      match +
      "</a>"
    );
  });

  // 언급 인식해서 a 태그로 감싸기
  const regEx2 = /(@[^\s@]+)/gm;

  boardContent.value = boardContent.value.replace(regEx2, (match) => {
    const tagName = match.replace("@", "");
    return "<a href='/feed/" + tagName + "' class='hashtag'>" + match + "</a>";
  });

  form.append("boardContent", boardContent.value); //게시물 텍스트 작성담기

  $.ajax({
    url: "/write",
    type: "Post",
    processData: false,
    contentType: false,
    data: form,
    success: (result) => {
      if (result > 0) {
        console.log("게시물 작성 성공");
        modalBackgroundText.style.display = "none";
        modalBackgroundFinish.style.display = "flex";
        // location.reload();
      } else {
        console.log("게시물 작성 실패");
      }
    },
    error: () => {
      console.log("게시물 작성 에러");
    },
  });
});

document.getElementById("newPostCloseFinish").addEventListener("click", () => {
  modalBackgroundFinish.style.display = "none";
  location.reload();
});
//! 사진 크롭
// var isInitialized = false;
// var cropper = "";
// var file = "";
// var _URL = window.URL || window.webkitURL;
// Initialize Slider

// $(document).ready(function () {
//   $("#cropperfile").change(function (e) {
//     if ((file = this.files[0])) {
//       var oFReader = new FileReader();
//       oFReader.readAsDataURL(file);
//       oFReader.onload = function () {
//         // Destroy the old cropper instance
//         $("#cropper-img").attr("src", this.result);
//         $("#cropper-img").addClass("ready");
//         if (isInitialized == true) {
//           $("#zoom-slider").val(0);
//           cropper.destroy();
//         }
//         initCropper();
//       };
//     }
//   });



$("#zoom-slider").slider({
  orientation: "horizontal",
  range: "min",
  max: 1,
  min: 0,
  value: 0,
  step: 0.0001,
  slide: function () {
    if (isInitialized == true) {
      if (
        cropper.canvasData.naturalWidth < 600 ||
        cropper.canvasData.naturalHeight < 400
      ) {
        event.preventDefault();
      } else {
        var currentValue = $("#zoom-slider").slider("value");
        var zoomValue = parseFloat(currentValue);
        cropper.zoomTo(zoomValue.toFixed(4));
      }
    }
  },
});


// function initCropper() {
//   console.log("호출됨?");
//   console.log(form);
//   // var vEl = document.getElementById("cropper-img");
//   var vEl = document.getElementsByClassName("ready");
//   cropper = new Cropper(vEl, {
//     viewMode: 3, // 이미지크기 벗어날지 안에서 crop할지
//     dragMode: "move", // 마우스 포인터의 역할(move, crop, none)
//     aspectRatio: 1, // 자르기 비율
//     checkOrientation: false,
//     cropBoxMovable: true, // 드래그해 자르기 상자 이동
//     cropBoxResizable: false, //CropperBox의 사이즈 고정(자르기 상자 안커지게)
//     zoomOnTouch: true, //터치 드래그 이미지 확대.축소
//     zoomOnWheel: true, // 휠로 확대
//     guides: true,
//     highlight: false,
//     autoCropArea: 1.0, //cropper 시작시 CopperBox의 크기 지정(0.1~1.0)
//     ready: function (e) {
//       var cropper = this.cropper;
//       cropper.zoomTo(0);

//       var imageData = cropper.getImageData();
//       console.log("imageData ", imageData);
//       var minSliderZoom = imageData.width / imageData.naturalWidth;

//       $("#min-zoom-val").html(minSliderZoom.toFixed(4));

//       $(".cr-slider-wrap").show();
//       $("#zoom-slider").slider("option", "max", 1);
//       $("#zoom-slider").slider("option", "min", minSliderZoom);
//       $("#zoom-slider").slider("value", minSliderZoom);
//     },
//   });
//   isInitialized = true;
// }

// function initCropper() {
//   console.log("호출됨?");
//   console.log(form);
//   var vEl = document.getElementById("cropper-img");
//   cropper = new Cropper(vEl, {
//     viewMode: 3, // 이미지크기 벗어날지 안에서 crop할지
//     dragMode: "move", // 마우스 포인터의 역할(move, crop, none)
//     aspectRatio: 1, // 자르기 비율
//     checkOrientation: false,
//     cropBoxMovable: true, // 드래그해 자르기 상자 이동
//     cropBoxResizable: false, //CropperBox의 사이즈 고정(자르기 상자 안커지게)
//     zoomOnTouch: true, //터치 드래그 이미지 확대.축소
//     zoomOnWheel: true, // 휠로 확대
//     guides: true,
//     highlight: false,
//     autoCropArea: 1.0, //cropper 시작시 CopperBox의 크기 지정(0.1~1.0)
//     ready: function (e) {
//       var cropper = this.cropper;
//       cropper.zoomTo(0);

//       var imageData = cropper.getImageData();
//       console.log("imageData ", imageData);
//       var minSliderZoom = imageData.width / imageData.naturalWidth;

//       $("#min-zoom-val").html(minSliderZoom.toFixed(4));

//       $(".cr-slider-wrap").show();
//       $("#zoom-slider").slider("option", "max", 1);
//       $("#zoom-slider").slider("option", "min", minSliderZoom);
//       $("#zoom-slider").slider("value", minSliderZoom);
//     },
//   });
//   isInitialized = true;
// }

// const feedUpdateBtnLogin = document.getElementById("feedUpdateBtnLogin");
// const modalBackgroundUpdate = document.getElementById("modalBackgroundUpdate");

// feedUpdateBtnLogin.addEventListener("click", () => {
//   modalBackgroundUpdate.style.display = "flex";
// });
