import React from 'react';
import 붕어빵 from '../snack/붕어빵.png';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';
//import 붕어빵 from '../snack/붕어빵.jpg';

export const ResultData = [
    {
        id: 1,
        name: '군밤',
        best: 'ESTJ',
        desc: (
            <p style={{textAlign: 'center'}}>
                호불호가 확실한 당신!<br />
                군밤의 딱딱한 껍질이 속을 보호하듯이, 여러분은 감정적으로 쉽게 흔들리지 않는 강인한 사람이에요.<br />
                리더십이 강하며 헌신적이지만.. 고집이 셀 수도?
            </p>
        ),
        good: `좋아좋아: 붕어빵  ❄  싫어싫어: 호빵`,
        image:  `${붕어빵}`,
    },
    {
        id: 2,
        name: '호두과자',
        best: 'ESTP',
        desc: (
            <p style={{textAlign: 'center'}}>
                다재다능한 당신!<br />
                호두과자는 낱개가 아니라 묶음으로 팔죠? 혼자보다는 서로 함께하고 싶어서 그런 거랍니다. 당신도 마찬가지!<br />
                적응력이 뛰어나며 밝고 활달한 편이지만.. 살짝 충동적인 사람일지도..?
            </p>
        ),
        good: `좋아좋아: 호빵  ❄  싫어싫어: 붕어빵`,
        image:  `${붕어빵}`,
    },
    {
        id: 3,
        name: '땅콩빵',
        best: 'ESFJ',
        desc: (
            <p style={{textAlign: 'center'}}>
                배려심이 좋은 당신!<br />
                땅콩빵을 보면 서로서로 붙어있고 또 묶음으로 팔죠? 당신의 사교성처럼 땅콩빵도 사교성이 매우 좋아서 그렇게 있답니다.<br />
                책임감이 뛰어나고 활발하지만.. 감정 기복이 조금 심한 사람일 수도..?
            </p>
        ),
        good: `좋아좋아: 핫도그  ❄  싫어싫어: 와플`,
        image:  `${붕어빵}`,
    },
    {
        id: 4,
        name: '국화빵',
        best: 'ESFP',
        desc: (
            <p style={{textAlign: 'center'}}>
                자유로운 영혼인 당신!<br />
                갓 구운 국화빵은 바삭바삭한 겉과 촉촉한 속이 먹는 사람을 행복하게 만들어줘요. 바로 당신이 주변을 행복하게 만드는 것처럼요!<br />
                공감 능력이 뛰어나며 사교적인 편이지만.. 고집이 셀 수도..?
            </p>
        ),
        good: `좋아좋아: 와플  ❄  싫어싫어: 핫도그`,
        image:  `${붕어빵}`,
    },
    {
        id: 5,
        name: '떡볶이',
        best: 'ENTJ',
        desc: (
            <p style={{textAlign: 'center'}}>
                타고난 지도자인 당신!<br />
                떡볶이는 떡과 어묵, 소스, 파들과 잘 섞이죠? 사람들과 쉽게 융화하는 당신과 같답니다.<br />
                통솔력이 뛰어나며 완벽함을 추구하는 기질이 있지만.. 결정에 있어서는 충동적일 수도..?
            </p>
        ),
        good: `좋아좋아: 어묵  ❄  싫어싫어: 호떡`,
        image:  `${붕어빵}`,
    },
    {
        id: 6,
        name: '타코야끼',
        best: 'ENTP',
        desc: (
            <p style={{textAlign: 'center'}}>
                두뇌 회전이 빠른 당신!<br />
                치즈 맛, 매운 맛, 갈릭 맛 등등 타코야끼는 종류가 되게 많죠? 이들은 탐구하는 걸 좋아해서 여러 가지 맛에 도전해 본답니다.<br />
                틀에 박히지 않고 탐구심이 강한 당신과 비슷하네요!<br />
                카리스마가 있으며 혁신적이기도 하지만.. 계획성에서는 조금 부족할 수도..?
            </p>
        ),
        good: `좋아좋아: 호떡  ❄  싫어싫어: 어묵`,
        image:  `${붕어빵}`,
    },
    {
        id: 7,
        name: '군고구마',
        best: 'ENFJ',
        desc: (
            <p style={{textAlign: 'center'}}>
                책임감과 인내심이 강한 당신!<br />
                너.. 고구마 먹을래? 옛날에는 순수한 호의로 직접 기른 고구마를 이웃에게 주기도 했대요.<br />
                정의 의미를 담고 있는 고구마가 마치 인정이 많고 상냥한 당신과 비슷하지 않나요?<br />
                온화하고 의리가 많은 사람이지만.. 그만큼 상처를 잘 받는 편이에요.
            </p>
        ),
        good: `좋아좋아: 계란빵  ❄  싫어싫어: 가래떡구이`,
        image:  `${붕어빵}`,
    },
    {
        id: 8,
        name: '귤',
        best: 'ENFP',
        desc: (
            <p style={{textAlign: 'center'}}>
                상냥하고 긍정적인 당신!<br />
                귤껍질로 아트를 해본 적 있나요? 거북이도 만들고 꽃도 만들고 심지어는 사람도 만든답니다.<br />
                재치 있는 생각이죠? 창의적이고 아이디어가 풍부한 당신과 비슷하네요!<br />
                배려심이 깊고 호기심이 왕성하지만.. 거절을 잘 하지 못하는 편이에요.
            </p>
        ),
        good: `좋아좋아: 가래떡구이  ❄  싫어싫어: 계란빵`,
        image:  `${붕어빵}`,
    },
    {
        id: 9,
        name: '가래떡구이',
        best: 'ISTJ',
        desc: (
            <p style={{textAlign: 'center'}}>
                책임감이 강한 당신!<br />
                하나 둘 셋.. 지금이다! 가래떡은 너무 오래 구우면 녹아버리고 덜 익히면 딱딱해요.<br />
                타지 않게 조심스럽게 굽고 먼저 구운 것부터 먹는 가래떡처럼, 당신은 세심하고 체계적으로 일을 처리하려고 해요.<br />
                논리적이고 분석적인 특징을 가지고 있지만.. 변화에는 조금 약한 편이에요.
            </p>
        ),
        good: `좋아좋아: 귤  ❄  싫어싫어: 군고구마`,
        image:  `${붕어빵}`,
    },
    {
        id: 10,
        name: '계란빵',
        best: 'ISTP',
        desc: (
            <p style={{textAlign: 'center'}}>
                위기 대처능력이 좋은 당신!<br />
                계란빵은 계란 하나가 통째로 들어가서 만들기가 어렵대요. 이는 손재주가 좋은 당신을 필요로 하는 걸까요?<br />
                관찰력이 뛰어나며 유연한 발상이 가능한 사람이지만.. 상상력은 약한 편이에요.
            </p>
        ),
        good: `좋아좋아: 군고구마  ❄  싫어싫어: 귤`,
        image:  `${붕어빵}`,
    },
    {
        id: 11,
        name: '호떡',
        best: 'ISFJ',
        desc: (
            <p style={{textAlign: 'center'}}>
                꼼꼼하고 섬세한 당신!<br />
                호떡은 참 맛있게 생겼어요. 하지만 한 입 크게 먹는 순간.. 앗 뜨거워!<br />
                겉은 맛있어 보이지만 속은 강한 호떡처럼, 당신은 내면이 강한 외유내강형이에요.<br />
                끈기 있고 성실한 사람이지만.. 스스로에게는 엄격한 편이랍니다.
            </p>
        ),
        good: `좋아좋아: 타코야끼  ❄  싫어싫어: 떡볶이`,
        image:  `${붕어빵}`,
    },
    {
        id: 12,
        name: '어묵',
        best: 'ISFP',
        desc: (
            <p style={{textAlign: 'center'}}>
                다정하고 온화한 당신!<br />
                어묵 국물을 마시면 속이 따뜻해지죠? 사장님의 정으로 어묵을 따로 구입하지 않아도 국물만 마실 수 있답니다.<br />
                따뜻하고 정이 많은 당신의 특징과 비슷하네요!<br />
                타인의 말을 잘 들어주고 겸손한 사람이지만.. 스트레스에는 많이 취약한 편이에요.
            </p>
        ),
        good: `좋아좋아: 떡볶이  ❄  싫어싫어: 타코야끼`,
        image:  `${붕어빵}`,
    },
    {
        id: 13,
        name: '와플',
        best: 'INTJ',
        desc: (
            <p style={{textAlign: 'center'}}>
                논리적이며 분석력이 뛰어난 당신!<br />
                와플은 겨울 간식이 아니라고요? 하지만 그것은 INTJ에게 전혀 문제가 되지 않습니다.<br />
                와플은 밀가루 반죽과 굽는 시간 그리고 온도가 완벽해야 하죠. 마치 완벽함을 추구하는 당신처럼요!<br />
                계획을 잘 세우고 항상 침착한 사람이지만.. 타인에게는 살짝 무관심한 편이랍니다.
            </p>
        ),
        good: `좋아좋아: 국화빵  ❄  싫어싫어: 땅콩빵`,
        image:  `${붕어빵}`,
    },
    {
        id: 14,
        name: '핫도그',
        best: 'INTP',
        desc: (
            <p style={{textAlign: 'center'}}>
                논리적이며 독창적인 당신!<br />
                핫도그는 겨울 간식이 아니라고요? 하지만 그것은 이미 다른 생각을 하고 있는 INTP에게 전혀 문제가 되지 않습니다.<br />
                핫도그에 감자를 붙여볼까? 새로운 소스를 만들어 뿌려볼까? 이처럼 핫도그의 세계에서는 창의적인 아이디어가 필요해요.<br />
                독창적이고 유연한 생각을 가진 당신을 원하는 걸까요?<br />
                아이디어가 매우 많으며 변화에 강하지만.. 스스로에게는 너무 엄격한 편이에요.
            </p>
        ),
        good: `좋아좋아: 땅콩빵  ❄  싫어싫어: 국화빵`,
        image:  `${붕어빵}`,
    },
    {
        id: 15,
        name: '호빵',
        best: 'INFJ',
        desc: (
            <p style={{textAlign: 'center'}}>
                성실하고 책임감이 강한 당신!<br />
                팥이면 팥! 야채면 야채! 피자면 피자! 호빵은 다양한 사람을 만족시키기 위해 여러 가지 종류를 선보이죠.<br />
                주변 사람을 행복하게 만들어주고 싶어 하는 따스한 성격을 가진 당신과 비슷하네요.<br />
                신념이 있고 내 사람에게는 정말 잘해주지만.. 새로운 것은 딱히 좋아하지 않아요.
            </p>
        ),
        good: `좋아좋아: 호두과자  ❄  싫어싫어: 군밤`,
        image:  `${붕어빵}`,
    },
    {
        id: 16,
        name: '붕어빵',
        best: 'INFP',
        desc: (
            <p style={{textAlign: 'center'}}>
                창의적이고 상상력이 좋은 당신!<br />
                붕세권이라는 말도 있죠? 붕어빵은 집 근처에서 살 수 있다는 사실 하나에도 기분이 좋아지고,<br />
                따끈한 봉투를 품에 안고 한 입 먹는 순간에도 나를 행복하게 만들어주는 간식이에요.<br />
                좋아하는 사람을 기쁘게 만드는 것에 즐거움을 느끼는 당신과 비슷하네요!<br />
                이해심이 넓고 이타적인 사람이지만.. 걱정이 조금 많은 편이에요.
            </p>
        ),
        good: `좋아좋아: 군밤  ❄  싫어싫어: 호두과자`,
        image:  `${붕어빵}`,
    }
]