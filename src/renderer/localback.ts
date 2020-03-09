const local = {
  COMMON: {
    ALL: '全部',
    LOADING: '加载中...',
    OK: '确认',
    CANCEL: '取消',
    NOT_FOUND: '未检索到数据',
    ALREADY_HAVE: '已持有',
    HAVE: '有',
    OTHER_TYPE: '[其他]',
    DELETE_CONFIRM: '删除确认',
    STAGE: '阶段',
    OPTIONAL: '可选',
    MULTI_WAYS: '多来源',
    COPY: '复制',
    IMG_COPY_SUCCESS: '图片已复制至剪切板',
    SAVE: '保存',
    SPLIT: '拆解',
    UPGRADE: '进阶',
    UNIT: '单位',
    HERO: '英雄',
    ADD_TO_TARGET: '已添加至目标',
    ADD_TO_CACHE: '已添加至缓存',
    QUALITIES: [
      '',
      '[普通]',
      '[魔力]',
      '[罕见]',
      '[极其罕见]',
      '[天绝史诗]',
      '[传奇至宝]',
      '[神话传说]',
      '[禁断圣物]',
      '[冥灵传世]',
    ],
    STAGES: ['', '[野外]', '[粉末]', '[小四]', '[四大]', '[主龙]', '[白怨火]'],
    CATEGORIES: {
      Equip: '装备',
      Weapon: '武器',
      Helm: '头盔',
      Armor: '衣服',
      Ring: '饰品',
      Wings: '翅膀',
      Material: '材料',
      Icon: '徽章',
      Token: '结晶',
      Summoner: '召唤器',
      Quest: '任务',
    },
    GOOD_TYPES: [
      '',
      '[武器]',
      '[头盔]',
      '[衣服]',
      '[饰品]',
      '[翅膀]',
      '[材料]',
      '[徽章]',
      '[结晶]',
      '[召唤器]',
      '[任务]',
    ],
    GOOD_FIELDS: {
      hp: 'hp',
      mp: 'mp',
      atk: '攻',
      def: '防',
      str: '力',
      agi: '敏',
      int: '智',
      mainAttrInc: '主属',
      atkSpeed: '攻速',
      moveSpeed: '移速',
      abilityDamageInc: '技伤',
      sufferDamageDec: '减伤',
      magicDefInc: '魔抗',
      hpInc: '回血',
      stillDamageInc: '续伤',
      atkDamageInc: '攻伤',
      mpInc: '回蓝',
      hpRegenInc: '恢复',
      sufferCureInc: '治疗',
      missInc: '闪避',
      punchAsChanceInc: '倍击',
      punchChanceInc: '暴击',
      resurrectionTimeDec: '读秒',
      expInc: 'exp',
      iceDamageInc: '冰/水',
      fireDamageInc: '火',
      windAttrInc: '风',
      natureAttrInc: '自然',
    },
    UNIT_PROPS: {
      uhpr: '生命回复',
      uhpm: '生命最大值',
      uabi: '普通',
      utub: '提示工具 - 扩展',
      utip: '提示工具 - 基础',
      udty: '护甲类型',
      umvs: '基础速度',
      ucol: '碰撞体积',
      unam: '名字',
      usca: '模型缩放',
      ubld: '建造时间',
      urtm: '修理时间',
      ugor: '修理黄金消耗',
      ulur: '修理木材消耗',
      usid: '视野范围(白天)',
      util: '地形设置',
      umvt: '类型',
      utyp: '单位类别',
      usin: '视野范围(夜晚)',
      umvh: '高度',
      umdl: '模型文件',
      upgr: '使用科技',
      usnd: '单位声音设置',
      uico: '图标 - 游戏界面',
      ushw: '阴影图像 - 宽度',
      ushh: '阴影图像 - 高度',
      ushx: '阴影图像 - X轴偏移',
      ushy: '阴影图像 - Y轴偏移',
      ussc: '选择缩放',
      uclb: '颜色值(蓝)',
      uclg: '颜色值(绿)',
      uclr: '颜色值(红)',
      uhab: '英雄',
      uint: '英雄 - 初始智力',
      ubba: '黄金奖励 - 基础值',
      ubsi: '黄金奖励 - 骰子面数',
      ubdi: '黄金奖励 - 骰子数量',
      ustp: '英雄 - 每等级提升力量',
      uinp: '英雄 - 每等级提升智力',
      uagp: '英雄 - 每等级提升敏捷',
      uagi: '英雄 - 初始敏捷',
      ustr: '英雄 - 初始力量',
      uaen: '允许攻击模式',
      urq2: '需求 - 等级 3',
      urq1: '需求 - 等级 2',
      urqc: '需求 -使用等级数',
      uawt: '提示工具 -唤醒',
      utpr: '提示工具 -重生',
      upru: '称谓数量',
      uhot: '热键',
      upro: '称谓',
      ussi: '图标 - 计分屏',
      ureq: '需求',
      usei: '售出物品',
      ucam: '分类 - 战役',
      ides: '说明',
      ulfo: '循环淡出率',
      ulfi: '循环淡入率',
      umsl: '移动',
      ulev: '等级',
      uspa: '特殊效果',
      ufoo: '占用人口',
      ucpt: '动画 - 魔法施放点',
      ucbs: '动画 - 魔法施放回复',
      udea: '死亡类型',
      ushu: '阴影图像(单位)',
      ua1t: '攻击 1 - 攻击类型',
      ua1b: '攻击 1 - 基础伤害',
      ua1c: '攻击 1 - 攻击间隔',
      udp1: '攻击 1 - 动画伤害点',
      ubs1: '攻击 1 - 动画回复点',
      ua1s: '攻击 1 - 伤害骰子面数',
      ucs1: '攻击 1 - 武器声音',
      ua1w: '攻击 1 - 武器类型',
      ua1m: '攻击 1 - 投射物图像',
      umh1: '攻击 1 - 射弹自导允许',
      ua1r: '攻击 1 - 攻击范围',
      ua1g: '攻击 1 - 目标允许',
      ulpz: '射弹偏移 - Z',
      uacq: '主动攻击范围',
      urb1: '攻击 1 - 攻击范围缓冲',
      ua1z: '攻击 1 - 射弹速率',
      urac: '种族',
      uma1: '攻击 1 - 射弹弧度',
      ua1p: '攻击 1 - 范围影响目标',
      ua1q: '攻击 1 - 小伤害范围',
      ua1f: '攻击 1 - 全伤害范围',
      ua1h: '攻击 1 - 中伤害范围',
      uhrt: '生命回复类型',
      uhd1: '攻击 1 - 中伤害参数',
      uqd1: '攻击 1 - 小伤害参数',
      upri: '编队优先权',
      ufle: '可以逃跑',
      uimz: '射弹碰撞偏移 - Z',
      uaap: '要求动画名 - 附加动画',
      udtm: '死亡时间(秒)',
      uarm: '装甲类型',
      urun: '动画 - 跑步速度',
      uwal: '动画 - 行走速度',
      ubui: '可建造建筑',
      ua1d: '攻击 1 - 伤害骰子数量',
      ufor: '队形排列',
      utar: '作为目标类型',
      udef: '基础护甲',
      umvf: '最小高度',
      uslz: '选择圈高度',
      usma: '最大库存量',
      umpr: '魔法回复',
      ugol: '黄金消耗',
      umpm: '魔法最大值',
      ulpx: '射弹偏移 - X',
      ulpy: '射弹偏移 - Y',
      uamn: '最小攻击范围',
      uerd: '高度变化 - 采样范围',
      ucut: '魔法升级说明',
      ucun: '魔法升级名字',
      udaa: '默认主动技能',
      umpi: '魔法初始数量',
      ucua: '魔法升级图标',
      uver: '模型文件 - 版本',
      utcc: '队伍颜色 - 允许自定义',
      umxp: 'X轴最大旋转角度(弧度)',
      umxr: 'Y轴最大旋转角度(弧度)',
      utco: '队伍颜色',
      udep: '从属等价物',
      upra: '英雄 - 主要属性',
      umvr: '转身速度',
      umis: '最小速度',
      uspe: '分类 - 特殊',
      uani: '要求动画名',
      ulum: '木材消耗',
      usrg: '雇佣时间间隔',
      usst: '雇佣开始时间',
      uscb: '缩放投射物',
      uhos: '可作为中立敌对显示',
      usle: '允许睡眠',
      uhhd: '英雄 - 隐藏英雄死亡信息',
      udro: '可设置死亡掉落物品',
      upoi: '单位附加值',
      ucar: '运输尺寸',
      uhom: '隐藏小地图显示',
      ushr: '深水区有阴影',
      uble: '动画 - 混合时间(秒)',
      uprw: '动画 - 转向角度',
      uwu1: '攻击 1 - 显示UI',
      ushb: '阴影图像(建筑)',
      uubs: '建筑地面纹理',
      upat: '路径纹理',
      umas: '最大速度',
      udup: '防御升级奖励',
    },
  },
  APP_HEADER: {
    TITLE: '装备速查',
    ITEMS: '物品信息',
    HEROES: '英雄信息',
    BOSS: 'BOSS掉落',
    REP_CHAT: '聊天记录',
    ACTIVITY: '活动',
    SET_WAR3_PATH: '设置War3目录',
    OPEN_WAR3_PATH: '打开War3目录',
    SET_EXPORT_PATH: '设置导出目录',
    OPEN_EXPORT_PATH: '打开导出目录',
    RESET_PATH: '右击重置',
    RESET_CONFIRM: '重置确认',
    RESET_CONFIRM_CONTENT_WAR3_PATH: '确认重置War3目录吗',
    RESET_CONFIRM_CONTENT_EXPORT_PATH: '确认重置导出目录吗',
    ADD_TEAM: '新建分组',
    TEAM_NAME: '分组名称',
    SELCT_TEAM: '选择分组',
    SELECT_TEAM_NOTICE: '请先选择分组后再查看!',
    VIEW_TEAM: '查看分组',
    SELECT_SAVE_FILE: '选择存档',
    SELECT_SAVE_FILE_NOTICE: '请先选择存档后再查看!',
    VIEW_SAVE_HISTORIES: '查看存档',
    LISTEN_ON: '通知 【开启】录像截图保存',
    LISTEN_OFF: '通知 【关闭】录像截图保存',
    SCALE: '缩放',
    ABOUT: '关于速查',
    RELEACE_LINK: '更新地址',
    H5_LINK: '速查H5',
    QQ: '交流反馈群',
    PS: '打广告属于弟弟行为，无奈度娘疯狂吞链......',
  },
  COMMON_VIEW: {
    DROP_FROM: '获取方式(掉落)',
    BUILD_FROM: '获取方式(合成)',
    MAKE_TO: '可合成项',
    UNIT_ATTRS: '属性一览',
    BOSS_DROP: '掉落一览',
  },
  TARGET_PANEL: {
    ADD_TARGET: '添加目标',
    TARGET_NAME: '目标名称',
    CLEAR_CACHE: '清除缓存',
    TOGGLE: '查看/恢复',
    DELETE_TARGET: '删除目标',
    DELETE_TARGET_CONFIRM_CONTENT_PRE: '确认删除名为【',
    DELETE_TARGET_CONFIRM_CONTENT_END: '】的目标吗(考虑仔细哦)',
    SEARCH_PLACEHOLDER: '输入名称进行检索',
  },
  GOOD_VIEW: {
    OPERATION: '操作',
    SPLIT: '拆解',
    UPGRADE: '进阶',
    IMAGE: '图片',
    NAME: '名称',
    LEVEL: '等级',
    QUALITY: '品阶(明细)',
    LIMITS: '限定',
    EXCLUSIVES: '专属',
    OVERVIEW: '特性',
    CALC: '阶段/计算',
  },
  HERO_VIEW: {
    IMAGE: '图片',
    NAME: '职业名称',
    SKILL: '技能(点击切换专属装备)',
    EXCLUSIVE: '专属装备(点击切换技能)',
  },
  UNIT_VIEW: {
    IMAGE: '图片',
    NAME: 'BOSS名称',
    DROPS: '掉落',
    STAGE: '阶段',
  },
  ITEMS: {
    GOOD_TABLE: {
      HEADER: {
        IMAGE: '图片',
        NAME: '名称',
        LEVEL: '等级',
        QUALITY: '品阶(明细)',
        LIMITS: '限定',
        EXCLUSIVES: '专属',
        OVERVIEW: '特性',
        CALC: '阶段/计算',
      },
    },
    CALC_VIEW: {
      SAVE_NAME: '计算明细',
      NUM: '数量',
      COUNT: '总计',
      REQUIRE_COUNT: '需求量',
      REQUIRE_CHOOSE_COUNT: '合计需求',
      NECESSARY_ITEM: '必需项',
      UNNECESSARY_ITEM: '杂项',
      CHOOSE_ITEM: '可选项',
    },
  },
  // HERO_VIEW: {
  //   HERO_TABLE: {
  //     HEADER: {
  //       IMAGE: '图片',
  //       NAME: '职业名称',
  //       SKILL: '技能(点击切换专属装备)',
  //       EXCLUSIVE: '专属装备(点击切换技能)',
  //     },
  //   },
  // },
};

export default local;