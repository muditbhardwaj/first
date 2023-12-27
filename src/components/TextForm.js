import React, {useState} from 'react'
export default function TextForm(props) {
    const hangleToUpper = () => {
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert('Converted to uppercase','success');
    }
    const hangleToLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const hangleToClear = () => {
        let newText = '';
        setText(newText);
    }
    const hangleToCapital = () => {
        let newText = text.toLowerCase().split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        setText(newText);
    }
    const hangleToDownload = () =>{
        const file = new Blob([text],{type: 'text/plain'});
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "file.txt";
        link.click();

        // clean up URL.createObjectURL
        setTimeout(() => {
            URL.revokeObjectURL(link.href);
        },100);
    }
    const handleOnChange = (evt) => {
        setText(evt.target.value);
    }
    const hangleToExtraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    return(
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" value={text}></textarea>
                <button className='btn btn-primary mt-3 mx-2' onClick={hangleToUpper}>Convert to Uppercase</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={hangleToLower}>Convert to Lowercase</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={hangleToClear}>Clear</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={hangleToCapital}>Convert to Capitalized</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={hangleToDownload}>Download Text</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={hangleToExtraspace}>Remove Space</button>
            </div>
        </div>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2 className='my-5'>your Text Summary</h2>
            <p>{text.split(' ').length - 1} words and {text.length} characters</p>
            <p>{(text.split(' ').length - 1) * 0.008 } Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:'No Preview'}</p>
        </div>
        </>
    )
}