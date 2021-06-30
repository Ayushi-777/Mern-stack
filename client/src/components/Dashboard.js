import React,{useState,useEffect} from "react";
const DashBoard = () => {
  // const [user,setData]= useState([]);
  var user=null;
  const getData = async () => {
      try {
          const res = await fetch("http://localhost:5000/dashboard");
          const autualdata = await res.json();
          // console.log("autualdata",autualdata);
          // console.log(autualdata.courses[0]);

          // setData(autualdata.courses);
          user=autualdata.courses;
          // console.log("user",user);
      } catch (err) {
          console.log(err);
      }
  }

  useEffect(() => {
    getData();
  }, []);

 console.log("user",user);
  return (
    <div>
     <h1 className="heading">All Available Courses</h1>
     <div className="card">
       <div className="card-body">
       {/* <h3 className="card-title">{user.coursename}</h3>
       <p className="card-text">"{user.dcsp}"</p>
       <p className="card-text">Start date:{user.Sdate}</p>
      <p className="card-text">No of classes:{user.number}</p>
      <p className="card-text">Days of the week when the course will be taught:{user.weekno}</p> */}
    </div>
    </div>

  
    </div>
  );
};

export default DashBoard;
