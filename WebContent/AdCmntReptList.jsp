<%@ page contentType="text/html; charset=UTF-8"%>
<%
	request.setCharacterEncoding("UTF-8");
	String cp = request.getContextPath();
%>
<!DOCTYPE html>
<html>
<head>
<title>커뮤니티 웹 사이트</title>

<script type="text/javascript">
	function newPage()
	{
	    window.location.href = "./adPostReptList.jsp"
	}
</script>

<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/admin.css">
</head>
<body>

<div class="wrap">
    <header>
        <!-- ○ 상단 네비게이션 include -->
        <jsp:include page="./AdNavManage.jsp"></jsp:include>
    </header>

    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span2">
                <!-- ○ 좌측 메뉴바 include -->
                <jsp:include page="./AdMenuManage.jsp"></jsp:include>
            </div>
            <div class="span10">
                <main id="adCmntReptList">
                    <section>
                        <div class="row">
                                <div class="col-sm-9 m-3">
                                    <div class="btn-group float-left">
                                        <button type="submit" class="btn btn-primary unactivate-btn" onclick="location.href='AdPostReptList.jsp'">게시글 신고</button>
                                        <button type="submit" class="btn btn-primary activate-btn" onclick="location.href='AdCmntReptList.jsp'">댓글 신고</button>
                                    </div>
                                </div>
                            </div>
                    </section>
                    <section>
                        <div class="row">
                            <!-- 게시글 신고처리 -->
                            <div class="col-md-12 mt-3">
                                <div class="list-group">
                                    <h4>댓글 신고처리<small> 신고 접수된 게시글 리스트입니다.</small></h4>
                                    <div class="list-group-item">
                                        <div class="list-group">
                                            <table class="table table-striped" style="max-width: 1080px;">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="mobile wid-50-col">no</th>
                                                        <th scope="col" class="wid-150-col">댓글 번호</th>
                                                        <th scope="col">댓글 내용</th>
                                                        <th scope="col" class="wid-150-col">신고 카테고리</th>
                                                        <th scope="col" class="mobile wid-150-col">날짜</th>
                                                        <th scope="col" class="wid-150-col">승인여부</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row" class="mobile">5</td>
                                                        <td scope="row">
                                                            <a href="./AdCmntRept.jsp">2032</a>
                                                        </td>
                                                        <td class="content-title"> 
                                                            <a href="./AdCmntRept.jsp">이걸 가게부라고 썼냐~ </a>
                                                        </td>
                                                        <td scope="row">홍보</td>
                                                        <td class="mobile">2018-01-05</td>
                                                        <td scope="row"> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" class="mobile">5</td>
                                                        <td scope="row">
                                                            <a href="./adCmntRept.jsp">2032</a>
                                                        </td>
                                                        <td class="content-title"> 
                                                            <a href="./AdCmntRept.jsp">에라이!!  </a>
                                                        </td>
                                                        <td scope="row">기타</td>
                                                        <td class="mobile">2018-01-05</td>
                                                        <td scope="row">반려</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" class="mobile">5</td>
                                                        <td scope="row">
                                                            <a href="./adCmntRept.jsp">2032</a>
                                                        </td>
                                                        <td class="content-title"> 
                                                            <a href="./AdCmntRept.jsp">♚♚머니로그☆가입시♚♚전원 100만  </a>
                                                        </td>
                                                        <td scope="row">음란물</td>
                                                        <td class="mobile">2018-01-05</td>
                                                        <td scope="row">승인</td>
                                                    </tr>   
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </div>
</div>

    
	<script src="./js/jquery-3.2.1.min.js"></script>
	<script src="./js/popper.min.js"></script>
	<script src="./js/bootstrap.min.js"></script>

</body>
</html>