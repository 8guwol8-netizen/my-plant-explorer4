# 🌱 학교 식물 탐사대 — 연수용 시작 버전

사진으로 식물을 알아보고, 국립수목원 공식 정보·교과서와 잇는 웹앱의 **연수용 시작 버전**이에요.
연수에서는 각자 이 앱을 **내 GitHub·내 Vercel 로 가져가서**, 클로드 웹(무료)에 실습 프롬프트를 넣어 내 앱을 직접 바꿔요.
바꾸는 곳은 언제나 **`app-settings.json` 파일 하나**예요. 내 컴퓨터에 설치할 것은 없어요.

- 연수 안내·실습 프롬프트(노션): https://app.notion.com/p/40ddc287784c80b7bfb1cfbed4cf9c17
- 완성본 앱 둘러보기: https://plant-explorer-delta.vercel.app

## 1. 내 앱 만들기 — 버튼 한 번

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F7guwol7-max%2Fplant-explorer-starter&project-name=my-plant-explorer&repository-name=my-plant-explorer)

1. 위 **Deploy** 버튼 → 'Git Providers' 에 GitHub·GitLab·Bitbucket 버튼이 보이고 **Create 가 회색**이면 **GitHub** 를 눌러 로그인 → Vercel 권한 허용(Authorize) → (나오면) Install → 이 화면으로 돌아오기
2. 저장소 이름(`my-plant-explorer`) 그대로 → **Create** → **Deploy** → 1~2분
3. **Continue to Dashboard** → **Domains** 의 주소가 **내 앱**이에요

이제 내 GitHub 저장소의 `app-settings.json` 을 고쳐 저장하면 1~2분 뒤 내 앱이 자동으로 바뀌어요.

## 2. 프롬프트로 내 앱 고치기 (모든 실습 똑같이)

1. 내 앱 → 오른쪽 위 **👩‍🏫 선생님** → **✏️ 프롬프트로 앱 고치기** 카드
2. 카드의 **📋 지금 설정 파일 복사**
3. 클로드 새 채팅에 실습 프롬프트를 붙이고, 그 아래에 복사한 설정 파일을 붙여 보내기 → 클로드가 준 JSON 코드 블록의 **Copy** (GitHub 를 클로드에 연결하지 않아도 돼요)
4. 카드의 **📝 설정 파일 고치러 가기** → 편집 칸 클릭 → `Ctrl+A` → `Ctrl+V` → **Commit changes**
5. 1~2분 뒤 새로고침 → 카드의 '지금 앱 버전'이 바뀌면 반영 끝

## 3. 시작 버전에서 비어 있는 것 (실습에서 채워요)

| 칸 | 비어 있으면 | 채우면 |
| --- | --- | --- |
| `dataApi` (공공데이터포털 API 연결) | 검색하면 '아직 연결되지 않았어요' | 내 키로 국립수목원 도감 검색·공식 정보 |
| `terms` (그림 도움말 글) | '아직 설명이 없어요' | 잎 모양·잎맥·줄기 설명 |
| `curriculum` (성취기준 더하기·활동 바꾸기) | 기본 13개만 | 성취기준 MCP로 찾은 성취기준·우리 반 활동 |

그 밖에 `app`(앱 이름), `notice`(첫 화면 안내), `menu`(아래 메뉴), `places`(장소), `pages`(새 화면, 주소 `/p/이름`), `defaultGrade`(처음 학년)도 같은 파일에서 바꿔요.
완성본 예시: [app-settings.json](https://github.com/7guwol7-max/plant-explorer/blob/claude/affectionate-johnson-msxhyk/app-settings.json)

## 4. 키

키는 코드에도, 이 파일에도, 클로드 채팅에도 넣지 않아요. 내 앱 → ⚙️ 설정 화면에 넣으면 그 브라우저에만 저장돼요.

- 공공데이터포털 '산림청 국립수목원_식물자원 조회 서비스' 일반 인증키 — https://www.data.go.kr
- 제미나이 API 키(무료로 시작 가능) — https://aistudio.google.com/apikey

## 만든 것

Next.js 15 · React · TypeScript. 데이터베이스·로그인 없음. 학생 기록은 그 기기 브라우저에만 저장돼요.
완성본 저장소: https://github.com/7guwol7-max/plant-explorer
