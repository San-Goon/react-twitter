# 🔍 뉴욕타임즈 기사 검색 웹 프로젝트

### FASTCAMPUS MGS 5기과정에서 진행하는 REACT MINI PROJECT ~! 😄

## 🛠 사용기술

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
<img src="https://img.shields.io/badge/antd-D36AC2?style=for-the-badge&logo=AntDesign&logoColor=#0170FE">
<img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white">


## 📅 기간

2022.08.25 ~ 2022.09.02

## 📌 팀 컨벤션
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- etc: 기타 파일(이미지/폰트 등) 추가
- style: 코드 포맷팅, 세미콜론 누락 등
- refactor: 코드 리팩토링
- chore: 빌드 업무 수정, 패키지 매니저 수정
- add: 새로운 파일 추가
## ✅ 요구사항

### 필수 요구사항 - Routing
- [ ] "/" url에서는 기사 검색 페이지 랜더한다.
- [ ] "/clip" url에서 내가 clip한 기사 페이지 랜더한다.
- [ ] 그 외 url은 "/"로 redirect 진행한다.

### 필수 요구사항 - input
- [ ] 마지막 타이핑 이후 0.5초 동안 추가 입력이 없으며, input value가 있는 경우 검색 api 호출한다.
- [ ] 최대 5개까지 search history 저장한다. (브라우저 종료해도 지속)
- [ ] search history가 존재하고 input에 focus 중이면 search history 노출한다.

### 필수 요구사항 - news list
- [ ] "/"와 "/clip"은 기사 리스트를 렌더한다.
- [ ] 기사 리스트는 다음 내용을 포함하는 기사 카드를 렌더한다. (타이틀 / 날짜 / clip하기 버튼 / 자세히 보기 버튼)
- [ ] infinite scroll (스크롤이 마지막에 닿았을 때 다음 페이지 요청)
- [ ] 첫 페이지가 화면의 높이를 모두 채우지 못한 경우에도 페이지 요청

### 필수 요구사항 - clip
- [ ] 기사 카드의 clip버튼을 클릭하여 해당 기사를 즐겨찾기한다.
- [ ] clip된 기사들은 "/clip"에서 확인할 수 있다.
- [ ] clip된 기사들은 브라우저를 재시작하여도 유지된다.
- [ ] 기사를 unclip 하면 더는 "/clip"에서 확인할 수 없다.

### 기타 요구사항
- [ ] create-react-app 사용
- [ ] react-router-dom 사용
- [ ] redux 사용
- [ ] 스타일링 및 방식은 자유 (css, styled-components 등)
- [ ] nyt api token은 본인이 가입하여 발급하기

### 추가 요구사항
- [ ] antd를 활용한 디자인
- [ ] main 및 clip 페이지 이동 버튼 구현
- [ ] api 호출시 응답이 올때까지 로딩창 구현
- [ ] 기사이름 클릭시 새탭으로 이동하도록 구현
- [ ] 히스토리 삭제기능 (개별, 일괄)
- [ ] 검색어 삭제기능
- [ ] clip 페이지에서 clip 된 기사중에 재 검색할 수 있도록 구현
