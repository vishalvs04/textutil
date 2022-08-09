import React, { useState } from 'react'
import Proptypes from 'prop-types'

export default function TextForm(props) {

  const touppercase = () => {
    // console.log('uppercase was clicked');
    if (text.length >= 1 && text[0] !== ' ' && text[0] !== ''){
      setcontext(text.toUpperCase())
      props.showAlert('Converted to uppercase', 'success')

    }else{

      props.showAlert('Cannot convert to uppercase, type some text first', 'Warning')
    }
  }
  const handleonchange = (event) => {
    // console.log('onchange');
    setText(event.target.value)
    // console.log(typeof text)
  }
  const tocapitalize = (e) => {
    return e[0].toUpperCase() + e.slice(1, e.length)
  }
  const tolowercase = (event) => {
    if (text.length >= 1 && text[0] !== ' ' && text[0] !== ''){
      setlowText(text.toLowerCase())
      props.showAlert('Converted to Lowercase', 'success')
      
    }else{
      props.showAlert('Cannot convert to lowercase, type some text first', 'warning')

    }
  }
  const sentencecase = (text) => {
    return text[0].toUpperCase() + text.slice(1, text.length)
  }
  const tosentencecase = () => {
    if (text.length >= 1 && text[0] !== ' ' && text[0] !== ''){
      setsenttext(sentencecase(text))
      props.showAlert('Converted to SentenceCase', 'success')
      
    }else{
      
      props.showAlert('Cannot convert to sentencecase, type some text first', 'warning')
    }
  }

  const totitlecase = () => {
    let arr = text.split(' ');
    if (arr.length >= 1 && arr[0] !== ' ' && arr[0] !== '') {
      let new_arr = []
      for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        ele = tocapitalize(ele)
        new_arr.push(ele)
      }
      setuptext(new_arr.join(" ").toString())
      props.showAlert('Converted to TitleCase', 'success')
    } else {
      props.showAlert('Cannot convert to titlecase, type some text to convert first', 'warning')

    }
  }
  const copytext = () => {
    if (text.length >= 1 && text[0] !== ' ' && text[0] !== ''){
      let textcont=document.getElementById('text_area')
      //select the text content inside the textarea
      textcont.select()
      //setting selection range for the number of texts to be selected
      textcont.setSelectionRange(0,9999)
      /* Copy the text inside the text field */
      navigator.clipboard.writeText(textcont.value);
      textcont.deselect()
      
      /* Alert the copied text */
      props.showAlert(`Copied text : ${textcont.value}`, 'success')
    }else{
      props.showAlert(`Cannot copy text to clipboard, type some text first`, 'warning')
      
    }
  }

  const clearText = () => {
    if (text.length >= 1 && text[0] !== ' ' && text[0] !== ''){

      let clearedText = ''
      setText(clearedText)
      setcontext(clearedText)
      setlowText(clearedText)
      setuptext(clearedText)
      setsenttext(clearedText)
      props.showAlert(`Text Cleared`, 'success')
    }else{

      props.showAlert(`Text Box already Empty`, 'Warning')
    }
  }
  const [context, setcontext] = useState()
  const [uptext, setuptext] = useState()
  const [text, setText] = useState('');
  const [lowtext, setlowText] = useState();
  const [senttext, setsenttext] = useState();
  // const [cotext, setcopytext] = useState();
  return (

    <div className="container my-3 mx-6">

      <h1>{props.heading}</h1>
      <div className="input-group">
        <textarea className="form-control" rows="3" placeholder='Enter a text here' id="text_area" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'hwb(218deg 2% 69%)', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleonchange} />
      </div><br />
      <button className="btn btn-primary mx-2 my-1" onClick={touppercase}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={tolowercase}>Convert To lowercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={totitlecase}>Convert To TitleCase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={tosentencecase}>Convert To SentenceCase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={copytext}>Copy To Clipboard</button>
      <button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Clipboard</button>
      <hr />
      <span><b>Number of characters</b> : {text.length}</span><br /><hr />
      <span><b>Number of Words</b> : {text.split(" ").length}</span><br /><hr />
      <h3>Preview:</h3>
      <p>{text}</p>
      <hr />
      <span><b>Uppercase</b> : {context}</span><br /><hr />
      <span><b>Lowercase</b> : {lowtext}</span><br /><hr />
      <span><b>Titlecase : </b>{uptext}</span><hr />
      <span><b>Sentence Case : </b>{senttext}</span><hr />
      
    </div>

  )
}

TextForm.propTypes = {
  heading: Proptypes.string.isRequired,
}

TextForm.defaultProps = {
  heading: '{Heading Here}'
}