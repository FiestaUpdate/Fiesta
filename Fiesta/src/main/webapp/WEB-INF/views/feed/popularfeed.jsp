<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="boardList" value="${map.boardList}"/>
<c:set var="boardCount" value="${map.boardCount}"/>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fiesta</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/popularfeed.css" />
    <link rel="stylesheet" href="/resources/css/search/search-complete-style.css" />
    <link rel="stylesheet" href="/resources/css/search/search-complete-style2.css" />
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>

    <link rel="stylesheet" href="/resources/css/board/newpost-file-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-edit-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-text-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-finish-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-close-style.css" />

  </head>

  <body>
      <jsp:include page="/WEB-INF/views/common/header.jsp"/>
    <main>
      <section class="feed-section" id="feedSection">
        <div class="img-container" id="imgContainer">
        <c:if test="${!empty boardList}">
        <c:forEach var="board" items="${boardList}">
          <a href="/feedDetail/${board.boardNo}">
            <c:if test="${!empty board.imgPath}">
            <img class="feed-img" src="${board.imgPath}" />
            </c:if>
            <c:if test="${empty board.imgPath}">
            <img class="feed-img" src="/resources/images/default/defaultImg.png" />
            </c:if>
            <div class="hover-icon-container">
              <i class="fa-regular fa-heart"></i><span>${board.likeCount}</span>
              <i class="fa-regular fa-comment"></i><span>${board.commentCount}</span>
            </div>
          </a>
        </c:forEach>
        </c:if>
        </div>

      </section>
    </div>
  </main>
    
    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

    <!-- 모달창 include -->
    <jsp:include page="/WEB-INF/views/board/newpost-file.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-eidt.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-text.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-close.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-finish.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-update.jsp" />

  </body>

  <!-- jquery -->
  <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

  <script src="/resources/js/common/common.js"></script>
  <script src="/resources/js/feed/popularfeed.js"></script>

  <script src="/resources/js/newpost.js"></script>
  <script src="/resources/js/boardWriteUpdate.js"></script>
    
</html>