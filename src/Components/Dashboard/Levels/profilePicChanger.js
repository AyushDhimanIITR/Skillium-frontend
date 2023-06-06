import React, { useState } from "react";
import style from "../dashboard.module.css";
import { Avatar, Button, Modal } from "antd";
import dp from "../../../Assets/profilePic.png";
import { UserOutlined } from '@ant-design/icons';

const ProfilePicChanger = () => {

    const [profileImage, setProfileImage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        // const formData = new FormData();        
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleChange = (e) => {
        console.log(e.target.files);
        setProfileImage(e.target.files[0])
    }

    return (
        <>
            <div className={style.name}>
                <p>Moksh Singhal</p>
            </div>
            <Avatar className={style.profileImg} size={128} icon={<UserOutlined />} />
            <Button type="primary" style={{color:'#fff', backgroundColor:'transparent', border:'1px solid'}} onClick={showModal}>
                Change profile picture
            </Button>
            <Modal title="Upload Picture" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input type="file" name="file" onChange={handleChange} />  
            </Modal>
            {/* <img className={style.profileImg} src={dp} alt="profile-pic" /> */}
        </>
    )
}

export default ProfilePicChanger;