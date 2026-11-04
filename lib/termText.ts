/**
 * 관찰 낱말 그림 도움말의 설명 글 (잎 모양·잎맥·줄기)
 * - desc: 학생이 읽는 쉬운 설명 (1~2문장, '~해요'체)
 * - examples: 우리 둘레에서 볼 수 있는 예시 식물
 * 이름(따옴표 안의 낱말)은 첫 화면 선택지 글자와 똑같아야 해요. 이름은 바꾸지 말고 desc·examples 만 고쳐요.
 *
 * 🚧 연수용 시작 버전: 기본 설명이 비어 있어요. app-settings.json 의 terms 에 학생 눈높이 설명을 넣으면 화면에 나와요.
 *    비어 있으면 '아직 설명이 없어요. 그림을 보고 골라요.'가 나와요.
 */
export type TermText = { desc: string; examples?: string };

export const TERM_TEXT: Record<string, TermText> = {
  // 잎 모양
  "넓적한 잎": { desc: "", examples: "벚나무, 목련, 느티나무" },
  "길쭉한 잎": { desc: "", examples: "버드나무, 강아지풀, 벼" },
  "바늘 잎": { desc: "", examples: "소나무, 잣나무, 전나무" },
  "부채 모양": { desc: "", examples: "은행나무" },
  "손바닥 모양": { desc: "", examples: "단풍나무, 팔손이" },
  "깃털처럼 갈라짐": { desc: "", examples: "아까시나무, 고사리" },
  // 잎맥
  그물맥: { desc: "", examples: "단풍나무, 봉선화, 콩" },
  나란히맥: { desc: "", examples: "벼, 옥수수, 강아지풀" },
  부챗살맥: { desc: "", examples: "은행나무" },
  // 줄기
  "굵은 나무줄기": { desc: "", examples: "소나무, 벚나무, 은행나무" },
  "가는 풀줄기": { desc: "", examples: "봉선화, 강아지풀, 해바라기(어릴 때)" },
  덩굴: { desc: "", examples: "나팔꽃, 담쟁이덩굴, 칡" },
  // 공통
  모름: { desc: "" },
};
