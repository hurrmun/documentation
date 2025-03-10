import * as React from "react"
import { createStore, StateMachineProvider } from "little-state-machine"
import formData from "./src/state/formData"
import setting from "./src/state/setting"

createStore(
  {
    formData,
    setting,
  },
  {
    storageType: typeof window !== "undefined" ? window.localStorage : {},
  }
)

export default ({ element }) => {
  return <StateMachineProvider>{element}</StateMachineProvider>
}
