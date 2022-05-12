//all imports 
import { useState } from 'react'
import { CsvToHtmlTable } from 'react-csv-to-table';
import React from 'react';
import { GrBladesVertical } from "react-icons/gr";
import { GrActions } from "react-icons/gr";
import { GrApps } from "react-icons/gr";
import { AiFillGithub ,AiFillFacebook,AiOutlineTwitter } from "react-icons/ai";
import { IoBugSharp } from "react-icons/io5";

import './Editor.css'
import Data from './Data.js'
const Editor = () => {
    
    var a=300;
    
    const [size, setsize] = useState(a)
    const [visi,setvisi] = useState("visible")
    const [data,setdata] =useState(Data[1])
    const [stl,setstl] =useState("inputcode")
    const [file,setfile] = useState("categories.csv")
    //this function is for removing or changing  size of file explorer in our window 
    function sizechange() {
        if (size) {
            setvisi("hidden");
            setsize(0);
        }
        else 
        {
            setsize(a);
            
            setvisi("visible")
        }
    }
    //this function is for chnaging style of code editor 
    function setstll() {
        if(stl=="inputcode") {
            setstl("inputcode2")
        }
        else {
            setstl("inputcode")
        }
    }
    //the below functions are for rendering different datas on choosing different file in file explorer , when backend done it can be made more dynamic and we can switch all this function to one function
     function file1() { setdata(Data[0]);
    setfile("Categories.csv")}
     function file2() { setdata(Data[1]);
    setfile("Customers.csv")}
     function file3() { setdata(Data[2]);
    setfile("Employees.csv")}
     function file4() { setdata(Data[4]);
    setfile("Orders.csv")}
     function file5() { setdata(Data[5]);
    setfile("Products.csv")}
     function file6() { setdata(Data[6]);
    setfile("Regions.csv")}
     function file7() { setdata(Data[7]);
    setfile("Shippers.csv")}
     function file8() { setdata(Data[8]);
    setfile("suppliers.csv")}
    //rendering the page 
  return (
  <div id='main'>
  {/* div LEFTONE is leftest div in winddow where all buttons with different functions are given */}
      <div id='leftone'>
            <button className='lbtn'  onClick={sizechange} id='plus' ><GrBladesVertical/></button>
            <button className='lbtn' onClick={setstll} id='minus'><GrActions/></button>
            <button className='lbtn' data-bs-toggle="modal" data-bs-target="#exampleModal3" > <IoBugSharp/></button>
            <a target="blank"  href="https://atlan.com/" ><button className='lbtn'><GrApps/></button></a>
            <a target="blank"  href="https://github.com/join/get-started" ><button className='lbtn'><AiFillGithub/></button></a>
            <a target="blank"  href="https://facebook.com" ><button className='lbtn'><AiFillFacebook/></button></a>
            <a target="blank"  href="https://twitter.com" ><button className='lbtn'><AiOutlineTwitter/></button></a>

      </div>

  {/* div LEFTTWO  is second div from left side and it is file explorer which will also help us in inserting and remove a particular file 
  from here you can choose a file and then can view its data or edit its data or remove that file  */}
      <div id='lefttwo' style={{width:size , visibility:visi}}>
          <h6>explorer</h6>
        


{/* this MODAL FOR BUG BUTTON present in LEFTONE div  */}
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Bugs</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        No bugs in your code 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

{/* insert button in file explorer for inserting file and starting work on it  */}
<button type="button" style={{marginRight:"0.5rem"}} class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Insert
</button>



{/* modal that will work on clicking above insert button  */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Insert File</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        insert your file from device <br></br> OR <br></br>
        directly drop file here 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save Changes</button>
      </div>
    </div>
  </div>
</div>
          

<button type="button" class="btn btn-secondary btn-sm">Remove</button>
{/* all files in file explorer select file for editing viewing or removing it  */}
<ul class="list-group">
   <button  className='filebtn' style={{border:"0px"}} onClick={file1} > <li class="list-group-item" style={{padding:"0.2rem" , fontFamily:"Georgia"}} aria-current="true">categories.csv</li></button>
  <button  className='filebtn' style={{border:"0px"}} onClick={file2} ><li class="list-group-item"style={{padding:"0.2rem" , fontFamily:"Georgia"}} >customers.csv</li></button>
  <button className='filebtn' style={{border:"0px"}} onClick={file3} ><li class="list-group-item"style={{padding:"0.2rem" , fontFamily:"Georgia"}} >employees.csv</li></button>
  <button className='filebtn' style={{border:"0px"}} onClick={file4} ><li class="list-group-item"style={{padding:"0.2rem" , fontFamily:"Georgia"}} >orders.csv</li></button>
  <button className='filebtn' style={{border:"0px"}} onClick={file5} ><li class="list-group-item"style={{padding:"0.2rem" , fontFamily:"Georgia"}} >products.csv</li></button>
  <button className='filebtn' style={{border:"0px"}} onClick={file6} ><li class="list-group-item"style={{padding:"0.2rem" , fontFamily:"Georgia"}} >regions.csv</li></button>
  <button className='filebtn' style={{border:"0px"}} onClick={file7} ><li class="list-group-item"style={{padding:"0.2rem" , fontFamily:"Georgia"}} >shippers.csv</li></button>
  <button className='filebtn' style={{border:"0px"}} onClick={file8} ><li class="list-group-item"style={{padding:"0.2rem" , fontFamily:"Georgia"}} >suppliers.csv</li></button>
</ul>
      </div>


{/* right div startedwhich contains code editor and view data part */}
      <div id='right'>
          {/* <div id='rightup'></div> */}
          {/* the below div is code edit part  */}
          <div id='rightmid'>
              <h6 className='ediname'>EDIT DATA of {file}</h6>

              <textarea className={stl} placeholder='write your code here' ></textarea>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  Results
</button>


{/* this modal is for result button once the code is done ,this will also allow us to send the result to particular gmail id  */}
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Results</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <CsvToHtmlTable
      data={Data[8]}
      csvDelimiter=","
      />
      </div>
      <div class="modal-footer">
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">SEND THIS RESULTS TO :</label>
            <input type="text" placeholder='xyz@gmail.com' class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" placeholder='hey, this query is performed on {file}' id="message-text"></textarea>
          </div>
        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send</button>
    </div>
     </div>
    </div>
  </div>
</div>
</div>

{/* the below div is for viewing data  */}
          <div id='rightdown'>
           <h6 className='ediname'>VIEW DATA of {file}</h6>

                  
         
        {/* csv to html is used to convert csv data to html table form  */}

          <CsvToHtmlTable
  data={data}
  csvDelimiter=","
/>



          </div>
      </div>
  </div>

  )
}

export default Editor