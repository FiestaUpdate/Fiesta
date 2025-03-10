const newPostOpen = document.getElementById("newPostOpen"); // 헤더 개시물 작성 버튼
const modalBackground = document.getElementById("modalBackground"); // file 모달창
const newPostClose = document.getElementById("newPostClose"); // 닫기 버튼
const modalBackgroundEidt = document.getElementById("modalBackgroundEidt"); // 파일 편집창
const modalBackgroundText = document.getElementById("modalBackgroundText"); // 텍스트 작성창

const slideImages = document.getElementById("slideImages"); // edit화면 파일 리스트
const filePreview = document.getElementById("filePreview"); // edit화면 파일 추가의 미리보기
const textFileSwiper = document.getElementById("textFileSwiper"); // text화면 파일 리스트(합치기,지우기사용)
// const postFileTextArea = document.getElementById("postFileTextArea"); // text 접근성 리스트

const modalBackgroundFinish = document.getElementById("modalBackgroundFinish"); // 새 게시물 작성 완료 창
const modalBackgroundClose = document.getElementById("modalBackgroundClose"); // 새 게시물 작성 취소 창

var form = new FormData(); // 파일 리스트 보내기 위해 form 선언
// 게시물 작성 버튼 누르면
newPostOpen.addEventListener("click", function () {
  modalBackground.style.display = "flex";
  document.body.style.overflow = "hidden";
});
//! 닫기 버튼
// 닫기 버튼 누르면
newPostClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
  document.body.style.overflow = "unset";
  slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
  filePreview.innerHTML = "";
  textFileSwiper.innerHTML = "";
  // postFileTextArea.innerHTML = "";
});
// boardContent.addEventListener("change", () => {
//   boardContent.sytle.color = "red";
// });
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
  modalBackgroundText.style.display = "none";
  slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
  filePreview.innerHTML = "";
  textFileSwiper.innerHTML = "";
  // postFileTextArea.innerHTML = "";
});

// fixme
// 텍스트입력 창에서 뒤로가기 버튼 누르면
// 선택한 사진이 유지되어서 재선택이 안됨. -> 리셋 시키기 
const backBtnText = document.getElementById("backBtnText");
backBtnText.addEventListener("click", () => {
  modalBackground.style.display = "flex";
  modalBackgroundClose.style.display = "none";
  modalBackgroundEidt.style.display = "none";
  modalBackgroundText.style.display = "none";
  slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
  filePreview.innerHTML = "";
  textFileSwiper.innerHTML = "";

  // *(수정)선택한 사진이 유지되어서 재선택이 안됨. -> 리셋 시키기 (value 이용함)
  document.getElementById("cropperfile").value = "";
  console.log(document.getElementById("cropperfile").files);
});

document.getElementById("closeTextCancel").addEventListener("click", () => {
  modalBackgroundClose.style.display = "none";

  // *(수정)선택한 사진이 유지되어서 재선택이 안됨. -> 리셋 시키기 (value 이용함)
  document.getElementById("cropperfile").value = "";
  console.log(document.getElementById("cropperfile").files);
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

// backBtnText.addEventListener("click", () => {
//   modalBackgroundText.style.display = "none";
//   modalBackgroundEidt.style.display = "flex";
//   textFileSwiper.innerHTML = "";
//   postFileTextArea.innerHTML = "";
//   // formData.delete('files');
// });

// //! 접근성 토클
// const $toggle = document.querySelector(".toggleSwitch");
// $toggle.onclick = () => {
//   $toggle.classList.toggle("active");
// };
// const $toggle2 = document.querySelector(".toggleSwitch2");
// $toggle2.onclick = () => {
//   $toggle2.classList.toggle("active");
// };

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

  // -----------
  
  const swiperSildeDiv = document.createElement("div");
  const fileImg = document.createElement("img");

  swiperSildeDiv.classList.add("swiper-slide");
  fileImg.classList.add("post-img-viwe");
  fileImg.id = "files";
  fileImg.setAttribute("src", "/resources/images/default/defaultImg.png");
  console.log(fileImg);

  swiperSildeDiv.append(fileImg);
  textFileSwiper.append(swiperSildeDiv);
  // -----------

  // postFileText.style.display = "none";
  backBtnText.addEventListener("click", () => {
    modalBackground.style.display = "flex";
    modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "none";


  });
});
// document.getElementById("newPostAll").addEventListener("click", () => {
//   console.log(fileImg);
// });
//! 컴퓨터에서 선택
document.getElementById("cropperfile").addEventListener("change", (e) => {

  if (e.target.files[0] != undefined) {
    // 이벤트 발생한 요소에 선택된 파일이 있을 경우
    for (let i = 0; i < e.target.files.length; i++) {

      console.log(e.target.files[i]);
      
      // 이벤트 발생 파일 길이 만큼 반복문 돌림
      form.append("files", e.target.files[i]);

      const reader = new FileReader(); // 파일 읽는 객체
      reader.readAsDataURL(e.target.files[i]); // 파일 정보를 불러와서 URL형태로 저장

      // console.log(e.target.files[i]);

      reader.onload = (e) => {
        // 파일 읽은 후
        // *text 부분 파일-------------------------------------------------------------
        // <div class="swiper-slide"><img id="file" src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기"></div>

        // swiper
        const swiperSildeDiv = document.createElement("div");
        const fileImg = document.createElement("img");

        swiperSildeDiv.classList.add("swiper-slide");
        fileImg.classList.add("post-img-viwe");
        fileImg.id = "files";
        fileImg.setAttribute("src", e.target.result);


        // console.log(e.target.result);

        swiperSildeDiv.append(fileImg);
        textFileSwiper.append(swiperSildeDiv);

        // cropper = fileImg.cropper({
        //       dragMode: 'move',
        //       viewMode: 1,
        //       aspectRatio: 1,
        //       autoCropArea: 0.9,
        //       minCropBoxWidth: 500,
        //       restore: false,

        //       guides: false,
        //       center: true,
        //       highlight: false,
        //       cropBoxMovable: false,
        //       cropBoxResizable: false,
        //       toggleDragModeOnDblclick: false
        // });

        // // *text 접근성 부분 파일*
        // // postFileText.style.display = "block";

        // // <div class="postFileText">
        // //   <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
        // //   <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
        // // </div>

        // const postFileTextDiv = document.createElement("div");
        // const postFileTextImg = document.createElement("img");
        // const postFileTextInput = document.createElement("input");

        // postFileTextDiv.classList.add("postFileText");
        // postFileTextImg.id = "editFile";
        // postFileTextImg.setAttribute("src", e.target.result);
        // postFileTextInput.setAttribute("type", "text");
        // postFileTextInput.setAttribute("name", "imgAccessibility");
        // postFileTextInput.id = "imgAccessibility"+[i];
        // postFileTextInput.setAttribute("placeholder", "대체 텍스트 입력...");

        // postFileTextDiv.append(postFileTextImg, postFileTextInput);
        // postFileTextArea.append(postFileTextDiv);

        var swiper = new Swiper(".swiper", {
          spaceBetween: 0.5, // 슬라이드 사이 여백
          slidesPerView: "auto", // 한 슬라이드에 보여줄 갯수
          centeredSlides: true, //센터모드
          // autoplay: {     //자동슬라이드 (false-비활성화)
          //   delay: 2500, // 시간 설정
          //   disableOnInteraction: false, // false-스와이프 후 자동 재생
          // },
          loop: false, // 슬라이드 반복 여부

          loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
          pagination: {
            // 호출(pager) 여부
            el: ".swiper-pagination", //버튼을 담을 태그 설정
            clickable: true, // 버튼 클릭 여부
          },
          navigation: {
            // 버튼
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      };
    }
    modalBackground.style.display = "none";
    // modalBackgroundEidt.style.display = "flex";
    // postFileText.style.display = "block";
    // modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "flex";
  }
});

// 게시글 작성 유효성 검사
function writeValidate() {
  const boardContent = document.getElementById("updateBoardContent");
  if (boardContent.value.trim().length == 0) {
    alert("내용을 입력해주세요.");
    boardContent.value = "";
    boardContent.focus();
    return false;
  } else {
    return true;
    console.log("true가 들어감");
  }
  
}
function writeValidatee() {
const boardContent2 = document.getElementById("boardContent2");
if (boardContent2.value.trim().length == 0) {
  alert("내용을 입력해주세요.");
  boardContent2.value = "";
  boardContent2.focus();
  return false;
} else {
  return true;
  console.log("true가 들어감");
}
}
document.getElementById("newPostCloseFinish").addEventListener("click", () => {
  modalBackgroundFinish.style.display = "none";
  location.reload();
});

// todo: 모달창 바깥 클릭 시 모달창 꺼짐--------------------------------------------
window.addEventListener("click", (e) => {
  const modalBackground = document.getElementById("modalBackground");
  const modalBackgroundEidt = document.getElementById("modalBackgroundEidt");
  const modalBackgroundText = document.getElementById("modalBackgroundText");
  const modalBackgroundFinish = document.getElementById(
    "modalBackgroundFinish"
  );
  const modalBackgroundClose = document.getElementById("modalBackgroundClose");
  const modalBackgroundUpdate = document.getElementById(
    "modalBackgroundUpdate"
  );

  // 파일화면
  e.target === modalBackground
    ? (modalBackground.style.display = "none")
    : false;

  // 편집화면
  e.target === modalBackgroundEidt
    ? (modalBackgroundEidt.style.display = "none")
    : false;

  // 텍스트작성 화면
  e.target === modalBackgroundText
    ? ( modalBackgroundClose.style.display = "flex")
    : false;

  // 작성완료 화면
  e.target === modalBackgroundFinish
    ? (modalBackgroundFinish.style.display = "none" ): false;

  // 업데이트 화면
  e.target === modalBackgroundUpdate
    ? (modalBackgroundUpdate.style.display = "none")
    : false;

  document.body.style.overflow = "unset";

});

document.getElementById("boardPubPriFlag").addEventListener("change", () => {
  if (document.getElementById("boardPubPriFlag").checked) {
    document.getElementById("boardPubPriFlag_hidden").disabled = true;
  } else {
    document.getElementById("boardPubPriFlag_hidden").disabled = false;
  }
});

document.getElementById("commentBlockFlag").addEventListener("change", () => {
  if (document.getElementById("commentBlockFlag").checked) {
    document.getElementById("commentBlockFlag_hidden").disabled = true;
  } else {
    document.getElementById("commentBlockFlag_hidden").disabled = false;
  }
});
