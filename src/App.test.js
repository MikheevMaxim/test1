import React from "react"
import {configure, shallow} from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import App from "./components/App/App"
import Popup from "./components/PopUp/Popup"

configure({
  adapter: new Adapter()
})

describe("<App />", () => {
  it("Should render 0 popup at the start", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Popup)).toHaveLength(0)
  })
})
