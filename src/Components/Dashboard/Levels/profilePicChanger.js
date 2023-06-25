import React, { useEffect, useState } from "react";
import style from "../dashboard.module.css";
import { Avatar, Button, Modal, notification } from "antd";
// import dp from "../../../Assets/profilePic.png";
import { UserOutlined, SmileOutlined } from '@ant-design/icons';
// import Avatars from "react-avatar-edit";
import storage from "../../../js/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { API_DOMAIN } from "../../../js/config";
// import {useCookies} from "react-cookie";

const ProfilePicChanger = (props) => {
    // console.log(props.data.profilePhoto);
    
    const [profileImage, setProfileImage] = useState("");
    //   const [cookie] = useCookies();
    // const [crop, setCrop] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [preview, setPreview] = useState(null)
    const [percent, setPercent] = useState(0);
    const [link, setLink] = useState("");
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCrop = (e) => {
        setPreview(e);
    }
    const handleOk = () => {
        // const formData = new FormData();      
        const storageRef = ref(storage, `/files/${profileImage.name}`)
        const uploadTask = uploadBytesResumable(storageRef, profileImage)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err.message),
            () => {
                // download url
                // localStorage.removeItem('image');
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setLink(url);
                    console.log(url);
                    localStorage.setItem('image', url);
                    openNotification();
                });
            }
            );
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = async (e) => {
        e.preventDefault();
        console.log(e.target.files);
        // setProfileImage(e.target.files[0])
        const file = e.target.files[0];
        if (file.size > 360000) {
            setIsModalOpen(false);
            alert("The file size is too large! ");
            setProfileImage(null);
        } else if (file && file.type.substring(0, 5) === "image") {
            setProfileImage(file);
        } else {
            setProfileImage(null);
        }
    }
    const image = localStorage.getItem('image');
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
            message: 'Uploading',
            description:
                `Profile picture uploading- ${percent}%`,
            icon: (
                <SmileOutlined
                style={{
                    color: '#108ee9',
                    }}
                />
            ),
        });
    };
    // console.log(image);
    // props.fun(image);

    return (
        <>
            {contextHolder}
            <div className={style.name}>
                <p>{props.data.name}</p>
                <p> {props.data.id} </p>
            </div>
            {!image ? (
                <Avatar className={style.profileImg} size={128} icon={<UserOutlined />} />
            ) : (
                <img loading="lazy" id="profilePicFromFirebase" src={image} className={style.profileImg} alt="profile-pic" />
            )}


            <Button type="primary" style={{ color: '#fff', backgroundColor: 'transparent', border: '1px solid' }} onClick={showModal}>
                Change profile picture
            </Button>
            <Modal title="Upload Picture" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/* <Avatars className={style.profileImg} width={300} height={300} onCrop={handleCrop} name="file" type="file" /> */}
                <input type="file" accept="/image/*" name="file" onChange={handleChange} />
            </Modal>
        </>
    )
}

export default ProfilePicChanger;