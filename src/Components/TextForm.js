import React,{useState} from 'react'

export default function TextForm(props){
  const[text,setText]=useState('Enter text here: ');
  const handleClick=()=>{
    // console.log("uppercase was clicked ");
    let newt=text.toUpperCase();
    setText(newt);
    props.showAlert('converted to uppercase','primary');
  }
  const OnChange=(event)=>{
    // console.log("you are trying to change text bruhhh");
    setText(event.target.value);
  }
  const eraseIt=()=>{
    setText("");
    props.showAlert('text erased','primary');
  }
  const lowit=()=>{
    let hold=text.toLowerCase();
    setText(hold);
    props.showAlert('converted to lowercase','primary');
  }
  const Copyit=()=>{
    var text=document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('textcopied to clipboard','primary');
  }
  const spaceremover=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert('extraspaces removed','primary');
  }
  const loremize=()=>{
      setText('Lorem ipsum dolor sit amet, con    sec   tetur adip  isicing elit. Quasi fugiat aliqu     id quo.');
      props.showAlert('loremized','secondary'); 
  }
  const nofw=(word)=>{
    if(word==='')return 0;
    let newtext=text.split(/[ ]+/);
    newtext=newtext.join(" ");
    if(newtext.slice(-1)===' '){
      let cnt=0;
      for(let i=newtext.length-1;i>=0 && newtext[i]===' ';i--){
        cnt++;
        console.log(i);
      }
      return newtext.split(' ').length-cnt;
    };
    return newtext.split(' ').length;
    return 1;
  }
  return (
    <>
    <div className={`container-my3 style={}`}>
    <div className="mb-3">
    <h1 className={`text-${(props.mode==='light')?'dark':'light'}`}>{props.heading} </h1>
    <label htmlFor="mybox" className="form-label"></label>
    <textarea className={`form-control bg-${props.mode} text-${(props.mode==='light')?'dark':'light'}`} value={text} onChange={OnChange}id="mybox" rows="4"></textarea>
    <br></br>
    <button className="btn btn-primary mx-2" onClick={handleClick}> Convert to uppercase </button>
    <button className="btn btn-primary mx-2" onClick={lowit}> Convert to lowercase </button>
    <button className="btn btn-primary mx-2" onClick={eraseIt}> Erase </button>
    <button className="btn btn-primary mx-2" onClick={Copyit}> Copy </button>
    <button className="btn btn-primary mx-2" onClick={spaceremover}> RemoveExtra Space </button>
    <button className="btn btn-primary mx-2" onClick={loremize}> Lorem32 </button>



    </div>
    </div>

    <div className={`text-${(props.mode==='light')?'dark':'light'} container=my-2`}>
      <h2>Your Text Summary: </h2>
      <p> No. of words: {nofw(text)}</p>
      <p> No. of char: {text.length}</p>
      <p> Time to Read: {text.split(" ").length*0.008} Minutes</p>
      <p> {(text.length>0)?text:'Enter Something to preview'} </p>

    </div>
    </>
  )
}
