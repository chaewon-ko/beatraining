//하이퍼링크는 임시
class bthead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
            <div class="v203_2022">

            </div>
            <a href="http://facebook.com"><span class="BT"></span></a>
            <a href="http://facebook.com"><span class="menu1">비트레이닝이란?</span></a>
            <a href="http://facebook.com"><span class="menu2">운동 스케쥴러</span></a>
            <a href="http://facebook.com"><span class="v203_2026">추천 운동 루틴</span><a>
            <a href="http://facebook.com"><span class="v203_2027">나의 그룹</span></a>
            <a href="http://facebook.com"><span class="v203_2028">학교별 랭킹</span></a>
            <a href="http://facebook.com"><span class="v203_2029">마이페이지</span></a>
            </div>
        `;
    }
}
customElements.define("bt-head", bthead);

class btheadlogout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
            <div class="v203_2022">

            </div>
            <a href="http://facebook.com"><span class="BT"></span></a>
            <a href="http://facebook.com"><span class="menu1">비트레이닝이란?</span></a>
            <a href="http://facebook.com"><span class="menu2">운동 스케쥴러</span></a>
            <a href="http://facebook.com"><span class="v203_2026">추천 운동 루틴</span></a>
            <a href="http://facebook.com"><span class="v203_2027">나의 그룹</span></a>
            <a href="http://facebook.com"><span class="v203_2028">학교별 랭킹</span></a>
            <a href="http://facebook.com"><span class="login">로그인</span></a>
            <a href="http://facebook.com"><span class="newaccount">회원가입</span></a>
            </div>
            
        `;
    }
}
customElements.define("bt-head-logout", btheadlogout);

class btfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>

            <div class="v203_2036">
                <div class="v139_10">

                </div>
            <span class="v139_39">회사소개</span>
            
                <span class="v139_40">(주)비트레이닝 | 대표이사 : 고채원 | TEL. 02-123-4567 | 사업자등록번호 : 123-45-67891 | 통신판매업 : 제2022-서울종로=3959호 | 개인정보관리 책임자 : 강유진<br>
                주소 : 서울특별시 종로구 성균관로 25-2<br>
                EMAIL : youjinv@naver.com.com | COPYRIGHT HANZO ALL RIGHTS RESERVED FOR FUTHER INFORMATION.<br>
                BEATRAINING 호스팅서비스 사업자 : 주식회사 멋쟁이사자처럼</span>
                <span class="v139_41">이용약관</span>
                <span class="v139_42">개인정보취급방침</span>
                <span class="v139_43">제휴문의</span>
                
                
                <div class="v203_2033"></div>
                <div class="v203_2034"></div>
                <div class="v203_2035"></div>
            </div>
            <div class="footer-line1"></div>
            <div class="footer-line2"></div>
            <div class="footer-line3"></div>
            </div>
            
        `;
    }
}
customElements.define("bt-footer", btfooter);
