// === JLPT N2 대비 단어 커리큘럼 (N3 필수 → N2 필수 + N1 독해 빈출) ===
// DAY 1~8  : N3 필수 (하루 약 83개) — 전공자 기준 '빠른 점검'용, 모르는 것만 헷갈림 등록
// DAY 9~36 : N2 필수 + N1 (N2 독해에 나오는 수준) (하루 약 61개)
// 합계 2367개 (N3 660 / N2 1473 / N1 234)
// level: 'N3' | 'N2' | 'N1'   syn: 유의어·바꿔 말하기 (N2 문자어휘 '言い換え類義' 대비)
// id 1~560은 기존 데이터에서 옮겨 온 단어(학습 기록 유지), 1001~은 새로 추가한 단어
// 수준을 넘는 기존 N1+ 단어는 vocab-n1-data.js ('N1 심화 단어장')로 분리
const VOCAB_DATA = [
  // ==========================================
  // [DAY 1] N3 필수 · 85개
  // ==========================================
  {
    id: 1001, day: 1, level: "N3",
    word: "預ける", kana: "あずける", pos: "동사 (타동사)",
    mean: "맡기다",
    syn: ["任せる"],
    collocations: [{ ja: "荷物を預ける", ko: "짐을 맡기다" }, { ja: "銀行にお金を預ける", ko: "은행에 돈을 맡기다" }],
    examples: []
  },
  {
    id: 1002, day: 1, level: "N3",
    word: "預かる", kana: "あずかる", pos: "동사 (타동사)",
    mean: "맡다, 보관하다",
    syn: ["保管する"],
    collocations: [{ ja: "荷物を預かる", ko: "짐을 맡아 두다" }, { ja: "子どもを預かる", ko: "아이를 맡아 돌보다" }],
    examples: []
  },
  {
    id: 1003, day: 1, level: "N3",
    word: "謝る", kana: "あやまる", pos: "동사 (타동사)",
    mean: "사과하다",
    syn: ["詫びる"],
    collocations: [{ ja: "心から謝る", ko: "진심으로 사과하다" }, { ja: "遅刻を謝る", ko: "지각을 사과하다" }],
    examples: []
  },
  {
    id: 1004, day: 1, level: "N3",
    word: "余る", kana: "あまる", pos: "동사 (자동사)",
    mean: "남다",
    syn: ["残る"],
    collocations: [{ ja: "時間が余る", ko: "시간이 남다" }, { ja: "料理が余る", ko: "요리가 남다" }],
    examples: []
  },
  {
    id: 1005, day: 1, level: "N3",
    word: "表す", kana: "あらわす", pos: "동사 (타동사)",
    mean: "나타내다, 표현하다",
    syn: ["示す", "表現する"],
    collocations: [{ ja: "感謝の気持ちを表す", ko: "감사의 마음을 나타내다" }, { ja: "言葉で表す", ko: "말로 표현하다" }],
    examples: []
  },
  {
    id: 1006, day: 1, level: "N3",
    word: "現れる", kana: "あらわれる", pos: "동사 (자동사)",
    mean: "나타나다",
    syn: ["出現する"],
    collocations: [{ ja: "効果が現れる", ko: "효과가 나타나다" }, { ja: "姿を現す", ko: "모습을 드러내다" }],
    examples: []
  },
  {
    id: 1007, day: 1, level: "N3",
    word: "祈る", kana: "いのる", pos: "동사 (타동사)",
    mean: "빌다, 기원하다",
    syn: ["願う"],
    collocations: [{ ja: "成功を祈る", ko: "성공을 빌다" }, { ja: "平和を祈る", ko: "평화를 기원하다" }],
    examples: []
  },
  {
    id: 1008, day: 1, level: "N3",
    word: "植える", kana: "うえる", pos: "동사 (타동사)",
    mean: "심다",
    syn: [],
    collocations: [{ ja: "木を植える", ko: "나무를 심다" }, { ja: "花を植える", ko: "꽃을 심다" }],
    examples: []
  },
  {
    id: 1009, day: 1, level: "N3",
    word: "疑う", kana: "うたがう", pos: "동사 (타동사)",
    mean: "의심하다",
    syn: ["怪しむ"],
    collocations: [{ ja: "自分の目を疑う", ko: "제 눈을 의심하다" }, { ja: "犯人だと疑う", ko: "범인이라고 의심하다" }],
    examples: []
  },
  {
    id: 1010, day: 1, level: "N3",
    word: "写す", kana: "うつす", pos: "동사 (타동사)",
    mean: "베끼다, (사진을) 찍다",
    syn: ["書き写す"],
    collocations: [{ ja: "ノートを写す", ko: "노트를 베끼다" }, { ja: "写真を写す", ko: "사진을 찍다" }],
    examples: []
  },
  {
    id: 1011, day: 1, level: "N3",
    word: "移す", kana: "うつす", pos: "동사 (타동사)",
    mean: "옮기다",
    syn: ["移動させる"],
    collocations: [{ ja: "席を移す", ko: "자리를 옮기다" }, { ja: "計画を実行に移す", ko: "계획을 실행에 옮기다" }],
    examples: []
  },
  {
    id: 1012, day: 1, level: "N3",
    word: "映る", kana: "うつる", pos: "동사 (자동사)",
    mean: "비치다, (화면에) 나오다",
    syn: [],
    collocations: [{ ja: "鏡に映る", ko: "거울에 비치다" }, { ja: "テレビに映る", ko: "텔레비전에 나오다" }],
    examples: []
  },
  {
    id: 1013, day: 1, level: "N3",
    word: "奪う", kana: "うばう", pos: "동사 (타동사)",
    mean: "빼앗다",
    syn: ["取り上げる"],
    collocations: [{ ja: "命を奪う", ko: "목숨을 빼앗다" }, { ja: "心を奪われる", ko: "마음을 빼앗기다" }],
    examples: []
  },
  {
    id: 1014, day: 1, level: "N3",
    word: "埋める", kana: "うめる", pos: "동사 (타동사)",
    mean: "묻다, 메우다",
    syn: ["埋め立てる"],
    collocations: [{ ja: "穴を埋める", ko: "구멍을 메우다" }, { ja: "空欄を埋める", ko: "빈칸을 채우다" }],
    examples: []
  },
  {
    id: 1015, day: 1, level: "N3",
    word: "裏切る", kana: "うらぎる", pos: "동사 (타동사)",
    mean: "배신하다, (기대를) 저버리다",
    syn: [],
    collocations: [{ ja: "友人を裏切る", ko: "친구를 배신하다" }, { ja: "期待を裏切る", ko: "기대를 저버리다" }],
    examples: []
  },
  {
    id: 1016, day: 1, level: "N3",
    word: "占める", kana: "しめる", pos: "동사 (타동사)",
    mean: "차지하다",
    syn: [],
    collocations: [{ ja: "過半数を占める", ko: "과반수를 차지하다" }, { ja: "大部分を占める", ko: "대부분을 차지하다" }],
    examples: []
  },
  {
    id: 1017, day: 1, level: "N3",
    word: "追う", kana: "おう", pos: "동사 (타동사)",
    mean: "쫓다, 뒤따르다",
    syn: ["追いかける"],
    collocations: [{ ja: "流行を追う", ko: "유행을 좇다" }, { ja: "犯人を追う", ko: "범인을 쫓다" }],
    examples: []
  },
  {
    id: 1018, day: 1, level: "N3",
    word: "追いつく", kana: "おいつく", pos: "동사 (자동사)",
    mean: "따라잡다",
    syn: [],
    collocations: [{ ja: "先頭に追いつく", ko: "선두를 따라잡다" }, { ja: "生産が需要に追いつかない", ko: "생산이 수요를 따라가지 못하다" }],
    examples: []
  },
  {
    id: 1019, day: 1, level: "N3",
    word: "犯す", kana: "おかす", pos: "동사 (타동사)",
    mean: "(죄·실수를) 범하다",
    syn: [],
    collocations: [{ ja: "罪を犯す", ko: "죄를 범하다" }, { ja: "ミスを犯す", ko: "실수를 저지르다" }],
    examples: []
  },
  {
    id: 1020, day: 1, level: "N3",
    word: "収める", kana: "おさめる", pos: "동사 (타동사)",
    mean: "거두다, 넣다",
    syn: ["得る"],
    collocations: [{ ja: "成功を収める", ko: "성공을 거두다" }, { ja: "利益を収める", ko: "이익을 거두다" }],
    examples: []
  },
  {
    id: 1021, day: 1, level: "N3",
    word: "治める", kana: "おさめる", pos: "동사 (타동사)",
    mean: "다스리다",
    syn: [],
    collocations: [{ ja: "国を治める", ko: "나라를 다스리다" }, { ja: "争いを治める", ko: "분쟁을 수습하다" }],
    examples: []
  },
  {
    id: 1022, day: 1, level: "N3",
    word: "落ち着く", kana: "おちつく", pos: "동사 (자동사)",
    mean: "진정되다, 차분해지다",
    syn: ["冷静になる"],
    collocations: [{ ja: "気持ちが落ち着く", ko: "마음이 진정되다" }, { ja: "落ち着いた雰囲気", ko: "차분한 분위기" }],
    examples: []
  },
  {
    id: 1023, day: 1, level: "N3",
    word: "劣る", kana: "おとる", pos: "동사 (자동사)",
    mean: "뒤떨어지다",
    syn: ["及ばない"],
    collocations: [{ ja: "品質が劣る", ko: "품질이 뒤떨어지다" }, { ja: "誰にも劣らない", ko: "누구에게도 뒤지지 않다" }],
    examples: []
  },
  {
    id: 1024, day: 1, level: "N3",
    word: "驚く", kana: "おどろく", pos: "동사 (자동사)",
    mean: "놀라다",
    syn: ["びっくりする"],
    collocations: [{ ja: "知らせに驚く", ko: "소식에 놀라다" }, { ja: "驚くほど安い", ko: "놀랄 만큼 싸다" }],
    examples: []
  },
  {
    id: 1025, day: 1, level: "N3",
    word: "及ぼす", kana: "およぼす", pos: "동사 (타동사)",
    mean: "(영향을) 끼치다",
    syn: ["与える"],
    collocations: [{ ja: "影響を及ぼす", ko: "영향을 끼치다" }, { ja: "被害を及ぼす", ko: "피해를 입히다" }],
    examples: []
  },
  {
    id: 1026, day: 1, level: "N3",
    word: "明らか", kana: "あきらか", pos: "な형용사",
    mean: "분명함, 명백함",
    syn: ["明白な"],
    collocations: [{ ja: "明らかな事実", ko: "분명한 사실" }, { ja: "原因を明らかにする", ko: "원인을 밝히다" }],
    examples: []
  },
  {
    id: 1027, day: 1, level: "N3",
    word: "浅い", kana: "あさい", pos: "い형용사",
    mean: "얕다",
    syn: ["深くない"],
    collocations: [{ ja: "浅い川", ko: "얕은 강" }, { ja: "経験が浅い", ko: "경험이 적다" }],
    examples: []
  },
  {
    id: 1028, day: 1, level: "N3",
    word: "鮮やか", kana: "あざやか", pos: "な형용사",
    mean: "선명함, 훌륭함",
    syn: [],
    collocations: [{ ja: "鮮やかな色", ko: "선명한 색" }, { ja: "鮮やかな手つき", ko: "능숙한 솜씨" }],
    examples: []
  },
  {
    id: 1029, day: 1, level: "N3",
    word: "厚い", kana: "あつい", pos: "い형용사",
    mean: "두껍다, 두텁다",
    syn: [],
    collocations: [{ ja: "厚い本", ko: "두꺼운 책" }, { ja: "信頼が厚い", ko: "신뢰가 두텁다" }],
    examples: []
  },
  {
    id: 1030, day: 1, level: "N3",
    word: "新た", kana: "あらた", pos: "な형용사",
    mean: "새로움",
    syn: ["新しい"],
    collocations: [{ ja: "新たな問題", ko: "새로운 문제" }, { ja: "決意を新たにする", ko: "결의를 새롭게 하다" }],
    examples: []
  },
  {
    id: 1031, day: 1, level: "N3",
    word: "怪しい", kana: "あやしい", pos: "い형용사",
    mean: "수상하다, 의심스럽다",
    syn: ["疑わしい"],
    collocations: [{ ja: "怪しい人", ko: "수상한 사람" }, { ja: "雲行きが怪しい", ko: "날씨가 심상치 않다" }],
    examples: []
  },
  {
    id: 1032, day: 1, level: "N3",
    word: "意外", kana: "いがい", pos: "な형용사",
    mean: "의외임",
    syn: ["思いがけない"],
    collocations: [{ ja: "意外な結果", ko: "의외의 결과" }, { ja: "意外に簡単だ", ko: "의외로 쉽다" }],
    examples: []
  },
  {
    id: 1033, day: 1, level: "N3",
    word: "荒い", kana: "あらい", pos: "い형용사",
    mean: "거칠다, 난폭하다",
    syn: ["乱暴な"],
    collocations: [{ ja: "波が荒い", ko: "파도가 거칠다" }, { ja: "言葉遣いが荒い", ko: "말투가 거칠다" }],
    examples: []
  },
  {
    id: 1034, day: 1, level: "N3",
    word: "確か", kana: "たしか", pos: "な형용사",
    mean: "확실함",
    syn: ["確実な"],
    collocations: [{ ja: "確かな情報", ko: "확실한 정보" }, { ja: "腕は確かだ", ko: "솜씨는 확실하다" }],
    examples: []
  },
  {
    id: 1035, day: 1, level: "N3",
    word: "粗い", kana: "あらい", pos: "い형용사",
    mean: "성기다, 엉성하다",
    syn: ["大まか"],
    collocations: [{ ja: "目の粗い網", ko: "코가 성긴 그물" }, { ja: "仕事が粗い", ko: "일이 엉성하다" }],
    examples: []
  },
  {
    id: 1036, day: 1, level: "N3",
    word: "勝手", kana: "かって", pos: "な형용사",
    mean: "제멋대로임",
    syn: ["わがままな"],
    collocations: [{ ja: "勝手な行動", ko: "제멋대로인 행동" }, { ja: "勝手に使う", ko: "멋대로 쓰다" }],
    examples: []
  },
  {
    id: 1037, day: 1, level: "N3",
    word: "薄い", kana: "うすい", pos: "い형용사",
    mean: "얇다, 연하다",
    syn: [],
    collocations: [{ ja: "薄い紙", ko: "얇은 종이" }, { ja: "味が薄い", ko: "맛이 싱겁다" }],
    examples: []
  },
  {
    id: 1038, day: 1, level: "N3",
    word: "気の毒", kana: "きのどく", pos: "な형용사",
    mean: "딱함, 가엾음",
    syn: ["かわいそうな"],
    collocations: [{ ja: "気の毒な話", ko: "딱한 이야기" }, { ja: "お気の毒に", ko: "안됐네요" }],
    examples: []
  },
  {
    id: 1039, day: 1, level: "N3",
    word: "アイデア", kana: "アイデア", pos: "외래어",
    mean: "아이디어 (idea)",
    syn: ["考え", "発想"],
    collocations: [{ ja: "アイデアを出す", ko: "아이디어를 내다" }],
    examples: []
  },
  {
    id: 1040, day: 1, level: "N3",
    word: "アドバイス", kana: "アドバイス", pos: "외래어",
    mean: "조언 (advice)",
    syn: ["助言"],
    collocations: [{ ja: "アドバイスをもらう", ko: "조언을 받다" }],
    examples: []
  },
  {
    id: 1041, day: 1, level: "N3",
    word: "アンケート", kana: "アンケート", pos: "외래어",
    mean: "설문 조사 (enquête)",
    syn: ["調査"],
    collocations: [{ ja: "アンケートに答える", ko: "설문에 답하다" }],
    examples: []
  },
  {
    id: 1042, day: 1, level: "N3",
    word: "イメージ", kana: "イメージ", pos: "외래어",
    mean: "이미지, 인상 (image)",
    syn: ["印象"],
    collocations: [{ ja: "イメージが湧く", ko: "이미지가 떠오르다" }, { ja: "イメージアップ", ko: "이미지 향상" }],
    examples: []
  },
  {
    id: 1043, day: 1, level: "N3",
    word: "相変わらず", kana: "あいかわらず", pos: "부사",
    mean: "변함없이, 여전히",
    syn: ["依然として"],
    collocations: [{ ja: "相変わらず忙しい", ko: "여전히 바쁘다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は相変わらず元気そうだ。", ko: "그는 변함없이 건강해 보인다." }]
  },
  {
    id: 1044, day: 1, level: "N3",
    word: "いきなり", kana: "いきなり", pos: "부사",
    mean: "갑자기, 느닷없이",
    syn: ["突然"],
    collocations: [{ ja: "いきなり怒る", ko: "갑자기 화내다" }],
    examples: [{ type: "ex", label: "예문", ja: "いきなり後ろから声をかけられた。", ko: "느닷없이 뒤에서 누가 말을 걸었다." }]
  },
  {
    id: 1045, day: 1, level: "N3",
    word: "一応", kana: "いちおう", pos: "부사",
    mean: "일단, 우선은",
    syn: ["ひとまず"],
    collocations: [{ ja: "一応確認する", ko: "일단 확인하다" }],
    examples: [{ type: "ex", label: "예문", ja: "一応、資料には目を通しておいた。", ko: "일단 자료는 훑어 두었다." }]
  },
  {
    id: 1046, day: 1, level: "N3",
    word: "一気に", kana: "いっきに", pos: "부사",
    mean: "단숨에",
    syn: ["一度に"],
    collocations: [{ ja: "一気に飲む", ko: "단숨에 마시다" }],
    examples: [{ type: "ex", label: "예문", ja: "残りの仕事を一気に片付けた。", ko: "남은 일을 단숨에 처리했다." }]
  },
  {
    id: 1047, day: 1, level: "N3",
    word: "一斉に", kana: "いっせいに", pos: "부사",
    mean: "일제히",
    syn: ["同時に"],
    collocations: [{ ja: "一斉に立ち上がる", ko: "일제히 일어서다" }],
    examples: [{ type: "ex", label: "예문", ja: "ベルが鳴ると、全員が一斉に走り出した。", ko: "벨이 울리자 전원이 일제히 달리기 시작했다." }]
  },
  {
    id: 1048, day: 1, level: "N3",
    word: "今にも", kana: "いまにも", pos: "부사",
    mean: "당장이라도",
    syn: ["すぐにも"],
    collocations: [{ ja: "今にも雨が降りそうだ", ko: "당장이라도 비가 올 것 같다" }],
    examples: [{ type: "ex", label: "예문", ja: "今にも泣き出しそうな顔をしていた。", ko: "금방이라도 울음을 터뜨릴 듯한 얼굴이었다." }]
  },
  {
    id: 1049, day: 1, level: "N3",
    word: "いよいよ", kana: "いよいよ", pos: "부사",
    mean: "드디어, 점점 더",
    syn: ["とうとう"],
    collocations: [{ ja: "いよいよ明日だ", ko: "드디어 내일이다" }],
    examples: [{ type: "ex", label: "예문", ja: "いよいよ試験の日がやって来た。", ko: "드디어 시험 날이 왔다." }]
  },
  {
    id: 1050, day: 1, level: "N3",
    word: "主に", kana: "おもに", pos: "부사",
    mean: "주로",
    syn: ["大部分"],
    collocations: [{ ja: "主に週末に働く", ko: "주로 주말에 일하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この店の客は主に学生だ。", ko: "이 가게의 손님은 주로 학생이다." }]
  },
  {
    id: 1051, day: 1, level: "N3",
    word: "いらいら", kana: "いらいら", pos: "부사 (의성어·의태어)",
    mean: "초조하게, 짜증 나게",
    syn: ["苛立つ"],
    collocations: [{ ja: "いらいらする", ko: "짜증이 나다" }],
    examples: [{ type: "ex", label: "예문", ja: "電車が遅れて、いらいらした。", ko: "전철이 늦어져서 짜증이 났다." }]
  },
  {
    id: 1052, day: 1, level: "N3",
    word: "うっかり", kana: "うっかり", pos: "부사 (의성어·의태어)",
    mean: "깜빡, 무심코",
    syn: ["つい"],
    collocations: [{ ja: "うっかり忘れる", ko: "깜빡 잊다" }],
    examples: [{ type: "ex", label: "예문", ja: "うっかり傘を電車に置き忘れた。", ko: "깜빡하고 우산을 전철에 두고 내렸다." }]
  },
  {
    id: 1053, day: 1, level: "N3",
    word: "がっかり", kana: "がっかり", pos: "부사 (의성어·의태어)",
    mean: "실망하는 모양",
    syn: ["失望する"],
    collocations: [{ ja: "結果にがっかりする", ko: "결과에 실망하다" }],
    examples: [{ type: "ex", label: "예문", ja: "試合に負けて、がっかりした。", ko: "시합에 져서 실망했다." }]
  },
  {
    id: 1054, day: 1, level: "N3",
    word: "きちんと", kana: "きちんと", pos: "부사 (의성어·의태어)",
    mean: "깔끔하게, 제대로",
    syn: ["ちゃんと"],
    collocations: [{ ja: "きちんと片付ける", ko: "깔끔하게 정리하다" }],
    examples: [{ type: "ex", label: "예문", ja: "毎月きちんと家賃を払っている。", ko: "매달 제대로 집세를 내고 있다." }]
  },
  {
    id: 1055, day: 1, level: "N3",
    word: "したがって", kana: "したがって", pos: "접속사",
    mean: "따라서",
    syn: ["だから", "それゆえ"],
    collocations: [{ ja: "したがって", ko: "따라서" }],
    examples: [{ type: "ex", label: "예문", ja: "雨天が予想される。したがって、試合は中止とする。", ko: "우천이 예상된다. 따라서 시합은 중지한다." }]
  },
  {
    id: 1056, day: 1, level: "N3",
    word: "すなわち", kana: "すなわち", pos: "접속사",
    mean: "즉, 다시 말해",
    syn: ["つまり"],
    collocations: [{ ja: "すなわち", ko: "즉" }],
    examples: [{ type: "ex", label: "예문", ja: "日本の首都、すなわち東京。", ko: "일본의 수도, 즉 도쿄." }]
  },
  {
    id: 1057, day: 1, level: "N3",
    word: "案内", kana: "あんない", pos: "명사 (する동사)",
    mean: "안내",
    syn: ["ガイド"],
    collocations: [{ ja: "道を案内する", ko: "길을 안내하다" }, { ja: "案内状", ko: "안내장" }],
    examples: []
  },
  {
    id: 1058, day: 1, level: "N3",
    word: "意識", kana: "いしき", pos: "명사 (する동사)",
    mean: "의식",
    syn: ["自覚"],
    collocations: [{ ja: "意識を失う", ko: "의식을 잃다" }, { ja: "健康を意識する", ko: "건강을 의식하다" }],
    examples: []
  },
  {
    id: 1059, day: 1, level: "N3",
    word: "移動", kana: "いどう", pos: "명사 (する동사)",
    mean: "이동",
    syn: ["移る"],
    collocations: [{ ja: "席を移動する", ko: "자리를 이동하다" }, { ja: "移動時間", ko: "이동 시간" }],
    examples: []
  },
  {
    id: 1060, day: 1, level: "N3",
    word: "印象", kana: "いんしょう", pos: "명사",
    mean: "인상",
    syn: ["イメージ"],
    collocations: [{ ja: "印象に残る", ko: "인상에 남다" }, { ja: "第一印象", ko: "첫인상" }],
    examples: []
  },
  {
    id: 1061, day: 1, level: "N3",
    word: "影響", kana: "えいきょう", pos: "명사 (する동사)",
    mean: "영향",
    syn: ["作用"],
    collocations: [{ ja: "影響を受ける", ko: "영향을 받다" }, { ja: "影響を与える", ko: "영향을 주다" }],
    examples: []
  },
  {
    id: 1062, day: 1, level: "N3",
    word: "栄養", kana: "えいよう", pos: "명사",
    mean: "영양",
    syn: [],
    collocations: [{ ja: "栄養をとる", ko: "영양을 섭취하다" }, { ja: "栄養が偏る", ko: "영양이 치우치다" }],
    examples: []
  },
  {
    id: 1063, day: 1, level: "N3",
    word: "延期", kana: "えんき", pos: "명사 (する동사)",
    mean: "연기 (뒤로 미룸)",
    syn: ["先送り"],
    collocations: [{ ja: "試合を延期する", ko: "시합을 연기하다" }, { ja: "無期延期", ko: "무기한 연기" }],
    examples: []
  },
  {
    id: 1064, day: 1, level: "N3",
    word: "応援", kana: "おうえん", pos: "명사 (する동사)",
    mean: "응원",
    syn: ["声援"],
    collocations: [{ ja: "チームを応援する", ko: "팀을 응원하다" }, { ja: "応援団", ko: "응원단" }],
    examples: []
  },
  {
    id: 1065, day: 1, level: "N3",
    word: "応募", kana: "おうぼ", pos: "명사 (する동사)",
    mean: "응모",
    syn: ["申し込み"],
    collocations: [{ ja: "コンテストに応募する", ko: "대회에 응모하다" }, { ja: "応募者", ko: "응모자" }],
    examples: []
  },
  {
    id: 1066, day: 1, level: "N3",
    word: "往復", kana: "おうふく", pos: "명사 (する동사)",
    mean: "왕복",
    syn: [],
    collocations: [{ ja: "往復切符", ko: "왕복표" }, { ja: "駅まで往復する", ko: "역까지 왕복하다" }],
    examples: []
  },
  {
    id: 1067, day: 1, level: "N3",
    word: "汚染", kana: "おせん", pos: "명사 (する동사)",
    mean: "오염",
    syn: [],
    collocations: [{ ja: "環境汚染", ko: "환경 오염" }, { ja: "水が汚染される", ko: "물이 오염되다" }],
    examples: []
  },
  {
    id: 1068, day: 1, level: "N3",
    word: "解決", kana: "かいけつ", pos: "명사 (する동사)",
    mean: "해결",
    syn: ["処理"],
    collocations: [{ ja: "問題を解決する", ko: "문제를 해결하다" }, { ja: "解決策", ko: "해결책" }],
    examples: []
  },
  {
    id: 1069, day: 1, level: "N3",
    word: "回復", kana: "かいふく", pos: "명사 (する동사)",
    mean: "회복",
    syn: ["治る"],
    collocations: [{ ja: "体力が回復する", ko: "체력이 회복되다" }, { ja: "景気回復", ko: "경기 회복" }],
    examples: []
  },
  {
    id: 1070, day: 1, level: "N3",
    word: "確認", kana: "かくにん", pos: "명사 (する동사)",
    mean: "확인",
    syn: ["チェック", "確かめる"],
    collocations: [{ ja: "内容を確認する", ko: "내용을 확인하다" }, { ja: "本人確認", ko: "본인 확인" }],
    examples: []
  },
  {
    id: 1071, day: 1, level: "N3",
    word: "格好", kana: "かっこう", pos: "명사",
    mean: "모습, 모양새",
    syn: ["姿"],
    collocations: [{ ja: "変な格好", ko: "이상한 모습" }, { ja: "格好をつける", ko: "폼을 잡다" }],
    examples: []
  },
  {
    id: 1072, day: 1, level: "N3",
    word: "活動", kana: "かつどう", pos: "명사 (する동사)",
    mean: "활동",
    syn: [],
    collocations: [{ ja: "ボランティア活動", ko: "봉사 활동" }, { ja: "活発に活動する", ko: "활발히 활동하다" }],
    examples: []
  },
  {
    id: 1073, day: 1, level: "N3",
    word: "我慢", kana: "がまん", pos: "명사 (する동사)",
    mean: "참음, 인내",
    syn: ["辛抱", "耐える"],
    collocations: [{ ja: "痛みを我慢する", ko: "통증을 참다" }, { ja: "我慢強い", ko: "참을성이 많다" }],
    examples: []
  },
  {
    id: 1074, day: 1, level: "N3",
    word: "環境", kana: "かんきょう", pos: "명사",
    mean: "환경",
    syn: [],
    collocations: [{ ja: "環境を守る", ko: "환경을 지키다" }, { ja: "職場環境", ko: "직장 환경" }],
    examples: []
  },
  {
    id: 1075, day: 1, level: "N3",
    word: "関係", kana: "かんけい", pos: "명사 (する동사)",
    mean: "관계",
    syn: ["つながり"],
    collocations: [{ ja: "人間関係", ko: "인간관계" }, { ja: "関係が深い", ko: "관계가 깊다" }],
    examples: []
  },
  {
    id: 1076, day: 1, level: "N3",
    word: "感想", kana: "かんそう", pos: "명사",
    mean: "감상, 소감",
    syn: ["意見"],
    collocations: [{ ja: "感想を述べる", ko: "소감을 말하다" }, { ja: "読書感想文", ko: "독후감" }],
    examples: []
  },
  {
    id: 1077, day: 1, level: "N3",
    word: "完了", kana: "かんりょう", pos: "명사 (する동사)",
    mean: "완료",
    syn: ["終了"],
    collocations: [{ ja: "作業が完了する", ko: "작업이 완료되다" }, { ja: "準備完了", ko: "준비 완료" }],
    examples: []
  },
  {
    id: 1078, day: 1, level: "N3",
    word: "期間", kana: "きかん", pos: "명사",
    mean: "기간",
    syn: [],
    collocations: [{ ja: "一定の期間", ko: "일정 기간" }, { ja: "有効期間", ko: "유효 기간" }],
    examples: []
  },
  {
    id: 1079, day: 1, level: "N3",
    word: "機嫌", kana: "きげん", pos: "명사",
    mean: "기분, 비위",
    syn: ["気分"],
    collocations: [{ ja: "機嫌がいい", ko: "기분이 좋다" }, { ja: "機嫌を取る", ko: "비위를 맞추다" }],
    examples: []
  },
  {
    id: 1080, day: 1, level: "N3",
    word: "記事", kana: "きじ", pos: "명사",
    mean: "기사",
    syn: [],
    collocations: [{ ja: "新聞記事", ko: "신문 기사" }, { ja: "記事を書く", ko: "기사를 쓰다" }],
    examples: []
  },
  {
    id: 1081, day: 1, level: "N3",
    word: "期限", kana: "きげん", pos: "명사",
    mean: "기한",
    syn: ["締め切り"],
    collocations: [{ ja: "期限が切れる", ko: "기한이 지나다" }, { ja: "提出期限", ko: "제출 기한" }],
    examples: []
  },
  {
    id: 1082, day: 1, level: "N3",
    word: "基本", kana: "きほん", pos: "명사",
    mean: "기본",
    syn: ["基礎"],
    collocations: [{ ja: "基本を学ぶ", ko: "기본을 배우다" }, { ja: "基本的な考え", ko: "기본적인 생각" }],
    examples: []
  },
  {
    id: 1083, day: 1, level: "N3",
    word: "希望", kana: "きぼう", pos: "명사 (する동사)",
    mean: "희망",
    syn: ["望み"],
    collocations: [{ ja: "希望を持つ", ko: "희망을 갖다" }, { ja: "希望通り", ko: "희망대로" }],
    examples: []
  },
  {
    id: 1084, day: 1, level: "N3",
    word: "協力", kana: "きょうりょく", pos: "명사 (する동사)",
    mean: "협력",
    syn: ["力を合わせる"],
    collocations: [{ ja: "協力を求める", ko: "협력을 구하다" }, { ja: "互いに協力する", ko: "서로 협력하다" }],
    examples: []
  },
  {
    id: 1085, day: 1, level: "N3",
    word: "共通", kana: "きょうつう", pos: "명사 (する동사)",
    mean: "공통",
    syn: [],
    collocations: [{ ja: "共通の趣味", ko: "공통의 취미" }, { ja: "共通点", ko: "공통점" }],
    examples: []
  },
  // ==========================================
  // [DAY 2] N3 필수 · 83개
  // ==========================================
  {
    id: 1086, day: 2, level: "N3",
    word: "抱える", kana: "かかえる", pos: "동사 (타동사)",
    mean: "껴안다, (문제를) 안다",
    syn: [],
    collocations: [{ ja: "問題を抱える", ko: "문제를 안고 있다" }, { ja: "荷物を抱える", ko: "짐을 끌어안다" }],
    examples: []
  },
  {
    id: 1087, day: 2, level: "N3",
    word: "輝く", kana: "かがやく", pos: "동사 (자동사)",
    mean: "빛나다",
    syn: ["光る"],
    collocations: [{ ja: "星が輝く", ko: "별이 빛나다" }, { ja: "目を輝かせる", ko: "눈을 반짝이다" }],
    examples: []
  },
  {
    id: 1088, day: 2, level: "N3",
    word: "隠す", kana: "かくす", pos: "동사 (타동사)",
    mean: "숨기다",
    syn: ["秘密にする"],
    collocations: [{ ja: "事実を隠す", ko: "사실을 숨기다" }, { ja: "顔を隠す", ko: "얼굴을 가리다" }],
    examples: []
  },
  {
    id: 1089, day: 2, level: "N3",
    word: "囲む", kana: "かこむ", pos: "동사 (타동사)",
    mean: "둘러싸다",
    syn: [],
    collocations: [{ ja: "テーブルを囲む", ko: "테이블에 둘러앉다" }, { ja: "山に囲まれる", ko: "산으로 둘러싸이다" }],
    examples: []
  },
  {
    id: 1090, day: 2, level: "N3",
    word: "重ねる", kana: "かさねる", pos: "동사 (타동사)",
    mean: "겹치다, 거듭하다",
    syn: ["繰り返す"],
    collocations: [{ ja: "経験を重ねる", ko: "경험을 쌓다" }, { ja: "失敗を重ねる", ko: "실패를 거듭하다" }],
    examples: []
  },
  {
    id: 1091, day: 2, level: "N3",
    word: "片付ける", kana: "かたづける", pos: "동사 (타동사)",
    mean: "정리하다, 치우다",
    syn: ["整理する"],
    collocations: [{ ja: "部屋を片付ける", ko: "방을 정리하다" }, { ja: "仕事を片付ける", ko: "일을 처리하다" }],
    examples: []
  },
  {
    id: 1092, day: 2, level: "N3",
    word: "叶う", kana: "かなう", pos: "동사 (자동사)",
    mean: "(소원이) 이루어지다",
    syn: ["実現する"],
    collocations: [{ ja: "夢が叶う", ko: "꿈이 이루어지다" }, { ja: "願いが叶う", ko: "소원이 이루어지다" }],
    examples: []
  },
  {
    id: 1093, day: 2, level: "N3",
    word: "枯れる", kana: "かれる", pos: "동사 (자동사)",
    mean: "시들다, 마르다",
    syn: [],
    collocations: [{ ja: "花が枯れる", ko: "꽃이 시들다" }, { ja: "木が枯れる", ko: "나무가 말라 죽다" }],
    examples: []
  },
  {
    id: 1094, day: 2, level: "N3",
    word: "乾かす", kana: "かわかす", pos: "동사 (타동사)",
    mean: "말리다",
    syn: [],
    collocations: [{ ja: "髪を乾かす", ko: "머리를 말리다" }, { ja: "洗濯物を乾かす", ko: "빨래를 말리다" }],
    examples: []
  },
  {
    id: 1095, day: 2, level: "N3",
    word: "効く", kana: "きく", pos: "동사 (자동사)",
    mean: "효과가 있다, 듣다",
    syn: ["効果がある"],
    collocations: [{ ja: "薬が効く", ko: "약이 듣다" }, { ja: "冷房が効いている", ko: "냉방이 잘 되어 있다" }],
    examples: []
  },
  {
    id: 1096, day: 2, level: "N3",
    word: "刻む", kana: "きざむ", pos: "동사 (타동사)",
    mean: "잘게 썰다, 새기다",
    syn: [],
    collocations: [{ ja: "野菜を刻む", ko: "채소를 잘게 썰다" }, { ja: "心に刻む", ko: "마음에 새기다" }],
    examples: []
  },
  {
    id: 1097, day: 2, level: "N3",
    word: "嫌う", kana: "きらう", pos: "동사 (타동사)",
    mean: "싫어하다",
    syn: ["嫌がる"],
    collocations: [{ ja: "人に嫌われる", ko: "남에게 미움받다" }, { ja: "湿気を嫌う", ko: "습기를 싫어하다" }],
    examples: []
  },
  {
    id: 1098, day: 2, level: "N3",
    word: "崩れる", kana: "くずれる", pos: "동사 (자동사)",
    mean: "무너지다, (날씨가) 나빠지다",
    syn: [],
    collocations: [{ ja: "天気が崩れる", ko: "날씨가 나빠지다" }, { ja: "バランスが崩れる", ko: "균형이 무너지다" }],
    examples: []
  },
  {
    id: 1099, day: 2, level: "N3",
    word: "下る", kana: "くだる", pos: "동사 (자동사)",
    mean: "내려가다",
    syn: ["下りる"],
    collocations: [{ ja: "坂を下る", ko: "언덕을 내려가다" }, { ja: "川を下る", ko: "강을 따라 내려가다" }],
    examples: []
  },
  {
    id: 1100, day: 2, level: "N3",
    word: "加える", kana: "くわえる", pos: "동사 (타동사)",
    mean: "더하다, 추가하다",
    syn: ["足す"],
    collocations: [{ ja: "塩を加える", ko: "소금을 더하다" }, { ja: "仲間に加える", ko: "동료로 끼워 주다" }],
    examples: []
  },
  {
    id: 1101, day: 2, level: "N3",
    word: "加わる", kana: "くわわる", pos: "동사 (자동사)",
    mean: "더해지다, 참가하다",
    syn: ["参加する"],
    collocations: [{ ja: "メンバーに加わる", ko: "멤버로 참가하다" }, { ja: "圧力が加わる", ko: "압력이 더해지다" }],
    examples: []
  },
  {
    id: 1102, day: 2, level: "N3",
    word: "越える", kana: "こえる", pos: "동사 (자동사)",
    mean: "넘다",
    syn: ["超える"],
    collocations: [{ ja: "国境を越える", ko: "국경을 넘다" }, { ja: "山を越える", ko: "산을 넘다" }],
    examples: []
  },
  {
    id: 1103, day: 2, level: "N3",
    word: "焦げる", kana: "こげる", pos: "동사 (자동사)",
    mean: "타다, 눋다",
    syn: [],
    collocations: [{ ja: "パンが焦げる", ko: "빵이 타다" }, { ja: "鍋が焦げつく", ko: "냄비가 눌어붙다" }],
    examples: []
  },
  {
    id: 1104, day: 2, level: "N3",
    word: "凍る", kana: "こおる", pos: "동사 (자동사)",
    mean: "얼다",
    syn: [],
    collocations: [{ ja: "池が凍る", ko: "연못이 얼다" }, { ja: "道が凍る", ko: "길이 얼다" }],
    examples: []
  },
  {
    id: 1105, day: 2, level: "N3",
    word: "異なる", kana: "ことなる", pos: "동사 (자동사)",
    mean: "다르다",
    syn: ["違う"],
    collocations: [{ ja: "意見が異なる", ko: "의견이 다르다" }, { ja: "国によって異なる", ko: "나라에 따라 다르다" }],
    examples: []
  },
  {
    id: 1106, day: 2, level: "N3",
    word: "断る", kana: "ことわる", pos: "동사 (타동사)",
    mean: "거절하다",
    syn: ["拒否する"],
    collocations: [{ ja: "誘いを断る", ko: "권유를 거절하다" }, { ja: "前もって断る", ko: "미리 양해를 구하다" }],
    examples: []
  },
  {
    id: 1107, day: 2, level: "N3",
    word: "好む", kana: "このむ", pos: "동사 (타동사)",
    mean: "좋아하다, 즐기다",
    syn: ["好く"],
    collocations: [{ ja: "甘いものを好む", ko: "단것을 좋아하다" }, { ja: "好んで読む", ko: "즐겨 읽다" }],
    examples: []
  },
  {
    id: 1108, day: 2, level: "N3",
    word: "転がる", kana: "ころがる", pos: "동사 (자동사)",
    mean: "구르다, 굴러다니다",
    syn: [],
    collocations: [{ ja: "ボールが転がる", ko: "공이 구르다" }, { ja: "床に転がる", ko: "바닥에 뒹굴다" }],
    examples: []
  },
  {
    id: 1109, day: 2, level: "N3",
    word: "探る", kana: "さぐる", pos: "동사 (타동사)",
    mean: "더듬어 찾다, 살피다",
    syn: ["調べる"],
    collocations: [{ ja: "原因を探る", ko: "원인을 찾다" }, { ja: "相手の気持ちを探る", ko: "상대의 마음을 떠보다" }],
    examples: []
  },
  {
    id: 215, day: 2, level: "N3",
    word: "避ける", kana: "さける", pos: "동사 (1단 타동사)",
    mean: "피하다, 기피하다",
    syn: ["よける", "回避する"],
    collocations: [{ ja: "危険を避ける", ko: "위험을 피하다" }, { ja: "混雑を避ける", ko: "혼잡을 기피하다/피하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "無用な感情的対立を避けるため、冷静かつ客観的な事実のみに基づいて議論を進めた。", ko: "불필요한 감정적 대립을 피하기 위해 냉정하고 객관적인 사실에만 근거하여 논의를 진행했다." }, { type: "on", label: "음독", ja: "大雨による土砂崩れの危険を察知し、近隣の住民が高台へと緊急避難(ひなん)した。", ko: "폭우로 인한 산사태 위험을 감지하고 인근 주민들이 고지대로 긴급 대피했다." }]
  },
  {
    id: 1110, day: 2, level: "N3",
    word: "器用", kana: "きよう", pos: "な형용사",
    mean: "손재주가 좋음, 요령이 좋음",
    syn: [],
    collocations: [{ ja: "手先が器用だ", ko: "손재주가 좋다" }, { ja: "器用に生きる", ko: "요령 있게 살다" }],
    examples: []
  },
  {
    id: 1111, day: 2, level: "N3",
    word: "羨ましい", kana: "うらやましい", pos: "い형용사",
    mean: "부럽다",
    syn: [],
    collocations: [{ ja: "羨ましい生活", ko: "부러운 생활" }, { ja: "人を羨ましく思う", ko: "남을 부러워하다" }],
    examples: []
  },
  {
    id: 1112, day: 2, level: "N3",
    word: "急激", kana: "きゅうげき", pos: "な형용사",
    mean: "급격함",
    syn: ["急速な"],
    collocations: [{ ja: "急激な変化", ko: "급격한 변화" }, { ja: "急激に増える", ko: "급격히 늘다" }],
    examples: []
  },
  {
    id: 1113, day: 2, level: "N3",
    word: "偉い", kana: "えらい", pos: "い형용사",
    mean: "훌륭하다, 지위가 높다",
    syn: ["立派な"],
    collocations: [{ ja: "偉い人", ko: "높은 사람" }, { ja: "よく頑張って偉い", ko: "열심히 해서 기특하다" }],
    examples: []
  },
  {
    id: 1114, day: 2, level: "N3",
    word: "地味", kana: "じみ", pos: "な형용사",
    mean: "수수함",
    syn: [],
    collocations: [{ ja: "地味な服", ko: "수수한 옷" }, { ja: "地味な作業", ko: "티 안 나는 작업" }],
    examples: []
  },
  {
    id: 1115, day: 2, level: "N3",
    word: "幼い", kana: "おさない", pos: "い형용사",
    mean: "어리다, 유치하다",
    syn: ["幼稚な"],
    collocations: [{ ja: "幼い子ども", ko: "어린아이" }, { ja: "考えが幼い", ko: "생각이 유치하다" }],
    examples: []
  },
  {
    id: 1116, day: 2, level: "N3",
    word: "派手", kana: "はで", pos: "な형용사",
    mean: "화려함",
    syn: ["華やかな"],
    collocations: [{ ja: "派手な色", ko: "화려한 색" }, { ja: "派手に遊ぶ", ko: "요란하게 놀다" }],
    examples: []
  },
  {
    id: 1117, day: 2, level: "N3",
    word: "恐ろしい", kana: "おそろしい", pos: "い형용사",
    mean: "무섭다, 두렵다",
    syn: ["怖い"],
    collocations: [{ ja: "恐ろしい事件", ko: "무서운 사건" }, { ja: "恐ろしいほど速い", ko: "무서울 만큼 빠르다" }],
    examples: []
  },
  {
    id: 1118, day: 2, level: "N3",
    word: "主要", kana: "しゅよう", pos: "な형용사",
    mean: "주요함",
    syn: ["主な"],
    collocations: [{ ja: "主要な目的", ko: "주요 목적" }, { ja: "主要都市", ko: "주요 도시" }],
    examples: []
  },
  {
    id: 1119, day: 2, level: "N3",
    word: "大人しい", kana: "おとなしい", pos: "い형용사",
    mean: "얌전하다, 온순하다",
    syn: ["穏やかな"],
    collocations: [{ ja: "大人しい子", ko: "얌전한 아이" }, { ja: "大人しい色", ko: "수수한 색" }],
    examples: []
  },
  {
    id: 1120, day: 2, level: "N3",
    word: "正直", kana: "しょうじき", pos: "な형용사",
    mean: "정직함, 솔직함",
    syn: ["素直な"],
    collocations: [{ ja: "正直な人", ko: "정직한 사람" }, { ja: "正直に話す", ko: "솔직하게 말하다" }],
    examples: []
  },
  {
    id: 1121, day: 2, level: "N3",
    word: "賢い", kana: "かしこい", pos: "い형용사",
    mean: "현명하다, 영리하다",
    syn: ["利口な"],
    collocations: [{ ja: "賢い犬", ko: "영리한 개" }, { ja: "賢い選択", ko: "현명한 선택" }],
    examples: []
  },
  {
    id: 1122, day: 2, level: "N3",
    word: "エネルギー", kana: "エネルギー", pos: "외래어",
    mean: "에너지 (energy)",
    syn: ["活力"],
    collocations: [{ ja: "エネルギーを節約する", ko: "에너지를 절약하다" }],
    examples: []
  },
  {
    id: 1123, day: 2, level: "N3",
    word: "オーバー", kana: "オーバー", pos: "외래어",
    mean: "초과, 과장 (over)",
    syn: ["超過", "大げさ"],
    collocations: [{ ja: "予算をオーバーする", ko: "예산을 초과하다" }, { ja: "オーバーな表現", ko: "과장된 표현" }],
    examples: []
  },
  {
    id: 1124, day: 2, level: "N3",
    word: "カロリー", kana: "カロリー", pos: "외래어",
    mean: "칼로리 (calorie)",
    syn: [],
    collocations: [{ ja: "カロリーが高い", ko: "칼로리가 높다" }],
    examples: []
  },
  {
    id: 1125, day: 2, level: "N3",
    word: "思い切り", kana: "おもいきり", pos: "부사",
    mean: "마음껏, 힘껏",
    syn: ["存分に"],
    collocations: [{ ja: "思い切り遊ぶ", ko: "마음껏 놀다" }],
    examples: [{ type: "ex", label: "예문", ja: "週末は思い切り寝たい。", ko: "주말에는 마음껏 자고 싶다." }]
  },
  {
    id: 1126, day: 2, level: "N3",
    word: "必ずしも", kana: "かならずしも", pos: "부사",
    mean: "반드시 (~인 것은 아니다)",
    syn: ["一概に"],
    collocations: [{ ja: "必ずしも正しくない", ko: "반드시 옳은 것은 아니다" }],
    examples: [{ type: "ex", label: "예문", ja: "高い物が必ずしも良いとは限らない。", ko: "비싼 것이 반드시 좋은 것은 아니다." }]
  },
  {
    id: 37, day: 2, level: "N3",
    word: "かえって", kana: "かえって", pos: "부사",
    mean: "오히려, 도리어",
    syn: ["むしろ", "逆に"],
    collocations: [{ ja: "かえって悪化する", ko: "도리어 악화되다" }, { ja: "かえって手間がかかる", ko: "오히려 손이 더 가다" }],
    examples: [{ type: "ex", label: "예문", ja: "親切心からよかれと思って手伝ったことが、かえって相手の負担になってしまった。", ko: "친절한 마음에 잘되라고 생각해서 도운 일이 오히려 상대방에게 부담이 되고 말았다." }]
  },
  {
    id: 1127, day: 2, level: "N3",
    word: "少なくとも", kana: "すくなくとも", pos: "부사",
    mean: "적어도",
    syn: ["最低でも"],
    collocations: [{ ja: "少なくとも一万円", ko: "적어도 만 엔" }],
    examples: [{ type: "ex", label: "예문", ja: "少なくとも一週間はかかるだろう。", ko: "적어도 일주일은 걸릴 것이다." }]
  },
  {
    id: 1128, day: 2, level: "N3",
    word: "決して", kana: "けっして", pos: "부사",
    mean: "결코 (~않다)",
    syn: ["絶対に"],
    collocations: [{ ja: "決して忘れない", ko: "결코 잊지 않다" }],
    examples: [{ type: "ex", label: "예문", ja: "この恩は決して忘れません。", ko: "이 은혜는 결코 잊지 않겠습니다." }]
  },
  {
    id: 1129, day: 2, level: "N3",
    word: "結局", kana: "けっきょく", pos: "부사",
    mean: "결국",
    syn: ["最終的に"],
    collocations: [{ ja: "結局やめた", ko: "결국 그만두었다" }],
    examples: [{ type: "ex", label: "예문", ja: "いろいろ迷ったが、結局行かなかった。", ko: "이리저리 망설였지만 결국 가지 않았다." }]
  },
  {
    id: 1130, day: 2, level: "N3",
    word: "再び", kana: "ふたたび", pos: "부사",
    mean: "다시, 재차",
    syn: ["もう一度"],
    collocations: [{ ja: "再び訪れる", ko: "다시 방문하다" }],
    examples: [{ type: "ex", label: "예문", ja: "十年後、再びこの町を訪れた。", ko: "10년 후 다시 이 마을을 찾았다." }]
  },
  {
    id: 1131, day: 2, level: "N3",
    word: "早速", kana: "さっそく", pos: "부사",
    mean: "즉시, 곧바로",
    syn: ["すぐに"],
    collocations: [{ ja: "早速始める", ko: "곧바로 시작하다" }],
    examples: [{ type: "ex", label: "예문", ja: "届いた本を早速読んでみた。", ko: "도착한 책을 곧바로 읽어 보았다." }]
  },
  {
    id: 1132, day: 2, level: "N3",
    word: "ぐっすり", kana: "ぐっすり", pos: "부사 (의성어·의태어)",
    mean: "푹 (자는 모양)",
    syn: ["熟睡する"],
    collocations: [{ ja: "ぐっすり眠る", ko: "푹 자다" }],
    examples: [{ type: "ex", label: "예문", ja: "疲れていたので、朝までぐっすり眠った。", ko: "피곤해서 아침까지 푹 잤다." }]
  },
  {
    id: 1133, day: 2, level: "N3",
    word: "しっかり", kana: "しっかり", pos: "부사 (의성어·의태어)",
    mean: "단단히, 똑똑히",
    syn: ["きちんと"],
    collocations: [{ ja: "しっかり覚える", ko: "확실히 외우다" }],
    examples: [{ type: "ex", label: "예문", ja: "ひもをしっかり結んでください。", ko: "끈을 단단히 매 주세요." }]
  },
  {
    id: 1134, day: 2, level: "N3",
    word: "すっかり", kana: "すっかり", pos: "부사 (의성어·의태어)",
    mean: "완전히, 몽땅",
    syn: ["完全に"],
    collocations: [{ ja: "すっかり忘れる", ko: "완전히 잊다" }],
    examples: [{ type: "ex", label: "예문", ja: "町の様子はすっかり変わった。", ko: "마을 모습은 완전히 변했다." }]
  },
  {
    id: 1135, day: 2, level: "N3",
    word: "すっきり", kana: "すっきり", pos: "부사 (의성어·의태어)",
    mean: "산뜻하게, 개운하게",
    syn: ["さっぱり"],
    collocations: [{ ja: "気分がすっきりする", ko: "기분이 개운하다" }],
    examples: [{ type: "ex", label: "예문", ja: "部屋を片付けたら、すっきりした。", ko: "방을 정리했더니 개운해졌다." }]
  },
  {
    id: 1136, day: 2, level: "N3",
    word: "つまり", kana: "つまり", pos: "접속사",
    mean: "즉, 요컨대",
    syn: ["すなわち", "要するに"],
    collocations: [{ ja: "つまり", ko: "즉" }],
    examples: [{ type: "ex", label: "예문", ja: "つまり、反対ということですね。", ko: "즉 반대라는 말씀이군요." }]
  },
  {
    id: 1137, day: 2, level: "N3",
    word: "ところが", kana: "ところが", pos: "접속사",
    mean: "그런데 (예상과 달리)",
    syn: ["しかし"],
    collocations: [{ ja: "ところが", ko: "그런데" }],
    examples: [{ type: "ex", label: "예문", ja: "晴れると思った。ところが、午後から雨になった。", ko: "맑을 줄 알았다. 그런데 오후부터 비가 왔다." }]
  },
  {
    id: 1138, day: 2, level: "N3",
    word: "許可", kana: "きょか", pos: "명사 (する동사)",
    mean: "허가",
    syn: ["許し"],
    collocations: [{ ja: "許可を得る", ko: "허가를 받다" }, { ja: "外出許可", ko: "외출 허가" }],
    examples: []
  },
  {
    id: 1139, day: 2, level: "N3",
    word: "記録", kana: "きろく", pos: "명사 (する동사)",
    mean: "기록",
    syn: [],
    collocations: [{ ja: "記録を破る", ko: "기록을 깨다" }, { ja: "記録に残す", ko: "기록으로 남기다" }],
    examples: []
  },
  {
    id: 1140, day: 2, level: "N3",
    word: "禁止", kana: "きんし", pos: "명사 (する동사)",
    mean: "금지",
    syn: [],
    collocations: [{ ja: "駐車禁止", ko: "주차 금지" }, { ja: "使用を禁止する", ko: "사용을 금지하다" }],
    examples: []
  },
  {
    id: 1141, day: 2, level: "N3",
    word: "緊張", kana: "きんちょう", pos: "명사 (する동사)",
    mean: "긴장",
    syn: ["あがる"],
    collocations: [{ ja: "緊張が高まる", ko: "긴장이 고조되다" }, { ja: "緊張をほぐす", ko: "긴장을 풀다" }],
    examples: []
  },
  {
    id: 1142, day: 2, level: "N3",
    word: "区別", kana: "くべつ", pos: "명사 (する동사)",
    mean: "구별",
    syn: ["見分ける"],
    collocations: [{ ja: "区別がつかない", ko: "구별이 안 되다" }, { ja: "公私を区別する", ko: "공사를 구별하다" }],
    examples: []
  },
  {
    id: 1143, day: 2, level: "N3",
    word: "苦労", kana: "くろう", pos: "명사 (する동사)",
    mean: "고생, 수고",
    syn: ["苦心"],
    collocations: [{ ja: "苦労をかける", ko: "고생을 시키다" }, { ja: "苦労して育てる", ko: "고생하며 키우다" }],
    examples: []
  },
  {
    id: 1144, day: 2, level: "N3",
    word: "経営", kana: "けいえい", pos: "명사 (する동사)",
    mean: "경영",
    syn: ["運営"],
    collocations: [{ ja: "会社を経営する", ko: "회사를 경영하다" }, { ja: "経営者", ko: "경영자" }],
    examples: []
  },
  {
    id: 1145, day: 2, level: "N3",
    word: "計算", kana: "けいさん", pos: "명사 (する동사)",
    mean: "계산",
    syn: [],
    collocations: [{ ja: "計算を間違える", ko: "계산을 틀리다" }, { ja: "計算が合う", ko: "계산이 맞다" }],
    examples: []
  },
  {
    id: 1146, day: 2, level: "N3",
    word: "結果", kana: "けっか", pos: "명사",
    mean: "결과",
    syn: [],
    collocations: [{ ja: "結果を出す", ko: "결과를 내다" }, { ja: "検査の結果", ko: "검사 결과" }],
    examples: []
  },
  {
    id: 1147, day: 2, level: "N3",
    word: "欠点", kana: "けってん", pos: "명사",
    mean: "결점",
    syn: ["短所", "弱点"],
    collocations: [{ ja: "欠点を直す", ko: "결점을 고치다" }, { ja: "欠点がない", ko: "흠잡을 데가 없다" }],
    examples: []
  },
  {
    id: 1148, day: 2, level: "N3",
    word: "原因", kana: "げんいん", pos: "명사 (する동사)",
    mean: "원인",
    syn: ["理由"],
    collocations: [{ ja: "原因を調べる", ko: "원인을 조사하다" }, { ja: "事故の原因", ko: "사고 원인" }],
    examples: []
  },
  {
    id: 1149, day: 2, level: "N3",
    word: "見学", kana: "けんがく", pos: "명사 (する동사)",
    mean: "견학",
    syn: [],
    collocations: [{ ja: "工場を見学する", ko: "공장을 견학하다" }, { ja: "社会見学", ko: "사회 견학" }],
    examples: []
  },
  {
    id: 1150, day: 2, level: "N3",
    word: "減少", kana: "げんしょう", pos: "명사 (する동사)",
    mean: "감소",
    syn: ["減る"],
    collocations: [{ ja: "人口が減少する", ko: "인구가 감소하다" }, { ja: "減少傾向", ko: "감소 추세" }],
    examples: []
  },
  {
    id: 1151, day: 2, level: "N3",
    word: "検査", kana: "けんさ", pos: "명사 (する동사)",
    mean: "검사",
    syn: ["調べる"],
    collocations: [{ ja: "健康検査", ko: "건강 검진" }, { ja: "検査を受ける", ko: "검사를 받다" }],
    examples: []
  },
  {
    id: 1152, day: 2, level: "N3",
    word: "建設", kana: "けんせつ", pos: "명사 (する동사)",
    mean: "건설",
    syn: [],
    collocations: [{ ja: "ビルを建設する", ko: "빌딩을 건설하다" }, { ja: "建設中", ko: "건설 중" }],
    examples: []
  },
  {
    id: 1153, day: 2, level: "N3",
    word: "効果", kana: "こうか", pos: "명사",
    mean: "효과",
    syn: ["効き目"],
    collocations: [{ ja: "効果がある", ko: "효과가 있다" }, { ja: "効果的な方法", ko: "효과적인 방법" }],
    examples: []
  },
  {
    id: 1154, day: 2, level: "N3",
    word: "交換", kana: "こうかん", pos: "명사 (する동사)",
    mean: "교환",
    syn: ["取り替える"],
    collocations: [{ ja: "情報を交換する", ko: "정보를 교환하다" }, { ja: "部品の交換", ko: "부품 교환" }],
    examples: []
  },
  {
    id: 1155, day: 2, level: "N3",
    word: "広告", kana: "こうこく", pos: "명사 (する동사)",
    mean: "광고",
    syn: ["宣伝"],
    collocations: [{ ja: "新聞に広告を出す", ko: "신문에 광고를 내다" }, { ja: "広告費", ko: "광고비" }],
    examples: []
  },
  {
    id: 1156, day: 2, level: "N3",
    word: "交流", kana: "こうりゅう", pos: "명사 (する동사)",
    mean: "교류",
    syn: [],
    collocations: [{ ja: "国際交流", ko: "국제 교류" }, { ja: "交流を深める", ko: "교류를 깊게 하다" }],
    examples: []
  },
  {
    id: 1157, day: 2, level: "N3",
    word: "誤解", kana: "ごかい", pos: "명사 (する동사)",
    mean: "오해",
    syn: ["勘違い"],
    collocations: [{ ja: "誤解を招く", ko: "오해를 사다" }, { ja: "誤解を解く", ko: "오해를 풀다" }],
    examples: []
  },
  {
    id: 1158, day: 2, level: "N3",
    word: "混雑", kana: "こんざつ", pos: "명사 (する동사)",
    mean: "혼잡",
    syn: ["込む"],
    collocations: [{ ja: "道路が混雑する", ko: "도로가 혼잡하다" }, { ja: "混雑を避ける", ko: "혼잡을 피하다" }],
    examples: []
  },
  {
    id: 1159, day: 2, level: "N3",
    word: "才能", kana: "さいのう", pos: "명사",
    mean: "재능",
    syn: ["能力"],
    collocations: [{ ja: "才能がある", ko: "재능이 있다" }, { ja: "才能を伸ばす", ko: "재능을 키우다" }],
    examples: []
  },
  {
    id: 1160, day: 2, level: "N3",
    word: "作品", kana: "さくひん", pos: "명사",
    mean: "작품",
    syn: [],
    collocations: [{ ja: "作品を発表する", ko: "작품을 발표하다" }, { ja: "芸術作品", ko: "예술 작품" }],
    examples: []
  },
  {
    id: 1161, day: 2, level: "N3",
    word: "参加", kana: "さんか", pos: "명사 (する동사)",
    mean: "참가",
    syn: ["加わる"],
    collocations: [{ ja: "会議に参加する", ko: "회의에 참가하다" }, { ja: "参加者", ko: "참가자" }],
    examples: []
  },
  {
    id: 1162, day: 2, level: "N3",
    word: "賛成", kana: "さんせい", pos: "명사 (する동사)",
    mean: "찬성",
    syn: ["同意"],
    collocations: [{ ja: "意見に賛成する", ko: "의견에 찬성하다" }, { ja: "賛成多数", ko: "찬성 다수" }],
    examples: []
  },
  {
    id: 1163, day: 2, level: "N3",
    word: "姿勢", kana: "しせい", pos: "명사",
    mean: "자세, 태도",
    syn: ["態度"],
    collocations: [{ ja: "姿勢が悪い", ko: "자세가 나쁘다" }, { ja: "前向きな姿勢", ko: "긍정적인 태도" }],
    examples: []
  },
  {
    id: 1164, day: 2, level: "N3",
    word: "自信", kana: "じしん", pos: "명사",
    mean: "자신감",
    syn: [],
    collocations: [{ ja: "自信を持つ", ko: "자신감을 갖다" }, { ja: "自信を失う", ko: "자신감을 잃다" }],
    examples: []
  },
  {
    id: 1165, day: 2, level: "N3",
    word: "実験", kana: "じっけん", pos: "명사 (する동사)",
    mean: "실험",
    syn: ["試み"],
    collocations: [{ ja: "実験を行う", ko: "실험을 하다" }, { ja: "実験結果", ko: "실험 결과" }],
    examples: []
  },
  {
    id: 1166, day: 2, level: "N3",
    word: "実行", kana: "じっこう", pos: "명사 (する동사)",
    mean: "실행",
    syn: ["実施"],
    collocations: [{ ja: "計画を実行する", ko: "계획을 실행하다" }, { ja: "実行に移す", ko: "실행에 옮기다" }],
    examples: []
  },
  // ==========================================
  // [DAY 3] N3 필수 · 82개
  // ==========================================
  {
    id: 1167, day: 3, level: "N3",
    word: "支える", kana: "ささえる", pos: "동사 (타동사)",
    mean: "떠받치다, 지탱하다",
    syn: ["支援する"],
    collocations: [{ ja: "家族を支える", ko: "가족을 부양하다" }, { ja: "生活を支える", ko: "생활을 지탱하다" }],
    examples: []
  },
  {
    id: 1168, day: 3, level: "N3",
    word: "刺す", kana: "さす", pos: "동사 (타동사)",
    mean: "찌르다, 쏘다",
    syn: [],
    collocations: [{ ja: "針を刺す", ko: "바늘을 찌르다" }, { ja: "蚊に刺される", ko: "모기에 물리다" }],
    examples: []
  },
  {
    id: 1169, day: 3, level: "N3",
    word: "誘う", kana: "さそう", pos: "동사 (타동사)",
    mean: "권하다, 꾀다",
    syn: ["勧める"],
    collocations: [{ ja: "食事に誘う", ko: "식사하자고 권하다" }, { ja: "眠気を誘う", ko: "졸음을 부르다" }],
    examples: []
  },
  {
    id: 1170, day: 3, level: "N3",
    word: "冷める", kana: "さめる", pos: "동사 (자동사)",
    mean: "식다",
    syn: ["冷える"],
    collocations: [{ ja: "スープが冷める", ko: "수프가 식다" }, { ja: "熱が冷める", ko: "열기가 식다" }],
    examples: []
  },
  {
    id: 1171, day: 3, level: "N3",
    word: "去る", kana: "さる", pos: "동사 (자동사)",
    mean: "떠나다, 지나가다",
    syn: ["離れる"],
    collocations: [{ ja: "故郷を去る", ko: "고향을 떠나다" }, { ja: "台風が去る", ko: "태풍이 지나가다" }],
    examples: []
  },
  {
    id: 1172, day: 3, level: "N3",
    word: "触れる", kana: "ふれる", pos: "동사 (자동사)",
    mean: "닿다, 언급하다",
    syn: ["触る"],
    collocations: [{ ja: "手が触れる", ko: "손이 닿다" }, { ja: "問題に触れる", ko: "문제를 언급하다" }],
    examples: []
  },
  {
    id: 1173, day: 3, level: "N3",
    word: "沈む", kana: "しずむ", pos: "동사 (자동사)",
    mean: "가라앉다, (해가) 지다",
    syn: [],
    collocations: [{ ja: "船が沈む", ko: "배가 가라앉다" }, { ja: "日が沈む", ko: "해가 지다" }],
    examples: []
  },
  {
    id: 1174, day: 3, level: "N3",
    word: "従う", kana: "したがう", pos: "동사 (자동사)",
    mean: "따르다",
    syn: ["守る"],
    collocations: [{ ja: "指示に従う", ko: "지시에 따르다" }, { ja: "規則に従う", ko: "규칙을 따르다" }],
    examples: []
  },
  {
    id: 1175, day: 3, level: "N3",
    word: "縛る", kana: "しばる", pos: "동사 (타동사)",
    mean: "묶다, 속박하다",
    syn: [],
    collocations: [{ ja: "ひもで縛る", ko: "끈으로 묶다" }, { ja: "時間に縛られる", ko: "시간에 얽매이다" }],
    examples: []
  },
  {
    id: 1176, day: 3, level: "N3",
    word: "絞る", kana: "しぼる", pos: "동사 (타동사)",
    mean: "짜다, 좁히다",
    syn: [],
    collocations: [{ ja: "タオルを絞る", ko: "수건을 짜다" }, { ja: "候補を絞る", ko: "후보를 좁히다" }],
    examples: []
  },
  {
    id: 1177, day: 3, level: "N3",
    word: "示す", kana: "しめす", pos: "동사 (타동사)",
    mean: "가리키다, 보이다",
    syn: ["表す"],
    collocations: [{ ja: "関心を示す", ko: "관심을 보이다" }, { ja: "例を示す", ko: "예를 보이다" }],
    examples: []
  },
  {
    id: 1178, day: 3, level: "N3",
    word: "湿る", kana: "しめる", pos: "동사 (자동사)",
    mean: "축축해지다",
    syn: [],
    collocations: [{ ja: "空気が湿る", ko: "공기가 눅눅해지다" }, { ja: "湿ったタオル", ko: "축축한 수건" }],
    examples: []
  },
  {
    id: 1179, day: 3, level: "N3",
    word: "生じる", kana: "しょうじる", pos: "동사 (자동사)",
    mean: "생기다, 발생하다",
    syn: ["起こる", "発生する"],
    collocations: [{ ja: "問題が生じる", ko: "문제가 생기다" }, { ja: "誤解が生じる", ko: "오해가 생기다" }],
    examples: []
  },
  {
    id: 1180, day: 3, level: "N3",
    word: "救う", kana: "すくう", pos: "동사 (타동사)",
    mean: "구하다",
    syn: ["助ける"],
    collocations: [{ ja: "命を救う", ko: "목숨을 구하다" }, { ja: "危機を救う", ko: "위기를 구하다" }],
    examples: []
  },
  {
    id: 1181, day: 3, level: "N3",
    word: "優れる", kana: "すぐれる", pos: "동사 (자동사)",
    mean: "뛰어나다",
    syn: ["勝る"],
    collocations: [{ ja: "性能が優れる", ko: "성능이 뛰어나다" }, { ja: "優れた作品", ko: "뛰어난 작품" }],
    examples: []
  },
  {
    id: 1182, day: 3, level: "N3",
    word: "済ませる", kana: "すませる", pos: "동사 (타동사)",
    mean: "끝내다, 마치다",
    syn: ["終える"],
    collocations: [{ ja: "用事を済ませる", ko: "볼일을 마치다" }, { ja: "食事を済ませる", ko: "식사를 마치다" }],
    examples: []
  },
  {
    id: 1183, day: 3, level: "N3",
    word: "備える", kana: "そなえる", pos: "동사 (타동사)",
    mean: "대비하다, 갖추다",
    syn: ["準備する"],
    collocations: [{ ja: "地震に備える", ko: "지진에 대비하다" }, { ja: "設備を備える", ko: "설비를 갖추다" }],
    examples: []
  },
  {
    id: 1184, day: 3, level: "N3",
    word: "揃う", kana: "そろう", pos: "동사 (자동사)",
    mean: "갖추어지다, 모이다",
    syn: [],
    collocations: [{ ja: "全員が揃う", ko: "전원이 모이다" }, { ja: "材料が揃う", ko: "재료가 갖추어지다" }],
    examples: []
  },
  {
    id: 1185, day: 3, level: "N3",
    word: "揃える", kana: "そろえる", pos: "동사 (타동사)",
    mean: "갖추다, 가지런히 하다",
    syn: [],
    collocations: [{ ja: "靴を揃える", ko: "신발을 가지런히 놓다" }, { ja: "声を揃える", ko: "입을 모으다" }],
    examples: []
  },
  {
    id: 1186, day: 3, level: "N3",
    word: "倒す", kana: "たおす", pos: "동사 (타동사)",
    mean: "쓰러뜨리다, 이기다",
    syn: [],
    collocations: [{ ja: "木を倒す", ko: "나무를 쓰러뜨리다" }, { ja: "強敵を倒す", ko: "강적을 쓰러뜨리다" }],
    examples: []
  },
  {
    id: 1187, day: 3, level: "N3",
    word: "確かめる", kana: "たしかめる", pos: "동사 (타동사)",
    mean: "확인하다",
    syn: ["確認する"],
    collocations: [{ ja: "事実を確かめる", ko: "사실을 확인하다" }, { ja: "答えを確かめる", ko: "답을 확인하다" }],
    examples: []
  },
  {
    id: 1188, day: 3, level: "N3",
    word: "戦う", kana: "たたかう", pos: "동사 (자동사)",
    mean: "싸우다",
    syn: ["争う"],
    collocations: [{ ja: "敵と戦う", ko: "적과 싸우다" }, { ja: "病気と戦う", ko: "병과 싸우다" }],
    examples: []
  },
  {
    id: 1189, day: 3, level: "N3",
    word: "叩く", kana: "たたく", pos: "동사 (타동사)",
    mean: "두드리다, 때리다",
    syn: [],
    collocations: [{ ja: "ドアを叩く", ko: "문을 두드리다" }, { ja: "肩を叩く", ko: "어깨를 두드리다" }],
    examples: []
  },
  {
    id: 1190, day: 3, level: "N3",
    word: "畳む", kana: "たたむ", pos: "동사 (타동사)",
    mean: "개다, 접다",
    syn: ["折る"],
    collocations: [{ ja: "布団を畳む", ko: "이불을 개다" }, { ja: "店を畳む", ko: "가게를 접다" }],
    examples: []
  },
  {
    id: 1191, day: 3, level: "N3",
    word: "頼る", kana: "たよる", pos: "동사 (자동사)",
    mean: "의지하다",
    syn: ["依存する"],
    collocations: [{ ja: "親に頼る", ko: "부모에게 의지하다" }, { ja: "経験に頼る", ko: "경험에 의존하다" }],
    examples: []
  },
  {
    id: 1192, day: 3, level: "N3",
    word: "新鮮", kana: "しんせん", pos: "な형용사",
    mean: "신선함",
    syn: [],
    collocations: [{ ja: "新鮮な野菜", ko: "신선한 채소" }, { ja: "新鮮な感覚", ko: "신선한 감각" }],
    examples: []
  },
  {
    id: 1193, day: 3, level: "N3",
    word: "硬い", kana: "かたい", pos: "い형용사",
    mean: "딱딱하다, 굳다",
    syn: [],
    collocations: [{ ja: "硬い石", ko: "딱딱한 돌" }, { ja: "表情が硬い", ko: "표정이 굳어 있다" }],
    examples: []
  },
  {
    id: 1194, day: 3, level: "N3",
    word: "慎重", kana: "しんちょう", pos: "な형용사",
    mean: "신중함",
    syn: ["注意深い"],
    collocations: [{ ja: "慎重な態度", ko: "신중한 태도" }, { ja: "慎重に検討する", ko: "신중하게 검토하다" }],
    examples: []
  },
  {
    id: 1195, day: 3, level: "N3",
    word: "素直", kana: "すなお", pos: "な형용사",
    mean: "순수함, 고분고분함",
    syn: ["正直な"],
    collocations: [{ ja: "素直な性格", ko: "순수한 성격" }, { ja: "素直に謝る", ko: "순순히 사과하다" }],
    examples: []
  },
  {
    id: 1196, day: 3, level: "N3",
    word: "痒い", kana: "かゆい", pos: "い형용사",
    mean: "가렵다",
    syn: [],
    collocations: [{ ja: "背中が痒い", ko: "등이 가렵다" }, { ja: "痒いところに手が届く", ko: "세심하게 배려가 미치다" }],
    examples: []
  },
  {
    id: 1197, day: 3, level: "N3",
    word: "正確", kana: "せいかく", pos: "な형용사",
    mean: "정확함",
    syn: ["確かな"],
    collocations: [{ ja: "正確な時間", ko: "정확한 시간" }, { ja: "正確に伝える", ko: "정확하게 전하다" }],
    examples: []
  },
  {
    id: 1198, day: 3, level: "N3",
    word: "悔しい", kana: "くやしい", pos: "い형용사",
    mean: "분하다, 억울하다",
    syn: ["残念な"],
    collocations: [{ ja: "負けて悔しい", ko: "져서 분하다" }, { ja: "悔しい思い", ko: "억울한 마음" }],
    examples: []
  },
  {
    id: 1199, day: 3, level: "N3",
    word: "盛ん", kana: "さかん", pos: "な형용사",
    mean: "성행함, 활발함",
    syn: ["活発な"],
    collocations: [{ ja: "スポーツが盛んだ", ko: "스포츠가 활발하다" }, { ja: "盛んに議論する", ko: "활발히 논의하다" }],
    examples: []
  },
  {
    id: 1200, day: 3, level: "N3",
    word: "苦しい", kana: "くるしい", pos: "い형용사",
    mean: "괴롭다, 힘들다",
    syn: ["つらい"],
    collocations: [{ ja: "息が苦しい", ko: "숨이 차다" }, { ja: "生活が苦しい", ko: "생활이 어렵다" }],
    examples: []
  },
  {
    id: 1201, day: 3, level: "N3",
    word: "様々", kana: "さまざま", pos: "な형용사",
    mean: "여러 가지임",
    syn: ["いろいろな"],
    collocations: [{ ja: "様々な意見", ko: "다양한 의견" }, { ja: "様々な方法", ko: "여러 가지 방법" }],
    examples: []
  },
  {
    id: 1202, day: 3, level: "N3",
    word: "詳しい", kana: "くわしい", pos: "い형용사",
    mean: "자세하다, 잘 알다",
    syn: ["細かい"],
    collocations: [{ ja: "詳しい説明", ko: "자세한 설명" }, { ja: "歴史に詳しい", ko: "역사에 밝다" }],
    examples: []
  },
  {
    id: 1203, day: 3, level: "N3",
    word: "重大", kana: "じゅうだい", pos: "な형용사",
    mean: "중대함",
    syn: ["重要な"],
    collocations: [{ ja: "重大な問題", ko: "중대한 문제" }, { ja: "重大なミス", ko: "중대한 실수" }],
    examples: []
  },
  {
    id: 1204, day: 3, level: "N3",
    word: "キャンセル", kana: "キャンセル", pos: "외래어",
    mean: "취소 (cancel)",
    syn: ["取り消し"],
    collocations: [{ ja: "予約をキャンセルする", ko: "예약을 취소하다" }],
    examples: []
  },
  {
    id: 1205, day: 3, level: "N3",
    word: "コミュニケーション", kana: "コミュニケーション", pos: "외래어",
    mean: "의사소통 (communication)",
    syn: ["意思疎通"],
    collocations: [{ ja: "コミュニケーションを取る", ko: "소통하다" }],
    examples: []
  },
  {
    id: 1206, day: 3, level: "N3",
    word: "スケジュール", kana: "スケジュール", pos: "외래어",
    mean: "일정 (schedule)",
    syn: ["日程", "予定"],
    collocations: [{ ja: "スケジュールを立てる", ko: "일정을 짜다" }],
    examples: []
  },
  {
    id: 1207, day: 3, level: "N3",
    word: "しばらく", kana: "しばらく", pos: "부사",
    mean: "잠시, 한동안",
    syn: ["少しの間"],
    collocations: [{ ja: "しばらく休む", ko: "잠시 쉬다" }],
    examples: [{ type: "ex", label: "예문", ja: "しばらくお待ちください。", ko: "잠시 기다려 주십시오." }]
  },
  {
    id: 1208, day: 3, level: "N3",
    word: "次第に", kana: "しだいに", pos: "부사",
    mean: "점차",
    syn: ["徐々に", "だんだん"],
    collocations: [{ ja: "次第に暗くなる", ko: "점차 어두워지다" }],
    examples: [{ type: "ex", label: "예문", ja: "雨は次第に強くなっていった。", ko: "비는 점차 거세졌다." }]
  },
  {
    id: 1209, day: 3, level: "N3",
    word: "随分", kana: "ずいぶん", pos: "부사",
    mean: "꽤, 몹시",
    syn: ["かなり"],
    collocations: [{ ja: "随分変わった", ko: "꽤 변했다" }],
    examples: [{ type: "ex", label: "예문", ja: "随分長い間お待たせしました。", ko: "꽤 오래 기다리게 해 드렸습니다." }]
  },
  {
    id: 1210, day: 3, level: "N3",
    word: "既に", kana: "すでに", pos: "부사",
    mean: "이미",
    syn: ["もう"],
    collocations: [{ ja: "既に終わった", ko: "이미 끝났다" }],
    examples: [{ type: "ex", label: "예문", ja: "会場に着いた時には、既に始まっていた。", ko: "회장에 도착했을 때는 이미 시작되어 있었다." }]
  },
  {
    id: 1211, day: 3, level: "N3",
    word: "互いに", kana: "たがいに", pos: "부사",
    mean: "서로",
    syn: ["お互いに"],
    collocations: [{ ja: "互いに助け合う", ko: "서로 돕다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人は互いに顔を見合わせた。", ko: "두 사람은 서로 얼굴을 마주 보았다." }]
  },
  {
    id: 1212, day: 3, level: "N3",
    word: "たまたま", kana: "たまたま", pos: "부사",
    mean: "우연히, 마침",
    syn: ["偶然"],
    collocations: [{ ja: "たまたま会う", ko: "우연히 만나다" }],
    examples: [{ type: "ex", label: "예문", ja: "駅でたまたま昔の友人に会った。", ko: "역에서 우연히 옛 친구를 만났다." }]
  },
  {
    id: 1213, day: 3, level: "N3",
    word: "ついに", kana: "ついに", pos: "부사",
    mean: "마침내, 끝내",
    syn: ["とうとう"],
    collocations: [{ ja: "ついに完成した", ko: "마침내 완성되었다" }],
    examples: [{ type: "ex", label: "예문", ja: "ついに夢が叶った。", ko: "마침내 꿈이 이루어졌다." }]
  },
  {
    id: 1214, day: 3, level: "N3",
    word: "常に", kana: "つねに", pos: "부사",
    mean: "늘, 항상",
    syn: ["いつも"],
    collocations: [{ ja: "常に努力する", ko: "늘 노력하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は常に冷静だ。", ko: "그는 항상 침착하다." }]
  },
  {
    id: 1215, day: 3, level: "N3",
    word: "ぞっと", kana: "ぞっと", pos: "부사 (의성어·의태어)",
    mean: "오싹하게",
    syn: ["身震いする"],
    collocations: [{ ja: "ぞっとする話", ko: "오싹한 이야기" }],
    examples: [{ type: "ex", label: "예문", ja: "事故の瞬間を思い出すと、今でもぞっとする。", ko: "사고 순간을 떠올리면 지금도 오싹하다." }]
  },
  {
    id: 1216, day: 3, level: "N3",
    word: "そっと", kana: "そっと", pos: "부사 (의성어·의태어)",
    mean: "살짝, 조용히",
    syn: ["静かに"],
    collocations: [{ ja: "そっとドアを閉める", ko: "살그머니 문을 닫다" }],
    examples: [{ type: "ex", label: "예문", ja: "眠っている子どもに、そっと毛布をかけた。", ko: "자고 있는 아이에게 살짝 담요를 덮어 주었다." }]
  },
  {
    id: 1217, day: 3, level: "N3",
    word: "どきどき", kana: "どきどき", pos: "부사 (의성어·의태어)",
    mean: "두근두근",
    syn: ["緊張する"],
    collocations: [{ ja: "胸がどきどきする", ko: "가슴이 두근거리다" }],
    examples: [{ type: "ex", label: "예문", ja: "発表の前は、いつもどきどきする。", ko: "발표 전에는 늘 두근거린다." }]
  },
  {
    id: 1218, day: 3, level: "N3",
    word: "にこにこ", kana: "にこにこ", pos: "부사 (의성어·의태어)",
    mean: "생글생글",
    syn: ["笑顔で"],
    collocations: [{ ja: "にこにこ笑う", ko: "생글생글 웃다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女はいつもにこにこしている。", ko: "그녀는 늘 생글생글 웃고 있다." }]
  },
  {
    id: 1219, day: 3, level: "N3",
    word: "ところで", kana: "ところで", pos: "접속사",
    mean: "그런데 (화제 전환)",
    syn: ["さて"],
    collocations: [{ ja: "ところで", ko: "그런데" }],
    examples: [{ type: "ex", label: "예문", ja: "ところで、例の件はどうなりましたか。", ko: "그런데 그 건은 어떻게 되었습니까?" }]
  },
  {
    id: 1220, day: 3, level: "N3",
    word: "失敗", kana: "しっぱい", pos: "명사 (する동사)",
    mean: "실패",
    syn: ["しくじる"],
    collocations: [{ ja: "試験に失敗する", ko: "시험에 실패하다" }, { ja: "失敗は成功のもと", ko: "실패는 성공의 어머니" }],
    examples: []
  },
  {
    id: 1221, day: 3, level: "N3",
    word: "指導", kana: "しどう", pos: "명사 (する동사)",
    mean: "지도",
    syn: ["教える"],
    collocations: [{ ja: "生徒を指導する", ko: "학생을 지도하다" }, { ja: "指導者", ko: "지도자" }],
    examples: []
  },
  {
    id: 1222, day: 3, level: "N3",
    word: "締め切り", kana: "しめきり", pos: "명사",
    mean: "마감",
    syn: ["期限"],
    collocations: [{ ja: "締め切りに間に合う", ko: "마감에 맞추다" }, { ja: "締め切りを延ばす", ko: "마감을 연장하다" }],
    examples: []
  },
  {
    id: 1223, day: 3, level: "N3",
    word: "習慣", kana: "しゅうかん", pos: "명사",
    mean: "습관, 관습",
    syn: ["癖"],
    collocations: [{ ja: "早起きの習慣", ko: "일찍 일어나는 습관" }, { ja: "習慣をつける", ko: "습관을 들이다" }],
    examples: []
  },
  {
    id: 1224, day: 3, level: "N3",
    word: "渋滞", kana: "じゅうたい", pos: "명사 (する동사)",
    mean: "정체 (차량)",
    syn: ["混雑"],
    collocations: [{ ja: "道路が渋滞する", ko: "도로가 정체되다" }, { ja: "交通渋滞", ko: "교통 정체" }],
    examples: []
  },
  {
    id: 1225, day: 3, level: "N3",
    word: "修理", kana: "しゅうり", pos: "명사 (する동사)",
    mean: "수리",
    syn: ["直す"],
    collocations: [{ ja: "車を修理する", ko: "차를 수리하다" }, { ja: "修理代", ko: "수리비" }],
    examples: []
  },
  {
    id: 1226, day: 3, level: "N3",
    word: "手段", kana: "しゅだん", pos: "명사",
    mean: "수단",
    syn: ["方法"],
    collocations: [{ ja: "手段を選ばない", ko: "수단을 가리지 않다" }, { ja: "交通手段", ko: "교통수단" }],
    examples: []
  },
  {
    id: 1227, day: 3, level: "N3",
    word: "出身", kana: "しゅっしん", pos: "명사",
    mean: "출신",
    syn: [],
    collocations: [{ ja: "東京出身", ko: "도쿄 출신" }, { ja: "出身地", ko: "출신지" }],
    examples: []
  },
  {
    id: 1228, day: 3, level: "N3",
    word: "証明", kana: "しょうめい", pos: "명사 (する동사)",
    mean: "증명",
    syn: ["裏付ける"],
    collocations: [{ ja: "身分を証明する", ko: "신분을 증명하다" }, { ja: "証明書", ko: "증명서" }],
    examples: []
  },
  {
    id: 1229, day: 3, level: "N3",
    word: "将来", kana: "しょうらい", pos: "명사",
    mean: "장래, 미래",
    syn: ["未来"],
    collocations: [{ ja: "将来の夢", ko: "장래 희망" }, { ja: "近い将来", ko: "가까운 미래" }],
    examples: []
  },
  {
    id: 1230, day: 3, level: "N3",
    word: "職業", kana: "しょくぎょう", pos: "명사",
    mean: "직업",
    syn: ["仕事"],
    collocations: [{ ja: "職業を選ぶ", ko: "직업을 고르다" }, { ja: "職業病", ko: "직업병" }],
    examples: []
  },
  {
    id: 1231, day: 3, level: "N3",
    word: "食欲", kana: "しょくよく", pos: "명사",
    mean: "식욕",
    syn: [],
    collocations: [{ ja: "食欲がない", ko: "식욕이 없다" }, { ja: "食欲の秋", ko: "식욕의 가을" }],
    examples: []
  },
  {
    id: 1232, day: 3, level: "N3",
    word: "書類", kana: "しょるい", pos: "명사",
    mean: "서류",
    syn: ["文書"],
    collocations: [{ ja: "書類を提出する", ko: "서류를 제출하다" }, { ja: "重要書類", ko: "중요 서류" }],
    examples: []
  },
  {
    id: 1233, day: 3, level: "N3",
    word: "資料", kana: "しりょう", pos: "명사",
    mean: "자료",
    syn: ["データ"],
    collocations: [{ ja: "資料を集める", ko: "자료를 모으다" }, { ja: "会議の資料", ko: "회의 자료" }],
    examples: []
  },
  {
    id: 1234, day: 3, level: "N3",
    word: "進歩", kana: "しんぽ", pos: "명사 (する동사)",
    mean: "진보, 향상",
    syn: ["向上"],
    collocations: [{ ja: "技術が進歩する", ko: "기술이 진보하다" }, { ja: "進歩が見られる", ko: "향상이 보이다" }],
    examples: []
  },
  {
    id: 1235, day: 3, level: "N3",
    word: "信用", kana: "しんよう", pos: "명사 (する동사)",
    mean: "신용, 믿음",
    syn: ["信頼"],
    collocations: [{ ja: "信用を失う", ko: "신용을 잃다" }, { ja: "人を信用する", ko: "사람을 믿다" }],
    examples: []
  },
  {
    id: 1236, day: 3, level: "N3",
    word: "成長", kana: "せいちょう", pos: "명사 (する동사)",
    mean: "성장",
    syn: ["発達"],
    collocations: [{ ja: "経済成長", ko: "경제 성장" }, { ja: "子どもの成長", ko: "아이의 성장" }],
    examples: []
  },
  {
    id: 1237, day: 3, level: "N3",
    word: "成績", kana: "せいせき", pos: "명사",
    mean: "성적",
    syn: [],
    collocations: [{ ja: "成績が上がる", ko: "성적이 오르다" }, { ja: "成績表", ko: "성적표" }],
    examples: []
  },
  {
    id: 1238, day: 3, level: "N3",
    word: "制限", kana: "せいげん", pos: "명사 (する동사)",
    mean: "제한",
    syn: ["限る"],
    collocations: [{ ja: "速度制限", ko: "속도 제한" }, { ja: "制限を設ける", ko: "제한을 두다" }],
    examples: []
  },
  {
    id: 1239, day: 3, level: "N3",
    word: "節約", kana: "せつやく", pos: "명사 (する동사)",
    mean: "절약",
    syn: ["倹約"],
    collocations: [{ ja: "時間を節約する", ko: "시간을 절약하다" }, { ja: "電気の節約", ko: "전기 절약" }],
    examples: []
  },
  {
    id: 1240, day: 3, level: "N3",
    word: "責任", kana: "せきにん", pos: "명사",
    mean: "책임",
    syn: [],
    collocations: [{ ja: "責任を取る", ko: "책임을 지다" }, { ja: "責任感", ko: "책임감" }],
    examples: []
  },
  {
    id: 1241, day: 3, level: "N3",
    word: "世話", kana: "せわ", pos: "명사 (する동사)",
    mean: "돌봄, 신세",
    syn: ["面倒を見る"],
    collocations: [{ ja: "犬の世話をする", ko: "개를 돌보다" }, { ja: "お世話になる", ko: "신세를 지다" }],
    examples: []
  },
  {
    id: 1242, day: 3, level: "N3",
    word: "選択", kana: "せんたく", pos: "명사 (する동사)",
    mean: "선택",
    syn: ["選ぶ"],
    collocations: [{ ja: "選択を迫られる", ko: "선택을 강요받다" }, { ja: "選択肢", ko: "선택지" }],
    examples: []
  },
  {
    id: 1243, day: 3, level: "N3",
    word: "専門", kana: "せんもん", pos: "명사",
    mean: "전문",
    syn: [],
    collocations: [{ ja: "専門家", ko: "전문가" }, { ja: "専門分野", ko: "전문 분야" }],
    examples: []
  },
  {
    id: 1244, day: 3, level: "N3",
    word: "想像", kana: "そうぞう", pos: "명사 (する동사)",
    mean: "상상",
    syn: ["思い描く"],
    collocations: [{ ja: "想像がつく", ko: "짐작이 가다" }, { ja: "想像以上", ko: "상상 이상" }],
    examples: []
  },
  {
    id: 1245, day: 3, level: "N3",
    word: "相談", kana: "そうだん", pos: "명사 (する동사)",
    mean: "상담, 의논",
    syn: ["話し合い"],
    collocations: [{ ja: "先生に相談する", ko: "선생님과 상담하다" }, { ja: "相談に乗る", ko: "상담에 응하다" }],
    examples: []
  },
  {
    id: 1246, day: 3, level: "N3",
    word: "増加", kana: "ぞうか", pos: "명사 (する동사)",
    mean: "증가",
    syn: ["増える"],
    collocations: [{ ja: "人口が増加する", ko: "인구가 증가하다" }, { ja: "増加傾向", ko: "증가 추세" }],
    examples: []
  },
  {
    id: 1247, day: 3, level: "N3",
    word: "損害", kana: "そんがい", pos: "명사",
    mean: "손해",
    syn: ["被害"],
    collocations: [{ ja: "損害を受ける", ko: "손해를 입다" }, { ja: "損害賠償", ko: "손해 배상" }],
    examples: []
  },
  {
    id: 1248, day: 3, level: "N3",
    word: "態度", kana: "たいど", pos: "명사",
    mean: "태도",
    syn: ["姿勢"],
    collocations: [{ ja: "態度が悪い", ko: "태도가 나쁘다" }, { ja: "態度を改める", ko: "태도를 고치다" }],
    examples: []
  },
  // ==========================================
  // [DAY 4] N3 필수 · 81개
  // ==========================================
  {
    id: 1249, day: 4, level: "N3",
    word: "縮む", kana: "ちぢむ", pos: "동사 (자동사)",
    mean: "줄어들다",
    syn: [],
    collocations: [{ ja: "セーターが縮む", ko: "스웨터가 줄어들다" }, { ja: "差が縮む", ko: "차이가 줄어들다" }],
    examples: []
  },
  {
    id: 1250, day: 4, level: "N3",
    word: "散らかる", kana: "ちらかる", pos: "동사 (자동사)",
    mean: "어질러지다",
    syn: [],
    collocations: [{ ja: "部屋が散らかる", ko: "방이 어질러지다" }, { ja: "ごみが散らかる", ko: "쓰레기가 흩어지다" }],
    examples: []
  },
  {
    id: 1251, day: 4, level: "N3",
    word: "散る", kana: "ちる", pos: "동사 (자동사)",
    mean: "(꽃잎이) 지다, 흩어지다",
    syn: [],
    collocations: [{ ja: "桜が散る", ko: "벚꽃이 지다" }, { ja: "気が散る", ko: "정신이 산만해지다" }],
    examples: []
  },
  {
    id: 1252, day: 4, level: "N3",
    word: "通じる", kana: "つうじる", pos: "동사 (자동사)",
    mean: "통하다",
    syn: ["伝わる"],
    collocations: [{ ja: "話が通じる", ko: "말이 통하다" }, { ja: "電話が通じない", ko: "전화가 안 되다" }],
    examples: []
  },
  {
    id: 1253, day: 4, level: "N3",
    word: "捕まえる", kana: "つかまえる", pos: "동사 (타동사)",
    mean: "붙잡다",
    syn: ["捕らえる"],
    collocations: [{ ja: "犯人を捕まえる", ko: "범인을 붙잡다" }, { ja: "タクシーを捕まえる", ko: "택시를 잡다" }],
    examples: []
  },
  {
    id: 1254, day: 4, level: "N3",
    word: "掴む", kana: "つかむ", pos: "동사 (타동사)",
    mean: "붙잡다, 파악하다",
    syn: ["握る"],
    collocations: [{ ja: "手を掴む", ko: "손을 붙잡다" }, { ja: "チャンスを掴む", ko: "기회를 잡다" }],
    examples: []
  },
  {
    id: 1255, day: 4, level: "N3",
    word: "包む", kana: "つつむ", pos: "동사 (타동사)",
    mean: "싸다, 포장하다",
    syn: [],
    collocations: [{ ja: "プレゼントを包む", ko: "선물을 포장하다" }, { ja: "霧に包まれる", ko: "안개에 싸이다" }],
    examples: []
  },
  {
    id: 1256, day: 4, level: "N3",
    word: "努める", kana: "つとめる", pos: "동사 (타동사)",
    mean: "힘쓰다, 노력하다",
    syn: ["努力する"],
    collocations: [{ ja: "解決に努める", ko: "해결에 힘쓰다" }, { ja: "節約に努める", ko: "절약에 힘쓰다" }],
    examples: []
  },
  {
    id: 1257, day: 4, level: "N3",
    word: "務める", kana: "つとめる", pos: "동사 (타동사)",
    mean: "(역할을) 맡다",
    syn: ["担当する"],
    collocations: [{ ja: "司会を務める", ko: "사회를 맡다" }, { ja: "議長を務める", ko: "의장을 맡다" }],
    examples: []
  },
  {
    id: 1258, day: 4, level: "N3",
    word: "繋ぐ", kana: "つなぐ", pos: "동사 (타동사)",
    mean: "잇다, 연결하다",
    syn: ["結ぶ"],
    collocations: [{ ja: "手を繋ぐ", ko: "손을 잡다" }, { ja: "電話を繋ぐ", ko: "전화를 연결하다" }],
    examples: []
  },
  {
    id: 1259, day: 4, level: "N3",
    word: "潰す", kana: "つぶす", pos: "동사 (타동사)",
    mean: "찌그러뜨리다, (시간을) 때우다",
    syn: [],
    collocations: [{ ja: "時間を潰す", ko: "시간을 때우다" }, { ja: "会社を潰す", ko: "회사를 망하게 하다" }],
    examples: []
  },
  {
    id: 1260, day: 4, level: "N3",
    word: "積む", kana: "つむ", pos: "동사 (타동사)",
    mean: "쌓다, 싣다",
    syn: ["重ねる"],
    collocations: [{ ja: "経験を積む", ko: "경험을 쌓다" }, { ja: "荷物を積む", ko: "짐을 싣다" }],
    examples: []
  },
  {
    id: 1261, day: 4, level: "N3",
    word: "詰める", kana: "つめる", pos: "동사 (타동사)",
    mean: "채우다, 좁히다",
    syn: [],
    collocations: [{ ja: "箱に詰める", ko: "상자에 채워 넣다" }, { ja: "席を詰める", ko: "자리를 좁혀 앉다" }],
    examples: []
  },
  {
    id: 1262, day: 4, level: "N3",
    word: "詰まる", kana: "つまる", pos: "동사 (자동사)",
    mean: "막히다, 가득 차다",
    syn: [],
    collocations: [{ ja: "鼻が詰まる", ko: "코가 막히다" }, { ja: "予定が詰まる", ko: "일정이 꽉 차다" }],
    examples: []
  },
  {
    id: 1263, day: 4, level: "N3",
    word: "照らす", kana: "てらす", pos: "동사 (타동사)",
    mean: "비추다",
    syn: [],
    collocations: [{ ja: "道を照らす", ko: "길을 비추다" }, { ja: "規則に照らして", ko: "규칙에 비추어" }],
    examples: []
  },
  {
    id: 1264, day: 4, level: "N3",
    word: "溶ける", kana: "とける", pos: "동사 (자동사)",
    mean: "녹다",
    syn: [],
    collocations: [{ ja: "氷が溶ける", ko: "얼음이 녹다" }, { ja: "砂糖が水に溶ける", ko: "설탕이 물에 녹다" }],
    examples: []
  },
  {
    id: 1265, day: 4, level: "N3",
    word: "解く", kana: "とく", pos: "동사 (타동사)",
    mean: "풀다",
    syn: ["解決する"],
    collocations: [{ ja: "問題を解く", ko: "문제를 풀다" }, { ja: "誤解を解く", ko: "오해를 풀다" }],
    examples: []
  },
  {
    id: 1266, day: 4, level: "N3",
    word: "整える", kana: "ととのえる", pos: "동사 (타동사)",
    mean: "정돈하다, 갖추다",
    syn: ["準備する"],
    collocations: [{ ja: "環境を整える", ko: "환경을 갖추다" }, { ja: "服装を整える", ko: "옷차림을 정돈하다" }],
    examples: []
  },
  {
    id: 1267, day: 4, level: "N3",
    word: "届ける", kana: "とどける", pos: "동사 (타동사)",
    mean: "보내 주다, 신고하다",
    syn: [],
    collocations: [{ ja: "荷物を届ける", ko: "짐을 배달하다" }, { ja: "警察に届ける", ko: "경찰에 신고하다" }],
    examples: []
  },
  {
    id: 1268, day: 4, level: "N3",
    word: "怒鳴る", kana: "どなる", pos: "동사 (자동사)",
    mean: "고함치다, 호통치다",
    syn: ["叫ぶ"],
    collocations: [{ ja: "大声で怒鳴る", ko: "큰 소리로 호통치다" }, { ja: "部下を怒鳴る", ko: "부하에게 소리치다" }],
    examples: []
  },
  {
    id: 1269, day: 4, level: "N3",
    word: "飛ばす", kana: "とばす", pos: "동사 (타동사)",
    mean: "날리다, 건너뛰다",
    syn: [],
    collocations: [{ ja: "紙飛行機を飛ばす", ko: "종이비행기를 날리다" }, { ja: "ページを飛ばす", ko: "페이지를 건너뛰다" }],
    examples: []
  },
  {
    id: 1270, day: 4, level: "N3",
    word: "取り消す", kana: "とりけす", pos: "동사 (타동사)",
    mean: "취소하다",
    syn: ["キャンセルする"],
    collocations: [{ ja: "予約を取り消す", ko: "예약을 취소하다" }, { ja: "発言を取り消す", ko: "발언을 철회하다" }],
    examples: []
  },
  {
    id: 1271, day: 4, level: "N3",
    word: "流す", kana: "ながす", pos: "동사 (타동사)",
    mean: "흘리다, 흘려보내다",
    syn: [],
    collocations: [{ ja: "涙を流す", ko: "눈물을 흘리다" }, { ja: "音楽を流す", ko: "음악을 틀다" }],
    examples: []
  },
  {
    id: 1272, day: 4, level: "N3",
    word: "眺める", kana: "ながめる", pos: "동사 (타동사)",
    mean: "바라보다",
    syn: ["見渡す"],
    collocations: [{ ja: "景色を眺める", ko: "경치를 바라보다" }, { ja: "ぼんやり眺める", ko: "멍하니 바라보다" }],
    examples: []
  },
  {
    id: 1273, day: 4, level: "N3",
    word: "嘆く", kana: "なげく", pos: "동사 (타동사)",
    mean: "한탄하다",
    syn: ["悲しむ"],
    collocations: [{ ja: "不運を嘆く", ko: "불운을 한탄하다" }, { ja: "現状を嘆く", ko: "현실을 개탄하다" }],
    examples: []
  },
  {
    id: 1274, day: 4, level: "N3",
    word: "濃い", kana: "こい", pos: "い형용사",
    mean: "진하다, 짙다",
    syn: [],
    collocations: [{ ja: "濃いコーヒー", ko: "진한 커피" }, { ja: "可能性が濃い", ko: "가능성이 짙다" }],
    examples: []
  },
  {
    id: 1275, day: 4, level: "N3",
    word: "順調", kana: "じゅんちょう", pos: "な형용사",
    mean: "순조로움",
    syn: ["スムーズな"],
    collocations: [{ ja: "順調に進む", ko: "순조롭게 진행되다" }, { ja: "回復は順調だ", ko: "회복은 순조롭다" }],
    examples: []
  },
  {
    id: 1276, day: 4, level: "N3",
    word: "細かい", kana: "こまかい", pos: "い형용사",
    mean: "잘다, 세세하다",
    syn: ["詳しい"],
    collocations: [{ ja: "細かい字", ko: "작은 글씨" }, { ja: "細かい点", ko: "세세한 점" }],
    examples: []
  },
  {
    id: 1277, day: 4, level: "N3",
    word: "上品", kana: "じょうひん", pos: "な형용사",
    mean: "고상함, 품위 있음",
    syn: [],
    collocations: [{ ja: "上品な人", ko: "품위 있는 사람" }, { ja: "上品な味", ko: "고급스러운 맛" }],
    examples: []
  },
  {
    id: 1278, day: 4, level: "N3",
    word: "丈夫", kana: "じょうぶ", pos: "な형용사",
    mean: "튼튼함",
    syn: ["頑丈な"],
    collocations: [{ ja: "丈夫な体", ko: "튼튼한 몸" }, { ja: "丈夫な靴", ko: "튼튼한 신발" }],
    examples: []
  },
  {
    id: 1279, day: 4, level: "N3",
    word: "寂しい", kana: "さびしい", pos: "い형용사",
    mean: "외롭다, 쓸쓸하다",
    syn: [],
    collocations: [{ ja: "一人で寂しい", ko: "혼자라서 외롭다" }, { ja: "寂しい町", ko: "쓸쓸한 마을" }],
    examples: []
  },
  {
    id: 1280, day: 4, level: "N3",
    word: "真剣", kana: "しんけん", pos: "な형용사",
    mean: "진지함",
    syn: ["まじめな"],
    collocations: [{ ja: "真剣な顔", ko: "진지한 얼굴" }, { ja: "真剣に考える", ko: "진지하게 생각하다" }],
    examples: []
  },
  {
    id: 1281, day: 4, level: "N3",
    word: "鋭い", kana: "するどい", pos: "い형용사",
    mean: "날카롭다, 예리하다",
    syn: [],
    collocations: [{ ja: "鋭いナイフ", ko: "날카로운 칼" }, { ja: "鋭い指摘", ko: "예리한 지적" }],
    examples: []
  },
  {
    id: 1282, day: 4, level: "N3",
    word: "退屈", kana: "たいくつ", pos: "な형용사",
    mean: "따분함, 지루함",
    syn: ["つまらない"],
    collocations: [{ ja: "退屈な授業", ko: "따분한 수업" }, { ja: "退屈しのぎ", ko: "심심풀이" }],
    examples: []
  },
  {
    id: 1283, day: 4, level: "N3",
    word: "騒がしい", kana: "さわがしい", pos: "い형용사",
    mean: "시끄럽다, 어수선하다",
    syn: ["うるさい"],
    collocations: [{ ja: "騒がしい教室", ko: "시끄러운 교실" }, { ja: "世の中が騒がしい", ko: "세상이 어수선하다" }],
    examples: []
  },
  {
    id: 1284, day: 4, level: "N3",
    word: "確実", kana: "かくじつ", pos: "な형용사",
    mean: "확실함",
    syn: ["確かな"],
    collocations: [{ ja: "確実な方法", ko: "확실한 방법" }, { ja: "確実に増える", ko: "확실히 늘다" }],
    examples: []
  },
  {
    id: 443, day: 4, level: "N3",
    word: "惜しい", kana: "おしい", pos: "い형용사",
    mean: "아깝다, 애석하다, 분하다",
    syn: ["もったいない", "残念"],
    collocations: [{ ja: "惜しい人物を亡くす", ko: "아까운 인재를 잃다" }, { ja: "あと一歩で惜しかった", ko: "한 걸음 차이로 매우 아쉬웠다" }],
    examples: [{ type: "kun", label: "훈독", ja: "わずか一問のマークシートの記入ミスで不合格になってしまい、痛恨の極みで悔しくて惜しい。", ko: "불과 한 문제 OMR 카드 마킹 실수로 불합격해 버려 통한의 극치이자 분하고도 아깝다." }]
  },
  {
    id: 1285, day: 4, level: "N3",
    word: "ストレス", kana: "ストレス", pos: "외래어",
    mean: "스트레스 (stress)",
    syn: [],
    collocations: [{ ja: "ストレスがたまる", ko: "스트레스가 쌓이다" }, { ja: "ストレスを解消する", ko: "스트레스를 풀다" }],
    examples: []
  },
  {
    id: 1286, day: 4, level: "N3",
    word: "タイミング", kana: "タイミング", pos: "외래어",
    mean: "타이밍 (timing)",
    syn: ["時機"],
    collocations: [{ ja: "タイミングが合う", ko: "타이밍이 맞다" }],
    examples: []
  },
  {
    id: 1287, day: 4, level: "N3",
    word: "チャンス", kana: "チャンス", pos: "외래어",
    mean: "기회 (chance)",
    syn: ["機会"],
    collocations: [{ ja: "チャンスを逃す", ko: "기회를 놓치다" }],
    examples: []
  },
  {
    id: 1288, day: 4, level: "N3",
    word: "次々", kana: "つぎつぎ", pos: "부사",
    mean: "잇달아, 차례차례",
    syn: ["続々と"],
    collocations: [{ ja: "次々に現れる", ko: "잇달아 나타나다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい問題が次々に起こった。", ko: "새로운 문제가 잇달아 일어났다." }]
  },
  {
    id: 1289, day: 4, level: "N3",
    word: "当然", kana: "とうぜん", pos: "부사",
    mean: "당연히",
    syn: ["もちろん"],
    collocations: [{ ja: "当然の結果", ko: "당연한 결과" }],
    examples: [{ type: "ex", label: "예문", ja: "努力すれば、当然結果はついてくる。", ko: "노력하면 당연히 결과는 따라온다." }]
  },
  {
    id: 1290, day: 4, level: "N3",
    word: "とっくに", kana: "とっくに", pos: "부사",
    mean: "벌써, 훨씬 전에",
    syn: ["すでに"],
    collocations: [{ ja: "とっくに終わった", ko: "진작에 끝났다" }],
    examples: [{ type: "ex", label: "예문", ja: "その店ならとっくに閉店したよ。", ko: "그 가게라면 진작에 문을 닫았어." }]
  },
  {
    id: 1291, day: 4, level: "N3",
    word: "ともかく", kana: "ともかく", pos: "부사",
    mean: "어쨌든, 아무튼",
    syn: ["とにかく"],
    collocations: [{ ja: "ともかくやってみる", ko: "아무튼 해 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "ともかく一度会って話そう。", ko: "어쨌든 한번 만나서 이야기하자." }]
  },
  {
    id: 1292, day: 4, level: "N3",
    word: "なるべく", kana: "なるべく", pos: "부사",
    mean: "되도록",
    syn: ["できるだけ"],
    collocations: [{ ja: "なるべく早く", ko: "되도록 빨리" }],
    examples: [{ type: "ex", label: "예문", ja: "なるべく野菜を多く食べるようにしている。", ko: "되도록 채소를 많이 먹으려고 한다." }]
  },
  {
    id: 1293, day: 4, level: "N3",
    word: "何とか", kana: "なんとか", pos: "부사",
    mean: "어떻게든, 그럭저럭",
    syn: ["どうにか"],
    collocations: [{ ja: "何とか間に合う", ko: "그럭저럭 시간에 맞추다" }],
    examples: [{ type: "ex", label: "예문", ja: "何とか締め切りに間に合った。", ko: "어떻게든 마감에 맞췄다." }]
  },
  {
    id: 1294, day: 4, level: "N3",
    word: "果たして", kana: "はたして", pos: "부사",
    mean: "과연, 정말로",
    syn: ["本当に"],
    collocations: [{ ja: "果たして成功するか", ko: "과연 성공할까" }],
    examples: [{ type: "ex", label: "예문", ja: "果たして彼は来るだろうか。", ko: "과연 그는 올까." }]
  },
  {
    id: 386, day: 4, level: "N3",
    word: "ごく", kana: "ごく", pos: "부사",
    mean: "극히, 대단히, 썩",
    syn: ["非常に", "きわめて"],
    collocations: [{ ja: "ごく一部の人", ko: "극히 일부분의 사람" }, { ja: "ごく自然な反応", ko: "지극히 자연스러운 반응" }],
    examples: [{ type: "ex", label: "예문", ja: "全市民を対象とした世論調査において、反対票を投じた住民はごく少数にとどまった。", ko: "전 시민을 대상으로 한 여론조사에서 반대표를 던진 주민은 극소수에 그쳤다." }]
  },
  {
    id: 1295, day: 4, level: "N3",
    word: "はっきり", kana: "はっきり", pos: "부사 (의성어·의태어)",
    mean: "분명히, 확실히",
    syn: ["明確に"],
    collocations: [{ ja: "はっきり言う", ko: "분명히 말하다" }],
    examples: [{ type: "ex", label: "예문", ja: "嫌なら、はっきり断ったほうがいい。", ko: "싫으면 분명히 거절하는 게 좋다." }]
  },
  {
    id: 1296, day: 4, level: "N3",
    word: "ばったり", kana: "ばったり", pos: "부사 (의성어·의태어)",
    mean: "딱 (마주침), 털썩",
    syn: ["偶然"],
    collocations: [{ ja: "ばったり会う", ko: "딱 마주치다" }],
    examples: [{ type: "ex", label: "예문", ja: "駅で先生にばったり会った。", ko: "역에서 선생님과 딱 마주쳤다." }]
  },
  {
    id: 1297, day: 4, level: "N3",
    word: "ぴったり", kana: "ぴったり", pos: "부사 (의성어·의태어)",
    mean: "꼭 맞게, 딱",
    syn: ["ちょうど"],
    collocations: [{ ja: "サイズがぴったりだ", ko: "사이즈가 딱 맞다" }],
    examples: [{ type: "ex", label: "예문", ja: "この仕事は彼にぴったりだ。", ko: "이 일은 그에게 딱 맞는다." }]
  },
  {
    id: 1298, day: 4, level: "N3",
    word: "それとも", kana: "それとも", pos: "접속사",
    mean: "아니면, 혹은",
    syn: ["あるいは", "または"],
    collocations: [{ ja: "それとも", ko: "아니면" }],
    examples: [{ type: "ex", label: "예문", ja: "コーヒーにしますか、それとも紅茶にしますか。", ko: "커피로 할래요, 아니면 홍차로 할래요?" }]
  },
  {
    id: 1299, day: 4, level: "N3",
    word: "そのうえ", kana: "そのうえ", pos: "접속사",
    mean: "게다가",
    syn: ["さらに", "それに"],
    collocations: [{ ja: "そのうえ", ko: "게다가" }],
    examples: [{ type: "ex", label: "예문", ja: "この店は安い。そのうえ、味もいい。", ko: "이 가게는 싸다. 게다가 맛도 좋다." }]
  },
  {
    id: 1300, day: 4, level: "N3",
    word: "対策", kana: "たいさく", pos: "명사",
    mean: "대책",
    syn: ["方策"],
    collocations: [{ ja: "対策を立てる", ko: "대책을 세우다" }, { ja: "地震対策", ko: "지진 대책" }],
    examples: []
  },
  {
    id: 1301, day: 4, level: "N3",
    word: "担当", kana: "たんとう", pos: "명사 (する동사)",
    mean: "담당",
    syn: ["受け持つ"],
    collocations: [{ ja: "担当者", ko: "담당자" }, { ja: "営業を担当する", ko: "영업을 담당하다" }],
    examples: []
  },
  {
    id: 1302, day: 4, level: "N3",
    word: "治療", kana: "ちりょう", pos: "명사 (する동사)",
    mean: "치료",
    syn: ["手当て"],
    collocations: [{ ja: "治療を受ける", ko: "치료를 받다" }, { ja: "病気を治療する", ko: "병을 치료하다" }],
    examples: []
  },
  {
    id: 1303, day: 4, level: "N3",
    word: "中止", kana: "ちゅうし", pos: "명사 (する동사)",
    mean: "중지",
    syn: ["取りやめ"],
    collocations: [{ ja: "試合が中止になる", ko: "시합이 중지되다" }, { ja: "計画を中止する", ko: "계획을 중지하다" }],
    examples: []
  },
  {
    id: 1304, day: 4, level: "N3",
    word: "注目", kana: "ちゅうもく", pos: "명사 (する동사)",
    mean: "주목",
    syn: ["注意"],
    collocations: [{ ja: "注目を集める", ko: "주목을 모으다" }, { ja: "注目に値する", ko: "주목할 만하다" }],
    examples: []
  },
  {
    id: 1305, day: 4, level: "N3",
    word: "調査", kana: "ちょうさ", pos: "명사 (する동사)",
    mean: "조사",
    syn: ["調べる"],
    collocations: [{ ja: "調査を行う", ko: "조사를 실시하다" }, { ja: "世論調査", ko: "여론 조사" }],
    examples: []
  },
  {
    id: 1306, day: 4, level: "N3",
    word: "通勤", kana: "つうきん", pos: "명사 (する동사)",
    mean: "통근",
    syn: [],
    collocations: [{ ja: "電車で通勤する", ko: "전철로 통근하다" }, { ja: "通勤時間", ko: "통근 시간" }],
    examples: []
  },
  {
    id: 1307, day: 4, level: "N3",
    word: "都合", kana: "つごう", pos: "명사",
    mean: "형편, 사정",
    syn: ["事情"],
    collocations: [{ ja: "都合がいい", ko: "형편이 좋다" }, { ja: "都合をつける", ko: "형편을 맞추다" }],
    examples: []
  },
  {
    id: 1308, day: 4, level: "N3",
    word: "停電", kana: "ていでん", pos: "명사 (する동사)",
    mean: "정전",
    syn: [],
    collocations: [{ ja: "台風で停電する", ko: "태풍으로 정전되다" }, { ja: "停電が続く", ko: "정전이 계속되다" }],
    examples: []
  },
  {
    id: 1309, day: 4, level: "N3",
    word: "提出", kana: "ていしゅつ", pos: "명사 (する동사)",
    mean: "제출",
    syn: ["出す"],
    collocations: [{ ja: "レポートを提出する", ko: "리포트를 제출하다" }, { ja: "提出期限", ko: "제출 기한" }],
    examples: []
  },
  {
    id: 1310, day: 4, level: "N3",
    word: "手続き", kana: "てつづき", pos: "명사 (する동사)",
    mean: "수속, 절차",
    syn: ["手順"],
    collocations: [{ ja: "入学手続き", ko: "입학 수속" }, { ja: "手続きを済ませる", ko: "수속을 마치다" }],
    examples: []
  },
  {
    id: 1311, day: 4, level: "N3",
    word: "到着", kana: "とうちゃく", pos: "명사 (する동사)",
    mean: "도착",
    syn: ["着く"],
    collocations: [{ ja: "空港に到着する", ko: "공항에 도착하다" }, { ja: "到着時刻", ko: "도착 시각" }],
    examples: []
  },
  {
    id: 1312, day: 4, level: "N3",
    word: "特徴", kana: "とくちょう", pos: "명사",
    mean: "특징",
    syn: ["特色"],
    collocations: [{ ja: "特徴がある", ko: "특징이 있다" }, { ja: "特徴的な声", ko: "특징적인 목소리" }],
    examples: []
  },
  {
    id: 1313, day: 4, level: "N3",
    word: "努力", kana: "どりょく", pos: "명사 (する동사)",
    mean: "노력",
    syn: ["頑張る"],
    collocations: [{ ja: "努力が実る", ko: "노력이 결실을 맺다" }, { ja: "努力家", ko: "노력파" }],
    examples: []
  },
  {
    id: 1314, day: 4, level: "N3",
    word: "内容", kana: "ないよう", pos: "명사",
    mean: "내용",
    syn: ["中身"],
    collocations: [{ ja: "内容を確認する", ko: "내용을 확인하다" }, { ja: "話の内容", ko: "이야기 내용" }],
    examples: []
  },
  {
    id: 1315, day: 4, level: "N3",
    word: "悩み", kana: "なやみ", pos: "명사",
    mean: "고민",
    syn: [],
    collocations: [{ ja: "悩みを抱える", ko: "고민을 안고 있다" }, { ja: "悩みを打ち明ける", ko: "고민을 털어놓다" }],
    examples: []
  },
  {
    id: 1316, day: 4, level: "N3",
    word: "人気", kana: "にんき", pos: "명사",
    mean: "인기",
    syn: [],
    collocations: [{ ja: "人気がある", ko: "인기가 있다" }, { ja: "人気商品", ko: "인기 상품" }],
    examples: []
  },
  {
    id: 1317, day: 4, level: "N3",
    word: "発見", kana: "はっけん", pos: "명사 (する동사)",
    mean: "발견",
    syn: ["見つける"],
    collocations: [{ ja: "新しい星を発見する", ko: "새로운 별을 발견하다" }, { ja: "大発見", ko: "대발견" }],
    examples: []
  },
  {
    id: 1318, day: 4, level: "N3",
    word: "発展", kana: "はってん", pos: "명사 (する동사)",
    mean: "발전",
    syn: [],
    collocations: [{ ja: "経済が発展する", ko: "경제가 발전하다" }, { ja: "発展途上国", ko: "개발도상국" }],
    examples: []
  },
  {
    id: 1319, day: 4, level: "N3",
    word: "発表", kana: "はっぴょう", pos: "명사 (する동사)",
    mean: "발표",
    syn: [],
    collocations: [{ ja: "研究を発表する", ko: "연구를 발표하다" }, { ja: "合格発表", ko: "합격 발표" }],
    examples: []
  },
  {
    id: 1320, day: 4, level: "N3",
    word: "反対", kana: "はんたい", pos: "명사 (する동사)",
    mean: "반대",
    syn: [],
    collocations: [{ ja: "計画に反対する", ko: "계획에 반대하다" }, { ja: "反対側", ko: "반대편" }],
    examples: []
  },
  {
    id: 1321, day: 4, level: "N3",
    word: "判断", kana: "はんだん", pos: "명사 (する동사)",
    mean: "판단",
    syn: ["見極める"],
    collocations: [{ ja: "判断を誤る", ko: "판단을 그르치다" }, { ja: "判断力", ko: "판단력" }],
    examples: []
  },
  {
    id: 1322, day: 4, level: "N3",
    word: "被害", kana: "ひがい", pos: "명사",
    mean: "피해",
    syn: ["損害"],
    collocations: [{ ja: "被害を受ける", ko: "피해를 입다" }, { ja: "被害者", ko: "피해자" }],
    examples: []
  },
  {
    id: 1323, day: 4, level: "N3",
    word: "比較", kana: "ひかく", pos: "명사 (する동사)",
    mean: "비교",
    syn: ["比べる"],
    collocations: [{ ja: "価格を比較する", ko: "가격을 비교하다" }, { ja: "比較的", ko: "비교적" }],
    examples: []
  },
  {
    id: 1324, day: 4, level: "N3",
    word: "評価", kana: "ひょうか", pos: "명사 (する동사)",
    mean: "평가",
    syn: [],
    collocations: [{ ja: "高く評価する", ko: "높이 평가하다" }, { ja: "評価が分かれる", ko: "평가가 엇갈리다" }],
    examples: []
  },
  {
    id: 1325, day: 4, level: "N3",
    word: "表情", kana: "ひょうじょう", pos: "명사",
    mean: "표정",
    syn: ["顔つき"],
    collocations: [{ ja: "表情が明るい", ko: "표정이 밝다" }, { ja: "表情を変える", ko: "표정을 바꾸다" }],
    examples: []
  },
  {
    id: 1326, day: 4, level: "N3",
    word: "不足", kana: "ふそく", pos: "명사 (する동사)",
    mean: "부족",
    syn: ["足りない"],
    collocations: [{ ja: "睡眠不足", ko: "수면 부족" }, { ja: "人手が不足する", ko: "일손이 부족하다" }],
    examples: []
  },
  {
    id: 461, day: 4, level: "N3",
    word: "証拠", kana: "しょうこ", pos: "명사",
    mean: "증거",
    syn: ["あかし", "根拠"],
    collocations: [{ ja: "決定的な証拠", ko: "결정적인 명백한 물증" }, { ja: "証拠を掴む", ko: "확실한 증거를 잡다" }],
    examples: [{ type: "on", label: "음독", ja: "現場に残された防犯カメラの映像が、犯行を立証するための決定的な証拠として提出された。", ko: "현장에 남겨진 CCTV 영상이 범행을 입증하기 위한 결정적인 증거로서 제출되었다." }]
  },
  // ==========================================
  // [DAY 5] N3 필수 · 84개
  // ==========================================
  {
    id: 1327, day: 5, level: "N3",
    word: "悩む", kana: "なやむ", pos: "동사 (자동사)",
    mean: "고민하다",
    syn: ["苦しむ"],
    collocations: [{ ja: "進路に悩む", ko: "진로로 고민하다" }, { ja: "頭痛に悩む", ko: "두통에 시달리다" }],
    examples: []
  },
  {
    id: 1328, day: 5, level: "N3",
    word: "鳴らす", kana: "ならす", pos: "동사 (타동사)",
    mean: "울리다",
    syn: [],
    collocations: [{ ja: "ベルを鳴らす", ko: "벨을 울리다" }, { ja: "警鐘を鳴らす", ko: "경종을 울리다" }],
    examples: []
  },
  {
    id: 1329, day: 5, level: "N3",
    word: "似合う", kana: "にあう", pos: "동사 (자동사)",
    mean: "어울리다",
    syn: [],
    collocations: [{ ja: "服が似合う", ko: "옷이 어울리다" }, { ja: "よく似合う", ko: "잘 어울리다" }],
    examples: []
  },
  {
    id: 1330, day: 5, level: "N3",
    word: "憎む", kana: "にくむ", pos: "동사 (타동사)",
    mean: "미워하다",
    syn: ["恨む"],
    collocations: [{ ja: "罪を憎む", ko: "죄를 미워하다" }, { ja: "人を憎む", ko: "사람을 미워하다" }],
    examples: []
  },
  {
    id: 1331, day: 5, level: "N3",
    word: "抜く", kana: "ぬく", pos: "동사 (타동사)",
    mean: "뽑다, 빼다",
    syn: ["取り除く"],
    collocations: [{ ja: "歯を抜く", ko: "이를 뽑다" }, { ja: "朝食を抜く", ko: "아침을 거르다" }],
    examples: []
  },
  {
    id: 1332, day: 5, level: "N3",
    word: "抜ける", kana: "ぬける", pos: "동사 (자동사)",
    mean: "빠지다, 빠져나가다",
    syn: [],
    collocations: [{ ja: "髪が抜ける", ko: "머리카락이 빠지다" }, { ja: "力が抜ける", ko: "힘이 빠지다" }],
    examples: []
  },
  {
    id: 1333, day: 5, level: "N3",
    word: "盗む", kana: "ぬすむ", pos: "동사 (타동사)",
    mean: "훔치다",
    syn: [],
    collocations: [{ ja: "財布を盗む", ko: "지갑을 훔치다" }, { ja: "人目を盗む", ko: "남의 눈을 피하다" }],
    examples: []
  },
  {
    id: 1334, day: 5, level: "N3",
    word: "塗る", kana: "ぬる", pos: "동사 (타동사)",
    mean: "칠하다, 바르다",
    syn: [],
    collocations: [{ ja: "ペンキを塗る", ko: "페인트를 칠하다" }, { ja: "薬を塗る", ko: "약을 바르다" }],
    examples: []
  },
  {
    id: 1335, day: 5, level: "N3",
    word: "狙う", kana: "ねらう", pos: "동사 (타동사)",
    mean: "노리다, 겨냥하다",
    syn: ["目指す"],
    collocations: [{ ja: "優勝を狙う", ko: "우승을 노리다" }, { ja: "チャンスを狙う", ko: "기회를 노리다" }],
    examples: []
  },
  {
    id: 1336, day: 5, level: "N3",
    word: "除く", kana: "のぞく", pos: "동사 (타동사)",
    mean: "제외하다, 없애다",
    syn: ["取り除く"],
    collocations: [{ ja: "日曜を除く", ko: "일요일을 제외하다" }, { ja: "不安を除く", ko: "불안을 없애다" }],
    examples: []
  },
  {
    id: 1337, day: 5, level: "N3",
    word: "伸ばす", kana: "のばす", pos: "동사 (타동사)",
    mean: "늘이다, 키우다",
    syn: ["延ばす"],
    collocations: [{ ja: "才能を伸ばす", ko: "재능을 키우다" }, { ja: "手を伸ばす", ko: "손을 뻗다" }],
    examples: []
  },
  {
    id: 1338, day: 5, level: "N3",
    word: "伸びる", kana: "のびる", pos: "동사 (자동사)",
    mean: "늘다, 자라다",
    syn: [],
    collocations: [{ ja: "背が伸びる", ko: "키가 자라다" }, { ja: "売り上げが伸びる", ko: "매출이 늘다" }],
    examples: []
  },
  {
    id: 1339, day: 5, level: "N3",
    word: "述べる", kana: "のべる", pos: "동사 (타동사)",
    mean: "말하다, 진술하다",
    syn: ["言う", "話す"],
    collocations: [{ ja: "意見を述べる", ko: "의견을 말하다" }, { ja: "理由を述べる", ko: "이유를 진술하다" }],
    examples: []
  },
  {
    id: 1340, day: 5, level: "N3",
    word: "測る", kana: "はかる", pos: "동사 (타동사)",
    mean: "재다, 측정하다",
    syn: ["測定する"],
    collocations: [{ ja: "体温を測る", ko: "체온을 재다" }, { ja: "距離を測る", ko: "거리를 재다" }],
    examples: []
  },
  {
    id: 1341, day: 5, level: "N3",
    word: "吐く", kana: "はく", pos: "동사 (타동사)",
    mean: "토하다, 내뱉다",
    syn: [],
    collocations: [{ ja: "息を吐く", ko: "숨을 내쉬다" }, { ja: "弱音を吐く", ko: "약한 소리를 하다" }],
    examples: []
  },
  {
    id: 1342, day: 5, level: "N3",
    word: "外す", kana: "はずす", pos: "동사 (타동사)",
    mean: "떼다, 벗다, 자리를 비우다",
    syn: [],
    collocations: [{ ja: "眼鏡を外す", ko: "안경을 벗다" }, { ja: "席を外す", ko: "자리를 비우다" }],
    examples: []
  },
  {
    id: 1343, day: 5, level: "N3",
    word: "外れる", kana: "はずれる", pos: "동사 (자동사)",
    mean: "빠지다, 빗나가다",
    syn: [],
    collocations: [{ ja: "予想が外れる", ko: "예상이 빗나가다" }, { ja: "ボタンが外れる", ko: "단추가 풀리다" }],
    examples: []
  },
  {
    id: 1344, day: 5, level: "N3",
    word: "果たす", kana: "はたす", pos: "동사 (타동사)",
    mean: "다하다, 완수하다",
    syn: ["遂げる"],
    collocations: [{ ja: "役割を果たす", ko: "역할을 다하다" }, { ja: "約束を果たす", ko: "약속을 지키다" }],
    examples: []
  },
  {
    id: 1345, day: 5, level: "N3",
    word: "離れる", kana: "はなれる", pos: "동사 (자동사)",
    mean: "떨어지다, 멀어지다",
    syn: ["去る"],
    collocations: [{ ja: "故郷を離れる", ko: "고향을 떠나다" }, { ja: "駅から離れる", ko: "역에서 떨어지다" }],
    examples: []
  },
  {
    id: 1346, day: 5, level: "N3",
    word: "省く", kana: "はぶく", pos: "동사 (타동사)",
    mean: "생략하다, 덜다",
    syn: ["省略する"],
    collocations: [{ ja: "手間を省く", ko: "수고를 덜다" }, { ja: "説明を省く", ko: "설명을 생략하다" }],
    examples: []
  },
  {
    id: 1347, day: 5, level: "N3",
    word: "生える", kana: "はえる", pos: "동사 (자동사)",
    mean: "나다, 돋다",
    syn: [],
    collocations: [{ ja: "草が生える", ko: "풀이 나다" }, { ja: "ひげが生える", ko: "수염이 나다" }],
    examples: []
  },
  {
    id: 1348, day: 5, level: "N3",
    word: "冷える", kana: "ひえる", pos: "동사 (자동사)",
    mean: "차가워지다, 식다",
    syn: ["冷める"],
    collocations: [{ ja: "体が冷える", ko: "몸이 차가워지다" }, { ja: "よく冷えたビール", ko: "잘 식힌 맥주" }],
    examples: []
  },
  {
    id: 1349, day: 5, level: "N3",
    word: "響く", kana: "ひびく", pos: "동사 (자동사)",
    mean: "울려 퍼지다, 영향을 주다",
    syn: [],
    collocations: [{ ja: "声が響く", ko: "목소리가 울려 퍼지다" }, { ja: "心に響く", ko: "마음에 와닿다" }],
    examples: []
  },
  {
    id: 1350, day: 5, level: "N3",
    word: "広がる", kana: "ひろがる", pos: "동사 (자동사)",
    mean: "퍼지다, 넓어지다",
    syn: ["広まる"],
    collocations: [{ ja: "うわさが広がる", ko: "소문이 퍼지다" }, { ja: "被害が広がる", ko: "피해가 확대되다" }],
    examples: []
  },
  {
    id: 1351, day: 5, level: "N3",
    word: "拾う", kana: "ひろう", pos: "동사 (타동사)",
    mean: "줍다",
    syn: [],
    collocations: [{ ja: "ごみを拾う", ko: "쓰레기를 줍다" }, { ja: "タクシーを拾う", ko: "택시를 잡다" }],
    examples: []
  },
  {
    id: 1352, day: 5, level: "N3",
    word: "親しい", kana: "したしい", pos: "い형용사",
    mean: "친하다",
    syn: ["仲がいい"],
    collocations: [{ ja: "親しい友人", ko: "친한 친구" }, { ja: "親しく話す", ko: "친근하게 이야기하다" }],
    examples: []
  },
  {
    id: 1353, day: 5, level: "N3",
    word: "単純", kana: "たんじゅん", pos: "な형용사",
    mean: "단순함",
    syn: ["簡単な"],
    collocations: [{ ja: "単純な作業", ko: "단순한 작업" }, { ja: "単純な性格", ko: "단순한 성격" }],
    examples: []
  },
  {
    id: 1354, day: 5, level: "N3",
    word: "憎い", kana: "にくい", pos: "い형용사",
    mean: "밉다",
    syn: [],
    collocations: [{ ja: "犯人が憎い", ko: "범인이 밉다" }, { ja: "憎い相手", ko: "미운 상대" }],
    examples: []
  },
  {
    id: 1355, day: 5, level: "N3",
    word: "適当", kana: "てきとう", pos: "な형용사",
    mean: "적당함, 대충임",
    syn: ["ふさわしい"],
    collocations: [{ ja: "適当な言葉", ko: "적당한 말" }, { ja: "適当に答える", ko: "대충 대답하다" }],
    examples: []
  },
  {
    id: 1356, day: 5, level: "N3",
    word: "鈍い", kana: "にぶい", pos: "い형용사",
    mean: "둔하다, 무디다",
    syn: [],
    collocations: [{ ja: "動きが鈍い", ko: "움직임이 둔하다" }, { ja: "感覚が鈍い", ko: "감각이 무디다" }],
    examples: []
  },
  {
    id: 1357, day: 5, level: "N3",
    word: "得意", kana: "とくい", pos: "な형용사",
    mean: "잘함, 자신 있음",
    syn: ["上手な"],
    collocations: [{ ja: "料理が得意だ", ko: "요리를 잘한다" }, { ja: "得意な科目", ko: "자신 있는 과목" }],
    examples: []
  },
  {
    id: 1358, day: 5, level: "N3",
    word: "激しい", kana: "はげしい", pos: "い형용사",
    mean: "격하다, 심하다",
    syn: ["ひどい"],
    collocations: [{ ja: "激しい雨", ko: "거센 비" }, { ja: "競争が激しい", ko: "경쟁이 치열하다" }],
    examples: []
  },
  {
    id: 1359, day: 5, level: "N3",
    word: "苦手", kana: "にがて", pos: "な형용사",
    mean: "서투름, 질색임",
    syn: ["下手な"],
    collocations: [{ ja: "数学が苦手だ", ko: "수학이 약하다" }, { ja: "人混みが苦手だ", ko: "인파가 질색이다" }],
    examples: []
  },
  {
    id: 1360, day: 5, level: "N3",
    word: "豊か", kana: "ゆたか", pos: "な형용사",
    mean: "풍부함, 풍요로움",
    syn: ["豊富な"],
    collocations: [{ ja: "豊かな自然", ko: "풍요로운 자연" }, { ja: "経験が豊かだ", ko: "경험이 풍부하다" }],
    examples: []
  },
  {
    id: 1361, day: 5, level: "N3",
    word: "恥ずかしい", kana: "はずかしい", pos: "い형용사",
    mean: "부끄럽다",
    syn: [],
    collocations: [{ ja: "恥ずかしい失敗", ko: "창피한 실수" }, { ja: "人前で恥ずかしい", ko: "사람들 앞에서 부끄럽다" }],
    examples: []
  },
  {
    id: 1362, day: 5, level: "N3",
    word: "平等", kana: "びょうどう", pos: "な형용사",
    mean: "평등함",
    syn: ["公平な"],
    collocations: [{ ja: "平等な社会", ko: "평등한 사회" }, { ja: "平等に分ける", ko: "공평하게 나누다" }],
    examples: []
  },
  {
    id: 1363, day: 5, level: "N3",
    word: "等しい", kana: "ひとしい", pos: "い형용사",
    mean: "같다, 동등하다",
    syn: ["同じ"],
    collocations: [{ ja: "長さが等しい", ko: "길이가 같다" }, { ja: "無いに等しい", ko: "없는 거나 마찬가지다" }],
    examples: []
  },
  {
    id: 1364, day: 5, level: "N3",
    word: "複雑", kana: "ふくざつ", pos: "な형용사",
    mean: "복잡함",
    syn: ["ややこしい"],
    collocations: [{ ja: "複雑な問題", ko: "복잡한 문제" }, { ja: "複雑な気持ち", ko: "복잡한 심경" }],
    examples: []
  },
  {
    id: 1365, day: 5, level: "N3",
    word: "チェック", kana: "チェック", pos: "외래어",
    mean: "확인, 점검 (check)",
    syn: ["確認", "点検"],
    collocations: [{ ja: "内容をチェックする", ko: "내용을 확인하다" }],
    examples: []
  },
  {
    id: 1366, day: 5, level: "N3",
    word: "トラブル", kana: "トラブル", pos: "외래어",
    mean: "문제, 분쟁 (trouble)",
    syn: ["もめ事", "故障"],
    collocations: [{ ja: "トラブルが起きる", ko: "문제가 생기다" }],
    examples: []
  },
  {
    id: 1367, day: 5, level: "N3",
    word: "バランス", kana: "バランス", pos: "외래어",
    mean: "균형 (balance)",
    syn: ["釣り合い"],
    collocations: [{ ja: "バランスを取る", ko: "균형을 잡다" }, { ja: "栄養のバランス", ko: "영양 균형" }],
    examples: []
  },
  {
    id: 1368, day: 5, level: "N3",
    word: "ほぼ", kana: "ほぼ", pos: "부사",
    mean: "거의",
    syn: ["だいたい"],
    collocations: [{ ja: "ほぼ完成した", ko: "거의 완성되었다" }],
    examples: [{ type: "ex", label: "예문", ja: "作業はほぼ終わった。", ko: "작업은 거의 끝났다." }]
  },
  {
    id: 1369, day: 5, level: "N3",
    word: "まるで", kana: "まるで", pos: "부사",
    mean: "마치, 전혀",
    syn: ["あたかも"],
    collocations: [{ ja: "まるで夢のようだ", ko: "마치 꿈같다" }],
    examples: [{ type: "ex", label: "예문", ja: "まるで子どものようにはしゃいでいる。", ko: "마치 아이처럼 떠들고 있다." }]
  },
  {
    id: 1370, day: 5, level: "N3",
    word: "万一", kana: "まんいち", pos: "부사",
    mean: "만일",
    syn: ["もしも"],
    collocations: [{ ja: "万一の場合", ko: "만일의 경우" }],
    examples: [{ type: "ex", label: "예문", ja: "万一に備えて保険に入る。", ko: "만일에 대비해 보험에 든다." }]
  },
  {
    id: 1371, day: 5, level: "N3",
    word: "間もなく", kana: "まもなく", pos: "부사",
    mean: "곧, 머지않아",
    syn: ["もうすぐ"],
    collocations: [{ ja: "間もなく到着する", ko: "곧 도착하다" }],
    examples: [{ type: "ex", label: "예문", ja: "間もなく電車が参ります。", ko: "곧 전철이 들어옵니다." }]
  },
  {
    id: 1372, day: 5, level: "N3",
    word: "めったに", kana: "めったに", pos: "부사",
    mean: "좀처럼 (~않다)",
    syn: ["ほとんど"],
    collocations: [{ ja: "めったに会わない", ko: "좀처럼 만나지 않다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はめったに怒らない。", ko: "그는 좀처럼 화내지 않는다." }]
  },
  {
    id: 1373, day: 5, level: "N3",
    word: "もともと", kana: "もともと", pos: "부사",
    mean: "원래, 본디",
    syn: ["元来"],
    collocations: [{ ja: "もともと好きだった", ko: "원래 좋아했다" }],
    examples: [{ type: "ex", label: "예문", ja: "もともと体が弱い。", ko: "원래 몸이 약하다." }]
  },
  {
    id: 1374, day: 5, level: "N3",
    word: "やがて", kana: "やがて", pos: "부사",
    mean: "머지않아, 이윽고",
    syn: ["間もなく"],
    collocations: [{ ja: "やがて春になる", ko: "머지않아 봄이 된다" }],
    examples: [{ type: "ex", label: "예문", ja: "やがて雨も止むだろう。", ko: "이윽고 비도 그칠 것이다." }]
  },
  {
    id: 1375, day: 5, level: "N3",
    word: "ようやく", kana: "ようやく", pos: "부사",
    mean: "겨우, 간신히",
    syn: ["やっと"],
    collocations: [{ ja: "ようやく分かった", ko: "겨우 알았다" }],
    examples: [{ type: "ex", label: "예문", ja: "三時間待って、ようやく順番が来た。", ko: "세 시간 기다려서 겨우 차례가 왔다." }]
  },
  {
    id: 1376, day: 5, level: "N3",
    word: "ふらふら", kana: "ふらふら", pos: "부사 (의성어·의태어)",
    mean: "비틀비틀, 휘청휘청",
    syn: ["よろよろ"],
    collocations: [{ ja: "ふらふら歩く", ko: "비틀비틀 걷다" }],
    examples: [{ type: "ex", label: "예문", ja: "熱があって、ふらふらする。", ko: "열이 있어서 휘청거린다." }]
  },
  {
    id: 1377, day: 5, level: "N3",
    word: "ぶらぶら", kana: "ぶらぶら", pos: "부사 (의성어·의태어)",
    mean: "어슬렁어슬렁, 빈둥빈둥",
    syn: ["ぶらつく"],
    collocations: [{ ja: "町をぶらぶらする", ko: "거리를 어슬렁거리다" }],
    examples: [{ type: "ex", label: "예문", ja: "休日は家でぶらぶらしていた。", ko: "휴일에는 집에서 빈둥거렸다." }]
  },
  {
    id: 1378, day: 5, level: "N3",
    word: "ほっと", kana: "ほっと", pos: "부사 (의성어·의태어)",
    mean: "안심하는 모양",
    syn: ["安心する"],
    collocations: [{ ja: "ほっとする", ko: "안심하다" }],
    examples: [{ type: "ex", label: "예문", ja: "無事だと聞いて、ほっとした。", ko: "무사하다는 말을 듣고 안심했다." }]
  },
  {
    id: 1379, day: 5, level: "N3",
    word: "ぼんやり", kana: "ぼんやり", pos: "부사 (의성어·의태어)",
    mean: "멍하니, 어렴풋이",
    syn: ["ぼうっと"],
    collocations: [{ ja: "ぼんやり眺める", ko: "멍하니 바라보다" }],
    examples: [{ type: "ex", label: "예문", ja: "昔のことはぼんやりとしか覚えていない。", ko: "옛날 일은 어렴풋이만 기억한다." }]
  },
  {
    id: 1380, day: 5, level: "N3",
    word: "それに", kana: "それに", pos: "접속사",
    mean: "게다가, 더구나",
    syn: ["そのうえ"],
    collocations: [{ ja: "それに", ko: "게다가" }],
    examples: [{ type: "ex", label: "예문", ja: "今日は寒いし、それに雨も降っている。", ko: "오늘은 춥고 게다가 비도 온다." }]
  },
  {
    id: 1381, day: 5, level: "N3",
    word: "すると", kana: "すると", pos: "접속사",
    mean: "그러자, 그러면",
    syn: ["そうしたら"],
    collocations: [{ ja: "すると", ko: "그러자" }],
    examples: [{ type: "ex", label: "예문", ja: "ボタンを押した。すると、ドアが開いた。", ko: "버튼을 눌렀다. 그러자 문이 열렸다." }]
  },
  {
    id: 1382, day: 5, level: "N3",
    word: "普及", kana: "ふきゅう", pos: "명사 (する동사)",
    mean: "보급",
    syn: ["広まる"],
    collocations: [{ ja: "インターネットの普及", ko: "인터넷 보급" }, { ja: "普及率", ko: "보급률" }],
    examples: []
  },
  {
    id: 1383, day: 5, level: "N3",
    word: "分析", kana: "ぶんせき", pos: "명사 (する동사)",
    mean: "분석",
    syn: [],
    collocations: [{ ja: "データを分析する", ko: "데이터를 분석하다" }, { ja: "分析結果", ko: "분석 결과" }],
    examples: []
  },
  {
    id: 1384, day: 5, level: "N3",
    word: "文句", kana: "もんく", pos: "명사",
    mean: "불평, 문구",
    syn: ["不満"],
    collocations: [{ ja: "文句を言う", ko: "불평하다" }, { ja: "文句なし", ko: "나무랄 데 없음" }],
    examples: []
  },
  {
    id: 1385, day: 5, level: "N3",
    word: "変化", kana: "へんか", pos: "명사 (する동사)",
    mean: "변화",
    syn: ["変わる"],
    collocations: [{ ja: "変化が激しい", ko: "변화가 심하다" }, { ja: "気温の変化", ko: "기온 변화" }],
    examples: []
  },
  {
    id: 1386, day: 5, level: "N3",
    word: "返事", kana: "へんじ", pos: "명사 (する동사)",
    mean: "대답, 답장",
    syn: ["返答"],
    collocations: [{ ja: "返事をする", ko: "대답하다" }, { ja: "返事が来ない", ko: "답장이 오지 않다" }],
    examples: []
  },
  {
    id: 1387, day: 5, level: "N3",
    word: "方法", kana: "ほうほう", pos: "명사",
    mean: "방법",
    syn: ["やり方", "手段"],
    collocations: [{ ja: "方法を考える", ko: "방법을 생각하다" }, { ja: "解決方法", ko: "해결 방법" }],
    examples: []
  },
  {
    id: 1388, day: 5, level: "N3",
    word: "訪問", kana: "ほうもん", pos: "명사 (する동사)",
    mean: "방문",
    syn: ["訪れる"],
    collocations: [{ ja: "家庭を訪問する", ko: "가정을 방문하다" }, { ja: "訪問者", ko: "방문자" }],
    examples: []
  },
  {
    id: 1389, day: 5, level: "N3",
    word: "保存", kana: "ほぞん", pos: "명사 (する동사)",
    mean: "보존, 저장",
    syn: ["保管"],
    collocations: [{ ja: "データを保存する", ko: "데이터를 저장하다" }, { ja: "冷凍保存", ko: "냉동 보존" }],
    examples: []
  },
  {
    id: 1390, day: 5, level: "N3",
    word: "本物", kana: "ほんもの", pos: "명사",
    mean: "진짜",
    syn: [],
    collocations: [{ ja: "本物の宝石", ko: "진짜 보석" }, { ja: "本物の実力", ko: "진정한 실력" }],
    examples: []
  },
  {
    id: 1391, day: 5, level: "N3",
    word: "翻訳", kana: "ほんやく", pos: "명사 (する동사)",
    mean: "번역",
    syn: ["訳す"],
    collocations: [{ ja: "英語に翻訳する", ko: "영어로 번역하다" }, { ja: "翻訳家", ko: "번역가" }],
    examples: []
  },
  {
    id: 1392, day: 5, level: "N3",
    word: "満足", kana: "まんぞく", pos: "명사 (する동사)",
    mean: "만족",
    syn: ["満たされる"],
    collocations: [{ ja: "結果に満足する", ko: "결과에 만족하다" }, { ja: "満足感", ko: "만족감" }],
    examples: []
  },
  {
    id: 1393, day: 5, level: "N3",
    word: "魅力", kana: "みりょく", pos: "명사",
    mean: "매력",
    syn: [],
    collocations: [{ ja: "魅力がある", ko: "매력이 있다" }, { ja: "魅力的な人", ko: "매력적인 사람" }],
    examples: []
  },
  {
    id: 1394, day: 5, level: "N3",
    word: "目的", kana: "もくてき", pos: "명사",
    mean: "목적",
    syn: ["目標"],
    collocations: [{ ja: "目的を果たす", ko: "목적을 이루다" }, { ja: "旅行の目的", ko: "여행 목적" }],
    examples: []
  },
  {
    id: 1395, day: 5, level: "N3",
    word: "目標", kana: "もくひょう", pos: "명사",
    mean: "목표",
    syn: ["目当て"],
    collocations: [{ ja: "目標を立てる", ko: "목표를 세우다" }, { ja: "目標を達成する", ko: "목표를 달성하다" }],
    examples: []
  },
  {
    id: 1396, day: 5, level: "N3",
    word: "役割", kana: "やくわり", pos: "명사",
    mean: "역할",
    syn: ["役目"],
    collocations: [{ ja: "役割を果たす", ko: "역할을 다하다" }, { ja: "重要な役割", ko: "중요한 역할" }],
    examples: []
  },
  {
    id: 1397, day: 5, level: "N3",
    word: "約束", kana: "やくそく", pos: "명사 (する동사)",
    mean: "약속",
    syn: [],
    collocations: [{ ja: "約束を守る", ko: "약속을 지키다" }, { ja: "約束を破る", ko: "약속을 어기다" }],
    examples: []
  },
  {
    id: 1398, day: 5, level: "N3",
    word: "輸出", kana: "ゆしゅつ", pos: "명사 (する동사)",
    mean: "수출",
    syn: [],
    collocations: [{ ja: "車を輸出する", ko: "차를 수출하다" }, { ja: "輸出産業", ko: "수출 산업" }],
    examples: []
  },
  {
    id: 1399, day: 5, level: "N3",
    word: "輸入", kana: "ゆにゅう", pos: "명사 (する동사)",
    mean: "수입",
    syn: [],
    collocations: [{ ja: "石油を輸入する", ko: "석유를 수입하다" }, { ja: "輸入品", ko: "수입품" }],
    examples: []
  },
  {
    id: 1400, day: 5, level: "N3",
    word: "用意", kana: "ようい", pos: "명사 (する동사)",
    mean: "준비",
    syn: ["準備"],
    collocations: [{ ja: "食事を用意する", ko: "식사를 준비하다" }, { ja: "用意ができる", ko: "준비가 되다" }],
    examples: []
  },
  {
    id: 1401, day: 5, level: "N3",
    word: "予算", kana: "よさん", pos: "명사",
    mean: "예산",
    syn: [],
    collocations: [{ ja: "予算を立てる", ko: "예산을 세우다" }, { ja: "予算オーバー", ko: "예산 초과" }],
    examples: []
  },
  {
    id: 1402, day: 5, level: "N3",
    word: "予想", kana: "よそう", pos: "명사 (する동사)",
    mean: "예상",
    syn: ["予測"],
    collocations: [{ ja: "予想が当たる", ko: "예상이 맞다" }, { ja: "予想外", ko: "예상 밖" }],
    examples: []
  },
  {
    id: 1403, day: 5, level: "N3",
    word: "予約", kana: "よやく", pos: "명사 (する동사)",
    mean: "예약",
    syn: [],
    collocations: [{ ja: "ホテルを予約する", ko: "호텔을 예약하다" }, { ja: "予約を取り消す", ko: "예약을 취소하다" }],
    examples: []
  },
  {
    id: 1404, day: 5, level: "N3",
    word: "利益", kana: "りえき", pos: "명사",
    mean: "이익",
    syn: ["もうけ"],
    collocations: [{ ja: "利益を上げる", ko: "이익을 올리다" }, { ja: "利益を得る", ko: "이익을 얻다" }],
    examples: []
  },
  {
    id: 1405, day: 5, level: "N3",
    word: "理解", kana: "りかい", pos: "명사 (する동사)",
    mean: "이해",
    syn: ["分かる"],
    collocations: [{ ja: "理解を深める", ko: "이해를 깊게 하다" }, { ja: "理解に苦しむ", ko: "이해하기 힘들다" }],
    examples: []
  },
  {
    id: 1406, day: 5, level: "N3",
    word: "利用", kana: "りよう", pos: "명사 (する동사)",
    mean: "이용",
    syn: ["使う"],
    collocations: [{ ja: "図書館を利用する", ko: "도서관을 이용하다" }, { ja: "利用者", ko: "이용자" }],
    examples: []
  },
  {
    id: 1407, day: 5, level: "N3",
    word: "料金", kana: "りょうきん", pos: "명사",
    mean: "요금",
    syn: ["代金"],
    collocations: [{ ja: "料金を払う", ko: "요금을 내다" }, { ja: "電気料金", ko: "전기 요금" }],
    examples: []
  },
  {
    id: 1408, day: 5, level: "N3",
    word: "連絡", kana: "れんらく", pos: "명사 (する동사)",
    mean: "연락",
    syn: [],
    collocations: [{ ja: "連絡を取る", ko: "연락을 취하다" }, { ja: "連絡先", ko: "연락처" }],
    examples: []
  },
  {
    id: 1409, day: 5, level: "N3",
    word: "話題", kana: "わだい", pos: "명사",
    mean: "화제",
    syn: ["トピック"],
    collocations: [{ ja: "話題になる", ko: "화제가 되다" }, { ja: "話題を変える", ko: "화제를 바꾸다" }],
    examples: []
  },
  {
    id: 1410, day: 5, level: "N3",
    word: "割合", kana: "わりあい", pos: "명사",
    mean: "비율",
    syn: ["比率"],
    collocations: [{ ja: "女性の割合", ko: "여성의 비율" }, { ja: "割合に安い", ko: "비교적 싸다" }],
    examples: []
  },
  // ==========================================
  // [DAY 6] N3 필수 · 82개
  // ==========================================
  {
    id: 1411, day: 6, level: "N3",
    word: "防ぐ", kana: "ふせぐ", pos: "동사 (타동사)",
    mean: "막다, 방지하다",
    syn: ["防止する"],
    collocations: [{ ja: "事故を防ぐ", ko: "사고를 방지하다" }, { ja: "寒さを防ぐ", ko: "추위를 막다" }],
    examples: []
  },
  {
    id: 1412, day: 6, level: "N3",
    word: "含む", kana: "ふくむ", pos: "동사 (타동사)",
    mean: "포함하다",
    syn: ["含める"],
    collocations: [{ ja: "税金を含む", ko: "세금을 포함하다" }, { ja: "水分を含む", ko: "수분을 머금다" }],
    examples: []
  },
  {
    id: 1413, day: 6, level: "N3",
    word: "膨らむ", kana: "ふくらむ", pos: "동사 (자동사)",
    mean: "부풀다",
    syn: [],
    collocations: [{ ja: "風船が膨らむ", ko: "풍선이 부풀다" }, { ja: "期待が膨らむ", ko: "기대가 부풀다" }],
    examples: []
  },
  {
    id: 1414, day: 6, level: "N3",
    word: "振る", kana: "ふる", pos: "동사 (타동사)",
    mean: "흔들다, 차다",
    syn: [],
    collocations: [{ ja: "手を振る", ko: "손을 흔들다" }, { ja: "恋人に振られる", ko: "애인에게 차이다" }],
    examples: []
  },
  {
    id: 1415, day: 6, level: "N3",
    word: "減らす", kana: "へらす", pos: "동사 (타동사)",
    mean: "줄이다",
    syn: ["削減する"],
    collocations: [{ ja: "体重を減らす", ko: "체중을 줄이다" }, { ja: "ごみを減らす", ko: "쓰레기를 줄이다" }],
    examples: []
  },
  {
    id: 1416, day: 6, level: "N3",
    word: "干す", kana: "ほす", pos: "동사 (타동사)",
    mean: "말리다",
    syn: [],
    collocations: [{ ja: "布団を干す", ko: "이불을 널어 말리다" }, { ja: "洗濯物を干す", ko: "빨래를 널다" }],
    examples: []
  },
  {
    id: 1417, day: 6, level: "N3",
    word: "掘る", kana: "ほる", pos: "동사 (타동사)",
    mean: "파다",
    syn: [],
    collocations: [{ ja: "穴を掘る", ko: "구멍을 파다" }, { ja: "井戸を掘る", ko: "우물을 파다" }],
    examples: []
  },
  {
    id: 1418, day: 6, level: "N3",
    word: "任せる", kana: "まかせる", pos: "동사 (타동사)",
    mean: "맡기다",
    syn: ["預ける", "委ねる"],
    collocations: [{ ja: "仕事を任せる", ko: "일을 맡기다" }, { ja: "運に任せる", ko: "운에 맡기다" }],
    examples: []
  },
  {
    id: 1419, day: 6, level: "N3",
    word: "混ぜる", kana: "まぜる", pos: "동사 (타동사)",
    mean: "섞다",
    syn: [],
    collocations: [{ ja: "材料を混ぜる", ko: "재료를 섞다" }, { ja: "よくかき混ぜる", ko: "잘 휘젓다" }],
    examples: []
  },
  {
    id: 1420, day: 6, level: "N3",
    word: "守る", kana: "まもる", pos: "동사 (타동사)",
    mean: "지키다",
    syn: ["従う"],
    collocations: [{ ja: "約束を守る", ko: "약속을 지키다" }, { ja: "自然を守る", ko: "자연을 지키다" }],
    examples: []
  },
  {
    id: 1421, day: 6, level: "N3",
    word: "迷う", kana: "まよう", pos: "동사 (자동사)",
    mean: "헤매다, 망설이다",
    syn: ["ためらう"],
    collocations: [{ ja: "道に迷う", ko: "길을 잃다" }, { ja: "どちらにするか迷う", ko: "어느 쪽으로 할지 망설이다" }],
    examples: []
  },
  {
    id: 1422, day: 6, level: "N3",
    word: "磨く", kana: "みがく", pos: "동사 (타동사)",
    mean: "닦다, 연마하다",
    syn: [],
    collocations: [{ ja: "歯を磨く", ko: "이를 닦다" }, { ja: "技術を磨く", ko: "기술을 연마하다" }],
    examples: []
  },
  {
    id: 1423, day: 6, level: "N3",
    word: "見逃す", kana: "みのがす", pos: "동사 (타동사)",
    mean: "놓치다, 눈감아 주다",
    syn: ["見落とす"],
    collocations: [{ ja: "チャンスを見逃す", ko: "기회를 놓치다" }, { ja: "ミスを見逃す", ko: "실수를 눈감아 주다" }],
    examples: []
  },
  {
    id: 1424, day: 6, level: "N3",
    word: "結ぶ", kana: "むすぶ", pos: "동사 (타동사)",
    mean: "매다, 맺다",
    syn: ["繋ぐ"],
    collocations: [{ ja: "ひもを結ぶ", ko: "끈을 매다" }, { ja: "契約を結ぶ", ko: "계약을 맺다" }],
    examples: []
  },
  {
    id: 1425, day: 6, level: "N3",
    word: "申し込む", kana: "もうしこむ", pos: "동사 (타동사)",
    mean: "신청하다",
    syn: ["応募する"],
    collocations: [{ ja: "参加を申し込む", ko: "참가를 신청하다" }, { ja: "結婚を申し込む", ko: "청혼하다" }],
    examples: []
  },
  {
    id: 1426, day: 6, level: "N3",
    word: "燃やす", kana: "もやす", pos: "동사 (타동사)",
    mean: "태우다",
    syn: [],
    collocations: [{ ja: "ごみを燃やす", ko: "쓰레기를 태우다" }, { ja: "情熱を燃やす", ko: "열정을 불태우다" }],
    examples: []
  },
  {
    id: 1427, day: 6, level: "N3",
    word: "戻す", kana: "もどす", pos: "동사 (타동사)",
    mean: "되돌리다",
    syn: ["返す"],
    collocations: [{ ja: "元に戻す", ko: "원래대로 되돌리다" }, { ja: "棚に戻す", ko: "선반에 되돌려 놓다" }],
    examples: []
  },
  {
    id: 1428, day: 6, level: "N3",
    word: "求める", kana: "もとめる", pos: "동사 (타동사)",
    mean: "구하다, 요구하다",
    syn: ["要求する"],
    collocations: [{ ja: "助けを求める", ko: "도움을 청하다" }, { ja: "説明を求める", ko: "설명을 요구하다" }],
    examples: []
  },
  {
    id: 1429, day: 6, level: "N3",
    word: "譲る", kana: "ゆずる", pos: "동사 (타동사)",
    mean: "양보하다, 물려주다",
    syn: [],
    collocations: [{ ja: "席を譲る", ko: "자리를 양보하다" }, { ja: "財産を譲る", ko: "재산을 물려주다" }],
    examples: []
  },
  {
    id: 1430, day: 6, level: "N3",
    word: "許す", kana: "ゆるす", pos: "동사 (타동사)",
    mean: "허락하다, 용서하다",
    syn: ["認める"],
    collocations: [{ ja: "外出を許す", ko: "외출을 허락하다" }, { ja: "罪を許す", ko: "죄를 용서하다" }],
    examples: []
  },
  {
    id: 1431, day: 6, level: "N3",
    word: "酔う", kana: "よう", pos: "동사 (자동사)",
    mean: "취하다, 멀미하다",
    syn: [],
    collocations: [{ ja: "酒に酔う", ko: "술에 취하다" }, { ja: "車に酔う", ko: "차멀미하다" }],
    examples: []
  },
  {
    id: 1432, day: 6, level: "N3",
    word: "汚す", kana: "よごす", pos: "동사 (타동사)",
    mean: "더럽히다",
    syn: [],
    collocations: [{ ja: "服を汚す", ko: "옷을 더럽히다" }, { ja: "名誉を汚す", ko: "명예를 더럽히다" }],
    examples: []
  },
  {
    id: 1433, day: 6, level: "N3",
    word: "寄る", kana: "よる", pos: "동사 (자동사)",
    mean: "들르다, 다가가다",
    syn: ["立ち寄る"],
    collocations: [{ ja: "帰りに本屋に寄る", ko: "돌아가는 길에 서점에 들르다" }, { ja: "近くに寄る", ko: "가까이 다가가다" }],
    examples: []
  },
  {
    id: 1434, day: 6, level: "N3",
    word: "略す", kana: "りゃくす", pos: "동사 (타동사)",
    mean: "생략하다, 줄이다",
    syn: ["省略する"],
    collocations: [{ ja: "名前を略す", ko: "이름을 줄여 부르다" }, { ja: "説明を略す", ko: "설명을 생략하다" }],
    examples: []
  },
  {
    id: 359, day: 6, level: "N3",
    word: "構う", kana: "かまう", pos: "동사 (5단 타동사)",
    mean: "상관하다, 신경 쓰다, 돌보다",
    syn: ["気にする", "相手をする"],
    collocations: [{ ja: "なりふり構わず", ko: "체면불고하고/물불 가리지 않고" }, { ja: "お構いなく", ko: "(접대 신경 쓰지 마시고) 편히 계세요" }],
    examples: [{ type: "kun", label: "훈독", ja: "他人の勝手な噂話など少しも構うことなく、自らの信じる道を堂々と突き進む。", ko: "타인의 무책임한 소문 따위는 조금도 신경 쓰지 않고 스스로 믿는 길을 당당히 돌진하다." }]
  },
  {
    id: 1435, day: 6, level: "N3",
    word: "酷い", kana: "ひどい", pos: "い형용사",
    mean: "심하다, 지독하다",
    syn: ["激しい"],
    collocations: [{ ja: "酷い雨", ko: "심한 비" }, { ja: "酷い目に遭う", ko: "험한 꼴을 당하다" }],
    examples: []
  },
  {
    id: 1436, day: 6, level: "N3",
    word: "平気", kana: "へいき", pos: "な형용사",
    mean: "아무렇지 않음, 태연함",
    syn: ["平然とした"],
    collocations: [{ ja: "平気な顔", ko: "태연한 얼굴" }, { ja: "寒くても平気だ", ko: "추워도 괜찮다" }],
    examples: []
  },
  {
    id: 1437, day: 6, level: "N3",
    word: "貧しい", kana: "まずしい", pos: "い형용사",
    mean: "가난하다, 부족하다",
    syn: ["貧乏な"],
    collocations: [{ ja: "貧しい生活", ko: "가난한 생활" }, { ja: "心が貧しい", ko: "마음이 빈곤하다" }],
    examples: []
  },
  {
    id: 1438, day: 6, level: "N3",
    word: "立派", kana: "りっぱ", pos: "な형용사",
    mean: "훌륭함",
    syn: ["見事な"],
    collocations: [{ ja: "立派な建物", ko: "훌륭한 건물" }, { ja: "立派に育つ", ko: "훌륭하게 자라다" }],
    examples: []
  },
  {
    id: 1439, day: 6, level: "N3",
    word: "眩しい", kana: "まぶしい", pos: "い형용사",
    mean: "눈부시다",
    syn: [],
    collocations: [{ ja: "太陽が眩しい", ko: "햇빛이 눈부시다" }, { ja: "眩しい笑顔", ko: "눈부신 미소" }],
    examples: []
  },
  {
    id: 1440, day: 6, level: "N3",
    word: "冷静", kana: "れいせい", pos: "な형용사",
    mean: "냉정함, 침착함",
    syn: ["落ち着いた"],
    collocations: [{ ja: "冷静な判断", ko: "냉정한 판단" }, { ja: "冷静に話す", ko: "침착하게 말하다" }],
    examples: []
  },
  {
    id: 1441, day: 6, level: "N3",
    word: "緩い", kana: "ゆるい", pos: "い형용사",
    mean: "느슨하다, 완만하다",
    syn: [],
    collocations: [{ ja: "ベルトが緩い", ko: "벨트가 헐겁다" }, { ja: "緩い坂", ko: "완만한 언덕" }],
    examples: []
  },
  {
    id: 1442, day: 6, level: "N3",
    word: "見事", kana: "みごと", pos: "な형용사",
    mean: "훌륭함, 멋짐",
    syn: ["立派な"],
    collocations: [{ ja: "見事な演技", ko: "훌륭한 연기" }, { ja: "見事に失敗する", ko: "보기 좋게 실패하다" }],
    examples: []
  },
  {
    id: 1443, day: 6, level: "N3",
    word: "無駄", kana: "むだ", pos: "な형용사",
    mean: "헛됨, 낭비임",
    syn: ["無益な"],
    collocations: [{ ja: "無駄な努力", ko: "헛된 노력" }, { ja: "時間を無駄にする", ko: "시간을 낭비하다" }],
    examples: []
  },
  {
    id: 1444, day: 6, level: "N3",
    word: "柔らかい", kana: "やわらかい", pos: "い형용사",
    mean: "부드럽다",
    syn: [],
    collocations: [{ ja: "柔らかいパン", ko: "부드러운 빵" }, { ja: "頭が柔らかい", ko: "생각이 유연하다" }],
    examples: []
  },
  {
    id: 1445, day: 6, level: "N3",
    word: "夢中", kana: "むちゅう", pos: "な형용사",
    mean: "열중함, 몰두함",
    syn: ["熱中した"],
    collocations: [{ ja: "ゲームに夢中だ", ko: "게임에 빠져 있다" }, { ja: "夢中で走る", ko: "정신없이 달리다" }],
    examples: []
  },
  {
    id: 1446, day: 6, level: "N3",
    word: "温い", kana: "ぬるい", pos: "い형용사",
    mean: "미지근하다",
    syn: [],
    collocations: [{ ja: "温いお茶", ko: "미지근한 차" }, { ja: "やり方が温い", ko: "방식이 미온적이다" }],
    examples: []
  },
  {
    id: 1447, day: 6, level: "N3",
    word: "プラン", kana: "プラン", pos: "외래어",
    mean: "계획 (plan)",
    syn: ["計画"],
    collocations: [{ ja: "プランを立てる", ko: "계획을 세우다" }],
    examples: []
  },
  {
    id: 1448, day: 6, level: "N3",
    word: "マナー", kana: "マナー", pos: "외래어",
    mean: "예절 (manners)",
    syn: ["礼儀", "作法"],
    collocations: [{ ja: "マナーを守る", ko: "예절을 지키다" }],
    examples: []
  },
  {
    id: 1449, day: 6, level: "N3",
    word: "ラッシュ", kana: "ラッシュ", pos: "외래어",
    mean: "러시, 혼잡 (rush)",
    syn: ["混雑"],
    collocations: [{ ja: "通勤ラッシュ", ko: "출퇴근 혼잡" }],
    examples: []
  },
  {
    id: 1450, day: 6, level: "N3",
    word: "わざと", kana: "わざと", pos: "부사",
    mean: "일부러 (고의로)",
    syn: ["故意に"],
    collocations: [{ ja: "わざと負ける", ko: "일부러 지다" }],
    examples: [{ type: "ex", label: "예문", ja: "わざと聞こえないふりをした。", ko: "일부러 못 들은 척했다." }]
  },
  {
    id: 1451, day: 6, level: "N3",
    word: "わざわざ", kana: "わざわざ", pos: "부사",
    mean: "일부러, 굳이 (수고스럽게)",
    syn: ["特別に"],
    collocations: [{ ja: "わざわざ来てくれた", ko: "일부러 와 주었다" }],
    examples: [{ type: "ex", label: "예문", ja: "わざわざ届けてくださって、ありがとうございます。", ko: "일부러 전해 주셔서 감사합니다." }]
  },
  {
    id: 1452, day: 6, level: "N3",
    word: "偶然", kana: "ぐうぜん", pos: "부사",
    mean: "우연히",
    syn: ["たまたま"],
    collocations: [{ ja: "偶然見つける", ko: "우연히 발견하다" }],
    examples: [{ type: "ex", label: "예문", ja: "偶然同じ電車に乗り合わせた。", ko: "우연히 같은 전철에 타게 되었다." }]
  },
  {
    id: 1453, day: 6, level: "N3",
    word: "改めて", kana: "あらためて", pos: "부사",
    mean: "다시, 새삼",
    syn: ["もう一度"],
    collocations: [{ ja: "改めて連絡する", ko: "다시 연락하다" }],
    examples: [{ type: "ex", label: "예문", ja: "改めて家族の大切さを感じた。", ko: "새삼 가족의 소중함을 느꼈다." }]
  },
  {
    id: 1454, day: 6, level: "N3",
    word: "案外", kana: "あんがい", pos: "부사",
    mean: "의외로, 뜻밖에",
    syn: ["意外に"],
    collocations: [{ ja: "案外簡単だ", ko: "의외로 간단하다" }],
    examples: [{ type: "ex", label: "예문", ja: "やってみたら案外面白かった。", ko: "해 보니 의외로 재미있었다." }]
  },
  {
    id: 1455, day: 6, level: "N3",
    word: "一層", kana: "いっそう", pos: "부사",
    mean: "한층 더",
    syn: ["さらに"],
    collocations: [{ ja: "一層努力する", ko: "한층 더 노력하다" }],
    examples: [{ type: "ex", label: "예문", ja: "雨が一層激しくなった。", ko: "비가 한층 거세졌다." }]
  },
  {
    id: 1456, day: 6, level: "N3",
    word: "大いに", kana: "おおいに", pos: "부사",
    mean: "크게, 많이",
    syn: ["非常に"],
    collocations: [{ ja: "大いに期待する", ko: "크게 기대하다" }],
    examples: [{ type: "ex", label: "예문", ja: "今夜は大いに飲もう。", ko: "오늘 밤은 실컷 마시자." }]
  },
  {
    id: 1457, day: 6, level: "N3",
    word: "およそ", kana: "およそ", pos: "부사",
    mean: "대략, 약",
    syn: ["約", "おおよそ"],
    collocations: [{ ja: "およそ百人", ko: "약 백 명" }],
    examples: [{ type: "ex", label: "예문", ja: "駅から歩いておよそ十分です。", ko: "역에서 걸어서 약 10분입니다." }]
  },
  {
    id: 1458, day: 6, level: "N3",
    word: "わくわく", kana: "わくわく", pos: "부사 (의성어·의태어)",
    mean: "두근두근 (설렘)",
    syn: ["楽しみだ"],
    collocations: [{ ja: "わくわくする", ko: "설레다" }],
    examples: [{ type: "ex", label: "예문", ja: "旅行の前の日は、わくわくして眠れない。", ko: "여행 전날은 설레서 잠이 안 온다." }]
  },
  {
    id: 1459, day: 6, level: "N3",
    word: "うろうろ", kana: "うろうろ", pos: "부사 (의성어·의태어)",
    mean: "우왕좌왕, 서성서성",
    syn: ["うろつく"],
    collocations: [{ ja: "駅でうろうろする", ko: "역에서 서성거리다" }],
    examples: [{ type: "ex", label: "예문", ja: "道が分からず、うろうろしてしまった。", ko: "길을 몰라서 우왕좌왕하고 말았다." }]
  },
  {
    id: 1460, day: 6, level: "N3",
    word: "こっそり", kana: "こっそり", pos: "부사 (의성어·의태어)",
    mean: "몰래, 살짝",
    syn: ["密かに"],
    collocations: [{ ja: "こっそり出かける", ko: "몰래 외출하다" }],
    examples: [{ type: "ex", label: "예문", ja: "授業中にこっそり手紙を渡した。", ko: "수업 중에 몰래 편지를 건넸다." }]
  },
  {
    id: 1461, day: 6, level: "N3",
    word: "さっさと", kana: "さっさと", pos: "부사 (의성어·의태어)",
    mean: "후딱, 서둘러",
    syn: ["素早く"],
    collocations: [{ ja: "さっさと帰る", ko: "후딱 돌아가다" }],
    examples: [{ type: "ex", label: "예문", ja: "さっさと宿題を済ませなさい。", ko: "얼른 숙제를 끝내라." }]
  },
  {
    id: 1462, day: 6, level: "N3",
    word: "そこで", kana: "そこで", pos: "접속사",
    mean: "그래서 (그 상황에서)",
    syn: ["それで"],
    collocations: [{ ja: "そこで", ko: "그래서" }],
    examples: [{ type: "ex", label: "예문", ja: "道に迷った。そこで、地図を見ることにした。", ko: "길을 잃었다. 그래서 지도를 보기로 했다." }]
  },
  {
    id: 1463, day: 6, level: "N3",
    word: "意見", kana: "いけん", pos: "명사 (する동사)",
    mean: "의견",
    syn: ["考え"],
    collocations: [{ ja: "意見を述べる", ko: "의견을 말하다" }, { ja: "意見が合う", ko: "의견이 맞다" }],
    examples: []
  },
  {
    id: 1464, day: 6, level: "N3",
    word: "維持費", kana: "いじひ", pos: "명사",
    mean: "유지비",
    syn: [],
    collocations: [{ ja: "車の維持費", ko: "차 유지비" }, { ja: "維持費がかかる", ko: "유지비가 들다" }],
    examples: []
  },
  {
    id: 1465, day: 6, level: "N3",
    word: "一致", kana: "いっち", pos: "명사 (する동사)",
    mean: "일치",
    syn: ["合う"],
    collocations: [{ ja: "意見が一致する", ko: "의견이 일치하다" }, { ja: "一致団結", ko: "일치단결" }],
    examples: []
  },
  {
    id: 1466, day: 6, level: "N3",
    word: "違反", kana: "いはん", pos: "명사 (する동사)",
    mean: "위반",
    syn: ["反する"],
    collocations: [{ ja: "交通違反", ko: "교통 위반" }, { ja: "規則に違反する", ko: "규칙을 위반하다" }],
    examples: []
  },
  {
    id: 1467, day: 6, level: "N3",
    word: "運転", kana: "うんてん", pos: "명사 (する동사)",
    mean: "운전, 운행",
    syn: [],
    collocations: [{ ja: "車を運転する", ko: "차를 운전하다" }, { ja: "運転を見合わせる", ko: "운행을 보류하다" }],
    examples: []
  },
  {
    id: 1468, day: 6, level: "N3",
    word: "営業", kana: "えいぎょう", pos: "명사 (する동사)",
    mean: "영업",
    syn: [],
    collocations: [{ ja: "営業時間", ko: "영업시간" }, { ja: "営業を担当する", ko: "영업을 담당하다" }],
    examples: []
  },
  {
    id: 1469, day: 6, level: "N3",
    word: "演技", kana: "えんぎ", pos: "명사 (する동사)",
    mean: "연기 (배우)",
    syn: [],
    collocations: [{ ja: "演技が上手だ", ko: "연기를 잘하다" }, { ja: "迫真の演技", ko: "실감 나는 연기" }],
    examples: []
  },
  {
    id: 1470, day: 6, level: "N3",
    word: "遠慮", kana: "えんりょ", pos: "명사 (する동사)",
    mean: "사양, 삼감",
    syn: ["控える"],
    collocations: [{ ja: "遠慮なく食べる", ko: "사양하지 않고 먹다" }, { ja: "喫煙はご遠慮ください", ko: "흡연은 삼가 주십시오" }],
    examples: []
  },
  {
    id: 1471, day: 6, level: "N3",
    word: "価値", kana: "かち", pos: "명사",
    mean: "가치",
    syn: ["値打ち"],
    collocations: [{ ja: "価値がある", ko: "가치가 있다" }, { ja: "見る価値", ko: "볼 가치" }],
    examples: []
  },
  {
    id: 1472, day: 6, level: "N3",
    word: "課題", kana: "かだい", pos: "명사",
    mean: "과제",
    syn: ["問題"],
    collocations: [{ ja: "課題を解決する", ko: "과제를 해결하다" }, { ja: "夏休みの課題", ko: "여름방학 과제" }],
    examples: []
  },
  {
    id: 1473, day: 6, level: "N3",
    word: "観察", kana: "かんさつ", pos: "명사 (する동사)",
    mean: "관찰",
    syn: ["見守る"],
    collocations: [{ ja: "植物を観察する", ko: "식물을 관찰하다" }, { ja: "観察力", ko: "관찰력" }],
    examples: []
  },
  {
    id: 1474, day: 6, level: "N3",
    word: "感動", kana: "かんどう", pos: "명사 (する동사)",
    mean: "감동",
    syn: [],
    collocations: [{ ja: "映画に感動する", ko: "영화에 감동하다" }, { ja: "感動的な話", ko: "감동적인 이야기" }],
    examples: []
  },
  {
    id: 1475, day: 6, level: "N3",
    word: "記憶", kana: "きおく", pos: "명사 (する동사)",
    mean: "기억",
    syn: ["覚える"],
    collocations: [{ ja: "記憶に残る", ko: "기억에 남다" }, { ja: "記憶を失う", ko: "기억을 잃다" }],
    examples: []
  },
  {
    id: 1476, day: 6, level: "N3",
    word: "機会", kana: "きかい", pos: "명사",
    mean: "기회",
    syn: ["チャンス"],
    collocations: [{ ja: "機会を逃す", ko: "기회를 놓치다" }, { ja: "機会があれば", ko: "기회가 있으면" }],
    examples: []
  },
  {
    id: 1477, day: 6, level: "N3",
    word: "疑問", kana: "ぎもん", pos: "명사",
    mean: "의문",
    syn: ["疑い"],
    collocations: [{ ja: "疑問に思う", ko: "의문스럽게 여기다" }, { ja: "疑問を抱く", ko: "의문을 품다" }],
    examples: []
  },
  {
    id: 1478, day: 6, level: "N3",
    word: "競争", kana: "きょうそう", pos: "명사 (する동사)",
    mean: "경쟁",
    syn: ["争い"],
    collocations: [{ ja: "競争が激しい", ko: "경쟁이 치열하다" }, { ja: "競争相手", ko: "경쟁 상대" }],
    examples: []
  },
  {
    id: 1479, day: 6, level: "N3",
    word: "興味", kana: "きょうみ", pos: "명사",
    mean: "흥미, 관심",
    syn: ["関心"],
    collocations: [{ ja: "興味を持つ", ko: "흥미를 갖다" }, { ja: "興味深い", ko: "흥미롭다" }],
    examples: []
  },
  {
    id: 1480, day: 6, level: "N3",
    word: "苦情", kana: "くじょう", pos: "명사",
    mean: "불만, 항의",
    syn: ["クレーム"],
    collocations: [{ ja: "苦情を言う", ko: "항의하다" }, { ja: "苦情が来る", ko: "불만이 들어오다" }],
    examples: []
  },
  {
    id: 1481, day: 6, level: "N3",
    word: "経験", kana: "けいけん", pos: "명사 (する동사)",
    mean: "경험",
    syn: ["体験"],
    collocations: [{ ja: "経験を積む", ko: "경험을 쌓다" }, { ja: "経験者", ko: "경험자" }],
    examples: []
  },
  {
    id: 1482, day: 6, level: "N3",
    word: "契約", kana: "けいやく", pos: "명사 (する동사)",
    mean: "계약",
    syn: [],
    collocations: [{ ja: "契約を結ぶ", ko: "계약을 맺다" }, { ja: "契約書", ko: "계약서" }],
    examples: []
  },
  {
    id: 1483, day: 6, level: "N3",
    word: "現象", kana: "げんしょう", pos: "명사",
    mean: "현상",
    syn: [],
    collocations: [{ ja: "自然現象", ko: "자연 현상" }, { ja: "不思議な現象", ko: "신기한 현상" }],
    examples: []
  },
  {
    id: 1484, day: 6, level: "N3",
    word: "現状", kana: "げんじょう", pos: "명사",
    mean: "현상 (현재 상태)",
    syn: ["現在の状態"],
    collocations: [{ ja: "現状を維持する", ko: "현상을 유지하다" }, { ja: "現状に満足する", ko: "현재 상태에 만족하다" }],
    examples: []
  },
  {
    id: 1485, day: 6, level: "N3",
    word: "構成", kana: "こうせい", pos: "명사 (する동사)",
    mean: "구성",
    syn: ["組み立て"],
    collocations: [{ ja: "文章の構成", ko: "문장 구성" }, { ja: "家族構成", ko: "가족 구성" }],
    examples: []
  },
  {
    id: 1486, day: 6, level: "N3",
    word: "行動", kana: "こうどう", pos: "명사 (する동사)",
    mean: "행동",
    syn: ["振る舞い"],
    collocations: [{ ja: "行動を起こす", ko: "행동을 취하다" }, { ja: "単独行動", ko: "단독 행동" }],
    examples: []
  },
  {
    id: 1487, day: 6, level: "N3",
    word: "候補", kana: "こうほ", pos: "명사",
    mean: "후보",
    syn: [],
    collocations: [{ ja: "候補に挙がる", ko: "후보에 오르다" }, { ja: "候補者", ko: "후보자" }],
    examples: []
  },
  {
    id: 1488, day: 6, level: "N3",
    word: "国際", kana: "こくさい", pos: "명사",
    mean: "국제",
    syn: [],
    collocations: [{ ja: "国際社会", ko: "국제 사회" }, { ja: "国際的", ko: "국제적" }],
    examples: []
  },
  {
    id: 1489, day: 6, level: "N3",
    word: "個性", kana: "こせい", pos: "명사",
    mean: "개성",
    syn: ["特徴"],
    collocations: [{ ja: "個性を生かす", ko: "개성을 살리다" }, { ja: "個性的な人", ko: "개성적인 사람" }],
    examples: []
  },
  {
    id: 1490, day: 6, level: "N3",
    word: "差別", kana: "さべつ", pos: "명사 (する동사)",
    mean: "차별",
    syn: [],
    collocations: [{ ja: "差別をなくす", ko: "차별을 없애다" }, { ja: "人種差別", ko: "인종 차별" }],
    examples: []
  },
  {
    id: 1491, day: 6, level: "N3",
    word: "支度", kana: "したく", pos: "명사 (する동사)",
    mean: "준비, 채비",
    syn: ["準備", "用意"],
    collocations: [{ ja: "食事の支度", ko: "식사 준비" }, { ja: "出かける支度をする", ko: "외출 채비를 하다" }],
    examples: []
  },
  // ==========================================
  // [DAY 7] N3 필수 · 83개
  // ==========================================
  {
    id: 1492, day: 7, level: "N3",
    word: "詫びる", kana: "わびる", pos: "동사 (타동사)",
    mean: "사과하다 (격식)",
    syn: ["謝る"],
    collocations: [{ ja: "非礼を詫びる", ko: "무례를 사과하다" }, { ja: "心から詫びる", ko: "진심으로 사죄하다" }],
    examples: []
  },
  {
    id: 1493, day: 7, level: "N3",
    word: "割る", kana: "わる", pos: "동사 (타동사)",
    mean: "깨다, 나누다",
    syn: [],
    collocations: [{ ja: "皿を割る", ko: "접시를 깨다" }, { ja: "10を2で割る", ko: "10을 2로 나누다" }],
    examples: []
  },
  {
    id: 1494, day: 7, level: "N3",
    word: "割れる", kana: "われる", pos: "동사 (자동사)",
    mean: "깨지다, 갈라지다",
    syn: [],
    collocations: [{ ja: "ガラスが割れる", ko: "유리가 깨지다" }, { ja: "意見が割れる", ko: "의견이 갈리다" }],
    examples: []
  },
  {
    id: 1495, day: 7, level: "N3",
    word: "扱う", kana: "あつかう", pos: "동사 (타동사)",
    mean: "다루다, 취급하다",
    syn: ["処理する"],
    collocations: [{ ja: "丁寧に扱う", ko: "소중히 다루다" }, { ja: "商品を扱う", ko: "상품을 취급하다" }],
    examples: []
  },
  {
    id: 1496, day: 7, level: "N3",
    word: "争う", kana: "あらそう", pos: "동사 (타동사)",
    mean: "다투다, 경쟁하다",
    syn: ["競う"],
    collocations: [{ ja: "一位を争う", ko: "1위를 다투다" }, { ja: "土地を争う", ko: "토지를 두고 다투다" }],
    examples: []
  },
  {
    id: 1497, day: 7, level: "N3",
    word: "暴れる", kana: "あばれる", pos: "동사 (자동사)",
    mean: "날뛰다, 난동 부리다",
    syn: [],
    collocations: [{ ja: "犬が暴れる", ko: "개가 날뛰다" }, { ja: "酔って暴れる", ko: "취해서 난동 부리다" }],
    examples: []
  },
  {
    id: 1498, day: 7, level: "N3",
    word: "至る", kana: "いたる", pos: "동사 (자동사)",
    mean: "이르다",
    syn: ["達する"],
    collocations: [{ ja: "現在に至る", ko: "현재에 이르다" }, { ja: "結論に至る", ko: "결론에 이르다" }],
    examples: []
  },
  {
    id: 1499, day: 7, level: "N3",
    word: "失う", kana: "うしなう", pos: "동사 (타동사)",
    mean: "잃다",
    syn: ["なくす"],
    collocations: [{ ja: "自信を失う", ko: "자신감을 잃다" }, { ja: "職を失う", ko: "직장을 잃다" }],
    examples: []
  },
  {
    id: 1500, day: 7, level: "N3",
    word: "訴える", kana: "うったえる", pos: "동사 (타동사)",
    mean: "호소하다, 고소하다",
    syn: [],
    collocations: [{ ja: "痛みを訴える", ko: "통증을 호소하다" }, { ja: "裁判所に訴える", ko: "법원에 고소하다" }],
    examples: []
  },
  {
    id: 1501, day: 7, level: "N3",
    word: "恨む", kana: "うらむ", pos: "동사 (타동사)",
    mean: "원망하다",
    syn: ["憎む"],
    collocations: [{ ja: "人を恨む", ko: "남을 원망하다" }, { ja: "運命を恨む", ko: "운명을 원망하다" }],
    examples: []
  },
  {
    id: 1502, day: 7, level: "N3",
    word: "起こる", kana: "おこる", pos: "동사 (자동사)",
    mean: "일어나다, 발생하다",
    syn: ["生じる", "発生する"],
    collocations: [{ ja: "事故が起こる", ko: "사고가 일어나다" }, { ja: "問題が起こる", ko: "문제가 발생하다" }],
    examples: []
  },
  {
    id: 1503, day: 7, level: "N3",
    word: "押さえる", kana: "おさえる", pos: "동사 (타동사)",
    mean: "누르다, (요점을) 파악하다",
    syn: [],
    collocations: [{ ja: "ドアを押さえる", ko: "문을 누르다" }, { ja: "要点を押さえる", ko: "요점을 파악하다" }],
    examples: []
  },
  {
    id: 1504, day: 7, level: "N3",
    word: "抱く", kana: "いだく", pos: "동사 (타동사)",
    mean: "(감정을) 품다",
    syn: ["持つ"],
    collocations: [{ ja: "夢を抱く", ko: "꿈을 품다" }, { ja: "疑問を抱く", ko: "의문을 품다" }],
    examples: []
  },
  {
    id: 1505, day: 7, level: "N3",
    word: "飾る", kana: "かざる", pos: "동사 (타동사)",
    mean: "장식하다",
    syn: [],
    collocations: [{ ja: "花を飾る", ko: "꽃을 장식하다" }, { ja: "有終の美を飾る", ko: "유종의 미를 거두다" }],
    examples: []
  },
  {
    id: 1506, day: 7, level: "N3",
    word: "傾ける", kana: "かたむける", pos: "동사 (타동사)",
    mean: "기울이다",
    syn: [],
    collocations: [{ ja: "耳を傾ける", ko: "귀를 기울이다" }, { ja: "首を傾ける", ko: "고개를 갸웃하다" }],
    examples: []
  },
  {
    id: 1507, day: 7, level: "N3",
    word: "乾く", kana: "かわく", pos: "동사 (자동사)",
    mean: "마르다",
    syn: [],
    collocations: [{ ja: "洗濯物が乾く", ko: "빨래가 마르다" }, { ja: "空気が乾く", ko: "공기가 건조하다" }],
    examples: []
  },
  {
    id: 1508, day: 7, level: "N3",
    word: "叫ぶ", kana: "さけぶ", pos: "동사 (자동사)",
    mean: "외치다",
    syn: ["怒鳴る"],
    collocations: [{ ja: "大声で叫ぶ", ko: "큰 소리로 외치다" }, { ja: "助けを叫ぶ", ko: "도와 달라고 외치다" }],
    examples: []
  },
  {
    id: 1509, day: 7, level: "N3",
    word: "冷やす", kana: "ひやす", pos: "동사 (타동사)",
    mean: "식히다, 차게 하다",
    syn: [],
    collocations: [{ ja: "頭を冷やす", ko: "머리를 식히다" }, { ja: "ビールを冷やす", ko: "맥주를 차게 하다" }],
    examples: []
  },
  {
    id: 1510, day: 7, level: "N3",
    word: "敷く", kana: "しく", pos: "동사 (타동사)",
    mean: "깔다",
    syn: [],
    collocations: [{ ja: "布団を敷く", ko: "이불을 깔다" }, { ja: "レールを敷く", ko: "레일을 깔다" }],
    examples: []
  },
  {
    id: 1511, day: 7, level: "N3",
    word: "滑る", kana: "すべる", pos: "동사 (자동사)",
    mean: "미끄러지다",
    syn: [],
    collocations: [{ ja: "道で滑る", ko: "길에서 미끄러지다" }, { ja: "口が滑る", ko: "말실수하다" }],
    examples: []
  },
  {
    id: 1512, day: 7, level: "N3",
    word: "耐える", kana: "たえる", pos: "동사 (자동사)",
    mean: "견디다, 참다",
    syn: ["我慢する"],
    collocations: [{ ja: "痛みに耐える", ko: "통증을 견디다" }, { ja: "使用に耐える", ko: "사용을 견디다" }],
    examples: []
  },
  {
    id: 1513, day: 7, level: "N3",
    word: "例える", kana: "たとえる", pos: "동사 (타동사)",
    mean: "비유하다",
    syn: [],
    collocations: [{ ja: "人生を旅に例える", ko: "인생을 여행에 비유하다" }, { ja: "例えて言えば", ko: "비유하자면" }],
    examples: []
  },
  {
    id: 1514, day: 7, level: "N3",
    word: "黙る", kana: "だまる", pos: "동사 (자동사)",
    mean: "입을 다물다",
    syn: [],
    collocations: [{ ja: "黙って聞く", ko: "잠자코 듣다" }, { ja: "黙っていられない", ko: "가만히 있을 수 없다" }],
    examples: []
  },
  {
    id: 1515, day: 7, level: "N3",
    word: "縮める", kana: "ちぢめる", pos: "동사 (타동사)",
    mean: "줄이다, 단축하다",
    syn: ["短縮する"],
    collocations: [{ ja: "差を縮める", ko: "차이를 줄이다" }, { ja: "寿命を縮める", ko: "수명을 줄이다" }],
    examples: []
  },
  {
    id: 1516, day: 7, level: "N3",
    word: "付き合う", kana: "つきあう", pos: "동사 (자동사)",
    mean: "사귀다, 함께하다",
    syn: [],
    collocations: [{ ja: "彼女と付き合う", ko: "그녀와 사귀다" }, { ja: "買い物に付き合う", ko: "쇼핑에 같이 가 주다" }],
    examples: []
  },
  {
    id: 1517, day: 7, level: "N3",
    word: "迷惑", kana: "めいわく", pos: "な형용사",
    mean: "폐, 성가심",
    syn: [],
    collocations: [{ ja: "迷惑をかける", ko: "폐를 끼치다" }, { ja: "迷惑な話", ko: "성가신 이야기" }],
    examples: []
  },
  {
    id: 1518, day: 7, level: "N3",
    word: "臭い", kana: "くさい", pos: "い형용사",
    mean: "냄새가 나다, 수상하다",
    syn: [],
    collocations: [{ ja: "ごみが臭い", ko: "쓰레기 냄새가 나다" }, { ja: "何だか臭い", ko: "왠지 수상하다" }],
    examples: []
  },
  {
    id: 1519, day: 7, level: "N3",
    word: "面倒", kana: "めんどう", pos: "な형용사",
    mean: "귀찮음, 번거로움",
    syn: ["面倒くさい"],
    collocations: [{ ja: "面倒な手続き", ko: "번거로운 수속" }, { ja: "面倒を見る", ko: "돌보다" }],
    examples: []
  },
  {
    id: 1520, day: 7, level: "N3",
    word: "辛い", kana: "つらい", pos: "い형용사",
    mean: "괴롭다, 고통스럽다",
    syn: ["苦しい"],
    collocations: [{ ja: "辛い経験", ko: "괴로운 경험" }, { ja: "別れが辛い", ko: "이별이 괴롭다" }],
    examples: []
  },
  {
    id: 1521, day: 7, level: "N3",
    word: "有利", kana: "ゆうり", pos: "な형용사",
    mean: "유리함",
    syn: ["好都合な"],
    collocations: [{ ja: "有利な条件", ko: "유리한 조건" }, { ja: "交渉を有利に進める", ko: "협상을 유리하게 이끌다" }],
    examples: []
  },
  {
    id: 1522, day: 7, level: "N3",
    word: "面倒くさい", kana: "めんどうくさい", pos: "い형용사",
    mean: "귀찮다",
    syn: ["面倒な"],
    collocations: [{ ja: "面倒くさい手続き", ko: "귀찮은 수속" }, { ja: "返事が面倒くさい", ko: "답장하기 귀찮다" }],
    examples: []
  },
  {
    id: 1523, day: 7, level: "N3",
    word: "愉快", kana: "ゆかい", pos: "な형용사",
    mean: "유쾌함",
    syn: ["楽しい"],
    collocations: [{ ja: "愉快な仲間", ko: "유쾌한 동료" }, { ja: "愉快に過ごす", ko: "즐겁게 지내다" }],
    examples: []
  },
  {
    id: 1524, day: 7, level: "N3",
    word: "懐かしい", kana: "なつかしい", pos: "い형용사",
    mean: "그립다, 반갑다",
    syn: [],
    collocations: [{ ja: "懐かしい写真", ko: "그리운 사진" }, { ja: "懐かしい友", ko: "반가운 친구" }],
    examples: []
  },
  {
    id: 1525, day: 7, level: "N3",
    word: "有効", kana: "ゆうこう", pos: "な형용사",
    mean: "유효함",
    syn: ["効果的な"],
    collocations: [{ ja: "有効な手段", ko: "유효한 수단" }, { ja: "時間を有効に使う", ko: "시간을 유효하게 쓰다" }],
    examples: []
  },
  {
    id: 1526, day: 7, level: "N3",
    word: "情けない", kana: "なさけない", pos: "い형용사",
    mean: "한심하다, 비참하다",
    syn: ["みっともない"],
    collocations: [{ ja: "情けない結果", ko: "한심한 결과" }, { ja: "自分が情けない", ko: "내가 한심하다" }],
    examples: []
  },
  {
    id: 1527, day: 7, level: "N3",
    word: "余計", kana: "よけい", pos: "な형용사",
    mean: "쓸데없음, 불필요함",
    syn: ["不要な"],
    collocations: [{ ja: "余計なお世話", ko: "쓸데없는 참견" }, { ja: "余計に疲れる", ko: "더 피곤해지다" }],
    examples: []
  },
  {
    id: 1528, day: 7, level: "N3",
    word: "わがまま", kana: "わがまま", pos: "な형용사",
    mean: "제멋대로임",
    syn: ["勝手な"],
    collocations: [{ ja: "わがままな子", ko: "제멋대로인 아이" }, { ja: "わがままを言う", ko: "억지를 부리다" }],
    examples: []
  },
  {
    id: 1529, day: 7, level: "N3",
    word: "ルール", kana: "ルール", pos: "외래어",
    mean: "규칙 (rule)",
    syn: ["規則"],
    collocations: [{ ja: "ルールを守る", ko: "규칙을 지키다" }],
    examples: []
  },
  {
    id: 1530, day: 7, level: "N3",
    word: "レベル", kana: "レベル", pos: "외래어",
    mean: "수준 (level)",
    syn: ["水準"],
    collocations: [{ ja: "レベルが高い", ko: "수준이 높다" }],
    examples: []
  },
  {
    id: 1531, day: 7, level: "N3",
    word: "アルバイト", kana: "アルバイト", pos: "외래어",
    mean: "아르바이트 (Arbeit)",
    syn: ["パート"],
    collocations: [{ ja: "アルバイトを探す", ko: "아르바이트를 찾다" }],
    examples: []
  },
  {
    id: 1532, day: 7, level: "N3",
    word: "恐らく", kana: "おそらく", pos: "부사",
    mean: "아마, 필시",
    syn: ["多分"],
    collocations: [{ ja: "恐らく無理だろう", ko: "아마 무리일 것이다" }],
    examples: [{ type: "ex", label: "예문", ja: "恐らく彼は来ないだろう。", ko: "아마 그는 오지 않을 것이다." }]
  },
  {
    id: 1533, day: 7, level: "N3",
    word: "確かに", kana: "たしかに", pos: "부사",
    mean: "확실히, 분명히",
    syn: ["間違いなく"],
    collocations: [{ ja: "確かに受け取った", ko: "분명히 받았다" }],
    examples: [{ type: "ex", label: "예문", ja: "確かにその通りだ。", ko: "확실히 그 말대로다." }]
  },
  {
    id: 1534, day: 7, level: "N3",
    word: "徐々に", kana: "じょじょに", pos: "부사",
    mean: "서서히",
    syn: ["次第に", "少しずつ"],
    collocations: [{ ja: "徐々に慣れる", ko: "서서히 익숙해지다" }],
    examples: [{ type: "ex", label: "예문", ja: "景気は徐々に回復している。", ko: "경기는 서서히 회복되고 있다." }]
  },
  {
    id: 1535, day: 7, level: "N3",
    word: "せっかく", kana: "せっかく", pos: "부사",
    mean: "모처럼, 애써",
    syn: ["わざわざ"],
    collocations: [{ ja: "せっかくの休み", ko: "모처럼의 휴일" }],
    examples: [{ type: "ex", label: "예문", ja: "せっかく作ったのに、誰も食べなかった。", ko: "애써 만들었는데 아무도 먹지 않았다." }]
  },
  {
    id: 1536, day: 7, level: "N3",
    word: "大して", kana: "たいして", pos: "부사",
    mean: "그다지 (~않다)",
    syn: ["それほど"],
    collocations: [{ ja: "大して難しくない", ko: "그다지 어렵지 않다" }],
    examples: [{ type: "ex", label: "예문", ja: "大して期待していなかった。", ko: "그다지 기대하지 않았다." }]
  },
  {
    id: 457, day: 7, level: "N3",
    word: "あいにく", kana: "あいにく", pos: "부사",
    mean: "공교롭게도, 안타깝게도",
    syn: ["折悪しく", "残念ながら"],
    collocations: [{ ja: "あいにくの雨", ko: "공교롭게도 내리는 궂은비" }, { ja: "あいにく留守にしております", ko: "공교롭게도 자리를 비우고 있습니다" }],
    examples: [{ type: "ex", label: "예문", ja: "長年待ちわびた屋外コンサートの当日であったが、あいにくの台風直撃により中止を余儀なくされた。", ko: "오랜 세월 손꼽아 기다리던 야외 콘서트 당일이었으나 공교롭게도 태풍 직격으로 인해 취소를 피할 수 없게 되었다." }]
  },
  {
    id: 1537, day: 7, level: "N3",
    word: "単に", kana: "たんに", pos: "부사",
    mean: "단순히, 그저",
    syn: ["ただ"],
    collocations: [{ ja: "単に忘れただけ", ko: "그저 잊었을 뿐" }],
    examples: [{ type: "ex", label: "예문", ja: "それは単に運が良かっただけだ。", ko: "그것은 단지 운이 좋았을 뿐이다." }]
  },
  {
    id: 1538, day: 7, level: "N3",
    word: "つい", kana: "つい", pos: "부사",
    mean: "그만, 무심코",
    syn: ["うっかり"],
    collocations: [{ ja: "つい食べ過ぎる", ko: "그만 과식하다" }],
    examples: [{ type: "ex", label: "예문", ja: "安かったので、つい買ってしまった。", ko: "싸서 그만 사 버렸다." }]
  },
  {
    id: 1539, day: 7, level: "N3",
    word: "じっと", kana: "じっと", pos: "부사 (의성어·의태어)",
    mean: "가만히, 꼼짝 않고",
    syn: ["動かずに"],
    collocations: [{ ja: "じっと見る", ko: "물끄러미 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "痛みをじっと我慢した。", ko: "통증을 꾹 참았다." }]
  },
  {
    id: 1540, day: 7, level: "N3",
    word: "ばらばら", kana: "ばらばら", pos: "부사 (의성어·의태어)",
    mean: "뿔뿔이, 제각각",
    syn: ["別々"],
    collocations: [{ ja: "意見がばらばらだ", ko: "의견이 제각각이다" }],
    examples: [{ type: "ex", label: "예문", ja: "家族がばらばらに暮らしている。", ko: "가족이 뿔뿔이 흩어져 살고 있다." }]
  },
  {
    id: 1541, day: 7, level: "N3",
    word: "ぎりぎり", kana: "ぎりぎり", pos: "부사 (의성어·의태어)",
    mean: "아슬아슬하게, 빠듯하게",
    syn: ["やっと"],
    collocations: [{ ja: "ぎりぎり間に合う", ko: "아슬아슬하게 시간에 맞추다" }],
    examples: [{ type: "ex", label: "예문", ja: "締め切りぎりぎりで提出した。", ko: "마감 직전에 아슬아슬하게 제출했다." }]
  },
  {
    id: 1542, day: 7, level: "N3",
    word: "ぴかぴか", kana: "ぴかぴか", pos: "부사 (의성어·의태어)",
    mean: "반짝반짝",
    syn: ["きらきら"],
    collocations: [{ ja: "ぴかぴかに磨く", ko: "반짝반짝 닦다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい靴がぴかぴか光っている。", ko: "새 신발이 반짝반짝 빛나고 있다." }]
  },
  {
    id: 1543, day: 7, level: "N3",
    word: "ただし", kana: "ただし", pos: "접속사",
    mean: "단, 다만",
    syn: ["ただ"],
    collocations: [{ ja: "ただし", ko: "단" }],
    examples: [{ type: "ex", label: "예문", ja: "入場無料。ただし、子どもは保護者同伴のこと。", ko: "입장 무료. 단, 어린이는 보호자 동반." }]
  },
  {
    id: 1544, day: 7, level: "N3",
    word: "なお", kana: "なお", pos: "접속사",
    mean: "덧붙여, 또한",
    syn: ["ちなみに"],
    collocations: [{ ja: "なお", ko: "덧붙여" }],
    examples: [{ type: "ex", label: "예문", ja: "会議は三時からです。なお、資料は各自お持ちください。", ko: "회의는 3시부터입니다. 덧붙여 자료는 각자 지참해 주십시오." }]
  },
  {
    id: 1545, day: 7, level: "N3",
    word: "自慢", kana: "じまん", pos: "명사 (する동사)",
    mean: "자랑",
    syn: ["誇り"],
    collocations: [{ ja: "自慢の息子", ko: "자랑스러운 아들" }, { ja: "自慢話", ko: "자랑 이야기" }],
    examples: []
  },
  {
    id: 1546, day: 7, level: "N3",
    word: "収入", kana: "しゅうにゅう", pos: "명사",
    mean: "수입 (소득)",
    syn: ["所得"],
    collocations: [{ ja: "収入が増える", ko: "수입이 늘다" }, { ja: "月収", ko: "월수입" }],
    examples: []
  },
  {
    id: 1547, day: 7, level: "N3",
    word: "重視", kana: "じゅうし", pos: "명사 (する동사)",
    mean: "중시",
    syn: ["重んじる"],
    collocations: [{ ja: "経験を重視する", ko: "경험을 중시하다" }, { ja: "安全を重視する", ko: "안전을 중시하다" }],
    examples: []
  },
  {
    id: 1548, day: 7, level: "N3",
    word: "出版", kana: "しゅっぱん", pos: "명사 (する동사)",
    mean: "출판",
    syn: ["刊行"],
    collocations: [{ ja: "本を出版する", ko: "책을 출판하다" }, { ja: "出版社", ko: "출판사" }],
    examples: []
  },
  {
    id: 1549, day: 7, level: "N3",
    word: "条件", kana: "じょうけん", pos: "명사",
    mean: "조건",
    syn: [],
    collocations: [{ ja: "条件を満たす", ko: "조건을 충족하다" }, { ja: "条件付き", ko: "조건부" }],
    examples: []
  },
  {
    id: 1550, day: 7, level: "N3",
    word: "状態", kana: "じょうたい", pos: "명사",
    mean: "상태",
    syn: ["様子"],
    collocations: [{ ja: "健康状態", ko: "건강 상태" }, { ja: "最悪の状態", ko: "최악의 상태" }],
    examples: []
  },
  {
    id: 1551, day: 7, level: "N3",
    word: "症状", kana: "しょうじょう", pos: "명사",
    mean: "증상",
    syn: [],
    collocations: [{ ja: "風邪の症状", ko: "감기 증상" }, { ja: "症状が出る", ko: "증상이 나타나다" }],
    examples: []
  },
  {
    id: 1552, day: 7, level: "N3",
    word: "商品", kana: "しょうひん", pos: "명사",
    mean: "상품",
    syn: ["品物"],
    collocations: [{ ja: "商品を並べる", ko: "상품을 진열하다" }, { ja: "新商品", ko: "신상품" }],
    examples: []
  },
  {
    id: 1553, day: 7, level: "N3",
    word: "情報", kana: "じょうほう", pos: "명사",
    mean: "정보",
    syn: ["データ"],
    collocations: [{ ja: "情報を集める", ko: "정보를 모으다" }, { ja: "個人情報", ko: "개인 정보" }],
    examples: []
  },
  {
    id: 1554, day: 7, level: "N3",
    word: "所有", kana: "しょゆう", pos: "명사 (する동사)",
    mean: "소유",
    syn: ["持つ"],
    collocations: [{ ja: "土地を所有する", ko: "토지를 소유하다" }, { ja: "所有者", ko: "소유자" }],
    examples: []
  },
  {
    id: 1555, day: 7, level: "N3",
    word: "信頼", kana: "しんらい", pos: "명사 (する동사)",
    mean: "신뢰",
    syn: ["信用"],
    collocations: [{ ja: "信頼を得る", ko: "신뢰를 얻다" }, { ja: "信頼関係", ko: "신뢰 관계" }],
    examples: []
  },
  {
    id: 1556, day: 7, level: "N3",
    word: "推薦", kana: "すいせん", pos: "명사 (する동사)",
    mean: "추천",
    syn: ["勧める"],
    collocations: [{ ja: "先生に推薦される", ko: "선생님께 추천받다" }, { ja: "推薦状", ko: "추천서" }],
    examples: []
  },
  {
    id: 1557, day: 7, level: "N3",
    word: "生産", kana: "せいさん", pos: "명사 (する동사)",
    mean: "생산",
    syn: ["製造"],
    collocations: [{ ja: "大量生産", ko: "대량 생산" }, { ja: "生産量", ko: "생산량" }],
    examples: []
  },
  {
    id: 1558, day: 7, level: "N3",
    word: "性格", kana: "せいかく", pos: "명사",
    mean: "성격",
    syn: ["人柄"],
    collocations: [{ ja: "明るい性格", ko: "밝은 성격" }, { ja: "性格が合う", ko: "성격이 맞다" }],
    examples: []
  },
  {
    id: 1559, day: 7, level: "N3",
    word: "説得", kana: "せっとく", pos: "명사 (する동사)",
    mean: "설득",
    syn: ["言い聞かせる"],
    collocations: [{ ja: "親を説得する", ko: "부모를 설득하다" }, { ja: "説得力", ko: "설득력" }],
    examples: []
  },
  {
    id: 1560, day: 7, level: "N3",
    word: "設備", kana: "せつび", pos: "명사 (する동사)",
    mean: "설비",
    syn: ["施設"],
    collocations: [{ ja: "設備が整う", ko: "설비가 갖추어지다" }, { ja: "最新設備", ko: "최신 설비" }],
    examples: []
  },
  {
    id: 1561, day: 7, level: "N3",
    word: "全体", kana: "ぜんたい", pos: "명사",
    mean: "전체",
    syn: ["全部"],
    collocations: [{ ja: "全体を見る", ko: "전체를 보다" }, { ja: "全体的に", ko: "전체적으로" }],
    examples: []
  },
  {
    id: 1562, day: 7, level: "N3",
    word: "騒音", kana: "そうおん", pos: "명사",
    mean: "소음",
    syn: ["雑音"],
    collocations: [{ ja: "騒音に悩む", ko: "소음에 시달리다" }, { ja: "騒音対策", ko: "소음 대책" }],
    examples: []
  },
  {
    id: 1563, day: 7, level: "N3",
    word: "存在", kana: "そんざい", pos: "명사 (する동사)",
    mean: "존재",
    syn: ["ある"],
    collocations: [{ ja: "存在を知る", ko: "존재를 알다" }, { ja: "存在感", ko: "존재감" }],
    examples: []
  },
  {
    id: 1564, day: 7, level: "N3",
    word: "体験", kana: "たいけん", pos: "명사 (する동사)",
    mean: "체험",
    syn: ["経験"],
    collocations: [{ ja: "体験談", ko: "체험담" }, { ja: "貴重な体験", ko: "귀중한 체험" }],
    examples: []
  },
  {
    id: 1565, day: 7, level: "N3",
    word: "対象", kana: "たいしょう", pos: "명사",
    mean: "대상",
    syn: [],
    collocations: [{ ja: "調査の対象", ko: "조사 대상" }, { ja: "学生を対象にする", ko: "학생을 대상으로 하다" }],
    examples: []
  },
  {
    id: 1566, day: 7, level: "N3",
    word: "代表", kana: "だいひょう", pos: "명사 (する동사)",
    mean: "대표",
    syn: [],
    collocations: [{ ja: "クラスの代表", ko: "반 대표" }, { ja: "代表的な例", ko: "대표적인 예" }],
    examples: []
  },
  {
    id: 1567, day: 7, level: "N3",
    word: "短所", kana: "たんしょ", pos: "명사",
    mean: "단점",
    syn: ["欠点"],
    collocations: [{ ja: "短所を補う", ko: "단점을 보완하다" }, { ja: "長所と短所", ko: "장점과 단점" }],
    examples: []
  },
  {
    id: 1568, day: 7, level: "N3",
    word: "長所", kana: "ちょうしょ", pos: "명사",
    mean: "장점",
    syn: ["利点", "メリット"],
    collocations: [{ ja: "長所を伸ばす", ko: "장점을 살리다" }, { ja: "長所を生かす", ko: "장점을 살리다" }],
    examples: []
  },
  {
    id: 1569, day: 7, level: "N3",
    word: "知識", kana: "ちしき", pos: "명사",
    mean: "지식",
    syn: [],
    collocations: [{ ja: "知識を得る", ko: "지식을 얻다" }, { ja: "専門知識", ko: "전문 지식" }],
    examples: []
  },
  {
    id: 1570, day: 7, level: "N3",
    word: "貯金", kana: "ちょきん", pos: "명사 (する동사)",
    mean: "저금",
    syn: ["蓄え"],
    collocations: [{ ja: "貯金をする", ko: "저금하다" }, { ja: "貯金を下ろす", ko: "저금을 찾다" }],
    examples: []
  },
  {
    id: 1571, day: 7, level: "N3",
    word: "通訳", kana: "つうやく", pos: "명사 (する동사)",
    mean: "통역",
    syn: [],
    collocations: [{ ja: "通訳を頼む", ko: "통역을 부탁하다" }, { ja: "同時通訳", ko: "동시통역" }],
    examples: []
  },
  {
    id: 1572, day: 7, level: "N3",
    word: "抵抗", kana: "ていこう", pos: "명사 (する동사)",
    mean: "저항, 거부감",
    syn: ["反抗"],
    collocations: [{ ja: "抵抗を感じる", ko: "거부감을 느끼다" }, { ja: "抵抗力", ko: "저항력" }],
    examples: []
  },
  {
    id: 1573, day: 7, level: "N3",
    word: "適用", kana: "てきよう", pos: "명사 (する동사)",
    mean: "적용",
    syn: ["当てはめる"],
    collocations: [{ ja: "規則を適用する", ko: "규칙을 적용하다" }, { ja: "保険が適用される", ko: "보험이 적용되다" }],
    examples: []
  },
  // ==========================================
  // [DAY 8] N3 필수 · 80개
  // ==========================================
  {
    id: 1574, day: 8, level: "N3",
    word: "繋がる", kana: "つながる", pos: "동사 (자동사)",
    mean: "이어지다, 연결되다",
    syn: [],
    collocations: [{ ja: "電話が繋がる", ko: "전화가 연결되다" }, { ja: "事故に繋がる", ko: "사고로 이어지다" }],
    examples: []
  },
  {
    id: 1575, day: 8, level: "N3",
    word: "潰れる", kana: "つぶれる", pos: "동사 (자동사)",
    mean: "찌그러지다, 망하다",
    syn: ["倒産する"],
    collocations: [{ ja: "会社が潰れる", ko: "회사가 망하다" }, { ja: "箱が潰れる", ko: "상자가 찌그러지다" }],
    examples: []
  },
  {
    id: 1576, day: 8, level: "N3",
    word: "解ける", kana: "とける", pos: "동사 (자동사)",
    mean: "풀리다",
    syn: [],
    collocations: [{ ja: "誤解が解ける", ko: "오해가 풀리다" }, { ja: "靴ひもが解ける", ko: "신발 끈이 풀리다" }],
    examples: []
  },
  {
    id: 1577, day: 8, level: "N3",
    word: "整う", kana: "ととのう", pos: "동사 (자동사)",
    mean: "갖추어지다, 정돈되다",
    syn: [],
    collocations: [{ ja: "準備が整う", ko: "준비가 갖추어지다" }, { ja: "整った顔", ko: "단정한 얼굴" }],
    examples: []
  },
  {
    id: 1578, day: 8, level: "N3",
    word: "慣れる", kana: "なれる", pos: "동사 (자동사)",
    mean: "익숙해지다",
    syn: [],
    collocations: [{ ja: "仕事に慣れる", ko: "일에 익숙해지다" }, { ja: "生活に慣れる", ko: "생활에 적응하다" }],
    examples: []
  },
  {
    id: 1579, day: 8, level: "N3",
    word: "濡れる", kana: "ぬれる", pos: "동사 (자동사)",
    mean: "젖다",
    syn: [],
    collocations: [{ ja: "雨に濡れる", ko: "비에 젖다" }, { ja: "濡れたタオル", ko: "젖은 수건" }],
    examples: []
  },
  {
    id: 1580, day: 8, level: "N3",
    word: "載せる", kana: "のせる", pos: "동사 (타동사)",
    mean: "싣다, 게재하다",
    syn: ["掲載する"],
    collocations: [{ ja: "記事を載せる", ko: "기사를 싣다" }, { ja: "棚に載せる", ko: "선반에 올려놓다" }],
    examples: []
  },
  {
    id: 1581, day: 8, level: "N3",
    word: "離す", kana: "はなす", pos: "동사 (타동사)",
    mean: "떼다, 놓다",
    syn: [],
    collocations: [{ ja: "目を離す", ko: "눈을 떼다" }, { ja: "手を離す", ko: "손을 놓다" }],
    examples: []
  },
  {
    id: 1582, day: 8, level: "N3",
    word: "浮かぶ", kana: "うかぶ", pos: "동사 (자동사)",
    mean: "뜨다, 떠오르다",
    syn: [],
    collocations: [{ ja: "アイデアが浮かぶ", ko: "아이디어가 떠오르다" }, { ja: "雲が浮かぶ", ko: "구름이 떠 있다" }],
    examples: []
  },
  {
    id: 1583, day: 8, level: "N3",
    word: "曲げる", kana: "まげる", pos: "동사 (타동사)",
    mean: "구부리다, 굽히다",
    syn: [],
    collocations: [{ ja: "膝を曲げる", ko: "무릎을 굽히다" }, { ja: "意見を曲げない", ko: "의견을 굽히지 않다" }],
    examples: []
  },
  {
    id: 1584, day: 8, level: "N3",
    word: "迎える", kana: "むかえる", pos: "동사 (타동사)",
    mean: "맞이하다",
    syn: [],
    collocations: [{ ja: "客を迎える", ko: "손님을 맞이하다" }, { ja: "新年を迎える", ko: "새해를 맞이하다" }],
    examples: []
  },
  {
    id: 1585, day: 8, level: "N3",
    word: "目指す", kana: "めざす", pos: "동사 (타동사)",
    mean: "목표로 하다",
    syn: ["狙う"],
    collocations: [{ ja: "合格を目指す", ko: "합격을 목표로 하다" }, { ja: "頂上を目指す", ko: "정상을 향하다" }],
    examples: []
  },
  {
    id: 1586, day: 8, level: "N3",
    word: "儲かる", kana: "もうかる", pos: "동사 (자동사)",
    mean: "돈이 벌리다",
    syn: ["稼げる"],
    collocations: [{ ja: "商売が儲かる", ko: "장사로 돈이 벌리다" }, { ja: "儲かる仕事", ko: "돈이 되는 일" }],
    examples: []
  },
  {
    id: 1587, day: 8, level: "N3",
    word: "破る", kana: "やぶる", pos: "동사 (타동사)",
    mean: "찢다, 어기다",
    syn: [],
    collocations: [{ ja: "約束を破る", ko: "약속을 어기다" }, { ja: "記録を破る", ko: "기록을 깨다" }],
    examples: []
  },
  {
    id: 1588, day: 8, level: "N3",
    word: "破れる", kana: "やぶれる", pos: "동사 (자동사)",
    mean: "찢어지다",
    syn: [],
    collocations: [{ ja: "紙が破れる", ko: "종이가 찢어지다" }, { ja: "夢が破れる", ko: "꿈이 깨지다" }],
    examples: []
  },
  {
    id: 1589, day: 8, level: "N3",
    word: "揺れる", kana: "ゆれる", pos: "동사 (자동사)",
    mean: "흔들리다",
    syn: [],
    collocations: [{ ja: "地震で家が揺れる", ko: "지진으로 집이 흔들리다" }, { ja: "心が揺れる", ko: "마음이 흔들리다" }],
    examples: []
  },
  {
    id: 1590, day: 8, level: "N3",
    word: "沸く", kana: "わく", pos: "동사 (자동사)",
    mean: "끓다, 들끓다",
    syn: [],
    collocations: [{ ja: "お湯が沸く", ko: "물이 끓다" }, { ja: "会場が沸く", ko: "회장이 들끓다" }],
    examples: []
  },
  {
    id: 1591, day: 8, level: "N3",
    word: "渡す", kana: "わたす", pos: "동사 (타동사)",
    mean: "건네다",
    syn: ["手渡す"],
    collocations: [{ ja: "書類を渡す", ko: "서류를 건네다" }, { ja: "バトンを渡す", ko: "바통을 넘기다" }],
    examples: []
  },
  {
    id: 1592, day: 8, level: "N3",
    word: "受け入れる", kana: "うけいれる", pos: "동사 (타동사)",
    mean: "받아들이다",
    syn: ["認める"],
    collocations: [{ ja: "提案を受け入れる", ko: "제안을 받아들이다" }, { ja: "難民を受け入れる", ko: "난민을 수용하다" }],
    examples: []
  },
  {
    id: 1593, day: 8, level: "N3",
    word: "受け取る", kana: "うけとる", pos: "동사 (타동사)",
    mean: "받다, 수령하다",
    syn: ["受領する"],
    collocations: [{ ja: "荷物を受け取る", ko: "짐을 받다" }, { ja: "好意を受け取る", ko: "호의를 받아들이다" }],
    examples: []
  },
  {
    id: 1594, day: 8, level: "N3",
    word: "思い出す", kana: "おもいだす", pos: "동사 (타동사)",
    mean: "생각해 내다, 떠올리다",
    syn: ["振り返る"],
    collocations: [{ ja: "名前を思い出す", ko: "이름을 떠올리다" }, { ja: "昔を思い出す", ko: "옛날을 떠올리다" }],
    examples: []
  },
  {
    id: 1595, day: 8, level: "N3",
    word: "見直す", kana: "みなおす", pos: "동사 (타동사)",
    mean: "재검토하다, 다시 보다",
    syn: ["再検討する"],
    collocations: [{ ja: "計画を見直す", ko: "계획을 재검토하다" }, { ja: "彼を見直した", ko: "그를 다시 보게 되었다" }],
    examples: []
  },
  {
    id: 1596, day: 8, level: "N3",
    word: "取り入れる", kana: "とりいれる", pos: "동사 (타동사)",
    mean: "도입하다, 받아들이다",
    syn: ["導入する"],
    collocations: [{ ja: "意見を取り入れる", ko: "의견을 받아들이다" }, { ja: "新技術を取り入れる", ko: "신기술을 도입하다" }],
    examples: []
  },
  {
    id: 1597, day: 8, level: "N3",
    word: "話し合う", kana: "はなしあう", pos: "동사 (자동사)",
    mean: "의논하다",
    syn: ["相談する"],
    collocations: [{ ja: "問題を話し合う", ko: "문제를 의논하다" }, { ja: "家族で話し合う", ko: "가족끼리 의논하다" }],
    examples: []
  },
  {
    id: 1598, day: 8, level: "N3",
    word: "引き受ける", kana: "ひきうける", pos: "동사 (타동사)",
    mean: "떠맡다, 인수하다",
    syn: ["担当する"],
    collocations: [{ ja: "仕事を引き受ける", ko: "일을 떠맡다" }, { ja: "責任を引き受ける", ko: "책임을 지다" }],
    examples: []
  },
  {
    id: 1599, day: 8, level: "N3",
    word: "申し訳ない", kana: "もうしわけない", pos: "い형용사",
    mean: "미안하다, 면목 없다",
    syn: ["すまない"],
    collocations: [{ ja: "大変申し訳ない", ko: "대단히 죄송하다" }, { ja: "申し訳ない気持ち", ko: "미안한 마음" }],
    examples: []
  },
  {
    id: 1600, day: 8, level: "N3",
    word: "深刻", kana: "しんこく", pos: "な형용사",
    mean: "심각함",
    syn: ["重大な"],
    collocations: [{ ja: "深刻な問題", ko: "심각한 문제" }, { ja: "深刻な顔", ko: "심각한 얼굴" }],
    examples: []
  },
  {
    id: 1601, day: 8, level: "N3",
    word: "もったいない", kana: "もったいない", pos: "い형용사",
    mean: "아깝다",
    syn: [],
    collocations: [{ ja: "時間がもったいない", ko: "시간이 아깝다" }, { ja: "捨てるのはもったいない", ko: "버리기 아깝다" }],
    examples: []
  },
  {
    id: 1602, day: 8, level: "N3",
    word: "微妙", kana: "びみょう", pos: "な형용사",
    mean: "미묘함, 애매함",
    syn: ["あいまいな"],
    collocations: [{ ja: "微妙な違い", ko: "미묘한 차이" }, { ja: "微妙な味", ko: "애매한 맛" }],
    examples: []
  },
  {
    id: 1603, day: 8, level: "N3",
    word: "だらしない", kana: "だらしない", pos: "い형용사",
    mean: "칠칠치 못하다, 단정치 못하다",
    syn: [],
    collocations: [{ ja: "だらしない服装", ko: "단정치 못한 옷차림" }, { ja: "お金にだらしない", ko: "돈 관리가 엉망이다" }],
    examples: []
  },
  {
    id: 1604, day: 8, level: "N3",
    word: "貴重", kana: "きちょう", pos: "な형용사",
    mean: "귀중함",
    syn: ["大切な"],
    collocations: [{ ja: "貴重な体験", ko: "귀중한 체험" }, { ja: "貴重品", ko: "귀중품" }],
    examples: []
  },
  {
    id: 1605, day: 8, level: "N3",
    word: "物足りない", kana: "ものたりない", pos: "い형용사",
    mean: "어딘가 부족하다, 아쉽다",
    syn: [],
    collocations: [{ ja: "説明が物足りない", ko: "설명이 어딘가 부족하다" }, { ja: "物足りない味", ko: "아쉬운 맛" }],
    examples: []
  },
  {
    id: 1606, day: 8, level: "N3",
    word: "完璧", kana: "かんぺき", pos: "な형용사",
    mean: "완벽함",
    syn: ["完全な"],
    collocations: [{ ja: "完璧な計画", ko: "완벽한 계획" }, { ja: "完璧に覚える", ko: "완벽하게 외우다" }],
    examples: []
  },
  {
    id: 1607, day: 8, level: "N3",
    word: "しつこい", kana: "しつこい", pos: "い형용사",
    mean: "끈질기다, (맛이) 느끼하다",
    syn: [],
    collocations: [{ ja: "しつこい勧誘", ko: "끈질긴 권유" }, { ja: "しつこい味", ko: "느끼한 맛" }],
    examples: []
  },
  {
    id: 1608, day: 8, level: "N3",
    word: "積極的", kana: "せっきょくてき", pos: "な형용사",
    mean: "적극적임",
    syn: ["前向きな"],
    collocations: [{ ja: "積極的な態度", ko: "적극적인 태도" }, { ja: "積極的に参加する", ko: "적극적으로 참가하다" }],
    examples: []
  },
  {
    id: 1609, day: 8, level: "N3",
    word: "みっともない", kana: "みっともない", pos: "い형용사",
    mean: "꼴사납다, 보기 흉하다",
    syn: ["情けない"],
    collocations: [{ ja: "みっともない格好", ko: "꼴사나운 모습" }, { ja: "人前でみっともない", ko: "남 앞에서 창피하다" }],
    examples: []
  },
  {
    id: 1610, day: 8, level: "N3",
    word: "消極的", kana: "しょうきょくてき", pos: "な형용사",
    mean: "소극적임",
    syn: ["控えめな"],
    collocations: [{ ja: "消極的な姿勢", ko: "소극적인 자세" }, { ja: "消極的に反対する", ko: "소극적으로 반대하다" }],
    examples: []
  },
  {
    id: 1611, day: 8, level: "N3",
    word: "サイン", kana: "サイン", pos: "외래어",
    mean: "서명, 신호 (sign)",
    syn: ["署名", "合図"],
    collocations: [{ ja: "書類にサインする", ko: "서류에 서명하다" }],
    examples: []
  },
  {
    id: 1612, day: 8, level: "N3",
    word: "ショック", kana: "ショック", pos: "외래어",
    mean: "충격 (shock)",
    syn: ["衝撃"],
    collocations: [{ ja: "ショックを受ける", ko: "충격을 받다" }],
    examples: []
  },
  {
    id: 1613, day: 8, level: "N3",
    word: "テーマ", kana: "テーマ", pos: "외래어",
    mean: "주제 (Thema)",
    syn: ["主題"],
    collocations: [{ ja: "論文のテーマ", ko: "논문 주제" }],
    examples: []
  },
  {
    id: 1614, day: 8, level: "N3",
    word: "とうとう", kana: "とうとう", pos: "부사",
    mean: "드디어, 끝내",
    syn: ["ついに"],
    collocations: [{ ja: "とうとう来なかった", ko: "끝내 오지 않았다" }],
    examples: [{ type: "ex", label: "예문", ja: "とうとう雨が降り出した。", ko: "드디어 비가 내리기 시작했다." }]
  },
  {
    id: 1615, day: 8, level: "N3",
    word: "突然", kana: "とつぜん", pos: "부사",
    mean: "갑자기",
    syn: ["いきなり", "急に"],
    collocations: [{ ja: "突然泣き出す", ko: "갑자기 울기 시작하다" }],
    examples: [{ type: "ex", label: "예문", ja: "突然電気が消えた。", ko: "갑자기 불이 꺼졌다." }]
  },
  {
    id: 1616, day: 8, level: "N3",
    word: "どうせ", kana: "どうせ", pos: "부사",
    mean: "어차피",
    syn: ["結局"],
    collocations: [{ ja: "どうせ無理だ", ko: "어차피 무리다" }],
    examples: [{ type: "ex", label: "예문", ja: "どうせやるなら、楽しくやろう。", ko: "어차피 할 거라면 즐겁게 하자." }]
  },
  {
    id: 1617, day: 8, level: "N3",
    word: "何となく", kana: "なんとなく", pos: "부사",
    mean: "왠지, 어쩐지",
    syn: ["どことなく"],
    collocations: [{ ja: "何となく不安だ", ko: "왠지 불안하다" }],
    examples: [{ type: "ex", label: "예문", ja: "何となく元気がないように見える。", ko: "어쩐지 기운이 없어 보인다." }]
  },
  {
    id: 1618, day: 8, level: "N3",
    word: "一体", kana: "いったい", pos: "부사",
    mean: "도대체",
    syn: ["そもそも"],
    collocations: [{ ja: "一体何があったのか", ko: "도대체 무슨 일이 있었나" }],
    examples: [{ type: "ex", label: "예문", ja: "一体誰がこんなことをしたんだ。", ko: "도대체 누가 이런 짓을 한 거야." }]
  },
  {
    id: 1619, day: 8, level: "N3",
    word: "益々", kana: "ますます", pos: "부사",
    mean: "점점 더",
    syn: ["一層"],
    collocations: [{ ja: "益々寒くなる", ko: "점점 더 추워지다" }],
    examples: [{ type: "ex", label: "예문", ja: "物価は益々上がっている。", ko: "물가는 점점 더 오르고 있다." }]
  },
  {
    id: 1620, day: 8, level: "N3",
    word: "直ちに", kana: "ただちに", pos: "부사",
    mean: "즉시, 곧",
    syn: ["すぐに"],
    collocations: [{ ja: "直ちに避難する", ko: "즉시 대피하다" }],
    examples: [{ type: "ex", label: "예문", ja: "異常があれば直ちに報告すること。", ko: "이상이 있으면 즉시 보고할 것." }]
  },
  {
    id: 1621, day: 8, level: "N3",
    word: "少しも", kana: "すこしも", pos: "부사",
    mean: "조금도 (~않다)",
    syn: ["ちっとも"],
    collocations: [{ ja: "少しも分からない", ko: "조금도 모르겠다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の話は少しも面白くなかった。", ko: "그의 이야기는 조금도 재미없었다." }]
  },
  {
    id: 1622, day: 8, level: "N3",
    word: "たっぷり", kana: "たっぷり", pos: "부사 (의성어·의태어)",
    mean: "듬뿍, 충분히",
    syn: ["十分に"],
    collocations: [{ ja: "時間はたっぷりある", ko: "시간은 충분히 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "野菜がたっぷり入ったスープ。", ko: "채소가 듬뿍 들어간 수프." }]
  },
  {
    id: 1623, day: 8, level: "N3",
    word: "のんびり", kana: "のんびり", pos: "부사 (의성어·의태어)",
    mean: "느긋하게, 한가로이",
    syn: ["ゆっくり"],
    collocations: [{ ja: "のんびり過ごす", ko: "느긋하게 지내다" }],
    examples: [{ type: "ex", label: "예문", ja: "週末は温泉でのんびりした。", ko: "주말에는 온천에서 느긋하게 쉬었다." }]
  },
  {
    id: 1624, day: 8, level: "N3",
    word: "ごろごろ", kana: "ごろごろ", pos: "부사 (의성어·의태어)",
    mean: "빈둥빈둥, 데굴데굴",
    syn: ["ぶらぶら"],
    collocations: [{ ja: "家でごろごろする", ko: "집에서 뒹굴뒹굴하다" }],
    examples: [{ type: "ex", label: "예문", ja: "休みの日は一日中ごろごろしていた。", ko: "쉬는 날에는 하루 종일 뒹굴었다." }]
  },
  {
    id: 1625, day: 8, level: "N3",
    word: "または", kana: "または", pos: "접속사",
    mean: "또는",
    syn: ["あるいは", "もしくは"],
    collocations: [{ ja: "または", ko: "또는" }],
    examples: [{ type: "ex", label: "예문", ja: "黒または青のペンで書いてください。", ko: "검정 또는 파란 펜으로 써 주세요." }]
  },
  {
    id: 1626, day: 8, level: "N3",
    word: "伝統", kana: "でんとう", pos: "명사",
    mean: "전통",
    syn: [],
    collocations: [{ ja: "伝統を守る", ko: "전통을 지키다" }, { ja: "伝統的な行事", ko: "전통 행사" }],
    examples: []
  },
  {
    id: 1627, day: 8, level: "N3",
    word: "得点", kana: "とくてん", pos: "명사 (する동사)",
    mean: "득점",
    syn: ["点数"],
    collocations: [{ ja: "得点を挙げる", ko: "득점하다" }, { ja: "得点差", ko: "점수 차" }],
    examples: []
  },
  {
    id: 1628, day: 8, level: "N3",
    word: "独立", kana: "どくりつ", pos: "명사 (する동사)",
    mean: "독립",
    syn: ["自立"],
    collocations: [{ ja: "親から独立する", ko: "부모로부터 독립하다" }, { ja: "独立国", ko: "독립국" }],
    examples: []
  },
  {
    id: 1629, day: 8, level: "N3",
    word: "内緒", kana: "ないしょ", pos: "명사",
    mean: "비밀",
    syn: ["秘密"],
    collocations: [{ ja: "内緒にする", ko: "비밀로 하다" }, { ja: "内緒話", ko: "비밀 이야기" }],
    examples: []
  },
  {
    id: 1630, day: 8, level: "N3",
    word: "納得", kana: "なっとく", pos: "명사 (する동사)",
    mean: "납득",
    syn: ["理解する"],
    collocations: [{ ja: "説明に納得する", ko: "설명에 납득하다" }, { ja: "納得がいかない", ko: "납득이 안 되다" }],
    examples: []
  },
  {
    id: 1631, day: 8, level: "N3",
    word: "値段", kana: "ねだん", pos: "명사",
    mean: "가격",
    syn: ["価格"],
    collocations: [{ ja: "値段が高い", ko: "가격이 비싸다" }, { ja: "値段を下げる", ko: "가격을 내리다" }],
    examples: []
  },
  {
    id: 1632, day: 8, level: "N3",
    word: "能力", kana: "のうりょく", pos: "명사",
    mean: "능력",
    syn: ["力"],
    collocations: [{ ja: "能力を発揮する", ko: "능력을 발휘하다" }, { ja: "能力がある", ko: "능력이 있다" }],
    examples: []
  },
  {
    id: 1633, day: 8, level: "N3",
    word: "範囲", kana: "はんい", pos: "명사",
    mean: "범위",
    syn: [],
    collocations: [{ ja: "試験範囲", ko: "시험 범위" }, { ja: "範囲を広げる", ko: "범위를 넓히다" }],
    examples: []
  },
  {
    id: 1634, day: 8, level: "N3",
    word: "否定", kana: "ひてい", pos: "명사 (する동사)",
    mean: "부정",
    syn: ["打ち消す"],
    collocations: [{ ja: "うわさを否定する", ko: "소문을 부정하다" }, { ja: "否定的な意見", ko: "부정적인 의견" }],
    examples: []
  },
  {
    id: 1635, day: 8, level: "N3",
    word: "秘密", kana: "ひみつ", pos: "명사",
    mean: "비밀",
    syn: ["内緒"],
    collocations: [{ ja: "秘密を守る", ko: "비밀을 지키다" }, { ja: "秘密を漏らす", ko: "비밀을 누설하다" }],
    examples: []
  },
  {
    id: 1636, day: 8, level: "N3",
    word: "費用", kana: "ひよう", pos: "명사",
    mean: "비용",
    syn: ["コスト"],
    collocations: [{ ja: "費用がかかる", ko: "비용이 들다" }, { ja: "費用を負担する", ko: "비용을 부담하다" }],
    examples: []
  },
  {
    id: 1637, day: 8, level: "N3",
    word: "不満", kana: "ふまん", pos: "명사",
    mean: "불만",
    syn: ["文句"],
    collocations: [{ ja: "不満を言う", ko: "불만을 말하다" }, { ja: "不満がたまる", ko: "불만이 쌓이다" }],
    examples: []
  },
  {
    id: 1638, day: 8, level: "N3",
    word: "平均", kana: "へいきん", pos: "명사 (する동사)",
    mean: "평균",
    syn: [],
    collocations: [{ ja: "平均点", ko: "평균 점수" }, { ja: "平均を上回る", ko: "평균을 웃돌다" }],
    examples: []
  },
  {
    id: 1639, day: 8, level: "N3",
    word: "貿易", kana: "ぼうえき", pos: "명사 (する동사)",
    mean: "무역",
    syn: [],
    collocations: [{ ja: "貿易会社", ko: "무역 회사" }, { ja: "自由貿易", ko: "자유 무역" }],
    examples: []
  },
  {
    id: 1640, day: 8, level: "N3",
    word: "方針", kana: "ほうしん", pos: "명사",
    mean: "방침",
    syn: ["方向"],
    collocations: [{ ja: "方針を決める", ko: "방침을 정하다" }, { ja: "会社の方針", ko: "회사 방침" }],
    examples: []
  },
  {
    id: 1641, day: 8, level: "N3",
    word: "募集", kana: "ぼしゅう", pos: "명사 (する동사)",
    mean: "모집",
    syn: ["募る"],
    collocations: [{ ja: "社員を募集する", ko: "사원을 모집하다" }, { ja: "募集要項", ko: "모집 요강" }],
    examples: []
  },
  {
    id: 1642, day: 8, level: "N3",
    word: "無視", kana: "むし", pos: "명사 (する동사)",
    mean: "무시",
    syn: [],
    collocations: [{ ja: "信号を無視する", ko: "신호를 무시하다" }, { ja: "意見を無視する", ko: "의견을 무시하다" }],
    examples: []
  },
  {
    id: 1643, day: 8, level: "N3",
    word: "命令", kana: "めいれい", pos: "명사 (する동사)",
    mean: "명령",
    syn: ["指示"],
    collocations: [{ ja: "命令に従う", ko: "명령에 따르다" }, { ja: "命令を出す", ko: "명령을 내리다" }],
    examples: []
  },
  {
    id: 1644, day: 8, level: "N3",
    word: "面接", kana: "めんせつ", pos: "명사 (する동사)",
    mean: "면접",
    syn: [],
    collocations: [{ ja: "面接を受ける", ko: "면접을 보다" }, { ja: "面接官", ko: "면접관" }],
    examples: []
  },
  {
    id: 1645, day: 8, level: "N3",
    word: "要求", kana: "ようきゅう", pos: "명사 (する동사)",
    mean: "요구",
    syn: ["求める"],
    collocations: [{ ja: "要求に応える", ko: "요구에 응하다" }, { ja: "賃上げを要求する", ko: "임금 인상을 요구하다" }],
    examples: []
  },
  {
    id: 1646, day: 8, level: "N3",
    word: "要素", kana: "ようそ", pos: "명사",
    mean: "요소",
    syn: ["成分"],
    collocations: [{ ja: "重要な要素", ko: "중요한 요소" }, { ja: "不安要素", ko: "불안 요소" }],
    examples: []
  },
  {
    id: 1647, day: 8, level: "N3",
    word: "様子", kana: "ようす", pos: "명사",
    mean: "모습, 상황",
    syn: ["状態"],
    collocations: [{ ja: "様子を見る", ko: "상황을 지켜보다" }, { ja: "様子がおかしい", ko: "모습이 이상하다" }],
    examples: []
  },
  {
    id: 1648, day: 8, level: "N3",
    word: "余裕", kana: "よゆう", pos: "명사",
    mean: "여유",
    syn: ["ゆとり"],
    collocations: [{ ja: "時間に余裕がある", ko: "시간에 여유가 있다" }, { ja: "余裕を持つ", ko: "여유를 갖다" }],
    examples: []
  },
  {
    id: 1649, day: 8, level: "N3",
    word: "理想", kana: "りそう", pos: "명사",
    mean: "이상",
    syn: [],
    collocations: [{ ja: "理想の家", ko: "이상적인 집" }, { ja: "理想と現実", ko: "이상과 현실" }],
    examples: []
  },
  {
    id: 1650, day: 8, level: "N3",
    word: "留守", kana: "るす", pos: "명사",
    mean: "부재, 집을 비움",
    syn: ["不在"],
    collocations: [{ ja: "留守にする", ko: "집을 비우다" }, { ja: "留守番", ko: "집 보기" }],
    examples: []
  },
  {
    id: 1651, day: 8, level: "N3",
    word: "例外", kana: "れいがい", pos: "명사",
    mean: "예외",
    syn: [],
    collocations: [{ ja: "例外を認める", ko: "예외를 인정하다" }, { ja: "例外なく", ko: "예외 없이" }],
    examples: []
  },
  {
    id: 1652, day: 8, level: "N3",
    word: "冷房", kana: "れいぼう", pos: "명사 (する동사)",
    mean: "냉방",
    syn: [],
    collocations: [{ ja: "冷房をつける", ko: "냉방을 켜다" }, { ja: "冷房が効く", ko: "냉방이 잘 되다" }],
    examples: []
  },
  {
    id: 1653, day: 8, level: "N3",
    word: "労働", kana: "ろうどう", pos: "명사 (する동사)",
    mean: "노동",
    syn: ["仕事"],
    collocations: [{ ja: "労働時間", ko: "노동 시간" }, { ja: "労働者", ko: "노동자" }],
    examples: []
  },
  // ==========================================
  // [DAY 9] N2 필수 + N1 · 66개
  // ==========================================
  {
    id: 1654, day: 9, level: "N2",
    word: "溢れる", kana: "あふれる", pos: "동사 (자동사)",
    mean: "넘치다",
    syn: ["満ちる"],
    collocations: [{ ja: "涙が溢れる", ko: "눈물이 넘치다" }, { ja: "自信に溢れる", ko: "자신감이 넘치다" }],
    examples: [{ type: "ex", label: "예문", ja: "川の水が溢れて、道路が通れなくなった。", ko: "강물이 넘쳐 도로를 지날 수 없게 되었다." }]
  },
  {
    id: 1655, day: 9, level: "N2",
    word: "誤る", kana: "あやまる", pos: "동사 (타동사)",
    mean: "그르치다, 잘못하다",
    syn: ["間違える"],
    collocations: [{ ja: "判断を誤る", ko: "판단을 그르치다" }, { ja: "操作を誤る", ko: "조작을 잘못하다" }],
    examples: [{ type: "ex", label: "예문", ja: "運転操作を誤って、事故を起こした。", ko: "운전 조작을 잘못해 사고를 냈다." }]
  },
  {
    id: 1656, day: 9, level: "N2",
    word: "改める", kana: "あらためる", pos: "동사 (타동사)",
    mean: "고치다, 새롭게 하다",
    syn: ["直す", "改善する"],
    collocations: [{ ja: "規則を改める", ko: "규칙을 고치다" }, { ja: "態度を改める", ko: "태도를 고치다" }],
    examples: [{ type: "ex", label: "예문", ja: "これまでのやり方を改める必要がある。", ko: "지금까지의 방식을 고칠 필요가 있다." }]
  },
  {
    id: 2, day: 9, level: "N2",
    word: "怠る", kana: "おこたる", pos: "동사 (5단 타동사)",
    mean: "게을리하다, 소홀히 하다",
    syn: ["なまける", "おろそかにする"],
    collocations: [{ ja: "注意を怠る", ko: "주의를 게을리하다" }, { ja: "努力を怠る", ko: "노력을 소홀히 하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "日々の安全点検を怠ると、取り返しのつかない重大な事故につながる。", ko: "매일의 안전 점검을 소홀히 하면 돌이킬 수 없는 중대한 사고로 이어진다." }]
  },
  {
    id: 1657, day: 9, level: "N2",
    word: "慌てる", kana: "あわてる", pos: "동사 (자동사)",
    mean: "당황하다, 허둥대다",
    syn: ["うろたえる"],
    collocations: [{ ja: "慌てて家を出る", ko: "허둥지둥 집을 나서다" }, { ja: "慌てずに行動する", ko: "당황하지 않고 행동하다" }],
    examples: [{ type: "ex", label: "예문", ja: "寝坊して、慌てて駅まで走った。", ko: "늦잠을 자서 허둥지둥 역까지 달렸다." }]
  },
  {
    id: 1658, day: 9, level: "N2",
    word: "生かす", kana: "いかす", pos: "동사 (타동사)",
    mean: "살리다, 활용하다",
    syn: ["活用する"],
    collocations: [{ ja: "経験を生かす", ko: "경험을 살리다" }, { ja: "才能を生かす", ko: "재능을 살리다" }],
    examples: [{ type: "ex", label: "예문", ja: "留学の経験を生かして、通訳の仕事に就いた。", ko: "유학 경험을 살려 통역 일을 하게 되었다." }]
  },
  {
    id: 1659, day: 9, level: "N2",
    word: "傷む", kana: "いたむ", pos: "동사 (자동사)",
    mean: "상하다, 손상되다",
    syn: ["腐る"],
    collocations: [{ ja: "果物が傷む", ko: "과일이 상하다" }, { ja: "家が傷む", ko: "집이 낡다" }],
    examples: [{ type: "ex", label: "예문", ja: "夏は食べ物が傷みやすい。", ko: "여름에는 음식이 상하기 쉽다." }]
  },
  {
    id: 1660, day: 9, level: "N2",
    word: "浮く", kana: "うく", pos: "동사 (자동사)",
    mean: "뜨다, 남다",
    syn: ["浮かぶ"],
    collocations: [{ ja: "水に浮く", ko: "물에 뜨다" }, { ja: "交通費が浮く", ko: "교통비가 굳다" }],
    examples: [{ type: "ex", label: "예문", ja: "自転車で通えば、交通費が浮く。", ko: "자전거로 다니면 교통비가 굳는다." }]
  },
  {
    id: 1661, day: 9, level: "N2",
    word: "受け持つ", kana: "うけもつ", pos: "동사 (타동사)",
    mean: "담당하다, 맡다",
    syn: ["担当する"],
    collocations: [{ ja: "クラスを受け持つ", ko: "반을 담당하다" }, { ja: "仕事を受け持つ", ko: "일을 맡다" }],
    examples: [{ type: "ex", label: "예문", ja: "今年は三年生のクラスを受け持っている。", ko: "올해는 3학년 반을 담당하고 있다." }]
  },
  {
    id: 3, day: 9, level: "N2",
    word: "偏る", kana: "かたよる", pos: "동사 (5단 자동사)",
    mean: "치우치다, 편중되다",
    syn: ["片寄る", "偏向する"],
    collocations: [{ ja: "栄養が偏る", ko: "영양이 한쪽으로 치우치다" }, { ja: "考えが偏る", ko: "생각이 편향되다" }],
    examples: [{ type: "kun", label: "훈독", ja: "栄養バランスが偏らないように、様々な食材をバランスよく摂る。", ko: "영양 밸런스가 한쪽으로 치우치지 않도록 다양한 식재료를 골고루 섭취한다." }, { type: "on", label: "음독", ja: "先入観や偏見(へんけん)を持たずに、客観的な事実を見るべきだ。", ko: "선입견이나 편견을 갖지 않고 객관적인 사실을 보아야 한다." }]
  },
  {
    id: 1662, day: 9, level: "N2",
    word: "打ち明ける", kana: "うちあける", pos: "동사 (타동사)",
    mean: "털어놓다",
    syn: ["告白する"],
    collocations: [{ ja: "悩みを打ち明ける", ko: "고민을 털어놓다" }, { ja: "秘密を打ち明ける", ko: "비밀을 털어놓다" }],
    examples: [{ type: "ex", label: "예문", ja: "親友にだけ本当の気持ちを打ち明けた。", ko: "절친에게만 진짜 마음을 털어놓았다." }]
  },
  {
    id: 1663, day: 9, level: "N2",
    word: "打ち合わせる", kana: "うちあわせる", pos: "동사 (타동사)",
    mean: "협의하다, 미리 의논하다",
    syn: ["相談する"],
    collocations: [{ ja: "日程を打ち合わせる", ko: "일정을 협의하다" }, { ja: "事前に打ち合わせる", ko: "사전에 협의하다" }],
    examples: [{ type: "ex", label: "예문", ja: "会議の前に、担当者と内容を打ち合わせた。", ko: "회의 전에 담당자와 내용을 협의했다." }]
  },
  {
    id: 1664, day: 9, level: "N2",
    word: "うつむく", kana: "うつむく", pos: "동사 (자동사)",
    mean: "고개를 숙이다",
    syn: ["下を向く"],
    collocations: [{ ja: "恥ずかしくてうつむく", ko: "부끄러워 고개를 숙이다" }],
    examples: [{ type: "ex", label: "예문", ja: "叱られた子どもは黙ってうつむいていた。", ko: "꾸중을 들은 아이는 말없이 고개를 숙이고 있었다." }]
  },
  {
    id: 1665, day: 9, level: "N2",
    word: "哀れ", kana: "あわれ", pos: "な형용사",
    mean: "불쌍함, 가련함",
    syn: ["気の毒な"],
    collocations: [{ ja: "哀れな姿", ko: "가련한 모습" }],
    examples: [{ type: "ex", label: "예문", ja: "雨に濡れた子猫が哀れだった。", ko: "비에 젖은 새끼 고양이가 불쌍했다." }]
  },
  {
    id: 1666, day: 9, level: "N2",
    word: "相応しい", kana: "ふさわしい", pos: "い형용사",
    mean: "어울리다, 걸맞다",
    syn: ["似合う", "適切な"],
    collocations: [{ ja: "場にふさわしい服装", ko: "자리에 어울리는 복장" }],
    examples: [{ type: "ex", label: "예문", ja: "彼こそリーダーにふさわしい人物だ。", ko: "그야말로 리더에 걸맞은 인물이다." }]
  },
  {
    id: 19, day: 9, level: "N2",
    word: "曖昧", kana: "あいまい", pos: "な형용사",
    mean: "애매함, 모호함",
    syn: ["あやふや", "不明確"],
    collocations: [{ ja: "曖昧な態度", ko: "애매모호한 태도" }, { ja: "曖昧な返答", ko: "흐리멍덩한 대답" }],
    examples: [{ type: "on", label: "음독", ja: "契約時の曖昧な返答や表現は、将来の法的なトラブルを招く恐れがある。", ko: "계약 시의 애매한 답변이나 표현은 장래 법적 분쟁을 부를 우려가 있다." }]
  },
  {
    id: 1667, day: 9, level: "N2",
    word: "安易", kana: "あんい", pos: "な형용사",
    mean: "안이함, 쉽게 생각함",
    syn: ["軽率な"],
    collocations: [{ ja: "安易な考え", ko: "안이한 생각" }],
    examples: [{ type: "ex", label: "예문", ja: "安易に人を信じてはいけない。", ko: "쉽게 남을 믿어서는 안 된다." }]
  },
  {
    id: 1668, day: 9, level: "N2",
    word: "意地悪", kana: "いじわる", pos: "な형용사",
    mean: "심술궂음",
    syn: ["いじわるな"],
    collocations: [{ ja: "意地悪な人", ko: "심술궂은 사람" }, { ja: "意地悪をする", ko: "심술을 부리다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女はわざと意地悪な質問をした。", ko: "그녀는 일부러 심술궂은 질문을 했다." }]
  },
  {
    id: 1669, day: 9, level: "N2",
    word: "危うい", kana: "あやうい", pos: "い형용사",
    mean: "위태롭다, 위험하다",
    syn: ["危ない"],
    collocations: [{ ja: "危うく遅刻するところだった", ko: "하마터면 지각할 뻔했다" }],
    examples: [{ type: "ex", label: "예문", ja: "危うく事故に遭うところだった。", ko: "하마터면 사고를 당할 뻔했다." }]
  },
  {
    id: 1670, day: 9, level: "N2",
    word: "一般的", kana: "いっぱんてき", pos: "な형용사",
    mean: "일반적임",
    syn: ["普通の"],
    collocations: [{ ja: "一般的な考え", ko: "일반적인 생각" }],
    examples: [{ type: "ex", label: "예문", ja: "一般的に言って、日本人は時間に正確だ。", ko: "일반적으로 말해 일본인은 시간을 잘 지킨다." }]
  },
  {
    id: 1671, day: 9, level: "N2",
    word: "アピール", kana: "アピール", pos: "외래어",
    mean: "어필, 호소 (appeal)",
    syn: ["訴える"],
    collocations: [{ ja: "自分をアピールする", ko: "자신을 어필하다" }],
    examples: [{ type: "ex", label: "예문", ja: "面接で自分の長所をアピールした。", ko: "면접에서 자신의 장점을 어필했다." }]
  },
  {
    id: 1672, day: 9, level: "N2",
    word: "アマチュア", kana: "アマチュア", pos: "외래어",
    mean: "아마추어 (amateur)",
    syn: ["素人"],
    collocations: [{ ja: "アマチュア選手", ko: "아마추어 선수" }],
    examples: [{ type: "ex", label: "예문", ja: "アマチュアとは思えない腕前だ。", ko: "아마추어라고는 생각되지 않는 솜씨다." }]
  },
  {
    id: 1673, day: 9, level: "N2",
    word: "アレルギー", kana: "アレルギー", pos: "외래어",
    mean: "알레르기 (Allergie)",
    syn: [],
    collocations: [{ ja: "花粉アレルギー", ko: "꽃가루 알레르기" }],
    examples: [{ type: "ex", label: "예문", ja: "卵アレルギーがあるので注意している。", ko: "달걀 알레르기가 있어서 조심하고 있다." }]
  },
  {
    id: 1674, day: 9, level: "N2",
    word: "あくまで(も)", kana: "あくまで", pos: "부사",
    mean: "어디까지나, 끝까지",
    syn: ["最後まで"],
    collocations: [{ ja: "あくまで反対する", ko: "끝까지 반대하다" }],
    examples: [{ type: "ex", label: "예문", ja: "これはあくまでも私個人の意見です。", ko: "이것은 어디까지나 제 개인적인 의견입니다." }]
  },
  {
    id: 1675, day: 9, level: "N2",
    word: "あらかじめ", kana: "あらかじめ", pos: "부사",
    mean: "미리, 사전에",
    syn: ["前もって", "事前に"],
    collocations: [{ ja: "あらかじめ準備する", ko: "미리 준비하다" }],
    examples: [{ type: "ex", label: "예문", ja: "欠席する場合は、あらかじめ連絡してください。", ko: "결석할 경우에는 미리 연락해 주세요." }]
  },
  {
    id: 1676, day: 9, level: "N2",
    word: "あれこれ", kana: "あれこれ", pos: "부사",
    mean: "이것저것",
    syn: ["いろいろ"],
    collocations: [{ ja: "あれこれ考える", ko: "이것저것 생각하다" }],
    examples: [{ type: "ex", label: "예문", ja: "あれこれ悩んだ末に、進学を決めた。", ko: "이것저것 고민한 끝에 진학을 결정했다." }]
  },
  {
    id: 1677, day: 9, level: "N2",
    word: "いずれ", kana: "いずれ", pos: "부사",
    mean: "머지않아, 언젠가는",
    syn: ["そのうち"],
    collocations: [{ ja: "いずれ分かる", ko: "언젠가는 알게 된다" }],
    examples: [{ type: "ex", label: "예문", ja: "いずれまたお会いしましょう。", ko: "머지않아 또 만납시다." }]
  },
  {
    id: 1678, day: 9, level: "N2",
    word: "一度に", kana: "いちどに", pos: "부사",
    mean: "한꺼번에",
    syn: ["一気に"],
    collocations: [{ ja: "一度に覚える", ko: "한꺼번에 외우다" }],
    examples: [{ type: "ex", label: "예문", ja: "一度にたくさん食べると体に悪い。", ko: "한꺼번에 많이 먹으면 몸에 나쁘다." }]
  },
  {
    id: 1679, day: 9, level: "N2",
    word: "うとうと", kana: "うとうと", pos: "부사 (의성어·의태어)",
    mean: "꾸벅꾸벅 (조는 모양)",
    syn: ["居眠りする"],
    collocations: [{ ja: "うとうとする", ko: "꾸벅꾸벅 졸다" }],
    examples: [{ type: "ex", label: "예문", ja: "電車の中でついうとうとしてしまった。", ko: "전철 안에서 그만 꾸벅꾸벅 졸고 말았다." }]
  },
  {
    id: 1680, day: 9, level: "N2",
    word: "うんざり", kana: "うんざり", pos: "부사 (의성어·의태어)",
    mean: "진절머리 나는 모양",
    syn: ["飽き飽きする"],
    collocations: [{ ja: "うんざりする", ko: "진절머리가 나다" }],
    examples: [{ type: "ex", label: "예문", ja: "毎日同じ話を聞かされてうんざりした。", ko: "매일 같은 이야기를 들어서 질려 버렸다." }]
  },
  {
    id: 1681, day: 9, level: "N2",
    word: "あるいは", kana: "あるいは", pos: "접속사",
    mean: "혹은, 또는",
    syn: ["または", "もしくは"],
    collocations: [{ ja: "あるいは", ko: "혹은" }],
    examples: [{ type: "ex", label: "예문", ja: "電話、あるいはメールで連絡してください。", ko: "전화 혹은 메일로 연락해 주세요." }]
  },
  {
    id: 1682, day: 9, level: "N2",
    word: "再〜", kana: "さい", pos: "접두어",
    mean: "재~, 다시 ~",
    syn: ["もう一度"],
    collocations: [{ ja: "再確認", ko: "재확인" }, { ja: "再開発", ko: "재개발" }, { ja: "再利用", ko: "재이용" }],
    examples: []
  },
  {
    id: 1683, day: 9, level: "N2",
    word: "非〜", kana: "ひ", pos: "접두어",
    mean: "비~ (~이 아님)",
    syn: [],
    collocations: [{ ja: "非常識", ko: "비상식" }, { ja: "非公式", ko: "비공식" }, { ja: "非常口", ko: "비상구" }],
    examples: []
  },
  {
    id: 1684, day: 9, level: "N2",
    word: "不況", kana: "ふきょう", pos: "명사",
    mean: "불황",
    syn: ["不景気"],
    collocations: [{ ja: "不況が続く", ko: "불황이 계속되다" }],
    examples: [{ type: "ex", label: "예문", ja: "不況で多くの会社が倒産した。", ko: "불황으로 많은 회사가 도산했다." }]
  },
  {
    id: 1685, day: 9, level: "N2",
    word: "景気", kana: "けいき", pos: "명사",
    mean: "경기",
    syn: ["経済状況"],
    collocations: [{ ja: "景気が回復する", ko: "경기가 회복되다" }, { ja: "景気が悪い", ko: "경기가 나쁘다" }],
    examples: [{ type: "ex", label: "예문", ja: "景気が良くなる兆しが見えてきた。", ko: "경기가 좋아질 조짐이 보이기 시작했다." }]
  },
  {
    id: 1686, day: 9, level: "N2",
    word: "物価", kana: "ぶっか", pos: "명사",
    mean: "물가",
    syn: [],
    collocations: [{ ja: "物価が上がる", ko: "물가가 오르다" }, { ja: "物価の安定", ko: "물가 안정" }],
    examples: [{ type: "ex", label: "예문", ja: "都会は地方より物価が高い。", ko: "도시는 지방보다 물가가 비싸다." }]
  },
  {
    id: 41, day: 9, level: "N2",
    word: "把握", kana: "はあく", pos: "명사",
    mean: "파악, 확실한 이해",
    syn: ["理解する", "つかむ"],
    collocations: [{ ja: "現状を把握する", ko: "현재 상황을 파악하다" }, { ja: "実態の把握", ko: "실태 파악" }],
    examples: [{ type: "on", label: "음독", ja: "問題の全体像と本質を正確に把握することが、迅速な解決に向けた第一歩だ。", ko: "문제의 전체 윤곽과 본질을 정확하게 파악하는 것이 신속한 해결을 향한 첫걸음이다." }]
  },
  {
    id: 1687, day: 9, level: "N2",
    word: "税金", kana: "ぜいきん", pos: "명사",
    mean: "세금",
    syn: ["税"],
    collocations: [{ ja: "税金を納める", ko: "세금을 내다" }, { ja: "税金がかかる", ko: "세금이 붙다" }],
    examples: [{ type: "ex", label: "예문", ja: "この価格には税金が含まれています。", ko: "이 가격에는 세금이 포함되어 있습니다." }]
  },
  {
    id: 1688, day: 9, level: "N2",
    word: "赤字", kana: "あかじ", pos: "명사",
    mean: "적자",
    syn: ["損失"],
    collocations: [{ ja: "赤字になる", ko: "적자가 되다" }, { ja: "赤字経営", ko: "적자 경영" }],
    examples: [{ type: "ex", label: "예문", ja: "会社は三年連続の赤字だ。", ko: "회사는 3년 연속 적자다." }]
  },
  {
    id: 1689, day: 9, level: "N2",
    word: "黒字", kana: "くろじ", pos: "명사",
    mean: "흑자",
    syn: ["利益"],
    collocations: [{ ja: "黒字に転じる", ko: "흑자로 돌아서다" }],
    examples: [{ type: "ex", label: "예문", ja: "今年はようやく黒字になった。", ko: "올해는 겨우 흑자가 되었다." }]
  },
  {
    id: 1690, day: 9, level: "N2",
    word: "消費", kana: "しょうひ", pos: "명사 (する동사)",
    mean: "소비",
    syn: ["使う"],
    collocations: [{ ja: "消費を抑える", ko: "소비를 줄이다" }, { ja: "電力消費", ko: "전력 소비" }],
    examples: [{ type: "ex", label: "예문", ja: "個人消費が伸びている。", ko: "개인 소비가 늘고 있다." }]
  },
  {
    id: 1691, day: 9, level: "N2",
    word: "消費者", kana: "しょうひしゃ", pos: "명사",
    mean: "소비자",
    syn: ["客"],
    collocations: [{ ja: "消費者の声", ko: "소비자의 목소리" }],
    examples: [{ type: "ex", label: "예문", ja: "消費者のニーズに応える商品を作る。", ko: "소비자의 요구에 부응하는 상품을 만든다." }]
  },
  {
    id: 1692, day: 9, level: "N2",
    word: "製造", kana: "せいぞう", pos: "명사 (する동사)",
    mean: "제조",
    syn: ["生産"],
    collocations: [{ ja: "製造業", ko: "제조업" }, { ja: "製造年月日", ko: "제조 연월일" }],
    examples: [{ type: "ex", label: "예문", ja: "この工場では自動車部品を製造している。", ko: "이 공장에서는 자동차 부품을 제조하고 있다." }]
  },
  {
    id: 42, day: 9, level: "N2",
    word: "維持", kana: "いじ", pos: "명사",
    mean: "유지",
    syn: ["保つ", "保持する"],
    collocations: [{ ja: "現状を維持する", ko: "현 상태를 유지하다" }, { ja: "健康を維持する", ko: "건강을 유지하다" }],
    examples: [{ type: "on", label: "음독", ja: "激しい市場競争の中で、自社ブランドの高い信用度を維持するのは決して容易ではない。", ko: "치열한 시장 경쟁 속에서 자사 브랜드의 높은 신용도를 유지하는 것은 결코 쉽지 않다." }]
  },
  {
    id: 1693, day: 9, level: "N2",
    word: "製品", kana: "せいひん", pos: "명사",
    mean: "제품",
    syn: ["商品"],
    collocations: [{ ja: "新製品", ko: "신제품" }, { ja: "製品を開発する", ko: "제품을 개발하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この製品は一年間保証されている。", ko: "이 제품은 1년간 보증된다." }]
  },
  {
    id: 1694, day: 9, level: "N2",
    word: "産業", kana: "さんぎょう", pos: "명사",
    mean: "산업",
    syn: [],
    collocations: [{ ja: "観光産業", ko: "관광 산업" }, { ja: "産業が発達する", ko: "산업이 발달하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この町の主な産業は漁業だ。", ko: "이 마을의 주된 산업은 어업이다." }]
  },
  {
    id: 1695, day: 9, level: "N2",
    word: "企業", kana: "きぎょう", pos: "명사 (する동사)",
    mean: "기업",
    syn: ["会社"],
    collocations: [{ ja: "大企業", ko: "대기업" }, { ja: "企業に就職する", ko: "기업에 취직하다" }],
    examples: [{ type: "ex", label: "예문", ja: "多くの企業が海外に進出している。", ko: "많은 기업이 해외로 진출하고 있다." }]
  },
  {
    id: 1696, day: 9, level: "N2",
    word: "業界", kana: "ぎょうかい", pos: "명사",
    mean: "업계",
    syn: [],
    collocations: [{ ja: "自動車業界", ko: "자동차 업계" }, { ja: "業界の常識", ko: "업계의 상식" }],
    examples: [{ type: "ex", label: "예문", ja: "IT業界は変化が速い。", ko: "IT 업계는 변화가 빠르다." }]
  },
  {
    id: 1697, day: 9, level: "N2",
    word: "業績", kana: "ぎょうせき", pos: "명사",
    mean: "업적, 실적",
    syn: ["成果", "実績"],
    collocations: [{ ja: "業績を上げる", ko: "실적을 올리다" }, { ja: "業績が悪化する", ko: "실적이 악화되다" }],
    examples: [{ type: "ex", label: "예문", ja: "会社の業績は順調に伸びている。", ko: "회사의 실적은 순조롭게 늘고 있다." }]
  },
  {
    id: 1698, day: 9, level: "N2",
    word: "経済", kana: "けいざい", pos: "명사",
    mean: "경제",
    syn: [],
    collocations: [{ ja: "経済が発展する", ko: "경제가 발전하다" }, { ja: "経済的な理由", ko: "경제적인 이유" }],
    examples: [{ type: "ex", label: "예문", ja: "経済的な理由で進学をあきらめた。", ko: "경제적인 이유로 진학을 포기했다." }]
  },
  {
    id: 1699, day: 9, level: "N2",
    word: "財政", kana: "ざいせい", pos: "명사",
    mean: "재정",
    syn: [],
    collocations: [{ ja: "財政赤字", ko: "재정 적자" }, { ja: "財政が苦しい", ko: "재정이 어렵다" }],
    examples: [{ type: "ex", label: "예문", ja: "市の財政は厳しい状況にある。", ko: "시의 재정은 어려운 상황에 있다." }]
  },
  {
    id: 44, day: 9, level: "N2",
    word: "矛盾", kana: "むじゅん", pos: "명사",
    mean: "모순",
    syn: ["食い違い", "つじつまが合わないこと"],
    collocations: [{ ja: "矛盾が生じる", ko: "모순이 생기다" }, { ja: "矛盾を抱える", ko: "모순을 안고 있다" }],
    examples: [{ type: "on", label: "음독", ja: "彼のこれまでの主張と実際の行動との間には、看過できない明らかな矛盾が生じている。", ko: "그의 지금까지의 주장과 실제 행동 사이에는 간과할 수 없는 명백한 모순이 발생해 있다." }]
  },
  {
    id: 1700, day: 9, level: "N2",
    word: "資源", kana: "しげん", pos: "명사",
    mean: "자원",
    syn: [],
    collocations: [{ ja: "天然資源", ko: "천연자원" }, { ja: "資源を大切にする", ko: "자원을 아끼다" }],
    examples: [{ type: "ex", label: "예문", ja: "日本は資源の少ない国だ。", ko: "일본은 자원이 적은 나라다." }]
  },
  {
    id: 1701, day: 9, level: "N2",
    word: "資金", kana: "しきん", pos: "명사",
    mean: "자금",
    syn: ["お金"],
    collocations: [{ ja: "資金を集める", ko: "자금을 모으다" }, { ja: "資金不足", ko: "자금 부족" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい事業を始める資金が足りない。", ko: "새 사업을 시작할 자금이 부족하다." }]
  },
  {
    id: 1702, day: 9, level: "N2",
    word: "投資", kana: "とうし", pos: "명사 (する동사)",
    mean: "투자",
    syn: [],
    collocations: [{ ja: "株に投資する", ko: "주식에 투자하다" }, { ja: "設備投資", ko: "설비 투자" }],
    examples: [{ type: "ex", label: "예문", ja: "将来のために自分に投資する。", ko: "미래를 위해 자신에게 투자한다." }]
  },
  {
    id: 1703, day: 9, level: "N2",
    word: "価格", kana: "かかく", pos: "명사",
    mean: "가격",
    syn: ["値段"],
    collocations: [{ ja: "価格が上がる", ko: "가격이 오르다" }, { ja: "価格競争", ko: "가격 경쟁" }],
    examples: [{ type: "ex", label: "예문", ja: "原料の値上がりで価格が上がった。", ko: "원료값 상승으로 가격이 올랐다." }]
  },
  {
    id: 1704, day: 9, level: "N2",
    word: "値上がり", kana: "ねあがり", pos: "명사 (する동사)",
    mean: "가격 인상",
    syn: ["値上げ"],
    collocations: [{ ja: "野菜が値上がりする", ko: "채소값이 오르다" }],
    examples: [{ type: "ex", label: "예문", ja: "天候不順で野菜が値上がりしている。", ko: "날씨 불순으로 채소값이 오르고 있다." }]
  },
  {
    id: 1705, day: 9, level: "N1",
    word: "一環", kana: "いっかん", pos: "명사",
    mean: "일환",
    syn: ["一部"],
    collocations: [{ ja: "計画の一環", ko: "계획의 일환" }],
    examples: [{ type: "ex", label: "예문", ja: "この催しは地域活性化の一環として行われる。", ko: "이 행사는 지역 활성화의 일환으로 열린다." }]
  },
  {
    id: 1, day: 9, level: "N1",
    word: "促す", kana: "うながす", pos: "동사 (5단 타동사)",
    mean: "재촉하다, 촉구하다",
    syn: ["勧める", "促進する"],
    collocations: [{ ja: "注意を促す", ko: "주의를 환기하다" }, { ja: "賃上げを促す", ko: "임금 인상을 촉구하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "政府は各企業に対して賃上げを促した。", ko: "정부는 각 기업에 대해 임금 인상을 촉구했다." }]
  },
  {
    id: 1706, day: 9, level: "N1",
    word: "一律", kana: "いちりつ", pos: "명사",
    mean: "일률, 똑같음",
    syn: ["一様"],
    collocations: [{ ja: "一律に扱う", ko: "일률적으로 다루다" }, { ja: "全員一律", ko: "전원 일률" }],
    examples: [{ type: "ex", label: "예문", ja: "手当は全員に一律一万円支給される。", ko: "수당은 전원에게 일률적으로 만 엔 지급된다." }]
  },
  {
    id: 4, day: 9, level: "N1",
    word: "遮る", kana: "さえぎる", pos: "동사 (5단 타동사)",
    mean: "가로막다, 차단하다",
    syn: ["妨げる", "遮断する"],
    collocations: [{ ja: "視界を遮る", ko: "시야를 가로막다" }, { ja: "話を遮る", ko: "남의 말을 자르다/가로막다" }],
    examples: [{ type: "kun", label: "훈독", ja: "厚いカーテンを引いて、真夏の強い日差しを遮る。", ko: "두꺼운 커튼을 쳐서 한여름의 강한 햇빛을 차단한다." }]
  },
  {
    id: 1707, day: 9, level: "N1",
    word: "一貫", kana: "いっかん", pos: "명사 (する동사)",
    mean: "일관",
    syn: ["首尾一貫"],
    collocations: [{ ja: "一貫した態度", ko: "일관된 태도" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の主張は最初から一貫している。", ko: "그의 주장은 처음부터 일관되어 있다." }]
  },
  {
    id: 1708, day: 9, level: "N1",
    word: "一変", kana: "いっぺん", pos: "명사 (する동사)",
    mean: "일변, 완전히 바뀜",
    syn: ["一新"],
    collocations: [{ ja: "生活が一変する", ko: "생활이 완전히 바뀌다" }],
    examples: [{ type: "ex", label: "예문", ja: "スマートフォンの登場で生活が一変した。", ko: "스마트폰의 등장으로 생활이 완전히 바뀌었다." }]
  },
  {
    id: 6, day: 9, level: "N1",
    word: "携わる", kana: "たずさわる", pos: "동사 (5단 자동사)",
    mean: "종사하다, 관계하다",
    syn: ["関わる", "従事する"],
    collocations: [{ ja: "開発に携わる", ko: "개발 업무에 종사하다" }, { ja: "教育に携わる", ko: "교육에 관계하다/종사하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "大学卒業以来、長年にわたり環境保護の活動に深く携わってきた。", ko: "대학 졸업 이래 수년간 환경 보호 활동에 깊이 종사해 왔다." }]
  },
  {
    id: 1709, day: 9, level: "N1",
    word: "一連", kana: "いちれん", pos: "명사",
    mean: "일련",
    syn: ["一続き"],
    collocations: [{ ja: "一連の事件", ko: "일련의 사건" }],
    examples: [{ type: "ex", label: "예문", ja: "一連の不祥事で会社の信用は失われた。", ko: "일련의 불상사로 회사의 신용은 사라졌다." }]
  },
  {
    id: 13, day: 9, level: "N1",
    word: "挑む", kana: "いどむ", pos: "동사 (5단 자동사)",
    mean: "도전하다, 맞서다",
    syn: ["挑戦する", "立ち向かう"],
    collocations: [{ ja: "難関に挑む", ko: "난관에 과감히 도전하다" }, { ja: "記録に挑む", ko: "기록에 맞서다" }],
    examples: [{ type: "kun", label: "훈독", ja: "過去最高難度と言われる試験の壁に、強い信念を持って果敢に挑む。", ko: "과거 최고 난도라 불리는 시험의 장벽에 강한 신념을 가지고 과감히 도전하다." }]
  },
  // ==========================================
  // [DAY 10] N2 필수 + N1 · 60개
  // ==========================================
  {
    id: 1710, day: 10, level: "N2",
    word: "埋まる", kana: "うまる", pos: "동사 (자동사)",
    mean: "묻히다, 꽉 차다",
    syn: ["いっぱいになる"],
    collocations: [{ ja: "席が埋まる", ko: "자리가 꽉 차다" }, { ja: "雪に埋まる", ko: "눈에 파묻히다" }],
    examples: [{ type: "ex", label: "예문", ja: "開演前に客席はすべて埋まった。", ko: "개연 전에 객석은 모두 찼다." }]
  },
  {
    id: 1711, day: 10, level: "N2",
    word: "追い越す", kana: "おいこす", pos: "동사 (타동사)",
    mean: "추월하다, 앞지르다",
    syn: ["追い抜く"],
    collocations: [{ ja: "前の車を追い越す", ko: "앞차를 추월하다" }, { ja: "先輩を追い越す", ko: "선배를 앞지르다" }],
    examples: [{ type: "ex", label: "예문", ja: "トラックが猛スピードで追い越していった。", ko: "트럭이 맹렬한 속도로 추월해 갔다." }]
  },
  {
    id: 5, day: 10, level: "N2",
    word: "損なう", kana: "そこなう", pos: "동사 (5단 타동사)",
    mean: "해치다, 손상시키다",
    syn: ["害する", "損ねる"],
    collocations: [{ ja: "健康を損なう", ko: "건강을 해치다" }, { ja: "機嫌を損なう", ko: "기분을 상하게 하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "過度なストレスと睡眠不足は、心身の健康を著しく損なう恐れがある。", ko: "지나친 스트레스와 수면 부족은 심신의 건강을 현저히 해칠 우려가 있다." }]
  },
  {
    id: 1712, day: 10, level: "N2",
    word: "応じる", kana: "おうじる", pos: "동사 (자동사)",
    mean: "응하다, 따르다",
    syn: ["答える"],
    collocations: [{ ja: "要求に応じる", ko: "요구에 응하다" }, { ja: "必要に応じて", ko: "필요에 따라" }],
    examples: [{ type: "ex", label: "예문", ja: "必要に応じて、資料を追加してください。", ko: "필요에 따라 자료를 추가해 주세요." }]
  },
  {
    id: 1713, day: 10, level: "N2",
    word: "教わる", kana: "おそわる", pos: "동사 (타동사)",
    mean: "배우다, 가르침을 받다",
    syn: ["習う"],
    collocations: [{ ja: "先生に教わる", ko: "선생님께 배우다" }, { ja: "料理を教わる", ko: "요리를 배우다" }],
    examples: [{ type: "ex", label: "예문", ja: "このやり方は祖母に教わった。", ko: "이 방법은 할머니께 배웠다." }]
  },
  {
    id: 1714, day: 10, level: "N2",
    word: "襲う", kana: "おそう", pos: "동사 (타동사)",
    mean: "습격하다, 덮치다",
    syn: [],
    collocations: [{ ja: "台風が襲う", ko: "태풍이 덮치다" }, { ja: "不安に襲われる", ko: "불안에 휩싸이다" }],
    examples: [{ type: "ex", label: "예문", ja: "強い地震がこの地域を襲った。", ko: "강한 지진이 이 지역을 덮쳤다." }]
  },
  {
    id: 1715, day: 10, level: "N2",
    word: "落ち込む", kana: "おちこむ", pos: "동사 (자동사)",
    mean: "(기분이) 침울해지다, 떨어지다",
    syn: ["がっかりする"],
    collocations: [{ ja: "試験に落ちて落ち込む", ko: "시험에 떨어져 우울해하다" }, { ja: "売り上げが落ち込む", ko: "매출이 떨어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "失敗してもそんなに落ち込まないで。", ko: "실패해도 그렇게 풀 죽지 마." }]
  },
  {
    id: 1716, day: 10, level: "N2",
    word: "思いつく", kana: "おもいつく", pos: "동사 (타동사)",
    mean: "생각나다, 떠오르다",
    syn: ["ひらめく"],
    collocations: [{ ja: "いい案を思いつく", ko: "좋은 안이 떠오르다" }, { ja: "ふと思いつく", ko: "문득 생각나다" }],
    examples: [{ type: "ex", label: "예문", ja: "散歩中に新しいアイデアを思いついた。", ko: "산책 중에 새로운 아이디어가 떠올랐다." }]
  },
  {
    id: 11, day: 10, level: "N2",
    word: "招く", kana: "まねく", pos: "동사 (5단 타동사)",
    mean: "부르다, 초래하다",
    syn: ["引き起こす", "招待する"],
    collocations: [{ ja: "誤解を招く", ko: "오해를 부르다/초래하다" }, { ja: "混乱を招く", ko: "혼란을 초래하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "不適切な発言と説明不足が、世論の激しい反発と誤解を招く結果となった。", ko: "부적절한 발언과 설명 부족이 여론의 거센 반발과 오해를 초래하는 결과가 되었다." }, { type: "on", label: "음독", ja: "親しい友人たちを自宅に招待(しょうたい)して、ささやかな祝賀会を開く。", ko: "친한 친구들을 집으로 초대하여 조촐한 축하 모임을 열다." }]
  },
  {
    id: 1717, day: 10, level: "N2",
    word: "思い込む", kana: "おもいこむ", pos: "동사 (자동사)",
    mean: "굳게 믿다, 단정하다",
    syn: ["信じ込む"],
    collocations: [{ ja: "正しいと思い込む", ko: "옳다고 믿어 버리다" }, { ja: "思い込みが激しい", ko: "선입견이 강하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は自分が正しいと思い込んでいる。", ko: "그는 자기가 옳다고 굳게 믿고 있다." }]
  },
  {
    id: 1718, day: 10, level: "N2",
    word: "及ぶ", kana: "およぶ", pos: "동사 (자동사)",
    mean: "미치다, 이르다",
    syn: ["達する"],
    collocations: [{ ja: "被害が及ぶ", ko: "피해가 미치다" }, { ja: "数時間に及ぶ", ko: "몇 시간에 이르다" }],
    examples: [{ type: "ex", label: "예문", ja: "会議は五時間に及んだ。", ko: "회의는 다섯 시간에 이르렀다." }]
  },
  {
    id: 1719, day: 10, level: "N2",
    word: "欠かす", kana: "かかす", pos: "동사 (타동사)",
    mean: "빠뜨리다, 거르다",
    syn: ["抜かす"],
    collocations: [{ ja: "毎日欠かさず運動する", ko: "매일 빠짐없이 운동하다" }, { ja: "欠かせない", ko: "없어서는 안 된다" }],
    examples: [{ type: "ex", label: "예문", ja: "水は生活に欠かせない。", ko: "물은 생활에 없어서는 안 된다." }]
  },
  {
    id: 1720, day: 10, level: "N2",
    word: "一方的", kana: "いっぽうてき", pos: "な형용사",
    mean: "일방적임",
    syn: ["片寄った"],
    collocations: [{ ja: "一方的な主張", ko: "일방적인 주장" }],
    examples: [{ type: "ex", label: "예문", ja: "一方的に話を進めるのはよくない。", ko: "일방적으로 이야기를 진행하는 것은 좋지 않다." }]
  },
  {
    id: 23, day: 10, level: "N2",
    word: "乏しい", kana: "とぼしい", pos: "い형용사",
    mean: "부족하다, 결핍되다",
    syn: ["不足している", "少ない"],
    collocations: [{ ja: "経験が乏しい", ko: "경험이 부족하다" }, { ja: "資源に乏しい", ko: "자원이 결핍되어 있다" }],
    examples: [{ type: "kun", label: "훈독", ja: "理論上の知識は豊富だが、実際の現場での実務経験が乏しい。", ko: "이론상의 지식은 풍부하지만 실제 현장에서의 실무 경험이 부족하다." }]
  },
  {
    id: 1721, day: 10, level: "N2",
    word: "勇ましい", kana: "いさましい", pos: "い형용사",
    mean: "용감하다, 씩씩하다",
    syn: ["勇敢な"],
    collocations: [{ ja: "勇ましい姿", ko: "씩씩한 모습" }],
    examples: [{ type: "ex", label: "예문", ja: "兵士たちは勇ましく行進した。", ko: "병사들은 씩씩하게 행진했다." }]
  },
  {
    id: 1722, day: 10, level: "N2",
    word: "大げさ", kana: "おおげさ", pos: "な형용사",
    mean: "과장됨",
    syn: ["オーバーな", "誇張した"],
    collocations: [{ ja: "大げさな表現", ko: "과장된 표현" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はいつも話を大げさに言う。", ko: "그는 늘 이야기를 과장해서 말한다." }]
  },
  {
    id: 1723, day: 10, level: "N2",
    word: "薄暗い", kana: "うすぐらい", pos: "い형용사",
    mean: "어둑하다",
    syn: ["ほの暗い"],
    collocations: [{ ja: "薄暗い部屋", ko: "어둑한 방" }],
    examples: [{ type: "ex", label: "예문", ja: "薄暗い道を一人で歩くのは怖い。", ko: "어둑한 길을 혼자 걷는 것은 무섭다." }]
  },
  {
    id: 1724, day: 10, level: "N2",
    word: "大まか", kana: "おおまか", pos: "な형용사",
    mean: "대략적임, 대범함",
    syn: ["大ざっぱな"],
    collocations: [{ ja: "大まかな計画", ko: "대략적인 계획" }],
    examples: [{ type: "ex", label: "예문", ja: "まずは大まかな流れを説明します。", ko: "먼저 대략적인 흐름을 설명하겠습니다." }]
  },
  {
    id: 27, day: 10, level: "N2",
    word: "アプローチ", kana: "あぷろーち", pos: "외래어",
    mean: "접근, 접근 방식 (approach)",
    syn: ["接近", "取り組み方"],
    collocations: [{ ja: "アプローチを試みる", ko: "접근 방식을 시도하다" }, { ja: "新たなアプローチ", ko: "새로운 접근법" }],
    examples: [{ type: "ex", label: "예문", ja: "難解な数学の未解決問題に対して、従来とは全く異なるアプローチを試みる。", ko: "난해한 수학 미해결 문제에 대해 기존과는 완전히 다른 접근법을 시도하다." }]
  },
  {
    id: 1725, day: 10, level: "N2",
    word: "インタビュー", kana: "インタビュー", pos: "외래어",
    mean: "인터뷰 (interview)",
    syn: ["取材"],
    collocations: [{ ja: "インタビューを受ける", ko: "인터뷰를 받다" }],
    examples: [{ type: "ex", label: "예문", ja: "選手が試合後のインタビューに答えた。", ko: "선수가 시합 후 인터뷰에 답했다." }]
  },
  {
    id: 1726, day: 10, level: "N2",
    word: "ウイルス", kana: "ウイルス", pos: "외래어",
    mean: "바이러스 (virus)",
    syn: [],
    collocations: [{ ja: "ウイルスに感染する", ko: "바이러스에 감염되다" }],
    examples: [{ type: "ex", label: "예문", ja: "パソコンがウイルスに感染した。", ko: "컴퓨터가 바이러스에 감염되었다." }]
  },
  {
    id: 34, day: 10, level: "N2",
    word: "まして", kana: "まして", pos: "부사",
    mean: "하물며, 더군다나",
    syn: ["なおさら", "ましてや"],
    collocations: [{ ja: "まして〜など", ko: "하물며 ~따위" }, { ja: "まして〜わけがない", ko: "하물며 ~일 리가 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "百戦錬磨の専門家ですら解けない難問だ。まして経験の浅い初心者に解けるはずがない。", ko: "산전수전 다 겪은 전문가조차 풀 수 없는 난제다. 하물며 경험이 부족한 초보자가 풀 수 있을 리 없다." }]
  },
  {
    id: 1727, day: 10, level: "N2",
    word: "一挙に", kana: "いっきょに", pos: "부사",
    mean: "단번에, 일거에",
    syn: ["一気に"],
    collocations: [{ ja: "一挙に解決する", ko: "단번에 해결하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新技術で問題が一挙に解決した。", ko: "신기술로 문제가 단번에 해결되었다." }]
  },
  {
    id: 1728, day: 10, level: "N2",
    word: "一向に", kana: "いっこうに", pos: "부사",
    mean: "전혀, 조금도 (~않다)",
    syn: ["全然", "少しも"],
    collocations: [{ ja: "一向に進まない", ko: "전혀 진척되지 않다" }],
    examples: [{ type: "ex", label: "예문", ja: "薬を飲んでも、一向によくならない。", ko: "약을 먹어도 전혀 나아지지 않는다." }]
  },
  {
    id: 1729, day: 10, level: "N2",
    word: "いったん", kana: "いったん", pos: "부사",
    mean: "일단, 한번",
    syn: ["一度", "ひとまず"],
    collocations: [{ ja: "いったん家に帰る", ko: "일단 집에 돌아가다" }],
    examples: [{ type: "ex", label: "예문", ja: "いったん決めたことは最後までやり通す。", ko: "일단 정한 일은 끝까지 해낸다." }]
  },
  {
    id: 1730, day: 10, level: "N2",
    word: "がらがら", kana: "がらがら", pos: "부사 (의성어·의태어)",
    mean: "텅 빈 모양, 와르르",
    syn: ["空いている"],
    collocations: [{ ja: "がらがらの電車", ko: "텅 빈 전철" }],
    examples: [{ type: "ex", label: "예문", ja: "平日の映画館はがらがらだった。", ko: "평일 영화관은 텅텅 비어 있었다." }]
  },
  {
    id: 1731, day: 10, level: "N2",
    word: "がっしり", kana: "がっしり", pos: "부사 (의성어·의태어)",
    mean: "다부지게, 튼튼하게",
    syn: ["頑丈な"],
    collocations: [{ ja: "がっしりした体", ko: "다부진 체격" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はがっしりした体つきをしている。", ko: "그는 다부진 체격을 하고 있다." }]
  },
  {
    id: 1732, day: 10, level: "N2",
    word: "および", kana: "および", pos: "접속사",
    mean: "및",
    syn: ["と", "並びに"],
    collocations: [{ ja: "および", ko: "및" }],
    examples: [{ type: "ex", label: "예문", ja: "住所および電話番号を記入すること。", ko: "주소 및 전화번호를 기입할 것." }]
  },
  {
    id: 1733, day: 10, level: "N2",
    word: "未〜", kana: "み", pos: "접두어",
    mean: "미~ (아직 ~ 않음)",
    syn: ["まだ〜ない"],
    collocations: [{ ja: "未完成", ko: "미완성" }, { ja: "未経験", ko: "미경험" }, { ja: "未成年", ko: "미성년" }],
    examples: []
  },
  {
    id: 1734, day: 10, level: "N2",
    word: "値下がり", kana: "ねさがり", pos: "명사 (する동사)",
    mean: "가격 하락",
    syn: ["値下げ"],
    collocations: [{ ja: "株価が値下がりする", ko: "주가가 떨어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "ガソリンが少し値下がりした。", ko: "휘발유 값이 조금 내렸다." }]
  },
  {
    id: 47, day: 10, level: "N2",
    word: "妥協", kana: "だきょう", pos: "명사",
    mean: "타협",
    syn: ["譲歩", "折り合い"],
    collocations: [{ ja: "妥協を見出す", ko: "타협점을 찾아내다" }, { ja: "妥協を許さない", ko: "타협을 허용하지 않다" }],
    examples: [{ type: "on", label: "음독", ja: "双方が互いに歩み寄り、粘り強く交渉を重ねたことで、ついに双方が納得できる妥協点を見出した。", ko: "쌍방이 서로 양보하며 끈기 있게 협상을 거듭한 끝에 마침내 모두가 납득할 수 있는 타협점을 찾아냈다." }]
  },
  {
    id: 1735, day: 10, level: "N2",
    word: "割引", kana: "わりびき", pos: "명사 (する동사)",
    mean: "할인",
    syn: ["値引き"],
    collocations: [{ ja: "学生割引", ko: "학생 할인" }, { ja: "二割引", ko: "20% 할인" }],
    examples: [{ type: "ex", label: "예문", ja: "会員は全商品が一割引になる。", ko: "회원은 전 상품 10% 할인이 된다." }]
  },
  {
    id: 1736, day: 10, level: "N2",
    word: "金額", kana: "きんがく", pos: "명사",
    mean: "금액",
    syn: [],
    collocations: [{ ja: "金額を確認する", ko: "금액을 확인하다" }, { ja: "多額の金額", ko: "많은 금액" }],
    examples: [{ type: "ex", label: "예문", ja: "請求書の金額が間違っていた。", ko: "청구서 금액이 틀렸다." }]
  },
  {
    id: 1737, day: 10, level: "N2",
    word: "所得", kana: "しょとく", pos: "명사",
    mean: "소득",
    syn: ["収入"],
    collocations: [{ ja: "所得が増える", ko: "소득이 늘다" }, { ja: "所得税", ko: "소득세" }],
    examples: [{ type: "ex", label: "예문", ja: "国民の平均所得が上がった。", ko: "국민의 평균 소득이 올랐다." }]
  },
  {
    id: 1738, day: 10, level: "N2",
    word: "給与", kana: "きゅうよ", pos: "명사",
    mean: "급여",
    syn: ["給料"],
    collocations: [{ ja: "給与が支払われる", ko: "급여가 지급되다" }],
    examples: [{ type: "ex", label: "예문", ja: "給与は毎月二十五日に振り込まれる。", ko: "급여는 매달 25일에 입금된다." }]
  },
  {
    id: 1739, day: 10, level: "N2",
    word: "賃金", kana: "ちんぎん", pos: "명사",
    mean: "임금",
    syn: ["給料"],
    collocations: [{ ja: "賃金を上げる", ko: "임금을 올리다" }, { ja: "最低賃金", ko: "최저 임금" }],
    examples: [{ type: "ex", label: "예문", ja: "労働者は賃金の引き上げを求めた。", ko: "노동자들은 임금 인상을 요구했다." }]
  },
  {
    id: 1740, day: 10, level: "N2",
    word: "手当", kana: "てあて", pos: "명사 (する동사)",
    mean: "수당, 처치",
    syn: ["治療"],
    collocations: [{ ja: "残業手当", ko: "잔업 수당" }, { ja: "応急手当", ko: "응급 처치" }],
    examples: [{ type: "ex", label: "예문", ja: "けが人に応急手当をした。", ko: "부상자에게 응급 처치를 했다." }]
  },
  {
    id: 48, day: 10, level: "N2",
    word: "危機", kana: "きき", pos: "명사",
    mean: "위기",
    syn: ["ピンチ"],
    collocations: [{ ja: "危機を脱する", ko: "위기를 벗어나다" }, { ja: "危機に瀕する", ko: "위기에 처하다" }],
    examples: [{ type: "on", label: "음독", ja: "前例のない深刻な経営危機に直面したが、全社員の結束によって見事に乗り越えた。", ko: "전례 없는 심각한 경영 위기에 직면했으나 전 사원의 결속으로 훌륭히 극복해 냈다." }]
  },
  {
    id: 1741, day: 10, level: "N2",
    word: "年金", kana: "ねんきん", pos: "명사",
    mean: "연금",
    syn: [],
    collocations: [{ ja: "年金をもらう", ko: "연금을 받다" }, { ja: "年金生活", ko: "연금 생활" }],
    examples: [{ type: "ex", label: "예문", ja: "祖父は年金で生活している。", ko: "할아버지는 연금으로 생활하신다." }]
  },
  {
    id: 1742, day: 10, level: "N2",
    word: "保険", kana: "ほけん", pos: "명사",
    mean: "보험",
    syn: [],
    collocations: [{ ja: "保険に入る", ko: "보험에 들다" }, { ja: "健康保険", ko: "건강 보험" }],
    examples: [{ type: "ex", label: "예문", ja: "旅行の前に保険に入った。", ko: "여행 전에 보험에 들었다." }]
  },
  {
    id: 1743, day: 10, level: "N2",
    word: "福祉", kana: "ふくし", pos: "명사",
    mean: "복지",
    syn: [],
    collocations: [{ ja: "社会福祉", ko: "사회 복지" }, { ja: "福祉施設", ko: "복지 시설" }],
    examples: [{ type: "ex", label: "예문", ja: "高齢者の福祉を充実させる。", ko: "고령자 복지를 충실히 한다." }]
  },
  {
    id: 1744, day: 10, level: "N2",
    word: "雇用", kana: "こよう", pos: "명사 (する동사)",
    mean: "고용",
    syn: ["採用"],
    collocations: [{ ja: "雇用を増やす", ko: "고용을 늘리다" }, { ja: "雇用条件", ko: "고용 조건" }],
    examples: [{ type: "ex", label: "예문", ja: "この工場は地域の雇用を支えている。", ko: "이 공장은 지역의 고용을 지탱하고 있다." }]
  },
  {
    id: 1745, day: 10, level: "N2",
    word: "失業", kana: "しつぎょう", pos: "명사 (する동사)",
    mean: "실업",
    syn: ["職を失う"],
    collocations: [{ ja: "失業率", ko: "실업률" }, { ja: "失業中", ko: "실업 상태" }],
    examples: [{ type: "ex", label: "예문", ja: "不況で失業する人が増えた。", ko: "불황으로 실업하는 사람이 늘었다." }]
  },
  {
    id: 1746, day: 10, level: "N2",
    word: "就職", kana: "しゅうしょく", pos: "명사 (する동사)",
    mean: "취직",
    syn: ["勤める"],
    collocations: [{ ja: "銀行に就職する", ko: "은행에 취직하다" }, { ja: "就職活動", ko: "취업 활동" }],
    examples: [{ type: "ex", label: "예문", ja: "大学を卒業して出版社に就職した。", ko: "대학을 졸업하고 출판사에 취직했다." }]
  },
  {
    id: 49, day: 10, level: "N2",
    word: "需要", kana: "じゅよう", pos: "명사",
    mean: "수요",
    syn: ["ニーズ", "求め"],
    collocations: [{ ja: "需要に応える", ko: "수요에 부응하다" }, { ja: "需要が高まる", ko: "수요가 치솟다" }],
    examples: [{ type: "on", label: "음독", ja: "テレワークの急速な普及に伴い、高性能なタブレット端末への需要が爆発的に高まった。", ko: "원격 근무의 급속한 보급에 따라 고성능 태블릿 기기에 대한 수요가 폭발적으로 높아졌다." }]
  },
  {
    id: 1747, day: 10, level: "N2",
    word: "退職", kana: "たいしょく", pos: "명사 (する동사)",
    mean: "퇴직",
    syn: ["辞職"],
    collocations: [{ ja: "定年退職", ko: "정년퇴직" }, { ja: "会社を退職する", ko: "회사를 퇴직하다" }],
    examples: [{ type: "ex", label: "예문", ja: "父は来年定年退職する。", ko: "아버지는 내년에 정년퇴직하신다." }]
  },
  {
    id: 1748, day: 10, level: "N2",
    word: "転職", kana: "てんしょく", pos: "명사 (する동사)",
    mean: "이직, 전직",
    syn: [],
    collocations: [{ ja: "転職を考える", ko: "이직을 생각하다" }],
    examples: [{ type: "ex", label: "예문", ja: "より良い条件を求めて転職した。", ko: "더 좋은 조건을 찾아 이직했다." }]
  },
  {
    id: 1749, day: 10, level: "N2",
    word: "求人", kana: "きゅうじん", pos: "명사",
    mean: "구인",
    syn: ["募集"],
    collocations: [{ ja: "求人広告", ko: "구인 광고" }, { ja: "求人が増える", ko: "구인이 늘다" }],
    examples: [{ type: "ex", label: "예문", ja: "求人情報を見て応募した。", ko: "구인 정보를 보고 응모했다." }]
  },
  {
    id: 1750, day: 10, level: "N2",
    word: "採用", kana: "さいよう", pos: "명사 (する동사)",
    mean: "채용, 채택",
    syn: ["雇う", "取り入れる"],
    collocations: [{ ja: "新卒を採用する", ko: "신규 졸업자를 채용하다" }, { ja: "意見を採用する", ko: "의견을 채택하다" }],
    examples: [{ type: "ex", label: "예문", ja: "私の提案が会議で採用された。", ko: "내 제안이 회의에서 채택되었다." }]
  },
  {
    id: 1751, day: 10, level: "N2",
    word: "人材", kana: "じんざい", pos: "명사",
    mean: "인재",
    syn: [],
    collocations: [{ ja: "優秀な人材", ko: "우수한 인재" }, { ja: "人材を育てる", ko: "인재를 기르다" }],
    examples: [{ type: "ex", label: "예문", ja: "会社は若い人材の育成に力を入れている。", ko: "회사는 젊은 인재 육성에 힘쓰고 있다." }]
  },
  {
    id: 1752, day: 10, level: "N2",
    word: "人手", kana: "ひとで", pos: "명사",
    mean: "일손, 남의 손",
    syn: ["労働力"],
    collocations: [{ ja: "人手が足りない", ko: "일손이 부족하다" }, { ja: "人手に渡る", ko: "남의 손에 넘어가다" }],
    examples: [{ type: "ex", label: "예문", ja: "年末は人手が足りなくて困る。", ko: "연말에는 일손이 부족해서 곤란하다." }]
  },
  {
    id: 50, day: 10, level: "N2",
    word: "供給", kana: "きょうきゅう", pos: "명사",
    mean: "공급",
    syn: ["提供", "供与"],
    collocations: [{ ja: "安定した供給", ko: "안정적인 공급" }, { ja: "供給が追いつかない", ko: "공급이 따라가지 못하다" }],
    examples: [{ type: "on", label: "음독", ja: "天候不良による農作物の供給不足が続くと、野菜の市場価格が急激に高騰する。", ko: "기상 이변으로 인한 농작물의 공급 부족이 지속되면 채소 시장 가격이 급격하게 치솟는다." }]
  },
  {
    id: 1753, day: 10, level: "N1",
    word: "一定", kana: "いってい", pos: "명사 (する동사)",
    mean: "일정",
    syn: ["決まった"],
    collocations: [{ ja: "一定の条件", ko: "일정한 조건" }, { ja: "一定に保つ", ko: "일정하게 유지하다" }],
    examples: [{ type: "ex", label: "예문", ja: "室温を一定に保つ。", ko: "실내 온도를 일정하게 유지한다." }]
  },
  {
    id: 18, day: 10, level: "N1",
    word: "脅かす", kana: "おびやかす", pos: "동사 (5단 타동사)",
    mean: "위협하다, 위태롭게 하다",
    syn: ["脅す", "危うくする"],
    collocations: [{ ja: "安全を脅かす", ko: "안전을 위협하다" }, { ja: "地位を脅かす", ko: "위치를 위태롭게 하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "深刻な大気汚染と環境破壊が、住民の健康な生活を脅かしている。", ko: "심각한 대기오염과 환경 파괴가 주민들의 건강한 생활을 위협하고 있다." }]
  },
  {
    id: 1754, day: 10, level: "N1",
    word: "過疎", kana: "かそ", pos: "명사",
    mean: "과소 (인구가 지나치게 적음)",
    syn: [],
    collocations: [{ ja: "過疎地域", ko: "과소 지역" }, { ja: "過疎化", ko: "과소화" }],
    examples: [{ type: "ex", label: "예문", ja: "若者が都市に出て、村の過疎化が進んでいる。", ko: "젊은이가 도시로 나가 마을의 과소화가 진행되고 있다." }]
  },
  {
    id: 1755, day: 10, level: "N1",
    word: "還元", kana: "かんげん", pos: "명사 (する동사)",
    mean: "환원",
    syn: ["返す"],
    collocations: [{ ja: "利益を還元する", ko: "이익을 환원하다" }],
    examples: [{ type: "ex", label: "예문", ja: "企業は利益の一部を社会に還元すべきだ。", ko: "기업은 이익의 일부를 사회에 환원해야 한다." }]
  },
  {
    id: 20, day: 10, level: "N1",
    word: "迅速", kana: "じんそく", pos: "な형용사",
    mean: "신속함",
    syn: ["速やか", "素早い"],
    collocations: [{ ja: "迅速な対応", ko: "신속한 대처" }, { ja: "迅速な処理", ko: "신속한 처리" }],
    examples: [{ type: "on", label: "음독", ja: "突発的なトラブルが発生した際には、迅速かつ的確な初期対応が不可欠だ。", ko: "돌발적인 문제가 발생했을 때에는 신속하고도 정확한 초기 대응이 필수불가결하다." }]
  },
  {
    id: 1756, day: 10, level: "N1",
    word: "主体", kana: "しゅたい", pos: "명사",
    mean: "주체",
    syn: ["中心"],
    collocations: [{ ja: "主体的", ko: "주체적" }, { ja: "住民が主体となる", ko: "주민이 주체가 되다" }],
    examples: [{ type: "ex", label: "예문", ja: "学生が主体的に学ぶ授業を目指している。", ko: "학생이 주체적으로 배우는 수업을 지향하고 있다." }]
  },
  {
    id: 28, day: 10, level: "N1",
    word: "コンセプト", kana: "こんせぷと", pos: "외래어",
    mean: "기본 개념, 콘셉트 (concept)",
    syn: ["基本的な考え", "発想"],
    collocations: [{ ja: "明確なコンセプト", ko: "명확한 콘셉트" }, { ja: "コンセプトを打ち出す", ko: "기본 콘셉트를 내세우다" }],
    examples: [{ type: "ex", label: "예문", ja: "自然環境との共生を基本コンセプトに掲げた、新しい都市空間を設計する。", ko: "자연환경과의 공생을 기본 콘셉트로 내건 새로운 도시 공간을 설계하다." }]
  },
  {
    id: 1757, day: 10, level: "N1",
    word: "相互", kana: "そうご", pos: "명사",
    mean: "상호",
    syn: ["互い"],
    collocations: [{ ja: "相互理解", ko: "상호 이해" }, { ja: "相互に", ko: "서로" }],
    examples: [{ type: "ex", label: "예문", ja: "国と国との相互理解が大切だ。", ko: "나라와 나라 간의 상호 이해가 중요하다." }]
  },
  // ==========================================
  // [DAY 11] N2 필수 + N1 · 60개
  // ==========================================
  {
    id: 1758, day: 11, level: "N2",
    word: "駆けつける", kana: "かけつける", pos: "동사 (자동사)",
    mean: "급히 달려가다",
    syn: ["急いで行く"],
    collocations: [{ ja: "現場に駆けつける", ko: "현장에 급히 달려가다" }],
    examples: [{ type: "ex", label: "예문", ja: "事故の知らせを聞いて、病院に駆けつけた。", ko: "사고 소식을 듣고 병원으로 달려갔다." }]
  },
  {
    id: 1759, day: 11, level: "N2",
    word: "欠ける", kana: "かける", pos: "동사 (자동사)",
    mean: "이가 빠지다, 부족하다",
    syn: ["不足する"],
    collocations: [{ ja: "皿が欠ける", ko: "접시 이가 빠지다" }, { ja: "常識に欠ける", ko: "상식이 부족하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は協調性に欠けるところがある。", ko: "그는 협조성이 부족한 면이 있다." }]
  },
  {
    id: 12, day: 11, level: "N2",
    word: "営む", kana: "いとなむ", pos: "동사 (5단 타동사)",
    mean: "경영하다, (생활을) 영위하다",
    syn: ["経営する", "行う"],
    collocations: [{ ja: "生活を営む", ko: "생활을 영위하다" }, { ja: "店舗を営む", ko: "가게를 경영하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "祖父の代から三代にわたって続く、小さな和菓子屋を営んでいる。", ko: "할아버지 대부터 3대에 걸쳐 이어져 온 작은 화과자점을 경영하고 있다." }, { type: "on", label: "음독", ja: "時代の変化に対応した柔軟な企業経営(けいえい)が求められている。", ko: "시대의 변화에 대응하는 유연한 기업 경영이 요구되고 있다." }]
  },
  {
    id: 1760, day: 11, level: "N2",
    word: "枯らす", kana: "からす", pos: "동사 (타동사)",
    mean: "말려 죽이다",
    syn: [],
    collocations: [{ ja: "花を枯らす", ko: "꽃을 말려 죽이다" }],
    examples: [{ type: "ex", label: "예문", ja: "水をやり忘れて、鉢植えを枯らしてしまった。", ko: "물 주는 것을 잊어 화분을 말려 죽이고 말았다." }]
  },
  {
    id: 1761, day: 11, level: "N2",
    word: "交わす", kana: "かわす", pos: "동사 (타동사)",
    mean: "주고받다",
    syn: ["やり取りする"],
    collocations: [{ ja: "言葉を交わす", ko: "말을 주고받다" }, { ja: "契約を交わす", ko: "계약을 맺다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人は笑顔であいさつを交わした。", ko: "두 사람은 웃는 얼굴로 인사를 주고받았다." }]
  },
  {
    id: 1762, day: 11, level: "N2",
    word: "聞き取る", kana: "ききとる", pos: "동사 (타동사)",
    mean: "알아듣다",
    syn: ["聞き分ける"],
    collocations: [{ ja: "言葉を聞き取る", ko: "말을 알아듣다" }, { ja: "聞き取りにくい", ko: "알아듣기 어렵다" }],
    examples: [{ type: "ex", label: "예문", ja: "騒がしくて、相手の声がよく聞き取れなかった。", ko: "시끄러워서 상대의 목소리를 잘 알아듣지 못했다." }]
  },
  {
    id: 1763, day: 11, level: "N2",
    word: "築く", kana: "きずく", pos: "동사 (타동사)",
    mean: "쌓다, 구축하다",
    syn: ["作り上げる"],
    collocations: [{ ja: "信頼関係を築く", ko: "신뢰 관계를 쌓다" }, { ja: "財産を築く", ko: "재산을 모으다" }],
    examples: [{ type: "ex", label: "예문", ja: "時間をかけて、顧客との信頼を築いてきた。", ko: "시간을 들여 고객과의 신뢰를 쌓아 왔다." }]
  },
  {
    id: 1764, day: 11, level: "N2",
    word: "傷つく", kana: "きずつく", pos: "동사 (자동사)",
    mean: "상처 입다",
    syn: ["傷める"],
    collocations: [{ ja: "心が傷つく", ko: "마음이 상처 입다" }, { ja: "車が傷つく", ko: "차에 흠집이 나다" }],
    examples: [{ type: "ex", label: "예문", ja: "何気ない一言に深く傷ついた。", ko: "무심한 한마디에 깊이 상처받았다." }]
  },
  {
    id: 14, day: 11, level: "N2",
    word: "抑える", kana: "おさえる", pos: "동사 (1단 타동사)",
    mean: "누르다, 억누르다, 억제하다",
    syn: ["抑制する", "我慢する"],
    collocations: [{ ja: "費用を抑える", ko: "비용을 억제하다/줄이다" }, { ja: "感情を抑える", ko: "감정을 억누르다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "込み上げる激しい怒りを必死に抑えて、冷静に対処した。", ko: "치밀어 오르는 격한 분노를 필사적으로 억누르고 냉정하게 대처했다." }],
    polysemy: [
      { def: "① (물리적으로) 힘을 주어 누르다·막다", ja: "出血を止めるため、傷口を清潔なガーゼで強く抑える。", ko: "출혈을 멈추기 위해 상처 부위를 깨끗한 거즈로 강하게 누르다." },
      { def: "② (감정·기침·충동을) 억누르다·참다", ja: "激しい咳をハンカチで抑えながら、なんとかスピーチを終えた。", ko: "심한 기침을 손수건으로 틀어막으며 가까스로 스피치를 마쳤다." },
      { def: "③ (비용·수량·영향을) 억제하다·낮추다", ja: "無駄な経費を最小限に抑えることで、会社の利益を確保する。", ko: "불필요한 경비를 최소한으로 억제함으로써 회사의 이익을 확보하다." }
    ]
  },
  {
    id: 1765, day: 11, level: "N2",
    word: "傷つける", kana: "きずつける", pos: "동사 (타동사)",
    mean: "상처를 주다",
    syn: ["傷める"],
    collocations: [{ ja: "人を傷つける", ko: "남에게 상처를 주다" }, { ja: "名誉を傷つける", ko: "명예를 훼손하다" }],
    examples: [{ type: "ex", label: "예문", ja: "相手を傷つけないように言葉を選んだ。", ko: "상대에게 상처 주지 않도록 말을 골랐다." }]
  },
  {
    id: 1766, day: 11, level: "N2",
    word: "鍛える", kana: "きたえる", pos: "동사 (타동사)",
    mean: "단련하다",
    syn: ["訓練する"],
    collocations: [{ ja: "体を鍛える", ko: "몸을 단련하다" }, { ja: "腕を鍛える", ko: "솜씨를 연마하다" }],
    examples: [{ type: "ex", label: "예문", ja: "毎朝のジョギングで体を鍛えている。", ko: "매일 아침 조깅으로 몸을 단련하고 있다." }]
  },
  {
    id: 1767, day: 11, level: "N2",
    word: "区切る", kana: "くぎる", pos: "동사 (타동사)",
    mean: "구분하다, 끊다",
    syn: ["分ける"],
    collocations: [{ ja: "文を区切る", ko: "문장을 끊다" }, { ja: "部屋を区切る", ko: "방을 칸막이하다" }],
    examples: [{ type: "ex", label: "예문", ja: "作業を一時間ごとに区切って進める。", ko: "작업을 한 시간마다 끊어서 진행한다." }]
  },
  {
    id: 1768, day: 11, level: "N2",
    word: "おおらか", kana: "おおらか", pos: "な형용사",
    mean: "대범함, 너그러움",
    syn: ["寛大な"],
    collocations: [{ ja: "おおらかな性格", ko: "대범한 성격" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はおおらかで、細かいことを気にしない。", ko: "그는 대범해서 사소한 일은 신경 쓰지 않는다." }]
  },
  {
    id: 24, day: 11, level: "N2",
    word: "著しい", kana: "いちじるしい", pos: "い형용사",
    mean: "현저하다, 눈부시다, 뚜렷하다",
    syn: ["目立つ", "顕著な"],
    collocations: [{ ja: "著しい進歩", ko: "눈부신 진보" }, { ja: "著しい変化", ko: "현저한 변화" }],
    examples: [{ type: "kun", label: "훈독", ja: "近年の通信技術と人工知能の発展には、目を見張る著しいものがある。", ko: "최근 통신 기술과 인공지능의 발전에는 눈을 괄목할 만한 뚜렷한 바가 있다." }]
  },
  {
    id: 1769, day: 11, level: "N2",
    word: "大人げない", kana: "おとなげない", pos: "い형용사",
    mean: "어른답지 못하다",
    syn: ["子どもっぽい"],
    collocations: [{ ja: "大人げない態度", ko: "어른스럽지 못한 태도" }],
    examples: [{ type: "ex", label: "예문", ja: "子ども相手に本気で怒るなんて大人げない。", ko: "아이를 상대로 진심으로 화를 내다니 어른스럽지 못하다." }]
  },
  {
    id: 1770, day: 11, level: "N2",
    word: "臆病", kana: "おくびょう", pos: "な형용사",
    mean: "겁이 많음",
    syn: ["怖がりな"],
    collocations: [{ ja: "臆病な犬", ko: "겁 많은 개" }],
    examples: [{ type: "ex", label: "예문", ja: "失敗を恐れて臆病になる。", ko: "실패를 두려워해 겁쟁이가 된다." }]
  },
  {
    id: 1771, day: 11, level: "N2",
    word: "温暖", kana: "おんだん", pos: "な형용사",
    mean: "온난함",
    syn: ["暖かい"],
    collocations: [{ ja: "温暖な気候", ko: "온난한 기후" }],
    examples: [{ type: "ex", label: "예문", ja: "この地方は一年中温暖だ。", ko: "이 지방은 일 년 내내 온난하다." }]
  },
  {
    id: 1772, day: 11, level: "N2",
    word: "思いがけない", kana: "おもいがけない", pos: "い형용사",
    mean: "뜻밖이다",
    syn: ["意外な"],
    collocations: [{ ja: "思いがけない出来事", ko: "뜻밖의 일" }],
    examples: [{ type: "ex", label: "예문", ja: "旅先で思いがけない人に会った。", ko: "여행지에서 뜻밖의 사람을 만났다." }]
  },
  {
    id: 1773, day: 11, level: "N2",
    word: "エチケット", kana: "エチケット", pos: "외래어",
    mean: "에티켓 (etiquette)",
    syn: ["マナー", "礼儀"],
    collocations: [{ ja: "エチケットを守る", ko: "에티켓을 지키다" }],
    examples: [{ type: "ex", label: "예문", ja: "咳をする時に口を覆うのはエチケットだ。", ko: "기침할 때 입을 가리는 것은 에티켓이다." }]
  },
  {
    id: 1774, day: 11, level: "N2",
    word: "オリジナル", kana: "オリジナル", pos: "외래어",
    mean: "오리지널, 독창적 (original)",
    syn: ["独自の"],
    collocations: [{ ja: "オリジナル商品", ko: "자체 상품" }],
    examples: [{ type: "ex", label: "예문", ja: "この店にはオリジナルの商品が多い。", ko: "이 가게에는 독자 상품이 많다." }]
  },
  {
    id: 1775, day: 11, level: "N2",
    word: "クレーム", kana: "クレーム", pos: "외래어",
    mean: "클레임, 불만 (claim)",
    syn: ["苦情"],
    collocations: [{ ja: "クレームをつける", ko: "클레임을 걸다" }],
    examples: [{ type: "ex", label: "예문", ja: "客からクレームが来た。", ko: "손님에게서 항의가 들어왔다." }]
  },
  {
    id: 1776, day: 11, level: "N2",
    word: "一段と", kana: "いちだんと", pos: "부사",
    mean: "한층, 더욱",
    syn: ["一層", "さらに"],
    collocations: [{ ja: "一段と寒くなる", ko: "한층 추워지다" }],
    examples: [{ type: "ex", label: "예문", ja: "今日は一段ときれいに見える。", ko: "오늘은 한층 예뻐 보인다." }]
  },
  {
    id: 1777, day: 11, level: "N2",
    word: "今さら", kana: "いまさら", pos: "부사",
    mean: "이제 와서",
    syn: ["今になって"],
    collocations: [{ ja: "今さら後悔しても遅い", ko: "이제 와서 후회해도 늦다" }],
    examples: [{ type: "ex", label: "예문", ja: "今さらそんなことを言われても困る。", ko: "이제 와서 그런 말을 해도 곤란하다." }]
  },
  {
    id: 1778, day: 11, level: "N2",
    word: "今に", kana: "いまに", pos: "부사",
    mean: "머지않아, 곧",
    syn: ["そのうち"],
    collocations: [{ ja: "今に分かる", ko: "곧 알게 된다" }],
    examples: [{ type: "ex", label: "예문", ja: "今に見ていろ。", ko: "두고 봐라." }]
  },
  {
    id: 1779, day: 11, level: "N2",
    word: "うんと", kana: "うんと", pos: "부사",
    mean: "많이, 몹시",
    syn: ["たくさん", "非常に"],
    collocations: [{ ja: "うんと勉強する", ko: "열심히 공부하다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの頃はうんと遊んだほうがいい。", ko: "어릴 때는 실컷 노는 편이 좋다." }]
  },
  {
    id: 1780, day: 11, level: "N2",
    word: "きっぱり", kana: "きっぱり", pos: "부사 (의성어·의태어)",
    mean: "단호하게, 딱 잘라",
    syn: ["はっきり"],
    collocations: [{ ja: "きっぱり断る", ko: "딱 잘라 거절하다" }],
    examples: [{ type: "ex", label: "예문", ja: "無理な要求はきっぱり断った。", ko: "무리한 요구는 딱 잘라 거절했다." }]
  },
  {
    id: 1781, day: 11, level: "N2",
    word: "無〜", kana: "む", pos: "접두어",
    mean: "무~ (~이 없음)",
    syn: ["〜がない"],
    collocations: [{ ja: "無責任", ko: "무책임" }, { ja: "無関心", ko: "무관심" }, { ja: "無意識", ko: "무의식" }],
    examples: []
  },
  {
    id: 1782, day: 11, level: "N2",
    word: "不〜", kana: "ふ", pos: "접두어",
    mean: "부~, 불~ (~하지 않음)",
    syn: [],
    collocations: [{ ja: "不正確", ko: "부정확" }, { ja: "不注意", ko: "부주의" }, { ja: "不景気", ko: "불경기" }],
    examples: []
  },
  {
    id: 1783, day: 11, level: "N2",
    word: "職場", kana: "しょくば", pos: "명사",
    mean: "직장",
    syn: ["勤め先"],
    collocations: [{ ja: "職場の人間関係", ko: "직장 인간관계" }],
    examples: [{ type: "ex", label: "예문", ja: "職場の雰囲気がとてもいい。", ko: "직장 분위기가 아주 좋다." }]
  },
  {
    id: 1784, day: 11, level: "N2",
    word: "勤務", kana: "きんむ", pos: "명사 (する동사)",
    mean: "근무",
    syn: ["勤める"],
    collocations: [{ ja: "勤務時間", ko: "근무 시간" }, { ja: "本社に勤務する", ko: "본사에 근무하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は銀行に勤務している。", ko: "그는 은행에 근무하고 있다." }]
  },
  {
    id: 1785, day: 11, level: "N2",
    word: "残業", kana: "ざんぎょう", pos: "명사 (する동사)",
    mean: "잔업, 야근",
    syn: [],
    collocations: [{ ja: "残業が多い", ko: "잔업이 많다" }, { ja: "残業代", ko: "잔업 수당" }],
    examples: [{ type: "ex", label: "예문", ja: "今週は毎日残業している。", ko: "이번 주는 매일 야근하고 있다." }]
  },
  {
    id: 1786, day: 11, level: "N2",
    word: "出勤", kana: "しゅっきん", pos: "명사 (する동사)",
    mean: "출근",
    syn: [],
    collocations: [{ ja: "出勤時間", ko: "출근 시간" }, { ja: "休日出勤", ko: "휴일 출근" }],
    examples: [{ type: "ex", label: "예문", ja: "毎朝八時に出勤する。", ko: "매일 아침 8시에 출근한다." }]
  },
  {
    id: 1787, day: 11, level: "N2",
    word: "欠勤", kana: "けっきん", pos: "명사 (する동사)",
    mean: "결근",
    syn: ["休む"],
    collocations: [{ ja: "無断欠勤", ko: "무단결근" }],
    examples: [{ type: "ex", label: "예문", ja: "体調不良で欠勤した。", ko: "몸이 안 좋아 결근했다." }]
  },
  {
    id: 1788, day: 11, level: "N2",
    word: "休暇", kana: "きゅうか", pos: "명사",
    mean: "휴가",
    syn: ["休み"],
    collocations: [{ ja: "休暇を取る", ko: "휴가를 쓰다" }, { ja: "夏期休暇", ko: "여름휴가" }],
    examples: [{ type: "ex", label: "예문", ja: "一週間の休暇を取って旅行した。", ko: "일주일 휴가를 내고 여행했다." }]
  },
  {
    id: 1789, day: 11, level: "N2",
    word: "出張", kana: "しゅっちょう", pos: "명사 (する동사)",
    mean: "출장",
    syn: [],
    collocations: [{ ja: "大阪に出張する", ko: "오사카에 출장 가다" }, { ja: "出張費", ko: "출장비" }],
    examples: [{ type: "ex", label: "예문", ja: "来週は海外出張の予定だ。", ko: "다음 주는 해외 출장 예정이다." }]
  },
  {
    id: 52, day: 11, level: "N2",
    word: "傾向", kana: "けいこう", pos: "명사",
    mean: "경향",
    syn: ["風潮", "傾き"],
    collocations: [{ ja: "傾向が見られる", ko: "경향이 나타나다" }, { ja: "増加の傾向", ko: "증가하는 추세" }],
    examples: [{ type: "on", label: "음독", ja: "最近の消費行動においては、モノを所有するよりも体験にお金を使う傾向が強まっている。", ko: "최근 소비 행동에서는 물건을 소유하기보다 체험에 돈을 쓰는 경향이 강해지고 있다." }]
  },
  {
    id: 1790, day: 11, level: "N2",
    word: "取引", kana: "とりひき", pos: "명사 (する동사)",
    mean: "거래",
    syn: [],
    collocations: [{ ja: "取引先", ko: "거래처" }, { ja: "取引を始める", ko: "거래를 시작하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい会社と取引を始めた。", ko: "새 회사와 거래를 시작했다." }]
  },
  {
    id: 1791, day: 11, level: "N2",
    word: "交渉", kana: "こうしょう", pos: "명사 (する동사)",
    mean: "교섭, 협상",
    syn: ["話し合い"],
    collocations: [{ ja: "交渉がまとまる", ko: "협상이 타결되다" }, { ja: "交渉を重ねる", ko: "교섭을 거듭하다" }],
    examples: [{ type: "ex", label: "예문", ja: "何度も交渉を重ねて、ようやく合意した。", ko: "몇 번이나 협상을 거듭해 겨우 합의했다." }]
  },
  {
    id: 1792, day: 11, level: "N2",
    word: "提案", kana: "ていあん", pos: "명사 (する동사)",
    mean: "제안",
    syn: ["申し出"],
    collocations: [{ ja: "提案を受け入れる", ko: "제안을 받아들이다" }, { ja: "新しい提案", ko: "새로운 제안" }],
    examples: [{ type: "ex", label: "예문", ja: "部長に新しい企画を提案した。", ko: "부장님께 새로운 기획을 제안했다." }]
  },
  {
    id: 1793, day: 11, level: "N2",
    word: "企画", kana: "きかく", pos: "명사 (する동사)",
    mean: "기획",
    syn: ["計画"],
    collocations: [{ ja: "企画を立てる", ko: "기획을 세우다" }, { ja: "企画書", ko: "기획서" }],
    examples: [{ type: "ex", label: "예문", ja: "イベントの企画を担当している。", ko: "이벤트 기획을 담당하고 있다." }]
  },
  {
    id: 1794, day: 11, level: "N2",
    word: "戦略", kana: "せんりゃく", pos: "명사",
    mean: "전략",
    syn: ["作戦"],
    collocations: [{ ja: "販売戦略", ko: "판매 전략" }, { ja: "戦略を練る", ko: "전략을 짜다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい販売戦略を考える。", ko: "새로운 판매 전략을 생각한다." }]
  },
  {
    id: 1795, day: 11, level: "N2",
    word: "対応", kana: "たいおう", pos: "명사 (する동사)",
    mean: "대응",
    syn: ["対処"],
    collocations: [{ ja: "迅速に対応する", ko: "신속하게 대응하다" }, { ja: "客への対応", ko: "손님 응대" }],
    examples: [{ type: "ex", label: "예문", ja: "苦情には丁寧に対応すること。", ko: "불만에는 정중하게 대응할 것." }]
  },
  {
    id: 54, day: 11, level: "N2",
    word: "効率", kana: "こうりつ", pos: "명사",
    mean: "효율",
    syn: ["能率"],
    collocations: [{ ja: "効率を上げる", ko: "효율을 높이다" }, { ja: "効率を図る", ko: "효율을 꾀하다" }],
    examples: [{ type: "on", label: "음독", ja: "最新のITツールを積極的に導入することで、日々の定常業務の効率を飛躍的に向上させる。", ko: "최신 IT 도구를 적극 도입함으로써 매일의 정형 업무 효율을 비약적으로 향상시키다." }]
  },
  {
    id: 1796, day: 11, level: "N2",
    word: "処理", kana: "しょり", pos: "명사 (する동사)",
    mean: "처리",
    syn: ["片付ける"],
    collocations: [{ ja: "事務処理", ko: "사무 처리" }, { ja: "ごみ処理", ko: "쓰레기 처리" }],
    examples: [{ type: "ex", label: "예문", ja: "大量のデータを短時間で処理する。", ko: "대량의 데이터를 단시간에 처리한다." }]
  },
  {
    id: 1797, day: 11, level: "N2",
    word: "管理", kana: "かんり", pos: "명사 (する동사)",
    mean: "관리",
    syn: [],
    collocations: [{ ja: "健康管理", ko: "건강 관리" }, { ja: "管理人", ko: "관리인" }],
    examples: [{ type: "ex", label: "예문", ja: "マンションの管理人に相談した。", ko: "아파트 관리인에게 상담했다." }]
  },
  {
    id: 1798, day: 11, level: "N2",
    word: "実施", kana: "じっし", pos: "명사 (する동사)",
    mean: "실시",
    syn: ["実行"],
    collocations: [{ ja: "調査を実施する", ko: "조사를 실시하다" }],
    examples: [{ type: "ex", label: "예문", ja: "来月から新制度が実施される。", ko: "다음 달부터 새 제도가 실시된다." }]
  },
  {
    id: 1799, day: 11, level: "N2",
    word: "実績", kana: "じっせき", pos: "명사",
    mean: "실적",
    syn: ["成果", "業績"],
    collocations: [{ ja: "実績を上げる", ko: "실적을 올리다" }, { ja: "実績がある", ko: "실적이 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はこの分野で多くの実績がある。", ko: "그는 이 분야에서 많은 실적이 있다." }]
  },
  {
    id: 1800, day: 11, level: "N2",
    word: "成果", kana: "せいか", pos: "명사",
    mean: "성과",
    syn: ["結果", "実績"],
    collocations: [{ ja: "成果を上げる", ko: "성과를 올리다" }, { ja: "研究の成果", ko: "연구 성과" }],
    examples: [{ type: "ex", label: "예문", ja: "長年の研究がようやく成果を上げた。", ko: "오랜 연구가 마침내 성과를 거두었다." }]
  },
  {
    id: 1801, day: 11, level: "N2",
    word: "業務", kana: "ぎょうむ", pos: "명사",
    mean: "업무",
    syn: ["仕事"],
    collocations: [{ ja: "業務内容", ko: "업무 내용" }, { ja: "業務を引き継ぐ", ko: "업무를 인계하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい業務を任された。", ko: "새 업무를 맡게 되었다." }]
  },
  {
    id: 57, day: 11, level: "N2",
    word: "根拠", kana: "こんきょ", pos: "명사",
    mean: "근거",
    syn: ["理由", "よりどころ"],
    collocations: [{ ja: "根拠を示す", ko: "명확한 근거를 대다" }, { ja: "根拠に乏しい", ko: "근거가 빈약하다" }],
    examples: [{ type: "on", label: "음독", ja: "論文を執筆する際は、客観的なデータや信頼できる文献という明確な根拠を示す必要がある。", ko: "논문을 집필할 때는 객관적인 데이터나 신뢰할 수 있는 문헌이라는 명확한 근거를 제시해야 한다." }]
  },
  {
    id: 1802, day: 11, level: "N2",
    word: "作業", kana: "さぎょう", pos: "명사 (する동사)",
    mean: "작업",
    syn: ["仕事"],
    collocations: [{ ja: "作業を進める", ko: "작업을 진행하다" }, { ja: "作業員", ko: "작업원" }],
    examples: [{ type: "ex", label: "예문", ja: "この作業は二時間ほどかかる。", ko: "이 작업은 두 시간 정도 걸린다." }]
  },
  {
    id: 1803, day: 11, level: "N1",
    word: "抜本的", kana: "ばっぽんてき", pos: "な형용사",
    mean: "근본적, 발본적",
    syn: ["根本的な"],
    collocations: [{ ja: "抜本的な改革", ko: "근본적인 개혁" }],
    examples: [{ type: "ex", label: "예문", ja: "抜本的な対策が求められている。", ko: "근본적인 대책이 요구되고 있다." }]
  },
  {
    id: 29, day: 11, level: "N1",
    word: "ジレンマ", kana: "じれんま", pos: "외래어",
    mean: "딜레마, 진퇴양난 (dilemma)",
    syn: ["板挟み"],
    collocations: [{ ja: "ジレンマに陥る", ko: "딜레마에 빠지다" }, { ja: "ジレンマを抱える", ko: "진퇴양난의 갈등을 안다" }],
    examples: [{ type: "ex", label: "예문", ja: "短期的な企業利益の追求と環境保護の責任との間で、深刻なジレンマに陥る。", ko: "단기적인 기업 이익 추구와 환경 보호 책임 사이에서 심각한 딜레마에 빠지다." }]
  },
  {
    id: 1804, day: 11, level: "N1",
    word: "本来", kana: "ほんらい", pos: "명사",
    mean: "본래, 원래",
    syn: ["元来"],
    collocations: [{ ja: "本来の目的", ko: "본래의 목적" }],
    examples: [{ type: "ex", label: "예문", ja: "本来の目的を忘れてはいけない。", ko: "본래의 목적을 잊어서는 안 된다." }]
  },
  {
    id: 30, day: 11, level: "N1",
    word: "メカニズム", kana: "めかにずむ", pos: "외래어",
    mean: "메커니즘, 구조, 작동 기제 (mechanism)",
    syn: ["仕組み"],
    collocations: [{ ja: "メカニズムを解明する", ko: "작동 메커니즘을 밝혀내다" }, { ja: "市場のメカニズム", ko: "시장 경제 구조" }],
    examples: [{ type: "ex", label: "예문", ja: "人間の脳が新しい記憶を長期的に定着させるメカニズムを科学的に解明する。", ko: "인간의 뇌가 새로운 기억을 장기적으로 정착시키는 메커니즘을 과학적으로 규명하다." }]
  },
  {
    id: 1805, day: 11, level: "N1",
    word: "圧倒", kana: "あっとう", pos: "명사 (する동사)",
    mean: "압도",
    syn: [],
    collocations: [{ ja: "圧倒的", ko: "압도적" }, { ja: "相手を圧倒する", ko: "상대를 압도하다" }],
    examples: [{ type: "ex", label: "예문", ja: "その案は圧倒的な支持を得た。", ko: "그 안은 압도적인 지지를 얻었다." }]
  },
  {
    id: 33, day: 11, level: "N1",
    word: "あえて", kana: "あえて", pos: "부사",
    mean: "굳이, 과감하게",
    syn: ["わざと", "思い切って"],
    collocations: [{ ja: "あえて言えば", ko: "굳이 말하자면" }, { ja: "あえて挑戦する", ko: "과감하게 도전하다" }],
    examples: [{ type: "ex", label: "예문", ja: "周囲の反対意見が非常に多い中で、あえて困難な道を選び、自らの信念を貫いた。", ko: "주변의 반대 의견이 대단히 많은 가운데 굳이 험난한 길을 택하여 자신의 신념을 관철했다." }]
  },
  {
    id: 1806, day: 11, level: "N1",
    word: "依存", kana: "いぞん", pos: "명사 (する동사)",
    mean: "의존",
    syn: ["頼る"],
    collocations: [{ ja: "依存度", ko: "의존도" }, { ja: "スマホ依存", ko: "스마트폰 의존" }],
    examples: [{ type: "ex", label: "예문", ja: "日本はエネルギーの多くを輸入に依存している。", ko: "일본은 에너지의 상당 부분을 수입에 의존하고 있다." }]
  },
  {
    id: 1807, day: 11, level: "N1",
    word: "改定", kana: "かいてい", pos: "명사 (する동사)",
    mean: "개정 (규정·요금 등)",
    syn: ["改める"],
    collocations: [{ ja: "料金を改定する", ko: "요금을 개정하다" }],
    examples: [{ type: "ex", label: "예문", ja: "来月から運賃が改定される。", ko: "다음 달부터 운임이 개정된다." }]
  },
  {
    id: 35, day: 11, level: "N1",
    word: "ろくに", kana: "ろくに", pos: "부사",
    mean: "제대로, 온전히 (~ない 부정 호응)",
    syn: ["十分に", "満足に"],
    collocations: [{ ja: "ろくに寝ていない", ko: "제대로 자지 못했다" }, { ja: "ろくに話せない", ko: "변변히 말도 못 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "締め切り直前の業務に追われ、昨日はろくに食事も睡眠も取れなかった。", ko: "마감 직전의 업무에 쫓겨 어제는 제대로 식사도 수면도 취하지 못했다." }]
  },
  // ==========================================
  // [DAY 12] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 1808, day: 12, level: "N2",
    word: "砕ける", kana: "くだける", pos: "동사 (자동사)",
    mean: "부서지다, 허물없어지다",
    syn: ["割れる"],
    collocations: [{ ja: "波が砕ける", ko: "파도가 부서지다" }, { ja: "砕けた話し方", ko: "허물없는 말투" }],
    examples: [{ type: "ex", label: "예문", ja: "コップが床に落ちて粉々に砕けた。", ko: "컵이 바닥에 떨어져 산산조각 났다." }]
  },
  {
    id: 1809, day: 12, level: "N2",
    word: "くたびれる", kana: "くたびれる", pos: "동사 (자동사)",
    mean: "지치다, 낡다",
    syn: ["疲れる"],
    collocations: [{ ja: "歩きくたびれる", ko: "걷다 지치다" }, { ja: "くたびれた靴", ko: "낡은 신발" }],
    examples: [{ type: "ex", label: "예문", ja: "一日中歩き回って、すっかりくたびれた。", ko: "하루 종일 돌아다녀서 완전히 지쳤다." }]
  },
  {
    id: 15, day: 12, level: "N2",
    word: "削る", kana: "けずる", pos: "동사 (5단 타동사)",
    mean: "깎다, 삭감하다",
    syn: ["削減する", "減らす"],
    collocations: [{ ja: "予算を削る", ko: "예산을 삭감하다" }, { ja: "身を削る", ko: "뼈를 깎는 고통을 겪다/몸을 축내다" }],
    examples: [{ type: "kun", label: "훈독", ja: "予算不足を補うため、来年度の広告宣伝費用を大幅に削る。", ko: "예산 부족을 메우기 위해 내년도 광고 홍보 비용을 대폭 깎다(삭감하다)." }, { type: "on", label: "음독", ja: "業務の無駄を徹底的に洗い出し、コスト削減(さくげん)を達成した。", ko: "업무의 낭비를 철저히 색출하여 비용 절감을 달성했다." }]
  },
  {
    id: 1810, day: 12, level: "N2",
    word: "組み立てる", kana: "くみたてる", pos: "동사 (타동사)",
    mean: "조립하다, 구성하다",
    syn: [],
    collocations: [{ ja: "家具を組み立てる", ko: "가구를 조립하다" }, { ja: "論理を組み立てる", ko: "논리를 세우다" }],
    examples: [{ type: "ex", label: "예문", ja: "説明書を見ながら本棚を組み立てた。", ko: "설명서를 보면서 책장을 조립했다." }]
  },
  {
    id: 1811, day: 12, level: "N2",
    word: "汲む", kana: "くむ", pos: "동사 (타동사)",
    mean: "(물을) 푸다, 헤아리다",
    syn: [],
    collocations: [{ ja: "水を汲む", ko: "물을 푸다" }, { ja: "気持ちを汲む", ko: "마음을 헤아리다" }],
    examples: [{ type: "ex", label: "예문", ja: "相手の気持ちを汲んで返事をした。", ko: "상대의 마음을 헤아려 답했다." }]
  },
  {
    id: 1812, day: 12, level: "N2",
    word: "こぼす", kana: "こぼす", pos: "동사 (타동사)",
    mean: "흘리다, 푸념하다",
    syn: [],
    collocations: [{ ja: "お茶をこぼす", ko: "차를 흘리다" }, { ja: "愚痴をこぼす", ko: "푸념하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女はいつも仕事の愚痴をこぼしている。", ko: "그녀는 늘 일에 대한 푸념을 늘어놓는다." }]
  },
  {
    id: 1813, day: 12, level: "N2",
    word: "こぼれる", kana: "こぼれる", pos: "동사 (자동사)",
    mean: "넘쳐흐르다, 흘러나오다",
    syn: ["あふれる"],
    collocations: [{ ja: "涙がこぼれる", ko: "눈물이 흘러내리다" }, { ja: "笑みがこぼれる", ko: "미소가 번지다" }],
    examples: [{ type: "ex", label: "예문", ja: "嬉しくて思わず笑みがこぼれた。", ko: "기뻐서 저도 모르게 미소가 번졌다." }]
  },
  {
    id: 1814, day: 12, level: "N2",
    word: "込める", kana: "こめる", pos: "동사 (타동사)",
    mean: "담다, 넣다",
    syn: ["込む"],
    collocations: [{ ja: "心を込める", ko: "정성을 담다" }, { ja: "力を込める", ko: "힘을 주다" }],
    examples: [{ type: "ex", label: "예문", ja: "心を込めて手紙を書いた。", ko: "정성을 담아 편지를 썼다." }]
  },
  {
    id: 16, day: 12, level: "N2",
    word: "補う", kana: "おぎなう", pos: "동사 (5단 타동사)",
    mean: "보충하다, 메우다",
    syn: ["補充する", "足す"],
    collocations: [{ ja: "欠点を補う", ko: "결점을 메우다/보완하다" }, { ja: "不足を補う", ko: "부족한 부분을 채우다" }],
    examples: [{ type: "kun", label: "훈독", ja: "食事だけでは不足しがちなビタミンを、サプリメントで補う。", ko: "식사만으로는 부족해지기 쉬운 비타민을 영양제로 보충하다." }, { type: "on", label: "음독", ja: "災害現場の最前線へ、緊急の食料と医療品を補給(ほきゅう)する。", ko: "재해 현장의 최전선으로 긴급 식량과 의료품을 보급하다." }]
  },
  {
    id: 1815, day: 12, level: "N2",
    word: "凝らす", kana: "こらす", pos: "동사 (타동사)",
    mean: "집중시키다, 궁리하다",
    syn: ["集中させる"],
    collocations: [{ ja: "工夫を凝らす", ko: "궁리를 거듭하다" }, { ja: "目を凝らす", ko: "눈여겨보다" }],
    examples: [{ type: "ex", label: "예문", ja: "暗闇の中で目を凝らした。", ko: "어둠 속에서 눈을 크게 뜨고 살폈다." }]
  },
  {
    id: 1816, day: 12, level: "N2",
    word: "こらえる", kana: "こらえる", pos: "동사 (타동사)",
    mean: "참다, 견디다",
    syn: ["我慢する", "耐える"],
    collocations: [{ ja: "涙をこらえる", ko: "눈물을 참다" }, { ja: "痛みをこらえる", ko: "통증을 참다" }],
    examples: [{ type: "ex", label: "예문", ja: "笑いをこらえるのが大変だった。", ko: "웃음을 참느라 힘들었다." }]
  },
  {
    id: 1817, day: 12, level: "N2",
    word: "逆らう", kana: "さからう", pos: "동사 (자동사)",
    mean: "거스르다, 거역하다",
    syn: ["反抗する"],
    collocations: [{ ja: "親に逆らう", ko: "부모에게 반항하다" }, { ja: "流れに逆らう", ko: "흐름을 거스르다" }],
    examples: [{ type: "ex", label: "예문", ja: "時代の流れに逆らうことはできない。", ko: "시대의 흐름을 거스를 수는 없다." }]
  },
  {
    id: 1818, day: 12, level: "N2",
    word: "快適", kana: "かいてき", pos: "な형용사",
    mean: "쾌적함",
    syn: ["心地よい"],
    collocations: [{ ja: "快適な生活", ko: "쾌적한 생활" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい部屋はとても快適だ。", ko: "새 방은 아주 쾌적하다." }]
  },
  {
    id: 25, day: 12, level: "N2",
    word: "密接", kana: "みっせつ", pos: "な형용사",
    mean: "밀접함",
    syn: ["深い関係にある", "緊密な"],
    collocations: [{ ja: "密接な関係", ko: "밀접한 관계" }, { ja: "密接に関わる", ko: "밀접하게 관여하다" }],
    examples: [{ type: "on", label: "음독", ja: "現代社会の経済活動と地球環境問題は、互いに密接に関連している。", ko: "현대 사회의 경제 활동과 지구 환경 문제는 서로 밀접하게 관련되어 있다." }]
  },
  {
    id: 1819, day: 12, level: "N2",
    word: "画期的", kana: "かっきてき", pos: "な형용사",
    mean: "획기적임",
    syn: ["革新的な"],
    collocations: [{ ja: "画期的な発明", ko: "획기적인 발명" }],
    examples: [{ type: "ex", label: "예문", ja: "これは画期的なアイデアだ。", ko: "이것은 획기적인 아이디어다." }]
  },
  {
    id: 1820, day: 12, level: "N2",
    word: "堅苦しい", kana: "かたくるしい", pos: "い형용사",
    mean: "딱딱하다, 거북하다",
    syn: ["形式的な"],
    collocations: [{ ja: "堅苦しいあいさつ", ko: "딱딱한 인사" }],
    examples: [{ type: "ex", label: "예문", ja: "堅苦しいことは抜きにして楽しみましょう。", ko: "딱딱한 건 빼고 즐깁시다." }]
  },
  {
    id: 1821, day: 12, level: "N2",
    word: "簡潔", kana: "かんけつ", pos: "な형용사",
    mean: "간결함",
    syn: ["短い"],
    collocations: [{ ja: "簡潔な説明", ko: "간결한 설명" }],
    examples: [{ type: "ex", label: "예문", ja: "報告は簡潔にまとめてください。", ko: "보고는 간결하게 정리해 주세요." }]
  },
  {
    id: 1822, day: 12, level: "N2",
    word: "気軽", kana: "きがる", pos: "な형용사",
    mean: "부담 없음, 가벼운 마음",
    syn: ["手軽な"],
    collocations: [{ ja: "気軽に参加する", ko: "부담 없이 참가하다" }],
    examples: [{ type: "ex", label: "예문", ja: "分からないことがあれば、気軽に聞いてください。", ko: "모르는 것이 있으면 부담 없이 물어보세요." }]
  },
  {
    id: 1823, day: 12, level: "N2",
    word: "ケース", kana: "ケース", pos: "외래어",
    mean: "경우, 사례; 케이스 (case)",
    syn: ["場合", "事例"],
    collocations: [{ ja: "このケースでは", ko: "이 경우에는" }],
    examples: [{ type: "ex", label: "예문", ja: "このようなケースは珍しい。", ko: "이런 사례는 드물다." }]
  },
  {
    id: 31, day: 12, level: "N2",
    word: "コスト", kana: "こすと", pos: "외래어",
    mean: "비용, 원가 (cost)",
    syn: ["費用", "経費"],
    collocations: [{ ja: "コストを削減する", ko: "비용을 절감하다" }, { ja: "コストがかかる", ko: "비용이 발생하다" }],
    examples: [{ type: "ex", label: "예문", ja: "製造コストを大幅に削減しながらも、製品の高品質を維持するための工夫を凝らす。", ko: "제조 비용을 대폭 절감하면서도 제품의 고품질을 유지하기 위한 궁리를 거듭하다." }]
  },
  {
    id: 1824, day: 12, level: "N2",
    word: "コメント", kana: "コメント", pos: "외래어",
    mean: "코멘트, 의견 (comment)",
    syn: ["意見"],
    collocations: [{ ja: "コメントを寄せる", ko: "의견을 보내다" }],
    examples: [{ type: "ex", label: "예문", ja: "記事にたくさんのコメントが寄せられた。", ko: "기사에 많은 댓글이 달렸다." }]
  },
  {
    id: 1825, day: 12, level: "N2",
    word: "大方", kana: "おおかた", pos: "부사",
    mean: "대부분, 대체로",
    syn: ["ほとんど", "大部分"],
    collocations: [{ ja: "大方の予想", ko: "대부분의 예상" }],
    examples: [{ type: "ex", label: "예문", ja: "仕事は大方片付いた。", ko: "일은 대부분 정리되었다." }]
  },
  {
    id: 1826, day: 12, level: "N2",
    word: "主として", kana: "しゅとして", pos: "부사",
    mean: "주로",
    syn: ["主に"],
    collocations: [{ ja: "主として学生が利用する", ko: "주로 학생이 이용하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この雑誌は主として若者向けだ。", ko: "이 잡지는 주로 젊은이 대상이다." }]
  },
  {
    id: 1827, day: 12, level: "N2",
    word: "思わず", kana: "おもわず", pos: "부사",
    mean: "무심코, 자기도 모르게",
    syn: ["つい"],
    collocations: [{ ja: "思わず笑う", ko: "저도 모르게 웃다" }],
    examples: [{ type: "ex", label: "예문", ja: "あまりの痛さに思わず声を上げた。", ko: "너무 아파서 저도 모르게 소리를 질렀다." }]
  },
  {
    id: 1828, day: 12, level: "N2",
    word: "代わる代わる", kana: "かわるがわる", pos: "부사",
    mean: "번갈아",
    syn: ["交互に"],
    collocations: [{ ja: "代わる代わる運転する", ko: "번갈아 운전하다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人は代わる代わる子どもの面倒を見た。", ko: "두 사람은 번갈아 아이를 돌보았다." }]
  },
  {
    id: 38, day: 12, level: "N2",
    word: "なおさら", kana: "なおさら", pos: "부사",
    mean: "더욱이, 한층 더",
    syn: ["一層", "ますます"],
    collocations: [{ ja: "なおさら重要だ", ko: "한층 더 중요하다" }, { ja: "なおさら疑わしい", ko: "더욱이 미심쩍다" }],
    examples: [{ type: "ex", label: "예문", ja: "大雨で路面が滑りやすくなっているため、夜間はなおさら慎重に運転しなければならない。", ko: "폭우로 노면이 미끄러워져 있기 때문에 야간에는 한층 더 신중하게 운전해야만 한다." }]
  },
  {
    id: 1829, day: 12, level: "N2",
    word: "ぎっしり", kana: "ぎっしり", pos: "부사 (의성어·의태어)",
    mean: "빽빽이, 가득",
    syn: ["いっぱい"],
    collocations: [{ ja: "ぎっしり詰まる", ko: "빽빽이 들어차다" }],
    examples: [{ type: "ex", label: "예문", ja: "予定が来月までぎっしり詰まっている。", ko: "예정이 다음 달까지 빽빽이 차 있다." }]
  },
  {
    id: 1830, day: 12, level: "N2",
    word: "くよくよ", kana: "くよくよ", pos: "부사 (의성어·의태어)",
    mean: "끙끙 (사소한 일로 고민하는 모양)",
    syn: ["思い悩む"],
    collocations: [{ ja: "くよくよ悩む", ko: "끙끙 앓다" }],
    examples: [{ type: "ex", label: "예문", ja: "過ぎたことをくよくよしても仕方がない。", ko: "지난 일을 끙끙 앓아 봐야 소용없다." }]
  },
  {
    id: 1831, day: 12, level: "N2",
    word: "かつ", kana: "かつ", pos: "접속사",
    mean: "또한, 동시에",
    syn: ["そして", "同時に"],
    collocations: [{ ja: "かつ", ko: "또한" }],
    examples: [{ type: "ex", label: "예문", ja: "迅速かつ正確に処理する。", ko: "신속하고도 정확하게 처리한다." }]
  },
  {
    id: 1832, day: 12, level: "N2",
    word: "副〜", kana: "ふく", pos: "접두어",
    mean: "부~ (보조)",
    syn: [],
    collocations: [{ ja: "副社長", ko: "부사장" }, { ja: "副作用", ko: "부작용" }, { ja: "副収入", ko: "부수입" }],
    examples: []
  },
  {
    id: 1833, day: 12, level: "N2",
    word: "手順", kana: "てじゅん", pos: "명사",
    mean: "순서, 절차",
    syn: ["順序", "段取り"],
    collocations: [{ ja: "手順を守る", ko: "순서를 지키다" }, { ja: "作業の手順", ko: "작업 절차" }],
    examples: [{ type: "ex", label: "예문", ja: "マニュアルの手順通りに進めてください。", ko: "매뉴얼의 순서대로 진행해 주세요." }]
  },
  {
    id: 1834, day: 12, level: "N2",
    word: "手間", kana: "てま", pos: "명사",
    mean: "수고, 품",
    syn: ["手数"],
    collocations: [{ ja: "手間がかかる", ko: "손이 많이 가다" }, { ja: "手間を省く", ko: "수고를 덜다" }],
    examples: [{ type: "ex", label: "예문", ja: "この料理は手間がかかる。", ko: "이 요리는 손이 많이 간다." }]
  },
  {
    id: 1835, day: 12, level: "N2",
    word: "工夫", kana: "くふう", pos: "명사 (する동사)",
    mean: "궁리, 고안",
    syn: ["考案"],
    collocations: [{ ja: "工夫を凝らす", ko: "여러모로 궁리하다" }, { ja: "工夫する", ko: "궁리하다" }],
    examples: [{ type: "ex", label: "예문", ja: "少し工夫すれば、もっと便利になる。", ko: "조금 궁리하면 더 편리해진다." }]
  },
  {
    id: 1836, day: 12, level: "N2",
    word: "改善", kana: "かいぜん", pos: "명사 (する동사)",
    mean: "개선",
    syn: ["改良", "良くする"],
    collocations: [{ ja: "改善を図る", ko: "개선을 도모하다" }, { ja: "生活改善", ko: "생활 개선" }],
    examples: [{ type: "ex", label: "예문", ja: "職場環境の改善を求める。", ko: "직장 환경 개선을 요구한다." }]
  },
  {
    id: 1837, day: 12, level: "N2",
    word: "向上", kana: "こうじょう", pos: "명사 (する동사)",
    mean: "향상",
    syn: ["上達"],
    collocations: [{ ja: "品質の向上", ko: "품질 향상" }, { ja: "技術が向上する", ko: "기술이 향상되다" }],
    examples: [{ type: "ex", label: "예문", ja: "サービスの向上に努めている。", ko: "서비스 향상에 힘쓰고 있다." }]
  },
  {
    id: 58, day: 12, level: "N2",
    word: "視点", kana: "してん", pos: "명사",
    mean: "시점, 관점",
    syn: ["観点", "立場"],
    collocations: [{ ja: "視点を変える", ko: "관점을 전환하다" }, { ja: "客観的な視点", ko: "객관적인 시각" }],
    examples: [{ type: "on", label: "음독", ja: "自らの固定観念にとらわれることなく、多様で多角的な視点から物事を捉え直すことが大切だ。", ko: "자신의 고정관념에 사로잡히지 않고 다양하고 다각적인 관점에서 사물을 다시 파악하는 것이 중요하다." }]
  },
  {
    id: 1838, day: 12, level: "N2",
    word: "発達", kana: "はったつ", pos: "명사 (する동사)",
    mean: "발달",
    syn: ["発展"],
    collocations: [{ ja: "技術の発達", ko: "기술의 발달" }, { ja: "心身の発達", ko: "심신의 발달" }],
    examples: [{ type: "ex", label: "예문", ja: "交通機関の発達で移動が楽になった。", ko: "교통수단의 발달로 이동이 편해졌다." }]
  },
  {
    id: 1839, day: 12, level: "N2",
    word: "導入", kana: "どうにゅう", pos: "명사 (する동사)",
    mean: "도입",
    syn: ["取り入れる"],
    collocations: [{ ja: "新技術を導入する", ko: "신기술을 도입하다" }],
    examples: [{ type: "ex", label: "예문", ja: "会社は新しいシステムを導入した。", ko: "회사는 새로운 시스템을 도입했다." }]
  },
  {
    id: 1840, day: 12, level: "N2",
    word: "開発", kana: "かいはつ", pos: "명사 (する동사)",
    mean: "개발",
    syn: [],
    collocations: [{ ja: "新商品の開発", ko: "신상품 개발" }, { ja: "都市開発", ko: "도시 개발" }],
    examples: [{ type: "ex", label: "예문", ja: "新薬の開発には長い年月がかかる。", ko: "신약 개발에는 오랜 세월이 걸린다." }]
  },
  {
    id: 1841, day: 12, level: "N2",
    word: "研究", kana: "けんきゅう", pos: "명사 (する동사)",
    mean: "연구",
    syn: [],
    collocations: [{ ja: "研究を進める", ko: "연구를 진행하다" }, { ja: "研究者", ko: "연구자" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は日本文学を研究している。", ko: "그는 일본 문학을 연구하고 있다." }]
  },
  {
    id: 1842, day: 12, level: "N2",
    word: "技術", kana: "ぎじゅつ", pos: "명사",
    mean: "기술",
    syn: ["技"],
    collocations: [{ ja: "技術を身につける", ko: "기술을 익히다" }, { ja: "最新技術", ko: "최신 기술" }],
    examples: [{ type: "ex", label: "예문", ja: "日本の技術は世界で高く評価されている。", ko: "일본의 기술은 세계에서 높이 평가받고 있다." }]
  },
  {
    id: 1843, day: 12, level: "N2",
    word: "機能", kana: "きのう", pos: "명사 (する동사)",
    mean: "기능",
    syn: ["働き"],
    collocations: [{ ja: "機能が多い", ko: "기능이 많다" }, { ja: "正常に機能する", ko: "정상적으로 기능하다" }],
    examples: [{ type: "ex", label: "예문", ja: "このスマホには便利な機能がたくさんある。", ko: "이 스마트폰에는 편리한 기능이 많이 있다." }]
  },
  {
    id: 1844, day: 12, level: "N2",
    word: "性能", kana: "せいのう", pos: "명사",
    mean: "성능",
    syn: [],
    collocations: [{ ja: "性能がいい", ko: "성능이 좋다" }, { ja: "高性能", ko: "고성능" }],
    examples: [{ type: "ex", label: "예문", ja: "新しいパソコンは性能が格段に上がった。", ko: "새 컴퓨터는 성능이 현격히 좋아졌다." }]
  },
  {
    id: 60, day: 12, level: "N2",
    word: "視野", kana: "しや", pos: "명사",
    mean: "시야, 안목",
    syn: ["視界", "見識"],
    collocations: [{ ja: "視野を広げる", ko: "시야를 넓히다" }, { ja: "視野に入れる", ko: "염두에 두다/고려하다" }],
    examples: [{ type: "on", label: "음독", ja: "若いうちに海外での生活や異文化を体験することは、物事を見る視野を広げる上で有益だ。", ko: "젊을 때 해외 생활이나 이문화를 체험하는 것은 사물을 바라보는 시야를 넓히는 데 유익하다." }]
  },
  {
    id: 1845, day: 12, level: "N2",
    word: "装置", kana: "そうち", pos: "명사 (する동사)",
    mean: "장치",
    syn: ["設備"],
    collocations: [{ ja: "安全装置", ko: "안전장치" }, { ja: "装置を設置する", ko: "장치를 설치하다" }],
    examples: [{ type: "ex", label: "예문", ja: "工場に新しい装置を設置した。", ko: "공장에 새로운 장치를 설치했다." }]
  },
  {
    id: 1846, day: 12, level: "N2",
    word: "設計", kana: "せっけい", pos: "명사 (する동사)",
    mean: "설계",
    syn: [],
    collocations: [{ ja: "家を設計する", ko: "집을 설계하다" }, { ja: "設計図", ko: "설계도" }],
    examples: [{ type: "ex", label: "예문", ja: "この建物は有名な建築家が設計した。", ko: "이 건물은 유명한 건축가가 설계했다." }]
  },
  {
    id: 1847, day: 12, level: "N2",
    word: "構造", kana: "こうぞう", pos: "명사",
    mean: "구조",
    syn: ["仕組み"],
    collocations: [{ ja: "建物の構造", ko: "건물 구조" }, { ja: "社会構造", ko: "사회 구조" }],
    examples: [{ type: "ex", label: "예문", ja: "この橋は地震に強い構造になっている。", ko: "이 다리는 지진에 강한 구조로 되어 있다." }]
  },
  {
    id: 1848, day: 12, level: "N2",
    word: "原理", kana: "げんり", pos: "명사",
    mean: "원리",
    syn: ["仕組み"],
    collocations: [{ ja: "原理を理解する", ko: "원리를 이해하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この機械が動く原理を説明する。", ko: "이 기계가 움직이는 원리를 설명한다." }]
  },
  {
    id: 1849, day: 12, level: "N2",
    word: "理論", kana: "りろん", pos: "명사",
    mean: "이론",
    syn: [],
    collocations: [{ ja: "理論と実践", ko: "이론과 실천" }, { ja: "理論的な説明", ko: "이론적인 설명" }],
    examples: [{ type: "ex", label: "예문", ja: "理論と現実は必ずしも一致しない。", ko: "이론과 현실은 반드시 일치하지는 않는다." }]
  },
  {
    id: 1850, day: 12, level: "N2",
    word: "仮説", kana: "かせつ", pos: "명사",
    mean: "가설",
    syn: [],
    collocations: [{ ja: "仮説を立てる", ko: "가설을 세우다" }, { ja: "仮説を検証する", ko: "가설을 검증하다" }],
    examples: [{ type: "ex", label: "예문", ja: "実験によって仮説が正しいことが分かった。", ko: "실험으로 가설이 옳다는 것을 알았다." }]
  },
  {
    id: 61, day: 12, level: "N2",
    word: "充実", kana: "じゅうじつ", pos: "명사",
    mean: "충실 (내용이 꽉 참, 보람참)",
    syn: ["満ち足りていること", "内容が豊かなこと"],
    collocations: [{ ja: "充実を図る", ko: "내실을 다지다" }, { ja: "充実した日々", ko: "알찬 나날" }],
    examples: [{ type: "on", label: "음독", ja: "社員が安心して働けるよう、福利厚生や社内教育制度の充実を図ることが重要だ。", ko: "사원이 안심하고 일할 수 있도록 복리후생과 사내 교육 제도의 충실화를 도모하는 것이 중요하다." }]
  },
  {
    id: 1851, day: 12, level: "N2",
    word: "実態", kana: "じったい", pos: "명사",
    mean: "실태",
    syn: ["実情", "現状"],
    collocations: [{ ja: "実態を調べる", ko: "실태를 조사하다" }, { ja: "実態調査", ko: "실태 조사" }],
    examples: [{ type: "ex", label: "예문", ja: "若者の生活の実態を調査した。", ko: "젊은이의 생활 실태를 조사했다." }]
  },
  {
    id: 1852, day: 12, level: "N2",
    word: "現実", kana: "げんじつ", pos: "명사",
    mean: "현실",
    syn: [],
    collocations: [{ ja: "現実を見る", ko: "현실을 보다" }, { ja: "現実的な案", ko: "현실적인 안" }],
    examples: [{ type: "ex", label: "예문", ja: "夢と現実は違う。", ko: "꿈과 현실은 다르다." }]
  },
  {
    id: 1853, day: 12, level: "N1",
    word: "回避", kana: "かいひ", pos: "명사 (する동사)",
    mean: "회피",
    syn: ["避ける"],
    collocations: [{ ja: "危険を回避する", ko: "위험을 회피하다" }, { ja: "責任回避", ko: "책임 회피" }],
    examples: [{ type: "ex", label: "예문", ja: "話し合いによって最悪の事態は回避された。", ko: "대화로 최악의 사태는 회피되었다." }]
  },
  {
    id: 36, day: 12, level: "N1",
    word: "一概に", kana: "いちがいに", pos: "부사",
    mean: "일괄적으로, 무조건 (~ない 부정 호응)",
    syn: ["一律に", "すべて同じように"],
    collocations: [{ ja: "一概には言えない", ko: "일괄적으로는 말할 수 없다" }, { ja: "一概に否定できない", ko: "무조건 부정할 수는 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "価格が安いからといって、一概に品質が劣っていると決めつけることはできない。", ko: "가격이 저렴하다고 해서 일괄적으로 품질이 떨어진다고 단정할 수는 없다." }]
  },
  {
    id: 1854, day: 12, level: "N1",
    word: "拡大", kana: "かくだい", pos: "명사 (する동사)",
    mean: "확대",
    syn: ["広げる"],
    collocations: [{ ja: "規模を拡大する", ko: "규모를 확대하다" }, { ja: "被害が拡大する", ko: "피해가 확대되다" }],
    examples: [{ type: "ex", label: "예문", ja: "感染の拡大を防ぐ対策が取られた。", ko: "감염 확대를 막는 대책이 취해졌다." }]
  },
  {
    id: 1855, day: 12, level: "N1",
    word: "格段", kana: "かくだん", pos: "명사",
    mean: "각별함, 현격함",
    syn: ["大幅"],
    collocations: [{ ja: "格段に進歩する", ko: "현격히 진보하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新製品は性能が格段に向上した。", ko: "신제품은 성능이 현격히 향상되었다." }]
  },
  {
    id: 39, day: 12, level: "N1",
    word: "首を傾げる", kana: "くびをかしげる", pos: "관용구",
    mean: "고개를 갸웃거리다, 의구심을 품다",
    syn: ["疑問に思う", "不思議に思う"],
    collocations: [{ ja: "説明に首を傾げる", ko: "설명에 의구심을 품다" }, { ja: "判定に首を傾げる", ko: "판정에 고개를 갸웃거리다" }],
    examples: [{ type: "ex", label: "예문", ja: "提出された報告書の不自然なデータを見て、会議の出席者全員が首を傾げた。", ko: "제출된 보고서의 부자연스러운 데이터를 보고 회의 참석자 전원이 고개를 갸웃거렸다." }]
  },
  {
    id: 1856, day: 12, level: "N1",
    word: "加速", kana: "かそく", pos: "명사 (する동사)",
    mean: "가속",
    syn: [],
    collocations: [{ ja: "加速する", ko: "가속하다" }, { ja: "高齢化が加速する", ko: "고령화가 가속되다" }],
    examples: [{ type: "ex", label: "예문", ja: "少子高齢化が加速している。", ko: "저출산 고령화가 가속되고 있다." }]
  },
  {
    id: 43, day: 12, level: "N1",
    word: "契機", kana: "けいき", pos: "명사",
    mean: "계기, 결정적 전환점",
    syn: ["きっかけ"],
    collocations: [{ ja: "〜を契機として", ko: "~를 결정적 계기로 삼아" }, { ja: "発展の契機", ko: "발전의 전환점" }],
    examples: [{ type: "on", label: "음독", ja: "海外でのボランティア活動への参加を契機に、国際協力の道に進むことを決意した。", ko: "해외 봉사 활동 참여를 계기로 국제 협력의 길로 나아갈 것을 결심했다." }]
  },
  {
    id: 1857, day: 12, level: "N1",
    word: "過程", kana: "かてい", pos: "명사",
    mean: "과정",
    syn: ["プロセス"],
    collocations: [{ ja: "成長の過程", ko: "성장 과정" }],
    examples: [{ type: "ex", label: "예문", ja: "結果だけでなく過程も大切だ。", ko: "결과뿐 아니라 과정도 중요하다." }]
  },
  // ==========================================
  // [DAY 13] N2 필수 + N1 · 62개
  // ==========================================
  {
    id: 1858, day: 13, level: "N2",
    word: "差し出す", kana: "さしだす", pos: "동사 (타동사)",
    mean: "내밀다, 제출하다",
    syn: ["提出する"],
    collocations: [{ ja: "手を差し出す", ko: "손을 내밀다" }, { ja: "書類を差し出す", ko: "서류를 제출하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は黙って名刺を差し出した。", ko: "그는 말없이 명함을 내밀었다." }]
  },
  {
    id: 1859, day: 13, level: "N2",
    word: "差し支える", kana: "さしつかえる", pos: "동사 (자동사)",
    mean: "지장이 있다",
    syn: ["支障がある"],
    collocations: [{ ja: "仕事に差し支える", ko: "일에 지장이 있다" }, { ja: "差し支えなければ", ko: "괜찮으시다면" }],
    examples: [{ type: "ex", label: "예문", ja: "差し支えなければ、ご連絡先を教えてください。", ko: "괜찮으시다면 연락처를 알려 주세요." }]
  },
  {
    id: 17, day: 13, level: "N2",
    word: "尽くす", kana: "つくす", pos: "동사 (5단 타동사)",
    mean: "다하다, 헌신하다, 남김없이 ~하다",
    syn: ["尽力する", "使い切る"],
    collocations: [{ ja: "全力を尽くす", ko: "전력을 다하다" }, { ja: "最善を尽くす", ko: "최선을 다하다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "困難なプロジェクトを成功させるため、持てる全力を尽くす。", ko: "어려운 프로젝트를 성공시키기 위해 가진 전력을 다하다." }],
    polysemy: [
      { def: "① (힘·수단·성의를) 모두 다 쏟다", ja: "あらゆる手を尽くして交渉に臨んだが、合意には至らなかった。", ko: "온갖 수단을 다 써서 협상에 임했으나 합의에는 이르지 못했다." },
      { def: "② 남이나 사회를 위해 몸 바쳐 헌신하다", ja: "地域社会の医療発展のために、生涯をかけて尽くした名医。", ko: "지역 사회의 의료 발전을 위해 평생을 바쳐 헌신한 명의." },
      { def: "③ (표현·언어로) 남김없이 다 해내다", ja: "ご恩に対する感謝の気持ちは、とても言葉では言い尽くせない。", ko: "은혜에 대한 감사의 마음은 도저히 말로는 다 표현할 수 없다." }
    ]
  },
  {
    id: 1860, day: 13, level: "N2",
    word: "定める", kana: "さだめる", pos: "동사 (타동사)",
    mean: "정하다",
    syn: ["決める"],
    collocations: [{ ja: "目標を定める", ko: "목표를 정하다" }, { ja: "法律で定める", ko: "법률로 정하다" }],
    examples: [{ type: "ex", label: "예문", ja: "法律で定められた手続きに従う。", ko: "법률로 정해진 절차에 따른다." }]
  },
  {
    id: 1861, day: 13, level: "N2",
    word: "錆びる", kana: "さびる", pos: "동사 (자동사)",
    mean: "녹슬다",
    syn: [],
    collocations: [{ ja: "鉄が錆びる", ko: "쇠가 녹슬다" }, { ja: "腕が錆びる", ko: "솜씨가 녹슬다" }],
    examples: [{ type: "ex", label: "예문", ja: "雨に濡れた自転車が錆びてしまった。", ko: "비에 젖은 자전거가 녹슬어 버렸다." }]
  },
  {
    id: 1862, day: 13, level: "N2",
    word: "さらす", kana: "さらす", pos: "동사 (타동사)",
    mean: "드러내다, 노출시키다",
    syn: ["当てる"],
    collocations: [{ ja: "日光にさらす", ko: "햇볕에 쬐다" }, { ja: "危険にさらす", ko: "위험에 노출시키다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもを危険にさらすわけにはいかない。", ko: "아이를 위험에 노출시킬 수는 없다." }]
  },
  {
    id: 1863, day: 13, level: "N2",
    word: "仕上げる", kana: "しあげる", pos: "동사 (타동사)",
    mean: "마무리하다, 완성하다",
    syn: ["完成させる"],
    collocations: [{ ja: "作品を仕上げる", ko: "작품을 완성하다" }, { ja: "報告書を仕上げる", ko: "보고서를 마무리하다" }],
    examples: [{ type: "ex", label: "예문", ja: "徹夜して報告書を仕上げた。", ko: "밤을 새워 보고서를 마무리했다." }]
  },
  {
    id: 1864, day: 13, level: "N2",
    word: "しくじる", kana: "しくじる", pos: "동사 (타동사)",
    mean: "실수하다, 실패하다",
    syn: ["失敗する"],
    collocations: [{ ja: "面接でしくじる", ko: "면접에서 실수하다" }],
    examples: [{ type: "ex", label: "예문", ja: "大事な場面でしくじってしまった。", ko: "중요한 장면에서 실수해 버렸다." }]
  },
  {
    id: 71, day: 13, level: "N2",
    word: "焦る", kana: "あせる", pos: "동사 (5단 자동사)",
    mean: "초조해하다, 서두르다",
    syn: ["いらいらする", "急ぐ"],
    collocations: [{ ja: "気が焦る", ko: "마음만 초조해지다" }, { ja: "焦りを感じる", ko: "초조함을 느끼다" }],
    examples: [{ type: "kun", label: "훈독", ja: "試験の直前になっても、決して焦らず冷静に問題文を読むべきだ。", ko: "시험 직전이 되어도 결코 초조해하지 말고 냉정하게 문제 지문을 읽어야 한다." }]
  },
  {
    id: 1865, day: 13, level: "N2",
    word: "茂る", kana: "しげる", pos: "동사 (자동사)",
    mean: "우거지다",
    syn: [],
    collocations: [{ ja: "草が茂る", ko: "풀이 우거지다" }, { ja: "木が茂る", ko: "나무가 무성하다" }],
    examples: [{ type: "ex", label: "예문", ja: "夏になると、庭の草が茂る。", ko: "여름이 되면 마당의 풀이 무성해진다." }]
  },
  {
    id: 1866, day: 13, level: "N2",
    word: "沈める", kana: "しずめる", pos: "동사 (타동사)",
    mean: "가라앉히다",
    syn: [],
    collocations: [{ ja: "船を沈める", ko: "배를 가라앉히다" }, { ja: "身を沈める", ko: "몸을 깊숙이 묻다" }],
    examples: [{ type: "ex", label: "예문", ja: "ソファーに深く身を沈めた。", ko: "소파에 몸을 깊숙이 파묻었다." }]
  },
  {
    id: 1867, day: 13, level: "N2",
    word: "慕う", kana: "したう", pos: "동사 (타동사)",
    mean: "그리워하다, 따르다",
    syn: ["敬う"],
    collocations: [{ ja: "先生を慕う", ko: "선생님을 따르다" }, { ja: "故郷を慕う", ko: "고향을 그리워하다" }],
    examples: [{ type: "ex", label: "예문", ja: "多くの後輩に慕われている。", ko: "많은 후배들이 따르고 있다." }]
  },
  {
    id: 1868, day: 13, level: "N2",
    word: "しびれる", kana: "しびれる", pos: "동사 (자동사)",
    mean: "저리다, 짜릿하다",
    syn: [],
    collocations: [{ ja: "足がしびれる", ko: "다리가 저리다" }, { ja: "しびれるような演奏", ko: "짜릿한 연주" }],
    examples: [{ type: "ex", label: "예문", ja: "正座をしていたら足がしびれた。", ko: "정좌를 했더니 다리가 저렸다." }]
  },
  {
    id: 1869, day: 13, level: "N2",
    word: "輝かしい", kana: "かがやかしい", pos: "い형용사",
    mean: "빛나다, 눈부시다",
    syn: ["華々しい"],
    collocations: [{ ja: "輝かしい未来", ko: "빛나는 미래" }, { ja: "輝かしい成績", ko: "눈부신 성적" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は輝かしい業績を残した。", ko: "그는 빛나는 업적을 남겼다." }]
  },
  {
    id: 26, day: 13, level: "N2",
    word: "愚か", kana: "おろか", pos: "な형용사",
    mean: "어리석음",
    syn: ["ばかな", "愚かな"],
    collocations: [{ ja: "愚かな行為", ko: "어리석은 짓" }, { ja: "愚かな過ち", ko: "바보 같은 과오" }],
    examples: [{ type: "kun", label: "훈독", ja: "過去の失敗から教訓を学ばず、同じ過ちを何度も繰り返すのは愚かなことだ。", ko: "과거의 실패로부터 교훈을 배우지 않고 똑같은 잘못을 몇 번이고 반복하는 것은 어리석은 짓이다." }]
  },
  {
    id: 1870, day: 13, level: "N2",
    word: "気楽", kana: "きらく", pos: "な형용사",
    mean: "마음 편함",
    syn: ["のんきな"],
    collocations: [{ ja: "気楽な生活", ko: "마음 편한 생활" }],
    examples: [{ type: "ex", label: "예문", ja: "一人暮らしは気楽でいい。", ko: "혼자 사는 것은 마음 편해서 좋다." }]
  },
  {
    id: 1871, day: 13, level: "N2",
    word: "心強い", kana: "こころづよい", pos: "い형용사",
    mean: "든든하다",
    syn: ["頼もしい"],
    collocations: [{ ja: "心強い味方", ko: "든든한 아군" }],
    examples: [{ type: "ex", label: "예문", ja: "あなたがいてくれると心強い。", ko: "당신이 있어 주면 든든하다." }]
  },
  {
    id: 1872, day: 13, level: "N2",
    word: "几帳面", kana: "きちょうめん", pos: "な형용사",
    mean: "꼼꼼함",
    syn: ["まじめな"],
    collocations: [{ ja: "几帳面な性格", ko: "꼼꼼한 성격" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は几帳面で、毎日日記をつけている。", ko: "그는 꼼꼼해서 매일 일기를 쓴다." }]
  },
  {
    id: 1873, day: 13, level: "N2",
    word: "強烈", kana: "きょうれつ", pos: "な형용사",
    mean: "강렬함",
    syn: ["激しい"],
    collocations: [{ ja: "強烈な印象", ko: "강렬한 인상" }],
    examples: [{ type: "ex", label: "예문", ja: "その映画は強烈な印象を残した。", ko: "그 영화는 강렬한 인상을 남겼다." }]
  },
  {
    id: 1874, day: 13, level: "N2",
    word: "コンクール", kana: "コンクール", pos: "외래어",
    mean: "콩쿠르, 경연 대회 (concours)",
    syn: ["コンテスト"],
    collocations: [{ ja: "ピアノのコンクール", ko: "피아노 콩쿠르" }],
    examples: [{ type: "ex", label: "예문", ja: "コンクールで一位になった。", ko: "콩쿠르에서 1위를 했다." }]
  },
  {
    id: 1875, day: 13, level: "N2",
    word: "コントロール", kana: "コントロール", pos: "외래어",
    mean: "통제, 조절 (control)",
    syn: ["調節", "管理"],
    collocations: [{ ja: "感情をコントロールする", ko: "감정을 조절하다" }],
    examples: [{ type: "ex", label: "예문", ja: "体重をコントロールするのは難しい。", ko: "체중을 조절하기는 어렵다." }]
  },
  {
    id: 1876, day: 13, level: "N2",
    word: "サポート", kana: "サポート", pos: "외래어",
    mean: "지원 (support)",
    syn: ["支援", "援助"],
    collocations: [{ ja: "サポートを受ける", ko: "지원을 받다" }],
    examples: [{ type: "ex", label: "예문", ja: "新入社員を先輩がサポートする。", ko: "신입 사원을 선배가 지원한다." }]
  },
  {
    id: 1877, day: 13, level: "N2",
    word: "極力", kana: "きょくりょく", pos: "부사",
    mean: "힘껏, 되도록",
    syn: ["できるだけ"],
    collocations: [{ ja: "極力避ける", ko: "되도록 피하다" }],
    examples: [{ type: "ex", label: "예문", ja: "無駄な出費は極力抑えている。", ko: "쓸데없는 지출은 최대한 줄이고 있다." }]
  },
  {
    id: 1878, day: 13, level: "N2",
    word: "現に", kana: "げんに", pos: "부사",
    mean: "실제로, 현재",
    syn: ["実際に"],
    collocations: [{ ja: "現に見た", ko: "실제로 보았다" }],
    examples: [{ type: "ex", label: "예문", ja: "現に私もその被害に遭った。", ko: "실제로 나도 그 피해를 입었다." }]
  },
  {
    id: 1879, day: 13, level: "N2",
    word: "実に", kana: "じつに", pos: "부사",
    mean: "실로, 참으로",
    syn: ["本当に"],
    collocations: [{ ja: "実に面白い", ko: "참으로 재미있다" }],
    examples: [{ type: "ex", label: "예문", ja: "それは実に見事な演奏だった。", ko: "그것은 참으로 훌륭한 연주였다." }]
  },
  {
    id: 1880, day: 13, level: "N2",
    word: "終始", kana: "しゅうし", pos: "부사",
    mean: "시종, 내내",
    syn: ["ずっと"],
    collocations: [{ ja: "終始笑顔だった", ko: "내내 웃는 얼굴이었다" }],
    examples: [{ type: "ex", label: "예문", ja: "会議は終始和やかな雰囲気だった。", ko: "회의는 내내 화기애애한 분위기였다." }]
  },
  {
    id: 1881, day: 13, level: "N2",
    word: "ぐったり", kana: "ぐったり", pos: "부사 (의성어·의태어)",
    mean: "녹초가 된 모양",
    syn: ["疲れ果てる"],
    collocations: [{ ja: "ぐったりする", ko: "녹초가 되다" }],
    examples: [{ type: "ex", label: "예문", ja: "暑さで犬がぐったりしている。", ko: "더위로 개가 축 늘어져 있다." }]
  },
  {
    id: 1882, day: 13, level: "N2",
    word: "しかも", kana: "しかも", pos: "접속사",
    mean: "게다가, 더구나",
    syn: ["そのうえ", "それに"],
    collocations: [{ ja: "しかも", ko: "게다가" }],
    examples: [{ type: "ex", label: "예문", ja: "この店は安くて、しかもおいしい。", ko: "이 가게는 싸고 게다가 맛있다." }]
  },
  {
    id: 1883, day: 13, level: "N2",
    word: "準〜", kana: "じゅん", pos: "접두어",
    mean: "준~ (그에 버금감)",
    syn: [],
    collocations: [{ ja: "準決勝", ko: "준결승" }, { ja: "準備", ko: "준비" }, { ja: "準優勝", ko: "준우승" }],
    examples: []
  },
  {
    id: 1884, day: 13, level: "N2",
    word: "諸〜", kana: "しょ", pos: "접두어",
    mean: "여러 ~, 제~",
    syn: ["いろいろな"],
    collocations: [{ ja: "諸問題", ko: "제반 문제" }, { ja: "諸外国", ko: "여러 외국" }, { ja: "諸費用", ko: "제비용" }],
    examples: []
  },
  {
    id: 1885, day: 13, level: "N2",
    word: "事実", kana: "じじつ", pos: "명사",
    mean: "사실",
    syn: ["真実"],
    collocations: [{ ja: "事実を確かめる", ko: "사실을 확인하다" }, { ja: "事実上", ko: "사실상" }],
    examples: [{ type: "ex", label: "예문", ja: "それは事実とは異なる。", ko: "그것은 사실과 다르다." }]
  },
  {
    id: 1886, day: 13, level: "N2",
    word: "真実", kana: "しんじつ", pos: "명사",
    mean: "진실",
    syn: ["本当のこと"],
    collocations: [{ ja: "真実を語る", ko: "진실을 말하다" }],
    examples: [{ type: "ex", label: "예문", ja: "いつか真実が明らかになるだろう。", ko: "언젠가 진실이 밝혀질 것이다." }]
  },
  {
    id: 1887, day: 13, level: "N2",
    word: "事情", kana: "じじょう", pos: "명사",
    mean: "사정",
    syn: ["わけ", "都合"],
    collocations: [{ ja: "家庭の事情", ko: "집안 사정" }, { ja: "事情を説明する", ko: "사정을 설명하다" }],
    examples: [{ type: "ex", label: "예문", ja: "個人的な事情で会社を辞めた。", ko: "개인적인 사정으로 회사를 그만두었다." }]
  },
  {
    id: 1888, day: 13, level: "N2",
    word: "状況", kana: "じょうきょう", pos: "명사",
    mean: "상황",
    syn: ["様子", "事態"],
    collocations: [{ ja: "状況を把握する", ko: "상황을 파악하다" }, { ja: "厳しい状況", ko: "어려운 상황" }],
    examples: [{ type: "ex", label: "예문", ja: "現在の状況を詳しく教えてください。", ko: "현재 상황을 자세히 알려 주세요." }]
  },
  {
    id: 65, day: 13, level: "N2",
    word: "転換", kana: "てんかん", pos: "명사",
    mean: "전환 (방향·방침을 바꿈)",
    syn: ["切り替え", "方向転換"],
    collocations: [{ ja: "政策を転換する", ko: "정책을 전환하다" }, { ja: "気分転換", ko: "기분 전환" }],
    examples: [{ type: "on", label: "음독", ja: "化石燃料への依存を減らし、環境負荷の低い再生可能エネルギーへと政策を大きく転換する。", ko: "화석 연료 의존을 줄이고 환경 부담이 적은 재생 가능 에너지로 정책을 크게 전환하다." }]
  },
  {
    id: 1889, day: 13, level: "N2",
    word: "事態", kana: "じたい", pos: "명사",
    mean: "사태",
    syn: ["状況"],
    collocations: [{ ja: "深刻な事態", ko: "심각한 사태" }, { ja: "事態が悪化する", ko: "사태가 악화되다" }],
    examples: [{ type: "ex", label: "예문", ja: "事態は思ったより深刻だ。", ko: "사태는 생각보다 심각하다." }]
  },
  {
    id: 1890, day: 13, level: "N2",
    word: "事件", kana: "じけん", pos: "명사",
    mean: "사건",
    syn: [],
    collocations: [{ ja: "事件が起きる", ko: "사건이 일어나다" }, { ja: "事件を解決する", ko: "사건을 해결하다" }],
    examples: [{ type: "ex", label: "예문", ja: "昨夜、近所で事件があったらしい。", ko: "어젯밤 근처에서 사건이 있었다고 한다." }]
  },
  {
    id: 1891, day: 13, level: "N2",
    word: "事故", kana: "じこ", pos: "명사",
    mean: "사고",
    syn: [],
    collocations: [{ ja: "交通事故", ko: "교통사고" }, { ja: "事故に遭う", ko: "사고를 당하다" }],
    examples: [{ type: "ex", label: "예문", ja: "雪の日は事故が起こりやすい。", ko: "눈 오는 날은 사고가 나기 쉽다." }]
  },
  {
    id: 1892, day: 13, level: "N2",
    word: "災害", kana: "さいがい", pos: "명사",
    mean: "재해",
    syn: ["災難"],
    collocations: [{ ja: "自然災害", ko: "자연재해" }, { ja: "災害に備える", ko: "재해에 대비하다" }],
    examples: [{ type: "ex", label: "예문", ja: "日頃から災害に備えておくことが大切だ。", ko: "평소에 재해에 대비해 두는 것이 중요하다." }]
  },
  {
    id: 1893, day: 13, level: "N2",
    word: "避難", kana: "ひなん", pos: "명사 (する동사)",
    mean: "피난, 대피",
    syn: ["逃げる"],
    collocations: [{ ja: "避難所", ko: "대피소" }, { ja: "安全な場所に避難する", ko: "안전한 곳으로 대피하다" }],
    examples: [{ type: "ex", label: "예문", ja: "地震の後、住民は学校に避難した。", ko: "지진 후 주민들은 학교로 대피했다." }]
  },
  {
    id: 1894, day: 13, level: "N2",
    word: "救助", kana: "きゅうじょ", pos: "명사 (する동사)",
    mean: "구조",
    syn: ["救う"],
    collocations: [{ ja: "人命救助", ko: "인명 구조" }, { ja: "救助を求める", ko: "구조를 요청하다" }],
    examples: [{ type: "ex", label: "예문", ja: "山で遭難した人が無事救助された。", ko: "산에서 조난한 사람이 무사히 구조되었다." }]
  },
  {
    id: 66, day: 13, level: "N2",
    word: "配慮", kana: "はいりょ", pos: "명사",
    mean: "배려, 유의",
    syn: ["気配り", "心遣い"],
    collocations: [{ ja: "配慮を欠く", ko: "배려가 결여되다" }, { ja: "相手に配慮する", ko: "상대방을 배려하다" }],
    examples: [{ type: "on", label: "음독", ja: "公共施設の改修に当たり、高齢者や車椅子を利用する方々に配慮した設計を取り入れた。", ko: "공공시설을 개수하면서 고령자나 휠체어를 이용하는 분들을 배려한 설계를 도입했다." }]
  },
  {
    id: 1895, day: 13, level: "N2",
    word: "防止", kana: "ぼうし", pos: "명사 (する동사)",
    mean: "방지",
    syn: ["防ぐ"],
    collocations: [{ ja: "事故防止", ko: "사고 방지" }, { ja: "再発を防止する", ko: "재발을 방지하다" }],
    examples: [{ type: "ex", label: "예문", ja: "事故の再発防止に努める。", ko: "사고 재발 방지에 힘쓴다." }]
  },
  {
    id: 1896, day: 13, level: "N2",
    word: "予防", kana: "よぼう", pos: "명사 (する동사)",
    mean: "예방",
    syn: [],
    collocations: [{ ja: "病気を予防する", ko: "병을 예방하다" }, { ja: "予防接種", ko: "예방 접종" }],
    examples: [{ type: "ex", label: "예문", ja: "手洗いは風邪の予防に効果がある。", ko: "손 씻기는 감기 예방에 효과가 있다." }]
  },
  {
    id: 1897, day: 13, level: "N2",
    word: "対処", kana: "たいしょ", pos: "명사 (する동사)",
    mean: "대처",
    syn: ["対応"],
    collocations: [{ ja: "問題に対処する", ko: "문제에 대처하다" }, { ja: "適切な対処", ko: "적절한 대처" }],
    examples: [{ type: "ex", label: "예문", ja: "トラブルには冷静に対処すべきだ。", ko: "문제에는 침착하게 대처해야 한다." }]
  },
  {
    id: 1898, day: 13, level: "N2",
    word: "警告", kana: "けいこく", pos: "명사 (する동사)",
    mean: "경고",
    syn: ["注意"],
    collocations: [{ ja: "警告を受ける", ko: "경고를 받다" }, { ja: "警告を無視する", ko: "경고를 무시하다" }],
    examples: [{ type: "ex", label: "예문", ja: "専門家は地震の危険性を警告している。", ko: "전문가들은 지진의 위험성을 경고하고 있다." }]
  },
  {
    id: 1899, day: 13, level: "N2",
    word: "警報", kana: "けいほう", pos: "명사",
    mean: "경보",
    syn: [],
    collocations: [{ ja: "大雨警報", ko: "호우 경보" }, { ja: "警報が出る", ko: "경보가 발령되다" }],
    examples: [{ type: "ex", label: "예문", ja: "大雨警報が出て、学校が休みになった。", ko: "호우 경보가 내려져 학교가 쉬게 되었다." }]
  },
  {
    id: 1900, day: 13, level: "N2",
    word: "規則", kana: "きそく", pos: "명사",
    mean: "규칙",
    syn: ["ルール"],
    collocations: [{ ja: "規則を守る", ko: "규칙을 지키다" }, { ja: "規則正しい生活", ko: "규칙적인 생활" }],
    examples: [{ type: "ex", label: "예문", ja: "規則正しい生活を心がけている。", ko: "규칙적인 생활을 하려고 신경 쓰고 있다." }]
  },
  {
    id: 114, day: 13, level: "N2",
    word: "克服", kana: "こくふく", pos: "명사",
    mean: "극복",
    syn: ["乗り越える", "打ち勝つ"],
    collocations: [{ ja: "弱点を克服する", ko: "약점을 극복하다" }, { ja: "困難の克服", ko: "난관의 극복" }],
    examples: [{ type: "on", label: "음독", ja: "自らの最大の弱点であった外国語でのプレゼンテーションを、猛練習の末に見事に克服した。", ko: "자신의 최대 약점이었던 외국어 프레젠테이션을 맹연습 끝에 훌륭하게 극복해 냈다." }]
  },
  {
    id: 1901, day: 13, level: "N2",
    word: "法律", kana: "ほうりつ", pos: "명사",
    mean: "법률",
    syn: ["法"],
    collocations: [{ ja: "法律を守る", ko: "법률을 지키다" }, { ja: "法律で禁止する", ko: "법률로 금지하다" }],
    examples: [{ type: "ex", label: "예문", ja: "未成年の飲酒は法律で禁止されている。", ko: "미성년자의 음주는 법률로 금지되어 있다." }]
  },
  {
    id: 1902, day: 13, level: "N2",
    word: "制度", kana: "せいど", pos: "명사",
    mean: "제도",
    syn: ["仕組み"],
    collocations: [{ ja: "制度を改める", ko: "제도를 고치다" }, { ja: "教育制度", ko: "교육 제도" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい制度が来年から始まる。", ko: "새 제도가 내년부터 시작된다." }]
  },
  {
    id: 1903, day: 13, level: "N2",
    word: "罰金", kana: "ばっきん", pos: "명사",
    mean: "벌금",
    syn: [],
    collocations: [{ ja: "罰金を払う", ko: "벌금을 내다" }, { ja: "罰金を科す", ko: "벌금을 부과하다" }],
    examples: [{ type: "ex", label: "예문", ja: "駐車違反で罰金を払った。", ko: "주차 위반으로 벌금을 냈다." }]
  },
  {
    id: 1904, day: 13, level: "N2",
    word: "犯罪", kana: "はんざい", pos: "명사",
    mean: "범죄",
    syn: ["罪"],
    collocations: [{ ja: "犯罪を防ぐ", ko: "범죄를 막다" }, { ja: "犯罪者", ko: "범죄자" }],
    examples: [{ type: "ex", label: "예문", ja: "この地域は犯罪が少ない。", ko: "이 지역은 범죄가 적다." }]
  },
  {
    id: 1905, day: 13, level: "N2",
    word: "犯人", kana: "はんにん", pos: "명사",
    mean: "범인",
    syn: [],
    collocations: [{ ja: "犯人を捕まえる", ko: "범인을 붙잡다" }],
    examples: [{ type: "ex", label: "예문", ja: "警察はまだ犯人を見つけていない。", ko: "경찰은 아직 범인을 찾지 못했다." }]
  },
  {
    id: 45, day: 13, level: "N1",
    word: "措置", kana: "そち", pos: "명사",
    mean: "조치",
    syn: ["処置", "対策"],
    collocations: [{ ja: "措置を講じる", ko: "조치를 취하다/강구하다" }, { ja: "緊急の措置", ko: "긴급 처분/조치" }],
    examples: [{ type: "on", label: "음독", ja: "感染症の急激な拡大を食い止めるため、政府は緊急の特別予防措置を講じた。", ko: "감염병의 급격한 확산을 저지하기 위해 정부는 긴급 특별 예방 조치를 취했다." }]
  },
  {
    id: 1906, day: 13, level: "N1",
    word: "関与", kana: "かんよ", pos: "명사 (する동사)",
    mean: "관여",
    syn: ["関わる"],
    collocations: [{ ja: "事件に関与する", ko: "사건에 관여하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はその事件への関与を否定した。", ko: "그는 그 사건에 대한 관여를 부정했다." }]
  },
  {
    id: 1907, day: 13, level: "N1",
    word: "危惧", kana: "きぐ", pos: "명사 (する동사)",
    mean: "위구, 우려",
    syn: ["懸念"],
    collocations: [{ ja: "危惧を抱く", ko: "우려를 품다" }, { ja: "絶滅危惧種", ko: "멸종 위기종" }],
    examples: [{ type: "ex", label: "예문", ja: "専門家は環境への影響を危惧している。", ko: "전문가들은 환경에 대한 영향을 우려하고 있다." }]
  },
  {
    id: 51, day: 13, level: "N1",
    word: "懸念", kana: "けねん", pos: "명사",
    mean: "우려, 염려",
    syn: ["心配", "不安"],
    collocations: [{ ja: "懸念を抱く", ko: "우려를 품다" }, { ja: "懸念が広がる", ko: "염려가 확산되다" }],
    examples: [{ type: "on", label: "음독", ja: "原材料価格の世界的な高騰が、国内企業の業績回復の足かせになるのではないかと懸念されている。", ko: "원자재 가격의 세계적인 급등이 국내 기업의 실적 회복에 발목을 잡지 않을까 우려되고 있다." }]
  },
  {
    id: 1908, day: 13, level: "N1",
    word: "起用", kana: "きよう", pos: "명사 (する동사)",
    mean: "기용",
    syn: ["採用"],
    collocations: [{ ja: "新人を起用する", ko: "신인을 기용하다" }],
    examples: [{ type: "ex", label: "예문", ja: "監督は若手選手を積極的に起用した。", ko: "감독은 젊은 선수를 적극적으로 기용했다." }]
  },
  {
    id: 53, day: 13, level: "N1",
    word: "意図", kana: "いと", pos: "명사",
    mean: "의도",
    syn: ["ねらい", "目的"],
    collocations: [{ ja: "意図を汲み取る", ko: "의도를 헤아리다" }, { ja: "意図を隠す", ko: "의도를 숨기다" }],
    examples: [{ type: "on", label: "음독", ja: "文章の表面的な言葉にとらわれず、筆者が行間に込めた真の意図を正確に読み解く。", ko: "문장의 표면적인 단어에 얽매이지 않고 필자가 행간에 담아낸 진정한 의도를 정확하게 해석하다." }]
  },
  {
    id: 1909, day: 13, level: "N1",
    word: "基盤", kana: "きばん", pos: "명사",
    mean: "기반",
    syn: ["土台"],
    collocations: [{ ja: "生活の基盤", ko: "생활 기반" }, { ja: "基盤を築く", ko: "기반을 쌓다" }],
    examples: [{ type: "ex", label: "예문", ja: "地域の経済基盤を強化する。", ko: "지역의 경제 기반을 강화한다." }]
  },
  {
    id: 1910, day: 13, level: "N1",
    word: "共生", kana: "きょうせい", pos: "명사 (する동사)",
    mean: "공생",
    syn: ["共存"],
    collocations: [{ ja: "自然との共生", ko: "자연과의 공생" }],
    examples: [{ type: "ex", label: "예문", ja: "人間と自然の共生を目指す。", ko: "인간과 자연의 공생을 지향한다." }]
  },
  // ==========================================
  // [DAY 14] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 1911, day: 14, level: "N2",
    word: "しぼむ", kana: "しぼむ", pos: "동사 (자동사)",
    mean: "시들다, 오그라들다",
    syn: ["しおれる"],
    collocations: [{ ja: "花がしぼむ", ko: "꽃이 시들다" }, { ja: "夢がしぼむ", ko: "꿈이 사그라지다" }],
    examples: [{ type: "ex", label: "예문", ja: "朝に咲いた花が夕方にはしぼんでいた。", ko: "아침에 핀 꽃이 저녁에는 시들어 있었다." }]
  },
  {
    id: 77, day: 14, level: "N2",
    word: "拒む", kana: "こばむ", pos: "동사 (5단 타동사)",
    mean: "거부하다, 거절하다, 막다",
    syn: ["断る", "拒否する"],
    collocations: [{ ja: "要求を拒む", ko: "요구를 단호히 거절하다" }, { ja: "変化を拒む", ko: "변화를 거부하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "正当な法的な理由もないまま、相手側の面会要求を一方的に拒むことはできない。", ko: "정당한 법적 이유도 없이 상대측의 면담 요구를 일방적으로 거부할 수는 없다." }, { type: "on", label: "음독", ja: "相手の理不尽な提案に対して、毅然とした態度で拒否(きょひ)の意思を示した。", ko: "상대의 불합리한 제안에 대해 의연한 태도로 거부 의사를 표시했다." }]
  },
  {
    id: 1912, day: 14, level: "N2",
    word: "透き通る", kana: "すきとおる", pos: "동사 (자동사)",
    mean: "비쳐 보이다, 투명하다",
    syn: ["澄む"],
    collocations: [{ ja: "透き通った水", ko: "투명한 물" }, { ja: "透き通る声", ko: "맑은 목소리" }],
    examples: [{ type: "ex", label: "예문", ja: "透き通った海の底まで見える。", ko: "투명한 바다 밑바닥까지 보인다." }]
  },
  {
    id: 1913, day: 14, level: "N2",
    word: "すすぐ", kana: "すすぐ", pos: "동사 (타동사)",
    mean: "헹구다",
    syn: ["洗い流す"],
    collocations: [{ ja: "口をすすぐ", ko: "입을 헹구다" }, { ja: "洗濯物をすすぐ", ko: "빨래를 헹구다" }],
    examples: [{ type: "ex", label: "예문", ja: "食後は口をすすぐようにしている。", ko: "식후에는 입을 헹구도록 하고 있다." }]
  },
  {
    id: 1914, day: 14, level: "N2",
    word: "勧める", kana: "すすめる", pos: "동사 (타동사)",
    mean: "권하다, 권유하다",
    syn: ["推薦する"],
    collocations: [{ ja: "入会を勧める", ko: "가입을 권하다" }, { ja: "医者に勧められる", ko: "의사에게 권유받다" }],
    examples: [{ type: "ex", label: "예문", ja: "医者に禁煙を勧められた。", ko: "의사에게 금연을 권유받았다." }]
  },
  {
    id: 1915, day: 14, level: "N2",
    word: "済む", kana: "すむ", pos: "동사 (자동사)",
    mean: "끝나다, 해결되다",
    syn: ["終わる"],
    collocations: [{ ja: "用事が済む", ko: "볼일이 끝나다" }, { ja: "謝って済む問題ではない", ko: "사과로 끝날 문제가 아니다" }],
    examples: [{ type: "ex", label: "예문", ja: "謝って済む問題ではない。", ko: "사과해서 끝날 문제가 아니다." }]
  },
  {
    id: 1916, day: 14, level: "N2",
    word: "擦る", kana: "こする", pos: "동사 (타동사)",
    mean: "문지르다, 비비다",
    syn: ["擦れる"],
    collocations: [{ ja: "目を擦る", ko: "눈을 비비다" }, { ja: "汚れを擦る", ko: "얼룩을 문지르다" }],
    examples: [{ type: "ex", label: "예문", ja: "眠そうに目を擦っている。", ko: "졸린 듯 눈을 비비고 있다." }]
  },
  {
    id: 80, day: 14, level: "N2",
    word: "費やす", kana: "ついやす", pos: "동사 (5단 타동사)",
    mean: "소비하다, (시간·돈을) 쓰다",
    syn: ["使う", "消費する"],
    collocations: [{ ja: "時間を費やす", ko: "시간을 허비하다/소비하다" }, { ja: "私財を費やす", ko: "사재를 쏟아붓다" }],
    examples: [{ type: "kun", label: "훈독", ja: "実質的な結論の出ない無駄な会議に、貴重な労働時間を費やすべきではない。", ko: "실질적인 결론이 나지 않는 무의미한 회의에 귀중한 근로 시간을 소비해서는 안 된다." }, { type: "on", label: "음독", ja: "業務の効率化を進め、無駄な経費や費用の浪費(ろうひ)を抑える。", ko: "업무 효율화를 추진하여 불필요한 경비나 비용 낭비를 줄이다." }]
  },
  {
    id: 1917, day: 14, level: "N2",
    word: "ずれる", kana: "ずれる", pos: "동사 (자동사)",
    mean: "어긋나다, 빗나가다",
    syn: ["外れる"],
    collocations: [{ ja: "日程がずれる", ko: "일정이 어긋나다" }, { ja: "話がずれる", ko: "이야기가 빗나가다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人の考えは少しずれている。", ko: "두 사람의 생각은 조금 어긋나 있다." }]
  },
  {
    id: 1918, day: 14, level: "N2",
    word: "責める", kana: "せめる", pos: "동사 (타동사)",
    mean: "책망하다, 탓하다",
    syn: ["非難する"],
    collocations: [{ ja: "自分を責める", ko: "자신을 탓하다" }, { ja: "失敗を責める", ko: "실패를 책망하다" }],
    examples: [{ type: "ex", label: "예문", ja: "そんなに自分を責めないでください。", ko: "그렇게 자신을 탓하지 마세요." }]
  },
  {
    id: 1919, day: 14, level: "N2",
    word: "添える", kana: "そえる", pos: "동사 (타동사)",
    mean: "곁들이다, 첨부하다",
    syn: ["付け加える"],
    collocations: [{ ja: "手紙を添える", ko: "편지를 곁들이다" }, { ja: "花を添える", ko: "꽃을 곁들이다" }],
    examples: [{ type: "ex", label: "예문", ja: "贈り物に手紙を添えて送った。", ko: "선물에 편지를 곁들여 보냈다." }]
  },
  {
    id: 1920, day: 14, level: "N2",
    word: "背く", kana: "そむく", pos: "동사 (자동사)",
    mean: "등지다, 어기다",
    syn: ["逆らう"],
    collocations: [{ ja: "命令に背く", ko: "명령을 어기다" }, { ja: "期待に背く", ko: "기대를 저버리다" }],
    examples: [{ type: "ex", label: "예문", ja: "親の期待に背いて、別の道を選んだ。", ko: "부모의 기대를 저버리고 다른 길을 택했다." }]
  },
  {
    id: 1921, day: 14, level: "N2",
    word: "心細い", kana: "こころぼそい", pos: "い형용사",
    mean: "불안하다, 허전하다",
    syn: ["不安な"],
    collocations: [{ ja: "一人では心細い", ko: "혼자서는 불안하다" }],
    examples: [{ type: "ex", label: "예문", ja: "知らない土地での一人暮らしは心細い。", ko: "낯선 곳에서의 혼자 생활은 불안하다." }]
  },
  {
    id: 159, day: 14, level: "N2",
    word: "頑固", kana: "がんこ", pos: "な형용사",
    mean: "완고함, 고집스러움",
    syn: ["強情", "かたくな"],
    collocations: [{ ja: "頑固な性格", ko: "완고한 성격" }, { ja: "頑固な汚れ", ko: "지워지지 않는 찌든 때" }],
    examples: [{ type: "on", label: "음독", ja: "周囲の合理的なアドバイスにも耳を貸さず、自分の古いやり方に頑固に固執する。", ko: "주변의 합리적인 조언에도 귀를 기울이지 않고 자신의 낡은 방식에 완고하게 고집부리다." }]
  },
  {
    id: 1922, day: 14, level: "N2",
    word: "極端", kana: "きょくたん", pos: "な형용사",
    mean: "극단적임",
    syn: ["過度な"],
    collocations: [{ ja: "極端な例", ko: "극단적인 예" }],
    examples: [{ type: "ex", label: "예문", ja: "極端なダイエットは体に悪い。", ko: "극단적인 다이어트는 몸에 나쁘다." }]
  },
  {
    id: 1923, day: 14, level: "N2",
    word: "謙虚", kana: "けんきょ", pos: "な형용사",
    mean: "겸허함",
    syn: ["控えめな"],
    collocations: [{ ja: "謙虚な態度", ko: "겸허한 태도" }],
    examples: [{ type: "ex", label: "예문", ja: "成功しても謙虚な気持ちを忘れない。", ko: "성공해도 겸허한 마음을 잊지 않는다." }]
  },
  {
    id: 1924, day: 14, level: "N2",
    word: "快い", kana: "こころよい", pos: "い형용사",
    mean: "기분 좋다, 흔쾌하다",
    syn: ["気持ちいい"],
    collocations: [{ ja: "快い風", ko: "상쾌한 바람" }, { ja: "快く引き受ける", ko: "흔쾌히 맡다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は私の頼みを快く引き受けてくれた。", ko: "그는 내 부탁을 흔쾌히 들어주었다." }]
  },
  {
    id: 1925, day: 14, level: "N2",
    word: "賢明", kana: "けんめい", pos: "な형용사",
    mean: "현명함",
    syn: ["賢い"],
    collocations: [{ ja: "賢明な判断", ko: "현명한 판단" }],
    examples: [{ type: "ex", label: "예문", ja: "今は動かないのが賢明だ。", ko: "지금은 움직이지 않는 것이 현명하다." }]
  },
  {
    id: 1926, day: 14, level: "N2",
    word: "厳重", kana: "げんじゅう", pos: "な형용사",
    mean: "엄중함",
    syn: ["厳しい"],
    collocations: [{ ja: "厳重な警備", ko: "엄중한 경비" }],
    examples: [{ type: "ex", label: "예문", ja: "会場は厳重に警備されていた。", ko: "회장은 엄중하게 경비되고 있었다." }]
  },
  {
    id: 1927, day: 14, level: "N2",
    word: "シーズン", kana: "シーズン", pos: "외래어",
    mean: "시즌, 철 (season)",
    syn: ["季節", "時期"],
    collocations: [{ ja: "旅行シーズン", ko: "여행 시즌" }],
    examples: [{ type: "ex", label: "예문", ja: "スキーシーズンが始まった。", ko: "스키 시즌이 시작되었다." }]
  },
  {
    id: 1928, day: 14, level: "N2",
    word: "シェア", kana: "シェア", pos: "외래어",
    mean: "점유율, 공유 (share)",
    syn: ["占有率", "共有"],
    collocations: [{ ja: "市場シェア", ko: "시장 점유율" }],
    examples: [{ type: "ex", label: "예문", ja: "部屋をシェアして住む。", ko: "방을 함께 쓰며 산다." }]
  },
  {
    id: 32, day: 14, level: "N2",
    word: "リスク", kana: "りすく", pos: "외래어",
    mean: "위험 요소, 리스크 (risk)",
    syn: ["危険性"],
    collocations: [{ ja: "リスクを冒す", ko: "위험을 무릅쓰다" }, { ja: "リスクを回避する", ko: "위험을 회피하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新規事業への投資にはリスクが伴うが、恐れずに挑戦する姿勢が成長を生む。", ko: "신규 사업으로의 투자에는 위험이 따르지만, 두려워하지 않고 도전하는 태도가 성장을 낳는다." }]
  },
  {
    id: 1929, day: 14, level: "N2",
    word: "少々", kana: "しょうしょう", pos: "부사",
    mean: "조금, 잠시",
    syn: ["少し"],
    collocations: [{ ja: "少々お待ちください", ko: "잠시만 기다려 주십시오" }],
    examples: [{ type: "ex", label: "예문", ja: "少々時間がかかるかもしれません。", ko: "시간이 조금 걸릴지도 모릅니다." }]
  },
  {
    id: 1930, day: 14, level: "N2",
    word: "時折", kana: "ときおり", pos: "부사",
    mean: "때때로, 이따금",
    syn: ["時々"],
    collocations: [{ ja: "時折雨が降る", ko: "이따금 비가 내리다" }],
    examples: [{ type: "ex", label: "예문", ja: "時折、昔のことを思い出す。", ko: "이따금 옛일이 떠오른다." }]
  },
  {
    id: 1931, day: 14, level: "N2",
    word: "至急", kana: "しきゅう", pos: "부사",
    mean: "급히, 지급",
    syn: ["大至急", "すぐに"],
    collocations: [{ ja: "至急連絡する", ko: "급히 연락하다" }],
    examples: [{ type: "ex", label: "예문", ja: "至急、確認をお願いします。", ko: "급히 확인 부탁드립니다." }]
  },
  {
    id: 1932, day: 14, level: "N2",
    word: "自ら", kana: "みずから", pos: "부사",
    mean: "스스로, 몸소",
    syn: ["自分で"],
    collocations: [{ ja: "自ら進んで", ko: "스스로 나서서" }],
    examples: [{ type: "ex", label: "예문", ja: "社長自らが謝罪した。", ko: "사장이 몸소 사과했다." }]
  },
  {
    id: 1933, day: 14, level: "N2",
    word: "ぐずぐず", kana: "ぐずぐず", pos: "부사 (의성어·의태어)",
    mean: "꾸물꾸물, 우물쭈물",
    syn: ["のろのろ"],
    collocations: [{ ja: "ぐずぐずする", ko: "꾸물거리다" }],
    examples: [{ type: "ex", label: "예문", ja: "ぐずぐずしていると遅刻するよ。", ko: "꾸물거리다간 지각한다." }]
  },
  {
    id: 1934, day: 14, level: "N2",
    word: "こつこつ", kana: "こつこつ", pos: "부사 (의성어·의태어)",
    mean: "꾸준히, 착실히",
    syn: ["地道に"],
    collocations: [{ ja: "こつこつ努力する", ko: "꾸준히 노력하다" }],
    examples: [{ type: "ex", label: "예문", ja: "毎日こつこつ単語を覚えている。", ko: "매일 꾸준히 단어를 외우고 있다." }]
  },
  {
    id: 1935, day: 14, level: "N2",
    word: "総〜", kana: "そう", pos: "접두어",
    mean: "총~ (전체)",
    syn: ["全体の"],
    collocations: [{ ja: "総人口", ko: "총인구" }, { ja: "総売上", ko: "총매출" }, { ja: "総選挙", ko: "총선거" }],
    examples: []
  },
  {
    id: 1936, day: 14, level: "N2",
    word: "逮捕", kana: "たいほ", pos: "명사 (する동사)",
    mean: "체포",
    syn: ["捕まえる"],
    collocations: [{ ja: "犯人を逮捕する", ko: "범인을 체포하다" }],
    examples: [{ type: "ex", label: "예문", ja: "容疑者が昨日逮捕された。", ko: "용의자가 어제 체포되었다." }]
  },
  {
    id: 1937, day: 14, level: "N2",
    word: "裁判", kana: "さいばん", pos: "명사 (する동사)",
    mean: "재판",
    syn: ["訴訟"],
    collocations: [{ ja: "裁判を起こす", ko: "재판을 걸다" }, { ja: "裁判所", ko: "법원" }],
    examples: [{ type: "ex", label: "예문", ja: "この事件は裁判で争われることになった。", ko: "이 사건은 재판에서 다투게 되었다." }]
  },
  {
    id: 115, day: 14, level: "N2",
    word: "錯覚", kana: "さっかく", pos: "명사",
    mean: "착각 (오해, 시각적 착각)",
    syn: ["思い違い", "勘違い"],
    collocations: [{ ja: "錯覚に陥る", ko: "착각에 빠지다" }, { ja: "目の錯覚", ko: "시각적 착시/눈의 착각" }],
    examples: [{ type: "on", label: "음독", ja: "平面に描かれた絵が立体的に飛び出して見えるのは、人間の脳の視覚的な錯覚を利用したものだ。", ko: "평면에 그려진 그림이 입체적으로 튀어나와 보이는 것은 인간 뇌의 시각적 착각을 이용한 것이다." }]
  },
  {
    id: 1938, day: 14, level: "N2",
    word: "権利", kana: "けんり", pos: "명사",
    mean: "권리",
    syn: [],
    collocations: [{ ja: "権利を守る", ko: "권리를 지키다" }, { ja: "権利を主張する", ko: "권리를 주장하다" }],
    examples: [{ type: "ex", label: "예문", ja: "誰にでも教育を受ける権利がある。", ko: "누구에게나 교육을 받을 권리가 있다." }]
  },
  {
    id: 1939, day: 14, level: "N2",
    word: "義務", kana: "ぎむ", pos: "명사",
    mean: "의무",
    syn: ["責任"],
    collocations: [{ ja: "義務を果たす", ko: "의무를 다하다" }, { ja: "義務教育", ko: "의무 교육" }],
    examples: [{ type: "ex", label: "예문", ja: "納税は国民の義務だ。", ko: "납세는 국민의 의무다." }]
  },
  {
    id: 1940, day: 14, level: "N2",
    word: "選挙", kana: "せんきょ", pos: "명사 (する동사)",
    mean: "선거",
    syn: [],
    collocations: [{ ja: "選挙に出る", ko: "선거에 나가다" }, { ja: "選挙権", ko: "선거권" }],
    examples: [{ type: "ex", label: "예문", ja: "十八歳から選挙で投票できる。", ko: "18세부터 선거에서 투표할 수 있다." }]
  },
  {
    id: 1941, day: 14, level: "N2",
    word: "投票", kana: "とうひょう", pos: "명사 (する동사)",
    mean: "투표",
    syn: [],
    collocations: [{ ja: "投票に行く", ko: "투표하러 가다" }, { ja: "投票率", ko: "투표율" }],
    examples: [{ type: "ex", label: "예문", ja: "若者の投票率が低いことが問題だ。", ko: "젊은이의 투표율이 낮은 것이 문제다." }]
  },
  {
    id: 1942, day: 14, level: "N2",
    word: "政治", kana: "せいじ", pos: "명사",
    mean: "정치",
    syn: [],
    collocations: [{ ja: "政治家", ko: "정치가" }, { ja: "政治に関心を持つ", ko: "정치에 관심을 갖다" }],
    examples: [{ type: "ex", label: "예문", ja: "若い人にも政治に関心を持ってほしい。", ko: "젊은 사람들도 정치에 관심을 가졌으면 좋겠다." }]
  },
  {
    id: 1943, day: 14, level: "N2",
    word: "政府", kana: "せいふ", pos: "명사",
    mean: "정부",
    syn: [],
    collocations: [{ ja: "政府の方針", ko: "정부 방침" }, { ja: "政府が発表する", ko: "정부가 발표하다" }],
    examples: [{ type: "ex", label: "예문", ja: "政府は新しい経済対策を発表した。", ko: "정부는 새로운 경제 대책을 발표했다." }]
  },
  {
    id: 119, day: 14, level: "N2",
    word: "衰退", kana: "すいたい", pos: "명사",
    mean: "쇠퇴",
    syn: ["衰えること", "低下"],
    collocations: [{ ja: "産業の衰退", ko: "산업의 쇠락/쇠퇴" }, { ja: "衰退の一途をたどる", ko: "쇠퇴 일로를 걷다" }],
    examples: [{ type: "on", label: "음독", ja: "急速な少子高齢化と若年層の都市流出に伴い、地方都市の伝統産業の衰退が深刻な社会問題となっている。", ko: "급속한 저출산 고령화와 청년층의 도시 유출에 따라 지방 도시 전통 산업의 쇠퇴가 심각한 사회 문제가 되고 있다." }]
  },
  {
    id: 1944, day: 14, level: "N2",
    word: "政策", kana: "せいさく", pos: "명사",
    mean: "정책",
    syn: ["方針"],
    collocations: [{ ja: "経済政策", ko: "경제 정책" }, { ja: "政策を実行する", ko: "정책을 실행하다" }],
    examples: [{ type: "ex", label: "예문", ja: "政府は少子化対策の政策を打ち出した。", ko: "정부는 저출산 대책 정책을 내놓았다." }]
  },
  {
    id: 1945, day: 14, level: "N2",
    word: "地方", kana: "ちほう", pos: "명사",
    mean: "지방",
    syn: ["地域"],
    collocations: [{ ja: "地方都市", ko: "지방 도시" }, { ja: "地方に住む", ko: "지방에 살다" }],
    examples: [{ type: "ex", label: "예문", ja: "地方の人口が年々減っている。", ko: "지방 인구가 해마다 줄고 있다." }]
  },
  {
    id: 1946, day: 14, level: "N2",
    word: "地域", kana: "ちいき", pos: "명사",
    mean: "지역",
    syn: ["地区"],
    collocations: [{ ja: "地域社会", ko: "지역 사회" }, { ja: "地域の住民", ko: "지역 주민" }],
    examples: [{ type: "ex", label: "예문", ja: "地域の人々と協力してイベントを開いた。", ko: "지역 사람들과 협력해 행사를 열었다." }]
  },
  {
    id: 1947, day: 14, level: "N2",
    word: "住民", kana: "じゅうみん", pos: "명사",
    mean: "주민",
    syn: ["市民"],
    collocations: [{ ja: "地域の住民", ko: "지역 주민" }, { ja: "住民票", ko: "주민등록표" }],
    examples: [{ type: "ex", label: "예문", ja: "住民の意見を聞いて計画を立てる。", ko: "주민의 의견을 듣고 계획을 세운다." }]
  },
  {
    id: 1948, day: 14, level: "N2",
    word: "人口", kana: "じんこう", pos: "명사",
    mean: "인구",
    syn: [],
    collocations: [{ ja: "人口が増える", ko: "인구가 늘다" }, { ja: "人口密度", ko: "인구 밀도" }],
    examples: [{ type: "ex", label: "예문", ja: "東京は日本で最も人口が多い。", ko: "도쿄는 일본에서 인구가 가장 많다." }]
  },
  {
    id: 1949, day: 14, level: "N2",
    word: "世代", kana: "せだい", pos: "명사",
    mean: "세대",
    syn: [],
    collocations: [{ ja: "若い世代", ko: "젊은 세대" }, { ja: "世代交代", ko: "세대교체" }],
    examples: [{ type: "ex", label: "예문", ja: "世代によって考え方が違う。", ko: "세대에 따라 사고방식이 다르다." }]
  },
  {
    id: 122, day: 14, level: "N2",
    word: "秩序", kana: "ちつじょ", pos: "명사",
    mean: "질서",
    syn: ["規律", "決まり"],
    collocations: [{ ja: "秩序を乱す", ko: "질서를 어지럽히다" }, { ja: "秩序を保つ", ko: "질서를 유지하다" }],
    examples: [{ type: "on", label: "음독", ja: "突発的な大震災によるパニックの中でも、人々は整然と列を作り、秩序正しく避難行動をとった。", ko: "돌발적인 대지진으로 인한 혼란 속에서도 사람들은 정연하게 줄을 서며 질서정연하게 피난 행동을 취했다." }]
  },
  {
    id: 1950, day: 14, level: "N2",
    word: "高齢者", kana: "こうれいしゃ", pos: "명사",
    mean: "고령자",
    syn: ["お年寄り"],
    collocations: [{ ja: "高齢者向け", ko: "고령자 대상" }, { ja: "高齢者福祉", ko: "고령자 복지" }],
    examples: [{ type: "ex", label: "예문", ja: "高齢者が安心して暮らせる町を作る。", ko: "고령자가 안심하고 살 수 있는 마을을 만든다." }]
  },
  {
    id: 1951, day: 14, level: "N2",
    word: "若者", kana: "わかもの", pos: "명사",
    mean: "젊은이",
    syn: ["若い人"],
    collocations: [{ ja: "若者の文化", ko: "젊은이 문화" }],
    examples: [{ type: "ex", label: "예문", ja: "最近の若者は車に興味がないと言われる。", ko: "요즘 젊은이는 차에 관심이 없다고들 한다." }]
  },
  {
    id: 1952, day: 14, level: "N2",
    word: "少子化", kana: "しょうしか", pos: "명사",
    mean: "저출산",
    syn: [],
    collocations: [{ ja: "少子化が進む", ko: "저출산이 진행되다" }, { ja: "少子化対策", ko: "저출산 대책" }],
    examples: [{ type: "ex", label: "예문", ja: "少子化で学校の数が減っている。", ko: "저출산으로 학교 수가 줄고 있다." }]
  },
  {
    id: 1953, day: 14, level: "N2",
    word: "自然", kana: "しぜん", pos: "명사",
    mean: "자연",
    syn: [],
    collocations: [{ ja: "自然を守る", ko: "자연을 지키다" }, { ja: "自然に恵まれる", ko: "자연환경이 좋다" }],
    examples: [{ type: "ex", label: "예문", ja: "この町は豊かな自然に恵まれている。", ko: "이 마을은 풍요로운 자연을 누리고 있다." }]
  },
  {
    id: 1954, day: 14, level: "N2",
    word: "温暖化", kana: "おんだんか", pos: "명사",
    mean: "온난화",
    syn: [],
    collocations: [{ ja: "地球温暖化", ko: "지구 온난화" }],
    examples: [{ type: "ex", label: "예문", ja: "地球温暖化の影響で異常気象が増えている。", ko: "지구 온난화의 영향으로 이상 기상이 늘고 있다." }]
  },
  {
    id: 1955, day: 14, level: "N2",
    word: "分別", kana: "ぶんべつ", pos: "명사 (する동사)",
    mean: "분리, 분류",
    syn: ["分ける"],
    collocations: [{ ja: "ごみを分別する", ko: "쓰레기를 분리하다" }],
    examples: [{ type: "ex", label: "예문", ja: "ごみは種類ごとに分別して出す。", ko: "쓰레기는 종류별로 분리해서 내놓는다." }]
  },
  {
    id: 55, day: 14, level: "N1",
    word: "格差", kana: "かくさ", pos: "명사",
    mean: "격차",
    syn: ["差", "ギャップ"],
    collocations: [{ ja: "格差が開く", ko: "격차가 벌어지다" }, { ja: "格差を縮める", ko: "격차를 좁히다" }],
    examples: [{ type: "on", label: "음독", ja: "大都市圏と地方との間に生じる経済格差や教育格差を是正するための総合的な政策が求められる。", ko: "대도시권과 지방 사이에 발생하는 경제 격차와 교육 격차를 시정하기 위한 종합적인 정책이 요구된다." }]
  },
  {
    id: 1956, day: 14, level: "N1",
    word: "協定", kana: "きょうてい", pos: "명사 (する동사)",
    mean: "협정",
    syn: [],
    collocations: [{ ja: "協定を結ぶ", ko: "협정을 맺다" }],
    examples: [{ type: "ex", label: "예문", ja: "両国は貿易協定を結んだ。", ko: "양국은 무역 협정을 맺었다." }]
  },
  {
    id: 59, day: 14, level: "N1",
    word: "支障", kana: "ししょう", pos: "명사",
    mean: "지장, 장애",
    syn: ["差し支え", "障害"],
    collocations: [{ ja: "支障をきたす", ko: "심각한 지장을 초래하다" }, { ja: "支障がない", ko: "지장이 없다" }],
    examples: [{ type: "on", label: "음독", ja: "連日の過重労働による極度の睡眠不足が、翌日の集中力と業務遂行に大きな支障をきたす。", ko: "연일 계속된 과중한 노동으로 인한 극도의 수면 부족이 다음 날의 집중력과 업무 수행에 커다란 지장을 초래한다." }]
  },
  {
    id: 1957, day: 14, level: "N1",
    word: "具体的", kana: "ぐたいてき", pos: "な형용사",
    mean: "구체적",
    syn: ["詳しい"],
    collocations: [{ ja: "具体的な例", ko: "구체적인 예" }],
    examples: [{ type: "ex", label: "예문", ja: "もう少し具体的に説明してください。", ko: "좀 더 구체적으로 설명해 주세요." }]
  },
  {
    id: 1958, day: 14, level: "N1",
    word: "抽象的", kana: "ちゅうしょうてき", pos: "な형용사",
    mean: "추상적",
    syn: ["漠然とした"],
    collocations: [{ ja: "抽象的な表現", ko: "추상적인 표현" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の話は抽象的で分かりにくい。", ko: "그의 이야기는 추상적이라 이해하기 어렵다." }]
  },
  {
    id: 63, day: 14, level: "N1",
    word: "促進", kana: "そくしん", pos: "명사",
    mean: "촉진",
    syn: ["推進", "後押し"],
    collocations: [{ ja: "販売を促進する", ko: "판매를 촉진하다" }, { ja: "理解を促進する", ko: "이해를 증진시키다" }],
    examples: [{ type: "on", label: "음독", ja: "新エネルギー技術の導入と普及を促進するため、自治体が購入補助金を交付する。", ko: "신에너지 기술 도입과 보급을 촉진하기 위해 지자체가 구매 보조금을 교부하다." }]
  },
  {
    id: 1959, day: 14, level: "N1",
    word: "継続", kana: "けいぞく", pos: "명사 (する동사)",
    mean: "계속",
    syn: ["続ける"],
    collocations: [{ ja: "継続は力なり", ko: "꾸준함이 힘이다" }, { ja: "契約を継続する", ko: "계약을 계속하다" }],
    examples: [{ type: "ex", label: "예문", ja: "継続して努力することが大切だ。", ko: "꾸준히 노력하는 것이 중요하다." }]
  },
  {
    id: 69, day: 14, level: "N1",
    word: "余白", kana: "よはく", pos: "명사",
    mean: "여백, 여유",
    syn: ["ゆとり", "空白"],
    collocations: [{ ja: "余白を設ける", ko: "여백을 남겨 두다" }, { ja: "余白に書き留める", ko: "여백에 메모해 두다" }],
    examples: [{ type: "on", label: "음독", ja: "読者が重要なポイントを書き込めるよう、配布資料には十分な余白を残しておく。", ko: "독자가 중요한 요점을 적어 넣을 수 있도록 배포 자료에는 충분한 여백을 남겨 둔다." }, { type: "kun", label: "훈독", ja: "時間に余り(あまり)を持たせて行動することが、日々の精神的なゆとりにつながる。", ko: "시간에 여유를 남겨두고 행동하는 것이 일상의 정신적인 여유로 이어진다." }]
  },
  {
    id: 1960, day: 14, level: "N1",
    word: "原則", kana: "げんそく", pos: "명사",
    mean: "원칙",
    syn: [],
    collocations: [{ ja: "原則として", ko: "원칙적으로" }],
    examples: [{ type: "ex", label: "예문", ja: "原則として、遅刻は認めない。", ko: "원칙적으로 지각은 인정하지 않는다." }]
  },
  // ==========================================
  // [DAY 15] N2 필수 + N1 · 60개
  // ==========================================
  {
    id: 1961, day: 15, level: "N2",
    word: "染まる", kana: "そまる", pos: "동사 (자동사)",
    mean: "물들다",
    syn: ["色づく"],
    collocations: [{ ja: "夕日に染まる", ko: "노을에 물들다" }, { ja: "悪に染まる", ko: "악에 물들다" }],
    examples: [{ type: "ex", label: "예문", ja: "空が夕日で赤く染まった。", ko: "하늘이 노을로 붉게 물들었다." }]
  },
  {
    id: 87, day: 15, level: "N2",
    word: "緩む", kana: "ゆるむ", pos: "동사 (5단 자동사)",
    mean: "느슨해지다, 풀리다, 누그러지다",
    syn: ["ゆるくなる", "和らぐ"],
    collocations: [{ ja: "気が緩む", ko: "긴장이 풀리다" }, { ja: "寒さが緩む", ko: "추위가 누그러지다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "長距離を歩いているうちに靴の紐が緩み、立ち止まって結び直した。", ko: "장거리를 걷는 사이에 신발 끈이 느슨해져서 멈춰 서서 다시 묶었다." }],
    polysemy: [
      { def: "① (단단히 묶이거나 조인 것이) 느슨해지다, 헐거워지다", ja: "長年の使用によって家具の固定ネジが緩み、全体がぐらついている。", ko: "오랜 사용으로 인해 가구의 고정 나사가 헐거워져 전체가 흔들거린다." },
      { def: "② (정신적 긴장·주의·규율이) 풀리다, 해이해지다", ja: "目標を達成した途端に気が緩み、思わぬケアレスミスを連発してしまった。", ko: "목표를 달성하자마자 긴장이 풀려 뜻밖의 단순 실수를 연발하고 말았다." },
      { def: "③ (추위·기온이나 엄격한 통제가) 누그러지다, 완화되다", ja: "三月に入ってようやく厳しい寒さが緩み、春の穏やかな兆しが感じられる。", ko: "3월에 들어서 드디어 매서운 추위가 누그러지고 봄의 온화한 조짐이 느껴진다." }
    ]
  },
  {
    id: 1962, day: 15, level: "N2",
    word: "染める", kana: "そめる", pos: "동사 (타동사)",
    mean: "물들이다, 염색하다",
    syn: [],
    collocations: [{ ja: "髪を染める", ko: "머리를 염색하다" }, { ja: "頬を染める", ko: "볼을 붉히다" }],
    examples: [{ type: "ex", label: "예문", ja: "髪を茶色に染めた。", ko: "머리를 갈색으로 염색했다." }]
  },
  {
    id: 1963, day: 15, level: "N2",
    word: "逸らす", kana: "そらす", pos: "동사 (타동사)",
    mean: "딴 데로 돌리다",
    syn: ["外す"],
    collocations: [{ ja: "目を逸らす", ko: "눈을 돌리다" }, { ja: "話を逸らす", ko: "말을 돌리다" }],
    examples: [{ type: "ex", label: "예문", ja: "都合が悪くなると、彼は話を逸らす。", ko: "불리해지면 그는 말을 돌린다." }]
  },
  {
    id: 1964, day: 15, level: "N2",
    word: "絶える", kana: "たえる", pos: "동사 (자동사)",
    mean: "끊어지다",
    syn: ["途絶える"],
    collocations: [{ ja: "連絡が絶える", ko: "연락이 끊어지다" }, { ja: "笑いが絶えない", ko: "웃음이 끊이지 않다" }],
    examples: [{ type: "ex", label: "예문", ja: "この家は笑い声が絶えない。", ko: "이 집은 웃음소리가 끊이지 않는다." }]
  },
  {
    id: 1965, day: 15, level: "N2",
    word: "高まる", kana: "たかまる", pos: "동사 (자동사)",
    mean: "높아지다",
    syn: ["上がる"],
    collocations: [{ ja: "関心が高まる", ko: "관심이 높아지다" }, { ja: "緊張が高まる", ko: "긴장이 고조되다" }],
    examples: [{ type: "ex", label: "예문", ja: "環境問題への関心が高まっている。", ko: "환경 문제에 대한 관심이 높아지고 있다." }]
  },
  {
    id: 1966, day: 15, level: "N2",
    word: "高める", kana: "たかめる", pos: "동사 (타동사)",
    mean: "높이다",
    syn: ["向上させる"],
    collocations: [{ ja: "能力を高める", ko: "능력을 높이다" }, { ja: "意識を高める", ko: "의식을 높이다" }],
    examples: [{ type: "ex", label: "예문", ja: "社員の意識を高めるために研修を行った。", ko: "사원의 의식을 높이기 위해 연수를 실시했다." }]
  },
  {
    id: 141, day: 15, level: "N2",
    word: "衰える", kana: "おとろえる", pos: "동사 (1단 자동사)",
    mean: "쇠약해지다, 쇠퇴하다",
    syn: ["弱る", "衰退する"],
    collocations: [{ ja: "体力が衰える", ko: "체력이 쇠약해지다" }, { ja: "勢いが衰える", ko: "기세가 꺾이다/쇠퇴하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "高齢化に伴い、基礎体力が徐々に衰えるのは生理的に自然な現象だ。", ko: "고령화에 따라 기초 체력이 서서히 쇠약해지는 것은 생리적으로 자연스러운 현상이다." }]
  },
  {
    id: 1967, day: 15, level: "N2",
    word: "炊く", kana: "たく", pos: "동사 (타동사)",
    mean: "(밥을) 짓다",
    syn: [],
    collocations: [{ ja: "ご飯を炊く", ko: "밥을 짓다" }],
    examples: [{ type: "ex", label: "예문", ja: "朝起きてすぐにご飯を炊いた。", ko: "아침에 일어나자마자 밥을 지었다." }]
  },
  {
    id: 1968, day: 15, level: "N2",
    word: "足す", kana: "たす", pos: "동사 (타동사)",
    mean: "더하다, 보태다",
    syn: ["加える"],
    collocations: [{ ja: "塩を足す", ko: "소금을 더 넣다" }, { ja: "用を足す", ko: "볼일을 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "味が薄いので、醤油を少し足した。", ko: "맛이 싱거워서 간장을 조금 더 넣었다." }]
  },
  {
    id: 1969, day: 15, level: "N2",
    word: "立ち止まる", kana: "たちどまる", pos: "동사 (자동사)",
    mean: "멈춰 서다",
    syn: ["止まる"],
    collocations: [{ ja: "道で立ち止まる", ko: "길에서 멈춰 서다" }],
    examples: [{ type: "ex", label: "예문", ja: "名前を呼ばれて、思わず立ち止まった。", ko: "이름이 불려 무심코 멈춰 섰다." }]
  },
  {
    id: 1970, day: 15, level: "N2",
    word: "立ち直る", kana: "たちなおる", pos: "동사 (자동사)",
    mean: "회복하다, 다시 일어서다",
    syn: ["回復する"],
    collocations: [{ ja: "失恋から立ち直る", ko: "실연에서 회복하다" }, { ja: "経済が立ち直る", ko: "경제가 회복되다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女はようやくショックから立ち直った。", ko: "그녀는 겨우 충격에서 벗어났다." }]
  },
  {
    id: 160, day: 15, level: "N2",
    word: "穏やか", kana: "おだやか", pos: "な형용사",
    mean: "온화함, 평온함",
    syn: ["静か", "のどか"],
    collocations: [{ ja: "穏やかな海", ko: "잔잔하고 온화한 바다" }, { ja: "穏やかな人柄", ko: "온후한 인품" }],
    examples: [{ type: "kun", label: "훈독", ja: "波一つ立たない穏やかな春の海を眺めていると、日々のストレスがすっと消えていく。", ko: "파도 하나 일지 않는 온화한 봄 바다를 바라보고 있으면 일상의 스트레스가 싹 사라져 간다." }, { type: "on", label: "음독", ja: "急進的な改革を避け、社会の調和を重んじる穏健(おんけん)な政策を段階的に進める。", ko: "급진적인 개혁을 피하고 사회의 조화를 중시하는 온건한 정책을 단계적으로 추진하다." }]
  },
  {
    id: 1971, day: 15, level: "N2",
    word: "好ましい", kana: "このましい", pos: "い형용사",
    mean: "바람직하다, 호감이 가다",
    syn: ["望ましい"],
    collocations: [{ ja: "好ましい結果", ko: "바람직한 결과" }],
    examples: [{ type: "ex", label: "예문", ja: "あまり好ましくない状況だ。", ko: "그다지 바람직하지 않은 상황이다." }]
  },
  {
    id: 1972, day: 15, level: "N2",
    word: "好調", kana: "こうちょう", pos: "な형용사",
    mean: "호조임, 순조로움",
    syn: ["順調な"],
    collocations: [{ ja: "好調な売れ行き", ko: "호조인 판매" }],
    examples: [{ type: "ex", label: "예문", ja: "新商品の売れ行きは好調だ。", ko: "신상품의 판매는 호조다." }]
  },
  {
    id: 1973, day: 15, level: "N2",
    word: "高度", kana: "こうど", pos: "な형용사",
    mean: "고도임, 수준이 높음",
    syn: ["高い"],
    collocations: [{ ja: "高度な技術", ko: "고도의 기술" }],
    examples: [{ type: "ex", label: "예문", ja: "この仕事には高度な専門知識が必要だ。", ko: "이 일에는 고도의 전문 지식이 필요하다." }]
  },
  {
    id: 1974, day: 15, level: "N2",
    word: "塩辛い", kana: "しおからい", pos: "い형용사",
    mean: "짜다",
    syn: ["しょっぱい"],
    collocations: [{ ja: "塩辛いスープ", ko: "짠 수프" }],
    examples: [{ type: "ex", label: "예문", ja: "このスープは少し塩辛い。", ko: "이 수프는 좀 짜다." }]
  },
  {
    id: 1975, day: 15, level: "N2",
    word: "公平", kana: "こうへい", pos: "な형용사",
    mean: "공평함",
    syn: ["平等な"],
    collocations: [{ ja: "公平な判断", ko: "공평한 판단" }],
    examples: [{ type: "ex", label: "예문", ja: "全員を公平に扱うべきだ。", ko: "전원을 공평하게 대해야 한다." }]
  },
  {
    id: 1976, day: 15, level: "N2",
    word: "システム", kana: "システム", pos: "외래어",
    mean: "시스템, 체계 (system)",
    syn: ["仕組み", "制度"],
    collocations: [{ ja: "システムを導入する", ko: "시스템을 도입하다" }],
    examples: [{ type: "ex", label: "예문", ja: "会社に新しいシステムが導入された。", ko: "회사에 새로운 시스템이 도입되었다." }]
  },
  {
    id: 1977, day: 15, level: "N2",
    word: "ジャンル", kana: "ジャンル", pos: "외래어",
    mean: "장르 (genre)",
    syn: ["分野"],
    collocations: [{ ja: "音楽のジャンル", ko: "음악 장르" }],
    examples: [{ type: "ex", label: "예문", ja: "どんなジャンルの本が好きですか。", ko: "어떤 장르의 책을 좋아하세요?" }]
  },
  {
    id: 1978, day: 15, level: "N2",
    word: "スタイル", kana: "スタイル", pos: "외래어",
    mean: "스타일, 방식 (style)",
    syn: ["様式", "体型"],
    collocations: [{ ja: "生活スタイル", ko: "생활 방식" }],
    examples: [{ type: "ex", label: "예문", ja: "自分のスタイルを貫く。", ko: "자신의 방식을 관철한다." }]
  },
  {
    id: 1979, day: 15, level: "N2",
    word: "絶えず", kana: "たえず", pos: "부사",
    mean: "끊임없이",
    syn: ["常に", "いつも"],
    collocations: [{ ja: "絶えず努力する", ko: "끊임없이 노력하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この川は絶えず流れている。", ko: "이 강은 끊임없이 흐르고 있다." }]
  },
  {
    id: 1980, day: 15, level: "N2",
    word: "直に", kana: "じかに", pos: "부사",
    mean: "직접",
    syn: ["直接"],
    collocations: [{ ja: "直に話す", ko: "직접 이야기하다" }],
    examples: [{ type: "ex", label: "예문", ja: "専門家の話を直に聞く機会があった。", ko: "전문가의 이야기를 직접 들을 기회가 있었다." }]
  },
  {
    id: 1981, day: 15, level: "N2",
    word: "即座に", kana: "そくざに", pos: "부사",
    mean: "즉석에서, 즉각",
    syn: ["すぐに", "直ちに"],
    collocations: [{ ja: "即座に答える", ko: "즉석에서 대답하다" }],
    examples: [{ type: "ex", label: "예문", ja: "質問に即座に答えられなかった。", ko: "질문에 즉각 대답하지 못했다." }]
  },
  {
    id: 107, day: 15, level: "N2",
    word: "どうやら", kana: "どうやら", pos: "부사",
    mean: "아무래도, 어쩌면 (~らしい / 〜ようだ 호응)",
    syn: ["どうも", "おそらく"],
    collocations: [{ ja: "どうやら本当らしい", ko: "아무래도 사실인 듯하다" }, { ja: "どうやら間に合った", ko: "어찌어찌 제시간에 댔다" }],
    examples: [{ type: "ex", label: "예문", ja: "空の急激な曇り行きと冷たい風の吹き方を見る限り、どうやら今夜から雪に変わりそうだ。", ko: "하늘의 급격한 구름 상태와 차가운 바람의 흐름으로 보아 아무래도 오늘 밤부터 눈으로 바뀔 듯하다." }]
  },
  {
    id: 1982, day: 15, level: "N2",
    word: "ごちゃごちゃ", kana: "ごちゃごちゃ", pos: "부사 (의성어·의태어)",
    mean: "어수선하게, 뒤죽박죽",
    syn: ["散らかった"],
    collocations: [{ ja: "ごちゃごちゃした部屋", ko: "어수선한 방" }],
    examples: [{ type: "ex", label: "예문", ja: "机の上がごちゃごちゃしている。", ko: "책상 위가 뒤죽박죽이다." }]
  },
  {
    id: 1983, day: 15, level: "N2",
    word: "しかしながら", kana: "しかしながら", pos: "접속사",
    mean: "그렇지만, 그러나 (문어)",
    syn: ["しかし"],
    collocations: [{ ja: "しかしながら", ko: "그렇지만" }],
    examples: [{ type: "ex", label: "예문", ja: "努力は認める。しかしながら、結果は不十分だ。", ko: "노력은 인정한다. 그렇지만 결과는 불충분하다." }]
  },
  {
    id: 1984, day: 15, level: "N2",
    word: "高〜", kana: "こう", pos: "접두어",
    mean: "고~ (높은)",
    syn: [],
    collocations: [{ ja: "高収入", ko: "고수입" }, { ja: "高水準", ko: "고수준" }, { ja: "高性能", ko: "고성능" }],
    examples: []
  },
  {
    id: 1985, day: 15, level: "N2",
    word: "低〜", kana: "てい", pos: "접두어",
    mean: "저~ (낮은)",
    syn: [],
    collocations: [{ ja: "低価格", ko: "저가격" }, { ja: "低気圧", ko: "저기압" }, { ja: "低カロリー", ko: "저칼로리" }],
    examples: []
  },
  {
    id: 126, day: 15, level: "N2",
    word: "繁栄", kana: "はんえい", pos: "명사",
    mean: "번영",
    syn: ["栄えること", "隆盛"],
    collocations: [{ ja: "繁栄を極める", ko: "번영의 극치를 누리다" }, { ja: "子孫の繁栄", ko: "자손의 번영" }],
    examples: [{ type: "on", label: "음독", ja: "中世において東西交易の要衝として栄えたその港湾都市は、数世紀にわたり未曾有の繁栄を極めた。", ko: "중세에 동서 교역의 요충지로서 번창했던 그 항만 도시는 수세기에 걸쳐 미증유의 번영을 누렸다." }]
  },
  {
    id: 1986, day: 15, level: "N2",
    word: "省エネ", kana: "しょうエネ", pos: "명사",
    mean: "에너지 절약",
    syn: ["節電"],
    collocations: [{ ja: "省エネ家電", ko: "에너지 절약형 가전" }],
    examples: [{ type: "ex", label: "예문", ja: "省エネのためにエアコンの温度を調整する。", ko: "에너지 절약을 위해 에어컨 온도를 조절한다." }]
  },
  {
    id: 1987, day: 15, level: "N2",
    word: "家事", kana: "かじ", pos: "명사",
    mean: "가사, 집안일",
    syn: [],
    collocations: [{ ja: "家事を分担する", ko: "집안일을 분담하다" }],
    examples: [{ type: "ex", label: "예문", ja: "夫婦で家事を分担している。", ko: "부부가 집안일을 분담하고 있다." }]
  },
  {
    id: 1988, day: 15, level: "N2",
    word: "育児", kana: "いくじ", pos: "명사 (する동사)",
    mean: "육아",
    syn: ["子育て"],
    collocations: [{ ja: "育児休暇", ko: "육아 휴직" }, { ja: "育児と仕事の両立", ko: "육아와 일의 양립" }],
    examples: [{ type: "ex", label: "예문", ja: "育児と仕事を両立させるのは大変だ。", ko: "육아와 일을 양립시키는 것은 힘들다." }]
  },
  {
    id: 1989, day: 15, level: "N2",
    word: "子育て", kana: "こそだて", pos: "명사 (する동사)",
    mean: "육아, 자녀 양육",
    syn: ["育児"],
    collocations: [{ ja: "子育て支援", ko: "육아 지원" }],
    examples: [{ type: "ex", label: "예문", ja: "地域全体で子育てを支える。", ko: "지역 전체가 육아를 지원한다." }]
  },
  {
    id: 1990, day: 15, level: "N2",
    word: "介護", kana: "かいご", pos: "명사 (する동사)",
    mean: "간병, 개호",
    syn: ["看病"],
    collocations: [{ ja: "親を介護する", ko: "부모를 간병하다" }, { ja: "介護施設", ko: "요양 시설" }],
    examples: [{ type: "ex", label: "예문", ja: "母は祖母の介護をしている。", ko: "어머니는 할머니를 간병하고 계신다." }]
  },
  {
    id: 1991, day: 15, level: "N2",
    word: "家賃", kana: "やちん", pos: "명사",
    mean: "집세",
    syn: ["賃料"],
    collocations: [{ ja: "家賃を払う", ko: "집세를 내다" }, { ja: "家賃が高い", ko: "집세가 비싸다" }],
    examples: [{ type: "ex", label: "예문", ja: "東京は家賃が高い。", ko: "도쿄는 집세가 비싸다." }]
  },
  {
    id: 1992, day: 15, level: "N2",
    word: "光熱費", kana: "こうねつひ", pos: "명사",
    mean: "광열비 (전기·가스·수도 요금)",
    syn: [],
    collocations: [{ ja: "光熱費を節約する", ko: "광열비를 절약하다" }],
    examples: [{ type: "ex", label: "예문", ja: "冬は暖房で光熱費がかさむ。", ko: "겨울에는 난방으로 광열비가 많이 든다." }]
  },
  {
    id: 127, day: 15, level: "N2",
    word: "偏見", kana: "へんけん", pos: "명사",
    mean: "편견",
    syn: ["先入観", "思い込み"],
    collocations: [{ ja: "偏見を捨てる", ko: "편견을 버리다" }, { ja: "偏見の目で見られる", ko: "편견 어린 시선으로 취급받다" }],
    examples: [{ type: "on", label: "음독", ja: "国籍や人種に対する根拠のない偏見を取り払い、個人の資質と実力を公平に評価すべきだ。", ko: "국적이나 인종에 대한 근거 없는 편견을 걷어내고 개인의 자질과 실력을 공평하게 평가해야 한다." }]
  },
  {
    id: 1993, day: 15, level: "N2",
    word: "生活費", kana: "せいかつひ", pos: "명사",
    mean: "생활비",
    syn: [],
    collocations: [{ ja: "生活費を稼ぐ", ko: "생활비를 벌다" }],
    examples: [{ type: "ex", label: "예문", ja: "アルバイトで生活費を稼いでいる。", ko: "아르바이트로 생활비를 벌고 있다." }]
  },
  {
    id: 1994, day: 15, level: "N2",
    word: "世帯", kana: "せたい", pos: "명사",
    mean: "세대, 가구",
    syn: ["家庭"],
    collocations: [{ ja: "単身世帯", ko: "1인 가구" }, { ja: "世帯主", ko: "세대주" }],
    examples: [{ type: "ex", label: "예문", ja: "一人暮らしの世帯が増えている。", ko: "1인 가구가 늘고 있다." }]
  },
  {
    id: 1995, day: 15, level: "N2",
    word: "近所", kana: "きんじょ", pos: "명사",
    mean: "근처, 이웃",
    syn: ["近く"],
    collocations: [{ ja: "近所の人", ko: "이웃 사람" }, { ja: "近所付き合い", ko: "이웃과의 교류" }],
    examples: [{ type: "ex", label: "예문", ja: "近所の人にあいさつする。", ko: "이웃 사람에게 인사한다." }]
  },
  {
    id: 1996, day: 15, level: "N2",
    word: "住宅", kana: "じゅうたく", pos: "명사",
    mean: "주택",
    syn: ["住まい"],
    collocations: [{ ja: "住宅地", ko: "주택지" }, { ja: "住宅ローン", ko: "주택 대출" }],
    examples: [{ type: "ex", label: "예문", ja: "駅の近くに新しい住宅が建った。", ko: "역 근처에 새 주택이 들어섰다." }]
  },
  {
    id: 1997, day: 15, level: "N2",
    word: "引っ越し", kana: "ひっこし", pos: "명사 (する동사)",
    mean: "이사",
    syn: ["転居"],
    collocations: [{ ja: "引っ越しの準備", ko: "이사 준비" }],
    examples: [{ type: "ex", label: "예문", ja: "来月、大阪へ引っ越しする。", ko: "다음 달 오사카로 이사한다." }]
  },
  {
    id: 1998, day: 15, level: "N2",
    word: "食器", kana: "しょっき", pos: "명사",
    mean: "식기, 그릇",
    syn: [],
    collocations: [{ ja: "食器を洗う", ko: "설거지하다" }, { ja: "食器棚", ko: "찬장" }],
    examples: [{ type: "ex", label: "예문", ja: "食事の後、食器を片付けた。", ko: "식사 후 그릇을 정리했다." }]
  },
  {
    id: 128, day: 15, level: "N2",
    word: "崩壊", kana: "ほうかい", pos: "명사",
    mean: "붕괴",
    syn: ["崩れること", "倒壊"],
    collocations: [{ ja: "信頼関係の崩壊", ko: "신뢰 관계의 붕괴" }, { ja: "バブル崩壊", ko: "버블(거품) 경제 붕괴" }],
    examples: [{ type: "on", label: "음독", ja: "バブル経済の崩壊以降、日本社会は長期にわたるデフレと構造的な経済停滞に直面することとなった。", ko: "버블 경제 붕괴 이후 일본 사회는 장기에 걸친 디플레이션과 구조적인 경제 정체에 직면하게 되었다." }]
  },
  {
    id: 1999, day: 15, level: "N2",
    word: "献立", kana: "こんだて", pos: "명사",
    mean: "메뉴, 식단",
    syn: ["メニュー"],
    collocations: [{ ja: "献立を考える", ko: "식단을 짜다" }],
    examples: [{ type: "ex", label: "예문", ja: "毎日の献立を考えるのは大変だ。", ko: "매일의 식단을 생각하는 것은 힘들다." }]
  },
  {
    id: 2000, day: 15, level: "N2",
    word: "食品", kana: "しょくひん", pos: "명사",
    mean: "식품",
    syn: ["食べ物"],
    collocations: [{ ja: "冷凍食品", ko: "냉동식품" }, { ja: "食品売り場", ko: "식품 매장" }],
    examples: [{ type: "ex", label: "예문", ja: "食品の安全が問題になっている。", ko: "식품 안전이 문제가 되고 있다." }]
  },
  {
    id: 2001, day: 15, level: "N2",
    word: "食料", kana: "しょくりょう", pos: "명사",
    mean: "식료, 식량",
    syn: ["食べ物"],
    collocations: [{ ja: "食料品", ko: "식료품" }, { ja: "食料を備える", ko: "식량을 비축하다" }],
    examples: [{ type: "ex", label: "예문", ja: "非常用の食料を準備しておく。", ko: "비상용 식량을 준비해 둔다." }]
  },
  {
    id: 2002, day: 15, level: "N2",
    word: "体調", kana: "たいちょう", pos: "명사",
    mean: "몸 상태, 컨디션",
    syn: ["調子"],
    collocations: [{ ja: "体調を崩す", ko: "몸 상태가 나빠지다" }, { ja: "体調管理", ko: "컨디션 관리" }],
    examples: [{ type: "ex", label: "예문", ja: "季節の変わり目は体調を崩しやすい。", ko: "환절기에는 몸 상태가 나빠지기 쉽다." }]
  },
  {
    id: 2003, day: 15, level: "N2",
    word: "診察", kana: "しんさつ", pos: "명사 (する동사)",
    mean: "진찰",
    syn: [],
    collocations: [{ ja: "診察を受ける", ko: "진찰을 받다" }, { ja: "診察券", ko: "진찰권" }],
    examples: [{ type: "ex", label: "예문", ja: "病院で医者の診察を受けた。", ko: "병원에서 의사의 진찰을 받았다." }]
  },
  {
    id: 2004, day: 15, level: "N2",
    word: "手術", kana: "しゅじゅつ", pos: "명사 (する동사)",
    mean: "수술",
    syn: [],
    collocations: [{ ja: "手術を受ける", ko: "수술을 받다" }, { ja: "手術が成功する", ko: "수술이 성공하다" }],
    examples: [{ type: "ex", label: "예문", ja: "父の手術は無事に成功した。", ko: "아버지의 수술은 무사히 성공했다." }]
  },
  {
    id: 129, day: 15, level: "N2",
    word: "摩擦", kana: "まさつ", pos: "명사",
    mean: "마찰 (물리적 마찰 / 갈등)",
    syn: ["対立", "あつれき"],
    collocations: [{ ja: "貿易摩擦", ko: "무역 마찰" }, { ja: "摩擦が生じる", ko: "갈등/마찰이 빚어지다" }],
    examples: [{ type: "on", label: "음독", ja: "異なる文化や習慣を持つ人々が協働する現場では、相互理解を深めて不要な摩擦を防ぐ工夫が欠かせない。", ko: "서로 다른 문화와 관습을 가진 사람들이 협업하는 현장에서는 상호 이해를 깊게 하여 불필요한 마찰을 방지하는 궁리가 필수적이다." }]
  },
  {
    id: 70, day: 15, level: "N1",
    word: "連携", kana: "れんけい", pos: "명사",
    mean: "연계, 제휴",
    syn: ["協力", "提携"],
    collocations: [{ ja: "密接に連携する", ko: "긴밀하게 연계하다" }, { ja: "連携を強める", ko: "연계 협력을 강화하다" }],
    examples: [{ type: "on", label: "음독", ja: "医療機関と地方自治体が緊密に連携して、地域住民の健康を見守るサポート体制を築く。", ko: "의료기관과 지방자치단체가 긴밀히 연계하여 지역 주민의 건강을 돌보는 지원 체제를 구축하다." }]
  },
  {
    id: 2005, day: 15, level: "N1",
    word: "貢献", kana: "こうけん", pos: "명사 (する동사)",
    mean: "공헌",
    syn: ["寄与"],
    collocations: [{ ja: "社会に貢献する", ko: "사회에 공헌하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は地域の発展に大きく貢献した。", ko: "그는 지역 발전에 크게 공헌했다." }]
  },
  {
    id: 2006, day: 15, level: "N1",
    word: "構築", kana: "こうちく", pos: "명사 (する동사)",
    mean: "구축",
    syn: ["築く"],
    collocations: [{ ja: "システムを構築する", ko: "시스템을 구축하다" }, { ja: "信頼関係の構築", ko: "신뢰 관계 구축" }],
    examples: [{ type: "ex", label: "예문", ja: "顧客との信頼関係を構築する。", ko: "고객과의 신뢰 관계를 구축한다." }]
  },
  {
    id: 73, day: 15, level: "N1",
    word: "培う", kana: "つちかう", pos: "동사 (5단 타동사)",
    mean: "기르다, 배양하다",
    syn: ["育てる", "養う"],
    collocations: [{ ja: "信頼関係を培う", ko: "신뢰 관계를 배양하다/기르다" }, { ja: "実力を培う", ko: "실력을 기르다" }],
    examples: [{ type: "kun", label: "훈독", ja: "長年の地道な研究と実践を通じて、現場での確かな信頼関係を培う。", ko: "오랜 세월의 착실한 연구와 실천을 통해 현장에서의 확실한 신뢰 관계를 기르다." }]
  },
  {
    id: 2007, day: 15, level: "N1",
    word: "合理的", kana: "ごうりてき", pos: "な형용사",
    mean: "합리적",
    syn: ["効率的な"],
    collocations: [{ ja: "合理的な判断", ko: "합리적인 판단" }],
    examples: [{ type: "ex", label: "예문", ja: "もっと合理的な方法を考えよう。", ko: "더 합리적인 방법을 생각해 보자." }]
  },
  {
    id: 76, day: 15, level: "N1",
    word: "遂げる", kana: "とげる", pos: "동사 (1단 타동사)",
    mean: "이루다, 완수하다, 달성하다",
    syn: ["成し遂げる", "果たす"],
    collocations: [{ ja: "初志を遂げる", ko: "초지를 관철하여 이루다" }, { ja: "急成長を遂げる", ko: "급성장을 이루어내다" }],
    examples: [{ type: "kun", label: "훈독", ja: "数々の過酷な試練を乗り越え、ついに創業時の初志を遂げることができた。", ko: "수많은 가혹한 시련을 극복하고 마침내 창업 당시의 초지를 이룰 수 있었다." }, { type: "on", label: "음독", ja: "いかなる逆境にあっても、与えられた重要な任務を最後まで遂行(すいこう)する。", ko: "어떠한 역경에 처하더라도 주어진 막중한 임무를 끝까지 완수(수행)한다." }]
  },
  {
    id: 2008, day: 15, level: "N1",
    word: "考案", kana: "こうあん", pos: "명사 (する동사)",
    mean: "고안",
    syn: ["工夫"],
    collocations: [{ ja: "新しい方法を考案する", ko: "새로운 방법을 고안하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は便利な道具を考案した。", ko: "그는 편리한 도구를 고안했다." }]
  },
  {
    id: 2009, day: 15, level: "N1",
    word: "個々", kana: "ここ", pos: "명사",
    mean: "개개, 각각",
    syn: ["一つ一つ"],
    collocations: [{ ja: "個々の意見", ko: "각자의 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "個々の事情を考慮する必要がある。", ko: "개개의 사정을 고려할 필요가 있다." }]
  },
  // ==========================================
  // [DAY 16] N2 필수 + N1 · 60개
  // ==========================================
  {
    id: 2010, day: 16, level: "N2",
    word: "断つ", kana: "たつ", pos: "동사 (타동사)",
    mean: "끊다, 차단하다",
    syn: ["やめる"],
    collocations: [{ ja: "酒を断つ", ko: "술을 끊다" }, { ja: "関係を断つ", ko: "관계를 끊다" }],
    examples: [{ type: "ex", label: "예문", ja: "健康のために酒を断った。", ko: "건강을 위해 술을 끊었다." }]
  },
  {
    id: 142, day: 16, level: "N2",
    word: "蓄える", kana: "たくわえる", pos: "동사 (1단 타동사)",
    mean: "저축하다, 비축하다, (지식을) 쌓다",
    syn: ["ためる", "貯蓄する"],
    collocations: [{ ja: "資金を蓄える", ko: "자금을 비축하다" }, { ja: "知識を蓄える", ko: "지식을 축적하다/쌓다" }],
    examples: [{ type: "kun", label: "훈독", ja: "将来の不測の事態に備えて、十分な生活資金を蓄えておく。", ko: "장래의 불측의 사태에 대비하여 충분한 생활 자금을 비축해 둔다." }, { type: "on", label: "음독", ja: "長年にわたる地道な研究データの蓄積(ちくせき)が、今回の新発見を導いた。", ko: "오랜 세월에 걸친 착실한 연구 데이터의 축적이 이번 새로운 발견을 이끌어 냈다." }]
  },
  {
    id: 2011, day: 16, level: "N2",
    word: "だます", kana: "だます", pos: "동사 (타동사)",
    mean: "속이다",
    syn: ["欺く"],
    collocations: [{ ja: "人をだます", ko: "남을 속이다" }, { ja: "だまされる", ko: "속다" }],
    examples: [{ type: "ex", label: "예문", ja: "うまい話にだまされないよう注意しよう。", ko: "그럴듯한 이야기에 속지 않도록 주의하자." }]
  },
  {
    id: 2012, day: 16, level: "N2",
    word: "ためらう", kana: "ためらう", pos: "동사 (타동사)",
    mean: "망설이다",
    syn: ["迷う"],
    collocations: [{ ja: "返事をためらう", ko: "대답을 망설이다" }, { ja: "ためらわずに", ko: "주저하지 않고" }],
    examples: [{ type: "ex", label: "예문", ja: "困ったときはためらわずに相談してください。", ko: "곤란할 때는 주저하지 말고 상담하세요." }]
  },
  {
    id: 2013, day: 16, level: "N2",
    word: "保つ", kana: "たもつ", pos: "동사 (타동사)",
    mean: "유지하다, 지키다",
    syn: ["維持する"],
    collocations: [{ ja: "健康を保つ", ko: "건강을 유지하다" }, { ja: "距離を保つ", ko: "거리를 유지하다" }],
    examples: [{ type: "ex", label: "예문", ja: "室内の温度を一定に保つ。", ko: "실내 온도를 일정하게 유지한다." }]
  },
  {
    id: 2014, day: 16, level: "N2",
    word: "垂れる", kana: "たれる", pos: "동사 (자동사)",
    mean: "늘어지다, 드리워지다",
    syn: ["下がる"],
    collocations: [{ ja: "頭を垂れる", ko: "머리를 숙이다" }, { ja: "水が垂れる", ko: "물이 떨어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "天井から水が垂れている。", ko: "천장에서 물이 떨어지고 있다." }]
  },
  {
    id: 2015, day: 16, level: "N2",
    word: "散らす", kana: "ちらす", pos: "동사 (타동사)",
    mean: "흩뜨리다",
    syn: [],
    collocations: [{ ja: "気を散らす", ko: "정신을 흩뜨리다" }, { ja: "火花を散らす", ko: "불꽃을 튀기다" }],
    examples: [{ type: "ex", label: "예문", ja: "テレビの音に気を散らされて勉強できない。", ko: "텔레비전 소리에 정신이 흩어져 공부를 못 하겠다." }]
  },
  {
    id: 143, day: 16, level: "N2",
    word: "妨げる", kana: "さまたげる", pos: "동사 (1단 타동사)",
    mean: "방해하다, 저해하다",
    syn: ["邪魔する", "阻む"],
    collocations: [{ ja: "進行を妨げる", ko: "진행을 방해하다" }, { ja: "睡眠を妨げる", ko: "수면을 방해하다/저해하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "時代遅れの過剰な規制が、自由で活力ある経済活動の発展を妨げている。", ko: "시대에 뒤처진 과도한 규제가 자유롭고 활력 있는 경제 활동의 발전을 저해하고 있다." }, { type: "on", label: "음독", ja: "公共の交通機関の運行を故意に妨害(ぼうがい)する行為は厳しく処罰される。", ko: "대중교통 기관의 운행을 고의로 방해하는 행위는 엄격하게 처벌받는다." }]
  },
  {
    id: 2016, day: 16, level: "N2",
    word: "突き当たる", kana: "つきあたる", pos: "동사 (자동사)",
    mean: "막다른 곳에 이르다, 부딪히다",
    syn: ["ぶつかる"],
    collocations: [{ ja: "壁に突き当たる", ko: "벽에 부딪히다" }, { ja: "道を突き当たる", ko: "길 끝에 다다르다" }],
    examples: [{ type: "ex", label: "예문", ja: "この道を突き当たって右に曲がってください。", ko: "이 길 끝에서 오른쪽으로 꺾어 주세요." }]
  },
  {
    id: 2017, day: 16, level: "N2",
    word: "付け加える", kana: "つけくわえる", pos: "동사 (타동사)",
    mean: "덧붙이다",
    syn: ["添える", "加える"],
    collocations: [{ ja: "説明を付け加える", ko: "설명을 덧붙이다" }],
    examples: [{ type: "ex", label: "예문", ja: "最後に一言付け加えたいと思います。", ko: "마지막으로 한마디 덧붙이고 싶습니다." }]
  },
  {
    id: 2018, day: 16, level: "N2",
    word: "伝わる", kana: "つたわる", pos: "동사 (자동사)",
    mean: "전해지다",
    syn: ["伝える"],
    collocations: [{ ja: "気持ちが伝わる", ko: "마음이 전해지다" }, { ja: "代々伝わる", ko: "대대로 전해지다" }],
    examples: [{ type: "ex", label: "예문", ja: "この村には古い伝説が伝わっている。", ko: "이 마을에는 오래된 전설이 전해지고 있다." }]
  },
  {
    id: 2019, day: 16, level: "N2",
    word: "つまずく", kana: "つまずく", pos: "동사 (자동사)",
    mean: "발이 걸려 넘어질 뻔하다, 좌절하다",
    syn: ["転ぶ", "失敗する"],
    collocations: [{ ja: "石につまずく", ko: "돌에 걸려 넘어질 뻔하다" }, { ja: "計画がつまずく", ko: "계획이 좌절되다" }],
    examples: [{ type: "ex", label: "예문", ja: "最初の段階でつまずいてしまった。", ko: "첫 단계에서 좌절하고 말았다." }]
  },
  {
    id: 161, day: 16, level: "N2",
    word: "厳格", kana: "げんかく", pos: "な형용사",
    mean: "엄격함",
    syn: ["厳しい", "厳重"],
    collocations: [{ ja: "厳格な基準", ko: "엄격한 기준" }, { ja: "厳格に管理する", ko: "엄격하게 관리하다" }],
    examples: [{ type: "on", label: "음독", ja: "消費者の安全と生命を守るため、医薬品の製造現場には極めて厳格な品質基準が課されている。", ko: "소비자의 안전과 생명을 지키기 위해 의약품 제조 현장에는 지극히 엄격한 품질 기준이 부과되어 있다." }]
  },
  {
    id: 2020, day: 16, level: "N2",
    word: "滑稽", kana: "こっけい", pos: "な형용사",
    mean: "우스꽝스러움",
    syn: ["おかしい"],
    collocations: [{ ja: "滑稽な話", ko: "우스꽝스러운 이야기" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の慌てた様子は滑稽だった。", ko: "그의 허둥대는 모습은 우스꽝스러웠다." }]
  },
  {
    id: 2021, day: 16, level: "N2",
    word: "渋い", kana: "しぶい", pos: "い형용사",
    mean: "떫다, 수수하고 멋있다, 떨떠름하다",
    syn: [],
    collocations: [{ ja: "渋い柿", ko: "떫은 감" }, { ja: "渋い顔", ko: "떨떠름한 얼굴" }],
    examples: [{ type: "ex", label: "예문", ja: "頼みごとをしたら、渋い顔をされた。", ko: "부탁을 했더니 떨떠름한 표정을 지었다." }]
  },
  {
    id: 2022, day: 16, level: "N2",
    word: "細やか", kana: "こまやか", pos: "な형용사",
    mean: "세심함, 자상함",
    syn: ["細かい"],
    collocations: [{ ja: "細やかな気配り", ko: "세심한 배려" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女の細やかな心遣いに感動した。", ko: "그녀의 세심한 배려에 감동했다." }]
  },
  {
    id: 2023, day: 16, level: "N2",
    word: "図々しい", kana: "ずうずうしい", pos: "い형용사",
    mean: "뻔뻔하다",
    syn: ["厚かましい"],
    collocations: [{ ja: "図々しい人", ko: "뻔뻔한 사람" }],
    examples: [{ type: "ex", label: "예문", ja: "約束を破っておいて謝らないなんて図々しい。", ko: "약속을 어겨 놓고 사과도 안 하다니 뻔뻔하다." }]
  },
  {
    id: 2024, day: 16, level: "N2",
    word: "残酷", kana: "ざんこく", pos: "な형용사",
    mean: "잔혹함",
    syn: ["ひどい"],
    collocations: [{ ja: "残酷な事件", ko: "잔혹한 사건" }],
    examples: [{ type: "ex", label: "예문", ja: "動物を残酷に扱ってはいけない。", ko: "동물을 잔혹하게 다뤄서는 안 된다." }]
  },
  {
    id: 2025, day: 16, level: "N2",
    word: "スペース", kana: "スペース", pos: "외래어",
    mean: "공간 (space)",
    syn: ["空間", "場所"],
    collocations: [{ ja: "スペースを空ける", ko: "공간을 비우다" }],
    examples: [{ type: "ex", label: "예문", ja: "この部屋は収納スペースが広い。", ko: "이 방은 수납공간이 넓다." }]
  },
  {
    id: 2026, day: 16, level: "N2",
    word: "スムーズ", kana: "スムーズ", pos: "외래어",
    mean: "원활함 (smooth)",
    syn: ["円滑な", "順調な"],
    collocations: [{ ja: "スムーズに進む", ko: "원활하게 진행되다" }],
    examples: [{ type: "ex", label: "예문", ja: "手続きはスムーズに終わった。", ko: "수속은 원활하게 끝났다." }]
  },
  {
    id: 2027, day: 16, level: "N2",
    word: "セール", kana: "セール", pos: "외래어",
    mean: "세일 (sale)",
    syn: ["特売"],
    collocations: [{ ja: "セール中", ko: "세일 중" }],
    examples: [{ type: "ex", label: "예문", ja: "デパートで夏のセールが始まった。", ko: "백화점에서 여름 세일이 시작되었다." }]
  },
  {
    id: 2028, day: 16, level: "N2",
    word: "揃って", kana: "そろって", pos: "부사",
    mean: "함께, 다 같이",
    syn: ["一緒に"],
    collocations: [{ ja: "家族揃って出かける", ko: "가족이 다 함께 외출하다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人は揃って同じ大学に合格した。", ko: "두 사람은 나란히 같은 대학에 합격했다." }]
  },
  {
    id: 2029, day: 16, level: "N2",
    word: "大概", kana: "たいがい", pos: "부사",
    mean: "대개, 대부분",
    syn: ["大抵"],
    collocations: [{ ja: "大概の人", ko: "대부분의 사람" }],
    examples: [{ type: "ex", label: "예문", ja: "日曜日は大概家にいる。", ko: "일요일은 대개 집에 있다." }]
  },
  {
    id: 2030, day: 16, level: "N2",
    word: "大分", kana: "だいぶ", pos: "부사",
    mean: "꽤, 상당히",
    syn: ["かなり"],
    collocations: [{ ja: "大分良くなる", ko: "꽤 좋아지다" }],
    examples: [{ type: "ex", label: "예문", ja: "病気は大分良くなった。", ko: "병은 꽤 나아졌다." }]
  },
  {
    id: 2031, day: 16, level: "N2",
    word: "多少", kana: "たしょう", pos: "부사",
    mean: "다소, 약간",
    syn: ["少し"],
    collocations: [{ ja: "多少の違い", ko: "약간의 차이" }],
    examples: [{ type: "ex", label: "예문", ja: "多少高くても品質のいいものを買いたい。", ko: "다소 비싸더라도 품질 좋은 것을 사고 싶다." }]
  },
  {
    id: 2032, day: 16, level: "N2",
    word: "たちまち", kana: "たちまち", pos: "부사",
    mean: "금세, 순식간에",
    syn: ["すぐに"],
    collocations: [{ ja: "たちまち売り切れる", ko: "순식간에 매진되다" }],
    examples: [{ type: "ex", label: "예문", ja: "新商品はたちまち売り切れた。", ko: "신상품은 순식간에 매진되었다." }]
  },
  {
    id: 2033, day: 16, level: "N2",
    word: "さっぱり", kana: "さっぱり", pos: "부사 (의성어·의태어)",
    mean: "산뜻하게, 전혀 (~않다)",
    syn: ["すっきり", "全く"],
    collocations: [{ ja: "さっぱりした味", ko: "담백한 맛" }, { ja: "さっぱり分からない", ko: "전혀 모르겠다" }],
    examples: [{ type: "ex", label: "예문", ja: "説明を聞いてもさっぱり分からなかった。", ko: "설명을 들어도 전혀 이해가 안 됐다." }]
  },
  {
    id: 2034, day: 16, level: "N2",
    word: "ざっと", kana: "ざっと", pos: "부사 (의성어·의태어)",
    mean: "대충, 대략",
    syn: ["大まかに", "およそ"],
    collocations: [{ ja: "ざっと目を通す", ko: "대충 훑어보다" }],
    examples: [{ type: "ex", label: "예문", ja: "書類にざっと目を通した。", ko: "서류를 대충 훑어보았다." }]
  },
  {
    id: 2035, day: 16, level: "N2",
    word: "新〜", kana: "しん", pos: "접두어",
    mean: "신~ (새로운)",
    syn: [],
    collocations: [{ ja: "新学期", ko: "신학기" }, { ja: "新製品", ko: "신제품" }, { ja: "新記録", ko: "신기록" }],
    examples: []
  },
  {
    id: 2036, day: 16, level: "N2",
    word: "入院", kana: "にゅういん", pos: "명사 (する동사)",
    mean: "입원",
    syn: [],
    collocations: [{ ja: "入院する", ko: "입원하다" }, { ja: "入院生活", ko: "입원 생활" }],
    examples: [{ type: "ex", label: "예문", ja: "けがで一週間入院した。", ko: "부상으로 일주일간 입원했다." }]
  },
  {
    id: 2037, day: 16, level: "N2",
    word: "退院", kana: "たいいん", pos: "명사 (する동사)",
    mean: "퇴원",
    syn: [],
    collocations: [{ ja: "退院する", ko: "퇴원하다" }],
    examples: [{ type: "ex", label: "예문", ja: "祖父は明日退院する予定だ。", ko: "할아버지는 내일 퇴원하실 예정이다." }]
  },
  {
    id: 2038, day: 16, level: "N2",
    word: "処方", kana: "しょほう", pos: "명사 (する동사)",
    mean: "처방",
    syn: [],
    collocations: [{ ja: "薬を処方する", ko: "약을 처방하다" }, { ja: "処方箋", ko: "처방전" }],
    examples: [{ type: "ex", label: "예문", ja: "医者に処方された薬を飲む。", ko: "의사가 처방한 약을 먹는다." }]
  },
  {
    id: 2039, day: 16, level: "N2",
    word: "感染", kana: "かんせん", pos: "명사 (する동사)",
    mean: "감염",
    syn: ["うつる"],
    collocations: [{ ja: "ウイルスに感染する", ko: "바이러스에 감염되다" }, { ja: "感染症", ko: "감염증" }],
    examples: [{ type: "ex", label: "예문", ja: "感染を防ぐために手を洗う。", ko: "감염을 막기 위해 손을 씻는다." }]
  },
  {
    id: 2040, day: 16, level: "N2",
    word: "睡眠", kana: "すいみん", pos: "명사 (する동사)",
    mean: "수면",
    syn: ["眠り"],
    collocations: [{ ja: "睡眠不足", ko: "수면 부족" }, { ja: "睡眠をとる", ko: "수면을 취하다" }],
    examples: [{ type: "ex", label: "예문", ja: "十分な睡眠をとることが大切だ。", ko: "충분한 수면을 취하는 것이 중요하다." }]
  },
  {
    id: 2041, day: 16, level: "N2",
    word: "疲労", kana: "ひろう", pos: "명사 (する동사)",
    mean: "피로",
    syn: ["疲れ"],
    collocations: [{ ja: "疲労がたまる", ko: "피로가 쌓이다" }, { ja: "疲労回復", ko: "피로 회복" }],
    examples: [{ type: "ex", label: "예문", ja: "疲労がたまって体調を崩した。", ko: "피로가 쌓여 몸 상태가 나빠졌다." }]
  },
  {
    id: 132, day: 16, level: "N2",
    word: "抑制", kana: "よくせい", pos: "명사",
    mean: "억제",
    syn: ["抑えること", "制限"],
    collocations: [{ ja: "インフレを抑制する", ko: "인플레이션을 억제하다" }, { ja: "感情の抑制", ko: "감정 억제" }],
    examples: [{ type: "on", label: "음독", ja: "中央銀行は急激なインフレーションの進行を抑制するため、政策金利を段階的に引き上げる決定を下した。", ko: "중앙은행은 급격한 인플레이션 진행을 억제하기 위해 정책 금리를 단계적으로 인상하는 결정을 내렸다." }, { type: "kun", label: "훈독", ja: "重大な交渉の場では、一時的な怒りや焦りの感情をグッと抑えて(おさえて)冷静に対処する。", ko: "중대한 협상 자리에서는 일시적인 분노나 초조함의 감정을 꾹 억누르고 냉정하게 대처한다." }]
  },
  {
    id: 2042, day: 16, level: "N2",
    word: "体力", kana: "たいりょく", pos: "명사",
    mean: "체력",
    syn: [],
    collocations: [{ ja: "体力をつける", ko: "체력을 기르다" }, { ja: "体力が落ちる", ko: "체력이 떨어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "年を取って体力が落ちてきた。", ko: "나이가 들어 체력이 떨어졌다." }]
  },
  {
    id: 2043, day: 16, level: "N2",
    word: "筋肉", kana: "きんにく", pos: "명사",
    mean: "근육",
    syn: [],
    collocations: [{ ja: "筋肉をつける", ko: "근육을 키우다" }, { ja: "筋肉痛", ko: "근육통" }],
    examples: [{ type: "ex", label: "예문", ja: "運動を始めて筋肉がついた。", ko: "운동을 시작해서 근육이 붙었다." }]
  },
  {
    id: 2044, day: 16, level: "N2",
    word: "体重", kana: "たいじゅう", pos: "명사",
    mean: "체중",
    syn: [],
    collocations: [{ ja: "体重が増える", ko: "체중이 늘다" }, { ja: "体重を量る", ko: "체중을 재다" }],
    examples: [{ type: "ex", label: "예문", ja: "毎朝体重を量っている。", ko: "매일 아침 체중을 재고 있다." }]
  },
  {
    id: 2045, day: 16, level: "N2",
    word: "肥満", kana: "ひまん", pos: "명사 (する동사)",
    mean: "비만",
    syn: [],
    collocations: [{ ja: "肥満を防ぐ", ko: "비만을 막다" }],
    examples: [{ type: "ex", label: "예문", ja: "運動不足は肥満の原因になる。", ko: "운동 부족은 비만의 원인이 된다." }]
  },
  {
    id: 2046, day: 16, level: "N2",
    word: "寿命", kana: "じゅみょう", pos: "명사",
    mean: "수명",
    syn: [],
    collocations: [{ ja: "平均寿命", ko: "평균 수명" }, { ja: "寿命が延びる", ko: "수명이 늘다" }],
    examples: [{ type: "ex", label: "예문", ja: "日本人の平均寿命は世界でもトップクラスだ。", ko: "일본인의 평균 수명은 세계에서도 최상위권이다." }]
  },
  {
    id: 2047, day: 16, level: "N2",
    word: "老後", kana: "ろうご", pos: "명사",
    mean: "노후",
    syn: [],
    collocations: [{ ja: "老後の生活", ko: "노후 생활" }, { ja: "老後に備える", ko: "노후에 대비하다" }],
    examples: [{ type: "ex", label: "예문", ja: "老後のために貯金している。", ko: "노후를 위해 저금하고 있다." }]
  },
  {
    id: 137, day: 16, level: "N2",
    word: "観点", kana: "かんてん", pos: "명사",
    mean: "관점, 시각",
    syn: ["視点", "見方"],
    collocations: [{ ja: "観点に立つ", ko: "특정 관점에 서다" }, { ja: "多面的な観点", ko: "다면적인 시각" }],
    examples: [{ type: "on", label: "음독", ja: "地球環境の保全という大局的な観点から、化石燃料への依存度を低減させる具体的な方策を模索する。", ko: "지구 환경 보전이라는 대국적인 관점에서 화석 연료에 대한 의존도를 낮추는 구체적인 방안을 모색하다." }]
  },
  {
    id: 2048, day: 16, level: "N2",
    word: "教育", kana: "きょういく", pos: "명사 (する동사)",
    mean: "교육",
    syn: [],
    collocations: [{ ja: "教育を受ける", ko: "교육을 받다" }, { ja: "教育問題", ko: "교육 문제" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの教育にお金をかける。", ko: "아이 교육에 돈을 들인다." }]
  },
  {
    id: 2049, day: 16, level: "N2",
    word: "講義", kana: "こうぎ", pos: "명사 (する동사)",
    mean: "강의",
    syn: ["授業"],
    collocations: [{ ja: "講義を受ける", ko: "강의를 듣다" }, { ja: "講義に出る", ko: "강의에 출석하다" }],
    examples: [{ type: "ex", label: "예문", ja: "午前中は大学で講義を受けた。", ko: "오전에는 대학에서 강의를 들었다." }]
  },
  {
    id: 2050, day: 16, level: "N2",
    word: "講演", kana: "こうえん", pos: "명사 (する동사)",
    mean: "강연",
    syn: [],
    collocations: [{ ja: "講演を聞く", ko: "강연을 듣다" }, { ja: "講演会", ko: "강연회" }],
    examples: [{ type: "ex", label: "예문", ja: "有名な作家の講演会に行った。", ko: "유명한 작가의 강연회에 갔다." }]
  },
  {
    id: 2051, day: 16, level: "N2",
    word: "学力", kana: "がくりょく", pos: "명사",
    mean: "학력 (학습 능력)",
    syn: [],
    collocations: [{ ja: "学力が向上する", ko: "학력이 향상되다" }, { ja: "学力テスト", ko: "학력 테스트" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの学力の低下が問題になっている。", ko: "아이들의 학력 저하가 문제가 되고 있다." }]
  },
  {
    id: 2052, day: 16, level: "N2",
    word: "単位", kana: "たんい", pos: "명사",
    mean: "학점, 단위",
    syn: [],
    collocations: [{ ja: "単位を取る", ko: "학점을 따다" }, { ja: "単位を落とす", ko: "학점을 놓치다" }],
    examples: [{ type: "ex", label: "예문", ja: "卒業に必要な単位を全部取った。", ko: "졸업에 필요한 학점을 모두 땄다." }]
  },
  {
    id: 2053, day: 16, level: "N2",
    word: "論文", kana: "ろんぶん", pos: "명사",
    mean: "논문",
    syn: [],
    collocations: [{ ja: "論文を書く", ko: "논문을 쓰다" }, { ja: "卒業論文", ko: "졸업 논문" }],
    examples: [{ type: "ex", label: "예문", ja: "卒業論文のテーマを決めた。", ko: "졸업 논문 주제를 정했다." }]
  },
  {
    id: 2054, day: 16, level: "N2",
    word: "出席", kana: "しゅっせき", pos: "명사 (する동사)",
    mean: "출석, 참석",
    syn: [],
    collocations: [{ ja: "会議に出席する", ko: "회의에 참석하다" }, { ja: "出席を取る", ko: "출석을 부르다" }],
    examples: [{ type: "ex", label: "예문", ja: "明日の会議には必ず出席してください。", ko: "내일 회의에는 반드시 참석해 주세요." }]
  },
  {
    id: 181, day: 16, level: "N2",
    word: "概念", kana: "がいねん", pos: "명사",
    mean: "개념",
    syn: ["考え方", "意味内容"],
    collocations: [{ ja: "基本概念", ko: "기본 개념" }, { ja: "固定概念を覆す", ko: "고정관념을 뒤엎다" }],
    examples: [{ type: "on", label: "음독", ja: "従来の常識や固定概念にとらわれない柔軟な思考こそが、革新的な突破口を切り拓く。", ko: "기존의 상식이나 고정관념에 얽매이지 않는 유연한 사고야말로 혁신적인 돌파구를 열어젖힌다." }]
  },
  {
    id: 2055, day: 16, level: "N2",
    word: "欠席", kana: "けっせき", pos: "명사 (する동사)",
    mean: "결석, 불참",
    syn: ["休む"],
    collocations: [{ ja: "授業を欠席する", ko: "수업에 결석하다" }, { ja: "欠席届", ko: "결석계" }],
    examples: [{ type: "ex", label: "예문", ja: "風邪で授業を欠席した。", ko: "감기로 수업에 결석했다." }]
  },
  {
    id: 81, day: 16, level: "N1",
    word: "担う", kana: "になう", pos: "동사 (5단 타동사)",
    mean: "짊어지다, 떠맡다",
    syn: ["引き受ける", "背負う"],
    collocations: [{ ja: "責任を担う", ko: "책임을 짊어지다/떠맡다" }, { ja: "次代を担う", ko: "다음 세대를 짊어지다" }],
    examples: [{ type: "kun", label: "훈독", ja: "次世代の日本社会と経済を担う優秀な若者を育成することが急務である。", ko: "차세대 일본 사회와 경제를 짊어질 우수한 젊은이를 육성하는 것이 급선무이다." }, { type: "on", label: "음독", ja: "新規プロジェクトの企画運営について、彼が総合担当(たんとう)者に任命された。", ko: "신규 프로젝트 기획 운영에 관해 그가 종합 담당자로 임명되었다." }]
  },
  {
    id: 2056, day: 16, level: "N1",
    word: "再現", kana: "さいげん", pos: "명사 (する동사)",
    mean: "재현",
    syn: [],
    collocations: [{ ja: "当時を再現する", ko: "당시를 재현하다" }],
    examples: [{ type: "ex", label: "예문", ja: "昔の町並みを再現した展示が人気だ。", ko: "옛 거리를 재현한 전시가 인기다." }]
  },
  {
    id: 86, day: 16, level: "N1",
    word: "委ねる", kana: "ゆだねる", pos: "동사 (1단 타동사)",
    mean: "맡기다, 위임하다",
    syn: ["任せる", "託す"],
    collocations: [{ ja: "判断を委ねる", ko: "판단을 맡기다" }, { ja: "身を委ねる", ko: "흐름에 몸을 내맡기다" }],
    examples: [{ type: "kun", label: "훈독", ja: "突発的な事態への最終的な判断は、現場の状況を熟知している責任者に委ねる。", ko: "돌발 사태에 대한 최종적인 판단은 현장 상황을 숙지하고 있는 책임자에게 일임하여 맡긴다." }, { type: "on", label: "음독", ja: "法律問題の専門的な解決を図るため、信頼できる弁護士に全権を委託(いたく)した。", ko: "법률 문제의 전문적인 해결을 도모하기 위해 신뢰할 수 있는 변호사에게 전권을 위탁했다." }]
  },
  {
    id: 2057, day: 16, level: "N1",
    word: "削除", kana: "さくじょ", pos: "명사 (する동사)",
    mean: "삭제",
    syn: ["消す"],
    collocations: [{ ja: "データを削除する", ko: "데이터를 삭제하다" }],
    examples: [{ type: "ex", label: "예문", ja: "不要なファイルを削除した。", ko: "불필요한 파일을 삭제했다." }]
  },
  {
    id: 90, day: 16, level: "N1",
    word: "寛容", kana: "かんよう", pos: "な형용사",
    mean: "너그러움, 관용적임",
    syn: ["寛大", "おおらか"],
    collocations: [{ ja: "寛容な態度", ko: "너그러운 태도" }, { ja: "過ちに寛容だ", ko: "실수에 너그럽다" }],
    examples: [{ type: "on", label: "음독", ja: "グローバル社会で円滑に共生するためには、他者の異なる価値観に対して寛容な態度が求められる。", ko: "글로벌 사회에서 원활하게 공생하기 위해서는 타인의 서로 다른 가치관에 대해 너그러운 태도가 요구된다." }]
  },
  {
    id: 2058, day: 16, level: "N1",
    word: "参照", kana: "さんしょう", pos: "명사 (する동사)",
    mean: "참조",
    syn: ["参考"],
    collocations: [{ ja: "資料を参照する", ko: "자료를 참조하다" }],
    examples: [{ type: "ex", label: "예문", ja: "詳しくは次のページを参照してください。", ko: "자세한 것은 다음 페이지를 참조해 주세요." }]
  },
  {
    id: 2059, day: 16, level: "N1",
    word: "支援", kana: "しえん", pos: "명사 (する동사)",
    mean: "지원",
    syn: ["援助", "サポート"],
    collocations: [{ ja: "支援を受ける", ko: "지원을 받다" }, { ja: "被災地支援", ko: "피해 지역 지원" }],
    examples: [{ type: "ex", label: "예문", ja: "被災地への支援が続けられている。", ko: "재해 지역에 대한 지원이 계속되고 있다." }]
  },
  {
    id: 92, day: 16, level: "N1",
    word: "逞しい", kana: "たくましい", pos: "い형용사",
    mean: "다부지다, 억척스럽다, 왕성하다",
    syn: ["力強い", "たくましい"],
    collocations: [{ ja: "逞しい体つき", ko: "다부진 체격" }, { ja: "想像力を逞しくする", ko: "상상력을 왕성하게 펼치다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "日々の厳しいウェイトトレーニングによって鍛え上げられた、逞しい肉体。", ko: "매일의 혹독한 웨이트 트레이닝으로 단련된 다부진 육체." }],
    polysemy: [
      { def: "① 몸집이나 체격이 건장하고 늠름하다", ja: "重い荷物を軽々と持ち上げる彼の逞しい腕に、思わず見とれてしまった。", ko: "무거운 짐을 가볍게 들어 올리는 그의 다부진 팔뚝에 나도 모르게 넋을 잃고 보았다." },
      { def: "② 역경에 굴하지 않고 생명력·생활력이 억척스럽다", ja: "過酷な自然環境の中でも決して諦めず、逞しく生き抜く野生動物たちの姿。", ko: "가혹한 자연환경 속에서도 결코 굴하지 않고 억척스럽게 살아남는 야생동물들의 모습." },
      { def: "③ (상상력·의욕 등이) 지칠 줄 모르고 매우 왕성하다", ja: "子供は些細な日常の出来事からでも、想像力を逞しくして豊かな物語を紡ぎ出す。", ko: "아이는 사소한 일상의 일로부터도 상상력을 왕성하게 펼쳐 풍부한 이야기를 자아낸다." }
    ]
  },
  // ==========================================
  // [DAY 17] N2 필수 + N1 · 63개
  // ==========================================
  {
    id: 2060, day: 17, level: "N2",
    word: "積もる", kana: "つもる", pos: "동사 (자동사)",
    mean: "쌓이다",
    syn: ["たまる"],
    collocations: [{ ja: "雪が積もる", ko: "눈이 쌓이다" }, { ja: "ほこりが積もる", ko: "먼지가 쌓이다" }],
    examples: [{ type: "ex", label: "예문", ja: "一晩で雪が三十センチも積もった。", ko: "하룻밤에 눈이 30센티미터나 쌓였다." }]
  },
  {
    id: 144, day: 17, level: "N2",
    word: "養う", kana: "やしなう", pos: "동사 (5단 타동사)",
    mean: "부양하다, 기르다, 배양하다",
    syn: ["育てる", "培う"],
    collocations: [{ ja: "家族を養う", ko: "가족을 부양하다" }, { ja: "実力を養う", ko: "실력을 기르다/배양하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "良質な読書と深い思索を通じて、物事の本質を的確に見抜く批判的思考力を養う。", ko: "양질의 독서와 깊은 사색을 통해 사물의 본질을 정확하게 꿰뚫어 보는 비판적 사고력을 기르다." }, { type: "on", label: "음독", ja: "疲弊した心身を回復させるため、温泉地で数日間の静かな保養(ほよう)に努めた。", ko: "피폐해진 심신을 회복시키기 위해 온천지에서 며칠간의 조용한 요양(휴양)에 힘썼다." }]
  },
  {
    id: 2061, day: 17, level: "N2",
    word: "照る", kana: "てる", pos: "동사 (자동사)",
    mean: "비치다, 빛나다",
    syn: ["輝く"],
    collocations: [{ ja: "日が照る", ko: "해가 비치다" }, { ja: "照りつける", ko: "쨍쨍 내리쬐다" }],
    examples: [{ type: "ex", label: "예문", ja: "朝から日が照りつけて暑い。", ko: "아침부터 해가 내리쬐어 덥다." }]
  },
  {
    id: 2062, day: 17, level: "N2",
    word: "問い合わせる", kana: "といあわせる", pos: "동사 (타동사)",
    mean: "문의하다",
    syn: ["尋ねる"],
    collocations: [{ ja: "電話で問い合わせる", ko: "전화로 문의하다" }, { ja: "問い合わせ先", ko: "문의처" }],
    examples: [{ type: "ex", label: "예문", ja: "詳しくは事務局までお問い合わせください。", ko: "자세한 것은 사무국으로 문의해 주십시오." }]
  },
  {
    id: 2063, day: 17, level: "N2",
    word: "通りかかる", kana: "とおりかかる", pos: "동사 (자동사)",
    mean: "마침 지나가다",
    syn: ["通る"],
    collocations: [{ ja: "偶然通りかかる", ko: "우연히 지나가다" }],
    examples: [{ type: "ex", label: "예문", ja: "通りかかった人が助けてくれた。", ko: "마침 지나가던 사람이 도와주었다." }]
  },
  {
    id: 2064, day: 17, level: "N2",
    word: "通り過ぎる", kana: "とおりすぎる", pos: "동사 (자동사)",
    mean: "지나치다",
    syn: ["過ぎる"],
    collocations: [{ ja: "駅を通り過ぎる", ko: "역을 지나치다" }],
    examples: [{ type: "ex", label: "예문", ja: "うっかり降りる駅を通り過ぎてしまった。", ko: "깜빡하고 내릴 역을 지나쳐 버렸다." }]
  },
  {
    id: 2065, day: 17, level: "N2",
    word: "溶かす", kana: "とかす", pos: "동사 (타동사)",
    mean: "녹이다",
    syn: [],
    collocations: [{ ja: "砂糖を溶かす", ko: "설탕을 녹이다" }, { ja: "雪を溶かす", ko: "눈을 녹이다" }],
    examples: [{ type: "ex", label: "예문", ja: "お湯に粉を溶かして飲む。", ko: "뜨거운 물에 가루를 녹여 마신다." }]
  },
  {
    id: 146, day: 17, level: "N2",
    word: "乱す", kana: "みだす", pos: "동사 (5단 타동사)",
    mean: "어지럽히다, 흐트러뜨리다",
    syn: ["かき乱す", "混乱させる"],
    collocations: [{ ja: "秩序を乱す", ko: "질서를 어지럽히다" }, { ja: "ペースを乱す", ko: "페이스를 흐트러뜨리다" }],
    examples: [{ type: "kun", label: "훈독", ja: "突発的なアクシデントに見舞われても、決して自分のペースを乱してはならない。", ko: "돌발적인 사고를 겪더라도 결코 자신의 페이스를 흐트러뜨려서는 안 된다." }, { type: "on", label: "음독", ja: "根拠のないデマや偽情報がSNS上で拡散し、社会的な混乱(こんらん)を招いた。", ko: "근거 없는 유언비어와 거짓 정보가 SNS상에서 확산되어 사회적 혼란을 초래했다." }]
  },
  {
    id: 2066, day: 17, level: "N2",
    word: "唱える", kana: "となえる", pos: "동사 (타동사)",
    mean: "외치다, 주장하다",
    syn: ["主張する"],
    collocations: [{ ja: "異議を唱える", ko: "이의를 제기하다" }, { ja: "呪文を唱える", ko: "주문을 외우다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はその計画に異議を唱えた。", ko: "그는 그 계획에 이의를 제기했다." }]
  },
  {
    id: 2067, day: 17, level: "N2",
    word: "飛び込む", kana: "とびこむ", pos: "동사 (자동사)",
    mean: "뛰어들다",
    syn: [],
    collocations: [{ ja: "海に飛び込む", ko: "바다에 뛰어들다" }, { ja: "新しい世界に飛び込む", ko: "새로운 세계에 뛰어들다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は迷わず新しい業界に飛び込んだ。", ko: "그는 망설임 없이 새로운 업계에 뛰어들었다." }]
  },
  {
    id: 2068, day: 17, level: "N2",
    word: "飛び出す", kana: "とびだす", pos: "동사 (자동사)",
    mean: "뛰쳐나가다, 튀어나오다",
    syn: [],
    collocations: [{ ja: "家を飛び出す", ko: "집을 뛰쳐나가다" }, { ja: "道に飛び出す", ko: "길로 튀어나오다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもが急に道路に飛び出してきた。", ko: "아이가 갑자기 도로로 튀어나왔다." }]
  },
  {
    id: 2069, day: 17, level: "N2",
    word: "捕らえる", kana: "とらえる", pos: "동사 (타동사)",
    mean: "붙잡다, 파악하다",
    syn: ["捕まえる", "把握する"],
    collocations: [{ ja: "犯人を捕らえる", ko: "범인을 붙잡다" }, { ja: "特徴を捕らえる", ko: "특징을 포착하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この絵は人物の特徴をよく捕らえている。", ko: "이 그림은 인물의 특징을 잘 포착하고 있다." }]
  },
  {
    id: 2070, day: 17, level: "N2",
    word: "取り上げる", kana: "とりあげる", pos: "동사 (타동사)",
    mean: "다루다, 빼앗다",
    syn: ["扱う"],
    collocations: [{ ja: "問題を取り上げる", ko: "문제를 다루다" }, { ja: "携帯を取り上げる", ko: "휴대전화를 빼앗다" }],
    examples: [{ type: "ex", label: "예문", ja: "新聞がこの事件を大きく取り上げた。", ko: "신문이 이 사건을 크게 다루었다." }]
  },
  {
    id: 162, day: 17, level: "N2",
    word: "軽率", kana: "けいそつ", pos: "な형용사",
    mean: "경솔함",
    syn: ["うかつ", "そそっかしい"],
    collocations: [{ ja: "軽率な行動", ko: "경솔한 행동" }, { ja: "軽率な発言", ko: "경솔한 언동" }],
    examples: [{ type: "on", label: "음독", ja: "事実関係の十分な裏付けも取らずに公の場で批判を展開するような、軽率な行動は慎むべきだ。", ko: "사실관계의 충분한 뒷받침도 확인하지 않고 공적인 자리에서 비판을 펼치는 경솔한 행동은 삼가야 한다." }]
  },
  {
    id: 2071, day: 17, level: "N2",
    word: "爽やか", kana: "さわやか", pos: "な형용사",
    mean: "상쾌함, 시원스러움",
    syn: ["すがすがしい"],
    collocations: [{ ja: "爽やかな朝", ko: "상쾌한 아침" }, { ja: "爽やかな青年", ko: "시원스러운 청년" }],
    examples: [{ type: "ex", label: "예문", ja: "爽やかな秋風が吹いている。", ko: "상쾌한 가을바람이 불고 있다." }]
  },
  {
    id: 2072, day: 17, level: "N2",
    word: "素早い", kana: "すばやい", pos: "い형용사",
    mean: "재빠르다",
    syn: ["すばしこい"],
    collocations: [{ ja: "素早い動き", ko: "재빠른 움직임" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は素早く状況を判断した。", ko: "그는 재빠르게 상황을 판단했다." }]
  },
  {
    id: 2073, day: 17, level: "N2",
    word: "惨め", kana: "みじめ", pos: "な형용사",
    mean: "비참함",
    syn: ["哀れな"],
    collocations: [{ ja: "惨めな思い", ko: "비참한 기분" }],
    examples: [{ type: "ex", label: "예문", ja: "みんなの前で失敗して惨めな思いをした。", ko: "모두 앞에서 실패해 비참한 기분이 들었다." }]
  },
  {
    id: 2074, day: 17, level: "N2",
    word: "質素", kana: "しっそ", pos: "な형용사",
    mean: "검소함",
    syn: ["地味な"],
    collocations: [{ ja: "質素な生活", ko: "검소한 생활" }],
    examples: [{ type: "ex", label: "예문", ja: "祖父は質素な暮らしを好んだ。", ko: "할아버지는 검소한 생활을 좋아하셨다." }]
  },
  {
    id: 2075, day: 17, level: "N2",
    word: "そそっかしい", kana: "そそっかしい", pos: "い형용사",
    mean: "덜렁대다, 경솔하다",
    syn: ["軽率な"],
    collocations: [{ ja: "そそっかしい性格", ko: "덜렁대는 성격" }],
    examples: [{ type: "ex", label: "예문", ja: "そそっかしくて、よく忘れ物をする。", ko: "덜렁대서 물건을 자주 잊어버린다." }]
  },
  {
    id: 97, day: 17, level: "N2",
    word: "キャリア", kana: "きゃりあ", pos: "외래어",
    mean: "경력, 직업적 이력 (career)",
    syn: ["経歴"],
    collocations: [{ ja: "キャリアを積む", ko: "경력을 쌓다" }, { ja: "キャリアアップ", ko: "경력 개발/몸값 올리기" }],
    examples: [{ type: "ex", label: "예문", ja: "将来の明確なキャリアパスを見据え、働きながら夜間大学院で専門知識を深める。", ko: "장래의 명확한 커리어 패스를 내다보고 일하면서 야간 대학원에서 전문 지식을 심화하다." }]
  },
  {
    id: 2076, day: 17, level: "N2",
    word: "ターゲット", kana: "ターゲット", pos: "외래어",
    mean: "표적, 대상 (target)",
    syn: ["対象", "目標"],
    collocations: [{ ja: "若者をターゲットにする", ko: "젊은이를 대상으로 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この商品は主に女性がターゲットだ。", ko: "이 상품은 주로 여성이 대상이다." }]
  },
  {
    id: 2077, day: 17, level: "N2",
    word: "タイトル", kana: "タイトル", pos: "외래어",
    mean: "제목, 타이틀 (title)",
    syn: ["題名"],
    collocations: [{ ja: "本のタイトル", ko: "책 제목" }],
    examples: [{ type: "ex", label: "예문", ja: "映画のタイトルを忘れてしまった。", ko: "영화 제목을 잊어버렸다." }]
  },
  {
    id: 2078, day: 17, level: "N2",
    word: "たびたび", kana: "たびたび", pos: "부사",
    mean: "자주, 여러 번",
    syn: ["しばしば", "何度も"],
    collocations: [{ ja: "たびたび訪れる", ko: "자주 방문하다" }],
    examples: [{ type: "ex", label: "예문", ja: "たびたびご迷惑をおかけしてすみません。", ko: "번번이 폐를 끼쳐 죄송합니다." }]
  },
  {
    id: 2079, day: 17, level: "N2",
    word: "ちっとも", kana: "ちっとも", pos: "부사",
    mean: "조금도, 전혀 (~않다)",
    syn: ["少しも", "全然"],
    collocations: [{ ja: "ちっとも分からない", ko: "전혀 모르겠다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の話はちっとも面白くない。", ko: "그의 이야기는 조금도 재미없다." }]
  },
  {
    id: 2080, day: 17, level: "N2",
    word: "着々と", kana: "ちゃくちゃくと", pos: "부사",
    mean: "착착, 순조롭게",
    syn: ["順調に"],
    collocations: [{ ja: "着々と進む", ko: "착착 진행되다" }],
    examples: [{ type: "ex", label: "예문", ja: "工事は着々と進んでいる。", ko: "공사는 착착 진행되고 있다." }]
  },
  {
    id: 2081, day: 17, level: "N2",
    word: "つくづく", kana: "つくづく", pos: "부사",
    mean: "절실히, 곰곰이",
    syn: ["しみじみ", "心から"],
    collocations: [{ ja: "つくづく思う", ko: "절실히 생각하다" }],
    examples: [{ type: "ex", label: "예문", ja: "健康の大切さをつくづく感じた。", ko: "건강의 소중함을 절실히 느꼈다." }]
  },
  {
    id: 2082, day: 17, level: "N2",
    word: "しみじみ", kana: "しみじみ", pos: "부사 (의성어·의태어)",
    mean: "절실히, 곰곰이",
    syn: ["つくづく"],
    collocations: [{ ja: "しみじみ思う", ko: "절실히 생각하다" }],
    examples: [{ type: "ex", label: "예문", ja: "親のありがたさをしみじみと感じた。", ko: "부모님의 고마움을 절실히 느꼈다." }]
  },
  {
    id: 2083, day: 17, level: "N2",
    word: "じっくり", kana: "じっくり", pos: "부사 (의성어·의태어)",
    mean: "차분히, 곰곰이",
    syn: ["ゆっくり"],
    collocations: [{ ja: "じっくり考える", ko: "차분히 생각하다" }],
    examples: [{ type: "ex", label: "예문", ja: "時間をかけてじっくり検討した。", ko: "시간을 들여 차분히 검토했다." }]
  },
  {
    id: 2084, day: 17, level: "N2",
    word: "それゆえ", kana: "それゆえ", pos: "접속사",
    mean: "그러므로, 따라서 (문어)",
    syn: ["だから", "したがって"],
    collocations: [{ ja: "それゆえ", ko: "그러므로" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は経験が豊富だ。それゆえ、信頼されている。", ko: "그는 경험이 풍부하다. 그러므로 신뢰받고 있다." }]
  },
  {
    id: 2085, day: 17, level: "N2",
    word: "旧〜", kana: "きゅう", pos: "접두어",
    mean: "구~ (옛)",
    syn: [],
    collocations: [{ ja: "旧制度", ko: "구제도" }, { ja: "旧友", ko: "옛 친구" }, { ja: "旧市街", ko: "구시가" }],
    examples: []
  },
  {
    id: 2086, day: 17, level: "N2",
    word: "前〜", kana: "ぜん", pos: "접두어",
    mean: "전~ (이전의)",
    syn: [],
    collocations: [{ ja: "前社長", ko: "전 사장" }, { ja: "前年度", ko: "전년도" }, { ja: "前半", ko: "전반" }],
    examples: []
  },
  {
    id: 2087, day: 17, level: "N2",
    word: "遅刻", kana: "ちこく", pos: "명사 (する동사)",
    mean: "지각",
    syn: [],
    collocations: [{ ja: "遅刻する", ko: "지각하다" }, { ja: "遅刻の理由", ko: "지각한 이유" }],
    examples: [{ type: "ex", label: "예문", ja: "寝坊して会社に遅刻した。", ko: "늦잠을 자서 회사에 지각했다." }]
  },
  {
    id: 2088, day: 17, level: "N2",
    word: "進学", kana: "しんがく", pos: "명사 (する동사)",
    mean: "진학",
    syn: [],
    collocations: [{ ja: "大学に進学する", ko: "대학에 진학하다" }, { ja: "進学率", ko: "진학률" }],
    examples: [{ type: "ex", label: "예문", ja: "高校卒業後、大学に進学するつもりだ。", ko: "고교 졸업 후 대학에 진학할 생각이다." }]
  },
  {
    id: 2089, day: 17, level: "N2",
    word: "受験", kana: "じゅけん", pos: "명사 (する동사)",
    mean: "수험, 시험 응시",
    syn: [],
    collocations: [{ ja: "大学を受験する", ko: "대학 시험을 보다" }, { ja: "受験生", ko: "수험생" }],
    examples: [{ type: "ex", label: "예문", ja: "今年の冬、大学を受験する。", ko: "올겨울 대학 입시를 치른다." }]
  },
  {
    id: 2090, day: 17, level: "N2",
    word: "合格", kana: "ごうかく", pos: "명사 (する동사)",
    mean: "합격",
    syn: ["受かる"],
    collocations: [{ ja: "試験に合格する", ko: "시험에 합격하다" }, { ja: "合格発表", ko: "합격 발표" }],
    examples: [{ type: "ex", label: "예문", ja: "努力の結果、第一志望に合格した。", ko: "노력한 결과 1지망에 합격했다." }]
  },
  {
    id: 2091, day: 17, level: "N2",
    word: "奨学金", kana: "しょうがくきん", pos: "명사",
    mean: "장학금",
    syn: [],
    collocations: [{ ja: "奨学金をもらう", ko: "장학금을 받다" }],
    examples: [{ type: "ex", label: "예문", ja: "奨学金をもらって大学に通っている。", ko: "장학금을 받아 대학에 다니고 있다." }]
  },
  {
    id: 183, day: 17, level: "N2",
    word: "該当", kana: "がいとう", pos: "명사",
    mean: "해당",
    syn: ["当てはまること"],
    collocations: [{ ja: "該当する項目", ko: "해당하는 항목" }, { ja: "該当者", ko: "해당자" }],
    examples: [{ type: "on", label: "음독", ja: "公募の申請条件に該当する事項を漏れなく確認し、所定の書類を期日までに提出してください。", ko: "공모 신청 조건에 해당하는 사항을 빠짐없이 확인하고 소정의 서류를 기일까지 제출해 주십시오." }]
  },
  {
    id: 2092, day: 17, level: "N2",
    word: "留学", kana: "りゅうがく", pos: "명사 (する동사)",
    mean: "유학",
    syn: [],
    collocations: [{ ja: "日本に留学する", ko: "일본에 유학하다" }, { ja: "留学生", ko: "유학생" }],
    examples: [{ type: "ex", label: "예문", ja: "大学時代に一年間日本に留学した。", ko: "대학 시절에 1년간 일본에 유학했다." }]
  },
  {
    id: 2093, day: 17, level: "N2",
    word: "専攻", kana: "せんこう", pos: "명사 (する동사)",
    mean: "전공",
    syn: [],
    collocations: [{ ja: "経済学を専攻する", ko: "경제학을 전공하다" }],
    examples: [{ type: "ex", label: "예문", ja: "大学では日本文学を専攻した。", ko: "대학에서는 일본 문학을 전공했다." }]
  },
  {
    id: 2094, day: 17, level: "N2",
    word: "学問", kana: "がくもん", pos: "명사",
    mean: "학문",
    syn: [],
    collocations: [{ ja: "学問に励む", ko: "학문에 힘쓰다" }],
    examples: [{ type: "ex", label: "예문", ja: "学問に終わりはない。", ko: "학문에는 끝이 없다." }]
  },
  {
    id: 2095, day: 17, level: "N2",
    word: "知恵", kana: "ちえ", pos: "명사",
    mean: "지혜",
    syn: ["知識"],
    collocations: [{ ja: "知恵を絞る", ko: "지혜를 짜내다" }, { ja: "生活の知恵", ko: "생활의 지혜" }],
    examples: [{ type: "ex", label: "예문", ja: "みんなで知恵を出し合って問題を解決した。", ko: "모두 지혜를 모아 문제를 해결했다." }]
  },
  {
    id: 2096, day: 17, level: "N2",
    word: "常識", kana: "じょうしき", pos: "명사",
    mean: "상식",
    syn: [],
    collocations: [{ ja: "常識がない", ko: "상식이 없다" }, { ja: "常識外れ", ko: "상식 밖" }],
    examples: [{ type: "ex", label: "예문", ja: "それは社会人としての常識だ。", ko: "그것은 사회인으로서의 상식이다." }]
  },
  {
    id: 2097, day: 17, level: "N2",
    word: "教養", kana: "きょうよう", pos: "명사",
    mean: "교양",
    syn: [],
    collocations: [{ ja: "教養を身につける", ko: "교양을 쌓다" }, { ja: "教養のある人", ko: "교양 있는 사람" }],
    examples: [{ type: "ex", label: "예문", ja: "読書で教養を身につける。", ko: "독서로 교양을 쌓는다." }]
  },
  {
    id: 184, day: 17, level: "N2",
    word: "緩和", kana: "かんわ", pos: "명사",
    mean: "완화",
    syn: ["和らげること", "軽減"],
    collocations: [{ ja: "規制を緩和する", ko: "규제를 완화하다" }, { ja: "金融緩和", ko: "금융 완화 정책" }],
    examples: [{ type: "on", label: "음독", ja: "長引く不況からの脱却を図るため、政府と中央銀行は大規模な金融緩和政策を継続している。", ko: "오래 지속되는 불황으로부터의 탈피를 도모하기 위해 정부와 중앙은행은 대규모 금융완화 정책을 지속하고 있다." }]
  },
  {
    id: 2098, day: 17, level: "N2",
    word: "発想", kana: "はっそう", pos: "명사 (する동사)",
    mean: "발상",
    syn: ["アイデア"],
    collocations: [{ ja: "発想を転換する", ko: "발상을 전환하다" }, { ja: "自由な発想", ko: "자유로운 발상" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの自由な発想に驚かされる。", ko: "아이의 자유로운 발상에 놀라게 된다." }]
  },
  {
    id: 2099, day: 17, level: "N2",
    word: "思考", kana: "しこう", pos: "명사 (する동사)",
    mean: "사고 (생각)",
    syn: ["考え"],
    collocations: [{ ja: "思考力", ko: "사고력" }, { ja: "論理的思考", ko: "논리적 사고" }],
    examples: [{ type: "ex", label: "예문", ja: "読書は思考力を高める。", ko: "독서는 사고력을 높인다." }]
  },
  {
    id: 2100, day: 17, level: "N2",
    word: "感覚", kana: "かんかく", pos: "명사",
    mean: "감각",
    syn: ["センス"],
    collocations: [{ ja: "感覚が鋭い", ko: "감각이 예리하다" }, { ja: "金銭感覚", ko: "금전 감각" }],
    examples: [{ type: "ex", label: "예문", ja: "寒さで指の感覚がなくなった。", ko: "추위로 손가락 감각이 없어졌다." }]
  },
  {
    id: 2101, day: 17, level: "N2",
    word: "感情", kana: "かんじょう", pos: "명사",
    mean: "감정",
    syn: ["気持ち"],
    collocations: [{ ja: "感情を抑える", ko: "감정을 억누르다" }, { ja: "感情的になる", ko: "감정적이 되다" }],
    examples: [{ type: "ex", label: "예문", ja: "感情的にならずに話し合おう。", ko: "감정적으로 되지 말고 이야기하자." }]
  },
  {
    id: 2102, day: 17, level: "N2",
    word: "心理", kana: "しんり", pos: "명사",
    mean: "심리",
    syn: [],
    collocations: [{ ja: "心理学", ko: "심리학" }, { ja: "消費者の心理", ko: "소비자 심리" }],
    examples: [{ type: "ex", label: "예문", ja: "人の心理を理解するのは難しい。", ko: "사람의 심리를 이해하는 것은 어렵다." }]
  },
  {
    id: 2103, day: 17, level: "N2",
    word: "精神", kana: "せいしん", pos: "명사",
    mean: "정신",
    syn: ["心"],
    collocations: [{ ja: "精神的な疲れ", ko: "정신적인 피로" }, { ja: "精神力", ko: "정신력" }],
    examples: [{ type: "ex", label: "예문", ja: "精神的に疲れているときは休もう。", ko: "정신적으로 지쳤을 때는 쉬자." }]
  },
  {
    id: 186, day: 17, level: "N2",
    word: "犠牲", kana: "ぎせい", pos: "명사",
    mean: "희생",
    syn: ["いけにえ", "代償"],
    collocations: [{ ja: "犠牲を払う", ko: "희생을 치르다" }, { ja: "尊い犠牲", ko: "고귀한 희생" }],
    examples: [{ type: "on", label: "음독", ja: "短期的な経済的繁栄のために、かけがえのない豊かな自然環境を犠牲にしてはならない。", ko: "단기적인 경제적 번영을 위해 둘도 없는 풍요로운 자연환경을 희생시켜서는 안 된다." }]
  },
  {
    id: 2104, day: 17, level: "N2",
    word: "意志", kana: "いし", pos: "명사",
    mean: "의지",
    syn: [],
    collocations: [{ ja: "意志が強い", ko: "의지가 강하다" }, { ja: "本人の意志", ko: "본인의 의지" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は意志が強く、決してあきらめない。", ko: "그는 의지가 강해서 결코 포기하지 않는다." }]
  },
  {
    id: 2105, day: 17, level: "N2",
    word: "意思", kana: "いし", pos: "명사",
    mean: "의사 (생각, 뜻)",
    syn: ["考え"],
    collocations: [{ ja: "意思を伝える", ko: "의사를 전하다" }, { ja: "意思表示", ko: "의사 표시" }],
    examples: [{ type: "ex", label: "예문", ja: "自分の意思をはっきり伝えることが大切だ。", ko: "자신의 생각을 분명히 전하는 것이 중요하다." }]
  },
  {
    id: 2106, day: 17, level: "N2",
    word: "決心", kana: "けっしん", pos: "명사 (する동사)",
    mean: "결심",
    syn: ["決意"],
    collocations: [{ ja: "決心がつく", ko: "결심이 서다" }, { ja: "決心する", ko: "결심하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女は留学しようと決心した。", ko: "그녀는 유학하기로 결심했다." }]
  },
  {
    id: 2107, day: 17, level: "N1",
    word: "持続", kana: "じぞく", pos: "명사 (する동사)",
    mean: "지속",
    syn: ["続く"],
    collocations: [{ ja: "持続可能", ko: "지속 가능" }, { ja: "効果が持続する", ko: "효과가 지속되다" }],
    examples: [{ type: "ex", label: "예문", ja: "持続可能な社会を作る必要がある。", ko: "지속 가능한 사회를 만들 필요가 있다." }]
  },
  {
    id: 96, day: 17, level: "N1",
    word: "顕著", kana: "けんちょ", pos: "な형용사",
    mean: "현저함, 두드러짐",
    syn: ["著しい", "目立つ"],
    collocations: [{ ja: "顕著な効果", ko: "두드러진 효과" }, { ja: "顕著に現れる", ko: "현저하게 나타나다" }],
    examples: [{ type: "on", label: "음독", ja: "若年層を対象とした雇用創出政策の導入以降、地域の失業率に顕著な改善傾向が見られ始めた。", ko: "청년층을 대상으로 한 고용 창출 정책 도입 이후 지역 실업률에 현저한 개선 경향이 나타나기 시작했다." }]
  },
  {
    id: 2108, day: 17, level: "N1",
    word: "実質", kana: "じっしつ", pos: "명사",
    mean: "실질",
    syn: [],
    collocations: [{ ja: "実質的", ko: "실질적" }, { ja: "実質的な効果", ko: "실질적인 효과" }],
    examples: [{ type: "ex", label: "예문", ja: "名前だけで実質的な変化はない。", ko: "이름뿐이고 실질적인 변화는 없다." }]
  },
  {
    id: 2109, day: 17, level: "N1",
    word: "実情", kana: "じつじょう", pos: "명사",
    mean: "실정",
    syn: ["実態"],
    collocations: [{ ja: "現場の実情", ko: "현장의 실정" }],
    examples: [{ type: "ex", label: "예문", ja: "現場の実情を知らずに決めるのは危険だ。", ko: "현장의 실정을 모르고 정하는 것은 위험하다." }]
  },
  {
    id: 100, day: 17, level: "N1",
    word: "ノウハウ", kana: "のうはう", pos: "외래어",
    mean: "노하우, 실무 비결 (know-how)",
    syn: ["やり方", "こつ"],
    collocations: [{ ja: "ノウハウを蓄積する", ko: "노하우를 축적하다" }, { ja: "ノウハウを伝授する", ko: "실무 비결을 전수하다" }],
    examples: [{ type: "ex", label: "예문", ja: "熟練した職人が長年の現場経験を通じて培ってきた貴重なノウハウを、デジタル技術で次世代へ継承する。", ko: "숙련된 장인이 오랜 현장 경험을 통해 배양해 온 귀중한 노하우를 디지털 기술로 다음 세대에 전수하다." }]
  },
  {
    id: 2110, day: 17, level: "N1",
    word: "指標", kana: "しひょう", pos: "명사",
    mean: "지표",
    syn: ["目安"],
    collocations: [{ ja: "経済指標", ko: "경제 지표" }],
    examples: [{ type: "ex", label: "예문", ja: "失業率は景気を判断する指標の一つだ。", ko: "실업률은 경기를 판단하는 지표 중 하나다." }]
  },
  {
    id: 105, day: 17, level: "N1",
    word: "もはや", kana: "もはや", pos: "부사",
    mean: "이제는, 이미 (~ない 부정 호응 빈출)",
    syn: ["もう", "今となっては"],
    collocations: [{ ja: "もはや手遅れだ", ko: "이제는 때가 늦었다" }, { ja: "もはや〜ない", ko: "이미 더 이상 ~않다" }],
    examples: [{ type: "ex", label: "예문", ja: "地球温暖化による異常気象の頻発は、もはや対岸の火事として傍観できる問題ではない。", ko: "지구 온난화로 인한 이상기후의 빈발은 이제는 강 건너 불 보듯 방관할 수 있는 문제가 아니다." }]
  },
  {
    id: 2111, day: 17, level: "N1",
    word: "自発的", kana: "じはつてき", pos: "な형용사",
    mean: "자발적",
    syn: ["自主的な"],
    collocations: [{ ja: "自発的に行動する", ko: "자발적으로 행동하다" }],
    examples: [{ type: "ex", label: "예문", ja: "学生たちは自発的に掃除を始めた。", ko: "학생들은 자발적으로 청소를 시작했다." }]
  },
  {
    id: 108, day: 17, level: "N1",
    word: "もっぱら", kana: "もっぱら", pos: "부사",
    mean: "오로지, 전적으로",
    syn: ["主に", "ひたすら"],
    collocations: [{ ja: "もっぱらの噂", ko: "파다한 뜬소문" }, { ja: "もっぱら利用する", ko: "주로/오로지 이용하다" }],
    examples: [{ type: "ex", label: "예문", ja: "週末は外出を控えて自宅にこもり、もっぱら試験勉強と読書に専念して充実した時間を過ごす。", ko: "주말에는 외출을 삼가고 집에 틀어박혀 오로지 시험공부와 독서에 전념하며 알찬 시간을 보낸다." }]
  },
  // ==========================================
  // [DAY 18] N2 필수 + N1 · 60개
  // ==========================================
  {
    id: 147, day: 18, level: "N2",
    word: "漏らす", kana: "もらす", pos: "동사 (5단 타동사)",
    mean: "새어나가게 하다, 누설하다, (소리를) 흘리다",
    syn: ["こぼす", "明かす"],
    collocations: [{ ja: "秘密を漏らす", ko: "비밀을 누설하다" }, { ja: "ため息を漏らす", ko: "한숨을 흘리다/내쉬다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "企業の最重要機密情報を外部の競合他社に漏らす行為は背任罪に問われる。", ko: "기업의 최중요 기밀 정보를 외부 경쟁 타사에 누설하는 행위는 배임죄로 문책당한다." }],
    polysemy: [
      { def: "① (액체·기체·빛 등을) 밖으로 새어나가게 하다", ja: "老朽化した配管の隙間から、有毒ガスを外部へ漏らしてしまう事故が発生した。", ko: "노후화된 배관 틈새로 유독가스를 외부로 새어나가게 한 사고가 발생했다." },
      { def: "② (비밀·정보를) 발설하다, 누설하다", ja: "厳しい守秘義務を負っている以上、職務上知り得た個人情報を第三者に漏らしてはならない。", ko: "엄격한 비밀유지 의무를 지고 있는 이상 직무상 알게 된 개인정보를 제3자에게 누설해서는 안 된다." },
      { def: "③ (한숨·불만·본심의 소리를) 무심코 흘리다, 내비치다", ja: "予想外の厳しい結果を聞かされ、思わず深いため息を漏らした。", ko: "예상치 못한 가혹한 결과를 전해 듣고 나도 모르게 깊은 한숨을 내쉬었다." }
    ]
  },
  {
    id: 2112, day: 18, level: "N2",
    word: "取り組む", kana: "とりくむ", pos: "동사 (자동사)",
    mean: "몰두하다, 대처하다",
    syn: ["励む"],
    collocations: [{ ja: "課題に取り組む", ko: "과제에 힘쓰다" }, { ja: "真剣に取り組む", ko: "진지하게 임하다" }],
    examples: [{ type: "ex", label: "예문", ja: "会社全体で環境問題に取り組んでいる。", ko: "회사 전체가 환경 문제에 힘쓰고 있다." }]
  },
  {
    id: 2113, day: 18, level: "N2",
    word: "取り出す", kana: "とりだす", pos: "동사 (타동사)",
    mean: "꺼내다",
    syn: ["出す"],
    collocations: [{ ja: "かばんから取り出す", ko: "가방에서 꺼내다" }],
    examples: [{ type: "ex", label: "예문", ja: "ポケットから鍵を取り出した。", ko: "주머니에서 열쇠를 꺼냈다." }]
  },
  {
    id: 2114, day: 18, level: "N2",
    word: "取り除く", kana: "とりのぞく", pos: "동사 (타동사)",
    mean: "제거하다, 없애다",
    syn: ["除く"],
    collocations: [{ ja: "不安を取り除く", ko: "불안을 없애다" }, { ja: "ごみを取り除く", ko: "쓰레기를 제거하다" }],
    examples: [{ type: "ex", label: "예문", ja: "患者の不安を取り除くことが大切だ。", ko: "환자의 불안을 없애는 것이 중요하다." }]
  },
  {
    id: 2115, day: 18, level: "N2",
    word: "取り戻す", kana: "とりもどす", pos: "동사 (타동사)",
    mean: "되찾다",
    syn: ["回復する"],
    collocations: [{ ja: "元気を取り戻す", ko: "기운을 되찾다" }, { ja: "遅れを取り戻す", ko: "뒤처진 것을 만회하다" }],
    examples: [{ type: "ex", label: "예문", ja: "休養して、ようやく元気を取り戻した。", ko: "휴양하여 겨우 기운을 되찾았다." }]
  },
  {
    id: 2116, day: 18, level: "N2",
    word: "取り寄せる", kana: "とりよせる", pos: "동사 (타동사)",
    mean: "주문하여 가져오게 하다",
    syn: ["注文する"],
    collocations: [{ ja: "資料を取り寄せる", ko: "자료를 받아 보다" }, { ja: "本を取り寄せる", ko: "책을 주문하다" }],
    examples: [{ type: "ex", label: "예문", ja: "店にない本を取り寄せてもらった。", ko: "가게에 없는 책을 주문해 받았다." }]
  },
  {
    id: 149, day: 18, level: "N2",
    word: "尽きる", kana: "つきる", pos: "동사 (1단 자동사)",
    mean: "다하다, 끝나다, 바닥나다",
    syn: ["なくなる", "終わる"],
    collocations: [{ ja: "資金が尽きる", ko: "자금이 바닥나다" }, { ja: "〜に尽きる", ko: "~에 다름 아니다 / ~에 귀착되다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "長期間にわたる過酷な籠城戦の末に、ついに兵糧と弾薬が尽きてしまった。", ko: "장기간에 걸친 가혹한 농성전 끝에 마침내 군량과 탄약이 바닥나 버렸다." }],
    polysemy: [
      { def: "① (자금·물자·체력·에너지가) 다 바닥나다, 고갈되다", ja: "あらゆる手を尽くして奔走したが、活動資金が尽きてプロジェクトは中断を余儀なくされた。", ko: "온갖 수단을 다 써서 분주히 뛰어다녔으나 활동 자금이 바닥나 프로젝트는 중단을 피할 수 없게 되었다." },
      { def: "② (생명·기간·운이) 끝나다, 다하다", ja: "名医による懸命な救命処置も及ばず、ついにその命が尽きた。", ko: "명의의 필사적인 구명 처치도 미치지 못하고 마침내 그 생명이 다했다." },
      { def: "③ 결국 ~에 귀착되다, 그 이상은 없다 (~に尽きる)", ja: "今回のプロジェクトが成功した要因は、チーム全員の献身的な努力の一言に尽きる。", ko: "이번 프로젝트가 성공한 요인은 팀원 전원의 헌신적인 노력이라는 한마디에 다름 아니다." }
    ]
  },
  {
    id: 2117, day: 18, level: "N2",
    word: "取り扱う", kana: "とりあつかう", pos: "동사 (타동사)",
    mean: "취급하다, 다루다",
    syn: ["扱う"],
    collocations: [{ ja: "丁寧に取り扱う", ko: "조심스럽게 다루다" }, { ja: "個人情報を取り扱う", ko: "개인 정보를 취급하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この店では輸入品を取り扱っている。", ko: "이 가게에서는 수입품을 취급하고 있다." }]
  },
  {
    id: 2118, day: 18, level: "N2",
    word: "長引く", kana: "ながびく", pos: "동사 (자동사)",
    mean: "오래 끌다, 길어지다",
    syn: ["延びる"],
    collocations: [{ ja: "会議が長引く", ko: "회의가 길어지다" }, { ja: "風邪が長引く", ko: "감기가 오래가다" }],
    examples: [{ type: "ex", label: "예문", ja: "会議が長引いて、帰りが遅くなった。", ko: "회의가 길어져서 귀가가 늦어졌다." }]
  },
  {
    id: 2119, day: 18, level: "N2",
    word: "投げ出す", kana: "なげだす", pos: "동사 (타동사)",
    mean: "내던지다, 포기하다",
    syn: ["放棄する"],
    collocations: [{ ja: "仕事を投げ出す", ko: "일을 내팽개치다" }, { ja: "足を投げ出す", ko: "다리를 쭉 뻗다" }],
    examples: [{ type: "ex", label: "예문", ja: "途中で仕事を投げ出すのは無責任だ。", ko: "도중에 일을 내팽개치는 것은 무책임하다." }]
  },
  {
    id: 2120, day: 18, level: "N2",
    word: "懐く", kana: "なつく", pos: "동사 (자동사)",
    mean: "따르다, 친해지다",
    syn: ["慣れる"],
    collocations: [{ ja: "犬が懐く", ko: "개가 따르다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもたちは新しい先生にすぐ懐いた。", ko: "아이들은 새 선생님을 금방 따랐다." }]
  },
  {
    id: 2121, day: 18, level: "N2",
    word: "撫でる", kana: "なでる", pos: "동사 (타동사)",
    mean: "쓰다듬다",
    syn: [],
    collocations: [{ ja: "頭を撫でる", ko: "머리를 쓰다듬다" }],
    examples: [{ type: "ex", label: "예문", ja: "猫の背中を優しく撫でた。", ko: "고양이 등을 부드럽게 쓰다듬었다." }]
  },
  {
    id: 163, day: 18, level: "N2",
    word: "険しい", kana: "けわしい", pos: "い형용사",
    mean: "험하다, 험악하다",
    syn: ["けわしい道", "厳しい"],
    collocations: [{ ja: "険しい山道", ko: "험준한 산길" }, { ja: "険しい表情", ko: "험악한 표정" }],
    examples: [{ type: "kun", label: "훈독", ja: "足元の崩れやすい険しい岩山を一歩一歩慎重に登り、ようやく山頂へたどり着いた。", ko: "발밑이 무너지기 쉬운 험준한 바위산을 한 걸음 한 걸음 신중하게 올라 마침내 산 정상에 도달했다." }, { type: "on", label: "음독", ja: "予期せぬトラブルの発生報告を受けた部長の顔に、険悪(けんあく)な表情が浮かんだ。", ko: "예기치 못한 돌발 상황 발생 보고를 받은 부장의 얼굴에 험악한 표정이 떠올랐다." }]
  },
  {
    id: 2122, day: 18, level: "N2",
    word: "柔軟", kana: "じゅうなん", pos: "な형용사",
    mean: "유연함",
    syn: ["フレキシブルな"],
    collocations: [{ ja: "柔軟な考え", ko: "유연한 생각" }],
    examples: [{ type: "ex", label: "예문", ja: "状況に応じて柔軟に対応する。", ko: "상황에 따라 유연하게 대응한다." }]
  },
  {
    id: 2123, day: 18, level: "N2",
    word: "純粋", kana: "じゅんすい", pos: "な형용사",
    mean: "순수함",
    syn: ["素直な"],
    collocations: [{ ja: "純粋な心", ko: "순수한 마음" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの純粋な質問に答えられなかった。", ko: "아이의 순수한 질문에 대답할 수 없었다." }]
  },
  {
    id: 2124, day: 18, level: "N2",
    word: "尊い", kana: "とうとい", pos: "い형용사",
    mean: "귀하다, 소중하다",
    syn: ["貴重な"],
    collocations: [{ ja: "尊い命", ko: "소중한 생명" }],
    examples: [{ type: "ex", label: "예문", ja: "事故で多くの尊い命が失われた。", ko: "사고로 많은 소중한 생명이 희생되었다." }]
  },
  {
    id: 2125, day: 18, level: "N2",
    word: "正当", kana: "せいとう", pos: "な형용사",
    mean: "정당함",
    syn: ["妥当な"],
    collocations: [{ ja: "正当な理由", ko: "정당한 이유" }],
    examples: [{ type: "ex", label: "예문", ja: "正当な理由なく欠席してはいけない。", ko: "정당한 이유 없이 결석해서는 안 된다." }]
  },
  {
    id: 2126, day: 18, level: "N2",
    word: "速やか", kana: "すみやか", pos: "な형용사",
    mean: "신속함",
    syn: ["迅速な"],
    collocations: [{ ja: "速やかな対応", ko: "신속한 대응" }],
    examples: [{ type: "ex", label: "예문", ja: "異常があれば速やかに報告してください。", ko: "이상이 있으면 신속하게 보고해 주세요." }]
  },
  {
    id: 2127, day: 18, level: "N2",
    word: "チームワーク", kana: "チームワーク", pos: "외래어",
    mean: "팀워크 (teamwork)",
    syn: ["協力"],
    collocations: [{ ja: "チームワークがいい", ko: "팀워크가 좋다" }],
    examples: [{ type: "ex", label: "예문", ja: "勝利の鍵はチームワークだ。", ko: "승리의 열쇠는 팀워크다." }]
  },
  {
    id: 2128, day: 18, level: "N2",
    word: "データ", kana: "データ", pos: "외래어",
    mean: "데이터, 자료 (data)",
    syn: ["資料"],
    collocations: [{ ja: "データを集める", ko: "데이터를 모으다" }],
    examples: [{ type: "ex", label: "예문", ja: "最新のデータに基づいて分析する。", ko: "최신 데이터를 바탕으로 분석한다." }]
  },
  {
    id: 2129, day: 18, level: "N2",
    word: "トレーニング", kana: "トレーニング", pos: "외래어",
    mean: "훈련 (training)",
    syn: ["訓練", "練習"],
    collocations: [{ ja: "トレーニングを積む", ko: "훈련을 쌓다" }],
    examples: [{ type: "ex", label: "예문", ja: "毎日トレーニングを欠かさない。", ko: "매일 훈련을 거르지 않는다." }]
  },
  {
    id: 2130, day: 18, level: "N2",
    word: "当分", kana: "とうぶん", pos: "부사",
    mean: "당분간",
    syn: ["しばらく"],
    collocations: [{ ja: "当分休む", ko: "당분간 쉬다" }],
    examples: [{ type: "ex", label: "예문", ja: "当分の間、店を休みます。", ko: "당분간 가게를 쉽니다." }]
  },
  {
    id: 2131, day: 18, level: "N2",
    word: "どうか", kana: "どうか", pos: "부사",
    mean: "부디, 아무쪼록",
    syn: ["どうぞ"],
    collocations: [{ ja: "どうかお願いします", ko: "부디 부탁드립니다" }],
    examples: [{ type: "ex", label: "예문", ja: "どうか無事でいてほしい。", ko: "부디 무사하기를 바란다." }]
  },
  {
    id: 175, day: 18, level: "N2",
    word: "仮に", kana: "かりに", pos: "부사",
    mean: "만약, 가령 (~としたら / 〜ても 호응)",
    syn: ["もし", "たとえ"],
    collocations: [{ ja: "仮に〜としたら", ko: "가령 ~라고 한다면" }, { ja: "仮に〜ても", ko: "만약 ~라 할지라도" }],
    examples: [{ type: "ex", label: "예문", ja: "仮に今回の挑戦が失敗に終わったとしても、その過程で蓄積された実務データは計り知れない価値を持つ。", ko: "가령 이번 도전이 실패로 끝난다 하더라도 그 과정에서 축적된 실무 데이터는 헤아릴 수 없는 가치를 지닌다." }]
  },
  {
    id: 2132, day: 18, level: "N2",
    word: "とっさに", kana: "とっさに", pos: "부사",
    mean: "순간적으로, 엉겁결에",
    syn: ["瞬間的に"],
    collocations: [{ ja: "とっさに避ける", ko: "순간적으로 피하다" }],
    examples: [{ type: "ex", label: "예문", ja: "とっさにブレーキを踏んだ。", ko: "순간적으로 브레이크를 밟았다." }]
  },
  {
    id: 2133, day: 18, level: "N2",
    word: "すらすら", kana: "すらすら", pos: "부사 (의성어·의태어)",
    mean: "술술, 막힘없이",
    syn: ["流暢に"],
    collocations: [{ ja: "すらすら読む", ko: "술술 읽다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女は難しい文章をすらすら読んだ。", ko: "그녀는 어려운 문장을 술술 읽었다." }]
  },
  {
    id: 2134, day: 18, level: "N2",
    word: "ないし", kana: "ないし", pos: "접속사",
    mean: "내지, 또는",
    syn: ["または", "あるいは"],
    collocations: [{ ja: "ないし", ko: "내지" }],
    examples: [{ type: "ex", label: "예문", ja: "三日ないし五日かかる。", ko: "사흘 내지 닷새 걸린다." }]
  },
  {
    id: 2135, day: 18, level: "N2",
    word: "元〜", kana: "もと", pos: "접두어",
    mean: "전~, 원래의",
    syn: ["以前の"],
    collocations: [{ ja: "元社長", ko: "전 사장" }, { ja: "元彼", ko: "전 남자 친구" }, { ja: "元の場所", ko: "원래 자리" }],
    examples: []
  },
  {
    id: 2136, day: 18, level: "N2",
    word: "決意", kana: "けつい", pos: "명사 (する동사)",
    mean: "결의",
    syn: ["決心"],
    collocations: [{ ja: "固い決意", ko: "굳은 결의" }, { ja: "決意を新たにする", ko: "결의를 새롭게 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新年に禁煙の決意をした。", ko: "새해에 금연을 결의했다." }]
  },
  {
    id: 2137, day: 18, level: "N2",
    word: "忍耐", kana: "にんたい", pos: "명사 (する동사)",
    mean: "인내",
    syn: ["我慢", "辛抱"],
    collocations: [{ ja: "忍耐力", ko: "인내력" }, { ja: "忍耐強い", ko: "인내심이 강하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この仕事には忍耐が必要だ。", ko: "이 일에는 인내가 필요하다." }]
  },
  {
    id: 2138, day: 18, level: "N2",
    word: "根気", kana: "こんき", pos: "명사",
    mean: "끈기",
    syn: ["根性", "粘り"],
    collocations: [{ ja: "根気がいる", ko: "끈기가 필요하다" }, { ja: "根気よく続ける", ko: "끈기 있게 계속하다" }],
    examples: [{ type: "ex", label: "예문", ja: "語学の勉強には根気がいる。", ko: "어학 공부에는 끈기가 필요하다." }]
  },
  {
    id: 2139, day: 18, level: "N2",
    word: "本音", kana: "ほんね", pos: "명사",
    mean: "본심",
    syn: ["本心"],
    collocations: [{ ja: "本音を言う", ko: "본심을 말하다" }, { ja: "本音と建前", ko: "본심과 겉치레" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はなかなか本音を言わない。", ko: "그는 좀처럼 본심을 말하지 않는다." }]
  },
  {
    id: 197, day: 18, level: "N2",
    word: "蓄積", kana: "ちくせき", pos: "명사",
    mean: "축적",
    syn: ["蓄えること", "累積"],
    collocations: [{ ja: "データを蓄積する", ko: "데이터를 축적하다" }, { ja: "疲労の蓄積", ko: "피로 누적/축적" }],
    examples: [{ type: "on", label: "음독", ja: "長期間にわたる過重労働と精神的ストレスの蓄積は、本人が自覚しないうちに心身の健康を蝕んでいく。", ko: "장기간에 걸친 과중 노동과 정신적 스트레스의 축적은 본인이 자각하지 못하는 사이에 심신의 건강을 좀먹어 간다." }]
  },
  {
    id: 2140, day: 18, level: "N2",
    word: "建前", kana: "たてまえ", pos: "명사",
    mean: "겉으로 내세우는 방침",
    syn: ["表向き"],
    collocations: [{ ja: "建前を言う", ko: "겉치레 말을 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "それは建前で、本音は違うだろう。", ko: "그건 겉치레고 본심은 다를 것이다." }]
  },
  {
    id: 2141, day: 18, level: "N2",
    word: "誤り", kana: "あやまり", pos: "명사",
    mean: "잘못, 틀림",
    syn: ["間違い"],
    collocations: [{ ja: "誤りを正す", ko: "잘못을 바로잡다" }, { ja: "誤りに気づく", ko: "잘못을 깨닫다" }],
    examples: [{ type: "ex", label: "예문", ja: "書類の誤りに気づいて訂正した。", ko: "서류의 잘못을 깨닫고 정정했다." }]
  },
  {
    id: 2142, day: 18, level: "N2",
    word: "勘違い", kana: "かんちがい", pos: "명사 (する동사)",
    mean: "착각",
    syn: ["思い違い", "誤解"],
    collocations: [{ ja: "勘違いをする", ko: "착각하다" }],
    examples: [{ type: "ex", label: "예문", ja: "約束の日を勘違いしていた。", ko: "약속 날짜를 착각하고 있었다." }]
  },
  {
    id: 2143, day: 18, level: "N2",
    word: "好奇心", kana: "こうきしん", pos: "명사",
    mean: "호기심",
    syn: [],
    collocations: [{ ja: "好奇心が強い", ko: "호기심이 강하다" }, { ja: "好奇心を持つ", ko: "호기심을 갖다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもは好奇心が旺盛だ。", ko: "아이는 호기심이 왕성하다." }]
  },
  {
    id: 2144, day: 18, level: "N2",
    word: "関心", kana: "かんしん", pos: "명사",
    mean: "관심",
    syn: ["興味"],
    collocations: [{ ja: "関心を持つ", ko: "관심을 갖다" }, { ja: "関心が高まる", ko: "관심이 높아지다" }],
    examples: [{ type: "ex", label: "예문", ja: "若者の政治への関心が低い。", ko: "젊은이의 정치에 대한 관심이 낮다." }]
  },
  {
    id: 2145, day: 18, level: "N2",
    word: "認識", kana: "にんしき", pos: "명사 (する동사)",
    mean: "인식",
    syn: ["理解"],
    collocations: [{ ja: "認識を深める", ko: "인식을 깊게 하다" }, { ja: "認識不足", ko: "인식 부족" }],
    examples: [{ type: "ex", label: "예문", ja: "問題の深刻さを認識する必要がある。", ko: "문제의 심각성을 인식할 필요가 있다." }]
  },
  {
    id: 200, day: 18, level: "N2",
    word: "徹底", kana: "てってい", pos: "명사",
    mean: "철저함",
    syn: ["徹すること", "完全"],
    collocations: [{ ja: "管理を徹底する", ko: "관리를 철저히 하다" }, { ja: "周知徹底を図る", ko: "주지 철저를 도모하다" }],
    examples: [{ type: "on", label: "음독", ja: "同種事故の再発を未然に防止するため、全現場の作業員に対して安全点検の徹底を厳命した。", ko: "동종 사고의 재발을 미연에 방지하기 위해 모든 현장의 작업원에게 안전 점검의 철저를 엄명했다." }]
  },
  {
    id: 2146, day: 18, level: "N2",
    word: "解釈", kana: "かいしゃく", pos: "명사 (する동사)",
    mean: "해석",
    syn: ["理解"],
    collocations: [{ ja: "解釈が分かれる", ko: "해석이 갈리다" }, { ja: "正しく解釈する", ko: "올바르게 해석하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この文の解釈は人によって異なる。", ko: "이 문장의 해석은 사람마다 다르다." }]
  },
  {
    id: 2147, day: 18, level: "N2",
    word: "推測", kana: "すいそく", pos: "명사 (する동사)",
    mean: "추측",
    syn: ["予想", "推量"],
    collocations: [{ ja: "推測が当たる", ko: "추측이 맞다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の話から推測すると、まだ決まっていないようだ。", ko: "그의 이야기로 추측하건대 아직 정해지지 않은 것 같다." }]
  },
  {
    id: 2148, day: 18, level: "N2",
    word: "予測", kana: "よそく", pos: "명사 (する동사)",
    mean: "예측",
    syn: ["予想"],
    collocations: [{ ja: "予測がつかない", ko: "예측할 수 없다" }, { ja: "将来を予測する", ko: "장래를 예측하다" }],
    examples: [{ type: "ex", label: "예문", ja: "今後の景気を予測するのは難しい。", ko: "앞으로의 경기를 예측하기는 어렵다." }]
  },
  {
    id: 2149, day: 18, level: "N2",
    word: "想定", kana: "そうてい", pos: "명사 (する동사)",
    mean: "상정, 가정",
    syn: ["仮定"],
    collocations: [{ ja: "想定外", ko: "예상 밖" }, { ja: "最悪の場合を想定する", ko: "최악의 경우를 상정하다" }],
    examples: [{ type: "ex", label: "예문", ja: "最悪の事態を想定して準備する。", ko: "최악의 사태를 상정하고 준비한다." }]
  },
  {
    id: 2150, day: 18, level: "N2",
    word: "仮定", kana: "かてい", pos: "명사 (する동사)",
    mean: "가정",
    syn: ["仮説"],
    collocations: [{ ja: "仮定の話", ko: "가정의 이야기" }],
    examples: [{ type: "ex", label: "예문", ja: "仮に成功したと仮定しよう。", ko: "가령 성공했다고 가정해 보자." }]
  },
  {
    id: 2151, day: 18, level: "N2",
    word: "前提", kana: "ぜんてい", pos: "명사",
    mean: "전제",
    syn: [],
    collocations: [{ ja: "結婚を前提に付き合う", ko: "결혼을 전제로 사귀다" }, { ja: "前提条件", ko: "전제 조건" }],
    examples: [{ type: "ex", label: "예문", ja: "この計画は予算が増えることが前提だ。", ko: "이 계획은 예산이 느는 것이 전제다." }]
  },
  {
    id: 201, day: 18, level: "N2",
    word: "統合", kana: "とうごう", pos: "명사",
    mean: "통합",
    syn: ["まとめること", "合併"],
    collocations: [{ ja: "システムを統合する", ko: "시스템을 통합하다" }, { ja: "企業の統合", ko: "기업 통합/합병" }],
    examples: [{ type: "on", label: "음독", ja: "部門ごとにバラバラに管理されていた顧客情報を一元的に統合し、業務効率の大幅な向上を図る。", ko: "부서별로 뿔뿔이 관리되던 고객 정보를 일원적으로 통합하여 업무 효율의 대폭적인 향상을 도모하다." }]
  },
  {
    id: 2152, day: 18, level: "N2",
    word: "根本", kana: "こんぽん", pos: "명사",
    mean: "근본",
    syn: ["基本"],
    collocations: [{ ja: "根本的な解決", ko: "근본적인 해결" }, { ja: "根本から見直す", ko: "근본부터 재검토하다" }],
    examples: [{ type: "ex", label: "예문", ja: "問題を根本から解決する必要がある。", ko: "문제를 근본부터 해결할 필요가 있다." }]
  },
  {
    id: 2153, day: 18, level: "N2",
    word: "本質", kana: "ほんしつ", pos: "명사",
    mean: "본질",
    syn: [],
    collocations: [{ ja: "問題の本質", ko: "문제의 본질" }, { ja: "本質的な違い", ko: "본질적인 차이" }],
    examples: [{ type: "ex", label: "예문", ja: "問題の本質を見失ってはいけない。", ko: "문제의 본질을 놓쳐서는 안 된다." }]
  },
  {
    id: 2154, day: 18, level: "N2",
    word: "要点", kana: "ようてん", pos: "명사",
    mean: "요점",
    syn: ["ポイント"],
    collocations: [{ ja: "要点をまとめる", ko: "요점을 정리하다" }],
    examples: [{ type: "ex", label: "예문", ja: "話の要点を三つにまとめた。", ko: "이야기의 요점을 세 가지로 정리했다." }]
  },
  {
    id: 2155, day: 18, level: "N2",
    word: "要因", kana: "よういん", pos: "명사",
    mean: "요인",
    syn: ["原因"],
    collocations: [{ ja: "成功の要因", ko: "성공 요인" }, { ja: "様々な要因", ko: "여러 요인" }],
    examples: [{ type: "ex", label: "예문", ja: "事故の要因はいくつか考えられる。", ko: "사고의 요인은 몇 가지 생각할 수 있다." }]
  },
  {
    id: 2156, day: 18, level: "N2",
    word: "結論", kana: "けつろん", pos: "명사 (する동사)",
    mean: "결론",
    syn: [],
    collocations: [{ ja: "結論を出す", ko: "결론을 내다" }, { ja: "結論に達する", ko: "결론에 이르다" }],
    examples: [{ type: "ex", label: "예문", ja: "長い議論の末、ようやく結論が出た。", ko: "긴 논의 끝에 겨우 결론이 났다." }]
  },
  {
    id: 2157, day: 18, level: "N1",
    word: "自立", kana: "じりつ", pos: "명사 (する동사)",
    mean: "자립",
    syn: ["独立"],
    collocations: [{ ja: "経済的に自立する", ko: "경제적으로 자립하다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの自立を支援する。", ko: "아이의 자립을 지원한다." }]
  },
  {
    id: 2158, day: 18, level: "N1",
    word: "遮断", kana: "しゃだん", pos: "명사 (する동사)",
    mean: "차단",
    syn: ["遮る"],
    collocations: [{ ja: "情報を遮断する", ko: "정보를 차단하다" }, { ja: "通行を遮断する", ko: "통행을 차단하다" }],
    examples: [{ type: "ex", label: "예문", ja: "事故のため道路が遮断された。", ko: "사고로 도로가 차단되었다." }]
  },
  {
    id: 113, day: 18, level: "N1",
    word: "均衡", kana: "きんこう", pos: "명사",
    mean: "균형 (밸런스)",
    syn: ["バランス", "釣り合い"],
    collocations: [{ ja: "均衡を保つ", ko: "균형을 유지하다" }, { ja: "均衡が崩れる", ko: "균형이 무너지다" }],
    examples: [{ type: "on", label: "음독", ja: "自然界における捕食者と獲物の微妙な生態系の均衡が崩れると、特定の種が爆発的に増加する。", ko: "자연계에서 포식자와 먹잇감 사이의 미묘한 생태계 균형이 무너지면 특정 종이 폭발적으로 증가한다." }]
  },
  {
    id: 2159, day: 18, level: "N1",
    word: "収集", kana: "しゅうしゅう", pos: "명사 (する동사)",
    mean: "수집",
    syn: ["集める"],
    collocations: [{ ja: "情報収集", ko: "정보 수집" }, { ja: "ごみ収集", ko: "쓰레기 수거" }],
    examples: [{ type: "ex", label: "예문", ja: "まずは情報収集から始めよう。", ko: "우선 정보 수집부터 시작하자." }]
  },
  {
    id: 117, day: 18, level: "N1",
    word: "執着", kana: "しゅうちゃく", pos: "명사",
    mean: "집착",
    syn: ["こだわり"],
    collocations: [{ ja: "過去に執着する", ko: "과거에 집착하다" }, { ja: "執着を捨てる", ko: "집착을 끊어내다/버리다" }],
    examples: [{ type: "on", label: "음독", ja: "過去の一時的な成功体験に過度に執着していては、急速に変化する現代市場で生き残ることはできない。", ko: "과거의 일시적인 성공 체험에 지나치게 집착해서는 급속히 변화하는 현대 시장에서 살아남을 수 없다." }]
  },
  {
    id: 2160, day: 18, level: "N1",
    word: "修復", kana: "しゅうふく", pos: "명사 (する동사)",
    mean: "수복, 복원",
    syn: ["直す"],
    collocations: [{ ja: "関係を修復する", ko: "관계를 회복하다" }, { ja: "建物の修復", ko: "건물 복원" }],
    examples: [{ type: "ex", label: "예문", ja: "二人の関係を修復するのは難しい。", ko: "두 사람의 관계를 회복하는 것은 어렵다." }]
  },
  {
    id: 2161, day: 18, level: "N1",
    word: "重複", kana: "ちょうふく", pos: "명사 (する동사)",
    mean: "중복 (じゅうふく라고도 읽음)",
    syn: ["重なる"],
    collocations: [{ ja: "内容が重複する", ko: "내용이 중복되다" }],
    examples: [{ type: "ex", label: "예문", ja: "説明が重複しているので削除した。", ko: "설명이 중복되어 있어서 삭제했다." }]
  },
  {
    id: 123, day: 18, level: "N1",
    word: "典型", kana: "てんけい", pos: "명사",
    mean: "전형 (대표적 본보기)",
    syn: ["代表例", "見本"],
    collocations: [{ ja: "典型的な例", ko: "전형적인 대표 사례" }, { ja: "典型を示す", ko: "전형을 보여주다" }],
    examples: [{ type: "on", label: "음독", ja: "この情報漏洩事故は、社内のセキュリティ教育の軽視が招いた、まさに典型的な人災の例である。", ko: "이 정보 유출 사고는 사내 보안 교육 경시가 초래한 그야말로 전형적인 인재(人災)의 사례이다." }]
  },
  // ==========================================
  // [DAY 19] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 151, day: 19, level: "N2",
    word: "励む", kana: "はげむ", pos: "동사 (5단 자동사)",
    mean: "힘쓰다, 애쓰다, 노력하다",
    syn: ["努める", "精を出す"],
    collocations: [{ ja: "学業に励む", ko: "학업에 힘쓰다" }, { ja: "研究に励む", ko: "연구에 매진하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "目標とする国家資格の試験に合格するため、仕事の合間を縫って日夜学業に励んでいる。", ko: "목표로 하는 국가자격 시험에 합격하기 위해 일하는 틈틈이 밤낮으로 학업에 힘쓰고 있다." }, { type: "on", label: "음독", ja: "挫折しそうな時、恩師からの温かい激励(げきれい)の言葉が大きな心の支えとなった。", ko: "좌절할 뻔했을 때 은사님의 따뜻한 격려의 말이 커다란 마음의 버팀목이 되었다." }]
  },
  {
    id: 2162, day: 19, level: "N2",
    word: "握る", kana: "にぎる", pos: "동사 (타동사)",
    mean: "쥐다, 장악하다",
    syn: ["掴む"],
    collocations: [{ ja: "手を握る", ko: "손을 잡다" }, { ja: "権力を握る", ko: "권력을 쥐다" }],
    examples: [{ type: "ex", label: "예문", ja: "緊張して、手をぎゅっと握りしめた。", ko: "긴장해서 손을 꽉 쥐었다." }]
  },
  {
    id: 2163, day: 19, level: "N2",
    word: "にじむ", kana: "にじむ", pos: "동사 (자동사)",
    mean: "번지다, 배어 나오다",
    syn: ["染みる"],
    collocations: [{ ja: "インクがにじむ", ko: "잉크가 번지다" }, { ja: "汗がにじむ", ko: "땀이 배다" }],
    examples: [{ type: "ex", label: "예문", ja: "額に汗がにじんでいる。", ko: "이마에 땀이 배어 있다." }]
  },
  {
    id: 2164, day: 19, level: "N2",
    word: "ねじる", kana: "ねじる", pos: "동사 (타동사)",
    mean: "비틀다",
    syn: [],
    collocations: [{ ja: "ふたをねじる", ko: "뚜껑을 비틀다" }, { ja: "体をねじる", ko: "몸을 비틀다" }],
    examples: [{ type: "ex", label: "예문", ja: "瓶のふたをねじって開けた。", ko: "병뚜껑을 비틀어 열었다." }]
  },
  {
    id: 2165, day: 19, level: "N2",
    word: "望む", kana: "のぞむ", pos: "동사 (타동사)",
    mean: "바라다, 바라보다",
    syn: ["願う", "希望する"],
    collocations: [{ ja: "平和を望む", ko: "평화를 바라다" }, { ja: "海を望む", ko: "바다를 바라보다" }],
    examples: [{ type: "ex", label: "예문", ja: "多くの人が平和な暮らしを望んでいる。", ko: "많은 사람이 평화로운 생활을 바라고 있다." }]
  },
  {
    id: 2166, day: 19, level: "N2",
    word: "延びる", kana: "のびる", pos: "동사 (자동사)",
    mean: "연장되다, 늦춰지다",
    syn: ["延長される"],
    collocations: [{ ja: "締め切りが延びる", ko: "마감이 연장되다" }, { ja: "寿命が延びる", ko: "수명이 늘다" }],
    examples: [{ type: "ex", label: "예문", ja: "台風で出発が一日延びた。", ko: "태풍으로 출발이 하루 늦춰졌다." }]
  },
  {
    id: 155, day: 19, level: "N2",
    word: "見落とす", kana: "みおとす", pos: "동사 (5단 타동사)",
    mean: "간과하다, 못 보고 넘기다",
    syn: ["見逃す", "気づかない"],
    collocations: [{ ja: "異常値を見落とす", ko: "이상 수치를 간과하다" }, { ja: "誤字を見落とす", ko: "오탈자를 빠뜨리고 못 보다" }],
    examples: [{ type: "kun", label: "훈독", ja: "実験データの微細な異常値を見落としたことが、その後の開発計画の遅延を招いた。", ko: "실험 데이터의 미세한 이상 수치를 간과한 것이 그 후 개발 계획의 지연을 초래했다." }]
  },
  {
    id: 2167, day: 19, level: "N2",
    word: "乗り換える", kana: "のりかえる", pos: "동사 (타동사)",
    mean: "갈아타다",
    syn: [],
    collocations: [{ ja: "電車を乗り換える", ko: "전철을 갈아타다" }, { ja: "新しい機種に乗り換える", ko: "새 기종으로 바꾸다" }],
    examples: [{ type: "ex", label: "예문", ja: "次の駅で地下鉄に乗り換えます。", ko: "다음 역에서 지하철로 갈아탑니다." }]
  },
  {
    id: 2168, day: 19, level: "N2",
    word: "図る", kana: "はかる", pos: "동사 (타동사)",
    mean: "도모하다, 꾀하다",
    syn: ["目指す"],
    collocations: [{ ja: "解決を図る", ko: "해결을 도모하다" }, { ja: "合理化を図る", ko: "합리화를 꾀하다" }],
    examples: [{ type: "ex", label: "예문", ja: "会社は経費の削減を図っている。", ko: "회사는 경비 절감을 도모하고 있다." }]
  },
  {
    id: 2169, day: 19, level: "N2",
    word: "剥がす", kana: "はがす", pos: "동사 (타동사)",
    mean: "벗기다, 떼어 내다",
    syn: ["取る"],
    collocations: [{ ja: "シールを剥がす", ko: "스티커를 떼다" }, { ja: "ポスターを剥がす", ko: "포스터를 떼어 내다" }],
    examples: [{ type: "ex", label: "예문", ja: "壁のポスターを丁寧に剥がした。", ko: "벽의 포스터를 조심스럽게 떼어 냈다." }]
  },
  {
    id: 2170, day: 19, level: "N2",
    word: "挟む", kana: "はさむ", pos: "동사 (타동사)",
    mean: "끼우다, 사이에 두다",
    syn: [],
    collocations: [{ ja: "本にしおりを挟む", ko: "책에 책갈피를 끼우다" }, { ja: "口を挟む", ko: "말참견하다" }],
    examples: [{ type: "ex", label: "예문", ja: "人の話に口を挟まないでください。", ko: "남의 이야기에 끼어들지 마세요." }]
  },
  {
    id: 2171, day: 19, level: "N2",
    word: "弾む", kana: "はずむ", pos: "동사 (자동사)",
    mean: "튀다, 들뜨다",
    syn: [],
    collocations: [{ ja: "ボールが弾む", ko: "공이 튀다" }, { ja: "話が弾む", ko: "이야기가 활기를 띠다" }],
    examples: [{ type: "ex", label: "예문", ja: "久しぶりに会った友人と話が弾んだ。", ko: "오랜만에 만난 친구와 이야기꽃을 피웠다." }]
  },
  {
    id: 196, day: 19, level: "N2",
    word: "妥当", kana: "だとう", pos: "な형용사",
    mean: "타당함",
    syn: ["適切", "ふさわしい"],
    collocations: [{ ja: "妥当な判断", ko: "타당한 판단" }, { ja: "妥当性を欠く", ko: "타당성이 결여되다" }],
    examples: [{ type: "on", label: "음독", ja: "客観的な証拠資料と緻密な論理構成に照らし合わせて、誰の目から見ても妥当な結論を導き出す。", ko: "객관적인 증거 자료와 치밀한 논리 구성에 비추어 보아 누구의 눈으로 보아도 타당한 결론을 도출하다." }]
  },
  {
    id: 2172, day: 19, level: "N2",
    word: "力強い", kana: "ちからづよい", pos: "い형용사",
    mean: "힘차다, 든든하다",
    syn: ["たくましい"],
    collocations: [{ ja: "力強い声", ko: "힘찬 목소리" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の力強い言葉に励まされた。", ko: "그의 힘찬 말에 용기를 얻었다." }]
  },
  {
    id: 2173, day: 19, level: "N2",
    word: "鮮明", kana: "せんめい", pos: "な형용사",
    mean: "선명함",
    syn: ["はっきりした"],
    collocations: [{ ja: "鮮明な記憶", ko: "선명한 기억" }],
    examples: [{ type: "ex", label: "예문", ja: "あの日のことは今でも鮮明に覚えている。", ko: "그날의 일은 지금도 선명하게 기억한다." }]
  },
  {
    id: 2174, day: 19, level: "N2",
    word: "相当", kana: "そうとう", pos: "な형용사",
    mean: "상당함",
    syn: ["かなりの"],
    collocations: [{ ja: "相当な努力", ko: "상당한 노력" }],
    examples: [{ type: "ex", label: "예문", ja: "合格するには相当な努力が必要だ。", ko: "합격하려면 상당한 노력이 필요하다." }]
  },
  {
    id: 2175, day: 19, level: "N2",
    word: "名高い", kana: "なだかい", pos: "い형용사",
    mean: "유명하다",
    syn: ["有名な"],
    collocations: [{ ja: "名高い作家", ko: "유명한 작가" }],
    examples: [{ type: "ex", label: "예문", ja: "この町は温泉で名高い。", ko: "이 마을은 온천으로 유명하다." }]
  },
  {
    id: 2176, day: 19, level: "N2",
    word: "率直", kana: "そっちょく", pos: "な형용사",
    mean: "솔직함",
    syn: ["正直な"],
    collocations: [{ ja: "率直な意見", ko: "솔직한 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "率直に言って、その案には反対だ。", ko: "솔직히 말해 그 안에는 반대한다." }]
  },
  {
    id: 2177, day: 19, level: "N2",
    word: "ニーズ", kana: "ニーズ", pos: "외래어",
    mean: "요구, 수요 (needs)",
    syn: ["要求", "需要"],
    collocations: [{ ja: "客のニーズに応える", ko: "고객의 요구에 부응하다" }],
    examples: [{ type: "ex", label: "예문", ja: "時代のニーズに合った商品を開発する。", ko: "시대의 요구에 맞는 상품을 개발한다." }]
  },
  {
    id: 99, day: 19, level: "N2",
    word: "デメリット", kana: "でめりっと", pos: "외래어",
    mean: "단점, 불이익 (demerit)",
    syn: ["短所", "欠点"],
    collocations: [{ ja: "デメリットを上回る", ko: "단점보다 이점이 크다" }, { ja: "デメリットが生じる", ko: "단점/불이익이 발생하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新システムの全面導入には数多くのメリットがある反面、初期投資の負担というデメリットも存在する。", ko: "새로운 시스템의 전면 도입에는 수많은 장점이 있는 반면, 초기 투자 부담이라는 단점도 존재한다." }]
  },
  {
    id: 2178, day: 19, level: "N2",
    word: "ノルマ", kana: "ノルマ", pos: "외래어",
    mean: "할당량 (norma)",
    syn: ["割り当て"],
    collocations: [{ ja: "ノルマを達成する", ko: "할당량을 달성하다" }],
    examples: [{ type: "ex", label: "예문", ja: "営業のノルマが厳しい。", ko: "영업 할당량이 빡빡하다." }]
  },
  {
    id: 2179, day: 19, level: "N2",
    word: "とにかく", kana: "とにかく", pos: "부사",
    mean: "아무튼, 어쨌든",
    syn: ["ともかく"],
    collocations: [{ ja: "とにかくやってみる", ko: "아무튼 해 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "とにかく一度会って話しましょう。", ko: "어쨌든 한번 만나서 이야기합시다." }]
  },
  {
    id: 2180, day: 19, level: "N2",
    word: "共に", kana: "ともに", pos: "부사",
    mean: "함께, 모두",
    syn: ["一緒に"],
    collocations: [{ ja: "共に暮らす", ko: "함께 살다" }],
    examples: [{ type: "ex", label: "예문", ja: "家族と共に新年を迎えた。", ko: "가족과 함께 새해를 맞았다." }]
  },
  {
    id: 2181, day: 19, level: "N2",
    word: "とりあえず", kana: "とりあえず", pos: "부사",
    mean: "우선, 일단",
    syn: ["ひとまず", "一応"],
    collocations: [{ ja: "とりあえず乾杯する", ko: "우선 건배하다" }],
    examples: [{ type: "ex", label: "예문", ja: "とりあえず、ビールをください。", ko: "일단 맥주 주세요." }]
  },
  {
    id: 2182, day: 19, level: "N2",
    word: "何しろ", kana: "なにしろ", pos: "부사",
    mean: "아무튼, 어쨌든 (이유 강조)",
    syn: ["とにかく"],
    collocations: [{ ja: "何しろ忙しい", ko: "아무튼 바쁘다" }],
    examples: [{ type: "ex", label: "예문", ja: "何しろ初めてなので、よく分からない。", ko: "어쨌든 처음이라 잘 모르겠다." }]
  },
  {
    id: 2183, day: 19, level: "N2",
    word: "何とも", kana: "なんとも", pos: "부사",
    mean: "뭐라고도, 정말",
    syn: ["本当に"],
    collocations: [{ ja: "何とも言えない", ko: "뭐라고 말할 수 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "結果は何とも言えない。", ko: "결과는 뭐라고 말할 수 없다." }]
  },
  {
    id: 2184, day: 19, level: "N2",
    word: "ずらりと", kana: "ずらりと", pos: "부사 (의성어·의태어)",
    mean: "죽 (늘어선 모양)",
    syn: ["並んで"],
    collocations: [{ ja: "ずらりと並ぶ", ko: "죽 늘어서다" }],
    examples: [{ type: "ex", label: "예문", ja: "店の前に客がずらりと並んでいる。", ko: "가게 앞에 손님이 죽 늘어서 있다." }]
  },
  {
    id: 2185, day: 19, level: "N2",
    word: "そわそわ", kana: "そわそわ", pos: "부사 (의성어·의태어)",
    mean: "안절부절, 들썽들썽",
    syn: ["落ち着かない"],
    collocations: [{ ja: "そわそわする", ko: "안절부절못하다" }],
    examples: [{ type: "ex", label: "예문", ja: "発表を前にしてそわそわしている。", ko: "발표를 앞두고 안절부절못하고 있다." }]
  },
  {
    id: 2186, day: 19, level: "N2",
    word: "現〜", kana: "げん", pos: "접두어",
    mean: "현~ (현재의)",
    syn: [],
    collocations: [{ ja: "現社長", ko: "현 사장" }, { ja: "現時点", ko: "현시점" }, { ja: "現住所", ko: "현주소" }],
    examples: []
  },
  {
    id: 2187, day: 19, level: "N2",
    word: "半〜", kana: "はん", pos: "접두어",
    mean: "반~ (절반, 불완전)",
    syn: [],
    collocations: [{ ja: "半透明", ko: "반투명" }, { ja: "半世紀", ko: "반세기" }, { ja: "半人前", ko: "아직 서툰 사람" }],
    examples: []
  },
  {
    id: 2188, day: 19, level: "N2",
    word: "主張", kana: "しゅちょう", pos: "명사 (する동사)",
    mean: "주장",
    syn: ["意見"],
    collocations: [{ ja: "主張を通す", ko: "주장을 관철하다" }, { ja: "自己主張", ko: "자기주장" }],
    examples: [{ type: "ex", label: "예문", ja: "筆者の主張を読み取りなさい。", ko: "필자의 주장을 읽어 내시오." }]
  },
  {
    id: 202, day: 19, level: "N2",
    word: "排除", kana: "はいじょ", pos: "명사",
    mean: "배제",
    syn: ["取り除くこと", "除外"],
    collocations: [{ ja: "先入観を排除する", ko: "선입견을 배제하다" }, { ja: "不当競争の排除", ko: "부당 경쟁 배제" }],
    examples: [{ type: "on", label: "음독", ja: "公正かつ客観的な人事評価を実現するため、個人的な感情や個人的な利害関係を完全に排除する。", ko: "공정하고 객관적인 인사 평가를 실현하기 위해 사적인 감정이나 개인적인 이해관계를 완전히 배제하다." }]
  },
  {
    id: 2189, day: 19, level: "N2",
    word: "反論", kana: "はんろん", pos: "명사 (する동사)",
    mean: "반론",
    syn: ["反対意見"],
    collocations: [{ ja: "反論する", ko: "반론하다" }, { ja: "反論の余地", ko: "반론의 여지" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の意見に反論する人はいなかった。", ko: "그의 의견에 반론하는 사람은 없었다." }]
  },
  {
    id: 2190, day: 19, level: "N2",
    word: "議論", kana: "ぎろん", pos: "명사 (する동사)",
    mean: "논의, 토론",
    syn: ["話し合い", "討論"],
    collocations: [{ ja: "議論を重ねる", ko: "논의를 거듭하다" }, { ja: "議論が白熱する", ko: "토론이 과열되다" }],
    examples: [{ type: "ex", label: "예문", ja: "その問題について長時間議論した。", ko: "그 문제에 대해 장시간 논의했다." }]
  },
  {
    id: 2191, day: 19, level: "N2",
    word: "討論", kana: "とうろん", pos: "명사 (する동사)",
    mean: "토론",
    syn: ["議論"],
    collocations: [{ ja: "討論会", ko: "토론회" }, { ja: "討論する", ko: "토론하다" }],
    examples: [{ type: "ex", label: "예문", ja: "学生たちが環境問題について討論した。", ko: "학생들이 환경 문제에 대해 토론했다." }]
  },
  {
    id: 2192, day: 19, level: "N2",
    word: "対立", kana: "たいりつ", pos: "명사 (する동사)",
    mean: "대립",
    syn: ["衝突"],
    collocations: [{ ja: "意見が対立する", ko: "의견이 대립하다" }],
    examples: [{ type: "ex", label: "예문", ja: "二つのグループが激しく対立している。", ko: "두 그룹이 격렬하게 대립하고 있다." }]
  },
  {
    id: 2193, day: 19, level: "N2",
    word: "合意", kana: "ごうい", pos: "명사 (する동사)",
    mean: "합의",
    syn: ["同意"],
    collocations: [{ ja: "合意に達する", ko: "합의에 이르다" }],
    examples: [{ type: "ex", label: "예문", ja: "両国は貿易について合意した。", ko: "양국은 무역에 대해 합의했다." }]
  },
  {
    id: 2194, day: 19, level: "N2",
    word: "同意", kana: "どうい", pos: "명사 (する동사)",
    mean: "동의",
    syn: ["賛成"],
    collocations: [{ ja: "同意を得る", ko: "동의를 얻다" }, { ja: "同意見", ko: "같은 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "親の同意が必要です。", ko: "부모의 동의가 필요합니다." }]
  },
  {
    id: 208, day: 19, level: "N2",
    word: "余暇", kana: "よか", pos: "명사",
    mean: "여가",
    syn: ["暇", "休み"],
    collocations: [{ ja: "余暇を過ごす", ko: "여가를 보내다" }, { ja: "余暇活動の充実", ko: "여가 활동의 충실화" }],
    examples: [{ type: "on", label: "음독", ja: "仕事と私生活の調和を図り、週末の余暇を自分の趣味や自己研鑽のために充実して過ごす。", ko: "일과 사생활의 조화를 도모하며 주말의 여가를 자신의 취미나 자기 계발을 위해 알차게 보내다." }]
  },
  {
    id: 2195, day: 19, level: "N2",
    word: "承知", kana: "しょうち", pos: "명사 (する동사)",
    mean: "알고 있음, 승낙",
    syn: ["知る", "引き受ける"],
    collocations: [{ ja: "承知しました", ko: "알겠습니다" }, { ja: "百も承知", ko: "잘 알고 있음" }],
    examples: [{ type: "ex", label: "예문", ja: "ご事情は承知しております。", ko: "사정은 알고 있습니다." }]
  },
  {
    id: 2196, day: 19, level: "N2",
    word: "了解", kana: "りょうかい", pos: "명사 (する동사)",
    mean: "양해, 이해",
    syn: ["承知"],
    collocations: [{ ja: "了解を得る", ko: "양해를 얻다" }, { ja: "了解しました", ko: "알겠습니다" }],
    examples: [{ type: "ex", label: "예문", ja: "上司の了解を得てから進めてください。", ko: "상사의 양해를 얻고 나서 진행해 주세요." }]
  },
  {
    id: 2197, day: 19, level: "N2",
    word: "拒否", kana: "きょひ", pos: "명사 (する동사)",
    mean: "거부",
    syn: ["断る", "拒む"],
    collocations: [{ ja: "要求を拒否する", ko: "요구를 거부하다" }, { ja: "拒否反応", ko: "거부 반응" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は質問に答えることを拒否した。", ko: "그는 질문에 답하기를 거부했다." }]
  },
  {
    id: 2198, day: 19, level: "N2",
    word: "肯定", kana: "こうてい", pos: "명사 (する동사)",
    mean: "긍정",
    syn: ["認める"],
    collocations: [{ ja: "肯定的な意見", ko: "긍정적인 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "自分を肯定することが大切だ。", ko: "자신을 긍정하는 것이 중요하다." }]
  },
  {
    id: 2199, day: 19, level: "N2",
    word: "批判", kana: "ひはん", pos: "명사 (する동사)",
    mean: "비판",
    syn: ["非難"],
    collocations: [{ ja: "批判を受ける", ko: "비판을 받다" }, { ja: "政府を批判する", ko: "정부를 비판하다" }],
    examples: [{ type: "ex", label: "예문", ja: "その発言は多くの批判を受けた。", ko: "그 발언은 많은 비판을 받았다." }]
  },
  {
    id: 2200, day: 19, level: "N2",
    word: "批評", kana: "ひひょう", pos: "명사 (する동사)",
    mean: "비평",
    syn: [],
    collocations: [{ ja: "作品を批評する", ko: "작품을 비평하다" }, { ja: "批評家", ko: "비평가" }],
    examples: [{ type: "ex", label: "예문", ja: "新聞にその映画の批評が載った。", ko: "신문에 그 영화의 비평이 실렸다." }]
  },
  {
    id: 2201, day: 19, level: "N2",
    word: "評判", kana: "ひょうばん", pos: "명사",
    mean: "평판, 소문",
    syn: ["うわさ"],
    collocations: [{ ja: "評判がいい", ko: "평판이 좋다" }, { ja: "評判の店", ko: "소문난 가게" }],
    examples: [{ type: "ex", label: "예문", ja: "この店は味がいいと評判だ。", ko: "이 가게는 맛이 좋다고 소문났다." }]
  },
  {
    id: 209, day: 19, level: "N2",
    word: "領域", kana: "りょういき", pos: "명사",
    mean: "영역, 분야",
    syn: ["分野", "範囲"],
    collocations: [{ ja: "専門の領域", ko: "전문 분야/영역" }, { ja: "未知の領域", ko: "미지의 영역" }],
    examples: [{ type: "on", label: "음독", ja: "生成AI技術の飛躍的な進化は、これまで人間にしかできないと考えられていた芸術創作の領域にまで達した。", ko: "생성형 AI 기술의 비약적인 진화는 지금까지 인간만이 할 수 있다고 여겨졌던 예술 창작 영역에까지 도달했다." }]
  },
  {
    id: 2202, day: 19, level: "N2",
    word: "非難", kana: "ひなん", pos: "명사 (する동사)",
    mean: "비난",
    syn: ["批判", "責める"],
    collocations: [{ ja: "非難を浴びる", ko: "비난을 받다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の無責任な行動は非難された。", ko: "그의 무책임한 행동은 비난받았다." }]
  },
  {
    id: 2203, day: 19, level: "N2",
    word: "冗談", kana: "じょうだん", pos: "명사",
    mean: "농담",
    syn: [],
    collocations: [{ ja: "冗談を言う", ko: "농담하다" }, { ja: "冗談半分", ko: "반 농담" }],
    examples: [{ type: "ex", label: "예문", ja: "冗談だから、本気にしないで。", ko: "농담이니까 진지하게 받아들이지 마." }]
  },
  {
    id: 2204, day: 19, level: "N2",
    word: "噂", kana: "うわさ", pos: "명사 (する동사)",
    mean: "소문",
    syn: ["評判"],
    collocations: [{ ja: "噂が広まる", ko: "소문이 퍼지다" }, { ja: "噂をすれば", ko: "호랑이도 제 말 하면 온다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人が結婚するという噂を聞いた。", ko: "두 사람이 결혼한다는 소문을 들었다." }]
  },
  {
    id: 2205, day: 19, level: "N2",
    word: "報道", kana: "ほうどう", pos: "명사 (する동사)",
    mean: "보도",
    syn: ["ニュース"],
    collocations: [{ ja: "報道機関", ko: "보도 기관" }, { ja: "新聞で報道される", ko: "신문에 보도되다" }],
    examples: [{ type: "ex", label: "예문", ja: "その事故は全国に報道された。", ko: "그 사고는 전국에 보도되었다." }]
  },
  {
    id: 2206, day: 19, level: "N2",
    word: "放送", kana: "ほうそう", pos: "명사 (する동사)",
    mean: "방송",
    syn: [],
    collocations: [{ ja: "生放送", ko: "생방송" }, { ja: "放送局", ko: "방송국" }],
    examples: [{ type: "ex", label: "예문", ja: "その番組は毎週日曜日に放送される。", ko: "그 프로그램은 매주 일요일에 방송된다." }]
  },
  {
    id: 2207, day: 19, level: "N2",
    word: "番組", kana: "ばんぐみ", pos: "명사",
    mean: "프로그램 (방송)",
    syn: [],
    collocations: [{ ja: "テレビ番組", ko: "텔레비전 프로그램" }, { ja: "番組を見る", ko: "프로그램을 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "好きな番組を録画した。", ko: "좋아하는 프로그램을 녹화했다." }]
  },
  {
    id: 2208, day: 19, level: "N1",
    word: "主導", kana: "しゅどう", pos: "명사 (する동사)",
    mean: "주도",
    syn: ["リード"],
    collocations: [{ ja: "主導権", ko: "주도권" }, { ja: "政府主導", ko: "정부 주도" }],
    examples: [{ type: "ex", label: "예문", ja: "この計画は市が主導している。", ko: "이 계획은 시가 주도하고 있다." }]
  },
  {
    id: 138, day: 19, level: "N1",
    word: "拠点", kana: "きょてん", pos: "명사",
    mean: "거점 (활동의 중심지)",
    syn: ["本拠", "根拠地"],
    collocations: [{ ja: "拠点を構える", ko: "거점을 마련하다" }, { ja: "活動の拠点", ko: "활동 거점" }],
    examples: [{ type: "on", label: "음독", ja: "アジア市場への事業拡大を図るための重要な戦略拠点として、シンガポールに新たな現地法人を設立した。", ko: "아시아 시장으로의 사업 확대를 도모하기 위한 중요한 전략 거점으로서 싱가포르에 새로운 현지 법인을 설립했다." }]
  },
  {
    id: 2209, day: 19, level: "N1",
    word: "主観", kana: "しゅかん", pos: "명사",
    mean: "주관",
    syn: [],
    collocations: [{ ja: "主観的", ko: "주관적" }, { ja: "主観を交える", ko: "주관을 섞다" }],
    examples: [{ type: "ex", label: "예문", ja: "主観ではなく事実に基づいて判断する。", ko: "주관이 아니라 사실에 근거해 판단한다." }]
  },
  {
    id: 2210, day: 19, level: "N1",
    word: "客観", kana: "きゃっかん", pos: "명사",
    mean: "객관",
    syn: [],
    collocations: [{ ja: "客観的", ko: "객관적" }, { ja: "客観的に見る", ko: "객관적으로 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "自分の状況を客観的に見ることが大切だ。", ko: "자신의 상황을 객관적으로 보는 것이 중요하다." }]
  },
  {
    id: 140, day: 19, level: "N1",
    word: "権威", kana: "けんい", pos: "명사",
    mean: "권위",
    syn: ["威信", "専門家"],
    collocations: [{ ja: "権威を失墜する", ko: "권위를 실추시키다" }, { ja: "学界の権威", ko: "학계의 최고 권위자" }],
    examples: [{ type: "on", label: "음독", ja: "既存の学説や学術的な権威に盲従することなく、常に批判的な視点を持って自ら事実を検証する。", ko: "기존의 학설이나 학술적인 권위에 맹종하지 않고 항상 비판적인 시각을 가지고 스스로 사실을 검증하다." }]
  },
  {
    id: 2211, day: 19, level: "N1",
    word: "浸透", kana: "しんとう", pos: "명사 (する동사)",
    mean: "침투, 보급",
    syn: ["広まる"],
    collocations: [{ ja: "社会に浸透する", ko: "사회에 침투하다" }],
    examples: [{ type: "ex", label: "예문", ja: "キャッシュレス決済が社会に浸透した。", ko: "현금 없는 결제가 사회에 정착했다." }]
  },
  {
    id: 145, day: 19, level: "N1",
    word: "貫く", kana: "つらぬく", pos: "동사 (5단 타동사)",
    mean: "관철하다, 꿰뚫다, 시종일관하다",
    syn: ["突き通す", "やり通す"],
    collocations: [{ ja: "信念を貫く", ko: "신념을 끝까지 관철하다" }, { ja: "初志を貫く", ko: "초지를 굽히지 않고 관철하다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "周囲からの激しい反対をものともせず、自らが信じる正義の道を最後まで貫いた。", ko: "주변의 격렬한 반대를 아랑곳하지 않고 스스로가 믿는 정의의 길을 끝까지 관철했다." }],
    polysemy: [
      { def: "① (탄환·빛·시선이) 관통하다, 꿰뚫다", ja: "鋭い矢が分厚い木の板を見事に貫いた。", ko: "날카로운 화살이 두꺼운 나무 판자를 훌륭하게 꿰뚫었다." },
      { def: "② (신념·의지·방침을) 굽히지 않고 끝까지 관철하다", ja: "いかなる圧力にも屈することなく、生涯を通じて平和への信念を貫いた。", ko: "어떠한 압력에도 굴하지 않고 평생을 통해 평화를 향한 신념을 관철했다." },
      { def: "③ (산맥·하천이나 작품의 주제가) 시종일관 이어지다", ja: "彼のすべての著作を貫いている根本的なテーマは、人間性の尊厳である。", ko: "그의 모든 저작을 관통하고(시종일관 꿰뚫고) 있는 근본적인 테마는 인간성의 존엄이다." }
    ]
  },
  {
    id: 2212, day: 19, level: "N1",
    word: "進展", kana: "しんてん", pos: "명사 (する동사)",
    mean: "진전",
    syn: ["進む"],
    collocations: [{ ja: "交渉が進展する", ko: "협상이 진전되다" }],
    examples: [{ type: "ex", label: "예문", ja: "事件の捜査に進展があった。", ko: "사건 수사에 진전이 있었다." }]
  },
  // ==========================================
  // [DAY 20] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 156, day: 20, level: "N2",
    word: "乗り越える", kana: "のりこえる", pos: "동사 (1단 타동사)",
    mean: "극복하다, 넘어서다",
    syn: ["克服する", "乗り切る"],
    collocations: [{ ja: "困難を乗り越える", ko: "난관을 극복하다" }, { ja: "壁を乗り越える", ko: "장벽을 넘어서다" }],
    examples: [{ type: "kun", label: "훈독", ja: "異文化間の言葉や習慣の壁を粘り強く乗り越えて、現地住民との強固な信頼関係を築く。", ko: "이문화 간의 언어와 습관의 벽을 끈기 있게 극복하여 현지 주민과의 견고한 신뢰 관계를 구축하다." }]
  },
  {
    id: 2213, day: 20, level: "N2",
    word: "はまる", kana: "はまる", pos: "동사 (자동사)",
    mean: "꼭 끼다, 빠지다",
    syn: ["夢中になる"],
    collocations: [{ ja: "型にはまる", ko: "틀에 박히다" }, { ja: "ゲームにはまる", ko: "게임에 빠지다" }],
    examples: [{ type: "ex", label: "예문", ja: "最近、韓国ドラマにはまっている。", ko: "요즘 한국 드라마에 빠져 있다." }]
  },
  {
    id: 2214, day: 20, level: "N2",
    word: "張り切る", kana: "はりきる", pos: "동사 (자동사)",
    mean: "힘이 넘치다, 의욕에 차다",
    syn: ["意気込む"],
    collocations: [{ ja: "張り切って働く", ko: "의욕적으로 일하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新入社員は朝から張り切っている。", ko: "신입 사원은 아침부터 의욕이 넘친다." }]
  },
  {
    id: 2215, day: 20, level: "N2",
    word: "腫れる", kana: "はれる", pos: "동사 (자동사)",
    mean: "붓다",
    syn: [],
    collocations: [{ ja: "目が腫れる", ko: "눈이 붓다" }, { ja: "足が腫れる", ko: "다리가 붓다" }],
    examples: [{ type: "ex", label: "예문", ja: "泣きすぎて目が腫れてしまった。", ko: "너무 울어서 눈이 부어 버렸다." }]
  },
  {
    id: 2216, day: 20, level: "N2",
    word: "引き返す", kana: "ひきかえす", pos: "동사 (자동사)",
    mean: "되돌아가다",
    syn: ["戻る"],
    collocations: [{ ja: "途中で引き返す", ko: "도중에 되돌아가다" }],
    examples: [{ type: "ex", label: "예문", ja: "忘れ物に気づいて、家に引き返した。", ko: "두고 온 물건이 생각나 집으로 되돌아갔다." }]
  },
  {
    id: 2217, day: 20, level: "N2",
    word: "引き起こす", kana: "ひきおこす", pos: "동사 (타동사)",
    mean: "일으키다, 야기하다",
    syn: ["招く", "もたらす"],
    collocations: [{ ja: "事故を引き起こす", ko: "사고를 일으키다" }, { ja: "混乱を引き起こす", ko: "혼란을 야기하다" }],
    examples: [{ type: "ex", label: "예문", ja: "小さなミスが大事故を引き起こした。", ko: "작은 실수가 대형 사고를 일으켰다." }]
  },
  {
    id: 212, day: 20, level: "N2",
    word: "凝る", kana: "こる", pos: "동사 (5단 자동사)",
    mean: "뻐근하다, 열중하다, 공을 들이다",
    syn: ["夢中になる", "こわばる"],
    collocations: [{ ja: "肩が凝る", ko: "어깨가 결리다/뻐근하다" }, { ja: "趣向を凝らす", ko: "취향/아이디어를 정교하게 짜다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "長時間のパソコン作業を続けたせいで、首から肩にかけて激しく凝っている。", ko: "장시간 컴퓨터 작업을 계속한 탓에 목에서 어깨에 걸쳐 심하게 뻐근하다." }],
    polysemy: [
      { def: "① 근육의 혈액 순환이 막혀 단단하게 뭉치고 뻐근하다", ja: "同じ姿勢で座りっぱなしだと、どうしても腰や肩が凝りやすい。", ko: "같은 자세로 계속 앉아 있으면 아무래도 허리나 어깨가 뭉치기 쉽다." },
      { def: "② 어떤 일이나 취미에 깊이 빠져 열중하다", ja: "定年退職を迎えてから、本格的な手打ちそば作りにすっかり凝っている。", ko: "정년퇴직을 맞이하고부터 본격적인 수제 메밀국수 만들기에 푹 빠져 있다." },
      { def: "③ 세부적인 형태나 장식에 정성을 쏟아 정교하다 (凝った〜)", ja: "細部にまで徹底的に凝ったデザインの照明器具が、室内に独特の趣を添える。", ko: "세세한 부분까지 철저하게 공을 들인 디자인의 조명 기구가 실내에 독특한 멋을 더한다." }
    ]
  },
  {
    id: 2218, day: 20, level: "N2",
    word: "引き取る", kana: "ひきとる", pos: "동사 (타동사)",
    mean: "떠맡다, 인수하다",
    syn: ["受け取る"],
    collocations: [{ ja: "荷物を引き取る", ko: "짐을 인수하다" }, { ja: "子どもを引き取る", ko: "아이를 맡아 기르다" }],
    examples: [{ type: "ex", label: "예문", ja: "不要になった家具を業者に引き取ってもらった。", ko: "필요 없어진 가구를 업자가 가져가 주었다." }]
  },
  {
    id: 2219, day: 20, level: "N2",
    word: "引き止める", kana: "ひきとめる", pos: "동사 (타동사)",
    mean: "만류하다, 붙잡다",
    syn: ["止める"],
    collocations: [{ ja: "帰る客を引き止める", ko: "돌아가려는 손님을 붙잡다" }],
    examples: [{ type: "ex", label: "예문", ja: "退職を考えていたが、上司に引き止められた。", ko: "퇴직을 생각했지만 상사가 만류했다." }]
  },
  {
    id: 2220, day: 20, level: "N2",
    word: "引っ込む", kana: "ひっこむ", pos: "동사 (자동사)",
    mean: "틀어박히다, 물러나다",
    syn: [],
    collocations: [{ ja: "家に引っ込む", ko: "집에 틀어박히다" }, { ja: "引っ込み思案", ko: "소극적인 성격" }],
    examples: [{ type: "ex", label: "예문", ja: "休日は家に引っ込んで本を読んでいる。", ko: "휴일에는 집에 틀어박혀 책을 읽는다." }]
  },
  {
    id: 2221, day: 20, level: "N2",
    word: "率いる", kana: "ひきいる", pos: "동사 (타동사)",
    mean: "이끌다, 거느리다",
    syn: ["導く"],
    collocations: [{ ja: "チームを率いる", ko: "팀을 이끌다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は三十人の部下を率いている。", ko: "그는 30명의 부하를 거느리고 있다." }]
  },
  {
    id: 2222, day: 20, level: "N2",
    word: "ひねる", kana: "ひねる", pos: "동사 (타동사)",
    mean: "비틀다, (머리를) 짜내다",
    syn: ["ねじる"],
    collocations: [{ ja: "蛇口をひねる", ko: "수도꼭지를 돌리다" }, { ja: "頭をひねる", ko: "머리를 짜내다" }],
    examples: [{ type: "ex", label: "예문", ja: "みんなで頭をひねって解決策を考えた。", ko: "모두 머리를 짜내 해결책을 생각했다." }]
  },
  {
    id: 230, day: 20, level: "N2",
    word: "厳密", kana: "げんみつ", pos: "な형용사",
    mean: "엄밀함",
    syn: ["正確", "精密"],
    collocations: [{ ja: "厳密に言えば", ko: "엄밀히 말하자면" }, { ja: "厳密な審査", ko: "엄밀한 심사" }],
    examples: [{ type: "on", label: "음독", ja: "学術論文を執筆する際には、使用する専門用語の意味を厳密に定義しておかなければならない。", ko: "학술 논문을 집필할 때는 사용하는 전문 용어의 의미를 엄밀하게 정의해 두어야 한다." }]
  },
  {
    id: 2223, day: 20, level: "N2",
    word: "何気ない", kana: "なにげない", pos: "い형용사",
    mean: "무심하다, 아무렇지 않다",
    syn: ["さりげない"],
    collocations: [{ ja: "何気ない一言", ko: "무심한 한마디" }],
    examples: [{ type: "ex", label: "예문", ja: "何気ない一言が人を傷つけることもある。", ko: "무심한 한마디가 사람에게 상처를 주기도 한다." }]
  },
  {
    id: 2224, day: 20, level: "N2",
    word: "粗末", kana: "そまつ", pos: "な형용사",
    mean: "변변치 않음, 소홀함",
    syn: ["質素な"],
    collocations: [{ ja: "粗末な食事", ko: "변변치 않은 식사" }, { ja: "物を粗末にする", ko: "물건을 함부로 다루다" }],
    examples: [{ type: "ex", label: "예문", ja: "食べ物を粗末にしてはいけない。", ko: "음식을 함부로 해서는 안 된다." }]
  },
  {
    id: 2225, day: 20, level: "N2",
    word: "大胆", kana: "だいたん", pos: "な형용사",
    mean: "대담함",
    syn: ["思い切った"],
    collocations: [{ ja: "大胆な行動", ko: "대담한 행동" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は大胆な改革を打ち出した。", ko: "그는 대담한 개혁을 내세웠다." }]
  },
  {
    id: 2226, day: 20, level: "N2",
    word: "憎らしい", kana: "にくらしい", pos: "い형용사",
    mean: "얄밉다",
    syn: ["憎い"],
    collocations: [{ ja: "憎らしい態度", ko: "얄미운 태도" }],
    examples: [{ type: "ex", label: "예문", ja: "いつも勝ち誇った顔をするのが憎らしい。", ko: "늘 이겼다는 얼굴을 하는 게 얄밉다." }]
  },
  {
    id: 2227, day: 20, level: "N2",
    word: "平ら", kana: "たいら", pos: "な형용사",
    mean: "평평함",
    syn: ["平たい"],
    collocations: [{ ja: "平らな道", ko: "평평한 길" }],
    examples: [{ type: "ex", label: "예문", ja: "平らな場所にテントを張った。", ko: "평평한 곳에 텐트를 쳤다." }]
  },
  {
    id: 233, day: 20, level: "N2",
    word: "紛らわしい", kana: "まぎらわしい", pos: "い형용사",
    mean: "헷갈리기 쉽다, 분간하기 어렵다",
    syn: ["まぎらわしい", "区別しにくい"],
    collocations: [{ ja: "紛らわしい表現", ko: "오해를 사기 쉬운 헷갈리는 표현" }, { ja: "紛らわしい名前", ko: "혼동하기 쉬운 명칭" }],
    examples: [{ type: "kun", label: "훈독", ja: "二つの薬品はパッケージの形状と名称が酷似しており、現場で誤用を招く恐れがあり極めて紛らわしい。", ko: "두 약품은 포장 형태와 명칭이 매우 흡사하여 현장에서 오용을 부를 우려가 있어 극히 헷갈리기 쉽다." }]
  },
  {
    id: 2228, day: 20, level: "N2",
    word: "パンフレット", kana: "パンフレット", pos: "외래어",
    mean: "팸플릿 (pamphlet)",
    syn: ["案内書"],
    collocations: [{ ja: "パンフレットを配る", ko: "팸플릿을 나눠 주다" }],
    examples: [{ type: "ex", label: "예문", ja: "旅行会社でパンフレットをもらった。", ko: "여행사에서 팸플릿을 받았다." }]
  },
  {
    id: 2229, day: 20, level: "N2",
    word: "ピーク", kana: "ピーク", pos: "외래어",
    mean: "정점, 절정 (peak)",
    syn: ["頂点", "最高潮"],
    collocations: [{ ja: "ピークを迎える", ko: "정점을 맞다" }],
    examples: [{ type: "ex", label: "예문", ja: "帰省ラッシュは今日がピークだ。", ko: "귀성 혼잡은 오늘이 절정이다." }]
  },
  {
    id: 2230, day: 20, level: "N2",
    word: "ヒント", kana: "ヒント", pos: "외래어",
    mean: "힌트, 실마리 (hint)",
    syn: ["手がかり"],
    collocations: [{ ja: "ヒントを得る", ko: "힌트를 얻다" }],
    examples: [{ type: "ex", label: "예문", ja: "日常生活からアイデアのヒントを得た。", ko: "일상생활에서 아이디어의 힌트를 얻었다." }]
  },
  {
    id: 2231, day: 20, level: "N2",
    word: "何もかも", kana: "なにもかも", pos: "부사",
    mean: "무엇이든지, 모조리",
    syn: ["すべて"],
    collocations: [{ ja: "何もかも忘れる", ko: "모든 것을 잊다" }],
    examples: [{ type: "ex", label: "예문", ja: "旅行に出て、何もかも忘れたい。", ko: "여행을 떠나 모든 것을 잊고 싶다." }]
  },
  {
    id: 2232, day: 20, level: "N2",
    word: "軒並み", kana: "のきなみ", pos: "부사",
    mean: "일제히, 모조리",
    syn: ["一様に"],
    collocations: [{ ja: "軒並み値上がりする", ko: "일제히 값이 오르다" }],
    examples: [{ type: "ex", label: "예문", ja: "食料品が軒並み値上がりした。", ko: "식료품이 일제히 값이 올랐다." }]
  },
  {
    id: 2233, day: 20, level: "N2",
    word: "一通り", kana: "ひととおり", pos: "부사",
    mean: "대강, 한 차례",
    syn: ["ざっと"],
    collocations: [{ ja: "一通り目を通す", ko: "대강 훑어보다" }],
    examples: [{ type: "ex", label: "예문", ja: "書類には一通り目を通しました。", ko: "서류는 대강 훑어보았습니다." }]
  },
  {
    id: 2234, day: 20, level: "N2",
    word: "ひとりでに", kana: "ひとりでに", pos: "부사",
    mean: "저절로",
    syn: ["自然に"],
    collocations: [{ ja: "ひとりでに開く", ko: "저절로 열리다" }],
    examples: [{ type: "ex", label: "예문", ja: "ドアがひとりでに閉まった。", ko: "문이 저절로 닫혔다." }]
  },
  {
    id: 2235, day: 20, level: "N2",
    word: "だらだら", kana: "だらだら", pos: "부사 (의성어·의태어)",
    mean: "질질, 느릿느릿",
    syn: ["ぐずぐず"],
    collocations: [{ ja: "だらだら過ごす", ko: "빈둥빈둥 지내다" }],
    examples: [{ type: "ex", label: "예문", ja: "休日をだらだら過ごしてしまった。", ko: "휴일을 빈둥빈둥 보내 버렸다." }]
  },
  {
    id: 2236, day: 20, level: "N2",
    word: "おまけに", kana: "おまけに", pos: "접속사",
    mean: "게다가, 덤으로",
    syn: ["そのうえ", "しかも"],
    collocations: [{ ja: "おまけに", ko: "게다가" }],
    examples: [{ type: "ex", label: "예문", ja: "道に迷い、おまけに雨まで降ってきた。", ko: "길을 잃은 데다 비까지 내리기 시작했다." }]
  },
  {
    id: 2237, day: 20, level: "N2",
    word: "真〜", kana: "ま", pos: "접두어",
    mean: "정~, 한~ (바로, 완전히)",
    syn: [],
    collocations: [{ ja: "真夜中", ko: "한밤중" }, { ja: "真正面", ko: "정면" }, { ja: "真新しい", ko: "아주 새롭다" }],
    examples: []
  },
  {
    id: 210, day: 20, level: "N2",
    word: "連鎖", kana: "れんさ", pos: "명사",
    mean: "연쇄",
    syn: ["つながり", "連続"],
    collocations: [{ ja: "連鎖倒産", ko: "연쇄 도산" }, { ja: "負の連鎖を断つ", ko: "부정적인 연쇄 고리(악순환)를 끊다" }],
    examples: [{ type: "on", label: "음독", ja: "一社の中核メーカーの経営破綻が、多数の下請け企業を巻き込む連鎖倒産へと発展した。", ko: "핵심 제조업체 한 곳의 경영 파탄이 다수의 하청기업을 끌어들이는 연쇄 도산으로 발전했다." }]
  },
  {
    id: 2238, day: 20, level: "N2",
    word: "記者", kana: "きしゃ", pos: "명사",
    mean: "기자",
    syn: [],
    collocations: [{ ja: "新聞記者", ko: "신문 기자" }, { ja: "記者会見", ko: "기자 회견" }],
    examples: [{ type: "ex", label: "예문", ja: "大臣が記者会見を開いた。", ko: "장관이 기자 회견을 열었다." }]
  },
  {
    id: 2239, day: 20, level: "N2",
    word: "発行", kana: "はっこう", pos: "명사 (する동사)",
    mean: "발행",
    syn: [],
    collocations: [{ ja: "雑誌を発行する", ko: "잡지를 발행하다" }, { ja: "発行部数", ko: "발행 부수" }],
    examples: [{ type: "ex", label: "예문", ja: "証明書を発行してもらった。", ko: "증명서를 발급받았다." }]
  },
  {
    id: 2240, day: 20, level: "N2",
    word: "掲載", kana: "けいさい", pos: "명사 (する동사)",
    mean: "게재",
    syn: ["載せる"],
    collocations: [{ ja: "記事を掲載する", ko: "기사를 게재하다" }],
    examples: [{ type: "ex", label: "예문", ja: "私の投書が新聞に掲載された。", ko: "내 투고가 신문에 실렸다." }]
  },
  {
    id: 2241, day: 20, level: "N2",
    word: "掲示", kana: "けいじ", pos: "명사 (する동사)",
    mean: "게시",
    syn: ["貼り出す"],
    collocations: [{ ja: "掲示板", ko: "게시판" }, { ja: "結果を掲示する", ko: "결과를 게시하다" }],
    examples: [{ type: "ex", label: "예문", ja: "試験の結果が掲示板に貼り出された。", ko: "시험 결과가 게시판에 붙었다." }]
  },
  {
    id: 2242, day: 20, level: "N2",
    word: "通知", kana: "つうち", pos: "명사 (する동사)",
    mean: "통지",
    syn: ["知らせ"],
    collocations: [{ ja: "合格通知", ko: "합격 통지" }, { ja: "通知が届く", ko: "통지가 오다" }],
    examples: [{ type: "ex", label: "예문", ja: "大学から合格の通知が届いた。", ko: "대학에서 합격 통지가 왔다." }]
  },
  {
    id: 2243, day: 20, level: "N2",
    word: "報告", kana: "ほうこく", pos: "명사 (する동사)",
    mean: "보고",
    syn: ["知らせる"],
    collocations: [{ ja: "上司に報告する", ko: "상사에게 보고하다" }, { ja: "報告書", ko: "보고서" }],
    examples: [{ type: "ex", label: "예문", ja: "調査の結果を上司に報告した。", ko: "조사 결과를 상사에게 보고했다." }]
  },
  {
    id: 251, day: 20, level: "N2",
    word: "覚悟", kana: "かくご", pos: "명사",
    mean: "각오",
    syn: ["決意", "心構え"],
    collocations: [{ ja: "覚悟を決める", ko: "각오를 다지다/굳히다" }, { ja: "覚悟の上だ", ko: "각오한 바이다" }],
    examples: [{ type: "on", label: "음독", ja: "いかなる過酷な試練が待ち受けていようとも、最後までやり抜く覚悟を持って挑戦に臨む。", ko: "어떠한 가혹한 시련이 도사리고 있더라도 끝까지 해내겠다는 각오를 품고 도전에 임하다." }]
  },
  {
    id: 2244, day: 20, level: "N2",
    word: "申請", kana: "しんせい", pos: "명사 (する동사)",
    mean: "신청",
    syn: ["申し込み"],
    collocations: [{ ja: "ビザを申請する", ko: "비자를 신청하다" }, { ja: "申請書", ko: "신청서" }],
    examples: [{ type: "ex", label: "예문", ja: "パスポートの申請に必要な書類を準備した。", ko: "여권 신청에 필요한 서류를 준비했다." }]
  },
  {
    id: 2245, day: 20, level: "N2",
    word: "受付", kana: "うけつけ", pos: "명사 (する동사)",
    mean: "접수, 접수처",
    syn: ["窓口"],
    collocations: [{ ja: "受付を済ませる", ko: "접수를 마치다" }, { ja: "受付時間", ko: "접수 시간" }],
    examples: [{ type: "ex", label: "예문", ja: "まず受付で名前を書いてください。", ko: "먼저 접수처에서 이름을 써 주세요." }]
  },
  {
    id: 2246, day: 20, level: "N2",
    word: "窓口", kana: "まどぐち", pos: "명사",
    mean: "창구",
    syn: [],
    collocations: [{ ja: "窓口で尋ねる", ko: "창구에서 묻다" }, { ja: "相談窓口", ko: "상담 창구" }],
    examples: [{ type: "ex", label: "예문", ja: "市役所の窓口で手続きをした。", ko: "시청 창구에서 수속을 했다." }]
  },
  {
    id: 2247, day: 20, level: "N2",
    word: "用紙", kana: "ようし", pos: "명사",
    mean: "용지",
    syn: [],
    collocations: [{ ja: "申込用紙", ko: "신청 용지" }, { ja: "用紙に記入する", ko: "용지에 기입하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この用紙に必要事項を記入してください。", ko: "이 용지에 필요 사항을 기입해 주세요." }]
  },
  {
    id: 2248, day: 20, level: "N2",
    word: "記入", kana: "きにゅう", pos: "명사 (する동사)",
    mean: "기입",
    syn: ["書き込む"],
    collocations: [{ ja: "名前を記入する", ko: "이름을 기입하다" }, { ja: "記入例", ko: "기입 예" }],
    examples: [{ type: "ex", label: "예문", ja: "太い線の中に記入してください。", ko: "굵은 선 안에 기입해 주세요." }]
  },
  {
    id: 2249, day: 20, level: "N2",
    word: "署名", kana: "しょめい", pos: "명사 (する동사)",
    mean: "서명",
    syn: ["サイン"],
    collocations: [{ ja: "署名する", ko: "서명하다" }, { ja: "署名活動", ko: "서명 운동" }],
    examples: [{ type: "ex", label: "예문", ja: "契約書に署名した。", ko: "계약서에 서명했다." }]
  },
  {
    id: 260, day: 20, level: "N2",
    word: "協調", kana: "きょうちょう", pos: "명사",
    mean: "협조 (성격·행동을 맞추어 협력함)",
    syn: ["協力", "歩調を合わせること"],
    collocations: [{ ja: "協調性を重んじる", ko: "협조성을 중시하다" }, { ja: "国際協調", ko: "국제 사회의 협조/공조" }],
    examples: [{ type: "on", label: "음독", ja: "チームで大きなプロジェクトを完遂するためには、個人の卓越した能力だけでなく他者との協調性が不可欠だ。", ko: "팀으로서 큰 프로젝트를 완수하기 위해서는 개인의 탁월한 역량뿐만 아니라 타인과의 협조성이 필수적이다." }]
  },
  {
    id: 2250, day: 20, level: "N2",
    word: "免許", kana: "めんきょ", pos: "명사",
    mean: "면허",
    syn: [],
    collocations: [{ ja: "運転免許", ko: "운전면허" }, { ja: "免許を取る", ko: "면허를 따다" }],
    examples: [{ type: "ex", label: "예문", ja: "十八歳で運転免許を取った。", ko: "18살에 운전면허를 땄다." }]
  },
  {
    id: 2251, day: 20, level: "N2",
    word: "資格", kana: "しかく", pos: "명사",
    mean: "자격",
    syn: [],
    collocations: [{ ja: "資格を取る", ko: "자격증을 따다" }, { ja: "資格試験", ko: "자격시험" }],
    examples: [{ type: "ex", label: "예문", ja: "仕事に役立つ資格を取りたい。", ko: "일에 도움이 되는 자격증을 따고 싶다." }]
  },
  {
    id: 2252, day: 20, level: "N2",
    word: "意義", kana: "いぎ", pos: "명사",
    mean: "의의",
    syn: ["意味", "価値"],
    collocations: [{ ja: "意義がある", ko: "의의가 있다" }, { ja: "歴史的意義", ko: "역사적 의의" }],
    examples: [{ type: "ex", label: "예문", ja: "この研究には大きな意義がある。", ko: "이 연구에는 큰 의의가 있다." }]
  },
  {
    id: 2253, day: 20, level: "N2",
    word: "立場", kana: "たちば", pos: "명사",
    mean: "입장",
    syn: ["位置"],
    collocations: [{ ja: "相手の立場", ko: "상대의 입장" }, { ja: "立場が弱い", ko: "입장이 약하다" }],
    examples: [{ type: "ex", label: "예문", ja: "相手の立場になって考えてみよう。", ko: "상대의 입장이 되어 생각해 보자." }]
  },
  {
    id: 2254, day: 20, level: "N2",
    word: "地位", kana: "ちい", pos: "명사",
    mean: "지위",
    syn: ["身分"],
    collocations: [{ ja: "社会的地位", ko: "사회적 지위" }, { ja: "地位が高い", ko: "지위가 높다" }],
    examples: [{ type: "ex", label: "예문", ja: "女性の社会的地位が向上した。", ko: "여성의 사회적 지위가 향상되었다." }]
  },
  {
    id: 2255, day: 20, level: "N2",
    word: "名誉", kana: "めいよ", pos: "명사",
    mean: "명예",
    syn: [],
    collocations: [{ ja: "名誉を傷つける", ko: "명예를 훼손하다" }, { ja: "名誉ある賞", ko: "명예로운 상" }],
    examples: [{ type: "ex", label: "예문", ja: "これは私にとって大変名誉なことです。", ko: "이것은 저에게 대단히 명예로운 일입니다." }]
  },
  {
    id: 2256, day: 20, level: "N2",
    word: "誇り", kana: "ほこり", pos: "명사",
    mean: "자랑, 긍지",
    syn: ["プライド"],
    collocations: [{ ja: "誇りを持つ", ko: "긍지를 갖다" }, { ja: "誇りに思う", ko: "자랑스럽게 여기다" }],
    examples: [{ type: "ex", label: "예문", ja: "自分の仕事に誇りを持っている。", ko: "자신의 일에 긍지를 갖고 있다." }]
  },
  {
    id: 263, day: 20, level: "N2",
    word: "権限", kana: "けんげん", pos: "명사",
    mean: "권한",
    syn: ["権利の範囲"],
    collocations: [{ ja: "権限を与える", ko: "권한을 부여하다" }, { ja: "権限を越える", ko: "권한을 넘어서다/월권하다" }],
    examples: [{ type: "on", label: "음독", ja: "突発的なトラブルへの迅速な意思決定を促すため、現場のリーダーに対して大幅な権限委譲を断行した。", ko: "돌발적인 문제에 대한 신속한 의사결정을 촉진하기 위해 현장 리더에게 대폭적인 권한 이양을 단행했다." }]
  },
  {
    id: 150, day: 20, level: "N1",
    word: "漂う", kana: "ただよう", pos: "동사 (5단 자동사)",
    mean: "떠돌다, 풍기다, 감돌다",
    syn: ["浮かぶ", "立ち込める"],
    collocations: [{ ja: "香りが漂う", ko: "향기가 은은히 풍기다" }, { ja: "緊張感が漂う", ko: "긴장감이 감돌다" }],
    examples: [{ type: "kun", label: "훈독", ja: "重大な決断を迫られた会議室の中には、重苦しく息の詰まるような緊張感が漂っていた。", ko: "중대한 결단을 강요받은 회의실 안에는 무겁고 숨이 막힐 듯한 긴장감이 감돌고 있었다." }]
  },
  {
    id: 2257, day: 20, level: "N1",
    word: "推奨", kana: "すいしょう", pos: "명사 (する동사)",
    mean: "추천, 권장",
    syn: ["勧める"],
    collocations: [{ ja: "推奨する", ko: "권장하다" }],
    examples: [{ type: "ex", label: "예문", ja: "医師は適度な運動を推奨している。", ko: "의사는 적당한 운동을 권장하고 있다." }]
  },
  {
    id: 2258, day: 20, level: "N1",
    word: "制約", kana: "せいやく", pos: "명사 (する동사)",
    mean: "제약",
    syn: ["制限"],
    collocations: [{ ja: "時間の制約", ko: "시간 제약" }],
    examples: [{ type: "ex", label: "예문", ja: "予算の制約があって、計画を縮小した。", ko: "예산 제약이 있어서 계획을 축소했다." }]
  },
  {
    id: 154, day: 20, level: "N1",
    word: "潜む", kana: "ひそむ", pos: "동사 (5단 자동사)",
    mean: "숨어 있다, 잠재하다",
    syn: ["隠れる", "潜在する"],
    collocations: [{ ja: "危険が潜む", ko: "위험이 도사리고 있다" }, { ja: "影に潜む", ko: "그림자에 몸을 숨기다" }],
    examples: [{ type: "kun", label: "훈독", ja: "一見すると平穏に見える日常生活のすぐ裏側に、予期せぬ重大な危険が潜んでいる。", ko: "언뜻 보기에 평온해 보이는 일상생활의 바로 이면에 예기치 못한 중대한 위험이 도사리고 있다." }, { type: "on", label: "음독", ja: "市場の深層に潜在(せんざい)している消費者の真のニーズを的確に掘り起こす。", ko: "시장의 심층에 잠재되어 있는 소비자의 진정한 니즈를 정확하게 발굴하다." }]
  },
  {
    id: 2259, day: 20, level: "N1",
    word: "摂取", kana: "せっしゅ", pos: "명사 (する동사)",
    mean: "섭취",
    syn: ["取る"],
    collocations: [{ ja: "栄養を摂取する", ko: "영양을 섭취하다" }],
    examples: [{ type: "ex", label: "예문", ja: "塩分の摂取を控えている。", ko: "염분 섭취를 줄이고 있다." }]
  },
  {
    id: 157, day: 20, level: "N1",
    word: "立ち向かう", kana: "たちむかう", pos: "동사 (5단 자동사)",
    mean: "맞서다, 정면 대항하다",
    syn: ["立ち向かう", "対抗する"],
    collocations: [{ ja: "逆境に立ち向かう", ko: "역경에 과감히 맞서다" }, { ja: "不正に立ち向かう", ko: "부정에 정면 대항하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "どれほど過酷な逆境や不条理に直面しようとも、決して逃げずに果敢に立ち向かう勇気を持つ。", ko: "얼마나 가혹한 역경이나 부조리에 직면하더라도 결코 도망치지 않고 과감하게 맞서는 용기를 지니다." }]
  },
  {
    id: 2260, day: 20, level: "N1",
    word: "設置", kana: "せっち", pos: "명사 (する동사)",
    mean: "설치",
    syn: ["設ける"],
    collocations: [{ ja: "カメラを設置する", ko: "카메라를 설치하다" }],
    examples: [{ type: "ex", label: "예문", ja: "駅に防犯カメラが設置された。", ko: "역에 방범 카메라가 설치되었다." }]
  },
  {
    id: 2261, day: 20, level: "N1",
    word: "先行", kana: "せんこう", pos: "명사 (する동사)",
    mean: "선행",
    syn: ["先立つ"],
    collocations: [{ ja: "先行販売", ko: "선행 판매" }, { ja: "不安が先行する", ko: "불안이 앞서다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい生活への期待より不安が先行している。", ko: "새 생활에 대한 기대보다 불안이 앞선다." }]
  },
  {
    id: 158, day: 20, level: "N1",
    word: "打ち切る", kana: "うちきる", pos: "동사 (5단 타동사)",
    mean: "중단하다, 종결짓다, 끝내다",
    syn: ["中止する", "終わりにする"],
    collocations: [{ ja: "交渉を打ち切る", ko: "협상을 중단하다/종결짓다" }, { ja: "予算を打ち切る", ko: "예산 지원을 중단하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "これ以上話し合いを重ねても双方が歩み寄る見込みがないため、交渉を途中で打ち切った。", ko: "더 이상 대화를 거듭해도 쌍방이 양보할 가망이 없기 때문에 협상을 도중에 종결지었다." }]
  },
  // ==========================================
  // [DAY 21] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 217, day: 21, level: "N2",
    word: "告げる", kana: "つげる", pos: "동사 (1단 타동사)",
    mean: "알리다, 고하다, 선고하다",
    syn: ["知らせる", "伝える"],
    collocations: [{ ja: "別れを告げる", ko: "이별을 고하다" }, { ja: "春の訪れを告げる", ko: "봄의 도래를 알리다" }],
    examples: [{ type: "kun", label: "훈독", ja: "夕暮れの街に鳴り響く教会の鐘の音が、静かに一日の終わりを告げていた。", ko: "해 질 녘 거리에 울려 퍼지는 교회의 종소리가 조용히 하루의 끝을 알리고 있었다." }, { type: "on", label: "음독", ja: "新製品の発売スケジュールについて、公式ウェブサイト上でプレス発表を広告(こうこく)する。", ko: "신제품 발매 일정에 대해 공식 웹사이트상에서 보도자료를 공고(광고)하다." }]
  },
  {
    id: 2262, day: 21, level: "N2",
    word: "冷やかす", kana: "ひやかす", pos: "동사 (타동사)",
    mean: "놀리다, (물건을) 구경만 하다",
    syn: ["からかう"],
    collocations: [{ ja: "友達を冷やかす", ko: "친구를 놀리다" }, { ja: "店を冷やかす", ko: "가게를 구경만 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人の仲を周りが冷やかした。", ko: "두 사람의 사이를 주위에서 놀렸다." }]
  },
  {
    id: 2263, day: 21, level: "N2",
    word: "広める", kana: "ひろめる", pos: "동사 (타동사)",
    mean: "넓히다, 퍼뜨리다",
    syn: ["普及させる"],
    collocations: [{ ja: "知識を広める", ko: "지식을 넓히다" }, { ja: "うわさを広める", ko: "소문을 퍼뜨리다" }],
    examples: [{ type: "ex", label: "예문", ja: "日本の文化を世界に広めたい。", ko: "일본 문화를 세계에 널리 알리고 싶다." }]
  },
  {
    id: 2264, day: 21, level: "N2",
    word: "広まる", kana: "ひろまる", pos: "동사 (자동사)",
    mean: "퍼지다, 보급되다",
    syn: ["広がる"],
    collocations: [{ ja: "うわさが広まる", ko: "소문이 퍼지다" }],
    examples: [{ type: "ex", label: "예문", ja: "その習慣は江戸時代に広まった。", ko: "그 습관은 에도 시대에 퍼졌다." }]
  },
  {
    id: 2265, day: 21, level: "N2",
    word: "ぶつける", kana: "ぶつける", pos: "동사 (타동사)",
    mean: "부딪치다, 터뜨리다",
    syn: ["当てる"],
    collocations: [{ ja: "頭をぶつける", ko: "머리를 부딪치다" }, { ja: "怒りをぶつける", ko: "분노를 터뜨리다" }],
    examples: [{ type: "ex", label: "예문", ja: "ドアに頭をぶつけてしまった。", ko: "문에 머리를 부딪쳐 버렸다." }]
  },
  {
    id: 2266, day: 21, level: "N2",
    word: "ぶつかる", kana: "ぶつかる", pos: "동사 (자동사)",
    mean: "부딪히다, 맞닥뜨리다",
    syn: ["衝突する"],
    collocations: [{ ja: "車がぶつかる", ko: "차가 부딪히다" }, { ja: "困難にぶつかる", ko: "어려움에 부딪히다" }],
    examples: [{ type: "ex", label: "예문", ja: "仕事で大きな壁にぶつかった。", ko: "일에서 큰 벽에 부딪혔다." }]
  },
  {
    id: 218, day: 21, level: "N2",
    word: "誓う", kana: "ちかう", pos: "동사 (5단 타동사)",
    mean: "맹세하다, 다짐하다",
    syn: ["約束する", "決意する"],
    collocations: [{ ja: "忠誠を誓う", ko: "충성을 맹세하다" }, { ja: "心に誓う", ko: "마음속으로 굳게 다짐하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "これまでの挫折を糧にして、次回の試験には必ず上位で合格してみせると心に誓った。", ko: "지금까지의 좌절을 밑거름 삼아 다음 시험에는 반드시 상위권으로 합격해 보이겠다고 마음속에 다짐했다." }, { type: "on", label: "음독", ja: "契約内容を厳格に遵守する旨を記した誓約(せいやく)書に、署名と捺印を行った。", ko: "계약 내용을 엄격하게 준수하겠다는 취지를 적은 서약서에 서명과 날인을 행했다." }]
  },
  {
    id: 2267, day: 21, level: "N2",
    word: "振り返る", kana: "ふりかえる", pos: "동사 (타동사)",
    mean: "뒤돌아보다, 회고하다",
    syn: ["顧みる"],
    collocations: [{ ja: "後ろを振り返る", ko: "뒤를 돌아보다" }, { ja: "一年を振り返る", ko: "1년을 되돌아보다" }],
    examples: [{ type: "ex", label: "예문", ja: "この一年を振り返って反省点をまとめた。", ko: "올 한 해를 돌아보며 반성할 점을 정리했다." }]
  },
  {
    id: 2268, day: 21, level: "N2",
    word: "振り向く", kana: "ふりむく", pos: "동사 (자동사)",
    mean: "돌아보다",
    syn: ["振り返る"],
    collocations: [{ ja: "名前を呼ばれて振り向く", ko: "이름이 불려 돌아보다" }],
    examples: [{ type: "ex", label: "예문", ja: "呼ばれた気がして振り向いたが、誰もいなかった。", ko: "불린 것 같아 돌아봤지만 아무도 없었다." }]
  },
  {
    id: 2269, day: 21, level: "N2",
    word: "震える", kana: "ふるえる", pos: "동사 (자동사)",
    mean: "떨리다",
    syn: ["揺れる"],
    collocations: [{ ja: "寒さに震える", ko: "추위에 떨다" }, { ja: "声が震える", ko: "목소리가 떨리다" }],
    examples: [{ type: "ex", label: "예문", ja: "緊張で手が震えた。", ko: "긴장으로 손이 떨렸다." }]
  },
  {
    id: 2270, day: 21, level: "N2",
    word: "経る", kana: "へる", pos: "동사 (타동사)",
    mean: "거치다, 지나다",
    syn: ["通る"],
    collocations: [{ ja: "年月を経る", ko: "세월이 흐르다" }, { ja: "審査を経る", ko: "심사를 거치다" }],
    examples: [{ type: "ex", label: "예문", ja: "厳しい審査を経て採用が決まった。", ko: "엄격한 심사를 거쳐 채용이 결정되었다." }]
  },
  {
    id: 2271, day: 21, level: "N2",
    word: "ほどく", kana: "ほどく", pos: "동사 (타동사)",
    mean: "풀다",
    syn: ["解く"],
    collocations: [{ ja: "ひもをほどく", ko: "끈을 풀다" }, { ja: "荷物をほどく", ko: "짐을 풀다" }],
    examples: [{ type: "ex", label: "예문", ja: "固く結ばれたひもをほどいた。", ko: "단단히 묶인 끈을 풀었다." }]
  },
  {
    id: 221, day: 21, level: "N2",
    word: "慰める", kana: "なぐさめる", pos: "동사 (1단 타동사)",
    mean: "위로하다, 달래다",
    syn: ["励ます", "いたわる"],
    collocations: [{ ja: "友を慰める", ko: "친구를 위로하다" }, { ja: "心を慰める", ko: "마음을 달래다" }],
    examples: [{ type: "kun", label: "훈독", ja: "失意の底に沈む後輩の肩を優しく叩き、温かい励ましの言葉をかけて静かに慰めた。", ko: "실의의 바닥에 가라앉은 후배의 어깨를 다정하게 두드리며 따뜻한 격려의 말을 건네 조용히 위로했다." }, { type: "on", label: "음독", ja: "被災地で長期間の救助活動に奔走した隊員たちの労をねぎらい、ささやかな慰労(いろう)会を催した。", ko: "재해지에서 장기간의 구조 활동에 분주히 뛰어다닌 대원들의 노고를 치하하며 조촐한 위로회를 열었다." }]
  },
  {
    id: 2272, day: 21, level: "N2",
    word: "多忙", kana: "たぼう", pos: "な형용사",
    mean: "매우 바쁨",
    syn: ["忙しい"],
    collocations: [{ ja: "多忙な毎日", ko: "매우 바쁜 나날" }],
    examples: [{ type: "ex", label: "예문", ja: "ご多忙のところ、ありがとうございます。", ko: "바쁘신 와중에 감사합니다." }]
  },
  {
    id: 2273, day: 21, level: "N2",
    word: "のろい", kana: "のろい", pos: "い형용사",
    mean: "느리다, 굼뜨다",
    syn: ["遅い", "鈍い"],
    collocations: [{ ja: "動きがのろい", ko: "움직임이 굼뜨다" }],
    examples: [{ type: "ex", label: "예문", ja: "のろいバスにいらいらした。", ko: "느린 버스에 짜증이 났다." }]
  },
  {
    id: 2274, day: 21, level: "N2",
    word: "多様", kana: "たよう", pos: "な형용사",
    mean: "다양함",
    syn: ["様々な"],
    collocations: [{ ja: "多様な価値観", ko: "다양한 가치관" }],
    examples: [{ type: "ex", label: "예문", ja: "社会には多様な考え方がある。", ko: "사회에는 다양한 사고방식이 있다." }]
  },
  {
    id: 2275, day: 21, level: "N2",
    word: "単調", kana: "たんちょう", pos: "な형용사",
    mean: "단조로움",
    syn: ["退屈な"],
    collocations: [{ ja: "単調な作業", ko: "단조로운 작업" }],
    examples: [{ type: "ex", label: "예문", ja: "単調な毎日に飽きてしまった。", ko: "단조로운 일상에 질려 버렸다." }]
  },
  {
    id: 2276, day: 21, level: "N2",
    word: "久しい", kana: "ひさしい", pos: "い형용사",
    mean: "오래되다",
    syn: ["長い"],
    collocations: [{ ja: "久しく会わない", ko: "오랫동안 만나지 않다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の名前を聞かなくなって久しい。", ko: "그의 이름을 듣지 못한 지 오래되었다." }]
  },
  {
    id: 234, day: 21, level: "N2",
    word: "頼もしい", kana: "たのもしい", pos: "い형용사",
    mean: "믿음직스럽다, 든든하다",
    syn: ["心強い", "頼りになる"],
    collocations: [{ ja: "頼もしい味方", ko: "든든한 아군/지원군" }, { ja: "頼もしく成長する", ko: "믿음직스럽게 성장하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "入社当初は頼りなかった新入社員が、数々の現場経験を経て今や頼もしい中核メンバーに育った。", ko: "입사 초기에는 미덥지 못했던 신입사원이 수많은 현장 경험을 거쳐 이제는 든든한 핵심 멤버로 성장했다." }]
  },
  {
    id: 2277, day: 21, level: "N2",
    word: "ブーム", kana: "ブーム", pos: "외래어",
    mean: "붐, 유행 (boom)",
    syn: ["流行"],
    collocations: [{ ja: "ブームになる", ko: "붐이 일다" }],
    examples: [{ type: "ex", label: "예문", ja: "健康食品がブームになっている。", ko: "건강식품이 유행하고 있다." }]
  },
  {
    id: 2278, day: 21, level: "N2",
    word: "プライバシー", kana: "プライバシー", pos: "외래어",
    mean: "사생활 (privacy)",
    syn: ["私生活"],
    collocations: [{ ja: "プライバシーを守る", ko: "사생활을 보호하다" }],
    examples: [{ type: "ex", label: "예문", ja: "他人のプライバシーを侵害してはいけない。", ko: "남의 사생활을 침해해서는 안 된다." }]
  },
  {
    id: 102, day: 21, level: "N2",
    word: "ギャップ", kana: "ぎゃっぷ", pos: "외래어",
    mean: "격차, 괴리, 틈 (gap)",
    syn: ["ずれ", "隔たり"],
    collocations: [{ ja: "ギャップを埋める", ko: "격차/괴리를 메우다" }, { ja: "世代間のギャップ", ko: "세대 차이/세대 간 갭" }],
    examples: [{ type: "ex", label: "예문", ja: "入社前に抱いていた理想の仕事像と厳しい現場の現実とのギャップに悩み、葛藤を抱える新人が多い。", ko: "입사 전에 품었던 이상적인 업무상과 냉혹한 현장 현실과의 괴리에 고민하며 갈등을 겪는 신입이 많다." }]
  },
  {
    id: 2279, day: 21, level: "N2",
    word: "ひょっとすると", kana: "ひょっとすると", pos: "부사",
    mean: "어쩌면, 혹시",
    syn: ["もしかすると"],
    collocations: [{ ja: "ひょっとすると来るかもしれない", ko: "어쩌면 올지도 모른다" }],
    examples: [{ type: "ex", label: "예문", ja: "ひょっとすると、彼はもう知っているかもしれない。", ko: "어쩌면 그는 이미 알고 있을지도 모른다." }]
  },
  {
    id: 246, day: 21, level: "N2",
    word: "極めて", kana: "きわめて", pos: "부사",
    mean: "지극히, 대단히",
    syn: ["非常に", "とても"],
    collocations: [{ ja: "極めて重要だ", ko: "지극히 중요하다" }, { ja: "極めて遺憾だ", ko: "대단히 유감스럽다" }],
    examples: [{ type: "ex", label: "예문", ja: "突発的なセキュリティインシデントへの初動対応の遅れは、企業の存続に関わる極めて深刻な問題だ。", ko: "돌발적인 보안 사고에 대한 초동 대처 지연은 기업의 존속과 직결되는 지극히 심각한 문제이다." }]
  },
  {
    id: 2280, day: 21, level: "N2",
    word: "ふと", kana: "ふと", pos: "부사",
    mean: "문득",
    syn: ["急に"],
    collocations: [{ ja: "ふと思い出す", ko: "문득 떠올리다" }],
    examples: [{ type: "ex", label: "예문", ja: "ふと窓の外を見ると、雪が降っていた。", ko: "문득 창밖을 보니 눈이 내리고 있었다." }]
  },
  {
    id: 2281, day: 21, level: "N2",
    word: "普段", kana: "ふだん", pos: "부사",
    mean: "평소, 평상시",
    syn: ["いつも"],
    collocations: [{ ja: "普段通り", ko: "평소대로" }],
    examples: [{ type: "ex", label: "예문", ja: "普段はバスで通勤している。", ko: "평소에는 버스로 통근한다." }]
  },
  {
    id: 2282, day: 21, level: "N2",
    word: "ちらっと", kana: "ちらっと", pos: "부사 (의성어·의태어)",
    mean: "흘끗, 언뜻",
    syn: ["ちらりと"],
    collocations: [{ ja: "ちらっと見る", ko: "흘끗 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はちらっと時計を見た。", ko: "그는 흘끗 시계를 보았다." }]
  },
  {
    id: 2283, day: 21, level: "N2",
    word: "つるつる", kana: "つるつる", pos: "부사 (의성어·의태어)",
    mean: "매끈매끈, 미끌미끌",
    syn: ["滑らかな"],
    collocations: [{ ja: "つるつるの肌", ko: "매끈한 피부" }, { ja: "道がつるつるだ", ko: "길이 미끄럽다" }],
    examples: [{ type: "ex", label: "예문", ja: "凍った道がつるつるで危ない。", ko: "언 길이 미끌미끌해서 위험하다." }]
  },
  {
    id: 2284, day: 21, level: "N2",
    word: "〜化", kana: "か", pos: "접미어",
    mean: "~화 (~하게 됨)",
    syn: [],
    collocations: [{ ja: "国際化", ko: "국제화" }, { ja: "高齢化", ko: "고령화" }, { ja: "自由化", ko: "자유화" }],
    examples: []
  },
  {
    id: 2285, day: 21, level: "N2",
    word: "〜性", kana: "せい", pos: "접미어",
    mean: "~성 (성질)",
    syn: [],
    collocations: [{ ja: "安全性", ko: "안전성" }, { ja: "可能性", ko: "가능성" }, { ja: "重要性", ko: "중요성" }],
    examples: []
  },
  {
    id: 2286, day: 21, level: "N2",
    word: "恥", kana: "はじ", pos: "명사",
    mean: "부끄러움, 수치",
    syn: [],
    collocations: [{ ja: "恥をかく", ko: "창피를 당하다" }, { ja: "恥を知る", ko: "부끄러운 줄 알다" }],
    examples: [{ type: "ex", label: "예문", ja: "みんなの前で恥をかいた。", ko: "모두 앞에서 창피를 당했다." }]
  },
  {
    id: 2287, day: 21, level: "N2",
    word: "尊敬", kana: "そんけい", pos: "명사 (する동사)",
    mean: "존경",
    syn: ["敬う"],
    collocations: [{ ja: "先生を尊敬する", ko: "선생님을 존경하다" }, { ja: "尊敬語", ko: "존경어" }],
    examples: [{ type: "ex", label: "예문", ja: "両親を心から尊敬している。", ko: "부모님을 진심으로 존경한다." }]
  },
  {
    id: 2288, day: 21, level: "N2",
    word: "感謝", kana: "かんしゃ", pos: "명사 (する동사)",
    mean: "감사",
    syn: [],
    collocations: [{ ja: "感謝の気持ち", ko: "감사의 마음" }, { ja: "心から感謝する", ko: "진심으로 감사하다" }],
    examples: [{ type: "ex", label: "예문", ja: "皆様のご協力に感謝いたします。", ko: "여러분의 협조에 감사드립니다." }]
  },
  {
    id: 2289, day: 21, level: "N2",
    word: "謝罪", kana: "しゃざい", pos: "명사 (する동사)",
    mean: "사죄",
    syn: ["謝る", "詫びる"],
    collocations: [{ ja: "謝罪する", ko: "사죄하다" }, { ja: "謝罪会見", ko: "사과 기자 회견" }],
    examples: [{ type: "ex", label: "예문", ja: "会社は事故について正式に謝罪した。", ko: "회사는 사고에 대해 정식으로 사죄했다." }]
  },
  {
    id: 2290, day: 21, level: "N2",
    word: "反省", kana: "はんせい", pos: "명사 (する동사)",
    mean: "반성",
    syn: ["省みる"],
    collocations: [{ ja: "反省する", ko: "반성하다" }, { ja: "反省点", ko: "반성할 점" }],
    examples: [{ type: "ex", label: "예문", ja: "自分の行動を深く反省している。", ko: "자신의 행동을 깊이 반성하고 있다." }]
  },
  {
    id: 2291, day: 21, level: "N2",
    word: "後悔", kana: "こうかい", pos: "명사 (する동사)",
    mean: "후회",
    syn: ["悔やむ"],
    collocations: [{ ja: "後悔する", ko: "후회하다" }, { ja: "後悔先に立たず", ko: "후회해도 소용없다" }],
    examples: [{ type: "ex", label: "예문", ja: "あの時言わなかったことを後悔している。", ko: "그때 말하지 않은 것을 후회하고 있다." }]
  },
  {
    id: 264, day: 21, level: "N2",
    word: "孤立", kana: "こりつ", pos: "명사",
    mean: "고립",
    syn: ["一人ぼっち", "孤独"],
    collocations: [{ ja: "社会的な孤立", ko: "사회적 고립" }, { ja: "孤立無援", ko: "고립무원 (도움받을 데가 없음)" }],
    examples: [{ type: "on", label: "음독", ja: "高齢者の単身世帯が増加する中、地域社会から孤立してしまうことを未然に防ぐ見守りネットワークが急務だ。", ko: "고령자 독거 세대가 증가하는 가운데 지역 사회로부터 고립되는 것을 방지하는 돌봄 네트워크 구축이 급선무이다." }]
  },
  {
    id: 2292, day: 21, level: "N2",
    word: "変更", kana: "へんこう", pos: "명사 (する동사)",
    mean: "변경",
    syn: ["変える"],
    collocations: [{ ja: "予定を変更する", ko: "예정을 변경하다" }, { ja: "変更点", ko: "변경 사항" }],
    examples: [{ type: "ex", label: "예문", ja: "会議の時間が変更になった。", ko: "회의 시간이 변경되었다." }]
  },
  {
    id: 2293, day: 21, level: "N2",
    word: "修正", kana: "しゅうせい", pos: "명사 (する동사)",
    mean: "수정",
    syn: ["直す"],
    collocations: [{ ja: "計画を修正する", ko: "계획을 수정하다" }, { ja: "修正案", ko: "수정안" }],
    examples: [{ type: "ex", label: "예문", ja: "データの誤りを修正した。", ko: "데이터의 오류를 수정했다." }]
  },
  {
    id: 2294, day: 21, level: "N2",
    word: "訂正", kana: "ていせい", pos: "명사 (する동사)",
    mean: "정정",
    syn: ["直す"],
    collocations: [{ ja: "誤りを訂正する", ko: "잘못을 정정하다" }, { ja: "訂正記事", ko: "정정 기사" }],
    examples: [{ type: "ex", label: "예문", ja: "記事の内容を一部訂正します。", ko: "기사 내용을 일부 정정합니다." }]
  },
  {
    id: 2295, day: 21, level: "N2",
    word: "改正", kana: "かいせい", pos: "명사 (する동사)",
    mean: "개정",
    syn: [],
    collocations: [{ ja: "法律を改正する", ko: "법률을 개정하다" }, { ja: "改正案", ko: "개정안" }],
    examples: [{ type: "ex", label: "예문", ja: "来年、法律が改正される。", ko: "내년에 법률이 개정된다." }]
  },
  {
    id: 2296, day: 21, level: "N2",
    word: "改良", kana: "かいりょう", pos: "명사 (する동사)",
    mean: "개량",
    syn: ["改善"],
    collocations: [{ ja: "品種改良", ko: "품종 개량" }, { ja: "製品を改良する", ko: "제품을 개량하다" }],
    examples: [{ type: "ex", label: "예문", ja: "エンジンを改良して燃費をよくした。", ko: "엔진을 개량해 연비를 좋게 했다." }]
  },
  {
    id: 2297, day: 21, level: "N2",
    word: "調整", kana: "ちょうせい", pos: "명사 (する동사)",
    mean: "조정",
    syn: ["調節"],
    collocations: [{ ja: "日程を調整する", ko: "일정을 조정하다" }, { ja: "意見を調整する", ko: "의견을 조정하다" }],
    examples: [{ type: "ex", label: "예문", ja: "会議の日程を調整している。", ko: "회의 일정을 조정하고 있다." }]
  },
  {
    id: 269, day: 21, level: "N2",
    word: "焦点", kana: "しょうてん", pos: "명사",
    mean: "초점 (주의나 논의가 집중되는 점)",
    syn: ["中心点", "ピント"],
    collocations: [{ ja: "焦点を当てる", ko: "초점을 맞추다" }, { ja: "議論の焦点", ko: "논의의 핵심 초점" }],
    examples: [{ type: "on", label: "음독", ja: "今回の国会審議においては、増税の是非と社会保障費の配分が最大の焦点として激しく争われた。", ko: "이번 국회 심의에서는 증세의 찬반(시비)과 사회보장비 배분이 최대 초점으로서 치열하게 맞붙었다." }]
  },
  {
    id: 2298, day: 21, level: "N2",
    word: "調節", kana: "ちょうせつ", pos: "명사 (する동사)",
    mean: "조절",
    syn: ["調整"],
    collocations: [{ ja: "温度を調節する", ko: "온도를 조절하다" }],
    examples: [{ type: "ex", label: "예문", ja: "エアコンで室温を調節する。", ko: "에어컨으로 실내 온도를 조절한다." }]
  },
  {
    id: 2299, day: 21, level: "N2",
    word: "限界", kana: "げんかい", pos: "명사",
    mean: "한계",
    syn: [],
    collocations: [{ ja: "限界に達する", ko: "한계에 이르다" }, { ja: "体力の限界", ko: "체력의 한계" }],
    examples: [{ type: "ex", label: "예문", ja: "もう体力の限界だ。", ko: "이제 체력의 한계다." }]
  },
  {
    id: 2300, day: 21, level: "N2",
    word: "程度", kana: "ていど", pos: "명사",
    mean: "정도",
    syn: ["くらい"],
    collocations: [{ ja: "ある程度", ko: "어느 정도" }, { ja: "程度の差", ko: "정도의 차이" }],
    examples: [{ type: "ex", label: "예문", ja: "ある程度の経験が必要だ。", ko: "어느 정도의 경험이 필요하다." }]
  },
  {
    id: 2301, day: 21, level: "N2",
    word: "比率", kana: "ひりつ", pos: "명사",
    mean: "비율",
    syn: ["割合"],
    collocations: [{ ja: "男女の比率", ko: "남녀 비율" }],
    examples: [{ type: "ex", label: "예문", ja: "この会社は女性の比率が高い。", ko: "이 회사는 여성 비율이 높다." }]
  },
  {
    id: 2302, day: 21, level: "N2",
    word: "規模", kana: "きぼ", pos: "명사",
    mean: "규모",
    syn: ["スケール"],
    collocations: [{ ja: "大規模", ko: "대규모" }, { ja: "規模を拡大する", ko: "규모를 확대하다" }],
    examples: [{ type: "ex", label: "예문", ja: "今回の地震は規模が大きかった。", ko: "이번 지진은 규모가 컸다." }]
  },
  {
    id: 2303, day: 21, level: "N2",
    word: "基準", kana: "きじゅん", pos: "명사",
    mean: "기준",
    syn: ["標準"],
    collocations: [{ ja: "判断の基準", ko: "판단 기준" }, { ja: "基準を満たす", ko: "기준을 충족하다" }],
    examples: [{ type: "ex", label: "예문", ja: "安全基準を満たした製品だけを販売する。", ko: "안전 기준을 충족한 제품만 판매한다." }]
  },
  {
    id: 321, day: 21, level: "N2",
    word: "意向", kana: "いこう", pos: "명사",
    mean: "의향, 생각",
    syn: ["考え", "意思"],
    collocations: [{ ja: "意向を確認する", ko: "의향을 떠보다/확인하다" }, { ja: "本人の意向を尊重する", ko: "본인의 의사를 존중하다" }],
    examples: [{ type: "on", label: "음독", ja: "海外支社への転勤を打診する前に、本人のキャリア設計に関する意向を丁寧にヒアリングする。", ko: "해외 지사로의 전근을 타진하기 전에 본인의 커리어 설계에 관한 의향을 정중하게 청취한다." }]
  },
  {
    id: 2304, day: 21, level: "N2",
    word: "水準", kana: "すいじゅん", pos: "명사",
    mean: "수준",
    syn: ["レベル"],
    collocations: [{ ja: "生活水準", ko: "생활 수준" }, { ja: "高い水準", ko: "높은 수준" }],
    examples: [{ type: "ex", label: "예문", ja: "この国の教育水準は高い。", ko: "이 나라의 교육 수준은 높다." }]
  },
  {
    id: 2305, day: 21, level: "N2",
    word: "標準", kana: "ひょうじゅん", pos: "명사",
    mean: "표준",
    syn: ["基準"],
    collocations: [{ ja: "標準語", ko: "표준어" }, { ja: "標準的な", ko: "표준적인" }],
    examples: [{ type: "ex", label: "예문", ja: "これは標準的なサイズだ。", ko: "이것은 표준 사이즈다." }]
  },
  {
    id: 2306, day: 21, level: "N1",
    word: "存続", kana: "そんぞく", pos: "명사 (する동사)",
    mean: "존속",
    syn: ["続く"],
    collocations: [{ ja: "会社の存続", ko: "회사의 존속" }],
    examples: [{ type: "ex", label: "예문", ja: "赤字が続き、店の存続が危ぶまれている。", ko: "적자가 계속되어 가게의 존속이 위태롭다." }]
  },
  {
    id: 168, day: 21, level: "N1",
    word: "シナリオ", kana: "しなりお", pos: "외래어",
    mean: "시나리오, 예상 각본 (scenario)",
    syn: ["筋書き", "台本"],
    collocations: [{ ja: "最悪のシナリオ", ko: "최악의 시나리오" }, { ja: "シナリオを描く", ko: "시나리오를 구상하다" }],
    examples: [{ type: "ex", label: "예문", ja: "激動する国際情勢を睨みながら、最悪の危機的シナリオを想定した対応マニュアルを策定する。", ko: "격동하는 국제 정세를 주시하면서 최악의 위기적 시나리오를 상정한 대응 매뉴얼을 책정하다." }]
  },
  {
    id: 2307, day: 21, level: "N1",
    word: "多角的", kana: "たかくてき", pos: "な형용사",
    mean: "다각적",
    syn: ["多面的な"],
    collocations: [{ ja: "多角的に検討する", ko: "다각적으로 검토하다" }],
    examples: [{ type: "ex", label: "예문", ja: "問題を多角的に分析する。", ko: "문제를 다각적으로 분석한다." }]
  },
  {
    id: 173, day: 21, level: "N1",
    word: "とりわけ", kana: "とりわけ", pos: "부사",
    mean: "특히, 유난히",
    syn: ["特に", "ことに"],
    collocations: [{ ja: "とりわけ重要だ", ko: "유난히/특히 중요하다" }, { ja: "とりわけ目立つ", ko: "특히 두드러지다" }],
    examples: [{ type: "ex", label: "예문", ja: "現代社会が直面する数多くの深刻な課題の中でも、とりわけ急速な少子化への対策は急務である。", ko: "현대 사회가 직면한 수많은 심각한 과제 중에서도 특히 급속한 저출산 대책은 급선무이다." }]
  },
  {
    id: 2308, day: 21, level: "N1",
    word: "脱却", kana: "だっきゃく", pos: "명사 (する동사)",
    mean: "탈피",
    syn: ["抜け出す"],
    collocations: [{ ja: "不況から脱却する", ko: "불황에서 탈피하다" }],
    examples: [{ type: "ex", label: "예문", ja: "古い考え方から脱却する必要がある。", ko: "낡은 사고방식에서 벗어날 필요가 있다." }]
  },
  {
    id: 2309, day: 21, level: "N1",
    word: "多岐", kana: "たき", pos: "명사",
    mean: "다방면, 여러 갈래",
    syn: ["様々"],
    collocations: [{ ja: "多岐にわたる", ko: "여러 방면에 걸치다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の研究は多岐にわたっている。", ko: "그의 연구는 여러 분야에 걸쳐 있다." }]
  },
  {
    id: 174, day: 21, level: "N1",
    word: "ひたすら", kana: "ひたすら", pos: "부사",
    mean: "오로지, 한결같이",
    syn: ["一心に", "ただただ"],
    collocations: [{ ja: "ひたすら祈る", ko: "오로지 한결같이 기도하다" }, { ja: "ひたすら努力する", ko: "오직 묵묵히 노력하다" }],
    examples: [{ type: "ex", label: "예문", ja: "周囲の雑音や世間の評価に惑わされることなく、ひたすら目の前の一問一問に集中して筆を走らせた。", ko: "주변의 잡음이나 세간의 평가에 현혹되지 않고 오로지 눈앞의 한 문제 한 문제에 집중하며 펜을 놀렸다." }]
  },
  {
    id: 2310, day: 21, level: "N1",
    word: "探求", kana: "たんきゅう", pos: "명사 (する동사)",
    mean: "탐구",
    syn: ["追究"],
    collocations: [{ ja: "真理を探求する", ko: "진리를 탐구하다" }],
    examples: [{ type: "ex", label: "예문", ja: "未知の世界を探求する。", ko: "미지의 세계를 탐구한다." }]
  },
  // ==========================================
  // [DAY 22] N2 필수 + N1 · 59개
  // ==========================================
  {
    id: 2311, day: 22, level: "N2",
    word: "ほほえむ", kana: "ほほえむ", pos: "동사 (자동사)",
    mean: "미소 짓다",
    syn: ["笑う"],
    collocations: [{ ja: "優しくほほえむ", ko: "다정하게 미소 짓다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女は何も言わずにほほえんだ。", ko: "그녀는 아무 말 없이 미소 지었다." }]
  },
  {
    id: 2312, day: 22, level: "N2",
    word: "褒める", kana: "ほめる", pos: "동사 (타동사)",
    mean: "칭찬하다",
    syn: ["称賛する"],
    collocations: [{ ja: "子どもを褒める", ko: "아이를 칭찬하다" }],
    examples: [{ type: "ex", label: "예문", ja: "先生に作文を褒められた。", ko: "선생님께 작문을 칭찬받았다." }]
  },
  {
    id: 2313, day: 22, level: "N2",
    word: "撒く", kana: "まく", pos: "동사 (타동사)",
    mean: "뿌리다",
    syn: [],
    collocations: [{ ja: "水を撒く", ko: "물을 뿌리다" }, { ja: "種を撒く", ko: "씨를 뿌리다" }],
    examples: [{ type: "ex", label: "예문", ja: "庭に水を撒いた。", ko: "마당에 물을 뿌렸다." }]
  },
  {
    id: 2314, day: 22, level: "N2",
    word: "巻く", kana: "まく", pos: "동사 (타동사)",
    mean: "감다, 말다",
    syn: [],
    collocations: [{ ja: "包帯を巻く", ko: "붕대를 감다" }, { ja: "ねじを巻く", ko: "태엽을 감다" }],
    examples: [{ type: "ex", label: "예문", ja: "けがをした指に包帯を巻いた。", ko: "다친 손가락에 붕대를 감았다." }]
  },
  {
    id: 2315, day: 22, level: "N2",
    word: "またがる", kana: "またがる", pos: "동사 (자동사)",
    mean: "올라타다, 걸치다",
    syn: ["渡る"],
    collocations: [{ ja: "馬にまたがる", ko: "말에 올라타다" }, { ja: "二県にまたがる", ko: "두 현에 걸치다" }],
    examples: [{ type: "ex", label: "예문", ja: "この山は二つの県にまたがっている。", ko: "이 산은 두 현에 걸쳐 있다." }]
  },
  {
    id: 223, day: 22, level: "N2",
    word: "控える", kana: "ひかえる", pos: "동사 (1단 자/타동사)",
    mean: "삼가다, 앞두다, 적어두다",
    syn: ["待機する", "控えめにする"],
    collocations: [{ ja: "発言を控える", ko: "공식 발언을 삼가다" }, { ja: "本番を控える", ko: "실전(본무대)을 눈앞에 앞두다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "健康診断を翌朝に控えているため、今夜は脂っこい食事や飲酒を固く控えてください。", ko: "건강검진을 다음 날 아침에 앞두고 있으므로 오늘 밤은 기름진 식사나 음주를 굳게 삼가 주십시오." }],
    polysemy: [
      { def: "① (행동·수량·발언 등을) 억제하다, 삼가다", ja: "公の場での軽率な個人的意見の表明は、事態が収束するまで差し控えるべきだ。", ko: "공적인 자리에서의 경솔한 사적 의견 표명은 사태가 수습될 때까지 삼가야 한다." },
      { def: "② 중요한 일정·시기나 장소를 바로 눈앞에 두다", ja: "人生の大きな岐路となる国家試験の最終選考を目前に控えて、緊張が高まる。", ko: "인생의 큰 갈림길이 되는 국가시험 최종 선발을 목전에 앞두고 긴장이 고조된다." },
      { def: "③ 잊지 않도록 수첩이나 종이에 간략히 적어두다", ja: "相手が口頭で伝えてきた重要な電話番号や連絡先を、手帳の余白に手早く控えた。", ko: "상대방이 구두로 전해온 중요한 전화번호와 연락처를 수첩 여백에 재빨리 적어두었다." }
    ]
  },
  {
    id: 2316, day: 22, level: "N2",
    word: "真似る", kana: "まねる", pos: "동사 (타동사)",
    mean: "흉내 내다, 모방하다",
    syn: ["まねする", "模倣する"],
    collocations: [{ ja: "声を真似る", ko: "목소리를 흉내 내다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもは親の行動を真似る。", ko: "아이는 부모의 행동을 흉내 낸다." }]
  },
  {
    id: 2317, day: 22, level: "N2",
    word: "回す", kana: "まわす", pos: "동사 (타동사)",
    mean: "돌리다",
    syn: [],
    collocations: [{ ja: "ハンドルを回す", ko: "핸들을 돌리다" }, { ja: "資料を回す", ko: "자료를 돌리다" }],
    examples: [{ type: "ex", label: "예문", ja: "会議の資料を全員に回してください。", ko: "회의 자료를 전원에게 돌려 주세요." }]
  },
  {
    id: 2318, day: 22, level: "N2",
    word: "見かける", kana: "みかける", pos: "동사 (타동사)",
    mean: "눈에 띄다, 보다",
    syn: ["見る"],
    collocations: [{ ja: "よく見かける", ko: "자주 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "最近、この辺りで外国人をよく見かける。", ko: "요즘 이 근처에서 외국인을 자주 본다." }]
  },
  {
    id: 2319, day: 22, level: "N2",
    word: "見つめる", kana: "みつめる", pos: "동사 (타동사)",
    mean: "응시하다",
    syn: ["じっと見る"],
    collocations: [{ ja: "顔を見つめる", ko: "얼굴을 응시하다" }, { ja: "現実を見つめる", ko: "현실을 직시하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女はじっと窓の外を見つめていた。", ko: "그녀는 가만히 창밖을 응시하고 있었다." }]
  },
  {
    id: 2320, day: 22, level: "N2",
    word: "見習う", kana: "みならう", pos: "동사 (타동사)",
    mean: "본받다, 견습하다",
    syn: ["手本にする"],
    collocations: [{ ja: "先輩を見習う", ko: "선배를 본받다" }],
    examples: [{ type: "ex", label: "예문", ja: "兄を見習って、毎朝早く起きるようにした。", ko: "형을 본받아 매일 아침 일찍 일어나기로 했다." }]
  },
  {
    id: 224, day: 22, level: "N2",
    word: "兼ねる", kana: "かねる", pos: "동사 (1단 타동사)",
    mean: "겸하다, ~하기 어렵다",
    syn: ["併せ持つ", "〜しにくい"],
    collocations: [{ ja: "実益を兼ねる", ko: "실익을 겸하다" }, { ja: "決めかねる", ko: "결정하기 어려워하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "健康維持の運動と日々の通勤を兼ねて、毎朝三十分の道のりを歩くことにした。", ko: "건강 유지 운동과 매일의 출퇴근을 겸하여 매일 아침 30분 거리를 걷기로 했다." }, { type: "on", label: "음독", ja: "複数の事業部門を一人で統括するため、彼が営業本部長と開発部長を兼任(けんにん)する。", ko: "여러 사업 부문을 혼자서 통괄하기 위해 그가 영업본부장과 개발부장을 겸임한다." }]
  },
  {
    id: 2321, day: 22, level: "N2",
    word: "着実", kana: "ちゃくじつ", pos: "な형용사",
    mean: "착실함, 견실함",
    syn: ["確実な"],
    collocations: [{ ja: "着実な成長", ko: "착실한 성장" }],
    examples: [{ type: "ex", label: "예문", ja: "毎日少しずつ着実に進めている。", ko: "매일 조금씩 착실하게 진행하고 있다." }]
  },
  {
    id: 2322, day: 22, level: "N2",
    word: "適切", kana: "てきせつ", pos: "な형용사",
    mean: "적절함",
    syn: ["ふさわしい"],
    collocations: [{ ja: "適切な判断", ko: "적절한 판단" }],
    examples: [{ type: "ex", label: "예문", ja: "状況に応じて適切に対処する。", ko: "상황에 따라 적절히 대처한다." }]
  },
  {
    id: 2323, day: 22, level: "N2",
    word: "平たい", kana: "ひらたい", pos: "い형용사",
    mean: "평평하다, 쉽다",
    syn: ["平らな", "分かりやすい"],
    collocations: [{ ja: "平たい皿", ko: "납작한 접시" }, { ja: "平たく言えば", ko: "쉽게 말하면" }],
    examples: [{ type: "ex", label: "예문", ja: "平たく言えば、もっと努力しろということだ。", ko: "쉽게 말하면 더 노력하라는 것이다." }]
  },
  {
    id: 2324, day: 22, level: "N2",
    word: "適度", kana: "てきど", pos: "な형용사",
    mean: "적당함",
    syn: ["ほどよい"],
    collocations: [{ ja: "適度な運動", ko: "적당한 운동" }],
    examples: [{ type: "ex", label: "예문", ja: "健康のために適度な運動をしよう。", ko: "건강을 위해 적당한 운동을 하자." }]
  },
  {
    id: 2325, day: 22, level: "N2",
    word: "見苦しい", kana: "みぐるしい", pos: "い형용사",
    mean: "보기 흉하다, 꼴사납다",
    syn: ["みっともない"],
    collocations: [{ ja: "見苦しい言い訳", ko: "구차한 변명" }],
    examples: [{ type: "ex", label: "예문", ja: "負けてから言い訳するのは見苦しい。", ko: "진 뒤에 변명하는 것은 꼴사납다." }]
  },
  {
    id: 235, day: 22, level: "N2",
    word: "素っ気ない", kana: "そっけない", pos: "い형용사",
    mean: "무뚝뚝하다, 쌀쌀맞다, 인정머리 없다",
    syn: ["冷淡", "無愛想"],
    collocations: [{ ja: "素っ気ない返事", ko: "퉁명스러운 대답" }, { ja: "素っ気ない態度", ko: "쌀쌀맞은 태도" }],
    examples: [{ type: "kun", label: "훈독", ja: "親身になって今後の相談を持ちかけたにもかかわらず、相手は「勝手にすれば」と素っ気なく答えた。", ko: "진심으로 향후 상담을 요청했음에도 불구하고 상대는 '알아서 해'라며 쌀쌀맞게 대답했다." }]
  },
  {
    id: 2326, day: 22, level: "N2",
    word: "プライド", kana: "プライド", pos: "외래어",
    mean: "자존심 (pride)",
    syn: ["自尊心", "誇り"],
    collocations: [{ ja: "プライドが高い", ko: "자존심이 세다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はプライドが傷ついたようだ。", ko: "그는 자존심이 상한 것 같다." }]
  },
  {
    id: 2327, day: 22, level: "N2",
    word: "ブランド", kana: "ブランド", pos: "외래어",
    mean: "브랜드, 상표 (brand)",
    syn: ["銘柄"],
    collocations: [{ ja: "有名ブランド", ko: "유명 브랜드" }],
    examples: [{ type: "ex", label: "예문", ja: "ブランド品に興味はない。", ko: "명품에는 관심이 없다." }]
  },
  {
    id: 2328, day: 22, level: "N2",
    word: "ベテラン", kana: "ベテラン", pos: "외래어",
    mean: "베테랑, 숙련자 (veteran)",
    syn: ["熟練者"],
    collocations: [{ ja: "ベテランの教師", ko: "베테랑 교사" }],
    examples: [{ type: "ex", label: "예문", ja: "この道三十年のベテランだ。", ko: "이 분야 30년의 베테랑이다." }]
  },
  {
    id: 2329, day: 22, level: "N2",
    word: "別に", kana: "べつに", pos: "부사",
    mean: "별로, 특별히 (~않다)",
    syn: ["特に"],
    collocations: [{ ja: "別に用はない", ko: "특별히 볼일은 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "別に怒っているわけではない。", ko: "딱히 화난 것은 아니다." }]
  },
  {
    id: 2330, day: 22, level: "N2",
    word: "前もって", kana: "まえもって", pos: "부사",
    mean: "미리",
    syn: ["あらかじめ", "事前に"],
    collocations: [{ ja: "前もって知らせる", ko: "미리 알리다" }],
    examples: [{ type: "ex", label: "예문", ja: "変更がある場合は前もってお知らせします。", ko: "변경이 있을 경우에는 미리 알려 드리겠습니다." }]
  },
  {
    id: 2331, day: 22, level: "N2",
    word: "まさか", kana: "まさか", pos: "부사",
    mean: "설마",
    syn: ["よもや"],
    collocations: [{ ja: "まさかの事態", ko: "뜻밖의 사태" }],
    examples: [{ type: "ex", label: "예문", ja: "まさか彼が犯人だとは思わなかった。", ko: "설마 그가 범인일 줄은 몰랐다." }]
  },
  {
    id: 2332, day: 22, level: "N2",
    word: "真っ先に", kana: "まっさきに", pos: "부사",
    mean: "맨 먼저",
    syn: ["最初に"],
    collocations: [{ ja: "真っ先に駆けつける", ko: "맨 먼저 달려가다" }],
    examples: [{ type: "ex", label: "예문", ja: "合格を真っ先に母に知らせた。", ko: "합격을 맨 먼저 어머니께 알렸다." }]
  },
  {
    id: 2333, day: 22, level: "N2",
    word: "どっと", kana: "どっと", pos: "부사 (의성어·의태어)",
    mean: "와 (한꺼번에), 왈칵",
    syn: ["一度に"],
    collocations: [{ ja: "どっと笑う", ko: "와 하고 웃다" }, { ja: "疲れがどっと出る", ko: "피로가 한꺼번에 몰려오다" }],
    examples: [{ type: "ex", label: "예문", ja: "試験が終わって疲れがどっと出た。", ko: "시험이 끝나자 피로가 한꺼번에 몰려왔다." }]
  },
  {
    id: 2334, day: 22, level: "N2",
    word: "さて", kana: "さて", pos: "접속사",
    mean: "그런데, 그럼 (화제 전환)",
    syn: ["ところで"],
    collocations: [{ ja: "さて", ko: "그럼" }],
    examples: [{ type: "ex", label: "예문", ja: "さて、次の議題に移りましょう。", ko: "그럼 다음 의제로 넘어갑시다." }]
  },
  {
    id: 2335, day: 22, level: "N2",
    word: "〜的", kana: "てき", pos: "접미어",
    mean: "~적 (~한 성질의)",
    syn: [],
    collocations: [{ ja: "積極的", ko: "적극적" }, { ja: "具体的", ko: "구체적" }, { ja: "一時的", ko: "일시적" }],
    examples: []
  },
  {
    id: 2336, day: 22, level: "N2",
    word: "気候", kana: "きこう", pos: "명사",
    mean: "기후",
    syn: [],
    collocations: [{ ja: "温暖な気候", ko: "온난한 기후" }, { ja: "気候変動", ko: "기후 변동" }],
    examples: [{ type: "ex", label: "예문", ja: "この地域は一年中穏やかな気候だ。", ko: "이 지역은 일 년 내내 온화한 기후다." }]
  },
  {
    id: 2337, day: 22, level: "N2",
    word: "気温", kana: "きおん", pos: "명사",
    mean: "기온",
    syn: [],
    collocations: [{ ja: "気温が上がる", ko: "기온이 오르다" }, { ja: "最高気温", ko: "최고 기온" }],
    examples: [{ type: "ex", label: "예문", ja: "今日の最高気温は三十五度だ。", ko: "오늘 최고 기온은 35도다." }]
  },
  {
    id: 2338, day: 22, level: "N2",
    word: "湿度", kana: "しつど", pos: "명사",
    mean: "습도",
    syn: [],
    collocations: [{ ja: "湿度が高い", ko: "습도가 높다" }],
    examples: [{ type: "ex", label: "예문", ja: "梅雨は湿度が高くて蒸し暑い。", ko: "장마철은 습도가 높아서 무덥다." }]
  },
  {
    id: 2339, day: 22, level: "N2",
    word: "天候", kana: "てんこう", pos: "명사",
    mean: "날씨, 기상",
    syn: ["天気"],
    collocations: [{ ja: "天候に恵まれる", ko: "날씨가 좋다" }, { ja: "悪天候", ko: "악천후" }],
    examples: [{ type: "ex", label: "예문", ja: "天候が悪いため、試合は延期になった。", ko: "날씨가 나빠서 시합은 연기되었다." }]
  },
  {
    id: 325, day: 22, level: "N2",
    word: "運営", kana: "うんえい", pos: "명사",
    mean: "운영 (모임이나 조직을 굴려 나감)",
    syn: ["管理", "経営"],
    collocations: [{ ja: "組織を運営する", ko: "조직을 운영하다" }, { ja: "円滑な運営", ko: "원활한 운영" }],
    examples: [{ type: "on", label: "음독", ja: "国際会議を滞りなく成功させるため、ボランティアスタッフ全員が密接に連携して会場の円滑な運営に努めた。", ko: "국제회의를 차질 없이 성공시키기 위해 자원봉사 스태프 전원이 긴밀히 연계하여 행사장의 원활한 운영에 힘썼다." }]
  },
  {
    id: 2340, day: 22, level: "N2",
    word: "梅雨", kana: "つゆ", pos: "명사",
    mean: "장마",
    syn: [],
    collocations: [{ ja: "梅雨入り", ko: "장마 시작" }, { ja: "梅雨明け", ko: "장마 끝" }],
    examples: [{ type: "ex", label: "예문", ja: "今年は梅雨明けが遅い。", ko: "올해는 장마가 늦게 끝난다." }]
  },
  {
    id: 2341, day: 22, level: "N2",
    word: "地震", kana: "じしん", pos: "명사",
    mean: "지진",
    syn: [],
    collocations: [{ ja: "地震が起きる", ko: "지진이 일어나다" }, { ja: "地震に備える", ko: "지진에 대비하다" }],
    examples: [{ type: "ex", label: "예문", ja: "昨夜、大きな地震があった。", ko: "어젯밤 큰 지진이 있었다." }]
  },
  {
    id: 2342, day: 22, level: "N2",
    word: "津波", kana: "つなみ", pos: "명사",
    mean: "해일, 쓰나미",
    syn: [],
    collocations: [{ ja: "津波警報", ko: "해일 경보" }],
    examples: [{ type: "ex", label: "예문", ja: "地震の後は津波に注意してください。", ko: "지진 후에는 해일에 주의하세요." }]
  },
  {
    id: 2343, day: 22, level: "N2",
    word: "噴火", kana: "ふんか", pos: "명사 (する동사)",
    mean: "분화",
    syn: [],
    collocations: [{ ja: "火山が噴火する", ko: "화산이 분화하다" }],
    examples: [{ type: "ex", label: "예문", ja: "火山が噴火して、空が灰色になった。", ko: "화산이 분화해서 하늘이 잿빛이 되었다." }]
  },
  {
    id: 2344, day: 22, level: "N2",
    word: "洪水", kana: "こうずい", pos: "명사",
    mean: "홍수",
    syn: [],
    collocations: [{ ja: "洪水が起こる", ko: "홍수가 나다" }, { ja: "洪水の被害", ko: "홍수 피해" }],
    examples: [{ type: "ex", label: "예문", ja: "大雨で川が氾濫し、洪水が起きた。", ko: "폭우로 강이 범람해 홍수가 일어났다." }]
  },
  {
    id: 2345, day: 22, level: "N2",
    word: "雷", kana: "かみなり", pos: "명사",
    mean: "천둥, 번개",
    syn: [],
    collocations: [{ ja: "雷が鳴る", ko: "천둥이 치다" }, { ja: "雷が落ちる", ko: "벼락이 떨어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "雷が鳴ったので、急いで家に帰った。", ko: "천둥이 쳐서 서둘러 집에 돌아왔다." }]
  },
  {
    id: 2346, day: 22, level: "N2",
    word: "日光", kana: "にっこう", pos: "명사",
    mean: "햇빛",
    syn: ["日差し"],
    collocations: [{ ja: "日光に当てる", ko: "햇볕에 쬐다" }, { ja: "直射日光", ko: "직사광선" }],
    examples: [{ type: "ex", label: "예문", ja: "この薬は直射日光を避けて保管してください。", ko: "이 약은 직사광선을 피해 보관해 주세요." }]
  },
  {
    id: 327, day: 22, level: "N2",
    word: "改革", kana: "かいかく", pos: "명사",
    mean: "개혁 (기존 제도를 뜯어고침)",
    syn: ["変革", "見直し"],
    collocations: [{ ja: "構造改革", ko: "구조 개혁" }, { ja: "改革を断行する", ko: "개혁을 단행하다" }],
    examples: [{ type: "on", label: "음독", ja: "硬直化した社内秩序を一新し激しい市場競争を生き抜くため、新社長は大胆な組織改革を断行した。", ko: "경직된 사내 질서를 일신하고 치열한 시장 경쟁에서 살아남기 위해 신임 사장은 과감한 조직 개혁을 단행했다." }]
  },
  {
    id: 2347, day: 22, level: "N2",
    word: "紫外線", kana: "しがいせん", pos: "명사",
    mean: "자외선",
    syn: [],
    collocations: [{ ja: "紫外線を浴びる", ko: "자외선을 쬐다" }, { ja: "紫外線対策", ko: "자외선 대책" }],
    examples: [{ type: "ex", label: "예문", ja: "夏は紫外線が強いので帽子をかぶる。", ko: "여름은 자외선이 강해서 모자를 쓴다." }]
  },
  {
    id: 2348, day: 22, level: "N2",
    word: "酸素", kana: "さんそ", pos: "명사",
    mean: "산소",
    syn: [],
    collocations: [{ ja: "酸素が足りない", ko: "산소가 부족하다" }],
    examples: [{ type: "ex", label: "예문", ja: "植物は光合成で酸素を作る。", ko: "식물은 광합성으로 산소를 만든다." }]
  },
  {
    id: 2349, day: 22, level: "N2",
    word: "物質", kana: "ぶっしつ", pos: "명사",
    mean: "물질",
    syn: [],
    collocations: [{ ja: "有害物質", ko: "유해 물질" }, { ja: "化学物質", ko: "화학 물질" }],
    examples: [{ type: "ex", label: "예문", ja: "この製品には有害な物質が含まれていない。", ko: "이 제품에는 유해 물질이 포함되어 있지 않다." }]
  },
  {
    id: 2350, day: 22, level: "N2",
    word: "成分", kana: "せいぶん", pos: "명사",
    mean: "성분",
    syn: ["要素"],
    collocations: [{ ja: "主な成分", ko: "주성분" }, { ja: "成分表示", ko: "성분 표시" }],
    examples: [{ type: "ex", label: "예문", ja: "この薬の成分を確認する。", ko: "이 약의 성분을 확인한다." }]
  },
  {
    id: 2351, day: 22, level: "N2",
    word: "原料", kana: "げんりょう", pos: "명사",
    mean: "원료",
    syn: ["材料"],
    collocations: [{ ja: "原料を輸入する", ko: "원료를 수입하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この菓子の原料は米だ。", ko: "이 과자의 원료는 쌀이다." }]
  },
  {
    id: 2352, day: 22, level: "N2",
    word: "材料", kana: "ざいりょう", pos: "명사",
    mean: "재료",
    syn: ["素材"],
    collocations: [{ ja: "料理の材料", ko: "요리 재료" }, { ja: "材料をそろえる", ko: "재료를 갖추다" }],
    examples: [{ type: "ex", label: "예문", ja: "ケーキの材料を買いに行った。", ko: "케이크 재료를 사러 갔다." }]
  },
  {
    id: 329, day: 22, level: "N2",
    word: "規制", kana: "きせい", pos: "명사",
    mean: "규제 (규칙으로 행동을 제한함)",
    syn: ["制限", "取り締まり"],
    collocations: [{ ja: "規制を緩和する", ko: "규제를 완화하다" }, { ja: "規制を強化する", ko: "규제를 엄격히 조이다" }],
    examples: [{ type: "on", label: "음독", ja: "個人情報の乱用を防ぎ消費者の権利を保護するため、政府は巨大IT企業に対する法的規制を段階的に強化した。", ko: "개인정보 남용을 방지하고 소비자 권리를 보호하기 위해 정부는 거대 IT 기업에 대한 법적 규제를 단계적으로 강화했다." }]
  },
  {
    id: 2353, day: 22, level: "N2",
    word: "素材", kana: "そざい", pos: "명사",
    mean: "소재",
    syn: ["材料"],
    collocations: [{ ja: "天然素材", ko: "천연 소재" }, { ja: "素材を生かす", ko: "소재를 살리다" }],
    examples: [{ type: "ex", label: "예문", ja: "素材の味を生かした料理だ。", ko: "재료 본연의 맛을 살린 요리다." }]
  },
  {
    id: 2354, day: 22, level: "N2",
    word: "燃料", kana: "ねんりょう", pos: "명사",
    mean: "연료",
    syn: [],
    collocations: [{ ja: "燃料を補給する", ko: "연료를 보급하다" }, { ja: "燃料費", ko: "연료비" }],
    examples: [{ type: "ex", label: "예문", ja: "飛行機は燃料を補給してから出発した。", ko: "비행기는 연료를 보급하고 나서 출발했다." }]
  },
  {
    id: 2355, day: 22, level: "N2",
    word: "電力", kana: "でんりょく", pos: "명사",
    mean: "전력",
    syn: [],
    collocations: [{ ja: "電力を消費する", ko: "전력을 소비하다" }, { ja: "電力不足", ko: "전력 부족" }],
    examples: [{ type: "ex", label: "예문", ja: "夏は電力の消費量が増える。", ko: "여름에는 전력 소비량이 는다." }]
  },
  {
    id: 176, day: 22, level: "N1",
    word: "いかに", kana: "いかに", pos: "부사",
    mean: "어떻게, 얼마나, 아무리 (~ても 호응)",
    syn: ["どれほど", "どんなに"],
    collocations: [{ ja: "いかに〜ても", ko: "아무리 ~라 해도" }, { ja: "いかに効率よく", ko: "어떻게 효율적으로" }],
    examples: [{ type: "ex", label: "예문", ja: "いかに過酷な条件が重なろうとも、最後まで諦めずに打開策を模索し続ける姿勢が勝敗を分ける。", ko: "아무리 혹독한 조건이 겹친다 하더라도 끝까지 포기하지 않고 타개책을 계속 모색하는 태도가 승패를 가른다." }]
  },
  {
    id: 2356, day: 22, level: "N1",
    word: "短縮", kana: "たんしゅく", pos: "명사 (する동사)",
    mean: "단축",
    syn: ["縮める"],
    collocations: [{ ja: "時間を短縮する", ko: "시간을 단축하다" }, { ja: "労働時間の短縮", ko: "노동 시간 단축" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい道路で移動時間が短縮された。", ko: "새 도로로 이동 시간이 단축되었다." }]
  },
  {
    id: 2357, day: 22, level: "N1",
    word: "着手", kana: "ちゃくしゅ", pos: "명사 (する동사)",
    mean: "착수",
    syn: ["取り掛かる"],
    collocations: [{ ja: "工事に着手する", ko: "공사에 착수하다" }],
    examples: [{ type: "ex", label: "예문", ja: "市は新しい図書館の建設に着手した。", ko: "시는 새 도서관 건설에 착수했다." }]
  },
  {
    id: 178, day: 22, level: "N1",
    word: "おのずと", kana: "おのずと", pos: "부사",
    mean: "자연히, 저절로",
    syn: ["自然に", "ひとりでに"],
    collocations: [{ ja: "おのずと明らかになる", ko: "자연히 분명해지다" }, { ja: "おのずと身につく", ko: "저절로 몸에 배다" }],
    examples: [{ type: "ex", label: "예문", ja: "正しい文法と語彙の基礎を反復して身につければ、長文読解のスピードはおのずと上がってくるものだ。", ko: "올바른 문법과 어휘의 기초를 반복하여 체득하면 장문 독해 속도는 자연히 올라오는 법이다." }]
  },
  {
    id: 2358, day: 22, level: "N1",
    word: "調達", kana: "ちょうたつ", pos: "명사 (する동사)",
    mean: "조달",
    syn: ["集める"],
    collocations: [{ ja: "資金を調達する", ko: "자금을 조달하다" }],
    examples: [{ type: "ex", label: "예문", ja: "材料を海外から調達している。", ko: "재료를 해외에서 조달하고 있다." }]
  },
  {
    id: 188, day: 22, level: "N1",
    word: "脅威", kana: "きょうい", pos: "명사",
    mean: "위협",
    syn: ["脅かすもの", "恐怖"],
    collocations: [{ ja: "脅威にさらされる", ko: "위협에 노출되다" }, { ja: "深刻な脅威", ko: "심각한 위협" }],
    examples: [{ type: "on", label: "음독", ja: "地球温暖化がもたらす未曾有の気候変動は、今や全人類の生存基盤を揺るがす最大の脅威となっている。", ko: "지구 온난화가 가져오는 미증유의 기후변화는 이제 전 인류의 생존 기반을 뒤흔드는 최대의 위협이 되고 있다." }]
  },
  {
    id: 2359, day: 22, level: "N1",
    word: "低迷", kana: "ていめい", pos: "명사 (する동사)",
    mean: "침체",
    syn: ["伸び悩む"],
    collocations: [{ ja: "景気が低迷する", ko: "경기가 침체되다" }],
    examples: [{ type: "ex", label: "예문", ja: "売り上げが長く低迷している。", ko: "매출이 오랫동안 침체되어 있다." }]
  },
  {
    id: 190, day: 22, level: "N1",
    word: "根底", kana: "こんてい", pos: "명사",
    mean: "근저, 밑바탕",
    syn: ["根本", "土台"],
    collocations: [{ ja: "根底から覆す", ko: "뿌리째(근저부터) 뒤집다" }, { ja: "根底にある思想", ko: "밑바탕에 깔린 사상" }],
    examples: [{ type: "on", label: "음독", ja: "長年の信頼関係を根底から覆しかねない不祥事が発生し、組織全体が厳しい批判に晒されている。", ko: "오랜 신뢰 관계를 밑바탕부터 뒤집어 버릴 수 있는 불미스러운 사건이 발생하여 조직 전체가 거센 비판에 직면해 있다." }]
  },
  // ==========================================
  // [DAY 23] N2 필수 + N1 · 64개
  // ==========================================
  {
    id: 2360, day: 23, level: "N2",
    word: "見舞う", kana: "みまう", pos: "동사 (타동사)",
    mean: "문병하다, (재난이) 덮치다",
    syn: [],
    collocations: [{ ja: "病人を見舞う", ko: "환자를 문병하다" }, { ja: "不幸に見舞われる", ko: "불행이 닥치다" }],
    examples: [{ type: "ex", label: "예문", ja: "入院中の祖父を見舞いに行った。", ko: "입원 중인 할아버지를 문병하러 갔다." }]
  },
  {
    id: 2361, day: 23, level: "N2",
    word: "恵まれる", kana: "めぐまれる", pos: "동사 (자동사)",
    mean: "혜택을 받다, 복받다",
    syn: [],
    collocations: [{ ja: "天気に恵まれる", ko: "날씨 복이 있다" }, { ja: "才能に恵まれる", ko: "재능을 타고나다" }],
    examples: [{ type: "ex", label: "예문", ja: "当日は好天に恵まれた。", ko: "당일은 좋은 날씨의 혜택을 받았다." }]
  },
  {
    id: 2362, day: 23, level: "N2",
    word: "巡る", kana: "めぐる", pos: "동사 (자동사)",
    mean: "돌다, 둘러싸다",
    syn: ["回る"],
    collocations: [{ ja: "名所を巡る", ko: "명소를 돌아보다" }, { ja: "季節が巡る", ko: "계절이 돌다" }],
    examples: [{ type: "ex", label: "예문", ja: "京都の寺を巡る旅に出た。", ko: "교토의 절을 도는 여행을 떠났다." }]
  },
  {
    id: 2363, day: 23, level: "N2",
    word: "目立つ", kana: "めだつ", pos: "동사 (자동사)",
    mean: "눈에 띄다",
    syn: [],
    collocations: [{ ja: "目立つ色", ko: "눈에 띄는 색" }, { ja: "ミスが目立つ", ko: "실수가 눈에 띄다" }],
    examples: [{ type: "ex", label: "예문", ja: "最近、仕事のミスが目立つ。", ko: "요즘 업무 실수가 눈에 띈다." }]
  },
  {
    id: 2364, day: 23, level: "N2",
    word: "持ち上げる", kana: "もちあげる", pos: "동사 (타동사)",
    mean: "들어 올리다, 치켜세우다",
    syn: ["上げる"],
    collocations: [{ ja: "荷物を持ち上げる", ko: "짐을 들어 올리다" }],
    examples: [{ type: "ex", label: "예문", ja: "重い箱を一人で持ち上げた。", ko: "무거운 상자를 혼자 들어 올렸다." }]
  },
  {
    id: 225, day: 23, level: "N2",
    word: "迫る", kana: "せまる", pos: "동사 (5단 자/타동사)",
    mean: "다가오다, 핍박하다, 재촉하다, 육박하다",
    syn: ["近づく", "迫ってくる"],
    collocations: [{ ja: "締め切りが迫る", ko: "마감일이 코앞에 닥치다" }, { ja: "決断を迫る", ko: "결단을 강력히 재촉하다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "提出の締め切り時刻が目前に迫り、執筆者は最後の推敲に全神経を集中させた。", ko: "제출 마감 시각이 목전에 다가와 집필자는 마지막 퇴고에 온 신경을 집중시켰다." }],
    polysemy: [
      { def: "① 시간·기일·계절이 코앞으로 바짝 다가오다", ja: "最終列車の出発時刻が刻一刻と迫る中、急ぎ足でプラットホームへと走った。", ko: "마지막 열차 출발 시각이 시시각각 다가오는 가운데 빠른 걸음으로 플랫폼으로 달렸다." },
      { def: "② 상대방에게 강력한 행동이나 선택을 요구하며 핍박하다", ja: "経営陣の明らかな不正に対し、労働組合側は即時の辞任と謝罪を強く迫った。", ko: "경영진의 명백한 부정에 대해 노동조합 측은 즉각적인 사임과 사과를 강력히 재촉했다." },
      { def: "③ 거리나 간격이 좁혀져 목표 대상에 육박하다", ja: "世界歴代最高記録にあと一歩のところまで迫る、圧巻の素晴らしいパフォーマンス。", ko: "세계 역대 최고 기록에 한 걸음 앞까지 육박하는 압권의 훌륭한 퍼포먼스." }
    ]
  },
  {
    id: 2365, day: 23, level: "N2",
    word: "もたれる", kana: "もたれる", pos: "동사 (자동사)",
    mean: "기대다, (속이) 더부룩하다",
    syn: ["寄りかかる"],
    collocations: [{ ja: "壁にもたれる", ko: "벽에 기대다" }, { ja: "胃がもたれる", ko: "속이 더부룩하다" }],
    examples: [{ type: "ex", label: "예문", ja: "食べすぎて胃がもたれる。", ko: "과식해서 속이 더부룩하다." }]
  },
  {
    id: 2366, day: 23, level: "N2",
    word: "用いる", kana: "もちいる", pos: "동사 (타동사)",
    mean: "쓰다, 사용하다",
    syn: ["使う", "使用する"],
    collocations: [{ ja: "新しい方法を用いる", ko: "새로운 방법을 쓰다" }],
    examples: [{ type: "ex", label: "예문", ja: "この調査では最新の技術が用いられた。", ko: "이 조사에는 최신 기술이 사용되었다." }]
  },
  {
    id: 2367, day: 23, level: "N2",
    word: "漏れる", kana: "もれる", pos: "동사 (자동사)",
    mean: "새다, 누설되다",
    syn: ["漏る"],
    collocations: [{ ja: "水が漏れる", ko: "물이 새다" }, { ja: "情報が漏れる", ko: "정보가 새다" }],
    examples: [{ type: "ex", label: "예문", ja: "会社の情報が外部に漏れた。", ko: "회사 정보가 외부로 유출되었다." }]
  },
  {
    id: 2368, day: 23, level: "N2",
    word: "盛る", kana: "もる", pos: "동사 (타동사)",
    mean: "담다, 쌓아 올리다",
    syn: [],
    collocations: [{ ja: "ご飯を盛る", ko: "밥을 담다" }, { ja: "話を盛る", ko: "이야기를 부풀리다" }],
    examples: [{ type: "ex", label: "예문", ja: "皿に料理をきれいに盛った。", ko: "접시에 요리를 예쁘게 담았다." }]
  },
  {
    id: 2369, day: 23, level: "N2",
    word: "焼ける", kana: "やける", pos: "동사 (자동사)",
    mean: "타다, 구워지다",
    syn: [],
    collocations: [{ ja: "肌が焼ける", ko: "피부가 타다" }, { ja: "パンが焼ける", ko: "빵이 구워지다" }],
    examples: [{ type: "ex", label: "예문", ja: "夏の海で肌が真っ黒に焼けた。", ko: "여름 바다에서 피부가 새까맣게 탔다." }]
  },
  {
    id: 226, day: 23, level: "N2",
    word: "覆う", kana: "おおう", pos: "동사 (5단 타동사)",
    mean: "덮다, 씌우다, 가리다, 휩싸이다",
    syn: ["かぶせる", "包む"],
    collocations: [{ ja: "暗雲が覆う", ko: "먹구름이 뒤덮다" }, { ja: "手で顔を覆う", ko: "손으로 얼굴을 가리다" }],
    examples: [{ type: "kun", label: "훈독", ja: "突然の悲報にショックを隠しきれず、彼女は両手で顔を覆ったまま泣き崩れた。", ko: "갑작스러운 비보에 충격을 감추지 못하고 그녀는 양손으로 얼굴을 감싸 쥔 채 주저앉아 울었다." }]
  },
  {
    id: 2370, day: 23, level: "N2",
    word: "手軽", kana: "てがる", pos: "な형용사",
    mean: "손쉬움, 간편함",
    syn: ["簡単な"],
    collocations: [{ ja: "手軽な料理", ko: "간편한 요리" }],
    examples: [{ type: "ex", label: "예문", ja: "電子レンジで手軽に作れる。", ko: "전자레인지로 손쉽게 만들 수 있다." }]
  },
  {
    id: 2371, day: 23, level: "N2",
    word: "透明", kana: "とうめい", pos: "な형용사",
    mean: "투명함",
    syn: ["透き通った"],
    collocations: [{ ja: "透明なガラス", ko: "투명한 유리" }, { ja: "透明性", ko: "투명성" }],
    examples: [{ type: "ex", label: "예문", ja: "政治には透明性が求められる。", ko: "정치에는 투명성이 요구된다." }]
  },
  {
    id: 2372, day: 23, level: "N2",
    word: "醜い", kana: "みにくい", pos: "い형용사",
    mean: "추하다, 보기 흉하다",
    syn: [],
    collocations: [{ ja: "醜い争い", ko: "추한 다툼" }],
    examples: [{ type: "ex", label: "예문", ja: "遺産をめぐって醜い争いが起きた。", ko: "유산을 둘러싸고 추한 다툼이 일어났다." }]
  },
  {
    id: 2373, day: 23, level: "N2",
    word: "独特", kana: "どくとく", pos: "な형용사",
    mean: "독특함",
    syn: ["ユニークな"],
    collocations: [{ ja: "独特な香り", ko: "독특한 향기" }],
    examples: [{ type: "ex", label: "예문", ja: "この料理には独特の味がある。", ko: "이 요리에는 독특한 맛이 있다." }]
  },
  {
    id: 2374, day: 23, level: "N2",
    word: "鈍感", kana: "どんかん", pos: "な형용사",
    mean: "둔감함",
    syn: ["鈍い"],
    collocations: [{ ja: "鈍感な人", ko: "둔감한 사람" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は人の気持ちに鈍感だ。", ko: "그는 남의 마음에 둔감하다." }]
  },
  {
    id: 302, day: 23, level: "N2",
    word: "容易", kana: "ようい", pos: "な형용사",
    mean: "용이함, 쉬움",
    syn: ["簡単", "たやすい"],
    collocations: [{ ja: "容易に想像がつく", ko: "쉽게 상상이 가다" }, { ja: "容易ではない", ko: "결코 쉽지 않다" }],
    examples: [{ type: "on", label: "음독", ja: "長年定着した組織の古い慣習を打破するのは、決して容易な事業ではない。", ko: "오랜 세월 정착된 조직의 낡은 관습을 타파하는 것은 결코 쉬운 일이 아니다." }]
  },
  {
    id: 2375, day: 23, level: "N2",
    word: "ポイント", kana: "ポイント", pos: "외래어",
    mean: "요점, 점수 (point)",
    syn: ["要点", "点"],
    collocations: [{ ja: "ポイントをまとめる", ko: "요점을 정리하다" }],
    examples: [{ type: "ex", label: "예문", ja: "説明のポイントを三つに絞った。", ko: "설명의 요점을 세 가지로 좁혔다." }]
  },
  {
    id: 2376, day: 23, level: "N2",
    word: "マイペース", kana: "マイペース", pos: "외래어",
    mean: "자기 페이스 (my pace)",
    syn: [],
    collocations: [{ ja: "マイペースで進める", ko: "자기 페이스대로 진행하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は周りを気にせずマイペースだ。", ko: "그는 주위를 신경 쓰지 않고 자기 페이스대로다." }]
  },
  {
    id: 2377, day: 23, level: "N2",
    word: "マスコミ", kana: "マスコミ", pos: "외래어",
    mean: "대중 매체 (mass communication)",
    syn: ["報道機関", "メディア"],
    collocations: [{ ja: "マスコミに取り上げられる", ko: "언론에 보도되다" }],
    examples: [{ type: "ex", label: "예문", ja: "その事件はマスコミで大きく報道された。", ko: "그 사건은 언론에서 크게 보도되었다." }]
  },
  {
    id: 2378, day: 23, level: "N2",
    word: "未だに", kana: "いまだに", pos: "부사",
    mean: "아직도, 여태껏",
    syn: ["今でも"],
    collocations: [{ ja: "未だに分からない", ko: "아직도 모르겠다" }],
    examples: [{ type: "ex", label: "예문", ja: "その事件の真相は未だに分かっていない。", ko: "그 사건의 진상은 아직도 밝혀지지 않았다." }]
  },
  {
    id: 2379, day: 23, level: "N2",
    word: "むしろ", kana: "むしろ", pos: "부사",
    mean: "오히려, 차라리",
    syn: ["かえって"],
    collocations: [{ ja: "むしろ逆効果だ", ko: "오히려 역효과다" }],
    examples: [{ type: "ex", label: "예문", ja: "休むより、むしろ働いたほうが楽だ。", ko: "쉬는 것보다 차라리 일하는 편이 편하다." }]
  },
  {
    id: 2380, day: 23, level: "N2",
    word: "無論", kana: "むろん", pos: "부사",
    mean: "물론",
    syn: ["もちろん"],
    collocations: [{ ja: "無論のこと", ko: "물론의 일" }],
    examples: [{ type: "ex", label: "예문", ja: "無論、私も参加します。", ko: "물론 저도 참가합니다." }]
  },
  {
    id: 2381, day: 23, level: "N2",
    word: "やや", kana: "やや", pos: "부사",
    mean: "약간, 다소",
    syn: ["少し"],
    collocations: [{ ja: "やや高い", ko: "약간 높다" }],
    examples: [{ type: "ex", label: "예문", ja: "今日はやや寒い。", ko: "오늘은 약간 춥다." }]
  },
  {
    id: 2382, day: 23, level: "N2",
    word: "割に", kana: "わりに", pos: "부사",
    mean: "비교적, 생각보다",
    syn: ["比較的", "割合"],
    collocations: [{ ja: "割に簡単だ", ko: "비교적 쉽다" }],
    examples: [{ type: "ex", label: "예문", ja: "この店は割に安い。", ko: "이 가게는 비교적 싸다." }]
  },
  {
    id: 2383, day: 23, level: "N2",
    word: "にやにや", kana: "にやにや", pos: "부사 (의성어·의태어)",
    mean: "히죽히죽",
    syn: ["にたにた"],
    collocations: [{ ja: "にやにや笑う", ko: "히죽거리다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は一人でにやにやしている。", ko: "그는 혼자 히죽거리고 있다." }]
  },
  {
    id: 2384, day: 23, level: "N2",
    word: "のろのろ", kana: "のろのろ", pos: "부사 (의성어·의태어)",
    mean: "느릿느릿",
    syn: ["ゆっくり"],
    collocations: [{ ja: "のろのろ歩く", ko: "느릿느릿 걷다" }],
    examples: [{ type: "ex", label: "예문", ja: "渋滞で車がのろのろ進んでいる。", ko: "정체로 차가 느릿느릿 가고 있다." }]
  },
  {
    id: 2385, day: 23, level: "N2",
    word: "ちなみに", kana: "ちなみに", pos: "접속사",
    mean: "덧붙여 말하자면",
    syn: ["なお"],
    collocations: [{ ja: "ちなみに", ko: "덧붙여" }],
    examples: [{ type: "ex", label: "예문", ja: "ちなみに、明日の会議は十時からです。", ko: "덧붙여 말씀드리면 내일 회의는 10시부터입니다." }]
  },
  {
    id: 2386, day: 23, level: "N2",
    word: "〜感", kana: "かん", pos: "접미어",
    mean: "~감 (느낌)",
    syn: [],
    collocations: [{ ja: "責任感", ko: "책임감" }, { ja: "満足感", ko: "만족감" }, { ja: "危機感", ko: "위기감" }],
    examples: []
  },
  {
    id: 2387, day: 23, level: "N2",
    word: "〜率", kana: "りつ", pos: "접미어",
    mean: "~율 (비율)",
    syn: [],
    collocations: [{ ja: "合格率", ko: "합격률" }, { ja: "成功率", ko: "성공률" }, { ja: "出生率", ko: "출생률" }],
    examples: []
  },
  {
    id: 2388, day: 23, level: "N2",
    word: "電池", kana: "でんち", pos: "명사",
    mean: "전지, 건전지",
    syn: ["バッテリー"],
    collocations: [{ ja: "電池が切れる", ko: "건전지가 다 되다" }, { ja: "電池を交換する", ko: "건전지를 교환하다" }],
    examples: [{ type: "ex", label: "예문", ja: "時計の電池が切れて止まった。", ko: "시계 건전지가 다 돼서 멈췄다." }]
  },
  {
    id: 2389, day: 23, level: "N2",
    word: "電源", kana: "でんげん", pos: "명사",
    mean: "전원",
    syn: [],
    collocations: [{ ja: "電源を入れる", ko: "전원을 켜다" }, { ja: "電源を切る", ko: "전원을 끄다" }],
    examples: [{ type: "ex", label: "예문", ja: "映画館では携帯の電源を切ってください。", ko: "영화관에서는 휴대전화 전원을 꺼 주세요." }]
  },
  {
    id: 2390, day: 23, level: "N2",
    word: "化学", kana: "かがく", pos: "명사",
    mean: "화학",
    syn: [],
    collocations: [{ ja: "化学反応", ko: "화학 반응" }, { ja: "化学製品", ko: "화학 제품" }],
    examples: [{ type: "ex", label: "예문", ja: "大学で化学を専攻した。", ko: "대학에서 화학을 전공했다." }]
  },
  {
    id: 332, day: 23, level: "N2",
    word: "共存", kana: "きょうぞん", pos: "명사",
    mean: "공존 (함께 살아감)",
    syn: ["共生", "共に存在すること"],
    collocations: [{ ja: "自然と共存する", ko: "자연과 공존하다" }, { ja: "平和共存", ko: "평화 공존" }],
    examples: [{ type: "on", label: "음독", ja: "経済的な都市開発を進めるに当たっては、地域固有の生態系を破壊せず自然と共存する配慮が不可欠だ。", ko: "경제적인 도시 개발을 진행함에 있어서는 지역 고유의 생태계를 파괴하지 않고 자연과 공존하는 배려가 필수적이다." }]
  },
  {
    id: 2391, day: 23, level: "N2",
    word: "生物", kana: "せいぶつ", pos: "명사",
    mean: "생물",
    syn: [],
    collocations: [{ ja: "海の生物", ko: "바다 생물" }, { ja: "生物学", ko: "생물학" }],
    examples: [{ type: "ex", label: "예문", ja: "この湖には珍しい生物がすんでいる。", ko: "이 호수에는 진귀한 생물이 살고 있다." }]
  },
  {
    id: 2392, day: 23, level: "N2",
    word: "植物", kana: "しょくぶつ", pos: "명사",
    mean: "식물",
    syn: [],
    collocations: [{ ja: "植物を育てる", ko: "식물을 기르다" }, { ja: "植物園", ko: "식물원" }],
    examples: [{ type: "ex", label: "예문", ja: "ベランダで植物を育てている。", ko: "베란다에서 식물을 기르고 있다." }]
  },
  {
    id: 2393, day: 23, level: "N2",
    word: "進化", kana: "しんか", pos: "명사 (する동사)",
    mean: "진화",
    syn: [],
    collocations: [{ ja: "生物の進化", ko: "생물의 진화" }, { ja: "技術が進化する", ko: "기술이 진화하다" }],
    examples: [{ type: "ex", label: "예문", ja: "スマートフォンは年々進化している。", ko: "스마트폰은 해마다 진화하고 있다." }]
  },
  {
    id: 2394, day: 23, level: "N2",
    word: "宇宙", kana: "うちゅう", pos: "명사",
    mean: "우주",
    syn: [],
    collocations: [{ ja: "宇宙飛行士", ko: "우주 비행사" }, { ja: "宇宙開発", ko: "우주 개발" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの頃、宇宙に行くのが夢だった。", ko: "어릴 때 우주에 가는 것이 꿈이었다." }]
  },
  {
    id: 2395, day: 23, level: "N2",
    word: "施設", kana: "しせつ", pos: "명사",
    mean: "시설",
    syn: ["設備"],
    collocations: [{ ja: "公共施設", ko: "공공시설" }, { ja: "施設を利用する", ko: "시설을 이용하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この町には文化施設が多い。", ko: "이 마을에는 문화 시설이 많다." }]
  },
  {
    id: 2396, day: 23, level: "N2",
    word: "建築", kana: "けんちく", pos: "명사 (する동사)",
    mean: "건축",
    syn: ["建設"],
    collocations: [{ ja: "建築家", ko: "건축가" }, { ja: "木造建築", ko: "목조 건축" }],
    examples: [{ type: "ex", label: "예문", ja: "この寺は日本最古の木造建築だ。", ko: "이 절은 일본 최고(最古)의 목조 건축이다." }]
  },
  {
    id: 334, day: 23, level: "N2",
    word: "欠陥", kana: "けっかん", pos: "명사",
    mean: "결함 (부족하거나 잘못된 흠집)",
    syn: ["欠点", "不備"],
    collocations: [{ ja: "重大な欠陥", ko: "치명적인 중대 결함" }, { ja: "欠陥住宅", ko: "부실 공사 결함 주택" }],
    examples: [{ type: "on", label: "음독", ja: "プログラムの根底に潜んでいた微細なセキュリティ上の欠陥を放置したことが、大規模な情報流出を招いた。", ko: "프로그램 근저에 도사리고 있던 미세한 보안상 결함을 방치한 것이 대규모 정보 유출을 초래했다." }]
  },
  {
    id: 2397, day: 23, level: "N2",
    word: "屋外", kana: "おくがい", pos: "명사",
    mean: "옥외, 실외",
    syn: ["戸外"],
    collocations: [{ ja: "屋外で遊ぶ", ko: "밖에서 놀다" }],
    examples: [{ type: "ex", label: "예문", ja: "雨の日は屋外の活動が中止になる。", ko: "비 오는 날은 실외 활동이 중지된다." }]
  },
  {
    id: 2398, day: 23, level: "N2",
    word: "屋内", kana: "おくない", pos: "명사",
    mean: "옥내, 실내",
    syn: ["室内"],
    collocations: [{ ja: "屋内プール", ko: "실내 수영장" }],
    examples: [{ type: "ex", label: "예문", ja: "雨なので屋内で練習した。", ko: "비가 와서 실내에서 연습했다." }]
  },
  {
    id: 2399, day: 23, level: "N2",
    word: "周辺", kana: "しゅうへん", pos: "명사",
    mean: "주변",
    syn: ["付近", "周り"],
    collocations: [{ ja: "駅の周辺", ko: "역 주변" }],
    examples: [{ type: "ex", label: "예문", ja: "駅の周辺には店がたくさんある。", ko: "역 주변에는 가게가 많이 있다." }]
  },
  {
    id: 2400, day: 23, level: "N2",
    word: "付近", kana: "ふきん", pos: "명사",
    mean: "부근",
    syn: ["近く", "周辺"],
    collocations: [{ ja: "この付近", ko: "이 부근" }],
    examples: [{ type: "ex", label: "예문", ja: "この付近に郵便局はありますか。", ko: "이 부근에 우체국이 있습니까?" }]
  },
  {
    id: 2401, day: 23, level: "N2",
    word: "郊外", kana: "こうがい", pos: "명사",
    mean: "교외",
    syn: [],
    collocations: [{ ja: "郊外に住む", ko: "교외에 살다" }],
    examples: [{ type: "ex", label: "예문", ja: "都心から郊外に引っ越した。", ko: "도심에서 교외로 이사했다." }]
  },
  {
    id: 2402, day: 23, level: "N2",
    word: "都心", kana: "としん", pos: "명사",
    mean: "도심",
    syn: [],
    collocations: [{ ja: "都心に通う", ko: "도심으로 통근하다" }],
    examples: [{ type: "ex", label: "예문", ja: "都心まで電車で三十分だ。", ko: "도심까지 전철로 30분이다." }]
  },
  {
    id: 2403, day: 23, level: "N2",
    word: "地元", kana: "じもと", pos: "명사",
    mean: "그 고장, 고향",
    syn: ["故郷"],
    collocations: [{ ja: "地元の人", ko: "현지 사람" }, { ja: "地元に帰る", ko: "고향에 돌아가다" }],
    examples: [{ type: "ex", label: "예문", ja: "大学を出て地元の会社に就職した。", ko: "대학을 나와 고향 회사에 취직했다." }]
  },
  {
    id: 340, day: 23, level: "N2",
    word: "詐欺", kana: "さぎ", pos: "명사",
    mean: "사기 (속여서 재물을 빼앗음)",
    syn: ["だまし"],
    collocations: [{ ja: "詐欺に遭う", ko: "사기를 당하다" }, { ja: "特殊詐欺の手口", ko: "보이스피싱 등 특수 사기 수법" }],
    examples: [{ type: "on", label: "음독", ja: "高齢者を言葉巧みに騙して預貯金を騙し取る悪質な詐欺グループの手口に対し、警察が警戒を呼びかけている。", ko: "고령자를 감언이설로 속여 예금을 편취하는 악질 사기 조직 수법에 대해 경찰이 경계를 당부하고 있다." }]
  },
  {
    id: 2404, day: 23, level: "N2",
    word: "現場", kana: "げんば", pos: "명사",
    mean: "현장",
    syn: [],
    collocations: [{ ja: "事故の現場", ko: "사고 현장" }, { ja: "工事現場", ko: "공사 현장" }],
    examples: [{ type: "ex", label: "예문", ja: "警察がすぐに現場に駆けつけた。", ko: "경찰이 곧바로 현장에 달려갔다." }]
  },
  {
    id: 2405, day: 23, level: "N2",
    word: "会場", kana: "かいじょう", pos: "명사",
    mean: "회장, 행사장",
    syn: [],
    collocations: [{ ja: "会場に入る", ko: "회장에 들어가다" }, { ja: "試験会場", ko: "시험장" }],
    examples: [{ type: "ex", label: "예문", ja: "会場は大勢の人でいっぱいだった。", ko: "행사장은 많은 사람으로 가득했다." }]
  },
  {
    id: 2406, day: 23, level: "N2",
    word: "国境", kana: "こっきょう", pos: "명사",
    mean: "국경",
    syn: [],
    collocations: [{ ja: "国境を越える", ko: "국경을 넘다" }],
    examples: [{ type: "ex", label: "예문", ja: "音楽には国境がない。", ko: "음악에는 국경이 없다." }]
  },
  {
    id: 2407, day: 23, level: "N2",
    word: "首都", kana: "しゅと", pos: "명사",
    mean: "수도",
    syn: [],
    collocations: [{ ja: "首都圏", ko: "수도권" }],
    examples: [{ type: "ex", label: "예문", ja: "東京は日本の首都だ。", ko: "도쿄는 일본의 수도다." }]
  },
  {
    id: 2408, day: 23, level: "N2",
    word: "都会", kana: "とかい", pos: "명사",
    mean: "도회지, 도시",
    syn: ["都市"],
    collocations: [{ ja: "都会の生活", ko: "도시 생활" }],
    examples: [{ type: "ex", label: "예문", ja: "都会の生活に疲れて田舎に移った。", ko: "도시 생활에 지쳐 시골로 옮겼다." }]
  },
  {
    id: 2409, day: 23, level: "N1",
    word: "適応", kana: "てきおう", pos: "명사 (する동사)",
    mean: "적응",
    syn: ["慣れる"],
    collocations: [{ ja: "環境に適応する", ko: "환경에 적응하다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい環境に適応するには時間がかかる。", ko: "새로운 환경에 적응하려면 시간이 걸린다." }]
  },
  {
    id: 2410, day: 23, level: "N1",
    word: "適性", kana: "てきせい", pos: "명사",
    mean: "적성",
    syn: [],
    collocations: [{ ja: "適性検査", ko: "적성 검사" }, { ja: "適性がある", ko: "적성이 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "この仕事には彼が適性があると思う。", ko: "이 일에는 그가 적성이 맞다고 생각한다." }]
  },
  {
    id: 195, day: 23, level: "N1",
    word: "潜在", kana: "せんざい", pos: "명사",
    mean: "잠재",
    syn: ["隠れて存在すること"],
    collocations: [{ ja: "潜在的な能力", ko: "잠재적인 능력" }, { ja: "潜在ニーズ", ko: "숨겨진 잠재 니즈" }],
    examples: [{ type: "on", label: "음독", ja: "自分自身の意識の奥底に潜在している偏見や先入観に気づくことが、真の相互理解への第一歩となる。", ko: "자기 자신의 의식 깊은 곳에 잠재되어 있는 편견이나 선입견을 깨닫는 것이 진정한 상호 이해를 향한 첫걸음이 된다." }]
  },
  {
    id: 2411, day: 23, level: "N1",
    word: "撤廃", kana: "てっぱい", pos: "명사 (する동사)",
    mean: "철폐",
    syn: ["廃止"],
    collocations: [{ ja: "規制を撤廃する", ko: "규제를 철폐하다" }],
    examples: [{ type: "ex", label: "예문", ja: "政府は古い規制を撤廃した。", ko: "정부는 낡은 규제를 철폐했다." }]
  },
  {
    id: 211, day: 23, level: "N1",
    word: "惜しむ", kana: "おしむ", pos: "동사 (5단 타동사)",
    mean: "아끼다, 아쉬워하다, 애석히 여기다",
    syn: ["もったいなく思う", "残念に思う"],
    collocations: [{ ja: "名残を惜しむ", ko: "헤어짐의 아쉬움을 달래다" }, { ja: "寸暇を惜しむ", ko: "짬(자투리 시간)을 아끼다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "旅立ちの朝、旧友との名残を惜しみつつ駅の改札へと向かった。", ko: "길을 떠나는 아침, 옛 친구와의 석별의 정을 아쉬워하며 역 개찰구로 향했다." }],
    polysemy: [
      { def: "① 섭섭해하다, 헤어짐이나 끝남을 아쉬워하다", ja: "長年住み慣れた故郷の街を離れるのを心から惜しむ。", ko: "오랜 세월 정든 고향 마을을 떠나는 것을 진심으로 아쉬워하다." },
      { def: "② (돈·시간·노력을) 아까워하다, 인색하게 굴다", ja: "自らの成長のためなら、惜しむことなく時間と労力を投資する。", ko: "자신의 성장 때문이라면 아낌없이 시간과 노력을 투자한다." },
      { def: "③ 가치 있는 존재의 상실을 애석하게 여기다", ja: "若くして世を去った天才画家の早すぎる死を、社会全体が惜しんだ。", ko: "젊은 나이에 세상을 떠난 천재 화가의 너무 이른 죽음을 사회 전체가 애석해했다." }
    ]
  },
  {
    id: 2412, day: 23, level: "N1",
    word: "統計", kana: "とうけい", pos: "명사 (する동사)",
    mean: "통계",
    syn: [],
    collocations: [{ ja: "統計を取る", ko: "통계를 내다" }, { ja: "統計によると", ko: "통계에 따르면" }],
    examples: [{ type: "ex", label: "예문", ja: "統計によると、出生率は下がり続けている。", ko: "통계에 따르면 출생률은 계속 떨어지고 있다." }]
  },
  {
    id: 2413, day: 23, level: "N1",
    word: "動向", kana: "どうこう", pos: "명사",
    mean: "동향",
    syn: ["動き"],
    collocations: [{ ja: "市場の動向", ko: "시장 동향" }],
    examples: [{ type: "ex", label: "예문", ja: "消費者の動向に注目する。", ko: "소비자의 동향에 주목한다." }]
  },
  {
    id: 216, day: 23, level: "N1",
    word: "募る", kana: "つのる", pos: "동사 (5단 자/타동사)",
    mean: "격해지다, 더해지다, 모집하다",
    syn: ["集める", "ますます強くなる"],
    collocations: [{ ja: "不安が募る", ko: "불안이 점점 커지다/격해지다" }, { ja: "会員を募る", ko: "회원을 널리 모집하다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "連絡が途絶えた被災地の安否が確認できず、待ちわびる家族の不安は募る一方だった。", ko: "연락이 두절된 재해지의 안부가 확인되지 않아 애타게 기다리는 가족의 불안은 점점 커져만 갔다." }],
    polysemy: [
      { def: "① (감정·기세·추위 등이) 점점 더 강해지다/격해지다", ja: "故郷を遠く離れて暮らすうちに、家族への恋しさが日増しに募ってきた。", ko: "고향을 멀리 떠나 생활하는 사이에 가족을 향한 그리움이 날로 격해져 왔다." },
      { def: "② 널리 일반에게 알리어 사람·기금·의견을 모으다", ja: "環境保護をテーマにした市民参加型イベントのボランティアスタッフを募る。", ko: "환경 보호를 테마로 한 시민 참여형 이벤트의 자원봉사 스태프를 모집하다." },
      { def: "③ (바람이나 불길 등의 기세가) 거세지다", ja: "夜に入って風雨がいっそう募り、港の防波堤に激しい高波が打ち寄せた。", ko: "밤에 접어들어 비바람이 한층 거세져 항구 방파제에 거센 높은 파도가 들이쳤다." }
    ]
  },
  {
    id: 2414, day: 23, level: "N1",
    word: "特有", kana: "とくゆう", pos: "명사",
    mean: "특유",
    syn: ["独特"],
    collocations: [{ ja: "日本特有の文化", ko: "일본 특유의 문화" }],
    examples: [{ type: "ex", label: "예문", ja: "この地方特有の料理を味わった。", ko: "이 지방 특유의 요리를 맛보았다." }]
  },
  // ==========================================
  // [DAY 24] N2 필수 + N1 · 59개
  // ==========================================
  {
    id: 2415, day: 24, level: "N2",
    word: "雇う", kana: "やとう", pos: "동사 (타동사)",
    mean: "고용하다",
    syn: ["採用する"],
    collocations: [{ ja: "社員を雇う", ko: "사원을 고용하다" }],
    examples: [{ type: "ex", label: "예문", ja: "人手が足りないので、アルバイトを雇った。", ko: "일손이 부족해서 아르바이트를 고용했다." }]
  },
  {
    id: 2416, day: 24, level: "N2",
    word: "敗れる", kana: "やぶれる", pos: "동사 (자동사)",
    mean: "패하다, 지다",
    syn: ["負ける"],
    collocations: [{ ja: "試合に敗れる", ko: "시합에 지다" }],
    examples: [{ type: "ex", label: "예문", ja: "決勝戦で惜しくも敗れた。", ko: "결승전에서 아깝게 졌다." }]
  },
  {
    id: 2417, day: 24, level: "N2",
    word: "和らぐ", kana: "やわらぐ", pos: "동사 (자동사)",
    mean: "누그러지다",
    syn: ["おさまる"],
    collocations: [{ ja: "痛みが和らぐ", ko: "통증이 누그러지다" }, { ja: "寒さが和らぐ", ko: "추위가 풀리다" }],
    examples: [{ type: "ex", label: "예문", ja: "薬を飲んだら痛みが和らいだ。", ko: "약을 먹었더니 통증이 누그러졌다." }]
  },
  {
    id: 2418, day: 24, level: "N2",
    word: "和らげる", kana: "やわらげる", pos: "동사 (타동사)",
    mean: "누그러뜨리다",
    syn: ["緩める"],
    collocations: [{ ja: "痛みを和らげる", ko: "통증을 완화하다" }, { ja: "表現を和らげる", ko: "표현을 부드럽게 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "音楽には緊張を和らげる効果がある。", ko: "음악에는 긴장을 누그러뜨리는 효과가 있다." }]
  },
  {
    id: 2419, day: 24, level: "N2",
    word: "茹でる", kana: "ゆでる", pos: "동사 (타동사)",
    mean: "데치다, 삶다",
    syn: ["煮る"],
    collocations: [{ ja: "卵を茹でる", ko: "달걀을 삶다" }, { ja: "野菜を茹でる", ko: "채소를 데치다" }],
    examples: [{ type: "ex", label: "예문", ja: "パスタを七分間茹でる。", ko: "파스타를 7분간 삶는다." }]
  },
  {
    id: 228, day: 24, level: "N2",
    word: "濁る", kana: "にごる", pos: "동사 (5단 자동사)",
    mean: "흐려지다, 탁해지다",
    syn: ["汚れる", "にごる"],
    collocations: [{ ja: "水が濁る", ko: "물이 탁해지다" }, { ja: "言葉を濁す", ko: "말끝을 흐리다 (※타동사형)" }],
    examples: [{ type: "kun", label: "훈독", ja: "上流での集中豪雨によって清流が一変し、激しい泥水で川全体が黄色く濁ってしまった。", ko: "상류에서의 집중호우로 인해 맑은 시냇물이 급변하여 거센 흙탕물로 강 전체가 누렇게 흐려져 버렸다." }, { type: "on", label: "음독", ja: "工場からの未処理廃水の垂れ流しが、近隣河川の深刻な水質汚濁(おだく)を引き起こした。", ko: "공장으로부터의 미처리 폐수 방류가 인근 하천의 심각한 수질오염(오탁)을 일으켰다." }]
  },
  {
    id: 2420, day: 24, level: "N2",
    word: "酔っ払う", kana: "よっぱらう", pos: "동사 (자동사)",
    mean: "몹시 취하다",
    syn: ["酔う"],
    collocations: [{ ja: "酔っ払って帰る", ko: "만취해서 돌아오다" }],
    examples: [{ type: "ex", label: "예문", ja: "父は酔っ払って大声で歌っていた。", ko: "아버지는 만취해서 큰 소리로 노래하고 있었다." }]
  },
  {
    id: 2421, day: 24, level: "N2",
    word: "呼びかける", kana: "よびかける", pos: "동사 (타동사)",
    mean: "호소하다, 촉구하다",
    syn: ["訴える"],
    collocations: [{ ja: "協力を呼びかける", ko: "협력을 호소하다" }],
    examples: [{ type: "ex", label: "예문", ja: "市は住民に節水を呼びかけている。", ko: "시는 주민들에게 절수를 호소하고 있다." }]
  },
  {
    id: 2422, day: 24, level: "N2",
    word: "蘇る", kana: "よみがえる", pos: "동사 (자동사)",
    mean: "되살아나다",
    syn: ["復活する"],
    collocations: [{ ja: "記憶が蘇る", ko: "기억이 되살아나다" }],
    examples: [{ type: "ex", label: "예문", ja: "写真を見て、昔の記憶が蘇った。", ko: "사진을 보고 옛 기억이 되살아났다." }]
  },
  {
    id: 2423, day: 24, level: "N2",
    word: "寄せる", kana: "よせる", pos: "동사 (타동사)",
    mean: "다가오게 하다, 보내다",
    syn: ["集める"],
    collocations: [{ ja: "意見を寄せる", ko: "의견을 보내다" }, { ja: "関心を寄せる", ko: "관심을 갖다" }],
    examples: [{ type: "ex", label: "예문", ja: "多くの人がこの問題に関心を寄せている。", ko: "많은 사람이 이 문제에 관심을 갖고 있다." }]
  },
  {
    id: 2424, day: 24, level: "N2",
    word: "湧く", kana: "わく", pos: "동사 (자동사)",
    mean: "솟다, 생기다",
    syn: ["生じる"],
    collocations: [{ ja: "温泉が湧く", ko: "온천이 솟다" }, { ja: "興味が湧く", ko: "흥미가 생기다" }],
    examples: [{ type: "ex", label: "예문", ja: "話を聞いているうちに興味が湧いてきた。", ko: "이야기를 듣는 사이에 흥미가 생겼다." }]
  },
  {
    id: 282, day: 24, level: "N2",
    word: "狂う", kana: "くるう", pos: "동사 (5단 자동사)",
    mean: "미치다, 어긋나다, (기계가) 고장나다",
    syn: ["おかしくなる", "調子が外れる"],
    collocations: [{ ja: "気が狂う", ko: "제정신을 잃다/미치다" }, { ja: "予定が狂う", ko: "예정이 어긋나다/틀어지다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "突然の悪天候によって列車のダイヤが乱れ、出張の予定が大幅に狂ってしまった。", ko: "갑작스러운 악천후로 열차 운행표가 흐트러져 출장 일정이 크게 틀어지고 말았다." }],
    polysemy: [
      { def: "① 정신이나 이성을 잃고 비정상적인 상태가 되다", ja: "あまりの激しい衝撃と悲しみに、気が狂いそうなほどの苦痛を覚えた。", ko: "너무나 격렬한 충격과 슬픔에 정신이 미쳐버릴 것만 같은 고통을 느꼈다." },
      { def: "② 당초에 세워둔 계획·순서·일정이 어긋나다", ja: "予期せぬトラブルが相次いだせいで、今年度の生産計画が大きく狂った。", ko: "예기치 못한 돌발 상황이 잇따른 탓에 올해 생산 계획이 크게 어긋났다." },
      { def: "③ 기계·시계·계측기의 균형이나 수치가 틀어지다", ja: "強い磁気を帯びたせいで精密機器の針が狂い、正確な測定ができなくなった。", ko: "강한 자기를 띤 탓에 정밀기기 바늘이 고장 나 정확한 측정을 할 수 없게 되었다." }
    ]
  },
  {
    id: 2425, day: 24, level: "N2",
    word: "やかましい", kana: "やかましい", pos: "い형용사",
    mean: "시끄럽다, 까다롭다",
    syn: ["うるさい"],
    collocations: [{ ja: "やかましい音", ko: "시끄러운 소리" }, { ja: "時間にやかましい", ko: "시간에 까다롭다" }],
    examples: [{ type: "ex", label: "예문", ja: "父は礼儀にやかましい人だ。", ko: "아버지는 예의에 까다로운 사람이다." }]
  },
  {
    id: 2426, day: 24, level: "N2",
    word: "敏感", kana: "びんかん", pos: "な형용사",
    mean: "민감함",
    syn: ["鋭い"],
    collocations: [{ ja: "敏感な肌", ko: "민감한 피부" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女は流行に敏感だ。", ko: "그녀는 유행에 민감하다." }]
  },
  {
    id: 2427, day: 24, level: "N2",
    word: "のんき", kana: "のんき", pos: "な형용사",
    mean: "태평함, 느긋함",
    syn: ["気楽な"],
    collocations: [{ ja: "のんきな性格", ko: "태평한 성격" }],
    examples: [{ type: "ex", label: "예문", ja: "試験前なのに、彼はのんきに遊んでいる。", ko: "시험 전인데 그는 태평하게 놀고 있다." }]
  },
  {
    id: 2428, day: 24, level: "N2",
    word: "若々しい", kana: "わかわかしい", pos: "い형용사",
    mean: "젊디젊다, 앳되다",
    syn: ["若い"],
    collocations: [{ ja: "若々しい声", ko: "젊은 목소리" }],
    examples: [{ type: "ex", label: "예문", ja: "祖母は年のわりに若々しい。", ko: "할머니는 나이에 비해 젊어 보이신다." }]
  },
  {
    id: 2429, day: 24, level: "N2",
    word: "莫大", kana: "ばくだい", pos: "な형용사",
    mean: "막대함",
    syn: ["膨大な"],
    collocations: [{ ja: "莫大な費用", ko: "막대한 비용" }],
    examples: [{ type: "ex", label: "예문", ja: "この計画には莫大な費用がかかる。", ko: "이 계획에는 막대한 비용이 든다." }]
  },
  {
    id: 303, day: 24, level: "N2",
    word: "寛大", kana: "かんだい", pos: "な형용사",
    mean: "관대함, 너그러움",
    syn: ["寛容", "心が広い"],
    collocations: [{ ja: "寛大な処置", ko: "너그러운 처분/조치" }, { ja: "寛大に許す", ko: "관대하게 용서하다" }],
    examples: [{ type: "on", label: "음독", ja: "初心者の過失であることを考慮し、裁判所は被告人に対して寛大な判決を下した。", ko: "초보자의 과실임을 감안하여 법원은 피고인에 대해 너그러운 판결을 내렸다." }]
  },
  {
    id: 167, day: 24, level: "N2",
    word: "カテゴリー", kana: "かてごりー", pos: "외래어",
    mean: "범주, 카테고리 (category)",
    syn: ["部類", "種類"],
    collocations: [{ ja: "カテゴリーに分類する", ko: "카테고리로 분류하다" }, { ja: "新たなカテゴリー", ko: "새로운 범주" }],
    examples: [{ type: "ex", label: "예문", ja: "集計された膨大なビッグデータを、ユーザーの購買傾向ごとに適切なカテゴリーへ細かく分類する。", ko: "집계된 방대한 빅데이터를 사용자의 구매 성향별로 적절한 범주로 세밀하게 분류하다." }]
  },
  {
    id: 2430, day: 24, level: "N2",
    word: "ミス", kana: "ミス", pos: "외래어",
    mean: "실수 (miss)",
    syn: ["間違い", "失敗"],
    collocations: [{ ja: "ミスをする", ko: "실수하다" }],
    examples: [{ type: "ex", label: "예문", ja: "小さなミスが大きな問題になった。", ko: "작은 실수가 큰 문제가 되었다." }]
  },
  {
    id: 2431, day: 24, level: "N2",
    word: "メリット", kana: "メリット", pos: "외래어",
    mean: "장점, 이점 (merit)",
    syn: ["利点", "長所"],
    collocations: [{ ja: "メリットがある", ko: "이점이 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "在宅勤務には多くのメリットがある。", ko: "재택근무에는 많은 이점이 있다." }]
  },
  {
    id: 313, day: 24, level: "N2",
    word: "まさに", kana: "まさに", pos: "부사",
    mean: "바로, 틀림없이, 막 (~하려던 참이다)",
    syn: ["ちょうど", "確かに"],
    collocations: [{ ja: "まさにその通りだ", ko: "바로 딱 그대로다" }, { ja: "まさに〜しようとしている", ko: "막 ~하려는 참이다" }],
    examples: [{ type: "ex", label: "예문", ja: "人命救助のために自らの危険を顧みず濁流に飛び込んだ彼の勇気は、まさに賞賛に値する。", ko: "인명 구조를 위해 자신의 위험을 돌보지 않고 탁류에 뛰어든 그의 용기는 그야말로 찬양받아 마땅하다." }]
  },
  {
    id: 2432, day: 24, level: "N2",
    word: "いっそ", kana: "いっそ", pos: "부사",
    mean: "차라리",
    syn: ["むしろ"],
    collocations: [{ ja: "いっそやめてしまおう", ko: "차라리 그만두자" }],
    examples: [{ type: "ex", label: "예문", ja: "悩むくらいなら、いっそ本人に聞いたらどうか。", ko: "고민할 바에야 차라리 본인에게 물어보면 어때?" }]
  },
  {
    id: 2433, day: 24, level: "N2",
    word: "さすが(に)", kana: "さすが", pos: "부사",
    mean: "과연, 역시",
    syn: ["やはり"],
    collocations: [{ ja: "さすがプロだ", ko: "역시 프로다" }],
    examples: [{ type: "ex", label: "예문", ja: "さすがに疲れた。", ko: "역시나 지쳤다." }]
  },
  {
    id: 2434, day: 24, level: "N2",
    word: "至って", kana: "いたって", pos: "부사",
    mean: "극히, 매우",
    syn: ["非常に", "極めて"],
    collocations: [{ ja: "至って元気だ", ko: "매우 건강하다" }],
    examples: [{ type: "ex", label: "예문", ja: "祖父は九十歳だが、至って元気だ。", ko: "할아버지는 아흔 살이지만 매우 정정하시다." }]
  },
  {
    id: 2435, day: 24, level: "N2",
    word: "はらはら", kana: "はらはら", pos: "부사 (의성어·의태어)",
    mean: "조마조마, (잎이) 팔랑팔랑",
    syn: ["心配する"],
    collocations: [{ ja: "はらはらする", ko: "조마조마하다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの運転を見ていてはらはらした。", ko: "아이의 운전을 보면서 조마조마했다." }]
  },
  {
    id: 2436, day: 24, level: "N2",
    word: "ぱっと", kana: "ぱっと", pos: "부사 (의성어·의태어)",
    mean: "확, 번쩍",
    syn: ["さっと"],
    collocations: [{ ja: "ぱっと明るくなる", ko: "확 밝아지다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女が来ると、場がぱっと明るくなる。", ko: "그녀가 오면 분위기가 확 밝아진다." }]
  },
  {
    id: 2437, day: 24, level: "N2",
    word: "〜観", kana: "かん", pos: "접미어",
    mean: "~관 (견해)",
    syn: [],
    collocations: [{ ja: "人生観", ko: "인생관" }, { ja: "価値観", ko: "가치관" }, { ja: "世界観", ko: "세계관" }],
    examples: []
  },
  {
    id: 2438, day: 24, level: "N2",
    word: "交差点", kana: "こうさてん", pos: "명사",
    mean: "교차로",
    syn: [],
    collocations: [{ ja: "交差点を渡る", ko: "교차로를 건너다" }],
    examples: [{ type: "ex", label: "예문", ja: "次の交差点を右に曲がってください。", ko: "다음 교차로에서 오른쪽으로 돌아 주세요." }]
  },
  {
    id: 341, day: 24, level: "N2",
    word: "削減", kana: "さくげん", pos: "명사",
    mean: "삭감, 절감",
    syn: ["減らすこと", "カット"],
    collocations: [{ ja: "コストを削減する", ko: "비용을 대폭 절감하다" }, { ja: "排出量の削減", ko: "온실가스 배출량 삭감" }],
    examples: [{ type: "on", label: "음독", ja: "地球温暖化を食い止める国際的合意に基づき、各国は温室効果ガスの排出削減目標を厳格に定めた。", ko: "지구 온난화를 저지하기 위한 국제적 합의에 따라 각국은 온실가스 배출 삭감 목표를 엄격히 규정했다." }]
  },
  {
    id: 2439, day: 24, level: "N2",
    word: "歩道", kana: "ほどう", pos: "명사",
    mean: "인도, 보도",
    syn: [],
    collocations: [{ ja: "歩道を歩く", ko: "인도를 걷다" }, { ja: "横断歩道", ko: "횡단보도" }],
    examples: [{ type: "ex", label: "예문", ja: "自転車は歩道を走らないでください。", ko: "자전거는 인도를 달리지 마세요." }]
  },
  {
    id: 2440, day: 24, level: "N2",
    word: "踏切", kana: "ふみきり", pos: "명사",
    mean: "건널목",
    syn: [],
    collocations: [{ ja: "踏切を渡る", ko: "건널목을 건너다" }],
    examples: [{ type: "ex", label: "예문", ja: "踏切の前で一時停止する。", ko: "건널목 앞에서 일시 정지한다." }]
  },
  {
    id: 2441, day: 24, level: "N2",
    word: "線路", kana: "せんろ", pos: "명사",
    mean: "선로",
    syn: [],
    collocations: [{ ja: "線路沿い", ko: "선로변" }],
    examples: [{ type: "ex", label: "예문", ja: "線路に人が立ち入って電車が止まった。", ko: "선로에 사람이 들어가서 전철이 멈췄다." }]
  },
  {
    id: 2442, day: 24, level: "N2",
    word: "終点", kana: "しゅうてん", pos: "명사",
    mean: "종점",
    syn: [],
    collocations: [{ ja: "終点まで行く", ko: "종점까지 가다" }],
    examples: [{ type: "ex", label: "예문", ja: "このバスの終点は駅前です。", ko: "이 버스의 종점은 역 앞입니다." }]
  },
  {
    id: 2443, day: 24, level: "N2",
    word: "乗客", kana: "じょうきゃく", pos: "명사",
    mean: "승객",
    syn: [],
    collocations: [{ ja: "乗客を乗せる", ko: "승객을 태우다" }],
    examples: [{ type: "ex", label: "예문", ja: "事故で乗客十人がけがをした。", ko: "사고로 승객 열 명이 다쳤다." }]
  },
  {
    id: 2444, day: 24, level: "N2",
    word: "運賃", kana: "うんちん", pos: "명사",
    mean: "운임, 요금",
    syn: ["料金"],
    collocations: [{ ja: "運賃を払う", ko: "운임을 내다" }, { ja: "運賃が上がる", ko: "요금이 오르다" }],
    examples: [{ type: "ex", label: "예문", ja: "来月から電車の運賃が上がる。", ko: "다음 달부터 전철 요금이 오른다." }]
  },
  {
    id: 342, day: 24, level: "N2",
    word: "指摘", kana: "してき", pos: "명사",
    mean: "지적 (꼭 집어 가리킴)",
    syn: ["指し示すこと", "注意"],
    collocations: [{ ja: "欠点を指摘する", ko: "단점이나 오류를 꼬집어 지적하다" }, { ja: "指摘を受ける", ko: "지적을 받다" }],
    examples: [{ type: "on", label: "음독", ja: "外部の専門家から安全管理体制の不備を厳しく指摘され、経営陣は即時の是正措置を約束した。", ko: "외부 전문가로부터 안전 관리 체제의 미비를 엄하게 지적받고 경영진은 즉각적인 시정 조치를 약속했다." }]
  },
  {
    id: 2445, day: 24, level: "N2",
    word: "定期券", kana: "ていきけん", pos: "명사",
    mean: "정기권",
    syn: [],
    collocations: [{ ja: "定期券を買う", ko: "정기권을 사다" }],
    examples: [{ type: "ex", label: "예문", ja: "通学のために定期券を買った。", ko: "통학을 위해 정기권을 샀다." }]
  },
  {
    id: 2446, day: 24, level: "N2",
    word: "片道", kana: "かたみち", pos: "명사",
    mean: "편도",
    syn: [],
    collocations: [{ ja: "片道切符", ko: "편도표" }],
    examples: [{ type: "ex", label: "예문", ja: "東京まで片道二時間かかる。", ko: "도쿄까지 편도로 두 시간 걸린다." }]
  },
  {
    id: 2447, day: 24, level: "N2",
    word: "人物", kana: "じんぶつ", pos: "명사",
    mean: "인물",
    syn: ["人"],
    collocations: [{ ja: "登場人物", ko: "등장인물" }, { ja: "重要人物", ko: "중요 인물" }],
    examples: [{ type: "ex", label: "예문", ja: "この小説の登場人物は多い。", ko: "이 소설의 등장인물은 많다." }]
  },
  {
    id: 2448, day: 24, level: "N2",
    word: "人柄", kana: "ひとがら", pos: "명사",
    mean: "인품, 사람 됨됨이",
    syn: ["性格"],
    collocations: [{ ja: "人柄がいい", ko: "인품이 좋다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の誠実な人柄に引かれた。", ko: "그의 성실한 인품에 끌렸다." }]
  },
  {
    id: 2449, day: 24, level: "N2",
    word: "個人", kana: "こじん", pos: "명사",
    mean: "개인",
    syn: [],
    collocations: [{ ja: "個人情報", ko: "개인 정보" }, { ja: "個人的な意見", ko: "개인적인 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "これはあくまで個人的な意見です。", ko: "이것은 어디까지나 개인적인 의견입니다." }]
  },
  {
    id: 2450, day: 24, level: "N2",
    word: "本人", kana: "ほんにん", pos: "명사",
    mean: "본인",
    syn: [],
    collocations: [{ ja: "本人確認", ko: "본인 확인" }, { ja: "本人の意志", ko: "본인의 의지" }],
    examples: [{ type: "ex", label: "예문", ja: "手続きは本人が行ってください。", ko: "수속은 본인이 해 주세요." }]
  },
  {
    id: 344, day: 24, level: "N2",
    word: "承諾", kana: "しょうだく", pos: "명사",
    mean: "승낙, 수락",
    syn: ["了承", "引き受けること"],
    collocations: [{ ja: "承諾を得る", ko: "동의와 승낙을 얻다" }, { ja: "快く承諾する", ko: "흔쾌히 승낙하다" }],
    examples: [{ type: "on", label: "음독", ja: "著作物を二次利用するに当たっては、事前に原作者からの正式な書面による承諾を得なければならない。", ko: "저작물을 2차 활용함에 있어서는 사전에 원작자로부터 공식적인 서면에 의한 승낙을 얻어야 한다." }]
  },
  {
    id: 2451, day: 24, level: "N2",
    word: "他人", kana: "たにん", pos: "명사",
    mean: "타인, 남",
    syn: [],
    collocations: [{ ja: "他人の目", ko: "남의 눈" }, { ja: "他人事", ko: "남의 일" }],
    examples: [{ type: "ex", label: "예문", ja: "他人の意見にも耳を傾けよう。", ko: "남의 의견에도 귀를 기울이자." }]
  },
  {
    id: 2452, day: 24, level: "N2",
    word: "相手", kana: "あいて", pos: "명사",
    mean: "상대",
    syn: [],
    collocations: [{ ja: "相手の気持ち", ko: "상대의 마음" }, { ja: "相談相手", ko: "상담 상대" }],
    examples: [{ type: "ex", label: "예문", ja: "相手の立場に立って考える。", ko: "상대의 입장에 서서 생각한다." }]
  },
  {
    id: 2453, day: 24, level: "N2",
    word: "仲間", kana: "なかま", pos: "명사",
    mean: "동료, 한패",
    syn: ["友達"],
    collocations: [{ ja: "仲間に入る", ko: "한패가 되다" }, { ja: "仲間意識", ko: "동료 의식" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい仲間ができてうれしい。", ko: "새로운 동료가 생겨서 기쁘다." }]
  },
  {
    id: 2454, day: 24, level: "N2",
    word: "同僚", kana: "どうりょう", pos: "명사",
    mean: "동료",
    syn: [],
    collocations: [{ ja: "会社の同僚", ko: "회사 동료" }],
    examples: [{ type: "ex", label: "예문", ja: "同僚と一緒に昼ご飯を食べた。", ko: "동료와 함께 점심을 먹었다." }]
  },
  {
    id: 2455, day: 24, level: "N2",
    word: "上司", kana: "じょうし", pos: "명사",
    mean: "상사",
    syn: [],
    collocations: [{ ja: "上司に相談する", ko: "상사와 상담하다" }],
    examples: [{ type: "ex", label: "예문", ja: "上司に報告書を提出した。", ko: "상사에게 보고서를 제출했다." }]
  },
  {
    id: 2456, day: 24, level: "N2",
    word: "部下", kana: "ぶか", pos: "명사",
    mean: "부하",
    syn: [],
    collocations: [{ ja: "部下を育てる", ko: "부하를 육성하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は部下に信頼されている。", ko: "그는 부하들에게 신뢰받고 있다." }]
  },
  {
    id: 346, day: 24, level: "N2",
    word: "推移", kana: "すいい", pos: "명사",
    mean: "추이 (시간의 경과에 따른 변화)",
    syn: ["移り変わり", "変化"],
    collocations: [{ ja: "情勢の推移", ko: "정세의 추이/전개 흐름" }, { ja: "推移を見守る", ko: "추이를 지켜보다" }],
    examples: [{ type: "on", label: "음독", ja: "為替相場や原油価格の急激な推移を慎重に見守りつつ、機動的な金融政策の判断を下す。", ko: "환율 시세와 원유 가격의 급격한 추이를 신중하게 지켜보면서 기동적인 금융정책 판단을 내린다." }]
  },
  {
    id: 243, day: 24, level: "N1",
    word: "概して", kana: "がいして", pos: "부사",
    mean: "대체로, 일반적으로",
    syn: ["一般に", "全体的に"],
    collocations: [{ ja: "概して言えば", ko: "대체로 말하자면" }, { ja: "概して良好だ", ko: "대체적으로 양호하다" }],
    examples: [{ type: "ex", label: "예문", ja: "今年の春は天候不順が心配されたが、農作物の収穫量は全国的に概して平年並みを維持した。", ko: "올봄은 기상 이변이 걱정되었으나 농작물 수확량은 전국적으로 대체로 평년 수준을 유지했다." }]
  },
  {
    id: 2457, day: 24, level: "N1",
    word: "認知", kana: "にんち", pos: "명사 (する동사)",
    mean: "인지",
    syn: ["認める"],
    collocations: [{ ja: "認知度", ko: "인지도" }, { ja: "社会に認知される", ko: "사회에 인정받다" }],
    examples: [{ type: "ex", label: "예문", ja: "その商品は若者の間で認知されつつある。", ko: "그 상품은 젊은이들 사이에서 인지되고 있다." }]
  },
  {
    id: 2458, day: 24, level: "N1",
    word: "配布", kana: "はいふ", pos: "명사 (する동사)",
    mean: "배포",
    syn: ["配る"],
    collocations: [{ ja: "資料を配布する", ko: "자료를 배포하다" }],
    examples: [{ type: "ex", label: "예문", ja: "会場で無料のパンフレットを配布している。", ko: "회장에서 무료 팸플릿을 배포하고 있다." }]
  },
  {
    id: 244, day: 24, level: "N1",
    word: "さぞ", kana: "さぞ", pos: "부사",
    mean: "필시, 틀림없이 (~だろう / 〜でしょう 호응)",
    syn: ["きっと", "さだめし"],
    collocations: [{ ja: "さぞかし〜だろう", ko: "필시(얼마나) ~하겠지" }, { ja: "さぞお辛いでしょう", ko: "얼마나 고통스러우시겠습니까" }],
    examples: [{ type: "ex", label: "예문", ja: "長年手塩にかけて育てた愛娘が遠く海外へ嫁ぐとあっては、父親もさぞ寂しいことだろう。", ko: "오랜 세월 정성껏 키운 사랑하는 딸이 멀리 해외로 시집을 가게 되었으니 아버지도 필시 몹시 적적할 것이다." }]
  },
  {
    id: 2459, day: 24, level: "N1",
    word: "波及", kana: "はきゅう", pos: "명사 (する동사)",
    mean: "파급",
    syn: ["広がる"],
    collocations: [{ ja: "波及効果", ko: "파급 효과" }],
    examples: [{ type: "ex", label: "예문", ja: "円高の影響は様々な産業に波及した。", ko: "엔고의 영향은 여러 산업에 파급되었다." }]
  },
  {
    id: 245, day: 24, level: "N1",
    word: "辛うじて", kana: "かろうじて", pos: "부사",
    mean: "간신히, 겨우",
    syn: ["やっと", "なんとか"],
    collocations: [{ ja: "辛うじて間に合う", ko: "간신히 시간 맞춰 대다" }, { ja: "辛うじて合格する", ko: "턱걸이로 겨우 합격하다" }],
    examples: [{ type: "ex", label: "예문", ja: "大雪の影響で電車のダイヤが乱れていたが、走って会場に向かい、辛うじて集合時刻に間に合った。", ko: "폭설 영향으로 전철 운행이 지연되었으나 시험장으로 달려가 간신히 집합 시각에 맞출 수 있었다." }]
  },
  {
    id: 2460, day: 24, level: "N1",
    word: "発揮", kana: "はっき", pos: "명사 (する동사)",
    mean: "발휘",
    syn: ["示す"],
    collocations: [{ ja: "実力を発揮する", ko: "실력을 발휘하다" }],
    examples: [{ type: "ex", label: "예문", ja: "本番で実力を十分に発揮できた。", ko: "실전에서 실력을 충분히 발휘할 수 있었다." }]
  },
  {
    id: 247, day: 24, level: "N1",
    word: "依然として", kana: "いぜんとして", pos: "부사",
    mean: "여전히, 변함없이",
    syn: ["相変わらず", "今も"],
    collocations: [{ ja: "依然として不明だ", ko: "여전히 행방불명/불명확하다" }, { ja: "依然として厳しい", ko: "변함없이 혹독하다/어렵다" }],
    examples: [{ type: "ex", label: "예문", ja: "政府が景気対策を相次いで打ち出しているにもかかわらず、地方の雇用情勢は依然として厳しいままだ。", ko: "정부가 경기 대책을 연달아 내놓고 있음에도 불구하고 지방의 고용 정세는 여전히 혹독한 상태 그대로이다." }]
  },
  // ==========================================
  // [DAY 25] N2 필수 + N1 · 63개
  // ==========================================
  {
    id: 2461, day: 25, level: "N2",
    word: "割り込む", kana: "わりこむ", pos: "동사 (자동사)",
    mean: "끼어들다",
    syn: [],
    collocations: [{ ja: "列に割り込む", ko: "줄에 끼어들다" }, { ja: "話に割り込む", ko: "이야기에 끼어들다" }],
    examples: [{ type: "ex", label: "예문", ja: "列に割り込むのはマナー違反だ。", ko: "줄에 끼어드는 것은 매너 위반이다." }]
  },
  {
    id: 2462, day: 25, level: "N2",
    word: "上回る", kana: "うわまわる", pos: "동사 (자동사)",
    mean: "웃돌다, 상회하다",
    syn: ["超える"],
    collocations: [{ ja: "予想を上回る", ko: "예상을 웃돌다" }, { ja: "平均を上回る", ko: "평균을 웃돌다" }],
    examples: [{ type: "ex", label: "예문", ja: "今年の売り上げは予想を大きく上回った。", ko: "올해 매출은 예상을 크게 웃돌았다." }]
  },
  {
    id: 2463, day: 25, level: "N2",
    word: "下回る", kana: "したまわる", pos: "동사 (자동사)",
    mean: "밑돌다, 하회하다",
    syn: ["割る"],
    collocations: [{ ja: "目標を下回る", ko: "목표를 밑돌다" }],
    examples: [{ type: "ex", label: "예문", ja: "参加者は予想を下回った。", ko: "참가자는 예상을 밑돌았다." }]
  },
  {
    id: 2464, day: 25, level: "N2",
    word: "見当たる", kana: "みあたる", pos: "동사 (자동사)",
    mean: "(찾던 것이) 눈에 띄다",
    syn: ["見つかる"],
    collocations: [{ ja: "鍵が見当たらない", ko: "열쇠가 안 보이다" }],
    examples: [{ type: "ex", label: "예문", ja: "眼鏡がどこにも見当たらない。", ko: "안경이 어디에도 안 보인다." }]
  },
  {
    id: 2465, day: 25, level: "N2",
    word: "見込む", kana: "みこむ", pos: "동사 (타동사)",
    mean: "예상하다, 기대하다",
    syn: ["予想する"],
    collocations: [{ ja: "増収を見込む", ko: "수입 증가를 예상하다" }, { ja: "将来を見込む", ko: "장래를 내다보다" }],
    examples: [{ type: "ex", label: "예문", ja: "来年は売り上げの増加が見込まれている。", ko: "내년에는 매출 증가가 예상되고 있다." }]
  },
  {
    id: 285, day: 25, level: "N2",
    word: "励ます", kana: "はげます", pos: "동사 (5단 타동사)",
    mean: "격려하다, 힘을 북돋우다",
    syn: ["元気づける", "勇気づける"],
    collocations: [{ ja: "友を励ます", ko: "친구를 격려하다" }, { ja: "声を励ます", ko: "목소리를 가다듬어 높이다" }],
    examples: [{ type: "kun", label: "훈독", ja: "挫折して自信を失っていた後輩を温かい言葉で励まし、再起のきっかけを与えた。", ko: "좌절하여 자신감을 잃고 있던 후배를 따뜻한 말로 격려해 재기의 계기를 마련해 주었다." }]
  },
  {
    id: 2466, day: 25, level: "N2",
    word: "見張る", kana: "みはる", pos: "동사 (타동사)",
    mean: "감시하다, (눈을) 크게 뜨다",
    syn: ["監視する"],
    collocations: [{ ja: "入口を見張る", ko: "입구를 감시하다" }, { ja: "目を見張る", ko: "눈이 휘둥그레지다" }],
    examples: [{ type: "ex", label: "예문", ja: "その技術の進歩には目を見張るものがある。", ko: "그 기술의 진보에는 놀라운 데가 있다." }]
  },
  {
    id: 2467, day: 25, level: "N2",
    word: "打ち消す", kana: "うちけす", pos: "동사 (타동사)",
    mean: "부정하다, 지우다",
    syn: ["否定する"],
    collocations: [{ ja: "うわさを打ち消す", ko: "소문을 부정하다" }],
    examples: [{ type: "ex", label: "예문", ja: "社長は倒産のうわさを打ち消した。", ko: "사장은 도산 소문을 부정했다." }]
  },
  {
    id: 2468, day: 25, level: "N2",
    word: "打ち込む", kana: "うちこむ", pos: "동사 (타동사)",
    mean: "몰두하다, 입력하다",
    syn: ["熱中する"],
    collocations: [{ ja: "研究に打ち込む", ko: "연구에 몰두하다" }, { ja: "データを打ち込む", ko: "데이터를 입력하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は寝る間も惜しんで研究に打ち込んだ。", ko: "그는 잠자는 시간도 아껴 가며 연구에 몰두했다." }]
  },
  {
    id: 2469, day: 25, level: "N2",
    word: "受け止める", kana: "うけとめる", pos: "동사 (타동사)",
    mean: "받아들이다, 받아내다",
    syn: ["受け入れる"],
    collocations: [{ ja: "批判を受け止める", ko: "비판을 받아들이다" }, { ja: "ボールを受け止める", ko: "공을 받아내다" }],
    examples: [{ type: "ex", label: "예문", ja: "厳しい意見も真剣に受け止めたい。", ko: "엄한 의견도 진지하게 받아들이고 싶다." }]
  },
  {
    id: 2470, day: 25, level: "N2",
    word: "言い出す", kana: "いいだす", pos: "동사 (타동사)",
    mean: "말을 꺼내다",
    syn: ["切り出す"],
    collocations: [{ ja: "別れを言い出す", ko: "이별을 말하다" }, { ja: "言い出しにくい", ko: "말을 꺼내기 어렵다" }],
    examples: [{ type: "ex", label: "예문", ja: "休みを取りたいと言い出しにくい雰囲気だ。", ko: "휴가를 쓰고 싶다고 말을 꺼내기 어려운 분위기다." }]
  },
  {
    id: 286, day: 25, level: "N2",
    word: "逃れる", kana: "のがれる", pos: "동사 (1단 자동사)",
    mean: "도망치다, 벗어나다, 모면하다",
    syn: ["逃げる", "免れる"],
    collocations: [{ ja: "難を逃れる", ko: "재난/화를 면하다" }, { ja: "追及を逃れる", ko: "추궁을 모면하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "迅速な初期消火と冷静な避難誘導のおかげで、全員が奇跡的に難を逃れることができた。", ko: "신속한 초기 진화와 냉정한 대피 유도 덕분에 전원이 기적적으로 화를 면할 수 있었다." }]
  },
  {
    id: 2471, day: 25, level: "N2",
    word: "言い返す", kana: "いいかえす", pos: "동사 (타동사)",
    mean: "말대꾸하다, 반박하다",
    syn: ["反論する"],
    collocations: [{ ja: "親に言い返す", ko: "부모에게 말대꾸하다" }],
    examples: [{ type: "ex", label: "예문", ja: "理不尽なことを言われて、思わず言い返した。", ko: "부당한 말을 듣고 저도 모르게 반박했다." }]
  },
  {
    id: 2472, day: 25, level: "N2",
    word: "漠然", kana: "ばくぜん", pos: "な형용사",
    mean: "막연함",
    syn: ["ぼんやりした"],
    collocations: [{ ja: "漠然とした不安", ko: "막연한 불안" }],
    examples: [{ type: "ex", label: "예문", ja: "将来に漠然とした不安を感じている。", ko: "장래에 막연한 불안을 느끼고 있다." }]
  },
  {
    id: 2473, day: 25, level: "N2",
    word: "有難い", kana: "ありがたい", pos: "い형용사",
    mean: "고맙다, 감사하다",
    syn: ["感謝すべき"],
    collocations: [{ ja: "有難いお言葉", ko: "감사한 말씀" }],
    examples: [{ type: "ex", label: "예문", ja: "手伝ってもらえると本当に有難い。", ko: "도와주시면 정말 고맙겠습니다." }]
  },
  {
    id: 2474, day: 25, level: "N2",
    word: "遥か", kana: "はるか", pos: "な형용사",
    mean: "아득함, 훨씬",
    syn: ["ずっと"],
    collocations: [{ ja: "遥かな昔", ko: "아득한 옛날" }, { ja: "遥かに大きい", ko: "훨씬 크다" }],
    examples: [{ type: "ex", label: "예문", ja: "実物は写真より遥かに大きかった。", ko: "실물은 사진보다 훨씬 컸다." }]
  },
  {
    id: 2475, day: 25, level: "N2",
    word: "万全", kana: "ばんぜん", pos: "な형용사",
    mean: "만전, 완벽함",
    syn: ["完璧な"],
    collocations: [{ ja: "万全の準備", ko: "만전의 준비" }],
    examples: [{ type: "ex", label: "예문", ja: "万全の態勢で試験に臨む。", ko: "만전의 태세로 시험에 임한다." }]
  },
  {
    id: 2476, day: 25, level: "N2",
    word: "蒸し暑い", kana: "むしあつい", pos: "い형용사",
    mean: "무덥다",
    syn: ["じめじめした"],
    collocations: [{ ja: "蒸し暑い夜", ko: "무더운 밤" }],
    examples: [{ type: "ex", label: "예문", ja: "日本の夏は蒸し暑い。", ko: "일본의 여름은 무덥다." }]
  },
  {
    id: 305, day: 25, level: "N2",
    word: "慌ただしい", kana: "あわただしい", pos: "い형용사",
    mean: "어수선하다, 분주하다, 눈코 뜰 새 없다",
    syn: ["忙しい", "せわしない"],
    collocations: [{ ja: "慌ただしい一日", ko: "분주한 하루" }, { ja: "年の瀬の慌ただしさ", ko: "연말의 어수선함" }],
    examples: [{ type: "kun", label: "훈독", ja: "年度末の締め切りに追われ、部署全体が息つく暇もない慌ただしい空気に包まれていた。", ko: "연도 말 마감에 쫓겨 부서 전체가 숨 돌릴 틈도 없는 분주한 공기에 휩싸여 있었다." }]
  },
  {
    id: 2477, day: 25, level: "N2",
    word: "卑怯", kana: "ひきょう", pos: "な형용사",
    mean: "비겁함",
    syn: ["ずるい"],
    collocations: [{ ja: "卑怯な手段", ko: "비겁한 수단" }],
    examples: [{ type: "ex", label: "예문", ja: "後ろから攻撃するなんて卑怯だ。", ko: "뒤에서 공격하다니 비겁하다." }]
  },
  {
    id: 2478, day: 25, level: "N2",
    word: "ユーモア", kana: "ユーモア", pos: "외래어",
    mean: "유머 (humor)",
    syn: ["しゃれ"],
    collocations: [{ ja: "ユーモアがある", ko: "유머가 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼のスピーチはユーモアにあふれていた。", ko: "그의 연설은 유머가 넘쳤다." }]
  },
  {
    id: 2479, day: 25, level: "N2",
    word: "ユニーク", kana: "ユニーク", pos: "외래어",
    mean: "독특함 (unique)",
    syn: ["独特な", "個性的な"],
    collocations: [{ ja: "ユニークな発想", ko: "독특한 발상" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はユニークなアイデアの持ち主だ。", ko: "그는 독특한 아이디어를 가진 사람이다." }]
  },
  {
    id: 2480, day: 25, level: "N2",
    word: "ライバル", kana: "ライバル", pos: "외래어",
    mean: "라이벌, 경쟁자 (rival)",
    syn: ["競争相手"],
    collocations: [{ ja: "ライバル会社", ko: "경쟁사" }],
    examples: [{ type: "ex", label: "예문", ja: "二人は良きライバルだ。", ko: "두 사람은 좋은 라이벌이다." }]
  },
  {
    id: 2481, day: 25, level: "N2",
    word: "一切", kana: "いっさい", pos: "부사",
    mean: "일절, 전혀",
    syn: ["全く"],
    collocations: [{ ja: "一切関係ない", ko: "전혀 관계없다" }],
    examples: [{ type: "ex", label: "예문", ja: "この件については一切知りません。", ko: "이 건에 대해서는 전혀 모릅니다." }]
  },
  {
    id: 2482, day: 25, level: "N2",
    word: "しきりに", kana: "しきりに", pos: "부사",
    mean: "자꾸, 빈번히",
    syn: ["頻繁に", "何度も"],
    collocations: [{ ja: "しきりに謝る", ko: "자꾸 사과하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はしきりに時計を気にしていた。", ko: "그는 자꾸 시계를 신경 썼다." }]
  },
  {
    id: 2483, day: 25, level: "N2",
    word: "少なからず", kana: "すくなからず", pos: "부사",
    mean: "적잖이",
    syn: ["かなり"],
    collocations: [{ ja: "少なからず影響する", ko: "적잖이 영향을 주다" }],
    examples: [{ type: "ex", label: "예문", ja: "その事件は社会に少なからず影響を与えた。", ko: "그 사건은 사회에 적잖이 영향을 주었다." }]
  },
  {
    id: 2484, day: 25, level: "N2",
    word: "せめて", kana: "せめて", pos: "부사",
    mean: "하다못해, 적어도",
    syn: ["少なくとも"],
    collocations: [{ ja: "せめて一言", ko: "하다못해 한마디" }],
    examples: [{ type: "ex", label: "예문", ja: "せめて連絡ぐらいはしてほしい。", ko: "적어도 연락 정도는 해 줬으면 좋겠다." }]
  },
  {
    id: 2485, day: 25, level: "N2",
    word: "ひっそり", kana: "ひっそり", pos: "부사 (의성어·의태어)",
    mean: "조용히, 쥐 죽은 듯",
    syn: ["静かに"],
    collocations: [{ ja: "ひっそり暮らす", ko: "조용히 살다" }],
    examples: [{ type: "ex", label: "예문", ja: "山奥の村はひっそりとしていた。", ko: "산속 마을은 쥐 죽은 듯 조용했다." }]
  },
  {
    id: 2486, day: 25, level: "N2",
    word: "もっとも", kana: "もっとも", pos: "접속사",
    mean: "하긴, 다만 (단서·보충)",
    syn: ["ただし"],
    collocations: [{ ja: "もっとも", ko: "하긴" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の言うことは正しい。もっとも、実行するのは難しいが。", ko: "그의 말은 옳다. 하긴 실행하기는 어렵지만." }]
  },
  {
    id: 2487, day: 25, level: "N2",
    word: "〜力", kana: "りょく", pos: "접미어",
    mean: "~력 (능력)",
    syn: [],
    collocations: [{ ja: "説得力", ko: "설득력" }, { ja: "集中力", ko: "집중력" }, { ja: "想像力", ko: "상상력" }],
    examples: []
  },
  {
    id: 2488, day: 25, level: "N2",
    word: "〜界", kana: "かい", pos: "접미어",
    mean: "~계 (분야)",
    syn: [],
    collocations: [{ ja: "芸能界", ko: "연예계" }, { ja: "経済界", ko: "경제계" }, { ja: "自然界", ko: "자연계" }],
    examples: []
  },
  {
    id: 2489, day: 25, level: "N2",
    word: "後輩", kana: "こうはい", pos: "명사",
    mean: "후배",
    syn: [],
    collocations: [{ ja: "後輩の面倒を見る", ko: "후배를 돌보다" }],
    examples: [{ type: "ex", label: "예문", ja: "後輩に仕事を教えた。", ko: "후배에게 일을 가르쳤다." }]
  },
  {
    id: 2490, day: 25, level: "N2",
    word: "新人", kana: "しんじん", pos: "명사",
    mean: "신인, 신입",
    syn: ["新入社員"],
    collocations: [{ ja: "新人研修", ko: "신입 연수" }],
    examples: [{ type: "ex", label: "예문", ja: "新人の頃は失敗ばかりしていた。", ko: "신입 시절에는 실수만 했다." }]
  },
  {
    id: 2491, day: 25, level: "N2",
    word: "素人", kana: "しろうと", pos: "명사",
    mean: "아마추어, 비전문가",
    syn: ["アマチュア"],
    collocations: [{ ja: "素人の考え", ko: "문외한의 생각" }],
    examples: [{ type: "ex", label: "예문", ja: "素人には難しい作業だ。", ko: "비전문가에게는 어려운 작업이다." }]
  },
  {
    id: 2492, day: 25, level: "N2",
    word: "玄人", kana: "くろうと", pos: "명사",
    mean: "전문가, 숙련자",
    syn: ["プロ", "専門家"],
    collocations: [{ ja: "玄人はだし", ko: "전문가 뺨치는 솜씨" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の料理は玄人顔負けだ。", ko: "그의 요리는 전문가 못지않다." }]
  },
  {
    id: 2493, day: 25, level: "N2",
    word: "学者", kana: "がくしゃ", pos: "명사",
    mean: "학자",
    syn: [],
    collocations: [{ ja: "学者の意見", ko: "학자의 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "多くの学者がこの説を支持している。", ko: "많은 학자가 이 설을 지지하고 있다." }]
  },
  {
    id: 2494, day: 25, level: "N2",
    word: "患者", kana: "かんじゃ", pos: "명사",
    mean: "환자",
    syn: ["病人"],
    collocations: [{ ja: "患者を診る", ko: "환자를 진찰하다" }],
    examples: [{ type: "ex", label: "예문", ja: "医者は患者の話をよく聞く。", ko: "의사는 환자의 이야기를 잘 듣는다." }]
  },
  {
    id: 2495, day: 25, level: "N2",
    word: "顧客", kana: "こきゃく", pos: "명사",
    mean: "고객",
    syn: ["客"],
    collocations: [{ ja: "顧客満足", ko: "고객 만족" }, { ja: "顧客情報", ko: "고객 정보" }],
    examples: [{ type: "ex", label: "예문", ja: "顧客の信頼を得ることが大切だ。", ko: "고객의 신뢰를 얻는 것이 중요하다." }]
  },
  {
    id: 347, day: 25, level: "N2",
    word: "阻止", kana: "そし", pos: "명사",
    mean: "저지 (막아서 못 하게 함)",
    syn: ["食い止めること", "防止"],
    collocations: [{ ja: "侵入を阻止する", ko: "침입을 저지하다" }, { ja: "水際で阻止する", ko: "국경/물가에서 사전 차단하다" }],
    examples: [{ type: "on", label: "음독", ja: "伝染病の国内流入を水際で阻止するため、空港や港湾での検疫体制が大幅に強化された。", ko: "전염병의 국내 유입을 관문에서 저지하기 위해 공항과 항만에서의 검역 체제가 대폭 강화되었다." }]
  },
  {
    id: 2496, day: 25, level: "N2",
    word: "市民", kana: "しみん", pos: "명사",
    mean: "시민",
    syn: ["住民"],
    collocations: [{ ja: "市民の声", ko: "시민의 목소리" }, { ja: "市民会館", ko: "시민 회관" }],
    examples: [{ type: "ex", label: "예문", ja: "市民の意見を政策に反映させる。", ko: "시민의 의견을 정책에 반영한다." }]
  },
  {
    id: 2497, day: 25, level: "N2",
    word: "国民", kana: "こくみん", pos: "명사",
    mean: "국민",
    syn: [],
    collocations: [{ ja: "国民の義務", ko: "국민의 의무" }],
    examples: [{ type: "ex", label: "예문", ja: "国民の生活を守るのが政府の役目だ。", ko: "국민의 생활을 지키는 것이 정부의 역할이다." }]
  },
  {
    id: 2498, day: 25, level: "N2",
    word: "民族", kana: "みんぞく", pos: "명사",
    mean: "민족",
    syn: [],
    collocations: [{ ja: "少数民族", ko: "소수 민족" }, { ja: "民族衣装", ko: "민족 의상" }],
    examples: [{ type: "ex", label: "예문", ja: "この国には多くの民族が暮らしている。", ko: "이 나라에는 많은 민족이 살고 있다." }]
  },
  {
    id: 2499, day: 25, level: "N2",
    word: "世間", kana: "せけん", pos: "명사",
    mean: "세상, 세간",
    syn: ["社会"],
    collocations: [{ ja: "世間の目", ko: "세상의 이목" }, { ja: "世間知らず", ko: "세상 물정 모름" }],
    examples: [{ type: "ex", label: "예문", ja: "世間の目を気にしすぎるのはよくない。", ko: "세상의 시선을 너무 신경 쓰는 것은 좋지 않다." }]
  },
  {
    id: 2500, day: 25, level: "N2",
    word: "群衆", kana: "ぐんしゅう", pos: "명사",
    mean: "군중",
    syn: ["人だかり"],
    collocations: [{ ja: "群衆が集まる", ko: "군중이 모이다" }],
    examples: [{ type: "ex", label: "예문", ja: "広場に大勢の群衆が集まった。", ko: "광장에 많은 군중이 모였다." }]
  },
  {
    id: 2501, day: 25, level: "N2",
    word: "時期", kana: "じき", pos: "명사",
    mean: "시기",
    syn: ["時"],
    collocations: [{ ja: "時期が悪い", ko: "시기가 나쁘다" }, { ja: "この時期", ko: "이 시기" }],
    examples: [{ type: "ex", label: "예문", ja: "今はまだ結論を出す時期ではない。", ko: "지금은 아직 결론을 낼 시기가 아니다." }]
  },
  {
    id: 348, day: 25, level: "N2",
    word: "調和", kana: "ちょうわ", pos: "명사",
    mean: "조화 (균형 있게 잘 어울림)",
    syn: ["バランス", "釣り合い"],
    collocations: [{ ja: "自然との調和", ko: "자연과의 조화" }, { ja: "調和を乱す", ko: "조화를 깨뜨리다" }],
    examples: [{ type: "on", label: "음독", ja: "伝統的な木造建築の美しさと最新の耐震技術が見事に調和した、新しいランドマークが完成した。", ko: "전통 목조 건축의 아름다움과 최신 내진 기술이 훌륭하게 조화를 이룬 새로운 랜드마크가 완공되었다." }]
  },
  {
    id: 2502, day: 25, level: "N2",
    word: "時代", kana: "じだい", pos: "명사",
    mean: "시대",
    syn: [],
    collocations: [{ ja: "時代の流れ", ko: "시대의 흐름" }, { ja: "学生時代", ko: "학창 시절" }],
    examples: [{ type: "ex", label: "예문", ja: "時代の流れに合わせて変わる必要がある。", ko: "시대의 흐름에 맞춰 변할 필요가 있다." }]
  },
  {
    id: 2503, day: 25, level: "N2",
    word: "世紀", kana: "せいき", pos: "명사",
    mean: "세기",
    syn: [],
    collocations: [{ ja: "二十一世紀", ko: "21세기" }, { ja: "世紀の大発見", ko: "세기의 대발견" }],
    examples: [{ type: "ex", label: "예문", ja: "これは世紀の大発見と言われている。", ko: "이것은 세기의 대발견이라고 불린다." }]
  },
  {
    id: 2504, day: 25, level: "N2",
    word: "年代", kana: "ねんだい", pos: "명사",
    mean: "연대, 세대",
    syn: ["世代"],
    collocations: [{ ja: "一九八〇年代", ko: "1980년대" }, { ja: "同じ年代", ko: "같은 세대" }],
    examples: [{ type: "ex", label: "예문", ja: "同じ年代の友人と話すと楽しい。", ko: "같은 세대 친구와 이야기하면 즐겁다." }]
  },
  {
    id: 2505, day: 25, level: "N2",
    word: "当時", kana: "とうじ", pos: "명사",
    mean: "당시",
    syn: ["その時"],
    collocations: [{ ja: "当時の記録", ko: "당시의 기록" }],
    examples: [{ type: "ex", label: "예문", ja: "当時はまだインターネットがなかった。", ko: "당시에는 아직 인터넷이 없었다." }]
  },
  {
    id: 2506, day: 25, level: "N2",
    word: "現代", kana: "げんだい", pos: "명사",
    mean: "현대",
    syn: [],
    collocations: [{ ja: "現代社会", ko: "현대 사회" }, { ja: "現代人", ko: "현대인" }],
    examples: [{ type: "ex", label: "예문", ja: "現代人はストレスを抱えている。", ko: "현대인은 스트레스를 안고 있다." }]
  },
  {
    id: 2507, day: 25, level: "N2",
    word: "近代", kana: "きんだい", pos: "명사",
    mean: "근대",
    syn: [],
    collocations: [{ ja: "近代化", ko: "근대화" }, { ja: "近代文学", ko: "근대 문학" }],
    examples: [{ type: "ex", label: "예문", ja: "日本の近代化は明治時代に始まった。", ko: "일본의 근대화는 메이지 시대에 시작되었다." }]
  },
  {
    id: 350, day: 25, level: "N2",
    word: "排出", kana: "はいしゅつ", pos: "명사",
    mean: "배출 (내부 물질을 밖으로 밀어냄)",
    syn: ["出すこと", "放出"],
    collocations: [{ ja: "ガスを排出する", ko: "가스를 배출하다" }, { ja: "排出ゼロ", ko: "탄소 배출 제로" }],
    examples: [{ type: "on", label: "음독", ja: "環境汚染物質の排出基準を大幅に引き下げることで、工場の周辺地域における大気質の改善を促す。", ko: "환경오염 물질 배출 기준을 대폭 강화함으로써 공장 주변 지역의 대기질 개선을 촉진하다." }]
  },
  {
    id: 2508, day: 25, level: "N2",
    word: "今後", kana: "こんご", pos: "명사",
    mean: "금후, 앞으로",
    syn: ["これから"],
    collocations: [{ ja: "今後の予定", ko: "앞으로의 예정" }, { ja: "今後ともよろしく", ko: "앞으로도 잘 부탁합니다" }],
    examples: [{ type: "ex", label: "예문", ja: "今後ともよろしくお願いいたします。", ko: "앞으로도 잘 부탁드립니다." }]
  },
  {
    id: 2509, day: 25, level: "N1",
    word: "反映", kana: "はんえい", pos: "명사 (する동사)",
    mean: "반영",
    syn: ["映す"],
    collocations: [{ ja: "意見を反映する", ko: "의견을 반영하다" }],
    examples: [{ type: "ex", label: "예문", ja: "住民の意見を計画に反映させる。", ko: "주민의 의견을 계획에 반영시킨다." }]
  },
  {
    id: 2510, day: 25, level: "N1",
    word: "比重", kana: "ひじゅう", pos: "명사",
    mean: "비중",
    syn: ["割合"],
    collocations: [{ ja: "比重が大きい", ko: "비중이 크다" }],
    examples: [{ type: "ex", label: "예문", ja: "家計に占める食費の比重が大きい。", ko: "가계에서 차지하는 식비의 비중이 크다." }]
  },
  {
    id: 253, day: 25, level: "N1",
    word: "葛藤", kana: "かっとう", pos: "명사",
    mean: "갈등 (내적 고민 / 대립)",
    syn: ["対立", "迷い"],
    collocations: [{ ja: "葛藤を抱える", ko: "내적 갈등을 안다" }, { ja: "心の葛藤", ko: "마음속 갈등과 방황" }],
    examples: [{ type: "on", label: "음독", ja: "安定した現状を維持すべきか未知の夢に挑戦すべきか、若者の胸の内には激しい葛藤があった。", ko: "안정된 현 상태를 유지해야 할지 미지의 꿈에 도전해야 할지 젊은이의 가슴속에는 격한 갈등이 있었다." }]
  },
  {
    id: 2511, day: 25, level: "N1",
    word: "披露", kana: "ひろう", pos: "명사 (する동사)",
    mean: "피로, 공개",
    syn: ["発表"],
    collocations: [{ ja: "腕前を披露する", ko: "솜씨를 선보이다" }, { ja: "結婚披露宴", ko: "결혼 피로연" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はパーティーで手品を披露した。", ko: "그는 파티에서 마술을 선보였다." }]
  },
  {
    id: 254, day: 25, level: "N1",
    word: "核心", kana: "かくしん", pos: "명사",
    mean: "핵심 (문제의 가장 중심부)",
    syn: ["中心", "要点"],
    collocations: [{ ja: "核心を突く", ko: "핵심을 찌르다" }, { ja: "問題の核心", ko: "문제의 핵심" }],
    examples: [{ type: "on", label: "음독", ja: "表面的な言い争いに終始するのではなく、議論を論点の核心へと導くファシリテーションが求められる。", ko: "표면적인 말다툼에 그치지 않고 논의를 논점의 핵심으로 이끄는 조율 능력이 요구된다." }]
  },
  {
    id: 2512, day: 25, level: "N1",
    word: "頻繁", kana: "ひんぱん", pos: "な형용사",
    mean: "빈번함",
    syn: ["しばしば"],
    collocations: [{ ja: "頻繁に起こる", ko: "빈번히 일어나다" }],
    examples: [{ type: "ex", label: "예문", ja: "この道では事故が頻繁に起こる。", ko: "이 길에서는 사고가 빈번히 일어난다." }]
  },
  {
    id: 2513, day: 25, level: "N1",
    word: "負荷", kana: "ふか", pos: "명사 (する동사)",
    mean: "부하",
    syn: ["負担"],
    collocations: [{ ja: "体に負荷がかかる", ko: "몸에 부하가 걸리다" }],
    examples: [{ type: "ex", label: "예문", ja: "環境への負荷を減らす。", ko: "환경에 대한 부하를 줄인다." }]
  },
  {
    id: 257, day: 25, level: "N1",
    word: "寄与", kana: "きよ", pos: "명사",
    mean: "기여 (도움이 됨)",
    syn: ["貢献", "役立つこと"],
    collocations: [{ ja: "発展に寄与する", ko: "발전에 기여하다" }, { ja: "大きく寄与する", ko: "지대하게 공헌/기여하다" }],
    examples: [{ type: "on", label: "음독", ja: "新エネルギー技術の実用化は、将来的な環境負荷の低減と持続可能な社会の実現に大きく寄与する。", ko: "신에너지 기술의 실용화는 장래 환경 부담의 경감과 지속 가능한 사회 실현에 크게 기여한다." }]
  },
  {
    id: 2514, day: 25, level: "N1",
    word: "普遍的", kana: "ふへんてき", pos: "な형용사",
    mean: "보편적",
    syn: ["一般的な"],
    collocations: [{ ja: "普遍的な価値", ko: "보편적 가치" }],
    examples: [{ type: "ex", label: "예문", ja: "愛は普遍的なテーマだ。", ko: "사랑은 보편적인 주제다." }]
  },
  // ==========================================
  // [DAY 26] N2 필수 + N1 · 60개
  // ==========================================
  {
    id: 2515, day: 26, level: "N2",
    word: "書き込む", kana: "かきこむ", pos: "동사 (타동사)",
    mean: "써넣다, 기입하다",
    syn: ["記入する"],
    collocations: [{ ja: "手帳に書き込む", ko: "수첩에 적어 넣다" }, { ja: "掲示板に書き込む", ko: "게시판에 글을 올리다" }],
    examples: [{ type: "ex", label: "예문", ja: "予定を手帳に書き込んだ。", ko: "일정을 수첩에 적어 넣었다." }]
  },
  {
    id: 2516, day: 26, level: "N2",
    word: "繰り返す", kana: "くりかえす", pos: "동사 (타동사)",
    mean: "반복하다",
    syn: ["重ねる"],
    collocations: [{ ja: "失敗を繰り返す", ko: "실패를 반복하다" }, { ja: "何度も繰り返す", ko: "몇 번이나 반복하다" }],
    examples: [{ type: "ex", label: "예문", ja: "同じ間違いを繰り返さないように気をつけよう。", ko: "같은 실수를 반복하지 않도록 조심하자." }]
  },
  {
    id: 2517, day: 26, level: "N2",
    word: "繰り広げる", kana: "くりひろげる", pos: "동사 (타동사)",
    mean: "펼치다, 전개하다",
    syn: ["展開する"],
    collocations: [{ ja: "熱戦を繰り広げる", ko: "열전을 펼치다" }],
    examples: [{ type: "ex", label: "예문", ja: "両チームは激しい試合を繰り広げた。", ko: "양 팀은 치열한 경기를 펼쳤다." }]
  },
  {
    id: 2518, day: 26, level: "N2",
    word: "組み合わせる", kana: "くみあわせる", pos: "동사 (타동사)",
    mean: "조합하다, 짜 맞추다",
    syn: [],
    collocations: [{ ja: "色を組み合わせる", ko: "색을 조합하다" }],
    examples: [{ type: "ex", label: "예문", ja: "いくつかの方法を組み合わせて問題を解決した。", ko: "몇 가지 방법을 조합해 문제를 해결했다." }]
  },
  {
    id: 287, day: 26, level: "N2",
    word: "逃す", kana: "のがす", pos: "동사 (5단 타동사)",
    mean: "놓치다, 잃다",
    syn: ["取り逃がす", "見逃す"],
    collocations: [{ ja: "好機を逃す", ko: "절호의 기회를 놓치다" }, { ja: "犯人を逃す", ko: "범인을 놓치다" }],
    examples: [{ type: "kun", label: "훈독", ja: "千載一遇のビジネスチャンスを決して逃すまいと、全社を挙げて迅速な決断を下した。", ko: "천재일우의 사업 기회를 결코 놓치지 않겠다고 전사적으로 신속한 결단을 내렸다." }]
  },
  {
    id: 2519, day: 26, level: "N2",
    word: "呼び止める", kana: "よびとめる", pos: "동사 (타동사)",
    mean: "불러 세우다",
    syn: [],
    collocations: [{ ja: "通行人を呼び止める", ko: "행인을 불러 세우다" }],
    examples: [{ type: "ex", label: "예문", ja: "駅を出たところで警官に呼び止められた。", ko: "역을 나서자 경찰관이 불러 세웠다." }]
  },
  {
    id: 2520, day: 26, level: "N2",
    word: "寄りかかる", kana: "よりかかる", pos: "동사 (자동사)",
    mean: "기대다, 의존하다",
    syn: ["もたれる", "頼る"],
    collocations: [{ ja: "壁に寄りかかる", ko: "벽에 기대다" }, { ja: "親に寄りかかる", ko: "부모에게 기대다" }],
    examples: [{ type: "ex", label: "예문", ja: "疲れて壁に寄りかかった。", ko: "지쳐서 벽에 기댔다." }]
  },
  {
    id: 2521, day: 26, level: "N2",
    word: "追い出す", kana: "おいだす", pos: "동사 (타동사)",
    mean: "쫓아내다",
    syn: ["追い払う"],
    collocations: [{ ja: "部屋から追い出す", ko: "방에서 쫓아내다" }],
    examples: [{ type: "ex", label: "예문", ja: "うるさいと言われて部屋から追い出された。", ko: "시끄럽다고 방에서 쫓겨났다." }]
  },
  {
    id: 2522, day: 26, level: "N2",
    word: "追い込む", kana: "おいこむ", pos: "동사 (타동사)",
    mean: "몰아넣다",
    syn: ["追い詰める"],
    collocations: [{ ja: "窮地に追い込む", ko: "궁지로 몰아넣다" }, { ja: "閉店に追い込まれる", ko: "폐점에 몰리다" }],
    examples: [{ type: "ex", label: "예문", ja: "不況で多くの店が閉店に追い込まれた。", ko: "불황으로 많은 가게가 폐점에 몰렸다." }]
  },
  {
    id: 2523, day: 26, level: "N2",
    word: "思い切る", kana: "おもいきる", pos: "동사 (타동사)",
    mean: "결심하다, 단념하다",
    syn: ["決心する"],
    collocations: [{ ja: "思い切って話す", ko: "큰맘 먹고 말하다" }],
    examples: [{ type: "ex", label: "예문", ja: "思い切って留学することにした。", ko: "큰맘 먹고 유학하기로 했다." }]
  },
  {
    id: 288, day: 26, level: "N2",
    word: "澄む", kana: "すむ", pos: "동사 (5단 자동사)",
    mean: "맑아지다, 투명해지다, 청아해지다",
    syn: ["きれいになる", "透き通る"],
    collocations: [{ ja: "空気が澄む", ko: "공기가 맑다/청명하다" }, { ja: "澄んだ瞳", ko: "맑고 깨끗한 눈망울" }],
    examples: [{ type: "kun", label: "훈독", ja: "秋の早朝の澄み切った空気を胸いっぱいに吸い込むと、頭がすっきりと冴え渡る。", ko: "가을 이른 아침의 맑디맑은 공기를 가슴 가득 들이마시면 머리가 맑고 상쾌해진다." }, { type: "on", label: "음독", ja: "厳格な水質検査基準をクリアした清澄(せいちょう)な湧き水を使用している。", ko: "엄격한 수질검사 기준을 통과한 맑고 깨끗한 용천수를 사용하고 있다." }]
  },
  {
    id: 2524, day: 26, level: "N2",
    word: "思い浮かべる", kana: "おもいうかべる", pos: "동사 (타동사)",
    mean: "떠올리다",
    syn: ["思い出す"],
    collocations: [{ ja: "顔を思い浮かべる", ko: "얼굴을 떠올리다" }],
    examples: [{ type: "ex", label: "예문", ja: "故郷の景色を思い浮かべた。", ko: "고향의 경치를 떠올렸다." }]
  },
  {
    id: 2525, day: 26, level: "N2",
    word: "生ぬるい", kana: "なまぬるい", pos: "い형용사",
    mean: "미지근하다, 미온적이다",
    syn: ["温い"],
    collocations: [{ ja: "生ぬるいビール", ko: "미지근한 맥주" }, { ja: "生ぬるい対応", ko: "미온적인 대응" }],
    examples: [{ type: "ex", label: "예문", ja: "そんな生ぬるいやり方では問題は解決しない。", ko: "그런 미온적인 방식으로는 문제가 해결되지 않는다." }]
  },
  {
    id: 2526, day: 26, level: "N2",
    word: "必死", kana: "ひっし", pos: "な형용사",
    mean: "필사적임",
    syn: ["懸命な"],
    collocations: [{ ja: "必死に勉強する", ko: "필사적으로 공부하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は必死に助けを求めた。", ko: "그는 필사적으로 도움을 청했다." }]
  },
  {
    id: 2527, day: 26, level: "N2",
    word: "皮肉", kana: "ひにく", pos: "な형용사",
    mean: "비꼼, 아이러니함",
    syn: [],
    collocations: [{ ja: "皮肉を言う", ko: "비꼬다" }, { ja: "皮肉な結果", ko: "아이러니한 결과" }],
    examples: [{ type: "ex", label: "예문", ja: "努力した人が報われないとは皮肉なことだ。", ko: "노력한 사람이 보상받지 못하다니 아이러니한 일이다." }]
  },
  {
    id: 2528, day: 26, level: "N2",
    word: "粘り強い", kana: "ねばりづよい", pos: "い형용사",
    mean: "끈기 있다",
    syn: ["根気強い"],
    collocations: [{ ja: "粘り強い交渉", ko: "끈질긴 협상" }],
    examples: [{ type: "ex", label: "예문", ja: "粘り強く説得を続けた。", ko: "끈기 있게 설득을 계속했다." }]
  },
  {
    id: 306, day: 26, level: "N2",
    word: "虚しい", kana: "むなしい", pos: "い형용사",
    mean: "허무하다, 헛되다, 덧없다",
    syn: ["むなしい", "はかない"],
    collocations: [{ ja: "虚しい努力", ko: "헛수고/헛된 노력" }, { ja: "虚しさを覚える", ko: "마음속 허무함을 느끼다" }],
    examples: [{ type: "kun", label: "훈독", ja: "相手に聞く耳がないままいくら熱心に説得を試みても、すべては虚しい言葉として消え去るだけだ。", ko: "상대가 들을 귀가 없는 채 아무리 열성껏 설득을 시도해도 모든 것은 헛된 말로 사라질 뿐이다." }]
  },
  {
    id: 2529, day: 26, level: "N2",
    word: "微か", kana: "かすか", pos: "な형용사",
    mean: "희미함, 어렴풋함",
    syn: ["わずかな"],
    collocations: [{ ja: "微かな音", ko: "희미한 소리" }],
    examples: [{ type: "ex", label: "예문", ja: "微かに花の香りがする。", ko: "희미하게 꽃향기가 난다." }]
  },
  {
    id: 2530, day: 26, level: "N2",
    word: "リーダー", kana: "リーダー", pos: "외래어",
    mean: "리더, 지도자 (leader)",
    syn: ["指導者"],
    collocations: [{ ja: "チームのリーダー", ko: "팀의 리더" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はリーダーとしての素質がある。", ko: "그는 리더로서의 자질이 있다." }]
  },
  {
    id: 170, day: 26, level: "N2",
    word: "モチベーション", kana: "もちべーしょん", pos: "외래어",
    mean: "동기 부여, 내적 의욕 (motivation)",
    syn: ["やる気", "意欲"],
    collocations: [{ ja: "モチベーションを高める", ko: "동기 부여를 높이다" }, { ja: "モチベーションの維持", ko: "학습/근무 의욕 유지" }],
    examples: [{ type: "ex", label: "예문", ja: "公正で納得感のある評価制度の導入が、社員の日常的な学習モチベーションを大きく引き上げる。", ko: "공정하고 납득할 만한 평가 제도의 도입이 사원의 일상적인 학습 동기(의욕)를 크게 끌어올린다." }]
  },
  {
    id: 2531, day: 26, level: "N2",
    word: "リサイクル", kana: "リサイクル", pos: "외래어",
    mean: "재활용 (recycle)",
    syn: ["再利用"],
    collocations: [{ ja: "リサイクルに出す", ko: "재활용으로 내놓다" }],
    examples: [{ type: "ex", label: "예문", ja: "空き缶をリサイクルする。", ko: "빈 캔을 재활용한다." }]
  },
  {
    id: 2532, day: 26, level: "N2",
    word: "是非とも", kana: "ぜひとも", pos: "부사",
    mean: "꼭, 반드시",
    syn: ["必ず"],
    collocations: [{ ja: "是非ともお願いしたい", ko: "꼭 부탁드리고 싶다" }],
    examples: [{ type: "ex", label: "예문", ja: "この機会に是非とも参加したい。", ko: "이번 기회에 꼭 참가하고 싶다." }]
  },
  {
    id: 2533, day: 26, level: "N2",
    word: "そのうち", kana: "そのうち", pos: "부사",
    mean: "머지않아, 조만간",
    syn: ["いずれ", "近いうちに"],
    collocations: [{ ja: "そのうち分かる", ko: "머지않아 알게 된다" }],
    examples: [{ type: "ex", label: "예문", ja: "そのうち遊びに行くよ。", ko: "조만간 놀러 갈게." }]
  },
  {
    id: 2534, day: 26, level: "N2",
    word: "てっきり", kana: "てっきり", pos: "부사",
    mean: "틀림없이 (~인 줄 알았는데)",
    syn: ["すっかり"],
    collocations: [{ ja: "てっきり休みだと思った", ko: "틀림없이 쉬는 날인 줄 알았다" }],
    examples: [{ type: "ex", label: "예문", ja: "てっきり彼が来ると思っていた。", ko: "당연히 그가 올 줄 알았다." }]
  },
  {
    id: 2535, day: 26, level: "N2",
    word: "当面", kana: "とうめん", pos: "부사",
    mean: "당면, 당분간",
    syn: ["しばらく", "当分"],
    collocations: [{ ja: "当面の課題", ko: "당면 과제" }],
    examples: [{ type: "ex", label: "예문", ja: "当面はこの方法で様子を見る。", ko: "당분간은 이 방법으로 상황을 지켜본다." }]
  },
  {
    id: 315, day: 26, level: "N2",
    word: "よほど", kana: "よほど", pos: "부사",
    mean: "상당히, 어지간히 / (よほど〜ようと思った) 차라리 ~할까 했다",
    syn: ["かなり", "相当"],
    collocations: [{ ja: "よほどの理由", ko: "어지간히 중대한 이유" }, { ja: "よほど疲れていたらしい", ko: "상당히 지쳐 있었던 모양이다" }],
    examples: [{ type: "ex", label: "예문", ja: "普段は温厚な彼があれほど声を荒らげて激怒するとは、よほどの事情があったに違いない。", ko: "평소 온후하던 그가 저토록 목소리를 높이며 격노하다니 어지간한 사정이 있었음에 틀림없다." }]
  },
  {
    id: 2536, day: 26, level: "N2",
    word: "ふわふわ", kana: "ふわふわ", pos: "부사 (의성어·의태어)",
    mean: "폭신폭신, 둥실둥실",
    syn: ["柔らかい"],
    collocations: [{ ja: "ふわふわのパン", ko: "폭신폭신한 빵" }],
    examples: [{ type: "ex", label: "예문", ja: "ふわふわの布団で眠った。", ko: "폭신폭신한 이불에서 잤다." }]
  },
  {
    id: 2537, day: 26, level: "N2",
    word: "ぶかぶか", kana: "ぶかぶか", pos: "부사 (의성어·의태어)",
    mean: "헐렁헐렁",
    syn: ["大きすぎる"],
    collocations: [{ ja: "ぶかぶかの靴", ko: "헐렁한 신발" }],
    examples: [{ type: "ex", label: "예문", ja: "兄のお下がりの服はぶかぶかだ。", ko: "형이 물려준 옷은 헐렁헐렁하다." }]
  },
  {
    id: 2538, day: 26, level: "N2",
    word: "〜者", kana: "しゃ", pos: "접미어",
    mean: "~자 (사람)",
    syn: [],
    collocations: [{ ja: "参加者", ko: "참가자" }, { ja: "利用者", ko: "이용자" }, { ja: "責任者", ko: "책임자" }],
    examples: []
  },
  {
    id: 2539, day: 26, level: "N2",
    word: "以降", kana: "いこう", pos: "명사",
    mean: "이후",
    syn: ["以後"],
    collocations: [{ ja: "明日以降", ko: "내일 이후" }],
    examples: [{ type: "ex", label: "예문", ja: "午後五時以降は受け付けておりません。", ko: "오후 5시 이후에는 접수하지 않습니다." }]
  },
  {
    id: 2540, day: 26, level: "N2",
    word: "直前", kana: "ちょくぜん", pos: "명사",
    mean: "직전",
    syn: [],
    collocations: [{ ja: "出発直前", ko: "출발 직전" }, { ja: "試験の直前", ko: "시험 직전" }],
    examples: [{ type: "ex", label: "예문", ja: "出発の直前に忘れ物に気づいた。", ko: "출발 직전에 두고 온 물건을 알아챘다." }]
  },
  {
    id: 2541, day: 26, level: "N2",
    word: "直後", kana: "ちょくご", pos: "명사",
    mean: "직후",
    syn: [],
    collocations: [{ ja: "事故の直後", ko: "사고 직후" }],
    examples: [{ type: "ex", label: "예문", ja: "地震の直後は電話がつながらなかった。", ko: "지진 직후에는 전화가 연결되지 않았다." }]
  },
  {
    id: 2542, day: 26, level: "N2",
    word: "前後", kana: "ぜんご", pos: "명사 (する동사)",
    mean: "전후, 앞뒤",
    syn: [],
    collocations: [{ ja: "前後を確認する", ko: "앞뒤를 확인하다" }, { ja: "三十歳前後", ko: "30세 전후" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は三十歳前後に見える。", ko: "그는 서른 살 전후로 보인다." }]
  },
  {
    id: 2543, day: 26, level: "N2",
    word: "早朝", kana: "そうちょう", pos: "명사",
    mean: "이른 아침",
    syn: [],
    collocations: [{ ja: "早朝から働く", ko: "이른 아침부터 일하다" }],
    examples: [{ type: "ex", label: "예문", ja: "早朝に散歩するのが日課だ。", ko: "이른 아침에 산책하는 것이 일과다." }]
  },
  {
    id: 393, day: 26, level: "N2",
    word: "意欲", kana: "いよく", pos: "명사",
    mean: "의욕 (적극적으로 하려는 마음)",
    syn: ["やる気", "熱意"],
    collocations: [{ ja: "学習意欲を高める", ko: "학습 의욕을 북돋우다" }, { ja: "意欲が湧く", ko: "의욕이 샘솟다" }],
    examples: [{ type: "on", label: "음독", ja: "社員が自発的に資格取得に挑戦できるよう、社内表彰制度を設けて成長意欲を後押しする。", ko: "사원이 자발적으로 자격증 취득에 도전할 수 있도록 사내 표창 제도를 두어 성장 의욕을 뒷받침하다." }]
  },
  {
    id: 2544, day: 26, level: "N2",
    word: "深夜", kana: "しんや", pos: "명사",
    mean: "심야",
    syn: ["夜中"],
    collocations: [{ ja: "深夜まで働く", ko: "심야까지 일하다" }, { ja: "深夜番組", ko: "심야 프로그램" }],
    examples: [{ type: "ex", label: "예문", ja: "深夜まで仕事をすることが多い。", ko: "심야까지 일하는 경우가 많다." }]
  },
  {
    id: 2545, day: 26, level: "N2",
    word: "日中", kana: "にっちゅう", pos: "명사",
    mean: "낮 동안",
    syn: ["昼間"],
    collocations: [{ ja: "日中は暑い", ko: "낮에는 덥다" }],
    examples: [{ type: "ex", label: "예문", ja: "日中は暑くても、夜は涼しい。", ko: "낮에는 더워도 밤에는 시원하다." }]
  },
  {
    id: 2546, day: 26, level: "N2",
    word: "平日", kana: "へいじつ", pos: "명사",
    mean: "평일",
    syn: [],
    collocations: [{ ja: "平日は忙しい", ko: "평일에는 바쁘다" }],
    examples: [{ type: "ex", label: "예문", ja: "この店は平日でも混んでいる。", ko: "이 가게는 평일에도 붐빈다." }]
  },
  {
    id: 2547, day: 26, level: "N2",
    word: "休日", kana: "きゅうじつ", pos: "명사",
    mean: "휴일",
    syn: ["休み"],
    collocations: [{ ja: "休日出勤", ko: "휴일 출근" }],
    examples: [{ type: "ex", label: "예문", ja: "休日は家族と過ごすことが多い。", ko: "휴일에는 가족과 보내는 일이 많다." }]
  },
  {
    id: 2548, day: 26, level: "N2",
    word: "連休", kana: "れんきゅう", pos: "명사",
    mean: "연휴",
    syn: [],
    collocations: [{ ja: "三連休", ko: "3일 연휴" }],
    examples: [{ type: "ex", label: "예문", ja: "連休に温泉旅行に行った。", ko: "연휴에 온천 여행을 갔다." }]
  },
  {
    id: 2549, day: 26, level: "N2",
    word: "年末", kana: "ねんまつ", pos: "명사",
    mean: "연말",
    syn: [],
    collocations: [{ ja: "年末年始", ko: "연말연시" }],
    examples: [{ type: "ex", label: "예문", ja: "年末は何かと忙しい。", ko: "연말은 이래저래 바쁘다." }]
  },
  {
    id: 2550, day: 26, level: "N2",
    word: "上旬", kana: "じょうじゅん", pos: "명사",
    mean: "상순, 초순",
    syn: ["初旬"],
    collocations: [{ ja: "来月上旬", ko: "다음 달 초순" }],
    examples: [{ type: "ex", label: "예문", ja: "工事は来月上旬に終わる予定だ。", ko: "공사는 다음 달 초순에 끝날 예정이다." }]
  },
  {
    id: 395, day: 26, level: "N2",
    word: "閲覧", kana: "えつらん", pos: "명사",
    mean: "열람 (책이나 웹 문서를 훑어봄)",
    syn: ["見ること", "読むこと"],
    collocations: [{ ja: "資料を閲覧する", ko: "보존 자료를 열람하다" }, { ja: "閲覧履歴", ko: "웹 브라우저 열람 기록" }],
    examples: [{ type: "on", label: "음독", ja: "個人情報保護の観点から、社外秘に指定された顧客データの閲覧権限は厳格に制限されている。", ko: "개인정보 보호 관점에서 대외비로 지정된 고객 데이터의 열람 권한은 엄격히 제한되어 있다." }]
  },
  {
    id: 2551, day: 26, level: "N2",
    word: "中旬", kana: "ちゅうじゅん", pos: "명사",
    mean: "중순",
    syn: [],
    collocations: [{ ja: "十月中旬", ko: "10월 중순" }],
    examples: [{ type: "ex", label: "예문", ja: "桜は三月中旬ごろ咲き始める。", ko: "벚꽃은 3월 중순쯤 피기 시작한다." }]
  },
  {
    id: 2552, day: 26, level: "N2",
    word: "下旬", kana: "げじゅん", pos: "명사",
    mean: "하순",
    syn: [],
    collocations: [{ ja: "今月下旬", ko: "이달 하순" }],
    examples: [{ type: "ex", label: "예문", ja: "商品は今月下旬に発売される。", ko: "상품은 이달 하순에 발매된다." }]
  },
  {
    id: 2553, day: 26, level: "N2",
    word: "行事", kana: "ぎょうじ", pos: "명사",
    mean: "행사",
    syn: ["イベント"],
    collocations: [{ ja: "年中行事", ko: "연중행사" }, { ja: "学校行事", ko: "학교 행사" }],
    examples: [{ type: "ex", label: "예문", ja: "運動会は大切な学校行事だ。", ko: "운동회는 중요한 학교 행사다." }]
  },
  {
    id: 2554, day: 26, level: "N2",
    word: "祭り", kana: "まつり", pos: "명사",
    mean: "축제",
    syn: ["祭典"],
    collocations: [{ ja: "夏祭り", ko: "여름 축제" }, { ja: "祭りに行く", ko: "축제에 가다" }],
    examples: [{ type: "ex", label: "예문", ja: "地元の夏祭りに行った。", ko: "고향의 여름 축제에 갔다." }]
  },
  {
    id: 2555, day: 26, level: "N2",
    word: "観光", kana: "かんこう", pos: "명사 (する동사)",
    mean: "관광",
    syn: [],
    collocations: [{ ja: "観光地", ko: "관광지" }, { ja: "観光客", ko: "관광객" }],
    examples: [{ type: "ex", label: "예문", ja: "京都は外国人観光客に人気がある。", ko: "교토는 외국인 관광객에게 인기가 있다." }]
  },
  {
    id: 2556, day: 26, level: "N2",
    word: "名所", kana: "めいしょ", pos: "명사",
    mean: "명소",
    syn: [],
    collocations: [{ ja: "桜の名所", ko: "벚꽃 명소" }, { ja: "名所を巡る", ko: "명소를 돌다" }],
    examples: [{ type: "ex", label: "예문", ja: "この公園は桜の名所として有名だ。", ko: "이 공원은 벚꽃 명소로 유명하다." }]
  },
  {
    id: 396, day: 26, level: "N2",
    word: "獲得", kana: "かくとく", pos: "명사",
    mean: "획득 (노력하여 손에 넣음)",
    syn: ["手に入れること", "取得"],
    collocations: [{ ja: "権利を獲得する", ko: "정당한 권리를 쟁취/획득하다" }, { ja: "金メダルを獲得する", ko: "금메달을 획득하다" }],
    examples: [{ type: "on", label: "음독", ja: "熾烈なグローバル競争の中で、高い技術力を持つ優秀な外国人エンジニアの獲得に全力を挙げる。", ko: "치열한 글로벌 경쟁 속에서 높은 기술력을 지닌 우수한 외국인 기술자의 영입(획득)에 총력을 기울이다." }]
  },
  {
    id: 2557, day: 26, level: "N2",
    word: "宿泊", kana: "しゅくはく", pos: "명사 (する동사)",
    mean: "숙박",
    syn: ["泊まる"],
    collocations: [{ ja: "宿泊施設", ko: "숙박 시설" }, { ja: "宿泊料", ko: "숙박료" }],
    examples: [{ type: "ex", label: "예문", ja: "ホテルに二泊宿泊した。", ko: "호텔에 2박 숙박했다." }]
  },
  {
    id: 2558, day: 26, level: "N2",
    word: "景色", kana: "けしき", pos: "명사",
    mean: "경치",
    syn: ["風景", "眺め"],
    collocations: [{ ja: "景色がいい", ko: "경치가 좋다" }],
    examples: [{ type: "ex", label: "예문", ja: "ここから見る景色は最高だ。", ko: "여기서 보는 경치는 최고다." }]
  },
  {
    id: 261, day: 26, level: "N1",
    word: "禁物", kana: "きんもつ", pos: "명사",
    mean: "금물 (해서는 안 될 일)",
    syn: ["してはいけないこと", "タブー"],
    collocations: [{ ja: "油断は禁物だ", ko: "방심은 금물이다" }, { ja: "焦りは禁物", ko: "초조함은 금물" }],
    examples: [{ type: "on", label: "음독", ja: "試験の終了ベルが鳴る最後の瞬間まで絶対に合格を確信して気を緩めてはならず、油断は禁物だ。", ko: "시험 종료 벨이 울리는 마지막 순간까지 결코 합격을 확신해 마음을 놓아서는 안 되며, 방심은 금물이다." }]
  },
  {
    id: 2559, day: 26, level: "N1",
    word: "変動", kana: "へんどう", pos: "명사 (する동사)",
    mean: "변동",
    syn: ["変化"],
    collocations: [{ ja: "価格の変動", ko: "가격 변동" }, { ja: "気候変動", ko: "기후 변동" }],
    examples: [{ type: "ex", label: "예문", ja: "為替の変動が経済に影響を与える。", ko: "환율 변동이 경제에 영향을 준다." }]
  },
  {
    id: 267, day: 26, level: "N1",
    word: "指針", kana: "ししん", pos: "명사",
    mean: "지침 (행동이나 판단의 가이드라인)",
    syn: ["方針", "ガイドライン"],
    collocations: [{ ja: "行動指針", ko: "행동 지침" }, { ja: "指針を示す", ko: "지침을 제시하다" }],
    examples: [{ type: "on", label: "음독", ja: "環境省は企業の持続可能な脱炭素経営を後押しするため、具体的で分かりやすい実践指針を公表した。", ko: "환경성은 기업의 지속 가능한 탈탄소 경영을 뒷받침하기 위해 구체적이고 알기 쉬운 실천 지침을 공표했다." }]
  },
  {
    id: 2560, day: 26, level: "N1",
    word: "方策", kana: "ほうさく", pos: "명사",
    mean: "방책",
    syn: ["対策"],
    collocations: [{ ja: "方策を講じる", ko: "방책을 강구하다" }],
    examples: [{ type: "ex", label: "예문", ja: "事故を防ぐ方策を考える。", ko: "사고를 막을 방책을 생각한다." }]
  },
  {
    id: 2561, day: 26, level: "N1",
    word: "放棄", kana: "ほうき", pos: "명사 (する동사)",
    mean: "포기",
    syn: ["捨てる", "諦める"],
    collocations: [{ ja: "権利を放棄する", ko: "권리를 포기하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は途中で試合を放棄した。", ko: "그는 도중에 시합을 포기했다." }]
  },
  {
    id: 295, day: 26, level: "N1",
    word: "臨む", kana: "のぞむ", pos: "동사 (5단 자동사)",
    mean: "마주하다, 임하다, 대하다",
    syn: ["向かう", "出席する"],
    collocations: [{ ja: "海に臨む", ko: "바다를 마주보고 있다" }, { ja: "試合に臨む", ko: "경기에 진지하게 임하다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "全日本選手権の決勝戦という大舞台に、万全の体調と不退転の決意で臨んだ。", ko: "전일본 선수권 결승전이라는 큰 무대에 만전의 컨디션과 배수진의 결의로 임했다." }],
    polysemy: [
      { def: "① 특정 장소·경관을 바로 눈앞에 마주보고 대하다", ja: "雄大な太平洋に臨む高台に建つホテルからの眺望は、息を呑むほど美しい。", ko: "웅대한 태평양을 마주보는 언덕 위에 세워진 호텔에서의 조망은 숨이 멎을 만큼 아름답다." },
      { def: "② 중요한 회의·의식·시험 등의 현장에 출석하여 임하다", ja: "国家資格の最終面接に臨む受験者たちの顔には、張り詰めた緊張感が漂う。", ko: "국가자격 최종 면접에 임하는 수험생들의 얼굴에는 팽팽한 긴장감이 감돈다." },
      { def: "③ 대상이나 사태를 특정 태도와 마음가짐으로 대하다", ja: "不祥事の再発防止に向けて、経営陣は極めて厳格かつ公正な態度で臨むべきだ。", ko: "불미스러운 사건의 재발 방지를 향해 경영진은 지극히 엄격하고 공정한 태도로 대해야 한다." }
    ]
  },
  {
    id: 2562, day: 26, level: "N1",
    word: "保障", kana: "ほしょう", pos: "명사 (する동사)",
    mean: "보장",
    syn: ["守る"],
    collocations: [{ ja: "社会保障", ko: "사회 보장" }, { ja: "安全を保障する", ko: "안전을 보장하다" }],
    examples: [{ type: "ex", label: "예문", ja: "国民の生活を保障するのが国の役目だ。", ko: "국민의 생활을 보장하는 것이 나라의 역할이다." }]
  },
  {
    id: 298, day: 26, level: "N1",
    word: "砕く", kana: "くだく", pos: "동사 (5단 타동사)",
    mean: "부수다, 깨뜨리다, 쉽게 풀다, 마음을 쓰다",
    syn: ["割る", "壊す"],
    collocations: [{ ja: "心を砕く", ko: "온갖 신경을 쓰고 마음을 기울이다" }, { ja: "言葉を砕く", ko: "말을 알기 쉽게 풀어서 설명하다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "専門用語の多い難解な法律の条文を、一般市民にも分かりやすいよう言葉を砕いて解説した。", ko: "전문 용어가 많은 난해한 법률 조문을 일반 시민도 알기 쉽도록 말을 풀어서 해설했다." }],
    polysemy: [
      { def: "① 단단한 고체나 덩어리를 두드려 잘게 부수다", ja: "氷を細かく砕いてグラスに入れ、冷たいアイスコーヒーを注ぎ入れた。", ko: "얼음을 잘게 부수어 유리잔에 넣고 차가운 아이스커피를 부었다." },
      { def: "② 난해한 내용이나 표현을 알기 쉽게 풀다", ja: "難解な科学の理論を子供向けに砕いて教えるのは、並大抵の技量ではない。", ko: "난해한 과학 이론을 어린이 눈높이에 맞게 풀어서 가르치는 것은 여간한 기량이 아니다." },
      { def: "③ 일이 잘 풀리도록 온갖 배려와 정성을 다하다 (心を砕く)", ja: "海外からの賓客を快適にもてなすため、関係者全員が細部にまで心を砕いた。", ko: "해외 국빈을 쾌적하게 환대하기 위해 관계자 전원이 세세한 부분까지 온 정성을 기울였다." }
    ]
  },
  // ==========================================
  // [DAY 27] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 2563, day: 27, level: "N2",
    word: "押し付ける", kana: "おしつける", pos: "동사 (타동사)",
    mean: "떠넘기다, 강요하다",
    syn: ["強いる"],
    collocations: [{ ja: "仕事を押し付ける", ko: "일을 떠넘기다" }, { ja: "意見を押し付ける", ko: "의견을 강요하다" }],
    examples: [{ type: "ex", label: "예문", ja: "面倒な仕事を後輩に押し付けるのはよくない。", ko: "귀찮은 일을 후배에게 떠넘기는 것은 좋지 않다." }]
  },
  {
    id: 2564, day: 27, level: "N2",
    word: "押し寄せる", kana: "おしよせる", pos: "동사 (자동사)",
    mean: "밀어닥치다",
    syn: ["殺到する"],
    collocations: [{ ja: "客が押し寄せる", ko: "손님이 밀어닥치다" }, { ja: "波が押し寄せる", ko: "파도가 밀려오다" }],
    examples: [{ type: "ex", label: "예문", ja: "開店と同時に客が押し寄せた。", ko: "개점과 동시에 손님이 밀어닥쳤다." }]
  },
  {
    id: 2565, day: 27, level: "N2",
    word: "行き詰まる", kana: "いきづまる", pos: "동사 (자동사)",
    mean: "막다르다, 난관에 부딪히다",
    syn: ["行き止まる"],
    collocations: [{ ja: "交渉が行き詰まる", ko: "협상이 난관에 부딪히다" }],
    examples: [{ type: "ex", label: "예문", ja: "研究が行き詰まって、気分転換に散歩した。", ko: "연구가 막혀서 기분 전환으로 산책했다." }]
  },
  {
    id: 2566, day: 27, level: "N2",
    word: "持ち込む", kana: "もちこむ", pos: "동사 (타동사)",
    mean: "가지고 들어오다, (상태로) 끌고 가다",
    syn: [],
    collocations: [{ ja: "機内に持ち込む", ko: "기내에 반입하다" }, { ja: "話を持ち込む", ko: "이야기를 가져오다" }],
    examples: [{ type: "ex", label: "예문", ja: "飲み物の持ち込みは禁止されている。", ko: "음료 반입은 금지되어 있다." }]
  },
  {
    id: 292, day: 27, level: "N2",
    word: "崩す", kana: "くずす", pos: "동사 (5단 타동사)",
    mean: "무너뜨리다, 흐트러뜨리다, (돈을) 바꾸다",
    syn: ["壊す", "乱す"],
    collocations: [{ ja: "体調を崩す", ko: "컨디션/건강을 해치다" }, { ja: "姿勢を崩す", ko: "자세를 흐트러뜨리다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "連日の過密な業務スケジュールが祟り、ついに過労で体調を崩して寝込んでしまった。", ko: "연일 계속된 과밀한 업무 일정이 화근이 되어 결국 과로로 건강을 해쳐 자리에 눕고 말았다." }],
    polysemy: [
      { def: "① 쌓여 있거나 단단한 물리적 형태를 허물어뜨리다", ja: "大雨による地盤沈下が原因で、裏山の急斜面を大きく崩す事故が起きた。", ko: "폭우로 인한 지반 침하가 원인이 되어 뒷산의 급경사를 크게 무너뜨리는 사고가 일어났다." },
      { def: "② 규칙적인 균형·자세·컨디션을 망가뜨리다", ja: "長時間の緊張を強いられた後、ようやく正座の姿勢を楽に崩した。", ko: "장시간 긴장을 강요받은 후 마침내 무릎 꿇은 자세를 편안하게 흐트러뜨렸다." },
      { def: "③ 고액권 화폐를 소액권이나 동전으로 잔돈을 바꾸다", ja: "バスの運賃を支払うため、売店で一万円札を千円札に崩した。", ko: "버스 요금을 내기 위해 매점에서 만 엔짜리 지폐를 천 엔짜리로 바꿨다." }
    ]
  },
  {
    id: 2567, day: 27, level: "N2",
    word: "立ち寄る", kana: "たちよる", pos: "동사 (자동사)",
    mean: "들르다",
    syn: ["寄る"],
    collocations: [{ ja: "本屋に立ち寄る", ko: "서점에 들르다" }],
    examples: [{ type: "ex", label: "예문", ja: "帰りにコンビニに立ち寄った。", ko: "돌아오는 길에 편의점에 들렀다." }]
  },
  {
    id: 2568, day: 27, level: "N2",
    word: "立ち去る", kana: "たちさる", pos: "동사 (자동사)",
    mean: "떠나다, 자리를 뜨다",
    syn: ["去る"],
    collocations: [{ ja: "現場を立ち去る", ko: "현장을 떠나다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は何も言わずにその場を立ち去った。", ko: "그는 아무 말 없이 그 자리를 떠났다." }]
  },
  {
    id: 2569, day: 27, level: "N2",
    word: "立て替える", kana: "たてかえる", pos: "동사 (타동사)",
    mean: "대신 지불하다",
    syn: [],
    collocations: [{ ja: "代金を立て替える", ko: "대금을 대신 내다" }],
    examples: [{ type: "ex", label: "예문", ja: "昼食代を友人が立て替えてくれた。", ko: "점심값을 친구가 대신 내 주었다." }]
  },
  {
    id: 2570, day: 27, level: "N2",
    word: "使いこなす", kana: "つかいこなす", pos: "동사 (타동사)",
    mean: "능숙하게 다루다",
    syn: ["操る"],
    collocations: [{ ja: "パソコンを使いこなす", ko: "컴퓨터를 능숙하게 다루다" }],
    examples: [{ type: "ex", label: "예문", ja: "祖母はスマートフォンを使いこなしている。", ko: "할머니는 스마트폰을 능숙하게 다루신다." }]
  },
  {
    id: 2571, day: 27, level: "N2",
    word: "積み重ねる", kana: "つみかさねる", pos: "동사 (타동사)",
    mean: "쌓아 올리다, 거듭하다",
    syn: ["重ねる"],
    collocations: [{ ja: "経験を積み重ねる", ko: "경험을 쌓아 가다" }],
    examples: [{ type: "ex", label: "예문", ja: "日々の努力を積み重ねることが大切だ。", ko: "매일의 노력을 쌓아 가는 것이 중요하다." }]
  },
  {
    id: 293, day: 27, level: "N2",
    word: "稼ぐ", kana: "かせぐ", pos: "동사 (5단 타동사)",
    mean: "돈을 벌다, 시간을 벌다, 점수를 따다",
    syn: ["もうける", "得る"],
    collocations: [{ ja: "生計を稼ぐ", ko: "생계를 벌다/꾸려가다" }, { ja: "時間を稼ぐ", ko: "시간을 벌다" }],
    examples: [{ type: "kun", label: "훈독", ja: "救援隊が現場に到着するまでの貴重な時間を稼ぐため、懸命な応急処置を続けた。", ko: "구조대가 현장에 도착할 때까지의 귀중한 시간을 벌기 위해 필사적인 응급 처치를 계속했다." }]
  },
  {
    id: 2572, day: 27, level: "N2",
    word: "出迎える", kana: "でむかえる", pos: "동사 (타동사)",
    mean: "마중하다",
    syn: ["迎える"],
    collocations: [{ ja: "空港で出迎える", ko: "공항에서 마중하다" }],
    examples: [{ type: "ex", label: "예문", ja: "駅まで客を出迎えに行った。", ko: "역까지 손님을 마중하러 갔다." }]
  },
  {
    id: 2573, day: 27, level: "N2",
    word: "不可欠", kana: "ふかけつ", pos: "な형용사",
    mean: "불가결함",
    syn: ["欠かせない"],
    collocations: [{ ja: "必要不可欠", ko: "필요 불가결" }],
    examples: [{ type: "ex", label: "예문", ja: "水は生物にとって不可欠だ。", ko: "물은 생물에게 불가결하다." }]
  },
  {
    id: 2574, day: 27, level: "N2",
    word: "望ましい", kana: "のぞましい", pos: "い형용사",
    mean: "바람직하다",
    syn: ["好ましい"],
    collocations: [{ ja: "望ましい結果", ko: "바람직한 결과" }],
    examples: [{ type: "ex", label: "예문", ja: "早めに相談することが望ましい。", ko: "일찌감치 상담하는 것이 바람직하다." }]
  },
  {
    id: 2575, day: 27, level: "N2",
    word: "不規則", kana: "ふきそく", pos: "な형용사",
    mean: "불규칙함",
    syn: [],
    collocations: [{ ja: "不規則な生活", ko: "불규칙한 생활" }],
    examples: [{ type: "ex", label: "예문", ja: "不規則な生活は健康に悪い。", ko: "불규칙한 생활은 건강에 나쁘다." }]
  },
  {
    id: 2576, day: 27, level: "N2",
    word: "無愛想", kana: "ぶあいそう", pos: "な형용사",
    mean: "무뚝뚝함",
    syn: ["そっけない"],
    collocations: [{ ja: "無愛想な店員", ko: "무뚝뚝한 점원" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は無愛想だが、根は優しい。", ko: "그는 무뚝뚝하지만 본성은 착하다." }]
  },
  {
    id: 375, day: 27, level: "N2",
    word: "巧み", kana: "たくみ", pos: "な형용사",
    mean: "솜씨가 좋음, 교묘함",
    syn: ["上手", "器用"],
    collocations: [{ ja: "言葉巧みに誘う", ko: "감언이설로 교묘하게 유혹하다" }, { ja: "巧みな技", ko: "뛰어나고 정교한 솜씨" }],
    examples: [{ type: "kun", label: "훈독", ja: "熟練した職人が巧みな手つきで木材を削り出し、美しい伝統工芸品を作り上げる。", ko: "숙련된 장인이 능란한 솜씨로 목재를 깎아내어 아름다운 전통 공예품을 빚어낸다." }]
  },
  {
    id: 2577, day: 27, level: "N2",
    word: "心地よい", kana: "ここちよい", pos: "い형용사",
    mean: "기분 좋다, 상쾌하다",
    syn: ["快い"],
    collocations: [{ ja: "心地よい風", ko: "상쾌한 바람" }],
    examples: [{ type: "ex", label: "예문", ja: "心地よい音楽を聞きながら眠った。", ko: "편안한 음악을 들으며 잠들었다." }]
  },
  {
    id: 2578, day: 27, level: "N2",
    word: "リラックス", kana: "リラックス", pos: "외래어",
    mean: "긴장을 풂 (relax)",
    syn: ["くつろぐ"],
    collocations: [{ ja: "リラックスする", ko: "편안히 쉬다" }],
    examples: [{ type: "ex", label: "예문", ja: "お風呂に入ってリラックスした。", ko: "목욕을 하며 긴장을 풀었다." }]
  },
  {
    id: 2579, day: 27, level: "N2",
    word: "ルーズ", kana: "ルーズ", pos: "외래어",
    mean: "느슨함, 칠칠치 못함 (loose)",
    syn: ["だらしない"],
    collocations: [{ ja: "時間にルーズだ", ko: "시간 관념이 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は時間にルーズで、よく遅れてくる。", ko: "그는 시간 관념이 없어서 자주 늦게 온다." }]
  },
  {
    id: 2580, day: 27, level: "N2",
    word: "レンタル", kana: "レンタル", pos: "외래어",
    mean: "대여 (rental)",
    syn: ["貸し出し"],
    collocations: [{ ja: "レンタルする", ko: "대여하다" }],
    examples: [{ type: "ex", label: "예문", ja: "旅行先で車をレンタルした。", ko: "여행지에서 차를 렌트했다." }]
  },
  {
    id: 2581, day: 27, level: "N2",
    word: "何だか", kana: "なんだか", pos: "부사",
    mean: "어쩐지, 왠지",
    syn: ["何となく"],
    collocations: [{ ja: "何だか変だ", ko: "어쩐지 이상하다" }],
    examples: [{ type: "ex", label: "예문", ja: "今日は何だか体がだるい。", ko: "오늘은 왠지 몸이 나른하다." }]
  },
  {
    id: 2582, day: 27, level: "N2",
    word: "何より", kana: "なにより", pos: "부사",
    mean: "무엇보다",
    syn: ["一番"],
    collocations: [{ ja: "何よりの楽しみ", ko: "무엇보다 큰 즐거움" }],
    examples: [{ type: "ex", label: "예문", ja: "健康が何より大切だ。", ko: "건강이 무엇보다 중요하다." }]
  },
  {
    id: 2583, day: 27, level: "N2",
    word: "不意に", kana: "ふいに", pos: "부사",
    mean: "불시에, 갑자기",
    syn: ["突然"],
    collocations: [{ ja: "不意に現れる", ko: "불쑥 나타나다" }],
    examples: [{ type: "ex", label: "예문", ja: "不意に名前を呼ばれて驚いた。", ko: "갑자기 이름이 불려 놀랐다." }]
  },
  {
    id: 2584, day: 27, level: "N2",
    word: "まるっきり", kana: "まるっきり", pos: "부사",
    mean: "전혀, 완전히",
    syn: ["全く"],
    collocations: [{ ja: "まるっきり分からない", ko: "전혀 모르겠다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の説明はまるっきり意味が分からなかった。", ko: "그의 설명은 전혀 의미를 알 수 없었다." }]
  },
  {
    id: 2585, day: 27, level: "N2",
    word: "ぺらぺら", kana: "ぺらぺら", pos: "부사 (의성어·의태어)",
    mean: "술술 (외국어), 나불나불",
    syn: ["流暢に"],
    collocations: [{ ja: "英語がぺらぺらだ", ko: "영어가 유창하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は三か国語がぺらぺらだ。", ko: "그는 3개 국어가 유창하다." }]
  },
  {
    id: 2586, day: 27, level: "N2",
    word: "よって", kana: "よって", pos: "접속사",
    mean: "따라서, 그러므로 (문어)",
    syn: ["したがって"],
    collocations: [{ ja: "よって", ko: "따라서" }],
    examples: [{ type: "ex", label: "예문", ja: "賛成多数である。よって、本案は可決された。", ko: "찬성 다수이다. 따라서 본안은 가결되었다." }]
  },
  {
    id: 2587, day: 27, level: "N2",
    word: "〜家", kana: "か", pos: "접미어",
    mean: "~가 (전문가)",
    syn: [],
    collocations: [{ ja: "専門家", ko: "전문가" }, { ja: "作家", ko: "작가" }, { ja: "努力家", ko: "노력가" }],
    examples: []
  },
  {
    id: 2588, day: 27, level: "N2",
    word: "〜店", kana: "てん", pos: "접미어",
    mean: "~점 (가게)",
    syn: [],
    collocations: [{ ja: "専門店", ko: "전문점" }, { ja: "本店", ko: "본점" }, { ja: "販売店", ko: "판매점" }],
    examples: []
  },
  {
    id: 2589, day: 27, level: "N2",
    word: "風景", kana: "ふうけい", pos: "명사",
    mean: "풍경",
    syn: ["景色"],
    collocations: [{ ja: "田舎の風景", ko: "시골 풍경" }],
    examples: [{ type: "ex", label: "예문", ja: "懐かしい風景が広がっていた。", ko: "그리운 풍경이 펼쳐져 있었다." }]
  },
  {
    id: 2590, day: 27, level: "N2",
    word: "眺め", kana: "ながめ", pos: "명사",
    mean: "전망, 조망",
    syn: ["景色"],
    collocations: [{ ja: "眺めがいい", ko: "전망이 좋다" }],
    examples: [{ type: "ex", label: "예문", ja: "この部屋は眺めがいい。", ko: "이 방은 전망이 좋다." }]
  },
  {
    id: 2591, day: 27, level: "N2",
    word: "文化", kana: "ぶんか", pos: "명사",
    mean: "문화",
    syn: [],
    collocations: [{ ja: "日本の文化", ko: "일본 문화" }, { ja: "文化の違い", ko: "문화 차이" }],
    examples: [{ type: "ex", label: "예문", ja: "外国の文化に触れるのは楽しい。", ko: "외국 문화를 접하는 것은 즐겁다." }]
  },
  {
    id: 2592, day: 27, level: "N2",
    word: "芸術", kana: "げいじゅつ", pos: "명사",
    mean: "예술",
    syn: ["アート"],
    collocations: [{ ja: "芸術作品", ko: "예술 작품" }, { ja: "芸術家", ko: "예술가" }],
    examples: [{ type: "ex", label: "예문", ja: "この町は芸術の町として知られている。", ko: "이 마을은 예술의 마을로 알려져 있다." }]
  },
  {
    id: 397, day: 27, level: "N2",
    word: "拡張", kana: "かくちょう", pos: "명사",
    mean: "확장 (규모나 범위를 넓힘)",
    syn: ["広げること", "拡大"],
    collocations: [{ ja: "事業を拡張する", ko: "사업 영역을 확장하다" }, { ja: "道路の拡張工事", ko: "도로 확장 공사" }],
    examples: [{ type: "on", label: "음독", ja: "増加する利用客の混雑を緩和するため、国際空港のターミナルビルを大幅に拡張する工事が始まった。", ko: "증가하는 이용객 혼잡을 완화하기 위해 국제공항 터미널 건물을 대폭 확장하는 공사가 시작되었다." }]
  },
  {
    id: 2593, day: 27, level: "N2",
    word: "歴史", kana: "れきし", pos: "명사",
    mean: "역사",
    syn: [],
    collocations: [{ ja: "歴史を学ぶ", ko: "역사를 배우다" }, { ja: "歴史的建造物", ko: "역사적 건축물" }],
    examples: [{ type: "ex", label: "예문", ja: "この寺には千年の歴史がある。", ko: "이 절에는 천 년의 역사가 있다." }]
  },
  {
    id: 2594, day: 27, level: "N2",
    word: "宗教", kana: "しゅうきょう", pos: "명사",
    mean: "종교",
    syn: [],
    collocations: [{ ja: "宗教を信じる", ko: "종교를 믿다" }],
    examples: [{ type: "ex", label: "예문", ja: "世界には様々な宗教がある。", ko: "세계에는 다양한 종교가 있다." }]
  },
  {
    id: 2595, day: 27, level: "N2",
    word: "言語", kana: "げんご", pos: "명사",
    mean: "언어",
    syn: ["言葉"],
    collocations: [{ ja: "言語を学ぶ", ko: "언어를 배우다" }, { ja: "言語学", ko: "언어학" }],
    examples: [{ type: "ex", label: "예문", ja: "言語は文化と深く関わっている。", ko: "언어는 문화와 깊이 관련되어 있다." }]
  },
  {
    id: 2596, day: 27, level: "N2",
    word: "方言", kana: "ほうげん", pos: "명사",
    mean: "방언, 사투리",
    syn: [],
    collocations: [{ ja: "関西の方言", ko: "간사이 사투리" }],
    examples: [{ type: "ex", label: "예문", ja: "祖母は方言で話す。", ko: "할머니는 사투리로 말씀하신다." }]
  },
  {
    id: 2597, day: 27, level: "N2",
    word: "表現", kana: "ひょうげん", pos: "명사 (する동사)",
    mean: "표현",
    syn: ["表す"],
    collocations: [{ ja: "表現力", ko: "표현력" }, { ja: "適切な表現", ko: "적절한 표현" }],
    examples: [{ type: "ex", label: "예문", ja: "気持ちを言葉で表現するのは難しい。", ko: "마음을 말로 표현하는 것은 어렵다." }]
  },
  {
    id: 2598, day: 27, level: "N2",
    word: "用語", kana: "ようご", pos: "명사",
    mean: "용어",
    syn: ["言葉"],
    collocations: [{ ja: "専門用語", ko: "전문 용어" }],
    examples: [{ type: "ex", label: "예문", ja: "専門用語が多くて分かりにくい。", ko: "전문 용어가 많아서 이해하기 어렵다." }]
  },
  {
    id: 399, day: 27, level: "N2",
    word: "寄付", kana: "きふ", pos: "명사",
    mean: "기부 (재물을 대가 없이 내놓음)",
    syn: ["寄贈", "献金"],
    collocations: [{ ja: "寄付を募る", ko: "기부금을 모금하다" }, { ja: "義援金を寄付する", ko: "의연금을 기부하다" }],
    examples: [{ type: "on", label: "음독", ja: "大規模な地震被害に見舞われた被災地の復興を支援するため、全国から多額の寄付金が集まった。", ko: "대규모 지진 피해를 겪은 재해지의 복구를 지원하기 위해 전국에서 거액의 기부금이 모였다." }]
  },
  {
    id: 2599, day: 27, level: "N2",
    word: "語彙", kana: "ごい", pos: "명사",
    mean: "어휘",
    syn: ["単語"],
    collocations: [{ ja: "語彙を増やす", ko: "어휘를 늘리다" }, { ja: "語彙力", ko: "어휘력" }],
    examples: [{ type: "ex", label: "예문", ja: "読書は語彙を増やすのに役立つ。", ko: "독서는 어휘를 늘리는 데 도움이 된다." }]
  },
  {
    id: 2600, day: 27, level: "N2",
    word: "文章", kana: "ぶんしょう", pos: "명사",
    mean: "문장, 글",
    syn: ["文"],
    collocations: [{ ja: "文章を書く", ko: "글을 쓰다" }, { ja: "文章力", ko: "문장력" }],
    examples: [{ type: "ex", label: "예문", ja: "分かりやすい文章を書くよう心がけている。", ko: "알기 쉬운 글을 쓰려고 신경 쓰고 있다." }]
  },
  {
    id: 2601, day: 27, level: "N2",
    word: "段落", kana: "だんらく", pos: "명사",
    mean: "단락",
    syn: [],
    collocations: [{ ja: "段落を分ける", ko: "단락을 나누다" }],
    examples: [{ type: "ex", label: "예문", ja: "第二段落の内容をまとめなさい。", ko: "둘째 단락의 내용을 정리하시오." }]
  },
  {
    id: 2602, day: 27, level: "N2",
    word: "要約", kana: "ようやく", pos: "명사 (する동사)",
    mean: "요약",
    syn: ["まとめ"],
    collocations: [{ ja: "文章を要約する", ko: "글을 요약하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この記事を二百字で要約しなさい。", ko: "이 기사를 200자로 요약하시오." }]
  },
  {
    id: 2603, day: 27, level: "N2",
    word: "筆者", kana: "ひっしゃ", pos: "명사",
    mean: "필자",
    syn: ["作者"],
    collocations: [{ ja: "筆者の意見", ko: "필자의 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "筆者が最も言いたいことは何か。", ko: "필자가 가장 말하고 싶은 것은 무엇인가." }]
  },
  {
    id: 2604, day: 27, level: "N2",
    word: "作者", kana: "さくしゃ", pos: "명사",
    mean: "작자, 저자",
    syn: ["著者"],
    collocations: [{ ja: "作者の意図", ko: "작자의 의도" }],
    examples: [{ type: "ex", label: "예문", ja: "この小説の作者は誰ですか。", ko: "이 소설의 작가는 누구입니까?" }]
  },
  {
    id: 403, day: 27, level: "N2",
    word: "協議", kana: "きょうぎ", pos: "명사",
    mean: "협의 (모여서 서로 의논함)",
    syn: ["話し合い", "相談"],
    collocations: [{ ja: "協議を重ねる", ko: "협의를 거듭하다" }, { ja: "協議会を立ち上げる", ko: "협의체를 발족시키다" }],
    examples: [{ type: "on", label: "음독", ja: "新駅の設置計画を巡り、鉄道事業者と地元自治体が長期間にわたる綿密な協議を重ねて合意に達した。", ko: "신설 역사 계획을 둘러싸고 철도사업자와 지자체가 오랜 기간 면밀한 협의를 거듭해 합의에 도달했다." }]
  },
  {
    id: 2605, day: 27, level: "N2",
    word: "読者", kana: "どくしゃ", pos: "명사",
    mean: "독자",
    syn: [],
    collocations: [{ ja: "読者の声", ko: "독자의 목소리" }],
    examples: [{ type: "ex", label: "예문", ja: "この雑誌は若い読者に人気がある。", ko: "이 잡지는 젊은 독자에게 인기가 있다." }]
  },
  {
    id: 2606, day: 27, level: "N2",
    word: "著者", kana: "ちょしゃ", pos: "명사",
    mean: "저자",
    syn: ["作者"],
    collocations: [{ ja: "著者の考え", ko: "저자의 생각" }],
    examples: [{ type: "ex", label: "예문", ja: "この本の著者は有名な学者だ。", ko: "이 책의 저자는 유명한 학자다." }]
  },
  {
    id: 2607, day: 27, level: "N2",
    word: "物語", kana: "ものがたり", pos: "명사",
    mean: "이야기",
    syn: ["話", "ストーリー"],
    collocations: [{ ja: "物語を読む", ko: "이야기를 읽다" }],
    examples: [{ type: "ex", label: "예문", ja: "この物語は実話に基づいている。", ko: "이 이야기는 실화를 바탕으로 하고 있다." }]
  },
  {
    id: 2608, day: 27, level: "N2",
    word: "愛情", kana: "あいじょう", pos: "명사",
    mean: "애정",
    syn: [],
    collocations: [{ ja: "愛情を注ぐ", ko: "애정을 쏟다" }],
    examples: [{ type: "ex", label: "예문", ja: "親の愛情を受けて育った。", ko: "부모의 애정을 받으며 자랐다." }]
  },
  {
    id: 2609, day: 27, level: "N2",
    word: "合図", kana: "あいず", pos: "명사 (する동사)",
    mean: "신호",
    syn: ["サイン"],
    collocations: [{ ja: "合図を送る", ko: "신호를 보내다" }],
    examples: [{ type: "ex", label: "예문", ja: "先生の合図で一斉に走り出した。", ko: "선생님의 신호로 일제히 달리기 시작했다." }]
  },
  {
    id: 2610, day: 27, level: "N1",
    word: "補償", kana: "ほしょう", pos: "명사 (する동사)",
    mean: "보상",
    syn: ["償う"],
    collocations: [{ ja: "損害を補償する", ko: "손해를 보상하다" }],
    examples: [{ type: "ex", label: "예문", ja: "事故の被害者に補償金が支払われた。", ko: "사고 피해자에게 보상금이 지급되었다." }]
  },
  {
    id: 2611, day: 27, level: "N1",
    word: "本格的", kana: "ほんかくてき", pos: "な형용사",
    mean: "본격적",
    syn: ["本式の"],
    collocations: [{ ja: "本格的に始める", ko: "본격적으로 시작하다" }],
    examples: [{ type: "ex", label: "예문", ja: "来月から本格的な工事が始まる。", ko: "다음 달부터 본격적인 공사가 시작된다." }]
  },
  {
    id: 308, day: 27, level: "N1",
    word: "ガイドライン", kana: "がいどらいん", pos: "외래어",
    mean: "지침, 가이드라인 (guideline)",
    syn: ["指針", "方針"],
    collocations: [{ ja: "明確なガイドライン", ko: "명확한 실천 지침" }, { ja: "ガイドラインを策定する", ko: "가이드라인을 책정하다" }],
    examples: [{ type: "ex", label: "예문", ja: "生成AIの倫理的な利用を担保するため、文部科学省が教育機関向けの具体的なガイドラインを公表した。", ko: "생성형 AI의 윤리적 활용을 담보하기 위해 문부과학성이 교육기관용 구체적 가이드라인을 공표했다." }]
  },
  {
    id: 2612, day: 27, level: "N1",
    word: "未知", kana: "みち", pos: "명사",
    mean: "미지",
    syn: [],
    collocations: [{ ja: "未知の世界", ko: "미지의 세계" }],
    examples: [{ type: "ex", label: "예문", ja: "宇宙にはまだ未知のことが多い。", ko: "우주에는 아직 미지의 것이 많다." }]
  },
  {
    id: 310, day: 27, level: "N1",
    word: "ビジョン", kana: "びじょん", pos: "외래어",
    mean: "전망, 미래상, 비전 (vision)",
    syn: ["展望", "将来像"],
    collocations: [{ ja: "明確なビジョン", ko: "명확한 미래 비전" }, { ja: "ビジョンを描く", ko: "앞날의 청사진을 그리다" }],
    examples: [{ type: "ex", label: "예문", ja: "優れたリーダーとは、困難な逆境の中でも組織が進むべき明確なビジョンを提示できる人物である。", ko: "훌륭한 리더란 곤란한 역경 속에서도 조직이 나아갈 명확한 비전을 제시할 수 있는 인물이다." }]
  },
  {
    id: 2613, day: 27, level: "N1",
    word: "無償", kana: "むしょう", pos: "명사",
    mean: "무상",
    syn: ["無料", "ただ"],
    collocations: [{ ja: "無償で提供する", ko: "무상으로 제공하다" }],
    examples: [{ type: "ex", label: "예문", ja: "教科書は無償で配られる。", ko: "교과서는 무상으로 배부된다." }]
  },
  {
    id: 2614, day: 27, level: "N1",
    word: "明示", kana: "めいじ", pos: "명사 (する동사)",
    mean: "명시",
    syn: ["はっきり示す"],
    collocations: [{ ja: "条件を明示する", ko: "조건을 명시하다" }],
    examples: [{ type: "ex", label: "예문", ja: "契約書には期限が明示されている。", ko: "계약서에는 기한이 명시되어 있다." }]
  },
  {
    id: 316, day: 27, level: "N1",
    word: "さほど", kana: "さほど", pos: "부사",
    mean: "그다지, 그리 (~ない 부정 호응)",
    syn: ["それほど", "あまり"],
    collocations: [{ ja: "さほど難しくない", ko: "그다지 어렵지 않다" }, { ja: "さほど影響はない", ko: "별다른 영향은 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "事前の予想では厳しい批判を浴びるかと危惧されたが、実際の世論の反応はさほど大きくなかった。", ko: "사전 예상으로는 혹독한 비판을 맞을까 우려되었으나 실제 여론의 반응은 그다지 크지 않았다." }]
  },
  // ==========================================
  // [DAY 28] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 2615, day: 28, level: "N2",
    word: "取り替える", kana: "とりかえる", pos: "동사 (타동사)",
    mean: "교환하다, 바꾸다",
    syn: ["交換する"],
    collocations: [{ ja: "電池を取り替える", ko: "건전지를 교환하다" }],
    examples: [{ type: "ex", label: "예문", ja: "古くなった電球を取り替えた。", ko: "낡은 전구를 교체했다." }]
  },
  {
    id: 2616, day: 28, level: "N2",
    word: "取り付ける", kana: "とりつける", pos: "동사 (타동사)",
    mean: "설치하다, 얻어 내다",
    syn: ["設置する"],
    collocations: [{ ja: "エアコンを取り付ける", ko: "에어컨을 설치하다" }, { ja: "約束を取り付ける", ko: "약속을 받아 내다" }],
    examples: [{ type: "ex", label: "예문", ja: "部屋にエアコンを取り付けた。", ko: "방에 에어컨을 설치했다." }]
  },
  {
    id: 2617, day: 28, level: "N2",
    word: "成り立つ", kana: "なりたつ", pos: "동사 (자동사)",
    mean: "성립하다, 이루어지다",
    syn: ["成立する"],
    collocations: [{ ja: "商売が成り立つ", ko: "장사가 되다" }, { ja: "水素と酸素から成り立つ", ko: "수소와 산소로 이루어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "この理論は簡単な仮定の上に成り立っている。", ko: "이 이론은 간단한 가정 위에 성립되어 있다." }]
  },
  {
    id: 2618, day: 28, level: "N2",
    word: "乗り遅れる", kana: "のりおくれる", pos: "동사 (자동사)",
    mean: "(차를) 놓치다, 뒤처지다",
    syn: [],
    collocations: [{ ja: "終電に乗り遅れる", ko: "막차를 놓치다" }, { ja: "時代に乗り遅れる", ko: "시대에 뒤처지다" }],
    examples: [{ type: "ex", label: "예문", ja: "寝坊して、いつもの電車に乗り遅れた。", ko: "늦잠을 자서 평소 타던 전철을 놓쳤다." }]
  },
  {
    id: 294, day: 28, level: "N2",
    word: "怠ける", kana: "なまける", pos: "동사 (1단 자/타동사)",
    mean: "게으름 피우다, 꾀부리다",
    syn: ["サボる", "怠る"],
    collocations: [{ ja: "仕事を怠ける", ko: "일을 땡땡이치다/게을리하다" }, { ja: "怠け者", ko: "게으름뱅이" }],
    examples: [{ type: "kun", label: "훈독", ja: "誰も見ていないからといって日々の反復練習を怠ければ、本番で必ず実力の差が出る。", ko: "아무도 보지 않는다고 해서 매일의 반복 연습을 게을리하면 실전에서 반드시 실력 차이가 드러난다." }]
  },
  {
    id: 2619, day: 28, level: "N2",
    word: "話しかける", kana: "はなしかける", pos: "동사 (자동사)",
    mean: "말을 걸다",
    syn: ["声をかける"],
    collocations: [{ ja: "知らない人に話しかける", ko: "모르는 사람에게 말을 걸다" }],
    examples: [{ type: "ex", label: "예문", ja: "隣の席の人に話しかけられた。", ko: "옆자리 사람이 말을 걸어왔다." }]
  },
  {
    id: 2620, day: 28, level: "N2",
    word: "引き下げる", kana: "ひきさげる", pos: "동사 (타동사)",
    mean: "인하하다, 낮추다",
    syn: ["下げる"],
    collocations: [{ ja: "価格を引き下げる", ko: "가격을 인하하다" }],
    examples: [{ type: "ex", label: "예문", ja: "政府は税率を引き下げる方針だ。", ko: "정부는 세율을 인하할 방침이다." }]
  },
  {
    id: 2621, day: 28, level: "N2",
    word: "引き上げる", kana: "ひきあげる", pos: "동사 (타동사)",
    mean: "인상하다, 끌어올리다",
    syn: ["上げる"],
    collocations: [{ ja: "料金を引き上げる", ko: "요금을 인상하다" }],
    examples: [{ type: "ex", label: "예문", ja: "電気料金が来月から引き上げられる。", ko: "전기 요금이 다음 달부터 인상된다." }]
  },
  {
    id: 2622, day: 28, level: "N2",
    word: "振り込む", kana: "ふりこむ", pos: "동사 (타동사)",
    mean: "(돈을) 입금하다, 송금하다",
    syn: ["送金する"],
    collocations: [{ ja: "口座に振り込む", ko: "계좌에 입금하다" }],
    examples: [{ type: "ex", label: "예문", ja: "代金を指定の口座に振り込んだ。", ko: "대금을 지정 계좌로 입금했다." }]
  },
  {
    id: 2623, day: 28, level: "N2",
    word: "待ち合わせる", kana: "まちあわせる", pos: "동사 (자동사)",
    mean: "만나기로 하다",
    syn: ["会う約束をする"],
    collocations: [{ ja: "駅で待ち合わせる", ko: "역에서 만나기로 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "友人と三時に駅前で待ち合わせた。", ko: "친구와 3시에 역 앞에서 만나기로 했다." }]
  },
  {
    id: 297, day: 28, level: "N2",
    word: "脅す", kana: "おどす", pos: "동사 (5단 타동사)",
    mean: "으르다, 위협하다, 협박하다",
    syn: ["おどかす", "脅迫する"],
    collocations: [{ ja: "脅して金を奪う", ko: "협박하여 돈을 빼앗다" }, { ja: "武器で脅す", ko: "무기로 위협하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "相手の弱みに付け込んで脅すような卑劣なやり方は、法的に断じて許されない。", ko: "상대의 약점을 파고들어 협박하는 비열한 수법은 법적으로 결단코 용납되지 않는다." }, { type: "on", label: "음독", ja: "暴力団員が企業に対して金銭を要求し、脅迫(きょうはく)の容疑で逮捕された。", ko: "폭력조직원이 기업을 상대로 금전을 요구하다가 협박 혐의로 체포되었다." }]
  },
  {
    id: 2624, day: 28, level: "N2",
    word: "見合わせる", kana: "みあわせる", pos: "동사 (타동사)",
    mean: "보류하다, 서로 마주 보다",
    syn: ["中止する", "延期する"],
    collocations: [{ ja: "運転を見合わせる", ko: "운행을 보류하다" }, { ja: "顔を見合わせる", ko: "얼굴을 마주 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "大雨のため、電車は運転を見合わせている。", ko: "폭우로 전철은 운행을 보류하고 있다." }]
  },
  {
    id: 2625, day: 28, level: "N2",
    word: "不気味", kana: "ぶきみ", pos: "な형용사",
    mean: "기분 나쁨, 으스스함",
    syn: ["気味が悪い"],
    collocations: [{ ja: "不気味な音", ko: "으스스한 소리" }],
    examples: [{ type: "ex", label: "예문", ja: "夜の学校は不気味だ。", ko: "밤의 학교는 으스스하다." }]
  },
  {
    id: 2626, day: 28, level: "N2",
    word: "不器用", kana: "ぶきよう", pos: "な형용사",
    mean: "서투름, 요령 없음",
    syn: ["下手な"],
    collocations: [{ ja: "不器用な手つき", ko: "서투른 손놀림" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は不器用だが、誠実な人だ。", ko: "그는 요령은 없지만 성실한 사람이다." }]
  },
  {
    id: 2627, day: 28, level: "N2",
    word: "照れくさい", kana: "てれくさい", pos: "い형용사",
    mean: "쑥스럽다",
    syn: ["恥ずかしい"],
    collocations: [{ ja: "照れくさい思い", ko: "쑥스러운 마음" }],
    examples: [{ type: "ex", label: "예문", ja: "人前で褒められて照れくさかった。", ko: "사람들 앞에서 칭찬받아 쑥스러웠다." }]
  },
  {
    id: 2628, day: 28, level: "N2",
    word: "不潔", kana: "ふけつ", pos: "な형용사",
    mean: "불결함",
    syn: ["汚い"],
    collocations: [{ ja: "不潔な環境", ko: "불결한 환경" }],
    examples: [{ type: "ex", label: "예문", ja: "不潔な手で食べ物に触らないで。", ko: "더러운 손으로 음식을 만지지 마." }]
  },
  {
    id: 376, day: 28, level: "N2",
    word: "明白", kana: "めいはく", pos: "な형용사",
    mean: "명백함, 분명함",
    syn: ["明らか", "はっきりしている"],
    collocations: [{ ja: "明白な証拠", ko: "명백한 객관적 증거" }, { ja: "事実関係は明白だ", ko: "사실관계는 아주 분명하다" }],
    examples: [{ type: "on", label: "음독", ja: "第三者委員会の綿密な調査により、今回のデータ改ざんが組織的犯行であることは明白となった。", ko: "제3자 위원회의 면밀한 조사로 이번 데이터 조작이 조직적인 범행임이 명백해졌다." }]
  },
  {
    id: 2629, day: 28, level: "N2",
    word: "不審", kana: "ふしん", pos: "な형용사",
    mean: "수상함",
    syn: ["怪しい"],
    collocations: [{ ja: "不審な人物", ko: "수상한 인물" }],
    examples: [{ type: "ex", label: "예문", ja: "不審な荷物を見つけたら届けてください。", ko: "수상한 짐을 발견하면 신고해 주세요." }]
  },
  {
    id: 2630, day: 28, level: "N2",
    word: "インパクト", kana: "インパクト", pos: "외래어",
    mean: "충격, 강한 인상 (impact)",
    syn: ["衝撃", "影響"],
    collocations: [{ ja: "インパクトがある", ko: "임팩트가 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "その広告は強いインパクトを与えた。", ko: "그 광고는 강한 인상을 주었다." }]
  },
  {
    id: 2631, day: 28, level: "N2",
    word: "キープ", kana: "キープ", pos: "외래어",
    mean: "유지, 확보 (keep)",
    syn: ["維持", "確保"],
    collocations: [{ ja: "席をキープする", ko: "자리를 확보하다" }],
    examples: [{ type: "ex", label: "예문", ja: "今の体重をキープしたい。", ko: "지금 체중을 유지하고 싶다." }]
  },
  {
    id: 312, day: 28, level: "N2",
    word: "デリケート", kana: "でりけーと", pos: "외래어",
    mean: "섬세함, 민감함, 미묘함 (delicate)",
    syn: ["繊細", "微妙"],
    collocations: [{ ja: "デリケートな問題", ko: "민감하고 미묘한 문제" }, { ja: "デリケートな肌", ko: "민감하고 연약한 피부" }],
    examples: [{ type: "ex", label: "예문", ja: "宗教や人種に関わる話題は極めてデリケートであるため、公の場での発言には細心の配慮が必要だ。", ko: "종교나 인종에 관한 화제는 지극히 민감하기 때문에 공적인 자리에서의 발언에는 세심한 배려가 필요하다." }]
  },
  {
    id: 2632, day: 28, level: "N2",
    word: "まんざら", kana: "まんざら", pos: "부사",
    mean: "반드시 (~인 것은 아니다)",
    syn: ["必ずしも"],
    collocations: [{ ja: "まんざらでもない", ko: "싫지만은 않다" }],
    examples: [{ type: "ex", label: "예문", ja: "褒められて、彼もまんざらでもない様子だった。", ko: "칭찬을 받고 그도 싫지만은 않은 눈치였다." }]
  },
  {
    id: 2633, day: 28, level: "N2",
    word: "めいめい", kana: "めいめい", pos: "부사",
    mean: "각자, 저마다",
    syn: ["各自", "それぞれ"],
    collocations: [{ ja: "めいめいの意見", ko: "각자의 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "弁当はめいめいで持ってきてください。", ko: "도시락은 각자 가지고 와 주세요." }]
  },
  {
    id: 2634, day: 28, level: "N2",
    word: "案の定", kana: "あんのじょう", pos: "부사",
    mean: "아니나 다를까",
    syn: ["予想通り"],
    collocations: [{ ja: "案の定失敗した", ko: "아니나 다를까 실패했다" }],
    examples: [{ type: "ex", label: "예문", ja: "案の定、彼は遅れてきた。", ko: "아니나 다를까 그는 늦게 왔다." }]
  },
  {
    id: 2635, day: 28, level: "N2",
    word: "未だ", kana: "いまだ", pos: "부사",
    mean: "아직 (~않다)",
    syn: ["まだ"],
    collocations: [{ ja: "未だ解決していない", ko: "아직 해결되지 않았다" }],
    examples: [{ type: "ex", label: "예문", ja: "事故の原因は未だ明らかになっていない。", ko: "사고 원인은 아직 밝혀지지 않았다." }]
  },
  {
    id: 2636, day: 28, level: "N2",
    word: "ぼろぼろ", kana: "ぼろぼろ", pos: "부사 (의성어·의태어)",
    mean: "너덜너덜, 엉망진창",
    syn: ["傷んだ"],
    collocations: [{ ja: "ぼろぼろの服", ko: "너덜너덜한 옷" }],
    examples: [{ type: "ex", label: "예문", ja: "何年も使った辞書がぼろぼろになった。", ko: "몇 년이나 쓴 사전이 너덜너덜해졌다." }]
  },
  {
    id: 2637, day: 28, level: "N2",
    word: "まごまご", kana: "まごまご", pos: "부사 (의성어·의태어)",
    mean: "우물쭈물, 갈팡질팡",
    syn: ["うろうろ"],
    collocations: [{ ja: "まごまごする", ko: "우물쭈물하다" }],
    examples: [{ type: "ex", label: "예문", ja: "初めての駅で出口が分からずまごまごした。", ko: "처음 가는 역에서 출구를 몰라 갈팡질팡했다." }]
  },
  {
    id: 2638, day: 28, level: "N2",
    word: "かといって", kana: "かといって", pos: "접속사",
    mean: "그렇다고 해서",
    syn: ["だからといって"],
    collocations: [{ ja: "かといって", ko: "그렇다고 해서" }],
    examples: [{ type: "ex", label: "예문", ja: "仕事は大変だ。かといって、辞めるわけにもいかない。", ko: "일은 힘들다. 그렇다고 해서 그만둘 수도 없다." }]
  },
  {
    id: 2639, day: 28, level: "N2",
    word: "〜街", kana: "がい", pos: "접미어",
    mean: "~가 (거리)",
    syn: [],
    collocations: [{ ja: "商店街", ko: "상점가" }, { ja: "住宅街", ko: "주택가" }, { ja: "繁華街", ko: "번화가" }],
    examples: []
  },
  {
    id: 2640, day: 28, level: "N2",
    word: "跡", kana: "あと", pos: "명사",
    mean: "자국, 흔적",
    syn: ["痕跡"],
    collocations: [{ ja: "足跡", ko: "발자국" }, { ja: "跡が残る", ko: "자국이 남다" }],
    examples: [{ type: "ex", label: "예문", ja: "雪の上に動物の足跡が残っていた。", ko: "눈 위에 동물 발자국이 남아 있었다." }]
  },
  {
    id: 2641, day: 28, level: "N2",
    word: "粗筋", kana: "あらすじ", pos: "명사",
    mean: "줄거리",
    syn: ["大筋"],
    collocations: [{ ja: "映画の粗筋", ko: "영화 줄거리" }],
    examples: [{ type: "ex", label: "예문", ja: "小説の粗筋を簡単に説明した。", ko: "소설 줄거리를 간단히 설명했다." }]
  },
  {
    id: 404, day: 28, level: "N2",
    word: "共感", kana: "きょうかん", pos: "명사",
    mean: "공감 (남의 감정에 동조함)",
    syn: ["共鳴", "同感"],
    collocations: [{ ja: "共感を呼ぶ", ko: "깊은 공감을 불러일으키다" }, { ja: "痛みに共感する", ko: "타인의 고통에 공감하다" }],
    examples: [{ type: "on", label: "음독", ja: "主人公の葛藤や挫折をリアルに描いたこの小説は、世代を超えて数多くの読者から熱い共感を呼んでいる。", ko: "주인공의 갈등과 좌절을 사실적으로 그려낸 이 소설은 세대를 뛰어넘어 수많은 독자로부터 뜨거운 공감을 부르고 있다." }]
  },
  {
    id: 2642, day: 28, level: "N2",
    word: "安定", kana: "あんてい", pos: "명사 (する동사)",
    mean: "안정",
    syn: [],
    collocations: [{ ja: "生活が安定する", ko: "생활이 안정되다" }, { ja: "安定した収入", ko: "안정된 수입" }],
    examples: [{ type: "ex", label: "예문", ja: "安定した仕事に就きたい。", ko: "안정된 일자리를 얻고 싶다." }]
  },
  {
    id: 2643, day: 28, level: "N2",
    word: "案", kana: "あん", pos: "명사",
    mean: "안, 계획",
    syn: ["アイデア", "計画"],
    collocations: [{ ja: "案を出す", ko: "안을 내다" }, { ja: "代わりの案", ko: "대안" }],
    examples: [{ type: "ex", label: "예문", ja: "もっといい案はありませんか。", ko: "더 좋은 안은 없습니까?" }]
  },
  {
    id: 2644, day: 28, level: "N2",
    word: "言い訳", kana: "いいわけ", pos: "명사 (する동사)",
    mean: "변명",
    syn: ["弁解"],
    collocations: [{ ja: "言い訳をする", ko: "변명하다" }],
    examples: [{ type: "ex", label: "예문", ja: "遅刻の言い訳はもう聞きたくない。", ko: "지각 변명은 더 이상 듣고 싶지 않다." }]
  },
  {
    id: 2645, day: 28, level: "N2",
    word: "勢い", kana: "いきおい", pos: "명사",
    mean: "기세, 힘",
    syn: ["力", "勢力"],
    collocations: [{ ja: "勢いがある", ko: "기세가 있다" }, { ja: "勢いに乗る", ko: "기세를 타다" }],
    examples: [{ type: "ex", label: "예문", ja: "チームは勢いに乗って連勝した。", ko: "팀은 기세를 타고 연승했다." }]
  },
  {
    id: 2646, day: 28, level: "N2",
    word: "意地", kana: "いじ", pos: "명사",
    mean: "고집, 오기",
    syn: ["根性"],
    collocations: [{ ja: "意地を張る", ko: "고집을 부리다" }, { ja: "意地悪", ko: "심술" }],
    examples: [{ type: "ex", label: "예문", ja: "意地を張らずに謝ったほうがいい。", ko: "고집 부리지 말고 사과하는 편이 좋다." }]
  },
  {
    id: 2647, day: 28, level: "N2",
    word: "一部", kana: "いちぶ", pos: "명사",
    mean: "일부",
    syn: ["一部分"],
    collocations: [{ ja: "一部の人", ko: "일부 사람" }, { ja: "計画の一部", ko: "계획의 일부" }],
    examples: [{ type: "ex", label: "예문", ja: "一部の地域で停電が起きた。", ko: "일부 지역에서 정전이 일어났다." }]
  },
  {
    id: 405, day: 28, level: "N2",
    word: "均等", kana: "きんとう", pos: "명사",
    mean: "균등 (고르고 차별이 없음)",
    syn: ["平等", "等しいこと"],
    collocations: [{ ja: "機会の均等", ko: "기회의 균등" }, { ja: "均等に配分する", ko: "골고루 균등 배분하다" }],
    examples: [{ type: "on", label: "음독", ja: "性別や国籍による不合理な格差を撤廃し、すべての社員に均等な昇進のチャンスを保障する。", ko: "성별이나 국적에 따른 불합리한 격차를 철폐하고 모든 사원에게 균등한 승진 기회를 보장한다." }]
  },
  {
    id: 2648, day: 28, level: "N2",
    word: "一種", kana: "いっしゅ", pos: "명사",
    mean: "일종",
    syn: [],
    collocations: [{ ja: "一種の病気", ko: "일종의 병" }],
    examples: [{ type: "ex", label: "예문", ja: "これも一種の才能だと言える。", ko: "이것도 일종의 재능이라고 할 수 있다." }]
  },
  {
    id: 2649, day: 28, level: "N2",
    word: "移転", kana: "いてん", pos: "명사 (する동사)",
    mean: "이전 (장소를 옮김)",
    syn: ["移る"],
    collocations: [{ ja: "店を移転する", ko: "가게를 이전하다" }],
    examples: [{ type: "ex", label: "예문", ja: "事務所は来月駅前に移転する。", ko: "사무소는 다음 달 역 앞으로 이전한다." }]
  },
  {
    id: 2650, day: 28, level: "N2",
    word: "違和感", kana: "いわかん", pos: "명사",
    mean: "위화감",
    syn: [],
    collocations: [{ ja: "違和感を覚える", ko: "위화감을 느끼다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の説明に少し違和感があった。", ko: "그의 설명에 약간 위화감이 들었다." }]
  },
  {
    id: 2651, day: 28, level: "N2",
    word: "内訳", kana: "うちわけ", pos: "명사",
    mean: "내역",
    syn: ["明細"],
    collocations: [{ ja: "費用の内訳", ko: "비용 내역" }],
    examples: [{ type: "ex", label: "예문", ja: "請求書の内訳を確認した。", ko: "청구서 내역을 확인했다." }]
  },
  {
    id: 2652, day: 28, level: "N2",
    word: "腕前", kana: "うでまえ", pos: "명사",
    mean: "솜씨, 실력",
    syn: ["技術", "腕"],
    collocations: [{ ja: "料理の腕前", ko: "요리 솜씨" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の料理の腕前はプロ並みだ。", ko: "그의 요리 솜씨는 프로급이다." }]
  },
  {
    id: 2653, day: 28, level: "N2",
    word: "運", kana: "うん", pos: "명사",
    mean: "운",
    syn: ["運命", "つき"],
    collocations: [{ ja: "運がいい", ko: "운이 좋다" }, { ja: "運に任せる", ko: "운에 맡기다" }],
    examples: [{ type: "ex", label: "예문", ja: "今日は運が悪いことばかりだ。", ko: "오늘은 운 나쁜 일만 있다." }]
  },
  {
    id: 409, day: 28, level: "N2",
    word: "権力", kana: "けんりょく", pos: "명사",
    mean: "권력 (남을 복종시키는 강제력)",
    syn: ["支配力", "権勢"],
    collocations: [{ ja: "権力を握る", ko: "국가 권력을 장악하다" }, { ja: "権力の濫用", ko: "권력 남용" }],
    examples: [{ type: "on", label: "음독", ja: "暴走する政治権力を監視し、国民の基本的人権を守るために三権分立の制度が確立された。", ko: "폭주하는 정치 권력을 감시하고 국민의 기본적 인권을 지키기 위해 삼권분립 제도가 확립되었다." }]
  },
  {
    id: 2654, day: 28, level: "N2",
    word: "運命", kana: "うんめい", pos: "명사",
    mean: "운명",
    syn: ["宿命"],
    collocations: [{ ja: "運命を変える", ko: "운명을 바꾸다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人の出会いは運命だった。", ko: "두 사람의 만남은 운명이었다." }]
  },
  {
    id: 2655, day: 28, level: "N2",
    word: "影", kana: "かげ", pos: "명사",
    mean: "그림자",
    syn: [],
    collocations: [{ ja: "影が長い", ko: "그림자가 길다" }, { ja: "影も形もない", ko: "흔적도 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "夕方になると影が長くなる。", ko: "저녁이 되면 그림자가 길어진다." }]
  },
  {
    id: 2656, day: 28, level: "N2",
    word: "縁", kana: "えん", pos: "명사",
    mean: "인연",
    syn: ["つながり"],
    collocations: [{ ja: "縁がある", ko: "인연이 있다" }, { ja: "縁を切る", ko: "인연을 끊다" }],
    examples: [{ type: "ex", label: "예문", ja: "これも何かの縁ですね。", ko: "이것도 무슨 인연이네요." }]
  },
  {
    id: 2657, day: 28, level: "N2",
    word: "恩恵", kana: "おんけい", pos: "명사",
    mean: "은혜, 혜택",
    syn: ["利益"],
    collocations: [{ ja: "恩恵を受ける", ko: "혜택을 받다" }],
    examples: [{ type: "ex", label: "예문", ja: "私たちは科学技術の恩恵を受けている。", ko: "우리는 과학 기술의 혜택을 받고 있다." }]
  },
  {
    id: 2658, day: 28, level: "N2",
    word: "外見", kana: "がいけん", pos: "명사",
    mean: "외견, 겉모습",
    syn: ["見た目"],
    collocations: [{ ja: "外見で判断する", ko: "겉모습으로 판단하다" }],
    examples: [{ type: "ex", label: "예문", ja: "人を外見だけで判断してはいけない。", ko: "사람을 겉모습만으로 판단해서는 안 된다." }]
  },
  {
    id: 2659, day: 28, level: "N2",
    word: "解消", kana: "かいしょう", pos: "명사 (する동사)",
    mean: "해소",
    syn: ["なくす"],
    collocations: [{ ja: "ストレス解消", ko: "스트레스 해소" }, { ja: "問題を解消する", ko: "문제를 해소하다" }],
    examples: [{ type: "ex", label: "예문", ja: "運動はストレス解消になる。", ko: "운동은 스트레스 해소가 된다." }]
  },
  {
    id: 2660, day: 28, level: "N1",
    word: "模範", kana: "もはん", pos: "명사",
    mean: "모범",
    syn: ["手本"],
    collocations: [{ ja: "模範を示す", ko: "모범을 보이다" }, { ja: "模範解答", ko: "모범 답안" }],
    examples: [{ type: "ex", label: "예문", ja: "先輩として後輩に模範を示したい。", ko: "선배로서 후배에게 모범을 보이고 싶다." }]
  },
  {
    id: 318, day: 28, level: "N1",
    word: "概ね", kana: "おおむね", pos: "부사",
    mean: "대체로, 대략",
    syn: ["大体", "おおよそ"],
    collocations: [{ ja: "概ね順調だ", ko: "대체로 순조롭다" }, { ja: "概ね同意する", ko: "대략 동의하다" }],
    examples: [{ type: "ex", label: "예문", ja: "一部に細かな修正点は残されているものの、提出された提案書の内容は概ね妥当であると認められた。", ko: "일부에 자잘한 수정점은 남아 있으나 제출된 제안서의 내용은 대체로 타당하다고 인정되었다." }]
  },
  {
    id: 2661, day: 28, level: "N1",
    word: "由来", kana: "ゆらい", pos: "명사 (する동사)",
    mean: "유래",
    syn: ["起源"],
    collocations: [{ ja: "名前の由来", ko: "이름의 유래" }],
    examples: [{ type: "ex", label: "예문", ja: "この町の名前は古い伝説に由来する。", ko: "이 마을 이름은 오래된 전설에서 유래한다." }]
  },
  {
    id: 322, day: 28, level: "N1",
    word: "異動", kana: "いどう", pos: "명사",
    mean: "이동, 변동 (직위·부서의 변화)",
    syn: ["人事異動", "転勤"],
    collocations: [{ ja: "人事異動", ko: "인사 이동" }, { ja: "異動を命じる", ko: "부서 배치를 명하다" }],
    examples: [{ type: "on", label: "음독", ja: "春の定期人事異動に伴い、長年勤めた営業部から新規事業開発部へと配属先が変わった。", ko: "봄 정기 인사 이동에 따라 오랜 세월 근무한 영업부에서 신규사업개발부로 배속지가 바뀌었다." }]
  },
  {
    id: 2662, day: 28, level: "N1",
    word: "要請", kana: "ようせい", pos: "명사 (する동사)",
    mean: "요청",
    syn: ["求める"],
    collocations: [{ ja: "協力を要請する", ko: "협력을 요청하다" }],
    examples: [{ type: "ex", label: "예문", ja: "政府は国民に節電を要請した。", ko: "정부는 국민에게 절전을 요청했다." }]
  },
  {
    id: 2663, day: 28, level: "N1",
    word: "落胆", kana: "らくたん", pos: "명사 (する동사)",
    mean: "낙담",
    syn: ["がっかり"],
    collocations: [{ ja: "落胆する", ko: "낙담하다" }],
    examples: [{ type: "ex", label: "예문", ja: "試験に落ちて、ひどく落胆した。", ko: "시험에 떨어져서 몹시 낙담했다." }]
  },
  {
    id: 331, day: 28, level: "N1",
    word: "究極", kana: "きゅうきょく", pos: "명사",
    mean: "궁극, 최종 귀결",
    syn: ["最終", "最高"],
    collocations: [{ ja: "究極の目標", ko: "궁극의 최종 목표" }, { ja: "究極の選択", ko: "궁극의 갈림길 선택" }],
    examples: [{ type: "on", label: "음독", ja: "医療科学の進歩が目指す究極の目的は、単なる寿命の延伸ではなく、生活の質（QOL）の向上にほかならない。", ko: "의료과학의 진보가 지향하는 궁극적인 목적은 단순한 수명 연장이 아니라 삶의 질(QOL) 향상에 다름 아니다." }]
  },
  {
    id: 2664, day: 28, level: "N1",
    word: "流通", kana: "りゅうつう", pos: "명사 (する동사)",
    mean: "유통",
    syn: [],
    collocations: [{ ja: "流通業", ko: "유통업" }, { ja: "市場に流通する", ko: "시장에 유통되다" }],
    examples: [{ type: "ex", label: "예문", ja: "偽物の商品が市場に流通している。", ko: "가짜 상품이 시장에 유통되고 있다." }]
  },
  {
    id: 333, day: 28, level: "N1",
    word: "経緯", kana: "けいい", pos: "명사",
    mean: "경위, 전말 (사건이 흘러온 사정)",
    syn: ["いきさつ", "事情"],
    collocations: [{ ja: "事件の経緯", ko: "사건의 자초지종/경위" }, { ja: "経緯を説明する", ko: "자세한 전말을 설명하다" }],
    examples: [{ type: "on", label: "음독", ja: "今回の提携交渉が決裂に至った詳しい経緯について、担当役員から取締役会へ詳細な報告が行われた。", ko: "이번 제휴 협상이 결렬에 이르게 된 구체적인 경위에 대해 담당 임원으로부터 이사회에 상세한 보고가 이루어졌다." }]
  },
  // ==========================================
  // [DAY 29] N2 필수 + N1 · 60개
  // ==========================================
  {
    id: 2665, day: 29, level: "N2",
    word: "見送る", kana: "みおくる", pos: "동사 (타동사)",
    mean: "배웅하다, 보류하다",
    syn: ["見合わせる"],
    collocations: [{ ja: "友人を見送る", ko: "친구를 배웅하다" }, { ja: "採用を見送る", ko: "채용을 보류하다" }],
    examples: [{ type: "ex", label: "예문", ja: "今回は計画の実施を見送ることにした。", ko: "이번에는 계획 실시를 보류하기로 했다." }]
  },
  {
    id: 2666, day: 29, level: "N2",
    word: "申し出る", kana: "もうしでる", pos: "동사 (타동사)",
    mean: "자청하다, 신청하다",
    syn: ["申し込む"],
    collocations: [{ ja: "協力を申し出る", ko: "협력을 자청하다" }, { ja: "辞職を申し出る", ko: "사직을 신청하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は自ら手伝いを申し出た。", ko: "그는 스스로 돕겠다고 자청했다." }]
  },
  {
    id: 2667, day: 29, level: "N2",
    word: "割り引く", kana: "わりびく", pos: "동사 (타동사)",
    mean: "할인하다",
    syn: ["値引きする"],
    collocations: [{ ja: "料金を割り引く", ko: "요금을 할인하다" }, { ja: "話を割り引いて聞く", ko: "이야기를 걸러 듣다" }],
    examples: [{ type: "ex", label: "예문", ja: "学生は入場料が二割割り引かれる。", ko: "학생은 입장료가 20% 할인된다." }]
  },
  {
    id: 2668, day: 29, level: "N2",
    word: "割り当てる", kana: "わりあてる", pos: "동사 (타동사)",
    mean: "할당하다, 배정하다",
    syn: ["分担させる"],
    collocations: [{ ja: "仕事を割り当てる", ko: "일을 할당하다" }],
    examples: [{ type: "ex", label: "예문", ja: "一人ずつ役割が割り当てられた。", ko: "한 사람씩 역할이 배정되었다." }]
  },
  {
    id: 354, day: 29, level: "N2",
    word: "敬う", kana: "うやまう", pos: "동사 (5단 타동사)",
    mean: "공경하다, 존경하다",
    syn: ["尊敬する", "尊ぶ"],
    collocations: [{ ja: "年長者を敬う", ko: "어른(연장자)을 공경하다" }, { ja: "神仏を敬う", ko: "신불을 숭배하다/받들다" }],
    examples: [{ type: "kun", label: "훈독", ja: "先人たちが残してくれた知恵と歴史遺産を敬い、謙虚に学び継ぐ姿勢を持つ。", ko: "선인들이 남겨준 지혜와 역사유산을 공경하고 겸허히 배우고 계승하는 자세를 지니다." }, { type: "on", label: "음독", ja: "卓越した学術的業績を残した教授に対し、教え子一同が深い敬意(けいい)を表した。", ko: "탁월한 학술적 업적을 남긴 교수에게 제자 일동이 깊은 경의를 표했다." }]
  },
  {
    id: 2669, day: 29, level: "N2",
    word: "結びつく", kana: "むすびつく", pos: "동사 (자동사)",
    mean: "연결되다, 결부되다",
    syn: ["つながる"],
    collocations: [{ ja: "成果に結びつく", ko: "성과로 이어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "努力がなかなか結果に結びつかない。", ko: "노력이 좀처럼 결과로 이어지지 않는다." }]
  },
  {
    id: 2670, day: 29, level: "N2",
    word: "見上げる", kana: "みあげる", pos: "동사 (타동사)",
    mean: "올려다보다, 우러러보다",
    syn: [],
    collocations: [{ ja: "空を見上げる", ko: "하늘을 올려다보다" }],
    examples: [{ type: "ex", label: "예문", ja: "夜空を見上げると、星がきれいだった。", ko: "밤하늘을 올려다보니 별이 아름다웠다." }]
  },
  {
    id: 2671, day: 29, level: "N2",
    word: "見下ろす", kana: "みおろす", pos: "동사 (타동사)",
    mean: "내려다보다",
    syn: [],
    collocations: [{ ja: "町を見下ろす", ko: "마을을 내려다보다" }],
    examples: [{ type: "ex", label: "예문", ja: "丘の上から町全体を見下ろした。", ko: "언덕 위에서 마을 전체를 내려다보았다." }]
  },
  {
    id: 2672, day: 29, level: "N2",
    word: "立ち上がる", kana: "たちあがる", pos: "동사 (자동사)",
    mean: "일어서다, 착수하다",
    syn: ["起き上がる"],
    collocations: [{ ja: "椅子から立ち上がる", ko: "의자에서 일어서다" }, { ja: "改革に立ち上がる", ko: "개혁에 나서다" }],
    examples: [{ type: "ex", label: "예문", ja: "住民たちは町を守るために立ち上がった。", ko: "주민들은 마을을 지키기 위해 일어섰다." }]
  },
  {
    id: 2673, day: 29, level: "N2",
    word: "突っ込む", kana: "つっこむ", pos: "동사 (자·타동사)",
    mean: "처박다, 깊이 파고들다",
    syn: ["踏み込む"],
    collocations: [{ ja: "ポケットに手を突っ込む", ko: "주머니에 손을 찔러 넣다" }, { ja: "突っ込んだ議論", ko: "깊이 파고든 논의" }],
    examples: [{ type: "ex", label: "예문", ja: "もう少し突っ込んだ議論が必要だ。", ko: "좀 더 깊이 파고든 논의가 필요하다." }]
  },
  {
    id: 356, day: 29, level: "N2",
    word: "納める", kana: "おさめる", pos: "동사 (1단 타동사)",
    mean: "납부하다, 거두다, 수습하다",
    syn: ["払う", "収める"],
    collocations: [{ ja: "税金を納める", ko: "세금을 기일 내 납부하다" }, { ja: "成功を納める", ko: "큰 성공을 거두다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "国民の三大義務に従い、所定の期日までに所得税を正しく納める。", ko: "국민의 3대 의무에 따라 소정의 기일까지 소득세를 올바르게 납부하다." }],
    polysemy: [
      { def: "① 금전·세금·상품을 정해진 곳에 내거나 납품하다", ja: "注文を受けていた精密部品を期日通りに取引先へ納めた。", ko: "주문받았던 정밀 부품을 납기대로 거래처에 납품했다." },
      { def: "② 뛰어난 결과나 성과를 자신의 것으로 거두다", ja: "長年の血のにじむような努力が実を結び、世界大会で見事な勝利を納めた。", ko: "수년간의 피땀 어린 노력이 결실을 맺어 세계대회에서 훌륭한 승리를 거두었다." },
      { def: "③ 싸움·분쟁·혼란을 원만하게 가라앉히고 매듭짓다", ja: "激しい対立が続いていた両者の間に立ち、丸く場を納めた。", ko: "격한 대립이 이어지던 양측 사이에 서서 상황을 원만하게 매듭지었다." }
    ]
  },
  {
    id: 2674, day: 29, level: "N2",
    word: "吐き出す", kana: "はきだす", pos: "동사 (타동사)",
    mean: "토해 내다, 털어놓다",
    syn: [],
    collocations: [{ ja: "息を吐き出す", ko: "숨을 내뱉다" }, { ja: "不満を吐き出す", ko: "불만을 쏟아 내다" }],
    examples: [{ type: "ex", label: "예문", ja: "たまっていた不満を一気に吐き出した。", ko: "쌓여 있던 불만을 단숨에 쏟아 냈다." }]
  },
  {
    id: 2675, day: 29, level: "N2",
    word: "生やす", kana: "はやす", pos: "동사 (타동사)",
    mean: "기르다 (수염 등)",
    syn: [],
    collocations: [{ ja: "ひげを生やす", ko: "수염을 기르다" }],
    examples: [{ type: "ex", label: "예문", ja: "父は最近ひげを生やし始めた。", ko: "아버지는 요즘 수염을 기르기 시작했다." }]
  },
  {
    id: 2676, day: 29, level: "N2",
    word: "果てしない", kana: "はてしない", pos: "い형용사",
    mean: "끝없다",
    syn: ["限りない"],
    collocations: [{ ja: "果てしない海", ko: "끝없는 바다" }],
    examples: [{ type: "ex", label: "예문", ja: "果てしなく続く砂漠を歩いた。", ko: "끝없이 이어지는 사막을 걸었다." }]
  },
  {
    id: 2677, day: 29, level: "N2",
    word: "不自然", kana: "ふしぜん", pos: "な형용사",
    mean: "부자연스러움",
    syn: ["ぎこちない"],
    collocations: [{ ja: "不自然な笑顔", ko: "부자연스러운 웃음" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の説明にはどこか不自然な点がある。", ko: "그의 설명에는 어딘가 부자연스러운 점이 있다." }]
  },
  {
    id: 2678, day: 29, level: "N2",
    word: "辛抱強い", kana: "しんぼうづよい", pos: "い형용사",
    mean: "참을성이 강하다",
    syn: ["我慢強い"],
    collocations: [{ ja: "辛抱強く待つ", ko: "참을성 있게 기다리다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は辛抱強く順番を待った。", ko: "그는 참을성 있게 차례를 기다렸다." }]
  },
  {
    id: 2679, day: 29, level: "N2",
    word: "不正", kana: "ふせい", pos: "な형용사",
    mean: "부정함",
    syn: ["不当な"],
    collocations: [{ ja: "不正な手段", ko: "부정한 수단" }],
    examples: [{ type: "ex", label: "예문", ja: "試験で不正をしてはいけない。", ko: "시험에서 부정행위를 해서는 안 된다." }]
  },
  {
    id: 440, day: 29, level: "N2",
    word: "窮屈", kana: "きゅうくつ", pos: "な형용사",
    mean: "비좁음, 거북함, 답답함",
    syn: ["きゅうくつ", "自由がない"],
    collocations: [{ ja: "窮屈な部屋", ko: "비좁고 답답한 방" }, { ja: "規則で窮屈だ", ko: "규칙이 지나치게 얽매여 답답하다" }],
    examples: [{ type: "on", label: "음독", ja: "格式を重んじる厳格なマナーに縛られた食事会は、肩が凝って窮屈極まりない思いだった。", ko: "격식을 중시하는 엄격한 예절에 얽매인 식사 모임은 어깨가 뻐근하고 답답하기 이를 데 없는 기분이었다." }]
  },
  {
    id: 2680, day: 29, level: "N2",
    word: "不利", kana: "ふり", pos: "な형용사",
    mean: "불리함",
    syn: [],
    collocations: [{ ja: "不利な条件", ko: "불리한 조건" }],
    examples: [{ type: "ex", label: "예문", ja: "この契約は我々にとって不利だ。", ko: "이 계약은 우리에게 불리하다." }]
  },
  {
    id: 2681, day: 29, level: "N2",
    word: "センス", kana: "センス", pos: "외래어",
    mean: "감각 (sense)",
    syn: ["感覚"],
    collocations: [{ ja: "センスがいい", ko: "감각이 좋다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女は服のセンスがいい。", ko: "그녀는 옷 감각이 좋다." }]
  },
  {
    id: 2682, day: 29, level: "N2",
    word: "フォロー", kana: "フォロー", pos: "외래어",
    mean: "보충, 뒷받침 (follow)",
    syn: ["補う", "支える"],
    collocations: [{ ja: "ミスをフォローする", ko: "실수를 메워 주다" }],
    examples: [{ type: "ex", label: "예문", ja: "後輩のミスを先輩がフォローした。", ko: "후배의 실수를 선배가 메워 주었다." }]
  },
  {
    id: 2683, day: 29, level: "N2",
    word: "ボランティア", kana: "ボランティア", pos: "외래어",
    mean: "자원봉사 (volunteer)",
    syn: [],
    collocations: [{ ja: "ボランティア活動", ko: "자원봉사 활동" }],
    examples: [{ type: "ex", label: "예문", ja: "週末は地域のボランティアに参加している。", ko: "주말에는 지역 자원봉사에 참가하고 있다." }]
  },
  {
    id: 2684, day: 29, level: "N2",
    word: "大幅に", kana: "おおはばに", pos: "부사",
    mean: "대폭",
    syn: ["大きく"],
    collocations: [{ ja: "大幅に遅れる", ko: "대폭 늦어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "予定が大幅に変更された。", ko: "예정이 대폭 변경되었다." }]
  },
  {
    id: 2685, day: 29, level: "N2",
    word: "恐る恐る", kana: "おそるおそる", pos: "부사",
    mean: "조심조심, 주뼛주뼛",
    syn: ["こわごわ"],
    collocations: [{ ja: "恐る恐る近づく", ko: "조심조심 다가가다" }],
    examples: [{ type: "ex", label: "예문", ja: "恐る恐るドアを開けた。", ko: "조심조심 문을 열었다." }]
  },
  {
    id: 2686, day: 29, level: "N2",
    word: "結構", kana: "けっこう", pos: "부사",
    mean: "꽤, 제법",
    syn: ["かなり"],
    collocations: [{ ja: "結構おいしい", ko: "꽤 맛있다" }],
    examples: [{ type: "ex", label: "예문", ja: "この問題は結構難しい。", ko: "이 문제는 꽤 어렵다." }]
  },
  {
    id: 383, day: 29, level: "N2",
    word: "かつて", kana: "かつて", pos: "부사",
    mean: "일찍이, 예전에, 여태껏",
    syn: ["昔", "以前"],
    collocations: [{ ja: "かつてない規模", ko: "유례없는(전례 없는) 규모" }, { ja: "かつて住んでいた街", ko: "예전에 살았던 동네" }],
    examples: [{ type: "ex", label: "예문", ja: "気候変動がもたらす今回の超大型台風は、かつて経験したことのない猛烈な暴風雨を伴っている。", ko: "기후변화가 가져온 이번 초대형 태풍은 여태껏 경험해 보지 못한 맹렬한 폭풍우를 동반하고 있다." }]
  },
  {
    id: 2687, day: 29, level: "N2",
    word: "むかむか", kana: "むかむか", pos: "부사 (의성어·의태어)",
    mean: "메슥메슥, 울컥",
    syn: ["吐き気がする", "腹が立つ"],
    collocations: [{ ja: "胸がむかむかする", ko: "속이 메슥거리다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の態度を思い出すとむかむかする。", ko: "그의 태도를 떠올리면 울컥한다." }]
  },
  {
    id: 2688, day: 29, level: "N2",
    word: "〜沿い", kana: "ぞい", pos: "접미어",
    mean: "~을 따라",
    syn: ["〜に沿った"],
    collocations: [{ ja: "川沿い", ko: "강가" }, { ja: "線路沿い", ko: "선로변" }, { ja: "海沿い", ko: "해안가" }],
    examples: []
  },
  {
    id: 2689, day: 29, level: "N2",
    word: "〜建て", kana: "だて", pos: "접미어",
    mean: "~층 건물, ~ 표시",
    syn: ["〜階建て"],
    collocations: [{ ja: "二階建て", ko: "2층 건물" }, { ja: "ドル建て", ko: "달러 표시" }],
    examples: []
  },
  {
    id: 414, day: 29, level: "N2",
    word: "始発", kana: "しはつ", pos: "명사",
    mean: "시발 (첫 출발 / 첫차)",
    syn: ["始発電車", "一番列車"],
    collocations: [{ ja: "始発列車", ko: "이른 아침 첫차" }, { ja: "始発駅", ko: "노선의 기점 출발역" }],
    examples: [{ type: "on", label: "음독", ja: "大事な試験の会場に遅刻しないよう、早朝の始発列車に乗って余裕を持って出発した。", ko: "중요한 시험장에 지각하지 않도록 이른 아침의 첫차를 타고 여유를 갖고 출발했다." }]
  },
  {
    id: 2690, day: 29, level: "N2",
    word: "回答", kana: "かいとう", pos: "명사 (する동사)",
    mean: "회답, 응답",
    syn: ["答え"],
    collocations: [{ ja: "回答を得る", ko: "회답을 얻다" }, { ja: "アンケートの回答", ko: "설문 응답" }],
    examples: [{ type: "ex", label: "예문", ja: "アンケートに回答する。", ko: "설문에 응답한다." }]
  },
  {
    id: 2691, day: 29, level: "N2",
    word: "確保", kana: "かくほ", pos: "명사 (する동사)",
    mean: "확보",
    syn: [],
    collocations: [{ ja: "席を確保する", ko: "자리를 확보하다" }, { ja: "人材の確保", ko: "인재 확보" }],
    examples: [{ type: "ex", label: "예문", ja: "早めに行って席を確保した。", ko: "일찍 가서 자리를 확보했다." }]
  },
  {
    id: 2692, day: 29, level: "N2",
    word: "加減", kana: "かげん", pos: "명사 (する동사)",
    mean: "가감, 정도, 조절",
    syn: ["調節"],
    collocations: [{ ja: "味加減", ko: "간" }, { ja: "手加減", ko: "사정을 봐줌" }],
    examples: [{ type: "ex", label: "예문", ja: "塩の加減が難しい。", ko: "소금 간을 맞추기가 어렵다." }]
  },
  {
    id: 2693, day: 29, level: "N2",
    word: "過去", kana: "かこ", pos: "명사",
    mean: "과거",
    syn: ["昔"],
    collocations: [{ ja: "過去を振り返る", ko: "과거를 되돌아보다" }, { ja: "過去最高", ko: "역대 최고" }],
    examples: [{ type: "ex", label: "예문", ja: "今年の売り上げは過去最高だった。", ko: "올해 매출은 역대 최고였다." }]
  },
  {
    id: 2694, day: 29, level: "N2",
    word: "箇所", kana: "かしょ", pos: "명사",
    mean: "곳, 개소",
    syn: ["部分", "ところ"],
    collocations: [{ ja: "間違った箇所", ko: "틀린 곳" }],
    examples: [{ type: "ex", label: "예문", ja: "間違っている箇所に線を引いた。", ko: "틀린 곳에 선을 그었다." }]
  },
  {
    id: 2695, day: 29, level: "N2",
    word: "活気", kana: "かっき", pos: "명사",
    mean: "활기",
    syn: ["元気"],
    collocations: [{ ja: "活気がある", ko: "활기가 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "朝の市場は活気にあふれている。", ko: "아침 시장은 활기가 넘친다." }]
  },
  {
    id: 2696, day: 29, level: "N2",
    word: "活躍", kana: "かつやく", pos: "명사 (する동사)",
    mean: "활약",
    syn: [],
    collocations: [{ ja: "活躍する", ko: "활약하다" }, { ja: "大活躍", ko: "대활약" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は海外で活躍している。", ko: "그는 해외에서 활약하고 있다." }]
  },
  {
    id: 415, day: 29, level: "N2",
    word: "収益", kana: "しゅうえき", pos: "명사",
    mean: "수익 (사업 등을 통해 얻는 이익)",
    syn: ["利益", "もうけ"],
    collocations: [{ ja: "収益を上げる", ko: "수익을 창출하다/올리다" }, { ja: "収益性の改善", ko: "수익성 개선" }],
    examples: [{ type: "on", label: "음독", ja: "高付加価値の新サービスを主力事業へと育成したことで、企業の年間営業収益が過去最高を更新した。", ko: "고부가가치의 신규 서비스를 주력 사업으로 육성함으로써 기업의 연간 영업수익이 사상 최고치를 경신했다." }]
  },
  {
    id: 2697, day: 29, level: "N2",
    word: "看板", kana: "かんばん", pos: "명사",
    mean: "간판",
    syn: [],
    collocations: [{ ja: "看板を出す", ko: "간판을 내걸다" }, { ja: "看板商品", ko: "대표 상품" }],
    examples: [{ type: "ex", label: "예문", ja: "店の前に大きな看板がある。", ko: "가게 앞에 큰 간판이 있다." }]
  },
  {
    id: 2698, day: 29, level: "N2",
    word: "気配", kana: "けはい", pos: "명사",
    mean: "기척, 기미",
    syn: ["様子"],
    collocations: [{ ja: "人の気配", ko: "인기척" }, { ja: "秋の気配", ko: "가을 기운" }],
    examples: [{ type: "ex", label: "예문", ja: "後ろに人の気配を感じた。", ko: "뒤에서 인기척을 느꼈다." }]
  },
  {
    id: 2699, day: 29, level: "N2",
    word: "記念", kana: "きねん", pos: "명사 (する동사)",
    mean: "기념",
    syn: [],
    collocations: [{ ja: "記念写真", ko: "기념사진" }, { ja: "記念日", ko: "기념일" }],
    examples: [{ type: "ex", label: "예문", ja: "結婚記念日にレストランで食事した。", ko: "결혼기념일에 레스토랑에서 식사했다." }]
  },
  {
    id: 2700, day: 29, level: "N2",
    word: "逆", kana: "ぎゃく", pos: "명사",
    mean: "반대, 역",
    syn: [],
    collocations: [{ ja: "逆の意見", ko: "반대 의견" }, { ja: "逆に", ko: "오히려" }],
    examples: [{ type: "ex", label: "예문", ja: "予想とは逆の結果になった。", ko: "예상과는 반대의 결과가 되었다." }]
  },
  {
    id: 2701, day: 29, level: "N2",
    word: "休憩", kana: "きゅうけい", pos: "명사 (する동사)",
    mean: "휴식",
    syn: ["休み"],
    collocations: [{ ja: "休憩を取る", ko: "휴식을 취하다" }, { ja: "休憩時間", ko: "쉬는 시간" }],
    examples: [{ type: "ex", label: "예문", ja: "ここで十分間休憩しましょう。", ko: "여기서 10분간 쉽시다." }]
  },
  {
    id: 2702, day: 29, level: "N2",
    word: "教訓", kana: "きょうくん", pos: "명사",
    mean: "교훈",
    syn: [],
    collocations: [{ ja: "教訓を得る", ko: "교훈을 얻다" }],
    examples: [{ type: "ex", label: "예문", ja: "失敗から多くの教訓を得た。", ko: "실패에서 많은 교훈을 얻었다." }]
  },
  {
    id: 418, day: 29, level: "N2",
    word: "執筆", kana: "しっぴつ", pos: "명사",
    mean: "집필 (글이나 책을 씀)",
    syn: ["書くこと", "著述"],
    collocations: [{ ja: "原稿を執筆する", ko: "원고를 집필하다" }, { ja: "執筆活動に専念する", ko: "집필 활동에 전념하다" }],
    examples: [{ type: "on", label: "음독", ja: "長年のフィールドワークを通じて蓄積した貴重な民俗調査データを基に、集大成となる論考の執筆に着手した。", ko: "수년간의 현장 조사를 통해 축적한 귀중한 민속 조사 데이터를 바탕으로 집대성적 논고의 집필에 착수했다." }]
  },
  {
    id: 2703, day: 29, level: "N2",
    word: "行列", kana: "ぎょうれつ", pos: "명사 (する동사)",
    mean: "행렬, 줄",
    syn: ["列"],
    collocations: [{ ja: "行列ができる", ko: "줄이 생기다" }],
    examples: [{ type: "ex", label: "예문", ja: "人気の店の前に行列ができている。", ko: "인기 가게 앞에 줄이 생겨 있다." }]
  },
  {
    id: 2704, day: 29, level: "N2",
    word: "距離", kana: "きょり", pos: "명사",
    mean: "거리",
    syn: [],
    collocations: [{ ja: "距離を置く", ko: "거리를 두다" }, { ja: "長距離", ko: "장거리" }],
    examples: [{ type: "ex", label: "예문", ja: "駅までの距離は約二キロだ。", ko: "역까지의 거리는 약 2킬로미터다." }]
  },
  {
    id: 2705, day: 29, level: "N2",
    word: "苦痛", kana: "くつう", pos: "명사",
    mean: "고통",
    syn: ["苦しみ"],
    collocations: [{ ja: "苦痛を感じる", ko: "고통을 느끼다" }],
    examples: [{ type: "ex", label: "예문", ja: "満員電車での通勤は苦痛だ。", ko: "만원 전철 통근은 고통이다." }]
  },
  {
    id: 2706, day: 29, level: "N2",
    word: "区域", kana: "くいき", pos: "명사",
    mean: "구역",
    syn: ["エリア"],
    collocations: [{ ja: "禁煙区域", ko: "금연 구역" }],
    examples: [{ type: "ex", label: "예문", ja: "この区域は駐車禁止だ。", ko: "이 구역은 주차 금지다." }]
  },
  {
    id: 2707, day: 29, level: "N2",
    word: "経由", kana: "けいゆ", pos: "명사 (する동사)",
    mean: "경유",
    syn: ["通る"],
    collocations: [{ ja: "大阪経由", ko: "오사카 경유" }],
    examples: [{ type: "ex", label: "예문", ja: "ソウル経由でパリに行った。", ko: "서울 경유로 파리에 갔다." }]
  },
  {
    id: 2708, day: 29, level: "N2",
    word: "見当", kana: "けんとう", pos: "명사",
    mean: "짐작, 예상",
    syn: ["予想", "目安"],
    collocations: [{ ja: "見当がつく", ko: "짐작이 가다" }, { ja: "見当違い", ko: "예상이 빗나감" }],
    examples: [{ type: "ex", label: "예문", ja: "犯人が誰なのか全く見当がつかない。", ko: "범인이 누구인지 전혀 짐작이 안 간다." }]
  },
  {
    id: 420, day: 29, level: "N2",
    word: "昇進", kana: "しょうしん", pos: "명사",
    mean: "승진 (직위가 올라감)",
    syn: ["出世", "昇格"],
    collocations: [{ ja: "管理職に昇進する", ko: "관리직으로 승진하다" }, { ja: "異例のスピード昇進", ko: "이례적인 고속 승진" }],
    examples: [{ type: "on", label: "음독", ja: "困難な海外プロジェクトを成功に導いた抜群の統率力と実績が高く評価され、最年少で役員に昇進した。", ko: "곤란한 해외 프로젝트를 성공으로 이끈 발군의 통솔력과 실적을 높이 평가받아 최연소 임원으로 승진했다." }]
  },
  {
    id: 2709, day: 29, level: "N1",
    word: "理念", kana: "りねん", pos: "명사",
    mean: "이념",
    syn: [],
    collocations: [{ ja: "企業理念", ko: "기업 이념" }],
    examples: [{ type: "ex", label: "예문", ja: "会社の理念に共感して入社した。", ko: "회사의 이념에 공감해서 입사했다." }]
  },
  {
    id: 2710, day: 29, level: "N1",
    word: "類似", kana: "るいじ", pos: "명사 (する동사)",
    mean: "유사",
    syn: ["似る"],
    collocations: [{ ja: "類似品", ko: "유사품" }, { ja: "類似点", ko: "유사점" }],
    examples: [{ type: "ex", label: "예문", ja: "二つの事件には類似点が多い。", ko: "두 사건에는 유사점이 많다." }]
  },
  {
    id: 351, day: 29, level: "N1",
    word: "操る", kana: "あやつる", pos: "동사 (5단 타동사)",
    mean: "다루다, 조종하다, 능숙하게 구사하다",
    syn: ["動かす", "使いこなす"],
    collocations: [{ ja: "人形を操る", ko: "인형을 조종하다" }, { ja: "三か国語を操る", ko: "3개 국어를 유창하게 구사하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "最新のITツールを自由自在に操ることで、定常業務を大幅に効率化させた。", ko: "최신 IT 도구를 자유자재로 다룸으로써 정형 업무를 대폭 효율화했다." }, { type: "on", label: "음독", ja: "悪天候の中、機長が巧みな操縦(そうじゅう)技術で旅客機を無事に着陸させた。", ko: "악천후 속에서 기장이 숙련된 조종 기술로 여객기를 무사히 착륙시켰다." }]
  },
  {
    id: 2711, day: 29, level: "N1",
    word: "劣化", kana: "れっか", pos: "명사 (する동사)",
    mean: "열화, 품질 저하",
    syn: ["悪くなる"],
    collocations: [{ ja: "劣化が進む", ko: "열화가 진행되다" }],
    examples: [{ type: "ex", label: "예문", ja: "古い建物は劣化が激しい。", ko: "오래된 건물은 노후화가 심하다." }]
  },
  {
    id: 353, day: 29, level: "N1",
    word: "労わる", kana: "いたわる", pos: "동사 (5단 타동사)",
    mean: "위로하다, 친절하게 돌보다, 아끼다",
    syn: ["大切にする", "ねぎらう"],
    collocations: [{ ja: "高齢者を労わる", ko: "어르신을 공경하여 돌보다" }, { ja: "体を労わる", ko: "몸을 아끼고 돌보다" }],
    examples: [{ type: "kun", label: "훈독", ja: "長時間の過重労働で疲れ果てた同僚の肩を叩き、温かい言葉で労わった。", ko: "장시간의 과중 노동으로 지친 동료의 어깨를 두드리며 따뜻한 말로 위로했다." }]
  },
  {
    id: 2712, day: 29, level: "N1",
    word: "論点", kana: "ろんてん", pos: "명사",
    mean: "논점",
    syn: ["ポイント"],
    collocations: [{ ja: "論点を整理する", ko: "논점을 정리하다" }],
    examples: [{ type: "ex", label: "예문", ja: "議論の論点がずれている。", ko: "논의의 논점이 빗나가 있다." }]
  },
  {
    id: 360, day: 29, level: "N1",
    word: "絡む", kana: "からむ", pos: "동사 (5단 자동사)",
    mean: "얽히다, 관련되다, 시비를 걸다",
    syn: ["巻きつく", "関係する"],
    collocations: [{ ja: "利害が絡む", ko: "이해관계가 복잡하게 얽히다" }, { ja: "酔っ払いに絡まれる", ko: "취객에게 시달림(시비)을 당하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "複数の利害関係が複雑に絡み合っているため、問題の円満な解決は容易ではない。", ko: "복수의 이해관계가 복잡하게 얽혀 있기 때문에 문제의 원만한 해결은 쉽지 않다." }]
  },
  {
    id: 2713, day: 29, level: "N1",
    word: "枠組み", kana: "わくぐみ", pos: "명사",
    mean: "틀, 구조",
    syn: ["フレーム"],
    collocations: [{ ja: "枠組みを作る", ko: "틀을 만들다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい制度の枠組みが決まった。", ko: "새 제도의 틀이 정해졌다." }]
  },
  // ==========================================
  // [DAY 30] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 2714, day: 30, level: "N2",
    word: "はねる", kana: "はねる", pos: "동사 (자·타동사)",
    mean: "튀다, (차가) 치다",
    syn: [],
    collocations: [{ ja: "水がはねる", ko: "물이 튀다" }, { ja: "車にはねられる", ko: "차에 치이다" }],
    examples: [{ type: "ex", label: "예문", ja: "水たまりの水がはねて服が汚れた。", ko: "웅덩이 물이 튀어 옷이 더러워졌다." }]
  },
  {
    id: 2715, day: 30, level: "N2",
    word: "はめる", kana: "はめる", pos: "동사 (타동사)",
    mean: "끼다, 끼우다",
    syn: [],
    collocations: [{ ja: "指輪をはめる", ko: "반지를 끼다" }, { ja: "手袋をはめる", ko: "장갑을 끼다" }],
    examples: [{ type: "ex", label: "예문", ja: "寒いので手袋をはめて出かけた。", ko: "추워서 장갑을 끼고 나갔다." }]
  },
  {
    id: 2716, day: 30, level: "N2",
    word: "払い込む", kana: "はらいこむ", pos: "동사 (타동사)",
    mean: "납입하다",
    syn: ["納める"],
    collocations: [{ ja: "授業料を払い込む", ko: "수업료를 납입하다" }],
    examples: [{ type: "ex", label: "예문", ja: "期限までに会費を払い込んでください。", ko: "기한까지 회비를 납입해 주세요." }]
  },
  {
    id: 357, day: 30, level: "N2",
    word: "訪れる", kana: "おとずれる", pos: "동사 (1단 자동사)",
    mean: "방문하다, 찾아오다, 도래하다",
    syn: ["行く", "訪問する"],
    collocations: [{ ja: "春が訪れる", ko: "봄이 찾아오다/도래하다" }, { ja: "好機が訪れる", ko: "절호의 기회가 찾아오다" }],
    examples: [{ type: "kun", label: "훈독", ja: "厳しい冬がようやく去り、野山に色鮮やかな春の気配が静かに訪れた。", ko: "혹독한 겨울이 마침내 지나가고 산과 들에 화사한 봄기운이 조용히 찾아왔다." }, { type: "on", label: "음독", ja: "海外からの重要な取引先が、工場見学のため来訪(らいほう)した。", ko: "해외의 중요한 거래처가 공장 견학을 위해 방문했다." }]
  },
  {
    id: 2717, day: 30, level: "N2",
    word: "煮る", kana: "にる", pos: "동사 (타동사)",
    mean: "삶다, 조리다",
    syn: ["茹でる"],
    collocations: [{ ja: "野菜を煮る", ko: "채소를 삶다" }, { ja: "煮ても焼いても食えない", ko: "어떻게 해 볼 도리가 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "魚を甘辛く煮た。", ko: "생선을 달콤하고 짭짤하게 조렸다." }]
  },
  {
    id: 2718, day: 30, level: "N2",
    word: "寝かせる", kana: "ねかせる", pos: "동사 (타동사)",
    mean: "재우다, 숙성시키다",
    syn: [],
    collocations: [{ ja: "子どもを寝かせる", ko: "아이를 재우다" }, { ja: "生地を寝かせる", ko: "반죽을 숙성시키다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもを寝かせてから、仕事を始めた。", ko: "아이를 재운 후 일을 시작했다." }]
  },
  {
    id: 2719, day: 30, level: "N2",
    word: "剥がれる", kana: "はがれる", pos: "동사 (자동사)",
    mean: "벗겨지다, 떨어지다",
    syn: [],
    collocations: [{ ja: "ペンキが剥がれる", ko: "페인트가 벗겨지다" }],
    examples: [{ type: "ex", label: "예문", ja: "古い壁のペンキが剥がれている。", ko: "낡은 벽의 페인트가 벗겨져 있다." }]
  },
  {
    id: 2720, day: 30, level: "N2",
    word: "挟まる", kana: "はさまる", pos: "동사 (자동사)",
    mean: "끼다, 끼이다",
    syn: [],
    collocations: [{ ja: "ドアに指が挟まる", ko: "문에 손가락이 끼다" }, { ja: "板挟み", ko: "진퇴양난" }],
    examples: [{ type: "ex", label: "예문", ja: "電車のドアにかばんが挟まった。", ko: "전철 문에 가방이 끼었다." }]
  },
  {
    id: 2721, day: 30, level: "N2",
    word: "揺らす", kana: "ゆらす", pos: "동사 (타동사)",
    mean: "흔들다",
    syn: ["揺さぶる"],
    collocations: [{ ja: "木を揺らす", ko: "나무를 흔들다" }],
    examples: [{ type: "ex", label: "예문", ja: "風が木の枝を揺らしている。", ko: "바람이 나뭇가지를 흔들고 있다." }]
  },
  {
    id: 358, day: 30, level: "N2",
    word: "傾く", kana: "かたむく", pos: "동사 (5단 자동사)",
    mean: "기울다, 쇠퇴하다, 쏠리다",
    syn: ["傾斜する", "偏る"],
    collocations: [{ ja: "日が傾く", ko: "해가 서쪽으로 뉘엿뉘엿 기울다" }, { ja: "経営が傾く", ko: "회사 경영이 위태롭게 기울다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "長引く不況と無理な設備投資が祟り、老舗メーカーの経営が急速に傾いてしまった。", ko: "길어지는 불황과 무리한 설비 투자가 화근이 되어 노포 제조업체의 경영이 급속도로 기울고 말았다." }],
    polysemy: [
      { def: "① 한쪽으로 물리적인 균형이 쏠려 비스듬해지다", ja: "地震の激しい揺れによって、古い民家の柱が危険な角度に傾いた。", ko: "지진의 격한 흔들림으로 인해 오래된 민가의 기둥이 위험한 각도로 기울었다." },
      { def: "② 번영하던 가세·조직·경영이 쇠퇴하여 무너지려 하다", ja: "主力製品の売上急減に伴い、企業の屋台骨が大きく傾き始めた。", ko: "주력 제품의 매출 급감에 따라 기업의 근간이 크게 휘청거리며 기울기 시작했다." },
      { def: "③ 마음이나 생각, 태도가 특정한 한쪽 방향으로 치우치다", ja: "議論を重ねるうちに、反対派の意見も徐々に賛成へと傾いていった。", ko: "논의를 거듭하는 사이에 반대파의 의견도 점차 찬성 쪽으로 기울어 갔다." }
    ]
  },
  {
    id: 2722, day: 30, level: "N2",
    word: "盛り上がる", kana: "もりあがる", pos: "동사 (자동사)",
    mean: "분위기가 고조되다, 부풀어 오르다",
    syn: ["にぎわう"],
    collocations: [{ ja: "会が盛り上がる", ko: "모임이 무르익다" }],
    examples: [{ type: "ex", label: "예문", ja: "パーティーは大いに盛り上がった。", ko: "파티는 크게 무르익었다." }]
  },
  {
    id: 2723, day: 30, level: "N2",
    word: "盛り上げる", kana: "もりあげる", pos: "동사 (타동사)",
    mean: "분위기를 띄우다",
    syn: [],
    collocations: [{ ja: "場を盛り上げる", ko: "분위기를 띄우다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は冗談で場を盛り上げた。", ko: "그는 농담으로 분위기를 띄웠다." }]
  },
  {
    id: 2724, day: 30, level: "N2",
    word: "注意深い", kana: "ちゅういぶかい", pos: "い형용사",
    mean: "주의 깊다",
    syn: ["慎重な"],
    collocations: [{ ja: "注意深く観察する", ko: "주의 깊게 관찰하다" }],
    examples: [{ type: "ex", label: "예문", ja: "注意深く読めば、答えが分かるはずだ。", ko: "주의 깊게 읽으면 답을 알 수 있을 것이다." }]
  },
  {
    id: 2725, day: 30, level: "N2",
    word: "無責任", kana: "むせきにん", pos: "な형용사",
    mean: "무책임함",
    syn: ["いい加減な"],
    collocations: [{ ja: "無責任な発言", ko: "무책임한 발언" }],
    examples: [{ type: "ex", label: "예문", ja: "途中で投げ出すのは無責任だ。", ko: "도중에 내팽개치는 것은 무책임하다." }]
  },
  {
    id: 2726, day: 30, level: "N2",
    word: "物騒", kana: "ぶっそう", pos: "な형용사",
    mean: "뒤숭숭함, 위험함",
    syn: ["危険な"],
    collocations: [{ ja: "物騒な世の中", ko: "뒤숭숭한 세상" }],
    examples: [{ type: "ex", label: "예문", ja: "最近この辺りも物騒になった。", ko: "요즘 이 근처도 위험해졌다." }]
  },
  {
    id: 2727, day: 30, level: "N2",
    word: "用心深い", kana: "ようじんぶかい", pos: "い형용사",
    mean: "조심성이 많다",
    syn: ["慎重な"],
    collocations: [{ ja: "用心深い性格", ko: "조심성 많은 성격" }],
    examples: [{ type: "ex", label: "예문", ja: "用心深い彼は、知らない人を家に入れない。", ko: "조심성 많은 그는 모르는 사람을 집에 들이지 않는다." }]
  },
  {
    id: 441, day: 30, level: "N2",
    word: "円滑", kana: "えんかつ", pos: "な형용사",
    mean: "원활함, 매끄러움",
    syn: ["スムーズ", "順調"],
    collocations: [{ ja: "円滑に進む", ko: "원활하게 척척 진행되다" }, { ja: "円滑な運営", ko: "매끄러운 운영" }],
    examples: [{ type: "on", label: "음독", ja: "関係部署同士の綿密な意思疎通が、大規模プロジェクトの円滑な進行を力強く後押しした。", ko: "관계 부서 간의 긴밀한 의사소통이 대규모 프로젝트의 원활한 진행을 강력하게 뒷받침했다." }]
  },
  {
    id: 2728, day: 30, level: "N2",
    word: "平凡", kana: "へいぼん", pos: "な형용사",
    mean: "평범함",
    syn: ["普通の"],
    collocations: [{ ja: "平凡な毎日", ko: "평범한 나날" }],
    examples: [{ type: "ex", label: "예문", ja: "平凡でも幸せな人生を送りたい。", ko: "평범해도 행복한 인생을 보내고 싶다." }]
  },
  {
    id: 2729, day: 30, level: "N2",
    word: "オーナー", kana: "オーナー", pos: "외래어",
    mean: "소유자, 주인 (owner)",
    syn: ["持ち主"],
    collocations: [{ ja: "店のオーナー", ko: "가게 주인" }],
    examples: [{ type: "ex", label: "예문", ja: "このレストランのオーナーは料理人でもある。", ko: "이 레스토랑의 주인은 요리사이기도 하다." }]
  },
  {
    id: 2730, day: 30, level: "N2",
    word: "カーブ", kana: "カーブ", pos: "외래어",
    mean: "커브, 곡선 (curve)",
    syn: ["曲がり角"],
    collocations: [{ ja: "急なカーブ", ko: "급커브" }],
    examples: [{ type: "ex", label: "예문", ja: "この先は急なカーブが続く。", ko: "이 앞은 급커브가 이어진다." }]
  },
  {
    id: 2731, day: 30, level: "N2",
    word: "ストック", kana: "ストック", pos: "외래어",
    mean: "비축, 재고 (stock)",
    syn: ["在庫", "蓄え"],
    collocations: [{ ja: "食料をストックする", ko: "식량을 비축하다" }],
    examples: [{ type: "ex", label: "예문", ja: "非常用の水をストックしておく。", ko: "비상용 물을 비축해 둔다." }]
  },
  {
    id: 2732, day: 30, level: "N2",
    word: "決まって", kana: "きまって", pos: "부사",
    mean: "어김없이, 꼭",
    syn: ["いつも", "必ず"],
    collocations: [{ ja: "決まって遅刻する", ko: "어김없이 지각하다" }],
    examples: [{ type: "ex", label: "예문", ja: "雨の日には決まって頭が痛くなる。", ko: "비 오는 날에는 어김없이 머리가 아프다." }]
  },
  {
    id: 2733, day: 30, level: "N2",
    word: "再三", kana: "さいさん", pos: "부사",
    mean: "여러 번, 재삼",
    syn: ["何度も", "たびたび"],
    collocations: [{ ja: "再三注意する", ko: "여러 번 주의를 주다" }],
    examples: [{ type: "ex", label: "예문", ja: "再三注意したのに、また遅刻した。", ko: "여러 번 주의를 줬는데 또 지각했다." }]
  },
  {
    id: 2734, day: 30, level: "N2",
    word: "早急に", kana: "さっきゅうに", pos: "부사",
    mean: "조속히",
    syn: ["至急", "すぐに"],
    collocations: [{ ja: "早急に対応する", ko: "조속히 대응하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この問題は早急に解決すべきだ。", ko: "이 문제는 조속히 해결해야 한다." }]
  },
  {
    id: 2735, day: 30, level: "N2",
    word: "総じて", kana: "そうじて", pos: "부사",
    mean: "대체로, 전반적으로",
    syn: ["概して", "全体的に"],
    collocations: [{ ja: "総じて好評だ", ko: "대체로 호평이다" }],
    examples: [{ type: "ex", label: "예문", ja: "今年の新入社員は総じてまじめだ。", ko: "올해 신입 사원은 대체로 성실하다." }]
  },
  {
    id: 2736, day: 30, level: "N2",
    word: "適宜", kana: "てきぎ", pos: "부사",
    mean: "적절히, 알맞게",
    syn: ["適当に"],
    collocations: [{ ja: "適宜休憩を取る", ko: "적절히 휴식을 취하다" }],
    examples: [{ type: "ex", label: "예문", ja: "資料は適宜参照してください。", ko: "자료는 적절히 참조해 주세요." }]
  },
  {
    id: 2737, day: 30, level: "N2",
    word: "めっきり", kana: "めっきり", pos: "부사 (의성어·의태어)",
    mean: "눈에 띄게, 부쩍",
    syn: ["ずいぶん"],
    collocations: [{ ja: "めっきり寒くなる", ko: "부쩍 추워지다" }],
    examples: [{ type: "ex", label: "예문", ja: "最近めっきり寒くなった。", ko: "요즘 부쩍 추워졌다." }]
  },
  {
    id: 2738, day: 30, level: "N2",
    word: "もじもじ", kana: "もじもじ", pos: "부사 (의성어·의태어)",
    mean: "머뭇머뭇",
    syn: ["ためらう"],
    collocations: [{ ja: "もじもじする", ko: "머뭇거리다" }],
    examples: [{ type: "ex", label: "예문", ja: "恥ずかしそうにもじもじしている。", ko: "부끄러운 듯 머뭇거리고 있다." }]
  },
  {
    id: 2739, day: 30, level: "N2",
    word: "それにしても", kana: "それにしても", pos: "접속사",
    mean: "그렇다 치더라도, 그나저나",
    syn: ["それにしたって"],
    collocations: [{ ja: "それにしても", ko: "그나저나" }],
    examples: [{ type: "ex", label: "예문", ja: "それにしても、今日は暑いね。", ko: "그나저나 오늘은 덥네." }]
  },
  {
    id: 2740, day: 30, level: "N2",
    word: "〜付き", kana: "つき", pos: "접미어",
    mean: "~이 딸림, ~붙이",
    syn: ["〜が付いた"],
    collocations: [{ ja: "朝食付き", ko: "조식 포함" }, { ja: "保証付き", ko: "보증 포함" }],
    examples: []
  },
  {
    id: 2741, day: 30, level: "N2",
    word: "現金", kana: "げんきん", pos: "명사",
    mean: "현금",
    syn: [],
    collocations: [{ ja: "現金で払う", ko: "현금으로 내다" }],
    examples: [{ type: "ex", label: "예문", ja: "この店は現金しか使えない。", ko: "이 가게는 현금만 쓸 수 있다." }]
  },
  {
    id: 2742, day: 30, level: "N2",
    word: "見解", kana: "けんかい", pos: "명사",
    mean: "견해",
    syn: ["意見", "考え"],
    collocations: [{ ja: "見解の相違", ko: "견해 차이" }],
    examples: [{ type: "ex", label: "예문", ja: "専門家の間でも見解が分かれている。", ko: "전문가 사이에서도 견해가 갈리고 있다." }]
  },
  {
    id: 2743, day: 30, level: "N2",
    word: "原稿", kana: "げんこう", pos: "명사",
    mean: "원고",
    syn: [],
    collocations: [{ ja: "原稿を書く", ko: "원고를 쓰다" }, { ja: "原稿用紙", ko: "원고지" }],
    examples: [{ type: "ex", label: "예문", ja: "締め切りまでに原稿を仕上げた。", ko: "마감까지 원고를 완성했다." }]
  },
  {
    id: 2744, day: 30, level: "N2",
    word: "検討", kana: "けんとう", pos: "명사 (する동사)",
    mean: "검토",
    syn: ["考える"],
    collocations: [{ ja: "検討を重ねる", ko: "검토를 거듭하다" }, { ja: "前向きに検討する", ko: "긍정적으로 검토하다" }],
    examples: [{ type: "ex", label: "예문", ja: "その提案については前向きに検討します。", ko: "그 제안에 대해서는 긍정적으로 검토하겠습니다." }]
  },
  {
    id: 2745, day: 30, level: "N2",
    word: "現地", kana: "げんち", pos: "명사",
    mean: "현지",
    syn: [],
    collocations: [{ ja: "現地の人", ko: "현지 사람" }, { ja: "現地時間", ko: "현지 시간" }],
    examples: [{ type: "ex", label: "예문", ja: "現地の人に道を教えてもらった。", ko: "현지 사람에게 길을 안내받았다." }]
  },
  {
    id: 2746, day: 30, level: "N2",
    word: "好意", kana: "こうい", pos: "명사",
    mean: "호의",
    syn: ["親切"],
    collocations: [{ ja: "好意を持つ", ko: "호감을 갖다" }, { ja: "好意に甘える", ko: "호의에 기대다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の好意に甘えて車で送ってもらった。", ko: "그의 호의에 기대어 차로 바래다 받았다." }]
  },
  {
    id: 462, day: 30, level: "N2",
    word: "承認", kana: "しょうにん", pos: "명사",
    mean: "승인",
    syn: ["認めること", "許可"],
    collocations: [{ ja: "正式に承認する", ko: "정식으로 승인하다" }, { ja: "承認を得る", ko: "결재/승인을 얻다" }],
    examples: [{ type: "on", label: "음독", ja: "新薬の安全性と有効性が臨床試験で確認され、厚生労働省による正式な製造承認が下りた。", ko: "신약의 안전성과 유효성이 임상시험에서 확인되어 후생노동성에 의한 정식 제조 승인이 떨어졌다." }]
  },
  {
    id: 2747, day: 30, level: "N2",
    word: "行為", kana: "こうい", pos: "명사",
    mean: "행위",
    syn: ["行動"],
    collocations: [{ ja: "迷惑行為", ko: "민폐 행위" }, { ja: "親切な行為", ko: "친절한 행위" }],
    examples: [{ type: "ex", label: "예문", ja: "それは法律に反する行為だ。", ko: "그것은 법률에 반하는 행위다." }]
  },
  {
    id: 2748, day: 30, level: "N2",
    word: "合計", kana: "ごうけい", pos: "명사 (する동사)",
    mean: "합계",
    syn: ["総計"],
    collocations: [{ ja: "合計金額", ko: "합계 금액" }],
    examples: [{ type: "ex", label: "예문", ja: "合計で五千円になります。", ko: "합계 5천 엔입니다." }]
  },
  {
    id: 2749, day: 30, level: "N2",
    word: "交替", kana: "こうたい", pos: "명사 (する동사)",
    mean: "교대",
    syn: ["交代"],
    collocations: [{ ja: "交替で働く", ko: "교대로 일하다" }],
    examples: [{ type: "ex", label: "예문", ja: "夜勤は三人で交替する。", ko: "야근은 세 사람이 교대한다." }]
  },
  {
    id: 2750, day: 30, level: "N2",
    word: "口実", kana: "こうじつ", pos: "명사",
    mean: "구실, 핑계",
    syn: ["言い訳"],
    collocations: [{ ja: "口実を作る", ko: "구실을 만들다" }],
    examples: [{ type: "ex", label: "예문", ja: "病気を口実に会議を休んだ。", ko: "병을 핑계로 회의를 빠졌다." }]
  },
  {
    id: 2751, day: 30, level: "N2",
    word: "口調", kana: "くちょう", pos: "명사",
    mean: "어조, 말투",
    syn: ["話し方"],
    collocations: [{ ja: "強い口調", ko: "강한 어조" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は穏やかな口調で話した。", ko: "그는 온화한 말투로 말했다." }]
  },
  {
    id: 2752, day: 30, level: "N2",
    word: "考慮", kana: "こうりょ", pos: "명사 (する동사)",
    mean: "고려",
    syn: ["考える"],
    collocations: [{ ja: "考慮に入れる", ko: "고려에 넣다" }, { ja: "事情を考慮する", ko: "사정을 고려하다" }],
    examples: [{ type: "ex", label: "예문", ja: "天候を考慮して日程を決める。", ko: "날씨를 고려해 일정을 정한다." }]
  },
  {
    id: 465, day: 30, level: "N2",
    word: "推進", kana: "すいしん", pos: "명사",
    mean: "추진",
    syn: ["進めること", "促進"],
    collocations: [{ ja: "改革を推進する", ko: "개혁을 강력히 추진하다" }, { ja: "推進力", ko: "사업의 추진력" }],
    examples: [{ type: "on", label: "음독", ja: "少子高齢化に対応するため、女性や高齢者がいきいきと活躍できる社会づくりを国家プロジェクトとして推進する。", ko: "저출산 고령화에 대응하기 위해 여성과 고령자가 활기차게 활약할 수 있는 사회 조성을 국가 프로젝트로서 추진하다." }]
  },
  {
    id: 2753, day: 30, level: "N2",
    word: "心当たり", kana: "こころあたり", pos: "명사",
    mean: "짚이는 데",
    syn: ["見当"],
    collocations: [{ ja: "心当たりがある", ko: "짚이는 데가 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "その件について何か心当たりはありますか。", ko: "그 건에 대해 짚이는 데가 있습니까?" }]
  },
  {
    id: 2754, day: 30, level: "N2",
    word: "心構え", kana: "こころがまえ", pos: "명사",
    mean: "마음가짐",
    syn: ["覚悟"],
    collocations: [{ ja: "社会人としての心構え", ko: "사회인으로서의 마음가짐" }],
    examples: [{ type: "ex", label: "예문", ja: "試験に臨む心構えができた。", ko: "시험에 임할 마음가짐이 되었다." }]
  },
  {
    id: 2755, day: 30, level: "N2",
    word: "小銭", kana: "こぜに", pos: "명사",
    mean: "잔돈",
    syn: [],
    collocations: [{ ja: "小銭入れ", ko: "동전 지갑" }],
    examples: [{ type: "ex", label: "예문", ja: "小銭がなくてバスに乗れなかった。", ko: "잔돈이 없어서 버스를 타지 못했다." }]
  },
  {
    id: 2756, day: 30, level: "N2",
    word: "言葉遣い", kana: "ことばづかい", pos: "명사",
    mean: "말투, 말씨",
    syn: ["口調"],
    collocations: [{ ja: "言葉遣いに気をつける", ko: "말씨에 주의하다" }],
    examples: [{ type: "ex", label: "예문", ja: "目上の人には言葉遣いに気をつけよう。", ko: "윗사람에게는 말씨에 주의하자." }]
  },
  {
    id: 2757, day: 30, level: "N2",
    word: "混乱", kana: "こんらん", pos: "명사 (する동사)",
    mean: "혼란",
    syn: ["混雑"],
    collocations: [{ ja: "混乱を招く", ko: "혼란을 초래하다" }],
    examples: [{ type: "ex", label: "예문", ja: "突然の発表で会場は混乱した。", ko: "갑작스러운 발표로 회장은 혼란에 빠졌다." }]
  },
  {
    id: 2758, day: 30, level: "N2",
    word: "差額", kana: "さがく", pos: "명사",
    mean: "차액",
    syn: [],
    collocations: [{ ja: "差額を払う", ko: "차액을 내다" }],
    examples: [{ type: "ex", label: "예문", ja: "座席を変更して差額を支払った。", ko: "좌석을 변경하고 차액을 지불했다." }]
  },
  {
    id: 2759, day: 30, level: "N2",
    word: "座席", kana: "ざせき", pos: "명사",
    mean: "좌석",
    syn: ["席"],
    collocations: [{ ja: "座席を予約する", ko: "좌석을 예약하다" }, { ja: "指定座席", ko: "지정석" }],
    examples: [{ type: "ex", label: "예문", ja: "窓側の座席を予約した。", ko: "창가 좌석을 예약했다." }]
  },
  {
    id: 479, day: 30, level: "N2",
    word: "撤回", kana: "てっかい", pos: "명사",
    mean: "철회 (의사 표시나 제안을 거두어들임)",
    syn: ["取り消し", "取り下げ"],
    collocations: [{ ja: "発言を撤回する", ko: "부적절한 발언을 철회하다" }, { ja: "要求の撤回", ko: "무리한 요구 철회" }],
    examples: [{ type: "on", label: "음독", ja: "世論の激しい反発と批判の高まりを受け、大臣は記者会見を開いて問題の不適切発言を正式に撤回した。", ko: "여론의 거센 반발과 비판 고조에 직면하여 장관은 기자회견을 열고 문제의 부적절 발언을 정식으로 철회했다." }]
  },
  {
    id: 2760, day: 30, level: "N2",
    word: "作物", kana: "さくもつ", pos: "명사",
    mean: "작물",
    syn: ["農作物"],
    collocations: [{ ja: "作物を育てる", ko: "작물을 기르다" }],
    examples: [{ type: "ex", label: "예문", ja: "今年は天候が良く、作物がよく育った。", ko: "올해는 날씨가 좋아서 작물이 잘 자랐다." }]
  },
  {
    id: 2761, day: 30, level: "N1",
    word: "見なす", kana: "みなす", pos: "동사 (타동사)",
    mean: "간주하다",
    syn: ["考える"],
    collocations: [{ ja: "欠席と見なす", ko: "결석으로 간주하다" }],
    examples: [{ type: "ex", label: "예문", ja: "連絡なしの欠席は、辞退したと見なします。", ko: "연락 없는 결석은 사퇴한 것으로 간주합니다." }]
  },
  {
    id: 370, day: 30, level: "N1",
    word: "騒々しい", kana: "そうぞうしい", pos: "い형용사",
    mean: "시끄럽다, 어수선하다, 소란스럽다",
    syn: ["騒がしい", "うるさい"],
    collocations: [{ ja: "世間が騒々しい", ko: "세상이 시끄럽고 뒤숭숭하다" }, { ja: "騒々しい通り", ko: "번잡하고 소란스러운 큰길" }],
    examples: [{ type: "kun", label: "훈독", ja: "都会の騒々しい喧騒を離れ、週末は静かな山間の温泉宿で心身を癒やす。", ko: "도시의 어수선하고 시끄러운 소음을 벗어나 주말에는 한적한 산골 온천 여관에서 심신을 달래다." }]
  },
  {
    id: 2762, day: 30, level: "N1",
    word: "もたらす", kana: "もたらす", pos: "동사 (타동사)",
    mean: "가져오다, 초래하다",
    syn: ["引き起こす", "招く"],
    collocations: [{ ja: "利益をもたらす", ko: "이익을 가져오다" }, { ja: "被害をもたらす", ko: "피해를 초래하다" }],
    examples: [{ type: "ex", label: "예문", ja: "台風は各地に大きな被害をもたらした。", ko: "태풍은 각지에 큰 피해를 가져왔다." }]
  },
  {
    id: 373, day: 30, level: "N1",
    word: "清々しい", kana: "すがすがしい", pos: "い형용사",
    mean: "상쾌하다, 시원스럽다, 산뜻하다",
    syn: ["さわやか", "すっきり"],
    collocations: [{ ja: "清々しい朝", ko: "상쾌한 아침" }, { ja: "清々しい態度", ko: "뒤끝 없이 시원시원한 태도" }],
    examples: [{ type: "kun", label: "훈독", ja: "全力を出し切って試合を終えた選手たちの表情には、敗戦にもかかわらず清々しい笑顔があった。", ko: "전력을 다 쏟아붓고 경기를 마친 선수들의 표정에는 패배에도 불구하고 시원스런 미소가 있었다." }]
  },
  {
    id: 2763, day: 30, level: "N1",
    word: "取り巻く", kana: "とりまく", pos: "동사 (타동사)",
    mean: "둘러싸다",
    syn: ["囲む"],
    collocations: [{ ja: "社会を取り巻く環境", ko: "사회를 둘러싼 환경" }],
    examples: [{ type: "ex", label: "예문", ja: "若者を取り巻く環境は厳しい。", ko: "젊은이를 둘러싼 환경은 어렵다." }]
  },
  {
    id: 2764, day: 30, level: "N1",
    word: "成し遂げる", kana: "なしとげる", pos: "동사 (타동사)",
    mean: "이루어 내다, 완수하다",
    syn: ["遂げる", "達成する"],
    collocations: [{ ja: "偉業を成し遂げる", ko: "위업을 이루어 내다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼らはついに難しい仕事を成し遂げた。", ko: "그들은 마침내 어려운 일을 해냈다." }]
  },
  {
    id: 378, day: 30, level: "N1",
    word: "ポジション", kana: "ぽじしょん", pos: "외래어",
    mean: "위치, 처지, 직책 (position)",
    syn: ["地位", "位置"],
    collocations: [{ ja: "重要なポジション", ko: "중요한 핵심 직책" }, { ja: "有利なポジション", ko: "유리한 입지/포지션" }],
    examples: [{ type: "ex", label: "예문", ja: "市場における自社の戦略的ポジションを再確認し、競合他社との差別化を図る。", ko: "시장에서의 자사 전략적 포지션을 재확인하고 경쟁 타사와의 차별화를 도모하다." }]
  },
  {
    id: 2765, day: 30, level: "N1",
    word: "有する", kana: "ゆうする", pos: "동사 (타동사)",
    mean: "가지다, 소유하다",
    syn: ["持つ"],
    collocations: [{ ja: "権利を有する", ko: "권리를 가지다" }],
    examples: [{ type: "ex", label: "예문", ja: "すべての国民は教育を受ける権利を有する。", ko: "모든 국민은 교육을 받을 권리를 가진다." }]
  },
  // ==========================================
  // [DAY 31] N2 필수 + N1 · 62개
  // ==========================================
  {
    id: 2766, day: 31, level: "N2",
    word: "当てはまる", kana: "あてはまる", pos: "동사 (자동사)",
    mean: "들어맞다, 해당하다",
    syn: ["該当する"],
    collocations: [{ ja: "条件に当てはまる", ko: "조건에 해당하다" }],
    examples: [{ type: "ex", label: "예문", ja: "次の条件に当てはまる人は応募できます。", ko: "다음 조건에 해당하는 사람은 응모할 수 있습니다." }]
  },
  {
    id: 2767, day: 31, level: "N2",
    word: "当てはめる", kana: "あてはめる", pos: "동사 (타동사)",
    mean: "적용하다, 맞추다",
    syn: ["適用する"],
    collocations: [{ ja: "規則に当てはめる", ko: "규칙에 적용하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この公式に数字を当てはめて計算する。", ko: "이 공식에 숫자를 대입해 계산한다." }]
  },
  {
    id: 2768, day: 31, level: "N2",
    word: "言い張る", kana: "いいはる", pos: "동사 (타동사)",
    mean: "우기다, 고집하다",
    syn: ["主張する"],
    collocations: [{ ja: "無実を言い張る", ko: "결백을 우기다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は自分は悪くないと言い張った。", ko: "그는 자기는 잘못이 없다고 우겼다." }]
  },
  {
    id: 363, day: 31, level: "N2",
    word: "耕す", kana: "たがやす", pos: "동사 (5단 타동사)",
    mean: "갈다, 경작하다, 밭을 일구다",
    syn: ["掘り起こす", "開墾する"],
    collocations: [{ ja: "畑を耕す", ko: "밭을 갈다/일구다" }, { ja: "荒れ地を耕す", ko: "황무지를 개간하여 갈다" }],
    examples: [{ type: "kun", label: "훈독", ja: "先祖代々受け継がれてきた豊かな田畑を丹精込めて耕し、秋の豊作を願う。", ko: "조상 대대로 물려받은 풍요로운 논밭을 정성껏 갈며 가을의 풍작을 기원하다." }, { type: "on", label: "음독", ja: "食料自給率の向上を目指し、長年放置されていた耕作(こうさく)放棄地を再整備した。", ko: "식량 자급률 향상을 목표로 오랫동안 방치되었던 경작 포기지를 재정비했다." }]
  },
  {
    id: 2769, day: 31, level: "N2",
    word: "薄める", kana: "うすめる", pos: "동사 (타동사)",
    mean: "묽게 하다",
    syn: ["薄くする"],
    collocations: [{ ja: "水で薄める", ko: "물로 희석하다" }],
    examples: [{ type: "ex", label: "예문", ja: "ジュースを水で薄めて飲む。", ko: "주스를 물로 묽게 해서 마신다." }]
  },
  {
    id: 2770, day: 31, level: "N2",
    word: "追いかける", kana: "おいかける", pos: "동사 (타동사)",
    mean: "뒤쫓다",
    syn: ["追う"],
    collocations: [{ ja: "夢を追いかける", ko: "꿈을 좇다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもが犬を追いかけて走っていった。", ko: "아이가 개를 쫓아 달려갔다." }]
  },
  {
    id: 2771, day: 31, level: "N2",
    word: "思い直す", kana: "おもいなおす", pos: "동사 (타동사)",
    mean: "다시 생각하다, 생각을 고치다",
    syn: ["考え直す"],
    collocations: [{ ja: "辞めるのを思い直す", ko: "그만두려던 생각을 고치다" }],
    examples: [{ type: "ex", label: "예문", ja: "一度は断ったが、思い直して引き受けた。", ko: "한 번은 거절했지만 다시 생각해 맡았다." }]
  },
  {
    id: 2772, day: 31, level: "N2",
    word: "書き直す", kana: "かきなおす", pos: "동사 (타동사)",
    mean: "다시 쓰다",
    syn: ["書き改める"],
    collocations: [{ ja: "レポートを書き直す", ko: "리포트를 다시 쓰다" }],
    examples: [{ type: "ex", label: "예문", ja: "間違いが多かったので、手紙を書き直した。", ko: "틀린 곳이 많아서 편지를 다시 썼다." }]
  },
  {
    id: 2773, day: 31, level: "N2",
    word: "絡まる", kana: "からまる", pos: "동사 (자동사)",
    mean: "얽히다",
    syn: ["もつれる"],
    collocations: [{ ja: "糸が絡まる", ko: "실이 얽히다" }],
    examples: [{ type: "ex", label: "예문", ja: "コードが絡まってほどけない。", ko: "코드가 얽혀서 풀리지 않는다." }]
  },
  {
    id: 365, day: 31, level: "N2",
    word: "辿る", kana: "たどる", pos: "동사 (5단 타동사)",
    mean: "더듬어 가다, 길을 따라가다, (어떤 길을) 걷다",
    syn: ["たどっていく", "追う"],
    collocations: [{ ja: "記憶を辿る", ko: "기억을 더듬어 찾아내다" }, { ja: "衰退の一途を辿る", ko: "쇠퇴 일로를 걷다" }],
    examples: [{ type: "kun", label: "훈독", ja: "過去の歴史的文献の記述を丹念に辿ることで、失われた古代都市の謎を解き明かした。", ko: "과거 역사 문헌의 기록을 공들여 더듬어 감으로써 사라진 고대 도시의 수수께끼를 풀어냈다." }]
  },
  {
    id: 2774, day: 31, level: "N2",
    word: "切り替える", kana: "きりかえる", pos: "동사 (타동사)",
    mean: "전환하다, 바꾸다",
    syn: ["転換する"],
    collocations: [{ ja: "気持ちを切り替える", ko: "기분을 전환하다" }],
    examples: [{ type: "ex", label: "예문", ja: "失敗したことは忘れて、気持ちを切り替えよう。", ko: "실패한 일은 잊고 기분을 전환하자." }]
  },
  {
    id: 2775, day: 31, level: "N2",
    word: "食い違う", kana: "くいちがう", pos: "동사 (자동사)",
    mean: "어긋나다, 엇갈리다",
    syn: ["ずれる"],
    collocations: [{ ja: "意見が食い違う", ko: "의견이 엇갈리다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人の証言が食い違っている。", ko: "두 사람의 증언이 엇갈리고 있다." }]
  },
  {
    id: 2776, day: 31, level: "N2",
    word: "朗らか", kana: "ほがらか", pos: "な형용사",
    mean: "명랑함",
    syn: ["明るい"],
    collocations: [{ ja: "朗らかな笑顔", ko: "명랑한 웃음" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女はいつも朗らかに笑っている。", ko: "그녀는 늘 명랑하게 웃고 있다." }]
  },
  {
    id: 2777, day: 31, level: "N2",
    word: "興味深い", kana: "きょうみぶかい", pos: "い형용사",
    mean: "흥미롭다",
    syn: ["面白い"],
    collocations: [{ ja: "興味深い話", ko: "흥미로운 이야기" }],
    examples: [{ type: "ex", label: "예문", ja: "その研究結果は非常に興味深い。", ko: "그 연구 결과는 매우 흥미롭다." }]
  },
  {
    id: 2778, day: 31, level: "N2",
    word: "膨大", kana: "ぼうだい", pos: "な형용사",
    mean: "방대함",
    syn: ["莫大な"],
    collocations: [{ ja: "膨大な資料", ko: "방대한 자료" }],
    examples: [{ type: "ex", label: "예문", ja: "膨大なデータを分析する。", ko: "방대한 데이터를 분석한다." }]
  },
  {
    id: 2779, day: 31, level: "N2",
    word: "豊富", kana: "ほうふ", pos: "な형용사",
    mean: "풍부함",
    syn: ["豊かな"],
    collocations: [{ ja: "豊富な経験", ko: "풍부한 경험" }],
    examples: [{ type: "ex", label: "예문", ja: "この店は品揃えが豊富だ。", ko: "이 가게는 상품 구성이 풍부하다." }]
  },
  {
    id: 446, day: 31, level: "N2",
    word: "素朴", kana: "そぼく", pos: "な형용사",
    mean: "소박함, 순수함, 꾸밈없음",
    syn: ["飾り気がない", "シンプル"],
    collocations: [{ ja: "素朴な疑問", ko: "순수한 근본적 의문" }, { ja: "素朴な料理", ko: "자연 그대로의 소박한 음식" }],
    examples: [{ type: "on", label: "음독", ja: "子供が抱いた「なぜ空は青いのか」という素朴な疑問こそが、偉大な科学的探究の第一歩となった。", ko: "아이가 품은 '왜 하늘은 푸를까'라는 소박한 의문이야말로 위대한 과학적 탐구의 첫걸음이 되었다." }]
  },
  {
    id: 2780, day: 31, level: "N2",
    word: "待ち遠しい", kana: "まちどおしい", pos: "い형용사",
    mean: "몹시 기다려지다",
    syn: ["楽しみだ"],
    collocations: [{ ja: "夏休みが待ち遠しい", ko: "여름방학이 몹시 기다려진다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもたちは遠足の日が待ち遠しい。", ko: "아이들은 소풍날이 몹시 기다려진다." }]
  },
  {
    id: 2781, day: 31, level: "N2",
    word: "身近", kana: "みぢか", pos: "な형용사",
    mean: "가까움, 친숙함",
    syn: ["手近な"],
    collocations: [{ ja: "身近な問題", ko: "가까운 문제" }],
    examples: [{ type: "ex", label: "예문", ja: "環境問題は私たちに身近な問題だ。", ko: "환경 문제는 우리에게 가까운 문제다." }]
  },
  {
    id: 377, day: 31, level: "N2",
    word: "スケール", kana: "すけーる", pos: "외래어",
    mean: "규모, 스케일 (scale)",
    syn: ["規模"],
    collocations: [{ ja: "スケールが大きい", ko: "스케일(규모)이 크다" }, { ja: "地球規模のスケール", ko: "지구적 규모의 스케일" }],
    examples: [{ type: "ex", label: "예문", ja: "宇宙の誕生から生命の進化までを壮大なスケールで描き出したドキュメンタリー番組。", ko: "우주의 탄생부터 생명의 진화까지를 장대한 스케일로 그려낸 다큐멘터리 프로그램." }]
  },
  {
    id: 2782, day: 31, level: "N2",
    word: "ダウン", kana: "ダウン", pos: "외래어",
    mean: "하락, 다운 (down)",
    syn: ["低下"],
    collocations: [{ ja: "成績がダウンする", ko: "성적이 떨어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "風邪でダウンしてしまった。", ko: "감기로 앓아눕고 말았다." }]
  },
  {
    id: 2783, day: 31, level: "N2",
    word: "テンポ", kana: "テンポ", pos: "외래어",
    mean: "템포, 속도 (tempo)",
    syn: ["速さ"],
    collocations: [{ ja: "テンポが速い", ko: "템포가 빠르다" }],
    examples: [{ type: "ex", label: "예문", ja: "この映画は話のテンポがいい。", ko: "이 영화는 이야기 전개가 경쾌하다." }]
  },
  {
    id: 2784, day: 31, level: "N2",
    word: "とかく", kana: "とかく", pos: "부사",
    mean: "자칫하면, 이러니저러니",
    syn: ["ややもすると"],
    collocations: [{ ja: "とかく忘れがちだ", ko: "자칫 잊기 쉽다" }],
    examples: [{ type: "ex", label: "예문", ja: "人はとかく自分に甘くなりがちだ。", ko: "사람은 자칫 자신에게 관대해지기 쉽다." }]
  },
  {
    id: 2785, day: 31, level: "N2",
    word: "何かと", kana: "なにかと", pos: "부사",
    mean: "이것저것, 여러모로",
    syn: ["いろいろと"],
    collocations: [{ ja: "何かと忙しい", ko: "이래저래 바쁘다" }],
    examples: [{ type: "ex", label: "예문", ja: "年末は何かと忙しい。", ko: "연말은 이래저래 바쁘다." }]
  },
  {
    id: 2786, day: 31, level: "N2",
    word: "何気なく", kana: "なにげなく", pos: "부사",
    mean: "무심코, 별생각 없이",
    syn: ["ふと"],
    collocations: [{ ja: "何気なく見る", ko: "무심코 보다" }],
    examples: [{ type: "ex", label: "예문", ja: "何気なく言った一言で彼を傷つけた。", ko: "무심코 한 말로 그에게 상처를 주었다." }]
  },
  {
    id: 2787, day: 31, level: "N2",
    word: "遅かれ早かれ", kana: "おそかれはやかれ", pos: "부사",
    mean: "조만간, 언젠가는",
    syn: ["いずれ"],
    collocations: [{ ja: "遅かれ早かれ分かる", ko: "조만간 알게 된다" }],
    examples: [{ type: "ex", label: "예문", ja: "嘘は遅かれ早かればれるものだ。", ko: "거짓말은 언젠가는 들통나기 마련이다." }]
  },
  {
    id: 2788, day: 31, level: "N2",
    word: "ゆったり", kana: "ゆったり", pos: "부사 (의성어·의태어)",
    mean: "느긋하게, 넉넉하게",
    syn: ["のんびり"],
    collocations: [{ ja: "ゆったりした服", ko: "넉넉한 옷" }],
    examples: [{ type: "ex", label: "예문", ja: "温泉でゆったりと過ごした。", ko: "온천에서 느긋하게 보냈다." }]
  },
  {
    id: 2789, day: 31, level: "N2",
    word: "わいわい", kana: "わいわい", pos: "부사 (의성어·의태어)",
    mean: "왁자지껄",
    syn: ["にぎやかに"],
    collocations: [{ ja: "わいわい騒ぐ", ko: "왁자지껄 떠들다" }],
    examples: [{ type: "ex", label: "예문", ja: "友達とわいわい言いながら料理を作った。", ko: "친구들과 왁자지껄 떠들며 요리를 만들었다." }]
  },
  {
    id: 2790, day: 31, level: "N2",
    word: "〜済み", kana: "ずみ", pos: "접미어",
    mean: "~이 끝남",
    syn: ["〜が終わった"],
    collocations: [{ ja: "支払い済み", ko: "지불 완료" }, { ja: "使用済み", ko: "사용 완료" }],
    examples: []
  },
  {
    id: 2791, day: 31, level: "N2",
    word: "〜放題", kana: "ほうだい", pos: "접미어",
    mean: "~하고 싶은 대로, 무제한",
    syn: ["〜し放題"],
    collocations: [{ ja: "食べ放題", ko: "무한 리필" }, { ja: "言いたい放題", ko: "하고 싶은 말을 다 함" }],
    examples: []
  },
  {
    id: 2792, day: 31, level: "N2",
    word: "雑談", kana: "ざつだん", pos: "명사 (する동사)",
    mean: "잡담",
    syn: ["おしゃべり"],
    collocations: [{ ja: "雑談をする", ko: "잡담하다" }],
    examples: [{ type: "ex", label: "예문", ja: "会議の前に少し雑談した。", ko: "회의 전에 잠깐 잡담을 했다." }]
  },
  {
    id: 2793, day: 31, level: "N2",
    word: "参考", kana: "さんこう", pos: "명사",
    mean: "참고",
    syn: [],
    collocations: [{ ja: "参考にする", ko: "참고하다" }, { ja: "参考書", ko: "참고서" }],
    examples: [{ type: "ex", label: "예문", ja: "先輩の意見を参考にした。", ko: "선배의 의견을 참고했다." }]
  },
  {
    id: 2794, day: 31, level: "N2",
    word: "仕組み", kana: "しくみ", pos: "명사",
    mean: "구조, 짜임새",
    syn: ["構造", "システム"],
    collocations: [{ ja: "社会の仕組み", ko: "사회 구조" }],
    examples: [{ type: "ex", label: "예문", ja: "この機械の仕組みはとても複雑だ。", ko: "이 기계의 구조는 매우 복잡하다." }]
  },
  {
    id: 2795, day: 31, level: "N2",
    word: "刺激", kana: "しげき", pos: "명사 (する동사)",
    mean: "자극",
    syn: [],
    collocations: [{ ja: "刺激を受ける", ko: "자극을 받다" }, { ja: "刺激が強い", ko: "자극이 강하다" }],
    examples: [{ type: "ex", label: "예문", ja: "友人の活躍に刺激を受けた。", ko: "친구의 활약에 자극을 받았다." }]
  },
  {
    id: 2796, day: 31, level: "N2",
    word: "自覚", kana: "じかく", pos: "명사 (する동사)",
    mean: "자각",
    syn: ["意識"],
    collocations: [{ ja: "自覚がない", ko: "자각이 없다" }, { ja: "自覚症状", ko: "자각 증상" }],
    examples: [{ type: "ex", label: "예문", ja: "社会人としての自覚を持ちなさい。", ko: "사회인으로서의 자각을 가져라." }]
  },
  {
    id: 480, day: 31, level: "N2",
    word: "撤退", kana: "てったい", pos: "명사",
    mean: "철수 (군대나 사업을 물림)",
    syn: ["引き上げること", "退却"],
    collocations: [{ ja: "市場から撤退する", ko: "채산성 악화로 시장에서 철수하다" }, { ja: "軍隊の撤退", ko: "군대의 전면 철수" }],
    examples: [{ type: "on", label: "음독", ja: "赤字を垂れ流し続ける海外子会社を清算し、コア事業へ資源を集中させるため現地市場からの完全撤退を決断した。", ko: "계속 적자를 내는 해외 자회사를 청산하고 핵심 사업에 자원을 집중하기 위해 현지 시장에서의 완전 철수를 결단했다." }]
  },
  {
    id: 2797, day: 31, level: "N2",
    word: "自己", kana: "じこ", pos: "명사",
    mean: "자기, 자신",
    syn: ["自分"],
    collocations: [{ ja: "自己紹介", ko: "자기소개" }, { ja: "自己責任", ko: "자기 책임" }],
    examples: [{ type: "ex", label: "예문", ja: "面接で自己紹介をした。", ko: "면접에서 자기소개를 했다." }]
  },
  {
    id: 2798, day: 31, level: "N2",
    word: "下書き", kana: "したがき", pos: "명사 (する동사)",
    mean: "초안, 밑그림",
    syn: ["草案"],
    collocations: [{ ja: "手紙の下書き", ko: "편지 초안" }],
    examples: [{ type: "ex", label: "예문", ja: "まず下書きをしてから清書する。", ko: "먼저 초안을 쓰고 나서 정서한다." }]
  },
  {
    id: 2799, day: 31, level: "N2",
    word: "実感", kana: "じっかん", pos: "명사 (する동사)",
    mean: "실감",
    syn: [],
    collocations: [{ ja: "実感が湧く", ko: "실감이 나다" }],
    examples: [{ type: "ex", label: "예문", ja: "合格したという実感がまだない。", ko: "합격했다는 실감이 아직 나지 않는다." }]
  },
  {
    id: 2800, day: 31, level: "N2",
    word: "質", kana: "しつ", pos: "명사",
    mean: "질, 품질",
    syn: ["品質"],
    collocations: [{ ja: "質が高い", ko: "질이 높다" }, { ja: "生活の質", ko: "삶의 질" }],
    examples: [{ type: "ex", label: "예문", ja: "量より質が大切だ。", ko: "양보다 질이 중요하다." }]
  },
  {
    id: 2801, day: 31, level: "N2",
    word: "失望", kana: "しつぼう", pos: "명사 (する동사)",
    mean: "실망",
    syn: ["がっかり"],
    collocations: [{ ja: "失望する", ko: "실망하다" }, { ja: "失望させる", ko: "실망시키다" }],
    examples: [{ type: "ex", label: "예문", ja: "結果を聞いて失望した。", ko: "결과를 듣고 실망했다." }]
  },
  {
    id: 2802, day: 31, level: "N2",
    word: "指定", kana: "してい", pos: "명사 (する동사)",
    mean: "지정",
    syn: ["決める"],
    collocations: [{ ja: "指定席", ko: "지정석" }, { ja: "日時を指定する", ko: "일시를 지정하다" }],
    examples: [{ type: "ex", label: "예문", ja: "指定された場所に集合してください。", ko: "지정된 장소에 집합해 주세요." }]
  },
  {
    id: 481, day: 31, level: "N2",
    word: "伝達", kana: "でんたつ", pos: "명사",
    mean: "전달 (명령이나 지시를 알림)",
    syn: ["伝えること", "連絡"],
    collocations: [{ ja: "正確に伝達する", ko: "누락 없이 정확하게 전달하다" }, { ja: "意思の伝達", ko: "상호 의사 전달" }],
    examples: [{ type: "on", label: "음독", ja: "緊急避難時における情報伝達の遅れは人命に関わるため、防災行政無線の多重化が図られている。", ko: "긴급 대피 시 정보 전달의 지연은 인명과 직결되므로 방재 무선의 다중화가 추진되고 있다." }]
  },
  {
    id: 2803, day: 31, level: "N2",
    word: "収穫", kana: "しゅうかく", pos: "명사 (する동사)",
    mean: "수확",
    syn: [],
    collocations: [{ ja: "米を収穫する", ko: "쌀을 수확하다" }, { ja: "大きな収穫", ko: "큰 수확" }],
    examples: [{ type: "ex", label: "예문", ja: "今回の旅行は大きな収穫があった。", ko: "이번 여행은 큰 수확이 있었다." }]
  },
  {
    id: 2804, day: 31, level: "N2",
    word: "集団", kana: "しゅうだん", pos: "명사",
    mean: "집단",
    syn: ["グループ"],
    collocations: [{ ja: "集団生活", ko: "집단생활" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもたちは集団で登校する。", ko: "아이들은 무리 지어 등교한다." }]
  },
  {
    id: 2805, day: 31, level: "N2",
    word: "集中", kana: "しゅうちゅう", pos: "명사 (する동사)",
    mean: "집중",
    syn: [],
    collocations: [{ ja: "集中力", ko: "집중력" }, { ja: "仕事に集中する", ko: "일에 집중하다" }],
    examples: [{ type: "ex", label: "예문", ja: "静かな場所のほうが集中できる。", ko: "조용한 곳이 더 집중할 수 있다." }]
  },
  {
    id: 2806, day: 31, level: "N2",
    word: "終了", kana: "しゅうりょう", pos: "명사 (する동사)",
    mean: "종료",
    syn: ["終わり"],
    collocations: [{ ja: "試合終了", ko: "경기 종료" }, { ja: "受付終了", ko: "접수 마감" }],
    examples: [{ type: "ex", label: "예문", ja: "本日の営業は終了しました。", ko: "오늘 영업은 종료되었습니다." }]
  },
  {
    id: 2807, day: 31, level: "N2",
    word: "主役", kana: "しゅやく", pos: "명사",
    mean: "주역, 주인공",
    syn: [],
    collocations: [{ ja: "主役を演じる", ko: "주역을 맡다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は初めて映画の主役を演じた。", ko: "그는 처음으로 영화 주연을 맡았다." }]
  },
  {
    id: 2808, day: 31, level: "N2",
    word: "循環", kana: "じゅんかん", pos: "명사 (する동사)",
    mean: "순환",
    syn: [],
    collocations: [{ ja: "血液の循環", ko: "혈액 순환" }, { ja: "悪循環", ko: "악순환" }],
    examples: [{ type: "ex", label: "예문", ja: "睡眠不足とストレスの悪循環に陥った。", ko: "수면 부족과 스트레스의 악순환에 빠졌다." }]
  },
  {
    id: 531, day: 31, level: "N2",
    word: "配分", kana: "はいぶん", pos: "명사",
    mean: "배분 (몫을 나누어 줌)",
    syn: ["分配", "割り当て"],
    collocations: [{ ja: "予算を配分する", ko: "예산을 적절히 배분하다" }, { ja: "時間配分", ko: "시험 시간 배분" }],
    examples: [{ type: "on", label: "음독", ja: "試験時間内に全問を確実に解き終えるためには、大問ごとの適切な時間配分が合否を分ける。", ko: "시험 시간 안에 모든 문제를 확실히 풀기 위해서는 대문항별 적절한 시간 배분이 당락을 가른다." }]
  },
  {
    id: 2809, day: 31, level: "N2",
    word: "順序", kana: "じゅんじょ", pos: "명사",
    mean: "순서",
    syn: ["順番", "手順"],
    collocations: [{ ja: "順序よく並ぶ", ko: "순서대로 줄 서다" }],
    examples: [{ type: "ex", label: "예문", ja: "説明は順序立てて話しましょう。", ko: "설명은 순서를 세워서 합시다." }]
  },
  {
    id: 2810, day: 31, level: "N2",
    word: "順番", kana: "じゅんばん", pos: "명사",
    mean: "순번, 차례",
    syn: ["順序"],
    collocations: [{ ja: "順番を待つ", ko: "차례를 기다리다" }],
    examples: [{ type: "ex", label: "예문", ja: "やっと私の順番が回ってきた。", ko: "겨우 내 차례가 돌아왔다." }]
  },
  {
    id: 2811, day: 31, level: "N2",
    word: "使用", kana: "しよう", pos: "명사 (する동사)",
    mean: "사용",
    syn: ["使う"],
    collocations: [{ ja: "使用禁止", ko: "사용 금지" }, { ja: "使用方法", ko: "사용 방법" }],
    examples: [{ type: "ex", label: "예문", ja: "このトイレは使用中です。", ko: "이 화장실은 사용 중입니다." }]
  },
  {
    id: 381, day: 31, level: "N1",
    word: "インフラ", kana: "いんふら", pos: "외래어",
    mean: "사회기반시설, 인프라 (infrastructure)",
    syn: ["社会基盤"],
    collocations: [{ ja: "インフラを整備する", ko: "사회기반시설을 정비하다" }, { ja: "社会インフラ", ko: "교통·통신 등 사회 인프라" }],
    examples: [{ type: "ex", label: "예문", ja: "道路や水道といった老朽化した社会インフラを計画的に更新することが喫緊の課題だ。", ko: "도로나 수도 같은 노후화된 사회 인프라를 계획적으로 교체하는 것이 시급한 과제이다." }]
  },
  {
    id: 2812, day: 31, level: "N1",
    word: "要する", kana: "ようする", pos: "동사 (타동사)",
    mean: "요하다, 필요로 하다",
    syn: ["必要とする"],
    collocations: [{ ja: "時間を要する", ko: "시간이 필요하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この作業には高い技術を要する。", ko: "이 작업에는 높은 기술이 필요하다." }]
  },
  {
    id: 387, day: 31, level: "N1",
    word: "しいて", kana: "しいて", pos: "부사",
    mean: "굳이, 억지로",
    syn: ["無理に", "あえて"],
    collocations: [{ ja: "しいて言えば", ko: "굳이 한마디 덧붙이자면" }, { ja: "しいて選ぶなら", ko: "굳이 고르자면" }],
    examples: [{ type: "ex", label: "예문", ja: "どちらの候補案も甲乙つけがたいが、しいて言えばコストパフォーマンスの面でA案が勝る。", ko: "어느 후보안도 우열을 가리기 어려우나 굳이 따지자면 가성비 면에서 A안이 앞선다." }]
  },
  {
    id: 2813, day: 31, level: "N1",
    word: "伴う", kana: "ともなう", pos: "동사 (자·타동사)",
    mean: "동반하다, 따르다",
    syn: ["付き添う"],
    collocations: [{ ja: "危険を伴う", ko: "위험이 따르다" }],
    examples: [{ type: "ex", label: "예문", ja: "この手術には多少の危険が伴う。", ko: "이 수술에는 다소의 위험이 따른다." }]
  },
  {
    id: 2814, day: 31, level: "N1",
    word: "基づく", kana: "もとづく", pos: "동사 (자동사)",
    mean: "기초하다, 근거하다",
    syn: ["拠る"],
    collocations: [{ ja: "事実に基づく", ko: "사실에 근거하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この映画は実話に基づいている。", ko: "이 영화는 실화에 기초하고 있다." }]
  },
  {
    id: 391, day: 31, level: "N1",
    word: "圧迫", kana: "あっぱく", pos: "명사",
    mean: "압박 (물리적 누름 / 경제적 짓누름)",
    syn: ["押さえつけること", "プレッシャー"],
    collocations: [{ ja: "経営を圧迫する", ko: "회사 경영을 짓누르다/압박하다" }, { ja: "胸を圧迫する", ko: "가슴을 쥐어짜듯 압박하다" }],
    examples: [{ type: "on", label: "음독", ja: "原材料価格の世界的高騰が中小企業の収益を著しく圧迫し、深刻な死活問題となっている。", ko: "원자재 가격의 세계적 급등이 중소기업의 수익을 현저히 압박하여 심각한 사활 문제가 되고 있다." }]
  },
  {
    id: 2815, day: 31, level: "N1",
    word: "心がける", kana: "こころがける", pos: "동사 (타동사)",
    mean: "유념하다, 명심하다",
    syn: ["気をつける"],
    collocations: [{ ja: "健康に心がける", ko: "건강에 유념하다" }],
    examples: [{ type: "ex", label: "예문", ja: "早寝早起きを心がけている。", ko: "일찍 자고 일찍 일어나도록 신경 쓰고 있다." }]
  },
  {
    id: 392, day: 31, level: "N1",
    word: "移行", kana: "いこう", pos: "명사",
    mean: "이행 (새로운 상태나 체제로 옮겨감)",
    syn: ["移ること", "転換"],
    collocations: [{ ja: "新システムへ移行する", ko: "신규 시스템으로 이전/이행하다" }, { ja: "スムーズな移行", ko: "차질 없는 원활한 전환" }],
    examples: [{ type: "on", label: "음독", ja: "化石燃料からクリーンな再生可能エネルギーへの円滑な移行を果たすための工程表を策定した。", ko: "화석연료에서 청정 재생 가능 에너지로의 원활한 이행을 완수하기 위한 로드맵을 책정했다." }]
  },
  {
    id: 2816, day: 31, level: "N1",
    word: "講じる", kana: "こうじる", pos: "동사 (타동사)",
    mean: "강구하다",
    syn: ["取る"],
    collocations: [{ ja: "対策を講じる", ko: "대책을 강구하다" }],
    examples: [{ type: "ex", label: "예문", ja: "政府は早急に対策を講じるべきだ。", ko: "정부는 조속히 대책을 강구해야 한다." }]
  },
  // ==========================================
  // [DAY 32] N2 필수 + N1 · 60개
  // ==========================================
  {
    id: 2817, day: 32, level: "N2",
    word: "込み上げる", kana: "こみあげる", pos: "동사 (자동사)",
    mean: "복받치다",
    syn: ["あふれる"],
    collocations: [{ ja: "涙が込み上げる", ko: "눈물이 복받치다" }],
    examples: [{ type: "ex", label: "예문", ja: "卒業式で思わず涙が込み上げてきた。", ko: "졸업식에서 저도 모르게 눈물이 복받쳤다." }]
  },
  {
    id: 2818, day: 32, level: "N2",
    word: "差し引く", kana: "さしひく", pos: "동사 (타동사)",
    mean: "빼다, 공제하다",
    syn: ["引く"],
    collocations: [{ ja: "給料から差し引く", ko: "월급에서 공제하다" }],
    examples: [{ type: "ex", label: "예문", ja: "税金を差し引いた手取りは二十万円だ。", ko: "세금을 뺀 실수령액은 20만 엔이다." }]
  },
  {
    id: 2819, day: 32, level: "N2",
    word: "仕掛ける", kana: "しかける", pos: "동사 (타동사)",
    mean: "장치하다, 걸다",
    syn: [],
    collocations: [{ ja: "わなを仕掛ける", ko: "덫을 놓다" }, { ja: "けんかを仕掛ける", ko: "싸움을 걸다" }],
    examples: [{ type: "ex", label: "예문", ja: "相手からけんかを仕掛けてきた。", ko: "상대가 먼저 싸움을 걸어왔다." }]
  },
  {
    id: 366, day: 32, level: "N2",
    word: "突く", kana: "つく", pos: "동사 (5단 타동사)",
    mean: "찌르다, 짚다, (맹점을) 파고들다",
    syn: ["つつく", "攻める"],
    collocations: [{ ja: "盲点を突く", ko: "사고의 맹점(허점)을 찌르다" }, { ja: "杖を突く", ko: "지팡이를 짚고 걷다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "競合他社が完全に油断していた市場の盲点を突き、新製品で大ヒットを記録した。", ko: "경쟁 타사가 완전히 방심하고 있던 시장의 맹점을 찔러 신제품으로 대히트를 기록했다." }],
    polysemy: [
      { def: "① 뾰족한 도구나 무기로 대상을 강하게 찌르다", ja: "針の先端で指先をチクリと突いてしまい、思わず声を上げた。", ko: "바늘 끝으로 손가락 끝을 따끔하게 찔려 나도 모르게 소리를 질렀다." },
      { def: "② 지팡이나 막대기를 바닥에 대어 몸을 지탱하다", ja: "足腰が弱ってきた祖父が、木の杖を突きながら散歩を楽しんでいる。", ko: "하체가 약해진 할아버지가 나무 지팡이를 짚으며 산책을 즐기고 계신다." },
      { def: "③ 상대가 방심한 약점이나 핵심 허점을 날카롭게 파고들다", ja: "弁護士は相手側の矛盾した証言の核心を鋭く突いて追及した。", ko: "변호사는 상대방의 모순된 증언의 핵심을 날카롭게 찔러 추궁했다." }
    ]
  },
  {
    id: 2820, day: 32, level: "N2",
    word: "締め切る", kana: "しめきる", pos: "동사 (타동사)",
    mean: "마감하다, 꼭 닫다",
    syn: [],
    collocations: [{ ja: "応募を締め切る", ko: "응모를 마감하다" }, { ja: "窓を締め切る", ko: "창문을 꼭 닫다" }],
    examples: [{ type: "ex", label: "예문", ja: "申し込みは今月末で締め切ります。", ko: "신청은 이달 말에 마감합니다." }]
  },
  {
    id: 2821, day: 32, level: "N2",
    word: "染み込む", kana: "しみこむ", pos: "동사 (자동사)",
    mean: "스며들다",
    syn: ["浸透する"],
    collocations: [{ ja: "水が染み込む", ko: "물이 스며들다" }, { ja: "体に染み込む", ko: "몸에 배다" }],
    examples: [{ type: "ex", label: "예문", ja: "味がよく染み込んだ大根がおいしい。", ko: "맛이 잘 밴 무가 맛있다." }]
  },
  {
    id: 2822, day: 32, level: "N2",
    word: "背負う", kana: "せおう", pos: "동사 (타동사)",
    mean: "짊어지다",
    syn: ["担う"],
    collocations: [{ ja: "荷物を背負う", ko: "짐을 짊어지다" }, { ja: "責任を背負う", ko: "책임을 짊어지다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は家族の生活を一人で背負っている。", ko: "그는 가족의 생활을 혼자 짊어지고 있다." }]
  },
  {
    id: 2823, day: 32, level: "N2",
    word: "備わる", kana: "そなわる", pos: "동사 (자동사)",
    mean: "갖추어지다",
    syn: ["備える"],
    collocations: [{ ja: "設備が備わる", ko: "설비가 갖추어지다" }, { ja: "才能が備わる", ko: "재능을 갖추다" }],
    examples: [{ type: "ex", label: "예문", ja: "この部屋には最新の設備が備わっている。", ko: "이 방에는 최신 설비가 갖추어져 있다." }]
  },
  {
    id: 2824, day: 32, level: "N2",
    word: "立て直す", kana: "たてなおす", pos: "동사 (타동사)",
    mean: "재건하다, 다시 세우다",
    syn: ["再建する"],
    collocations: [{ ja: "経営を立て直す", ko: "경영을 재건하다" }, { ja: "計画を立て直す", ko: "계획을 다시 세우다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい社長が会社を立て直した。", ko: "새 사장이 회사를 재건했다." }]
  },
  {
    id: 368, day: 32, level: "N2",
    word: "戸惑う", kana: "とまどう", pos: "동사 (5단 자동사)",
    mean: "망설이다, 갈피를 못 잡다, 어리둥절하다",
    syn: ["まごつく", "迷う"],
    collocations: [{ ja: "対応に戸惑う", ko: "대처 방법을 몰라 당황하다" }, { ja: "変化に戸惑う", ko: "급격한 변화에 갈피를 못 잡다" }],
    examples: [{ type: "kun", label: "훈독", ja: "異文化の慣習に直面して初めは戸惑ったが、次第にその合理性を理解できるようになった。", ko: "이문화의 관습에 직면해 처음에는 당황했으나 점차 그 합리성을 이해할 수 있게 되었다." }]
  },
  {
    id: 2825, day: 32, level: "N2",
    word: "使い果たす", kana: "つかいはたす", pos: "동사 (타동사)",
    mean: "다 써 버리다",
    syn: ["使い切る"],
    collocations: [{ ja: "お金を使い果たす", ko: "돈을 다 써 버리다" }],
    examples: [{ type: "ex", label: "예문", ja: "旅行で貯金を使い果たしてしまった。", ko: "여행으로 저금을 다 써 버렸다." }]
  },
  {
    id: 2826, day: 32, level: "N2",
    word: "付き添う", kana: "つきそう", pos: "동사 (자동사)",
    mean: "곁에서 시중들다, 동행하다",
    syn: ["同伴する"],
    collocations: [{ ja: "病人に付き添う", ko: "환자를 돌보다" }],
    examples: [{ type: "ex", label: "예문", ja: "母が入院中の祖母に付き添っている。", ko: "어머니가 입원 중인 할머니 곁을 지키고 있다." }]
  },
  {
    id: 2827, day: 32, level: "N2",
    word: "腹立たしい", kana: "はらだたしい", pos: "い형용사",
    mean: "화가 치밀다",
    syn: ["頭にくる"],
    collocations: [{ ja: "腹立たしい態度", ko: "화가 치미는 태도" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の無責任な発言が腹立たしい。", ko: "그의 무책임한 발언에 화가 치민다." }]
  },
  {
    id: 2828, day: 32, level: "N2",
    word: "妙", kana: "みょう", pos: "な형용사",
    mean: "묘함, 이상함",
    syn: ["変な"],
    collocations: [{ ja: "妙な話", ko: "묘한 이야기" }],
    examples: [{ type: "ex", label: "예문", ja: "妙に静かで落ち着かない。", ko: "묘하게 조용해서 안정이 안 된다." }]
  },
  {
    id: 2829, day: 32, level: "N2",
    word: "無邪気", kana: "むじゃき", pos: "な형용사",
    mean: "천진난만함",
    syn: ["純真な"],
    collocations: [{ ja: "無邪気な笑顔", ko: "천진난만한 웃음" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの無邪気な笑顔に癒される。", ko: "아이의 천진난만한 웃음에 위로받는다." }]
  },
  {
    id: 509, day: 32, level: "N2",
    word: "目覚ましい", kana: "めざましい", pos: "い형용사",
    mean: "눈부시다, 괄목할 만하다, 두드러지다",
    syn: ["すばらしい", "驚くほどの"],
    collocations: [{ ja: "目覚ましい発展", ko: "눈부신 비약적 발전" }, { ja: "目覚ましい活躍", ko: "괄목할 만한 대활약" }],
    examples: [{ type: "kun", label: "훈독", ja: "通信インフラの整備に伴い、発展途上国におけるデジタル経済の成長には目覚ましいものがある。", ko: "통신 인프라 정비에 따라 개발도상국에서의 디지털 경제 성장에는 눈부신 바가 있다." }]
  },
  {
    id: 2830, day: 32, level: "N2",
    word: "ばかばかしい", kana: "ばかばかしい", pos: "い형용사",
    mean: "어처구니없다, 시시하다",
    syn: ["くだらない"],
    collocations: [{ ja: "ばかばかしい話", ko: "어처구니없는 이야기" }],
    examples: [{ type: "ex", label: "예문", ja: "そんなばかばかしい話は信じられない。", ko: "그런 어처구니없는 이야기는 믿을 수 없다." }]
  },
  {
    id: 2831, day: 32, level: "N2",
    word: "無数", kana: "むすう", pos: "な형용사",
    mean: "무수함",
    syn: ["数え切れない"],
    collocations: [{ ja: "無数の星", ko: "무수한 별" }],
    examples: [{ type: "ex", label: "예문", ja: "夜空に無数の星が輝いている。", ko: "밤하늘에 무수한 별이 빛나고 있다." }]
  },
  {
    id: 2832, day: 32, level: "N2",
    word: "ノック", kana: "ノック", pos: "외래어",
    mean: "노크 (knock)",
    syn: [],
    collocations: [{ ja: "ドアをノックする", ko: "문을 노크하다" }],
    examples: [{ type: "ex", label: "예문", ja: "部屋に入る前にノックしてください。", ko: "방에 들어가기 전에 노크해 주세요." }]
  },
  {
    id: 2833, day: 32, level: "N2",
    word: "ハード", kana: "ハード", pos: "외래어",
    mean: "힘듦, 단단함 (hard)",
    syn: ["きつい"],
    collocations: [{ ja: "ハードな仕事", ko: "힘든 일" }],
    examples: [{ type: "ex", label: "예문", ja: "今週はハードなスケジュールだ。", ko: "이번 주는 빡빡한 일정이다." }]
  },
  {
    id: 2834, day: 32, level: "N2",
    word: "パート", kana: "パート", pos: "외래어",
    mean: "파트타임, 부분 (part)",
    syn: ["部分"],
    collocations: [{ ja: "パートで働く", ko: "파트타임으로 일하다" }],
    examples: [{ type: "ex", label: "예문", ja: "母はスーパーでパートをしている。", ko: "어머니는 슈퍼에서 파트타임을 하고 계신다." }]
  },
  {
    id: 2835, day: 32, level: "N2",
    word: "再度", kana: "さいど", pos: "부사",
    mean: "재차, 다시",
    syn: ["もう一度", "再び"],
    collocations: [{ ja: "再度確認する", ko: "다시 확인하다" }],
    examples: [{ type: "ex", label: "예문", ja: "再度お問い合わせください。", ko: "다시 문의해 주십시오." }]
  },
  {
    id: 2836, day: 32, level: "N2",
    word: "ほんの", kana: "ほんの", pos: "부사",
    mean: "그저, 아주 조금의",
    syn: ["わずかな"],
    collocations: [{ ja: "ほんの少し", ko: "아주 조금" }],
    examples: [{ type: "ex", label: "예문", ja: "ほんの気持ちですが、お受け取りください。", ko: "약소하지만 받아 주십시오." }]
  },
  {
    id: 384, day: 32, level: "N2",
    word: "とうてい", kana: "とうてい", pos: "부사",
    mean: "도저히, 도무지 (~ない 부정 호응)",
    syn: ["どうしても", "まったく"],
    collocations: [{ ja: "とうてい及ばない", ko: "도저히 발끝에도 못 미치다" }, { ja: "とうてい納得できない", ko: "도저히 납득할 수 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "客観的な証拠も示さずに自説の正当性を主張されても、第三者としてはとうてい受け入れられない。", ko: "객관적인 증거도 제시하지 않고 자기주장의 정당성만을 내세워 봐야 제3자로서는 도저히 수용할 수 없다." }]
  },
  {
    id: 2837, day: 32, level: "N2",
    word: "目下", kana: "もっか", pos: "부사",
    mean: "목하, 현재",
    syn: ["現在", "今"],
    collocations: [{ ja: "目下検討中", ko: "현재 검토 중" }],
    examples: [{ type: "ex", label: "예문", ja: "その件は目下調査中です。", ko: "그 건은 현재 조사 중입니다." }]
  },
  {
    id: 2838, day: 32, level: "N2",
    word: "ぴんと", kana: "ぴんと", pos: "부사 (의성어·의태어)",
    mean: "팽팽히, 퍼뜩 (감이 옴)",
    syn: ["すぐに分かる"],
    collocations: [{ ja: "ぴんと来る", ko: "감이 오다" }, { ja: "背筋をぴんと伸ばす", ko: "등을 꼿꼿이 펴다" }],
    examples: [{ type: "ex", label: "예문", ja: "説明を聞いても、いまひとつぴんと来ない。", ko: "설명을 들어도 그다지 와닿지 않는다." }]
  },
  {
    id: 2839, day: 32, level: "N2",
    word: "それなのに", kana: "それなのに", pos: "접속사",
    mean: "그런데도",
    syn: ["なのに"],
    collocations: [{ ja: "それなのに", ko: "그런데도" }],
    examples: [{ type: "ex", label: "예문", ja: "一生懸命勉強した。それなのに、不合格だった。", ko: "열심히 공부했다. 그런데도 불합격이었다." }]
  },
  {
    id: 2840, day: 32, level: "N2",
    word: "〜がち", kana: "がち", pos: "접미어",
    mean: "~하기 쉬움, 자주 ~함",
    syn: ["〜しやすい"],
    collocations: [{ ja: "忘れがち", ko: "잊기 쉬움" }, { ja: "病気がち", ko: "병치레가 잦음" }],
    examples: []
  },
  {
    id: 2841, day: 32, level: "N2",
    word: "象徴", kana: "しょうちょう", pos: "명사 (する동사)",
    mean: "상징",
    syn: ["シンボル"],
    collocations: [{ ja: "平和の象徴", ko: "평화의 상징" }],
    examples: [{ type: "ex", label: "예문", ja: "鳩は平和の象徴とされている。", ko: "비둘기는 평화의 상징으로 여겨진다." }]
  },
  {
    id: 2842, day: 32, level: "N2",
    word: "商売", kana: "しょうばい", pos: "명사 (する동사)",
    mean: "장사",
    syn: ["商い"],
    collocations: [{ ja: "商売を始める", ko: "장사를 시작하다" }, { ja: "商売繁盛", ko: "장사 번창" }],
    examples: [{ type: "ex", label: "예문", ja: "親の代から商売をしている。", ko: "부모 대부터 장사를 하고 있다." }]
  },
  {
    id: 2843, day: 32, level: "N2",
    word: "勝負", kana: "しょうぶ", pos: "명사 (する동사)",
    mean: "승부",
    syn: ["試合"],
    collocations: [{ ja: "勝負に勝つ", ko: "승부에서 이기다" }],
    examples: [{ type: "ex", label: "예문", ja: "最後まで勝負はわからない。", ko: "끝까지 승부는 알 수 없다." }]
  },
  {
    id: 2844, day: 32, level: "N2",
    word: "情熱", kana: "じょうねつ", pos: "명사",
    mean: "정열, 열정",
    syn: ["熱意"],
    collocations: [{ ja: "情熱を注ぐ", ko: "열정을 쏟다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は仕事に情熱を注いでいる。", ko: "그는 일에 열정을 쏟고 있다." }]
  },
  {
    id: 535, day: 32, level: "N2",
    word: "反発", kana: "はんぱつ", pos: "명사",
    mean: "반발 (맞서 튕겨냄 / 저항함)",
    syn: ["反抗", "はね返ること"],
    collocations: [{ ja: "世論の反発を招く", ko: "여론의 거센 반발을 부르다" }, { ja: "株価が反発する", ko: "주가가 반등하다" }],
    examples: [{ type: "on", label: "음독", ja: "国民への十分な事前説明を欠いたままの増税方針の発表は、各界から激しい反発を引き起こした。", ko: "국민에 대한 충분한 사전 설명을 결여한 채 이루어진 증세 방침 발표는 각계로부터 거센 반발을 일으켰다." }]
  },
  {
    id: 2845, day: 32, level: "N2",
    word: "初心者", kana: "しょしんしゃ", pos: "명사",
    mean: "초심자, 초보자",
    syn: ["素人"],
    collocations: [{ ja: "初心者向け", ko: "초보자용" }],
    examples: [{ type: "ex", label: "예문", ja: "この講座は初心者向けです。", ko: "이 강좌는 초보자 대상입니다." }]
  },
  {
    id: 2846, day: 32, level: "N2",
    word: "所属", kana: "しょぞく", pos: "명사 (する동사)",
    mean: "소속",
    syn: [],
    collocations: [{ ja: "所属する", ko: "소속되다" }, { ja: "所属部署", ko: "소속 부서" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は営業部に所属している。", ko: "그는 영업부에 소속되어 있다." }]
  },
  {
    id: 2847, day: 32, level: "N2",
    word: "処分", kana: "しょぶん", pos: "명사 (する동사)",
    mean: "처분",
    syn: ["捨てる"],
    collocations: [{ ja: "古い家具を処分する", ko: "낡은 가구를 처분하다" }, { ja: "処分を受ける", ko: "처분을 받다" }],
    examples: [{ type: "ex", label: "예문", ja: "引っ越しの前に不要な物を処分した。", ko: "이사 전에 불필요한 물건을 처분했다." }]
  },
  {
    id: 2848, day: 32, level: "N2",
    word: "真相", kana: "しんそう", pos: "명사",
    mean: "진상",
    syn: ["真実"],
    collocations: [{ ja: "事件の真相", ko: "사건의 진상" }],
    examples: [{ type: "ex", label: "예문", ja: "事件の真相はまだ分かっていない。", ko: "사건의 진상은 아직 밝혀지지 않았다." }]
  },
  {
    id: 2849, day: 32, level: "N2",
    word: "進行", kana: "しんこう", pos: "명사 (する동사)",
    mean: "진행",
    syn: ["進む"],
    collocations: [{ ja: "会議の進行", ko: "회의 진행" }, { ja: "進行中", ko: "진행 중" }],
    examples: [{ type: "ex", label: "예문", ja: "工事は予定通り進行している。", ko: "공사는 예정대로 진행되고 있다." }]
  },
  {
    id: 2850, day: 32, level: "N2",
    word: "心身", kana: "しんしん", pos: "명사",
    mean: "심신",
    syn: ["心と体"],
    collocations: [{ ja: "心身ともに", ko: "심신 모두" }],
    examples: [{ type: "ex", label: "예문", ja: "心身ともに健康でいたい。", ko: "몸과 마음 모두 건강하고 싶다." }]
  },
  {
    id: 537, day: 32, level: "N2",
    word: "負担", kana: "ふたん", pos: "명사",
    mean: "부담 (비용·의무·노고를 떠맡음)",
    syn: ["重荷", "責任"],
    collocations: [{ ja: "費用を負担する", ko: "비용을 떠안다/부담하다" }, { ja: "精神的な負担", ko: "정신적 중압감/부담" }],
    examples: [{ type: "on", label: "음독", ja: "子育て世代の経済的負担を軽減するため、幼児教育の無償化や児童手当の拡充が図られている。", ko: "육아 세대의 경제적 부담을 덜어주기 위해 유아 교육 무상화와 아동수당 확충이 추진되고 있다." }]
  },
  {
    id: 2851, day: 32, level: "N2",
    word: "信念", kana: "しんねん", pos: "명사",
    mean: "신념",
    syn: [],
    collocations: [{ ja: "信念を貫く", ko: "신념을 관철하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は自分の信念を曲げなかった。", ko: "그는 자신의 신념을 굽히지 않았다." }]
  },
  {
    id: 2852, day: 32, level: "N2",
    word: "数値", kana: "すうち", pos: "명사",
    mean: "수치",
    syn: ["数字"],
    collocations: [{ ja: "数値目標", ko: "수치 목표" }],
    examples: [{ type: "ex", label: "예문", ja: "検査の数値は正常だった。", ko: "검사 수치는 정상이었다." }]
  },
  {
    id: 2853, day: 32, level: "N2",
    word: "隙間", kana: "すきま", pos: "명사",
    mean: "틈, 틈새",
    syn: [],
    collocations: [{ ja: "隙間風", ko: "외풍" }, { ja: "隙間時間", ko: "자투리 시간" }],
    examples: [{ type: "ex", label: "예문", ja: "隙間時間に単語を覚える。", ko: "자투리 시간에 단어를 외운다." }]
  },
  {
    id: 2854, day: 32, level: "N2",
    word: "成立", kana: "せいりつ", pos: "명사 (する동사)",
    mean: "성립",
    syn: [],
    collocations: [{ ja: "契約が成立する", ko: "계약이 성립하다" }],
    examples: [{ type: "ex", label: "예문", ja: "話し合いの結果、合意が成立した。", ko: "논의 결과 합의가 성립되었다." }]
  },
  {
    id: 2855, day: 32, level: "N2",
    word: "整理", kana: "せいり", pos: "명사 (する동사)",
    mean: "정리",
    syn: ["片付ける"],
    collocations: [{ ja: "部屋を整理する", ko: "방을 정리하다" }, { ja: "情報を整理する", ko: "정보를 정리하다" }],
    examples: [{ type: "ex", label: "예문", ja: "頭の中を整理してから話す。", ko: "머릿속을 정리하고 나서 말한다." }]
  },
  {
    id: 2856, day: 32, level: "N2",
    word: "世論", kana: "よろん", pos: "명사",
    mean: "여론",
    syn: [],
    collocations: [{ ja: "世論調査", ko: "여론 조사" }],
    examples: [{ type: "ex", label: "예문", ja: "政府は世論を無視できない。", ko: "정부는 여론을 무시할 수 없다." }]
  },
  {
    id: 538, day: 32, level: "N2",
    word: "復興", kana: "ふっこう", pos: "명사",
    mean: "부흥, 복구 (쇠퇴하거나 파괴된 상태에서 다시 일어남)",
    syn: ["再建", "立て直し"],
    collocations: [{ ja: "被災地の復興", ko: "재해지 부흥 및 재건" }, { ja: "経済の復興", ko: "전후 경제 부흥" }],
    examples: [{ type: "on", label: "음독", ja: "大震災によって甚大な壊滅的被害を受けた被災地の復興に向けて、全国から手厚い支援が集まった。", ko: "대지진으로 심대한 괴멸적 피해를 입은 재해지의 재건을 위해 전국에서 따뜻한 지원이 모였다." }]
  },
  {
    id: 2857, day: 32, level: "N2",
    word: "先端", kana: "せんたん", pos: "명사",
    mean: "첨단, 끝",
    syn: [],
    collocations: [{ ja: "最先端の技術", ko: "최첨단 기술" }, { ja: "先端が尖る", ko: "끝이 뾰족하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この会社は最先端の技術を持っている。", ko: "이 회사는 최첨단 기술을 가지고 있다." }]
  },
  {
    id: 2858, day: 32, level: "N2",
    word: "総額", kana: "そうがく", pos: "명사",
    mean: "총액",
    syn: ["合計"],
    collocations: [{ ja: "総額で百万円", ko: "총액 백만 엔" }],
    examples: [{ type: "ex", label: "예문", ja: "工事の費用は総額で一億円に上る。", ko: "공사 비용은 총액 1억 엔에 달한다." }]
  },
  {
    id: 2859, day: 32, level: "N2",
    word: "操作", kana: "そうさ", pos: "명사 (する동사)",
    mean: "조작",
    syn: ["扱う"],
    collocations: [{ ja: "機械を操作する", ko: "기계를 조작하다" }, { ja: "操作ミス", ko: "조작 실수" }],
    examples: [{ type: "ex", label: "예문", ja: "このパソコンは操作が簡単だ。", ko: "이 컴퓨터는 조작이 간단하다." }]
  },
  {
    id: 2860, day: 32, level: "N2",
    word: "組織", kana: "そしき", pos: "명사 (する동사)",
    mean: "조직",
    syn: [],
    collocations: [{ ja: "組織を作る", ko: "조직을 만들다" }, { ja: "組織的", ko: "조직적" }],
    examples: [{ type: "ex", label: "예문", ja: "大きな組織ほど変化に時間がかかる。", ko: "큰 조직일수록 변화에 시간이 걸린다." }]
  },
  {
    id: 2861, day: 32, level: "N2",
    word: "素質", kana: "そしつ", pos: "명사",
    mean: "소질",
    syn: ["才能"],
    collocations: [{ ja: "素質がある", ko: "소질이 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女には歌手としての素質がある。", ko: "그녀에게는 가수로서의 소질이 있다." }]
  },
  {
    id: 2862, day: 32, level: "N1",
    word: "重んじる", kana: "おもんじる", pos: "동사 (타동사)",
    mean: "중시하다",
    syn: ["重視する"],
    collocations: [{ ja: "伝統を重んじる", ko: "전통을 중시하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この会社はチームワークを重んじている。", ko: "이 회사는 팀워크를 중시한다." }]
  },
  {
    id: 398, day: 32, level: "N1",
    word: "勘弁", kana: "かんべん", pos: "명사",
    mean: "용서, 봐줌, 참아줌",
    syn: ["許すこと", "容赦"],
    collocations: [{ ja: "勘弁してください", ko: "제발 좀 봐주세요/봐줘요" }, { ja: "もう勘弁だ", ko: "이제 더는 사양이다/사절이다" }],
    examples: [{ type: "on", label: "음독", ja: "理不尽な要求をこれ以上押し付けられるのは、誰の目から見ても勘弁してほしいところだ。", ko: "불합리한 요구를 더 이상 떠안는 것은 누구의 눈으로 보아도 제발 사양하고 싶은 노릇이다." }]
  },
  {
    id: 2863, day: 32, level: "N1",
    word: "軽んじる", kana: "かろんじる", pos: "동사 (타동사)",
    mean: "경시하다",
    syn: ["軽視する"],
    collocations: [{ ja: "命を軽んじる", ko: "생명을 경시하다" }],
    examples: [{ type: "ex", label: "예문", ja: "小さなミスを軽んじてはいけない。", ko: "작은 실수를 경시해서는 안 된다." }]
  },
  {
    id: 422, day: 32, level: "N1",
    word: "偽る", kana: "いつわる", pos: "동사 (5단 타동사)",
    mean: "속이다, 사칭하다, 거짓말하다",
    syn: ["だます", "ごまかす"],
    collocations: [{ ja: "身元を偽る", ko: "신분을 속이다/사칭하다" }, { ja: "本心を偽る", ko: "본심을 속이다/숨기다" }],
    examples: [{ type: "kun", label: "훈독", ja: "経歴や資格を偽って採用試験に応募した事実が判明し、即時解雇の処分が下された。", ko: "경력이나 자격을 속이고 채용 시험에 응시한 사실이 드러나 즉시 해고 처분이 내려졌다." }, { type: "on", label: "음독", ja: "巧妙な手口で偽造(ぎぞう)された身分証明書を見抜くため、最新の電子認証システムを導入した。", ko: "교묘한 수법으로 위조된 신분증명서를 식별하기 위해 최신 전자 인증 시스템을 도입했다." }]
  },
  {
    id: 2864, day: 32, level: "N1",
    word: "秘める", kana: "ひめる", pos: "동사 (타동사)",
    mean: "간직하다, 숨기다",
    syn: ["隠す"],
    collocations: [{ ja: "可能性を秘める", ko: "가능성을 품다" }],
    examples: [{ type: "ex", label: "예문", ja: "この子は大きな可能性を秘めている。", ko: "이 아이는 큰 가능성을 품고 있다." }]
  },
  {
    id: 2865, day: 32, level: "N1",
    word: "際立つ", kana: "きわだつ", pos: "동사 (자동사)",
    mean: "두드러지다",
    syn: ["目立つ"],
    collocations: [{ ja: "際立った特徴", ko: "두드러진 특징" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女の美しさは際立っていた。", ko: "그녀의 아름다움은 두드러졌다." }]
  },
  {
    id: 427, day: 32, level: "N1",
    word: "澄ます", kana: "すます", pos: "동사 (5단 타동사)",
    mean: "맑게 하다, 새침하게 굴다, (감각을) 곤두세우다",
    syn: ["よく聞く", "気取る"],
    collocations: [{ ja: "耳を澄ます", ko: "귀를 기울이다/곤두세우다" }, { ja: "澄ました顔", ko: "새침한 표정/아무렇지 않은 얼굴" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "森の静寂の中で息を殺して耳を澄ますと、遠くからかすかなせせらぎの音が聞こえた。", ko: "숲의 고요함 속에서 숨을 죽이고 귀를 기울이자 멀리서 희미한 시냇물 소리가 들려왔다." }],
    polysemy: [
      { def: "① 액체나 마음을 더러움 없이 깨끗하고 맑게 가라앉히다", ja: "濁った川の水を沈殿させ、フィルターに通して不純物を取り除いて澄ます。", ko: "흐려진 강물을 침전시키고 필터에 통과시켜 불순물을 제거해 맑게 하다." },
      { def: "② 소리나 기척을 놓치지 않으려고 청각이나 시각의 주의를 집중하다", ja: "暗闇の中で目を澄まし、かすかな光の輪郭を手探りで追った。", ko: "어둠 속에서 눈을 곤두세우고 희미한 빛의 윤곽을 손으로 더듬듯 쫓았다." },
      { def: "③ 짐짓 점잔을 빼거나 새침데기처럼 아무 상관없는 척하다", ja: "失敗した張本人であるにもかかわらず、何食わぬ顔で澄ましている。", ko: "실패를 저지른 장본인임에도 불구하고 아무 일도 없었다는 듯 새침하게 굴고 있다." }
    ]
  },
  {
    id: 2866, day: 32, level: "N1",
    word: "見失う", kana: "みうしなう", pos: "동사 (타동사)",
    mean: "놓치다, 잃다",
    syn: ["見逃す"],
    collocations: [{ ja: "目標を見失う", ko: "목표를 잃다" }],
    examples: [{ type: "ex", label: "예문", ja: "人混みで友人を見失った。", ko: "인파 속에서 친구를 놓쳤다." }]
  },
  // ==========================================
  // [DAY 33] N2 필수 + N1 · 63개
  // ==========================================
  {
    id: 2867, day: 33, level: "N2",
    word: "継ぐ", kana: "つぐ", pos: "동사 (타동사)",
    mean: "잇다, 계승하다",
    syn: ["受け継ぐ"],
    collocations: [{ ja: "家業を継ぐ", ko: "가업을 잇다" }],
    examples: [{ type: "ex", label: "예문", ja: "長男が父の店を継ぐことになった。", ko: "장남이 아버지의 가게를 잇게 되었다." }]
  },
  {
    id: 2868, day: 33, level: "N2",
    word: "詰め込む", kana: "つめこむ", pos: "동사 (타동사)",
    mean: "가득 채워 넣다, 주입하다",
    syn: ["詰める"],
    collocations: [{ ja: "知識を詰め込む", ko: "지식을 주입하다" }, { ja: "予定を詰め込む", ko: "일정을 빽빽이 넣다" }],
    examples: [{ type: "ex", label: "예문", ja: "試験前に知識を詰め込むだけでは忘れてしまう。", ko: "시험 전에 지식을 주입하기만 해서는 잊어버린다." }]
  },
  {
    id: 2869, day: 33, level: "N2",
    word: "手放す", kana: "てばなす", pos: "동사 (타동사)",
    mean: "손을 놓다, 팔아넘기다",
    syn: ["売る"],
    collocations: [{ ja: "家を手放す", ko: "집을 팔다" }],
    examples: [{ type: "ex", label: "예문", ja: "生活のために車を手放した。", ko: "생활을 위해 차를 팔았다." }]
  },
  {
    id: 423, day: 33, level: "N2",
    word: "奢る", kana: "おごる", pos: "동사 (5단 자/타동사)",
    mean: "한턱내다, 사치하다, 우쭐대다",
    syn: ["ごちそうする", "ぜいたくする"],
    collocations: [{ ja: "後輩に奢る", ko: "후배에게 한턱내다" }, { ja: "口が奢る", ko: "입맛이 고급화되다" }],
    examples: [{ type: "kun", label: "훈독", ja: "昇進祝いとして先輩が高級レストランでコース料理をご馳走して奢ってくれた。", ko: "승진 축하 기념으로 선배가 고급 레스토랑에서 코스 요리를 대접하며 한턱내 주었다." }]
  },
  {
    id: 2870, day: 33, level: "N2",
    word: "問い詰める", kana: "といつめる", pos: "동사 (타동사)",
    mean: "추궁하다",
    syn: ["追及する"],
    collocations: [{ ja: "理由を問い詰める", ko: "이유를 추궁하다" }],
    examples: [{ type: "ex", label: "예문", ja: "母に遅く帰った理由を問い詰められた。", ko: "어머니에게 늦게 들어온 이유를 추궁당했다." }]
  },
  {
    id: 2871, day: 33, level: "N2",
    word: "溶け込む", kana: "とけこむ", pos: "동사 (자동사)",
    mean: "녹아들다, 융화되다",
    syn: ["なじむ"],
    collocations: [{ ja: "地域に溶け込む", ko: "지역에 녹아들다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はすぐに新しい職場に溶け込んだ。", ko: "그는 금방 새 직장에 녹아들었다." }]
  },
  {
    id: 2872, day: 33, level: "N2",
    word: "取り掛かる", kana: "とりかかる", pos: "동사 (자동사)",
    mean: "착수하다",
    syn: ["着手する"],
    collocations: [{ ja: "仕事に取り掛かる", ko: "일에 착수하다" }],
    examples: [{ type: "ex", label: "예문", ja: "朝食を済ませて、すぐに作業に取り掛かった。", ko: "아침을 먹고 곧바로 작업에 착수했다." }]
  },
  {
    id: 2873, day: 33, level: "N2",
    word: "取り締まる", kana: "とりしまる", pos: "동사 (타동사)",
    mean: "단속하다",
    syn: ["規制する"],
    collocations: [{ ja: "違反を取り締まる", ko: "위반을 단속하다" }],
    examples: [{ type: "ex", label: "예문", ja: "警察は飲酒運転を厳しく取り締まっている。", ko: "경찰은 음주 운전을 엄격히 단속하고 있다." }]
  },
  {
    id: 2874, day: 33, level: "N2",
    word: "投げかける", kana: "なげかける", pos: "동사 (타동사)",
    mean: "던지다, 제기하다",
    syn: ["提起する"],
    collocations: [{ ja: "疑問を投げかける", ko: "의문을 제기하다" }],
    examples: [{ type: "ex", label: "예문", ja: "その発言は多くの疑問を投げかけた。", ko: "그 발언은 많은 의문을 제기했다." }]
  },
  {
    id: 431, day: 33, level: "N2",
    word: "摘む", kana: "つむ", pos: "동사 (5단 타동사)",
    mean: "따다, 뜯다, 싹을 자르다",
    syn: ["つまむ", "摘み取る"],
    collocations: [{ ja: "花を摘む", ko: "꽃을 꺾어 따다" }, { ja: "才能の芽を摘む", ko: "재능의 싹을 꺾다/자르다" }],
    examples: [{ type: "kun", label: "훈독", ja: "若手クリエイターの自由で斬新な発想の芽を、頭ごなしの否定によって摘んでしまってはならない。", ko: "젊은 창작자의 자유롭고 참신한 발상의 싹을 무조건적인 부정으로 꺾어 버려서는 안 된다." }]
  },
  {
    id: 2875, day: 33, level: "N2",
    word: "煮える", kana: "にえる", pos: "동사 (자동사)",
    mean: "익다, 끓다",
    syn: [],
    collocations: [{ ja: "豆が煮える", ko: "콩이 익다" }, { ja: "煮え切らない", ko: "우유부단하다" }],
    examples: [{ type: "ex", label: "예문", ja: "鍋の野菜がよく煮えた。", ko: "냄비의 채소가 잘 익었다." }]
  },
  {
    id: 2876, day: 33, level: "N2",
    word: "逃げ出す", kana: "にげだす", pos: "동사 (자동사)",
    mean: "도망치다",
    syn: ["逃げる"],
    collocations: [{ ja: "現場から逃げ出す", ko: "현장에서 도망치다" }],
    examples: [{ type: "ex", label: "예문", ja: "あまりの怖さに逃げ出したくなった。", ko: "너무 무서워서 도망치고 싶어졌다." }]
  },
  {
    id: 2877, day: 33, level: "N2",
    word: "寝込む", kana: "ねこむ", pos: "동사 (자동사)",
    mean: "앓아눕다, 깊이 잠들다",
    syn: [],
    collocations: [{ ja: "風邪で寝込む", ko: "감기로 앓아눕다" }],
    examples: [{ type: "ex", label: "예문", ja: "高熱で三日間寝込んでしまった。", ko: "고열로 사흘간 앓아누웠다." }]
  },
  {
    id: 2878, day: 33, level: "N2",
    word: "明確", kana: "めいかく", pos: "な형용사",
    mean: "명확함",
    syn: ["はっきりした"],
    collocations: [{ ja: "明確な目標", ko: "명확한 목표" }],
    examples: [{ type: "ex", label: "예문", ja: "明確な理由を説明してください。", ko: "명확한 이유를 설명해 주세요." }]
  },
  {
    id: 2879, day: 33, level: "N2",
    word: "気まずい", kana: "きまずい", pos: "い형용사",
    mean: "어색하다, 거북하다",
    syn: ["ぎこちない"],
    collocations: [{ ja: "気まずい雰囲気", ko: "어색한 분위기" }],
    examples: [{ type: "ex", label: "예문", ja: "けんかした後、気まずい空気が流れた。", ko: "싸운 뒤 어색한 분위기가 흘렀다." }]
  },
  {
    id: 2880, day: 33, level: "N2",
    word: "優秀", kana: "ゆうしゅう", pos: "な형용사",
    mean: "우수함",
    syn: ["優れた"],
    collocations: [{ ja: "優秀な成績", ko: "우수한 성적" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は優秀な成績で卒業した。", ko: "그는 우수한 성적으로 졸업했다." }]
  },
  {
    id: 510, day: 33, level: "N2",
    word: "疑わしい", kana: "うたがわしい", pos: "い형용사",
    mean: "의심스럽다, 미심쩍다, 불확실하다",
    syn: ["怪しい", "不確かな"],
    collocations: [{ ja: "効果が疑わしい", ko: "실제 효과가 의심스럽다" }, { ja: "疑わしい行動", ko: "수상쩍고 미심쩍은 행동" }],
    examples: [{ type: "kun", label: "훈독", ja: "客観的なデータによる裏付けが乏しく、その新説の科学的妥当性は極めて疑わしい。", ko: "객관적인 데이터에 의한 뒷받침이 부족하여 그 새로운 학설의 과학적 타당성은 극히 의심스럽다." }]
  },
  {
    id: 2881, day: 33, level: "N2",
    word: "緩やか", kana: "ゆるやか", pos: "な형용사",
    mean: "완만함, 느슨함",
    syn: ["なだらかな"],
    collocations: [{ ja: "緩やかな坂", ko: "완만한 언덕" }],
    examples: [{ type: "ex", label: "예문", ja: "景気は緩やかに回復している。", ko: "경기는 완만하게 회복되고 있다." }]
  },
  {
    id: 2882, day: 33, level: "N2",
    word: "手厚い", kana: "てあつい", pos: "い형용사",
    mean: "극진하다, 정성스럽다",
    syn: ["丁寧な"],
    collocations: [{ ja: "手厚い看護", ko: "극진한 간호" }],
    examples: [{ type: "ex", label: "예문", ja: "病院で手厚い看護を受けた。", ko: "병원에서 극진한 간호를 받았다." }]
  },
  {
    id: 2883, day: 33, level: "N2",
    word: "バック", kana: "バック", pos: "외래어",
    mean: "후진, 배경, 지원 (back)",
    syn: ["後ろ", "背景"],
    collocations: [{ ja: "バックする", ko: "후진하다" }],
    examples: [{ type: "ex", label: "예문", ja: "車をバックで駐車場に入れた。", ko: "차를 후진으로 주차장에 넣었다." }]
  },
  {
    id: 379, day: 33, level: "N2",
    word: "ネットワーク", kana: "ねっとわーく", pos: "외래어",
    mean: "연결망, 네트워크 (network)",
    syn: ["網", "つながり"],
    collocations: [{ ja: "ネットワークを築く", ko: "인적 연결망을 구축하다" }, { ja: "情報ネットワーク", ko: "정보 통신 네트워크" }],
    examples: [{ type: "ex", label: "예문", ja: "産学官が緊密なネットワークを形成し、地域発のイノベーション創出を強力に推進する。", ko: "산학관이 긴밀한 네트워크를 형성하여 지역 발 혁신 창출을 강력하게 추진하다." }]
  },
  {
    id: 2884, day: 33, level: "N2",
    word: "ベスト", kana: "ベスト", pos: "외래어",
    mean: "최선, 최고 (best)",
    syn: ["最善"],
    collocations: [{ ja: "ベストを尽くす", ko: "최선을 다하다" }],
    examples: [{ type: "ex", label: "예문", ja: "どんな時もベストを尽くしたい。", ko: "어떤 때든 최선을 다하고 싶다." }]
  },
  {
    id: 2885, day: 33, level: "N2",
    word: "やたら(と)", kana: "やたら", pos: "부사",
    mean: "함부로, 무턱대고, 몹시",
    syn: ["むやみに"],
    collocations: [{ ja: "やたらと高い", ko: "엄청나게 비싸다" }],
    examples: [{ type: "ex", label: "예문", ja: "最近やたらと眠い。", ko: "요즘 무척 졸리다." }]
  },
  {
    id: 2886, day: 33, level: "N2",
    word: "やむを得ず", kana: "やむをえず", pos: "부사",
    mean: "부득이, 어쩔 수 없이",
    syn: ["仕方なく"],
    collocations: [{ ja: "やむを得ず中止する", ko: "부득이 중지하다" }],
    examples: [{ type: "ex", label: "예문", ja: "悪天候のため、やむを得ず中止した。", ko: "악천후로 인해 부득이하게 중지했다." }]
  },
  {
    id: 2887, day: 33, level: "N2",
    word: "若干", kana: "じゃっかん", pos: "부사",
    mean: "약간",
    syn: ["少し", "多少"],
    collocations: [{ ja: "若干の変更", ko: "약간의 변경" }],
    examples: [{ type: "ex", label: "예문", ja: "予定に若干の変更があります。", ko: "예정에 약간의 변경이 있습니다." }]
  },
  {
    id: 2888, day: 33, level: "N2",
    word: "わりあい(に)", kana: "わりあい", pos: "부사",
    mean: "비교적",
    syn: ["割に", "比較的"],
    collocations: [{ ja: "わりあい簡単だ", ko: "비교적 쉽다" }],
    examples: [{ type: "ex", label: "예문", ja: "今日はわりあい暖かい。", ko: "오늘은 비교적 따뜻하다." }]
  },
  {
    id: 2889, day: 33, level: "N2",
    word: "次から次へと", kana: "つぎからつぎへと", pos: "부사",
    mean: "잇따라, 연달아",
    syn: ["次々"],
    collocations: [{ ja: "次から次へと問題が起こる", ko: "잇따라 문제가 일어나다" }],
    examples: [{ type: "ex", label: "예문", ja: "次から次へと客が来て、休む暇もない。", ko: "연달아 손님이 와서 쉴 틈도 없다." }]
  },
  {
    id: 2890, day: 33, level: "N2",
    word: "ぐんぐん", kana: "ぐんぐん", pos: "부사 (의성어·의태어)",
    mean: "쑥쑥, 부쩍부쩍",
    syn: ["どんどん"],
    collocations: [{ ja: "ぐんぐん伸びる", ko: "쑥쑥 자라다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもたちは夏の間にぐんぐん背が伸びた。", ko: "아이들은 여름 동안 키가 쑥쑥 자랐다." }]
  },
  {
    id: 2891, day: 33, level: "N2",
    word: "じめじめ", kana: "じめじめ", pos: "부사 (의성어·의태어)",
    mean: "눅눅하게, 축축하게",
    syn: ["湿っぽい"],
    collocations: [{ ja: "じめじめした天気", ko: "눅눅한 날씨" }],
    examples: [{ type: "ex", label: "예문", ja: "梅雨はじめじめして嫌だ。", ko: "장마철은 눅눅해서 싫다." }]
  },
  {
    id: 2892, day: 33, level: "N2",
    word: "とはいえ", kana: "とはいえ", pos: "접속사",
    mean: "그렇다고는 하지만",
    syn: ["とはいっても"],
    collocations: [{ ja: "とはいえ", ko: "그렇다고는 하지만" }],
    examples: [{ type: "ex", label: "예문", ja: "春になった。とはいえ、まだ朝晩は寒い。", ko: "봄이 되었다. 그렇다고는 하지만 아직 아침저녁은 춥다." }]
  },
  {
    id: 2893, day: 33, level: "N2",
    word: "〜気味", kana: "ぎみ", pos: "접미어",
    mean: "~기미",
    syn: ["少し〜"],
    collocations: [{ ja: "風邪気味", ko: "감기 기운" }, { ja: "疲れ気味", ko: "피곤한 듯함" }],
    examples: []
  },
  {
    id: 2894, day: 33, level: "N2",
    word: "〜づらい", kana: "づらい", pos: "접미어",
    mean: "~하기 어렵다",
    syn: ["〜にくい"],
    collocations: [{ ja: "読みづらい", ko: "읽기 어렵다" }, { ja: "言いづらい", ko: "말하기 거북하다" }],
    examples: []
  },
  {
    id: 2895, day: 33, level: "N2",
    word: "体制", kana: "たいせい", pos: "명사",
    mean: "체제",
    syn: ["システム"],
    collocations: [{ ja: "体制を整える", ko: "체제를 갖추다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい体制で事業を始めた。", ko: "새로운 체제로 사업을 시작했다." }]
  },
  {
    id: 539, day: 33, level: "N2",
    word: "分散", kana: "ぶんさん", pos: "명사",
    mean: "분산 (갈라져 흩어짐 / 위험을 쪼갬)",
    syn: ["ばらばらにすること"],
    collocations: [{ ja: "リスクを分散する", ko: "위험을 분산하다" }, { ja: "人口の分散", ko: "대도시 인구 분산" }],
    examples: [{ type: "on", label: "음독", ja: "単一の銘柄に全財産を投じるのではなく、複数の投資先へ資産を分散させることが投資の基本だ。", ko: "단일 종목에 전 재산을 쏟아붓지 않고 여러 투자처로 자산을 분산시키는 것이 투자의 기본이다." }]
  },
  {
    id: 2896, day: 33, level: "N2",
    word: "対照", kana: "たいしょう", pos: "명사 (する동사)",
    mean: "대조",
    syn: ["比較"],
    collocations: [{ ja: "対照的", ko: "대조적" }, { ja: "対照表", ko: "대조표" }],
    examples: [{ type: "ex", label: "예문", ja: "二人の性格は対照的だ。", ko: "두 사람의 성격은 대조적이다." }]
  },
  {
    id: 2897, day: 33, level: "N2",
    word: "大半", kana: "たいはん", pos: "명사",
    mean: "태반, 대부분",
    syn: ["大部分"],
    collocations: [{ ja: "大半の人", ko: "대부분의 사람" }],
    examples: [{ type: "ex", label: "예문", ja: "参加者の大半は学生だった。", ko: "참가자 대부분은 학생이었다." }]
  },
  {
    id: 2898, day: 33, level: "N2",
    word: "代理", kana: "だいり", pos: "명사 (する동사)",
    mean: "대리",
    syn: ["代わり"],
    collocations: [{ ja: "代理人", ko: "대리인" }, { ja: "代理で出席する", ko: "대리로 출석하다" }],
    examples: [{ type: "ex", label: "예문", ja: "部長の代理で会議に出席した。", ko: "부장님 대리로 회의에 출석했다." }]
  },
  {
    id: 2899, day: 33, level: "N2",
    word: "多数", kana: "たすう", pos: "명사",
    mean: "다수",
    syn: [],
    collocations: [{ ja: "多数決", ko: "다수결" }, { ja: "多数の意見", ko: "다수 의견" }],
    examples: [{ type: "ex", label: "예문", ja: "多数の人がこの案に賛成した。", ko: "다수의 사람이 이 안에 찬성했다." }]
  },
  {
    id: 2900, day: 33, level: "N2",
    word: "達成", kana: "たっせい", pos: "명사 (する동사)",
    mean: "달성",
    syn: ["成し遂げる"],
    collocations: [{ ja: "目標を達成する", ko: "목표를 달성하다" }, { ja: "達成感", ko: "성취감" }],
    examples: [{ type: "ex", label: "예문", ja: "ついに売り上げ目標を達成した。", ko: "마침내 매출 목표를 달성했다." }]
  },
  {
    id: 2901, day: 33, level: "N2",
    word: "単独", kana: "たんどく", pos: "명사",
    mean: "단독",
    syn: ["一人"],
    collocations: [{ ja: "単独で行動する", ko: "단독으로 행동하다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は単独で山に登った。", ko: "그는 단독으로 산에 올랐다." }]
  },
  {
    id: 542, day: 33, level: "N2",
    word: "防災", kana: "ぼうさい", pos: "명사",
    mean: "방재 (재해를 미리 막고 피해를 줄임)",
    syn: ["災害防止"],
    collocations: [{ ja: "防災訓練", ko: "재난 대피 방재 훈련" }, { ja: "防災意識を高める", ko: "시민의 방재 의식을 고취하다" }],
    examples: [{ type: "on", label: "음독", ja: "突発的な巨大地震の発生に備え、家庭内での飲料水の備蓄や家具の固定といった防災対策を怠ってはならない。", ko: "돌발적인 거대 지진 발생에 대비하여 가정 내 음용수 비축이나 가구 고정과 같은 방재 대책을 소홀히 해서는 안 된다." }]
  },
  {
    id: 2902, day: 33, level: "N2",
    word: "段階", kana: "だんかい", pos: "명사",
    mean: "단계",
    syn: ["ステップ"],
    collocations: [{ ja: "最終段階", ko: "최종 단계" }, { ja: "段階的に", ko: "단계적으로" }],
    examples: [{ type: "ex", label: "예문", ja: "計画はまだ準備の段階だ。", ko: "계획은 아직 준비 단계다." }]
  },
  {
    id: 2903, day: 33, level: "N2",
    word: "地帯", kana: "ちたい", pos: "명사",
    mean: "지대",
    syn: [],
    collocations: [{ ja: "工業地帯", ko: "공업 지대" }, { ja: "安全地帯", ko: "안전지대" }],
    examples: [{ type: "ex", label: "예문", ja: "この辺りは工業地帯だ。", ko: "이 근처는 공업 지대다." }]
  },
  {
    id: 2904, day: 33, level: "N2",
    word: "中心", kana: "ちゅうしん", pos: "명사",
    mean: "중심",
    syn: [],
    collocations: [{ ja: "町の中心", ko: "마을의 중심" }, { ja: "中心人物", ko: "중심인물" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は計画の中心人物だ。", ko: "그는 계획의 중심인물이다." }]
  },
  {
    id: 2905, day: 33, level: "N2",
    word: "中断", kana: "ちゅうだん", pos: "명사 (する동사)",
    mean: "중단",
    syn: ["中止"],
    collocations: [{ ja: "試合が中断する", ko: "시합이 중단되다" }],
    examples: [{ type: "ex", label: "예문", ja: "雨のため試合が一時中断した。", ko: "비 때문에 시합이 일시 중단되었다." }]
  },
  {
    id: 2906, day: 33, level: "N2",
    word: "調子", kana: "ちょうし", pos: "명사",
    mean: "상태, 컨디션, 가락",
    syn: ["具合"],
    collocations: [{ ja: "調子がいい", ko: "컨디션이 좋다" }, { ja: "調子に乗る", ko: "우쭐해지다" }],
    examples: [{ type: "ex", label: "예문", ja: "最近、体の調子がいい。", ko: "요즘 몸 상태가 좋다." }]
  },
  {
    id: 2907, day: 33, level: "N2",
    word: "頂点", kana: "ちょうてん", pos: "명사",
    mean: "정점",
    syn: ["ピーク"],
    collocations: [{ ja: "頂点に立つ", ko: "정점에 서다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は業界の頂点に立った。", ko: "그는 업계의 정점에 섰다." }]
  },
  {
    id: 2908, day: 33, level: "N2",
    word: "直接", kana: "ちょくせつ", pos: "명사",
    mean: "직접",
    syn: [],
    collocations: [{ ja: "直接会う", ko: "직접 만나다" }, { ja: "直接的な原因", ko: "직접적인 원인" }],
    examples: [{ type: "ex", label: "예문", ja: "大事な話は直接会って話したい。", ko: "중요한 이야기는 직접 만나서 하고 싶다." }]
  },
  {
    id: 543, day: 33, level: "N2",
    word: "没頭", kana: "ぼっとう", pos: "명사",
    mean: "몰두 (한 가지 일에 완전히 정신을 쏟음)",
    syn: ["熱中", "集中"],
    collocations: [{ ja: "研究に没頭する", ko: "연구에 완전히 몰두하다" }, { ja: "読書に没頭する", ko: "책 읽기에 푹 빠져 몰두하다" }],
    examples: [{ type: "on", label: "음독", ja: "周囲の雑音や時間の経過すら完全に忘れて絵画の制作に没頭し、ついに納得のいく大作を完成させた。", ko: "주변의 소음이나 시간의 흐름조차 완전히 잊고 그림 제작에 몰두하여 마침내 스스로 납득할 만한 대작을 완성했다." }]
  },
  {
    id: 2909, day: 33, level: "N2",
    word: "追加", kana: "ついか", pos: "명사 (する동사)",
    mean: "추가",
    syn: ["加える"],
    collocations: [{ ja: "追加料金", ko: "추가 요금" }, { ja: "注文を追加する", ko: "주문을 추가하다" }],
    examples: [{ type: "ex", label: "예문", ja: "飲み物を追加で注文した。", ko: "음료를 추가로 주문했다." }]
  },
  {
    id: 2910, day: 33, level: "N2",
    word: "手掛かり", kana: "てがかり", pos: "명사",
    mean: "단서, 실마리",
    syn: ["ヒント"],
    collocations: [{ ja: "手掛かりをつかむ", ko: "단서를 잡다" }],
    examples: [{ type: "ex", label: "예문", ja: "警察は事件の手掛かりを探している。", ko: "경찰은 사건의 단서를 찾고 있다." }]
  },
  {
    id: 2911, day: 33, level: "N2",
    word: "手本", kana: "てほん", pos: "명사",
    mean: "본보기, 모범",
    syn: ["模範"],
    collocations: [{ ja: "手本を示す", ko: "본보기를 보이다" }],
    examples: [{ type: "ex", label: "예문", ja: "先輩を手本にして仕事を覚えた。", ko: "선배를 본보기로 일을 배웠다." }]
  },
  {
    id: 2912, day: 33, level: "N2",
    word: "展開", kana: "てんかい", pos: "명사 (する동사)",
    mean: "전개",
    syn: [],
    collocations: [{ ja: "話の展開", ko: "이야기의 전개" }, { ja: "事業を展開する", ko: "사업을 전개하다" }],
    examples: [{ type: "ex", label: "예문", ja: "ドラマの展開が早くて目が離せない。", ko: "드라마 전개가 빨라서 눈을 뗄 수 없다." }]
  },
  {
    id: 2913, day: 33, level: "N2",
    word: "伝言", kana: "でんごん", pos: "명사 (する동사)",
    mean: "전언, 메시지",
    syn: ["メッセージ"],
    collocations: [{ ja: "伝言を頼む", ko: "말을 전해 달라고 부탁하다" }],
    examples: [{ type: "ex", label: "예문", ja: "田中さんに伝言をお願いできますか。", ko: "다나카 씨에게 말씀 좀 전해 주시겠어요?" }]
  },
  {
    id: 2914, day: 33, level: "N2",
    word: "動機", kana: "どうき", pos: "명사",
    mean: "동기",
    syn: ["きっかけ"],
    collocations: [{ ja: "志望動機", ko: "지원 동기" }],
    examples: [{ type: "ex", label: "예문", ja: "面接で志望動機を聞かれた。", ko: "면접에서 지원 동기를 질문받았다." }]
  },
  {
    id: 433, day: 33, level: "N1",
    word: "留まる", kana: "とどまる", pos: "동사 (5단 자동사)",
    mean: "머무르다, 그치다, 남아 있다",
    syn: ["とどまる", "残る"],
    collocations: [{ ja: "現地に留まる", ko: "현지에 계속 머무르다" }, { ja: "記録に留める", ko: "기록으로 남겨두다 (※타동사형)" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "情勢の悪化に伴い退避勧告が出されたが、彼は救援活動を継続するため現地に留まった。", ko: "정세 악화에 따라 대피 권고가 내려졌으나 그는 구호 활동을 계속하기 위해 현지에 머물렀다." }],
    polysemy: [
      { def: "① 특정 장소·조직·현직에 이동하지 않고 그대로 머물다", ja: "他社からの好待遇の引き抜きを断り、愛着のある現在の職場に留まる決意をした。", ko: "타사로부터의 좋은 대우의 스카우트 제의를 거절하고 애착이 있는 현재 직장에 머물 결심을 했다." },
      { def: "② 어떤 범위·수치·피해 한도를 넘지 않고 그 범위 안에서 그치다", ja: "迅速な初期消火活動のおかげで、被害はボイラー室の一部焼損だけに留まった。", ko: "신속한 초기 진화 작업 덕분에 피해는 보일러실 일부 소실에만 그쳤다." },
      { def: "③ 이동하거나 움직이던 상태가 멈추어서 정지하다", ja: "止まり木の上に一羽の珍しい野鳥が静かに留まっているのを見つけた。", ko: "홰 위에 한 마리의 희귀한 야생조류가 조용히 멈추어 앉아 있는 것을 발견했다." }
    ]
  },
  {
    id: 2915, day: 33, level: "N1",
    word: "打ち出す", kana: "うちだす", pos: "동사 (타동사)",
    mean: "내세우다, 발표하다",
    syn: ["発表する"],
    collocations: [{ ja: "方針を打ち出す", ko: "방침을 내세우다" }],
    examples: [{ type: "ex", label: "예문", ja: "政府は新しい経済対策を打ち出した。", ko: "정부는 새로운 경제 대책을 내놓았다." }]
  },
  {
    id: 447, day: 33, level: "N1",
    word: "プロセス", kana: "ぷろせす", pos: "외래어",
    mean: "과정, 공정, 절차 (process)",
    syn: ["過程", "手順"],
    collocations: [{ ja: "思考のプロセス", ko: "사고의 도출 과정" }, { ja: "製造プロセス", ko: "제조 공정" }],
    examples: [{ type: "ex", label: "예문", ja: "単に結果の良し悪しだけを評価するのではなく、問題解決に至る緻密なプロセスを重視する。", ko: "단순히 결과의 좋고 나쁨만을 평가하는 것이 아니라 문제 해결에 이르는 치밀한 과정을 중시한다." }]
  },
  {
    id: 2916, day: 33, level: "N1",
    word: "掲げる", kana: "かかげる", pos: "동사 (타동사)",
    mean: "내걸다, 내세우다",
    syn: ["示す"],
    collocations: [{ ja: "目標を掲げる", ko: "목표를 내걸다" }, { ja: "旗を掲げる", ko: "깃발을 걸다" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい市長は「住みやすい町」を目標に掲げた。", ko: "새 시장은 '살기 좋은 마을'을 목표로 내걸었다." }]
  },
  {
    id: 2917, day: 33, level: "N1",
    word: "退く", kana: "しりぞく", pos: "동사 (자동사)",
    mean: "물러나다",
    syn: ["引退する"],
    collocations: [{ ja: "第一線を退く", ko: "일선에서 물러나다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は社長の座を退いた。", ko: "그는 사장 자리에서 물러났다." }]
  },
  {
    id: 452, day: 33, level: "N1",
    word: "パフォーマンス", kana: "ぱふぉーまんす", pos: "외래어",
    mean: "성과, 실행 실적, 성능 (performance)",
    syn: ["演技", "成果"],
    collocations: [{ ja: "コストパフォーマンス", ko: "가격 대비 성능(가성비)" }, { ja: "高いパフォーマンス", ko: "뛰어난 업무 수행 성과/성능" }],
    examples: [{ type: "ex", label: "예문", ja: "従業員が心身の健康を保ち、最高のパフォーマンスを発揮できるように労働環境を抜本的に改善する。", ko: "종업원이 심신의 건강을 유지하여 최고의 업무 성과를 발휘할 수 있도록 근로 환경을 근본적으로 개선하다." }]
  },
  {
    id: 2918, day: 33, level: "N1",
    word: "揺らぐ", kana: "ゆらぐ", pos: "동사 (자동사)",
    mean: "흔들리다",
    syn: ["動揺する"],
    collocations: [{ ja: "信頼が揺らぐ", ko: "신뢰가 흔들리다" }],
    examples: [{ type: "ex", label: "예문", ja: "一連の不祥事で会社への信頼が揺らいでいる。", ko: "일련의 불상사로 회사에 대한 신뢰가 흔들리고 있다." }]
  },
  {
    id: 454, day: 33, level: "N1",
    word: "ひとまず", kana: "ひとまず", pos: "부사",
    mean: "우선, 일단",
    syn: ["とりあえず", "一応"],
    collocations: [{ ja: "ひとまず安心だ", ko: "일단 한시름 놓았다" }, { ja: "ひとまず保留にする", ko: "우선 보류로 해두다" }],
    examples: [{ type: "ex", label: "예문", ja: "応急処置が完了して堤防の決壊危機は脱したため、住民の避難勧告はひとまず解除された。", ko: "응급 처치가 완료되어 제방 붕괴 위기를 벗어났기 때문에 주민 대피 권고는 일단 해제되었다." }]
  },
  // ==========================================
  // [DAY 34] N2 필수 + N1 · 59개
  // ==========================================
  {
    id: 2919, day: 34, level: "N2",
    word: "練る", kana: "ねる", pos: "동사 (타동사)",
    mean: "짜다, 다듬다",
    syn: ["考える"],
    collocations: [{ ja: "計画を練る", ko: "계획을 짜다" }, { ja: "文章を練る", ko: "문장을 다듬다" }],
    examples: [{ type: "ex", label: "예문", ja: "時間をかけて旅行の計画を練った。", ko: "시간을 들여 여행 계획을 짰다." }]
  },
  {
    id: 2920, day: 34, level: "N2",
    word: "乗り出す", kana: "のりだす", pos: "동사 (자동사)",
    mean: "나서다, 착수하다",
    syn: ["取り組む"],
    collocations: [{ ja: "調査に乗り出す", ko: "조사에 나서다" }, { ja: "身を乗り出す", ko: "몸을 앞으로 내밀다" }],
    examples: [{ type: "ex", label: "예문", ja: "警察が事件の調査に乗り出した。", ko: "경찰이 사건 조사에 나섰다." }]
  },
  {
    id: 435, day: 34, level: "N2",
    word: "粘る", kana: "ねばる", pos: "동사 (5단 자동사)",
    mean: "끈기를 갖다, 버티다, 끈적거리다",
    syn: ["頑張る", "あきらめない"],
    collocations: [{ ja: "最後まで粘る", ko: "마지막 순간까지 끈질기게 버티다" }, { ja: "納豆が粘る", ko: "낫토가 실을 치며 끈적거리다" }],
    examples: [{ type: "kun", label: "훈독", ja: "絶望的な点差をつけられても決して諦めず、試合終了の直前まで粘り強く戦い抜いた。", ko: "절망적인 점수 차가 났음에도 결코 포기하지 않고 경기 종료 직전까지 끈기 있게 버텨내며 싸웠다." }]
  },
  {
    id: 2921, day: 34, level: "N2",
    word: "張り合う", kana: "はりあう", pos: "동사 (자동사)",
    mean: "겨루다, 경쟁하다",
    syn: ["競う"],
    collocations: [{ ja: "ライバルと張り合う", ko: "라이벌과 겨루다" }],
    examples: [{ type: "ex", label: "예문", ja: "二人は何かにつけて張り合っている。", ko: "두 사람은 사사건건 경쟁하고 있다." }]
  },
  {
    id: 2922, day: 34, level: "N2",
    word: "引き出す", kana: "ひきだす", pos: "동사 (타동사)",
    mean: "끌어내다, 인출하다",
    syn: ["導き出す"],
    collocations: [{ ja: "能力を引き出す", ko: "능력을 끌어내다" }, { ja: "預金を引き出す", ko: "예금을 인출하다" }],
    examples: [{ type: "ex", label: "예문", ja: "生徒のやる気を引き出すのが教師の役目だ。", ko: "학생의 의욕을 끌어내는 것이 교사의 역할이다." }]
  },
  {
    id: 2923, day: 34, level: "N2",
    word: "引き継ぐ", kana: "ひきつぐ", pos: "동사 (타동사)",
    mean: "인계하다, 이어받다",
    syn: ["受け継ぐ"],
    collocations: [{ ja: "仕事を引き継ぐ", ko: "업무를 인계받다" }],
    examples: [{ type: "ex", label: "예문", ja: "前任者から仕事を引き継いだ。", ko: "전임자로부터 업무를 인계받았다." }]
  },
  {
    id: 2924, day: 34, level: "N2",
    word: "引っ張る", kana: "ひっぱる", pos: "동사 (타동사)",
    mean: "잡아당기다, 이끌다",
    syn: ["引く"],
    collocations: [{ ja: "ひもを引っ張る", ko: "끈을 잡아당기다" }, { ja: "チームを引っ張る", ko: "팀을 이끌다" }],
    examples: [{ type: "ex", label: "예문", ja: "キャプテンとしてチームを引っ張っている。", ko: "주장으로서 팀을 이끌고 있다." }]
  },
  {
    id: 2925, day: 34, level: "N2",
    word: "冷え込む", kana: "ひえこむ", pos: "동사 (자동사)",
    mean: "(날씨가) 추워지다, 냉각되다",
    syn: [],
    collocations: [{ ja: "朝晩冷え込む", ko: "아침저녁으로 쌀쌀하다" }, { ja: "景気が冷え込む", ko: "경기가 얼어붙다" }],
    examples: [{ type: "ex", label: "예문", ja: "今夜は一段と冷え込むでしょう。", ko: "오늘 밤은 한층 추워지겠습니다." }]
  },
  {
    id: 494, day: 34, level: "N2",
    word: "捗る", kana: "はかどる", pos: "동사 (5단 자동사)",
    mean: "진척되다, 순조롭게 나아가다",
    syn: ["順調に進む", "進行する"],
    collocations: [{ ja: "仕事が捗る", ko: "일이 일사천리로 진척되다" }, { ja: "勉強が捗る", ko: "공부가 막힘없이 잘되다" }],
    examples: [{ type: "kun", label: "훈독", ja: "静かな図書館の自習室を利用したおかげで、試験勉強が大いに捗った。", ko: "조용한 도서관 자습실을 이용한 덕분에 시험공부가 크게 진척되었다." }]
  },
  {
    id: 2926, day: 34, level: "N2",
    word: "広げる", kana: "ひろげる", pos: "동사 (타동사)",
    mean: "넓히다, 펼치다",
    syn: [],
    collocations: [{ ja: "地図を広げる", ko: "지도를 펼치다" }, { ja: "視野を広げる", ko: "시야를 넓히다" }],
    examples: [{ type: "ex", label: "예문", ja: "留学して視野を広げたい。", ko: "유학해서 시야를 넓히고 싶다." }]
  },
  {
    id: 2927, day: 34, level: "N2",
    word: "振る舞う", kana: "ふるまう", pos: "동사 (자동사)",
    mean: "행동하다, 대접하다",
    syn: ["行動する"],
    collocations: [{ ja: "明るく振る舞う", ko: "밝게 행동하다" }, { ja: "料理を振る舞う", ko: "요리를 대접하다" }],
    examples: [{ type: "ex", label: "예문", ja: "悲しみを隠して明るく振る舞った。", ko: "슬픔을 감추고 밝게 행동했다." }]
  },
  {
    id: 2928, day: 34, level: "N2",
    word: "踏まえる", kana: "ふまえる", pos: "동사 (타동사)",
    mean: "근거로 하다, 입각하다",
    syn: ["基にする"],
    collocations: [{ ja: "事実を踏まえる", ko: "사실을 근거로 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "調査の結果を踏まえて対策を考える。", ko: "조사 결과를 바탕으로 대책을 생각한다." }]
  },
  {
    id: 2929, day: 34, level: "N2",
    word: "陽気", kana: "ようき", pos: "な형용사",
    mean: "쾌활함, 명랑함",
    syn: ["明るい"],
    collocations: [{ ja: "陽気な人", ko: "쾌활한 사람" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は陽気な性格で、皆に好かれている。", ko: "그는 쾌활한 성격이라 모두에게 사랑받는다." }]
  },
  {
    id: 2930, day: 34, level: "N2",
    word: "冷淡", kana: "れいたん", pos: "な형용사",
    mean: "냉담함",
    syn: ["冷たい"],
    collocations: [{ ja: "冷淡な態度", ko: "냉담한 태도" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は困っている人に冷淡だ。", ko: "그는 곤란한 사람에게 냉담하다." }]
  },
  {
    id: 2931, day: 34, level: "N2",
    word: "分厚い", kana: "ぶあつい", pos: "い형용사",
    mean: "두툼하다",
    syn: ["厚い"],
    collocations: [{ ja: "分厚い本", ko: "두툼한 책" }],
    examples: [{ type: "ex", label: "예문", ja: "分厚い辞書を毎日持ち歩いている。", ko: "두툼한 사전을 매일 들고 다닌다." }]
  },
  {
    id: 514, day: 34, level: "N2",
    word: "密か", kana: "ひそか", pos: "な형용사",
    mean: "은밀함, 남몰래 함, 비밀스러움",
    syn: ["こっそり", "ひそか"],
    collocations: [{ ja: "密かな楽しみ", ko: "남모르는 은밀한 즐거움" }, { ja: "密かに計画する", ko: "남몰래 은밀히 계획하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "激務の合間を縫って、退職後に世界一周旅行へ旅立つための準備を密かに進めている。", ko: "격무 틈틈이 은퇴 후 세계 일주 여행을 떠나기 위한 준비를 남몰래 진행하고 있다." }]
  },
  {
    id: 2932, day: 34, level: "N2",
    word: "和やか", kana: "なごやか", pos: "な형용사",
    mean: "화기애애함",
    syn: ["穏やかな"],
    collocations: [{ ja: "和やかな雰囲気", ko: "화기애애한 분위기" }],
    examples: [{ type: "ex", label: "예문", ja: "会議は和やかな雰囲気で進んだ。", ko: "회의는 화기애애한 분위기로 진행되었다." }]
  },
  {
    id: 2933, day: 34, level: "N2",
    word: "僅か", kana: "わずか", pos: "な형용사",
    mean: "약간, 불과",
    syn: ["少し"],
    collocations: [{ ja: "僅かな差", ko: "근소한 차이" }],
    examples: [{ type: "ex", label: "예문", ja: "僅か一点差で負けた。", ko: "불과 1점 차로 졌다." }]
  },
  {
    id: 2934, day: 34, level: "N2",
    word: "マーケット", kana: "マーケット", pos: "외래어",
    mean: "시장 (market)",
    syn: ["市場"],
    collocations: [{ ja: "海外マーケット", ko: "해외 시장" }],
    examples: [{ type: "ex", label: "예문", ja: "海外マーケットに進出する。", ko: "해외 시장에 진출한다." }]
  },
  {
    id: 2935, day: 34, level: "N2",
    word: "ムード", kana: "ムード", pos: "외래어",
    mean: "분위기 (mood)",
    syn: ["雰囲気"],
    collocations: [{ ja: "ムードがいい", ko: "분위기가 좋다" }],
    examples: [{ type: "ex", label: "예문", ja: "会場はお祝いのムードに包まれた。", ko: "회장은 축하 분위기에 휩싸였다." }]
  },
  {
    id: 2936, day: 34, level: "N2",
    word: "リズム", kana: "リズム", pos: "외래어",
    mean: "리듬 (rhythm)",
    syn: ["調子"],
    collocations: [{ ja: "生活のリズム", ko: "생활 리듬" }],
    examples: [{ type: "ex", label: "예문", ja: "夜更かしで生活のリズムが崩れた。", ko: "밤샘으로 생활 리듬이 무너졌다." }]
  },
  {
    id: 2937, day: 34, level: "N2",
    word: "もしかしたら", kana: "もしかしたら", pos: "부사",
    mean: "어쩌면",
    syn: ["ひょっとすると"],
    collocations: [{ ja: "もしかしたら雨が降るかも", ko: "어쩌면 비가 올지도" }],
    examples: [{ type: "ex", label: "예문", ja: "もしかしたら、明日は休みかもしれない。", ko: "어쩌면 내일은 쉬는 날일지도 모른다." }]
  },
  {
    id: 2938, day: 34, level: "N2",
    word: "いわゆる", kana: "いわゆる", pos: "부사",
    mean: "이른바, 소위",
    syn: ["世に言う"],
    collocations: [{ ja: "いわゆる天才", ko: "이른바 천재" }],
    examples: [{ type: "ex", label: "예문", ja: "彼はいわゆる「仕事人間」だ。", ko: "그는 이른바 '일 중독자'다." }]
  },
  {
    id: 2939, day: 34, level: "N2",
    word: "いかなる", kana: "いかなる", pos: "부사",
    mean: "어떠한",
    syn: ["どんな"],
    collocations: [{ ja: "いかなる場合も", ko: "어떠한 경우에도" }],
    examples: [{ type: "ex", label: "예문", ja: "いかなる理由があっても、暴力は許されない。", ko: "어떠한 이유가 있어도 폭력은 용서되지 않는다." }]
  },
  {
    id: 2940, day: 34, level: "N2",
    word: "ついでに", kana: "ついでに", pos: "부사",
    mean: "하는 김에",
    syn: ["合わせて"],
    collocations: [{ ja: "ついでに買う", ko: "하는 김에 사다" }],
    examples: [{ type: "ex", label: "예문", ja: "郵便局に行くついでに、手紙を出してきて。", ko: "우체국 가는 김에 편지 좀 부치고 와." }]
  },
  {
    id: 2941, day: 34, level: "N2",
    word: "ずきずき", kana: "ずきずき", pos: "부사 (의성어·의태어)",
    mean: "욱신욱신",
    syn: ["痛む"],
    collocations: [{ ja: "頭がずきずきする", ko: "머리가 욱신욱신하다" }],
    examples: [{ type: "ex", label: "예문", ja: "虫歯がずきずき痛む。", ko: "충치가 욱신욱신 아프다." }]
  },
  {
    id: 2942, day: 34, level: "N2",
    word: "〜だらけ", kana: "だらけ", pos: "접미어",
    mean: "~투성이",
    syn: ["〜でいっぱい"],
    collocations: [{ ja: "間違いだらけ", ko: "틀린 것투성이" }, { ja: "傷だらけ", ko: "상처투성이" }],
    examples: []
  },
  {
    id: 545, day: 34, level: "N2",
    word: "密集", kana: "みっしゅう", pos: "명사",
    mean: "밀집 (한곳에 빽빽하게 모임)",
    syn: ["集中", "込み合うこと"],
    collocations: [{ ja: "住宅が密集する", ko: "목조 주택이 빽빽이 밀집하다" }, { ja: "人口の密集地帯", ko: "인구 초밀집 지대" }],
    examples: [{ type: "on", label: "음독", ja: "古い木造家屋が密集している市街地では、火災発生時に延焼が急速に拡大する危険性が極めて高い。", ko: "오래된 목조 가옥이 밀집해 있는 시가지에서는 화재 발생 시 연소가 급속히 확대될 위험이 극히 높다." }]
  },
  {
    id: 2943, day: 34, level: "N2",
    word: "当日", kana: "とうじつ", pos: "명사",
    mean: "당일",
    syn: [],
    collocations: [{ ja: "試験当日", ko: "시험 당일" }, { ja: "当日券", ko: "당일권" }],
    examples: [{ type: "ex", label: "예문", ja: "当日は雨が降らないといいが。", ko: "당일에 비가 안 오면 좋겠는데." }]
  },
  {
    id: 2944, day: 34, level: "N2",
    word: "到達", kana: "とうたつ", pos: "명사 (する동사)",
    mean: "도달",
    syn: ["達する"],
    collocations: [{ ja: "目標に到達する", ko: "목표에 도달하다" }],
    examples: [{ type: "ex", label: "예문", ja: "ついに山頂に到達した。", ko: "마침내 산 정상에 도달했다." }]
  },
  {
    id: 2945, day: 34, level: "N2",
    word: "盗難", kana: "とうなん", pos: "명사",
    mean: "도난",
    syn: [],
    collocations: [{ ja: "盗難に遭う", ko: "도난을 당하다" }, { ja: "盗難届", ko: "도난 신고" }],
    examples: [{ type: "ex", label: "예문", ja: "自転車の盗難に遭った。", ko: "자전거를 도난당했다." }]
  },
  {
    id: 2946, day: 34, level: "N2",
    word: "特色", kana: "とくしょく", pos: "명사",
    mean: "특색",
    syn: ["特徴"],
    collocations: [{ ja: "特色がある", ko: "특색이 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "この学校の特色は国際教育だ。", ko: "이 학교의 특색은 국제 교육이다." }]
  },
  {
    id: 2947, day: 34, level: "N2",
    word: "特定", kana: "とくてい", pos: "명사 (する동사)",
    mean: "특정",
    syn: [],
    collocations: [{ ja: "原因を特定する", ko: "원인을 특정하다" }, { ja: "特定の人", ko: "특정한 사람" }],
    examples: [{ type: "ex", label: "예문", ja: "警察は犯人を特定した。", ko: "경찰은 범인을 특정했다." }]
  },
  {
    id: 2948, day: 34, level: "N2",
    word: "独自", kana: "どくじ", pos: "명사",
    mean: "독자, 고유",
    syn: ["オリジナル"],
    collocations: [{ ja: "独自の方法", ko: "독자적인 방법" }],
    examples: [{ type: "ex", label: "예문", ja: "この会社は独自の技術を開発した。", ko: "이 회사는 독자적인 기술을 개발했다." }]
  },
  {
    id: 546, day: 34, level: "N2",
    word: "免除", kana: "めんじょ", pos: "명사",
    mean: "면제 (의무나 요금을 면해 줌)",
    syn: ["許すこと", "免れさせること"],
    collocations: [{ ja: "税金を免除する", ko: "세금을 감면/면제하다" }, { ja: "学費の免除", ko: "장학 혜택에 따른 학비 면제" }],
    examples: [{ type: "on", label: "음독", ja: "学業成績が極めて優秀でありながら経済的に困窮している学生に対し、年間の授業料全額免除の措置が取られた。", ko: "학업 성적이 지극히 우수하면서도 경제적으로 곤궁한 학생에 대해 연간 수업료 전액 면제 조치가 취해졌다." }]
  },
  {
    id: 2949, day: 34, level: "N2",
    word: "匿名", kana: "とくめい", pos: "명사",
    mean: "익명",
    syn: [],
    collocations: [{ ja: "匿名で投稿する", ko: "익명으로 투고하다" }],
    examples: [{ type: "ex", label: "예문", ja: "匿名の手紙が届いた。", ko: "익명의 편지가 도착했다." }]
  },
  {
    id: 2950, day: 34, level: "N2",
    word: "突破", kana: "とっぱ", pos: "명사 (する동사)",
    mean: "돌파",
    syn: [],
    collocations: [{ ja: "難関を突破する", ko: "난관을 돌파하다" }],
    examples: [{ type: "ex", label: "예문", ja: "ついに入場者数が百万人を突破した。", ko: "마침내 입장객 수가 백만 명을 돌파했다." }]
  },
  {
    id: 2951, day: 34, level: "N2",
    word: "内部", kana: "ないぶ", pos: "명사",
    mean: "내부",
    syn: ["中"],
    collocations: [{ ja: "内部の事情", ko: "내부 사정" }],
    examples: [{ type: "ex", label: "예문", ja: "会社の内部で問題が起きた。", ko: "회사 내부에서 문제가 일어났다." }]
  },
  {
    id: 2952, day: 34, level: "N2",
    word: "仲直り", kana: "なかなおり", pos: "명사 (する동사)",
    mean: "화해",
    syn: ["和解"],
    collocations: [{ ja: "友達と仲直りする", ko: "친구와 화해하다" }],
    examples: [{ type: "ex", label: "예문", ja: "けんかした友達とすぐに仲直りした。", ko: "싸운 친구와 금방 화해했다." }]
  },
  {
    id: 2953, day: 34, level: "N2",
    word: "謎", kana: "なぞ", pos: "명사",
    mean: "수수께끼",
    syn: ["ミステリー"],
    collocations: [{ ja: "謎を解く", ko: "수수께끼를 풀다" }, { ja: "謎が多い", ko: "수수께끼가 많다" }],
    examples: [{ type: "ex", label: "예문", ja: "この事件には謎が多い。", ko: "이 사건에는 수수께끼가 많다." }]
  },
  {
    id: 2954, day: 34, level: "N2",
    word: "人情", kana: "にんじょう", pos: "명사",
    mean: "인정",
    syn: ["思いやり"],
    collocations: [{ ja: "人情に厚い", ko: "인정이 많다" }],
    examples: [{ type: "ex", label: "예문", ja: "この町の人々は人情に厚い。", ko: "이 마을 사람들은 인정이 많다." }]
  },
  {
    id: 547, day: 34, level: "N2",
    word: "融通", kana: "ゆうずう", pos: "명사",
    mean: "융통 (돈을 돎 / 융통성, 막힘없이 변통함)",
    syn: ["融通がきく", "やりくり"],
    collocations: [{ ja: "融通が利く", ko: "융통성이 있다/상황 대처가 유연하다" }, { ja: "資金を融通する", ko: "자금을 융통해 조달하다" }],
    examples: [{ type: "on", label: "음독", ja: "規則を杓子定規に押し通すのではなく、状況の変化に応じて柔軟に融通を利かせる姿勢が求められる。", ko: "규칙을 판에 박힌 듯 고집할 것이 아니라 상황 변화에 따라 유연하게 융통성을 발휘하는 태도가 요구된다." }]
  },
  {
    id: 2955, day: 34, level: "N2",
    word: "年齢", kana: "ねんれい", pos: "명사",
    mean: "연령, 나이",
    syn: ["年"],
    collocations: [{ ja: "年齢制限", ko: "연령 제한" }, { ja: "年齢を問わず", ko: "나이를 불문하고" }],
    examples: [{ type: "ex", label: "예문", ja: "年齢を問わず誰でも参加できる。", ko: "나이를 불문하고 누구든 참가할 수 있다." }]
  },
  {
    id: 2956, day: 34, level: "N2",
    word: "能率", kana: "のうりつ", pos: "명사",
    mean: "능률",
    syn: ["効率"],
    collocations: [{ ja: "能率が上がる", ko: "능률이 오르다" }],
    examples: [{ type: "ex", label: "예문", ja: "朝のほうが仕事の能率が上がる。", ko: "아침이 업무 능률이 오른다." }]
  },
  {
    id: 2957, day: 34, level: "N2",
    word: "配達", kana: "はいたつ", pos: "명사 (する동사)",
    mean: "배달",
    syn: ["届ける"],
    collocations: [{ ja: "新聞配達", ko: "신문 배달" }, { ja: "配達料", ko: "배달료" }],
    examples: [{ type: "ex", label: "예문", ja: "荷物は明日の午前中に配達される。", ko: "짐은 내일 오전 중에 배달된다." }]
  },
  {
    id: 2958, day: 34, level: "N2",
    word: "破損", kana: "はそん", pos: "명사 (する동사)",
    mean: "파손",
    syn: ["壊れる"],
    collocations: [{ ja: "破損する", ko: "파손되다" }],
    examples: [{ type: "ex", label: "예문", ja: "輸送中に商品が破損した。", ko: "수송 중에 상품이 파손되었다." }]
  },
  {
    id: 2959, day: 34, level: "N2",
    word: "発生", kana: "はっせい", pos: "명사 (する동사)",
    mean: "발생",
    syn: ["起こる"],
    collocations: [{ ja: "事故が発生する", ko: "사고가 발생하다" }],
    examples: [{ type: "ex", label: "예문", ja: "台風が発生した。", ko: "태풍이 발생했다." }]
  },
  {
    id: 2960, day: 34, level: "N2",
    word: "発送", kana: "はっそう", pos: "명사 (する동사)",
    mean: "발송",
    syn: ["送る"],
    collocations: [{ ja: "商品を発送する", ko: "상품을 발송하다" }],
    examples: [{ type: "ex", label: "예문", ja: "注文の品は本日発送しました。", ko: "주문하신 물건은 오늘 발송했습니다." }]
  },
  {
    id: 2961, day: 34, level: "N2",
    word: "発売", kana: "はつばい", pos: "명사 (する동사)",
    mean: "발매",
    syn: ["売り出す"],
    collocations: [{ ja: "新発売", ko: "신발매" }, { ja: "発売日", ko: "발매일" }],
    examples: [{ type: "ex", label: "예문", ja: "新しいゲームが来月発売される。", ko: "새 게임이 다음 달 발매된다." }]
  },
  {
    id: 548, day: 34, level: "N2",
    word: "優位", kana: "ゆうい", pos: "명사",
    mean: "우위 (상대보다 우월한 위치)",
    syn: ["有利", "優勢"],
    collocations: [{ ja: "優位に立つ", ko: "유리한 우위에 서다" }, { ja: "競争優位を確立する", ko: "시장 경쟁 우위를 확립하다" }],
    examples: [{ type: "on", label: "음독", ja: "独自開発した特許技術を武器にすることで、グローバル市場における圧倒的な競争優位を築き上げた。", ko: "독자 개발한 특허 기술을 무기로 삼아 글로벌 시장에서의 압도적인 경쟁 우위를 구축해 냈다." }]
  },
  {
    id: 2962, day: 34, level: "N1",
    word: "多大", kana: "ただい", pos: "な형용사",
    mean: "막대함, 지대함",
    syn: ["大きな"],
    collocations: [{ ja: "多大な影響", ko: "지대한 영향" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の研究は医学に多大な貢献をした。", ko: "그의 연구는 의학에 지대한 공헌을 했다." }]
  },
  {
    id: 2963, day: 34, level: "N1",
    word: "有益", kana: "ゆうえき", pos: "な형용사",
    mean: "유익함",
    syn: ["役に立つ"],
    collocations: [{ ja: "有益な情報", ko: "유익한 정보" }],
    examples: [{ type: "ex", label: "예문", ja: "この本には有益な情報がたくさんある。", ko: "이 책에는 유익한 정보가 많다." }]
  },
  {
    id: 456, day: 34, level: "N1",
    word: "もしくは", kana: "もしくは", pos: "부사/접속사",
    mean: "또는, 혹은",
    syn: ["または", "あるいは"],
    collocations: [{ ja: "郵送もしくは持参", ko: "우편 혹은 직접 방문 제출" }, { ja: "本人もしくは代理人", ko: "본인 또는 법정 대리인" }],
    examples: [{ type: "ex", label: "예문", ja: "申請書に必要事項を明記の上、今月末までに郵送もしくはオンライン窓口から提出してください。", ko: "신청서에 필요 사항을 명기한 후 이달 말까지 우편 또는 온라인 창구를 통해 제출해 주십시오." }]
  },
  {
    id: 2964, day: 34, level: "N1",
    word: "有意義", kana: "ゆういぎ", pos: "な형용사",
    mean: "유의미함, 뜻깊음",
    syn: ["意義のある"],
    collocations: [{ ja: "有意義な時間", ko: "뜻깊은 시간" }],
    examples: [{ type: "ex", label: "예문", ja: "留学生活は有意義なものだった。", ko: "유학 생활은 뜻깊었다." }]
  },
  {
    id: 466, day: 34, level: "N1",
    word: "推定", kana: "すいてい", pos: "명사",
    mean: "추정",
    syn: ["推測", "見積もり"],
    collocations: [{ ja: "推定年齢", ko: "추정 나이" }, { ja: "被害総額の推定", ko: "피해 총액의 추정" }],
    examples: [{ type: "on", label: "음독", ja: "発掘された恐竜の化石の骨格構造から、この生物が生きていた年代は約一億年前であると推定される。", ko: "발굴된 공룡 화석의 골격 구조로부터 이 생물이 살았던 연대는 약 1억 년 전이라고 추정된다." }]
  },
  {
    id: 2965, day: 34, level: "N1",
    word: "不透明", kana: "ふとうめい", pos: "な형용사",
    mean: "불투명함",
    syn: ["不確かな"],
    collocations: [{ ja: "先行きが不透明だ", ko: "앞날이 불투명하다" }],
    examples: [{ type: "ex", label: "예문", ja: "経済の先行きは依然として不透明だ。", ko: "경제의 앞날은 여전히 불투명하다." }]
  },
  {
    id: 469, day: 34, level: "N1",
    word: "勢力", kana: "せいりょく", pos: "명사",
    mean: "세력, 기세",
    syn: ["勢い", "力"],
    collocations: [{ ja: "勢力を伸ばす", ko: "세력을 확장하다" }, { ja: "台風の勢力", ko: "태풍의 위력과 중심 세력" }],
    examples: [{ type: "on", label: "음독", ja: "新興のITベンチャー企業が画期的なサービスを武器に、既存の巨大財閥の勢力を脅かすまでに台頭した。", ko: "신흥 IT 벤처기업이 획기적인 서비스를 무기로 기존 거대 재벌의 세력을 위협할 정도로 부상했다." }]
  },
  {
    id: 2966, day: 34, level: "N1",
    word: "不当", kana: "ふとう", pos: "な형용사",
    mean: "부당함",
    syn: ["不正な"],
    collocations: [{ ja: "不当な扱い", ko: "부당한 대우" }],
    examples: [{ type: "ex", label: "예문", ja: "不当な解雇に抗議した。", ko: "부당한 해고에 항의했다." }]
  },
  {
    id: 2967, day: 34, level: "N1",
    word: "明瞭", kana: "めいりょう", pos: "な형용사",
    mean: "명료함",
    syn: ["明確な"],
    collocations: [{ ja: "明瞭な発音", ko: "명료한 발음" }],
    examples: [{ type: "ex", label: "예문", ja: "説明は簡潔で明瞭だった。", ko: "설명은 간결하고 명료했다." }]
  },
  // ==========================================
  // [DAY 35] N2 필수 + N1 · 61개
  // ==========================================
  {
    id: 2968, day: 35, level: "N2",
    word: "放り出す", kana: "ほうりだす", pos: "동사 (타동사)",
    mean: "내던지다, 포기하다",
    syn: ["投げ出す"],
    collocations: [{ ja: "仕事を放り出す", ko: "일을 내팽개치다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は途中で仕事を放り出して帰ってしまった。", ko: "그는 도중에 일을 내팽개치고 가 버렸다." }]
  },
  {
    id: 2969, day: 35, level: "N2",
    word: "誇る", kana: "ほこる", pos: "동사 (타동사)",
    mean: "자랑하다",
    syn: ["自慢する"],
    collocations: [{ ja: "歴史を誇る", ko: "역사를 자랑하다" }, { ja: "世界に誇る", ko: "세계에 자랑하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この寺は千年の歴史を誇る。", ko: "이 절은 천 년의 역사를 자랑한다." }]
  },
  {
    id: 497, day: 35, level: "N2",
    word: "試みる", kana: "こころみる", pos: "동사 (1단 타동사)",
    mean: "시도해보다, 시험 삼아 해보다",
    syn: ["やってみる", "試す"],
    collocations: [{ ja: "脱出を試みる", ko: "탈출을 시도하다" }, { ja: "新たなアプローチを試みる", ko: "새로운 접근 방식을 시도하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "未解決の難問に対して、既存の枠組みにとらわれない斬新な解法を果敢に試みた。", ko: "미해결 난제에 대해 기존의 틀에 얽매이지 않는 참신한 해법을 과감하게 시도했다." }, { type: "on", label: "음독", ja: "数え切れないほどの実験(じっけん)を重ねた末に、画期的な新素材の開発に成功した。", ko: "셀 수 없을 만큼의 실험을 거듭한 끝에 획기적인 신소재 개발에 성공했다." }]
  },
  {
    id: 2970, day: 35, level: "N2",
    word: "見渡す", kana: "みわたす", pos: "동사 (타동사)",
    mean: "멀리 바라보다, 둘러보다",
    syn: ["眺める"],
    collocations: [{ ja: "海を見渡す", ko: "바다를 바라보다" }, { ja: "全体を見渡す", ko: "전체를 둘러보다" }],
    examples: [{ type: "ex", label: "예문", ja: "山頂から町全体が見渡せる。", ko: "산 정상에서 마을 전체가 내려다보인다." }]
  },
  {
    id: 2971, day: 35, level: "N2",
    word: "見抜く", kana: "みぬく", pos: "동사 (타동사)",
    mean: "간파하다, 꿰뚫어 보다",
    syn: ["見破る"],
    collocations: [{ ja: "嘘を見抜く", ko: "거짓말을 간파하다" }],
    examples: [{ type: "ex", label: "예문", ja: "母は私の嘘をすぐに見抜いた。", ko: "어머니는 내 거짓말을 금방 간파했다." }]
  },
  {
    id: 2972, day: 35, level: "N2",
    word: "見出す", kana: "みいだす", pos: "동사 (타동사)",
    mean: "찾아내다, 발견하다",
    syn: ["見つける"],
    collocations: [{ ja: "価値を見出す", ko: "가치를 찾아내다" }, { ja: "解決策を見出す", ko: "해결책을 찾아내다" }],
    examples: [{ type: "ex", label: "예문", ja: "仕事に生きがいを見出した。", ko: "일에서 삶의 보람을 찾았다." }]
  },
  {
    id: 2973, day: 35, level: "N2",
    word: "持ち直す", kana: "もちなおす", pos: "동사 (자동사)",
    mean: "회복되다, 고쳐 쥐다",
    syn: ["回復する"],
    collocations: [{ ja: "景気が持ち直す", ko: "경기가 회복되다" }, { ja: "病状が持ち直す", ko: "병세가 호전되다" }],
    examples: [{ type: "ex", label: "예문", ja: "景気はようやく持ち直してきた。", ko: "경기는 겨우 회복세로 돌아섰다." }]
  },
  {
    id: 2974, day: 35, level: "N2",
    word: "譲り合う", kana: "ゆずりあう", pos: "동사 (타동사)",
    mean: "서로 양보하다",
    syn: [],
    collocations: [{ ja: "席を譲り合う", ko: "서로 자리를 양보하다" }],
    examples: [{ type: "ex", label: "예문", ja: "狭い道では車が譲り合って通る。", ko: "좁은 길에서는 차가 서로 양보하며 지나간다." }]
  },
  {
    id: 502, day: 35, level: "N2",
    word: "途切れる", kana: "とぎれる", pos: "동사 (1단 자동사)",
    mean: "끊기다, 중단되다, 끊어졌다 이어지다",
    syn: ["切れる", "中断する"],
    collocations: [{ ja: "話が途切れる", ko: "이야기 흐름이 끊기다" }, { ja: "連絡が途切れる", ko: "연락이 두절되다/끊기다" }],
    examples: [{ type: "kun", label: "훈독", ja: "山間部のトンネルに入った途端、電波が完全に途切れて通話が切れてしまった。", ko: "산간 터널에 들어서자마자 전파가 완전히 끊겨 통화가 끊어지고 말았다." }]
  },
  {
    id: 2975, day: 35, level: "N2",
    word: "読み取る", kana: "よみとる", pos: "동사 (타동사)",
    mean: "읽어 내다, 파악하다",
    syn: ["理解する"],
    collocations: [{ ja: "意図を読み取る", ko: "의도를 파악하다" }],
    examples: [{ type: "ex", label: "예문", ja: "グラフから読み取れることを答えなさい。", ko: "그래프에서 읽어 낼 수 있는 것을 답하시오." }]
  },
  {
    id: 2976, day: 35, level: "N2",
    word: "寄り添う", kana: "よりそう", pos: "동사 (자동사)",
    mean: "다가붙다, 곁에 있어 주다",
    syn: [],
    collocations: [{ ja: "患者に寄り添う", ko: "환자의 곁을 지키다" }],
    examples: [{ type: "ex", label: "예문", ja: "相手の気持ちに寄り添うことが大切だ。", ko: "상대의 마음에 다가가는 것이 중요하다." }]
  },
  {
    id: 2977, day: 35, level: "N2",
    word: "弱まる", kana: "よわまる", pos: "동사 (자동사)",
    mean: "약해지다",
    syn: ["衰える"],
    collocations: [{ ja: "風が弱まる", ko: "바람이 약해지다" }, { ja: "勢いが弱まる", ko: "기세가 약해지다" }],
    examples: [{ type: "ex", label: "예문", ja: "夕方になって雨が弱まった。", ko: "저녁이 되자 비가 약해졌다." }]
  },
  {
    id: 2978, day: 35, level: "N2",
    word: "根強い", kana: "ねづよい", pos: "い형용사",
    mean: "뿌리 깊다",
    syn: ["しぶとい"],
    collocations: [{ ja: "根強い人気", ko: "꾸준한 인기" }, { ja: "根強い偏見", ko: "뿌리 깊은 편견" }],
    examples: [{ type: "ex", label: "예문", ja: "その歌手は今も根強い人気がある。", ko: "그 가수는 지금도 꾸준한 인기가 있다." }]
  },
  {
    id: 2979, day: 35, level: "N2",
    word: "過剰", kana: "かじょう", pos: "な형용사",
    mean: "과잉임",
    syn: ["過度な"],
    collocations: [{ ja: "過剰な期待", ko: "과잉 기대" }],
    examples: [{ type: "ex", label: "예문", ja: "過剰な包装は資源の無駄だ。", ko: "과잉 포장은 자원 낭비다." }]
  },
  {
    id: 2980, day: 35, level: "N2",
    word: "揺るぎない", kana: "ゆるぎない", pos: "い형용사",
    mean: "흔들림 없다, 확고하다",
    syn: ["確固たる"],
    collocations: [{ ja: "揺るぎない信念", ko: "확고한 신념" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女は揺るぎない自信を持っている。", ko: "그녀는 흔들림 없는 자신감을 지니고 있다." }]
  },
  {
    id: 515, day: 35, level: "N2",
    word: "ややこしい", kana: "ややこしい", pos: "い형용사",
    mean: "복잡하다, 까다롭다, 뒤얽혀 알기 어렵다",
    syn: ["複雑", "面倒"],
    collocations: [{ ja: "ややこしい問題", ko: "복잡하게 얽힌 문제" }, { ja: "話がややこしくなる", ko: "일/이야기가 복잡해지다" }],
    examples: [{ type: "kun", label: "훈독", ja: "当事者同士の個人的な感情が絡むと、金銭トラブルの解決は一層ややこしくなってしまう。", ko: "당사자들 간의 개인적 감정이 얽히면 금전 분쟁의 해결은 한층 더 복잡해지고 만다." }]
  },
  {
    id: 2981, day: 35, level: "N2",
    word: "不安定", kana: "ふあんてい", pos: "な형용사",
    mean: "불안정함",
    syn: [],
    collocations: [{ ja: "不安定な天気", ko: "불안정한 날씨" }],
    examples: [{ type: "ex", label: "예문", ja: "最近、天気が不安定だ。", ko: "요즘 날씨가 불안정하다." }]
  },
  {
    id: 2982, day: 35, level: "N2",
    word: "有能", kana: "ゆうのう", pos: "な형용사",
    mean: "유능함",
    syn: ["優秀な"],
    collocations: [{ ja: "有能な人材", ko: "유능한 인재" }],
    examples: [{ type: "ex", label: "예문", ja: "会社は有能な人材を求めている。", ko: "회사는 유능한 인재를 찾고 있다." }]
  },
  {
    id: 2983, day: 35, level: "N2",
    word: "レジ", kana: "レジ", pos: "외래어",
    mean: "계산대 (register)",
    syn: ["会計"],
    collocations: [{ ja: "レジに並ぶ", ko: "계산대에 줄을 서다" }],
    examples: [{ type: "ex", label: "예문", ja: "スーパーのレジは混んでいた。", ko: "슈퍼 계산대는 붐볐다." }]
  },
  {
    id: 2984, day: 35, level: "N2",
    word: "ワンパターン", kana: "ワンパターン", pos: "외래어",
    mean: "틀에 박힘 (one pattern)",
    syn: ["単調な", "マンネリ"],
    collocations: [{ ja: "ワンパターンな料理", ko: "늘 똑같은 요리" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の話はいつもワンパターンだ。", ko: "그의 이야기는 늘 똑같다." }]
  },
  {
    id: 451, day: 35, level: "N2",
    word: "プラットフォーム", kana: "ぷらっとふぉーむ", pos: "외래어",
    mean: "플랫폼, 공통 기반 (platform)",
    syn: ["乗り場", "基盤"],
    collocations: [{ ja: "デジタルプラットフォーム", ko: "디지털 플랫폼" }, { ja: "共通のプラットフォーム", ko: "공통의 운영 기반" }],
    examples: [{ type: "ex", label: "예문", ja: "世界中の開発者がアプリを自由に公開して取引できる巨大なオンラインプラットフォームが整備された。", ko: "전 세계 개발자가 앱을 자유롭게 공개하고 거래할 수 있는 거대한 온라인 플랫폼이 구축되었다." }]
  },
  {
    id: 2985, day: 35, level: "N2",
    word: "いちいち", kana: "いちいち", pos: "부사",
    mean: "일일이, 하나하나",
    syn: ["一つ一つ"],
    collocations: [{ ja: "いちいち文句を言う", ko: "사사건건 불평하다" }],
    examples: [{ type: "ex", label: "예문", ja: "いちいち説明しなくても分かる。", ko: "일일이 설명하지 않아도 안다." }]
  },
  {
    id: 453, day: 35, level: "N2",
    word: "いかにも", kana: "いかにも", pos: "부사",
    mean: "그야말로, 참으로 (~らしい / 〜そうだ 호응)",
    syn: ["まさに", "本当に"],
    collocations: [{ ja: "いかにも〜らしい", ko: "그야말로 딱 ~답다" }, { ja: "いかにも嬉しそうに", ko: "정말 몹시 기쁘다는 듯이" }],
    examples: [{ type: "ex", label: "예문", ja: "周囲への気配りを片時も忘れない彼の誠実な立ち振る舞いは、いかにも真のリーダーらしい。", ko: "주변을 향한 배려를 한시도 잊지 않는 그의 성실한 행동거지는 그야말로 진정한 지도자답다." }]
  },
  {
    id: 2986, day: 35, level: "N2",
    word: "いつの間にか", kana: "いつのまにか", pos: "부사",
    mean: "어느새",
    syn: ["知らないうちに"],
    collocations: [{ ja: "いつの間にか眠る", ko: "어느새 잠들다" }],
    examples: [{ type: "ex", label: "예문", ja: "いつの間にか外は暗くなっていた。", ko: "어느새 밖은 어두워져 있었다." }]
  },
  {
    id: 2987, day: 35, level: "N2",
    word: "今のところ", kana: "いまのところ", pos: "부사",
    mean: "지금으로서는",
    syn: ["現在"],
    collocations: [{ ja: "今のところ問題ない", ko: "지금으로서는 문제없다" }],
    examples: [{ type: "ex", label: "예문", ja: "今のところ、予定に変更はない。", ko: "지금으로서는 예정에 변경은 없다." }]
  },
  {
    id: 2988, day: 35, level: "N2",
    word: "ひりひり", kana: "ひりひり", pos: "부사 (의성어·의태어)",
    mean: "얼얼하게, 따끔따끔",
    syn: ["しみる"],
    collocations: [{ ja: "喉がひりひりする", ko: "목이 따끔따끔하다" }],
    examples: [{ type: "ex", label: "예문", ja: "日焼けして肌がひりひりする。", ko: "햇볕에 타서 피부가 따끔거린다." }]
  },
  {
    id: 2989, day: 35, level: "N2",
    word: "がやがや", kana: "がやがや", pos: "부사 (의성어·의태어)",
    mean: "웅성웅성",
    syn: ["騒がしい"],
    collocations: [{ ja: "がやがやした教室", ko: "웅성거리는 교실" }],
    examples: [{ type: "ex", label: "예문", ja: "会場は人々の話し声でがやがやしていた。", ko: "회장은 사람들 말소리로 웅성거렸다." }]
  },
  {
    id: 2990, day: 35, level: "N2",
    word: "要するに", kana: "ようするに", pos: "접속사",
    mean: "요컨대",
    syn: ["つまり"],
    collocations: [{ ja: "要するに", ko: "요컨대" }],
    examples: [{ type: "ex", label: "예문", ja: "要するに、君は反対なんだね。", ko: "요컨대 너는 반대라는 거구나." }]
  },
  {
    id: 2991, day: 35, level: "N2",
    word: "〜ぶり", kana: "ぶり", pos: "접미어",
    mean: "~만에, ~하는 모습",
    syn: ["〜の様子"],
    collocations: [{ ja: "三年ぶり", ko: "3년 만" }, { ja: "仕事ぶり", ko: "일하는 모습" }],
    examples: []
  },
  {
    id: 2992, day: 35, level: "N2",
    word: "〜ごと", kana: "ごと", pos: "접미어",
    mean: "~째로, ~마다",
    syn: ["〜と一緒に"],
    collocations: [{ ja: "皮ごと", ko: "껍질째" }, { ja: "週ごと", ko: "주마다" }],
    examples: []
  },
  {
    id: 2993, day: 35, level: "N2",
    word: "判明", kana: "はんめい", pos: "명사 (する동사)",
    mean: "판명",
    syn: ["分かる"],
    collocations: [{ ja: "原因が判明する", ko: "원인이 판명되다" }],
    examples: [{ type: "ex", label: "예문", ja: "調査の結果、事故の原因が判明した。", ko: "조사 결과 사고 원인이 밝혀졌다." }]
  },
  {
    id: 2994, day: 35, level: "N2",
    word: "必需品", kana: "ひつじゅひん", pos: "명사",
    mean: "필수품",
    syn: [],
    collocations: [{ ja: "生活必需品", ko: "생활필수품" }],
    examples: [{ type: "ex", label: "예문", ja: "携帯電話は今や必需品だ。", ko: "휴대전화는 이제 필수품이다." }]
  },
  {
    id: 2995, day: 35, level: "N2",
    word: "品質", kana: "ひんしつ", pos: "명사",
    mean: "품질",
    syn: ["質"],
    collocations: [{ ja: "品質管理", ko: "품질 관리" }, { ja: "品質がいい", ko: "품질이 좋다" }],
    examples: [{ type: "ex", label: "예문", ja: "この会社の製品は品質がいい。", ko: "이 회사 제품은 품질이 좋다." }]
  },
  {
    id: 2996, day: 35, level: "N2",
    word: "頻度", kana: "ひんど", pos: "명사",
    mean: "빈도",
    syn: [],
    collocations: [{ ja: "使用頻度", ko: "사용 빈도" }, { ja: "頻度が高い", ko: "빈도가 높다" }],
    examples: [{ type: "ex", label: "예문", ja: "この単語は使用頻度が高い。", ko: "이 단어는 사용 빈도가 높다." }]
  },
  {
    id: 2997, day: 35, level: "N2",
    word: "部品", kana: "ぶひん", pos: "명사",
    mean: "부품",
    syn: ["パーツ"],
    collocations: [{ ja: "部品を交換する", ko: "부품을 교환하다" }],
    examples: [{ type: "ex", label: "예문", ja: "車の部品を取り寄せた。", ko: "자동차 부품을 주문했다." }]
  },
  {
    id: 2998, day: 35, level: "N2",
    word: "分野", kana: "ぶんや", pos: "명사",
    mean: "분야",
    syn: ["領域"],
    collocations: [{ ja: "専門分野", ko: "전문 분야" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は医学の分野で有名だ。", ko: "그는 의학 분야에서 유명하다." }]
  },
  {
    id: 549, day: 35, level: "N2",
    word: "誘惑", kana: "ゆうわく", pos: "명사",
    mean: "유혹 (마음을 호려 나쁜 길로 이끎)",
    syn: ["そそのかし", "引きつけること"],
    collocations: [{ ja: "誘惑に負ける", ko: "달콤한 유혹에 굴복하다/넘어가다" }, { ja: "甘い誘惑を断ち切る", ko: "달콤한 유혹을 단호히 뿌리치다" }],
    examples: [{ type: "on", label: "음독", ja: "試験勉強に集中するためには、スマートフォンやゲームといった身近な甘い誘惑を物理的に遮断することが大切だ。", ko: "시험공부에 집중하기 위해서는 스마트폰이나 게임과 같은 주변의 달콤한 유혹을 물리적으로 차단하는 것이 중요하다." }]
  },
  {
    id: 2999, day: 35, level: "N2",
    word: "分量", kana: "ぶんりょう", pos: "명사",
    mean: "분량",
    syn: ["量"],
    collocations: [{ ja: "分量を量る", ko: "분량을 재다" }],
    examples: [{ type: "ex", label: "예문", ja: "料理は分量を守って作る。", ko: "요리는 분량을 지켜서 만든다." }]
  },
  {
    id: 3000, day: 35, level: "N2",
    word: "分類", kana: "ぶんるい", pos: "명사 (する동사)",
    mean: "분류",
    syn: ["分ける"],
    collocations: [{ ja: "種類別に分類する", ko: "종류별로 분류하다" }],
    examples: [{ type: "ex", label: "예문", ja: "図書館の本は内容によって分類されている。", ko: "도서관 책은 내용에 따라 분류되어 있다." }]
  },
  {
    id: 3001, day: 35, level: "N2",
    word: "弁償", kana: "べんしょう", pos: "명사 (する동사)",
    mean: "변상",
    syn: ["賠償"],
    collocations: [{ ja: "弁償する", ko: "변상하다" }],
    examples: [{ type: "ex", label: "예문", ja: "借りた本をなくして弁償した。", ko: "빌린 책을 잃어버려서 변상했다." }]
  },
  {
    id: 3002, day: 35, level: "N2",
    word: "返却", kana: "へんきゃく", pos: "명사 (する동사)",
    mean: "반납",
    syn: ["返す"],
    collocations: [{ ja: "本を返却する", ko: "책을 반납하다" }, { ja: "返却期限", ko: "반납 기한" }],
    examples: [{ type: "ex", label: "예문", ja: "図書館に本を返却した。", ko: "도서관에 책을 반납했다." }]
  },
  {
    id: 3003, day: 35, level: "N2",
    word: "方角", kana: "ほうがく", pos: "명사",
    mean: "방향, 방위",
    syn: ["方向"],
    collocations: [{ ja: "方角が分からない", ko: "방향을 모르겠다" }],
    examples: [{ type: "ex", label: "예문", ja: "駅はどちらの方角ですか。", ko: "역은 어느 방향입니까?" }]
  },
  {
    id: 3004, day: 35, level: "N2",
    word: "方向", kana: "ほうこう", pos: "명사",
    mean: "방향",
    syn: ["方角"],
    collocations: [{ ja: "方向転換", ko: "방향 전환" }, { ja: "方向音痴", ko: "길치" }],
    examples: [{ type: "ex", label: "예문", ja: "私はひどい方向音痴だ。", ko: "나는 심한 길치다." }]
  },
  {
    id: 551, day: 35, level: "N2",
    word: "利害", kana: "りがい", pos: "명사",
    mean: "이해관계 (이익과 손해)",
    syn: ["損得", "利益と損害"],
    collocations: [{ ja: "利害が一致する", ko: "이해관계가 맞아떨어지다" }, { ja: "利害の対立", ko: "이해관계의 첨예한 대립" }],
    examples: [{ type: "on", label: "음독", ja: "各国の複雑な利害が激しく衝突する国際交渉の場にあって、全員が納得できる妥協点を粘り強く模索する。", ko: "각국의 복잡한 이해관계가 첨예하게 충돌하는 국제 협상 현장에서 전원이 납득할 수 있는 타협점을 끈기 있게 모색하다." }]
  },
  {
    id: 3005, day: 35, level: "N2",
    word: "報酬", kana: "ほうしゅう", pos: "명사",
    mean: "보수",
    syn: ["謝礼"],
    collocations: [{ ja: "報酬を受け取る", ko: "보수를 받다" }],
    examples: [{ type: "ex", label: "예문", ja: "仕事に見合った報酬が欲しい。", ko: "일에 걸맞은 보수를 받고 싶다." }]
  },
  {
    id: 3006, day: 35, level: "N2",
    word: "補充", kana: "ほじゅう", pos: "명사 (する동사)",
    mean: "보충",
    syn: ["補う"],
    collocations: [{ ja: "人員を補充する", ko: "인원을 보충하다" }],
    examples: [{ type: "ex", label: "예문", ja: "コピー用紙を補充しておいた。", ko: "복사 용지를 보충해 두었다." }]
  },
  {
    id: 3007, day: 35, level: "N2",
    word: "保証", kana: "ほしょう", pos: "명사 (する동사)",
    mean: "보증",
    syn: ["請け合う"],
    collocations: [{ ja: "品質を保証する", ko: "품질을 보증하다" }, { ja: "保証書", ko: "보증서" }],
    examples: [{ type: "ex", label: "예문", ja: "この製品には一年間の保証が付いている。", ko: "이 제품에는 1년간 보증이 붙어 있다." }]
  },
  {
    id: 3008, day: 35, level: "N2",
    word: "補足", kana: "ほそく", pos: "명사 (する동사)",
    mean: "보충, 보족",
    syn: ["付け加える"],
    collocations: [{ ja: "補足説明", ko: "보충 설명" }],
    examples: [{ type: "ex", label: "예문", ja: "先ほどの説明に少し補足します。", ko: "아까 설명에 조금 보충하겠습니다." }]
  },
  {
    id: 3009, day: 35, level: "N2",
    word: "保護", kana: "ほご", pos: "명사 (する동사)",
    mean: "보호",
    syn: ["守る"],
    collocations: [{ ja: "自然保護", ko: "자연 보호" }, { ja: "個人情報の保護", ko: "개인 정보 보호" }],
    examples: [{ type: "ex", label: "예문", ja: "野生動物を保護する活動をしている。", ko: "야생 동물을 보호하는 활동을 하고 있다." }]
  },
  {
    id: 3010, day: 35, level: "N2",
    word: "本番", kana: "ほんばん", pos: "명사",
    mean: "실전, 본방",
    syn: ["本番の試合"],
    collocations: [{ ja: "本番に強い", ko: "실전에 강하다" }],
    examples: [{ type: "ex", label: "예문", ja: "練習ではうまくいったが、本番で緊張した。", ko: "연습 때는 잘됐는데 실전에서 긴장했다." }]
  },
  {
    id: 553, day: 35, level: "N2",
    word: "流出", kana: "りゅうしゅつ", pos: "명사",
    mean: "유출 (밖으로 흘러나감)",
    syn: ["流れ出ること", "漏れ"],
    collocations: [{ ja: "情報が流出する", ko: "중요 정보가 외부로 유출되다" }, { ja: "人材の流出", ko: "고급 두뇌 및 인재의 유출" }],
    examples: [{ type: "on", label: "음독", ja: "不正アクセスによって数万人分の個人情報が外部へ流出した疑いがあり、専門チームによる緊急調査が開始された。", ko: "부정 접근으로 수만 명분의 개인정보가 외부로 유출된 의혹이 있어 전문 팀에 의한 긴급 조사가 시작되었다." }]
  },
  {
    id: 3011, day: 35, level: "N2",
    word: "見込み", kana: "みこみ", pos: "명사",
    mean: "전망, 가망",
    syn: ["予想", "見通し"],
    collocations: [{ ja: "見込みがある", ko: "가망이 있다" }, { ja: "完成の見込み", ko: "완성 전망" }],
    examples: [{ type: "ex", label: "예문", ja: "工事は来月完成する見込みだ。", ko: "공사는 다음 달 완성될 전망이다." }]
  },
  {
    id: 3012, day: 35, level: "N2",
    word: "見通し", kana: "みとおし", pos: "명사",
    mean: "전망, 예측",
    syn: ["見込み"],
    collocations: [{ ja: "見通しが立つ", ko: "전망이 서다" }, { ja: "見通しが甘い", ko: "예측이 안이하다" }],
    examples: [{ type: "ex", label: "예문", ja: "景気回復の見通しはまだ立たない。", ko: "경기 회복의 전망은 아직 서지 않는다." }]
  },
  {
    id: 486, day: 35, level: "N1",
    word: "動揺", kana: "どうよう", pos: "명사",
    mean: "동요 (마음이 흔들림 / 사회적 혼란)",
    syn: ["揺れ動くこと", "不安"],
    collocations: [{ ja: "心が動揺する", ko: "마음이 크게 요동치다" }, { ja: "動揺を隠せない", ko: "당황과 동요를 감추지 못하다" }],
    examples: [{ type: "on", label: "음독", ja: "突如として主力工場の爆発事故の凶報が飛び込んできたが、支店長は少しも動揺を見せず的確に指示を出した。", ko: "갑작스럽게 주력 공장 폭발 사고라는 흉보가 날아들었으나 지점장은 조금도 동요하지 않고 정확하게 지시를 내렸다." }]
  },
  {
    id: 3013, day: 35, level: "N1",
    word: "有力", kana: "ゆうりょく", pos: "な형용사",
    mean: "유력함",
    syn: [],
    collocations: [{ ja: "有力な候補", ko: "유력한 후보" }],
    examples: [{ type: "ex", label: "예문", ja: "彼が次期社長の有力な候補だ。", ko: "그가 차기 사장의 유력한 후보다." }]
  },
  {
    id: 489, day: 35, level: "N1",
    word: "拝借", kana: "はいしゃく", pos: "명사",
    mean: "빌려 씀, 잠시 빎 (겸양어)",
    syn: ["借りること"],
    collocations: [{ ja: "お知恵を拝借する", ko: "귀중한 고견과 지혜를 빌리다" }, { ja: "お手を拝借", ko: "잠시 손뼉을 쳐주시길 청하다" }],
    examples: [{ type: "on", label: "음독", ja: "難解な法解釈の論点を整理するに当たり、学界の重鎮である先生の卓越したお知恵を拝借したく存じます。", ko: "난해한 법 해석의 쟁점을 정리함에 있어 학계의 중진이신 선생님의 탁월한 고견을 빌리고자 합니다." }]
  },
  {
    id: 3014, day: 35, level: "N1",
    word: "過酷", kana: "かこく", pos: "な형용사",
    mean: "가혹함",
    syn: ["厳しい"],
    collocations: [{ ja: "過酷な労働", ko: "가혹한 노동" }],
    examples: [{ type: "ex", label: "예문", ja: "過酷な環境で働く人々がいる。", ko: "가혹한 환경에서 일하는 사람들이 있다." }]
  },
  {
    id: 3015, day: 35, level: "N1",
    word: "健全", kana: "けんぜん", pos: "な형용사",
    mean: "건전함",
    syn: ["健康な"],
    collocations: [{ ja: "健全な社会", ko: "건전한 사회" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもの健全な成長を願う。", ko: "아이의 건전한 성장을 바란다." }]
  },
  {
    id: 491, day: 35, level: "N1",
    word: "塞ぐ", kana: "ふさぐ", pos: "동사 (5단 자/타동사)",
    mean: "막다, 가로막다, (기분이) 우울하다",
    syn: ["閉じる", "ふさぐ"],
    collocations: [{ ja: "耳を塞ぐ", ko: "귀를 틀어막다" }, { ja: "気が塞ぐ", ko: "기분이 우울하게 가라앉다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "あまりの爆音に耐えきれず、思わず両手で耳を強く塞いだ。", ko: "엄청난 굉음을 견디지 못하고 나도 모르게 양손으로 귀를 세게 틀어막았다." }],
    polysemy: [
      { def: "① 구멍·틈새·통로를 다른 물건으로 메워 막다", ja: "寒風が吹き込む窓枠の隙間をテープで完全に塞ぐ。", ko: "찬바람이 들이치는 창틀 틈새를 테이프로 완전히 막다." },
      { def: "② 앞길이나 통행로를 가로막아 방해하다", ja: "倒木が道路の真ん中を塞いでおり、車両の通行が完全にストップした。", ko: "쓰러진 나무가 도로 한가운데를 가로막고 있어 차량 통행이 완전히 멈췄다." },
      { def: "③ 마음에 근심이나 울화가 차서 기분이 울적하고 우울하다", ja: "連日の雨と閉塞感から気が塞ぎ、何をする気力も湧いてこない。", ko: "연일 계속되는 비와 답답함 때문에 기분이 우울해져 아무것도 할 기력이 나지 않는다." }
    ]
  },
  {
    id: 3016, day: 35, level: "N1",
    word: "画一的", kana: "かくいつてき", pos: "な형용사",
    mean: "획일적",
    syn: ["一律の"],
    collocations: [{ ja: "画一的な教育", ko: "획일적인 교육" }],
    examples: [{ type: "ex", label: "예문", ja: "画一的な教育では個性が育たない。", ko: "획일적인 교육으로는 개성이 자라지 않는다." }]
  },
  {
    id: 499, day: 35, level: "N1",
    word: "懲りる", kana: "こりる", pos: "동사 (1단 자동사)",
    mean: "질리다, 혼나서 데다, 넌더리나다",
    syn: ["こりごりする", "反省する"],
    collocations: [{ ja: "失敗に懲りる", ko: "실패에 덴통 혼나서 질리다" }, { ja: "懲りない人", ko: "혼나고도 정신 못 차리는 사람" }],
    examples: [{ type: "kun", label: "훈독", ja: "投資詐欺で手痛い大損害を被ったはずなのに、彼はまだ懲りずに怪しい儲け話に手を出している。", ko: "투자 사기로 쓰라린 큰 손실을 입었을 텐데도 그는 아직도 덴통 혼나지 않고 수상한 돈벌이에 손을 대고 있다." }]
  },
  // ==========================================
  // [DAY 36] N2 필수 + N1 · 58개
  // ==========================================
  {
    id: 3017, day: 36, level: "N2",
    word: "弱める", kana: "よわめる", pos: "동사 (타동사)",
    mean: "약하게 하다",
    syn: [],
    collocations: [{ ja: "火を弱める", ko: "불을 약하게 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "沸騰したら火を弱めてください。", ko: "끓으면 불을 약하게 해 주세요." }]
  },
  {
    id: 3018, day: 36, level: "N2",
    word: "分かち合う", kana: "わかちあう", pos: "동사 (타동사)",
    mean: "함께 나누다",
    syn: ["共有する"],
    collocations: [{ ja: "喜びを分かち合う", ko: "기쁨을 함께 나누다" }],
    examples: [{ type: "ex", label: "예문", ja: "優勝の喜びをチーム全員で分かち合った。", ko: "우승의 기쁨을 팀 전원이 함께 나눴다." }]
  },
  {
    id: 505, day: 36, level: "N2",
    word: "引き締める", kana: "ひきしめる", pos: "동사 (1단 타동사)",
    mean: "바짝 조이다, 긴장하다, 다잡다",
    syn: ["締める", "緊張させる"],
    collocations: [{ ja: "気を引き締める", ko: "마음을 바짝 다잡다/긴장하다" }, { ja: "財布の紐を引き締める", ko: "지갑 끈을 바짝 졸라매다(절약하다)" }],
    examples: [{ type: "kun", label: "훈독", ja: "予選を首位で通過したからといって決して油断せず、決勝に向けてもう一度気を引き締めた。", ko: "예선을 1위로 통과했다고 해서 결코 방심하지 않고 결승을 향해 다시 한번 마음을 다잡았다." }]
  },
  {
    id: 3019, day: 36, level: "N2",
    word: "割り切る", kana: "わりきる", pos: "동사 (타동사)",
    mean: "딱 잘라 생각하다, 나누어떨어지다",
    syn: [],
    collocations: [{ ja: "仕事と割り切る", ko: "일이라고 딱 잘라 생각하다" }],
    examples: [{ type: "ex", label: "예문", ja: "これも仕事だと割り切って引き受けた。", ko: "이것도 일이라고 딱 잘라 생각하고 맡았다." }]
  },
  {
    id: 3020, day: 36, level: "N2",
    word: "戸締まり", kana: "とじまり", pos: "명사 (する동사)",
    mean: "문단속",
    syn: [],
    collocations: [{ ja: "戸締まりを確認する", ko: "문단속을 확인하다" }],
    examples: [{ type: "ex", label: "예문", ja: "出かける前にしっかり戸締まりした。", ko: "외출 전에 확실히 문단속을 했다." }]
  },
  {
    id: 3021, day: 36, level: "N2",
    word: "見違える", kana: "みちがえる", pos: "동사 (타동사)",
    mean: "몰라볼 정도로 달라지다",
    syn: [],
    collocations: [{ ja: "見違えるほどきれいになる", ko: "몰라볼 만큼 깨끗해지다" }],
    examples: [{ type: "ex", label: "예문", ja: "リフォームして、家が見違えるほどきれいになった。", ko: "리모델링해서 집이 몰라볼 만큼 깨끗해졌다." }]
  },
  {
    id: 3022, day: 36, level: "N2",
    word: "言い付ける", kana: "いいつける", pos: "동사 (타동사)",
    mean: "명령하다, 고자질하다",
    syn: ["命じる"],
    collocations: [{ ja: "用事を言い付ける", ko: "심부름을 시키다" }, { ja: "先生に言い付ける", ko: "선생님께 이르다" }],
    examples: [{ type: "ex", label: "예문", ja: "弟は何でもすぐ母に言い付ける。", ko: "남동생은 뭐든 금방 엄마한테 이른다." }]
  },
  {
    id: 3023, day: 36, level: "N2",
    word: "落ち合う", kana: "おちあう", pos: "동사 (자동사)",
    mean: "(약속 장소에서) 만나다",
    syn: ["待ち合わせる"],
    collocations: [{ ja: "駅で落ち合う", ko: "역에서 만나다" }],
    examples: [{ type: "ex", label: "예문", ja: "仕事が終わったら、駅前で落ち合おう。", ko: "일이 끝나면 역 앞에서 만나자." }]
  },
  {
    id: 507, day: 36, level: "N2",
    word: "踏み切る", kana: "ふみきる", pos: "동사 (5단 자동사)",
    mean: "단행하다, 결단을 내리다, 발을 굴러 도약하다",
    syn: ["決断する", "実行する"],
    collocations: [{ ja: "改革に踏み切る", ko: "개혁을 과감히 단행하다" }, { ja: "値上げに踏み切る", ko: "가격 인상을 단행하다" }],
    examples: [{ type: "kun", label: "훈독", ja: "原材料価格の高騰に耐えかね、企業は主力商品の価格改定についに踏み切る決断を下した。", ko: "원자재 가격 급등을 견디다 못해 기업은 주력 상품의 가격 인상을 마침내 단행하기로 결단을 내렸다." }]
  },
  {
    id: 3024, day: 36, level: "N2",
    word: "着こなす", kana: "きこなす", pos: "동사 (타동사)",
    mean: "옷을 맵시 있게 입다",
    syn: [],
    collocations: [{ ja: "着物を着こなす", ko: "기모노를 맵시 있게 입다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼女はどんな服も上手に着こなす。", ko: "그녀는 어떤 옷이든 멋지게 소화한다." }]
  },
  {
    id: 3025, day: 36, level: "N2",
    word: "転がす", kana: "ころがす", pos: "동사 (타동사)",
    mean: "굴리다",
    syn: [],
    collocations: [{ ja: "ボールを転がす", ko: "공을 굴리다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもが坂の上からボールを転がした。", ko: "아이가 언덕 위에서 공을 굴렸다." }]
  },
  {
    id: 3026, day: 36, level: "N2",
    word: "燃え尽きる", kana: "もえつきる", pos: "동사 (자동사)",
    mean: "다 타 버리다, 탈진하다",
    syn: [],
    collocations: [{ ja: "ろうそくが燃え尽きる", ko: "초가 다 타다" }, { ja: "燃え尽き症候群", ko: "번아웃 증후군" }],
    examples: [{ type: "ex", label: "예문", ja: "大きな仕事を終えて、燃え尽きたように感じる。", ko: "큰일을 끝내고 다 타 버린 것처럼 느낀다." }]
  },
  {
    id: 3027, day: 36, level: "N2",
    word: "頼りない", kana: "たよりない", pos: "い형용사",
    mean: "미덥지 못하다, 불안하다",
    syn: ["心細い"],
    collocations: [{ ja: "頼りない返事", ko: "미덥지 못한 대답" }],
    examples: [{ type: "ex", label: "예문", ja: "新しい担当者は少し頼りない。", ko: "새 담당자는 조금 미덥지 못하다." }]
  },
  {
    id: 3028, day: 36, level: "N2",
    word: "利口", kana: "りこう", pos: "な형용사",
    mean: "영리함",
    syn: ["賢い"],
    collocations: [{ ja: "利口な子", ko: "영리한 아이" }],
    examples: [{ type: "ex", label: "예문", ja: "この犬はとても利口だ。", ko: "이 개는 아주 영리하다." }]
  },
  {
    id: 3029, day: 36, level: "N2",
    word: "厄介", kana: "やっかい", pos: "な형용사",
    mean: "성가심, 귀찮음",
    syn: ["面倒な"],
    collocations: [{ ja: "厄介な問題", ko: "성가신 문제" }],
    examples: [{ type: "ex", label: "예문", ja: "厄介なことに巻き込まれた。", ko: "성가신 일에 휘말렸다." }]
  },
  {
    id: 516, day: 36, level: "N2",
    word: "頑丈", kana: "がんじょう", pos: "な형용사",
    mean: "튼튼함, 견고함, 몸이 다부짐",
    syn: ["丈夫", "しっかりしている"],
    collocations: [{ ja: "頑丈な建物", ko: "견고하고 튼튼한 건물" }, { ja: "頑丈な体つき", ko: "다부지고 건장한 체격" }],
    examples: [{ type: "on", label: "음독", ja: "大地震の激しい揺れにも耐えられるよう、鉄骨を用いた極めて頑丈な基礎構造で設計されている。", ko: "대지진의 격한 흔들림에도 견딜 수 있도록 철골을 사용한 지극히 견고한 기초 구조로 설계되어 있다." }]
  },
  {
    id: 3030, day: 36, level: "N2",
    word: "手ごわい", kana: "てごわい", pos: "い형용사",
    mean: "만만치 않다, 벅차다",
    syn: ["強い"],
    collocations: [{ ja: "手ごわい相手", ko: "만만치 않은 상대" }],
    examples: [{ type: "ex", label: "예문", ja: "次の対戦相手はかなり手ごわい。", ko: "다음 상대는 꽤 만만치 않다." }]
  },
  {
    id: 3031, day: 36, level: "N2",
    word: "いい加減", kana: "いいかげん", pos: "な형용사",
    mean: "무책임함, 적당함",
    syn: ["適当な"],
    collocations: [{ ja: "いい加減な返事", ko: "성의 없는 대답" }],
    examples: [{ type: "ex", label: "예문", ja: "いい加減な仕事をしてはいけない。", ko: "대충 일을 해서는 안 된다." }]
  },
  {
    id: 3032, day: 36, level: "N2",
    word: "エリア", kana: "エリア", pos: "외래어",
    mean: "지역, 구역 (area)",
    syn: ["地域", "区域"],
    collocations: [{ ja: "エリアを限定する", ko: "지역을 한정하다" }],
    examples: [{ type: "ex", label: "예문", ja: "このエリアは駐車禁止です。", ko: "이 구역은 주차 금지입니다." }]
  },
  {
    id: 3033, day: 36, level: "N2",
    word: "カタログ", kana: "カタログ", pos: "외래어",
    mean: "카탈로그 (catalog)",
    syn: ["目録"],
    collocations: [{ ja: "商品のカタログ", ko: "상품 카탈로그" }],
    examples: [{ type: "ex", label: "예문", ja: "カタログを見て注文した。", ko: "카탈로그를 보고 주문했다." }]
  },
  {
    id: 3034, day: 36, level: "N2",
    word: "キャッチ", kana: "キャッチ", pos: "외래어",
    mean: "포착, 잡기 (catch)",
    syn: ["捕らえる"],
    collocations: [{ ja: "情報をキャッチする", ko: "정보를 포착하다" }],
    examples: [{ type: "ex", label: "예문", ja: "いち早く流行をキャッチする。", ko: "재빨리 유행을 포착한다." }]
  },
  {
    id: 3035, day: 36, level: "N2",
    word: "いざ", kana: "いざ", pos: "부사",
    mean: "막상, 정작",
    syn: ["実際に"],
    collocations: [{ ja: "いざとなると", ko: "막상 닥치면" }],
    examples: [{ type: "ex", label: "예문", ja: "いざ本番になると、緊張して何も言えなかった。", ko: "막상 실전이 되니 긴장해서 아무 말도 못 했다." }]
  },
  {
    id: 3036, day: 36, level: "N2",
    word: "一体に", kana: "いったいに", pos: "부사",
    mean: "대체로, 일반적으로",
    syn: ["概して"],
    collocations: [{ ja: "一体に今年は暖かい", ko: "대체로 올해는 따뜻하다" }],
    examples: [{ type: "ex", label: "예문", ja: "この地方は一体に雨が多い。", ko: "이 지방은 대체로 비가 많다." }]
  },
  {
    id: 3037, day: 36, level: "N2",
    word: "むやみに", kana: "むやみに", pos: "부사",
    mean: "함부로, 무턱대고",
    syn: ["やたらに"],
    collocations: [{ ja: "むやみに信じる", ko: "무턱대고 믿다" }],
    examples: [{ type: "ex", label: "예문", ja: "むやみに薬を飲むのはよくない。", ko: "무턱대고 약을 먹는 것은 좋지 않다." }]
  },
  {
    id: 3038, day: 36, level: "N2",
    word: "とうに", kana: "とうに", pos: "부사",
    mean: "이미, 진작",
    syn: ["とっくに"],
    collocations: [{ ja: "とうに過ぎた", ko: "이미 지났다" }],
    examples: [{ type: "ex", label: "예문", ja: "約束の時間はとうに過ぎている。", ko: "약속 시간은 이미 지났다." }]
  },
  {
    id: 3039, day: 36, level: "N2",
    word: "くたくた", kana: "くたくた", pos: "부사 (의성어·의태어)",
    mean: "기진맥진, 흐물흐물",
    syn: ["ぐったり"],
    collocations: [{ ja: "くたくたに疲れる", ko: "녹초가 되다" }],
    examples: [{ type: "ex", label: "예문", ja: "一日中歩いてくたくただ。", ko: "하루 종일 걸어서 녹초다." }]
  },
  {
    id: 3040, day: 36, level: "N2",
    word: "〜おき", kana: "おき", pos: "접미어",
    mean: "~걸러, ~간격으로",
    syn: ["〜ごとに"],
    collocations: [{ ja: "一日おき", ko: "하루걸러" }, { ja: "二行おき", ko: "두 줄 걸러" }],
    examples: []
  },
  {
    id: 3041, day: 36, level: "N2",
    word: "見本", kana: "みほん", pos: "명사",
    mean: "견본",
    syn: ["サンプル"],
    collocations: [{ ja: "見本を見せる", ko: "견본을 보여 주다" }],
    examples: [{ type: "ex", label: "예문", ja: "商品の見本を取り寄せた。", ko: "상품 견본을 주문했다." }]
  },
  {
    id: 3042, day: 36, level: "N2",
    word: "未満", kana: "みまん", pos: "명사",
    mean: "미만",
    syn: [],
    collocations: [{ ja: "十八歳未満", ko: "18세 미만" }],
    examples: [{ type: "ex", label: "예문", ja: "十八歳未満の方は入場できません。", ko: "18세 미만인 분은 입장할 수 없습니다." }]
  },
  {
    id: 3043, day: 36, level: "N2",
    word: "民間", kana: "みんかん", pos: "명사",
    mean: "민간",
    syn: [],
    collocations: [{ ja: "民間企業", ko: "민간 기업" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は公務員から民間企業に転職した。", ko: "그는 공무원에서 민간 기업으로 이직했다." }]
  },
  {
    id: 3044, day: 36, level: "N2",
    word: "名称", kana: "めいしょう", pos: "명사",
    mean: "명칭",
    syn: ["名前"],
    collocations: [{ ja: "正式名称", ko: "정식 명칭" }],
    examples: [{ type: "ex", label: "예문", ja: "会社の名称が変わった。", ko: "회사 명칭이 바뀌었다." }]
  },
  {
    id: 554, day: 36, level: "N2",
    word: "履歴", kana: "りれき", pos: "명사",
    mean: "이력 (지금까지 거쳐온 학력·경력·기록)",
    syn: ["経歴", "記録"],
    collocations: [{ ja: "履歴書を送付する", ko: "이력서를 송부하다" }, { ja: "閲覧履歴を消去する", ko: "인터넷 검색/열람 기록을 삭제하다" }],
    examples: [{ type: "on", label: "음독", ja: "採用選考の第一関門として、志望動機や自己PRを丁寧に記入した履歴書の提出が求められる。", ko: "채용 선발의 첫 관문으로서 지원 동기와 자기소개를 정성껏 작성한 이력서 제출이 요구된다." }]
  },
  {
    id: 3045, day: 36, level: "N2",
    word: "目安", kana: "めやす", pos: "명사",
    mean: "기준, 목표",
    syn: ["基準", "目標"],
    collocations: [{ ja: "目安にする", ko: "기준으로 삼다" }],
    examples: [{ type: "ex", label: "예문", ja: "一日三十分を目安に運動しよう。", ko: "하루 30분을 기준으로 운동하자." }]
  },
  {
    id: 3046, day: 36, level: "N2",
    word: "目印", kana: "めじるし", pos: "명사",
    mean: "표시, 표적",
    syn: ["マーク"],
    collocations: [{ ja: "目印をつける", ko: "표시를 하다" }],
    examples: [{ type: "ex", label: "예문", ja: "駅前の時計台を目印に待ち合わせた。", ko: "역 앞 시계탑을 표지로 만나기로 했다." }]
  },
  {
    id: 3047, day: 36, level: "N2",
    word: "役目", kana: "やくめ", pos: "명사",
    mean: "역할, 임무",
    syn: ["役割"],
    collocations: [{ ja: "役目を果たす", ko: "역할을 다하다" }],
    examples: [{ type: "ex", label: "예문", ja: "子どもを守るのは大人の役目だ。", ko: "아이를 지키는 것은 어른의 역할이다." }]
  },
  {
    id: 3048, day: 36, level: "N2",
    word: "有無", kana: "うむ", pos: "명사",
    mean: "유무",
    syn: [],
    collocations: [{ ja: "経験の有無", ko: "경험의 유무" }],
    examples: [{ type: "ex", label: "예문", ja: "経験の有無は問いません。", ko: "경험 유무는 묻지 않습니다." }]
  },
  {
    id: 3049, day: 36, level: "N2",
    word: "有料", kana: "ゆうりょう", pos: "명사",
    mean: "유료",
    syn: [],
    collocations: [{ ja: "有料駐車場", ko: "유료 주차장" }],
    examples: [{ type: "ex", label: "예문", ja: "この駐車場は有料です。", ko: "이 주차장은 유료입니다." }]
  },
  {
    id: 3050, day: 36, level: "N2",
    word: "要領", kana: "ようりょう", pos: "명사",
    mean: "요령",
    syn: ["こつ"],
    collocations: [{ ja: "要領がいい", ko: "요령이 좋다" }, { ja: "要領を得ない", ko: "요령부득이다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼は要領がよく、仕事が速い。", ko: "그는 요령이 좋아서 일이 빠르다." }]
  },
  {
    id: 3051, day: 36, level: "N2",
    word: "余地", kana: "よち", pos: "명사",
    mean: "여지",
    syn: [],
    collocations: [{ ja: "検討の余地", ko: "검토의 여지" }, { ja: "疑う余地がない", ko: "의심의 여지가 없다" }],
    examples: [{ type: "ex", label: "예문", ja: "この計画にはまだ改善の余地がある。", ko: "이 계획에는 아직 개선의 여지가 있다." }]
  },
  {
    id: 557, day: 36, level: "N2",
    word: "浪費", kana: "ろうひ", pos: "명사",
    mean: "낭비 (재물이나 시간을 헛되이 씀)",
    syn: ["むだづかい"],
    collocations: [{ ja: "時間を浪費する", ko: "귀중한 시간을 헛되이 낭비하다" }, { ja: "税金の浪費", ko: "혈세 낭비" }],
    examples: [{ type: "on", label: "음독", ja: "実質的な結論の出ない無意味な会議に連日長時間を費やすことは、貴重な労働力の浪費にほかならない。", ko: "실질적인 결론이 나지 않는 무의미한 회의에 연일 장시간을 소비하는 것은 귀중한 노동력 낭비에 다름 아니다." }]
  },
  {
    id: 3052, day: 36, level: "N2",
    word: "予備", kana: "よび", pos: "명사",
    mean: "예비",
    syn: [],
    collocations: [{ ja: "予備の電池", ko: "예비 건전지" }, { ja: "予備知識", ko: "예비지식" }],
    examples: [{ type: "ex", label: "예문", ja: "念のため予備の電池を持っていく。", ko: "만일을 위해 예비 건전지를 가져간다." }]
  },
  {
    id: 3053, day: 36, level: "N2",
    word: "利点", kana: "りてん", pos: "명사",
    mean: "이점, 장점",
    syn: ["メリット", "長所"],
    collocations: [{ ja: "利点が多い", ko: "이점이 많다" }],
    examples: [{ type: "ex", label: "예문", ja: "在宅勤務の利点は通勤がないことだ。", ko: "재택근무의 이점은 통근이 없다는 것이다." }]
  },
  {
    id: 3054, day: 36, level: "N2",
    word: "流行", kana: "りゅうこう", pos: "명사 (する동사)",
    mean: "유행",
    syn: ["ブーム"],
    collocations: [{ ja: "流行に敏感", ko: "유행에 민감하다" }, { ja: "流行語", ko: "유행어" }],
    examples: [{ type: "ex", label: "예문", ja: "今年はこの色が流行している。", ko: "올해는 이 색이 유행하고 있다." }]
  },
  {
    id: 3055, day: 36, level: "N2",
    word: "両立", kana: "りょうりつ", pos: "명사 (する동사)",
    mean: "양립",
    syn: [],
    collocations: [{ ja: "仕事と家庭の両立", ko: "일과 가정의 양립" }],
    examples: [{ type: "ex", label: "예문", ja: "勉強と部活を両立させるのは難しい。", ko: "공부와 동아리 활동을 양립시키기는 어렵다." }]
  },
  {
    id: 3056, day: 36, level: "N2",
    word: "例年", kana: "れいねん", pos: "명사",
    mean: "예년",
    syn: ["いつもの年"],
    collocations: [{ ja: "例年通り", ko: "예년대로" }, { ja: "例年より", ko: "예년보다" }],
    examples: [{ type: "ex", label: "예문", ja: "今年の夏は例年より暑い。", ko: "올여름은 예년보다 덥다." }]
  },
  {
    id: 3057, day: 36, level: "N2",
    word: "連続", kana: "れんぞく", pos: "명사 (する동사)",
    mean: "연속",
    syn: ["続く"],
    collocations: [{ ja: "三日連続", ko: "3일 연속" }, { ja: "連続ドラマ", ko: "연속극" }],
    examples: [{ type: "ex", label: "예문", ja: "三日連続で雨が降っている。", ko: "사흘 연속으로 비가 오고 있다." }]
  },
  {
    id: 558, day: 36, level: "N2",
    word: "和解", kana: "わかい", pos: "명사",
    mean: "화해 (다툼을 풀고 화목해짐 / 법적 화해)",
    syn: ["仲直り", "歩み寄り"],
    collocations: [{ ja: "法廷で和解する", ko: "법정에서 원만히 화해/합의하다" }, { ja: "和解が成立する", ko: "화해가 성립되다" }],
    examples: [{ type: "on", label: "음독", ja: "長年にわたり泥沼の法廷闘争を続けていた両社であったが、裁判所の調停案を受け入れてついに和解に至った。", ko: "오랜 세월 진흙탕 법정 공방을 이어오던 양사였으나 법원의 조정안을 수용하여 마침내 화해에 도달했다." }]
  },
  {
    id: 3058, day: 36, level: "N2",
    word: "録音", kana: "ろくおん", pos: "명사 (する동사)",
    mean: "녹음",
    syn: [],
    collocations: [{ ja: "会議を録音する", ko: "회의를 녹음하다" }],
    examples: [{ type: "ex", label: "예문", ja: "講義を録音して後で聞き直した。", ko: "강의를 녹음해서 나중에 다시 들었다." }]
  },
  {
    id: 3059, day: 36, level: "N2",
    word: "論理", kana: "ろんり", pos: "명사",
    mean: "논리",
    syn: [],
    collocations: [{ ja: "論理的", ko: "논리적" }, { ja: "論理が通る", ko: "논리가 맞다" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の説明は論理的で分かりやすい。", ko: "그의 설명은 논리적이라 이해하기 쉽다." }]
  },
  {
    id: 3060, day: 36, level: "N2",
    word: "枠", kana: "わく", pos: "명사",
    mean: "틀, 테두리",
    syn: ["範囲"],
    collocations: [{ ja: "枠にとらわれない", ko: "틀에 얽매이지 않다" }, { ja: "予算の枠", ko: "예산의 틀" }],
    examples: [{ type: "ex", label: "예문", ja: "枠にとらわれない自由な発想が必要だ。", ko: "틀에 얽매이지 않는 자유로운 발상이 필요하다." }]
  },
  {
    id: 3061, day: 36, level: "N1",
    word: "断じて", kana: "だんじて", pos: "부사",
    mean: "결코, 단연코",
    syn: ["決して"],
    collocations: [{ ja: "断じて許さない", ko: "결코 용서하지 않다" }],
    examples: [{ type: "ex", label: "예문", ja: "そんなことは断じて許されない。", ko: "그런 일은 결코 용서되지 않는다." }]
  },
  {
    id: 504, day: 36, level: "N1",
    word: "引きずる", kana: "ひきずる", pos: "동사 (5단 타동사)",
    mean: "질질 끌다, 미련을 두다, 억지로 끌고 가다",
    syn: ["長引かせる", "未練を残す"],
    collocations: [{ ja: "足を引きずる", ko: "다리를 절뚝이며 질질 끌다" }, { ja: "過去を引きずる", ko: "과거의 실패나 미련을 질질 끌다" }],
    examples: [{ type: "kun", label: "대표 훈독", ja: "過去の失恋の痛手をいつまでも引きずっていては、新しい一歩を踏み出すことはできない。", ko: "과거의 실연의 상처를 언제까지나 질질 끌어서는 새로운 첫걸음을 내딛을 수 없다." }],
    polysemy: [
      { def: "① 무거운 물건이나 긴 옷자락을 바닥에 닿은 채로 질질 끌다", ja: "重いスーツケースの車輪が壊れ、やむを得ず地面を引きずって運んだ。", ko: "무거운 캐리어 바퀴가 부서져 어쩔 수 없이 지면에 질질 끌며 운반했다." },
      { def: "② 잊어야 할 과거의 실패·트라우마·미련을 떨치지 못하고 오래 품다", ja: "前回の商談の失敗を引きずることなく、気持ちを切り替えて次の案件に挑む。", ko: "지난번 상담 실패에 미련을 두지 않고 기분을 다잡아 다음 안건에 도전하다." },
      { def: "③ 원치 않는 사람을 억지로 어떤 장소나 상황으로 끌고 가다", ja: "嫌がる友人を無理やり引きずって病院の診察室へ連れて行った。", ko: "싫어하는 친구를 억지로 끌고 가 병원 진찰실로 데려갔다." }
    ]
  },
  {
    id: 3062, day: 36, level: "N1",
    word: "往々にして", kana: "おうおうにして", pos: "부사",
    mean: "왕왕, 흔히",
    syn: ["しばしば"],
    collocations: [{ ja: "往々にしてある", ko: "흔히 있다" }],
    examples: [{ type: "ex", label: "예문", ja: "人は往々にして自分の欠点に気づかない。", ko: "사람은 흔히 자신의 결점을 깨닫지 못한다." }]
  },
  {
    id: 3063, day: 36, level: "N1",
    word: "いずれにせよ", kana: "いずれにせよ", pos: "부사",
    mean: "어쨌든, 어느 쪽이든",
    syn: ["どちらにしても"],
    collocations: [{ ja: "いずれにせよ", ko: "어쨌든" }],
    examples: [{ type: "ex", label: "예문", ja: "いずれにせよ、明日までに結論を出す必要がある。", ko: "어쨌든 내일까지 결론을 낼 필요가 있다." }]
  },
  {
    id: 506, day: 36, level: "N1",
    word: "踏み込む", kana: "ふみこむ", pos: "동사 (5단 자동사)",
    mean: "발을 들여놓다, 깊이 파고들다",
    syn: ["入り込む", "深く追及する"],
    collocations: [{ ja: "危険地帯に踏み込む", ko: "위험 지대에 발을 들여놓다" }, { ja: "核心に踏み込む", ko: "문제의 핵심에 깊이 파고들다" }],
    examples: [{ type: "kun", label: "훈독", ja: "表面的な現象の羅列にとどまらず、社会問題の根底にある制度的欠陥にまで深く踏み込んだ議論を展開する。", ko: "표면적인 현상 나열에 그치지 않고 사회 문제 밑바탕에 있는 제도적 결함에까지 깊이 파고든 논의를 펼치다." }]
  },
  {
    id: 3064, day: 36, level: "N1",
    word: "殊に", kana: "ことに", pos: "부사",
    mean: "특히",
    syn: ["特に", "とりわけ"],
    collocations: [{ ja: "殊に美しい", ko: "특히 아름답다" }],
    examples: [{ type: "ex", label: "예문", ja: "今年の夏は殊に暑い。", ko: "올여름은 특히 덥다." }]
  },
  {
    id: 527, day: 36, level: "N1",
    word: "いわば", kana: "いわば", pos: "부사",
    mean: "말하자면, 비유하자면",
    syn: ["言ってみれば", "たとえば"],
    collocations: [{ ja: "いわば第二の故郷", ko: "말하자면 제2의 고향" }, { ja: "いわば両刃の剣だ", ko: "이를테면 양날의 검이다" }],
    examples: [{ type: "ex", label: "예문", ja: "高度な人工知能技術は極めて便利な道具である反面、使い方を誤ればいわば両刃の剣となりかねない。", ko: "고도의 인공지능 기술은 지극히 편리한 도구인 반면 잘못 사용하면 말하자면 양날의 검이 되기 십상이다." }]
  },
  {
    id: 3065, day: 36, level: "N1",
    word: "至極", kana: "しごく", pos: "부사",
    mean: "지극히",
    syn: ["極めて"],
    collocations: [{ ja: "至極当然", ko: "지극히 당연함" }],
    examples: [{ type: "ex", label: "예문", ja: "彼の意見は至極もっともだ。", ko: "그의 의견은 지극히 지당하다." }]
  }
];
