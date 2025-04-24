import React, { useEffect, useState } from "react";
import { getUserApi } from "../services/allApi";
import Header from "./Header";



function Leaderboard () {
    const [users, setUsers]= useState([])

    const getUsers = async()=>{
        const result = await getUserApi() 
        if(result.status >= 200 && result.status < 300){
            const sorted = result.data.sort((a,b)=>b.xp-a.xp)
            setUsers(sorted)
            //console.log(sorted);   
        }
    }

    useEffect(()=>{
        getUsers()
    },[])
    
  return (
    <>
    <Header/>
      <div className="container my-5">
        <h2 className="text-center mb-4">🏆 HabitQuest Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-hover table-bordered rounded shadow">
            <thead className="table-dark">
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Level</th>
                <th>Total XP</th>
              </tr>
            </thead>
            <tbody>
             {users.length>=0 ?
             users.map((item,index)=>(
  <tr>
          <td>#{index+1}</td>
          <td>{item.name}</td>
          <td>{Math.floor(item.xp/100)} 🔥</td>
          <td>{item.xp}</td>
          </tr> 
             ))
          :
          <tr>
              {/* if no users */}
          <td colSpan="4" className="text-center">
            No logs available
          </td>
        </tr>
          }
          
          
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;