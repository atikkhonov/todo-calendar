// This variable is needed to work with antd. In Form.Input

import moment, { Moment } from "moment";

export const rules = {
  required: (message: string = "Required field !") => ({
    required: true, 
    message
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve()
      } else {
        return Promise.reject(new Error(message))
      }
    }
  })
}