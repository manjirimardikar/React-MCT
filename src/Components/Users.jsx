import React, { useEffect, useState } from 'react'
import './Users.css'
import { useSelector } from "react-redux";


export const Users = () => {
    const [gender, setGender] = useState("all")
    const data = useSelector((state) => state);
    console.log(data.usersData)
    const [userdata, setUserdata] = useState([...data.usersData])

    useEffect(() => {

    }, [gender])

    return (
        <div className='users'>
            <div className="user-maincontainer">
                <h1>Users Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti ducimus eum omnis cum deleniti, eaque rem, illum vitae ratione soluta nemo inventore. Rem, ullam laboriosam. Eum obcaecati enim aliquam quod saepe quidem vitae quibusdam impedit libero recusandae, placeat minus iste qui explicabo error tenetur assumenda. Vel mollitia cum soluta iusto quam dignissimos labore facere quo magnam nisi, quae, explicabo quaerat harum eaque incidunt accusamus numquam excepturi libero beatae molestiae? Deserunt numquam ducimus distinctio molestiae cumque quam in quas minima omnis, aperiam expedita temporibus, ut laborum dolore modi vitae animi quisquam nisi eligendi. Dolore, alias nihil? Magni exercitationem sunt odio.</p>

                <div className="radio-btn">
                    <div className="radio-container">
                        <input value="all" checked={gender === "all"} type="radio" onChange={(e) => {
                            setGender(e.target.value)

                        }} />
                        <label> ALL</label>
                    </div>

                    <div className="radio-container">
                        <input value="male" type="radio" checked={gender === "male"} onChange={(e) => {
                            setGender(e.target.value)



                        }} />
                        <label> Male</label>
                    </div>
                    <div className="radio-container">
                        <input value="female" type="radio" checked={gender === "female"} onChange={(e) => {
                            setGender(e.target.value)


                        }} />
                        <label> Female</label>
                    </div>

                </div>

                <div className="userconatiner">
                    <div className="userheader">
                        <div className="image-con">
                            <h4>IMAGE</h4>

                        </div>
                        <div className="name-con">
                            <h4>NAME</h4>

                        </div>
                        <div className="email-con">
                            <h4>EMAIL</h4>

                        </div>
                        <div className="gender-con">
                            <h4>GENDER</h4>

                        </div>

                    </div>
                    {userdata &&
							(gender !== "all"
								? userdata
										.filter((ele) => ele.gender === gender)
										.map((ele) => {
											return (
                                                <div className='usermaincontainer'>
                                                <div className="userheader userdata">
                                                <div className="image-con userdatacontent">
                                                    <img src={ele && ele.picture.large} alt="" />
        
                                                </div>
                                                <div className="name-con userdatacontent">
                                                    <p>{ele && ele.name.first}</p>
                                                </div>
                                                <div className="email-con userdatacontent">
                                                    <p>{ele && ele.email}</p>
        
                                                </div>
                                                <div className="gender-con userdatacontent">
                                                    <p>{ele && ele.gender}</p>
        
        
        
                                                </div>
                                            </div>
                                            </div>
											);
										})
								: userdata.map((ele) => {
										return (
                                            <div className='usermaincontainer'>
                                            <div className="userheader userdata">
                                            <div className="image-con userdatacontent">
                                                <img src={ele && ele.picture.large} alt="" />
    
                                            </div>
                                            <div className="name-con userdatacontent">
                                                <p>{ele && ele.name.first}</p>
    
                                            </div>
                                            <div className="email-con userdatacontent">
                                                <p>{ele && ele.email}</p>
    
                                            </div>
                                            <div className="gender-con userdatacontent">
                                                <p>{ele && ele.gender}</p>
    
    
    
                                            </div>
                                        </div>
                                        </div>
										);
								  }))}
                            

                </div>
            </div>

        </div>
    )
}