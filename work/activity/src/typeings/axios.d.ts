declare namespace Ajax {

  // 请求接口数据
  export interface Response {

    /**
     * 状态码
     * @type { number }
     */
    code: number,

    /**
     * 数据
     * @type { any }
     */
    data: any,

    /**
     * 消息
     * @type { string }
     */
    message: string,

    /**
     * success
     * @type { boolean }
     */
    success: boolean
  }

}
