import { TarotCard } from '../types';

export const majorArcana: TarotCard[] = [
    {
        id: 0,
        name: 'The Fool',
        nameJa: '愚者',
        number: 0,
        arcana: 'Major',
        keywords: ['始まり', '自由', '純粋', '冒険'],
        meaningUpright: '新たな始まり、自由な心、無限の可能性、直感に従うこと。',
        meaningReversed: '無計画、軽率、足元をすくわれる、現実逃避。',
        imageUrl: '/assets/cards/major_00_the_fool.png'
    },
    {
        id: 1,
        name: 'The Magician',
        nameJa: '魔術師',
        number: 1,
        arcana: 'Major',
        keywords: ['創造', '自信', '才能', 'コミュニケーション'],
        meaningUpright: '創造力の発揮、自信に満ちた行動、才能の開花、新しいアイディア。',
        meaningReversed: '空回り、自信喪失、優柔不断、才能の乱用。',
        imageUrl: '/assets/cards/major_01_the_magician.png'
    },
    {
        id: 2,
        name: 'The High Priestess',
        nameJa: '女教皇',
        number: 2,
        arcana: 'Major',
        keywords: ['直感', '知性', '神秘', '静寂'],
        meaningUpright: '研ぎ澄まされた直感、深い知性、精神的な平穏、秘密。',
        meaningReversed: '神経質、情緒不安定、批判的、秘密が漏れる。',
        imageUrl: '/assets/cards/major_02_the_high_priestess.png'
    },
    {
        id: 3,
        name: 'The Empress',
        nameJa: '女帝',
        number: 3,
        arcana: 'Major',
        keywords: ['豊穣', '母性', '繁栄', '情熱'],
        meaningUpright: '愛と豊かさ、母性的な優しさ、繁栄、実りある結果。',
        meaningReversed: '過保護、浪費、嫉妬、不満。',
        imageUrl: '/assets/cards/major_03_the_empress.png'
    },
    {
        id: 4,
        name: 'The Emperor',
        nameJa: '皇帝',
        number: 4,
        arcana: 'Major',
        keywords: ['支配', '安定', '責任', 'リーダーシップ'],
        meaningUpright: '強固な意志、リーダーシップ、安定した状況、願望成就。',
        meaningReversed: '横暴、未熟、無責任、過度なプレッシャー。',
        imageUrl: '/assets/cards/major_04_the_emperor.png'
    },
    {
        id: 5,
        name: 'The Hierophant',
        nameJa: '法王',
        number: 5,
        arcana: 'Major',
        keywords: ['慈悲', '信頼', '伝統', '秩序'],
        meaningUpright: '慈悲深い心、信頼関係、ルールの遵守、精神的な助言。',
        meaningReversed: '束縛、不信感、独りよがり、狭い視野。',
        imageUrl: '/assets/cards/major_05_the_hierophant.png'
    },
    {
        id: 6,
        name: 'The Lovers',
        nameJa: '恋人',
        number: 6,
        arcana: 'Major',
        keywords: ['調和', '選択', '情熱', '絆'],
        meaningUpright: '魅力的な誘い、心地よい関係、正しい選択、相思相愛。',
        meaningReversed: '誘惑、優柔不断、関係の不調和、空回り。',
        imageUrl: '/assets/cards/major_06_the_lovers.png'
    },
    {
        id: 7,
        name: 'The Chariot',
        nameJa: '戦車',
        number: 7,
        arcana: 'Major',
        keywords: ['勝利', '行動力', '前進', '克服'],
        meaningUpright: '困難の克服、勝利への前進、強い意志、スピーディーな展開。',
        meaningReversed: '暴走、挫折、焦り、コントロール不能。',
        imageUrl: '/assets/cards/major_07_the_chariot.png'
    },
    {
        id: 8,
        name: 'Strength',
        nameJa: '力',
        number: 8,
        arcana: 'Major',
        keywords: ['忍耐', '勇気', '自制心', '不屈'],
        meaningUpright: '強い精神力、困難に立ち向かう勇気、優しさによる克服、忍耐。',
        meaningReversed: '力不足、弱気、感情的になる、スタミナ切れ。',
        imageUrl: '/assets/cards/major_08_strength.png'
    },
    {
        id: 9,
        name: 'The Hermit',
        nameJa: '隠者',
        number: 9,
        arcana: 'Major',
        keywords: ['探求', '内省', '孤独', '悟り'],
        meaningUpright: '真実の探求、内面を見つめる、精神的な成長、思慮深さ。',
        meaningReversed: '孤立、偏屈、現実逃避、心を閉ざす。',
        imageUrl: '/assets/cards/major_09_the_hermit.png'
    },
    {
        id: 10,
        name: 'Wheel of Fortune',
        nameJa: '運命の輪',
        number: 10,
        arcana: 'Major',
        keywords: ['チャンス', '転換期', '運命', '変化'],
        meaningUpright: '運命的な出会い、好転する状況、チャンス到来、予想外の幸運。',
        meaningReversed: 'すれ違い、不運、タイミングを逃す、状況の悪化。',
        imageUrl: '/assets/cards/major_10_wheel_of_fortune.png'
    },
    {
        id: 11,
        name: 'Justice',
        nameJa: '正義',
        number: 11,
        arcana: 'Major',
        keywords: ['公正', '均衡', '正当性', '決断'],
        meaningUpright: '公平な判断、正しい決断、バランスの取れた状態、正当な評価。',
        meaningReversed: '偏見、不正、優柔不断、バランスが崩れる。',
        imageUrl: '/assets/cards/major_11_justice.png'
    },
    {
        id: 12,
        name: 'The Hanged Man',
        nameJa: '吊るされた男',
        number: 12,
        arcana: 'Major',
        keywords: ['忍耐', '試練', '奉仕', '視点の転換'],
        meaningUpright: '試練の時、忍耐が必要、自己犠牲、視点を変えることで道が開ける。',
        meaningReversed: '無駄な努力、徒労、投げやりな態度、報われない我慢。',
        imageUrl: '/assets/cards/major_12_the_hanged_man.png'
    },
    {
        id: 13,
        name: 'Death',
        nameJa: '死神',
        number: 13,
        arcana: 'Major',
        keywords: ['終末', '再生', '変容', '決着'],
        meaningUpright: '物事の終わり、新しい始まりのための別れ、根本的な変化。',
        meaningReversed: '未練、執着、変化への恐れ、停滞。',
        imageUrl: '/assets/cards/major_13_death.png'
    },
    {
        id: 14,
        name: 'Temperance',
        nameJa: '節制',
        number: 14,
        arcana: 'Major',
        keywords: ['調和', '自制', '浄化', '健康'],
        meaningUpright: 'バランスの取れた生活、穏やかな心、順調な進展、自制心。',
        meaningReversed: '生活の乱れ、不調和、浪費、極端な行動。',
        imageUrl: '/assets/cards/major_14_temperance.png'
    },
    {
        id: 15,
        name: 'The Devil',
        nameJa: '悪魔',
        number: 15,
        arcana: 'Major',
        keywords: ['誘惑', '拘束', '欲望', '堕落'],
        meaningUpright: '断ち切れない誘惑、欲望に負ける、束縛された状態、嫉妬。',
        meaningReversed: '呪縛からの解放、悪縁が切れる、事態の好転、更生。',
        imageUrl: '/assets/cards/major_15_the_devil.png'
    },
    {
        id: 16,
        name: 'The Tower',
        nameJa: '塔',
        number: 16,
        arcana: 'Major',
        keywords: ['崩壊', '災難', '急変', '啓示'],
        meaningUpright: '予期せぬトラブル、崩壊、ショックな出来事、価値観の劇的な変化。',
        meaningReversed: '緊迫した状態、誤解、再起不能、不幸中の幸い。',
        imageUrl: '/assets/cards/major_16_the_tower.png'
    },
    {
        id: 17,
        name: 'The Star',
        nameJa: '星',
        number: 17,
        arcana: 'Major',
        keywords: ['希望', '憧れ', '才能', 'インスピレーション'],
        meaningUpright: '希望の光、願いが叶う、才能の開花、明るい未来。',
        meaningReversed: '失望、高望み、期待外れ、悲観的。',
        imageUrl: '/assets/cards/major_17_the_star.png'
    },
    {
        id: 18,
        name: 'The Moon',
        nameJa: '月',
        number: 18,
        arcana: 'Major',
        keywords: ['不安', '幻影', '迷い', '予感'],
        meaningUpright: '先が見えない不安、迷い、不安定な精神状態、嘘や欺瞞。',
        meaningReversed: '不安の解消、霧が晴れる、真実が見える、危機回避。',
        imageUrl: '/assets/cards/major_18_the_moon.png'
    },
    {
        id: 19,
        name: 'The Sun',
        nameJa: '太陽',
        number: 19,
        arcana: 'Major',
        keywords: ['成功', '祝福', '活力', '純真'],
        meaningUpright: '成功、幸福、祝福された状態、エネルギッシュな活動。',
        meaningReversed: 'スタミナ不足、一時的な陰り、計画の遅れ、不機嫌。',
        imageUrl: '/assets/cards/major_19_the_sun.png'
    },
    {
        id: 20,
        name: 'Judgement',
        nameJa: '審判',
        number: 20,
        arcana: 'Major',
        keywords: ['復活', '覚醒', '決断', '解放'],
        meaningUpright: '奇跡的な復活、再会、過去の清算、覚醒。',
        meaningReversed: '後悔、再起不能、過去を引きずる、チャンスを逃す。',
        imageUrl: '/assets/cards/major_20_judgement.png'
    },
    {
        id: 21,
        name: 'The World',
        nameJa: '世界',
        number: 21,
        arcana: 'Major',
        keywords: ['完成', '完全', '達成', '幸福'],
        meaningUpright: '完全な成功、目標達成、ハッピーエンド、統合。',
        meaningReversed: '中途半端、未完成、マンネリ、スランプ。',
        imageUrl: '/assets/cards/major_21_the_world.png'
    }
];
