
const robotMessages = {
  '1001': {
    message: '您好，我是快站机器人小安，我可以帮助您解决一些常见的问题，尝试问我一些问题吧。',
    prpmpts: [
      {
        message: '看看我都能解决哪些问题？',
        reply: 'prpmpts'
      }
    ]
  },
  '1002': {
    message: '系统监测到您还没有任何权限',
    prpmpts: [
      {
        message: '联系平台管理员给您添加权限',
        reply: '平台管理员：董仕涛（dongshitao）'
      },
      {

      }
    ]
  }
}

const temp = [
  '你能干些什么？||你能做些什么？||你能说些什么？',
  'tab组件怎么用？||表格组件怎么用？||弹框组件好难用呀！',
  '能否介绍一下快站？||这个平台怎么用呀？',
  '你们平台好难用呀',
  '我想要提个需求||我可以给你提个需求吗？',
  '页面发布失败',
  '我发现了个bug'
]

const app = new Vue({
  el: '#app',
  data: {
    // 0: close; 1: open
    status: 1,
    records: [],
    userMessage: ''
  },
  methods: {
    chatPanelShow () {
      this.status = 1
    },
    chatPanelHide () {
      this.status = 0
    },
    robotSpeak (message) {
      this.records.push({
        'who': 'robot',
        'message': message
      })
      this.scrollBottom()
    },
    userSpeak () {
      this.records.push({
        'who': 'user',
        'message': this.userMessage
      })
      this.userMessage = ''
      this.scrollBottom()
    },
    scrollBottom () {
      this.$nextTick(function() {
        this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight;
      })
    }
  }
})
