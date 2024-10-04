document.addEventListener("DOMContentLoaded", function () {
  const boardMenu = document.getElementById("board");
  const signUpMenu = document.getElementById("signUp");
  const signInMenu = document.getElementById("signIn");
  const authLinks = document.getElementById("authLinks");

  const user = localStorage.getItem("user");
  if (user == null) {
    if (authLinks) {
      // 로그인을 했다면 로그인, 회원가입 링크를 로그아웃 링크로 변경
      authLinks.innerHtml =
        '<span class="menu-link" id="logout">로그아웃</span>';

      // 로그아웃 클릭 시 처리
      document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("user");

        // 로그아웃 후 페이지를 새로고침해야 렌더링이 된다.
        location.reload();
      });
    }
  }

  // 각 메뉴 클릭 이벤트
  if (boardMenu) {
    boardMenu.addEventListener("click", function () {
      window.location.href = "/board-list.html";
    });
  }

  if (signUpMenu) {
    signUpMenu.addEventListener("click", function () {
      window.location.href = "/sign-up.html";
    });
  }

  if (signInMenu) {
    signInMenu.addEventListener("click", function () {
      window.location.href = "/sign-in.html";
    });
  }

  // 로그인 상태가 아니면 로그인 페이지로 리다이렉션
  function redirctToPageIfNotLoggedIn(page) {
    // 로컬 스토리지 접근 - user key값 확인
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      // 로그인이 안되어 있으면 로그인 페이지로 이동
      location.href = `${page}.html`;
    }
  }
});
