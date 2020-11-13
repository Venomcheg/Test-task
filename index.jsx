// import * as $ from 'jquery'
// import Post from '@models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
// import WebpackLogo from '@/assets/webpack-logo.png'
import React from 'react'
import ReactDOM from 'react-dom'
import './babel'
import App from './App.jsx'
import './styles/scss.scss'

// const post = new Post('Webpack Post Title', WebpackLogo)
// $('pre').addClass('code').html(post.toString())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)



// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)
