import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [count, setCount] = useState(0);
  const centralCities = [
      "Hà Nội",
      "Đà Nẵng",
      "Sài Gòn"
  ];

    const h1 = React.createElement(
        'h1',
        {style: {color: "aqua"}},
        "Danh sách thành phố trực thuộc trung ương của Việt Nam"
    );

    const li1 = React.createElement(
        'li',
        {className: "list-group-item"},
        "Hà Nội"
    );

    const li2 = React.createElement(
        'li',
        {className: "list-group-item"},
        "Đà Nẵng"
    );

    const li3 = React.createElement(
        'li',
        {className: "list-group-item"},
        "Hải Phòng"
    );

    const li4 = React.createElement(
        'li',
        {className: "list-group-item"},
        "Thành Phố Hồ Chí Minh",
    );

    const li5 = React.createElement(
        'li',
        {className: "list-group-item"},
        "Cần Thơ"
    );

    const ul = React.createElement(
        'ul',
        {className: "list-group"},
        [li1, li2, li3, li4, li5]
    )

    const div = React.createElement(
        'div',
        null,
        [h1, ul]
    )

  return (
    div
  )
}

export default App
