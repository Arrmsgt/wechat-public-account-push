/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx14799fd2761bfa0e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9fb8564a81201deb027c73290c7d6a63',

  PROVINCE: '山西',
  CITY: '吕梁',

  USERS: [
    {
      // 想要发送的人的名字
      name: '崽崽',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBy6a5kWBO7UjjR9N6f-dEvJDRmQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '9uC2g0TnbWvyHw1O-lOJAjRZO1gaKXdMEG6IvOK81fY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝栋', year: '1998', date: '05-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '宁', year: '1996', date: '12-12',
        },
        {
          type: '节日', name: '新年', year: '2023', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-02-10' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '37w-8_W13Hz_JVK3hn3bI78nCymJ9feMjf9Yh5Tx5jo',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBy6a5gGt7ccoFlD8WeF_UbWkZd4',
    }
  ],

}

module.exports = USER_CONFIG

